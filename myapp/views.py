from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from teamlogin.models import TeamLeader
from memberlogin.models import Member
from .models import Task
from .serializers import TeamLeaderSerializer, MemberSerializer, TaskSerializer


class TeamLeaderViewSet(viewsets.ModelViewSet):
    queryset = TeamLeader.objects.all()
    serializer_class = TeamLeaderSerializer


class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer