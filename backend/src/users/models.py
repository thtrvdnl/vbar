from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    """ Custom user - describes user profile."""
    GENDER = (('male', 'male'),
              ('female', 'female'),
              ('machine', 'machine'))
    email = models.EmailField(_('email address'), unique=True)
    middle_name = models.CharField(max_length=50, blank=False, null=True)
    last_join = models.DateField(null=True)
    phone = models.CharField(max_length=14, null=True)
    avatar = models.ImageField(upload_to='user/avatar', blank=True)
    birth_day = models.DateField(blank=True, null=True)
    gender = models.CharField(max_length=7, choices=GENDER, default='machine')
    about = models.CharField(max_length=500, blank=True)
    interesting = models.CharField(max_length=350, blank=True)
    beer_grade = models.CharField(max_length=350, blank=True)
    topics_communication = models.CharField(max_length=350, blank=True)
    vk = models.CharField(max_length=350, blank=True, null=True)


class UserFollowing(models.Model):
    """ The attitude of users to each other. """
    CHOICES = (('like', 'Like'), ('dislike', 'Dislike'), ('locked', 'Locked'))
    user = models.ForeignKey('User', on_delete=models.CASCADE, related_name='user')
    subscribed = models.ForeignKey('User', on_delete=models.CASCADE, related_name='subscribed')
    created = models.DateField(auto_now_add=True)
    rating = models.CharField(max_length=7, choices=CHOICES, null=True)

    class Meta:
        ordering = ('-created',)

    def __str__(self):
        return f'{self.subscribed} follows {self.user}'

