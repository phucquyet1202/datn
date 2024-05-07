// Admin
import AdminLogin from "./admin/AdminLogin";
import RouteAdmin from "./admin/RouteAdmin";
import BaseAdmin from "./admin/BaseAdmin";
import AmenitiesManager from "./admin/Amenities/AmenitiesManager";
import BookingManager from "./admin/Booking/BookingManager";
import DashboardManage from "./admin/Dashboard/DashboardManage";
import HotelManager from "./admin/Hotel/HotelManager";
import RoomManager from "./admin/Room/RoomManager";
import RoomTypeManage from "./admin/RoomType/RoomTypeManage";
import UserManager from "./admin/User/UserManager";
import CommentManager from "./admin/Comment/CommentManage";
import VoucherManage from "./admin/Voucher/VoucherManage";

// Auth
import RouteAuth from "./auth/RouteAuth";
import BaseAuth from "./auth/BaseAuth";
import InfoBookingPage from "./auth/InfoBooking/InfoBookingPage";
import ProfilePage from "./auth/Profile/ProfilePage";
import SecurityPage from "./auth/Security/SecurityPage";

// Client
import RouteClient from "./client/RouteClient";
import BaseClient from "./client/BaseClient";
import BookingPage from "./client/Booking/BookingPage";
import HomePage from "./client/Home/HomePage";
import HotelDetailPage from "./client/HotelDetail/HotelDetailPage";
import HotelListPage from "./client/HotelList/HotelListPage";
import PaymentPage from "./client/Payment/PaymentPage";
import ComplaintResolutionPolicy from "./client/Policy/ComplaintResolutionPolicy";
import RegulationsBookingInformation from "./client/Policy/RegulationsBookingInformation";
import GeneralRules from "./client/Policy/GeneralRules";
import GeneralTerms from "./client/Policy/GeneralTerms";
import PrivacyPolicy from "./client/Policy/PrivacyPolicy";

// Error
import Loading from "./error/Loading";
import LoadingAll from "./error/LoadingAll";
import Page403 from "./error/Page403";
import Page404 from "./error/Page404";
import Page500 from "./error/Page500";
import Success from "./error/Success";

export {
  AdminLogin,
  RouteAdmin,
  BaseAdmin,
  AmenitiesManager,
  BookingManager,
  DashboardManage,
  HotelManager,
  RoomManager,
  RoomTypeManage,
  UserManager,
  CommentManager,
  VoucherManage,
  LoadingAll,
  RouteAuth,
  BaseAuth,
  InfoBookingPage,
  ProfilePage,
  SecurityPage,
  RouteClient,
  BaseClient,
  BookingPage,
  HomePage,
  HotelDetailPage,
  HotelListPage,
  PaymentPage,
  ComplaintResolutionPolicy,
  RegulationsBookingInformation,
  GeneralRules,
  GeneralTerms,
  PrivacyPolicy,
  Loading,
  Page403,
  Page404,
  Page500,
  Success,
};
