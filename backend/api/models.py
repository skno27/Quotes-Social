from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Quote(models.Model):
    profile = models.ForeignKey(User, on_delete=models.CASCADE, related_name="quotes")
    color = models.CharField(max_length=50)
    body = (models.TextField(),)
    author = (models.CharField(),)
    date = models.DateField(blank=True, null=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.author}, {self.body}"
