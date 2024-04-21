from django.db import models
from django.contrib.auth.models import User

# validation for custom date format

from datetime import datetime
from django.core.exceptions import ValidationError

# from django.utils.dateparse import parse_date

# from django.core.validators import RegexValidator
# date_validator = RegexValidator(
#     regex = r'^\d{2}-\d{2}-\d{4}$'
# )

# def validate_date(value):
#     try:
#         datetime.strptime(value, "%m-%d-%Y")
#     except ValueError:
#         raise ValidationError("Invalid date format. Use MM-DD-YYYY format.")


class Quote(models.Model):
    profile = models.ForeignKey(User, on_delete=models.CASCADE, related_name="quotes")
    color = models.CharField(max_length=20, default="Blue")
    body = models.TextField(null=False, default="This field is missing...")
    author = models.CharField(max_length = 100, default="Unknown")
    date = models.DateField(blank=True, null=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.author}, {self.body}"
