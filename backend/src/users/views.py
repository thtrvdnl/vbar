from rest_framework import permissions, viewsets
from .serializers import GetUserProfileSerializer, GetUserPublickSerializer
from .models import User


class UserProfileView(viewsets.ModelViewSet):
    """ User profile output. """
    serializer_class = GetUserProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return User.objects.filter(id=self.request.user.id)


class UserPublicView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = GetUserPublickSerializer
    permission_classes = [permissions.AllowAny]

