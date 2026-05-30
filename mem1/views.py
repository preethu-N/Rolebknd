from django.http import JsonResponse
from .models import Member

def member_login(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")

        user = Member.objects.filter(
            username=username,
            password=password
        ).first()

        if user:
            return JsonResponse({
                "status": "success",
                "role": "member",
                "username": user.username
            })

        return JsonResponse({
            "status": "failed",
            "message": "Invalid credentials"
        })