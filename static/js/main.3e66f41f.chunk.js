(this.webpackJsonpreact_social_network=this.webpackJsonpreact_social_network||[]).push([[0],{108:function(e,t,n){"use strict";t.a=n.p+"static/media/userAvatar.e582e4ba.png"},12:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return i}));var r=n(132),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"18de538a-0af5-4877-87aa-16401c438e9a"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolent method. Use profileAPI object"),o.getProfile(e)}},o={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},s={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("auth/login")}},i={getCaptchaURL:function(){return a.get("security/get-captcha-url")}}},129:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var r=n(48),a=n(3),c="SEND-MESSAGE",o={messages:[{id:1,message:"Hallo"},{id:1,message:"Was ist das?"},{id:1,message:"Willkommen"}],dialogs:[{id:1,name:"George"},{id:2,name:"Anna"},{id:3,name:"Nick"},{id:4,name:"Julia"},{id:5,name:"Alex"}]},s=function(e){return{type:c,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},165:function(e,t,n){},166:function(e,t,n){},25:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return j}));var r=n(3),a=n(55),c=n(0),o=n.n(c),s=n(52),i=n.n(s),u=n(92),l=n(1),d=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,c=n&&r;return Object(l.jsxs)("div",{className:i.a.formControl+" "+(c?i.a.error:""),children:[Object(l.jsx)("div",{children:a}),c&&Object(l.jsx)("span",{children:r})]})},f=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(l.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(l.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},p=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(l.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(l.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},j=function(e,t,n,a,c){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:{},d=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"";return Object(l.jsxs)(o.a.Fragment,{children:[Object(l.jsx)(u.a,Object(r.a)({className:e,placeholder:t,name:n,component:a,validate:c,id:s},i)),d]})}},26:function(e,t,n){e.exports={nav:"Navbar_nav__2XLN_",active:"Navbar_active__2cS6t",openMenu:"Navbar_openMenu__31YLd"}},290:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(68),o=n.n(c),s=(n(165),n(39)),i=n(40),u=n(42),l=n(41),d=(n(166),n(26)),f=n.n(d),p=n(15),j=n(1),b=function(){return Object(j.jsx)("nav",{className:f.a.nav,children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(p.b,{to:"/profile",activeClassName:f.a.active,children:"Profile"})}),Object(j.jsx)("li",{children:Object(j.jsx)(p.b,{to:"/dialogs",activeClassName:f.a.active,children:"Messages"})}),Object(j.jsx)("li",{children:Object(j.jsx)(p.b,{to:"/users",activeClassName:f.a.active,children:"Users"})}),Object(j.jsx)("li",{children:Object(j.jsx)(p.b,{to:"/news",activeClassName:f.a.active,children:"News"})}),Object(j.jsx)("li",{children:Object(j.jsx)(p.b,{to:"/music",activeClassName:f.a.active,children:"Music"})}),Object(j.jsx)("li",{children:Object(j.jsx)(p.b,{to:"/settings",activeClassName:f.a.active,children:"Settings"})})]})})},h=n(11),g=n(18),O=n(8),m=n.n(O),v=n(14),x=n(48),w=n(3),_=n(12),P=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(w.a)(Object(w.a)({},e),r):e}))},C="FOLLOW",S="UNFOLLOW",y="SET_USERS",U="SET_CURRENT_PAGE",N="SET_TOTAL_USERS_COUNT",k="TOGGLE_IS_FETCHING",E="TOGGLE_IS_FOLLOWING_PROGRESS",I={users:[],pageSize:15,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},L=function(e){return{type:C,userId:e}},T=function(e){return{type:S,userId:e}},A=function(e){return{type:U,currentPage:e}},z=function(e){return{type:k,isFetching:e}},F=function(e,t){return{type:E,isFetching:e,userId:t}},M=function(){var e=Object(v.a)(m.a.mark((function e(t,n,r,a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(F(!0,n)),e.next=3,r(n);case 3:0==e.sent.data.resultCode&&t(a(n)),t(F(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(w.a)(Object(w.a)({},e),{},{users:P(e.users,t.userId,"id",{followed:!0})});case S:return Object(w.a)(Object(w.a)({},e),{},{users:P(e.users,t.userId,"id",{followed:!1})});case y:return Object(w.a)(Object(w.a)({},e),{},{users:t.users});case U:return Object(w.a)(Object(w.a)({},e),{},{currentPage:t.currentPage});case N:return Object(w.a)(Object(w.a)({},e),{},{totalUsersCount:t.totalUsersCount});case k:return Object(w.a)(Object(w.a)({},e),{},{isFetching:t.isFetching});case E:return Object(w.a)(Object(w.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(x.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},B=n(55),D=n(72),W=n(98),G=n(31),H=n.n(G),X=n(74),Y=n.n(X),J=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,c=e.onPageChanged,o=e.portionSize,s=void 0===o?10:o,i=Math.ceil(t/n),u=[],l=1;l<=i;l++)u.push(l);var d=Math.ceil(i/s),f=Object(r.useState)(1),p=Object(W.a)(f,2),b=p[0],h=p[1],g=(b-1)*s+1,O=b*s;return Object(j.jsxs)("div",{className:H.a.paginator,children:[b>1&&Object(j.jsx)("button",{className:Y()(H.a.paginatorButton,H.a.prev),onClick:function(){h(b-1)},children:"Prev"}),u.filter((function(e){return e>=g&&e<=O})).map((function(e){return Object(j.jsx)("span",{className:Y()(Object(D.a)({},H.a.selectedPage,a===e),H.a.pageNumber),onClick:function(t){c(e)},children:e},e)})),d>b&&Object(j.jsx)("button",{className:Y()(H.a.paginatorButton,H.a.next),onClick:function(){h(b+1)},children:"Next"})]})},K=n(32),q=n.n(K),V=n(108),Z=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,a=e.follow;return Object(j.jsxs)("div",{className:q.a.user,children:[Object(j.jsxs)("div",{className:q.a.userLinkPhotoWrapper,children:[Object(j.jsx)("div",{children:Object(j.jsx)(p.b,{to:"/profile/"+t.id,children:Object(j.jsx)("img",{src:null!==t.photos.small?t.photos.small:V.a,className:q.a.userPhoto,width:"100",height:"102",alt:""})})}),Object(j.jsx)("div",{className:q.a.followUnfollowWrapper,children:t.followed?Object(j.jsx)("button",{className:q.a.followUnfollowButton,disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unfollow"}):Object(j.jsx)("button",{className:q.a.followUnfollowButton,disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Follow"})})]}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:q.a.userName,children:t.name}),Object(j.jsx)("div",{children:t.status})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:"user.location.country"}),Object(j.jsx)("div",{children:"user.location.city"})]})]})]})},Q=function(e){var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,a=e.onPageChanged,c=e.users,o=Object(B.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return Object(j.jsxs)("div",{children:[Object(j.jsx)(J,{currentPage:t,totalItemsCount:n,pageSize:r,onPageChanged:a}),Object(j.jsx)("div",{children:c.map((function(e){return Object(j.jsx)(Z,{user:e,followingInProgress:o.followingInProgress,unfollow:o.unfollow,follow:o.follow},e.id)}))})]})},$=n(44),ee=n(10),te=n(133),ne=Object(te.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),re=function(e){return e.usersPage.pageSize},ae=function(e){return e.usersPage.totalUsersCount},ce=function(e){return e.usersPage.currentPage},oe=function(e){return e.usersPage.isFetching},se=function(e){return e.usersPage.followingInProgress},ie=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[this.props.isFetching?Object(j.jsx)($.a,{}):null,Object(j.jsx)(Q,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(a.a.Component),ue=Object(ee.d)(Object(g.b)((function(e){return{users:ne(e),pageSize:re(e),totalUsersCount:ae(e),currentPage:ce(e),isFetching:oe(e),followingInProgress:se(e)}}),{follow:function(e){return function(){var t=Object(v.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:M(n,e,_.d.follow.bind(_.d),L);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(v.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:M(n,e,_.d.unfollow.bind(_.d),T);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:A,toggleFollowingProgress:F,getUsers:function(e,t){return function(){var n=Object(v.a)(m.a.mark((function n(r){var a;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(z(!0)),r(A(e)),n.next=4,_.d.getUsers(e,t);case 4:a=n.sent,r(z(!1)),r((o=a.items,{type:y,users:o})),r((c=a.totalCount,{type:N,totalUsersCount:c}));case 8:case"end":return n.stop()}var c,o}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(ie),le=n(37),de=n.n(le),fe=n.p+"static/media/grn.a8f57a1e.svg",pe=function(e){return Object(j.jsxs)("header",{className:de.a.header,children:[Object(j.jsx)("div",{className:de.a.logoWrapper,children:Object(j.jsx)("img",{src:fe,alt:""})}),Object(j.jsx)("div",{className:de.a.loginBlock,children:e.isAuth?Object(j.jsxs)("div",{children:[e.login,"\u2003",Object(j.jsx)("button",{className:de.a.logOut,onClick:e.logout,children:"Log out"})]}):Object(j.jsx)(p.b,{className:de.a.logIn,to:"/login",children:"Log in"})}),Object(j.jsx)("button",{className:de.a.openMenu,onClick:e.openMenu,children:"\u041c\u0435\u043d\u044e"})]})},je=n(33),be="gr-network/auth/SET_USER_DATA",he="gr-network/auth/GET_CAPTCHA_URL_SUCCESS",ge={userId:null,email:null,login:null,isAuth:!1,captchaURL:null},Oe=function(e,t,n,r){return{type:be,payload:{userId:e,email:t,login:n,isAuth:r}}},me=function(){return function(){var e=Object(v.a)(m.a.mark((function e(t){var n,r,a,c,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.email,o=r.login,t(Oe(a,c,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ve=function(){return function(){var e=Object(v.a)(m.a.mark((function e(t){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.c.getCaptchaURL();case 2:n=e.sent,r=n.data.url,t({type:he,payload:{captchaURL:r}});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be:case he:return Object(w.a)(Object(w.a)({},e),t.payload);default:return e}},we=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(j.jsx)(pe,Object(w.a)({},this.props))}}]),n}(a.a.Component),_e=Object(g.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(v.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.logout();case 2:0===e.sent.data.resultCode&&t(Oe(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(we),Pe=n(130),Ce=n(25),Se=n(69),ye=n(52),Ue=n.n(ye),Ne=Object(Pe.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaURL;return Object(j.jsxs)("form",{onSubmit:t,children:[Object(Ce.c)("Email","email",Ce.a,[Se.b]),Object(Ce.c)("Password","password",Ce.a,[Se.b],"",{type:"password"}),Object(Ce.c)(null,"rememberMe",Ce.a,[],"",{type:"checkbox"},"remember me"),r&&Object(j.jsx)("img",{src:r}),r&&Object(Ce.c)("Symbols from an image","captcha",Ce.a,[Se.b]),n&&Object(j.jsx)("div",{className:Ue.a.formSummaryError,children:n}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{children:"Login"})})]})})),ke=Object(g.b)((function(e){return{captchaURL:e.auth.captchaURL,isAuth:e.auth.isAuth}}),{login:function(e,t,n,r){return function(){var a=Object(v.a)(m.a.mark((function a(c){var o,s;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,_.a.login(e,t,n,r);case 2:0===(o=a.sent).data.resultCode?c(me()):(10===o.data.resultCode&&c(ve()),s=o.data.messages.length>0?o.data.messages[0]:"Some error",c(Object(je.a)("login",{_error:s})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(j.jsx)(h.a,{to:"/profile"}):Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Login"}),Object(j.jsx)(Ne,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaURL:e.captchaURL})]})})),Ee="INITIALIZED_SUCCESS",Ie={initialized:!1,globalError:null},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ee:return Object(w.a)(Object(w.a)({},e),{},{initialized:!0});default:return e}},Te={},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te;return e},ze=n(129),Fe=n(97),Me=n(135),Re=n(131),Be=Object(ee.c)({profilePage:Fe.b,messagesPage:ze.a,sidebar:Ae,usersPage:R,auth:xe,form:Re.a,app:Le}),De=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ee.d,We=Object(ee.e)(Be,De(Object(ee.a)(Me.a)));window.__store__=We;var Ge=We,He=function(e){return function(t){return Object(j.jsx)(a.a.Suspense,{fallback:Object(j.jsx)($.a,{}),children:Object(j.jsx)(e,Object(w.a)({},t))})}},Xe=a.a.lazy((function(){return n.e(3).then(n.bind(null,300))})),Ye=a.a.lazy((function(){return n.e(4).then(n.bind(null,299))})),Je=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).catchAllUnhandledErrors=function(e,t){alert("Some error occurred")},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?Object(j.jsxs)("div",{className:"app-wrapper",children:[Object(j.jsx)(_e,{}),Object(j.jsx)(b,{}),Object(j.jsx)("div",{className:"app-wrapper-content",children:Object(j.jsxs)(h.d,{children:[Object(j.jsx)(h.b,{exact:!0,path:"/",render:function(){return Object(j.jsx)(h.a,{to:"/profile"})}}),Object(j.jsx)(h.b,{path:"/dialogs",render:He(Xe)}),Object(j.jsx)(h.b,{path:"/profile/:userId?",render:He(Ye)}),Object(j.jsx)(h.b,{path:"/users",render:function(){return Object(j.jsx)(ue,{})}}),Object(j.jsx)(h.b,{path:"/login",render:function(){return Object(j.jsx)(ke,{})}}),Object(j.jsx)(h.b,{path:"*",render:function(){return Object(j.jsx)("div",{children:"404 NOT FOUND"})}})]})})]}):Object(j.jsx)($.a,{})}}]),n}(r.Component),Ke=Object(ee.d)(h.g,Object(g.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(me());Promise.all([t]).then((function(){e({type:Ee})}))}}}))(Je),qe=function(e){return Object(j.jsx)(p.a,{children:Object(j.jsx)(g.a,{store:Ge,children:Object(j.jsx)(Ke,{})})})};o.a.render(Object(j.jsx)(qe,{}),document.getElementById("root"))},31:function(e,t,n){e.exports={paginator:"Paginator_paginator__2Uoht",paginatorButton:"Paginator_paginatorButton__11WMf",prev:"Paginator_prev__3YHWO",next:"Paginator_next__3S8U4",pageNumber:"Paginator_pageNumber__2z-UL",selectedPage:"Paginator_selectedPage__3Z_CM"}},32:function(e,t,n){e.exports={user:"Users_user__3ADIN",userLinkPhotoWrapper:"Users_userLinkPhotoWrapper__8XNMP",userName:"Users_userName__2OD-o",userBottomLine:"Users_userBottomLine__2AT6d",followUnfollowButton:"Users_followUnfollowButton__1tbsn"}},37:function(e,t,n){e.exports={header:"Header_header__1KDWK",logoWrapper:"Header_logoWrapper__3PkIq",loginBlock:"Header_loginBlock__2kTNE",logOut:"Header_logOut__23U6t",logIn:"Header_logIn__2SycX"}},44:function(e,t,n){"use strict";var r=n.p+"static/media/spin.b0ba638e.svg",a=(n(0),n(1));t.a=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:r})})}},52:function(e,t,n){e.exports={formControl:"FormsControls_formControl__2IEnN",error:"FormsControls_error__3z1Ty",formSummaryError:"FormsControls_formSummaryError__mQSYO"}},69:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return O})),n.d(t,"c",(function(){return m})),n.d(t,"g",(function(){return v})),n.d(t,"e",(function(){return x})),n.d(t,"f",(function(){return w}));var r=n(8),a=n.n(r),c=n(14),o=n(48),s=n(3),i=n(12),u=n(33),l="ADD-POST",d="SET_USER_PROFILE",f="SET_STATUS",p="DELETE_POST",j="SAVE_PHOTO_SUCCESS",b={posts:[{id:1,message:"Guten Tag!",likesCount:15},{id:2,message:"Das ist mein zweiter Post.",likesCount:20}],profile:null,status:""},h=function(e){return{type:l,newPostText:e}},g=function(e){return{type:f,status:e}},O=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:d,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:r=t.sent,n(g(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.b.updateStatus(e);case 3:0===t.sent.data.resultCode&&n(g(e)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:j,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.userId,t.next=3,i.b.saveProfile(e);case 3:if(0!==(o=t.sent).data.resultCode){t.next=8;break}n(O(c)),t.next=10;break;case 8:return n(Object(u.a)("edit-profile",{_error:o.data.messages[0]})),t.abrupt("return",Promise.reject(o.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n={id:5,message:t.newPostText,likesCount:0};return Object(s.a)(Object(s.a)({},e),{},{posts:[].concat(Object(o.a)(e.posts),[n]),newPostText:""});case f:return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case d:return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case p:return Object(s.a)(Object(s.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case j:return Object(s.a)(Object(s.a)({},e),{},{profile:Object(s.a)(Object(s.a)({},e.profile),{},{photos:t.photos})});default:return e}}}},[[290,1,2]]]);
//# sourceMappingURL=main.3e66f41f.chunk.js.map