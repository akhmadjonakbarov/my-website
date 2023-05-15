from django.urls import path
from api.views import experiences_views

urlpatterns = [
    path('', experiences_views.ExperienceListView.as_view())
]
