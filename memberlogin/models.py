from django.db import models

# Create your models here.
from django.db import models

class Member(models.Model):
    ROLE_CHOICES = (
        ("admin", "Admin"),
        ("team1", "Team1"),
        ("team2", "Team2"),
        ("team3", "Team3"),
        ("mem", "Mem"),
        ("mem2", "Mem2"),
        ("mem3", "Mem3"),
        ("member", "Member"),
    )

    username = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=100)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)
    name = models.CharField(max_length=100, blank=True, null=True)
    team = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.username