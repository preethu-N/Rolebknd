from django.urls import path
from .views import member_login

urlpatterns = [
    path("api/member-login/", member_login),
]