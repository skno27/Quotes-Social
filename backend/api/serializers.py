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
        fields = ["id", "color", "body", "author", "date", "uploaded_at", "profile"]
        extra_kwargs = {
            "profile": {"read_only": True},
            "id": {"read_only": True}
            }

    def create(self, validated_data):
        # Get the authenticated user and set it as the profile
        profile = self.context['request'].user
        validated_data['profile'] = profile

        if 'body' not in validated_data:
            raise serializers.ValidationError('Body is Required')
        return Quote.objects.create(**validated_data)

    def delete(self, instance):
        instance.delete()