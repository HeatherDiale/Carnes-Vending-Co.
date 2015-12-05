from django.conf.urls import url
from django.contrib import admin

from django.views.generic import TemplateView

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', TemplateView.as_view(template_name='index.html'), name='home'),
    url(
        r'^who-we-are$',
        TemplateView.as_view(template_name='who_we_are.html'),
        name='about'
    ),
    url(
        r'^find-your-snack$',
        TemplateView.as_view(template_name='find_your_snack.html'),
        name='find-your-snack',
    ),
    url(
        r'^contact$',
        TemplateView.as_view(template_name='contact.html'),
        name='contact',
    ),
    url(
        r'^mobile-app$',
        TemplateView.as_view(template_name='cash-free_mobile_app.html'),
        name='mobile-app',
    ),
]
