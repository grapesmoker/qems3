from django.conf.urls import url
from rest_framework_extensions.routers import ExtendedSimpleRouter

from qsub.api import views

app_name = 'qsub'

router = ExtendedSimpleRouter()

question_set_router = router.register(
    r'api/question_sets',
    views.QuestionSetViewSet,
    base_name='question_sets')



urlpatterns = router.urls