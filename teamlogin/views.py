from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import TeamLeader

@csrf_exempt
def team_login(request):

    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")

        user = TeamLeader.objects.filter(
            username=username,
            password=password
        ).first()

        if user:
            return JsonResponse({
                "status": "success",
                "role": user.role
            })

        return JsonResponse({
            "status": "failed"
        })

    # ❗ IMPORTANT: handle GET also
    return JsonResponse({
        "status": "error",
        "message": "Only POST allowed"
    })