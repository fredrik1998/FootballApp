"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/users/', include('base.urls.userUrls')),
    path('api/leagues/PL/', include('base.urls.PLUrls')),
    path('api/leagues/BL/', include('base.urls.BLUrls')),
    path('api/leagues/CL/', include('base.urls.CLUrls')),
    path('api/leagues/FL/', include('base.urls.Ligue1Urls')),
    path('api/leagues/PD/', include('base.urls.PDUrls')),
    path('api/leagues/SA/', include('base.urls.SAUrls')),
    path('api/team/', include('base.urls.teamUrls')),
    path('api/match/', include('base.urls.matchUrls')),
    path('api/player/', include('base.urls.playerUrls')),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
