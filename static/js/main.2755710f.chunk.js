(this["webpackJsonpnull-innovation"]=this["webpackJsonpnull-innovation"]||[]).push([[0],{12:function(A,e){A.exports={LOG_KEY:"is_logged"}},26:function(A,e,t){},27:function(A,e,t){},35:function(A,e,t){"use strict";t.r(e);var c=t(1),s=t.n(c),a=t(18),n=t.n(a),r=(t(26),t(5)),i=t(9),o=(t(27),t(8)),g=t(2),l=t.p+"static/media/sword.87584c9f.png",d=t(0);function j(){return Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)("img",{className:"loader",width:"60px",src:l,alt:"asteroid"})})}function u(A){var e=A.isLogged,t=A.onLogin,c=A.onLogout;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("nav",{className:"navbar",children:Object(d.jsxs)("div",{className:"nav-wrapper",children:[Object(d.jsxs)("div",{className:"brand-logo left",children:[Object(d.jsx)(o.b,{to:"/",className:"navButton black-text",children:"PostBlade"}),Object(d.jsx)("img",{src:l,alt:"sword-image",className:"swordImage"})]}),Object(d.jsx)("ul",{id:"nav-mobile",className:"right",children:e?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("li",{onClick:c,className:"navButton",children:Object(d.jsx)(o.b,{to:"/",className:"black-text",children:"Logout"})}),Object(d.jsx)("li",{className:"navButton",children:Object(d.jsx)(o.c,{exact:!0,activeClassName:"is-active",className:"black-text",to:"/posts",children:"Posts"})})]}):Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("li",{onClick:t,className:"navButton",children:Object(d.jsx)(o.b,{to:"/",className:"black-text",children:"Login"})})})})]})}),Object(d.jsx)("br",{})]})}var b=t(12),O=t.n(b),B={loginUser:function(){window.localStorage.setItem(O.a.LOG_KEY,!0)},checkUser:function(){return window.localStorage.getItem(O.a.LOG_KEY)},logoutUser:function(){window.localStorage.removeItem(O.a.LOG_KEY)}},w=t(16),h=t.n(w),m=t(21);function C(A){var e=A.handleTitleSearch,t=A.handleUserNameSearch,s=Object(c.useState)(""),a=Object(i.a)(s,2),n=a[0],r=a[1];return Object(d.jsxs)("div",{className:"search-container",children:[Object(d.jsx)("input",{className:"query",type:"text",onChange:function(A){r(A.target.value)},placeholder:"Search",value:n}),Object(d.jsx)("button",{className:"btn displaced",onClick:function(A){e(n),r("")},children:"Search By Title"}),Object(d.jsx)("button",{className:"btn displaced",onClick:function(A){t(n),r("")},children:"Search By UserName"})]})}function x(A){var e=A.isLogged,t=Object(c.useState)({posts:[],loading:!0,displayablePosts:[]}),s=Object(i.a)(t,2),a=s[0],n=s[1],o=Object(c.useState)(!1),l=Object(i.a)(o,2),u=l[0],b=l[1];Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/posts/").then((function(A){return A.json()})).then((function(A){return n({loading:!1,posts:A.slice([0],[10]),displayablePosts:A.slice([0],[10])})})).catch((function(A){return b(!0)}))}),[]);var O=function(){var A=Object(m.a)(h.a.mark((function A(e){var t,c,s;return h.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return n(Object(r.a)(Object(r.a)({},a),{},{loading:!0})),A.next=3,fetch("https://jsonplaceholder.typicode.com/users");case 3:return t=A.sent,A.next=6,t.json();case 6:if(t=A.sent,c=t.filter((function(A){return e.toLowerCase()===A.username.toLowerCase()}))[0]){A.next=11;break}return n(Object(r.a)(Object(r.a)({},a),{},{displayablePosts:[],loading:!1})),A.abrupt("return",null);case 11:return A.next=13,fetch("https://jsonplaceholder.typicode.com/posts?userId=".concat(c.id));case 13:return s=A.sent,A.next=16,s.json();case 16:s=A.sent,n(Object(r.a)(Object(r.a)({},a),{},{loading:!1,displayablePosts:s}));case 18:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}();return e?a.loading?Object(d.jsx)(j,{}):u?Object(d.jsx)("div",{className:"error",children:"Something went wrong, please refresh the page."}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(C,{handleTitleSearch:function(A){var e=a.posts.filter((function(e){return e.title.includes(A)}));n(Object(r.a)(Object(r.a)({},a),{},{displayablePosts:e}))},handleUserNameSearch:O}),0===a.displayablePosts.length&&Object(d.jsx)("div",{className:"center",children:"None Found!"}),a.displayablePosts.map((function(A,e){return Object(d.jsx)(f,{title:A.title,body:A.body,userid:A.userId},e)}))]}):Object(d.jsx)(g.a,{to:"/"})}var f=function(A){var e=A.title,t=A.body,c=A.userid;return Object(d.jsxs)("div",{className:"card blue-grey lighten-1 semi-full",children:[Object(d.jsxs)("div",{className:"card-content white-text",children:[Object(d.jsx)("span",{className:"card-title thick-text",children:e}),Object(d.jsx)("p",{children:t})]}),Object(d.jsx)("div",{className:"card-action",children:Object(d.jsxs)("div",{children:[" Posted by : ",Object(d.jsxs)(o.b,{to:"/users/".concat(c),children:["User ",c]})," "]})})]})};function p(A){var e=A.isLogged,t=Object(g.g)(),s=Object(c.useState)({user:null,loading:!0}),a=Object(i.a)(s,2),n=a[0],r=a[1],o=Object(c.useState)(!1),l=Object(i.a)(o,2),u=l[0],b=l[1];return Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users?id=".concat(t.id)).then((function(A){return A.json()})).then((function(A){if(!(null==A||A.length>0))throw Error;r({loading:!1,user:A[0]})})).catch((function(A){return b(!0)}))}),[t]),e?u?Object(d.jsx)("div",{className:"error",children:"Something went wrong or the user does not exist, please refresh the page and try again."}):n.loading?Object(d.jsx)(j,{}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"centered headingText",children:"User Information"}),Object(d.jsx)(Q,{name:n.user.name,username:n.user.username,email:n.user.email,number:n.user.email})]}):Object(d.jsx)(g.a,{to:"/"})}var Q=function(A){var e=A.name,t=A.username,c=A.email,s=A.number;return Object(d.jsxs)("div",{className:"card horizontal cyan darken-1 contact-card white-text",children:[Object(d.jsx)("div",{className:"card-image",children:Object(d.jsx)("div",{className:"imageWrapper",children:Object(d.jsx)("img",{alt:"",src:"data:image/png;base64,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",className:"contactImage"})})}),Object(d.jsx)("div",{className:"card-stacked",children:Object(d.jsxs)("div",{className:"card-content",children:[Object(d.jsxs)("p",{children:["Name: ",e]}),Object(d.jsxs)("p",{children:["Username: ",t]}),Object(d.jsxs)("p",{children:["Email: ",c]}),Object(d.jsxs)("p",{children:["Phone Number: ",s]})]})})]})};var I=function(){var A=Object(c.useState)({isLogged:!1,loading:!0}),e=Object(i.a)(A,2),t=e[0],s=e[1];return Object(c.useEffect)((function(){var A=B.checkUser();s({loading:!1,isLogged:!!A})}),[]),t.loading?Object(d.jsx)(j,{}):Object(d.jsxs)(o.a,{children:[Object(d.jsx)(u,{isLogged:t.isLogged,onLogin:function(){B.loginUser(),s(Object(r.a)(Object(r.a)({},t),{},{isLogged:!0}))},onLogout:function(){B.logoutUser(),s(Object(r.a)(Object(r.a)({},t),{},{isLogged:!1}))}}),Object(d.jsxs)(g.d,{children:[Object(d.jsx)(g.b,{exact:!0,path:"/",children:Object(d.jsx)("div",{className:"centered headingText",children:t.isLogged?"Welcome":"Please Login!"})}),Object(d.jsx)(g.b,{exact:!0,path:"/posts",children:Object(d.jsx)(x,{isLogged:t.isLogged})}),Object(d.jsx)(g.b,{exact:!0,path:"/users/:id",children:Object(d.jsx)(p,{isLogged:t.isLogged})})]})]})};n.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(I,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.2755710f.chunk.js.map