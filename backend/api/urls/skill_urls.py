from django.urls import path
from api.views import skill_views

urlpatterns = [
    path('', skill_views.SkillListView.as_view())
]
