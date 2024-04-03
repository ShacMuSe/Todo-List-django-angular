from rest_framework import generics, status
from rest_framework.response import Response
from .models import TodoItem
from .serializers import TodoItemSerializer

class TodoItemListCreate(generics.ListCreateAPIView):
    queryset = TodoItem.objects.all()
    serializer_class = TodoItemSerializer

    def delete(self, request, *args, **kwargs):
        try:
            todo_item = self.get_object()
            todo_item.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)
