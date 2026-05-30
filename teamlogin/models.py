from django.db import models

class TeamLeader(models.Model):
    ROLE_CHOICES = (
        ("team1", "Team1"),
        ("team2", "Team2"),
        ("team3", "Team3"),
    )

    username = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=100)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)
    name = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.username