from rest_framework.generics import GenericAPIView
from api.serializers import ExperienceSerializer, Experience
from rest_framework.response import Response


class ExperienceListView(GenericAPIView):
    serializer_class = ExperienceSerializer
    queryset = Experience.objects.all()

    def get(self, request):
        experience = self.queryset.all()
        serializer = self.get_serializer(experience, many=True)
        return Response(serializer.data)
