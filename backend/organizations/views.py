# iam/organizations/views.py
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.utils import timezone
from .models import Organization, Membership
from .serializers import OrganizationSerializer

class CreateOrganizationView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = OrganizationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        org = serializer.save(owner=request.user)

        Membership.objects.create(
            user=request.user,
            organization=org,
            is_owner=True,
            status=Membership.Status.ACTIVE,
            joined_at=timezone.now()
        )

        return Response(
            OrganizationSerializer(org).data,
            status=201
        )
