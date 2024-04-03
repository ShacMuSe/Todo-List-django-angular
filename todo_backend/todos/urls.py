from django.urls import path
from .views import TodoItemListCreate

urlpatterns = [
    path('', TodoItemListCreate.as_view()),
    path('delete/<int:pk>/', TodoItemListCreate.as_view()),
]
