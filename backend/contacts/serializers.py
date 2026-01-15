from rest_framework import serializers
from .models import PartnershipLead

class PartnershipSerializer(serializers.ModelSerializer):
    class Meta:
        model = PartnershipLead
        fields = '__all__'