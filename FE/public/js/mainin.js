//   {
//             actionTo: function (t) {
//               (this.activeGenreList = []),
//                 "logout" === t
//                   ? this.$store.dispatch("LogOut")
//                   : "checkin" === t
//                   ? (window.location.href = o.getPathNav("reward"))
//                   : "property" === t
//                   ? (window.location.href = o.getPathNav("property"))
//                   : "notifications" === t
//                   ? (window.location.href = o.getPathNav("notifications"))
//                   : "messages" === t &&
//                     (window.location.href = o.urlAdmincp + "/account/messages");
//             },
//             openLogin: function () {
//               window.is_safari_user_agent
//                 ? EventBus.$emit("login")
//                 : (window.location = l.getLoginUri());
//             },
//             openRegister: function () {
//               window.is_safari_user_agent
//                 ? EventBus.$emit("register")
//                 : (window.location = l.getRegisterUri());
//             },
//             openLoginAdmincp: function () {
//               window.location = l.getLoginUri();
//             },
//             init: function () {
//               var t = this;
//               return k(
//                 v.a.mark(function e() {
//                   var n, r;
//                   return v.a.wrap(function (e) {
//                     for (;;)
//                       switch ((e.prev = e.next)) {
//                         case 0:
//                           if (
//                             ((t.urlAdminCreate =
//                               o.urlAdmincp + "/books/create"),
//                             !(n = Object(f.c)()))
//                           ) {
//                             e.next = 6;
//                             break;
//                           }
//                           (t.genreList = n), (e.next = 11);
//                           break;
//                         case 6:
//                           return (e.next = 8), Object(f.b)();
//                         case 8:
//                           (r = e.sent),
//                             (t.genreList = r.data._data),
//                             Object(f.a)(r.data._data);
//                         case 11:
//                           t.genreList.unshift({
//                             id: -1,
//                             name: "Tất cả",
//                             icon: "icon-cate-10",
//                           }),
//                             t.isLoggedIn && t.fetchNotificationAndMessages();
//                         case 13:
//                         case "end":
//                           return e.stop();
//                       }
//                   }, e);
//                 })
//               )();
//             },
//             getFilterGenre: function (t) {
//               if (-1 === t) return "/truyen/";
//               var e = "genre=" + t;
//               return "/truyen/" + (e = e ? "?" + e : "");
//             },
//             iconGenres: function (t) {
//               return "" === t ? "icon-cate-1" : t;
//             },
//             getFilterBxh: function (t) {
//               return -1 === t ? "/bang-xep-hang/" : "/bang-xep-hang/tuan/" + t;
//             },
//             timeAgoMessage: function (t) {
//               return g.timeAgo(t.last_message_sent_at);
//             },
//             searchKeyword: function () {
//               var t = "keyword=" + this.keywordName;
//               (this.activeGenreList = []),
//                 (t = t ? "?" + t : ""),
//                 h.a("/truyen/" + t);
//             },
//             activeGenre: function (t) {
//               return this.activeGenreList.includes(t.toString())
//                 ? "active"
//                 : "";
//             },
//             activeBxh: function (t) {
//               return this.activeBxhKey === t ? "active" : "";
//             },
//             notificationClicked: function (t) {
//               var e = this;
//               return k(
//                 v.a.mark(function n() {
//                   return v.a.wrap(function (n) {
//                     for (;;)
//                       switch ((n.prev = n.next)) {
//                         case 0:
//                           return (n.next = 2), e.markAsRead(t.id);
//                         case 2:
//                           if (!t.action_url) {
//                             n.next = 5;
//                             break;
//                           }
//                           return (
//                             (window.location.href = t.action_url),
//                             n.abrupt("return")
//                           );
//                         case 5:
//                         case "end":
//                           return n.stop();
//                       }
//                   }, n);
//                 })
//               )();
//             },
//             getFetchAndInitEcho: function () {
//               var t = this;
//               this.initSubscriptions({
//                 NotificationSent: function () {
//                   t.fetchUnreadCount(), t.fetchUnreadNotificationsList();
//                 },
//               }),
//                 this.$echo
//                   .private("users.".concat(this.userInfo.id))
//                   .listen("MessageSent", this.fetchMessageUnseenRooms);
//             },
//             fetchNotificationAndMessages: function () {
//               this.fetchUnreadCount(), this.fetchUnreadNotificationsList();
//             },
//           }
//         ),
//         watch: {
//           isLoggedIn: function (t) {
//             var e = this;
//             t &&
//               setTimeout(function () {
//                 e.fetchNotificationAndMessages();
//               }, 2e3);
//           },
//         },
//         mounted: function () {
//           var t = this;
//           l.getToken() &&
//             (r.a.state.user.userInfo.name || r.a.dispatch("GetUserInfo"));
//           this.init(),
//             EventBus.$on("genre", function (e) {
//               t.activeGenreList = e;
//             }),
//             EventBus.$on("bxh", function (e) {
//               t.activeBxhKey = e;
//             }),
//             EventBus.$on("timkiem", function (e) {
//               t.keywordName = e;
//             });
