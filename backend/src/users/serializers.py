from rest_framework import serializers
from .models import User, UserFollowing


class GetUserProfileSerializer(serializers.ModelSerializer):
    """ Profile user output. """

    class Meta:
        model = User
        exclude = (
            'password',
            'is_active',
            'is_staff',
            'is_superuser',
            'user_permissions',
            'groups'
        )


class GetUserPublickSerializer(serializers.ModelSerializer):
    """ Public user output. """

    class Meta:
        model = User
        fields = (
            'id',
            'pk',
            'username',
            'first_name',
            'last_name',
            'avatar'
        )


class UserFollowViewSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserFollowing
        exclude = ('created', )
