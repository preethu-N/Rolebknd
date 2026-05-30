from django.db import models

class User(models.Model):
    username = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=100)

    ROLE_CHOICES = (
        ("admin", "Admin"),
        ("team1", "Team1"),
        ("team2", "Team2"),
    )

    role = models.CharField(max_length=20, choices=ROLE_CHOICES)

    def __str__(self):
        return self.username