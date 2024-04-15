from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, QuoteSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Quote


class QuoteListCreate(generics.ListCreateAPIView):
    serializer_class = QuoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        profile = self.request.user  # get the user
        return Quote.objects.filter(user=profile)  # get the quotes from that user

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(profile=self.request.user)
        else:
            print(serializer.errors)


class QuoteDelete(generics.DestroyAPIView):
    serializer_class = QuoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        profile = self.request.user  # get the user
        return Quote.objects.filter(user=profile)  # get the quotes from that user


# Create your views here.
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [
        AllowAny
    ]  # allow unauthenticated users to access this view for signing up
