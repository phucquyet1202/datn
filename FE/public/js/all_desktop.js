(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    127: function (t, e, n) {
      var r = n(295);
      "string" == typeof r && (r = [[t.i, r, ""]]);
      var i = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0,
      };
      n(16)(r, i);
      r.locals && (t.exports = r.locals);
    },
    128: function (t, e, n) {
      var r = n(298);
      "string" == typeof r && (r = [[t.i, r, ""]]);
      var i = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0,
      };
      n(16)(r, i);
      r.locals && (t.exports = r.locals);
    },
    129: function (t, e, n) {
      var r = n(300);
      "string" == typeof r && (r = [[t.i, r, ""]]);
      var i = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0,
      };
      n(16)(r, i);
      r.locals && (t.exports = r.locals);
    },
    131: function (t, e, n) {
      var r = n(313);
      "string" == typeof r && (r = [[t.i, r, ""]]);
      var i = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0,
      };
      n(16)(r, i);
      r.locals && (t.exports = r.locals);
    },
    132: function (t, e, n) {
      var r = n(315);
      "string" == typeof r && (r = [[t.i, r, ""]]);
      var i = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0,
      };
      n(16)(r, i);
      r.locals && (t.exports = r.locals);
    },
    133: function (t, e, n) {
      var r = n(317);
      "string" == typeof r && (r = [[t.i, r, ""]]);
      var i = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0,
      };
      n(16)(r, i);
      r.locals && (t.exports = r.locals);
    },
    134: function (t, e, n) {
      var r = n(319);
      "string" == typeof r && (r = [[t.i, r, ""]]);
      var i = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0,
      };
      n(16)(r, i);
      r.locals && (t.exports = r.locals);
    },
    135: function (t, e, n) {
      var r = n(321);
      "string" == typeof r && (r = [[t.i, r, ""]]);
      var i = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0,
      };
      n(16)(r, i);
      r.locals && (t.exports = r.locals);
    },
    157: function (t, e) {
      t.exports = "/images/1.png?9939ee678e42b890a495ff3c311e8747";
    },
    158: function (t, e) {
      t.exports = "/images/2.png?c186895a18a48c5a7d7efd111460295f";
    },
    159: function (t, e) {
      t.exports = "/images/3.png?05ea354f7668a0f314e7fc615d8474b6";
    },
    160: function (t, e) {
      t.exports = "/images/4.png?883fb7fcb047bb694a6f65668e2e4bc6";
    },
    161: function (t, e) {
      t.exports = "/images/5.png?8c2a93ab010e2928f269ba8683c12583";
    },
    162: function (t, e) {
      t.exports = "/images/6.png?adee152d95366e0d03b8125832fe932b";
    },
    163: function (t, e) {
      t.exports = "/images/7.png?b94378fb19d75da203e14615145ef5da";
    },
    164: function (t, e) {
      t.exports = "/images/8.png?9fabfa24078c690601a9a7dfecd13f09";
    },
    165: function (t, e) {
      t.exports = "/images/9.png?ee8269e21eb50661840da42d1c8cc397";
    },
    166: function (t, e) {
      t.exports = "/images/10.png?936a4396f47fa608c0804362e90b4e1d";
    },
    167: function (t, e) {
      t.exports = "/images/11.png?71aaa62d5657dddad5081d63da1f91d1";
    },
    172: function (t, e, n) {
      t.exports = n(372);
    },
    293: function (t, e) {
      var n;
      (window.NuHiepScript =
        ((n = function () {
          if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
            var t = document.createElement("style");
            t.appendChild(
              document.createTextNode("@-ms-viewport{width:auto!important}")
            ),
              document.querySelector("head").appendChild(t);
          }
        }),
        {
          init: function () {
            n(),
              $(".js-slider").each(function () {
                var t = $(this),
                  e = t.find('[data-type="poster"]'),
                  n = t.find('[data-type="info"]'),
                  r = new Swiper(n, {
                    spaceBetween: 0,
                    fadeEffect: {
                      crossFade: !1,
                    },
                    effect: "fade",
                    slidesPerView: 1,
                  });
                new Swiper(e, {
                  navigation: {
                    nextEl: e.find(".swiper-button-next"),
                    prevEl: e.find(".swiper-button-prev"),
                  },
                  effect: "coverflow",
                  loop: !0,
                  centeredSlides: !0,
                  spaceBetween: 0,
                  slidesPerView: "auto",
                  coverflow: {
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !1,
                  },
                  autoplay: 5e3,
                  autoplayDisableOnInteraction: !1,
                  on: {
                    slideChangeTransitionEnd: function () {
                      r.slideTo(this.realIndex);
                    },
                  },
                }),
                  e.addClass("loaded");
              }),
              window.dispatchEvent(new Event("resize")),
              $(".js-swiper-slider").each(function () {
                var t = $(this);
                new Swiper(t, {
                  spaceBetween: 15,
                  slidesPerView: 1,
                  navigation: {
                    nextEl: t.find(".swiper-button-next"),
                    prevEl: t.find(".swiper-button-prev"),
                  },
                  pagination: {
                    el: t.find(".swiper-pagination"),
                    type: "bullets",
                  },
                });
              }),
              $(".js-tooltip").tooltip(),
              new hcSticky("#js-left-menu", {
                top: 16,
              }),
              new hcSticky("#js-right-menu", {
                top: window.innerHeight - 150 - 16,
              }),
              $("#js-guide")
                .on("show.bs.modal", function () {
                  $("body").addClass("visible-helper"),
                    $("#js-left-menu, #js-right-menu")
                      .find(".js-tooltip")
                      .tooltip("show");
                })
                .on("shown.bs.modal", function () {
                  $("#js-left-menu, #js-right-menu")
                    .find(".js-tooltip")
                    .tooltip("show");
                })
                .on("hidden.bs.modal", function () {
                  $("body").removeClass("visible-helper"),
                    setTimeout(function () {
                      $("#js-left-menu, #js-right-menu")
                        .find(".js-tooltip")
                        .tooltip("hide");
                    });
                });
          },
        })),
        $(document).ready(function () {
          window.NuHiepScript.init();
        });
    },
    294: function (t, e, n) {
      "use strict";
      n(127);
    },
    295: function (t, e, n) {
      (t.exports = n(15)(!1)).push([
        t.i,
        "\n.require[data-v-4cce9ca6] {\n    border: 1px solid #f00 !important;\n}\n",
        "",
      ]);
    },
    297: function (t, e, n) {
      "use strict";
      n(128);
    },
    298: function (t, e, n) {
      (t.exports = n(15)(!1)).push([
        t.i,
        "\n#chapter-list-sort-btn[data-v-abaf3886] {\n    cursor: pointer;\n}\na[data-v-abaf3886] {\n    cursor: pointer;\n}\n",
        "",
      ]);
    },
    299: function (t, e, n) {
      "use strict";
      n(129);
    },
    300: function (t, e, n) {
      (t.exports = n(15)(!1)).push([
        t.i,
        "\n.user-default-avatar[data-v-472d14d3] {\n    width: 45px;\n    font-size: 45px;\n}\n#reviews_book a[data-v-472d14d3] {\n    cursor: pointer;\n}\n",
        "",
      ]);
    },
    312: function (t, e, n) {
      "use strict";
      n(131);
    },
    313: function (t, e, n) {
      (t.exports = n(15)(!1)).push([
        t.i,
        "\n#bookAuthor a[data-v-3807dc18] {\n    cursor: pointer;\n}\n",
        "",
      ]);
    },
    314: function (t, e, n) {
      "use strict";
      n(132);
    },
    315: function (t, e, n) {
      (t.exports = n(15)(!1)).push([
        t.i,
        "\n.top-fan[data-v-84d735ce]{\n  text-shadow:none;\n    background: #b78a28 -webkit-gradient(linear, left top, right top,\nfrom(#b78a28), to(#b78a28), color-stop(0.5, #FFFF99)) 0 0 no-repeat;\n    color: rgba(255, 255, 255, 0.1);\n    font-weight: bold;\n    position: relative;\n    -webkit-animation: shine-data-v-84d735ce 2s infinite;\n    -webkit-background-clip: text;\n    -webkit-background-size: 150px;\n}\n@-webkit-keyframes shine-data-v-84d735ce {\n0% {\n        background-position: top left;\n}\n100% {\n        background-position: top right;\n}\n}\n",
        "",
      ]);
    },
    316: function (t, e, n) {
      "use strict";
      n(133);
    },
    317: function (t, e, n) {
      (t.exports = n(15)(!1)).push([
        t.i,
        "\n.require[data-v-32c3e250] {\n    border: 1px solid #f00 !important;\n}\n",
        "",
      ]);
    },
    318: function (t, e, n) {
      "use strict";
      n(134);
    },
    319: function (t, e, n) {
      (t.exports = n(15)(!1)).push([
        t.i,
        "\n.require[data-v-50648a25] {\n    border: 1px solid #f00 !important;\n}\n",
        "",
      ]);
    },
    320: function (t, e, n) {
      "use strict";
      n(135);
    },
    321: function (t, e, n) {
      (t.exports = n(15)(!1)).push([
        t.i,
        "\n.require[data-v-172e8569] {\n    border: 1px solid #f00 !important;\n}\n",
        "",
      ]);
    },
    372: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(29),
        i = n(58),
        a = n.n(i),
        o = n(1),
        s = n(59),
        c = n.n(s),
        l = (n(156), n(2));
      var u = n(60),
        d = n(61),
        m = (n(69), n(0)),
        v = n.n(m),
        f = n(33),
        p = n(3),
        h = n(39),
        W = (n(68), n(8)),
        g = n(6);
      function b(t, e, n, r, i, a, o) {
        try {
          var s = t[a](o),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, i);
      }
      function k(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, i) {
            var a = t.apply(e, n);
            function o(t) {
              b(a, r, i, o, s, "next", t);
            }
            function s(t) {
              b(a, r, i, o, s, "throw", t);
            }
            o(void 0);
          });
        };
      }
      function C(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function w(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? C(Object(n), !0).forEach(function (e) {
                _(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : C(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function _(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var y = {
        data: function () {
          return {
            navList: o.userNav,
            bxhList: [
              {
                id: "6",
                name: "Thịnh hành",
                icon: "icon-up",
                slug: "thinh-hanh",
              },
              {
                id: "1",
                name: "Đọc nhiều",
                icon: "icon-sound-waves",
                slug: "doc-nhieu",
              },
              {
                id: "5",
                name: "Tặng thưởng",
                icon: "icon-candy",
                slug: "tang-thuong",
              },
              {
                id: "2",
                name: "Đề cử",
                icon: "icon-flower",
                slug: "de-cu",
              },
              {
                id: "4",
                name: "Yêu thích",
                icon: "icon-like-alt",
                slug: "yeu-thich",
              },
              {
                id: "3",
                name: "Thảo luận",
                icon: "icon-comment",
                slug: "thao-luan",
              },
            ],
            genreList: [],
            keywordName: "",
            urlAdminCreate: "",
            activeGenreList: [],
            activeBxhKey: "",
            notificationLastTimestamp: null,
          };
        },
        computed: w(
          w(
            w(
              w(
                {
                  userInfo: {},
                },
                Object(p.e)({
                  userInfo: function (t) {
                    return t.user.userInfo;
                  },
                  notificationUnreadList: function (t) {
                    return t.notifications.unreadList;
                  },
                  notificationUnreadCount: function (t) {
                    return t.notifications.unreadCount;
                  },
                  messageUnseenRooms: function (t) {
                    return t.messages.unseenRooms;
                  },
                  messageUserMap: function (t) {
                    return t.messages.userMap;
                  },
                })
              ),
              Object(p.c)({
                messageUnseenCount: "messages/unseenCount",
              })
            ),
            Object(p.c)(["isLoggedIn", "spinnerUser", "userAvatar", "userName"])
          ),
          {},
          {
            hasAvatar: function () {
              return !!this.userAvatar;
            },
            redeemLink: function () {
              return o.getPathNav("candy");
            },
            numberFormatTotalBalance: function () {
              return Object(W.e)(this.userInfo.total_balance, ",");
            },
          }
        ),
        methods: w(
          w(
            {},
            Object(p.b)({
              fetchUnreadNotificationsList:
                "notifications/fetchUnreadNotificationsAction",
              fetchUnreadCount: "notifications/fetchUnreadCountAction",
              markAsRead: "notifications/markAsReadAction",
              fetchMessageUnseenRooms: "messages/fetchUnseenRoomsAction",
            })
          ),
          {},
          {
            actionTo: function (t) {
              (this.activeGenreList = []),
                "logout" === t
                  ? this.$store.dispatch("LogOut")
                  : "checkin" === t
                  ? (window.location.href = o.getPathNav("reward"))
                  : "property" === t
                  ? (window.location.href = o.getPathNav("property"))
                  : "notifications" === t
                  ? (window.location.href = o.getPathNav("notifications"))
                  : "messages" === t &&
                    (window.location.href = o.urlAdmincp + "/account/messages");
            },
            openLogin: function () {
              window.is_safari_user_agent
                ? EventBus.$emit("login")
                : (window.location = l.getLoginUri());
            },
            openRegister: function () {
              window.is_safari_user_agent
                ? EventBus.$emit("register")
                : (window.location = l.getRegisterUri());
            },
            openLoginAdmincp: function () {
              window.location = l.getLoginUri();
            },
            init: function () {
              var t = this;
              return k(
                v.a.mark(function e() {
                  var n, r;
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((t.urlAdminCreate =
                              o.urlAdmincp + "/books/create"),
                            !(n = Object(f.c)()))
                          ) {
                            e.next = 6;
                            break;
                          }
                          (t.genreList = n), (e.next = 11);
                          break;
                        case 6:
                          return (e.next = 8), Object(f.b)();
                        case 8:
                          (r = e.sent),
                            (t.genreList = r.data._data),
                            Object(f.a)(r.data._data);
                        case 11:
                          t.genreList.unshift({
                            id: -1,
                            name: "Tất cả",
                            icon: "icon-cate-10",
                          }),
                            t.isLoggedIn && t.fetchNotificationAndMessages();
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            getFilterGenre: function (t) {
              if (-1 === t) return "/truyen/";
              var e = "genre=" + t;
              return "/truyen/" + (e = e ? "?" + e : "");
            },
            iconGenres: function (t) {
              return "" === t ? "icon-cate-1" : t;
            },
            getFilterBxh: function (t) {
              return -1 === t ? "/bang-xep-hang/" : "/bang-xep-hang/tuan/" + t;
            },
            timeAgoMessage: function (t) {
              return g.timeAgo(t.last_message_sent_at);
            },
            searchKeyword: function () {
              var t = "keyword=" + this.keywordName;
              (this.activeGenreList = []),
                (t = t ? "?" + t : ""),
                h.a("/truyen/" + t);
            },
            activeGenre: function (t) {
              return this.activeGenreList.includes(t.toString())
                ? "active"
                : "";
            },
            activeBxh: function (t) {
              return this.activeBxhKey === t ? "active" : "";
            },
            notificationClicked: function (t) {
              var e = this;
              return k(
                v.a.mark(function n() {
                  return v.a.wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.next = 2), e.markAsRead(t.id);
                        case 2:
                          if (!t.action_url) {
                            n.next = 5;
                            break;
                          }
                          return (
                            (window.location.href = t.action_url),
                            n.abrupt("return")
                          );
                        case 5:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              )();
            },
            getFetchAndInitEcho: function () {
              var t = this;
              this.initSubscriptions({
                NotificationSent: function () {
                  t.fetchUnreadCount(), t.fetchUnreadNotificationsList();
                },
              }),
                this.$echo
                  .private("users.".concat(this.userInfo.id))
                  .listen("MessageSent", this.fetchMessageUnseenRooms);
            },
            fetchNotificationAndMessages: function () {
              this.fetchUnreadCount(), this.fetchUnreadNotificationsList();
            },
          }
        ),
        watch: {
          isLoggedIn: function (t) {
            var e = this;
            t &&
              setTimeout(function () {
                e.fetchNotificationAndMessages();
              }, 2e3);
          },
        },
        mounted: function () {
          var t = this;
          l.getToken() &&
            (r.a.state.user.userInfo.name || r.a.dispatch("GetUserInfo"));
          this.init(),
            EventBus.$on("genre", function (e) {
              t.activeGenreList = e;
            }),
            EventBus.$on("bxh", function (e) {
              t.activeBxhKey = e;
            }),
            EventBus.$on("timkiem", function (e) {
              t.keywordName = e;
            });
        },
      };
      function x(t, e, n, r, i, a, o) {
        try {
          var s = t[a](o),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, i);
      }
      var O = {
          name: "login",
          props: {
            visible: {
              default: !1,
            },
          },
          data: function () {
            return {
              active: !1,
              form: {
                email: "",
                password: "",
                remember: "",
              },
              spinner: !1,
              inputLogin: {
                email: !1,
                password: !1,
              },
            };
          },
          methods: {
            close: function () {
              this.active = !1;
            },
            show: function () {
              this.active = !0;
            },
            logIn: function () {
              var t,
                e = this;
              return ((t = v.a.mark(function t() {
                return v.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (e.form.email && e.form.password) {
                          t.next = 4;
                          break;
                        }
                        return (
                          (e.inputLogin.email = !e.form.email),
                          (e.inputLogin.password = !e.form.password),
                          t.abrupt("return")
                        );
                      case 4:
                        (e.spinner = !0),
                          e.$store
                            .dispatch("LoginByUserName", e.form)
                            .then(function () {
                              e.$store.dispatch("GetUserInfo"),
                                window.location.reload(),
                                (e.active = !1);
                            })
                            .catch(function (t) {
                              e.active = !0;
                            }),
                          (e.spinner = !1);
                      case 7:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })),
              function () {
                var e = this,
                  n = arguments;
                return new Promise(function (r, i) {
                  var a = t.apply(e, n);
                  function o(t) {
                    x(a, r, i, o, s, "next", t);
                  }
                  function s(t) {
                    x(a, r, i, o, s, "throw", t);
                  }
                  o(void 0);
                });
              })();
            },
            openRegister: function () {
              (this.active = !1), EventBus.$emit("register");
            },
            openForgotPassword: function () {
              (this.active = !1), EventBus.$emit("forgot");
            },
            openRetryVerify: function () {
              (this.active = !1), EventBus.$emit("retry");
            },
            toggleLogin: function (t) {
              return !0 === t ? "require" : "";
            },
          },
          mounted: function () {
            var t = this;
            EventBus.$on("login", function () {
              t.active = !0;
            });
          },
        },
        P = (n(316), n(5)),
        S = Object(P.a)(
          O,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return t.active
              ? n("div", [
                  n(
                    "div",
                    {
                      staticClass: "modal modal-auth fade show",
                      staticStyle: {
                        "padding-right": "17px",
                        display: "block",
                      },
                      attrs: {
                        id: "js-login",
                        tabindex: "-1",
                        role: "dialog",
                        "aria-modal": "true",
                      },
                    },
                    [
                      n(
                        "div",
                        {
                          staticClass: "modal-dialog modal-dialog-centered",
                          attrs: {
                            role: "document",
                          },
                        },
                        [
                          n(
                            "div",
                            {
                              staticClass: "modal-content",
                            },
                            [
                              n(
                                "div",
                                {
                                  staticClass: "modal-header",
                                },
                                [
                                  n(
                                    "ul",
                                    {
                                      staticClass:
                                        "list-unstyled d-flex m-auto",
                                    },
                                    [
                                      t._m(0),
                                      t._v(" "),
                                      n("li", [
                                        n(
                                          "a",
                                          {
                                            staticClass:
                                              "d-block h3 m-0 p-3 text-tertiary",
                                            attrs: {
                                              href: "javascript:void(0)",
                                              "data-toggle": "modal",
                                              "data-dismiss": "modal",
                                            },
                                            on: {
                                              click: t.openRegister,
                                            },
                                          },
                                          [
                                            t._v(
                                              "Đăng\n                            ký"
                                            ),
                                          ]
                                        ),
                                      ]),
                                    ]
                                  ),
                                  t._v(" "),
                                  n(
                                    "button",
                                    {
                                      staticClass: "close",
                                      attrs: {
                                        type: "button",
                                        "data-dismiss": "modal",
                                        "aria-label": "Close",
                                      },
                                      on: {
                                        click: t.close,
                                      },
                                    },
                                    [
                                      n("i", {
                                        staticClass: "nh-icon icon-close",
                                      }),
                                    ]
                                  ),
                                ]
                              ),
                              t._v(" "),
                              n(
                                "div",
                                {
                                  staticClass: "modal-body",
                                },
                                [
                                  n(
                                    "div",
                                    {
                                      staticClass: "form-group",
                                    },
                                    [
                                      n(
                                        "div",
                                        {
                                          staticClass: "d-flex mb-2",
                                        },
                                        [
                                          n(
                                            "label",
                                            {
                                              attrs: {
                                                for: "email",
                                              },
                                            },
                                            [t._v("Email")]
                                          ),
                                          t._v(" "),
                                          n(
                                            "a",
                                            {
                                              staticClass:
                                                "text-primary ml-auto",
                                              attrs: {
                                                href: "javascript:void(0)",
                                                "data-toggle": "modal",
                                                "data-dismiss": "modal",
                                              },
                                              on: {
                                                click: t.openRetryVerify,
                                              },
                                            },
                                            [t._v("Gửi lại email kích hoạt")]
                                          ),
                                        ]
                                      ),
                                      t._v(" "),
                                      n("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: t.form.email,
                                            expression: "form.email",
                                          },
                                        ],
                                        staticClass:
                                          "form-control border-0 bg-light px-4",
                                        class: t.toggleLogin(
                                          t.inputLogin.email
                                        ),
                                        attrs: {
                                          type: "email",
                                          placeholder: "Nhập email",
                                          id: "email",
                                        },
                                        domProps: {
                                          value: t.form.email,
                                        },
                                        on: {
                                          focus: function (e) {
                                            t.inputLogin.email = !1;
                                          },
                                          input: function (e) {
                                            e.target.composing ||
                                              t.$set(
                                                t.form,
                                                "email",
                                                e.target.value
                                              );
                                          },
                                        },
                                      }),
                                    ]
                                  ),
                                  t._v(" "),
                                  n(
                                    "div",
                                    {
                                      staticClass: "form-group",
                                    },
                                    [
                                      n(
                                        "div",
                                        {
                                          staticClass: "d-flex mb-2",
                                        },
                                        [
                                          n(
                                            "label",
                                            {
                                              staticClass: "m-0",
                                              attrs: {
                                                for: "password",
                                              },
                                            },
                                            [t._v("Mật khẩu")]
                                          ),
                                          t._v(" "),
                                          n(
                                            "a",
                                            {
                                              staticClass:
                                                "text-primary ml-auto",
                                              attrs: {
                                                href: "javascript:void(0)",
                                                "data-toggle": "modal",
                                                "data-dismiss": "modal",
                                              },
                                              on: {
                                                click: t.openForgotPassword,
                                              },
                                            },
                                            [
                                              t._v(
                                                "Quên\n                                mật khẩu?"
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                      t._v(" "),
                                      n("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: t.form.password,
                                            expression: "form.password",
                                          },
                                        ],
                                        staticClass:
                                          "form-control border-0 bg-light px-4",
                                        class: t.toggleLogin(
                                          t.inputLogin.password
                                        ),
                                        attrs: {
                                          type: "password",
                                          placeholder: "Nhập mật khẩu",
                                          id: "password",
                                        },
                                        domProps: {
                                          value: t.form.password,
                                        },
                                        on: {
                                          keyup: function (e) {
                                            return !e.type.indexOf("key") &&
                                              t._k(
                                                e.keyCode,
                                                "enter",
                                                13,
                                                e.key,
                                                "Enter"
                                              )
                                              ? null
                                              : t.logIn.apply(null, arguments);
                                          },
                                          focus: function (e) {
                                            t.inputLogin.password = !1;
                                          },
                                          input: function (e) {
                                            e.target.composing ||
                                              t.$set(
                                                t.form,
                                                "password",
                                                e.target.value
                                              );
                                          },
                                        },
                                      }),
                                    ]
                                  ),
                                  t._v(" "),
                                  n(
                                    "div",
                                    {
                                      staticClass: "form-group",
                                    },
                                    [
                                      n(
                                        "div",
                                        {
                                          staticClass:
                                            "custom-control custom-checkbox",
                                        },
                                        [
                                          n("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: t.form.remember,
                                                expression: "form.remember",
                                              },
                                            ],
                                            staticClass: "custom-control-input",
                                            attrs: {
                                              type: "checkbox",
                                              id: "remember",
                                            },
                                            domProps: {
                                              checked: Array.isArray(
                                                t.form.remember
                                              )
                                                ? t._i(t.form.remember, null) >
                                                  -1
                                                : t.form.remember,
                                            },
                                            on: {
                                              change: function (e) {
                                                var n = t.form.remember,
                                                  r = e.target,
                                                  i = !!r.checked;
                                                if (Array.isArray(n)) {
                                                  var a = t._i(n, null);
                                                  r.checked
                                                    ? a < 0 &&
                                                      t.$set(
                                                        t.form,
                                                        "remember",
                                                        n.concat([null])
                                                      )
                                                    : a > -1 &&
                                                      t.$set(
                                                        t.form,
                                                        "remember",
                                                        n
                                                          .slice(0, a)
                                                          .concat(
                                                            n.slice(a + 1)
                                                          )
                                                      );
                                                } else
                                                  t.$set(t.form, "remember", i);
                                              },
                                            },
                                          }),
                                          t._v(" "),
                                          n(
                                            "label",
                                            {
                                              staticClass:
                                                "custom-control-label",
                                              attrs: {
                                                for: "remember",
                                              },
                                            },
                                            [t._v(" Ghi nhớ mật khẩu")]
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  n(
                                    "div",
                                    {
                                      staticClass: "form-group",
                                    },
                                    [
                                      n(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-primary btn-md btn-shadow btn-block font-weight-semibold",
                                          on: {
                                            click: t.logIn,
                                          },
                                        },
                                        [t._v("Đăng nhập")]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              t._v(" "),
                              n(
                                "div",
                                {
                                  staticClass:
                                    "modal-footer justify-content-center bg-light text-center",
                                },
                                [
                                  t._v(
                                    "\n                Bạn chưa có tài khoản? "
                                  ),
                                  n(
                                    "a",
                                    {
                                      staticClass:
                                        "text-primary font-weight-semibold",
                                      attrs: {
                                        href: "javascript:void(0)",
                                        "data-toggle": "modal",
                                        "data-dismiss": "modal",
                                      },
                                      on: {
                                        click: t.openRegister,
                                      },
                                    },
                                    [t._v("Đăng ký ngay")]
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ]
                      ),
                    ]
                  ),
                  t._v(" "),
                  n("div", {
                    staticClass: "modal-backdrop fade show",
                  }),
                ])
              : t._e();
          },
          [
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("li", [
                e(
                  "a",
                  {
                    staticClass: "d-block h3 m-0 p-3",
                    attrs: {
                      "data-toggle": "modal",
                    },
                  },
                  [this._v("Đăng nhập")]
                ),
              ]);
            },
          ],
          !1,
          null,
          "32c3e250",
          null
        ).exports,
        j = n(18);
      function R(t, e, n, r, i, a, o) {
        try {
          var s = t[a](o),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, i);
      }
      function G(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, i) {
            var a = t.apply(e, n);
            function o(t) {
              R(a, r, i, o, s, "next", t);
            }
            function s(t) {
              R(a, r, i, o, s, "throw", t);
            }
            o(void 0);
          });
        };
      }
      var N = {
          name: "register",
          props: {
            visible: {
              default: !1,
            },
          },
          data: function () {
            return {
              active: !1,
              form: {
                email: "",
                password: "",
                repassword: "",
              },
              spinner: !1,
              inputLogin: {
                email: !1,
                password: !1,
                repassword: !1,
              },
              disableButton: !1,
            };
          },
          methods: {
            close: function () {
              this.active = !1;
            },
            show: function () {
              this.active = !0;
            },
            register: function () {
              var t = this;
              return G(
                v.a.mark(function e() {
                  return v.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              t.form.email &&
                              t.form.password &&
                              t.form.repassword
                            ) {
                              e.next = 5;
                              break;
                            }
                            return (
                              (t.inputLogin.email = !t.form.email),
                              (t.inputLogin.password = !t.form.password),
                              (t.inputLogin.repassword = !t.form.repassword),
                              e.abrupt("return")
                            );
                          case 5:
                            return (
                              (e.prev = 5),
                              (t.disableButton = !0),
                              (e.next = 9),
                              Object(j.k)(t.form)
                            );
                          case 9:
                            200 === e.sent.data._status && (t.active = !1),
                              (e.next = 15);
                            break;
                          case 13:
                            (e.prev = 13), (e.t0 = e.catch(5));
                          case 15:
                            return (
                              (e.prev = 15),
                              (t.disableButton = !1),
                              e.finish(15)
                            );
                          case 18:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[5, 13, 15, 18]]
                  );
                })
              )();
            },
            openLogin: function () {
              var t = this;
              return G(
                v.a.mark(function e() {
                  return v.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (t.active = !1), EventBus.$emit("login");
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            toggleLogin: function (t) {
              return !0 === t ? "require" : "";
            },
          },
          mounted: function () {
            var t = this;
            EventBus.$on("register", function () {
              t.active = !0;
            });
          },
        },
        I = Object(P.a)(
          N,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return t.active
              ? n("div", [
                  n(
                    "div",
                    {
                      staticClass: "modal modal-auth fade show",
                      staticStyle: {
                        display: "block",
                        "padding-right": "17px",
                      },
                      attrs: {
                        id: "js-register",
                        tabindex: "-1",
                        role: "dialog",
                        "aria-modal": "true",
                      },
                    },
                    [
                      n(
                        "div",
                        {
                          staticClass: "modal-dialog modal-dialog-centered",
                          attrs: {
                            role: "document",
                          },
                        },
                        [
                          n(
                            "div",
                            {
                              staticClass: "modal-content",
                            },
                            [
                              n(
                                "div",
                                {
                                  staticClass: "modal-header",
                                },
                                [
                                  n(
                                    "ul",
                                    {
                                      staticClass:
                                        "list-unstyled d-flex m-auto",
                                    },
                                    [
                                      n("li", [
                                        n(
                                          "a",
                                          {
                                            staticClass:
                                              "d-block h3 m-0 p-3 text-tertiary",
                                            attrs: {
                                              href: "javascript:void(0)",
                                              "data-toggle": "modal",
                                              "data-dismiss": "modal",
                                            },
                                            on: {
                                              click: t.openLogin,
                                            },
                                          },
                                          [
                                            t._v(
                                              "Đăng\n                                nhập"
                                            ),
                                          ]
                                        ),
                                      ]),
                                      t._v(" "),
                                      t._m(0),
                                    ]
                                  ),
                                  t._v(" "),
                                  n(
                                    "button",
                                    {
                                      staticClass: "close",
                                      attrs: {
                                        type: "button",
                                        "data-dismiss": "modal",
                                        "aria-label": "Close",
                                      },
                                      on: {
                                        click: t.close,
                                      },
                                    },
                                    [
                                      n("i", {
                                        staticClass: "nh-icon icon-close",
                                      }),
                                    ]
                                  ),
                                ]
                              ),
                              t._v(" "),
                              n(
                                "div",
                                {
                                  staticClass: "modal-body",
                                },
                                [
                                  n(
                                    "div",
                                    {
                                      staticClass: "form-group",
                                    },
                                    [
                                      n(
                                        "label",
                                        {
                                          attrs: {
                                            for: "email-2",
                                          },
                                        },
                                        [t._v("Email")]
                                      ),
                                      t._v(" "),
                                      n("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: t.form.email,
                                            expression: "form.email",
                                          },
                                        ],
                                        staticClass:
                                          "form-control border-0 bg-light px-4",
                                        class: t.toggleLogin(
                                          t.inputLogin.email
                                        ),
                                        attrs: {
                                          type: "text",
                                          placeholder: "Email",
                                          id: "email-2",
                                        },
                                        domProps: {
                                          value: t.form.email,
                                        },
                                        on: {
                                          focus: function (e) {
                                            t.inputLogin.email = !1;
                                          },
                                          input: function (e) {
                                            e.target.composing ||
                                              t.$set(
                                                t.form,
                                                "email",
                                                e.target.value
                                              );
                                          },
                                        },
                                      }),
                                    ]
                                  ),
                                  t._v(" "),
                                  n(
                                    "div",
                                    {
                                      staticClass: "form-group",
                                    },
                                    [
                                      n(
                                        "label",
                                        {
                                          attrs: {
                                            for: "password-2",
                                          },
                                        },
                                        [t._v("Mật khẩu")]
                                      ),
                                      t._v(" "),
                                      n("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: t.form.password,
                                            expression: "form.password",
                                          },
                                        ],
                                        staticClass:
                                          "form-control border-0 bg-light px-4",
                                        class: t.toggleLogin(
                                          t.inputLogin.password
                                        ),
                                        attrs: {
                                          type: "password",
                                          placeholder: "Nhập mật khẩu",
                                          id: "password-2",
                                        },
                                        domProps: {
                                          value: t.form.password,
                                        },
                                        on: {
                                          focus: function (e) {
                                            t.inputLogin.password = !1;
                                          },
                                          input: function (e) {
                                            e.target.composing ||
                                              t.$set(
                                                t.form,
                                                "password",
                                                e.target.value
                                              );
                                          },
                                        },
                                      }),
                                    ]
                                  ),
                                  t._v(" "),
                                  n(
                                    "div",
                                    {
                                      staticClass: "form-group",
                                    },
                                    [
                                      n(
                                        "label",
                                        {
                                          attrs: {
                                            for: "retype-password",
                                          },
                                        },
                                        [t._v("Nhập lại khẩu")]
                                      ),
                                      t._v(" "),
                                      n("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: t.form.repassword,
                                            expression: "form.repassword",
                                          },
                                        ],
                                        staticClass:
                                          "form-control border-0 bg-light px-4",
                                        class: t.toggleLogin(
                                          t.inputLogin.repassword
                                        ),
                                        attrs: {
                                          type: "password",
                                          placeholder: "Nhập lại mật khẩu",
                                          id: "retype-password",
                                        },
                                        domProps: {
                                          value: t.form.repassword,
                                        },
                                        on: {
                                          focus: function (e) {
                                            t.inputLogin.password = !1;
                                          },
                                          input: function (e) {
                                            e.target.composing ||
                                              t.$set(
                                                t.form,
                                                "repassword",
                                                e.target.value
                                              );
                                          },
                                        },
                                      }),
                                    ]
                                  ),
                                  t._v(" "),
                                  n(
                                    "div",
                                    {
                                      staticClass: "form-group",
                                    },
                                    [
                                      0 == t.disableButton
                                        ? n(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-primary btn-md btn-shadow btn-block font-weight-semibold",
                                              on: {
                                                click: t.register,
                                              },
                                            },
                                            [t._v("Đăng ký")]
                                          )
                                        : n(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-primary btn-md btn-shadow btn-block font-weight-semibold",
                                              attrs: {
                                                disabled: t.disableButton,
                                              },
                                              on: {
                                                click: t.register,
                                              },
                                            },
                                            [n("v-spinner")],
                                            1
                                          ),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ]
                      ),
                    ]
                  ),
                  t._v(" "),
                  n("div", {
                    staticClass: "modal-backdrop fade show",
                  }),
                ])
              : t._e();
          },
          [
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("li", [
                e(
                  "a",
                  {
                    staticClass: "d-block h3 m-0 p-3",
                    attrs: {
                      href: "javascript:void(0)",
                      "data-toggle": "modal",
                    },
                  },
                  [this._v("Đăng\n                                ký")]
                ),
              ]);
            },
          ],
          !1,
          null,
          "72d1dac3",
          null
        ).exports,
        B = n(28),
        L = n(10);
      function U(t, e, n, r, i, a, o) {
        try {
          var s = t[a](o),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, i);
      }
      var q = {
          name: "forgot-pass",
          props: {
            visible: {
              default: !1,
            },
          },
          data: function () {
            return {
              active: !1,
              inputEmail: !1,
              disableButton: !1,
              email: "",
            };
          },
          methods: {
            close: function () {
              this.active = !1;
            },
            forgotPassword: function () {
              var t,
                e = this;
              return ((t = v.a.mark(function t() {
                var n, r;
                return v.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if ("" !== e.email && B.a(e.email)) {
                            t.next = 3;
                            break;
                          }
                          return (e.inputEmail = !0), t.abrupt("return");
                        case 3:
                          return (
                            (n = {
                              email: e.email,
                            }),
                            (t.prev = 4),
                            (e.disableButton = !0),
                            (t.next = 8),
                            Object(j.d)(n)
                          );
                        case 8:
                          !0 === (r = t.sent).data._success
                            ? L.d(r.data._data)
                            : L.b(r.data._data);
                        case 10:
                          return (
                            (t.prev = 10), (e.disableButton = !1), t.finish(10)
                          );
                        case 13:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[4, , 10, 13]]
                );
              })),
              function () {
                var e = this,
                  n = arguments;
                return new Promise(function (r, i) {
                  var a = t.apply(e, n);
                  function o(t) {
                    U(a, r, i, o, s, "next", t);
                  }
                  function s(t) {
                    U(a, r, i, o, s, "throw", t);
                  }
                  o(void 0);
                });
              })();
            },
            toggleEmail: function (t) {
              return !0 === t ? "require" : "";
            },
          },
          mounted: function () {
            var t = this;
            EventBus.$on("forgot", function () {
              t.active = !0;
            });
          },
        },
        V =
          (n(318),
          Object(P.a)(
            q,
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return t.active
                ? n("div", [
                    n(
                      "div",
                      {
                        staticClass: "modal modal-auth fade show",
                        staticStyle: {
                          "padding-right": "17px",
                          display: "block",
                        },
                        attrs: {
                          id: "js-forgot-password",
                          tabindex: "-1",
                          role: "dialog",
                          "aria-modal": "true",
                        },
                      },
                      [
                        n(
                          "div",
                          {
                            staticClass: "modal-dialog modal-dialog-centered",
                            attrs: {
                              role: "document",
                            },
                          },
                          [
                            n(
                              "div",
                              {
                                staticClass: "modal-content",
                              },
                              [
                                n(
                                  "div",
                                  {
                                    staticClass: "modal-header",
                                  },
                                  [
                                    n(
                                      "h6",
                                      {
                                        staticClass: "modal-title",
                                      },
                                      [t._v("Quên mật khẩu")]
                                    ),
                                    t._v(" "),
                                    n(
                                      "button",
                                      {
                                        staticClass: "close",
                                        attrs: {
                                          type: "button",
                                          "data-dismiss": "modal",
                                          "aria-label": "Close",
                                        },
                                        on: {
                                          click: t.close,
                                        },
                                      },
                                      [
                                        n("i", {
                                          staticClass: "nh-icon icon-close",
                                        }),
                                      ]
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                n(
                                  "div",
                                  {
                                    staticClass: "modal-body",
                                  },
                                  [
                                    n(
                                      "div",
                                      {
                                        staticClass: "form-group",
                                      },
                                      [
                                        n("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: t.email,
                                              expression: "email",
                                            },
                                          ],
                                          staticClass:
                                            "form-control border-0 bg-light px-4",
                                          class: t.toggleEmail(t.inputEmail),
                                          attrs: {
                                            type: "text",
                                            placeholder: "Email",
                                          },
                                          domProps: {
                                            value: t.email,
                                          },
                                          on: {
                                            focus: function (e) {
                                              t.inputEmail = !1;
                                            },
                                            input: function (e) {
                                              e.target.composing ||
                                                (t.email = e.target.value);
                                            },
                                          },
                                        }),
                                      ]
                                    ),
                                    t._v(" "),
                                    n(
                                      "div",
                                      {
                                        staticClass: "form-group",
                                      },
                                      [
                                        0 == t.disableButton
                                          ? n(
                                              "button",
                                              {
                                                staticClass:
                                                  "btn btn-primary btn-md btn-shadow btn-block font-weight-semibold",
                                                on: {
                                                  click: t.forgotPassword,
                                                },
                                              },
                                              [t._v("Gửi mật khẩu")]
                                            )
                                          : n(
                                              "button",
                                              {
                                                staticClass:
                                                  "btn btn-primary btn-md btn-shadow btn-block font-weight-semibold",
                                                attrs: {
                                                  disabled: t.disableButton,
                                                },
                                              },
                                              [n("v-spinner")],
                                              1
                                            ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        ),
                      ]
                    ),
                    t._v(" "),
                    n("div", {
                      staticClass: "modal-backdrop fade show",
                    }),
                  ])
                : t._e();
            },
            [],
            !1,
            null,
            "50648a25",
            null
          ).exports);
      function E(t, e, n, r, i, a, o) {
        try {
          var s = t[a](o),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, i);
      }
      var z = {
          name: "retry-verify",
          props: {
            visible: {
              default: !1,
            },
          },
          data: function () {
            return {
              active: !1,
              inputEmail: !1,
              disableButton: !1,
              email: "",
            };
          },
          methods: {
            close: function () {
              this.active = !1;
            },
            retryVerify: function () {
              var t,
                e = this;
              return ((t = v.a.mark(function t() {
                var n, r;
                return v.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if ("" !== e.email && B.a(e.email)) {
                            t.next = 3;
                            break;
                          }
                          return (e.inputEmail = !0), t.abrupt("return");
                        case 3:
                          return (
                            (n = {
                              email: e.email,
                            }),
                            (t.prev = 4),
                            (e.disableButton = !0),
                            (t.next = 8),
                            Object(j.l)(n)
                          );
                        case 8:
                          !0 === (r = t.sent).data._success
                            ? L.d(r.data._data)
                            : L.b(r.data._data);
                        case 10:
                          return (
                            (t.prev = 10), (e.disableButton = !1), t.finish(10)
                          );
                        case 13:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[4, , 10, 13]]
                );
              })),
              function () {
                var e = this,
                  n = arguments;
                return new Promise(function (r, i) {
                  var a = t.apply(e, n);
                  function o(t) {
                    E(a, r, i, o, s, "next", t);
                  }
                  function s(t) {
                    E(a, r, i, o, s, "throw", t);
                  }
                  o(void 0);
                });
              })();
            },
            toggleEmail: function (t) {
              return !0 === t ? "require" : "";
            },
          },
          mounted: function () {
            var t = this;
            EventBus.$on("retry", function () {
              t.active = !0;
            });
          },
        },
        D =
          (n(320),
          Object(P.a)(
            z,
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return t.active
                ? n("div", [
                    n(
                      "div",
                      {
                        staticClass: "modal modal-auth fade show",
                        staticStyle: {
                          "padding-right": "17px",
                          display: "block",
                        },
                        attrs: {
                          id: "js-retry-verify",
                          tabindex: "-1",
                          role: "dialog",
                          "aria-modal": "true",
                        },
                      },
                      [
                        n(
                          "div",
                          {
                            staticClass: "modal-dialog modal-dialog-centered",
                            attrs: {
                              role: "document",
                            },
                          },
                          [
                            n(
                              "div",
                              {
                                staticClass: "modal-content",
                              },
                              [
                                n(
                                  "div",
                                  {
                                    staticClass: "modal-header",
                                  },
                                  [
                                    n(
                                      "h6",
                                      {
                                        staticClass: "modal-title",
                                      },
                                      [t._v("Gửi lại email xác thực")]
                                    ),
                                    t._v(" "),
                                    n(
                                      "button",
                                      {
                                        staticClass: "close",
                                        attrs: {
                                          type: "button",
                                          "data-dismiss": "modal",
                                          "aria-label": "Close",
                                        },
                                        on: {
                                          click: t.close,
                                        },
                                      },
                                      [
                                        n("i", {
                                          staticClass: "nh-icon icon-close",
                                        }),
                                      ]
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                n(
                                  "div",
                                  {
                                    staticClass: "modal-body",
                                  },
                                  [
                                    n(
                                      "div",
                                      {
                                        staticClass: "form-group",
                                      },
                                      [
                                        n("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: t.email,
                                              expression: "email",
                                            },
                                          ],
                                          staticClass:
                                            "form-control border-0 bg-light px-4",
                                          class: t.toggleEmail(t.inputEmail),
                                          attrs: {
                                            type: "text",
                                            placeholder: "Email",
                                          },
                                          domProps: {
                                            value: t.email,
                                          },
                                          on: {
                                            focus: function (e) {
                                              t.inputEmail = !1;
                                            },
                                            input: function (e) {
                                              e.target.composing ||
                                                (t.email = e.target.value);
                                            },
                                          },
                                        }),
                                      ]
                                    ),
                                    t._v(" "),
                                    n(
                                      "div",
                                      {
                                        staticClass: "form-group",
                                      },
                                      [
                                        0 == t.disableButton
                                          ? n(
                                              "button",
                                              {
                                                staticClass:
                                                  "btn btn-primary btn-md btn-shadow btn-block font-weight-semibold",
                                                on: {
                                                  click: t.retryVerify,
                                                },
                                              },
                                              [t._v("Gửi lại email")]
                                            )
                                          : n(
                                              "button",
                                              {
                                                staticClass:
                                                  "btn btn-primary btn-md btn-shadow btn-block font-weight-semibold",
                                                attrs: {
                                                  disabled: t.disableButton,
                                                },
                                              },
                                              [
                                                n("span", {
                                                  staticClass: "spinner-grow",
                                                  attrs: {
                                                    role: "status",
                                                  },
                                                }),
                                              ]
                                            ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        ),
                      ]
                    ),
                    t._v(" "),
                    n("div", {
                      staticClass: "modal-backdrop fade show",
                    }),
                  ])
                : t._e();
            },
            [],
            !1,
            null,
            "172e8569",
            null
          ).exports),
        K = n(11),
        J = n(24),
        Q = n(13),
        T = n(64),
        H = n.n(T),
        Z = n(22),
        X = n.n(Z),
        F = n(12),
        A = n.n(F),
        M = n(23),
        Y = n.n(M);
      function tt(t) {
        return (tt =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function et(t, e, n, r, i, a, o) {
        try {
          var s = t[a](o),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, i);
      }
      function nt(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, i) {
            var a = t.apply(e, n);
            function o(t) {
              et(a, r, i, o, s, "next", t);
            }
            function s(t) {
              et(a, r, i, o, s, "throw", t);
            }
            o(void 0);
          });
        };
      }
      function rt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function it(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? rt(Object(n), !0).forEach(function (e) {
                at(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : rt(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function at(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function ot() {
        var t = [
          "suZdTfZcJG",
          "WQJdNSozASk7",
          "FfhcVglcLG",
          "W4zsAa",
          "k11oe8kU",
          "WQVcJYBdOSoX",
          "W7JcQ3hcHhu",
          "W7xdHWBcQse",
          "oI1+",
          "W4PEDW",
          "mCo7W4CUvG",
          "W5hdUxO",
          "WOddIfVcK8kv",
          "eCoCzCoEjq",
          "DSkyW7hdMSo0",
          "j0jafmkR",
          "m8ogW6a",
          "WOOrhrPx",
          "W7i1WQ8JFW",
          "j8kDv3Lk",
          "WQabobHa",
          "lHahb8kW",
          "WO0CftvR",
          "pYaNpq",
          "uCoXW5y9BW",
          "W6FcO8kjtCkk",
          "W4hcOSkQamkv",
          "W4rvhcOH",
          "oY0EW77cRG",
          "W7XNd0CY",
          "WOmyW7pdHI0",
          "W7atjZHN",
          "lSkeWPZcSby",
          "hJ7dHJpdKG",
          "WRyaCNO+",
          "FaCj",
          "nCkeWPJcKW4",
          "DCkYW5VdVmoT",
          "Ega2ACkt",
          "a8kqrfn9",
          "yhXzWOhcVSoIhsVdSrK",
          "W5BdSeNdPmoE",
          "CwBcR2lcTG",
          "kdr7WP3cKa",
          "W7ZcT8kUbG",
          "WO4zeH1J",
          "db1uue0",
          "W75QWRFcO3S",
          "dd1b",
          "WPbzW6RcGYu",
          "W6DJdKGY",
          "W7VcJMf0AG",
          "WQ3dHmoOFmks",
          "p24u",
          "bd7dHtddTW",
          "W7/cG3PxDG",
          "r1/dPq",
          "fhCnlG",
          "r0BdRG",
          "emkmq1D9",
          "E8kKo8ofFq",
          "W47dHtRcRZC",
          "lJuHjSof",
          "WRNcGcFdRa",
          "WOSkhGnQ",
          "W4nOfs0G",
          "mSE/WOiKvW",
          "WRlcTmk+WRnb",
          "fsT2WPBcJq",
          "WO4jW7xdNZ4",
          "W7P+dW",
          "DMqWC8km",
          "hmoIW545",
          "WQ3cHtW",
          "W600W4BcUCo/",
          "WR7cKmkPWPTd",
          "WPpdPa57yq",
          "f8kwxf5D",
          "W47dLI/cPcy",
          "W53cMSk7pLq",
          "FwOdC8kD",
          "ox4bjCoM",
          "m8khjSo6W5m",
          "lHDMWPRcNq",
          "W7LPWQxcJwO",
          "WQJcV8kAWRvh",
          "lvvoeSkW",
          "vLblWQ19",
          "ibimW77dLW",
          "BSk3fCoe",
          "WR/cNZFdUCoo",
          "f8orySoLma",
          "kcX3WPBcIG",
          "DN8tFSkm",
          "W4/cH0xcN8kE",
          "WOijW7VdKq",
          "WOFdUZ96Fq",
          "W7hcG3LDDq",
          "crldHdFdKW",
          "W4rfWPVcUge",
          "W7lcTmknxCkn",
          "WO8AW7pdLs0",
          "gt1BWPC",
          "W4HeW5SfW6u",
          "W5JcJvRcTSkE",
          "ALb9WR97",
          "BLv9WPDU",
          "W5b5s3Ou",
          "WO0EW7FdGdG",
          "iSkNbSo4W5O",
          "D1VcJwtcHW",
          "W73dUvpcHsm",
          "i8kiWPJcLXG",
          "W7FcPmoUeCkB",
          "jZKJp8oj",
          "W7bNdGe",
          "bN5aav8",
          "W45byq",
          "W5rcW4O",
          "W4xdJW/cRJ4",
          "W4NcM1S",
          "WRtdNSoJA8kt",
          "WQtdGmoJD8kU",
          "WRpcV8khWQzg",
          "W7VcTCkSdCot",
          "nmkeWP/cGHm",
          "WR9dW7pcTmoFWPfwfa",
          "nXpdPXldIW",
          "WQ7cQmkcWPfB",
          "W4NcMNFcM8kF",
          "W6xcSSkXbCk/",
          "eSkub8o1",
          "AraRWOhdVG",
          "wY8bqrS",
          "W714gW",
          "nHGr",
          "WRNcU8knWQPj",
          "hhObla",
          "kSkeWPJcSH8",
          "iCkoWOxcGG",
          "WP8CW6tdTsS",
          "WPOlDdaY",
          "WRNdRJr9",
          "fSorymoCfG",
          "iriwW7VdVa",
          "ocHZWOdcJq",
          "W4SwmI0",
          "e8oqACotkq",
          "zmkcW5VdVmoJ",
          "W6SEW4FcSCo3",
          "yqmaWOS",
          "C0/dKMtcNa",
          "DCkcW77dUSoY",
          "W5FdLhxdRCol",
          "W4hdGrRcRIq",
          "FamaWOVcTa",
          "AmkTm8opvW",
          "W7ZdShpcIcG",
          "W6uuW4tcQa",
          "ox4bo8o1",
          "WRldNCoVD8k0",
          "nCkeWR/cKWi",
          "W5nWgdqG",
          "AKrCWPb0",
          "W4FcHCk8",
          "oCkffSoMW4S",
          "pI11WPVcIG",
          "WQH9p8k3yq",
          "WOOhW7JdGa",
          "WR7cHt3dPq",
          "peO5WOiU",
          "BvLTWOC",
          "W4vAz2Ca",
          "WPPhF3GYWPruW6ldHIOfCM8",
          "e8oxymoFma",
          "W5jiW50zW7e",
          "W4VcJvZcOSkj",
          "dmkjWQ3cSI0",
          "E8kKlSotqq",
          "W4dcH0/cM8kv",
          "ndr3WOhcIG",
          "W6RcH8kQge4",
          "W7BcHmkJsmk0",
          "W70qW53cKSoL",
          "WP3dMtDMqa",
          "WR9UWQpcUga",
          "W7JcSxm",
          "WQ/cNHVdRW",
          "W4ddJfpcVmo+",
          "mmkiWO/cGHi",
          "WR/dPWbstW",
          "W4yKW7lcQmoI",
          "jSkgWO7cMa4",
          "W5v2vG",
          "W6/cH3X1",
          "qKBdO3hcLq",
          "ndz2WPBcJa",
          "W4j9csG1",
          "W7HIdLuY",
          "WQ5qmSkIEa",
          "hCkqu1n9",
          "eSomFSovjW",
          "W7BdV2pcLa",
          "W4jDCe0e",
          "y3v3",
          "f8kArffH",
          "c8kiWOxcMq4",
          "W7tdGf7cS8oE",
          "WPudW5hdUaG",
          "hCozFSoj",
          "W4NcMMRcNCku",
          "WR1Dpq",
          "W7/dHN1+Fa",
          "lXGq",
          "WRhdMmoKDCkZ",
          "WQpcN3dcOSkV",
          "W4JcGvVcGSkx",
          "iW8iW5ZdRa",
          "W7hcVSkSdmkn",
          "W7BdI1VcHCob",
          "W5DoW5WNW64",
          "W4JcMKNcHCkY",
          "BLfSWPbS",
          "yfnad8kX",
          "xgpcSh7cGW",
          "lfXxhxK",
          "bSoIW5qsAG",
          "oJOmW5e",
          "Cv7cH2xcGa",
          "WRSpsx0O",
          "AerMWOT2",
          "W7HUWQxcRq",
          "WP8CW6tdUtG",
          "W7FdRhdcQCoZ",
          "jKPt",
          "WQTxpCkM",
          "EbSlWOS",
          "mSkxuuj9",
          "bCknwv8",
          "f8oXW78ZBa",
          "W6mOWQm+Aq",
          "phKop8os",
          "ESoMaGG",
          "WQ0Bbr9Y",
          "wWJcVSo/W5i",
          "WPeNufSI",
          "dLSS",
          "WOKkobHI",
          "pYCnW5i",
          "j3jAb8kJ",
          "vqxcRmolW4m",
          "mG8kW7JdQq",
          "vWNcKSoKW5u",
          "W6pcSghcHZW",
          "WQXij8k3FG",
          "khm0lSo5",
          "uX/cN8oEW4q",
          "W7lcO8kCBCkr",
          "y2WWFG",
          "pJNdKI3dKG",
          "B8o1fKlcSG",
          "WQ/cGtpdOSoR",
          "ASkHomoYqq",
          "mcLZWOhcLq",
          "W4CYWRaFqa",
          "W6ddQNxcHcG",
          "W44flqvI",
          "W7VdH1BcUSoY",
          "eCoRW5iSFW",
          "W69Vsua",
          "WOimfa5W",
          "W7FcShRcNq",
          "evqJmCoy",
          "W6NdLMRcGsi",
          "W5DsW5SwW7K",
          "yCkPgmoVua",
          "mLfw",
          "W69+b0Os",
          "WQibEweL",
          "W7pdM1K",
          "WO7dMmoYASkZ",
          "W6yxW4u",
          "W7tdT2NcUdq",
          "WRjQfG",
          "W6FcPSkNaSkk",
          "iubFdCk8",
          "W5RcJ8k8ja",
          "bCkxW51ryq",
          "iunCbmkX",
          "W5VdTh7cTba",
          "b8orAmoekG",
          "valcOSoqW6e",
          "WO0mhGq",
          "DCkDW5VdTSoQ",
          "FSoMfNtdLG",
          "W7ldT2S",
          "W68+WPGYyW",
          "FqudxZNdNmk0W7tdReO7WPdcSG",
          "W4KFdqL0",
          "WRddRmoiEmkU",
          "aKLMbq",
          "eZddLsFdPa",
          "WQNdTSk+q8kd",
          "WRNcTCkbWQPd",
          "WOiFjr5H",
          "WQz3iSkisW",
          "W6RcH2bODq",
          "W4xdHe/cMY0",
          "WOpdRJjZAG",
          "aCkkq1O",
          "m8kyfSo6W4S",
          "kCoCW6G+vW",
          "ibimW77dGq",
          "k1fcdW",
          "tSkSW4nI",
          "kxOvla",
          "WRinAuiK",
          "W7L3WQu",
          "r0FdKglcJG",
          "W7BcH2n+",
          "W75GWR7cP18",
          "W5ZcIvRcGCkE",
          "bYD2uKy",
          "WO8nW7JdGbe",
          "fCofW5yZuW",
          "W7PGWR/cUfO",
          "mdtdNsJdQG",
          "a8oizCoEla",
          "W7/cS8kTfSkY",
          "W5noW4iAW7K",
          "WRejAxq",
          "W4r9cW",
          "yqCuWQRdVa",
          "lHiaW7tdVa",
          "bmorESov",
          "W7/cS8kWj8kB",
          "W7lcT33cHtW",
          "iLPMWOH9",
          "eConEmoF",
          "FmkFW53dTSoO",
          "nW4gW6FdLW",
          "WO4hW7NdNZq",
          "W7NcLgLiua",
          "W43cHCk8nLm",
          "g8o5W4SK",
          "eqKkW7BdOW",
          "W4JdVfVcHSoG",
          "W6tdLxtcGWC",
          "h8oMW4a",
          "WRmmW7FdGdG",
          "WRWBsxOI",
          "WP3dOsb5",
          "pxa2kCo3",
          "WPhdVrrZAW",
          "iSkiWOZcNG4",
          "e8oxyCoDjW",
          "WQmQF2yF",
          "v1uKCmkw",
          "W4H0h08W",
          "W73HU4mqzdO",
          "W6FcPCkMeCkH",
          "t1VdQ0/cIa",
          "ECoXbutdTW",
          "eSo+W40Lta",
          "W7hcIgb+AW",
          "nCkDgSo4W5S",
          "gmkmB0fO",
          "W77dIeVdPCkQ",
          "cYJdNHddGG",
          "wwtdR2lcHa",
          "rr3cOCosW4m",
          "r0FdPhxcMq",
          "WPyQxe8G",
          "zq4PWR3dUa",
          "hdldHZtdKa",
          "weyyFSkG",
          "m8k3eSo3W5q",
          "WOKAW5RdMZ4",
          "lCksWO/cKt8",
          "WOmRW77dLsK",
          "AqNcRmopW5y",
          "BuxdR2pcHa",
          "uWdcRmosW5S",
          "i1vycx4",
          "oJzMWPRcNq",
          "WQtdN8opFq",
          "WO0Bbr9Y",
          "vf8MESk6",
          "W5NdOvJdPSoF",
          "n8kzW4S",
          "B8kgnmojsa",
          "ccCsW7ZdJa",
          "vuvrWOXZ",
          "W6aGWPqIwa",
          "lmk5nmoFW7e",
          "irucW6xdVa",
          "W5vvW7aDW7m",
          "WO0BW6xdKs0",
          "pJewkmoA",
          "WO4WcXvT",
          "f8oDEmo8lq",
          "WQBdImoYsCkO",
          "ktuWoq",
          "FtxdMI7dLG",
          "aYayt00",
          "WRChCN4s",
          "W5hdUxNdQCod",
          "W7GqW43cUCor",
          "W71/WQxcQxS",
          "o8oXhe7dQW",
          "W7VcReBcGd8",
          "W4rKW5OtW6W",
          "wMtcSNlcIG",
          "WR9DmSkXEa",
          "lZtdKJ7dKG",
          "W7yIcc1F",
          "W6hdPYtcRqG",
          "W6VdNvFcRa",
          "WQNdImoVFSkY",
          "WOtdT2y",
          "wGZcQG",
          "iqupcSoY",
          "W65GWRFcPwu",
          "BfpdQIxdKW",
          "F8kQn8ofsG",
          "WRldNCoQCmkU",
          "W4uecILG",
          "e8ozySogiW",
          "BWOgWP7dRq",
          "ibWaW77dRW",
          "W5i1W6lcJ8oG",
          "m2ibj8oO",
          "kJxdGtVdPW",
          "fmkrra",
          "eSoxy8oBhq",
          "mYef",
          "i8kaWP/cLW",
          "W4/cH0BcLmks",
          "W57cJuNcKCkp",
          "W6xcTNVcHW",
          "W5rpyxW",
          "WOpdIYjBDq",
          "W5RcVmk6oSkO",
          "iteXcCoh",
          "rXRcMCo1W4y",
          "iX4snmoh",
          "oIKQW7BdIq",
          "nCkDeSoKW4S",
          "q8ojaaO8amoWWPJdHIJdSCog",
          "W4OfgsvI",
          "lCksWQFcKXW",
          "WO4xhH1s",
          "WOOhW7JdGaO",
          "W6bKnfuN",
          "WRhcNSkIWOXQ",
          "pcKeW5i",
          "hHNdGa/dHa",
          "WPhdTZi",
          "DK1x",
          "C0xcM2/cHW",
          "WQVcR8kDWQK",
          "avnBcmkZ",
          "WR7cQ2BcNce",
          "uCktW47dTSoW",
          "W6dcUCk2dCkA",
          "n8kfa8oXW5e",
          "W5VdUhddOCoE",
          "nGOOW7ZdQW",
          "W57cI8kGi18",
          "W4rtzxWt",
          "aCo3W4eAza",
          "ns4/W5xcVa",
          "WO4xhH1B",
          "WRChCN4e",
          "jW8VW7RdRW",
          "W5ddQIT/Ba",
          "zLLN",
          "W60JW4/cVCoX",
          "W7BdReVcHdu",
          "naD6WPlcJG",
          "ivXAba",
          "wbCgWQBdMW",
          "WQyyDhSJ",
          "bLXobG",
          "WRldImoNA8k5",
          "x05IWRD/",
          "FvL8WPb8",
          "W6pcJK7cGCkE",
          "aCo1W5rXyG",
          "W4dcJ8kQjg4",
          "ChKtESkm",
          "W4WFjZXY",
          "W4TEAMSt",
          "bCkYvvX8",
          "p1GbjSoK",
          "b8oqW4C1Aa",
          "fCoSzCoDjW",
          "WPGeDfWQ",
          "bColACochq",
          "W4xcH0y",
          "W4pcTN4NkYT6W6WumJtdGq",
          "W6S/WPiIqq",
          "WQVcNIBdOSoK",
          "BZ0RkG",
          "W5jvAgme",
          "W5VdRc5JDW",
          "W6BdJK/cMq0",
          "WOKbW7hdNc0",
          "iWSMW7/dRa",
          "WRG5ufiD",
          "hCo5W4eRsW",
          "W4mskcTY",
          "emoFqebG",
          "W40yiJu",
          "WR1aCW",
          "W6v4de8O",
          "cmkPuv58",
          "pmo8zmkrf8kQymkGoSk7WQNdGW",
          "W5DcW4y+W7m",
          "DfZcRgxcOG",
          "BhrcWPHs",
          "WPuonsbw",
          "WQZdImoNASkV",
          "zLLNWRjX",
          "WOKsWObhW5tdTufCwIW",
          "r0brWPvn",
          "nHGrW5hdRq",
          "W78yiqL0",
          "W4pdIG/cTYy",
          "i1fbf8kK",
          "W4y7aI1a",
          "W5NcRSk2hvC",
          "W60ZW4VcV8o5",
          "rL3dJxxcJW",
          "nYyD",
          "e8oQW518zG",
          "jW8GW73dQq",
          "W6BdSNpcHcq",
          "W4WfiY1Y",
          "BSo9e1tdUG",
          "WP/dH3ZdOmoA",
          "pY0iW4tcVW",
          "WPXbDIz3W7KNW7RdIa",
          "W6mZWPS/Eq",
          "W5DcW5y7W7i",
          "WOSAW7NdGtC",
          "W7tcT8k2d8kk",
          "W79MWRu",
          "W5XiW5u",
          "f10liCoN",
          "W4zyCgui",
          "vWNcKSoKW5q",
          "W53cNSkRpf8",
          "pYvMWPi",
          "WQ5xpSk/Aq",
          "jmkqa8o4W54",
          "W77cH3XYrG",
          "W47dLK7cVhi",
          "DCkcW7JdSmoP",
          "kMjtd2K",
          "W5j5gI8Z",
          "W50WW4JcVCo4",
          "WRZdRJtcIYW",
          "ESoygeNdUG",
          "jLnzacC",
          "eCokEmoziq",
          "Amo9fvpdTW",
          "amoMW5i4kW",
          "W6T2ce0H",
          "WRqfDhK0",
          "WO0fW7/dMca",
          "W4TfWP7cOu0",
          "W4xcM3VcNCkj",
          "W5ZcJ8k/p0W",
          "FYf/WPRcIG",
          "m3mxaSoL",
          "W6BcOSkpzCk0",
          "W6FdU3xcQsm",
          "qe/dRW",
          "FSoNaKldQW",
          "pJzqWPZcKq",
          "jmkub8oXW6S",
          "WRxdLmo2Fa",
          "WO4hW7NdNW8",
          "WQtdG8oL",
          "zNxcGgVcGW",
          "W4W+W6FcJ8oN",
          "iCkoWOxcGIK",
          "WQ/dISkR",
          "ovTOlCku",
          "W7nPWRFcV2W",
          "W4PqfcGW",
          "kurodCkS",
          "DCkcW7BdSmoH",
          "y1nNWPLS",
          "W6vzWRdcOhW",
          "W6pcSgdcIbC",
          "ESoMlK7dUW",
          "WRhcVNFcNte",
          "W7hcV8kN",
          "kCkhWOq",
          "pI0hW5dcVG",
          "W7v3vM4L",
          "mhKjjq",
          "tqetWOFdRW",
          "W5C/iXH0",
          "W7hdSwpcLa",
          "WPS6pGb3",
          "Cmo4fuldRa",
          "a8klvuP9",
          "W67HU7/cIa",
          "mSkub8oX",
          "W7FdM0dcSmo4",
          "WOGzbrC",
          "amoKW5e9iW",
          "W7tcRvBcHJC",
          "DSo6fuldPW",
          "f8o3W5aJya",
          "WOtdOdvIFq",
          "odSY",
          "jSkrWQtcMI8",
          "WQyCB3WJ",
          "CSkFW57dPG",
          "W57dRxxdUCoU",
          "wWCFWORdNa",
          "WRRcMdFdUq",
          "hmoxB8ornG",
          "W7qxWQ8uva",
          "msChW5hcOW",
          "W7FcPmkCeCkB",
          "WOuwhXn2",
          "WQJdG8owA8k1",
          "kttdIYNdHW",
          "W5hdVNBdJ8os",
          "W6FcQCkDqmkA",
          "WOupsfCU",
          "W5npW5mcW6G",
          "bSk3omoqW7K",
          "ltmNi8ow",
          "WQfzj8k3",
          "pIpdLJZdKG",
          "cCkreSoGW54",
          "W6VdRMVcS8o7",
          "m3GolSoZ",
          "mY8mW5NcVG",
          "W6C5WOG+EW",
          "WQ0/W73dVtW",
          "oZ0MoCok",
          "itGfW57cVG",
          "xXFcQa",
          "W6pcUMdcNcO",
          "W6z5geu0",
          "lJtdHYNdJW",
          "W7xdKCk1zCoV",
          "W6JcH2L+na",
          "WRaAwxa5",
          "W68IW57cPCo+",
          "fCo2BCoDjW",
          "xCoToem",
          "wKBdSa",
          "iNfHz8oi",
          "W70cW4/cRSoB",
          "pICkW5BcVG",
          "WORcICk7WPrJ",
          "WOylprnI",
          "WP8igbHQ",
          "ENijomoG",
          "WQ3cRYO",
          "k8koWOW",
          "W7PNaKGO",
          "WP4xbbHG",
          "WP4hW6pdMJ0",
          "W4FcNSkZpfm",
          "WPFdPYDMBa",
          "W4lcJ3ZcMSkE",
          "gmkmFf1U",
          "Cwi4CmkU",
          "fmoKW70Juq",
          "s0/dTfhcGG",
          "WQhcGtpdUCoS",
          "W7tcPCkCr8ki",
          "jNzBfmkc",
          "of4AkmoO",
          "ymkAp8oirq",
          "W4OfcIv1",
          "pvjxW4S",
          "edeXW7FdIG",
          "W4FcJ8kXo3a",
          "kYyTomom",
          "DI0eW57cVG",
          "W7rylXe",
          "WR3cTCkaWRvO",
          "FMGK",
          "bJSqnmoR",
          "W7xdV3xcHbK",
          "W6OEW47cPq",
          "W5vQmca",
          "pGzZWPdcLq",
          "rSobp0BdHG",
          "FqqfqJS",
          "WQZcS8kkWRvg",
          "W6D2bKm",
          "eCoRW5WZEa",
          "WPGLW7pdMIW",
          "W69uW4ytW6G",
          "a8kAqf5O",
          "etDrBuW",
          "WQ/dMCovFmk7",
          "iSkymSotW6y",
          "W6ZcG3zVEa",
          "W7TYcKuY",
          "aSk7W5eVtq",
          "W7tcRvFcGtK",
          "s1VdIxq",
          "cdPz",
          "i2yf",
          "yqCu",
          "h8kyzfPS",
          "oIn3WQhcMW",
          "W6vYbueY",
          "ACkQmmoeba",
          "WQBdN8oPBmk0",
          "lvCBdwu",
          "E8o1buy",
          "rfRdKNNcHG",
          "EMGGuSkC",
          "WRWqW73dVt4",
          "laKGW7RdPG",
          "i8kgfSoMW74",
          "hCoDFW",
          "lSoLW5yRsW",
          "fCoQACoriq",
          "W6eFW5NcUCoG",
          "pKuumSoT",
          "CIWaW4tcQW",
          "W4JcI8kGowu",
          "W7nBlg0i",
          "rqJcUCopW54",
          "W5niW58FW7K",
          "W7iYWPK6Aa",
          "W6ysW57cTCo9",
          "W5XlW7qEW70",
          "p2qSjmoM",
          "nH7dGGFdOq",
          "WOaCEY0",
          "W6FcQCkor8ks",
          "EKvSWOXr",
          "W5SOjsrN",
          "nfLadW",
          "eSkxuuj9",
          "lbSm",
          "W7BcQSkjxCkn",
          "krOJimoh",
          "edPr",
          "i19beSkX",
          "W4z5fteX",
          "khKukSoo",
          "h8oxgri",
          "W4yegt9N",
          "W4r9cWaX",
          "bmobFmov",
          "lIhdNZtdKG",
          "aSkArezG",
          "s0FdTa",
          "W53dPu/dQCoi",
          "W7KTdJPT",
          "W7nAob45",
          "WRxcIMDWFa",
          "BfLKWPn9",
          "zmkFW6NdQ8o0",
          "mmkAhCoGW7K",
          "WR5zjCk3",
          "eSo5W4W5sW",
          "feecjSos",
          "W5nQhcuG",
          "W5NdRcL6DW",
          "W5pdHW/cTte",
          "W4xdHbRcHJe",
          "aSoJW4ajua",
          "hIvQWR/cHW",
          "W4msiG",
          "dqbbreq",
          "W6qyW4hcUCoZ",
          "WOKweG",
          "xfFcHw8",
          "WRKCDguc",
          "f8kwqKf9",
          "W7hcLuj0FG",
          "WR7cVmkAWObn",
          "W7yIW5W",
          "W63cTxPYEG",
          "WQ/cVZ3dUCoZ",
          "aCoMW4COyG",
          "W64dW4xcSCor",
          "W64eW6pcR8of",
          "W7JcIwxcMqa",
          "W4NdJadcOIa",
          "wXNcRSoKW4q",
          "CCoZju/dUG",
          "WO8qeazW",
          "E3RcRgVcTq",
          "hmo3W5yKFW",
          "tuhdOwdcLq",
          "W6v+bumo",
          "WPrcW58BW6G",
          "id0Skmkp",
          "WQFdGSoOBCkC",
          "WQSJW6ddUJ0",
          "ad1s",
          "eXziWOVcHW",
          "WPZdSNddPCop",
          "W6hcH0ZcM8kD",
          "uxtcQW",
          "ESo6bq",
          "WPBdOcL9tG",
          "W4zPBNOY",
          "AKrfWPf/",
          "W4D2dvWe",
          "ySkMm8oocq",
          "W4pcR8kfjCkC",
          "W5rQWRJcQ2e",
          "WRibE2e",
          "BCoXauJdRq",
          "hSoMW507FW",
          "W7hcUSkIemkn",
          "W77cS8kTbmkk",
          "WQZcJt/dOSoR",
          "wMhdPxNcHG",
          "ntOgW4lcPa",
          "WQj7o8kZFa",
          "f8oXWP4UBG",
          "W7BcRSkjxSkk",
          "n8kvWO7cHa",
          "mJb3WP7dKW",
          "kNj7lSkO",
          "jSkBhmoDW7q",
          "W6tcT8k3aSkm",
          "pJzBWP3cMa",
          "c8oMW50/Fq",
          "WPhdQIHY",
          "fmknFf1U",
          "WP4DebvW",
          "W4RcJvZcKCkt",
          "ufqvyCkC",
          "WPGpoH9N",
          "WQRdGmoNA8kX",
          "vghdRxZcHq",
          "e8oqBCoanG",
          "zSkGlW",
          "uY/cRmoyW5W",
          "e8ktvw1G",
          "nIKDW5y",
          "ExCsp8oO",
          "e8ouBCodmq",
          "WP05pXDW",
          "m3GWoCoU",
          "kdj1W57cLW",
          "W7JcUMpcOdW",
          "Amo3oK3dPW",
          "WQ/cNGFdPCoR",
          "FK7dON/cRa",
          "W7VcOCk8rSkB",
          "W53dUti",
          "W4RdUgJdOSoF",
          "FN0IB8kD",
          "WQ/cM8kkWQTp",
          "W7ZcQmkms8kg",
          "W5v/WOJcP0u",
          "BLTGWPjH",
          "WQHkh8k7FW",
          "W7FdM37cTSo5",
          "DmkrW47dVG",
          "WR9xjSk8Aa",
          "WRlcTCka",
          "ualcO8op",
          "l8kreSoGW54",
          "oSkufa",
          "gmkfWORcGHS",
          "f8oLW4CDAa",
          "W65QWRdcR30",
          "W5ldHW/cPcy",
          "p2qt",
          "W4GkhGnW",
          "WR5ioSk8yG",
          "F8kxkComqq",
          "W4RcGutcNSkO",
          "W7pdMKhcUSo+",
          "CM4JCSko",
          "W57cNuVcHSku",
          "W5bWD2iM",
          "W6/cJ2PVCq",
          "W7ZcJ3X+EG",
          "WOHpDNKE",
          "W7xcNhZcGdq",
          "WOugW6xdKsS",
          "C8kyW5VdR8oY",
          "bwuukSo1",
          "bCo/W40K",
          "W6q1WPm8wW",
          "WRLrpmk8",
          "W65eh18Q",
          "W6mzWPq+yq",
          "W7tcKxxcHd0",
          "AMNdOd7dK8kOWRhcSa",
          "lCoWW4C9FW",
          "W5n3fcKX",
          "WRiACMaJ",
          "xqdcRmojW5W",
          "W7hcNgS",
          "i1HoeCkX",
          "W7FcRSk3eCkF",
          "bSo/W4y+vW",
          "W5m/WPq5FG",
          "W7i/WO4",
          "zreRWOhdVG",
          "WQddUIDEwG",
          "W71lW5S7W7S",
          "osT9WPJcTW",
          "WQVcMsBdPmkN",
          "Af9NWQTQ",
          "D1VcIwpcNW",
          "W4KEWQv3DG",
          "oSkChCoXW6G",
          "kfvck2y",
          "W7eZWPGJzq",
          "wGJcO8oCW4m",
          "W6u2WPK2FW",
          "WO0iarnQ",
          "W5n0ecC/",
          "pJeJkCkc",
          "WQ3cItBdGSoP",
          "r0FdPW",
          "fhKelSoY",
          "qGmkWOS",
          "WQ9xpmk5rq",
          "pfvcgMm",
          "f8kErv59",
          "WRlcRSkpWQ1h",
          "bJJdRG",
          "W5LcW5y",
          "WQu2bXLr",
          "nNKdkSo1",
          "W6BcRSkns8kk",
          "EttdNJtdKG",
          "ygGJB8kr",
          "W5n2WP7cHhG",
          "pJzGWPZcJa",
          "yGmkWOS",
          "ocpdRdtdGG",
          "W6lcLmkPnSkW",
          "WR7cQmkIWQ5j",
          "AraRWOFdQG",
          "W6xcS8kBrG",
          "WPr9fc0G",
          "W6ddQMlcNq",
          "W43cGSk9p0K",
          "WQqbF2yO",
          "W5WIW6NcMSoM",
          "AenGWPP9",
          "BCoXeepcVW",
          "WQ3cNJFdUmo0",
          "Dmozmf3dQG",
          "W7L9WPJcQa",
          "ntddGdu",
          "W6FcRfxcQa4",
          "h8oWW40",
          "W4dcNSkEouK",
          "kwizj8oK",
          "W44fat5N",
          "lCksWRNcNX0",
          "W7P+cu8Q",
          "yeBdPhu",
          "kmoZymoKfG",
          "fgnSj8kX",
          "hSoSW5a9FW",
          "W4/cMmk5gv4",
          "hmoKW6C0BG",
          "pYqUjmow",
          "W7y/WPi",
          "W6jcW7meW54",
          "bSooW5yYFG",
          "WPldMCo0Cmk0",
          "W7tcPCkCs8kA",
          "W4ydjYbV",
          "W5ZcJ8kZm04",
          "W7hcKgS",
          "W5hdThldOSkw",
          "zLn+WRD8",
          "WR0JdfieAqWs",
          "pJS3i8og",
          "WP0YW6ZdRr0",
          "ACkKp8olqW",
          "jL9y",
          "W7ddTMBcNti",
          "vSoKkeZdKW",
          "W7tcSNhcHYW",
          "BvPSWPO",
          "W59CeKaN",
          "WQtdN8opD8k8",
          "fmknFfT6",
          "WQJcQSkhWQ9a",
          "W4yniW",
          "W7vHWRy",
          "Avn9WP1W",
          "W7RdJGRcGr0",
          "W5L3fW",
          "FezGWPb2",
          "cG8oW4ldGq",
          "tcxcOmoxW5m",
          "W4vuA2C4",
          "lfXtd3G",
          "imkeWO/cVXq",
          "WPGQbbPH",
          "ESoMoeNdUq",
          "fmkTvvnQ",
          "oSkqhCoZW4S",
          "W47dUgNdQCo4",
          "WQdhIog6KGiK",
          "W5pdKGlcRIy",
          "ySk2cmopsW",
          "DmkXW4JdSCot",
          "W7Tcj34t",
          "W7tdRglcNJu",
          "W5dcG2D8Cq",
          "B8k0wWFdPa",
          "W4tcMCkaov0",
          "rh1gWPTa",
          "kxihamol",
          "z2n3DSka",
          "W4ncW4ygW7u",
          "FmkvW5tdUmoY",
          "D0tcUM/cGa",
          "W4lcJ8k8n04",
          "WQGvca",
          "f8oREmojlG",
          "ygeIFa",
          "W7LLbfiP",
          "WQHwFa",
          "W4zyCgur",
          "W7FdUfVcU8oq",
          "W5vQoIW1",
          "hCkwv1W",
          "eMa4imou",
          "W6uYWP0NEq",
          "W4NcMMhcLG",
          "hCoIW4S6Ca",
          "W6SEW4tdSCo6",
          "W5faW5CCW6G",
          "y8kyW5/dU8oz",
          "lv9zbvu",
          "FmkrW50",
          "W5hdU1pdN8oA",
          "W6FdT2JcGW",
          "W7hcUCkTbCkx",
          "EZVcM8odW74",
          "W7ZcUCkNbSkO",
          "gColu8odiW",
          "y8keWOBcNW4",
          "W5zXfsGa",
          "y2WJCW",
          "W6hcTmkbqW",
          "W5NdTgNdQCoF",
          "W7hdGvpcR8o+",
          "W6tdT2pcMs4",
          "W5BdTNddQq",
          "WOldMSo8zbm",
          "kKjYc34",
          "W6lcTM7cJa",
          "gCocAq",
          "WRJcItpdQmoZ",
          "W40yksDz",
          "W4VcMmkrp1C",
          "emkswv5W",
          "j1vlkmkR",
          "WQVcMmkeWPrG",
          "nZO8W4tcRW",
          "k1jFnee",
          "xCoIW4m1ja",
          "W4NdJqdcIZS",
          "jHWxW7q",
          "CSoKbfpdUG",
          "AmkGmSouqq",
          "s0ddP3JcLq",
          "W4tdOqBcRJ4",
          "jbWwW7NdVa",
          "xuZdTgtcIa",
          "W43cGSkZie4",
          "W4qdW7pcK8oQ",
          "W7FdM2tcTSoV",
          "imktWOtcGXq",
          "oIL7WP/cHW",
          "Emohbv7dSW",
          "W4CdcYLO",
          "W6BcTSkbqmkq",
          "WOGPW6tdMGW",
          "WRSoCG",
          "W58YW7RcQSor",
          "A1vBb34",
          "mSk2g8o9W5m",
          "W73cUNRcJIW",
          "W4JcRwpcPHm",
          "W7bMWRZcPx0",
          "ksyli8oe",
          "jSo0Fmocua",
          "W4jaW5atWRq",
          "n3mtd8oK",
          "ccfbveS",
          "W5pdLHZcRJW",
          "WQJcJthdOmoG",
          "W5fOcse6",
          "dtjbxa",
          "W6lcK8kBpN4",
          "ySofrW",
          "WRGnC2ab",
          "W7lcLuj+FW",
          "W6u2WP0KFG",
          "yfpcHwxcHq",
          "lfHxhN4",
          "W4ZdJq3cPIy",
          "W7pcShVcGHe",
          "WQBdMmoVFCk/",
          "W7pdGf4",
          "WQ3dGSoHCmk0",
          "WRRcSSkAw8kh",
          "w2Cfc1ZdPmkEW55TWOC",
          "nSkOrKza",
          "kLfs",
          "W4mynb9Y",
          "W7tdHLZcQW",
          "bCo+W4CNwG",
          "C8kFW5FdSSoJ",
          "EGmtWO/dQW",
          "W6rYga",
          "W6hdMvVcSCoK",
          "WO8aW7FdHc0",
          "W57cJuNcLSoB",
          "W7ldSdNcSX4",
          "WOaPF3qN",
          "W7RdJfpcUW",
          "mtDaWPRcMq",
          "WRJcIqBdRSo/",
          "W7/cLgfUDW",
          "sKJdThe",
          "W7DAteCo",
          "WQJdGSoO",
          "k8oLW7O4va",
          "W7VdJhNcHCos",
          "W6ZcPwz6Aq",
          "W6hcS8k3f8kx",
          "DN8EFW",
          "W7dcTNG",
          "W6CVWOG4lq",
          "mL9Ad8kH",
          "waRcMCotW5i",
          "WQJcQSkcWQHA",
          "aSo2W4a0",
          "s3JdQxtcUW",
          "W794WPxcONa",
          "W4K8jXro",
          "n3mt",
          "AmkTpCoqua",
          "WROmza",
          "WQpcNWhdPmo1",
          "FxL3ymk6",
          "Bf5OWO5S",
          "nHGBW6hdIq",
          "sCkQm8olDG",
          "WQnFb8k6Aq",
          "W7VcO8kqwSkQ",
          "oCoBWPpcTmkV",
          "W6/cGSkEghC",
          "jSkAamoGW7i",
          "oxKop8oK",
          "zLH6WPTQ",
          "W7tcIKH3Ea",
          "W7dcUhhcHYW",
          "xvNdRhNcLq",
          "l8k3m8ovua",
          "BvLMWPvh",
          "valcOSoqW6G",
          "uXesWO3dUG",
          "WPJdUY9MvW",
          "W7xdJeBcMSoM",
          "WORdVmoPvCkP",
          "nublamkX",
          "W7v8WO7cV2G",
          "jrGxW5ddPa",
          "a8kpWQhcVGW",
          "W4FdKaVcTce",
          "pILZWPRcKG",
          "WQ3cNJ3dVSoP",
          "WPhdOIn4Ba",
          "drCzW4xcPq",
          "W7/dHfFcSCo+",
          "W5JcJvO",
          "wGlcV8oOW4m",
          "W5tdSNK",
          "zh4/CmkI",
          "W6v4ceCY",
          "E3ddMwxcQW",
          "W6TJbqyK",
          "ESkFW5pdSq",
          "W5X3hI06",
          "iSkDfSo5W5O",
          "w2yadbVcSmo+W69SWQpcNCk+WQu",
          "WPhdGsD7Fq",
          "W69QWQxcUga",
          "WOKabq",
          "W7q/WP00Eq",
          "W7VdTNhdOmo9",
          "nrqhW6hdOa",
          "W6KwW4/cSSoM",
          "u8krW5BdS8oa",
          "WPVdUIHI",
          "W4LAAwK",
          "ofLsgMi",
          "W53dLxZdR8oq",
          "bZjywa",
          "W77cK0DOtG",
          "y1LQWP9S",
          "WRaAt3a+",
          "iSkAp8o7W4G",
          "AmkhW4ldQSoE",
          "WR7dObrVuq",
          "Emk1nCoosG",
          "W7BcN8oFCCkxymoChW",
          "n8kuWPJcNG",
          "W5bXkxuJ",
          "WQrxpq",
          "FbVcH3/cHW",
          "WOhcM0NcLG",
          "W4xdKdZcOIe",
          "W7JdUNJdQmos",
          "lbPo",
          "WPpdImoNESkU",
          "WQqFsvS8",
          "W4rEW54x",
          "bmoLW4C4ya",
          "CYeeW4FcPq",
          "W4HMW5GWW6K",
          "W4r1oamn",
          "W78YW4xcSCo/",
          "kJaaW5xcMW",
          "jmkqeSo3W4S",
          "lYTbWOFcJa",
          "EquDvmknFCkIjZNdQa",
          "nIfH",
          "cSocW5KEFG",
          "WORcOIZcOmkk",
          "CGZcUCoA",
          "nJDusuK",
          "W7BdNgBcJI0",
          "W7tdU3pcRIK",
          "FfFcHw8",
          "WPKBW7pdHHa",
          "W6RcKM91Bq",
          "W5GEiJHU",
          "WOpdGSoPCSk3",
          "mcbhBLi",
          "pYfaWPBcKW",
          "W6RcG28",
          "kracW6FdOW",
          "EmoXbxFdRq",
          "W6i8lszG",
          "y1PpWPj5",
          "W6OEW4xcT8oe",
          "lLD7cCkG",
          "W7BcIhDTDq",
          "WPFcS8kDWRu",
          "W4VcGuBcP8kj",
          "W4rRq2qI",
          "W5DozMao",
          "W4jdz2Kx",
          "W6hdGvFcUSo+",
          "WRJcTCkaWQjp",
          "W7xdJeBcK8oL",
          "y8kvW47dQ8oV",
          "W4b5CwOb",
          "nqiJiCox",
          "lfvbbSkX",
          "BritWOVdQW",
          "WOddJt8",
          "lJD3WOe",
          "gZzyuL4",
          "pGf+WPBcKW",
          "WQjinSkGEa",
          "WOipW4ldNdW",
          "WRFcHwzUDG",
          "W5dcR8kkbW",
          "bSoXW5OX",
          "WQJdMCoJrSkO",
          "W77cGx9Jqq",
          "W7xcS8k3l8kr",
          "W6FcQmoiwSkw",
          "W45iw38g",
          "W4xcHKZcL8kd",
          "W6XLne8I",
          "W63cLwTP",
          "W47dHaFcOae",
          "WRibC0a/",
          "emo/W44",
          "W5RdUhldP8oY",
          "W7BdReVcGIe",
          "WOuBW4xdMYS",
          "W7FcPmkrbSko",
          "rGZcV8oiW5i",
          "W4jjDMmv",
          "yffmfCkS",
          "W53dPv/dO8ou",
          "ic09W5lcSG",
          "ir9xtgC",
          "WR7cQmkQWQrA",
          "y8keW4JdTSoO",
          "WOGjW6ldLq",
          "oJtdHW3dLa",
          "W4Kwncvz",
          "rmkmA8oeahxcUt0",
          "WRlcUCkf",
          "z2uYDSkD",
          "WOuliHL2",
          "yuBcGwtcNq",
          "t1NdShZcMa",
          "mffDamkO",
          "gSolAmoxbW",
          "pGrar0u",
          "lZWJpCow",
          "W7ZcTCk8qCkr",
          "BvLMWPvo",
          "W6C+WPGuyG",
          "WQ/cNHhdQSo0",
          "W6WWW5JcSSoh",
          "WOJcMKFcH8kp",
          "nZO/W57cRW",
          "WPLkkSkEyW",
          "W7r1aqWG",
          "WRP1WOXPmq",
          "zwqYBmkN",
          "Bs4Zkmo0W53cGmon",
          "W69dW5mgW70",
          "Cgu4Dmkl",
          "W6O1WPS+yW",
          "cmoBzCohoW",
          "WPxdVdvZBa",
          "EmkGkmoutq",
          "s0tcN0xcUa",
          "W4BcNSk8x8kW",
          "W4rjyw0t",
          "lhqzomoa",
          "hG4hW47cSW",
          "W6WykIn0",
          "W73cOSktzqS",
          "WPXeDNK/WPrsW6NdGZmECLi",
          "j0r7c2q",
          "pc18WQBcJa",
          "vfOHB8kX",
          "zKZdUa",
          "W43dHWdcSW",
          "eSkeWOpcMaK",
          "c0aNcCoG",
          "WQynAweK",
          "nIfMWOhcIW",
          "phhdGY/dJW",
          "W64EW4tcQmou",
          "W53cG8k2",
          "W5GZiGfR",
          "obtdNZJdIW",
          "W6hdHKdcQW",
          "W6JdHWFcOdO",
          "W6BcMmk/b3m",
          "pvvxdx4",
          "WQxdImoLA8kJ",
          "WQxdHYjHCq",
          "f8kqxKzV",
          "bdjhwKe",
          "W67cPx3cVmkE",
          "WOBdUIvIDW",
          "WRpdImosFmkI",
          "is0DW4pcOW",
          "kZe2dSon",
          "W6BcV8kSdq",
          "p2qsjmoZ",
          "nHqmW7S",
          "W4dcRwjptq",
          "W6D9asar",
          "ps1GWOdcIG",
          "W7ZcVmkn",
          "W6aZWPa7wq",
          "W5TkW5maW7C",
          "hYaRlSoj",
          "C8kCW5VdRmo1",
          "laKVW7ZdUW",
          "W4raWR7cMNi",
          "EMKJCW",
          "W5ZcJ8kZ",
          "W79vW5yxW64",
          "kmkIWOpcLWO",
          "WOtdOsLFuW",
          "DwWID8km",
          "mdXduhK",
          "WQTzjSk+Ea",
          "WR/cTCkSdSkt",
          "WOOjW6tdNqy",
          "W65GWQtcOM0",
          "mmksWOpcNsa",
          "hCkwxLDb",
          "ugu2A8km",
          "Df4JySku",
          "W6BcUCkZ",
          "WOioW7K",
          "ltevkmoZ",
          "kcHNWPq",
          "W4VcOmkvcLC",
          "W4VdSMNdUmos",
          "nCkeWORcLq4",
          "W6fYaKeU",
          "kJJdLYNdJG",
          "W6fxzwS",
          "WP3cRWldVCoe",
          "p1mmlSoS",
          "z2ieB8kk",
          "W7pcTCk3bSkA",
          "W6afW6FcUCo8",
          "WQucW57cPCo+",
          "A8o9hKK",
          "W5RdUhldP8ow",
          "aJuVka",
          "yGuZWOBdVa",
          "qHtcOCoE",
          "dcf8wq",
          "W4pcJK7cGCkE",
          "qLW7v8kr",
          "kvvyiSkK",
          "W4yzfJ5P",
          "jZjywa",
          "WO7cTchdOmoP",
          "hquUaCol",
          "pY0hW4lcHG",
          "W4/dMCoNbNW",
          "WP8VW7/dUc0",
          "f8oDEmo1lG",
          "E13dPIG",
          "WQNcHd3dPmo0",
          "hdSLcmoq",
          "hmo3W7i/FW",
          "suZdTfxcJq",
          "WQldHCoNACkU",
          "W5SsntG",
          "f8onzCoujW",
          "pYaWjmom",
          "cJXzuLO",
          "WPBcNSoB",
          "D1JcIW",
          "W4JcHCk8ja",
          "mqTTDMq",
          "W4FcJ8kLgv4",
          "bSkwvezH",
          "EaOoWP3cUq",
          "WRGnBLeO",
          "osH3WQZcIG",
          "WRyhChGO",
          "ndldNdpcIW",
          "B0pdI0FcTW",
          "W40yksDR",
          "rxZcP2FcTW",
          "jv5B",
          "mdaWW5BdKq",
          "aSkpwvXN",
          "urxcISomW5S",
          "i19epx4",
          "W4OfdYG",
          "W4ruAwec",
          "W4ldJqhcRaq",
          "ldD6WPJcPa",
          "W6T+bui",
          "WP/dMXJdH8ocjx3dUSorW7T1rgO",
          "nIf8WOBcSG",
          "xX7cMCouW5G",
          "WPhdQtjxEW",
          "WOiBW6ldHIW",
          "iSoDBCotnG",
          "WQ9xpmk5yq",
          "E1JcJW",
          "W6XLj0KH",
          "wMufv1NdKSkjW7Hl",
          "cmoCAmoGjG",
          "DMmJAa",
          "bamqW5hcQW",
          "W55/lsWX",
          "hCoDBCodnW",
          "W7dcTmkSs8kk",
          "wmkvW4i",
          "ECo7h1m",
          "W4NcQKNcKCkq",
          "W77dV3xcII8",
          "WQrCj8k6",
          "WRRcQSkEWQ1x",
          "WPGbW7NdMG",
          "BCkSmmomCa",
          "W4ZcHCk9o3m",
          "WQNcHdpdU8oZ",
          "BMrJWOHn",
          "msaiW4FcVG",
          "jmkoWOxcHru",
          "W7FdT2lcGZi",
          "o3KZaCoc",
          "WRWhCW",
          "bCoBW4CKsG",
          "a0JdTgtcGa",
          "W6BcJ8k7n1i",
          "Dwi5BW",
          "fmoKW64Jta",
          "gvjrjuK",
          "WPTubSkdFW",
          "bcnasu0",
          "emkkrf0P",
          "WRinAvaH",
          "W5VdV3ldO8oi",
          "oI0aW5dcOG",
          "WO8eW7pcLcK",
          "W5z5cY0l",
          "W4j5zw8m",
          "WOuCbr4",
          "W4isnq",
          "nW4gW6FdGq",
          "o2HEbuW",
          "W7BcKKjYAG",
          "DttcJ8obW5m",
          "h8klzf19",
          "W5LjW4ihW6G",
          "W59hWQlcNMS",
          "AraJWOVdRq",
          "WQ5xpCoYzq",
          "x085wSkB",
          "lHT6Ff0",
          "WQTxpCkMxW",
          "WP4Bgq",
          "ceq3p8on",
          "W47dLGVcVYy",
          "yGqi",
          "axv8u8oW",
          "W7XKdLqh",
          "W7FcLMTPBq",
          "WRWNuHjYkwSjrxbvWR47",
          "W5vvW7yxW6G",
          "hSo6W44",
          "W4GDhb9W",
          "oxjuhvG",
          "W4rXfIO",
          "AsWgWOpdVa",
          "FhVcJwtcHG",
          "kG8gW7m",
          "WO/cJsRdH8o+",
          "W5bsyhGp",
          "W7vQWQBcIMu",
          "g8o3W5yUAG",
          "WQHkeCk9yW",
          "AvXnWPfj",
          "zCkdW5/dRCoz",
          "gGfyWPNcPa",
          "D8kzW5tdISo0",
          "W43dKu7cSZ0",
          "e8o3W4eHwa",
          "oItdMJNdGW",
          "cdb7WPdcLq",
          "fd1DWRVcJW",
          "WOSDbsz2",
          "W7/dT2NcIbe",
          "WQxdHmo1Emk4",
          "WRChCN4B",
          "hSozyCov",
          "WO8qhHL3",
          "vMKwtmkj",
          "W40wjsDH",
          "WR5Dj8kMzq",
          "lGbqhuq",
          "EKrLWQ5T",
          "W4TUiKi",
          "W4VcS3dcRXC",
          "W7bbcKOZ",
          "W7JcO8kB",
          "rqxcQmoEW4m",
          "oxKoomoU",
          "aSkxwvr9",
          "WPxdOYf5",
          "WPOlmdDs",
          "WOBcGrtdMCoe",
          "W6O7WPS",
          "fCoBEa",
          "pJzEWPRcJq",
          "W6XLne8O",
          "W4yzkcL0",
          "jIaSW5VcRW",
          "WPFdOcHIFq",
          "h8oZWPK8vG",
          "jbinW6e",
          "BX7cV8oOW40",
          "h8oXW7yIwG",
          "W7xcPmkSfSkq",
          "ESkdW7BdUSoG",
          "iL9lga",
          "W5jiW50zW5u",
          "oIpdLI7dLq",
          "WOddJc53Aa",
          "W5ddKhVcUW",
          "W4BdJqdcSWe",
          "WRCjFN4Q",
          "WR/cVbRdV8om",
          "vCknvvr6",
          "W6v+aemz",
          "ivrliSkQ",
          "WOiEhG",
          "lLLA",
          "WRhdLCkM",
          "W5VdV3ZdVmop",
          "f8kEqLTw",
          "qSkzW7JdI8oI",
          "oYy5W4xcPq",
          "hGaEW7VcJq",
          "jbinW6hcPq",
          "fmoLW5eRwa",
          "W5RdU3tdR8oR",
          "W7ZcQCkgySkx",
          "EridWO/dRq",
          "W6OZWPiYwG",
          "WRhdRglcMtm",
          "W53dR2K",
          "WOKwxG",
          "W7RcIMD4sq",
          "dJPBAfO",
          "WQpdHmoOFq",
          "yvRcNw0",
          "gYufW4tdNq",
          "W57dUhpdUmoi",
          "W64yW4BcSmog",
          "hmoxFSoJnG",
          "EmoXbwtdSa",
          "C1VcGwBcIG",
          "Bmo4bea",
          "bmowlmoDoG",
          "m3Ko",
          "dJzb",
          "WR3cU8kBWQ1A",
          "W6KyW4y",
          "W4VcMmkBna",
          "CweYFW",
          "wKBdK2tcKW",
          "btPBwga",
          "W60jW54",
          "WOyWswqd",
          "W6dcS8kIamkk",
          "W5JcSedcMCk9",
          "W4hdKH7cQYS",
          "rrNcTmoxW5i",
          "ohKemG",
          "Cv7cIxRcHW",
          "Cgu2A8km",
          "W5/cGe3cLSkK",
          "W7BcQCkgsmkx",
          "W7npW5mcW6G",
          "W4hcNuhcS8kR",
          "WQ3cIsBdImoO",
          "WR7cJSklWRLA",
          "WRBcV8kD",
          "xb7dOmojW5i",
          "hmooWOlcQW",
          "mmk+eSomW7C",
          "WRvSgSkXtq",
          "otOMkmoe",
          "W6KfnWPQ",
          "WRpdNtD3wG",
          "W5WsmJHV",
          "W7ddIfhcTmoT",
          "iteSomoU",
          "fmoXW5WXrq",
          "W7RdRuVcGIe",
          "BfLNWPHX",
          "W7bQWR/cQ30",
          "eSorySou",
          "W5fsW4yD",
          "aSo3W5yU",
          "m8khxSoMW5O",
          "i8kgfSoMW7y",
          "f8o7W4C",
          "W7OuW5NcQmo9",
          "WQddNSo1FmkU",
          "WQvDoSk1za",
          "jCkoWOtcNtm",
          "F8ktW5hdNmoU",
          "W73cIKBcLCk8",
          "W7ZcUNxcMI0",
          "BCoXjuldPW",
          "WOpdOmotv8k/",
          "Av9LWPjk",
          "WQ/cNHddPmoO",
          "WQVdQCokvmkE",
          "hSoEyW",
          "W5ZcKaG",
          "W4/cH0BdKG",
          "jCkreSoGW54",
          "vmkHpCourq",
          "vWlcNSoXW7q",
          "W4ZdVNldOSoi",
          "W47cNeBdKSkz",
          "W4ddGhdcI8oU",
          "WO8kfbDW",
          "W7bMWRRcQwG",
          "W4lcIuxcLW",
          "W4pcJ8kZi08",
          "nIbbxfW",
          "WOGVvxzH",
          "W4isjZ9Z",
          "W4ldJqhcRbS",
          "W5f/hcOG",
          "WQtcIWBdO8oI",
          "W73cShpcGdy",
          "WOKMW7FdMtW",
          "W5HUlwaK",
          "W7xcNCkY",
          "bCoZW5a",
          "pYqRi8om",
          "BG0dWPC",
          "C8o7fK7dSq",
          "mmoIW4a5pq",
          "pICoW57cPa",
          "W4lcHCkXo2u",
          "cJTutvW",
          "W5pdM1VcVSoM",
          "gIDMWPRcIa",
          "ir1ghgm",
          "WO8zhrPu",
          "W5ddN1tdGmkh",
          "iSktWRtcNX4",
          "aJxdKINdHW",
          "W7tcTmkdz8kA",
          "W77cUCkGaSkk",
          "WPpdQJjvDW",
          "W4pdMLhcTtu",
          "A2dcIwBcHG",
          "ncldRc7dHW",
          "eSo+W4m6sW",
          "W7ZcPCkhqmot",
          "W7ldJwZdPCo/",
          "WR5ujSk1",
          "W50sjY9Y",
          "oY0EW7hcPG",
          "W4nWeciG",
          "kxzcg00",
          "od0SiSkc",
          "bdzBsgq",
          "W5VcGuZcHSkt",
          "yuBcHgpcHW",
          "W73dILNcNmoI",
          "wuddPgtcIq",
          "W5vvW7Sw",
          "aSoMW4SKuq",
          "W6ldGNtdLCor",
          "cZXrra",
          "jCkqb8oGW5y",
          "W755fce",
          "ocXZWOpcIG",
          "m3GtlSoZ",
          "pmoaWPtcQ8kV",
          "W7RdSwNcOs8",
          "W6efW5pdPSo6",
          "vXJcUCou",
          "BXyiWPZcSq",
          "W5XmfG",
          "o8kqeSoNW4O",
          "jSkeWRZcKYS",
          "se7dSwJcUq",
          "FvxcG0NcMW",
          "W60dW7xcTCo2",
          "oIDMWPRcIa",
          "iLvf",
          "eCoiq8oCfW",
          "BCkQmSou",
          "W7BdUcBcStK",
          "W50snIbN",
          "m1fdfq",
          "zW8gWPZdSG",
          "lXGnW6ddHa",
          "mYxdOdldLa",
          "w8o6o2/dQq",
          "jSkiWOC",
          "nCoDW6udwW",
          "rSomf3BdIG",
          "W6FcVw3cMHK",
          "kv9ygIC",
          "W43cMfJcNSkc",
          "BKz5WPT2",
          "ECkQkCooqa",
          "W4/cGeNcGSkp",
          "WOKknrnW",
          "yvpcNh7cMG",
          "WOtdKaVcOse",
          "lCkIqr/cQJxdQsZcGtRdKmkJ",
          "WRBcV8kaWRrI",
          "b8oWW5yUva",
          "W7tcOSkmBCkr",
          "ksfIWP/cNW",
          "cZjwvK8",
          "gsDqtW",
          "m0bdcmkX",
          "WQtcGZZdRSkN",
          "mcCgW5ZcLq",
          "WRRcJtxdRSkQ",
          "hJeJlSow",
          "WQVcQsVdN3m",
          "ASk2l8ofua",
          "C8kCW5/cV8o2",
          "W6hcQMFcGq",
          "WQaWbJPd",
          "AG0jWPRdNW",
          "W5zZcLiN",
          "kdddHbpdKq",
          "W6XXh2CL",
          "fCkErfm",
          "WO0kgJ9G",
          "WRxdGSovBCkO",
          "mIfzWQNcPG",
          "WQPQW5jJja",
          "WOKkiXn3",
          "uX/cJ8ouW5G",
          "W6xcHCkgx8kA",
          "W7NcVMBcQJC",
          "o1vygG",
          "B8ofa8oSWP8",
          "hCoDySofdG",
          "lSkeWOJcNta",
          "WR/cU8kAWQa",
          "kaCkWOFdRq",
          "gcT/WP7cMW",
          "afiOgmoZ",
          "tSo2h0ddMa",
          "W5TYcKuY",
          "bCo3W4aMwG",
          "jXagW7VdVa",
          "eSo6W4m5ta",
          "WOfvfCkatW",
          "WQxdJmoYEa",
          "WOuBgG",
          "qeJdRxu",
          "W5RcRSkZjfS",
          "W5FdIWRcSZO",
          "W7lcIKPuBq",
          "WPpdVsLJDG",
          "W7lcT3hcIJm",
          "W7u2WOKW",
          "jmkjWORcHG4",
          "EMi5",
          "fsv/WPy",
          "W4JdTM/dV8oE",
          "bSo6BSodea",
          "WPpdQJjADW",
          "m8koWRtcQq",
          "bCknuvX6",
          "mbiwW7VdRa",
          "WP/dOIDKCW",
          "kunWeSkK",
          "W4OpmG",
          "W4j3dcOW",
          "W57cNSk3iG",
          "WPpdNdjVDa",
          "bdzg",
          "W6P/cLyY",
          "EmowbehdUq",
          "W6SzW4VcRmoM",
          "W6P/hKKO",
          "WQdcMZO",
          "W680WPKZ",
          "omoSqCo8",
          "W7VcUmkWbSkm",
          "fGHIWORcHa",
          "ErecWPZdKa",
          "cG/cV8kBWPG",
          "E8kKo8ofzW",
          "WQuRC2qP",
          "WOSrfW8",
          "aSoxECoEjG",
          "lM8qlG",
          "WQ/cSSklWQXl",
          "CuhcRgtcIG",
          "W7lcT3xcMsW",
          "hmkAuuf8",
          "W7hcJ2vyCa",
          "j1fggM8",
          "W7tcGM9VEa",
          "E8ktbSo6",
          "jq8gW6BdUW",
          "CCo1hei",
          "W5VcMCk3iMu",
          "W7RcIwfWrG",
          "FL/cHM/cUW",
          "WPJcItpdQmoZ",
          "D0tcOw4",
          "cCo+WP0/za",
          "nmkBCwv4",
          "FbPh",
          "W43dPhJdVSoK",
          "FmkSomouta",
          "ngi0jmo1",
          "m8kZWP7cMH8",
          "iXitW67cJG",
          "W5L9dGC1",
          "W6pdNMBcKCo7",
          "AXCoWORdVa",
          "W6BdVLVcU8o+",
          "W7/cQ0FcHIO",
          "WOK9mWb9",
          "W7PBaLuY",
          "W6VdOc3cVqS",
          "W45pywfk",
          "ncm6omo6",
          "W7FdJ0BcNSoP",
          "WQtdN8oeDSk1",
          "ArOt",
          "ESo6eG",
          "W5JcGuFcNa",
          "pxmub8oU",
          "WOKwbq",
          "W693zN0O",
          "WPhdOID/Da",
          "W5jgW5ezW7S",
          "W5hdIf7cS8om",
          "WPzrdG",
          "WRrrnW",
          "i1HadSk2",
          "W5WhkIvY",
          "iLDNWPLQ",
          "W7SuW57cQmo7",
          "W7dcMmkQkSoP",
          "s2VdOxpcIG",
          "W7ZcJ8ktjNG",
          "W6hdKK/cOae",
          "kXmZW6FdPW",
          "W7/dQM7cNqK",
          "W6KJW4dcQSoh",
          "lLOjomo1",
          "W5pdGrZcQd4",
          "W4/dLaVcOW",
          "CfNcH2hcPq",
          "W5FdNu3dTCoE",
          "W5ThWP7cJxW",
          "iSkJWORcLre",
          "perekgu",
          "iL9acSkm",
          "pHGkamoL",
          "WQuNrrjV",
          "kcldLI/dRW",
        ];
        return (ot = function () {
          return t;
        })();
      }
      function st(t, e) {
        return dt(e - 427, t);
      }
      !(function (t, e) {
        function n(t, e) {
          return dt(t - 571, e);
        }
        var r = t();
        function i(t, e) {
          return dt(e - -594, t);
        }
        function a(t, e) {
          return dt(e - 786, t);
        }
        for (;;)
          try {
            if (
              449501 ===
              (-parseInt(i("bi2m", 984)) / 1) *
                (-parseInt(i("4(Wz", 642)) / 2) +
                parseInt(i("6*XC", 256)) / 3 +
                -parseInt(a("ysXH", 1416)) / 4 +
                (-parseInt(n(2387, "4PI7")) / 5) *
                  (-parseInt(a("4PI7", 2243)) / 6) +
                (parseInt(i("Vt7a", 187)) / 7) *
                  (-parseInt(n(2129, "GmUY")) / 8) +
                -parseInt(n(2446, "^vJ6")) / 9 +
                (parseInt(n(2255, "PlwN")) / 10) *
                  (parseInt(a("^vJ6", 2107)) / 11)
            )
              break;
            r.push(r.shift());
          } catch (t) {
            r.push(r.shift());
          }
      })(ot);
      var ct = (function () {
        function t(t, e) {
          return dt(t - -688, e);
        }
        var e = {};
        function n(t, e) {
          return dt(e - 561, t);
        }
        (e[n("cEpe", 2398)] = n("3B$Q", 2276)),
          (e[t(1191, "ysXH")] = function (t, e) {
            return t === e;
          }),
          (e[a(1950, "Lr6j")] = a(1464, "GmUY"));
        var r = e,
          i = !0;
        function a(t, e) {
          return dt(t - -52, e);
        }
        return function (e, o) {
          function s(e, n) {
            return t(n - -84, e);
          }
          function c(t, e) {
            return n(e, t - -1005);
          }
          function l(t, e) {
            return a(t - -923, e);
          }
          if (r[c(245, "g^7N")](s("XyZ0", 648), r[c(276, "h9sa")]))
            return s("zd1V", 1516) + "-" + _0x3d8c7f + l(665, "bi2m") + "ve";
          var u = i
            ? function () {
                function t(t, e) {
                  return c(t - 1360, e);
                }
                function n(t, e) {
                  return c(e - 486, t);
                }
                function i(t, e) {
                  return l(t - 50, e);
                }
                if (r[i(1108, "L7dt")] === i(380, "%3dT") && o) {
                  if (r[n("%3dT", 2227)](i(869, "3Ebw"), n("3B$Q", 1642))) {
                    var a = _0x4ee827
                      ? function () {
                          function t(t, e) {
                            return n(t, e - -668);
                          }
                          if (_0x35a70a) {
                            var e = _0x207cde[t("ZD5J", 1495)](
                              _0x5c856c,
                              arguments
                            );
                            return (_0x7072a7 = null), e;
                          }
                        }
                      : function () {};
                    return (_0x126c97 = !1), a;
                  }
                  var s = o[t(2744, "]zBX")](e, arguments);
                  return (o = null), s;
                }
              }
            : function () {};
          return (i = !1), u;
        };
      })()(void 0, function () {
        function t(t, e) {
          return dt(t - 620, e);
        }
        function e(t, e) {
          return dt(t - 692, e);
        }
        var n = {};
        function r(t, e) {
          return dt(e - -592, t);
        }
        n[e(1207, "$ggD")] = t(2344, "Os^u") + t(2122, "t%Cy") + "+$";
        var i = n;
        return ct[r("ANg1", 1708) + t(1884, "3Ebw")]()
          [r("GmUY", 225) + "h"](i[r("$ggD", -77)])
          [r("t%Cy", 510) + t(1761, "4PI7")]()
          [t(1725, "F@Tj") + r("Lr6j", 1116) + "r"](ct)
          [r("UvvK", 517) + "h"](i[e(1545, "rDZX")]);
      });
      ct();
      var lt,
        ut =
          ((lt = !0),
          function (t, e) {
            var n = lt
              ? function () {
                  function n(t, e) {
                    return dt(t - 807, e);
                  }
                  if (e) {
                    var r = e[n(2791, "UvvK")](t, arguments);
                    return (e = null), r;
                  }
                }
              : function () {};
            return (lt = !1), n;
          });
      function dt(t, e) {
        var n = ot();
        return (dt = function (e, r) {
          var i = n[(e -= 440)];
          if (void 0 === dt.xpJPGy) {
            var a = function t(e) {
                for (
                  var n, r, i = "", a = "", o = i + t, s = 0, c = 0;
                  (r = e.charAt(c++));
                  ~r && ((n = s % 4 ? 64 * n + r : r), s++ % 4)
                    ? (i +=
                        o.charCodeAt(c + 10) - 10 != 0
                          ? String.fromCharCode(255 & (n >> ((-2 * s) & 6)))
                          : s)
                    : 0
                )
                  r =
                    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(
                      r
                    );
                for (var l = 0, u = i.length; l < u; l++)
                  a += "%" + ("00" + i.charCodeAt(l).toString(16)).slice(-2);
                return decodeURIComponent(a);
              },
              o = function (t, e) {
                var n,
                  r,
                  i = [],
                  o = 0,
                  s = "";
                for (t = a(t), r = 0; r < 256; r++) i[r] = r;
                for (r = 0; r < 256; r++)
                  (o = (o + i[r] + e.charCodeAt(r % e.length)) % 256),
                    (n = i[r]),
                    (i[r] = i[o]),
                    (i[o] = n);
                (r = 0), (o = 0);
                for (var c = 0; c < t.length; c++)
                  (o = (o + i[(r = (r + 1) % 256)]) % 256),
                    (n = i[r]),
                    (i[r] = i[o]),
                    (i[o] = n),
                    (s += String.fromCharCode(
                      t.charCodeAt(c) ^ i[(i[r] + i[o]) % 256]
                    ));
                return s;
              };
            (dt.BqemWL = o), (t = arguments), (dt.xpJPGy = !0);
          }
          var s = n[0],
            c = e + s,
            l = t[c];
          if (l) i = l;
          else {
            if (void 0 === dt.jNwILp) {
              var u = function (t) {
                (this.WrDxrz = t),
                  (this.PLGxgI = [1, 0, 0]),
                  (this.TplDyR = function () {
                    return "newState";
                  }),
                  (this.NBsWmt = "\\w+ *\\(\\) *{\\w+ *"),
                  (this.PxcmXm = "['|\"].+['|\"];? *}");
              };
              (u.prototype.UPtFab = function () {
                var t = new RegExp(this.NBsWmt + this.PxcmXm).test(
                  this.TplDyR.toString()
                )
                  ? --this.PLGxgI[1]
                  : --this.PLGxgI[0];
                return this.vKDJTg(t);
              }),
                (u.prototype.vKDJTg = function (t) {
                  return Boolean(~t) ? this.yDRizU(this.WrDxrz) : t;
                }),
                (u.prototype.yDRizU = function (t) {
                  for (var e = 0, n = this.PLGxgI.length; e < n; e++)
                    this.PLGxgI.push(Math.round(Math.random())),
                      (n = this.PLGxgI.length);
                  return t(this.PLGxgI[0]);
                }),
                new u(dt).UPtFab(),
                (dt.jNwILp = !0);
            }
            (i = dt.BqemWL(i, r)), (t[c] = i);
          }
          return i;
        })(t, e);
      }
      function mt(t, e) {
        return dt(t - 879, e);
      }
      ut(void 0, function () {
        var t = {};
        function e(t, e) {
          return dt(e - 160, t);
        }
        (t[s(2237, "yitr")] =
          s(896, "zd1V") + s(2216, "bi2m") + a("XyZ0", 1746) + s(1003, "Vt7a")),
          (t[s(1473, "^vJ6")] = a("7zVK", 1554));
        var n = t,
          r = (function () {
            function t(t, e) {
              return s(t - 483, e);
            }
            var r;
            function i(t, n) {
              return e(n, t - 669);
            }
            try {
              r = Function(
                n[a(2541, "v5%E")] +
                  (a(3166, "sqmn") +
                    t(2207, "Os^u") +
                    a(3036, "Prd$") +
                    t(2353, "0b^H") +
                    i(2455, "$ggD") +
                    i(1377, "KCU%") +
                    " ));")
              )();
            } catch (t) {
              r = window;
            }
            function a(t, n) {
              return e(n, t - 778);
            }
            return r;
          })(),
          i = (r[a("cEpe", 2587) + "le"] = r[s(1748, "h9j[") + "le"] || {});
        function a(t, e) {
          return dt(e - 673, t);
        }
        var o = [
          n[e("rDZX", 2529)],
          e("3B$Q", 687),
          a("Lr6j", 1357),
          e("59xp", 1439),
          s(1518, "v5%E") + s(415, "KCU%"),
          e("F@Tj", 2328),
          a("t%Cy", 1154),
        ];
        function s(t, e) {
          return dt(t - -87, e);
        }
        for (var c = 0; c < o[s(757, "PlwN") + "h"]; c++) {
          var l =
              ut[a("bi2m", 1760) + a("ZD5J", 1894) + "r"][
                a("^vJ6", 2042) + a("%3dT", 1766)
              ][s(1923, "%3dT")](ut),
            u = o[c],
            d = i[u] || l;
          (l[a("P4Ha", 2198) + e("h9j[", 2347)] = ut[s(1719, "^vJ6")](ut)),
            (l[a("GmUY", 2824) + e("yitr", 1974)] =
              d[e("59xp", 1737) + a("aByn", 2966)][a("GmUY", 2635)](d)),
            (i[u] = l);
        }
      })();
      var vt = n(69),
        ft = {};
      function pt(t, e) {
        return dt(e - -456, t);
      }
      ft[mt(2140, "xeGx") + mt(1492, "GmUY") + "de"] =
        H.a[st("3B$Q", 1651) + pt("%3dT", 211)];
      var ht = {};
      (ht[pt("GmUY", -2) + pt("Os^u", 1285)] = function (t) {
        return t[st("59xp", 2042)][mt(1873, "XyZ0") + st("XyZ0", 1041)];
      }),
        (ht[st("IOmU", 2788) + st("P4Ha", 1835) + "r"] = function (t) {
          return t[pt("3B$Q", 1174)][st("]zBX", 1760) + "er"];
        });
      var Wt = {
          name: pt("6*XC", 1043) + st("ysXH", 1886),
          directives: ft,
          data: function () {
            var t = {};
            (t[s("59xp", 2484)] = o("%79i", 1845) + "t"),
              (t[s("aByn", 2606)] = o("F@Tj", 3252) + "ất"),
              (t[s("6*XC", 940)] =
                r(2854, "$ggD") + r(2098, "IOmU") + r(1881, "3B$Q")),
              (t[s("4(Wz", 2668)] =
                o("6*XC", 2055) + o("UjkZ", 2886) + o("Rpq!", 3124)),
              (t[r(1529, "PlwN")] =
                r(1678, "ysXH") + s("ysXH", 2034) + r(3042, "rDZX") + "y"),
              (t[s("mVOl", 1509)] =
                s("aByn", 1651) + r(1527, "wPSr") + o("3Ebw", 2744) + "ck"),
              (t[o("bi2m", 1918)] = o("Vt7a", 2692)),
              (t[r(2210, "XyZ0")] = r(2486, "Vt7a") + r(2204, "59xp"));
            var e = t,
              n = {};
            function r(t, e) {
              return mt(t - -98, e);
            }
            (n[r(1580, "aByn") + s("zd1V", 2572) + s("Lr6j", 1946)] = "id"),
              (n[r(1372, "h9sa")] = 1),
              (n[o("!Rq8", 2338)] = 10);
            var i = {};
            (i.id = o("^vJ6", 2845) + o("gvzY", 1381)),
              (i[r(3107, "UjkZ")] = r(2131, "mVOl") + r(1401, "Vt7a"));
            var a = {};
            function o(t, e) {
              return pt(t, e - 1360);
            }
            function s(t, e) {
              return st(t, e - -95);
            }
            (a.id = "id"),
              (a[s("ZD5J", 2371)] = s("xeGx", 1024) + s("ANg1", 1275));
            var c = {};
            (c.id = e[r(2260, "I#uU")]),
              (c[o("Os^u", 3281)] = e[s("@NQe", 1110)]);
            var l = {};
            (l[r(2686, "PlwN") + o("!Rq8", 2639)] = "5"),
              (l[r(1920, "GmUY") + s("yitr", 2301)] =
                s("aByn", 1205) +
                s("@NQe", 2412) +
                o("h9j[", 1443) +
                o("^vJ6", 1352)),
              (l[r(2648, "wPSr") + r(1763, "L7dt")] = 26),
              (l[o("^vJ6", 2040) + o("3Ebw", 2319)] = 140),
              (l[s("0b^H", 2231) + s("mVOl", 2186)] = 1e3),
              (l[o("6*XC", 1393) + o("3Ebw", 3168) + r(2203, "h9j[") + "d"] =
                !1);
            var u = {
              id: 1,
            };
            u[s("%79i", 2554)] =
              s("UjkZ", 789) + s("ZD5J", 1103) + r(1451, "rDZX");
            var d = {
              id: 2,
            };
            d[r(2367, "yitr")] = e[r(2958, "3B$Q")];
            var m = {
              id: 3,
            };
            m[r(2178, "aByn")] = e[r(2512, "4PI7")];
            var v = {
              id: 4,
            };
            v[o("3Ebw", 3078)] =
              r(2574, "4(Wz") + r(1994, "UvvK") + o("ZD5J", 2467);
            var f = {
              id: 5,
            };
            f[o("3Ebw", 3078)] = e[s("%79i", 1363)];
            var p = {
              id: 6,
            };
            p[o("v5%E", 2451)] = e[r(1581, "gvzY")];
            var h = {};
            (h[s("!Rq8", 1871) + "ng"] = !1),
              (h[o("t%Cy", 2132) + "er"] = !1),
              (h[s("Prd$", 2570)] = !1);
            var W = {};
            return (
              (W[s("XyZ0", 1072) + r(2327, "Lr6j")] = 1),
              (W[o("59xp", 2996) + r(2935, "mVOl")] = null),
              (W[o("IOmU", 2323) + r(1266, "t%Cy") + o("F@Tj", 2537)] = null),
              (W[r(2023, "bi2m") + o("KCU%", 2930) + r(2893, "Prd$")] = !1),
              (W[r(1668, "wPSr") + s("UvvK", 2692) + o("3B$Q", 2222)] = !1),
              (W[s("aByn", 1966) + "d"] = null),
              (W[r(2594, "wPSr") + o("mVOl", 3054)] = null),
              (W[r(1605, "PlwN") + r(2583, "PlwN")] = null),
              (W[r(3157, "ZD5J") + r(2504, "gvzY") + "t"] = []),
              (W[r(1263, "XyZ0") + s("cEpe", 2565) + "al"] = 0),
              (W[s("g^7N", 2124) + r(1436, "4PI7") + r(1400, "IOmU")] = ""),
              (W[o("F@Tj", 2015) + o("I#uU", 2430) + s("]zBX", 1933)] = {}),
              (W[r(2868, "F@Tj") + o("IOmU", 2308) + o("UvvK", 2593)] = !1),
              (W[r(1779, "mVOl") + o("UjkZ", 2541) + "ly"] = !1),
              (W[s("Vt7a", 2131) + o("zd1V", 1949) + s("sqmn", 2344)] = !1),
              (W[
                r(2434, "yitr") +
                  s("GmUY", 1663) +
                  s("h9j[", 2060) +
                  s("ANg1", 1578)
              ] = !1),
              (W[s("$ggD", 1758) + o("GmUY", 3151) + o("L7dt", 2144)] = !1),
              (W[
                o("g^7N", 1719) +
                  r(2202, "I#uU") +
                  s("XyZ0", 1906) +
                  s("%79i", 1478)
              ] = !1),
              (W[
                o("6*XC", 2461) +
                  o("P4Ha", 2569) +
                  r(1483, "3Ebw") +
                  o("59xp", 3068) +
                  "nt"
              ] = !1),
              (W[
                s("rDZX", 1671) +
                  r(1973, "KCU%") +
                  r(2801, "t%Cy") +
                  s("!Rq8", 1073)
              ] = !1),
              (W[o("@NQe", 2562) + s("59xp", 2253) + "t"] = []),
              (W[r(1686, "ZD5J") + r(2716, "Lr6j") + s("xeGx", 1424) + "sc"] =
                !0),
              (W[r(2857, "PlwN") + o("Prd$", 1841) + o("%3dT", 1894)] = null),
              (W[s("cEpe", 1520) + r(3002, "gvzY") + o("^vJ6", 3071)] = !1),
              (W[s("Lr6j", 1479) + s("rDZX", 1652)] = null),
              (W[o("rDZX", 2564) + r(3160, "3B$Q") + "ag"] = !1),
              (W[r(1405, "L7dt") + s("xeGx", 2568) + o("7zVK", 1978) + "g"] =
                !1),
              (W[r(1583, "v5%E") + s("rDZX", 1481) + s("v5%E", 2081)] = !1),
              (W[
                o("gvzY", 1632) +
                  s("0b^H", 1967) +
                  o("aByn", 2446) +
                  r(1534, "L7dt")
              ] = !1),
              (W[o("ZD5J", 3028) + r(2064, "]zBX")] = null),
              (W[o("%3dT", 1592) + s("GmUY", 1372) + o("mVOl", 2772)] = n),
              (W[s("7zVK", 1403) + r(2895, "4(Wz") + s("cEpe", 2602)] = [
                i,
                a,
                c,
              ]),
              (W[
                o("P4Ha", 2614) +
                  s("mVOl", 969) +
                  r(1252, "h9j[") +
                  r(2513, "wPSr")
              ] = l),
              (W[s("yitr", 2458) + o("F@Tj", 2833) + o("6*XC", 2085)] = null),
              (W[s("UjkZ", 2314) + s("0b^H", 2427) + "st"] = [
                u,
                d,
                m,
                v,
                f,
                p,
              ]),
              (W[r(2432, "h9sa") + o("^vJ6", 3146)] = [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
              ]),
              (W[o("UjkZ", 1565) + s("I#uU", 2578) + s("ZD5J", 2582)] = h),
              (W[o("$ggD", 2563) + s("Lr6j", 1846) + s("Prd$", 2649)] = !1),
              (W[s("mVOl", 1051) + s("XyZ0", 1142) + "t"] = !1),
              (W[r(1564, "h9j[") + s("sqmn", 1645) + s("gvzY", 1010) + "y"] =
                null),
              (W[o("3Ebw", 1961) + r(2466, "ysXH") + s("3B$Q", 1455) + "ky"] =
                null),
              (W[r(1551, "ZD5J") + r(1770, "XyZ0") + "e"] = {}),
              (W[s("6*XC", 2473) + "s"] = [
                s("Os^u", 2715) + s("wPSr", 832) + r(1648, "P4Ha"),
                e[r(2860, "ysXH")],
                o("ZD5J", 2666) + r(3020, "I#uU") + "h",
                s("Lr6j", 2710),
                o("Rpq!", 1702) + o("UvvK", 2320) + "d",
                r(2849, "Lr6j") + r(2651, "UvvK"),
                r(2785, "I#uU") + o("%3dT", 3115),
                r(2746, "aByn") + r(2115, "PlwN"),
                e[s("KCU%", 2082)],
              ]),
              W
            );
          },
          computed: it(
            it(
              it(
                {},
                Object(p.c)([
                  mt(2126, "Prd$") + pt("bi2m", 950),
                  st("Rpq!", 1488) + st("UjkZ", 1596),
                  st("Prd$", 2633) + "d",
                ])
              ),
              Object(p.e)(ht)
            ),
            {},
            {
              hasAvatar: function () {
                return !!this[
                  ((n = 2294),
                  (r = "^vJ6"),
                  mt(n - -458, r) + ((t = "Prd$"), (e = 744), pt(t, e - -264)))
                ];
                var t, e, n, r;
              },
              chapter_id: function () {
                return window[
                  ((n = 2282),
                  (r = "zd1V"),
                  mt(n - -812, r) + ((t = 983), (e = "xeGx"), pt(e, t - 410)))
                ];
                var t, e, n, r;
              },
              chapter_res: function () {
                return window[
                  ((n = 1890),
                  (r = "zd1V"),
                  st(r, n - -752) + ((t = 1132), (e = "g^7N"), pt(e, t - 35)))
                ];
                var t, e, n, r;
              },
              slug: function () {
                return window[((t = "h9sa"), (e = 2282), pt(t, e - 1370))];
                var t, e;
              },
            }
          ),
          methods: it(
            it({}, Object(p.b)([st("wPSr", 2093) + st("KCU%", 2782)])),
            {},
            {
              clearData: function () {
                function t(t, e) {
                  return pt(t, e - 1304);
                }
                function e(t, e) {
                  return mt(t - -310, e);
                }
                function n(t, e) {
                  return mt(t - -732, e);
                }
                (this[t("6*XC", 3056) + t("Lr6j", 2394)] = 1),
                  (this[e(1061, "cEpe") + t("zd1V", 1796) + e(2289, "7zVK")] =
                    !1),
                  (this[e(2372, "v5%E") + e(2345, "sqmn") + n(2485, "3Ebw")] =
                    !1),
                  (this[e(2326, "aByn") + t("IOmU", 2156)] = null),
                  (this[e(2401, "KCU%") + e(2940, "6*XC")] = null),
                  (this[e(1152, "L7dt") + e(1772, "I#uU") + "t"] = []),
                  (this[t("rDZX", 1949) + n(2005, "3B$Q") + "t"] = []),
                  (this[e(2032, "t%Cy") + e(2429, "Vt7a") + "al"] = 0),
                  (this[t("7zVK", 1919) + e(1629, "gvzY") + t("ysXH", 3006)] =
                    ""),
                  (this[e(2145, "Rpq!") + n(854, "4(Wz") + e(1396, "cEpe")] =
                    null),
                  (this[e(1220, "3Ebw") + e(1924, "0b^H") + n(1714, "GmUY")] =
                    !1),
                  (this[t("mVOl", 1632) + e(1477, "cEpe")] = null),
                  (this[n(931, "mVOl") + t("h9j[", 3162) + "ag"] = !1),
                  (this[
                    e(1800, "ANg1") + t("bi2m", 2612) + e(2166, "rDZX") + "g"
                  ] = !1);
              },
              fetchChapter: function () {
                var t = this;
                return nt(
                  v.a.mark(function e() {
                    var n, r, i, a, o, s, c, l, u, d, m, f;
                    return v.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((m = function (t, e) {
                                return mt(t - -1606, e);
                              }),
                              (r = function (t, e) {
                                return mt(e - -1019, t);
                              }),
                              ((n = {})[
                                (i = function (t, e) {
                                  return st(t, e - -880);
                                })("%79i", 174)
                              ] = function (t, e) {
                                return t - e;
                              }),
                              (n[i("I#uU", 1583)] =
                                i("Prd$", 35) +
                                i("sqmn", 447) +
                                m(1486, "]zBX") +
                                "--"),
                              (n[r("Lr6j", 383)] = i("3Ebw", 1079)),
                              (n[m(239, "aByn")] = function (t, e) {
                                return t === e;
                              }),
                              (n[m(1297, "GmUY")] = r("ANg1", 1528) + "p>"),
                              (n[m(182, "$ggD")] = r("L7dt", 2067) + ">"),
                              (n[i("xeGx", 646)] = function (t, e) {
                                return t !== e;
                              }),
                              (n[r("7zVK", 2245)] = i("wPSr", 1392)),
                              (a = n),
                              (document[r("PlwN", 706)][
                                i("%3dT", 733) + m(1456, "59xp")
                              ] =
                                a[m(1221, "t%Cy")] +
                                t[
                                  i("h9sa", 824) +
                                    m(1202, "F@Tj") +
                                    i("PlwN", 1402)
                                ][m(714, "KCU%") + i("bi2m", 1032)]),
                              t[r("UvvK", 2131) + "l"](),
                              X.a[r("IOmU", 682) + i("mVOl", 1720)](
                                function () {
                                  function e(t, e) {
                                    return i(e, t - -403);
                                  }
                                  var n = {};
                                  function r(t, e) {
                                    return i(e, t - 922);
                                  }
                                  function o(t, e) {
                                    return m(t - 926, e);
                                  }
                                  (n[o(1191, "3Ebw")] = 16),
                                    (t[
                                      e(-97, "PlwN") +
                                        o(2508, "xeGx") +
                                        e(1452, "UjkZ") +
                                        "y"
                                    ] = new vt(
                                      t[o(2326, "UvvK")][
                                        o(1646, "3B$Q") + r(1505, "Os^u")
                                      ],
                                      n
                                    )),
                                    (t[
                                      r(1771, "h9j[") +
                                        e(898, "XyZ0") +
                                        e(267, "3B$Q") +
                                        "ky"
                                    ] = new vt(
                                      t[r(2409, "Vt7a")][
                                        e(502, "IOmU") + e(569, "PlwN") + "u"
                                      ],
                                      {
                                        top: a[r(1144, "3B$Q")](
                                          window[
                                            e(107, "mVOl") +
                                              e(297, "!Rq8") +
                                              "t"
                                          ] - 150,
                                          16
                                        ),
                                      }
                                    ));
                                }
                              ),
                              (o = t[i("rDZX", 1044) + m(637, "yitr")]),
                              (t[
                                i("wPSr", 763) +
                                  i("mVOl", 127) +
                                  m(435, "wPSr") +
                                  m(800, "ZD5J")
                              ] = !1),
                              404 !== o[i("!Rq8", 111)][i("7zVK", 584) + "us"])
                            ) {
                              e.next = 22;
                              break;
                            }
                            if (a[i("h9j[", 57)] !== m(930, "4PI7")) {
                              e.next = 18;
                              break;
                            }
                            return (
                              ((s = {})[i("UvvK", 1484) + i("%3dT", 948)] =
                                _0x1ebe5a[r("!Rq8", 518) + i("v5%E", -3)] +
                                "px"),
                              (s[m(297, "]zBX") + m(1242, "yitr")] =
                                _0x23a5f3[r("XyZ0", 1555) + i("g^7N", 449)]),
                              (s[m(979, "4PI7") + "n"] =
                                r("KCU%", 1111) + m(1370, "L7dt")),
                              (s[r("yitr", 2085) + r("h9sa", 2213)] =
                                _0x5e18bf[r("GmUY", 2194) + r("Os^u", 700)] +
                                "%"),
                              (s[
                                m(-176, "UjkZ") +
                                  m(822, "aByn") +
                                  r("Os^u", 738) +
                                  "d"
                              ] =
                                _0x26c015[
                                  r("sqmn", 895) +
                                    i("t%Cy", 1866) +
                                    i("KCU%", 1070) +
                                    "d"
                                ]),
                              (c = s),
                              e.abrupt("return", (_0x4e1a69(_0xc66485), c))
                            );
                          case 18:
                            return (
                              (document[i("4PI7", 1636)][
                                m(357, "$ggD") + m(1456, "59xp")
                              ] = ""),
                              ((l = {})[m(61, "P4Ha")] =
                                m(218, "I#uU") + m(1323, "GmUY")),
                              t[m(488, "mVOl") + "er"][r("zd1V", 2003)](l),
                              e.abrupt("return")
                            );
                          case 22:
                            if (
                              t[i("KCU%", 1892)] ===
                              o[r("PlwN", 339)][r("^vJ6", 2006)][
                                r("rDZX", 1371) + r("wPSr", 1935)
                              ]
                            ) {
                              e.next = 31;
                              break;
                            }
                            if (
                              !a[i("3B$Q", 1764)](
                                r("4(Wz", 561),
                                m(1138, "h9sa")
                              )
                            ) {
                              e.next = 27;
                              break;
                            }
                            (t[
                              r("4PI7", 1941) +
                                m(1083, "Lr6j") +
                                r("F@Tj", 1090)
                            ][r("GmUY", 1313)] = !0),
                              (t[
                                m(-44, "g^7N") +
                                  i("F@Tj", 925) +
                                  r("Prd$", 2177)
                              ] = !0),
                              (e.next = 31);
                            break;
                          case 27:
                            return (
                              (document[i("t%Cy", 502)][
                                m(1443, "F@Tj") + m(1031, "@NQe")
                              ] = ""),
                              ((u = {})[r("Prd$", 1140)] =
                                r("cEpe", 1573) + m(718, "Rpq!")),
                              t[m(937, "ZD5J") + "er"][i("h9j[", 1106)](u),
                              e.abrupt("return")
                            );
                          case 31:
                            return (
                              (t[
                                m(355, "Vt7a") +
                                  r("Prd$", 1723) +
                                  r("v5%E", 2145)
                              ] = o[m(685, "gvzY")][m(1338, "4(Wz")]),
                              (t[i("4PI7", 1605) + r("Os^u", 570)] =
                                o[i("ysXH", 193)][i("^vJ6", 1693)][
                                  m(274, "h9j[")
                                ]),
                              (d =
                                r("zd1V", 860) +
                                t[
                                  i("cEpe", 39) +
                                    i("mVOl", 1672) +
                                    m(1389, "h9j[")
                                ][i("Lr6j", 1472) + "nt"]
                                  [m(311, "Vt7a") + "ce"](
                                    /\n([ \r]*\n)+/g,
                                    a[m(980, "ZD5J")]
                                  )
                                  [i("PlwN", 1657) + "ce"](
                                    "\n",
                                    a[m(633, "cEpe")]
                                  ) +
                                i("sqmn", 194)),
                              (t[
                                r("aByn", 1806) +
                                  i("]zBX", 1191) +
                                  i("XyZ0", 1522)
                              ][r("cEpe", 1365) + "nt"] = d),
                              (t[i("wPSr", 814) + "d"] =
                                t[
                                  i("UvvK", 408) +
                                    i("h9sa", 1922) +
                                    r("59xp", 2150)
                                ][r("v5%E", 1202) + "id"]),
                              (t[
                                m(20, "4(Wz") + m(-36, "^vJ6") + r("Prd$", 1741)
                              ] =
                                t[
                                  r("ysXH", 1310) +
                                    i("mVOl", 1672) +
                                    m(-99, "0b^H")
                                ][i("$ggD", 1854)]),
                              (e.next = 38),
                              t[m(-132, "6*XC") + i("%3dT", 1842)]()
                            );
                          case 38:
                            if (
                              !t[m(1280, "0b^H") + r("7zVK", 737)] ||
                              !a[m(-22, "g^7N")](
                                t[r("rDZX", 939) + r("h9j[", 793)][
                                  m(1527, "Lr6j")
                                ],
                                void 0
                              )
                            ) {
                              e.next = 46;
                              break;
                            }
                            if (r("3Ebw", 1053) === a[r("%3dT", 1534)]) {
                              e.next = 44;
                              break;
                            }
                            return (
                              (e.next = 42),
                              t[
                                r("%3dT", 340) +
                                  i("GmUY", 1137) +
                                  r("I#uU", 472)
                              ](
                                t[r("aByn", 1494) + "d"],
                                t[r("mVOl", 992) + r("KCU%", 380)]
                              )
                            );
                          case 42:
                            e.next = 46;
                            break;
                          case 44:
                            (f = _0x567e4d[_0x2eef2d]),
                              _0x33884a[r("L7dt", 1773)][
                                i("XyZ0", 612) + r("h9j[", 2094)
                              ](f, 0);
                          case 46:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              fetchChapterList: function () {
                var t = this;
                return nt(
                  v.a.mark(function e() {
                    var n, r, i, a, o, s, c;
                    return v.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (c = function (t, e) {
                                  return st(t, e - 420);
                                }),
                                (n = function (t, e) {
                                  return st(t, e - -981);
                                }),
                                (t[
                                  (s = function (t, e) {
                                    return mt(e - -1470, t);
                                  })("GmUY", -98) +
                                    s("xeGx", 782) +
                                    n("KCU%", 404)
                                ] = !0),
                                (e.prev = 4),
                                ((r = {})[c("gvzY", 3217) + "id"] =
                                  t[s("UvvK", 1453) + "d"]),
                                (i = r),
                                (e.next = 10),
                                Object(K.b)(i)
                              );
                            case 10:
                              for (
                                a = e.sent,
                                  t[s("bi2m", 651) + c("F@Tj", 2690) + "t"] =
                                    a[n("3Ebw", 921)][c("Rpq!", 1821)][
                                      n("zd1V", 1661) + c("cEpe", 2061)
                                    ],
                                  o = 0;
                                o <
                                t[s("Prd$", 170) + n("PlwN", 463) + "t"][
                                  n("IOmU", 811) + "h"
                                ];
                                o++
                              )
                                t[n("Prd$", 207) + n("Prd$", 730) + "t"][o][
                                  s("Rpq!", 353)
                                ] = g[
                                  n("UjkZ", 689) +
                                    n("h9sa", 269) +
                                    s("%3dT", 238) +
                                    s("mVOl", 775)
                                ](
                                  t[s("F@Tj", 1481) + c("wPSr", 2049) + "t"][o][
                                    s("v5%E", 1013) + s("ZD5J", 1398) + "at"
                                  ]
                                )[n("sqmn", 1452) + "ow"]();
                              t[
                                s("cEpe", 1772) +
                                  s("KCU%", 533) +
                                  n("7zVK", 1173)
                              ](),
                                (e.next = 18);
                              break;
                            case 16:
                              (e.prev = 16), (e.t0 = e.catch(4));
                            case 18:
                              t[
                                s("I#uU", 875) +
                                  s("gvzY", 278) +
                                  s("IOmU", 1603)
                              ] = !1;
                            case 19:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[4, 16]]
                    );
                  })
                )();
              },
              activeClassReact: function (t) {
                var e = {};
                function n(t, e) {
                  return pt(e, t - 1206);
                }
                function r(t, e) {
                  return mt(t - -35, e);
                }
                function i(t, e) {
                  return pt(e, t - 896);
                }
                return (
                  (e[i(1185, "yitr")] = function (t, e) {
                    return t === e;
                  }),
                  e[n(1892, "59xp")](
                    t,
                    this[r(2056, "!Rq8") + r(1640, "t%Cy") + r(2892, "Os^u")]
                  )
                    ? this[r(2793, "P4Ha") + n(2684, "4(Wz") + i(2252, "%3dT")]
                      ? n(2808, "4PI7") +
                        r(2857, "Rpq!") +
                        i(1755, "$ggD") +
                        n(1817, "P4Ha") +
                        r(2821, "h9sa")
                      : r(3041, "^vJ6") + i(886, "UjkZ") + i(2193, "UjkZ")
                    : this[r(3111, "gvzY") + r(3226, "$ggD") + r(3070, "KCU%")]
                    ? n(2650, "GmUY") + i(1553, "PlwN")
                    : ""
                );
              },
              classReact: function () {
                var t = {};
                function e(t, e) {
                  return mt(e - -528, t);
                }
                t[r(245, "0b^H")] = r(386, "sqmn") + e("ZD5J", 2381);
                var n = t;
                function r(t, e) {
                  return pt(e, t - 21);
                }
                for (
                  var i = 0;
                  i <
                  this[r(608, "^vJ6") + r(1519, "$ggD") + "st"][
                    e("UjkZ", 1509) + "h"
                  ];
                  i++
                )
                  if (
                    this[r(739, "mVOl") + r(976, "UvvK") + "st"][i].id ===
                    this[a(2235, "ysXH") + e("bi2m", 1145) + e("@NQe", 1436)]
                  )
                    return (
                      n[r(787, "v5%E")] +
                      this[e("^vJ6", 1394) + r(421, "rDZX") + "st"][i][
                        e("4PI7", 1901)
                      ]
                    );
                function a(t, e) {
                  return mt(t - -346, e);
                }
                return (
                  r(754, "59xp") +
                  r(1429, "wPSr") +
                  r(944, "XyZ0") +
                  a(1268, "@NQe")
                );
              },
              disableAction: function (t) {
                var e,
                  n,
                  r = {};
                function i(t, e) {
                  return mt(t - -517, e);
                }
                return (
                  (r[((e = "mVOl"), (n = 1605), pt(e, n - 144))] =
                    i(807, "h9j[") + mt(964 - -1444, "aByn")),
                  t ? r[i(1659, "zd1V")] : ""
                );
              },
              changeSortOrder: function () {
                var t = arguments,
                  e = this;
                function n(t, e) {
                  return mt(t - -896, e);
                }
                function r(t, e) {
                  return mt(t - -916, e);
                }
                var i = {};
                function a(t, e) {
                  return pt(t, e - 62);
                }
                i[a("%79i", 1721)] = function (t, e) {
                  return t !== e;
                };
                var o = i;
                this[a("yitr", 1593) + n(1315, "Vt7a") + "t"][a("I#uU", 1305)](
                  function (i, a) {
                    function s(t, e) {
                      return n(t - 150, e);
                    }
                    function c(t, e) {
                      return r(e - 275, t);
                    }
                    function l(t, e) {
                      return r(t - 475, e);
                    }
                    if (
                      e[
                        s(1785, "mVOl") +
                          l(1356, "yitr") +
                          l(1348, "0b^H") +
                          "sc"
                      ]
                    ) {
                      if (
                        o[l(1958, "h9j[")](l(2234, "yitr"), c("!Rq8", 1142))
                      ) {
                        var u = _0x27d5ef[c("bi2m", 856)](_0x246af0, t);
                        return (_0x266f2a = null), u;
                      }
                      return i[l(2066, "ZD5J")] - a[l(1637, "$ggD")];
                    }
                    return a[s(872, "aByn")] - i[l(1038, "I#uU")];
                  }
                ),
                  (this[
                    a("Os^u", 1242) + n(727, "7zVK") + n(842, "gvzY") + "sc"
                  ] =
                    !this[
                      a("KCU%", 1101) + n(1463, "3B$Q") + r(2349, "ZD5J") + "sc"
                    ]);
              },
              reactionChapter: function (t) {
                var e = this;
                return nt(
                  v.a.mark(function n() {
                    var r, i, a, o, s, c;
                    return v.a.wrap(
                      function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              if (
                                ((o = function (t, e) {
                                  return st(t, e - 520);
                                }),
                                (i = function (t, e) {
                                  return mt(e - 101, t);
                                }),
                                (a = {
                                  MLpyz: function (t, e) {
                                    return t === e;
                                  },
                                  wcKjx: function (t, e) {
                                    return t(e);
                                  },
                                }),
                                !0 !==
                                  e[
                                    (r = function (t, e) {
                                      return mt(t - -104, e);
                                    })(2540, "PlwN") +
                                      i("$ggD", 3362) +
                                      o("%3dT", 2759)
                                  ])
                              ) {
                                n.next = 6;
                                break;
                              }
                              return n.abrupt("return");
                            case 6:
                              if (
                                ((n.prev = 6),
                                (e[
                                  i("GmUY", 1944) +
                                    o("KCU%", 2240) +
                                    r(2914, "@NQe")
                                ] = !0),
                                !a[i("59xp", 3185)](
                                  t,
                                  e[
                                    i("ANg1", 2521) +
                                      i("mVOl", 1556) +
                                      i("zd1V", 2215)
                                  ]
                                ))
                              ) {
                                n.next = 14;
                                break;
                              }
                              return (
                                (n.next = 11),
                                Object(K.e)(
                                  e[o("wPSr", 1479) + i("IOmU", 2956)]
                                )
                              );
                            case 11:
                              (e[
                                o("h9j[", 2693) +
                                  i("59xp", 3040) +
                                  o("Lr6j", 2485)
                              ] = null),
                                (n.next = 20);
                              break;
                            case 14:
                              return (
                                ((s = {})[
                                  i("XyZ0", 2095) + i("Vt7a", 2163) + "d"
                                ] = e[r(1857, "Vt7a") + o("h9sa", 2429)]),
                                (s[
                                  o("!Rq8", 2985) +
                                    o("59xp", 2738) +
                                    o("cEpe", 1995)
                                ] = 1),
                                (s[r(2177, "KCU%")] = t),
                                (c = s),
                                (n.next = 19),
                                a[i("%79i", 2171)](K.d, c)
                              );
                            case 19:
                              e[
                                i("h9j[", 2726) +
                                  i("Prd$", 1917) +
                                  i("4PI7", 3308)
                              ] = t;
                            case 20:
                              return (
                                (n.prev = 20),
                                (e[r(2880, "59xp") + i("%3dT", 2044) + "t"] =
                                  !1),
                                (e[
                                  o("]zBX", 3296) +
                                    o("UvvK", 2468) +
                                    o("I#uU", 1468)
                                ] = !1),
                                n.finish(20)
                              );
                            case 23:
                            case "end":
                              return n.stop();
                          }
                      },
                      n,
                      null,
                      [[6, , 20, 23]]
                    );
                  })
                )();
              },
              iconBookmark: function () {
                var t = {};
                function e(t, e) {
                  return st(t, e - 339);
                }
                t[r(2684, "@NQe")] =
                  r(2440, "ZD5J") +
                  r(1766, "h9sa") +
                  e("zd1V", 1661) +
                  e("ysXH", 2827) +
                  r(947, "%3dT");
                var n = t;
                function r(t, e) {
                  return pt(e, t - 861);
                }
                function i(t, e) {
                  return st(t, e - -961);
                }
                return !0 ===
                  this[e("GmUY", 2544) + i("wPSr", 1354) + i("bi2m", 1752)]
                  ? n[e("0b^H", 3032)]
                  : e("^vJ6", 2299) +
                      e("%3dT", 2737) +
                      e("6*XC", 2202) +
                      i("yitr", 1028) +
                      r(1543, "@NQe") +
                      e("gvzY", 1350) +
                      "ry";
              },
              getAvatar: function (t) {
                return t[((e = 317), (n = "Os^u"), pt(n, e - 332) + "r")][100];
                var e, n;
              },
              getProfileUser: function (t) {
                function e(t, e) {
                  return mt(t - -76, e);
                }
                var n = {};
                function r(t, e) {
                  return mt(t - -1031, e);
                }
                function i(t, e) {
                  return pt(e, t - -195);
                }
                n[e(1437, "4(Wz")] = function (t, e) {
                  return t + e;
                };
                var a = n[e(1953, "^vJ6")](
                  o[r(1756, "rDZX") + e(2756, "aByn") + i(104, "!Rq8") + "e"] +
                    "/",
                  t
                );
                window[r(807, "%3dT") + i(158, "rDZX")][e(2686, "gvzY")] = a;
              },
              getUrlChapter: function (t) {
                function e(t, e) {
                  return mt(e - -1242, t);
                }
                function n(t, e) {
                  return pt(t, e - -88);
                }
                var r = {};
                r[n("Os^u", -3)] = e("3B$Q", 1257) + e("GmUY", 558);
                var i = r;
                return (
                  e("$ggD", 1093) +
                  n("mVOl", 1415) +
                  this[e("59xp", 1380)] +
                  i[n("bi2m", 378)] +
                  t.id
                );
              },
              getLinkBook: function () {
                var t,
                  e,
                  n = {};
                function r(t, e) {
                  return mt(t - -571, e);
                }
                return (
                  (n[((t = 1124), (e = "4(Wz"), st(e, t - -92))] =
                    r(1533, "v5%E") + r(1678, "wPSr")),
                  n[r(2170, "!Rq8")] + this[r(2278, "%79i")]
                );
              },
              changeBookmark: function () {
                var t = this;
                return nt(
                  v.a.mark(function e() {
                    var n, r, i, a, o, s, c, u, d, m, f, p, h;
                    return v.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((a = function (t, e) {
                                return mt(e - -186, t);
                              }),
                              (r = function (t, e) {
                                return pt(e, t - 62);
                              }),
                              ((n = {})[
                                (i = function (t, e) {
                                  return st(t, e - 329);
                                })("Rpq!", 1924)
                              ] = r(1863, "wPSr")),
                              (n[i("Lr6j", 2312)] = function (t, e) {
                                return t < e;
                              }),
                              (n[i("PlwN", 2247)] = function (t, e) {
                                return t * e;
                              }),
                              (n[i("h9sa", 2519)] =
                                a("rDZX", 1196) +
                                a("Os^u", 3024) +
                                i("PlwN", 1230)),
                              (n[a("3Ebw", 1872)] = function (t, e) {
                                return t + e;
                              }),
                              (n[i("mVOl", 2900)] = function (t, e) {
                                return t * e;
                              }),
                              (n[a("I#uU", 2930)] = r(358, "Lr6j")),
                              (n[a("%79i", 2020)] = function (t, e) {
                                return t * e;
                              }),
                              (n[r(621, "cEpe")] = function (t, e) {
                                return t + e;
                              }),
                              (n[r(211, "cEpe")] = function (t, e) {
                                return t + e;
                              }),
                              (n[i("XyZ0", 3025)] = function (t, e) {
                                return t === e;
                              }),
                              (n[a("zd1V", 2812)] = function (t, e) {
                                return t !== e;
                              }),
                              (n[r(332, "ANg1")] = function (t, e) {
                                return t === e;
                              }),
                              (n[i("^vJ6", 2805)] = function (t, e) {
                                return t !== e;
                              }),
                              (n[i("%3dT", 2573)] = i("@NQe", 2498)),
                              !(o = n)[i("v5%E", 1904)](
                                t[a("gvzY", 2549) + r(689, "gvzY")][
                                  a("KCU%", 1287)
                                ],
                                void 0
                              ))
                            ) {
                              e.next = 57;
                              break;
                            }
                            if (
                              !window[
                                r(995, "%3dT") +
                                  i("3B$Q", 1645) +
                                  r(1837, "aByn") +
                                  a("XyZ0", 2237)
                              ]
                            ) {
                              e.next = 14;
                              break;
                            }
                            return (
                              EventBus[i("4(Wz", 2032)](i("ANg1", 2429)),
                              e.abrupt("return")
                            );
                          case 14:
                            if (
                              !o[i("cEpe", 2436)](
                                r(1179, "xeGx"),
                                a("Rpq!", 1734)
                              )
                            ) {
                              e.next = 56;
                              break;
                            }
                            (s = _0x444987[_0x136faf][i("]zBX", 2243)](
                              o[i("Lr6j", 2485)]
                            )),
                              (_0x355d00 = 0),
                              (_0x151cb3 = 0);
                          case 18:
                            if (
                              !o[i("@NQe", 1782)](
                                _0xf34e1c,
                                s[r(533, "rDZX") + "h"]
                              )
                            ) {
                              e.next = 53;
                              break;
                            }
                            if (
                              ((_0xfc5f1c = s[_0x4979d4][a("3Ebw", 2202)](
                                r(629, "PlwN")
                              )),
                              1 !== _0x5ceaf3[a("rDZX", 1620) + "h"])
                            ) {
                              e.next = 24;
                              break;
                            }
                            _0x562632[i("I#uU", 1296) + i("Prd$", 3004)](
                              s[_0x101162],
                              _0x4ef9f8,
                              _0xa9d43d +
                                o[r(1604, "Rpq!")](
                                  _0x3ac4b8 * _0x3160e7,
                                  _0x46d004
                                )
                            ),
                              (_0x83a3b7 += _0x5b96eb[
                                i("Vt7a", 2972) + i("@NQe", 1487) + "t"
                              ](s[_0x4fa511])[a("F@Tj", 1937)]),
                              (e.next = 49);
                            break;
                          case 24:
                            (c = o[r(1374, "@NQe")][a("L7dt", 1396)]("|")),
                              (u = 0);
                          case 26:
                            0,
                              (e.t0 = c[u++]),
                              (e.next =
                                "0" === e.t0
                                  ? 30
                                  : "1" === e.t0
                                  ? 32
                                  : "2" === e.t0
                                  ? 34
                                  : "3" === e.t0
                                  ? 36
                                  : "4" === e.t0
                                  ? 38
                                  : "5" === e.t0
                                  ? 40
                                  : "6" === e.t0
                                  ? 42
                                  : "7" === e.t0
                                  ? 44
                                  : 46);
                            break;
                          case 30:
                            return (
                              (_0x6eaf12[i("%79i", 2580)] =
                                o[i("xeGx", 1680)](
                                  i("IOmU", 1761) + "c " + _0x36ee65,
                                  r(453, "wPSr")
                                ) + _0x277e38),
                              e.abrupt("continue", 26)
                            );
                          case 32:
                            return (
                              (_0x20f078 +=
                                _0x389c4e[
                                  a("Rpq!", 2793) + i("h9j[", 1250) + "t"
                                ](_0x12ca95)[a("gvzY", 2236)]),
                              e.abrupt("continue", 26)
                            );
                          case 34:
                            return (
                              _0x47ae4c[r(1572, "XyZ0") + r(256, "!Rq8")](
                                _0x48d540,
                                _0x151491,
                                o[r(212, "0b^H")](
                                  _0x1b81be,
                                  o[r(1556, "P4Ha")](_0x287c8c, _0x21761a) *
                                    _0x17b66c
                                )
                              ),
                              e.abrupt("continue", 26)
                            );
                          case 36:
                            return (
                              (_0x3953a4 = _0xc792b0[r(1521, "Vt7a")]()),
                              e.abrupt("continue", 26)
                            );
                          case 38:
                            return (
                              (_0x1d6944 +=
                                _0x113125[
                                  i("P4Ha", 1630) + a("P4Ha", 2335) + "t"
                                ](_0x2132bf)[r(639, "]zBX")]),
                              e.abrupt("continue", 26)
                            );
                          case 40:
                            return (
                              (_0x5d63b3[a("h9sa", 2535)] =
                                o[a("L7dt", 2034)](
                                  _0x29cd83,
                                  o[i("g^7N", 2324)]
                                ) + _0x168a54),
                              e.abrupt("continue", 26)
                            );
                          case 42:
                            return (
                              _0x5f5200[a("xeGx", 2084) + r(1798, "PlwN")](
                                _0xbda518,
                                _0x466007,
                                _0x2ff58d +
                                  o[i("!Rq8", 1956)](
                                    _0x25f6b3 * _0x20a5c7,
                                    _0x2b5269
                                  )
                              ),
                              e.abrupt("continue", 26)
                            );
                          case 44:
                            return (
                              (_0x3e3d7e =
                                _0x1d2e4e[i("t%Cy", 2290)](" ")[
                                  a("Vt7a", 1264)
                                ]()),
                              e.abrupt("continue", 26)
                            );
                          case 46:
                            return e.abrupt("break", 49);
                          case 49:
                            _0x12e261[a("h9j[", 1165)] = o[i("mVOl", 1488)](
                              o[r(1849, "UvvK")](
                                a("PlwN", 2009) + "c " + _0x60cf1d,
                                o[r(383, "L7dt")]
                              ),
                              _0x12422a
                            );
                          case 50:
                            _0x385681++, (e.next = 18);
                            break;
                          case 53:
                            (_0x484268[r(1067, "I#uU")] =
                              _0x51b7cc + r(1551, "GmUY") + _0x3e6912),
                              (e.next = 57);
                            break;
                          case 56:
                            window[i("gvzY", 1422) + i("3Ebw", 3096)] =
                              l[r(1857, "cEpe") + r(1208, "ZD5J") + "i"]();
                          case 57:
                            if (
                              !o[r(1439, "rDZX")](
                                t[
                                  a("Rpq!", 1473) +
                                    i("59xp", 1669) +
                                    a("GmUY", 1871)
                                ],
                                !1
                              )
                            ) {
                              e.next = 69;
                              break;
                            }
                            return (
                              ((d = {})[r(1976, "gvzY") + "id"] =
                                t[i("IOmU", 2587) + "d"]),
                              (d[i("7zVK", 1725) + a("^vJ6", 2322)] =
                                t[i("ANg1", 2132) + i("!Rq8", 2051)]),
                              (m = d),
                              (t[
                                r(608, "^vJ6") +
                                  a("ZD5J", 1236) +
                                  i("@NQe", 1203)
                              ] = !0),
                              (e.next = 64),
                              Object(J.a)(m)
                            );
                          case 64:
                            (f = e.sent),
                              (t[
                                i("yitr", 2409) +
                                  a("ZD5J", 1236) +
                                  a("Lr6j", 2883)
                              ] = !1),
                              o[r(562, "aByn")](
                                f[r(269, "g^7N")][i("sqmn", 1993) + "us"],
                                200
                              ) &&
                                (o[a("UjkZ", 1845)](
                                  o[a("4PI7", 1732)],
                                  i("h9j[", 2857)
                                )
                                  ? (_0x3d9010[_0x1a41e4],
                                    (p =
                                      _0x1903f8[_0xe8fed8][a("P4Ha", 1674)](
                                        "|"
                                      )),
                                    t[r(1883, "ysXH") + "rk"](
                                      _0x875e02,
                                      p,
                                      !1,
                                      _0x474c69 *
                                        _0x431318(_0x344198[i("@NQe", 3061)])
                                    ),
                                    (_0x18bd0f += 2))
                                  : ((t[
                                      a("PlwN", 1517) +
                                        r(335, "7zVK") +
                                        a("gvzY", 2287)
                                    ] = !0),
                                    (t[i("PlwN", 2551) + r(156, "gvzY")] =
                                      f[i("59xp", 1642)][a("h9j[", 1903)][
                                        i("]zBX", 1392) + r(300, "3Ebw") + "d"
                                      ]))),
                              (e.next = 74);
                            break;
                          case 69:
                            return (
                              (t[
                                r(266, "%3dT") +
                                  r(1761, "L7dt") +
                                  r(202, "59xp")
                              ] = !0),
                              (e.next = 72),
                              Object(J.c)(t[a("Os^u", 1367) + i("PlwN", 1355)])
                            );
                          case 72:
                            (h = e.sent),
                              (t[
                                r(1967, "IOmU") +
                                  a("KCU%", 2719) +
                                  i("bi2m", 3042)
                              ] = !1),
                              200 ===
                                h[r(810, "t%Cy")][r(835, "cEpe") + "us"] &&
                                (t[
                                  a("Prd$", 1454) +
                                    i("t%Cy", 1647) +
                                    i("KCU%", 1768)
                                ] = !1);
                          case 74:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              addReading: function () {
                var t = this;
                return nt(
                  v.a.mark(function e() {
                    var n, r, i, a, o, s, c, l;
                    return v.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((a = function (t, e) {
                                return pt(e, t - 306);
                              }),
                              (n = function (t, e) {
                                return st(t, e - -978);
                              }),
                              (i = {
                                NWbmS:
                                  (r = function (t, e) {
                                    return pt(t, e - 322);
                                  })("%3dT", 633) +
                                  n("Lr6j", 400) +
                                  "r",
                                MVVxI: function (t, e, n) {
                                  return t(e, n);
                                },
                                xxibQ: function (t, e) {
                                  return t(e);
                                },
                              }),
                              void 0 === t[n("h9j[", 1468) + "d"])
                            ) {
                              e.next = 14;
                              break;
                            }
                            return (
                              (o = {
                                book_id: t[a(1869, "h9j[") + "d"],
                                chapter_id:
                                  t[r("ZD5J", 1990) + r("4PI7", 1627)],
                                book_name: get(
                                  t[
                                    a(1078, "t%Cy") +
                                      a(2225, "h9sa") +
                                      n("XyZ0", 1424)
                                  ],
                                  [n("gvzY", 1819) + a(884, "^vJ6")]
                                ),
                                book_slug: get(
                                  t[
                                    n("F@Tj", 1521) +
                                      n("ysXH", 848) +
                                      r("zd1V", 1349)
                                  ],
                                  [r("mVOl", 671) + r("cEpe", 514)]
                                ),
                                book_poster: get(
                                  t[
                                    a(985, "3Ebw") +
                                      n("g^7N", 437) +
                                      a(1794, "ysXH")
                                  ],
                                  [i[r("cEpe", 972)]]
                                ),
                                chapter_index: i[r("L7dt", 1253)](
                                  get,
                                  t[
                                    r("3Ebw", 1001) +
                                      n("7zVK", 1325) +
                                      n("ysXH", 1393)
                                  ],
                                  [n("3Ebw", 153)]
                                ),
                              }),
                              Object(Q.a)(o),
                              ((s = {})[n("PlwN", 852) + "id"] =
                                t[r("59xp", 1116) + "d"]),
                              (s[r("wPSr", 398) + a(1914, "h9j[")] =
                                t[r("sqmn", 467) + r("yitr", 2093)]),
                              (c = s),
                              (e.next = 12),
                              i[n("P4Ha", 1024)](Q.b, c)
                            );
                          case 12:
                            200 ===
                              (l = e.sent)[n("Vt7a", 1598)][
                                r("F@Tj", 929) + "us"
                              ] &&
                              (t[n("!Rq8", 102) + a(908, "h9sa")] =
                                l[n("4PI7", 892)][a(563, "L7dt")][
                                  r("3B$Q", 2090) + r("h9sa", 1535) + "id"
                                ]);
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              checkBookmark: function (t, e) {
                var n = this;
                return nt(
                  v.a.mark(function r() {
                    var i, a, o, s, c, l;
                    return v.a.wrap(function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            if (
                              ((c = function (t, e) {
                                return pt(t, e - 165);
                              }),
                              (s = function (t, e) {
                                return pt(t, e - 564);
                              }),
                              ((i = {})[
                                (a = function (t, e) {
                                  return st(e, t - -1056);
                                })(874, "IOmU")
                              ] = function (t, e) {
                                return t == e;
                              }),
                              (o = i),
                              !n[a(491, "3B$Q") + s("h9j[", 1452)])
                            ) {
                              r.next = 11;
                              break;
                            }
                            return (r.next = 9), Object(J.b)(t);
                          case 9:
                            null !==
                              (l = r.sent)[s("mVOl", 1054)][a(84, "L7dt")] &&
                              o[c("ANg1", 306)](
                                l[s("4PI7", 1551)][s("Os^u", 790)][
                                  c("%3dT", 889) + c("ANg1", 282)
                                ],
                                e
                              ) &&
                              ((n[
                                a(1203, "KCU%") +
                                  s("aByn", 1749) +
                                  s("h9sa", 2428)
                              ] = !0),
                              (n[c("7zVK", 217) + a(1437, "$ggD")] =
                                l[s("Os^u", 1754)][s("PlwN", 2421)].id));
                          case 11:
                          case "end":
                            return r.stop();
                        }
                    }, r);
                  })
                )();
              },
              isChapterActive: function (t) {
                function e(t, e) {
                  return st(e, t - -1059);
                }
                return this[e(1356, "h9sa") + e(1244, "7zVK") + e(136, "P4Ha")]
                  .id === t.id
                  ? mt(1391 - -859, "v5%E") + "e"
                  : "";
              },
              goChapter: function (t) {
                var e = {};
                function n(t, e) {
                  return st(t, e - -50);
                }
                function r(t, e) {
                  return mt(e - -222, t);
                }
                function i(t, e) {
                  return st(e, t - -41);
                }
                (e[i(2488, "3Ebw")] = i(2247, "7zVK")),
                  (e[r("h9sa", 2187)] = function (t, e) {
                    return t + e;
                  }),
                  (e[i(1855, "UvvK")] = function (t, e) {
                    return t + e;
                  }),
                  (e[r("zd1V", 1785)] = r("zd1V", 1452) + r("xeGx", 1183)),
                  (e[r("wPSr", 2828)] = i(1224, "Lr6j") + r("gvzY", 2223));
                var a = e,
                  o =
                    document[
                      i(1399, "$ggD") + i(2084, "4(Wz") + n("mVOl", 2629)
                    ],
                  s = [a[n("3B$Q", 2001)], i(1351, "4(Wz") + i(2112, "IOmU")];
                if (
                  o &&
                  -1 !==
                    s[n("%79i", 1326) + "Of"](
                      o[i(945, "sqmn") + "me"][
                        r("Rpq!", 2211) + i(2048, "KCU%") + "e"
                      ]()
                    )
                )
                  return !1;
                t &&
                  ((document[n("Prd$", 2430)][
                    r("UjkZ", 1814) + n("xeGx", 2468)
                  ] = a[n("59xp", 2182)](
                    i(1373, "3B$Q") + n("%79i", 1669) + r("ANg1", 1729) + "--",
                    this[n("h9sa", 1654) + i(1872, "L7dt") + r("59xp", 2236)][
                      i(2324, "g^7N") + n("$ggD", 1344)
                    ]
                  )),
                  (window[n("P4Ha", 1372) + r("ysXH", 1982)] =
                    a[r("h9j[", 2393)](
                      a[n("cEpe", 2246)](
                        a[n("Lr6j", 894)],
                        this[n("yitr", 2340)]
                      ),
                      a[r("KCU%", 2575)]
                    ) + t));
              },
              reportChapter: function () {
                var t = {};
                function e(t, e) {
                  return pt(e, t - -190);
                }
                function n(t, e) {
                  return pt(t, e - 1263);
                }
                (t[e(1510, "$ggD")] = n("%79i", 2861)),
                  (t[i(1921, "7zVK")] = function (t, e) {
                    return t !== e;
                  }),
                  (t[e(644, "XyZ0")] =
                    e(509, "%79i") + e(434, "PlwN") + i(1774, "h9j[")),
                  (t[e(684, "^vJ6")] = function (t, e) {
                    return t !== e;
                  }),
                  (t[e(763, "ysXH")] = n("XyZ0", 1323));
                var r = t;
                function i(t, e) {
                  return pt(e, t - 1065);
                }
                if (
                  r[i(2874, "IOmU")](
                    this[i(2890, "4(Wz") + n("F@Tj", 2105)][n("59xp", 2329)],
                    void 0
                  )
                ) {
                  var a = {};
                  (a[e(757, "PlwN") + "id"] = this[i(1415, "g^7N") + "d"]),
                    (a[i(1201, "4(Wz") + e(-184, "ZD5J")] =
                      this[
                        e(1553, "XyZ0") + n("ysXH", 2206) + n("XyZ0", 2782)
                      ].id);
                  var o = a;
                  EventBus[n("7zVK", 1944)](r[e(660, "bi2m")], o);
                } else
                  window[
                    n("v5%E", 2434) +
                      e(1002, "PlwN") +
                      e(27, "gvzY") +
                      e(325, "@NQe")
                  ]
                    ? EventBus[n("h9j[", 2197)](n("xeGx", 2342))
                    : r[i(2428, "P4Ha")](r[i(1161, "I#uU")], i(2756, "4(Wz"))
                    ? _0x331207[
                        n("GmUY", 3090) +
                          n("0b^H", 1834) +
                          i(1440, "%3dT") +
                          e(862, "zd1V")
                      ]
                      ? _0x4065e9[e(96, "%79i")](r[n("g^7N", 3016)])
                      : (_0x5d2bf8[i(2060, "UvvK") + i(2581, "cEpe")] =
                          _0x202d43[i(2217, "I#uU") + e(1727, "%3dT") + "i"]())
                    : (window[e(1421, "UjkZ") + e(692, "xeGx")] =
                        l[n("UjkZ", 2432) + i(2501, "t%Cy") + "i"]());
              },
              unlockChapter: function (t) {
                var e = this;
                return nt(
                  v.a.mark(function n() {
                    var r, i, a, o, s, c, u, d, m;
                    return v.a.wrap(
                      function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              if (
                                ((a = function (t, e) {
                                  return mt(t - -1703, e);
                                }),
                                (i = function (t, e) {
                                  return st(e, t - 281);
                                }),
                                ((r = {})[
                                  (o = function (t, e) {
                                    return st(e, t - -1113);
                                  })(89, "UjkZ")
                                ] = o(161, "wPSr")),
                                (r[i(2636, "L7dt")] = function (t, e) {
                                  return t + e;
                                }),
                                (r[a(-364, "4(Wz")] = function (t, e) {
                                  return t * e;
                                }),
                                (r[a(363, "mVOl")] = a(665, "3Ebw")),
                                (r[o(403, "cEpe")] = function (t, e) {
                                  return t === e;
                                }),
                                (s = r),
                                void 0 ===
                                  e[o(-232, "GmUY") + o(742, "g^7N")][
                                    a(429, "yitr")
                                  ])
                              ) {
                                n.next = 29;
                                break;
                              }
                              if (o(686, "I#uU") === s[o(-54, "GmUY")]) {
                                n.next = 13;
                                break;
                              }
                              (_0x19b11e = _0x27bdd5[i(2623, "Vt7a")]()),
                                (_0x4aae1e[o(-118, "wPSr")] =
                                  o(584, "]zBX") +
                                  "c " +
                                  _0x5a887c +
                                  s[a(-202, "0b^H")] +
                                  _0xcee8f2),
                                _0x5242cf[a(-348, "%3dT") + i(2248, "mVOl")](
                                  _0x4799cf,
                                  _0x2158fe,
                                  _0x1f9631 + _0x2e0472 * _0x36f9eb * _0x2ea4fd
                                ),
                                (_0x5b2389 +=
                                  _0x4aa300[
                                    i(2751, "PlwN") + i(1296, "cEpe") + "t"
                                  ](_0x4aa7d0)[o(1546, "6*XC")]),
                                (_0x29307e =
                                  _0x3716bc[o(250, "cEpe")](" ")[
                                    i(2101, "$ggD")
                                  ]()),
                                (_0x1f26c3[i(2816, "6*XC")] =
                                  _0x444e4b + i(1555, "wPSr") + _0x30f76a),
                                _0x471943[i(2427, "ANg1") + a(1191, "sqmn")](
                                  _0x12e4c3,
                                  _0x270173,
                                  s[o(905, "4PI7")](
                                    _0x2aacb8,
                                    s[i(1875, "bi2m")](
                                      _0x4cc1c4 * _0x3e221b,
                                      _0x147c5d
                                    )
                                  )
                                ),
                                (_0x71f6ae +=
                                  _0x34fb9a[
                                    a(1216, "IOmU") + o(-98, "cEpe") + "t"
                                  ](_0x47b9b8)[o(1546, "6*XC")]),
                                (n.next = 27);
                              break;
                            case 13:
                              return (
                                ((c = {})[o(826, "L7dt") + "id"] =
                                  e[a(1454, "bi2m") + "d"]),
                                (c[o(764, "ysXH") + o(244, "%79i")] = t.id),
                                (c[i(1623, "GmUY")] = 1),
                                (u = c),
                                (n.prev = 16),
                                (e[
                                  o(530, "wPSr") +
                                    a(1540, "Rpq!") +
                                    o(1417, "yitr") +
                                    o(-99, "wPSr")
                                ] = !0),
                                (n.next = 20),
                                Object(K.f)(u)
                              );
                            case 20:
                              (d = n.sent),
                                (e[i(2995, "KCU%") + "e"] =
                                  !0 !==
                                  d[o(1486, "GmUY")][
                                    a(689, "Prd$") + i(1161, "ZD5J")
                                  ]),
                                (window[a(-291, "Vt7a") + i(2269, "wPSr")] =
                                  window[o(273, "%3dT") + a(1014, "g^7N")]),
                                (n.next = 26);
                              break;
                            case 24:
                              (n.prev = 24), (n.t0 = n.catch(16));
                            case 26:
                              (e[
                                i(1201, "GmUY") +
                                  o(-190, "rDZX") +
                                  a(1260, "I#uU") +
                                  o(927, "Prd$")
                              ] = !1),
                                EventBus[o(1192, "mVOl")](
                                  o(151, "v5%E") +
                                    i(1724, "6*XC") +
                                    o(1448, "4PI7"),
                                  payload
                                );
                            case 27:
                              n.next = 37;
                              break;
                            case 29:
                              if (
                                !s[o(243, "zd1V")](
                                  i(2592, "KCU%"),
                                  o(426, "59xp")
                                )
                              ) {
                                n.next = 33;
                                break;
                              }
                              window[
                                a(267, "PlwN") +
                                  i(2442, "Os^u") +
                                  o(884, "F@Tj") +
                                  a(153, "P4Ha")
                              ]
                                ? EventBus[a(-16, "Lr6j")](o(162, "^vJ6"))
                                : (window[o(588, "cEpe") + a(382, "]zBX")] =
                                    l[
                                      i(1559, "7zVK") + a(1137, "4PI7") + "i"
                                    ]()),
                                (n.next = 37);
                              break;
                            case 33:
                              return (
                                (_0x22f86b[a(131, "t%Cy")][
                                  i(1266, "ysXH") + a(942, "4PI7")
                                ] = ""),
                                ((m = {})[i(2610, "%3dT")] =
                                  o(953, "v5%E") + i(1499, "gvzY")),
                                e[i(2218, "6*XC") + "er"][i(1993, "$ggD")](m),
                                n.abrupt("return")
                              );
                            case 37:
                            case "end":
                              return n.stop();
                          }
                      },
                      n,
                      null,
                      [[16, 24]]
                    );
                  })
                )();
              },
              sendGift: function () {
                var t = {};
                function e(t, e) {
                  return mt(t - -1499, e);
                }
                (t[i("cEpe", 1007)] = r("g^7N", 2148)),
                  (t[r("PlwN", 1854)] = i("GmUY", 1087));
                var n = t;
                function r(t, e) {
                  return mt(e - 115, t);
                }
                function i(t, e) {
                  return mt(e - -1247, t);
                }
                if (
                  void 0 !==
                  this[r("rDZX", 2073) + i("mVOl", 1575)][e(-168, "UvvK")]
                ) {
                  var a = {};
                  (a[r("g^7N", 1732) + "id"] = this[e(1313, "7zVK") + "d"]),
                    (a[r("sqmn", 1595) + e(661, "4(Wz")] =
                      this[
                        r("I#uU", 2389) + i("mVOl", 1757) + i("I#uU", 1086)
                      ].id);
                  var o = a;
                  EventBus[i("P4Ha", 654)](n[r("rDZX", 1852)], o);
                } else if (e(355, "I#uU") === e(1071, "cEpe")) {
                  var s = {};
                  (s[e(-153, "^vJ6")] = 16),
                    this[
                      i("t%Cy", 1563) + i("F@Tj", 1471) + e(1101, "@NQe") + "y"
                    ][e(1335, "Prd$") + "e"](s);
                  var c = {};
                  (c[r("3Ebw", 1986)] =
                    _0x267abd[e(77, "3B$Q") + e(1221, "IOmU") + "t"] -
                    150 -
                    16),
                    this[
                      r("zd1V", 1737) + i("3Ebw", 498) + e(208, "sqmn") + "ky"
                    ][r("^vJ6", 3305) + "e"](c);
                } else
                  window[
                    i("bi2m", 1823) +
                      i("F@Tj", 582) +
                      i("UjkZ", 325) +
                      i("h9j[", 157)
                  ]
                    ? EventBus[r("h9j[", 2384)](n[r("@NQe", 2769)])
                    : (window[e(687, "sqmn") + i("ZD5J", 464)] =
                        l[i("Lr6j", 1818) + i("0b^H", 247) + "i"]());
              },
              rateChapter: function () {
                function t(t, e) {
                  return pt(t, e - 619);
                }
                var e = {};
                function n(t, e) {
                  return st(t, e - -433);
                }
                function r(t, e) {
                  return mt(t - -224, e);
                }
                if (
                  ((e[r(1473, "rDZX")] = function (t, e) {
                    return t !== e;
                  }),
                  e[n("Os^u", 1053)](
                    this[r(2242, "Os^u") + r(2526, "Prd$")][r(1370, "L7dt")],
                    void 0
                  ))
                ) {
                  var i = {};
                  (i[n("ysXH", 1376) + "id"] = this[n("zd1V", 1446) + "d"]),
                    (i[t("Vt7a", 1245) + r(2759, "XyZ0")] =
                      this[
                        t("sqmn", 764) + t("$ggD", 1985) + r(1702, "4PI7")
                      ].id);
                  var a = i;
                  EventBus[r(1941, "xeGx")](
                    r(1569, "Rpq!") + r(1294, "3B$Q") + t("mVOl", 788),
                    a
                  );
                } else
                  window[
                    t("Vt7a", 862) +
                      r(2507, "xeGx") +
                      t("sqmn", 2293) +
                      n("xeGx", 2039)
                  ]
                    ? EventBus[t("Prd$", 2326)](n("zd1V", 2041))
                    : (window[r(2186, "^vJ6") + t("h9sa", 2345)] =
                        l[n("%3dT", 727) + r(2287, "g^7N") + "i"]());
              },
              voteChapter: function () {
                var t = {};
                function e(t, e) {
                  return st(t, e - -1248);
                }
                function n(t, e) {
                  return st(e, t - 458);
                }
                function r(t, e) {
                  return st(t, e - -324);
                }
                if (
                  ((t[r("gvzY", 1901)] = function (t, e) {
                    return t !== e;
                  }),
                  t[e("ANg1", 139)](
                    this[n(2899, "Rpq!") + n(2913, "%3dT")][r("t%Cy", 729)],
                    void 0
                  ))
                ) {
                  var i = {};
                  i[e("mVOl", -16) + "id"] = this[e("gvzY", -176) + "d"];
                  var a = i;
                  EventBus[n(1792, "59xp")](
                    n(2234, "aByn") + e("ysXH", 1397) + "r",
                    a
                  );
                } else
                  window[
                    e("!Rq8", 697) +
                      r("0b^H", 1130) +
                      r("sqmn", 2233) +
                      r("7zVK", 1483)
                  ]
                    ? EventBus[n(2171, "xeGx")](n(1557, "t%Cy"))
                    : (window[n(1413, "3Ebw") + n(2362, "GmUY")] =
                        l[e("3Ebw", 1461) + n(1438, "7zVK") + "i"]());
              },
              activeButton: function (t) {
                function e(t, e) {
                  return mt(e - -1498, t);
                }
                var n,
                  r,
                  i = {};
                return (
                  (i[e("UvvK", 130)] = e("ANg1", 359) + "e"),
                  !0 === t ? i[((n = "59xp"), (r = 2569), pt(n, r - 1134))] : ""
                );
              },
              activeMenu: function (t) {
                var e = {};
                function n(t, e) {
                  return st(t, e - -501);
                }
                function r(t, e) {
                  return pt(t, e - 618);
                }
                (e[n("IOmU", 946)] = n("ZD5J", 438)),
                  (e[a("Prd$", 253)] = function (t, e) {
                    return t !== e;
                  });
                var i = e;
                function a(t, e) {
                  return st(t, e - -988);
                }
                return !0 === t
                  ? i[r("Lr6j", 1410)](a("F@Tj", 917), a("rDZX", 164))
                    ? void _0x1a9670[a("aByn", 582)](i[a("h9j[", 1600)])
                    : r("UvvK", 649) + "e"
                  : "";
              },
              toggleModal: function () {
                function t(t, e) {
                  return pt(e, t - 381);
                }
                function e(t, e) {
                  return mt(e - -564, t);
                }
                function n(t, e) {
                  return st(t, e - -701);
                }
                window[
                  t(1996, "4(Wz") +
                    t(1872, "Vt7a") +
                    e("IOmU", 2538) +
                    t(896, "@NQe")
                ]
                  ? EventBus[e("%79i", 1057)](t(597, "t%Cy"))
                  : (window[e("F@Tj", 1158) + n("g^7N", 1564)] =
                      l[n("3B$Q", 2063) + e("rDZX", 1567) + "i"]());
              },
              activeBackground: function (t) {
                var e = {};
                function n(t, e) {
                  return st(t, e - 184);
                }
                function r(t, e) {
                  return mt(e - -548, t);
                }
                return (
                  (e[n("t%Cy", 2907)] =
                    n("ysXH", 1666) +
                    mt(1617 - -1594, "^vJ6") +
                    r("XyZ0", 2086) +
                    "e-"),
                  e[r("PlwN", 962)] + t
                );
              },
              activeSettingBackground: function (t) {
                var e = {};
                function n(t, e) {
                  return st(t, e - 524);
                }
                function r(t, e) {
                  return st(t, e - -1025);
                }
                function i(t, e) {
                  return mt(t - -1511, e);
                }
                (e[n("KCU%", 2718)] = function (t, e) {
                  return t !== e;
                }),
                  (e[i(657, "g^7N")] = function (t, e) {
                    return t === e;
                  }),
                  (e[n("UvvK", 3060)] = function (t, e) {
                    return t + e;
                  }),
                  (e[r("]zBX", 189)] = n("59xp", 2117) + "-"),
                  (e[n("IOmU", 2652)] = n("zd1V", 1882) + "ve");
                var a = e;
                if (
                  a[r("h9sa", 92)](
                    this[r("]zBX", 1769) + r("UvvK", 1745) + n("Prd$", 2e3)],
                    null
                  )
                )
                  return a[n("%79i", 1823)](
                    this[i(1458, "Rpq!") + i(1652, "yitr") + i(393, "h9sa")][
                      r("F@Tj", 1296) + i(1557, "gvzY")
                    ],
                    t
                  )
                    ? a[i(466, "PlwN")](
                        a[r("0b^H", 42)](a[n("GmUY", 2978)], t),
                        a[i(708, "gvzY")]
                      )
                    : r("v5%E", 1646) + "-" + t;
              },
              changeBackground: function (t) {
                function e(t, e) {
                  return pt(e, t - 1156);
                }
                function n(t, e) {
                  return mt(e - -331, t);
                }
                var r = {};
                function i(t, e) {
                  return pt(t, e - -538);
                }
                (r[n("Vt7a", 2849)] = function (t, e) {
                  return t === e;
                }),
                  (r[n("cEpe", 2713)] =
                    e(2838, "KCU%") + i("ZD5J", 474) + i("F@Tj", 468) + "--");
                var a = r;
                (this[n("P4Ha", 2258) + i("$ggD", 200) + e(2612, "$ggD")][
                  i("@NQe", 1350) + n("UjkZ", 1345)
                ] = t),
                  a[e(2544, "ysXH")](t, "6") &&
                    !1 ===
                      this[e(1968, "ysXH") + n("%79i", 1679) + i("$ggD", 918)][
                        e(2474, "KCU%") + i("L7dt", 188) + n("g^7N", 1787) + "d"
                      ] &&
                    ((this[i("UjkZ", 487) + n("g^7N", 1110) + n("cEpe", 2040)][
                      n("]zBX", 1017) + e(1896, "aByn")
                    ] = "5"),
                    (this[e(1685, "4(Wz") + i("xeGx", 826) + n("^vJ6", 2013)][
                      n("yitr", 1109) + i("v5%E", 859) + e(2878, "Lr6j") + "d"
                    ] = !0)),
                  (document[i("cEpe", 992)][e(1178, "59xp") + i("cEpe", 1345)] =
                    a[e(1463, "XyZ0")] +
                    this[i("g^7N", 698) + e(2009, "sqmn") + n("gvzY", 1094)][
                      i("4PI7", 1139) + e(1905, "wPSr")
                    ]);
              },
              activeStyleSetting: function (t) {
                function e(t, e) {
                  return pt(t, e - 467);
                }
                var n = {};
                function r(t, e) {
                  return mt(t - -356, e);
                }
                (n[e("wPSr", 2010)] = function (t, e) {
                  return t !== e;
                }),
                  (n[e("IOmU", 525)] = function (t, e) {
                    return t + e;
                  }),
                  (n[e("mVOl", 2313)] = e("ANg1", 1495) + e("7zVK", 2022));
                var i = n;
                function a(t, e) {
                  return pt(e, t - 1063);
                }
                if (i[r(1302, "gvzY")](t, null)) {
                  var o = {
                    fontSize: t[e("h9j[", 931) + e("3B$Q", 1252)] + "px",
                    fontFamily: t[e("GmUY", 1150) + a(1510, "Os^u")],
                    margin: e("Vt7a", 1858) + a(1278, "%3dT"),
                    lineHeight: i[r(2190, "xeGx")](
                      t[a(2586, "4PI7") + a(1106, "59xp")],
                      "%"
                    ),
                    chooseBackground:
                      t[
                        a(2456, "aByn") +
                          e("h9j[", 2287) +
                          e("UjkZ", 1941) +
                          "d"
                      ],
                  };
                  return Object(Q.c)(t), o;
                }
                var s = {};
                return (
                  (s[a(1181, "cEpe") + e("ysXH", 578)] =
                    this[
                      e("PlwN", 2014) +
                        e("ZD5J", 1018) +
                        e("Prd$", 676) +
                        e("UjkZ", 890)
                    ][e("Os^u", 796) + e("$ggD", 1729)] + "px"),
                  (s[e("Prd$", 2156) + e("Vt7a", 1416)] =
                    this[
                      a(1884, "h9sa") +
                        r(2846, "aByn") +
                        a(2397, "g^7N") +
                        e("]zBX", 1985)
                    ][a(1710, "Rpq!") + e("rDZX", 1212)]),
                  (s[r(2349, "0b^H") + "n"] = i[r(1967, "IOmU")]),
                  (s[e("Vt7a", 1748) + e("h9j[", 698)] =
                    this[
                      r(1593, "L7dt") +
                        a(1051, "0b^H") +
                        e("@NQe", 787) +
                        r(1792, "Vt7a")
                    ][e("^vJ6", 1147) + r(1399, "ANg1")] + "%"),
                  (s[r(2426, "mVOl") + e("XyZ0", 876) + a(1170, "rDZX") + "d"] =
                    this[
                      a(1732, "sqmn") +
                        a(2969, "h9sa") +
                        e("UjkZ", 679) +
                        a(2024, "gvzY")
                    ][
                      r(1219, "F@Tj") + a(1316, "Rpq!") + e("GmUY", 1065) + "d"
                    ]),
                  s
                );
              },
              activeWidthSetting: function (t) {
                function e(t, e) {
                  return mt(t - -1304, e);
                }
                var n = {};
                function r(t, e) {
                  return mt(t - -437, e);
                }
                function i(t, e) {
                  return mt(e - -1203, t);
                }
                if (
                  ((n[i("v5%E", 1929)] = function (t, e) {
                    return t !== e;
                  }),
                  n[r(2085, "4PI7")](t, null))
                ) {
                  var a = {};
                  return (
                    (a[r(2524, "ZD5J")] =
                      t[e(830, "Rpq!") + i("wPSr", 1503)] + "px"),
                    a
                  );
                }
                var o = {};
                return (
                  (o[r(2327, "v5%E")] =
                    this[
                      e(1320, "aByn") +
                        r(2488, "KCU%") +
                        r(1880, "cEpe") +
                        i("]zBX", 1650)
                    ][e(1531, "ANg1") + r(2167, "h9sa")] + "px"),
                  o
                );
              },
              actionMenu: function (t) {
                function e(t, e) {
                  return pt(t, e - 906);
                }
                var n = {};
                n[e("yitr", 2127)] = function (t, e) {
                  return t === e;
                };
                var r = n,
                  i = {};
                function a(t, e) {
                  return pt(t, e - 871);
                }
                function o(t, e) {
                  return mt(e - -1219, t);
                }
                (i[a("3Ebw", 1833) + "ng"] = !1),
                  (i[e("yitr", 2437) + "er"] = !1),
                  (i[e("Prd$", 2688)] = !1),
                  (this[e("]zBX", 2579) + o("^vJ6", 1808) + e("zd1V", 1222)] =
                    i),
                  t === a("Lr6j", 1421) + "er"
                    ? ((this[
                        a("P4Ha", 2184) + a("sqmn", 1626) + a("bi2m", 1496)
                      ][a("6*XC", 1908) + "er"] = !0),
                      this[
                        a("%79i", 1110) + e("Vt7a", 1020) + o("0b^H", 471) + "t"
                      ]())
                    : r[e("zd1V", 1883)](t, a("7zVK", 1022))
                    ? ((this[
                        o("gvzY", 1773) + e("!Rq8", 2816) + e("Os^u", 2279)
                      ][e("4(Wz", 2345)] = !0),
                      (this[
                        a("6*XC", 1767) + a("g^7N", 1533) + o("wPSr", 204)
                      ] = !0))
                    : t === o("wPSr", 1566) + "ng" &&
                      (this[
                        a("59xp", 2223) + e("3Ebw", 1461) + e("%79i", 2206)
                      ][e("6*XC", 2126) + "ng"] = !0);
              },
              actionMenuClose: function (t) {
                function e(t, e) {
                  return pt(t, e - 1442);
                }
                function n(t, e) {
                  return st(t, e - -293);
                }
                var r = {};
                r[e("Prd$", 1692)] = n("%3dT", 1914);
                var i = r;
                function a(t, e) {
                  return mt(e - -1131, t);
                }
                t === a("59xp", 1840) + "er"
                  ? e("Lr6j", 2690) !== a("4PI7", 1534)
                    ? (this[
                        e("g^7N", 2432) + a("I#uU", 1994) + n("gvzY", 1848)
                      ][n("6*XC", 1627) + "er"] = !1)
                    : (this[
                        n("%3dT", 2294) + a("rDZX", 2135) + e("wPSr", 2218)
                      ][e("xeGx", 1481) + "er"] = !1)
                  : t === i[a("aByn", 1132)]
                  ? ((this[n("@NQe", 2139) + n("UvvK", 1244) + a("xeGx", 1628)][
                      e("rDZX", 2277)
                    ] = !1),
                    (this[a("L7dt", 1557) + n("0b^H", 2402) + a("ANg1", 1059)] =
                      !1))
                  : t === a("7zVK", 1110) + "ng" &&
                    (this[a("4(Wz", 407) + e("v5%E", 1522) + n("0b^H", 1519)][
                      n("UjkZ", 1615) + "ng"
                    ] = !1);
              },
              changeReact: function () {
                function t(t, e) {
                  return pt(t, e - -296);
                }
                function e(t, e) {
                  return st(e, t - 482);
                }
                this[t("rDZX", 1636) + e(2256, "Vt7a") + "t"] =
                  !this[t("h9sa", 468) + e(1801, "ysXH") + "t"];
              },
              backToTop: function () {
                function t(t, e) {
                  return pt(e, t - 447);
                }
                window[t(2262, "UvvK") + t(2090, "xeGx")](0, 0);
              },
              callBookView: function () {
                var t = this;
                return nt(
                  v.a.mark(function e() {
                    var n, r, i, a, o;
                    return v.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((i = function (t, e) {
                                return mt(t - -1361, e);
                              }),
                              (r = function (t, e) {
                                return mt(e - -1286, t);
                              }),
                              ((a = {})[
                                (n = function (t, e) {
                                  return st(e, t - 488);
                                })(2252, "UvvK")
                              ] = function (t, e) {
                                return t === e;
                              }),
                              (o = a),
                              null === t[r("XyZ0", 1191) + i(1828, "P4Ha")] ||
                                void 0 ===
                                  t[r("h9sa", 602) + r("IOmU", 1380)] ||
                                !o[i(1428, "zd1V")](
                                  t[r("UvvK", 1397) + r("!Rq8", 1479) + "ag"],
                                  !1
                                ))
                            ) {
                              e.next = 15;
                              break;
                            }
                            if (r("Os^u", 1364) === n(2391, "v5%E")) {
                              e.next = 14;
                              break;
                            }
                            return (
                              (e.next = 10),
                              Object(K.a)(t[r("yitr", 1866) + r("zd1V", 783)])
                            );
                          case 10:
                            200 ===
                              e.sent[i(702, "P4Ha")][r("4PI7", 1634) + "us"] &&
                              (t[n(2816, "g^7N") + n(2992, "P4Ha") + "ag"] =
                                !0),
                              (e.next = 15);
                            break;
                          case 14:
                            _0x398f50[n(1419, "rDZX")][
                              i(966, "ANg1") + i(784, "Prd$")
                            ] = "";
                          case 15:
                            t[
                              i(434, "Os^u") +
                                n(3151, "xeGx") +
                                n(2422, "3B$Q") +
                                "g"
                            ] = !1;
                          case 16:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              callPageRequest: function () {
                var t = this;
                return nt(
                  v.a.mark(function e() {
                    var n, r, i;
                    return v.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((i = function (t, e) {
                                return st(t, e - -858);
                              }),
                              (n = function (t, e) {
                                return pt(e, t - 9);
                              }),
                              null ===
                                t[
                                  (r = function (t, e) {
                                    return pt(t, e - 1094);
                                  })("I#uU", 2033) + n(18, "Prd$")
                                ] ||
                                void 0 ===
                                  t[r("ANg1", 2014) + n(360, "gvzY")] ||
                                !1 !==
                                  t[
                                    i("h9sa", 1557) +
                                      n(628, "cEpe") +
                                      r("cEpe", 1108)
                                  ])
                            ) {
                              e.next = 8;
                              break;
                            }
                            return (
                              (e.next = 6),
                              Object(K.c)(t[n(136, "L7dt") + r("Vt7a", 1811)])
                            );
                          case 6:
                            200 ===
                              e.sent[n(1028, "3Ebw")][r("cEpe", 1867) + "us"] &&
                              (t[
                                r("UvvK", 1499) +
                                  n(628, "cEpe") +
                                  r("bi2m", 1454)
                              ] = !0);
                          case 8:
                            t[
                              i("P4Ha", 1403) +
                                n(479, "t%Cy") +
                                n(1098, "t%Cy") +
                                i("Rpq!", 778)
                            ] = !1;
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              scroll: function () {
                var t = this,
                  e = {};
                function n(t, e) {
                  return pt(t, e - -201);
                }
                function r(t, e) {
                  return mt(e - -1681, t);
                }
                (e[a(3218, "]zBX")] = function (t, e) {
                  return t >= e;
                }),
                  (e[n("cEpe", 225)] = function (t, e) {
                    return t === e;
                  }),
                  (e[n("P4Ha", 1578)] = n("Vt7a", 1572));
                var i = e;
                function a(t, e) {
                  return st(e, t - 434);
                }
                window[r("^vJ6", 182) + n("F@Tj", 1220)] = function () {
                  var e =
                    window[c(1876, "cEpe") + c(2256, "3B$Q") + "t"] +
                    window[o("6*XC", 3060) + o("ZD5J", 1538) + "t"];
                  function o(t, e) {
                    return r(t, e - 1520);
                  }
                  function s(t, e) {
                    return n(e, t - -84);
                  }
                  function c(t, e) {
                    return a(t - 39, e);
                  }
                  var l =
                    0.75 *
                    document[o("PlwN", 1564)][
                      o("!Rq8", 1641) + s(419, "3Ebw") + "ht"
                    ];
                  i[c(2644, "IOmU")](e, l) &&
                    i[c(2496, "PlwN")](
                      t[
                        o("$ggD", 1882) +
                          o("sqmn", 1290) +
                          c(3156, "I#uU") +
                          s(642, "t%Cy")
                      ],
                      !1
                    ) &&
                    (i[s(582, "Os^u")] !== s(1163, "h9sa")
                      ? (t[o("ANg1", 1977) + s(841, "L7dt")](),
                        (t[
                          o("@NQe", 2770) +
                            s(605, "%79i") +
                            s(-29, "Os^u") +
                            c(1368, "gvzY")
                        ] = !0),
                        (t[o("$ggD", 1882) + c(2382, "h9sa")] = _0x554768(
                          t[c(2035, "3Ebw") + c(1682, "PlwN")],
                          10
                        )),
                        t[o("ZD5J", 1893) + c(2891, "7zVK") + "er"]())
                      : ((t[
                          c(2678, "GmUY") +
                            o("^vJ6", 2533) +
                            s(804, "t%Cy") +
                            s(1178, "ANg1")
                        ] = !0),
                        t[
                          c(2962, "mVOl") + c(1951, "59xp") + o("^vJ6", 1249)
                        ]()));
                };
              },
              onClickOutside: function () {
                function t(t, e) {
                  return pt(t, e - 371);
                }
                function e(t, e) {
                  return mt(t - -757, e);
                }
                1 ==
                  this[t("ANg1", 749) + t("]zBX", 1036) + e(1834, "UjkZ")][
                    e(1954, "KCU%") + "er"
                  ] &&
                  this[t("v5%E", 798) + t("yitr", 1797) + e(836, "3Ebw")](
                    e(2180, "4PI7") + "er"
                  );
              },
              stringBuffer: function (t, e) {
                var n = JSON[u(894, "IOmU")](
                    A.a[u(1209, "mVOl")][s("3Ebw", 2318)][
                      l("@NQe", 2071) + s("mVOl", 2755)
                    ](
                      A.a[l("%79i", 2539)][l("sqmn", 2345) + "4"][
                        u(747, "ZD5J")
                      ](t)
                    )
                  ),
                  r = A.a[l("GmUY", 1207)][l("t%Cy", 2113)][u(604, "6*XC")](
                    n[l("bi2m", 2401)]
                  ),
                  i = A.a[u(1209, "mVOl")][l("3Ebw", 1978)][u(1731, "L7dt")](
                    n.iv
                  ),
                  a = n[u(755, "7zVK") + l("Vt7a", 1232)],
                  o = parseInt(n[l("sqmn", 2177) + u(2127, "aByn")]);
                function s(t, e) {
                  return st(t, e - 118);
                }
                o <= 0 && (o = 999);
                var c = A.a[u(1063, "Rpq!") + "2"](e, r, {
                  hasher: A.a[l("Lr6j", 2206)][u(1776, "IOmU") + "2"],
                  keySize: 8,
                  iterations: o,
                });
                function l(t, e) {
                  return st(t, e - -137);
                }
                function u(t, e) {
                  return mt(t - -786, e);
                }
                return A.a[u(2391, "sqmn")]
                  [l("GmUY", 1993) + "pt"](a, c, {
                    mode: A.a[l("P4Ha", 871)][l("yitr", 1435)],
                    iv: i,
                  })
                  [s("h9sa", 2297) + u(1428, "!Rq8")](
                    A.a[u(1877, "yitr")][u(1170, "g^7N")]
                  );
              },
              arrayBufferToString: function (t) {
                function e(t, e) {
                  return st(e, t - -451);
                }
                var n = {};
                n[e(1466, "!Rq8")] =
                  e(1765, "Prd$") +
                  s("t%Cy", 871) +
                  s("3B$Q", -229) +
                  s("UvvK", 1119) +
                  a(1500, "bi2m") +
                  s("sqmn", 94) +
                  e(846, "0b^H") +
                  e(726, "I#uU");
                var r = n,
                  i = new Uint8Array(t[a(3291, "xeGx")]("|"));
                function a(t, e) {
                  return st(e, t - 517);
                }
                var o = String[a(2070, "XyZ0") + a(3101, "zd1V") + "de"][
                  a(2598, "3Ebw")
                ](String, i);
                function s(t, e) {
                  return pt(t, e - -318);
                }
                if (/[\u0080-\uffff]/[e(1755, "PlwN")](o))
                  throw new Error(r[e(2190, "yitr")]);
                return o;
              },
              resetCounter: function (t) {
                function e(t, e) {
                  return mt(e - -1241, t);
                }
                var n = {};
                (n[h(1374, "xeGx")] = h(1643, "L7dt")),
                  (n[W(1665, "aByn")] = function (t, e) {
                    return t + e;
                  }),
                  (n[e("UjkZ", 920)] = function (t, e) {
                    return t + e;
                  }),
                  (n[W(1671, "Rpq!")] = function (t, e) {
                    return t + e;
                  }),
                  (n[W(3325, "!Rq8")] = W(2383, "4PI7") + "le"),
                  (n[W(2622, "$ggD")] = e("3Ebw", 394));
                var r = n,
                  i = (function () {
                    function t(t, e) {
                      return W(t - -1640, e);
                    }
                    function e(t, e) {
                      return W(t - -1648, e);
                    }
                    function n(t, e) {
                      return h(t - 189, e);
                    }
                    var i = document[
                      e(269, "4(Wz") + n(1598, "cEpe") + n(2177, "4PI7")
                    ](r[t(261, "Prd$")]);
                    return (
                      i[n(1289, "xeGx") + e(522, "zd1V") + "d"](
                        document[
                          t(1341, "mVOl") + e(1290, "]zBX") + e(600, "3Ebw")
                        ]("")
                      ),
                      document[n(1318, "I#uU")][
                        t(1426, "rDZX") + e(727, "Rpq!") + "d"
                      ](i),
                      i
                    );
                  })(),
                  a = r[h(499, "gvzY")](
                    e("bi2m", 1510) + "6-",
                    this[W(1545, "sqmn") + e("3Ebw", 684)]
                  ),
                  o = {};
                (o[W(1824, "!Rq8")] = t[e("3B$Q", 1857)]),
                  (o[e("IOmU", 1334)] = t[e("Rpq!", 1669)]),
                  (o[h(1916, "wPSr")] = t[e("Rpq!", 846)]),
                  (o[W(1717, "v5%E")] = t[W(1421, "gvzY")]),
                  (o[h(1175, "bi2m") + "e"] = a);
                var s = o,
                  c = r[e("]zBX", 1045)](
                    r[e("^vJ6", 707)](
                      this[h(1645, "yitr") + e("aByn", 735)][W(1713, "h9j[")][
                        W(2615, "7zVK")
                      ][h(205, "GmUY") + h(1039, "t%Cy") + "at"],
                      this[e("KCU%", 1470) + h(247, "L7dt")][W(2e3, "%79i")][
                        W(2527, "4PI7")
                      ][h(1795, "P4Ha") + "id"]
                    ),
                    this[h(1873, "zd1V") + e("GmUY", 356)]
                  );
                c = A.a[W(2727, "]zBX")](c)[e("3Ebw", 1616) + e("zd1V", 157)]();
                var l = this[e("UvvK", 1078) + W(1526, "bi2m") + "er"](
                    s[e("UjkZ", 570)][W(1832, "Rpq!") + "ce"](
                      e("ysXH", 1545) + e("IOmU", 1408),
                      "ey"
                    ),
                    c
                  ),
                  u = document[
                    h(914, "ysXH") + e("yitr", 81) + W(2853, "^vJ6")
                  ](r[e("F@Tj", 282)]),
                  d = this[h(256, "0b^H") + W(3142, "%79i") + "er"](
                    s[W(2030, "4PI7")][W(1982, "Vt7a") + "ce"](
                      W(2238, "%79i") + e("KCU%", 1839),
                      "ey"
                    ),
                    c
                  );
                (u[W(2073, "UvvK") + W(1546, "v5%E")] = ""),
                  (d = JSON[e("aByn", 1822)](d)),
                  (d = Object[h(746, "xeGx") + "s"](d));
                for (var m = 1, v = 0; v < d[h(1270, "bi2m") + "h"]; v++) {
                  d[v];
                  var f = d[v][W(2254, "@NQe")]("|");
                  this[e("sqmn", 441) + "rk"](
                    u,
                    f,
                    !1,
                    m * parseInt(s[h(945, "0b^H")])
                  ),
                    (m += 2);
                }
                u[
                  W(2171, "Os^u") +
                    W(2142, "]zBX") +
                    e("Os^u", 294) +
                    h(237, "cEpe")
                ](e("!Rq8", 1967) + h(830, "Lr6j"), l);
                var p = this[h(612, "g^7N") + e("v5%E", 1248) + "er"](
                  s[e("^vJ6", 1990)][W(1982, "Vt7a") + "ce"](
                    r[h(1639, "g^7N")],
                    "ey"
                  ),
                  c
                )[W(3079, "bi2m")]("|");
                function h(t, e) {
                  return mt(t - -1221, e);
                }
                function W(t, e) {
                  return st(e, t - 517);
                }
                for (var g = 0; g < p[h(1667, "!Rq8") + "h"]; g++) {
                  var b = p[g];
                  i[e("59xp", 2012)][h(1164, "rDZX") + W(1386, "Rpq!")](b, 0);
                }
                i[W(2550, "I#uU")][W(3148, "UjkZ") + e("mVOl", 983)](
                  h(1223, "aByn") +
                    h(503, "Vt7a") +
                    e("UvvK", 528) +
                    W(2301, "%79i") +
                    h(394, "4(Wz") +
                    e("I#uU", 338) +
                    W(3080, "KCU%") +
                    e("P4Ha", 1209) +
                    W(2532, "3B$Q") +
                    W(1579, "UjkZ"),
                  0
                ),
                  i[e("$ggD", 913)][W(3037, "cEpe") + h(875, "6*XC")](
                    h(1950, "F@Tj") +
                      h(1352, "4(Wz") +
                      h(1154, "h9sa") +
                      e("ANg1", 892) +
                      e("ZD5J", 187) +
                      W(1428, "yitr") +
                      W(2870, "F@Tj") +
                      h(961, "^vJ6") +
                      h(1754, "XyZ0") +
                      e("ANg1", 267) +
                      e("^vJ6", 254)
                  );
              },
              checkString: function () {
                var t = this;
                return nt(
                  v.a.mark(function e() {
                    var n, r, i, a, o, s, c, u;
                    return v.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (c = function (t, e) {
                                return st(t, e - -714);
                              }),
                              (i = function (t, e) {
                                return st(t, e - 496);
                              }),
                              (n = {
                                DKGId: function (t) {
                                  return t();
                                },
                                PgUBc:
                                  (s = function (t, e) {
                                    return pt(e, t - -414);
                                  })(540, "sqmn") +
                                  s(1311, "h9j[") +
                                  i("%79i", 1498),
                              }),
                              (r = n[c("F@Tj", 1830)](l.getToken)),
                              ((a = {})[i("6*XC", 1680)] = r),
                              ((o = {})[s(785, "bi2m") + "s"] = a),
                              (e.next = 11),
                              Y.a[s(1103, "4PI7")](
                                n[c("g^7N", 681)] +
                                  t[i("@NQe", 2581) + s(1216, "7zVK")],
                                o
                              )
                            );
                          case 11:
                            return (
                              (u = e.sent),
                              e.abrupt("return", u[i("%79i", 1979)])
                            );
                          case 13:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              getConfigStyle: function () {
                var t = {};
                function e(t, e) {
                  return mt(e - -434, t);
                }
                (t[e("P4Ha", 1249)] =
                  e("4PI7", 1182) + e("L7dt", 1329) + r("0b^H", -209) + "t"),
                  (t[r("wPSr", -61)] = e("ysXH", 2565) + r("zd1V", 701)),
                  (t[r("g^7N", 771)] = u(2481, "59xp") + e("sqmn", 1616));
                var n = t;
                function r(t, e) {
                  return st(t, e - -1126);
                }
                var i = document[
                    r("3Ebw", 1078) + u(1431, "Rpq!") + u(2409, "UjkZ")
                  ](u(1623, "KCU%") + "le"),
                  a = window[
                    e("@NQe", 2156) + r("h9sa", 498) + u(1445, "F@Tj") + "e"
                  ](i, null),
                  o = document[
                    r("gvzY", 820) + u(1243, "GmUY") + u(1779, "%79i")
                  ](u(2784, "L7dt") + r("L7dt", -114) + e("g^7N", 1939)),
                  s = window[
                    r("0b^H", 886) + r("%79i", 714) + e("4PI7", 1559) + "e"
                  ](o, null),
                  c = document[
                    e("%3dT", 2217) + r("zd1V", 629) + r("59xp", 1685)
                  ](n[e("cEpe", 1130)]),
                  l = window[
                    u(2756, "%79i") + r("4PI7", 1147) + r("cEpe", 367) + "e"
                  ](c, null);
                function u(t, e) {
                  return pt(e, t - 1244);
                }
                return {
                  pagewidth: a[
                    u(2686, "mVOl") + u(2662, "3B$Q") + u(1716, "!Rq8") + "e"
                  ](u(1411, "%3dT")),
                  background: l[
                    r("GmUY", 35) + e("59xp", 958) + r("^vJ6", 1212) + "e"
                  ](u(1550, "gvzY") + u(1374, "zd1V") + r("Lr6j", 409) + "r"),
                  fontsize: l[
                    r("%79i", 896) + u(3100, "Os^u") + e("yitr", 2515) + "e"
                  ](n[e("4(Wz", 1521)]),
                  fontfamily: l[
                    r("ZD5J", -190) + r("wPSr", 919) + r("@NQe", 912) + "e"
                  ](u(2739, "gvzY") + e("KCU%", 1604) + "y")[
                    u(1318, "xeGx") + "ce"
                  ](e("ZD5J", 2739) + r("F@Tj", 345) + "if", ""),
                  color: s[
                    e("4(Wz", 2092) + u(1286, "Rpq!") + u(1637, "Vt7a") + "e"
                  ](u(2570, "4PI7")),
                  waterMark: n[u(1682, "XyZ0")],
                };
              },
              getWithElement: function (t) {
                function e(t, e) {
                  return st(e, t - -103);
                }
                var n = {};
                function r(t, e) {
                  return pt(e, t - 48);
                }
                n[a("PlwN", 894)] = a("3B$Q", 1073) + e(1917, "3B$Q");
                var i = n;
                function a(t, e) {
                  return mt(e - -848, t);
                }
                var o = document[
                  e(1431, "xeGx") + a("59xp", 1648) + r(1389, "bi2m")
                ](i[a("yitr", 1164)]);
                return (
                  (o[r(1515, "PlwN") + r(1795, "%3dT")] = t),
                  0 ===
                  o[e(1022, "Rpq!") + r(857, "cEpe")][a("sqmn", 1187) + "h"]
                    ? ""
                    : o[e(993, "zd1V") + r(1942, "59xp")][0][
                        r(980, "UjkZ") + e(1137, "bi2m")
                      ]
                );
              },
              strArray: function (t, e, n, r, i) {
                var a = {};
                function o(t, e) {
                  return mt(e - -496, t);
                }
                (a[c("!Rq8", 2471)] = function (t, e) {
                  return t < e;
                }),
                  (a[v("gvzY", 1094)] = v("4PI7", -404) + o("h9sa", 1219)),
                  (a[o("3B$Q", 1934)] = function (t, e) {
                    return t - e;
                  }),
                  (a[o("mVOl", 1323)] = function (t, e) {
                    return t != e;
                  });
                var s = a;
                function c(t, e) {
                  return mt(e - -683, t);
                }
                t[o("Os^u", 884)] = n + c("h9sa", 733) + r;
                var l = (e = (e =
                    this[v("g^7N", -221) + o("P4Ha", 2307) + o("XyZ0", 874)](e))
                    [c("59xp", 2328) + "ce"](/&nbsp;/gi, " ")
                    [c("$ggD", 1589)]())[o("PlwN", 2643)](" "),
                  u = "",
                  d = "",
                  m = [];
                function v(t, e) {
                  return st(t, e - -1297);
                }
                for (
                  var f = 0;
                  s[c("4PI7", 2062)](f, l[v("t%Cy", 493) + "h"]);
                  f++
                )
                  for (
                    var p = s[c("%79i", 2314)][v("yitr", 1213)]("|"), h = 0;
                    ;

                  ) {
                    switch (p[h++]) {
                      case "0":
                        t[v("%3dT", 951) + v("%79i", 1153) + "t"](u)[
                          c("ysXH", 1744)
                        ] > i && (m[v("sqmn", 618)](d), (u = l[f]));
                        continue;
                      case "1":
                        f == s[o("XyZ0", 1510)](l[o("zd1V", 1815) + "h"], 1) &&
                          m[v("Vt7a", -228)](u);
                        continue;
                      case "2":
                        d = u;
                        continue;
                      case "3":
                        u += l[f];
                        continue;
                      case "4":
                        s[v("v5%E", -430)](u, "") && (u += " ");
                        continue;
                    }
                    break;
                  }
                return m;
              },
              strFork: function (t, e, n, r) {
                var i,
                  a = {
                    QSUUM: function (t, e) {
                      return t === e;
                    },
                    dArnU: function (t, e) {
                      return t * e;
                    },
                    LFnyy: function (t, e) {
                      return t(e);
                    },
                    gxGwl: function (t, e) {
                      return t < e;
                    },
                    rULXU: function (t, e) {
                      return t - e;
                    },
                    RLRbB: function (t, e) {
                      return t + e;
                    },
                    PDVXs: function (t, e) {
                      return t * e;
                    },
                    muiAP: function (t, e) {
                      return t * e;
                    },
                    jsdgE: function (t, e) {
                      return t + e;
                    },
                    gkHmy: u("Prd$", 2256),
                    xHeTr: function (t, e) {
                      return t + e;
                    },
                  };
                ((i = document[
                  u("v5%E", 1705) + u("XyZ0", 2382) + W(950, "Vt7a")
                ](W(1046, "bi2m") + "s"))[W(1069, "IOmU")][u("59xp", 555)] = r),
                  (i[u("cEpe", 1326)][
                    u("^vJ6", 927) + u("rDZX", 845) + u("PlwN", 1708)
                  ] =
                    this[W(2174, "$ggD") + W(1608, "%79i") + "e"][
                      g("mVOl", 2797) + u("zd1V", 612)
                    ]),
                  (i[this[g("I#uU", 1689) + "s"][1]] =
                    2.5 * t[this[g("%79i", 1382) + "s"][2]]),
                  (i[this[u("Lr6j", 1701) + "s"][3]][
                    this[u("GmUY", 2043) + "s"][1]
                  ] = g("Prd$", 1488)),
                  t[this[u("bi2m", 647) + "s"][4]](i);
                var o = i[this[u("Os^u", 756) + "s"][5]]("2d"),
                  s = a[W(1847, "XyZ0")](
                    a[W(1865, "P4Ha")](
                      parseInt,
                      this[u("IOmU", 702) + W(1417, "^vJ6") + "e"][
                        this[g("Vt7a", 2811) + "s"][7]
                      ]
                    ),
                    2.5
                  ),
                  c =
                    this[u("P4Ha", 987) + g("%79i", 1894) + "e"][
                      this[g("I#uU", 1689) + "s"][8]
                    ],
                  l = [];
                function u(t, e) {
                  return pt(t, e - 482);
                }
                for (
                  var d = 0;
                  a[u("L7dt", 1826)](d, e[W(1236, "^vJ6") + "h"]);
                  d++
                ) {
                  var m = this[g("Os^u", 943) + u("bi2m", 635)](
                    o,
                    e[d],
                    s,
                    c,
                    i[this[W(976, "yitr") + "s"][1]]
                  );
                  (l = l[g("]zBX", 2077) + "t"](m)),
                    d < a[u("^vJ6", 1380)](e[u("Rpq!", 1374) + "h"], 1) &&
                      l[W(977, "]zBX")](" ");
                }
                var v, f, p, h;
                function W(t, e) {
                  return st(e, t - -243);
                }
                function g(t, e) {
                  return pt(t, e - 926);
                }
                for (
                  i[u("P4Ha", 1876) + "t"] = a[g("t%Cy", 1823)](
                    l[g("v5%E", 1295) + "h"] * s,
                    1.6
                  ),
                    (o = i[W(774, "$ggD") + W(1318, "sqmn")]("2d"))[
                      W(2292, "6*XC")
                    ] = a[W(1119, "v5%E")](s + g("ANg1", 1592), c),
                    o[u("mVOl", 2325) + u("L7dt", 1786)] =
                      this[g("$ggD", 2460) + W(2379, "Lr6j") + "e"][
                        u("%3dT", 533)
                      ],
                    o[u("rDZX", 2051) + g("%3dT", 2390)](
                      0,
                      0,
                      o[u("0b^H", 1422)],
                      o[g("wPSr", 2488) + "t"]
                    ),
                    d = 0;
                  d < l[u("L7dt", 1284) + "h"];
                  d++
                )
                  if (W(2185, "PlwN") !== u("4(Wz", 2406)) {
                    var b = l[d][W(1535, "UvvK")](W(1455, "4(Wz"));
                    for (p = 0, v = 0; v < b[W(900, "ysXH") + "h"]; v++) {
                      if (
                        1 ===
                        (f = b[v][g("GmUY", 1228)](u("h9j[", 2023)))[
                          W(1118, "P4Ha") + "h"
                        ]
                      )
                        o[g("^vJ6", 1080) + W(2519, "cEpe")](
                          b[v],
                          p,
                          s + d * s * 1.6
                        ),
                          (p += o[g("GmUY", 1325) + u("GmUY", 1735) + "t"](
                            b[v]
                          )[g("%3dT", 1093)]);
                      else
                        for (
                          var k = (W(1177, "h9sa") +
                              u("ZD5J", 2089) +
                              g("GmUY", 1456))[u("4(Wz", 1120)]("|"),
                            C = 0;
                          ;

                        ) {
                          switch (k[C++]) {
                            case "0":
                              o[u("6*XC", 1856) + W(2164, "XyZ0")](
                                h,
                                p,
                                s + 1.6 * a[g("Os^u", 1897)](d, s)
                              );
                              continue;
                            case "1":
                              h = f[g("xeGx", 2548)]();
                              continue;
                            case "2":
                              f = f[W(861, "F@Tj")](" ")[u("sqmn", 1648)]();
                              continue;
                            case "3":
                              o[g("Vt7a", 2829) + g("aByn", 2428)](
                                f,
                                p,
                                s +
                                  a[u("0b^H", 2095)](
                                    a[g("ZD5J", 2462)](d, s),
                                    1.6
                                  )
                              );
                              continue;
                            case "4":
                              o[u("gvzY", 1953)] = a[W(1203, "gvzY")](
                                a[u("%3dT", 1682)](s, u("ZD5J", 2055)),
                                c
                              );
                              continue;
                            case "5":
                              p +=
                                o[g("zd1V", 2492) + g("cEpe", 1058) + "t"](f)[
                                  g("h9j[", 992)
                                ];
                              continue;
                            case "6":
                              o[g("Os^u", 971)] =
                                W(948, "cEpe") + "c " + s + u("GmUY", 1971) + c;
                              continue;
                            case "7":
                              p +=
                                o[u("bi2m", 2394) + g("KCU%", 1943) + "t"](h)[
                                  u("UvvK", 2202)
                                ];
                              continue;
                          }
                          break;
                        }
                      o[g("zd1V", 1074)] = a[g("h9j[", 1181)](
                        W(1109, "bi2m") + "c " + s + a[g("Lr6j", 2828)],
                        c
                      );
                    }
                    o[g("L7dt", 1677)] =
                      a[W(1122, "PlwN")](s, u("h9j[", 748)) + c;
                  } else
                    (this[g("t%Cy", 2079) + g("Prd$", 2229) + W(1209, "h9sa")][
                      g("Os^u", 2821) + u("$ggD", 993)
                    ] = _0x47591f),
                      "6" === _0x303e03 &&
                        a[g("]zBX", 1466)](
                          this[
                            W(1169, "4(Wz") + g("Os^u", 2089) + u("4PI7", 2222)
                          ][
                            W(2500, "g^7N") +
                              u("0b^H", 1610) +
                              g("bi2m", 2767) +
                              "d"
                          ],
                          !1
                        ) &&
                        ((this[
                          W(2446, "XyZ0") + W(2468, "yitr") + W(865, "sqmn")
                        ][u("xeGx", 919) + u("@NQe", 1348)] = "5"),
                        (this[
                          u("h9j[", 484) + u("wPSr", 1526) + u("ysXH", 2132)
                        ][
                          g("3B$Q", 2803) +
                            u("0b^H", 1610) +
                            u("mVOl", 2372) +
                            "d"
                        ] = !0)),
                      (_0xed4999[W(1212, "XyZ0")][
                        W(1906, "t%Cy") + g("yitr", 1587)
                      ] =
                        u("%79i", 619) +
                        u("@NQe", 1288) +
                        g("Rpq!", 2006) +
                        "--" +
                        this[
                          W(1254, "L7dt") + g("Prd$", 2229) + u("]zBX", 2021)
                        ][g("6*XC", 1794) + g("xeGx", 2663)]);
                tt(n) == g("@NQe", 2470) + u("ANg1", 2228) && (n = !0),
                  n &&
                    this[u("Os^u", 591) + "rk"](
                      o,
                      i[W(1773, "PlwN")],
                      i[W(935, "GmUY") + "t"]
                    );
              },
              strMark: function (t, e, n) {
                var r = {};
                (r[c(1353, "h9j[")] = function (t, e) {
                  return t < e;
                }),
                  (r[c(1218, "t%Cy")] = function (t, e) {
                    return t !== e;
                  }),
                  (r[l("I#uU", -281)] =
                    c(610, "sqmn") +
                    o(355, "v5%E") +
                    l("0b^H", 1180) +
                    o(1595, "t%Cy")),
                  (r[o(1081, "sqmn")] = function (t, e) {
                    return t / e;
                  }),
                  (r[c(1737, "aByn")] = function (t, e) {
                    return t * e;
                  });
                var i = r,
                  a = document[
                    o(372, "PlwN") + c(1280, "59xp") + l("3Ebw", 136)
                  ](l("%3dT", -200) + "s");
                function o(t, e) {
                  return pt(e, t - -43);
                }
                document[l("XyZ0", 68)][o(761, "mVOl") + c(386, "6*XC") + "d"](
                  a
                ),
                  i[l("UvvK", 1329)](e, n)
                    ? (a[o(534, "]zBX")] = e)
                    : i[c(1908, "@NQe")](l("ZD5J", 1023), c(1520, "ysXH"))
                    ? _0x1a9338[
                        l("^vJ6", -174) +
                          c(731, "IOmU") +
                          o(1391, "t%Cy") +
                          l("rDZX", -405)
                      ]
                      ? _0x2a9415[c(1826, "Prd$")](o(1557, "P4Ha"))
                      : (_0x24fa5a[l("F@Tj", -117) + o(-2, "IOmU")] =
                          _0x1191ef[c(1271, "I#uU") + l("59xp", 726) + "i"]())
                    : (a[c(1748, "3Ebw")] = n),
                  i[c(908, "ANg1")](a[l("ANg1", 297)], 750) &&
                    (a[l("@NQe", 20)] = 750),
                  (a[c(1410, "^vJ6") + "t"] = a[o(1249, "4(Wz")]);
                var s = a[l("KCU%", 1033) + o(104, "mVOl")]("2d");
                function c(t, e) {
                  return mt(t - -1216, e);
                }
                function l(t, e) {
                  return mt(e - -1839, t);
                }
                (s[l("IOmU", 825)] =
                  c(716, "6*XC") + c(1822, "Rpq!") + l("I#uU", 1099)),
                  (s[o(999, "gvzY") + l("Vt7a", 414)] = c(1077, "6*XC") + "r");
                var u = t[
                  o(1180, "v5%E") +
                    l("%79i", -64) +
                    l("PlwN", 341) +
                    c(1499, "0b^H")
                ](-80, 0, 80, 0);
                u[l("$ggD", 1171) + l("ysXH", 841) + "op"](
                  0.5,
                  l("7zVK", 477) +
                    l("aByn", 621) +
                    l("xeGx", 1082) +
                    c(1061, "IOmU")
                ),
                  u[l("ANg1", 701) + o(961, "PlwN") + "op"](
                    0.25,
                    l("sqmn", -13) +
                      o(480, "!Rq8") +
                      l("!Rq8", 180) +
                      c(1943, "^vJ6")
                  ),
                  u[c(1605, "bi2m") + l("%3dT", 1007) + "op"](
                    0.1,
                    l("7zVK", 477) +
                      l("ysXH", 72) +
                      l("GmUY", 1303) +
                      o(1654, "ANg1")
                  ),
                  u[o(1805, "mVOl") + c(1191, "L7dt") + "op"](
                    0.1,
                    i[c(1751, "aByn")]
                  ),
                  (s[l("ZD5J", 258) + o(70, "Prd$")] = u),
                  s[c(767, "wPSr")](),
                  s[c(1851, "Vt7a") + c(635, "wPSr")](
                    a[l("%79i", -61)] / 2,
                    i[o(1073, "7zVK")](a[l("]zBX", -504) + "t"], 2)
                  ),
                  s[l("Vt7a", 1361) + "e"](i[o(225, "gvzY")](-0.1, Math.PI)),
                  s[c(1493, "6*XC") + o(291, "Lr6j")](
                    this[o(887, "UjkZ") + c(1402, "h9sa") + "e"][
                      c(304, "Lr6j") + c(138, "Lr6j")
                    ],
                    0,
                    0
                  ),
                  s[l("XyZ0", 1056) + "re"]();
                for (var d = 0, m = 0; m < n; ) {
                  for (; d < e; )
                    t[l("ZD5J", -406) + o(-16, "Prd$")](a, d, m),
                      (d += a[c(274, "g^7N")]);
                  (d = 0), (m += a[o(252, "GmUY") + "t"]);
                }
                document[l("bi2m", 972)][c(569, "IOmU") + c(897, "ANg1") + "d"](
                  a
                );
              },
            }
          ),
          watch: {
            $route: function (t) {
              var e = {};
              function n(t, e) {
                return pt(t, e - -485);
              }
              function r(t, e) {
                return st(e, t - -1195);
              }
              function i(t, e) {
                return mt(e - 79, t);
              }
              (e[r(505, "mVOl")] = function (t, e) {
                return t === e;
              }),
                (e[r(1473, "mVOl")] = i("sqmn", 1559) + r(1154, "^vJ6") + "fo"),
                (e[n("%79i", 1225)] = function (t, e) {
                  return t !== e;
                }),
                (e[i("XyZ0", 1482)] =
                  n("sqmn", 1365) + r(965, "UjkZ") + n("h9sa", 877)),
                (e[n("yitr", -89)] = function (t, e) {
                  return t + e;
                }),
                (e[i("4(Wz", 1723)] = function (t, e) {
                  return t + e;
                }),
                (e[r(1091, "L7dt")] = r(1432, "^vJ6") + "g-");
              var a = e;
              a[r(-319, "ysXH")](t[n("3B$Q", -289)], a[n("I#uU", -375)])
                ? (this[n("ysXH", 402) + n("Rpq!", -477)](),
                  (this[
                    r(1557, "59xp") +
                      i("@NQe", 2393) +
                      i("59xp", 1770) +
                      n("F@Tj", 1110)
                  ] = !0),
                  (this[r(238, "Lr6j") + i("xeGx", 1987)] = parseInt(
                    this[r(729, "rDZX") + n("^vJ6", 688)],
                    10
                  )),
                  this[r(-230, "Vt7a") + n("Vt7a", -371) + "er"]())
                : null !== t[r(1586, "sqmn")] &&
                  a[i("ZD5J", 2979)](t[n("4(Wz", 355)], a[n("yitr", -384)]) &&
                  a[n("rDZX", 948)](
                    a[n("UjkZ", -478)](
                      n("zd1V", -146) +
                        i("aByn", 2153) +
                        window[r(1412, "ANg1")],
                      "/"
                    ) + a[n("h9sa", 235)],
                    window[r(1356, "ZD5J") + r(242, "F@Tj") + r(-317, "7zVK")]
                  ) !== t[r(624, "h9sa")] &&
                  (document[n("0b^H", -2)][i("59xp", 1436) + r(1323, "xeGx")] =
                    "");
            },
            settingThemesMenu: {
              handler: function () {
                var t = this;
                function e(t, e) {
                  return pt(t, e - 449);
                }
                function n(t, e) {
                  return st(t, e - -443);
                }
                X.a[e("$ggD", 1494) + e("]zBX", 1643)](function () {
                  function r(t, e) {
                    return n(e, t - 957);
                  }
                  function i(t, n) {
                    return e(n, t - 425);
                  }
                  function a(t, e) {
                    return n(t, e - 814);
                  }
                  if (i(2357, "KCU%") !== r(1780, "0b^H"))
                    _0x374626[r(2164, "3B$Q")] = _0xdef8f9;
                  else {
                    var o = {};
                    (o[i(2158, "UjkZ")] = 16),
                      t[
                        r(1938, "mVOl") +
                          i(1244, "Vt7a") +
                          r(2837, "59xp") +
                          "y"
                      ][a("UjkZ", 1415) + "e"](o);
                    var s = {};
                    (s[i(1370, "@NQe")] =
                      window[a("cEpe", 1774) + r(2641, "UvvK") + "t"] -
                      150 -
                      16),
                      t[
                        r(2413, "59xp") +
                          i(1284, "3Ebw") +
                          i(2783, "59xp") +
                          "ky"
                      ][r(2896, "Prd$") + "e"](s);
                  }
                });
              },
              deep: !0,
            },
          },
          mounted: function () {
            var t = this;
            return nt(
              v.a.mark(function e() {
                var n, r, i, a, o, s, c, l;
                return v.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (s = function (t, e) {
                            return pt(t, e - 458);
                          }),
                          (i = function (t, e) {
                            return mt(t - -834, e);
                          }),
                          ((n = {})[
                            (o = function (t, e) {
                              return pt(e, t - 972);
                            })(1358, "g^7N")
                          ] = function (t, e) {
                            return t !== e;
                          }),
                          (n[o(1346, "g^7N")] = o(1233, "59xp") + "le"),
                          (n[o(2213, "PlwN")] = function (t, e) {
                            return t === e;
                          }),
                          (n[i(1404, "rDZX")] = i(2152, "%3dT")),
                          (n[s("Vt7a", 1460)] =
                            o(1754, "xeGx") +
                            i(1344, "IOmU") +
                            s("IOmU", 2177)),
                          (r = n),
                          (t[
                            o(1849, "]zBX") +
                              i(1215, "59xp") +
                              s("aByn", 488) +
                              o(1180, "xeGx")
                          ] = !0),
                          (t[
                            i(1140, "Vt7a") + i(1644, "bi2m") + s("v5%E", 2293)
                          ] =
                            t[
                              o(1586, "L7dt") +
                                o(2839, "aByn") +
                                o(1093, "L7dt") +
                                s("h9sa", 1732)
                            ]),
                          (a = Object(Q.e)()) &&
                            (r[i(909, "IOmU")](
                              a[o(2649, "4PI7") + s("Os^u", 1006)],
                              "6"
                            ) &&
                              (r[o(1290, "Lr6j")](
                                a[
                                  i(1717, "h9sa") +
                                    o(2341, "ZD5J") +
                                    o(1990, "3B$Q") +
                                    "d"
                                ],
                                void 0
                              ) &&
                                ((a[
                                  o(1804, "IOmU") +
                                    o(2369, "v5%E") +
                                    o(1537, "@NQe") +
                                    "d"
                                ] = !1),
                                (a[i(2300, "7zVK") + s("6*XC", 2125)] = "5")),
                              !1 ===
                                a[
                                  i(2304, "bi2m") +
                                    s("59xp", 1032) +
                                    o(1677, "P4Ha") +
                                    "d"
                                ] &&
                                (a[o(1021, "v5%E") + s("mVOl", 1005)] = "5")),
                            (t[
                              s("t%Cy", 1611) +
                                o(1566, "Vt7a") +
                                s("%3dT", 1064)
                            ] = a)),
                          (t[o(1983, "Os^u") + s("ZD5J", 1379)] = parseInt(
                            t[s("ZD5J", 2126) + o(1797, "4(Wz")],
                            10
                          )),
                          (t[o(1522, "Lr6j") + i(731, "Lr6j")] =
                            t[s("rDZX", 1499) + s("UjkZ", 964) + "s"]),
                          (e.next = 14),
                          t[i(1381, "rDZX") + o(2254, "h9sa") + "er"]()
                        );
                      case 14:
                        if (
                          !t[s("Vt7a", 1010) + i(1308, "KCU%")] ||
                          void 0 ===
                            t[o(2888, "KCU%") + s("3Ebw", 913)][
                              s("t%Cy", 628)
                            ] ||
                          2 !==
                            t[s("$ggD", 1166) + o(2080, "UvvK")][
                              i(2207, "]zBX")
                            ][s("6*XC", 2034)][
                              o(2573, "IOmU") + o(2728, "cEpe")
                            ]
                        ) {
                          e.next = 28;
                          break;
                        }
                        if (i(998, "h9j[") === r[o(1224, "h9sa")]) {
                          e.next = 20;
                          break;
                        }
                        (c =
                          _0x192a82[
                            i(506, "]zBX") +
                              i(2005, "3B$Q") +
                              i(1123, "$ggD") +
                              "e"
                          ] +
                          "/" +
                          _0x42f82a),
                          (_0x3eb625[s("rDZX", 1554) + i(542, "IOmU")][
                            s("P4Ha", 562)
                          ] = c),
                          (e.next = 28);
                        break;
                      case 20:
                        return (
                          (e.next = 22),
                          t[o(2695, "zd1V") + o(1830, "GmUY") + "g"]()
                        );
                      case 22:
                        return (
                          (l = e.sent),
                          (t[o(2524, "rDZX") + s("%3dT", 1369) + "e"] =
                            t[
                              s("@NQe", 1713) +
                                s("UvvK", 1633) +
                                o(2085, "7zVK")
                            ]()),
                          (e.next = 26),
                          t[i(2363, "h9j[") + o(2831, "4(Wz") + "er"](l)
                        );
                      case 26:
                        $(s("!Rq8", 520) + o(2367, "Os^u"))
                          [s("59xp", 1719)]()
                          .on(
                            s("XyZ0", 921) +
                              i(579, "%3dT") +
                              o(1660, "ZD5J") +
                              i(1317, "7zVK"),
                            function () {
                              function t(t, e) {
                                return i(t - -156, e);
                              }
                              var e, n;
                              document[
                                ((e = 1569),
                                (n = "I#uU"),
                                s(n, e - 52) + t(2058, "gvzY") + t(522, "bi2m"))
                              ](t(787, "%3dT") + "le")[t(1505, "4PI7") + "e"]();
                            }
                          ),
                          $(i(1230, "cEpe") + i(2187, "t%Cy"))
                            [i(1164, "Vt7a")]()
                            .on(
                              o(1094, "g^7N") +
                                s("59xp", 1594) +
                                s("UvvK", 2274),
                              function () {
                                function t(t, e) {
                                  return o(t - 276, e);
                                }
                                function e(t, e) {
                                  return s(t, e - 764);
                                }
                                function n(t, e) {
                                  return i(t - 364, e);
                                }
                                if (
                                  r[e("@NQe", 1520)](
                                    n(1687, "!Rq8"),
                                    e("59xp", 2663)
                                  )
                                )
                                  return (
                                    n(1735, "0b^H") +
                                    n(1572, "sqmn") +
                                    t(2186, "aByn") +
                                    t(1791, "cEpe") +
                                    t(2121, "rDZX")
                                  );
                                document[
                                  t(2640, "g^7N") +
                                    t(2316, "Lr6j") +
                                    n(2345, "I#uU")
                                ](r[e("7zVK", 2015)])[n(1858, "yitr") + "e"]();
                              }
                            );
                      case 28:
                        EventBus[s("ysXH", 1432)](r[s("h9sa", 1689)]),
                          window[s("3Ebw", 994)][
                            s("Rpq!", 1506) + s("F@Tj", 1954) + "e"
                          ](
                            i(1175, "L7dt") + i(1668, "GmUY") + o(1051, "0b^H"),
                            "*"
                          );
                      case 29:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
        },
        gt = n(65),
        bt = n(66),
        kt = n(67);
      if (
        (n(35),
        n(91),
        n(92),
        n(93),
        n(94),
        n(95),
        (window.$ = window.jQuery = n(32)),
        (window.Popper = n(49).default),
        (window.Swiper = n(89).default),
        (window.axios = n(23)),
        (window.axios.defaults.headers.common["X-Requested-With"] =
          "XMLHttpRequest"),
        (window.get = n(104)),
        (window.isArray = n(31)),
        (window.omit = n(113)),
        n(293),
        (window.Vue = n(22)),
        (window.EventBus = new Vue()),
        Vue.use(u.a),
        Vue.use(a.a),
        Vue.use(c.a),
        Vue.use(d.a),
        o.enableDevtool ||
          ((Vue.config.devtools = !1), (Vue.config.debug = !1)),
        Vue.component("continue-reading", n(374).default),
        Vue.component("book-gift", n(375).default),
        Vue.component("report", n(376).default),
        Vue.component("bookmark", n(377).default),
        Vue.component("book-vote", n(378).default),
        Vue.component("chapter-list", n(379).default),
        Vue.component("reviews", n(380).default),
        Vue.component("reviews-spoiler", n(381).default),
        Vue.component("reviews-translator", n(382).default),
        Vue.component("chapter-vote", n(383).default),
        Vue.component("book-author", n(384).default),
        Vue.component("book-fan", n(385).default),
        Vue.component("book-reaction", n(386).default),
        Vue.component("book-nominee", n(387).default),
        Vue.component("chapter-unlock", n(388).default),
        Vue.component("chapter-comment", n(389).default),
        Vue.component("user-nav", n(390).default),
        Vue.component("v-spinner", n(147).default),
        Vue.component("v-shimmer", n(148).default),
        Vue.component("read-more", n(149).default),
        (window.ssrLoadingPageMinxinMap = {
          book: gt.a,
          home: bt.a,
          chapter: Wt,
          404: kt.a,
        }),
        document.getElementById("app"))
      )
        new Vue({
          el: "#app",
          store: r.a,
          components: {
            appLogin: S,
            appRegister: I,
            appForgot: V,
            appRetry: D,
            library: function () {
              return n.e(8).then(n.bind(null, 426));
            },
            setting: function () {
              return Promise.all([n.e(0), n.e(18)]).then(n.bind(null, 427));
            },
            property: function () {
              return n.e(15).then(n.bind(null, 428));
            },
            redeem: function () {
              return n.e(16).then(n.bind(null, 423));
            },
            order: function () {
              return n.e(14).then(n.bind(null, 424));
            },
            reward: function () {
              return n.e(17).then(n.bind(null, 425));
            },
            notification: function () {
              return n.e(13).then(n.bind(null, 429));
            },
            ticket: function () {
              return n.e(13).then(n.bind(null, 430));
            },
            upgrade: function () {
              return n.e(19).then(n.bind(null, 431));
            },
            "book-bxh-grid": function () {
              return Promise.all([n.e(0), n.e(6)]).then(n.bind(null, 432));
            },
            "book-grid": function () {
              return Promise.all([n.e(0), n.e(4)]).then(n.bind(null, 433));
            },
            profile: function () {
              return n.e(5).then(n.bind(null, 434));
            },
            "book-suggest": function () {
              return n.e(7).then(n.bind(null, 435));
            },
          },
          mixins: [
            y,
            window.ssrLoadingPageMinxinMap[window.ssrLoadingPage] || {},
          ],
        });
    },
    374: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(0),
        i = n.n(r),
        a = n(13),
        o = n(1),
        s = n(3),
        c = n(2);
      function l(t, e, n, r, i, a, o) {
        try {
          var s = t[a](o),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, i);
      }
      function u(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, i) {
            var a = t.apply(e, n);
            function o(t) {
              l(a, r, i, o, s, "next", t);
            }
            function s(t) {
              l(a, r, i, o, s, "throw", t);
            }
            o(void 0);
          });
        };
      }
      function d(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function m(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? d(Object(n), !0).forEach(function (e) {
                v(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function v(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var f = {
          name: "ContinueReading",
          data: function () {
            return {
              continueReading: [],
              urlLibrary: "",
            };
          },
          computed: m(
            m(
              {
                userInfo: {},
              },
              Object(s.c)(["isLoggedIn"])
            ),
            Object(s.e)({
              userInfo: function (t) {
                return t.user.userInfo;
              },
            })
          ),
          watch: {
            continueReading: function (t) {
              t.length && t.length > 0
                ? $("#continueReadingSeparator").show()
                : $("#continueReadingSeparator").hide();
            },
          },
          methods: {
            fetchReading: function () {
              var t = this;
              return u(
                i.a.mark(function e() {
                  var n, r, s;
                  return i.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t.urlLibrary = o.getPathNav("library")),
                            (n = {
                              page: 1,
                              sort_by: "user_settings",
                              kind: 1,
                              sex: 1,
                              limit: 5,
                            }),
                            (e.next = 4),
                            Object(a.f)(n)
                          );
                        case 4:
                          if (200 === (r = e.sent).data._status)
                            for (
                              t.continueReading = r.data._data, s = 0;
                              s < t.continueReading.length;
                              s++
                            )
                              document
                                .querySelector("#item-reading-" + s)
                                .remove();
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            deleteReading: function (t) {
              var e = this;
              return u(
                i.a.mark(function n() {
                  return i.a.wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.next = 2), Object(a.d)(t);
                        case 2:
                          e.fetchReading();
                        case 3:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              )();
            },
            getLinkBook: function (t) {
              return "/truyen/" + t.book_slug;
            },
            getLinkChapter: function (t) {
              return "/truyen/" + t.book_slug + "/chuong-" + t.chapter_index;
            },
            getSrcBook: function (t) {
              var e = get(t, ["book_poster", "150"]);
              return void 0 === e ? "/assets/images/no-image.png" : e;
            },
            openLogin: function () {
              window.is_safari_user_agent
                ? EventBus.$emit("login")
                : (window.location = c.getLoginUri());
            },
          },
          mounted: function () {
            this.fetchReading();
          },
        },
        p = n(5),
        h = Object(p.a)(
          f,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "div",
              t._l(t.continueReading, function (e, r) {
                return r < 5
                  ? n(
                      "li",
                      {
                        key: "reading" + r,
                        staticClass: "media align-items-center py-2 mb-1",
                      },
                      [
                        n(
                          "a",
                          {
                            staticClass: "nh-thumb nh-thumb--32 shadow mr-3",
                            attrs: {
                              href: t.getLinkBook(e),
                            },
                          },
                          [
                            n("img", {
                              directives: [
                                {
                                  name: "lazy",
                                  rawName: "v-lazy",
                                  value: t.getSrcBook(e),
                                  expression: "getSrcBook(book)",
                                },
                              ],
                              attrs: {
                                alt: "book.book_name",
                                width: "32",
                              },
                            }),
                          ]
                        ),
                        t._v(" "),
                        n(
                          "div",
                          {
                            staticClass: "media-body",
                          },
                          [
                            n(
                              "h2",
                              {
                                staticClass: "fz-body mb-1",
                              },
                              [
                                n(
                                  "a",
                                  {
                                    staticClass: "text-overflow-1-lines",
                                    attrs: {
                                      href: t.getLinkBook(e),
                                    },
                                  },
                                  [
                                    t._v(
                                      "\n                    " +
                                        t._s(e.book_name) +
                                        "\n                "
                                    ),
                                  ]
                                ),
                              ]
                            ),
                            t._v(" "),
                            e.latest_index && t.isLoggedIn
                              ? n(
                                  "div",
                                  {
                                    staticClass:
                                      "text-muted text-overflow-1-lines",
                                  },
                                  [
                                    t._v(
                                      "\n                Đã đọc: " +
                                        t._s(e.chapter_index) +
                                        "/" +
                                        t._s(e.latest_index) +
                                        "\n                "
                                    ),
                                    n(
                                      "a",
                                      {
                                        attrs: {
                                          href: "javascript:void(0)",
                                        },
                                        on: {
                                          click: function (n) {
                                            return t.deleteReading(e);
                                          },
                                        },
                                      },
                                      [t._m(1, !0)]
                                    ),
                                  ]
                                )
                              : n(
                                  "div",
                                  {
                                    staticClass:
                                      "text-muted text-overflow-1-lines",
                                  },
                                  [
                                    t._v(
                                      "\n                Đã đọc: " +
                                        t._s(e.chapter_index) +
                                        "\n                "
                                    ),
                                    n(
                                      "a",
                                      {
                                        attrs: {
                                          href: "javascript:void(0)",
                                        },
                                        on: {
                                          click: function (n) {
                                            return t.deleteReading(e);
                                          },
                                        },
                                      },
                                      [t._m(0, !0)]
                                    ),
                                  ]
                                ),
                          ]
                        ),
                        t._v(" "),
                        n(
                          "a",
                          {
                            staticClass: "float-left",
                            attrs: {
                              href: t.getLinkChapter(e),
                            },
                          },
                          [
                            n(
                              "small",
                              {
                                staticClass: "text-primary",
                              },
                              [t._v("Đọc tiếp")]
                            ),
                          ]
                        ),
                      ]
                    )
                  : t._e();
              }),
              0
            );
          },
          [
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e(
                "small",
                {
                  staticClass: "text-muted ml-1",
                },
                [
                  e("i", {
                    staticClass: "nh-icon icon-trash small",
                  }),
                ]
              );
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e(
                "small",
                {
                  staticClass: "text-muted ml-1",
                },
                [
                  e("i", {
                    staticClass: "nh-icon icon-trash small",
                  }),
                ]
              );
            },
          ],
          !1,
          null,
          "f078dda2",
          null
        );
      e.default = h.exports;
    },
    375: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(0),
        i = n.n(r),
        a = n(34),
        o = n(8),
        s = n(3);
      function c(t, e, n, r, i, a, o) {
        try {
          var s = t[a](o),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, i);
      }
      function l(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, i) {
            var a = t.apply(e, n);
            function o(t) {
              c(a, r, i, o, s, "next", t);
            }
            function s(t) {
              c(a, r, i, o, s, "throw", t);
            }
            o(void 0);
          });
        };
      }
      function u(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function d(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? u(Object(n), !0).forEach(function (e) {
                m(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function m(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var v = {
          name: "BookGift",
          data: function () {
            return {
              spinner: !1,
              active: !1,
              form: {
                book_id: null,
                chapter_id: null,
                item_id: null,
              },
              itemGiftList: [],
              userGiftList: [],
              itemId: null,
              userGiftTotal: 0,
            };
          },
          computed: d(
            d(
              {
                userInfo: {},
                showingUserSentGift: function () {
                  var t = this.userGiftList;
                  return t.length && t.length > 5 ? t.splice(0, 5) : t;
                },
              },
              Object(s.e)({
                userInfo: function (t) {
                  return t.user.userInfo;
                },
              })
            ),
            {},
            {
              numberFormatTotalBalance: function () {
                return Object(o.e)(this.userInfo.total_balance, ",");
              },
            }
          ),
          methods: {
            getItemGift: function () {
              var t = this;
              return l(
                i.a.mark(function e() {
                  var n;
                  return i.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), Object(a.a)();
                        case 2:
                          (n = e.sent),
                            (t.itemGiftList = n.data._data),
                            t.itemGiftList.length > 0 &&
                              (t.itemId = t.itemGiftList[0].id),
                            (t.userGiftTotal =
                              n.data._extra._pagination._total);
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            sendGift: function () {
              var t = this;
              return l(
                i.a.mark(function e() {
                  var n;
                  return i.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t.spinner = !0),
                              (t.form.item_id = t.itemId),
                              (e.prev = 2),
                              (e.next = 5),
                              Object(a.b)(t.form)
                            );
                          case 5:
                            (n = e.sent),
                              (t.active = !0 !== n.data._success),
                              !1 === t.active &&
                                (t.userInfo.balance = n.data._data.balance);
                          case 8:
                            return (e.prev = 8), (t.spinner = !1), e.finish(8);
                          case 11:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, , 8, 11]]
                  );
                })
              )();
            },
            parseItemPrice: function (t) {
              return Object(o.e)(t);
            },
            close: function () {
              this.active = !1;
            },
            show: function () {
              this.active = !0;
            },
            getIcon: function (t) {
              return t.icon;
            },
            choiceGift: function (t) {
              this.itemId = t.id;
            },
            activeGift: function (t) {
              return t.id === this.itemId ? "active" : "";
            },
            giftChapter: function (t, e) {
              (this.active = !0),
                (this.form.book_id = parseInt(t, 10)),
                (this.form.chapter_id = parseInt(e, 10)),
                this.getItemGift(),
                this.getUserGift(this.form.book_id, this.form.chapter_id);
            },
            getUserGift: function (t, e) {
              var n = this;
              return l(
                i.a.mark(function r() {
                  var o;
                  return i.a.wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (r.next = 2),
                            Object(a.c)(t, {
                              chapter_id: e,
                            })
                          );
                        case 2:
                          (o = r.sent),
                            (n.userGiftList = o.data._data.data),
                            (n.userGiftTotal = o.data._data.pagination._total);
                        case 5:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                })
              )();
            },
            startTransitionModal: function () {
              $("#dialog-backdrop").toggleClass("d-block");
            },
            endTransitionModal: function () {
              $("#dialog-backdrop").toggleClass("show"),
                this.$refs.modal.classList.toggle("show");
            },
          },
          mounted: function () {
            var t = this;
            EventBus.$on("gift", function (e) {
              var n = e.book_id,
                r = e.chapter_id;
              t.giftChapter(n, r);
            });
          },
        },
        f = n(5),
        p = Object(f.a)(
          v,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "transition",
              {
                on: {
                  enter: t.startTransitionModal,
                  "after-enter": t.endTransitionModal,
                  "before-leave": t.endTransitionModal,
                  "after-leave": t.startTransitionModal,
                },
              },
              [
                t.active
                  ? n(
                      "div",
                      {
                        ref: "modal",
                        staticClass: "modal fade",
                        staticStyle: {
                          display: "block",
                        },
                        attrs: {
                          id: "sendGifts",
                          tabindex: "-1",
                          role: "dialog",
                          "aria-labelledby": "sendGiftsTitle",
                        },
                      },
                      [
                        n(
                          "div",
                          {
                            staticClass:
                              "modal-dialog modal-dialog-scrollable modal-lg",
                            attrs: {
                              role: "document",
                            },
                          },
                          [
                            n(
                              "div",
                              {
                                staticClass: "modal-content",
                              },
                              [
                                n(
                                  "div",
                                  {
                                    staticClass: "modal-header",
                                  },
                                  [
                                    n(
                                      "h5",
                                      {
                                        staticClass: "modal-title",
                                        attrs: {
                                          id: "sendGiftsTitle",
                                        },
                                      },
                                      [t._v("Tặng quà")]
                                    ),
                                    t._v(" "),
                                    n(
                                      "button",
                                      {
                                        staticClass: "close",
                                        attrs: {
                                          type: "button",
                                          "data-dismiss": "modal",
                                          "aria-label": "Close",
                                        },
                                        on: {
                                          click: t.close,
                                        },
                                      },
                                      [
                                        n(
                                          "span",
                                          {
                                            attrs: {
                                              "aria-hidden": "true",
                                            },
                                          },
                                          [t._v("×")]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                n(
                                  "div",
                                  {
                                    staticClass: "modal-body",
                                  },
                                  [
                                    n(
                                      "ul",
                                      {
                                        staticClass:
                                          "list-unstyled d-flex justify-content-center list-gift mb-3",
                                      },
                                      t._l(t.itemGiftList, function (e, r) {
                                        return n(
                                          "li",
                                          {
                                            key: r,
                                            staticClass: "px-2",
                                          },
                                          [
                                            n(
                                              "a",
                                              {
                                                staticClass:
                                                  "item py-3 px-2 rounded-2 text-center",
                                                class: t.activeGift(e),
                                                attrs: {
                                                  href: "javascript:void(0);",
                                                },
                                                on: {
                                                  click: function (n) {
                                                    return t.choiceGift(e);
                                                  },
                                                },
                                              },
                                              [
                                                n("img", {
                                                  directives: [
                                                    {
                                                      name: "lazy",
                                                      rawName: "v-lazy",
                                                      value: t.getIcon(e),
                                                      expression:
                                                        "getIcon(item)",
                                                    },
                                                  ],
                                                  attrs: {
                                                    alt: "",
                                                    height: "40",
                                                  },
                                                }),
                                                t._v(" "),
                                                n(
                                                  "div",
                                                  {
                                                    staticClass: "mt-3",
                                                  },
                                                  [t._v(t._s(e.name))]
                                                ),
                                                t._v(" "),
                                                n(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "d-flex align-items-center justify-content-center mt-2",
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                  " +
                                                        t._s(
                                                          t.parseItemPrice(
                                                            e.price
                                                          )
                                                        ) +
                                                        " "
                                                    ),
                                                    n("i", {
                                                      staticClass:
                                                        "svg-icon icon-candy ml-2",
                                                    }),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ]
                                        );
                                      }),
                                      0
                                    ),
                                    t._v(" "),
                                    n(
                                      "div",
                                      {
                                        staticClass: "text-center",
                                      },
                                      [
                                        n(
                                          "div",
                                          {
                                            staticClass:
                                              "d-flex align-items-center justify-content-center mb-1 text-secondary",
                                          },
                                          [
                                            t._v(
                                              "\n              Bạn còn " +
                                                t._s(
                                                  t.numberFormatTotalBalance
                                                ) +
                                                " "
                                            ),
                                            n("i", {
                                              staticClass:
                                                "svg-icon icon-candy ml-2",
                                            }),
                                          ]
                                        ),
                                        t._v(" "),
                                        n(
                                          "a",
                                          {
                                            staticClass:
                                              "text-white d-inline-flex align-items-center btn btn-primary btn-lg btn",
                                            attrs: {
                                              href: "javascript:void(0);",
                                            },
                                            on: {
                                              click: function (e) {
                                                return t.sendGift();
                                              },
                                            },
                                          },
                                          [
                                            t.spinner
                                              ? n("span", {
                                                  staticClass:
                                                    "spinner-border text-white",
                                                  staticStyle: {
                                                    width: "30px",
                                                    height: "30px",
                                                  },
                                                  attrs: {
                                                    role: "status",
                                                    "aria-hidden": "true",
                                                  },
                                                })
                                              : n("span", [t._v("Tặng")]),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    n(
                                      "div",
                                      {
                                        staticClass:
                                          "d-flex justify-content-center",
                                      },
                                      [
                                        n(
                                          "ul",
                                          {
                                            staticClass:
                                              "list-unstyled d-flex flex-row-reverse nh-read__avatars",
                                          },
                                          [
                                            t.showingUserSentGift.length <
                                            t.userGiftTotal
                                              ? n(
                                                  "li",
                                                  {
                                                    staticClass:
                                                      "rounded-circle more",
                                                  },
                                                  [
                                                    n(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nh-avatar js-tooltip",
                                                        attrs: {
                                                          href: "javascript:void(0)",
                                                          "data-toggle":
                                                            "tooltip",
                                                          "data-placement":
                                                            "top",
                                                          title:
                                                            "Hơn " +
                                                            (t.userGiftTotal -
                                                              t
                                                                .showingUserSentGift
                                                                .length) +
                                                            " người nữa",
                                                        },
                                                      },
                                                      [
                                                        n(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "number",
                                                          },
                                                          [
                                                            t._v(
                                                              "+" +
                                                                t._s(
                                                                  t.userGiftTotal -
                                                                    t
                                                                      .showingUserSentGift
                                                                      .length
                                                                )
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                )
                                              : t._e(),
                                            t._v(" "),
                                            t._l(
                                              t.showingUserSentGift,
                                              function (t, e) {
                                                return n(
                                                  "li",
                                                  {
                                                    key: e,
                                                    staticClass:
                                                      "rounded-circle",
                                                  },
                                                  [
                                                    n(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "nh-avatar nh-avatar--30 js-tooltip",
                                                        attrs: {
                                                          href: "javascript:void(0)",
                                                          "data-toggle":
                                                            "tooltip",
                                                          "data-placement":
                                                            "top",
                                                          title:
                                                            t.user.name +
                                                            " đã tặng " +
                                                            t.gift_amount_donated +
                                                            " " +
                                                            t.gift_name,
                                                        },
                                                      },
                                                      [
                                                        n("img", {
                                                          directives: [
                                                            {
                                                              name: "lazy",
                                                              rawName: "v-lazy",
                                                              value:
                                                                t.user
                                                                  .avatar[50],
                                                              expression:
                                                                "item.user.avatar[50]",
                                                            },
                                                          ],
                                                          attrs: {
                                                            alt: "",
                                                          },
                                                        }),
                                                      ]
                                                    ),
                                                  ]
                                                );
                                              }
                                            ),
                                          ],
                                          2
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        ),
                      ]
                    )
                  : t._e(),
              ]
            );
          },
          [],
          !1,
          null,
          "49861746",
          null
        );
      e.default = p.exports;
    },
    376: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(0),
        i = n.n(r),
        a = n(55),
        o = (n(28), n(8));
      function s(t, e, n, r, i, a, o) {
        try {
          var s = t[a](o),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, i);
      }
      var c = {
          name: "report",
          data: function () {
            return {
              active: !1,
              inputReport: !1,
              spinner: !1,
              form: {
                content: "",
                book_id: null,
                issueable_type: null,
                issueable_id: null,
              },
              content: "",
              option_report: this.option_report_default,
              option_report_default: [
                {
                  id: "Nội dung khiêu dâm",
                  name: "Nội dung khiêu dâm",
                },
                {
                  id: "Nội dung liên quan tới chính trị, tôn giáo",
                  name: "Nội dung liên quan tới chính trị, tôn giáo",
                },
                {
                  id: "Nội dung đã đăng, bị trùng",
                  name: "Nội dung đã đăng, bị trùng",
                },
                {
                  id: "Vấn đề khác",
                  name: "Vấn đề khác",
                },
              ],
              option_report_review: [
                {
                  id: "Đưa link web khác",
                  name: "Đưa link web khác",
                },
                {
                  id: "Nội dung khiêu dâm",
                  name: "Nội dung khiêu dâm",
                },
                {
                  id: "Nội dung liên quan tới chính trị, tôn giáo",
                  name: "Nội dung liên quan tới chính trị, tôn giáo",
                },
                {
                  id: "Công kích cá nhân",
                  name: "Công kích cá nhân",
                },
                {
                  id: "Spam",
                  name: "Spam",
                },
                {
                  id: "Vấn đề khác",
                  name: "Vấn đề khác",
                },
              ],
              reportName: "Báo cáo truyện",
              additional: "Nội dung khiêu dâm",
            };
          },
          methods: {
            close: function () {
              this.active = !1;
            },
            show: function () {
              this.active = !0;
            },
            addIssue: function () {
              var t,
                e = this;
              return ((t = i.a.mark(function t() {
                var n;
                return i.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if ("" !== e.content) {
                            t.next = 3;
                            break;
                          }
                          return (e.inputReport = !0), t.abrupt("return");
                        case 3:
                          return (
                            (e.spinner = !0),
                            (e.form.content = Object(o.b)(
                              e.additional + " - " + e.content
                            )),
                            (t.prev = 5),
                            (t.next = 8),
                            Object(a.a)(e.form)
                          );
                        case 8:
                          (n = t.sent),
                            (e.active = !0 !== n.data._success),
                            (t.next = 14);
                          break;
                        case 12:
                          (t.prev = 12), (t.t0 = t.catch(5));
                        case 14:
                          e.spinner = !1;
                        case 15:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[5, 12]]
                );
              })),
              function () {
                var e = this,
                  n = arguments;
                return new Promise(function (r, i) {
                  var a = t.apply(e, n);
                  function o(t) {
                    s(a, r, i, o, c, "next", t);
                  }
                  function c(t) {
                    s(a, r, i, o, c, "throw", t);
                  }
                  o(void 0);
                });
              })();
            },
            reportBook: function (t) {
              (this.active = !0),
                (this.inputReport = !1),
                (this.additional = "Nội dung khiêu dâm"),
                (this.option_report = this.option_report_default),
                (this.reportName = "Báo cáo truyện"),
                (this.form.book_id = parseInt(t, 10)),
                (this.form.content = ""),
                (this.content = ""),
                (this.form.issueable_type = 4),
                (this.form.issueable_id = t);
            },
            reportChapter: function (t, e) {
              (this.active = !0),
                (this.inputReport = !1),
                (this.reportName = "Report Chapter"),
                (this.additional = "Spam"),
                (this.option_report = this.option_report_default),
                (this.form.book_id = parseInt(t, 10)),
                (this.form.content = ""),
                (this.content = ""),
                (this.form.issueable_type = 1),
                (this.form.issueable_id = parseInt(e, 10));
            },
            reportReview: function (t, e) {
              (this.active = !0),
                (this.inputReport = !1),
                (this.additional = "Spam"),
                (this.reportName = "Báo cáo đánh giá"),
                (this.option_report = this.option_report_review),
                (this.form.book_id = parseInt(t, 10)),
                (this.form.content = ""),
                (this.content = ""),
                (this.form.issueable_type = 3),
                (this.form.issueable_id = e);
            },
            reportComment: function (t, e) {
              (this.active = !0),
                (this.inputReport = !1),
                (this.additional = "Spam"),
                (this.reportName = "Báo cáo bình luận"),
                (this.option_report = this.option_report_review),
                (this.form.book_id = parseInt(t, 10)),
                (this.form.content = ""),
                (this.content = ""),
                (this.form.issueable_type = 2),
                (this.form.issueable_id = e);
            },
            toggleReport: function (t) {
              return !0 === t ? "require" : "";
            },
            startTransitionModal: function () {
              $("#dialog-backdrop").toggleClass("d-block");
            },
            endTransitionModal: function () {
              $("#dialog-backdrop").toggleClass("show"),
                this.$refs.modal.classList.toggle("show");
            },
          },
          mounted: function () {
            var t = this;
            EventBus.$on("report", function (e) {
              t.reportBook(parseInt(e.book_id, 10));
            }),
              EventBus.$on("report_chapter", function (e) {
                var n = e.book_id,
                  r = e.chapter_id;
                t.reportChapter(n, r);
              }),
              EventBus.$on("report_review", function (e) {
                var n = e.book_id,
                  r = e.review_id;
                t.reportReview(n, r);
              }),
              EventBus.$on("report_comment", function (e) {
                var n = e.book_id,
                  r = e.comment_id;
                t.reportComment(n, r);
              });
          },
        },
        l = (n(294), n(5)),
        u = Object(l.a)(
          c,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "transition",
              {
                on: {
                  enter: t.startTransitionModal,
                  "after-enter": t.endTransitionModal,
                  "before-leave": t.endTransitionModal,
                  "after-leave": t.startTransitionModal,
                },
              },
              [
                t.active
                  ? n(
                      "div",
                      {
                        ref: "modal",
                        staticClass: "modal fade",
                        staticStyle: {
                          "padding-right": "17px",
                          display: "block",
                        },
                        attrs: {
                          id: "reportBook",
                          tabindex: "-1",
                          role: "dialog",
                          "aria-labelledby": "reportBookTitle",
                          "aria-modal": "true",
                        },
                      },
                      [
                        n(
                          "div",
                          {
                            staticClass: "modal-dialog modal-dialog-scrollable",
                            attrs: {
                              role: "document",
                            },
                          },
                          [
                            n(
                              "div",
                              {
                                staticClass: "modal-content",
                              },
                              [
                                n(
                                  "div",
                                  {
                                    staticClass: "modal-header",
                                  },
                                  [
                                    n(
                                      "h5",
                                      {
                                        staticClass: "modal-title",
                                        attrs: {
                                          id: "reportBookTitle",
                                        },
                                      },
                                      [t._v(t._s(t.reportName))]
                                    ),
                                    t._v(" "),
                                    n(
                                      "button",
                                      {
                                        staticClass: "close",
                                        attrs: {
                                          type: "button",
                                          "data-dismiss": "modal",
                                          "aria-label": "Close",
                                        },
                                        on: {
                                          click: t.close,
                                        },
                                      },
                                      [
                                        n(
                                          "span",
                                          {
                                            attrs: {
                                              "aria-hidden": "true",
                                            },
                                          },
                                          [t._v("×")]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                n(
                                  "div",
                                  {
                                    staticClass: "modal-body text-secondary",
                                  },
                                  [
                                    t._l(t.option_report, function (e) {
                                      var r = e.name,
                                        i = e.id,
                                        a = e.index;
                                      return n(
                                        "div",
                                        {
                                          key: a,
                                          staticClass: "form-check my-1 ml-3",
                                        },
                                        [
                                          n("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: t.additional,
                                                expression: "additional",
                                              },
                                            ],
                                            staticClass:
                                              "form-check-input cursor-pointer",
                                            attrs: {
                                              type: "radio",
                                              name: "reportReason",
                                              id: i,
                                            },
                                            domProps: {
                                              value: i,
                                              checked: t._q(t.additional, i),
                                            },
                                            on: {
                                              change: function (e) {
                                                t.additional = i;
                                              },
                                            },
                                          }),
                                          t._v(" "),
                                          n(
                                            "label",
                                            {
                                              staticClass:
                                                "form-check-label cursor-pointer",
                                              attrs: {
                                                for: i,
                                              },
                                            },
                                            [
                                              t._v(
                                                "\n                        " +
                                                  t._s(r) +
                                                  "\n                    "
                                              ),
                                            ]
                                          ),
                                        ]
                                      );
                                    }),
                                    t._v(" "),
                                    n(
                                      "div",
                                      {
                                        staticClass: "form-check my-3",
                                      },
                                      [
                                        n("textarea", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: t.content,
                                              expression: "content",
                                            },
                                          ],
                                          staticClass:
                                            "form-control rounded-2 border-0 py-1 px-2",
                                          class: t.toggleReport(t.inputReport),
                                          attrs: {
                                            placeholder:
                                              "Thông tin muốn báo cáo (bắt buộc)",
                                          },
                                          domProps: {
                                            value: t.content,
                                          },
                                          on: {
                                            focus: function (e) {
                                              t.inputReport = !1;
                                            },
                                            input: function (e) {
                                              e.target.composing ||
                                                (t.content = e.target.value);
                                            },
                                          },
                                        }),
                                      ]
                                    ),
                                    t._v(" "),
                                    n(
                                      "div",
                                      {
                                        staticClass: "form-check my-1",
                                      },
                                      [
                                        t.spinner
                                          ? n(
                                              "a",
                                              {
                                                staticClass:
                                                  "btn btn-primary btn-md btn-block btn-shadow font-weight-semibold d-flex align-items-center justify-content-center",
                                                attrs: {
                                                  href: "javascript:void(0);",
                                                  disabled: t.spinner,
                                                },
                                              },
                                              [
                                                n("v-spinner", {
                                                  attrs: {
                                                    amount: "1",
                                                    show: "spinner",
                                                  },
                                                }),
                                              ],
                                              1
                                            )
                                          : n(
                                              "a",
                                              {
                                                staticClass:
                                                  "btn btn-primary btn-md btn-block btn-shadow font-weight-semibold d-flex align-items-center justify-content-center",
                                                attrs: {
                                                  href: "javascript:void(0);",
                                                  disabled: t.spinner,
                                                },
                                                on: {
                                                  click: t.addIssue,
                                                },
                                              },
                                              [
                                                t._v(
                                                  "\n                        Báo cáo\n                    "
                                                ),
                                              ]
                                            ),
                                      ]
                                    ),
                                    t._v(" "),
                                    n(
                                      "p",
                                      {
                                        staticClass:
                                          "text-center text-muted small",
                                      },
                                      [
                                        t._v(
                                          "Các vấn đề vi phạm bản quyền xin vui lòng gửi thư đến contact@truyen.onl"
                                        ),
                                      ]
                                    ),
                                  ],
                                  2
                                ),
                              ]
                            ),
                          ]
                        ),
                      ]
                    )
                  : t._e(),
              ]
            );
          },
          [],
          !1,
          null,
          "4cce9ca6",
          null
        );
      e.default = u.exports;
    },
    377: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(0),
        i = n.n(r),
        a = n(3),
        o = n(2);
      function s(t, e, n, r, i, a, o) {
        try {
          var s = t[a](o),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, i);
      }
      function c(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function l(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? c(Object(n), !0).forEach(function (e) {
                u(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function u(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var d = {
          name: "Bookmark",
          props: ["book_id"],
          data: function () {
            return {
              spinner: !1,
            };
          },
          computed: l(
            l(
              {},
              Object(a.e)("reading", {
                isBookmark: "isBookBookmarked",
              })
            ),
            Object(a.c)(["isLoggedIn"])
          ),
          methods: l(
            l(
              {},
              Object(a.b)("reading", {
                checkBookmarkAction: "checkBookmark",
                changeBookmarkAction: "changeBookmark",
              })
            ),
            {},
            {
              checkBookmark: function () {
                this.checkBookmarkAction(this.book_id);
              },
              updateBookMarkCount: function () {
                var t = parseInt($("#bookmarkedValue").html()),
                  e = 1;
                this.isBookmark && (e *= -1),
                  -1 == e && t < 1 && (e = 0),
                  $("#bookmarkedValue").html("" + (t + e));
              },
              changeBookmark: function () {
                var t,
                  e = this;
                return ((t = i.a.mark(function t() {
                  return i.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (e.isLoggedIn) {
                            t.next = 7;
                            break;
                          }
                          if (!window.is_safari_user_agent) {
                            t.next = 6;
                            break;
                          }
                          return EventBus.$emit("login"), t.abrupt("return");
                        case 6:
                          window.location = o.getLoginUri();
                        case 7:
                          return (
                            (e.spinner = !0),
                            e.updateBookMarkCount(),
                            (t.next = 11),
                            e.changeBookmarkAction(e.book_id)
                          );
                        case 11:
                          e.spinner = !1;
                        case 12:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })),
                function () {
                  var e = this,
                    n = arguments;
                  return new Promise(function (r, i) {
                    var a = t.apply(e, n);
                    function o(t) {
                      s(a, r, i, o, c, "next", t);
                    }
                    function c(t) {
                      s(a, r, i, o, c, "throw", t);
                    }
                    o(void 0);
                  });
                })();
              },
            }
          ),
          mounted: function () {},
        },
        m = n(5),
        v = Object(m.a)(
          d,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("span", [
              t.spinner
                ? n(
                    "a",
                    {
                      staticClass:
                        "btn btn-outline-secondary btn-md btn-block font-weight-semibold d-flex align-items-center justify-content-center",
                      attrs: {
                        href: "javascript:void(0);",
                        disabled: t.spinner,
                      },
                    },
                    [
                      n("v-spinner", {
                        attrs: {
                          show: "spinner",
                          amount: "1",
                        },
                      }),
                    ],
                    1
                  )
                : t._e(),
              t._v(" "),
              t.spinner || !1 !== t.isBookmark
                ? t._e()
                : n(
                    "a",
                    {
                      staticClass:
                        "btn btn-outline-secondary btn-md btn-block font-weight-semibold d-flex align-items-center justify-content-center",
                      attrs: {
                        href: "javascript:void(0);",
                      },
                      on: {
                        click: t.changeBookmark,
                      },
                    },
                    [
                      n("i", {
                        staticClass: "nh-icon icon-save mr-2",
                      }),
                      t._v(" Đánh dấu\n    "),
                    ]
                  ),
              t._v(" "),
              t.spinner || !0 !== t.isBookmark
                ? t._e()
                : n(
                    "a",
                    {
                      staticClass:
                        "btn btn-outline-secondary btn-md btn-block font-weight-semibold d-flex align-items-center justify-content-center",
                      attrs: {
                        href: "javascript:void(0);",
                      },
                      on: {
                        click: t.changeBookmark,
                      },
                    },
                    [
                      n("i", {
                        staticClass: "nh-icon icon-check mr-2",
                      }),
                      t._v(" Đã lưu\n    "),
                    ]
                  ),
            ]);
          },
          [],
          !1,
          null,
          "20fe2610",
          null
        );
      e.default = v.exports;
    },
    378: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(0),
        i = n.n(r),
        a = n(3),
        o = n(2);
      function s(t, e, n, r, i, a, o) {
        try {
          var s = t[a](o),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, i);
      }
      function c(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function l(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? c(Object(n), !0).forEach(function (e) {
                u(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function u(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var d = {
          name: "BookVote",
          props: ["book_id"],
          data: function () {
            return {
              spinner: !1,
            };
          },
          computed: l(
            l(
              {},
              Object(a.e)("reading", {
                isVote: "isVote",
              })
            ),
            Object(a.c)(["isLoggedIn"])
          ),
          methods: l(
            l(
              {},
              Object(a.b)("reading", {
                changeVoteAction: "changeVote",
              })
            ),
            {},
            {
              changeVote: function () {
                var t,
                  e = this;
                return ((t = i.a.mark(function t() {
                  return i.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (e.isLoggedIn) {
                              t.next = 7;
                              break;
                            }
                            if (!window.is_safari_user_agent) {
                              t.next = 6;
                              break;
                            }
                            return EventBus.$emit("login"), t.abrupt("return");
                          case 6:
                            window.location = o.getLoginUri();
                          case 7:
                            return (
                              (t.prev = 7),
                              (e.spinner = !0),
                              (t.next = 11),
                              e.changeVoteAction(e.book_id)
                            );
                          case 11:
                            return (
                              (t.prev = 11), (e.spinner = !1), t.finish(11)
                            );
                          case 14:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[7, , 11, 14]]
                  );
                })),
                function () {
                  var e = this,
                    n = arguments;
                  return new Promise(function (r, i) {
                    var a = t.apply(e, n);
                    function o(t) {
                      s(a, r, i, o, c, "next", t);
                    }
                    function c(t) {
                      s(a, r, i, o, c, "throw", t);
                    }
                    o(void 0);
                  });
                })();
              },
            }
          ),
          mounted: function () {},
        },
        m = n(5),
        v = Object(m.a)(
          d,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("div", [
              t.spinner
                ? n(
                    "a",
                    {
                      staticClass:
                        "btn btn-outline-warning btn-md btn-block bg-yellow-white text-primary font-weight-semibold d-flex align-items-center justify-content-center",
                      attrs: {
                        disabled: t.spinner,
                        href: "javascript:void(0)",
                      },
                    },
                    [
                      n("v-spinner", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: t.spinner,
                            expression: "spinner",
                          },
                        ],
                        attrs: {
                          amount: "1",
                        },
                      }),
                    ],
                    1
                  )
                : t._e(),
              t._v(" "),
              t.spinner || !1 !== t.isVote
                ? t._e()
                : n(
                    "a",
                    {
                      staticClass:
                        "btn btn-outline-warning btn-md btn-block bg-yellow-white text-primary font-weight-semibold d-flex align-items-center justify-content-center",
                      attrs: {
                        href: "javascript:void(0);",
                        disabled: t.spinner,
                      },
                      on: {
                        click: t.changeVote,
                      },
                    },
                    [
                      t.spinner
                        ? n("span", {
                            staticClass: "spinner-grow spinner-grow-sm",
                            attrs: {
                              role: "status",
                              "aria-hidden": "true",
                            },
                          })
                        : t._e(),
                      t._v(" "),
                      n("i", {
                        staticClass: "svg-icon icon-flower mr-2",
                      }),
                      t._v(" Đề cử\n    "),
                    ]
                  ),
              t._v(" "),
              t.spinner || !0 !== t.isVote
                ? t._e()
                : n(
                    "a",
                    {
                      staticClass:
                        "btn btn-outline-warning btn-md btn-block bg-yellow-white text-primary font-weight-semibold d-flex align-items-center justify-content-center",
                      attrs: {
                        href: "javascript:void(0);",
                        disabled: t.spinner,
                      },
                      on: {
                        click: t.changeVote,
                      },
                    },
                    [
                      t.spinner
                        ? n("span", {
                            staticClass: "spinner-grow spinner-grow-sm",
                            attrs: {
                              role: "status",
                              "aria-hidden": "true",
                            },
                          })
                        : t._e(),
                      t._v(" "),
                      n("i", {
                        staticClass: "nh-icon icon-check mr-2",
                      }),
                      t._v(" Đã đề cử\n    "),
                    ]
                  ),
            ]);
          },
          [],
          !1,
          null,
          "5494eeb4",
          null
        );
      e.default = v.exports;
    },
    379: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(3),
        i = (n(2), n(6));
      function a(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function o(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? a(Object(n), !0).forEach(function (e) {
                s(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function s(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var c = {
          name: "ChapterList",
          props: ["book_id", "book_slug"],
          data: function () {
            return {};
          },
          computed: o(
            o(
              o(
                {},
                Object(r.e)("chapters", {
                  chapterList: "chapters",
                  isSortChapterDesc: "isSortChapterDesc",
                  spinner: "spinner",
                })
              ),
              Object(r.e)({
                userInfo: function (t) {
                  return t.user.userInfo;
                },
              })
            ),
            Object(r.c)("chapters", {
              latestChapter: "latestChapter",
            })
          ),
          methods: o(
            o({}, Object(r.d)("chapters", ["changeSortOrder"])),
            {},
            {
              getUrlChapter: function (t) {
                return this.book_slug + "/chuong-" + t.index;
              },
              timeAgoPublishedAt: function (t) {
                return i.timeAgo(t.published_at);
              },
            }
          ),
          mounted: function () {},
        },
        l = (n(297), n(5)),
        u = Object(l.a)(
          c,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("div", [
              n(
                "div",
                {
                  staticClass: "d-flex align-items-center mb-3",
                },
                [
                  n("h4", [t._v("Danh sách chương")]),
                  t._v(" "),
                  n(
                    "button",
                    {
                      staticClass: "btn btn-white ml-auto px-3",
                      on: {
                        click: t.changeSortOrder,
                      },
                    },
                    [
                      t.isSortChapterDesc
                        ? n("i", {
                            staticClass:
                              "nh-icon icon-sort-desc h4 m-0 float-left",
                          })
                        : n("i", {
                            staticClass:
                              "nh-icon icon-sort-asc h4 m-0 float-left",
                          }),
                    ]
                  ),
                ]
              ),
              t._v(" "),
              t.spinner
                ? n(
                    "div",
                    {
                      staticClass: "nh-section mb-4",
                    },
                    [
                      n("v-spinner", {
                        attrs: {
                          show: "spinner",
                        },
                      }),
                    ],
                    1
                  )
                : n(
                    "div",
                    {
                      staticClass: "nh-section mb-4",
                    },
                    [
                      n(
                        "div",
                        {
                          staticClass: "row mt-2",
                        },
                        t._l(t.chapterList, function (e, r) {
                          return n(
                            "div",
                            {
                              key: e.id,
                              staticClass: "col-4 border-bottom-dashed",
                            },
                            [
                              e.unlock_price > 0
                                ? n(
                                    "a",
                                    {
                                      staticClass: "media py-2 mb-1",
                                      attrs: {
                                        href: t.getUrlChapter(e),
                                      },
                                    },
                                    [
                                      n(
                                        "div",
                                        {
                                          staticClass: "media-body",
                                          attrs: {
                                            href: t.getUrlChapter(e),
                                          },
                                        },
                                        [
                                          n(
                                            "div",
                                            {
                                              staticClass:
                                                "text-overflow-1-lines",
                                            },
                                            [
                                              t._v(
                                                "\n                            " +
                                                  t._s(e.name) +
                                                  " "
                                              ),
                                              n(
                                                "small",
                                                {
                                                  staticClass: "text-muted",
                                                },
                                                [
                                                  t._v(
                                                    "(" +
                                                      t._s(
                                                        t.timeAgoPublishedAt(e)
                                                      ) +
                                                      ")"
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                      t._v(" "),
                                      n("i", {
                                        staticClass:
                                          "nh-icon icon-lock text-tertiary h6 m-0",
                                      }),
                                    ]
                                  )
                                : n(
                                    "a",
                                    {
                                      staticClass: "media py-2 mb-1",
                                      attrs: {
                                        href: t.getUrlChapter(e),
                                      },
                                    },
                                    [
                                      n(
                                        "div",
                                        {
                                          staticClass: "media-body",
                                          attrs: {
                                            href: t.getUrlChapter(e),
                                          },
                                        },
                                        [
                                          n(
                                            "div",
                                            {
                                              staticClass:
                                                "text-overflow-1-lines",
                                            },
                                            [
                                              t._v(
                                                "\n                            " +
                                                  t._s(e.name) +
                                                  " "
                                              ),
                                              n(
                                                "small",
                                                {
                                                  staticClass: "text-muted",
                                                },
                                                [
                                                  t._v(
                                                    "(" +
                                                      t._s(
                                                        t.timeAgoPublishedAt(e)
                                                      ) +
                                                      ")"
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                            ]
                          );
                        }),
                        0
                      ),
                    ]
                  ),
            ]);
          },
          [],
          !1,
          null,
          "abaf3886",
          null
        );
      e.default = u.exports;
    },
    380: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(0),
        i = n.n(r),
        a = n(19),
        o = n(7),
        s = n(3),
        c = n(26),
        l = n.n(c),
        u = n(6),
        d = n(1),
        m = n(8),
        v = n(2),
        f = n(20),
        p = n.n(f);
      function h(t, e, n, r, i, a, o) {
        try {
          var s = t[a](o),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, i);
      }
      function W(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, i) {
            var a = t.apply(e, n);
            function o(t) {
              h(a, r, i, o, s, "next", t);
            }
            function s(t) {
              h(a, r, i, o, s, "throw", t);
            }
            o(void 0);
          });
        };
      }
      function g(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function b(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? g(Object(n), !0).forEach(function (e) {
                k(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : g(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function k(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var C = {
          name: "Reviews",
          props: ["book_id", "book_review"],
          components: {
            paginate: l.a,
          },
          data: function () {
            return {
              reviewSearch: {
                reviewSortBy: "like_count",
                page: 1,
                lastPage: 1,
              },
              reviewPost: {
                story_score: 0,
                character_score: 0,
                world_score: 0,
                content: "",
                spoiler: !1,
              },
              reviewList: [],
              spinnerReviewList: !1,
              spinnerReply: !1,
              spinnerReview: !1,
              reviewCount: 0,
              book_reviews_score: {
                story_score: 5,
                character_score: 5,
                world_score: 5,
                average_score: 4,
              },
              maximum_value: 5,
              translate_score: 0,
              reviewSortOrder: "like_count",
              defaultAvatarProfile: p.a,
            };
          },
          computed: b(
            b(
              b({}, Object(s.c)(["isLoggedIn", "userId", "userAvatar"])),
              Object(s.e)({
                userInfo: function (t) {
                  return t.user.userInfo;
                },
              })
            ),
            {},
            {
              hasAvatar: function () {
                return !!this.userAvatar;
              },
            }
          ),
          methods: {
            fetchReview: function () {
              var t = arguments,
                e = this;
              return W(
                i.a.mark(function n() {
                  var r, o, s, c, l, d, m, v, f;
                  return i.a.wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (r = t.length > 0 && void 0 !== t[0] && t[0]),
                            (e.spinnerReviewList = !0),
                            (o = {
                              book_id: e.book_id,
                              sort_by: e.reviewSearch.reviewSortBy,
                              page: e.reviewSearch.page,
                              order_by: "desc",
                            }),
                            (n.next = 5),
                            Object(a.e)(o, r)
                          );
                        case 5:
                          for (
                            s = n.sent,
                              e.spinnerReviewList = !1,
                              c = s.data._data,
                              l = 0;
                            l < c.length;
                            l++
                          )
                            (c[l].liked = parseInt(c[l].liked, 10)),
                              (c[l].date = u
                                .extractDateTimeDmy(c[l].created_at)
                                .fromNow()),
                              (c[l].replyReview = !1),
                              (c[l].replyReviewContent = ""),
                              (c[l].viewReviewReplies = !1),
                              (c[l].content = c[l].content.replace(
                                new RegExp("\n", "g"),
                                "<br />"
                              )),
                              (c[l].replies = []);
                          return (
                            (e.reviewList = c),
                            (e.reviewSearch.page = get(s, [
                              "data",
                              "_extra",
                              "_pagination",
                              "_current",
                            ])),
                            (e.reviewSearch.lastPage = get(s, [
                              "data",
                              "_extra",
                              "_pagination",
                              "_last",
                            ])),
                            (e.reviewCount = get(s, [
                              "data",
                              "_extra",
                              "_pagination",
                              "_total",
                            ])),
                            (d = get(s, [
                              "data",
                              "_extra",
                              "book_reviews_score",
                            ])),
                            (e.book_reviews_score.average_score =
                              e.book_review),
                            (e.book_reviews_score.story_score = d.story_score),
                            (e.book_reviews_score.character_score =
                              d.character_score),
                            (e.book_reviews_score.world_score = d.world_score),
                            (n.next = 20),
                            Object(a.g)(e.book_id, r)
                          );
                        case 20:
                          (m = n.sent),
                            (v = get(m, ["data", "_data", "rate_average"])),
                            (e.translate_score = void 0 === v ? 0 : v),
                            (f = {
                              reviewCount: e.reviewCount,
                              book_reviews_score: e.book_reviews_score,
                            }),
                            EventBus.$emit("updateReviewCount", f);
                        case 25:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              )();
            },
            handleNavigateReview: function (t) {
              var e = this;
              return W(
                i.a.mark(function n() {
                  return i.a.wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (e.reviewSearch.page = t),
                            (n.next = 3),
                            e.fetchReview(!0)
                          );
                        case 3:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              )();
            },
            addReviewWithSpoiler: function (t) {
              var e = this;
              return W(
                i.a.mark(function n() {
                  var r;
                  return i.a.wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (e.spinnerReview = !0),
                              (r = {
                                story_score: parseFloat(
                                  e.reviewPost.story_score
                                ),
                                character_score: parseFloat(
                                  e.reviewPost.character_score
                                ),
                                world_score: parseFloat(
                                  e.reviewPost.world_score
                                ),
                                content: Object(m.b)(e.reviewPost.content),
                                book_id: e.book_id,
                                spoiler: t,
                              }),
                              (n.prev = 2),
                              (n.next = 5),
                              Object(a.a)(r)
                            );
                          case 5:
                            return (
                              (e.reviewPost.content = ""),
                              (n.next = 8),
                              e.fetchReview()
                            );
                          case 8:
                            n.next = 12;
                            break;
                          case 10:
                            (n.prev = 10), (n.t0 = n.catch(2));
                          case 12:
                            e.spinnerReview = !1;
                          case 13:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [[2, 10]]
                  );
                })
              )();
            },
            addReview: function () {
              var t = this;
              return W(
                i.a.mark(function e() {
                  var n;
                  return i.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (t.isLoggedIn) {
                            e.next = 7;
                            break;
                          }
                          if (!window.is_safari_user_agent) {
                            e.next = 6;
                            break;
                          }
                          return EventBus.$emit("login"), e.abrupt("return");
                        case 6:
                          window.location = v.getLoginUri();
                        case 7:
                          (t.reviewPost = b(
                            b({}, t.reviewPost),
                            {},
                            {
                              story_score: parseFloat(t.reviewPost.story_score),
                              character_score: parseFloat(
                                t.reviewPost.character_score
                              ),
                              world_score: parseFloat(t.reviewPost.world_score),
                            }
                          )),
                            (n =
                              t.reviewPost.story_score +
                              t.reviewPost.character_score +
                              t.reviewPost.world_score),
                            t.$refs.ReviewSpoiler.pop().then(function (e) {
                              var r;
                              (!1 === e.maximum && n >= 15) ||
                                ((r = !0 === e.spoiler ? 1 : 0),
                                t.addReviewWithSpoiler(r));
                            });
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            reportReview: function (t) {
              if (!this.isLoggedIn) {
                if (window.is_safari_user_agent)
                  return void EventBus.$emit("login");
                window.location = v.getLoginUri();
              }
              var e = {
                book_id: this.book_id,
                review_id: t,
              };
              EventBus.$emit("report_review", e);
            },
            parseScore: function (t) {
              return Object(m.f)(t);
            },
            percentScore: function (t) {
              return {
                width: Object(m.c)(t) + "%",
              };
            },
            getAvatar: function (t) {
              return get(t, ["avatar", 100]);
            },
            getProfileUser: function (t) {
              var e = d.urlPublicProfile + "/" + t;
              window.location.href = e;
            },
            likeReview: function (t) {
              var e = this;
              return W(
                i.a.mark(function n() {
                  return i.a.wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            if (e.isLoggedIn) {
                              n.next = 7;
                              break;
                            }
                            if (!window.is_safari_user_agent) {
                              n.next = 6;
                              break;
                            }
                            return EventBus.$emit("login"), n.abrupt("return");
                          case 6:
                            window.location = v.getLoginUri();
                          case 7:
                            if (!t.liked && !t.isLikeOrDislikeInprogress) {
                              n.next = 9;
                              break;
                            }
                            return n.abrupt("return");
                          case 9:
                            return (
                              (t.isLikeOrDislikeInprogress = !0),
                              (n.prev = 10),
                              (n.next = 13),
                              Object(a.d)(t.id)
                            );
                          case 13:
                            (t.liked = 1),
                              t.like_count > 0
                                ? (t.like_count += 1)
                                : (t.like_count = 1);
                          case 15:
                            return (
                              (n.prev = 15),
                              (t.isLikeOrDislikeInprogress = !1),
                              n.finish(15)
                            );
                          case 18:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [[10, , 15, 18]]
                  );
                })
              )();
            },
            dislikeReview: function (t) {
              var e = this;
              return W(
                i.a.mark(function n() {
                  return i.a.wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            if (e.isLoggedIn) {
                              n.next = 7;
                              break;
                            }
                            if (!window.is_safari_user_agent) {
                              n.next = 6;
                              break;
                            }
                            return EventBus.$emit("login"), n.abrupt("return");
                          case 6:
                            window.location = v.getLoginUri();
                          case 7:
                            if (t.liked && !t.isLikeOrDislikeInprogress) {
                              n.next = 9;
                              break;
                            }
                            return n.abrupt("return");
                          case 9:
                            return (
                              (t.isLikeOrDislikeInprogress = !0),
                              (n.prev = 10),
                              (n.next = 13),
                              Object(a.b)(t.id)
                            );
                          case 13:
                            (t.liked = 0),
                              t.like_count > 0
                                ? (t.like_count -= 1)
                                : (t.like_count = 0);
                          case 15:
                            return (
                              (n.prev = 15),
                              (t.isLikeOrDislikeInprogress = !1),
                              n.finish(15)
                            );
                          case 18:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [[10, , 15, 18]]
                  );
                })
              )();
            },
            removeReview: function (t) {
              var e = this;
              return W(
                i.a.mark(function n() {
                  return i.a.wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.next = 2), Object(a.f)(t);
                        case 2:
                          return (n.next = 4), e.fetchReview();
                        case 4:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              )();
            },
            replyReview: function (t, e) {
              var n = this;
              if (!this.isLoggedIn) {
                if (window.is_safari_user_agent)
                  return void EventBus.$emit("login");
                window.location = v.getLoginUri();
              }
              t.comment_count > 0 &&
                !1 === t.replyReview &&
                this.viewReviewReplies(t),
                (t.replyReview = !0),
                this.$nextTick(function () {
                  n.$refs.reviewReply[e].focus();
                });
            },
            activeButton: function (t) {
              return !0 === t ? "active" : "";
            },
            disableAction: function (t) {
              return t ? "disabled" : "";
            },
            postReplyReviewWithSpoiler: function (t, e) {
              var n = this;
              return W(
                i.a.mark(function r() {
                  var a, s, c;
                  return i.a.wrap(
                    function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            return (
                              (n.spinnerReply = !0),
                              (r.prev = 1),
                              (a = {
                                commentable_id: t.id,
                                commentable_type: 3,
                                content: Object(m.b)(t.replyReviewContent),
                                book_id: n.book_id,
                                spoiler: e,
                              }),
                              (r.next = 5),
                              Object(o.a)(a)
                            );
                          case 5:
                            200 === (s = r.sent).data._status &&
                              ((c = {
                                date: u
                                  .extractDateTimeDmy(u.getDateTimeNow())
                                  .fromNow(),
                                liked: 0,
                                like_count: 0,
                                isLikeOrDislikeInprogress: !1,
                                content: t.replyReviewContent,
                                id: s.data._data.comment_id,
                                user: n.userInfo,
                              }),
                              t.replies.push(c),
                              (t.replyReviewContent = ""),
                              (t.replyReview = !1),
                              t.comment_count > 0
                                ? (t.comment_count += 1)
                                : (t.comment_count = 1)),
                              (r.next = 11);
                            break;
                          case 9:
                            (r.prev = 9), (r.t0 = r.catch(1));
                          case 11:
                            n.spinnerReply = !1;
                          case 12:
                          case "end":
                            return r.stop();
                        }
                    },
                    r,
                    null,
                    [[1, 9]]
                  );
                })
              )();
            },
            postReplyReview: function (t) {
              var e = this;
              return W(
                i.a.mark(function n() {
                  var r, a, s;
                  return i.a.wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (e.spinnerReply = !0),
                              (n.prev = 1),
                              (r = {
                                commentable_id: t.id,
                                commentable_type: 3,
                                content: Object(m.b)(t.replyReviewContent),
                                book_id: e.book_id,
                              }),
                              (n.next = 5),
                              Object(o.a)(r)
                            );
                          case 5:
                            200 === (a = n.sent).data._status &&
                              ((s = {
                                date: u
                                  .extractDateTimeDmy(u.getDateTimeNow())
                                  .fromNow(),
                                liked: 0,
                                like_count: 0,
                                isLikeOrDislikeInprogress: !1,
                                content: t.replyReviewContent,
                                id: a.data._data.comment_id,
                                user: e.userInfo,
                              }),
                              t.replies.push(s),
                              (t.replyReviewContent = ""),
                              (t.replyReview = !0),
                              t.comment_count > 0
                                ? (t.comment_count += 1)
                                : (t.comment_count = 1)),
                              (n.next = 11);
                            break;
                          case 9:
                            (n.prev = 9), (n.t0 = n.catch(1));
                          case 11:
                            e.spinnerReply = !1;
                          case 12:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [[1, 9]]
                  );
                })
              )();
            },
            viewReviewReplies: function (t) {
              var e = this;
              return W(
                i.a.mark(function n() {
                  return i.a.wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (t.replies = []),
                            (t.replyReview = !0),
                            (n.next = 4),
                            e.getReviewComments(t)
                          );
                        case 4:
                          t.viewReviewReplies = !0;
                        case 5:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              )();
            },
            hideReviewReplies: function (t) {
              (t.viewReviewReplies = !1), (t.replies = []);
            },
            getReviewComments: function (t) {
              var e = arguments,
                n = this;
              return W(
                i.a.mark(function r() {
                  var a, s, c, l, d;
                  return i.a.wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (a = e.length > 1 && void 0 !== e[1] ? e[1] : 1),
                            (s = e.length > 2 && void 0 !== e[2] && e[2]),
                            (t.repliesIsLoading = !0),
                            (r.next = 5),
                            Object(o.e)({
                              book_id: n.book_id,
                              commentable_id: t.id,
                              commentable_type: 3,
                              sort_by: "id",
                              order_by: "asc",
                              page: a,
                            })
                          );
                        case 5:
                          (c = r.sent),
                            (l = get(c, ["data", "_extra", "_pagination"])),
                            (t.repliesCurrentPage = get(l, ["_current"])),
                            (t.repliesLastPage = get(l, ["_last"])),
                            (d = get(c, ["data", "_data"], []).map(function (
                              t
                            ) {
                              return (
                                (t.liked = parseInt(t.liked, 10)),
                                (t.content = t.content.replace(
                                  new RegExp("\n", "g"),
                                  "<br />"
                                )),
                                (t.date = u
                                  .extractDateTimeDmy(t.created_at)
                                  .fromNow()),
                                t
                              );
                            })),
                            (t.replies = s ? d : t.replies.concat(d)),
                            (t.repliesIsLoading = !1);
                        case 12:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                })
              )();
            },
            loginRequire: function () {
              var t = this;
              return W(
                i.a.mark(function e() {
                  return i.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (t.isLoggedIn) {
                            e.next = 7;
                            break;
                          }
                          if (!window.is_safari_user_agent) {
                            e.next = 6;
                            break;
                          }
                          return EventBus.$emit("login"), e.abrupt("return");
                        case 6:
                          window.location = v.getLoginUri();
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            likeComment: function (t) {
              var e = this;
              return W(
                i.a.mark(function n() {
                  return i.a.wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            if (e.isLoggedIn) {
                              n.next = 7;
                              break;
                            }
                            if (!window.is_safari_user_agent) {
                              n.next = 6;
                              break;
                            }
                            return EventBus.$emit("login"), n.abrupt("return");
                          case 6:
                            window.location = v.getLoginUri();
                          case 7:
                            if (!t.liked && !t.isLikeOrDislikeInprogress) {
                              n.next = 9;
                              break;
                            }
                            return n.abrupt("return");
                          case 9:
                            return (
                              (t.isLikeOrDislikeInprogress = !0),
                              (n.prev = 10),
                              (n.next = 13),
                              Object(o.d)(t.id)
                            );
                          case 13:
                            (t.liked = !0),
                              t.like_count > 0
                                ? (t.like_count += 1)
                                : (t.like_count = 1);
                          case 15:
                            return (
                              (n.prev = 15),
                              (t.isLikeOrDislikeInprogress = !1),
                              n.finish(15)
                            );
                          case 18:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [[10, , 15, 18]]
                  );
                })
              )();
            },
            dislikeComment: function (t) {
              var e = this;
              return W(
                i.a.mark(function n() {
                  return i.a.wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            if (e.isLoggedIn) {
                              n.next = 7;
                              break;
                            }
                            if (!window.is_safari_user_agent) {
                              n.next = 6;
                              break;
                            }
                            return EventBus.$emit("login"), n.abrupt("return");
                          case 6:
                            window.location = v.getLoginUri();
                          case 7:
                            if (t.liked && !t.isLikeOrDislikeInprogress) {
                              n.next = 9;
                              break;
                            }
                            return n.abrupt("return");
                          case 9:
                            return (
                              (t.isLikeOrDislikeInprogress = !0),
                              (n.prev = 10),
                              (n.next = 13),
                              Object(o.c)(t.id)
                            );
                          case 13:
                            (t.liked = !1),
                              t.like_count > 0
                                ? (t.like_count -= 1)
                                : (t.like_count = 0);
                          case 15:
                            return (
                              (n.prev = 15),
                              (t.isLikeOrDislikeInprogress = !1),
                              n.finish(15)
                            );
                          case 18:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [[10, , 15, 18]]
                  );
                })
              )();
            },
            reportComment: function (t) {
              if (!this.isLoggedIn) {
                if (window.is_safari_user_agent)
                  return void EventBus.$emit("login");
                window.location = v.getLoginUri();
              }
              var e = {
                book_id: this.book_id,
                comment_id: t,
              };
              EventBus.$emit("report_comment", e);
            },
            removeComment: function (t, e) {
              var n = this;
              return W(
                i.a.mark(function r() {
                  return i.a.wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (r.next = 2), Object(o.b)(e.id);
                        case 2:
                          return (r.next = 4), n.getReviewComments(t, 1, !0);
                        case 4:
                          t.comment_count > 0
                            ? (t.comment_count -= 1)
                            : (t.comment_count = 0);
                        case 5:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                })
              )();
            },
            loadMoreReplies: function (t) {
              var e = this;
              return W(
                i.a.mark(function n() {
                  return i.a.wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.next = 2),
                            e.getReviewComments(t, t.repliesCurrentPage + 1)
                          );
                        case 2:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              )();
            },
            changeReviewSortOrder: function () {
              var t = this;
              return W(
                i.a.mark(function e() {
                  return i.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t.reviewSearch.reviewSortBy = t.reviewSortOrder),
                            (t.reviewSearch.page = 1),
                            (e.next = 4),
                            t.fetchReview()
                          );
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            showSpoiler: function (t) {
              t.spoiler = 0;
            },
          },
          mounted: function () {
            var t = this;
            EventBus.$on("reviewBook", function () {
              t.fetchReview();
            });
          },
        },
        w = (n(299), n(5)),
        _ = Object(w.a)(
          C,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "div",
              {
                staticClass: "row",
                attrs: {
                  id: "reviews_book",
                },
              },
              [
                n(
                  "div",
                  {
                    staticClass: "col-8",
                  },
                  [
                    n(
                      "div",
                      {
                        staticClass:
                          "bg-yellow-white review-form rounded-2 mb-3",
                      },
                      [
                        n(
                          "div",
                          {
                            staticClass: "p-3 text-primary",
                          },
                          [
                            n(
                              "div",
                              {
                                staticClass: "row align-items-center py-2",
                              },
                              [
                                n(
                                  "div",
                                  {
                                    staticClass: "col-3 font-weight-semibold",
                                  },
                                  [t._v("Tính cách nhân vật")]
                                ),
                                t._v(" "),
                                n(
                                  "div",
                                  {
                                    staticClass: "col-8",
                                  },
                                  [
                                    n("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: t.reviewPost.character_score,
                                          expression:
                                            "reviewPost.character_score",
                                        },
                                      ],
                                      ref: "character_score",
                                      staticClass: "js-range-slider",
                                      attrs: {
                                        type: "range",
                                        id: "js-rangeslider-0",
                                        min: "0",
                                        max: "5",
                                        step: "0.5",
                                      },
                                      domProps: {
                                        value: t.reviewPost.character_score,
                                      },
                                      on: {
                                        __r: function (e) {
                                          return t.$set(
                                            t.reviewPost,
                                            "character_score",
                                            e.target.value
                                          );
                                        },
                                      },
                                    }),
                                  ]
                                ),
                                t._v(" "),
                                n(
                                  "div",
                                  {
                                    staticClass: "col-1 h5 mb-0 text-center",
                                    attrs: {
                                      id: "js-value-1",
                                    },
                                  },
                                  [
                                    t._v(
                                      "\n                        " +
                                        t._s(t.reviewPost.character_score) +
                                        "\n                    "
                                    ),
                                  ]
                                ),
                              ]
                            ),
                            t._v(" "),
                            n(
                              "div",
                              {
                                staticClass: "row align-items-center py-2",
                              },
                              [
                                n(
                                  "div",
                                  {
                                    staticClass: "col-3 font-weight-semibold",
                                  },
                                  [t._v("Nội dung cốt truyện")]
                                ),
                                t._v(" "),
                                n(
                                  "div",
                                  {
                                    staticClass: "col-8",
                                  },
                                  [
                                    n("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: t.reviewPost.story_score,
                                          expression: "reviewPost.story_score",
                                        },
                                      ],
                                      ref: "story_score",
                                      staticClass: "js-range-slider",
                                      attrs: {
                                        type: "range",
                                        id: "js-rangeslider-1",
                                        min: "0",
                                        max: "5",
                                        step: "0.5",
                                      },
                                      domProps: {
                                        value: t.reviewPost.story_score,
                                      },
                                      on: {
                                        __r: function (e) {
                                          return t.$set(
                                            t.reviewPost,
                                            "story_score",
                                            e.target.value
                                          );
                                        },
                                      },
                                    }),
                                  ]
                                ),
                                t._v(" "),
                                n(
                                  "div",
                                  {
                                    staticClass: "col-1 h5 mb-0 text-center",
                                    attrs: {
                                      id: "js-value-2",
                                    },
                                  },
                                  [
                                    t._v(
                                      "\n                        " +
                                        t._s(t.reviewPost.story_score) +
                                        "\n                    "
                                    ),
                                  ]
                                ),
                              ]
                            ),
                            t._v(" "),
                            n(
                              "div",
                              {
                                staticClass: "row align-items-center py-2",
                              },
                              [
                                n(
                                  "div",
                                  {
                                    staticClass: "col-3 font-weight-semibold",
                                  },
                                  [t._v("Bố cục thế giới")]
                                ),
                                t._v(" "),
                                n(
                                  "div",
                                  {
                                    staticClass: "col-8",
                                  },
                                  [
                                    n("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: t.reviewPost.world_score,
                                          expression: "reviewPost.world_score",
                                        },
                                      ],
                                      ref: "world_score",
                                      staticClass: "js-range-slider",
                                      attrs: {
                                        type: "range",
                                        id: "js-rangeslider-2",
                                        min: "0",
                                        value: "0",
                                        max: "5",
                                        step: "0.5",
                                      },
                                      domProps: {
                                        value: t.reviewPost.world_score,
                                      },
                                      on: {
                                        __r: function (e) {
                                          return t.$set(
                                            t.reviewPost,
                                            "world_score",
                                            e.target.value
                                          );
                                        },
                                      },
                                    }),
                                  ]
                                ),
                                t._v(" "),
                                n(
                                  "div",
                                  {
                                    staticClass: "col-1 h5 mb-0 text-center",
                                    attrs: {
                                      id: "js-value-3",
                                    },
                                  },
                                  [
                                    t._v(
                                      "\n                        " +
                                        t._s(t.reviewPost.world_score) +
                                        "\n                    "
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        ),
                        t._v(" "),
                        n(
                          "div",
                          {
                            staticClass: "review-input-block",
                          },
                          [
                            n("textarea", {
                              directives: [
                                {
                                  name: "autogrow",
                                  rawName: "v-autogrow",
                                },
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: t.reviewPost.content,
                                  expression: "reviewPost.content",
                                },
                              ],
                              staticClass:
                                "form-control rounded-2 border-0 p-3",
                              attrs: {
                                placeholder: "Đánh giá của bạn về truyện này",
                              },
                              domProps: {
                                value: t.reviewPost.content,
                              },
                              on: {
                                click: function (e) {
                                  return t.loginRequire();
                                },
                                input: function (e) {
                                  e.target.composing ||
                                    t.$set(
                                      t.reviewPost,
                                      "content",
                                      e.target.value
                                    );
                                },
                              },
                            }),
                            t._v(" "),
                            n(
                              "button",
                              {
                                staticClass:
                                  "btn btn-submit bg-primary p-0 rounded-circle d-flex align-items-center justify-content-center text-white",
                                attrs: {
                                  disabled: t.spinnerReview,
                                  type: "submit",
                                },
                                on: {
                                  click: t.addReview,
                                },
                              },
                              [
                                t.spinnerReview
                                  ? n("span", {
                                      staticClass: "spinner-grow",
                                      attrs: {
                                        role: "status",
                                        "aria-hidden": "true",
                                      },
                                    })
                                  : n("i", {
                                      staticClass: "nh-icon icon-send",
                                    }),
                              ]
                            ),
                          ]
                        ),
                      ]
                    ),
                    t._v(" "),
                    n(
                      "div",
                      {
                        staticClass: "d-flex justify-content-end",
                      },
                      [
                        n(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.reviewSortOrder,
                                expression: "reviewSortOrder",
                              },
                            ],
                            staticClass: "custom-select w-auto ml-auto",
                            on: {
                              change: [
                                function (e) {
                                  var n = Array.prototype.filter
                                    .call(e.target.options, function (t) {
                                      return t.selected;
                                    })
                                    .map(function (t) {
                                      return "_value" in t ? t._value : t.value;
                                    });
                                  t.reviewSortOrder = e.target.multiple
                                    ? n
                                    : n[0];
                                },
                                function (e) {
                                  return t.changeReviewSortOrder();
                                },
                              ],
                            },
                          },
                          [
                            n(
                              "option",
                              {
                                attrs: {
                                  value: "like_count",
                                },
                              },
                              [t._v("Lượt thích")]
                            ),
                            t._v(" "),
                            n(
                              "option",
                              {
                                attrs: {
                                  value: "id",
                                },
                              },
                              [t._v("Mới nhất")]
                            ),
                          ]
                        ),
                      ]
                    ),
                    t._v(" "),
                    t.spinnerReviewList
                      ? n(
                          "div",
                          {
                            staticClass: "text-center",
                          },
                          [
                            n("v-spinner", {
                              attrs: {
                                show: t.spinnerReviewList,
                              },
                            }),
                          ],
                          1
                        )
                      : n(
                          "ul",
                          {
                            staticClass: "list-unstyled mt-3 mb-4 border-top",
                          },
                          t._l(t.reviewList, function (e, r) {
                            return n(
                              "li",
                              {
                                key: e.id,
                                staticClass: "media py-3 border-bottom",
                              },
                              [
                                n(
                                  "div",
                                  {
                                    staticClass: "nh-avatar nh-avatar--45 mr-3",
                                    staticStyle: {
                                      cursor: "pointer",
                                    },
                                    on: {
                                      click: function (n) {
                                        return t.getProfileUser(e.user.id);
                                      },
                                    },
                                  },
                                  [
                                    t.getAvatar(e.user)
                                      ? n("img", {
                                          directives: [
                                            {
                                              name: "lazy",
                                              rawName: "v-lazy",
                                              value: t.getAvatar(e.user),
                                              expression:
                                                "getAvatar(review.user)",
                                            },
                                          ],
                                          staticClass: "img-fluid",
                                          attrs: {
                                            alt: "",
                                          },
                                        })
                                      : n("img", {
                                          directives: [
                                            {
                                              name: "lazy",
                                              rawName: "v-lazy",
                                              value: t.defaultAvatarProfile,
                                              expression:
                                                "defaultAvatarProfile",
                                            },
                                          ],
                                          staticClass: "img-fluid",
                                          attrs: {
                                            alt: "",
                                          },
                                        }),
                                    t._v(" "),
                                    n(
                                      "span",
                                      {
                                        staticClass:
                                          "level px-1 py-0 small bg-primary rounded-3 text-white",
                                      },
                                      [t._v("Cấp " + t._s(e.user.level))]
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                n(
                                  "div",
                                  {
                                    staticClass: "media-body",
                                  },
                                  [
                                    n(
                                      "a",
                                      {
                                        staticClass: "d-inline-block h5 mb-1",
                                        attrs: {
                                          href: "javascript:void(0)",
                                        },
                                        on: {
                                          click: function (n) {
                                            return t.getProfileUser(e.user.id);
                                          },
                                        },
                                      },
                                      [t._v(t._s(e.user.name))]
                                    ),
                                    t._v(" "),
                                    n(
                                      "div",
                                      {
                                        staticClass:
                                          "d-flex align-items-center",
                                      },
                                      [
                                        n(
                                          "span",
                                          {
                                            staticClass:
                                              "nh-rating nh-rating--small mr-2",
                                          },
                                          [
                                            n("i", {
                                              staticClass: "nh-icon icon-star",
                                            }),
                                            t._v(" "),
                                            n("i", {
                                              staticClass: "nh-icon icon-star",
                                            }),
                                            t._v(" "),
                                            n("i", {
                                              staticClass: "nh-icon icon-star",
                                            }),
                                            t._v(" "),
                                            n("i", {
                                              staticClass: "nh-icon icon-star",
                                            }),
                                            t._v(" "),
                                            n("i", {
                                              staticClass: "nh-icon icon-star",
                                            }),
                                            t._v(" "),
                                            n(
                                              "span",
                                              {
                                                staticClass: "active",
                                                style: t.percentScore(
                                                  e.average_score
                                                ),
                                              },
                                              [
                                                n("i", {
                                                  staticClass:
                                                    "nh-icon icon-star",
                                                }),
                                                t._v(" "),
                                                n("i", {
                                                  staticClass:
                                                    "nh-icon icon-star",
                                                }),
                                                t._v(" "),
                                                n("i", {
                                                  staticClass:
                                                    "nh-icon icon-star",
                                                }),
                                                t._v(" "),
                                                n("i", {
                                                  staticClass:
                                                    "nh-icon icon-star",
                                                }),
                                                t._v(" "),
                                                n("i", {
                                                  staticClass:
                                                    "nh-icon icon-star",
                                                }),
                                              ]
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        n(
                                          "span",
                                          {
                                            staticClass:
                                              "d-inline-block h5 font-weight-normal mb-0 mr-4",
                                          },
                                          [
                                            t._v(
                                              t._s(
                                                t.parseScore(e.average_score)
                                              )
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        n(
                                          "span",
                                          {
                                            staticClass:
                                              "d-flex align-items-center text-tertiary mr-4",
                                          },
                                          [
                                            n("i", {
                                              staticClass:
                                                "nh-icon icon-eye-glasses mr-2",
                                            }),
                                            t._v(
                                              " Đã đọc: " +
                                                t._s(e.reading_status) +
                                                " chương"
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        n(
                                          "span",
                                          {
                                            staticClass:
                                              "d-flex align-items-center text-tertiary",
                                          },
                                          [
                                            n("i", {
                                              staticClass:
                                                "nh-icon icon-clock mr-2",
                                            }),
                                            t._v(" " + t._s(e.date)),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    0 === e.spoiler
                                      ? n("read-more", {
                                          staticClass: "mt-2",
                                          attrs: {
                                            text: e.content,
                                            "more-str": "đọc tiếp",
                                            "max-chars": 500,
                                          },
                                        })
                                      : n(
                                          "div",
                                          {
                                            staticClass:
                                              "spoiler_reveal mt-3 cursor-pointer",
                                            on: {
                                              click: function (n) {
                                                return t.showSpoiler(e);
                                              },
                                            },
                                          },
                                          [
                                            t._v(
                                              "\n                        Tiết lộ nội dung truyện\n                    "
                                            ),
                                          ]
                                        ),
                                    t._v(" "),
                                    n(
                                      "div",
                                      {
                                        staticClass: "d-flex mt-3",
                                      },
                                      [
                                        n(
                                          "div",
                                          {
                                            staticClass: "mr-auto",
                                          },
                                          [
                                            e.comment_count > 0 &&
                                            !e.viewReviewReplies
                                              ? n(
                                                  "a",
                                                  {
                                                    attrs: {
                                                      href: "javascript:void(0)",
                                                    },
                                                    on: {
                                                      click: function (n) {
                                                        return t.viewReviewReplies(
                                                          e
                                                        );
                                                      },
                                                    },
                                                  },
                                                  [
                                                    n(
                                                      "strong",
                                                      {
                                                        staticClass:
                                                          "text-primary",
                                                      },
                                                      [
                                                        t._v(
                                                          "Xem " +
                                                            t._s(
                                                              e.comment_count
                                                            ) +
                                                            " trả lời"
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                )
                                              : t._e(),
                                          ]
                                        ),
                                        t._v(" "),
                                        e.liked
                                          ? n(
                                              "button",
                                              {
                                                staticClass:
                                                  "btn btn-sm btn-white fz-body text-tertiary rounded-3 d-flex align-items-center px-3 mr-2 active",
                                                on: {
                                                  click: function (n) {
                                                    return t.dislikeReview(e);
                                                  },
                                                },
                                              },
                                              [
                                                n("i", {
                                                  staticClass:
                                                    "nh-icon icon-like mr-2",
                                                }),
                                                t._v(
                                                  t._s(e.like_count) +
                                                    "\n                        "
                                                ),
                                              ]
                                            )
                                          : n(
                                              "button",
                                              {
                                                staticClass:
                                                  "btn btn-sm btn-white fz-body text-tertiary rounded-3 d-flex align-items-center px-3 mr-2",
                                                on: {
                                                  click: function (n) {
                                                    return t.likeReview(e);
                                                  },
                                                },
                                              },
                                              [
                                                n("i", {
                                                  staticClass:
                                                    "nh-icon icon-like mr-2",
                                                }),
                                                t._v(
                                                  t._s(e.like_count) +
                                                    "\n                        "
                                                ),
                                              ]
                                            ),
                                        t._v(" "),
                                        n(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-sm btn-white fz-body text-tertiary rounded-3 d-flex align-items-center px-3 mr-2",
                                            class: t.activeButton(
                                              e.replyReview
                                            ),
                                            on: {
                                              click: function (n) {
                                                return t.replyReview(e, r);
                                              },
                                            },
                                          },
                                          [
                                            n("i", {
                                              staticClass:
                                                "nh-icon icon-reply mr-2",
                                            }),
                                            t._v(
                                              "\n                            Trả lời\n                        "
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        e.user.id !== t.userId
                                          ? n(
                                              "button",
                                              {
                                                staticClass:
                                                  "btn btn-sm btn-white fz-body text-tertiary rounded-3 d-flex align-items-center px-3",
                                                attrs: {
                                                  "data-toggle": "modal",
                                                },
                                                on: {
                                                  click: function (n) {
                                                    return t.reportReview(e.id);
                                                  },
                                                },
                                              },
                                              [
                                                n("i", {
                                                  staticClass:
                                                    "nh-icon icon-flag mr-2",
                                                }),
                                                t._v(
                                                  "\n                            Báo xấu\n                        "
                                                ),
                                              ]
                                            )
                                          : t._e(),
                                        t._v(" "),
                                        e.user.id === t.userId
                                          ? n(
                                              "button",
                                              {
                                                staticClass:
                                                  "btn btn-sm btn-white fz-body text-tertiary rounded-3 d-flex align-items-center px-3",
                                                attrs: {
                                                  "data-toggle": "modal",
                                                },
                                                on: {
                                                  click: function (n) {
                                                    return t.removeReview(e.id);
                                                  },
                                                },
                                              },
                                              [
                                                n("i", {
                                                  staticClass:
                                                    "nh-icon icon-trash mr-2",
                                                }),
                                                t._v(
                                                  "\n                            Xóa\n                        "
                                                ),
                                              ]
                                            )
                                          : t._e(),
                                      ]
                                    ),
                                    t._v(" "),
                                    n(
                                      "ul",
                                      {
                                        staticClass: "list-unstyled mt-2",
                                      },
                                      [
                                        t._l(e.replies, function (r, i) {
                                          return e.viewReviewReplies
                                            ? n(
                                                "li",
                                                {
                                                  staticClass:
                                                    "media py-3 border-top",
                                                },
                                                [
                                                  n(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "nh-avatar nh-avatar--45 mr-3",
                                                      staticStyle: {
                                                        cursor: "pointer",
                                                      },
                                                      on: {
                                                        click: function (e) {
                                                          return t.getProfileUser(
                                                            r.user.id
                                                          );
                                                        },
                                                      },
                                                    },
                                                    [
                                                      t.getAvatar(r.user)
                                                        ? n("img", {
                                                            directives: [
                                                              {
                                                                name: "lazy",
                                                                rawName:
                                                                  "v-lazy",
                                                                value:
                                                                  t.getAvatar(
                                                                    r.user
                                                                  ),
                                                                expression:
                                                                  "getAvatar(comment.user)",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "img-fluid",
                                                            attrs: {
                                                              alt: "",
                                                            },
                                                          })
                                                        : n("img", {
                                                            staticClass:
                                                              "img-fluid",
                                                            attrs: {
                                                              src: "https://user-pic.webnovel.com/userheadimg/4301750552-10/100.jpg?uut=1556246536000",
                                                              alt: "",
                                                            },
                                                          }),
                                                      t._v(" "),
                                                      n(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "level px-1 py-0 small bg-primary rounded-3 text-white",
                                                        },
                                                        [
                                                          t._v(
                                                            "Cấp " +
                                                              t._s(r.user.level)
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  ),
                                                  t._v(" "),
                                                  n(
                                                    "div",
                                                    {
                                                      staticClass: "media-body",
                                                    },
                                                    [
                                                      n(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "d-inline-block font-weight-bold mb-1 mr-2",
                                                          attrs: {
                                                            href: "javascript:void(0)",
                                                          },
                                                          on: {
                                                            click: function (
                                                              e
                                                            ) {
                                                              return t.getProfileUser(
                                                                r.user.id
                                                              );
                                                            },
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            t._s(r.user.name)
                                                          ),
                                                        ]
                                                      ),
                                                      t._v(" "),
                                                      n("read-more", {
                                                        staticClass:
                                                          "comment-body",
                                                        attrs: {
                                                          text: r.content,
                                                          "more-str":
                                                            "đọc tiếp",
                                                          "max-chars": 300,
                                                        },
                                                      }),
                                                      t._v(" "),
                                                      n(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "d-flex mt-1",
                                                        },
                                                        [
                                                          r.liked
                                                            ? n(
                                                                "a",
                                                                {
                                                                  staticClass:
                                                                    "fz-body text-tertiary d-flex align-items-center mr-4 active",
                                                                  on: {
                                                                    click:
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        return t.dislikeComment(
                                                                          r
                                                                        );
                                                                      },
                                                                  },
                                                                },
                                                                [
                                                                  n("i", {
                                                                    staticClass:
                                                                      "nh-icon icon-like-alt mr-2 small",
                                                                  }),
                                                                  n("small", [
                                                                    t._v(
                                                                      t._s(
                                                                        r.like_count
                                                                      )
                                                                    ),
                                                                  ]),
                                                                ]
                                                              )
                                                            : n(
                                                                "a",
                                                                {
                                                                  staticClass:
                                                                    "fz-body text-tertiary d-flex align-items-center mr-4",
                                                                  on: {
                                                                    click:
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        return t.likeComment(
                                                                          r
                                                                        );
                                                                      },
                                                                  },
                                                                },
                                                                [
                                                                  n("i", {
                                                                    staticClass:
                                                                      "nh-icon icon-like-alt mr-2 small",
                                                                  }),
                                                                  n("small", [
                                                                    t._v(
                                                                      t._s(
                                                                        r.like_count
                                                                      )
                                                                    ),
                                                                  ]),
                                                                ]
                                                              ),
                                                          t._v(" "),
                                                          n(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "d-flex align-items-center text-tertiary small",
                                                            },
                                                            [
                                                              n("i", {
                                                                staticClass:
                                                                  "nh-icon icon-clock mr-2",
                                                              }),
                                                              t._v(
                                                                t._s(r.date)
                                                              ),
                                                            ]
                                                          ),
                                                          t._v(" "),
                                                          r.user.id !== t.userId
                                                            ? n(
                                                                "a",
                                                                {
                                                                  staticClass:
                                                                    "fz-body text-tertiary d-flex align-items-center ml-auto",
                                                                  attrs: {
                                                                    href: "javascript:void(0)",
                                                                    "data-toggle":
                                                                      "modal",
                                                                  },
                                                                  on: {
                                                                    click:
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        return t.reportComment(
                                                                          r.id
                                                                        );
                                                                      },
                                                                  },
                                                                },
                                                                [
                                                                  n("i", {
                                                                    staticClass:
                                                                      "nh-icon icon-flag small",
                                                                  }),
                                                                ]
                                                              )
                                                            : n(
                                                                "a",
                                                                {
                                                                  staticClass:
                                                                    "fz-body text-tertiary d-flex align-items-center ml-auto",
                                                                  attrs: {
                                                                    href: "javascript:void(0)",
                                                                    "data-toggle":
                                                                      "modal",
                                                                  },
                                                                  on: {
                                                                    click:
                                                                      function (
                                                                        n
                                                                      ) {
                                                                        return t.removeComment(
                                                                          e,
                                                                          r
                                                                        );
                                                                      },
                                                                  },
                                                                },
                                                                [
                                                                  n("i", {
                                                                    staticClass:
                                                                      "nh-icon icon-trash small",
                                                                  }),
                                                                ]
                                                              ),
                                                        ]
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                ]
                                              )
                                            : t._e();
                                        }),
                                        t._v(" "),
                                        e.viewReviewReplies &&
                                        !e.repliesIsLoading &&
                                        e.repliesCurrentPage < e.repliesLastPage
                                          ? n(
                                              "a",
                                              {
                                                staticClass:
                                                  "ml-2 font-weight-bold",
                                                attrs: {
                                                  href: "javascript:void(0)",
                                                },
                                                on: {
                                                  click: function (n) {
                                                    return t.loadMoreReplies(e);
                                                  },
                                                },
                                              },
                                              [t._v("Xem thêm trả lời")]
                                            )
                                          : t._e(),
                                        t._v(" "),
                                        e.comment_count > 0 &&
                                        e.viewReviewReplies
                                          ? n(
                                              "a",
                                              {
                                                staticClass:
                                                  "ml-2 font-weight-bold",
                                                attrs: {
                                                  href: "javascript:void(0)",
                                                },
                                                on: {
                                                  click: function (n) {
                                                    return t.hideReviewReplies(
                                                      e
                                                    );
                                                  },
                                                },
                                              },
                                              [t._v("Ẩn trả lời")]
                                            )
                                          : t._e(),
                                      ],
                                      2
                                    ),
                                    t._v(" "),
                                    e.replyReview
                                      ? n(
                                          "div",
                                          {
                                            staticClass:
                                              "comment-form media p-2 mt-2",
                                            attrs: {
                                              id: "showReplyForm",
                                            },
                                          },
                                          [
                                            n(
                                              "div",
                                              {
                                                staticClass:
                                                  "nh-avatar nh-avatar--30 mr-2 mt-1",
                                              },
                                              [
                                                t.hasAvatar
                                                  ? n("img", {
                                                      directives: [
                                                        {
                                                          name: "lazy",
                                                          rawName: "v-lazy",
                                                          value: t.userAvatar,
                                                          expression:
                                                            "userAvatar",
                                                        },
                                                      ],
                                                      staticClass: "img-fluid",
                                                      attrs: {
                                                        alt: "",
                                                      },
                                                    })
                                                  : n("img", {
                                                      directives: [
                                                        {
                                                          name: "lazy",
                                                          rawName: "v-lazy",
                                                          value:
                                                            t.defaultAvatarProfile,
                                                          expression:
                                                            "defaultAvatarProfile",
                                                        },
                                                      ],
                                                      staticClass: "img-fluid",
                                                      attrs: {
                                                        alt: "",
                                                      },
                                                    }),
                                              ]
                                            ),
                                            t._v(" "),
                                            n(
                                              "div",
                                              {
                                                staticClass:
                                                  "media-body comment-input-block",
                                              },
                                              [
                                                n("textarea", {
                                                  directives: [
                                                    {
                                                      name: "autogrow",
                                                      rawName: "v-autogrow",
                                                    },
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value:
                                                        e.replyReviewContent,
                                                      expression:
                                                        "review.replyReviewContent",
                                                    },
                                                  ],
                                                  ref: "reviewReply",
                                                  refInFor: !0,
                                                  staticClass:
                                                    "form-control bg-light",
                                                  attrs: {
                                                    placeholder:
                                                      "Nội dung trả lời",
                                                  },
                                                  domProps: {
                                                    value: e.replyReviewContent,
                                                  },
                                                  on: {
                                                    click: function (e) {
                                                      return t.loginRequire();
                                                    },
                                                    input: function (n) {
                                                      n.target.composing ||
                                                        t.$set(
                                                          e,
                                                          "replyReviewContent",
                                                          n.target.value
                                                        );
                                                    },
                                                  },
                                                }),
                                                t._v(" "),
                                                n(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "btn btn-submit bg-transparent text-primary d-flex align-items-center justify-content-center shadow-none px-2",
                                                    attrs: {
                                                      disabled: t.spinnerReply,
                                                    },
                                                    on: {
                                                      click: function (n) {
                                                        return t.postReplyReview(
                                                          e
                                                        );
                                                      },
                                                    },
                                                  },
                                                  [
                                                    t.spinnerReply
                                                      ? n("span", {
                                                          staticClass:
                                                            "spinner-grow",
                                                          attrs: {
                                                            role: "status",
                                                            "aria-hidden":
                                                              "true",
                                                          },
                                                        })
                                                      : n("i", {
                                                          staticClass:
                                                            "nh-icon icon-send",
                                                        }),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ]
                                        )
                                      : t._e(),
                                  ],
                                  1
                                ),
                              ]
                            );
                          }),
                          0
                        ),
                    t._v(" "),
                    t.reviewSearch.lastPage > 1
                      ? n(
                          "nav",
                          {
                            staticClass: "d-flex justify-content-end",
                            attrs: {
                              "aria-label": "Pagination",
                            },
                          },
                          [
                            n("paginate", {
                              attrs: {
                                "page-count": t.reviewSearch.lastPage,
                                "page-range": 3,
                                "margin-pages": 2,
                                "click-handler": t.handleNavigateReview,
                                "prev-text": "<",
                                "next-text": ">",
                                "container-class": "pagination pagination-sm",
                                "page-class": "page-item",
                                "page-link-class": "page-link rounded",
                                "prev-link-class": "page-link rounded",
                                "next-link-class": "page-link rounded",
                              },
                              model: {
                                value: t.reviewSearch.page,
                                callback: function (e) {
                                  t.$set(t.reviewSearch, "page", e);
                                },
                                expression: "reviewSearch.page",
                              },
                            }),
                            t._v(" "),
                            n(
                              "div",
                              {
                                staticClass: "input-jump-to ml-3",
                              },
                              [
                                n("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: t.reviewSearch.page,
                                      expression: "reviewSearch.page",
                                    },
                                  ],
                                  staticClass:
                                    "form-control form-control-sm float-left mr-2",
                                  attrs: {
                                    type: "text",
                                    placeholder: "Trang",
                                    "aria-label": "Trang",
                                    "aria-describedby": "jump-to-page",
                                  },
                                  domProps: {
                                    value: t.reviewSearch.page,
                                  },
                                  on: {
                                    input: function (e) {
                                      e.target.composing ||
                                        t.$set(
                                          t.reviewSearch,
                                          "page",
                                          e.target.value
                                        );
                                    },
                                  },
                                }),
                                t._v(" "),
                                n(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-outline-primary btn-sm",
                                    attrs: {
                                      type: "button",
                                      id: "jump-to-page",
                                    },
                                    on: {
                                      click: function (e) {
                                        return t.handleNavigateReview(
                                          t.reviewSearch.page
                                        );
                                      },
                                    },
                                  },
                                  [t._v("Go")]
                                ),
                              ]
                            ),
                          ],
                          1
                        )
                      : t._e(),
                  ]
                ),
                t._v(" "),
                n(
                  "div",
                  {
                    staticClass: "col-4",
                  },
                  [
                    n(
                      "div",
                      {
                        staticClass:
                          "rating-box bg-yellow-white text-primary rounded-3 p-3",
                      },
                      [
                        n(
                          "div",
                          {
                            staticClass: "d-flex align-items-center py-2",
                          },
                          [
                            n(
                              "div",
                              {
                                staticClass: "h5 m-0",
                              },
                              [
                                t._v(
                                  "Đã có " + t._s(t.reviewCount) + " đánh giá"
                                ),
                              ]
                            ),
                            t._v(" "),
                            n(
                              "div",
                              {
                                staticClass:
                                  "d-flex align-items-center ml-auto",
                              },
                              [
                                n(
                                  "span",
                                  {
                                    staticClass: "nh-rating",
                                  },
                                  [
                                    n("i", {
                                      staticClass: "nh-icon icon-star",
                                    }),
                                    t._v(" "),
                                    n("i", {
                                      staticClass: "nh-icon icon-star",
                                    }),
                                    t._v(" "),
                                    n("i", {
                                      staticClass: "nh-icon icon-star",
                                    }),
                                    t._v(" "),
                                    n("i", {
                                      staticClass: "nh-icon icon-star",
                                    }),
                                    t._v(" "),
                                    n("i", {
                                      staticClass: "nh-icon icon-star",
                                    }),
                                    t._v(" "),
                                    n(
                                      "span",
                                      {
                                        staticClass: "active",
                                        style: t.percentScore(
                                          t.book_reviews_score.average_score
                                        ),
                                      },
                                      [
                                        n("i", {
                                          staticClass: "nh-icon icon-star",
                                        }),
                                        t._v(" "),
                                        n("i", {
                                          staticClass: "nh-icon icon-star",
                                        }),
                                        t._v(" "),
                                        n("i", {
                                          staticClass: "nh-icon icon-star",
                                        }),
                                        t._v(" "),
                                        n("i", {
                                          staticClass: "nh-icon icon-star",
                                        }),
                                        t._v(" "),
                                        n("i", {
                                          staticClass: "nh-icon icon-star",
                                        }),
                                      ]
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                n(
                                  "span",
                                  {
                                    staticClass: "d-inline-block h5 mb-0 ml-3",
                                  },
                                  [
                                    t._v(
                                      t._s(
                                        t
                                          .parseScore(
                                            t.book_reviews_score.average_score
                                          )
                                          .toFixed(2)
                                      )
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        ),
                        t._v(" "),
                        n("div", {
                          staticClass: "divider",
                        }),
                        t._v(" "),
                        n(
                          "div",
                          {
                            staticClass: "d-flex align-items-center py-2",
                          },
                          [
                            n("div", {}, [t._v("Tính cách nhân vật")]),
                            t._v(" "),
                            n(
                              "div",
                              {
                                staticClass:
                                  "d-flex align-items-center ml-auto",
                              },
                              [
                                n(
                                  "span",
                                  {
                                    staticClass: "nh-rating",
                                  },
                                  [
                                    n("i", {
                                      staticClass: "nh-icon icon-star",
                                    }),
                                    t._v(" "),
                                    n("i", {
                                      staticClass: "nh-icon icon-star",
                                    }),
                                    t._v(" "),
                                    n("i", {
                                      staticClass: "nh-icon icon-star",
                                    }),
                                    t._v(" "),
                                    n("i", {
                                      staticClass: "nh-icon icon-star",
                                    }),
                                    t._v(" "),
                                    n("i", {
                                      staticClass: "nh-icon icon-star",
                                    }),
                                    t._v(" "),
                                    n(
                                      "span",
                                      {
                                        staticClass: "active",
                                        style: t.percentScore(
                                          t.book_reviews_score.character_score
                                        ),
                                      },
                                      [
                                        n("i", {
                                          staticClass: "nh-icon icon-star",
                                        }),
                                        t._v(" "),
                                        n("i", {
                                          staticClass: "nh-icon icon-star",
                                        }),
                                        t._v(" "),
                                        n("i", {
                                          staticClass: "nh-icon icon-star",
                                        }),
                                        t._v(" "),
                                        n("i", {
                                          staticClass: "nh-icon icon-star",
                                        }),
                                        t._v(" "),
                                        n("i", {
                                          staticClass: "nh-icon icon-star",
                                        }),
                                      ]
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                n(
                                  "span",
                                  {
                                    staticClass: "d-inline-block mb-0 ml-3",
                                  },
                                  [
                                    t._v(
                                      t._s(
                                        t
                                          .parseScore(
                                            t.book_reviews_score.character_score
                                          )
                                          .toFixed(2)
                                      )
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        ),
                        t._v(" "),
                        n(
                          "div",
                          {
                            staticClass: "d-flex align-items-center py-2",
                          },
                          [
                            n("div", {}, [t._v("Nội dung cốt truyện")]),
                            t._v(" "),
                            n(
                              "div",
                              {
                                staticClass:
                                  "d-flex align-items-center ml-auto",
                              },
                              [
                                n(
                                  "span",
                                  {
                                    staticClass: "nh-rating",
                                  },
                                  [
                                    n("i", {
                                      staticClass: "nh-icon icon-star",
                                    }),
                                    t._v(" "),
                                    n("i", {
                                      staticClass: "nh-icon icon-star",
                                    }),
                                    t._v(" "),
                                    n("i", {
                                      staticClass: "nh-icon icon-star",
                                    }),
                                    t._v(" "),
                                    n("i", {
                                      staticClass: "nh-icon icon-star",
                                    }),
                                    t._v(" "),
                                    n("i", {
                                      staticClass: "nh-icon icon-star",
                                    }),
                                    t._v(" "),
                                    n(
                                      "span",
                                      {
                                        staticClass: "active",
                                        style: t.percentScore(
                                          t.book_reviews_score.story_score
                                        ),
                                      },
                                      [
                                        n("i", {
                                          staticClass: "nh-icon icon-star",
                                        }),
                                        t._v(" "),
                                        n("i", {
                                          staticClass: "nh-icon icon-star",
                                        }),
                                        t._v(" "),
                                        n("i", {
                                          staticClass: "nh-icon icon-star",
                                        }),
                                        t._v(" "),
                                        n("i", {
                                          staticClass: "nh-icon icon-star",
                                        }),
                                        t._v(" "),
                                        n("i", {
                                          staticClass: "nh-icon icon-star",
                                        }),
                                      ]
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                n(
                                  "span",
                                  {
                                    staticClass: "d-inline-block mb-0 ml-3",
                                  },
                                  [
                                    t._v(
                                      t._s(
                                        t
                                          .parseScore(
                                            t.book_reviews_score.story_score
                                          )
                                          .toFixed(2)
                                      )
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        ),
                        t._v(" "),
                        n(
                          "div",
                          {
                            staticClass: "d-flex align-items-center py-2",
                          },
                          [
                            n("div", {}, [t._v("Bố cục thế giới")]),
                            t._v(" "),
                            n(
                              "div",
                              {
                                staticClass:
                                  "d-flex align-items-center ml-auto",
                              },
                              [
                                n(
                                  "span",
                                  {
                                    staticClass: "nh-rating",
                                  },
                                  [
                                    n("i", {
                                      staticClass: "nh-icon icon-star",
                                    }),
                                    t._v(" "),
                                    n("i", {
                                      staticClass: "nh-icon icon-star",
                                    }),
                                    t._v(" "),
                                    n("i", {
                                      staticClass: "nh-icon icon-star",
                                    }),
                                    t._v(" "),
                                    n("i", {
                                      staticClass: "nh-icon icon-star",
                                    }),
                                    t._v(" "),
                                    n("i", {
                                      staticClass: "nh-icon icon-star",
                                    }),
                                    t._v(" "),
                                    n(
                                      "span",
                                      {
                                        staticClass: "active",
                                        style: t.percentScore(
                                          t.book_reviews_score.world_score
                                        ),
                                      },
                                      [
                                        n("i", {
                                          staticClass: "nh-icon icon-star",
                                        }),
                                        t._v(" "),
                                        n("i", {
                                          staticClass: "nh-icon icon-star",
                                        }),
                                        t._v(" "),
                                        n("i", {
                                          staticClass: "nh-icon icon-star",
                                        }),
                                        t._v(" "),
                                        n("i", {
                                          staticClass: "nh-icon icon-star",
                                        }),
                                        t._v(" "),
                                        n("i", {
                                          staticClass: "nh-icon icon-star",
                                        }),
                                      ]
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                n(
                                  "span",
                                  {
                                    staticClass: "d-inline-block mb-0 ml-3",
                                  },
                                  [
                                    t._v(
                                      t._s(
                                        t
                                          .parseScore(
                                            t.book_reviews_score.world_score
                                          )
                                          .toFixed(2)
                                      )
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        ),
                        t._v(" "),
                        n(
                          "div",
                          {
                            staticClass: "d-flex align-items-center py-2",
                          },
                          [
                            n("div", {}, [t._v("Chất lượng bản dịch")]),
                            t._v(" "),
                            n(
                              "div",
                              {
                                staticClass:
                                  "d-flex align-items-center ml-auto",
                              },
                              [
                                n(
                                  "span",
                                  {
                                    staticClass: "nh-rating",
                                  },
                                  [
                                    n("i", {
                                      staticClass: "nh-icon icon-star",
                                    }),
                                    t._v(" "),
                                    n("i", {
                                      staticClass: "nh-icon icon-star",
                                    }),
                                    t._v(" "),
                                    n("i", {
                                      staticClass: "nh-icon icon-star",
                                    }),
                                    t._v(" "),
                                    n("i", {
                                      staticClass: "nh-icon icon-star",
                                    }),
                                    t._v(" "),
                                    n("i", {
                                      staticClass: "nh-icon icon-star",
                                    }),
                                    t._v(" "),
                                    n(
                                      "span",
                                      {
                                        staticClass: "active",
                                        style: t.percentScore(
                                          t.translate_score
                                        ),
                                      },
                                      [
                                        n("i", {
                                          staticClass: "nh-icon icon-star",
                                        }),
                                        t._v(" "),
                                        n("i", {
                                          staticClass: "nh-icon icon-star",
                                        }),
                                        t._v(" "),
                                        n("i", {
                                          staticClass: "nh-icon icon-star",
                                        }),
                                        t._v(" "),
                                        n("i", {
                                          staticClass: "nh-icon icon-star",
                                        }),
                                        t._v(" "),
                                        n("i", {
                                          staticClass: "nh-icon icon-star",
                                        }),
                                      ]
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                t.translate_score > 0
                                  ? n(
                                      "span",
                                      {
                                        staticClass: "d-inline-block mb-0 ml-3",
                                      },
                                      [
                                        t._v(
                                          t._s(
                                            t
                                              .parseScore(t.translate_score)
                                              .toFixed(2)
                                          )
                                        ),
                                      ]
                                    )
                                  : n(
                                      "span",
                                      {
                                        staticClass: "d-inline-block mb-0 ml-3",
                                      },
                                      [t._v("N/A")]
                                    ),
                              ]
                            ),
                          ]
                        ),
                      ]
                    ),
                    t._v(" "),
                    t._m(0),
                  ]
                ),
                t._v(" "),
                n("reviews-spoiler", {
                  ref: "ReviewSpoiler",
                  attrs: {
                    reviewPost: t.reviewPost,
                  },
                }),
              ],
              1
            );
          },
          [
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                "div",
                {
                  staticClass:
                    "bg-yellow-white text-primary rounded-3 p-3 mt-4",
                },
                [
                  n(
                    "div",
                    {
                      staticClass: "h5 mb-4",
                    },
                    [t._v("Lưu ý khi đánh giá")]
                  ),
                  t._v(" "),
                  n("p", [
                    t._v("1. Không được dẫn link hoặc nhắc đến website khác"),
                  ]),
                  t._v(" "),
                  n("p", [
                    t._v(
                      "2. Không được có những từ ngữ gay gắt, đả kích, xúc phạm người khác"
                    ),
                  ]),
                  t._v(" "),
                  n("p", [
                    t._v(
                      "3. Đánh giá hoặc bình luận không liên quan tới truyện sẽ bị xóa"
                    ),
                  ]),
                  t._v(" "),
                  n("p", [
                    t._v(
                      "4. Đánh giá hoặc bình luận chê truyện một cách chung chung không mang lại giá trị cho người đọc sẽ bị xóa"
                    ),
                  ]),
                  t._v(" "),
                  n("p", [
                    t._v(
                      "5. Đánh giá có điểm số sai lệch với nội dung sẽ bị xóa"
                    ),
                  ]),
                  t._v(" "),
                  n("p", [
                    n("em", [
                      t._v(
                        "Vui lòng xem và tuân theo đầy đủ các quy định tại Điều Khoản Dịch Vụ khi sử dụng website"
                      ),
                    ]),
                  ]),
                ]
              );
            },
          ],
          !1,
          null,
          "472d14d3",
          null
        );
      e.default = _.exports;
    },
    381: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = {
          name: "ReviewSpoiler",
          props: ["reviewPost"],
          data: function () {
            return {
              active: !1,
              resolve: null,
              maximum_value: 5,
              activeSpoiler: !0,
              reviewRes: {
                spoiler: !1,
                maximum: !0,
              },
            };
          },
          methods: {
            close: function () {
              this.active = !1;
            },
            pop: function () {
              var t = this;
              return (
                (this.active = !0),
                new Promise(function (e, n) {
                  t.resolve = e;
                })
              );
            },
            startTransitionModal: function () {
              $("#dialog-backdrop").toggleClass("d-block");
            },
            endTransitionModal: function () {
              $("#dialog-backdrop").toggleClass("show"),
                this.$refs.ReviewSpoiler.classList.toggle("show");
            },
            addSpoiler: function (t) {
              parseInt(this.reviewPost.story_score) === this.maximum_value &&
              parseInt(this.reviewPost.character_score) ===
                this.maximum_value &&
              parseInt(this.reviewPost.world_score) === this.maximum_value
                ? (this.activeSpoiler = !1)
                : ((this.active = !1),
                  (this.reviewRes.spoiler = t),
                  this.resolve(this.reviewRes));
            },
            addMaximum: function (t) {
              (this.activeSpoiler = !0),
                (this.active = !1),
                (this.reviewRes.maximum = t),
                this.resolve(this.reviewRes);
            },
          },
          mounted: function () {
            var t = this;
            EventBus.$on("review_spoiler", function () {
              t.active = !0;
            });
          },
        },
        i = n(5),
        a = Object(i.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "transition",
              {
                on: {
                  enter: t.startTransitionModal,
                  "after-enter": t.endTransitionModal,
                  "before-leave": t.endTransitionModal,
                  "after-leave": t.startTransitionModal,
                },
              },
              [
                t.active
                  ? n(
                      "div",
                      {
                        ref: "ReviewSpoiler",
                        staticClass: "modal fade",
                        staticStyle: {
                          "padding-right": "17px",
                          display: "block",
                        },
                        attrs: {
                          id: "reviewSpoiler",
                          tabindex: "-1",
                          role: "dialog",
                          "aria-labelledby": "reviewSpoilerTitle",
                          "aria-modal": "true",
                        },
                      },
                      [
                        n(
                          "div",
                          {
                            staticClass: "modal-dialog modal-dialog-scrollable",
                            attrs: {
                              role: "document",
                            },
                          },
                          [
                            t.activeSpoiler
                              ? n(
                                  "div",
                                  {
                                    staticClass: "modal-content",
                                  },
                                  [
                                    n(
                                      "div",
                                      {
                                        staticClass: "modal-header",
                                      },
                                      [
                                        n(
                                          "h5",
                                          {
                                            staticClass: "modal-title",
                                            attrs: {
                                              id: "unlockChapterTitle",
                                            },
                                          },
                                          [
                                            t._v(
                                              "Đánh giá của bạn có tiết lộ nội dung truyện?"
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    n(
                                      "div",
                                      {
                                        staticClass: "modal-body",
                                      },
                                      [
                                        n(
                                          "div",
                                          {
                                            staticClass:
                                              "form-check my-1 float-right",
                                          },
                                          [
                                            n(
                                              "a",
                                              {
                                                staticClass:
                                                  "btn btn-primary btn-md  btn-shadow font-weight-semibold",
                                                staticStyle: {
                                                  color: "#fff",
                                                  "border-radius": "10px",
                                                },
                                                attrs: {
                                                  href: "javascript:void(0)",
                                                },
                                                on: {
                                                  click: function (e) {
                                                    return t.addSpoiler(!1);
                                                  },
                                                },
                                              },
                                              [
                                                t._v(
                                                  "\n                    Không\n                "
                                                ),
                                              ]
                                            ),
                                            t._v(" "),
                                            n(
                                              "a",
                                              {
                                                staticClass:
                                                  "btn btn-primary btn-md  btn-shadow font-weight-semibold ml-1",
                                                staticStyle: {
                                                  color: "#fff",
                                                  "border-radius": "10px",
                                                },
                                                attrs: {
                                                  href: "javascript:void(0)",
                                                },
                                                on: {
                                                  click: function (e) {
                                                    return t.addSpoiler(!0);
                                                  },
                                                },
                                              },
                                              [
                                                t._v(
                                                  "\n                    Có\n                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                )
                              : n(
                                  "div",
                                  {
                                    staticClass: "modal-content",
                                  },
                                  [
                                    n(
                                      "div",
                                      {
                                        staticClass: "modal-header",
                                      },
                                      [
                                        n(
                                          "h5",
                                          {
                                            staticClass: "modal-title",
                                            attrs: {
                                              id: "reviewMaximumTitle",
                                            },
                                          },
                                          [
                                            t._v(
                                              "Bạn có chắc muốn cho truyện này điểm tối đa?"
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    n(
                                      "div",
                                      {
                                        staticClass: "modal-body",
                                      },
                                      [
                                        n(
                                          "div",
                                          {
                                            staticClass:
                                              "form-check my-1 float-right",
                                          },
                                          [
                                            n(
                                              "a",
                                              {
                                                staticClass:
                                                  "btn btn-primary btn-md  btn-shadow font-weight-semibold",
                                                staticStyle: {
                                                  color: "#fff",
                                                  "border-radius": "10px",
                                                },
                                                attrs: {
                                                  href: "javascript:void(0)",
                                                },
                                                on: {
                                                  click: function (e) {
                                                    return t.addMaximum(!1);
                                                  },
                                                },
                                              },
                                              [
                                                t._v(
                                                  "\n                        Không\n                    "
                                                ),
                                              ]
                                            ),
                                            t._v(" "),
                                            n(
                                              "a",
                                              {
                                                staticClass:
                                                  "btn btn-primary btn-md  btn-shadow font-weight-semibold ml-1",
                                                staticStyle: {
                                                  color: "#fff",
                                                  "border-radius": "10px",
                                                },
                                                attrs: {
                                                  href: "javascript:void(0)",
                                                },
                                                on: {
                                                  click: function (e) {
                                                    return t.addMaximum(!0);
                                                  },
                                                },
                                              },
                                              [
                                                t._v(
                                                  "\n                        Có\n                    "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                          ]
                        ),
                      ]
                    )
                  : t._e(),
              ]
            );
          },
          [],
          !1,
          null,
          "09471676",
          null
        );
      e.default = a.exports;
    },
    382: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(0),
        i = n.n(r),
        a = n(62);
      function o(t, e, n, r, i, a, o) {
        try {
          var s = t[a](o),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, i);
      }
      var s = {
          name: "ReviewTranslator",
          data: function () {
            return {
              active: !1,
              form: {
                book_id: null,
                chapter_id: null,
                score: null,
              },
              score: 0,
            };
          },
          methods: {
            close: function () {
              this.active = !1;
            },
            show: function () {
              this.active = !0;
            },
            sendRateChapter: function () {
              var t,
                e = this;
              return ((t = i.a.mark(function t() {
                var n;
                return i.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (e.form.score = 1 * e.score),
                            (t.prev = 1),
                            (t.next = 4),
                            Object(a.a)(e.form)
                          );
                        case 4:
                          (n = t.sent),
                            (e.active = !0 !== n.data._success),
                            (t.next = 10);
                          break;
                        case 8:
                          (t.prev = 8), (t.t0 = t.catch(1));
                        case 10:
                          e.spinner = !1;
                        case 11:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 8]]
                );
              })),
              function () {
                var e = this,
                  n = arguments;
                return new Promise(function (r, i) {
                  var a = t.apply(e, n);
                  function s(t) {
                    o(a, r, i, s, c, "next", t);
                  }
                  function c(t) {
                    o(a, r, i, s, c, "throw", t);
                  }
                  s(void 0);
                });
              })();
            },
            rateChapter: function (t, e) {
              (this.active = !0),
                (this.form.book_id = parseInt(t, 10)),
                (this.form.chapter_id = parseInt(e, 10)),
                (this.form.score = 1);
            },
            startTransitionModal: function () {
              $("#dialog-backdrop").toggleClass("d-block");
            },
            endTransitionModal: function () {
              $("#dialog-backdrop").toggleClass("show"),
                this.$refs.modal.classList.toggle("show");
            },
          },
          mounted: function () {
            var t = this;
            EventBus.$on("rateTranslator", function (e) {
              var n = e.book_id,
                r = e.chapter_id;
              t.rateChapter(n, r);
            });
          },
        },
        c = n(5),
        l = Object(c.a)(
          s,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "transition",
              {
                on: {
                  enter: t.startTransitionModal,
                  "after-enter": t.endTransitionModal,
                  "before-leave": t.endTransitionModal,
                  "after-leave": t.startTransitionModal,
                },
              },
              [
                t.active
                  ? n(
                      "div",
                      {
                        ref: "modal",
                        staticClass: "modal fade",
                        staticStyle: {
                          display: "block",
                          "padding-right": "17px",
                        },
                        attrs: {
                          id: "rateChapter",
                          tabindex: "-1",
                          role: "dialog",
                          "aria-labelledby": "rateChapterTitle",
                        },
                      },
                      [
                        n(
                          "div",
                          {
                            staticClass: "modal-dialog modal-dialog-scrollable",
                            attrs: {
                              role: "document",
                            },
                          },
                          [
                            n(
                              "div",
                              {
                                staticClass: "modal-content",
                              },
                              [
                                n(
                                  "div",
                                  {
                                    staticClass: "modal-header",
                                  },
                                  [
                                    n(
                                      "h5",
                                      {
                                        staticClass: "modal-title",
                                        attrs: {
                                          id: "rateChapterTitle",
                                        },
                                      },
                                      [t._v("Đánh giá")]
                                    ),
                                    t._v(" "),
                                    n(
                                      "button",
                                      {
                                        staticClass: "close",
                                        attrs: {
                                          type: "button",
                                          "data-dismiss": "modal",
                                          "aria-label": "Close",
                                        },
                                        on: {
                                          click: function (e) {
                                            return t.close();
                                          },
                                        },
                                      },
                                      [
                                        n(
                                          "span",
                                          {
                                            attrs: {
                                              "aria-hidden": "true",
                                            },
                                          },
                                          [t._v("×")]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                n(
                                  "div",
                                  {
                                    staticClass: "modal-body text-secondary",
                                  },
                                  [
                                    n(
                                      "div",
                                      {
                                        staticClass: "align-items-center py-2",
                                      },
                                      [
                                        n(
                                          "div",
                                          {
                                            staticClass:
                                              "text-center mb-4 px-5",
                                          },
                                          [
                                            t._v(
                                              "Bạn đánh giá chất lượng bản dịch của chương này\n              được mấy điểm? Kéo nút tròn để cho điểm, điểm tối đa là 5 điểm.\n            "
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        n(
                                          "div",
                                          {
                                            staticClass: "my-4 mx-5 px-5",
                                          },
                                          [
                                            n("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: t.score,
                                                  expression: "score",
                                                },
                                              ],
                                              ref: "score",
                                              staticClass: "js-range-slider",
                                              attrs: {
                                                type: "range",
                                                min: "0",
                                                max: "5",
                                                step: "0.5",
                                                value: "0",
                                              },
                                              domProps: {
                                                value: t.score,
                                              },
                                              on: {
                                                __r: function (e) {
                                                  t.score = e.target.value;
                                                },
                                              },
                                            }),
                                          ]
                                        ),
                                        t._v(" "),
                                        n(
                                          "div",
                                          {
                                            staticClass:
                                              "text-center mb-4 font-weight-semibold",
                                          },
                                          [
                                            n(
                                              "span",
                                              {
                                                attrs: {
                                                  id: "js-value-1",
                                                },
                                              },
                                              [t._v(t._s(t.score))]
                                            ),
                                            t._v(
                                              "/5\n              điểm\n            "
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    n(
                                      "div",
                                      {
                                        staticClass: "form-check my-2",
                                      },
                                      [
                                        n(
                                          "a",
                                          {
                                            staticClass:
                                              "btn btn-primary btn-md btn-shadow font-weight-semibold d-flex align-items-center justify-content-center",
                                            attrs: {
                                              href: "javascript:void(0);",
                                            },
                                            on: {
                                              click: t.sendRateChapter,
                                            },
                                          },
                                          [
                                            t._v(
                                              "\n              Gửi đánh giá\n            "
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        ),
                      ]
                    )
                  : t._e(),
              ]
            );
          },
          [],
          !1,
          null,
          "2087c290",
          null
        );
      e.default = l.exports;
    },
    383: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(0),
        i = n.n(r),
        a = n(44),
        o = n(25),
        s = n(3);
      function c(t, e, n, r, i, a, o) {
        try {
          var s = t[a](o),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, i);
      }
      function l(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, i) {
            var a = t.apply(e, n);
            function o(t) {
              c(a, r, i, o, s, "next", t);
            }
            function s(t) {
              c(a, r, i, o, s, "throw", t);
            }
            o(void 0);
          });
        };
      }
      function u(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function d(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var m = {
          name: "ChapterVote",
          data: function () {
            return {
              spinner: !1,
              active: !1,
              form: {
                voteable_id: null,
                voteable_type: null,
              },
              chapter_ballot: 0,
              chapter_level: 0,
              user_ballot: 0,
              score: 0,
              chapter: {},
            };
          },
          computed: (function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? u(Object(n), !0).forEach(function (e) {
                    d(t, e, n[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : u(Object(n)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(n, e)
                    );
                  });
            }
            return t;
          })(
            {
              userInfo: {},
            },
            Object(s.e)({
              userInfo: function (t) {
                return t.user.userInfo;
              },
            })
          ),
          methods: {
            close: function () {
              this.active = !1;
            },
            show: function () {
              this.active = !0;
            },
            init: function (t) {
              var e = this;
              return l(
                i.a.mark(function n() {
                  var r, a;
                  return i.a.wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.prev = 0),
                              (r = {
                                book_id: t,
                                rank_type: 2,
                                period: "3",
                                kind: 1,
                                sex: 1,
                              }),
                              (n.next = 4),
                              Object(o.b)(r)
                            );
                          case 4:
                            !0 === (a = n.sent).data._success &&
                              ((e.chapter_ballot = a.data._data.amount),
                              (e.chapter_level = a.data._data.rank));
                          case 6:
                            return (n.prev = 6), n.finish(6);
                          case 8:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [[0, , 6, 8]]
                  );
                })
              )();
            },
            sendVoteChapter: function () {
              var t = this;
              return l(
                i.a.mark(function e() {
                  var n;
                  return i.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t.spinner = !0),
                              (e.prev = 1),
                              (e.next = 4),
                              Object(a.a)(t.form)
                            );
                          case 4:
                            !0 === (n = e.sent).data._success &&
                              ((t.userInfo.ballot = n.data._data.user_ballot),
                              (t.user_ballot = n.data._data.user_ballot),
                              (t.chapter_ballot = n.data._data.amount),
                              (t.chapter_level = n.data._data.rank)),
                              (t.active = !0 !== n.data._success);
                          case 7:
                            return (e.prev = 7), (t.spinner = !1), e.finish(7);
                          case 10:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, , 7, 10]]
                  );
                })
              )();
            },
            voteChapter: function (t) {
              (this.active = !0),
                (this.form.voteable_id = parseInt(t, 10)),
                (this.form.voteable_type = 1);
            },
            startTransitionModal: function () {
              $("#dialog-backdrop").toggleClass("d-block");
            },
            endTransitionModal: function () {
              $("#dialog-backdrop").toggleClass("show"),
                this.$refs.modal.classList.toggle("show");
            },
          },
          mounted: function () {
            var t = this;
            EventBus.$on("voteChapter", function (e) {
              var n = e.book_id;
              (t.user_ballot = t.userInfo.ballot),
                t.init(n),
                t.voteChapter(bookId);
            });
          },
        },
        v = n(5),
        f = Object(v.a)(
          m,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "transition",
              {
                on: {
                  enter: t.startTransitionModal,
                  "after-enter": t.endTransitionModal,
                  "before-leave": t.endTransitionModal,
                  "after-leave": t.startTransitionModal,
                },
              },
              [
                t.active
                  ? n(
                      "div",
                      {
                        ref: "modal",
                        staticClass: "modal fade",
                        staticStyle: {
                          display: "block",
                        },
                        attrs: {
                          id: "voteBook",
                          tabindex: "-1",
                          role: "dialog",
                          "aria-labelledby": "voteBookTitle",
                        },
                      },
                      [
                        n(
                          "div",
                          {
                            staticClass: "modal-dialog modal-dialog-scrollable",
                            attrs: {
                              role: "document",
                            },
                          },
                          [
                            n(
                              "div",
                              {
                                staticClass: "modal-content",
                              },
                              [
                                n(
                                  "div",
                                  {
                                    staticClass: "modal-header",
                                  },
                                  [
                                    n(
                                      "h5",
                                      {
                                        staticClass: "modal-title",
                                        attrs: {
                                          id: "voteBookTitle",
                                        },
                                      },
                                      [t._v("Đề cử hoa")]
                                    ),
                                    t._v(" "),
                                    n(
                                      "button",
                                      {
                                        staticClass: "close",
                                        attrs: {
                                          type: "button",
                                          "data-dismiss": "modal",
                                          "aria-label": "Close",
                                        },
                                        on: {
                                          click: function (e) {
                                            return t.close();
                                          },
                                        },
                                      },
                                      [
                                        n(
                                          "span",
                                          {
                                            attrs: {
                                              "aria-hidden": "true",
                                            },
                                          },
                                          [t._v("×")]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                n(
                                  "div",
                                  {
                                    staticClass: "modal-body",
                                  },
                                  [
                                    n(
                                      "div",
                                      {
                                        staticClass:
                                          "text-center mb-4 px-5 font-weight-semibold text-secondary",
                                      },
                                      [
                                        t._v(
                                          "Thống kê tháng\n            này\n          "
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    n(
                                      "div",
                                      {
                                        staticClass: "row",
                                      },
                                      [
                                        n(
                                          "div",
                                          {
                                            staticClass: "col-6 text-center",
                                          },
                                          [
                                            n("i", {
                                              staticClass:
                                                "nh-icon icon-badge icon-2x",
                                            }),
                                            t._v(" "),
                                            n(
                                              "h6",
                                              {
                                                staticClass: "mt-0",
                                              },
                                              [
                                                t._v(
                                                  "Hạng " +
                                                    t._s(t.chapter_level)
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        n(
                                          "div",
                                          {
                                            staticClass: "col-6 text-center",
                                          },
                                          [
                                            n("i", {
                                              staticClass:
                                                "nh-icon icon-flower icon-2x",
                                            }),
                                            t._v(" "),
                                            n(
                                              "h6",
                                              {
                                                staticClass: "mb-0",
                                              },
                                              [t._v(t._s(t.chapter_ballot))]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    n(
                                      "div",
                                      {
                                        staticClass:
                                          "d-flex justify-content-center mt-4",
                                      },
                                      [
                                        n(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-primary rounded-3 text-center px-5 py-1 d-flex align-items-center flex-column",
                                            on: {
                                              click: function (e) {
                                                return t.sendVoteChapter();
                                              },
                                            },
                                          },
                                          [
                                            t.spinner
                                              ? n("span", {
                                                  staticClass:
                                                    "spinner-border spinner-border-sm",
                                                  staticStyle: {
                                                    width: "24px",
                                                    height: "24px",
                                                  },
                                                  attrs: {
                                                    role: "status",
                                                    "aria-hidden": "true",
                                                  },
                                                })
                                              : n(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "font-weight-semibold",
                                                  },
                                                  [t._v("Đề cử")]
                                                ),
                                            t._v(" "),
                                            n(
                                              "span",
                                              {
                                                staticClass: "small",
                                              },
                                              [
                                                t._v(
                                                  "(còn " +
                                                    t._s(t.user_ballot) +
                                                    " hoa)"
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        ),
                      ]
                    )
                  : t._e(),
              ]
            );
          },
          [],
          !1,
          null,
          "24262d7e",
          null
        );
      e.default = f.exports;
    },
    384: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(3),
        i = (n(18), n(1)),
        a = n(40),
        o = n.n(a),
        s = n(20),
        c = n.n(s);
      function l(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function u(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var d = {
          name: "BookAuthor",
          props: ["user_id", "author_id"],
          data: function () {
            return {
              swiperOption: {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: !0,
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },
              },
              defaultAvatarProfile: c.a,
            };
          },
          computed: (function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? l(Object(n), !0).forEach(function (e) {
                    u(t, e, n[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : l(Object(n)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(n, e)
                    );
                  });
            }
            return t;
          })(
            {},
            Object(r.e)("bookAuthor", {
              bookAuthorList: "bookAuthorList",
              bookUploadList: "bookUploadList",
              userUploadInfo: "userUploadInfo",
            })
          ),
          methods: {
            swipeTo: function (t) {
              switch (t) {
                case "next":
                  this.bookUploadSwiper.slideNext();
                  break;
                case "prev":
                  this.bookUploadSwiper.slidePrev();
              }
            },
            getLinkBook: function (t) {
              return t.slug;
            },
            getLinkAuthor: function (t) {
              return "/tac-gia/" + t;
            },
            getPoster: function (t) {
              return get(t, ["poster", "150"]);
            },
            goGrid: function (t) {
              for (var e in t.genres) {
                var n = {
                    genre: e,
                  },
                  r = o.a.stringify(n);
                (r = r ? "?" + r : ""), (window.location = "/truyen" + r);
              }
            },
            getGenresBook: function (t) {
              for (var e in t.genres) return t.genres[e];
            },
            parseSynopsis: function (t) {
              var e = document.createElement("div");
              return (
                (e.innerHTML = t.substring(0, 100) + "..."),
                e.textContent || e.innerText || ""
              );
            },
            getAvatar: function (t) {
              return get(t, ["avatar", 100]);
            },
            getProfileUser: function (t) {
              var e = i.urlPublicProfile + "/" + t;
              window.location.href = e;
            },
          },
          mounted: function () {},
        },
        m = (n(312), n(5)),
        v = Object(m.a)(
          d,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "div",
              {
                staticClass: "col-4",
              },
              [
                t.userUploadInfo
                  ? n(
                      "div",
                      {
                        staticClass: "mb-4 bg-yellow-white rounded-2 p-4",
                      },
                      [
                        n(
                          "div",
                          {
                            staticClass: "nh-avatar nh-avatar--90 mx-auto mb-3",
                            staticStyle: {
                              cursor: "pointer",
                            },
                            on: {
                              click: function (e) {
                                return t.getProfileUser(t.user_id);
                              },
                            },
                          },
                          [
                            t.getAvatar(t.userUploadInfo)
                              ? n("img", {
                                  directives: [
                                    {
                                      name: "lazy",
                                      rawName: "v-lazy",
                                      value: t.getAvatar(t.userUploadInfo),
                                      expression: "getAvatar(userUploadInfo)",
                                    },
                                  ],
                                  staticClass: "img-fluid",
                                  attrs: {
                                    alt: "",
                                  },
                                })
                              : n("img", {
                                  directives: [
                                    {
                                      name: "lazy",
                                      rawName: "v-lazy",
                                      value: t.defaultAvatarProfile,
                                      expression: "defaultAvatarProfile",
                                    },
                                  ],
                                  staticClass: "img-fluid",
                                  attrs: {
                                    alt: "",
                                  },
                                }),
                            t._v(" "),
                            n(
                              "span",
                              {
                                staticClass:
                                  "level bg-danger rounded-3 text-white",
                              },
                              [t._v(t._s(t.userUploadInfo.rank_name))]
                            ),
                          ]
                        ),
                        t._v(" "),
                        n(
                          "div",
                          {
                            staticClass:
                              "h4 py-3 font-weight-semibold text-center",
                          },
                          [
                            t._v(
                              "\n            " +
                                t._s(t.userUploadInfo.name) +
                                "\n        "
                            ),
                          ]
                        ),
                        t._v(" "),
                        n(
                          "div",
                          {
                            staticClass: "row no-gutters text-center",
                          },
                          [
                            n(
                              "div",
                              {
                                staticClass: "col-4",
                              },
                              [
                                n("i", {
                                  staticClass:
                                    "nh-icon icon-book text-primary h4 m-0",
                                }),
                                t._v(" "),
                                n(
                                  "div",
                                  {
                                    staticClass: "my-2",
                                  },
                                  [t._v("Số truyện")]
                                ),
                                t._v(" "),
                                n(
                                  "div",
                                  {
                                    staticClass: "font-weight-semibold h4 mb-0",
                                  },
                                  [t._v(t._s(t.userUploadInfo.book_count))]
                                ),
                              ]
                            ),
                            t._v(" "),
                            n(
                              "div",
                              {
                                staticClass: "col-4",
                              },
                              [
                                n("i", {
                                  staticClass:
                                    "nh-icon icon-layer text-primary h4 m-0",
                                }),
                                t._v(" "),
                                n(
                                  "div",
                                  {
                                    staticClass: "my-2",
                                  },
                                  [t._v("Số chương")]
                                ),
                                t._v(" "),
                                n(
                                  "div",
                                  {
                                    staticClass: "font-weight-semibold h4 mb-0",
                                  },
                                  [t._v(t._s(t.userUploadInfo.chapter_count))]
                                ),
                              ]
                            ),
                            t._v(" "),
                            n(
                              "div",
                              {
                                staticClass: "col-4",
                              },
                              [
                                n("i", {
                                  staticClass:
                                    "nh-icon icon-badge text-primary h4 m-0",
                                }),
                                t._v(" "),
                                n(
                                  "div",
                                  {
                                    staticClass: "my-2",
                                  },
                                  [t._v("Cấp")]
                                ),
                                t._v(" "),
                                n(
                                  "div",
                                  {
                                    staticClass: "font-weight-semibold h4 mb-0",
                                  },
                                  [t._v(t._s(t.userUploadInfo.level))]
                                ),
                              ]
                            ),
                          ]
                        ),
                        t._v(" "),
                        n("hr"),
                        t._v(" "),
                        n(
                          "div",
                          {
                            ref: "jsNhSlider",
                            staticClass: "nh-slider",
                          },
                          [
                            n(
                              "div",
                              {
                                directives: [
                                  {
                                    name: "swiper",
                                    rawName: "v-swiper:bookUploadSwiper",
                                    value: t.swiperOption,
                                    expression: "swiperOption",
                                    arg: "bookUploadSwiper",
                                  },
                                ],
                              },
                              [
                                n(
                                  "div",
                                  {
                                    staticClass: "swiper-wrapper",
                                  },
                                  t._l(t.bookUploadList, function (e, r) {
                                    return n(
                                      "div",
                                      {
                                        key: r,
                                        staticClass: "swiper-slide text-center",
                                        staticStyle: {
                                          width: "322px",
                                          "margin-right": "15px",
                                        },
                                      },
                                      [
                                        n(
                                          "a",
                                          {
                                            staticClass:
                                              "nh-thumb nh-thumb--150 shadow",
                                            attrs: {
                                              href: t.getLinkBook(e),
                                              title: "",
                                            },
                                          },
                                          [
                                            n("img", {
                                              staticClass: "img-responsive",
                                              attrs: {
                                                src: t.getPoster(e),
                                                alt: e.name,
                                              },
                                            }),
                                          ]
                                        ),
                                        t._v(" "),
                                        n(
                                          "h2",
                                          {
                                            staticClass: "h5 mb-2 mt-4",
                                          },
                                          [
                                            n(
                                              "a",
                                              {
                                                attrs: {
                                                  href: t.getLinkBook(e),
                                                  title: "",
                                                },
                                              },
                                              [t._v(t._s(e.name))]
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        n(
                                          "div",
                                          {
                                            staticClass: "text-secondary mb-2",
                                          },
                                          [
                                            t._v(
                                              "\n                            " +
                                                t._s(
                                                  t.parseSynopsis(e.synopsis)
                                                ) +
                                                "\n                        "
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        n(
                                          "span",
                                          {
                                            staticClass:
                                              "d-inline-block border border-primary small px-2 text-primary",
                                            staticStyle: {
                                              cursor: "pointer",
                                            },
                                            on: {
                                              click: function (n) {
                                                return t.goGrid(e);
                                              },
                                            },
                                          },
                                          [t._v(t._s(t.getGenresBook(e)))]
                                        ),
                                      ]
                                    );
                                  }),
                                  0
                                ),
                                t._v(" "),
                                n(
                                  "div",
                                  {
                                    staticClass:
                                      "swiper-button-prev d-flex align-items-center justify-content-center",
                                    attrs: {
                                      "aria-label": "Previous slide",
                                    },
                                    on: {
                                      click: function (e) {
                                        return t.swipeTo("prev");
                                      },
                                    },
                                  },
                                  [
                                    n("i", {
                                      staticClass: "nh-icon icon-prev",
                                    }),
                                  ]
                                ),
                                t._v(" "),
                                n(
                                  "div",
                                  {
                                    staticClass:
                                      "swiper-button-next d-flex align-items-center justify-content-center",
                                    attrs: {
                                      "aria-label": "Next slide",
                                    },
                                    on: {
                                      click: function (e) {
                                        return t.swipeTo("next");
                                      },
                                    },
                                  },
                                  [
                                    n("i", {
                                      staticClass: "nh-icon icon-next",
                                    }),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        ),
                      ]
                    )
                  : t._e(),
                t._v(" "),
                n(
                  "section",
                  {
                    staticClass: "nh-section",
                    attrs: {
                      id: "bookAuthor",
                    },
                  },
                  [
                    n(
                      "div",
                      {
                        staticClass: "d-flex py-1 border-bottom mb-2",
                      },
                      [
                        n(
                          "h2",
                          {
                            staticClass: "h4 m-0 py-2",
                          },
                          [t._v("\n                Cùng tác giả\n            ")]
                        ),
                        t._v(" "),
                        n(
                          "a",
                          {
                            staticClass: "mt-2 ml-auto text-primary",
                            attrs: {
                              href: t.getLinkAuthor(t.author_id),
                            },
                          },
                          [t._v("\n                Xem tất cả\n            ")]
                        ),
                      ]
                    ),
                    t._v(" "),
                    n(
                      "ul",
                      {
                        staticClass: "list-unstyled m-0",
                      },
                      t._l(t.bookAuthorList, function (e, r) {
                        return n(
                          "li",
                          {
                            key: r,
                            staticClass: "media align-items-center py-2 mb-1",
                          },
                          [
                            n(
                              "a",
                              {
                                staticClass:
                                  "nh-thumb nh-thumb--32 shadow mr-3",
                                attrs: {
                                  href: t.getLinkBook(e),
                                },
                              },
                              [
                                n("img", {
                                  directives: [
                                    {
                                      name: "lazy",
                                      rawName: "v-lazy",
                                      value: t.getPoster(e),
                                      expression: "getPoster(book)",
                                    },
                                  ],
                                  attrs: {
                                    alt: e.name,
                                    width: "32",
                                  },
                                }),
                              ]
                            ),
                            t._v(" "),
                            n(
                              "div",
                              {
                                staticClass: "media-body",
                              },
                              [
                                n(
                                  "h2",
                                  {
                                    staticClass: "fz-body mb-1",
                                  },
                                  [
                                    n(
                                      "a",
                                      {
                                        attrs: {
                                          href: t.getLinkBook(e),
                                        },
                                      },
                                      [
                                        t._v(
                                          "\n                            " +
                                            t._s(e.name) +
                                            "\n                        "
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                n(
                                  "div",
                                  {
                                    staticClass:
                                      "text-secondary d-flex align-items-center small",
                                  },
                                  [
                                    n("i", {
                                      staticClass: "nh-icon icon-book mr-2",
                                    }),
                                    t._v(
                                      "\n                        " +
                                        t._s(t.getGenresBook(e)) +
                                        "\n                    "
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        );
                      }),
                      0
                    ),
                  ]
                ),
              ]
            );
          },
          [],
          !1,
          null,
          "3807dc18",
          null
        );
      e.default = v.exports;
    },
    385: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(0),
        i = n.n(r),
        a = n(3),
        o = n(63),
        s = n(1),
        c = n(26),
        l = n.n(c),
        u = n(20),
        d = n.n(u),
        m = n(157),
        v = n.n(m),
        f = n(158),
        p = n.n(f),
        h = n(159),
        W = n.n(h),
        g = n(160),
        b = n.n(g),
        k = n(161),
        C = n.n(k),
        w = n(162),
        _ = n.n(w),
        y = n(163),
        x = n.n(y),
        O = n(164),
        P = n.n(O),
        S = n(165),
        j = n.n(S),
        R = n(166),
        G = n.n(R),
        N = n(167),
        I = n.n(N);
      function B(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return L(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (!t) return;
            if ("string" == typeof t) return L(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(t);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return L(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function L(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function U(t, e, n, r, i, a, o) {
        try {
          var s = t[a](o),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, i);
      }
      function q(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, i) {
            var a = t.apply(e, n);
            function o(t) {
              U(a, r, i, o, s, "next", t);
            }
            function s(t) {
              U(a, r, i, o, s, "throw", t);
            }
            o(void 0);
          });
        };
      }
      function V(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function E(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var z = {
          name: "BookFan",
          props: ["book_id"],
          data: function () {
            return {
              spinnerFan: !1,
              topFan: [],
              fanList: [],
              pageCount: 1,
              pageFilter: "1",
              pageCurrent: 1,
              fanTotal: 0,
              userInfoFan: {
                my_score: 0,
                my_level: 0,
              },
              pageLimit: 20,
              defaultAvatarProfile: d.a,
              tag1: v.a,
              tag2: p.a,
              tag3: W.a,
              tag4: b.a,
              tag5: C.a,
              tag6: _.a,
              tag7: x.a,
              tag8: P.a,
              tag9: j.a,
              tag10: G.a,
              tag11: I.a,
            };
          },
          computed: (function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? V(Object(n), !0).forEach(function (e) {
                    E(t, e, n[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : V(Object(n)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(n, e)
                    );
                  });
            }
            return t;
          })({}, Object(a.c)(["isLoggedIn"])),
          components: {
            paginate: l.a,
          },
          methods: {
            clickCallback: function (t) {
              var e = this;
              return q(
                i.a.mark(function n() {
                  return i.a.wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          (e.pageFilter = t),
                            (e.pageCurrent = parseInt(t, 10)),
                            e.init();
                        case 3:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              )();
            },
            init: function () {
              var t = arguments,
                e = this;
              return q(
                i.a.mark(function n() {
                  var r, a, s;
                  return i.a.wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (r = t.length > 0 && void 0 !== t[0] && t[0]),
                            (a = {
                              book_id: e.book_id,
                              page: e.pageCurrent,
                              limit: e.pageLimit,
                            }),
                            (e.spinnerFan = !0),
                            (n.next = 5),
                            Object(o.a)(a, r)
                          );
                        case 5:
                          (s = n.sent),
                            (e.spinnerFan = !1),
                            (e.fanList = B(s.data._data)),
                            (e.fanTotal = s.data._extra._pagination._total),
                            (e.pageCount = s.data._extra._pagination._last),
                            (e.limit = s.data._extra._pagination._limit),
                            e.isLoggedIn &&
                              ((e.userInfoFan.my_level = get(
                                s,
                                ["data", "_extra", "user", "my_level"],
                                0
                              )),
                              (e.userInfoFan.my_score = get(
                                s,
                                ["data", "_extra", "user", "my_score"],
                                0
                              )));
                        case 12:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              )();
            },
            getAvatar: function (t) {
              return get(t, ["avatar", 100]);
            },
            getProfileUser: function (t) {
              var e = s.urlPublicProfile + "/" + t;
              window.location.href = e;
            },
            styleIcon: function (t) {
              var e = 10 * (this.pageCurrent - 1) + t + 1;
              return e > 4 ? "index-" + e : "index-icon--" + e;
            },
          },
          mounted: function () {
            var t = this;
            EventBus.$on("fanList", function () {
              t.init();
            });
          },
        },
        D = n(5),
        K = Object(D.a)(
          z,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "div",
              {
                attrs: {
                  id: "nav-fan",
                },
              },
              [
                n(
                  "section",
                  {
                    staticClass: "nh-section mb-5",
                  },
                  [
                    t._m(0),
                    t._v(" "),
                    t.spinnerFan
                      ? n("v-spinner")
                      : n(
                          "div",
                          {
                            staticClass: "row list-ranking",
                          },
                          [
                            t.fanList.length
                              ? t._l(t.fanList, function (e, r) {
                                  return n(
                                    "div",
                                    {
                                      key: r,
                                      staticClass: "col-3",
                                    },
                                    [
                                      n(
                                        "div",
                                        {
                                          staticClass:
                                            "item item-featured border-bottom",
                                        },
                                        [
                                          n(
                                            "div",
                                            {
                                              staticClass: "index",
                                              class: t.styleIcon(r),
                                            },
                                            [
                                              (t.pageCurrent - 1) *
                                                t.pageLimit +
                                                r <
                                              4
                                                ? n(
                                                    "span",
                                                    {
                                                      staticClass: "index-icon",
                                                      class: t.styleIcon(r),
                                                    },
                                                    [
                                                      t._v(
                                                        t._s(
                                                          (t.pageCurrent - 1) *
                                                            t.pageLimit +
                                                            r +
                                                            1
                                                        )
                                                      ),
                                                    ]
                                                  )
                                                : n("span", [
                                                    t._v(
                                                      t._s(
                                                        (t.pageCurrent - 1) *
                                                          t.pageLimit +
                                                          r +
                                                          1
                                                      )
                                                    ),
                                                  ]),
                                            ]
                                          ),
                                          t._v(" "),
                                          n(
                                            "div",
                                            {
                                              staticClass:
                                                "content media align-items-center py-2",
                                              staticStyle: {
                                                cursor: "pointer",
                                              },
                                              on: {
                                                click: function (n) {
                                                  return t.getProfileUser(e.id);
                                                },
                                              },
                                            },
                                            [
                                              n(
                                                "a",
                                                {
                                                  staticClass:
                                                    "nh-thumb nh-thumb--1x1 nh-thumb--50 rounded-circle mr-2",
                                                  attrs: {
                                                    href: "javascript:void(0)",
                                                  },
                                                },
                                                [
                                                  t.getAvatar(e)
                                                    ? n("img", {
                                                        directives: [
                                                          {
                                                            name: "lazy",
                                                            rawName: "v-lazy",
                                                            value:
                                                              t.getAvatar(e),
                                                            expression:
                                                              "getAvatar(fanInfo)",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "img-fluid",
                                                        attrs: {
                                                          alt: "",
                                                        },
                                                      })
                                                    : n("img", {
                                                        directives: [
                                                          {
                                                            name: "lazy",
                                                            rawName: "v-lazy",
                                                            value:
                                                              t.defaultAvatarDefault,
                                                            expression:
                                                              "defaultAvatarDefault",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "img-fluid",
                                                        attrs: {
                                                          alt: "",
                                                        },
                                                      }),
                                                ]
                                              ),
                                              t._v(" "),
                                              n(
                                                "div",
                                                {
                                                  staticClass:
                                                    "media-body py-2 pl-1",
                                                },
                                                [
                                                  n(
                                                    "h2",
                                                    {
                                                      staticClass:
                                                        "fz-body font-weight-normal text-overflow-1-lines mb-2",
                                                    },
                                                    [
                                                      n(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "d-block",
                                                          attrs: {
                                                            href: "javascript:void(0)",
                                                          },
                                                        },
                                                        [t._v(t._s(e.name))]
                                                      ),
                                                    ]
                                                  ),
                                                  t._v(" "),
                                                  n(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "d-flex align-items-center text-tertiary",
                                                    },
                                                    [
                                                      t._v(
                                                        "\n                                " +
                                                          t._s(
                                                            e.level_fan_name
                                                          ) +
                                                          "\n                            "
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]
                                  );
                                })
                              : n(
                                  "div",
                                  {
                                    staticClass: "col-12",
                                  },
                                  [
                                    n("span", [
                                      t._v(
                                        "Hiện chưa có ai hâm mộ cuốn sách này, hãy tặng hoa, tặng quà hoặc mở khóa chương để trở thành người hâm mộ của bộ truyện nhé bạn."
                                      ),
                                    ]),
                                  ]
                                ),
                          ],
                          2
                        ),
                  ],
                  1
                ),
                t._v(" "),
                t.pageCount > 1
                  ? n(
                      "nav",
                      {
                        staticClass: "d-flex justify-content-end",
                        attrs: {
                          "aria-label": "Pagination",
                        },
                      },
                      [
                        n("paginate", {
                          attrs: {
                            "page-count": t.pageCount,
                            "page-range": 3,
                            "margin-pages": 2,
                            "click-handler": t.clickCallback,
                            "prev-text": "<",
                            "next-text": ">",
                            "container-class": "pagination pagination-sm",
                            "page-class": "page-item",
                            "page-link-class": "page-link rounded",
                            "prev-link-class": "page-link rounded",
                            "next-link-class": "page-link rounded",
                          },
                          model: {
                            value: t.pageCurrent,
                            callback: function (e) {
                              t.pageCurrent = e;
                            },
                            expression: "pageCurrent",
                          },
                        }),
                        t._v(" "),
                        t.pageCount > 1
                          ? n(
                              "div",
                              {
                                staticClass: "input-jump-to ml-3",
                              },
                              [
                                n("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: t.pageFilter,
                                      expression: "pageFilter",
                                    },
                                  ],
                                  staticClass:
                                    "form-control form-control-sm float-left mr-2",
                                  attrs: {
                                    type: "text",
                                    placeholder: "Trang",
                                    "aria-label": "Trang",
                                    "aria-describedby": "jump-to-page",
                                  },
                                  domProps: {
                                    value: t.pageFilter,
                                  },
                                  on: {
                                    keyup: function (e) {
                                      return !e.type.indexOf("key") &&
                                        t._k(
                                          e.keyCode,
                                          "enter",
                                          13,
                                          e.key,
                                          "Enter"
                                        )
                                        ? null
                                        : t.clickCallback(t.pageFilter);
                                    },
                                    input: function (e) {
                                      e.target.composing ||
                                        (t.pageFilter = e.target.value);
                                    },
                                  },
                                }),
                                t._v(" "),
                                n(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-outline-primary btn-sm",
                                    attrs: {
                                      type: "button",
                                      id: "jump-to-page",
                                    },
                                    on: {
                                      click: function (e) {
                                        return t.clickCallback(t.pageFilter);
                                      },
                                    },
                                  },
                                  [t._v("Go")]
                                ),
                              ]
                            )
                          : t._e(),
                      ],
                      1
                    )
                  : t._e(),
                t._v(" "),
                n(
                  "section",
                  {
                    staticClass: "nh-section",
                  },
                  [
                    t._m(1),
                    t._v(" "),
                    t._m(2),
                    t._v(" "),
                    t._m(3),
                    t._v(" "),
                    n(
                      "div",
                      {
                        staticClass: "mb-4",
                      },
                      [
                        n(
                          "div",
                          {
                            staticClass: "h6 mb-2",
                          },
                          [t._v("Ba, điểm hâm mộ hiện tại của tôi?")]
                        ),
                        t._v(" "),
                        t.isLoggedIn
                          ? n(
                              "p",
                              {
                                staticClass: "mb-0",
                              },
                              [
                                t._v("\n                · Bạn đang có "),
                                n("strong", [
                                  t._v(t._s(t.userInfoFan.my_score)),
                                ]),
                                t._v(" điểm hâm mộ, xếp hạng "),
                                n("strong", [
                                  t._v(t._s(t.userInfoFan.my_level)),
                                ]),
                              ]
                            )
                          : n(
                              "p",
                              {
                                staticClass: "mb-0",
                              },
                              [
                                t._v(
                                  "\n                Bạn cần đăng nhập mới xem được điểm hâm mộ và xếp hạng của mình\n            "
                                ),
                              ]
                            ),
                      ]
                    ),
                    t._v(" "),
                    n(
                      "div",
                      {
                        staticClass: "mb-4",
                      },
                      [
                        n(
                          "div",
                          {
                            staticClass: "h6 mb-3",
                          },
                          [t._v("Bốn, đẳng cấp cùng xưng hào?")]
                        ),
                        t._v(" "),
                        n(
                          "table",
                          {
                            staticClass:
                              "table table-borderless border-top border-bottom",
                          },
                          [
                            n("tbody", [
                              n("tr", [
                                n(
                                  "td",
                                  {
                                    staticClass: "pl-0",
                                  },
                                  [t._v("Đẳng cấp")]
                                ),
                                t._v(" "),
                                n(
                                  "td",
                                  {
                                    staticClass: "align-middle py-2",
                                  },
                                  [
                                    n("img", {
                                      directives: [
                                        {
                                          name: "lazy",
                                          rawName: "v-lazy",
                                          value: t.tag1,
                                          expression: "tag1",
                                        },
                                      ],
                                      attrs: {
                                        alt: "",
                                        height: "20",
                                      },
                                    }),
                                  ]
                                ),
                                t._v(" "),
                                n(
                                  "td",
                                  {
                                    staticClass: "align-middle py-2",
                                  },
                                  [
                                    n("img", {
                                      directives: [
                                        {
                                          name: "lazy",
                                          rawName: "v-lazy",
                                          value: t.tag2,
                                          expression: "tag2",
                                        },
                                      ],
                                      attrs: {
                                        alt: "",
                                        height: "20",
                                      },
                                    }),
                                  ]
                                ),
                                t._v(" "),
                                n(
                                  "td",
                                  {
                                    staticClass: "align-middle py-2",
                                  },
                                  [
                                    n("img", {
                                      directives: [
                                        {
                                          name: "lazy",
                                          rawName: "v-lazy",
                                          value: t.tag3,
                                          expression: "tag3",
                                        },
                                      ],
                                      attrs: {
                                        alt: "",
                                        height: "20",
                                      },
                                    }),
                                  ]
                                ),
                                t._v(" "),
                                n(
                                  "td",
                                  {
                                    staticClass: "align-middle py-2",
                                  },
                                  [
                                    n("img", {
                                      directives: [
                                        {
                                          name: "lazy",
                                          rawName: "v-lazy",
                                          value: t.tag4,
                                          expression: "tag4",
                                        },
                                      ],
                                      attrs: {
                                        alt: "",
                                        height: "20",
                                      },
                                    }),
                                  ]
                                ),
                                t._v(" "),
                                n(
                                  "td",
                                  {
                                    staticClass: "align-middle py-2",
                                  },
                                  [
                                    n("img", {
                                      directives: [
                                        {
                                          name: "lazy",
                                          rawName: "v-lazy",
                                          value: t.tag5,
                                          expression: "tag5",
                                        },
                                      ],
                                      attrs: {
                                        alt: "",
                                        height: "20",
                                      },
                                    }),
                                  ]
                                ),
                                t._v(" "),
                                n(
                                  "td",
                                  {
                                    staticClass: "align-middle py-2",
                                  },
                                  [
                                    n("img", {
                                      directives: [
                                        {
                                          name: "lazy",
                                          rawName: "v-lazy",
                                          value: t.tag6,
                                          expression: "tag6",
                                        },
                                      ],
                                      attrs: {
                                        alt: "",
                                        height: "20",
                                      },
                                    }),
                                  ]
                                ),
                                t._v(" "),
                                n(
                                  "td",
                                  {
                                    staticClass: "align-middle py-2",
                                  },
                                  [
                                    n("img", {
                                      directives: [
                                        {
                                          name: "lazy",
                                          rawName: "v-lazy",
                                          value: t.tag7,
                                          expression: "tag7",
                                        },
                                      ],
                                      attrs: {
                                        alt: "",
                                        height: "20",
                                      },
                                    }),
                                  ]
                                ),
                                t._v(" "),
                                n(
                                  "td",
                                  {
                                    staticClass: "align-middle py-2",
                                  },
                                  [
                                    n("img", {
                                      directives: [
                                        {
                                          name: "lazy",
                                          rawName: "v-lazy",
                                          value: t.tag8,
                                          expression: "tag8",
                                        },
                                      ],
                                      attrs: {
                                        alt: "",
                                        height: "20",
                                      },
                                    }),
                                  ]
                                ),
                                t._v(" "),
                                n(
                                  "td",
                                  {
                                    staticClass: "align-middle py-2",
                                  },
                                  [
                                    n("img", {
                                      directives: [
                                        {
                                          name: "lazy",
                                          rawName: "v-lazy",
                                          value: t.tag9,
                                          expression: "tag9",
                                        },
                                      ],
                                      attrs: {
                                        alt: "",
                                        height: "20",
                                      },
                                    }),
                                  ]
                                ),
                                t._v(" "),
                                n(
                                  "td",
                                  {
                                    staticClass: "align-middle py-2",
                                  },
                                  [
                                    n("img", {
                                      directives: [
                                        {
                                          name: "lazy",
                                          rawName: "v-lazy",
                                          value: t.tag10,
                                          expression: "tag10",
                                        },
                                      ],
                                      attrs: {
                                        alt: "",
                                        height: "20",
                                      },
                                    }),
                                  ]
                                ),
                                t._v(" "),
                                n(
                                  "td",
                                  {
                                    staticClass: "align-middle py-2",
                                  },
                                  [
                                    n("img", {
                                      directives: [
                                        {
                                          name: "lazy",
                                          rawName: "v-lazy",
                                          value: t.tag11,
                                          expression: "tag11",
                                        },
                                      ],
                                      attrs: {
                                        alt: "",
                                        height: "20",
                                      },
                                    }),
                                  ]
                                ),
                              ]),
                              t._v(" "),
                              t._m(4),
                            ]),
                          ]
                        ),
                      ]
                    ),
                  ]
                ),
              ]
            );
          },
          [
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e(
                "div",
                {
                  staticClass: "d-flex align-items-center mb-3",
                },
                [
                  e(
                    "h2",
                    {
                      staticClass: "h4 mb-0",
                    },
                    [
                      this._v(
                        "\n                Người hâm mộ hàng đầu\n            "
                      ),
                    ]
                  ),
                ]
              );
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e(
                "div",
                {
                  staticClass: "d-flex align-items-center mb-3",
                },
                [
                  e(
                    "h2",
                    {
                      staticClass: "h4 mb-0",
                    },
                    [this._v("\n                Hướng dẫn\n            ")]
                  ),
                ]
              );
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e(
                "div",
                {
                  staticClass: "mb-4",
                },
                [
                  e(
                    "div",
                    {
                      staticClass: "h6 mb-2",
                    },
                    [this._v("Một, làm sao trở thành người hâm mộ?")]
                  ),
                  this._v(" "),
                  e(
                    "p",
                    {
                      staticClass: "mb-0",
                    },
                    [
                      this._v(
                        "\n                · Khi bạn tặng hoa, tặng quà cho truyện hoặc trả phí đọc truyện, bạn trở thành người hâm mộ của truyện.\n            "
                      ),
                    ]
                  ),
                ]
              );
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e(
                "div",
                {
                  staticClass: "mb-4",
                },
                [
                  e(
                    "div",
                    {
                      staticClass: "h6 mb-2",
                    },
                    [this._v("Hai, cách tính điểm hâm mộ?")]
                  ),
                  this._v(" "),
                  e(
                    "p",
                    {
                      staticClass: "mb-0",
                    },
                    [
                      this._v(
                        "· Tiêu xài 1 Kẹo = 1 điểm hâm mộ (trả phí đọc, tặng quà)"
                      ),
                    ]
                  ),
                  this._v(" "),
                  e(
                    "p",
                    {
                      staticClass: "mb-0",
                    },
                    [this._v("· Tặng 1 Hoa = 1000 điểm hâm mộ")]
                  ),
                ]
              );
            },
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n("tr", [
                n(
                  "td",
                  {
                    staticClass: "pl-0",
                  },
                  [t._v("Điểm hâm mộ")]
                ),
                t._v(" "),
                n(
                  "td",
                  {
                    staticClass: "align-middle py-2",
                  },
                  [
                    t._v(
                      "\n                        1000000\n                    "
                    ),
                  ]
                ),
                t._v(" "),
                n(
                  "td",
                  {
                    staticClass: "align-middle py-2",
                  },
                  [
                    t._v(
                      "\n                        700000\n                    "
                    ),
                  ]
                ),
                t._v(" "),
                n(
                  "td",
                  {
                    staticClass: "align-middle py-2",
                  },
                  [
                    t._v(
                      "\n                        500000\n                    "
                    ),
                  ]
                ),
                t._v(" "),
                n(
                  "td",
                  {
                    staticClass: "align-middle py-2",
                  },
                  [
                    t._v(
                      "\n                        400000\n                    "
                    ),
                  ]
                ),
                t._v(" "),
                n(
                  "td",
                  {
                    staticClass: "align-middle py-2",
                  },
                  [
                    t._v(
                      "\n                        300000\n                    "
                    ),
                  ]
                ),
                t._v(" "),
                n(
                  "td",
                  {
                    staticClass: "align-middle py-2",
                  },
                  [
                    t._v(
                      "\n                        200000\n                    "
                    ),
                  ]
                ),
                t._v(" "),
                n(
                  "td",
                  {
                    staticClass: "align-middle py-2",
                  },
                  [
                    t._v(
                      "\n                        100000\n                    "
                    ),
                  ]
                ),
                t._v(" "),
                n(
                  "td",
                  {
                    staticClass: "align-middle py-2",
                  },
                  [
                    t._v(
                      "\n                        50000\n                    "
                    ),
                  ]
                ),
                t._v(" "),
                n(
                  "td",
                  {
                    staticClass: "align-middle py-2",
                  },
                  [
                    t._v(
                      "\n                        20000\n                    "
                    ),
                  ]
                ),
                t._v(" "),
                n(
                  "td",
                  {
                    staticClass: "align-middle py-2",
                  },
                  [t._v("\n                        5000\n                    ")]
                ),
                t._v(" "),
                n(
                  "td",
                  {
                    staticClass: "align-middle py-2",
                  },
                  [t._v("\n                        0\n                    ")]
                ),
              ]);
            },
          ],
          !1,
          null,
          "3c0febee",
          null
        );
      e.default = K.exports;
    },
    386: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(3);
      function i(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function a(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var o = {
          name: "BookReaction",
          props: ["book_id"],
          computed: (function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? i(Object(n), !0).forEach(function (e) {
                    a(t, e, n[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : i(Object(n)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(n, e)
                    );
                  });
            }
            return t;
          })(
            {},
            Object(r.e)("bookRank", {
              reaction: "reaction",
            })
          ),
        },
        s = n(5),
        c = Object(s.a)(
          o,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "ul",
              {
                staticClass: "list-unstyled m-0 d-flex flex-wrap",
              },
              [
                n(
                  "li",
                  {
                    staticClass: "d-flex align-items-center mr-4",
                  },
                  [
                    n("i", {
                      staticClass: "svg-icon icon-react-love mr-2",
                    }),
                    t._v(t._s(t.reaction.love) + "\n    "),
                  ]
                ),
                t._v(" "),
                n(
                  "li",
                  {
                    staticClass: "d-flex align-items-center mr-4",
                  },
                  [
                    n("i", {
                      staticClass: "svg-icon icon-react-like mr-2",
                    }),
                    t._v(t._s(t.reaction.like) + "\n    "),
                  ]
                ),
                t._v(" "),
                n(
                  "li",
                  {
                    staticClass: "d-flex align-items-center mr-4",
                  },
                  [
                    n("i", {
                      staticClass: "svg-icon icon-react-fun mr-2",
                    }),
                    t._v(t._s(t.reaction.laugh) + "\n    "),
                  ]
                ),
                t._v(" "),
                n(
                  "li",
                  {
                    staticClass: "d-flex align-items-center mr-4",
                  },
                  [
                    n("i", {
                      staticClass: "svg-icon icon-react-sad mr-2",
                    }),
                    t._v(t._s(t.reaction.cry) + "\n    "),
                  ]
                ),
                t._v(" "),
                n(
                  "li",
                  {
                    staticClass: "d-flex align-items-center mr-4",
                  },
                  [
                    n("i", {
                      staticClass: "svg-icon icon-react-angry mr-2",
                    }),
                    t._v(t._s(t.reaction.angry) + "\n    "),
                  ]
                ),
                t._v(" "),
                n(
                  "li",
                  {
                    staticClass: "d-flex align-items-center mr-4",
                  },
                  [
                    n("i", {
                      staticClass: "svg-icon icon-react-attack mr-2",
                    }),
                    t._v(t._s(t.reaction.sword) + "\n    "),
                  ]
                ),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = c.exports;
    },
    387: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(0),
        i = n.n(r),
        a = (n(25), n(3));
      function o(t, e, n, r, i, a, o) {
        try {
          var s = t[a](o),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, i);
      }
      function s(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? s(Object(n), !0).forEach(function (e) {
                l(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function l(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var u = {
          name: "bookNominee",
          props: ["book_id"],
          computed: c(
            {},
            Object(a.e)("bookRank", {
              book: "book",
            })
          ),
          methods: c({}, Object(a.b)("bookRank", ["loadBookRank"])),
          created: function () {
            var t,
              e = this;
            return ((t = i.a.mark(function t() {
              return i.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      EventBus.$on("book.voted", function () {
                        e.loadBookRank(e.book_id);
                      });
                    case 1:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })),
            function () {
              var e = this,
                n = arguments;
              return new Promise(function (r, i) {
                var a = t.apply(e, n);
                function s(t) {
                  o(a, r, i, s, c, "next", t);
                }
                function c(t) {
                  o(a, r, i, s, c, "throw", t);
                }
                s(void 0);
              });
            })();
          },
        },
        d = n(5),
        m = Object(d.a)(
          u,
          function () {
            var t = this.$createElement,
              e = this._self._c || t;
            return e(
              "div",
              {
                staticClass: "media",
              },
              [
                e(
                  "div",
                  {
                    staticClass: "media-body",
                  },
                  [
                    e(
                      "div",
                      {
                        staticClass: "d-flex align-items-center mb-0",
                      },
                      [
                        e("i", {
                          staticClass: "svg-icon icon-flower mr-3 ml-2",
                        }),
                        this._v(" " + this._s(this.book.amount) + "\n        "),
                      ]
                    ),
                  ]
                ),
                this._v(" "),
                e(
                  "div",
                  {
                    staticClass: "font-weight-semibold pl-3",
                  },
                  [this._v("No. " + this._s(this.book.rank))]
                ),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = m.exports;
    },
    388: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(0),
        i = n.n(r),
        a = n(11),
        o = n(1);
      function s(t, e, n, r, i, a, o) {
        try {
          var s = t[a](o),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, i);
      }
      var c = {
          name: "ChapterUnlock",
          data: function () {
            return {
              active: !1,
              user_balance: 0,
              unlock_price: 0,
              spinner: !1,
              book_id: null,
              chapter_id: null,
            };
          },
          methods: {
            close: function () {
              this.active = !1;
            },
            show: function () {
              this.active = !0;
            },
            unlockChapter: function () {
              var t,
                e = this;
              return ((t = i.a.mark(function t() {
                var n, r;
                return i.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (!(e.user_balance < e.unlock_price)) {
                            t.next = 4;
                            break;
                          }
                          (window.location.href = o.getPathNav("reward")),
                            (t.next = 17);
                          break;
                        case 4:
                          return (
                            (n = {
                              book_id: e.book_id,
                              chapter_id: e.chapter_id,
                              type: 1,
                            }),
                            (e.spinner = !0),
                            (t.prev = 6),
                            (t.next = 9),
                            Object(a.f)(n)
                          );
                        case 9:
                          (r = t.sent),
                            (e.active = !0 !== r.data._success),
                            (window.location = window.location),
                            (t.next = 16);
                          break;
                        case 14:
                          (t.prev = 14), (t.t0 = t.catch(6));
                        case 16:
                          e.spinner = !1;
                        case 17:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[6, 14]]
                );
              })),
              function () {
                var e = this,
                  n = arguments;
                return new Promise(function (r, i) {
                  var a = t.apply(e, n);
                  function o(t) {
                    s(a, r, i, o, c, "next", t);
                  }
                  function c(t) {
                    s(a, r, i, o, c, "throw", t);
                  }
                  o(void 0);
                });
              })();
            },
            startTransitionModal: function () {
              $("#dialog-backdrop").toggleClass("d-block");
            },
            endTransitionModal: function () {
              $("#dialog-backdrop").toggleClass("show"),
                this.$refs.modal.classList.toggle("show");
            },
          },
          mounted: function () {
            var t = this;
            EventBus.$on("unlock_chapter", function (e) {
              (t.chapter_id = e.chapter_id),
                (t.active = !0),
                (t.book_id = e.book_id),
                (t.user_balance = e.user_balance),
                (t.unlock_price = e.unlock_price);
            });
          },
        },
        l = n(5),
        u = Object(l.a)(
          c,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "transition",
              {
                on: {
                  enter: t.startTransitionModal,
                  "after-enter": t.endTransitionModal,
                  "before-leave": t.endTransitionModal,
                  "after-leave": t.startTransitionModal,
                },
              },
              [
                t.active
                  ? n(
                      "div",
                      {
                        ref: "modal",
                        staticClass: "modal fade",
                        staticStyle: {
                          "padding-right": "17px",
                          display: "block",
                        },
                        attrs: {
                          id: "unlockChapter",
                          tabindex: "-1",
                          role: "dialog",
                          "aria-labelledby": "reportBookTitle",
                          "aria-modal": "true",
                        },
                      },
                      [
                        n(
                          "div",
                          {
                            staticClass: "modal-dialog modal-dialog-scrollable",
                            attrs: {
                              role: "document",
                            },
                          },
                          [
                            n(
                              "div",
                              {
                                staticClass: "modal-content",
                              },
                              [
                                n(
                                  "div",
                                  {
                                    staticClass: "modal-header",
                                  },
                                  [
                                    n(
                                      "h5",
                                      {
                                        staticClass: "modal-title",
                                        attrs: {
                                          id: "unlockChapterTitle",
                                        },
                                      },
                                      [t._v("Mở khóa chương truyện")]
                                    ),
                                    t._v(" "),
                                    n(
                                      "button",
                                      {
                                        staticClass: "close",
                                        attrs: {
                                          type: "button",
                                          "data-dismiss": "modal",
                                          "aria-label": "Close",
                                        },
                                        on: {
                                          click: t.close,
                                        },
                                      },
                                      [
                                        n(
                                          "span",
                                          {
                                            attrs: {
                                              "aria-hidden": "true",
                                            },
                                          },
                                          [t._v("×")]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                n(
                                  "div",
                                  {
                                    staticClass: "modal-body",
                                  },
                                  [
                                    n(
                                      "div",
                                      {
                                        staticClass: "form-check my-3",
                                      },
                                      [
                                        n(
                                          "label",
                                          {
                                            staticClass:
                                              "form-check-label cursor-pointer",
                                          },
                                          [
                                            t._v(
                                              "\n              Hiện bạn đang có " +
                                                t._s(t.user_balance) +
                                                " Kẹo\n            "
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    n(
                                      "div",
                                      {
                                        staticClass: "form-check my-3",
                                      },
                                      [
                                        t.user_balance < t.unlock_price
                                          ? n(
                                              "label",
                                              {
                                                staticClass:
                                                  "form-check-label cursor-pointer",
                                              },
                                              [
                                                t._v(
                                                  "\n              Bạn sẽ cần " +
                                                    t._s(t.unlock_price) +
                                                    " Kẹo để mở khóa Chương này. "
                                                ),
                                                n("strong", [
                                                  t._v(
                                                    "Số Kẹo hiện tại của bạn không đủ để mở khóa\n              Chương này, hãy làm nhiệm vụ hoặc mua Kẹo để có thêm Kẹo nhé."
                                                  ),
                                                ]),
                                              ]
                                            )
                                          : n(
                                              "label",
                                              {
                                                staticClass:
                                                  "form-check-label cursor-pointer",
                                              },
                                              [
                                                t._v(
                                                  "\n              Bạn sẽ cần " +
                                                    t._s(t.unlock_price) +
                                                    " Kẹo để mở khóa Chương này. "
                                                ),
                                                n("strong", [
                                                  t._v(
                                                    "Bạn có muốn mở khóa Chương này\n              không?"
                                                  ),
                                                ]),
                                              ]
                                            ),
                                      ]
                                    ),
                                    t._v(" "),
                                    n(
                                      "div",
                                      {
                                        staticClass: "form-check my-1",
                                      },
                                      [
                                        t.spinner
                                          ? n(
                                              "a",
                                              {
                                                staticClass:
                                                  "btn btn-primary btn-md btn-block btn-shadow font-weight-semibold d-flex align-items-center justify-content-center",
                                                attrs: {
                                                  href: "javascript:void(0);",
                                                  disabled: t.spinner,
                                                },
                                              },
                                              [
                                                n("v-spinner", {
                                                  attrs: {
                                                    amount: "1",
                                                    show: "spinner",
                                                  },
                                                }),
                                              ],
                                              1
                                            )
                                          : t._e(),
                                        t._v(" "),
                                        t.spinner
                                          ? t._e()
                                          : n(
                                              "a",
                                              {
                                                staticClass:
                                                  "text-white d-inline-flex align-items-center btn btn-primary btn-md mr-2",
                                                attrs: {
                                                  href: "javascript:void(0);",
                                                  disabled: t.spinner,
                                                },
                                                on: {
                                                  click: function (e) {
                                                    return t.unlockChapter();
                                                  },
                                                },
                                              },
                                              [
                                                t._v(
                                                  "\n              Có\n            "
                                                ),
                                              ]
                                            ),
                                        t._v(" "),
                                        t.spinner
                                          ? t._e()
                                          : n(
                                              "a",
                                              {
                                                staticClass:
                                                  "text-white d-inline-flex align-items-center btn btn-primary btn-md",
                                                attrs: {
                                                  href: "javascript:void(0);",
                                                  disabled: t.spinner,
                                                },
                                                on: {
                                                  click: function (e) {
                                                    return t.close();
                                                  },
                                                },
                                              },
                                              [
                                                t._v(
                                                  "\n              Không\n            "
                                                ),
                                              ]
                                            ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        ),
                      ]
                    )
                  : t._e(),
              ]
            );
          },
          [],
          !1,
          null,
          "70263054",
          null
        );
      e.default = u.exports;
    },
    389: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(0),
        i = n.n(r),
        a = n(8),
        o = n(3),
        s = n(7),
        c = n(6),
        l = n(1),
        u = n(2),
        d = n(20),
        m = n.n(d);
      function v(t, e, n, r, i, a, o) {
        try {
          var s = t[a](o),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, i);
      }
      function f(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, i) {
            var a = t.apply(e, n);
            function o(t) {
              v(a, r, i, o, s, "next", t);
            }
            function s(t) {
              v(a, r, i, o, s, "throw", t);
            }
            o(void 0);
          });
        };
      }
      function p(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function h(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? p(Object(n), !0).forEach(function (e) {
                W(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : p(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function W(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var g = {
          name: "ChapterComment",
          props: {
            book_id: {
              type: String,
              required: !0,
            },
            chapter_id: {
              type: String,
              required: !0,
            },
          },
          data: function () {
            return {
              bookId: null,
              chapterId: null,
              spinnerViewComment: !1,
              pageCount: 0,
              commentTotal: 0,
              commentSearch: {
                commentSortBy: "id",
                page: 1,
                limit: 20,
              },
              commentSortList: [
                {
                  id: "like_count",
                  name: "Lượt thích",
                },
                {
                  id: "id",
                  name: "Mới nhất",
                },
                {
                  id: "oldest",
                  name: "Cũ nhất",
                },
              ],
              commentList: [],
              commentActive: !1,
              commentContent: "",
              spinnerReply: !1,
              spinnerComment: !1,
              spinnerViewMoreComment: !1,
              defaultAvatarProfile: m.a,
            };
          },
          computed: h(
            h(
              h({}, Object(o.c)(["isLoggedIn", "userAvatar", "userId"])),
              Object(o.e)({
                userInfo: function (t) {
                  return t.user.userInfo;
                },
                spinnerUser: function (t) {
                  return t.user.spinner;
                },
              })
            ),
            {},
            {
              hasAvatar: function () {
                return !!this.userAvatar;
              },
            }
          ),
          methods: {
            fetchComment: function () {
              var t = arguments,
                e = this;
              return f(
                i.a.mark(function n() {
                  var r, a, o, l, u, d;
                  return i.a.wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            if (
                              (t.length > 0 && void 0 !== t[0] && t[0],
                              (r = t.length > 1 && void 0 !== t[1] && t[1]),
                              (a = t.length > 2 && void 0 !== t[2] && t[2])
                                ? (e.spinnerViewMoreComment = !0)
                                : (e.spinnerViewComment = !0),
                              (n.prev = 4),
                              null === e.bookId)
                            ) {
                              n.next = 18;
                              break;
                            }
                            return (
                              r &&
                                ((e.commentSearch.page = 1),
                                (e.commentList = [])),
                              (o = {
                                book_id: e.bookId,
                                commentable_id: e.chapterId,
                                commentable_type: 1,
                                sort_by: e.commentSearch.commentSortBy,
                                page: e.commentSearch.page,
                                limit: e.commentSearch.limit,
                                order_by: "desc",
                              }),
                              "oldest" === e.commentSearch.commentSortBy &&
                                ((o.sort_by = "id"), (o.order_by = "asc")),
                              (n.next = 11),
                              Object(s.e)(o)
                            );
                          case 11:
                            for (
                              l = n.sent, u = l.data._data, d = 0;
                              d < u.length;
                              d++
                            )
                              (u[d].date = c
                                .extractDateTimeDmy(u[d].created_at)
                                .fromNow()),
                                (u[d].liked = parseInt(u[d].liked, 10)),
                                (u[d].replyComment = !1),
                                (u[d].replyCommentContent = ""),
                                (u[d].viewCommentReplies = !1),
                                (u[d].replies = []),
                                (u[d].isLikeOrDislikeInprogress = !1),
                                (u[d].content = u[d].content.replace(
                                  new RegExp("\n", "g"),
                                  "<br />"
                                ));
                            (e.commentList = e.commentList.concat(u)),
                              (e.commentTotal =
                                l.data._extra._pagination._total),
                              (e.pageCount = l.data._extra._pagination._last),
                              (e.commentActive = !0);
                          case 18:
                            n.next = 22;
                            break;
                          case 20:
                            (n.prev = 20), (n.t0 = n.catch(4));
                          case 22:
                            a
                              ? (e.spinnerViewMoreComment = !1)
                              : (e.spinnerViewComment = !1);
                          case 23:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [[4, 20]]
                  );
                })
              )();
            },
            getAvatar: function (t) {
              return t.avatar[100];
            },
            getProfileUser: function (t) {
              var e = l.urlPublicProfile + "/" + t;
              window.location.href = e;
            },
            addComment: function () {
              var t = this;
              return f(
                i.a.mark(function e() {
                  var n, r, o;
                  return i.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((t.spinnerComment = !0),
                              (e.prev = 1),
                              void 0 === t.userInfo.email)
                            ) {
                              e.next = 11;
                              break;
                            }
                            return (
                              ((n = {
                                book_id: t.bookId,
                                commentable_type: 1,
                                commentable_id: t.chapterId,
                              }).content = Object(a.b)(t.commentContent)),
                              (e.next = 7),
                              Object(s.a)(n)
                            );
                          case 7:
                            200 === (r = e.sent).data._status &&
                              ((o = {
                                date: c
                                  .extractDateTimeDmy(c.getDateTimeNow())
                                  .fromNow(),
                                liked: 0,
                                replyComment: !1,
                                replyCommentContent: "",
                                viewCommentReplies: !1,
                                replies: [],
                                isLikeOrDislikeInprogress: !1,
                                content: t.commentContent,
                                id: r.data._data.comment_id,
                                chapter_owner: r.data._data.chapter_owner,
                                user: t.userInfo,
                              }),
                              t.commentList.unshift(o),
                              (t.commentContent = ""),
                              (t.commentTotal += 1)),
                              (e.next = 12);
                            break;
                          case 11:
                            window.is_safari_user_agent
                              ? EventBus.$emit("login")
                              : (window.location = u.getLoginUri());
                          case 12:
                            e.next = 16;
                            break;
                          case 14:
                            (e.prev = 14), (e.t0 = e.catch(1));
                          case 16:
                            t.spinnerComment = !1;
                          case 17:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 14]]
                  );
                })
              )();
            },
            viewCommentReplies: function (t) {
              var e = this;
              return f(
                i.a.mark(function n() {
                  return i.a.wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (t.replies = []),
                            (t.replyComment = !0),
                            (n.next = 4),
                            e.getCommentReplies(t)
                          );
                        case 4:
                          t.viewCommentReplies = !0;
                        case 5:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              )();
            },
            getCommentReplies: function (t) {
              var e = arguments,
                n = this;
              return f(
                i.a.mark(function r() {
                  var a, o, l, u, d;
                  return i.a.wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (a = e.length > 1 && void 0 !== e[1] ? e[1] : 1),
                            (o = e.length > 2 && void 0 !== e[2] && e[2]),
                            (t.repliesIsLoading = !0),
                            (r.next = 5),
                            Object(s.e)({
                              book_id: n.bookId,
                              commentable_id: t.id,
                              commentable_type: 2,
                              sort_by: "id",
                              order_by: "asc",
                              page: a,
                            })
                          );
                        case 5:
                          (l = r.sent),
                            (u = get(l, ["data", "_extra", "_pagination"])),
                            (t.repliesCurrentPage = get(u, ["_current"])),
                            (t.repliesLastPage = get(u, ["_last"])),
                            (d = get(l, ["data", "_data"], []).map(function (
                              t
                            ) {
                              return (
                                (t.liked = parseInt(t.liked, 10)),
                                (t.isLikeOrDislikeInprogress = !1),
                                (t.content = t.content.replace(
                                  new RegExp("\n", "g"),
                                  "<br />"
                                )),
                                (t.date = c
                                  .extractDateTimeDmy(t.created_at)
                                  .fromNow()),
                                t
                              );
                            })),
                            (t.replies = o ? d : t.replies.concat(d)),
                            (t.repliesIsLoading = !1);
                        case 12:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                })
              )();
            },
            disableAction: function (t) {
              return t ? "disabled" : "";
            },
            loginRequire: function () {
              var t = this;
              return f(
                i.a.mark(function e() {
                  return i.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (t.isLoggedIn) {
                            e.next = 7;
                            break;
                          }
                          if (!window.is_safari_user_agent) {
                            e.next = 6;
                            break;
                          }
                          return EventBus.$emit("login"), e.abrupt("return");
                        case 6:
                          window.location = u.getLoginUri();
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            likeComment: function (t) {
              var e = this;
              return f(
                i.a.mark(function n() {
                  var r;
                  return i.a.wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            if (e.isLoggedIn) {
                              n.next = 7;
                              break;
                            }
                            if (!window.is_safari_user_agent) {
                              n.next = 6;
                              break;
                            }
                            return EventBus.$emit("login"), n.abrupt("return");
                          case 6:
                            window.location = u.getLoginUri();
                          case 7:
                            if (!t.liked && !t.isLikeOrDislikeInprogress) {
                              n.next = 9;
                              break;
                            }
                            return n.abrupt("return");
                          case 9:
                            return (
                              (t.isLikeOrDislikeInprogress = !0),
                              (n.prev = 10),
                              (r = {
                                likeable_id: t.id,
                                likeable_type: 2,
                              }),
                              (n.next = 14),
                              Object(s.d)(r)
                            );
                          case 14:
                            (t.liked = 1),
                              t.like_count > 0
                                ? (t.like_count += 1)
                                : (t.like_count = 1);
                          case 16:
                            return (
                              (n.prev = 16),
                              (t.isLikeOrDislikeInprogress = !1),
                              n.finish(16)
                            );
                          case 19:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [[10, , 16, 19]]
                  );
                })
              )();
            },
            dislikeComment: function (t) {
              var e = this;
              return f(
                i.a.mark(function n() {
                  var r;
                  return i.a.wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            if (e.isLoggedIn) {
                              n.next = 7;
                              break;
                            }
                            if (!window.is_safari_user_agent) {
                              n.next = 6;
                              break;
                            }
                            return EventBus.$emit("login"), n.abrupt("return");
                          case 6:
                            window.location = u.getLoginUri();
                          case 7:
                            if (t.liked && !t.isLikeOrDislikeInprogress) {
                              n.next = 9;
                              break;
                            }
                            return n.abrupt("return");
                          case 9:
                            return (
                              (t.isLikeOrDislikeInprogress = !0),
                              (n.prev = 10),
                              (r = {
                                likeable_id: t.id,
                                likeable_type: 2,
                              }),
                              (n.next = 14),
                              Object(s.c)(r)
                            );
                          case 14:
                            (t.liked = 0),
                              t.like_count > 0
                                ? (t.like_count -= 1)
                                : (t.like_count = 0);
                          case 16:
                            return (
                              (n.prev = 16),
                              (t.isLikeOrDislikeInprogress = !1),
                              n.finish(16)
                            );
                          case 19:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [[10, , 16, 19]]
                  );
                })
              )();
            },
            replyComment: function (t, e) {
              if (!this.isLoggedIn) {
                if (window.is_safari_user_agent)
                  return void EventBus.$emit("login");
                window.location = u.getLoginUri();
              }
              !1 === t.replyComment && this.viewCommentReplies(t),
                (t.replyComment = !0);
            },
            activeButton: function (t) {
              return !0 === t ? "active" : "";
            },
            reportComment: function (t) {
              if (void 0 !== this.userInfo.email) {
                var e = {
                  book_id: this.bookId,
                  comment_id: t,
                };
                EventBus.$emit("report_comment", e);
              } else
                window.is_safari_user_agent
                  ? EventBus.$emit("login")
                  : (window.location = u.getLoginUri());
            },
            stickyComment: function (t) {
              var e = this;
              return f(
                i.a.mark(function n() {
                  return i.a.wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.next = 2), Object(s.f)(t.id);
                        case 2:
                          return (n.next = 4), e.fetchComment(!0, !0);
                        case 4:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              )();
            },
            unstickyComment: function (t) {
              var e = this;
              return f(
                i.a.mark(function n() {
                  return i.a.wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.next = 2), Object(s.g)(t.id);
                        case 2:
                          return (n.next = 4), e.fetchComment(!0, !0);
                        case 4:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              )();
            },
            removeComment: function (t) {
              var e = this;
              return f(
                i.a.mark(function n() {
                  return i.a.wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.next = 2), Object(s.b)(t.id);
                        case 2:
                          return (n.next = 4), e.fetchComment(!0, !0);
                        case 4:
                          t.comment_count > 0
                            ? (t.comment_count -= 1)
                            : (t.comment_count = 0);
                        case 5:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              )();
            },
            removeSubComment: function (t, e) {
              var n = this;
              return f(
                i.a.mark(function r() {
                  return i.a.wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (r.next = 2), Object(s.b)(e.id);
                        case 2:
                          return (r.next = 4), n.getCommentReplies(t, 1, !0);
                        case 4:
                          t.comment_count > 0
                            ? (t.comment_count -= 1)
                            : (t.comment_count = 0);
                        case 5:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                })
              )();
            },
            loadMoreReplies: function (t) {
              var e = this;
              return f(
                i.a.mark(function n() {
                  return i.a.wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.next = 2),
                            e.getCommentReplies(t, t.repliesCurrentPage + 1)
                          );
                        case 2:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              )();
            },
            postReplyComment: function (t) {
              var e = this;
              return f(
                i.a.mark(function n() {
                  var r, o, l;
                  return i.a.wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            if (e.isLoggedIn) {
                              n.next = 8;
                              break;
                            }
                            if (!window.is_safari_user_agent) {
                              n.next = 6;
                              break;
                            }
                            return EventBus.$emit("login"), n.abrupt("return");
                          case 6:
                            window.location = u.getLoginUri();
                          case 7:
                            return n.abrupt("return");
                          case 8:
                            return (
                              (e.spinnerReply = !0),
                              (n.prev = 9),
                              (r = {
                                commentable_id: t.id,
                                commentable_type: 2,
                                content: Object(a.b)(t.replyCommentContent),
                                book_id: e.bookId,
                              }),
                              (n.next = 13),
                              Object(s.a)(r)
                            );
                          case 13:
                            200 === (o = n.sent).data._status &&
                              ((l = {
                                date: c
                                  .extractDateTimeDmy(c.getDateTimeNow())
                                  .fromNow(),
                                liked: 0,
                                isLikeOrDislikeInprogress: !1,
                                content: t.replyCommentContent,
                                id: o.data._data.comment_id,
                                user: e.userInfo,
                              }),
                              t.replies.push(l),
                              (t.replyCommentContent = ""),
                              (t.replyComment = !1),
                              (t.viewCommentReplies = !0),
                              t.comment_count > 0
                                ? (t.comment_count += 1)
                                : (t.comment_count = 1)),
                              (n.next = 19);
                            break;
                          case 17:
                            (n.prev = 17), (n.t0 = n.catch(9));
                          case 19:
                            e.spinnerReply = !1;
                          case 20:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [[9, 17]]
                  );
                })
              )();
            },
            handleNavigateComment: function (t) {
              var e = this;
              return f(
                i.a.mark(function n() {
                  return i.a.wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          (e.commentSearch.page = t + 1),
                            e.fetchComment(!1, !1, !0);
                        case 2:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              )();
            },
          },
          mounted: function () {
            var t = this;
            (this.chapterId = this.chapter_id),
              (this.bookId = this.book_id),
              EventBus.$on("commentListData", function () {
                var e =
                  !(arguments.length > 0 && void 0 !== arguments[0]) ||
                  arguments[0];
                t.commentList.length <= 0 && t.fetchComment(!1, e);
              });
          },
        },
        b = (n(314), n(5)),
        k = Object(b.a)(
          g,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "div",
              {
                attrs: {
                  id: "comments",
                },
              },
              [
                n(
                  "div",
                  {
                    staticClass: "d-flex",
                  },
                  [
                    n("h4", [t._v(t._s(t.commentTotal) + " bình luận")]),
                    t._v(" "),
                    n(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: t.commentSearch.commentSortBy,
                            expression: "commentSearch.commentSortBy",
                          },
                        ],
                        staticClass: "custom-select w-auto ml-auto",
                        on: {
                          change: [
                            function (e) {
                              var n = Array.prototype.filter
                                .call(e.target.options, function (t) {
                                  return t.selected;
                                })
                                .map(function (t) {
                                  return "_value" in t ? t._value : t.value;
                                });
                              t.$set(
                                t.commentSearch,
                                "commentSortBy",
                                e.target.multiple ? n : n[0]
                              );
                            },
                            function (e) {
                              return t.fetchComment(!1, !0);
                            },
                          ],
                        },
                      },
                      t._l(t.commentSortList, function (e) {
                        var r = e.name,
                          i = e.id,
                          a = e.index;
                        return n(
                          "option",
                          {
                            key: a,
                            domProps: {
                              value: i,
                            },
                          },
                          [
                            t._v(
                              "\n                    " +
                                t._s(r) +
                                "\n                "
                            ),
                          ]
                        );
                      }),
                      0
                    ),
                  ]
                ),
                t._v(" "),
                n(
                  "div",
                  {
                    staticClass: "comment-form media align-items-center mt-3",
                  },
                  [
                    n(
                      "div",
                      {
                        staticClass: "nh-avatar nh-avatar--45 mr-3",
                        staticStyle: {
                          cursor: "pointer",
                        },
                        on: {
                          click: function (e) {
                            return t.getProfileUser(t.userId);
                          },
                        },
                      },
                      [
                        t.hasAvatar
                          ? n("img", {
                              directives: [
                                {
                                  name: "lazy",
                                  rawName: "v-lazy",
                                  value: t.userAvatar,
                                  expression: "userAvatar",
                                },
                              ],
                              staticClass: "img-fluid",
                              attrs: {
                                alt: "",
                              },
                            })
                          : n("img", {
                              directives: [
                                {
                                  name: "lazy",
                                  rawName: "v-lazy",
                                  value: t.defaultAvatarProfile,
                                  expression: "defaultAvatarProfile",
                                },
                              ],
                              staticClass: "img-fluid",
                              attrs: {
                                alt: "",
                              },
                            }),
                      ]
                    ),
                    t._v(" "),
                    n(
                      "div",
                      {
                        staticClass: "media-body comment-input-block",
                      },
                      [
                        n("textarea", {
                          directives: [
                            {
                              name: "autogrow",
                              rawName: "v-autogrow",
                            },
                            {
                              name: "model",
                              rawName: "v-model",
                              value: t.commentContent,
                              expression: "commentContent",
                            },
                          ],
                          staticClass: "form-control bg-light",
                          attrs: {
                            placeholder: "Bình luận của bạn",
                          },
                          domProps: {
                            value: t.commentContent,
                          },
                          on: {
                            click: function (e) {
                              return t.loginRequire();
                            },
                            input: function (e) {
                              e.target.composing ||
                                (t.commentContent = e.target.value);
                            },
                          },
                        }),
                        t._v(" "),
                        n(
                          "button",
                          {
                            staticClass:
                              "btn btn-submit bg-transparent text-primary d-flex align-items-center justify-content-center shadow-none px-2",
                            attrs: {
                              disabled: t.spinnerComment,
                            },
                            on: {
                              click: function (e) {
                                return t.addComment();
                              },
                            },
                          },
                          [
                            t.spinnerComment
                              ? n("span", {
                                  staticClass:
                                    "spinner-border spinner-border-sm",
                                  staticStyle: {
                                    width: "24px",
                                    height: "24px",
                                  },
                                  attrs: {
                                    role: "status",
                                    "aria-hidden": "true",
                                  },
                                })
                              : n("i", {
                                  staticClass: "nh-icon icon-send",
                                }),
                          ]
                        ),
                      ]
                    ),
                  ]
                ),
                t._v(" "),
                t.spinnerViewComment
                  ? n(
                      "div",
                      {
                        staticClass: "text-center",
                      },
                      [n("v-spinner")],
                      1
                    )
                  : n(
                      "ul",
                      {
                        staticClass: "list-unstyled mt-3 mb-4 border-top",
                      },
                      t._l(t.commentList, function (e, r) {
                        return n(
                          "li",
                          {
                            key: r,
                            staticClass: "media py-2 border-bottom",
                          },
                          [
                            n(
                              "div",
                              {
                                staticClass: "nh-avatar nh-avatar--45 mr-3",
                                staticStyle: {
                                  cursor: "pointer",
                                },
                                on: {
                                  click: function (n) {
                                    return t.getProfileUser(e.user.id);
                                  },
                                },
                              },
                              [
                                t.getAvatar(e.user)
                                  ? n("img", {
                                      directives: [
                                        {
                                          name: "lazy",
                                          rawName: "v-lazy",
                                          value: t.getAvatar(e.user),
                                          expression: "getAvatar(comment.user)",
                                        },
                                      ],
                                      staticClass: "img-fluid",
                                      attrs: {
                                        alt: "",
                                      },
                                    })
                                  : n("img", {
                                      directives: [
                                        {
                                          name: "lazy",
                                          rawName: "v-lazy",
                                          value: t.defaultAvatarProfile,
                                          expression: "defaultAvatarProfile",
                                        },
                                      ],
                                      staticClass: "img-fluid",
                                      attrs: {
                                        alt: "",
                                      },
                                    }),
                                t._v(" "),
                                n(
                                  "span",
                                  {
                                    staticClass:
                                      "level px-1 py-0 small bg-primary rounded-3 text-white",
                                  },
                                  [t._v("Cấp " + t._s(e.user.level))]
                                ),
                              ]
                            ),
                            t._v(" "),
                            n(
                              "div",
                              {
                                staticClass: "media-body",
                              },
                              [
                                n(
                                  "div",
                                  {
                                    staticClass: "d-flex",
                                  },
                                  [
                                    n(
                                      "div",
                                      {
                                        staticClass: "d-flex mb-1",
                                      },
                                      [
                                        n(
                                          "a",
                                          {
                                            staticClass:
                                              "d-inline-block h5 mb-0",
                                            attrs: {
                                              href: "javascript:void(0)",
                                            },
                                            on: {
                                              click: function (n) {
                                                return t.getProfileUser(
                                                  e.user.id
                                                );
                                              },
                                            },
                                          },
                                          [t._v(t._s(e.user.name))]
                                        ),
                                        t._v(" "),
                                        e.fan_level > 9
                                          ? n(
                                              "small",
                                              {
                                                staticClass:
                                                  "top-fan ml-2 align-self-center",
                                              },
                                              [t._v(t._s(e.fan_name))]
                                            )
                                          : t._e(),
                                      ]
                                    ),
                                    t._v(" "),
                                    e.chapter_owner === t.userId &&
                                    e.user.id === t.userId &&
                                    e.sticky
                                      ? n(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-sm btn-white fz-body text-tertiary rounded-3 d-flex align-items-center px-3 ml-auto active",
                                            on: {
                                              click: function (n) {
                                                return t.unstickyComment(e);
                                              },
                                            },
                                          },
                                          [
                                            n("i", {
                                              staticClass: "nh-icon icon-bell",
                                            }),
                                          ]
                                        )
                                      : t._e(),
                                    t._v(" "),
                                    e.chapter_owner !== t.userId ||
                                    e.user.id !== t.userId ||
                                    e.sticky
                                      ? t._e()
                                      : n(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-sm btn-white fz-body text-tertiary rounded-3 d-flex align-items-center px-3 ml-auto",
                                            on: {
                                              click: function (n) {
                                                return t.stickyComment(e);
                                              },
                                            },
                                          },
                                          [
                                            n("i", {
                                              staticClass: "nh-icon icon-bell",
                                            }),
                                          ]
                                        ),
                                    t._v(" "),
                                    e.chapter_owner != t.userId && e.sticky
                                      ? n(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-sm btn-white fz-body text-tertiary rounded-3 d-flex align-items-center px-3 ml-auto active",
                                            attrs: {
                                              disabled: "",
                                            },
                                          },
                                          [
                                            n("i", {
                                              staticClass: "nh-icon icon-bell",
                                            }),
                                          ]
                                        )
                                      : t._e(),
                                  ]
                                ),
                                t._v(" "),
                                n(
                                  "div",
                                  {
                                    staticClass: "d-flex align-items-center",
                                  },
                                  [
                                    n(
                                      "span",
                                      {
                                        staticClass:
                                          "small d-flex align-items-center text-tertiary",
                                      },
                                      [
                                        n("i", {
                                          staticClass:
                                            "nh-icon icon-clock mr-2",
                                        }),
                                        t._v(" " + t._s(e.date) + " "),
                                        n("i", {
                                          staticClass:
                                            "nh-icon icon-eye-glasses ml-4 mr-2",
                                        }),
                                        t._v(
                                          " Chương " + t._s(e.chapter_index)
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                e.sticky
                                  ? n("read-more", {
                                      staticClass:
                                        "comment-body mt-2 font-weight-semibold",
                                      attrs: {
                                        text: e.content,
                                        "more-str": "đọc tiếp",
                                        "max-chars": 300,
                                      },
                                    })
                                  : n("read-more", {
                                      staticClass: "comment-body mt-2",
                                      attrs: {
                                        text: e.content,
                                        "more-str": "đọc tiếp",
                                        "max-chars": 300,
                                      },
                                    }),
                                t._v(" "),
                                n(
                                  "div",
                                  {
                                    staticClass: "d-flex mt-3",
                                  },
                                  [
                                    e.comment_count > 0
                                      ? n(
                                          "div",
                                          {
                                            staticClass:
                                              "mr-auto font-weight-semibold",
                                          },
                                          [
                                            e.comment_count > 0 &&
                                            !e.viewCommentReplies
                                              ? n(
                                                  "a",
                                                  {
                                                    attrs: {
                                                      href: "javascript:void(0)",
                                                    },
                                                    on: {
                                                      click: function (n) {
                                                        return t.viewCommentReplies(
                                                          e
                                                        );
                                                      },
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "Xem " +
                                                        t._s(e.comment_count) +
                                                        " trả lời"
                                                    ),
                                                  ]
                                                )
                                              : t._e(),
                                          ]
                                        )
                                      : n("div", {
                                          staticClass:
                                            "mr-auto font-weight-semibold",
                                        }),
                                    t._v(" "),
                                    e.liked
                                      ? n(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-sm btn-white fz-body text-tertiary rounded-3 d-flex align-items-center px-3 mr-2 active",
                                            class: t.disableAction(
                                              e.isLikeOrDislikeInprogress
                                            ),
                                            on: {
                                              click: function (n) {
                                                return t.dislikeComment(e);
                                              },
                                            },
                                          },
                                          [
                                            n("i", {
                                              staticClass:
                                                "nh-icon icon-like mr-2",
                                            }),
                                            t._v(
                                              t._s(e.like_count) +
                                                "\n                        "
                                            ),
                                          ]
                                        )
                                      : n(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-sm btn-white fz-body text-tertiary rounded-3 d-flex align-items-center px-3 mr-2",
                                            class: t.disableAction(
                                              e.isLikeOrDislikeInprogress
                                            ),
                                            on: {
                                              click: function (n) {
                                                return t.likeComment(e);
                                              },
                                            },
                                          },
                                          [
                                            n("i", {
                                              staticClass:
                                                "nh-icon icon-like mr-2",
                                            }),
                                            t._v(
                                              t._s(e.like_count) +
                                                "\n                        "
                                            ),
                                          ]
                                        ),
                                    t._v(" "),
                                    n(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-sm btn-white fz-body text-tertiary rounded-3 d-flex align-items-center px-3 mr-2",
                                        class: t.activeButton(e.replyComment),
                                        on: {
                                          click: function (n) {
                                            return t.replyComment(e, r);
                                          },
                                        },
                                      },
                                      [
                                        n("i", {
                                          staticClass:
                                            "nh-icon icon-reply mr-2",
                                        }),
                                        t._v(
                                          "\n                            Trả lời\n                        "
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e.user.id !== t.userId
                                      ? n(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-sm btn-white fz-body text-tertiary rounded-3 d-flex align-items-center px-3",
                                            attrs: {
                                              "data-toggle": "modal",
                                            },
                                            on: {
                                              click: function (n) {
                                                return t.reportComment(e.id);
                                              },
                                            },
                                          },
                                          [
                                            n("i", {
                                              staticClass:
                                                "nh-icon icon-flag mr-2",
                                            }),
                                            t._v(
                                              "\n                            Báo xấu\n                        "
                                            ),
                                          ]
                                        )
                                      : t._e(),
                                    t._v(" "),
                                    e.user.id === t.userId
                                      ? n(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-sm btn-white fz-body text-tertiary rounded-3 d-flex align-items-center px-3",
                                            attrs: {
                                              "data-toggle": "modal",
                                            },
                                            on: {
                                              click: function (n) {
                                                return t.removeComment(e);
                                              },
                                            },
                                          },
                                          [
                                            n("i", {
                                              staticClass:
                                                "nh-icon icon-trash mr-2",
                                            }),
                                            t._v(
                                              "\n                            Xóa\n                        "
                                            ),
                                          ]
                                        )
                                      : t._e(),
                                  ]
                                ),
                                t._v(" "),
                                n(
                                  "ul",
                                  {
                                    staticClass: "list-unstyled mt-2",
                                  },
                                  [
                                    t._l(e.replies, function (r, i) {
                                      return e.viewCommentReplies
                                        ? n(
                                            "li",
                                            {
                                              key: "subcomment" + i,
                                              staticClass:
                                                "media py-3 border-top",
                                            },
                                            [
                                              n(
                                                "div",
                                                {
                                                  staticClass:
                                                    "nh-avatar nh-avatar--45 mr-3",
                                                  staticStyle: {
                                                    cursor: "pointer",
                                                  },
                                                  on: {
                                                    click: function (e) {
                                                      return t.getProfileUser(
                                                        r.user.id
                                                      );
                                                    },
                                                  },
                                                },
                                                [
                                                  t.getAvatar(r.user)
                                                    ? n("img", {
                                                        directives: [
                                                          {
                                                            name: "lazy",
                                                            rawName: "v-lazy",
                                                            value: t.getAvatar(
                                                              r.user
                                                            ),
                                                            expression:
                                                              "getAvatar(subcomment.user)",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "img-fluid",
                                                        attrs: {
                                                          alt: "",
                                                        },
                                                      })
                                                    : n("img", {
                                                        directives: [
                                                          {
                                                            name: "lazy",
                                                            rawName: "v-lazy",
                                                            value:
                                                              t.defaultAvatarProfile,
                                                            expression:
                                                              "defaultAvatarProfile",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "img-fluid",
                                                        attrs: {
                                                          alt: "",
                                                        },
                                                      }),
                                                  t._v(" "),
                                                  n(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "level px-1 py-0 small bg-primary rounded-3 text-white",
                                                    },
                                                    [
                                                      t._v(
                                                        "Cấp " +
                                                          t._s(r.user.level)
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                              t._v(" "),
                                              n(
                                                "div",
                                                {
                                                  staticClass: "media-body",
                                                },
                                                [
                                                  n(
                                                    "a",
                                                    {
                                                      staticClass:
                                                        "d-inline-block font-weight-bold mb-1 mr-2",
                                                      attrs: {
                                                        href: "javascript:void(0)",
                                                      },
                                                      on: {
                                                        click: function (e) {
                                                          return t.getProfileUser(
                                                            r.user.id
                                                          );
                                                        },
                                                      },
                                                    },
                                                    [t._v(t._s(r.user.name))]
                                                  ),
                                                  t._v(" "),
                                                  n("read-more", {
                                                    staticClass: "comment-body",
                                                    attrs: {
                                                      text: r.content,
                                                      "more-str": "đọc tiếp",
                                                      "max-chars": 300,
                                                    },
                                                  }),
                                                  t._v(" "),
                                                  n(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "d-flex mt-1",
                                                    },
                                                    [
                                                      r.liked
                                                        ? n(
                                                            "a",
                                                            {
                                                              staticClass:
                                                                "fz-body text-tertiary d-flex align-items-center mr-4 active",
                                                              class:
                                                                t.disableAction(
                                                                  r.isLikeOrDislikeInprogress
                                                                ),
                                                              on: {
                                                                click:
                                                                  function (e) {
                                                                    return t.dislikeComment(
                                                                      r
                                                                    );
                                                                  },
                                                              },
                                                            },
                                                            [
                                                              n("i", {
                                                                staticClass:
                                                                  "nh-icon icon-like-alt mr-2 small",
                                                              }),
                                                              t._v(" "),
                                                              n("small", [
                                                                t._v(
                                                                  t._s(
                                                                    r.like_count
                                                                  )
                                                                ),
                                                              ]),
                                                            ]
                                                          )
                                                        : n(
                                                            "a",
                                                            {
                                                              staticClass:
                                                                "fz-body text-tertiary d-flex align-items-center mr-4",
                                                              class:
                                                                t.disableAction(
                                                                  r.isLikeOrDislikeInprogress
                                                                ),
                                                              on: {
                                                                click:
                                                                  function (e) {
                                                                    return t.likeComment(
                                                                      r
                                                                    );
                                                                  },
                                                              },
                                                            },
                                                            [
                                                              n("i", {
                                                                staticClass:
                                                                  "nh-icon icon-like-alt mr-2 small",
                                                              }),
                                                              t._v(" "),
                                                              n("small", [
                                                                t._v(
                                                                  t._s(
                                                                    r.like_count
                                                                  )
                                                                ),
                                                              ]),
                                                            ]
                                                          ),
                                                      t._v(" "),
                                                      n(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "d-flex align-items-center text-tertiary small",
                                                        },
                                                        [
                                                          n("i", {
                                                            staticClass:
                                                              "nh-icon icon-clock mr-2",
                                                          }),
                                                          t._v(t._s(r.date)),
                                                        ]
                                                      ),
                                                      t._v(" "),
                                                      r.user.id !== t.userId
                                                        ? n(
                                                            "a",
                                                            {
                                                              staticClass:
                                                                "fz-body text-tertiary d-flex align-items-center ml-auto",
                                                              attrs: {
                                                                "data-toggle":
                                                                  "modal",
                                                              },
                                                              on: {
                                                                click:
                                                                  function (e) {
                                                                    return t.reportComment(
                                                                      r.id
                                                                    );
                                                                  },
                                                              },
                                                            },
                                                            [
                                                              n("i", {
                                                                staticClass:
                                                                  "nh-icon icon-flag small",
                                                              }),
                                                            ]
                                                          )
                                                        : n(
                                                            "a",
                                                            {
                                                              staticClass:
                                                                "fz-body text-tertiary d-flex align-items-center ml-auto",
                                                              attrs: {
                                                                "data-toggle":
                                                                  "modal",
                                                              },
                                                              on: {
                                                                click:
                                                                  function (n) {
                                                                    return t.removeSubComment(
                                                                      e,
                                                                      r
                                                                    );
                                                                  },
                                                              },
                                                            },
                                                            [
                                                              n("i", {
                                                                staticClass:
                                                                  "nh-icon icon-trash small",
                                                              }),
                                                            ]
                                                          ),
                                                    ]
                                                  ),
                                                ],
                                                1
                                              ),
                                            ]
                                          )
                                        : t._e();
                                    }),
                                    t._v(" "),
                                    e.viewCommentReplies &&
                                    !e.repliesIsLoading &&
                                    e.repliesCurrentPage < e.repliesLastPage
                                      ? n(
                                          "a",
                                          {
                                            staticClass:
                                              "ml-2 font-weight-bold",
                                            attrs: {
                                              href: "javascript:void(0)",
                                            },
                                            on: {
                                              click: function (n) {
                                                return t.loadMoreReplies(e);
                                              },
                                            },
                                          },
                                          [t._v("Xem thêm trả lời")]
                                        )
                                      : t._e(),
                                  ],
                                  2
                                ),
                                t._v(" "),
                                e.replyComment
                                  ? n(
                                      "div",
                                      {
                                        staticClass:
                                          "comment-form media p-2 mt-2",
                                        attrs: {
                                          id: "showReplyForm",
                                        },
                                      },
                                      [
                                        n(
                                          "div",
                                          {
                                            staticClass:
                                              "nh-avatar nh-avatar--30 mr-2 mt-1",
                                          },
                                          [
                                            t.hasAvatar
                                              ? n("img", {
                                                  directives: [
                                                    {
                                                      name: "lazy",
                                                      rawName: "v-lazy",
                                                      value: t.userAvatar,
                                                      expression: "userAvatar",
                                                    },
                                                  ],
                                                  staticClass: "img-fluid",
                                                  attrs: {
                                                    alt: "",
                                                  },
                                                })
                                              : n("img", {
                                                  directives: [
                                                    {
                                                      name: "lazy",
                                                      rawName: "v-lazy",
                                                      value:
                                                        t.defaultAvatarProfile,
                                                      expression:
                                                        "defaultAvatarProfile",
                                                    },
                                                  ],
                                                  staticClass: "img-fluid",
                                                  attrs: {
                                                    alt: "",
                                                  },
                                                }),
                                          ]
                                        ),
                                        t._v(" "),
                                        n(
                                          "div",
                                          {
                                            staticClass:
                                              "media-body comment-input-block",
                                          },
                                          [
                                            n("textarea", {
                                              directives: [
                                                {
                                                  name: "autogrow",
                                                  rawName: "v-autogrow",
                                                },
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: e.replyCommentContent,
                                                  expression:
                                                    "comment.replyCommentContent",
                                                },
                                              ],
                                              staticClass:
                                                "form-control bg-light",
                                              attrs: {
                                                placeholder: "Nội dung trả lời",
                                              },
                                              domProps: {
                                                value: e.replyCommentContent,
                                              },
                                              on: {
                                                click: function (e) {
                                                  return t.loginRequire();
                                                },
                                                input: function (n) {
                                                  n.target.composing ||
                                                    t.$set(
                                                      e,
                                                      "replyCommentContent",
                                                      n.target.value
                                                    );
                                                },
                                              },
                                            }),
                                            t._v(" "),
                                            n(
                                              "button",
                                              {
                                                staticClass:
                                                  "btn btn-submit bg-transparent text-primary d-flex align-items-center justify-content-center shadow-none px-2",
                                                on: {
                                                  click: function (n) {
                                                    return t.postReplyComment(
                                                      e
                                                    );
                                                  },
                                                },
                                              },
                                              [
                                                n("i", {
                                                  staticClass:
                                                    "nh-icon icon-send",
                                                }),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    )
                                  : t._e(),
                              ],
                              1
                            ),
                          ]
                        );
                      }),
                      0
                    ),
                t._v(" "),
                t.spinnerViewMoreComment
                  ? n(
                      "div",
                      {
                        staticClass: "text-center mt-4",
                      },
                      [
                        n(
                          "a",
                          {
                            staticClass:
                              "btn btn-outline-secondary font-weight-semibold",
                            on: {
                              click: function (e) {
                                return t.handleNavigateComment(
                                  t.commentSearch.page
                                );
                              },
                            },
                          },
                          [
                            n("v-spinner", {
                              attrs: {
                                show: "spinner",
                                amount: "1",
                              },
                            }),
                          ],
                          1
                        ),
                      ]
                    )
                  : n(
                      "div",
                      {
                        staticClass: "text-center mt-4",
                      },
                      [
                        t.pageCount > 1 && t.commentSearch.page !== t.pageCount
                          ? n(
                              "a",
                              {
                                staticClass:
                                  "btn btn-outline-secondary font-weight-semibold cursor-pointer",
                                on: {
                                  click: function (e) {
                                    return t.handleNavigateComment(
                                      t.commentSearch.page
                                    );
                                  },
                                },
                              },
                              [t._v("\n                Xem thêm bình luận")]
                            )
                          : t._e(),
                      ]
                    ),
              ]
            );
          },
          [],
          !1,
          null,
          "84d735ce",
          null
        );
      e.default = k.exports;
    },
    390: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(1),
        i = {
          name: "NavList",
          props: ["nav_name"],
          data: function () {
            return {
              navList: r.userNav,
            };
          },
          methods: {
            activeUserNav: function (t) {
              return this.nav_name === t ? "active" : "";
            },
          },
        },
        a = n(5),
        o = Object(a.a)(
          i,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "ul",
              {
                staticClass: "list-group",
              },
              t._l(t.navList, function (e) {
                var r = e.index,
                  i = e.name,
                  a = e.lang,
                  o = e.path,
                  s = e.icon;
                return n(
                  "li",
                  {
                    key: r,
                    staticClass: "list-group-item",
                    class: t.activeUserNav(i),
                  },
                  [
                    n(
                      "a",
                      {
                        staticClass: "d-block",
                        attrs: {
                          href: o,
                        },
                      },
                      [
                        n("i", {
                          staticClass: "nh-icon small mr-2",
                          class: s,
                        }),
                        t._v(" " + t._s(a) + "\n        "),
                      ]
                    ),
                  ]
                );
              }),
              0
            );
          },
          [],
          !1,
          null,
          "40890a13",
          null
        );
      e.default = o.exports;
    },
  },
  [[172, 1, 0]],
]);
