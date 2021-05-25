(this.webpackJsonprevolut=this.webpackJsonprevolut||[]).push([[0],{23:function(e,t,a){},43:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),s=a.n(c),o=(a(23),a(2)),i=a(12),l=a.n(i),u=a(16),d=a(6);var f,j,h=a(4),b=a.n(h);function x(e,t){return b()(t).multiply(e).value}!function(e){e[e.IDLE=0]="IDLE",e[e.LOADING=1]="LOADING",e[e.FAILED=2]="FAILED"}(f||(f={})),function(e){e.USD="USD",e.EUR="EUR",e.RUB="RUB",e.GBP="GBP"}(j||(j={}));var v={wallets:{USD:{name:j.USD,sign:"$",total:45.43},EUR:{name:j.EUR,sign:"\u20ac",total:132.44},RUB:{name:j.RUB,sign:"\u20bd",total:10007.43},GBP:{name:j.GBP,sign:"\xa3",total:21.1}},rates:{from:j.USD,to:j.USD,status:f.IDLE,data:{EUR:.82,RUB:73.6975,GBP:.71,USD:1}}},m=Object(d.b)("counter/loadRates",Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://openexchangerates.org/api/latest.json?app_id=48a4f37d75e54e7a8498de71bb20c987").then((function(e){return e.json()})).then((function(e){return e.rates}));case 2:if(t=e.sent){e.next=5;break}throw new Error("Can not load rates");case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})))),g=Object(d.c)({name:"exchange",initialState:v,reducers:{exchangeValue:function(e,t){var a=N({exchange:e}),n=Object(o.a)(a,2),r=n[0],c=n[1],s=D({exchange:e});e.wallets[r].total=b()(e.wallets[r].total).subtract(t.payload).value,e.wallets[c].total=b()(e.wallets[c].total).add(x(s,t.payload)).value},setWallets:function(e,t){e.rates.from=t.payload[0],e.rates.to=t.payload[1]}},extraReducers:function(e){e.addCase(m.pending,(function(e){e.rates.status=f.LOADING})).addCase(m.fulfilled,(function(e,t){e.rates.status=f.IDLE,e.rates.data=Object.keys(e.wallets).reduce((function(e,a){if(t.payload[a]){var n=a===j.USD?1:.1*Math.random()+1;e[a]=t.payload[a]*n}return e}),{})})).addCase(m.rejected,(function(e,t){e.rates.status=f.FAILED}))}}),O=g.actions,w=O.exchangeValue,p=O.setWallets,N=function(e){var t=e.exchange.rates;return[t.from,t.to]},S=function(e){var t=e.exchange;return Object.keys(t.wallets).reduce((function(e,a){var n=t.wallets[a];return e[a]={name:n.name,sign:n.sign,total:n.total},e}),{})},D=function(e){var t=e.exchange,a=t.rates.from,n=t.rates.to;if(a===n)return 1;var r=t.rates.data[a];return t.rates.data[n]/r},E=function(e){return e.exchange.rates.status},U=g.reducer,y=a(1),I=function(e){var t=e.loadingState,a=e.data,n=a.fromSign,r=a.toSign,c=a.currentRate;switch(t){case f.FAILED:return Object(y.jsx)("div",{className:"error",children:"Failed to load currency rates"});case f.LOADING:return Object(y.jsx)("div",{className:"current-rate",children:"Loading rates..."});default:return Object(y.jsx)("div",{className:"current-rate",children:"".concat(n,"1 = ").concat(r).concat(c.toFixed(4))})}},L=a(7),R=a(17),B=a.n(R),C=function(e){var t=e.name,a=e.sign,n=e.value;return Object(y.jsx)("div",{className:"exchange-wrapper",children:Object(y.jsxs)("div",{className:"exchange-content",children:[Object(y.jsx)("h3",{className:"exchange-currency",children:t}),Object(y.jsx)("p",{className:"exchange-inwallet",children:"You have ".concat(a).concat(n)})]})})},k=(a(41),a(42),a(43),{arrows:!1,dots:!0,easing:"ease-in-out",infinite:!0,mobileFirst:!0,speed:500,slidesToShow:1,slidesToScroll:1}),A=function(e){var t=e.wallets,a=e.onChange;return Object(y.jsx)("section",{className:"exchange",children:Object(y.jsx)(B.a,Object(L.a)(Object(L.a)({},k),{},{afterChange:function(e){return function(e,t,a){a(e[Object.keys(e)[t]].name)}(t,e,a)},children:Object.keys(t).map((function(e){return function(e){var t=e.name,a=e.sign,n=e.total;return Object(y.jsx)("div",{className:"slider-item",children:Object(y.jsx)(C,{name:t,sign:a,value:n})},t)}(t[e])}))}))})},G=a(18),F=function(e){return function(t){var a=t.floatValue;return!(a&&a>e)}},V=function(e){var t=e.name,a=e.onChange,n=e.value,r=e.maxValue,c=void 0===r?1e7:r,s=e.disabled,o=void 0!==s&&s,i=e.prefix,l=void 0===i?"":i,u={};return void 0!==n&&(u.value=n),void 0!==a&&(u.onValueChange=function(e){var t=e.floatValue;return a&&a(t)}),Object(y.jsx)(G.a,Object(L.a)({allowLeadingZeros:!1,allowNegative:!1,className:"exchangeValue",decimalScale:2,disabled:o,isAllowed:F(c),name:t,prefix:l,thousandSeparator:!0},u))},P=a(5),W=P.c,J=function(){var e=W(S),t=W(N),a=Object(o.a)(t,2),n=a[0],c=a[1],s=e[n].sign,i=e[c].sign,l=W(D),u=Object(P.b)(),d=W(E),f=r.a.useState(0),j=Object(o.a)(f,2),h=j[0],b=j[1],v=r.a.useState(0),g=Object(o.a)(v,2),O=g[0],U=g[1],L=function(e){if(b(e),e){var t=x(l,e);U(t)}else U(e)};return r.a.useEffect((function(){u(m());var e=window.setInterval((function(){return u(m())}),1e4);return function(){return window.clearInterval(e)}}),[]),r.a.useEffect((function(){b(0),U(0)}),[n]),r.a.useEffect((function(){L(h)}),[l,c,L]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("header",{className:"header",children:Object(y.jsx)(I,{loadingState:d,data:{fromSign:s,toSign:i,currentRate:l}})}),Object(y.jsxs)("div",{className:"slider-container",children:[Object(y.jsx)(A,{wallets:e,current:n,onChange:function(e){return u(p([e,c]))}}),Object(y.jsx)(V,{maxValue:e[n].total,name:"from",prefix:"\u2013",onChange:L,value:h})]}),Object(y.jsxs)("div",{className:"slider-container",children:[Object(y.jsx)(A,{wallets:e,current:c,onChange:function(e){return u(p([n,e]))}}),Object(y.jsx)(V,{disabled:!0,name:"to",prefix:"+",value:O})]}),Object(y.jsx)("footer",{className:"footer",children:Object(y.jsx)("button",{className:"btn btn-exchange",disabled:!h||n===c,onClick:function(){u(w(h)),b(0),U(0)},children:"Exchange"})})]})};a(48);var M=function(){return Object(y.jsx)("div",{className:"container",children:Object(y.jsx)("div",{className:"wrapper",children:Object(y.jsx)(J,{})})})},T=Object(d.a)({reducer:{exchange:U}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(P.a,{store:T,children:Object(y.jsx)(M,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.b89ae625.chunk.js.map