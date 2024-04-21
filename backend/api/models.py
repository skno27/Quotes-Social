from django.db import models
from django.contrib.auth.models import User

# validation for custom date format

from datetime import datetime
from django.core.exceptions import ValidationError

# from django.utils.dateparse import parse_date


def valiDate(value):
    try:
        # Parse the date string
        parsed_date = datetime.strptime(value, "%m-%d-%Y")
        if parsed_date is None:
            raise ValidationError("Date has wrong format. Use MM-DD-YYYY format.")
    except ValueError:
        raise ValidationError("Invalid date format. Use MM-DD-YYYY format.")


class Quote(models.Model):
    profile = models.ForeignKey(User, on_delete=models.CASCADE, related_name="quotes")
    color = models.CharField(max_length=20)
    body = (models.TextField(),)
    author = (models.CharField(),)
    date = models.CharField(validators=[valiDate], max_length=12, blank=True, null=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.author}, {self.body}"
