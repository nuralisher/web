from django.urls import path

from posts.views import PostList , PostDetail , CommentList , CommentDetail , UserList , UserDetail , \
    BlogPreferenceList , BlogPreferenceDetail , LikeCommentList , LikeCommentDetail

urlpatterns = [
    path('blogs/', PostList.as_view()),
    path('blogs/<int:pk>/', PostDetail.as_view()),
    path('blogs/preferences/', BlogPreferenceList.as_view()),
    path('blogs/preferences/<int:pk>/', BlogPreferenceDetail.as_view()),
    path('comments/', CommentList.as_view()),
    path('comments/<int:pk>/', CommentDetail.as_view()),
    path('comments/likes/', LikeCommentList.as_view()),
    path('comments/likes/<int:pk>/', LikeCommentDetail.as_view()),
    path('users/', UserList.as_view()),
    path('users/<int:pk>/', UserDetail.as_view()),
]