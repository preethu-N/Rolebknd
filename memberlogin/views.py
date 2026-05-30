from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Member

@csrf_exempt
def login_view(request):

    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        print(f"[DEBUG MemberLogin] Attempting login for username='{username}', password='{password}'")

        user = Member.objects.filter(
            username=username,
            password=password
        ).first()

        if user:
            print(f"[DEBUG MemberLogin] Login SUCCESS for '{username}', role='{user.role}'")
            return JsonResponse({
                "status": "success",
                "role": user.role
            })

        print(f"[DEBUG MemberLogin] Login FAILED for '{username}' (no matching user found)")
        return JsonResponse({
            "status": "failed"
        })

    # ❗ IMPORTANT: always return something
    return JsonResponse({
        "status": "error",
        "message": "Only POST allowed"
    })