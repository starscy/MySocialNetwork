"use strict";(self.webpackChunkreact_start=self.webpackChunkreact_start||[]).push([[756],{756:function(s,e,t){t.r(e),t.d(e,{default:function(){return v}});var n=t(2077),a=t(8687),c=(t(2791),t(3105)),i=t(184),r=function(s){return console.log(s.chats),(0,i.jsx)("div",{children:s.chats.map((function(s){return(0,i.jsx)(c.Z,{to:"/messages/".concat(s.id),children:s.name})}))})},d=t(6139),h=t(704),u=(t(9568),t(9528)),o=t(8661),l=(0,o.BS)(30),m=(0,h.Z)({form:"messageSendForm"})((function(s){var e=s.handleSubmit;return(0,i.jsxs)("form",{onSubmit:e,children:[(0,i.jsx)(d.Z,{name:"message",component:u.Z,type:"text",validate:[o.C1,l]}),(0,i.jsx)("button",{type:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"})]})})),x=function(s){return(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{children:"\u041e\u043a\u043d\u043e \u0447\u0430\u0442\u0430"}),(0,i.jsx)("div",{children:s.chats.messages.map((function(s){return(0,i.jsx)("div",{children:(0,i.jsx)("p",{children:s.text})},s.id)}))}),(0,i.jsx)(m,{onSubmit:function(e){s.addNewMessage(e)}})]})},j={main:"Messages_main__eCIWE",active:"Messages_active__hZrrX",chats:"Messages_chats__KDzlE"},f=function(s){return(0,i.jsxs)("div",{className:j.main,children:[(0,i.jsxs)("div",{className:j.chats,children:[(0,i.jsx)("h3",{children:"\u0427\u0430\u0442\u044b"}),(0,i.jsx)(r,{chats:s.state.chats})]}),(0,i.jsx)("div",{className:j.messages,children:(0,i.jsx)(x,{chats:s.state,addNewMessage:function(e){return s.actionAddMessageThunk(e)}})})]})},g=t(1103),v=(0,t(7781).qC)((0,a.$j)((function(s){return{state:s.chatPage}}),{actionAddMessageThunk:n.rc}),g.D)(f)}}]);
//# sourceMappingURL=756.5b028483.chunk.js.map