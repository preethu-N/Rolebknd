from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TeamLeaderViewSet, MemberViewSet, TaskViewSet

router = DefaultRouter()
router.register(r'team-leaders', TeamLeaderViewSet)
router.register(r'members', MemberViewSet)
router.register(r'tasks', TaskViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]