(this.webpackJsonpreact_social_network=this.webpackJsonpreact_social_network||[]).push([[0],{106:function(e,t,n){"use strict";t.a=n.p+"static/media/userAvatar.e582e4ba.png"},12:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return i}));var r=n(130),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"18de538a-0af5-4877-87aa-16401c438e9a"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolent method. Use profileAPI object"),s.getProfile(e)}},s={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},o={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("auth/login")}},i={getCaptchaURL:function(){return a.get("security/get-captcha-url")}}},127:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n(45),a=n(3),c="SEND-MESSAGE",s={messages:[{id:1,message:"Hallo"},{id:1,message:"Was ist das?"},{id:1,message:"Willkommen"}],dialogs:[{id:1,name:"George"},{id:2,name:"Anna"},{id:3,name:"Nick"},{id:4,name:"Julia"},{id:5,name:"Alex"}]},o=function(e){return{type:c,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},132:function(e,t,n){},165:function(e,t,n){},166:function(e,t,n){},25:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return f}));var r=n(3),a=n(56),c=(n(0),n(49)),s=n.n(c),o=n(89),i=n(1),u=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,c=n&&r;return Object(i.jsxs)("div",{className:s.a.formControl+" "+(c?s.a.error:""),children:[Object(i.jsx)("div",{children:a}),c&&Object(i.jsx)("span",{children:r})]})},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(i.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},d=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(i.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},f=function(e,t,n,a){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(i.jsxs)("div",{children:[Object(i.jsx)(o.a,Object(r.a)({placeholder:e,name:t,component:n,validate:a},c)),s]})}},290:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(65),s=n.n(c),o=(n(165),n(36)),i=n(37),u=n(39),l=n(38),d=(n(166),n(30)),f=n.n(d),j=n(15),p=n(1),b=function(){return Object(p.jsx)("nav",{className:f.a.nav,children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:Object(p.jsx)(j.b,{to:"/profile",activeClassName:f.a.active,children:"Profile"})}),Object(p.jsx)("li",{children:Object(p.jsx)(j.b,{to:"/dialogs",activeClassName:f.a.active,children:"Messages"})}),Object(p.jsx)("li",{children:Object(p.jsx)(j.b,{to:"/users",activeClassName:f.a.active,children:"Users"})}),Object(p.jsx)("li",{children:Object(p.jsx)(j.b,{to:"/news",activeClassName:f.a.active,children:"News"})}),Object(p.jsx)("li",{children:Object(p.jsx)(j.b,{to:"/music",activeClassName:f.a.active,children:"Music"})}),Object(p.jsx)("li",{children:Object(p.jsx)(j.b,{to:"/settings",activeClassName:f.a.active,children:"Settings"})})]})})},h=n(11),O=n(18),g=n(8),v=n.n(g),m=n(14),x=n(45),w=n(3),P=n(12),_=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(w.a)(Object(w.a)({},e),r):e}))},C="FOLLOW",S="UNFOLLOW",y="SET_USERS",E="SET_CURRENT_PAGE",U="SET_TOTAL_USERS_COUNT",k="TOGGLE_IS_FETCHING",I="TOGGLE_IS_FOLLOWING_PROGRESS",N={users:[],pageSize:15,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},T=function(e){return{type:C,userId:e}},L=function(e){return{type:S,userId:e}},A=function(e){return{type:E,currentPage:e}},z=function(e){return{type:k,isFetching:e}},F=function(e,t){return{type:I,isFetching:e,userId:t}},R=function(){var e=Object(m.a)(v.a.mark((function e(t,n,r,a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(F(!0,n)),e.next=3,r(n);case 3:0==e.sent.data.resultCode&&t(a(n)),t(F(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(w.a)(Object(w.a)({},e),{},{users:_(e.users,t.userId,"id",{followed:!0})});case S:return Object(w.a)(Object(w.a)({},e),{},{users:_(e.users,t.userId,"id",{followed:!1})});case y:return Object(w.a)(Object(w.a)({},e),{},{users:t.users});case E:return Object(w.a)(Object(w.a)({},e),{},{currentPage:t.currentPage});case U:return Object(w.a)(Object(w.a)({},e),{},{totalUsersCount:t.totalUsersCount});case k:return Object(w.a)(Object(w.a)({},e),{},{isFetching:t.isFetching});case I:return Object(w.a)(Object(w.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(x.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},D=n(56),G=n(69),W=n(96),B=n(71),H=n.n(B),X=n(131),J=n.n(X),K=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,c=e.onPageChanged,s=e.portionSize,o=void 0===s?10:s,i=Math.ceil(t/n),u=[],l=1;l<=i;l++)u.push(l);var d=Math.ceil(i/o),f=Object(r.useState)(1),j=Object(W.a)(f,2),b=j[0],h=j[1],O=(b-1)*o+1,g=b*o;return Object(p.jsxs)("div",{className:H.a.paginator,children:[b>1&&Object(p.jsx)("button",{onClick:function(){h(b-1)},children:"PREV"}),u.filter((function(e){return e>=O&&e<=g})).map((function(e){return Object(p.jsx)("span",{className:J()(Object(G.a)({},H.a.selectedPage,a===e),H.a.pageNumber),onClick:function(t){c(e)},children:e},e)})),d>b&&Object(p.jsx)("button",{onClick:function(){h(b+1)},children:"NEXT"})]})},V=n(132),Y=n.n(V),Z=n(106),q=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,a=e.follow;return Object(p.jsxs)("div",{children:[Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:Object(p.jsx)(j.b,{to:"/profile/"+t.id,children:Object(p.jsx)("img",{src:null!==t.photos.small?t.photos.small:Z.a,className:Y.a.userPhoto,width:"100",height:"102",alt:""})})}),Object(p.jsx)("div",{children:t.followed?Object(p.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unfollow"}):Object(p.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Follow"})})]}),Object(p.jsxs)("span",{children:[Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:t.name}),Object(p.jsx)("div",{children:t.status})]}),Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:"user.location.country"}),Object(p.jsx)("div",{children:"user.location.city"})]})]})]})},Q=function(e){var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,a=e.onPageChanged,c=e.users,s=Object(D.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return Object(p.jsxs)("div",{children:[Object(p.jsx)(K,{currentPage:t,totalItemsCount:n,pageSize:r,onPageChanged:a}),Object(p.jsx)("div",{children:c.map((function(e){return Object(p.jsx)(q,{user:e,followingInProgress:s.followingInProgress,unfollow:s.unfollow,follow:s.follow},e.id)}))})]})},$=n(41),ee=n(10),te=n(133),ne=Object(te.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),re=function(e){return e.usersPage.pageSize},ae=function(e){return e.usersPage.totalUsersCount},ce=function(e){return e.usersPage.currentPage},se=function(e){return e.usersPage.isFetching},oe=function(e){return e.usersPage.followingInProgress},ie=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[this.props.isFetching?Object(p.jsx)($.a,{}):null,Object(p.jsx)(Q,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(a.a.Component),ue=Object(ee.d)(Object(O.b)((function(e){return{users:ne(e),pageSize:re(e),totalUsersCount:ae(e),currentPage:ce(e),isFetching:se(e),followingInProgress:oe(e)}}),{follow:function(e){return function(){var t=Object(m.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:R(n,e,P.d.follow.bind(P.d),T);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(m.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:R(n,e,P.d.unfollow.bind(P.d),L);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:A,toggleFollowingProgress:F,getUsers:function(e,t){return function(){var n=Object(m.a)(v.a.mark((function n(r){var a;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(z(!0)),r(A(e)),n.next=4,P.d.getUsers(e,t);case 4:a=n.sent,r(z(!1)),r((s=a.items,{type:y,users:s})),r((c=a.totalCount,{type:U,totalUsersCount:c}));case 8:case"end":return n.stop()}var c,s}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(ie),le=n(92),de=n.n(le),fe=n.p+"static/media/gr.59912a1b.svg",je=function(e){return Object(p.jsxs)("header",{className:de.a.header,children:[Object(p.jsx)("img",{src:fe,width:"100",height:"75",alt:""}),Object(p.jsx)("div",{className:de.a.loginBlock,children:e.isAuth?Object(p.jsxs)("div",{children:[e.login," - ",Object(p.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(p.jsx)(j.b,{to:"/login",children:"Login"})})]})},pe=n(31),be="gr-network/auth/SET_USER_DATA",he="gr-network/auth/GET_CAPTCHA_URL_SUCCESS",Oe={userId:null,email:null,login:null,isAuth:!1,captchaURL:null},ge=function(e,t,n,r){return{type:be,payload:{userId:e,email:t,login:n,isAuth:r}}},ve=function(){return function(){var e=Object(m.a)(v.a.mark((function e(t){var n,r,a,c,s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.email,s=r.login,t(ge(a,c,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},me=function(){return function(){var e=Object(m.a)(v.a.mark((function e(t){var n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.c.getCaptchaURL();case 2:n=e.sent,r=n.data.url,t({type:he,payload:{captchaURL:r}});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be:case he:return Object(w.a)(Object(w.a)({},e),t.payload);default:return e}},we=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(p.jsx)(je,Object(w.a)({},this.props))}}]),n}(a.a.Component),Pe=Object(O.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(m.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.logout();case 2:0===e.sent.data.resultCode&&t(ge(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(we),_e=n(128),Ce=n(25),Se=n(66),ye=n(49),Ee=n.n(ye),Ue=Object(_e.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaURL;return Object(p.jsxs)("form",{onSubmit:t,children:[Object(Ce.c)("Email","email",Ce.a,[Se.b]),Object(Ce.c)("Password","password",Ce.a,[Se.b],{type:"password"}),Object(Ce.c)(null,"rememberMe",Ce.a,[],{type:"checkbox"},"remember me"),r&&Object(p.jsx)("img",{src:r}),r&&Object(Ce.c)("Symbols from an image","captcha",Ce.a,[Se.b]),n&&Object(p.jsx)("div",{className:Ee.a.formSummaryError,children:n}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{children:"Login"})})]})})),ke=Object(O.b)((function(e){return{captchaURL:e.auth.captchaURL,isAuth:e.auth.isAuth}}),{login:function(e,t,n,r){return function(){var a=Object(m.a)(v.a.mark((function a(c){var s,o;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,P.a.login(e,t,n,r);case 2:0===(s=a.sent).data.resultCode?c(ve()):(10===s.data.resultCode&&c(me()),o=s.data.messages.length>0?s.data.messages[0]:"Some error",c(Object(pe.a)("login",{_error:o})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(p.jsx)(h.a,{to:"/profile"}):Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Login"}),Object(p.jsx)(Ue,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaURL:e.captchaURL})]})})),Ie="INITIALIZED_SUCCESS",Ne={initialized:!1,globalError:null},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ie:return Object(w.a)(Object(w.a)({},e),{},{initialized:!0});default:return e}},Le={},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le;return e},ze=n(127),Fe=n(95),Re=n(135),Me=n(129),De=Object(ee.c)({profilePage:Fe.b,messagesPage:ze.a,sidebar:Ae,usersPage:M,auth:xe,form:Me.a,app:Te}),Ge=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ee.d,We=Object(ee.e)(De,Ge(Object(ee.a)(Re.a)));window.__store__=We;var Be=We,He=function(e){return function(t){return Object(p.jsx)(a.a.Suspense,{fallback:Object(p.jsx)($.a,{}),children:Object(p.jsx)(e,Object(w.a)({},t))})}},Xe=a.a.lazy((function(){return n.e(3).then(n.bind(null,298))})),Je=a.a.lazy((function(){return n.e(4).then(n.bind(null,297))})),Ke=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).catchAllUnhandledErrors=function(e,t){alert("Some error occurred")},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?Object(p.jsxs)("div",{className:"app-wrapper",children:[Object(p.jsx)(Pe,{}),Object(p.jsx)(b,{}),Object(p.jsx)("div",{className:"app-wrapper-content",children:Object(p.jsxs)(h.d,{children:[Object(p.jsx)(h.b,{exact:!0,path:"/",render:function(){return Object(p.jsx)(h.a,{to:"/profile"})}}),Object(p.jsx)(h.b,{path:"/dialogs",render:He(Xe)}),Object(p.jsx)(h.b,{path:"/profile/:userId?",render:He(Je)}),Object(p.jsx)(h.b,{path:"/users",render:function(){return Object(p.jsx)(ue,{})}}),Object(p.jsx)(h.b,{path:"/login",render:function(){return Object(p.jsx)(ke,{})}}),Object(p.jsx)(h.b,{path:"*",render:function(){return Object(p.jsx)("div",{children:"404 NOT FOUND"})}})]})})]}):Object(p.jsx)($.a,{})}}]),n}(r.Component),Ve=Object(ee.d)(h.g,Object(O.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(ve());Promise.all([t]).then((function(){e({type:Ie})}))}}}))(Ke),Ye=function(e){return Object(p.jsx)(j.a,{children:Object(p.jsx)(O.a,{store:Be,children:Object(p.jsx)(Ve,{})})})};s.a.render(Object(p.jsx)(Ye,{}),document.getElementById("root"))},30:function(e,t,n){e.exports={nav:"Navbar_nav__2XLN_",active:"Navbar_active__2cS6t"}},41:function(e,t,n){"use strict";var r=n.p+"static/media/spin.b0ba638e.svg",a=(n(0),n(1));t.a=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:r})})}},49:function(e,t,n){e.exports={formControl:"FormsControls_formControl__2IEnN",error:"FormsControls_error__3z1Ty",formSummaryError:"FormsControls_formSummaryError__mQSYO"}},66:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},71:function(e,t,n){e.exports={paginator:"Paginator_paginator__2Uoht",pageNumber:"Paginator_pageNumber__2z-UL",selectedPage:"Paginator_selectedPage__3Z_CM"}},92:function(e,t,n){e.exports={header:"Header_header__1KDWK",loginBlock:"Header_loginBlock__2kTNE"}},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return g})),n.d(t,"c",(function(){return v})),n.d(t,"g",(function(){return m})),n.d(t,"e",(function(){return x})),n.d(t,"f",(function(){return w}));var r=n(8),a=n.n(r),c=n(14),s=n(45),o=n(3),i=n(12),u=n(31),l="ADD-POST",d="SET_USER_PROFILE",f="SET_STATUS",j="DELETE_POST",p="SAVE_PHOTO_SUCCESS",b={posts:[{id:1,message:"Guten Tag!",likesCount:15},{id:2,message:"Das ist mein zweiter Post.",likesCount:20}],profile:null,status:""},h=function(e){return{type:l,newPostText:e}},O=function(e){return{type:f,status:e}},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:d,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:r=t.sent,n(O(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.b.updateStatus(e);case 3:0===t.sent.data.resultCode&&n(O(e)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:p,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.userId,t.next=3,i.b.saveProfile(e);case 3:if(0!==(s=t.sent).data.resultCode){t.next=8;break}n(g(c)),t.next=10;break;case 8:return n(Object(u.a)("edit-profile",{_error:s.data.messages[0]})),t.abrupt("return",Promise.reject(s.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n={id:5,message:t.newPostText,likesCount:0};return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[n]),newPostText:""});case f:return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case d:return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case j:return Object(o.a)(Object(o.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case p:return Object(o.a)(Object(o.a)({},e),{},{profile:Object(o.a)(Object(o.a)({},e.profile),{},{photos:t.photos})});default:return e}}}},[[290,1,2]]]);
//# sourceMappingURL=main.ec8f1123.chunk.js.map