from django.urls import path
from .views import team_login

urlpatterns = [
    path("api/team-login/", team_login),
]