from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    VendorViewSet,
    LocationViewSet,
    FavoritesViewSet,
    VendorDetailViewSet,
    CategoryViewSet,
    FaqViewSet,
    PresenterViewSet,
    ScheduleViewSet,
    MyScheduleViewSet,
    SponsorViewSet,
)

router = DefaultRouter()
router.register("favorites", FavoritesViewSet)
router.register("category", CategoryViewSet)
router.register("vendor", VendorViewSet)
router.register("faq", FaqViewSet)
router.register("schedule", ScheduleViewSet)
router.register("presenter", PresenterViewSet)
router.register("vendordetail", VendorDetailViewSet)
router.register("myschedule", MyScheduleViewSet)
router.register("location", LocationViewSet)
router.register("sponsor", SponsorViewSet)

urlpatterns = [
    path("", include(router.urls)),
]