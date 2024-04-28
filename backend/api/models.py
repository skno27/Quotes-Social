from django.db import models
from django.contrib.auth.models import User

class Quote(models.Model):
    profile = models.ForeignKey(User, on_delete=models.CASCADE, related_name="quotes")
    color = models.CharField(max_length=20, default="Blue")
    body = models.TextField(null=False, default="This field is missing...")
    author = models.CharField(max_length=100, default="Unknown")
    date = models.DateField(blank=True, null=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.body}, {self.author}"

class Account(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    gender = models.CharField(
        max_length=6,
        choices=[('MALE', 'MALE'), ('FEMALE', 'FEMALE')]
    )

    def __str__(self):
        return f"{self.user.username}, {self.quotes.count()} Quotes"
