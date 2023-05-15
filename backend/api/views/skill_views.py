from rest_framework.generics import GenericAPIView
from api.serializers import SkillSerializer, Skill
from rest_framework.response import Response


class SkillListView(GenericAPIView):
    serializer_class = SkillSerializer
    queryset = Skill.objects.all()

    def get(self, request):
        skills = self.queryset.all()
        serializer = SkillSerializer(skills, many=True)
        return Response(serializer.data)
