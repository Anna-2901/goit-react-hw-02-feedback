(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(e,t,n){e.exports={box:"Statistics_box__3Tm_Z",options:"Statistics_options__1__k_",Counter__controls:"Statistics_Counter__controls__3TSWs"}},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),o=n(5),s=n.n(o),i=(n(16),n(6)),r=n(7),d=n(8),l=n(11),b=n(10),u=n(9),j=n.n(u),h=n(0),p=function(e){var t=e.title,n=e.children;return Object(h.jsxs)("div",{className:j.a.section,children:[Object(h.jsx)("h2",{children:t}),n]})},_=n(1),O=n.n(_);var k=function(e){var t=e.message;return Object(h.jsx)("p",{children:t})},v=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,o=e.positiveFeedbackPercentage;return Object(h.jsx)(h.Fragment,{children:c?Object(h.jsxs)("ul",{className:O.a.Counter__controls,children:[Object(h.jsxs)("li",{className:O.a.options,children:["Good: ",t]}),Object(h.jsxs)("li",{className:O.a.options,children:["Neutral: ",n]}),Object(h.jsxs)("li",{className:O.a.options,children:["Bad: ",a]}),Object(h.jsxs)("li",{className:O.a.options,children:["Total: ",c]}),Object(h.jsxs)("li",{className:O.a.options,children:["Positive Feedback: ",o,"%"]})]}):Object(h.jsx)(k,{message:"No feedback given"})})},x=n(4),f=n.n(x),g=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(h.jsx)("div",{className:f.a.options,children:t.map((function(e){return Object(h.jsx)("button",{className:f.a.button,type:"button","data-feedback":e,onClick:n,children:e},e)}))})},m=["good","bad","neutral"],F=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){var t=e.state,n=t.good,a=t.neutral;return n+t.bad+a},e.countPositiveFeedbackPercentage=function(){var t=e.countTotalFeedback(),n=e.state.good;return t?Math.round(n/t*100):0},e.handleFeedback=function(t){var n=t.target.dataset.feedback;e.setState((function(e){return Object(i.a)({},n,e[n]+1)}))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,c=this.countTotalFeedback(),o=this.countPositiveFeedbackPercentage();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(p,{title:"Please leave feedback",children:Object(h.jsx)(g,{options:m,onLeaveFeedback:this.handleFeedback})}),Object(h.jsx)(p,{title:"Statistics",children:Object(h.jsx)(v,{good:t,neutral:n,bad:a,total:c,positiveFeedbackPercentage:o})})]})}}]),n}(a.Component);s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(F,{})}),document.getElementById("root"))},4:function(e,t,n){e.exports={options:"FeedbackOptions_options__IHMjW",button:"FeedbackOptions_button__18V8m"}},9:function(e,t,n){e.exports={section:"Section_section__VFWa9"}}},[[18,1,2]]]);
//# sourceMappingURL=main.3d4d24f9.chunk.js.map