from rest_framework import serializers
from teamlogin.models import TeamLeader
from memberlogin.models import Member
from .models import Task


class TeamLeaderSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamLeader
        fields = '__all__'


class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = '__all__'


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'