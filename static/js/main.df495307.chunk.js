(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,,,function(t,e,s){t.exports={button:"FeedbackOptions_button__1-N5d",buttonList:"FeedbackOptions_buttonList__3osZl"}},,function(t,e,s){t.exports={section:"Section_section__23P02"}},function(t,e,s){t.exports={statisticsList:"Statistics_statisticsList__2rxn_",statisticsItem:"Statistics_statisticsItem__2jd6r"}},,,,,,function(t,e,s){},function(t,e,s){},,,,function(t,e,s){"use strict";s.r(e);var n=s(1),c=s.n(n),i=s(5),a=s.n(i),o=(s(13),s(2)),r=(s(14),s(6)),b=s.n(r),u=s(0),j=function(t){var e=t.title,s=t.children;return Object(u.jsxs)("section",{className:b.a.section,children:[Object(u.jsx)("h2",{children:e}),s]})},l=s(4),d=s.n(l),O=function(t){var e=t.options,s=t.onLeaveFeedback;return Object(u.jsx)("ul",{className:d.a.buttonList,children:e.map((function(t,e){return Object(u.jsx)("li",{children:Object(u.jsx)("button",{type:"button",className:d.a.button,name:t,onClick:function(){return s(t)},children:t})},e)}))})},h=s(7),x=s.n(h),f=function(t){var e=t.good,s=t.neutral,n=t.bad,c=t.total,i=t.positivePercentage;return Object(u.jsxs)("ul",{className:x.a.statisticsList,children:[Object(u.jsxs)("li",{children:["Good: ",e]}),Object(u.jsxs)("li",{children:["Neutral: ",s]}),Object(u.jsxs)("li",{children:["Bad: ",n]}),Object(u.jsxs)("li",{children:["Total: ",c]}),Object(u.jsxs)("li",{children:["Positive feedback: ",i," %"]})]})},p=s(8),k=function(t){var e=t.message;return Object(u.jsx)("p",{children:e})};k.prototype={message:s.n(p).a.string.isRequired};var _=k;function v(){var t=Object(n.useState)(0),e=Object(o.a)(t,2),s=e[0],c=e[1],i=Object(n.useState)(0),a=Object(o.a)(i,2),r=a[0],b=a[1],l=Object(n.useState)(0),d=Object(o.a)(l,2),h=d[0],x=d[1],p=function(){return s+r+h};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(j,{title:"Please leave feedback",children:Object(u.jsx)(O,{options:["good","neutral","bad"],onLeaveFeedback:function(t){switch(t){case"good":c(s+1);break;case"neutral":b(r+1);break;case"bad":x(h+1);break;default:return}}})}),Object(u.jsx)(j,{title:"Statistics",children:p()>0?Object(u.jsx)(f,{title:"Statistics",good:s,neutral:r,bad:h,total:p(),positiveFeedback:function(){var t=p();return Math.round(s/t*100)||0}()}):Object(u.jsx)(_,{message:"No feedback given"})})]})}a.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.df495307.chunk.js.map