from rest_framework import permissions, viewsets, mixins
from rest_framework.generics import CreateAPIView
from rest_framework.views import APIView

from .serializers import GetUserProfileSerializer, GetUserPublickSerializer, UserFollowViewSerializer
from .models import User, UserFollowing


class UserProfileView(viewsets.ModelViewSet):
    serializer_class = GetUserProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return User.objects.filter(id=self.request.user.id)


class UserPublicView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = GetUserPublickSerializer
    permission_classes = [permissions.AllowAny]


class UserFollowView(CreateAPIView):
    queryset = UserFollowing.objects.all()
    serializer_class = UserFollowViewSerializer
    permission_classes = [permissions.AllowAny]



