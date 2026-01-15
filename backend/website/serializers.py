from rest_framework import serializers
from .models import TeamMember

class TeamMemberSerializer(serializers.ModelSerializer):
    # This ensures the full http://127.0.0.1:8000/media/ path is sent
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = TeamMember
        fields = ['id', 'full_name', 'role', 'bio', 'image_url', 'linkedin_url', 'github_url', 'twitter_url']

    def get_image_url(self, obj):
        if obj.image:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.image.url)
            return obj.image.url
        return None