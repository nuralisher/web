from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posts')
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=150)
    body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.title} by {self.author}"


class BlogPreference(models.Model):
    user = models.ForeignKey(User, models.SET_NULL, null=True, related_name='preferences')
    blog = models.ForeignKey(Post, models.SET_NULL, null=True, related_name='preferences')

    class PreferenceType(models.TextChoices):
        LIKE = 'like',
        VIEW = 'view',

    type = models.CharField(max_length=4, choices=PreferenceType.choices)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('user', 'blog', 'type')


class Comment(models.Model):
    author = models.ForeignKey(User, models.SET_NULL, null=True, related_name='comments')
    blog = models.ForeignKey(Post, models.SET_NULL, null=True, related_name='comments')
    body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.body} by {self.author}"


class LikeComment(models.Model):
    user = models.ForeignKey(User, models.SET_NULL, null=True, related_name='comment_likes')
    comment = models.ForeignKey(Comment, models.SET_NULL, null=True, related_name='likes')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('user', 'comment')
