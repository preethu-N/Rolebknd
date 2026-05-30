from django.urls import path
from .views import login_view

urlpatterns = [
    path("api/member-login/", login_view),
]