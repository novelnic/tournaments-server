(this["webpackJsonptournaments-react"]=this["webpackJsonptournaments-react"]||[]).push([[0],{127:function(e,t){},131:function(e,t,a){},132:function(e,t,a){"use strict";a.r(t);a(71);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),u=(a(76),a(77),a(4)),o=a(5),m=a(7),s=a(6),i=a(16),E=a(3),p=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},r.a.createElement(i.b,{className:"navbar-brand",to:"/"},"Live Tournaments"),this.props.scoring&&1==this.props.scoring&&r.a.createElement(i.b,{to:"/scoring",className:"btn btn-primary"},"Scoring"))}}]),a}(r.a.Component),h=a(134),d=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={tournament:e.tournament},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.tournament,t=(Date.now(),new Date(0));t.setUTCSeconds(e.startTime);var a=t;t=t.toLocaleTimeString("en-US",{timeZone:"America/New_York",hour:"2-digit",minute:"2-digit"});var n=new Date(0);return n.setUTCSeconds(e.endTime),n=n.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"}),r.a.createElement(i.b,{to:"/tournaments/"+e._id,className:"list-group-item list-group-item-action list-group-item-dark"},r.a.createElement(h.a,{className:!0},r.a.createElement("h5",{className:"col-6 m-auto text-center"},e.name),r.a.createElement("h7",{className:"col m-auto d-none d-md-block"},e.teams.length," Teams Registered"),r.a.createElement("div",{className:"col m-auto"},r.a.createElement("h7",{className:"row justify-content-center"},a.toLocaleDateString("en-US",{style:"short"})),r.a.createElement("h7",{className:"row justify-content-center"},t," - ",n))))}}]),a}(r.a.Component),f=a(9),g=a.n(f),v=a(67),b=a.n(v);g.a.defaults.baseURL="";var y=function(){return g.a.get("/api/tournaments")},O=function(e){return g.a.get("/api/tournaments/"+e)},j=function(e,t,a){t.on("scores",(function(e){a(e)}))},k=function(e){var t=b()({reconnectionAttempts:20}).connect();return console.log("connecting to socket"),t.emit("scores",{tournamentId:e}),t},w=function(e){e.disconnect()},x=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={tournaments:[]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;y().then((function(t){return e.setState({tournaments:t.data})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",{className:"text-center"},"Current Tournaments"),r.a.createElement("ul",{className:"list-group"},this.state.tournaments&&this.state.tournaments.sort((function(e,t){return e.startTime<t.startTime})).map((function(e){return r.a.createElement(d,{key:e._id,tournament:e})}))))}}]),a}(r.a.Component),N=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("table",{className:"table table-dark table-bordered table-striped text-center my-2"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Condition"),r.a.createElement("th",{scope:"col"},"Points"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"1st"),r.a.createElement("td",null,"25")),r.a.createElement("tr",null,r.a.createElement("td",null,"2nd"),r.a.createElement("td",null,"20")),r.a.createElement("tr",null,r.a.createElement("td",null,"3rd"),r.a.createElement("td",null,"15")),r.a.createElement("tr",null,r.a.createElement("td",null,"4th"),r.a.createElement("td",null,"10")),r.a.createElement("tr",null,r.a.createElement("td",null,"Top 7"),r.a.createElement("td",null,"7")),r.a.createElement("tr",null,r.a.createElement("td",null,"Top 10"),r.a.createElement("td",null,"4")),r.a.createElement("tr",null,r.a.createElement("td",null,"Top 15"),r.a.createElement("td",null,"2")),r.a.createElement("tr",null,r.a.createElement("td",null,"Top 20"),r.a.createElement("td",null,"1")),r.a.createElement("tr",null,r.a.createElement("td",null,"Each Kill"),r.a.createElement("td",null,"+1"))))}}]),a}(r.a.Component),C=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement("div",{className:"container"},r.a.createElement(x,null)))}}]),a}(r.a.Component),S=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement("div",{className:"container"},r.a.createElement(N,null)))}}]),a}(r.a.Component),T=a(22),M=a.n(T),R=a(39),_=a(37),z=function(e){return g.a.get("/api/teams/".concat(e,"/score"))},U=function(e){return g.a.get("/api/teams",{params:{tournamentId:e}})},B=a(135),I=a(136);function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function D(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var L=r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("rect",{x:190.67,y:206.73,width:130.67,height:305.27}))),H=r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{d:"M461.546,264.074c11.316-11.426,18.32-27.131,18.32-44.445c0-34.849-28.352-63.2-63.199-63.2 c-34.85,0-63.2,28.352-63.2,63.2c0,17.314,7.003,33.02,18.319,44.445c-7.465,4.001-14.338,8.968-20.453,14.73v54.357h159.473 C506.054,303.232,487.335,277.894,461.546,264.074z"}))),V=r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{d:"M351.333,363.162V512h145.666c8.285,0,15-6.715,15-15V363.162H351.333z"}))),K=r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{d:"M0.001,399.563V497c0,8.285,6.716,15,15,15h145.667V399.563H0.001z"}))),W=r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{d:"M140.214,300.475c11.316-11.426,18.32-27.132,18.32-44.447c0-34.849-28.352-63.2-63.2-63.2 c-34.848,0-63.199,28.352-63.199,63.2c0,17.315,7.003,33.021,18.319,44.446c-25.788,13.82-44.507,39.157-49.26,69.088h159.474 v-54.356C154.553,309.443,147.68,304.476,140.214,300.475z"}))),A=r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{d:"M300.88,107.646C312.196,96.22,319.2,80.514,319.2,63.2C319.2,28.351,290.848,0,256,0s-63.2,28.352-63.2,63.2 c0,17.314,7.003,33.021,18.32,44.446c-25.787,13.819-44.508,39.157-49.26,69.087h188.28 C345.388,146.804,326.668,121.466,300.88,107.646z"}))),J=r.a.createElement("g",null),Y=r.a.createElement("g",null),Z=r.a.createElement("g",null),$=r.a.createElement("g",null),q=r.a.createElement("g",null),F=r.a.createElement("g",null),G=r.a.createElement("g",null),Q=r.a.createElement("g",null),X=r.a.createElement("g",null),ee=r.a.createElement("g",null),te=r.a.createElement("g",null),ae=r.a.createElement("g",null),ne=r.a.createElement("g",null),re=r.a.createElement("g",null),ce=r.a.createElement("g",null),le=function(e){var t=e.svgRef,a=e.title,n=D(e,["svgRef","title"]);return r.a.createElement("svg",P({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve",ref:t},n),a?r.a.createElement("title",null,a):null,L,H,V,K,W,A,J,Y,Z,$,q,F,G,Q,X,ee,te,ae,ne,re,ce)},ue=r.a.forwardRef((function(e,t){return r.a.createElement(le,P({svgRef:t},e))}));a.p;function oe(){return(oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function me(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var se=r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{d:"M160.893,135.229c-3.732-2.362-10.759-2.265-16.544-1.656l-13.938-13.944c1.425-1.182,2.516-2.764,2.978-4.901 c0,0,2.99-6.899-4.469-15.704c0,0-1.991-8.537,0.45-17.598c2.18-8.02,2.825-20.542-1.145-32.233l16.124-16.118 c5.791,0.611,12.824,0.718,16.557-1.66c0.949-0.487,1.851-1.121,2.673-1.933c2.808-2.811,3.702-6.814,2.673-10.395 c-0.486-1.644-1.37-3.209-2.673-4.518c-2.313-2.314-5.413-3.325-8.445-3.039c0.28-3.023-0.743-6.135-3.045-8.442 c-1.315-1.31-2.874-2.195-4.53-2.673c-3.568-1.029-7.581-0.146-10.388,2.673c-0.811,0.804-1.438,1.702-1.942,2.676 c-2.363,3.73-2.266,10.757-1.656,16.554l-13.037,13.019c-2.436-2.923-5.341-5.59-8.872-7.873 c-6.729-4.33-14.432-8.032-30.945-8.306C70.204,18.99,55.021,20.99,43.646,32.882L33.091,22.317 c0.605-5.797,0.706-12.83-1.678-16.56c-0.478-0.962-1.114-1.866-1.934-2.664c-2.804-2.816-6.819-3.702-10.388-2.673 c-1.656,0.478-3.215,1.364-4.53,2.673c-2.302,2.308-3.312,5.413-3.033,8.425c-3.011-0.274-6.128,0.743-8.442,3.05 c-1.297,1.315-2.201,2.875-2.667,4.534c-1.029,3.571-0.137,7.568,2.667,10.394c0.81,0.797,1.708,1.44,2.688,1.924 c3.73,2.378,10.763,2.277,16.535,1.659l12.708,12.708c-1.117,2.399-2.165,4.938-3.023,7.77c0,0-4.604,15.613,2.436,37.263 c0,0,0.67,6.327-3.602,10.82c-3.438,3.617-6.777,15.126,3.878,19.546l-12.385,12.386c-5.785-0.615-12.817-0.719-16.541,1.669 c-0.953,0.475-1.863,1.113-2.676,1.924c-2.804,2.812-3.702,6.832-2.673,10.395c0.484,1.649,1.37,3.221,2.673,4.536 c2.308,2.302,5.413,3.312,8.437,3.032c-0.28,3.021,0.743,6.132,3.045,8.445c1.315,1.297,2.874,2.187,4.539,2.661 c3.559,1.035,7.569,0.134,10.388-2.661c0.804-0.804,1.44-1.717,1.924-2.686c2.384-3.732,2.271-10.759,1.665-16.537l19.206-19.212 c1.315,2.381,2.825,7.143,3.629,16.764c0,0,0.524,6.868,6.491,5.784c0,0,3.063-0.182,3.605-13.177c0,0,3.434-3.251,3.248,4.507 c0,0-0.91,9.029,4.869,8.488c0,0,3.243,1.984,4.509-7.941c0,0,0-8.664,3.075-5.419c0,0,0.898,12.636,4.512,13.901 c0,0,5.23,1.626,6.138-5.236c0,0-0.012-11.003,2.88-9.018c0,0,1.084,0.725,1.255,7.392c0,0-0.171,7.046,4.335,6.687 c0,0,4.688,0,5.955-10.82c0,0-0.791-12.137,5.298-14.164l21.471,21.477c-0.615,5.785-0.707,12.824,1.674,16.551 c0.47,0.962,1.121,1.875,1.931,2.673c2.813,2.819,6.826,3.702,10.388,2.673c1.65-0.475,3.222-1.363,4.524-2.673 c2.314-2.308,3.325-5.413,3.045-8.446c3.014,0.28,6.126-0.742,8.445-3.044c1.304-1.315,2.187-2.874,2.674-4.519 c1.022-3.58,0.134-7.581-2.674-10.4C162.756,136.349,161.867,135.716,160.893,135.229z M54.972,108.692 c-2.052-0.408-3.925-1.176-5.593-2.162c-5.389-3.172-8.506-8.859-7.358-14.571c1.528-7.466,9.782-12.084,18.462-10.327 c3.623,0.743,6.677,2.509,8.967,4.811c3.218,3.239,4.85,7.562,3.979,11.916C71.906,105.843,63.649,110.47,54.972,108.692z  M86.085,118.642c-0.637,0.451-1.34,0.719-2.083,0.719c-1.34,0-2.53-0.816-3.321-2.095c-0.795,1.278-1.979,2.095-3.319,2.095 c-0.749,0-1.464-0.268-2.083-0.719c-1.333-0.992-2.231-2.88-2.231-5.066c0-0.621,0.085-1.211,0.216-1.777 c0.743-4.47,7.417-10.096,7.417-10.096s6.667,5.626,7.41,10.096c0.141,0.56,0.213,1.162,0.213,1.777 C88.316,115.762,87.396,117.649,86.085,118.642z M114.828,104.052c-2.277,2.229-5.291,3.928-8.823,4.641 c-2.916,0.603-5.76,0.414-8.342-0.293c-5.097-1.425-9.104-5.066-10.12-10.028l-0.006-0.104c-1.09-5.59,1.912-11.18,7.143-14.364 c1.711-1.041,3.684-1.827,5.821-2.26c8.677-1.769,16.928,2.85,18.45,10.321C119.852,96.404,118.147,100.801,114.828,104.052z"}))),ie=r.a.createElement("g",null),Ee=r.a.createElement("g",null),pe=r.a.createElement("g",null),he=r.a.createElement("g",null),de=r.a.createElement("g",null),fe=r.a.createElement("g",null),ge=r.a.createElement("g",null),ve=r.a.createElement("g",null),be=r.a.createElement("g",null),ye=r.a.createElement("g",null),Oe=r.a.createElement("g",null),je=r.a.createElement("g",null),ke=r.a.createElement("g",null),we=r.a.createElement("g",null),xe=r.a.createElement("g",null),Ne=function(e){var t=e.svgRef,a=e.title,n=me(e,["svgRef","title"]);return r.a.createElement("svg",oe({id:"Capa_1",x:"0px",y:"0px",width:"166.674px",height:"166.674px",viewBox:"0 0 166.674 166.674",style:{enableBackground:"new 0 0 166.674 166.674"},xmlSpace:"preserve",ref:t},n),a?r.a.createElement("title",null,a):null,se,ie,Ee,pe,he,de,fe,ge,ve,be,ye,Oe,je,ke,we,xe)},Ce=r.a.forwardRef((function(e,t){return r.a.createElement(Ne,oe({svgRef:t},e))})),Se=(a.p,a(20)),Te=a.n(Se),Me=(a(131),function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={match:n.props.match},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.match&&this.state.match.players,t=e&&e.reduce((function(e,t){return e+t.kills}),0);return r.a.createElement(I.a,{className:"m-1 match-card",bg:"secondary"},r.a.createElement(I.a.Header,{className:"match-card-header"},r.a.createElement(h.a,{className:"align-items-center"},r.a.createElement("h5",{className:"m-auto align-text-middle"},Te()([this.state.match])," points"),r.a.createElement("h6",{className:"my-auto mr-2 kills-text"},t),r.a.createElement("h6",{className:"my-auto mr-2"},r.a.createElement(Ce,{className:"svg"})),r.a.createElement("h6",{className:"my-auto placement-text"},this.state.match&&this.state.match.placement),r.a.createElement("h6",{className:"my-auto"},r.a.createElement(ue,{className:"ml-1 svg"})))),r.a.createElement(I.a.Body,{className:"match-card-body"},e&&e.sort((function(e,t){return t.kills-e.kills})).map((function(e){return r.a.createElement(h.a,{key:e.username,className:"justify-content-between align-items-center"},r.a.createElement("h6",null,e.username),r.a.createElement("h6",null,e.kills,r.a.createElement(Ce,{className:"ml-1 svg"})))}))))}}]),a}(r.a.Component)),Re=function(e){return g.a.get("/api/matches"+"?".concat(e))},_e=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={team:n.props.team,matches:[]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;Re("teamId=".concat(this.state.team._id)).then((function(t){var a=t.data.sort((function(e,t){return Te()([t])-Te()([e])})).slice(0,3);e.setState({matches:a})}))}},{key:"render",value:function(){var e=this.state.team;return r.a.createElement(B.a,null,r.a.createElement(I.a,{bg:"dark"},r.a.createElement(B.a.Toggle,{as:I.a.Header,eventKey:"0"},r.a.createElement(h.a,{className:"align-items-center justify-content-between mx-auto"},r.a.createElement("h5",null,e.name),r.a.createElement("h5",null,"Score: ",e.score))),r.a.createElement(B.a.Collapse,{eventKey:"0"},r.a.createElement(I.a.Body,{className:"card-deck cols-sm-1"},this.state.matches.map((function(e){return r.a.createElement(Me,{key:e._id,match:e})}))))))}}]),a}(r.a.Component),ze=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).onTournamentUpdate=function(e){console.log("in component "+e)},n.state={tournament:{},teams:[]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.tournamentId,a=k(t);console.log(a),O(t).then((function(t){var n=t.data;U(n._id).then(function(){var t=Object(_.a)(M.a.mark((function t(r){var c;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r.data,t.next=3,Promise.all(c.map(function(){var e=Object(_.a)(M.a.mark((function e(t){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z(t._id).then((function(e){var a=e.data;return Object(R.a)(Object(R.a)({},t),{},{score:a})}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:c=t.sent,e.setState({socket:a,tournament:n,teams:c});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())})),j(t,a,this.onTournamentUpdate)}},{key:"componentWillUnmount",value:function(){var e=this.state.socket;w(e)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p,{scoring:!0}),r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-center"},this.state.tournament.name),this.state.teams.sort((function(e,t){return t.score-e.score})).map((function(e){return r.a.createElement(_e,{key:e._id,team:e})}))))}}]),a}(r.a.Component),Ue=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(E.a,{path:"/",exact:!0,component:C}),r.a.createElement(E.a,{path:"/tournaments/:tournamentId",exact:!0,component:ze}),r.a.createElement(E.a,{path:"/scoring",exact:!0,component:S})))}}]),a}(r.a.Component);var Be=function(){return r.a.createElement(Ue,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Be,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},20:function(e,t){e.exports=function(e){var t=[];return e.forEach((function(e){if(!e)return 0;var a,n=e.players&&e.players.reduce((function(e,t){return e+t.kills}),0)||0,r=0,c=e.placement;switch(!0){case 1===c:r=25;break;case 2===c:r=20;break;case 3===c:r=15;break;case 4===c:r=10;break;case c<=7:r=7;break;case c<=10:r=4;break;case c<=15:r=2;break;case c<=20:r=1}a=r+n,t.push(a)})),t.sort((function(e,t){return t-e})).slice(0,3).reduce((function(e,t){return e+t}),0)}},70:function(e,t,a){e.exports=a(132)},76:function(e,t,a){},77:function(e,t,a){}},[[70,1,2]]]);
//# sourceMappingURL=main.9e6ca772.chunk.js.map