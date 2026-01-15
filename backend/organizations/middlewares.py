from django.core.exceptions import PermissionDenied
from .models import Membership

class OrganizationContextMiddleware:
    def __call__(self, request):
        if request.user.is_authenticated:
            org_id = request.headers.get("X-ORG-ID")
            request.org = Membership.objects.filter(
                user=request.user,
                organization_id=org_id,
                is_active=True
            ).first()

            if not request.org:
                raise PermissionDenied("Organization access required")

        return self.get_response(request)
