from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Member

@csrf_exempt
def login_view(request):

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
                "role": user.role
            })

        return JsonResponse({
            "status": "failed"
        })

    # ❗ IMPORTANT: always return something
    return JsonResponse({
        "status": "error",
        "message": "Only POST allowed"
    })