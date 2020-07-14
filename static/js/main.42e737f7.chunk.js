(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{170:function(e,t,n){},171:function(e,t,n){},172:function(e,t,n){},173:function(e,t,n){},174:function(e,t,n){},175:function(e,t,n){},176:function(e,t,n){},177:function(e,t,n){},180:function(e,t,n){},181:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(15),r=n.n(o),l=(n(70),n(40)),c=n.n(l),s=n(61),u=n(11),d=n(12),m=n(14),h=n(13),E=n(18),f=n(2),v=n(5),p=(n(72),n(73),i.a.createContext({token:null,userId:null,login:function(e,t,n){},logout:function(){}})),g="https://graphql-mern-event-booking-api.herokuapp.com/graphql",b=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={isLogin:!0},a.switchModeHandler=function(){a.setState((function(e){return{isLogin:!e.isLogin}}))},a.submitHandler=function(e){e.preventDefault();var t=a.emailEl.current.value,n=a.passwordEl.current.value;if(0!==t.trim().length&&0!==n.trim().length){var i={query:"\n        query Login($email: String!, $pwd: String!) {\n          login(email: $email, password: $pwd) {\n            userId\n            token\n            tokenExpiration\n          }\n        }\n      ",variables:{email:t,pwd:n}};a.state.isLogin||(i={query:"\n          mutation CreateUser($email: String!, $pwd: String!) {\n            createUser(userInput: {email: $email, password: $pwd}) {\n              _id\n              email\n            }\n          }\n        ",variables:{email:t,pwd:n}}),fetch(g,{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"}}).then((function(e){if(200!==e.status&&201!==e.status)throw new Error("Authentication Failed!");return e.json()})).then((function(e){e.data.login&&e.data.login.token&&a.state.isLogin?a.context.login(e.data.login.token,e.data.login.userId,e.data.login.tokenExpiration):(v.b.success("Signed up successfully!"),a.switchModeHandler())})).catch((function(e){console.log(e),v.b.error(e.message)}))}},a.emailEl=i.a.createRef(),a.passwordEl=i.a.createRef(),console.log("NODE_ENV","production"),a}return Object(d.a)(n,[{key:"render",value:function(){return i.a.createElement("form",{className:"auth-form",onSubmit:this.submitHandler},i.a.createElement("div",{className:"form-control"},i.a.createElement("label",{htmlFor:"email"},"E-Mail"),i.a.createElement("input",{type:"email",id:"email",ref:this.emailEl})),i.a.createElement("div",{className:"form-control"},i.a.createElement("label",{htmlFor:"password"},"Password"),i.a.createElement("input",{type:"password",id:"password",ref:this.passwordEl})),i.a.createElement("div",{className:"form-actions"},i.a.createElement("button",{type:"submit"},this.state.isLogin?"Login":"Signup"),i.a.createElement("button",{type:"button",onClick:this.switchModeHandler},"Switch to ",this.state.isLogin?"Signup":"Login")))}}]),n}(a.Component);b.contextType=p;var k=b,y=(n(76),function(){return i.a.createElement("div",{className:"spinner"},i.a.createElement("div",{className:"lds-dual-ring"}))}),S=(n(77),function(e){return i.a.createElement("ul",{className:"bookings__list"},e.bookings.map((function(t){return i.a.createElement("li",{key:t._id,className:"bookings__item"},i.a.createElement("div",{className:"bookings__item-data"},i.a.createElement("span",null,t.event.title)," -",new Date(t.createdAt).toLocaleDateString()),i.a.createElement("div",{className:"bookings__item-actions"},i.a.createElement("button",{className:"btn",onClick:e.onDelete.bind(void 0,t._id)},"Cancel")))})))}),C=n(29),w=n(62),N=(n(170),{Cheap:{min:0,max:100},Normal:{min:100,max:200},Expensive:{min:200,max:1e7}}),_=function(e){var t={labels:[],datasets:[]},n=[],a=function(a){var i=e.bookings.reduce((function(e,t){return t.event.price>N[a].min&&t.event.price<=N[a].max?e+1:e}),0);n.push(i),t.labels.push(a),t.datasets.push({label:a,backgroundColor:"rgba(255, 247, 15, 0.5)",borderColor:"rgba(252, 227, 83, 1)",borderWidth:1,hoverBackgroundColor:"rgba(255, 239, 15, 0.6)",hoverBorderColor:"rgba(248, 226, 100, 1)",data:n}),(n=Object(C.a)(n))[n.length-1]=0};for(var o in N)a(o);return i.a.createElement("div",{className:"bookings-chart"},i.a.createElement(w.a,{data:t}))},O=(n(171),function(e){return i.a.createElement("div",{className:"bookings-control"},i.a.createElement("button",{className:"list"===e.activeOutputType?"active":"",onClick:e.onChange.bind(void 0,"list")},"List"),i.a.createElement("button",{className:"chart"===e.activeOutputType?"active":"",onClick:e.onChange.bind(void 0,"chart")},"Chart"))}),I=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={isLoading:!1,bookings:[],outputType:"list"},e.fetchBookings=function(){e.setState({isLoading:!0});fetch(g,{method:"POST",body:JSON.stringify({query:"\n          query {\n            bookings {\n              _id\n             createdAt\n             event {\n               _id\n               title\n               date\n               price\n             }\n            }\n          }\n        "}),headers:{"Content-Type":"application/json",Authorization:"Bearer "+e.context.token}}).then((function(e){if(200!==e.status&&201!==e.status)throw new Error("Failed!");return e.json()})).then((function(t){var n=t.data.bookings;e.setState({bookings:n,isLoading:!1})})).catch((function(t){console.log(t),e.setState({isLoading:!1})}))},e.deleteBookingHandler=function(t){e.setState({isLoading:!0});var n={query:"\n          mutation CancelBooking($id: ID!) {\n            cancelBooking(bookingId: $id) {\n            _id\n             title\n            }\n          }\n        ",variables:{id:t}};fetch(g,{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json",Authorization:"Bearer "+e.context.token}}).then((function(e){if(200!==e.status&&201!==e.status)throw new Error("Failed!");return e.json()})).then((function(n){e.setState((function(e){return{bookings:e.bookings.filter((function(e){return e._id!==t})),isLoading:!1}})),v.b.warn('Event: "'.concat(n.data.cancelBooking.title,'" booking cancelled successfully.'))})).catch((function(t){console.log(t),e.setState({isLoading:!1}),v.b.error(t.message)}))},e.changeOutputTypeHandler=function(t){"list"===t?e.setState({outputType:"list"}):e.setState({outputType:"chart"})},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.fetchBookings()}},{key:"render",value:function(){var e=i.a.createElement(y,null);return this.state.isLoading||(e=i.a.createElement(i.a.Fragment,null,i.a.createElement(O,{activeOutputType:this.state.outputType,onChange:this.changeOutputTypeHandler}),i.a.createElement("div",null,"list"===this.state.outputType?i.a.createElement(S,{bookings:this.state.bookings,onDelete:this.deleteBookingHandler}):i.a.createElement(_,{bookings:this.state.bookings})))),i.a.createElement(i.a.Fragment,null,e)}}]),n}(a.Component);I.contextType=p;var x=I,T=(n(172),function(e){return i.a.createElement("div",{className:"modal"},i.a.createElement("header",{className:"modal__header"},i.a.createElement("h1",null,e.title)),i.a.createElement("section",{className:"modal__content"},e.children),i.a.createElement("section",{className:"modal__actions"},e.canConfirm&&i.a.createElement("button",{className:"btn btn-primary",onClick:e.onConfirm},e.confirmText),e.canCancel&&i.a.createElement("button",{className:"btn",onClick:e.onCancel},"Cancel")))}),j=(n(173),function(e){return i.a.createElement("div",{className:"backdrop"})}),L=(n(174),function(e){return i.a.createElement("li",{key:e.eventId,className:"events__list-item"},i.a.createElement("div",null,i.a.createElement("h1",null,e.title),i.a.createElement("h2",null,i.a.createElement("span",null,"$",e.price)," -"," ",new Date(e.date).toLocaleDateString())),i.a.createElement("div",null,e.userId===e.creatorId?i.a.createElement("p",null,"You're the owner of this event."):i.a.createElement("button",{className:"btn btn-primary",onClick:e.onDetail.bind(void 0,e.eventId)},"View Details")))}),D=(n(175),function(e){var t=e.events.map((function(t){return i.a.createElement(L,{key:t._id,eventId:t._id,title:t.title,price:t.price,date:t.date,userId:e.authUserId,creatorId:t.creator._id,onDetail:e.onViewDetail})}));return i.a.createElement("ul",{className:"event__list"},t)}),$=(n(176),function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={creating:!1,events:[],isLoading:!1,selectedEvent:null},a.isActive=!0,a.startCreateEventHandler=function(){a.setState({creating:!0})},a.modalConfirmHandler=function(){a.setState({creating:!1});var e=a.titleElRef.current.value,t=+a.priceElRef.current.value,n=a.dateElRef.current.value,i=a.descriptionElRef.current.value;if(!(0===e.trim().length||t<=0||0===n.trim().length||0===i.trim().length)){var o={title:e,price:t,date:n,description:i};console.log(o);var r={query:"\n          mutation CreateEvent($title: String!, $description: String!, $price: Float!, $date: String!) {\n            createEvent(eventInput: {title: $title, description: $description, price: $price, date: $date}) {\n              _id\n              title\n              description\n              date\n              price\n            }\n          }\n        ",variables:{title:e,description:i,price:t,date:n}},l=a.context.token;fetch(g,{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json",Authorization:"Bearer "+l}}).then((function(e){if(200!==e.status&&201!==e.status)throw new Error("Failed!");return e.json()})).then((function(e){a.setState((function(t){var n=Object(C.a)(t.events);return n.push({_id:e.data.createEvent._id,title:e.data.createEvent.title,description:e.data.createEvent.description,date:e.data.createEvent.date,price:e.data.createEvent.price,creator:{_id:a.context.userId}}),{events:n}})),v.b.success('Event: "'.concat(e.data.createEvent.title,'" created successfully.'))})).catch((function(e){console.log(e),v.b.error(e.message)}))}},a.modalCancelHandler=function(){a.setState({creating:!1,selectedEvent:null})},a.showDetailHandler=function(e){a.setState((function(t){var n=t.events.find((function(t){return t._id===e}));return console.log("this.state.selectedEvent",n),{selectedEvent:n}}))},a.bookEventHandler=function(){if(a.context.token){console.log(a.state.selectedEvent);var e={query:"\n          mutation BookEvent($id: ID!) {\n            bookEvent(eventId: $id) {\n              _id\n             createdAt\n             updatedAt\n             event {\n               title\n             }\n            }\n          }\n        ",variables:{id:a.state.selectedEvent._id}};fetch(g,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json",Authorization:"Bearer "+a.context.token}}).then((function(e){if(200!==e.status&&201!==e.status)throw new Error("Failed!");return e.json()})).then((function(e){console.log(e),a.setState({selectedEvent:null}),v.b.success('Event: "'.concat(e.data.bookEvent.event.title,'" booked successfully.'))})).catch((function(e){console.log(e),v.b.error(e.message)}))}else a.setState({selectedEvent:null})},a.titleElRef=i.a.createRef(),a.priceElRef=i.a.createRef(),a.dateElRef=i.a.createRef(),a.descriptionElRef=i.a.createRef(),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.fetchEvents()}},{key:"fetchEvents",value:function(){var e=this;this.setState({isLoading:!0});fetch(g,{method:"POST",body:JSON.stringify({query:"\n          query {\n            events {\n              _id\n              title\n              description\n              date\n              price\n              creator {\n                _id\n                email\n              }\n            }\n          }\n        "}),headers:{"Content-Type":"application/json"}}).then((function(e){if(200!==e.status&&201!==e.status)throw new Error("Failed!");return e.json()})).then((function(t){var n=t.data.events;e.isActive&&e.setState({events:n,isLoading:!1})})).catch((function(t){console.log(t),e.isActive&&e.setState({isLoading:!1})}))}},{key:"componentWillUnmount",value:function(){this.isActive=!1}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,(this.state.creating||this.state.selectedEvent)&&i.a.createElement(j,null),this.state.creating&&i.a.createElement(T,{title:"Add Event",canCancel:!0,canConfirm:!0,onCancel:this.modalCancelHandler,onConfirm:this.modalConfirmHandler,confirmText:"Confirm"},i.a.createElement("form",null,i.a.createElement("div",{className:"form-control"},i.a.createElement("label",{htmlFor:"title"},"Title"),i.a.createElement("input",{type:"text",id:"title",ref:this.titleElRef})),i.a.createElement("div",{className:"form-control"},i.a.createElement("label",{htmlFor:"price"},"Price"),i.a.createElement("input",{type:"number",id:"price",ref:this.priceElRef})),i.a.createElement("div",{className:"form-control"},i.a.createElement("label",{htmlFor:"date"},"Date"),i.a.createElement("input",{type:"datetime-local",id:"date",ref:this.dateElRef})),i.a.createElement("div",{className:"form-control"},i.a.createElement("label",{htmlFor:"description"},"Description"),i.a.createElement("textarea",{id:"description",rows:"4",ref:this.descriptionElRef})))),this.state.selectedEvent&&i.a.createElement(T,{title:this.state.selectedEvent.title,canCancel:!0,canConfirm:!0,onCancel:this.modalCancelHandler,onConfirm:this.bookEventHandler,confirmText:this.context.token?"Book":"Confirm"},i.a.createElement("h2",{className:"events-modal-date"},new Date(this.state.selectedEvent.date).toLocaleDateString()),i.a.createElement("h2",null,"$",this.state.selectedEvent.price),i.a.createElement("p",null,this.state.selectedEvent.description),i.a.createElement("p",null,"For queries, contact at: ",this.state.selectedEvent.creator.email)),this.context.token&&i.a.createElement("div",{className:"events-control"},i.a.createElement("p",null,"Share your own Events!"),i.a.createElement("button",{className:"btn",onClick:this.startCreateEventHandler},"Create Event")),this.state.isLoading?i.a.createElement(y,null):i.a.createElement(D,{events:this.state.events,authUserId:this.context.userId,onViewDetail:this.showDetailHandler}))}}]),n}(a.Component));$.contextType=p;var R=$,H=(n(177),function(e){return i.a.createElement(p.Consumer,null,(function(e){return i.a.createElement("header",{className:"main-navigation"},i.a.createElement("div",{className:"main-navigation__logo"},i.a.createElement("h1",null,"GQLMERN")),i.a.createElement("nav",{className:"main-navigation__items"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(E.b,{to:"/events"},"Events")),e.token?i.a.createElement(i.a.Fragment,null,i.a.createElement("li",null,i.a.createElement(E.b,{to:"/bookings"},"Bookings")),i.a.createElement("li",null,i.a.createElement("button",{onClick:e.logout},"Logout"))):i.a.createElement("li",{className:"main-navigation__items__login-link"},i.a.createElement(E.b,{to:"/auth"},"Login / Signup")))))}))});n(180);v.b.configure();var F=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={token:null,userId:null},e.initApp=Object(s.a)(c.a.mark((function t(){var n,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,localStorage.getItem("TOKEN");case 2:if(t.t0=t.sent,t.t0){t.next=5;break}t.t0=null;case 5:return n=t.t0,t.next=8,localStorage.getItem("USERID");case 8:if(t.t1=t.sent,t.t1){t.next=11;break}t.t1=null;case 11:a=t.t1,e.setState({token:n,userId:a});case 13:case"end":return t.stop()}}),t)}))),e.login=function(t,n,a){e.setState({token:t,userId:n}),localStorage.setItem("TOKEN",t),localStorage.setItem("USERID",n)},e.logout=function(){e.setState({token:null,userId:null}),localStorage.removeItem("TOKEN"),localStorage.removeItem("USERID")},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.initApp()}},{key:"render",value:function(){return i.a.createElement(E.a,null,i.a.createElement(i.a.Fragment,null,i.a.createElement(p.Provider,{value:{token:this.state.token,userId:this.state.userId,login:this.login,logout:this.logout}},i.a.createElement(v.a,null),i.a.createElement(H,null),i.a.createElement("main",{className:"main-content"},i.a.createElement(f.d,null,i.a.createElement(f.b,{path:"/events",component:R}),this.state.token&&i.a.createElement(f.a,{from:"/",to:"/events",exact:!0}),this.state.token&&i.a.createElement(f.a,{from:"/auth",to:"/events",exact:!0}),this.state.token&&i.a.createElement(f.b,{path:"/bookings",component:x}),!this.state.token&&i.a.createElement(f.b,{path:"/auth",component:k}),!this.state.token&&i.a.createElement(f.a,{to:"/auth",exact:!0}))))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},65:function(e,t,n){e.exports=n(181)},70:function(e,t,n){},73:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){}},[[65,1,2]]]);
//# sourceMappingURL=main.42e737f7.chunk.js.map