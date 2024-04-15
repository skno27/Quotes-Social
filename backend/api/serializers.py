from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Quote

# django already uses an ORM :) im used to prisma


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}  # dont return passwords!!

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class QuoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quote
        fields = ["id", "color", "body", "author", "date", "uploaded_at"]
        extra_kwargs = {"profile": {"read_only": True}}