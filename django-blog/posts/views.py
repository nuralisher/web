from django.shortcuts import render
from rest_framework import generics, permissions, filters
from posts.models import Post , Comment , BlogPreference , LikeComment
from posts.permissions import IsAuthorOrReadOnly , ReadOnly , IsItYouOrReadOnly, IsUserOrReadOnly
from posts.serializers import PostSerializer , CommentSerializer , UserBlogSerializer , BlogPreferenceSerializer , \
    LikeCommentSerializer
from rest_framework.pagination import PageNumberPagination, LimitOffsetPagination
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.decorators import api_view , permission_classes
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework import status


class PostList(generics.ListCreateAPIView):
    permission_classes = [IsAuthorOrReadOnly, ]
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    filter_backends = (DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter)
    filterset_fields = ('title', )
    search_fields = ('title', 'body', 'description', )
    ordering_fields = ('created_at', )
    pagination_class = PageNumberPagination
    pagination_class = LimitOffsetPagination


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthorOrReadOnly,)
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class CommentList(generics.ListCreateAPIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    filter_backends = (DjangoFilterBackend, )
    filterset_fields = ('author_id', )


class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthorOrReadOnly,)
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


class UserList(generics.ListAPIView):
    permission_classes = (ReadOnly, )
    queryset = User.objects.all()
    serializer_class = UserBlogSerializer


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsItYouOrReadOnly, )
    queryset = User.objects.all()
    serializer_class = UserBlogSerializer


class BlogPreferenceList(generics.ListCreateAPIView):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, )
    queryset = BlogPreference.objects.all()
    serializer_class = BlogPreferenceSerializer


class BlogPreferenceDetail(generics.DestroyAPIView):
    permission_classes = (IsUserOrReadOnly, )
    queryset = BlogPreference.objects.all()
    serializer_class = BlogPreferenceSerializer


class LikeCommentList(generics.ListCreateAPIView):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, )
    queryset = LikeComment.objects.all()
    serializer_class = LikeCommentSerializer


class LikeCommentDetail(generics.DestroyAPIView):
    permission_classes = (IsUserOrReadOnly, )
    queryset = LikeComment.objects.all()
    serializer_class = LikeCommentSerializer

