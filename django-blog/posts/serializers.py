from rest_framework import serializers
from posts.models import Post , Comment , BlogPreference , LikeComment
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('pk', 'username', 'email',)


class LikeCommentSerializerWithOutCommentField(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    user_id = serializers.IntegerField(write_only=True)
    comment_id = serializers.IntegerField()

    class Meta:
        model = LikeComment
        fields = ('id', 'user', 'user_id', 'comment_id', 'created_at')


class CommentSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    author_id = serializers.IntegerField(write_only=True)
    blog_id = serializers.IntegerField(write_only=True)
    likes = LikeCommentSerializerWithOutCommentField(read_only=True, many=True)

    class Meta:
        model = Comment
        fields = ('id', 'author', 'author_id', 'blog_id', 'body',
                  'likes', 'created_at', 'updated_at', )


class BlogPreferenceSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    user_id = serializers.IntegerField(write_only=True)
    blog_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = BlogPreference
        fields = ('id', 'user', 'user_id', 'blog_id', 'type', 'created_at')


class PostSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    comments = CommentSerializer(read_only=True, many=True)
    author_id = serializers.IntegerField(write_only=True)
    preferences = BlogPreferenceSerializer(many=True, read_only=True)

    class Meta:
        model = Post
        fields = ('id', 'author', 'author_id', 'title', 'body', 'description',
                  'preferences', 'comments', 'created_at', 'updated_at', )


class BlogPreferenceSerializer2(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    user_id = serializers.IntegerField(write_only=True)
    blog_id = serializers.IntegerField(write_only=True)
    blog = PostSerializer(read_only=True)

    class Meta:
        model = BlogPreference
        fields = ('id', 'user', 'user_id', 'blog', 'blog_id', 'type', 'created_at')


class LikeCommentSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    comment = CommentSerializer(read_only=True)
    user_id = serializers.IntegerField(write_only=True)
    comment_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = LikeComment
        fields = ('id', 'user', 'user_id', 'comment', 'comment_id', 'created_at')



class UserBlogSerializer(serializers.ModelSerializer):
    posts = PostSerializer(many=True , read_only=True)
    comments = CommentSerializer(many=True , read_only=True)
    preferences = BlogPreferenceSerializer2(many=True, read_only=True)

    class Meta:
        model = User
        fields = ('pk', 'username', 'email', 'posts', 'comments', 'preferences',)
