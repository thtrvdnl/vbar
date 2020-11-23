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

"""
class Friend(models.Model):
    user_from = models.ForeignKey('User', on_delete=models.CASCADE)
    user_to = models.ForeignKey('User', on_delete=models.CASCADE)
    created = models.DateField(auto_now_add=True, db_index=True)

    class Meta:
        ordering = ('-created',)

    def __str__(self):
        return f'{self.user_from} follows {self.user_to}'
"""
