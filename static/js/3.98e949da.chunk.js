(this.webpackJsonpreact_social_network=this.webpackJsonpreact_social_network||[]).push([[3],{292:function(e,s,t){e.exports={dialogs:"Dialogs_dialogs__p6-jD",dialogsItems:"Dialogs_dialogsItems__2RO4y",messages:"Dialogs_messages__3hWiF"}},293:function(e,s,t){e.exports={dialog:"DialogItem_dialog__vDdHb",active:"DialogItem_active__W8jeH"}},294:function(e,s,t){e.exports={message:"Message_message__2JKLd"}},298:function(e,s,t){"use strict";t.r(s);var a=t(127),n=t(0),i=t.n(n),c=t(292),o=t.n(c),r=t(293),d=t.n(r),j=t(15),l=t(1),u=function(e){var s="/dialogs/".concat(e.id);return Object(l.jsx)("div",{className:d.a.dialog,children:Object(l.jsx)(j.b,{to:s,activeClassName:d.a.active,children:e.name})})},b=t(294),g=t.n(b),m=function(e){return Object(l.jsx)("div",{className:g.a.message,children:e.message})},O=t(11),h=t(89),f=t(128),x=t(25),_=t(66),v=Object(_.a)(50),p=Object(f.a)({form:"dialogAddMessageForm"})((function(e){return Object(l.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(l.jsx)("div",{children:Object(l.jsx)(h.a,{component:x.b,validate:[_.b,v],name:"newMessageBody",placeholder:"Enter your message"})}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{children:"Send"})})]})})),w=function(e){var s=e.messagesPage,t=s.dialogs.map((function(e){return Object(l.jsx)(u,{name:e.name,id:e.id},e.id)})),a=s.messages.map((function(e){return Object(l.jsx)(m,{message:e.message,id:e.id},e.id)}));s.newMessageBody;return e.isAuth?Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:o.a.dialogs,children:[Object(l.jsx)("div",{className:o.a.dialogsItems,children:t}),Object(l.jsxs)("div",{className:o.a.messages,children:[Object(l.jsx)("div",{children:a}),Object(l.jsx)(p,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})]})]})}):Object(l.jsx)(O.a,{to:"/login"})},y=t(18),D=t(3),M=t(36),N=t(37),k=t(39),A=t(38),I=function(e){return{isAuth:e.auth.isAuth}},S=t(10);s.default=Object(S.d)(Object(y.b)((function(e){return{messagesPage:e.messagesPage}}),(function(e){return{sendMessage:function(s){e(Object(a.b)(s))}}})),(function(e){var s=function(s){Object(k.a)(a,s);var t=Object(A.a)(a);function a(){return Object(M.a)(this,a),t.apply(this,arguments)}return Object(N.a)(a,[{key:"render",value:function(){return this.props.isAuth?Object(l.jsx)(e,Object(D.a)({},this.props)):Object(l.jsx)(O.a,{to:"/login"})}}]),a}(i.a.Component);return Object(y.b)(I)(s)}))(w)}}]);
//# sourceMappingURL=3.98e949da.chunk.js.map