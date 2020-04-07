(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{148:function(e){e.exports=JSON.parse('{"master":"https://api.covid19india.org/data.json"}')},155:function(e,t,a){e.exports=a(216)},160:function(e,t,a){},161:function(e,t,a){},165:function(e,t,a){},197:function(e,t,a){},214:function(e,t,a){},216:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),s=a.n(c),l=(a(160),a(247)),o=(a(161),a(144)),i=a.n(o),u=function(){String.prototype.equalsIgnoreCase||(String.prototype.equalsIgnoreCase=function(e){return"string"===typeof this&&"string"===typeof e&&this.toLowerCase()===e.toLowerCase()}),"undefined"===typeof Promise&&i.a.polyfill(),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),a=t.length>>>0;if("function"!==typeof e)throw new TypeError("predicate must be a function");for(var n=arguments[1],r=0;r<a;){var c=t[r];if(e.call(n,c,r,t))return c;r++}},configurable:!0,writable:!0})},d=a(28),m=a(29),h=a(26),v=a(30),f=a(32),p=a(248),E=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).state={value:""},e.handleChange=e.handleChange.bind(Object(h.a)(e)),e.inputProps={onChange:e.handleChange},e}return Object(m.a)(a,[{key:"handleChange",value:function(e){var t=this.props.search,a=void 0===t?function(){}:t;this.setState({value:e.target.value}),a(e.target.value)}},{key:"render",value:function(){var e=this.state.value,t=this.props.hasError;return r.a.createElement(p.a,{fullWidth:!0,error:t,id:"outlined-error-helper-text",label:"Search State",helperText:t?r.a.createElement("div",null,r.a.createElement("strong",null,e)," ",r.a.createElement("span",null,"did not yield any results. Please modify your search")):"",variant:"outlined",inputProps:this.inputProps,value:e})}}]),a}(n.Component),b=a(150),g=(a(165),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.state,a=(t=void 0===t?{}:t).state,n=void 0===a?"":a,c=t.lastupdatedtime,s=void 0===c?"":c,l=t.confirmed,o=void 0===l?"":l,i=t.active,u=void 0===i?"":i,d=t.deaths,m=void 0===d?"":d,h=e.className,v=void 0===h?"":h,f=s;if(f){var p=f.split("/");f="".concat(p[1],"/").concat(p[0],"/").concat(p[2]);f=window.moment(new Date(f)).format("DD/MM/YYYY hh:mm:ss A")}var E="card-avatar ".concat(v);return r.a.createElement("div",{className:E},r.a.createElement(b.a,{name:n,round:!0,size:"40"}),r.a.createElement("div",{className:"card-avatar-heading"},n&&r.a.createElement("div",null,r.a.createElement("div",{className:"card-avatar-main"},n),r.a.createElement("div",{className:"last-updated"},"Updated on ",f)),o&&r.a.createElement("div",{className:"card-avatar-sub card-avatar-sub--confirmed"},r.a.createElement("span",{className:"label"},"CONFIRMED"),r.a.createElement("span",{className:"count"},o)),u&&r.a.createElement("div",{className:"card-avatar-sub card-avatar-sub--active"},r.a.createElement("span",{className:"label"},"ACTIVE"),r.a.createElement("span",{className:"count"},u)),m&&r.a.createElement("div",{className:"card-avatar-sub card-avatar-sub--deaths"},r.a.createElement("span",{className:"label"},"DEATHS"),r.a.createElement("span",{className:"count"},m))))}}]),a}(n.Component)),A=a(249),N=(a(197),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"renderStates",value:function(){var e=this.props.data;return(void 0===e?[]:e).map((function(e,t){return r.a.createElement(A.a,{key:e.statecode},r.a.createElement(g,{state:e,className:(t+1)%3===0?"card-avatar--last-item":(t+1)%2===0?"card-avatar--second-item":""}))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"states"},this.renderStates())}}]),a}(n.Component)),w=a(92),y=a.n(w),I=function(e){return Object.keys(e).map((function(t){return t+"="+e[t]})).join("&")},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},r=e.url,c=e.type;if(!r||!c)throw new Error("url & type are mandatory!");if("get".equalsIgnoreCase(c)){var s=r;if(t&&Object.keys(t).length){var l=I(t);s="".concat(r,"?").concat(l)}y.a.get(s).then((function(e){if(!a)return e.data;a(e.data)})).catch((function(e){if(!n)return e;n(e)}))}else if("post".equalsIgnoreCase(c)){if(t&&!Object.keys(t).length)throw new Error("payload is mandatory for ".concat(c.toUpperCase()," requests!"));y.a.post(r,t).then((function(e){if(!a)return e.data;a(e.data)})).catch((function(e){if(!n)return console.log(e,typeof e),e;n(e)}))}},O=a(148),C=function(e,t){var a=null;return function(){var n=this,r=arguments;clearTimeout(a),a=setTimeout((function(){return e.apply(n,r)}),t)}},S=function(e){if(e)return JSON.parse(JSON.stringify(e))},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0,n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=S(e);return r.sort((function(e,r){return n?r[t]-e[t]===0?e[a].toLowerCase().replace(/[^0-9a-zA-Z]/g,"")>r[a].toLowerCase().replace(/[^0-9a-zA-Z]/g,"")?1:e[a].toLowerCase().replace(/[^0-9a-zA-Z]/g,"")<r[a].toLowerCase().replace(/[^0-9a-zA-Z]/g,"")?-1:0:r[t]-e[t]:e[t]-r[t]===0?e[a].toLowerCase().replace(/[^0-9a-zA-Z]/g,"")>r[a].toLowerCase().replace(/[^0-9a-zA-Z]/g,"")?1:e[a].toLowerCase().replace(/[^0-9a-zA-Z]/g,"")<r[a].toLowerCase().replace(/[^0-9a-zA-Z]/g,"")?-1:0:e[t]-r[t]})),r},R=a(93),k=a.n(R),M=(a(214),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).state={states:[],searched:!1,total:{}},e.minCharsToSearch=2,e.fetchDataSuccess=e.fetchDataSuccess.bind(Object(h.a)(e)),e.fetchDataError=e.fetchDataError.bind(Object(h.a)(e)),e.searchState=e.searchState.bind(Object(h.a)(e)),e.fetchData=e.fetchData.bind(Object(h.a)(e)),e}return Object(m.a)(a,[{key:"fetchData",value:function(){j({url:O.master,type:"GET"},null,this.fetchDataSuccess,this.fetchDataError)}},{key:"componentDidMount",value:function(){this.fetchData(),setInterval(this.fetchData,36e5)}},{key:"fetchDataSuccess",value:function(e){console.log("RESPONSE ====> ",e);var t=(e=D(e.statewise,"confirmed","state",!0)).find((function(e,t){return"total".equalsIgnoreCase(e.state)}));e.splice(e.indexOf(t),1),this.setState({states:e,filteredStates:e,total:t})}},{key:"fetchDataError",value:function(e){console.log("ERROR ====> ",e)}},{key:"searchState",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this.state.states;if(e.length>this.minCharsToSearch||0===e.length){var a=t.filter((function(t){var a=t.state,n=void 0===a?"":a;return n=n.toLowerCase(),e=e.toLowerCase(),n.includes(e)}));a=D(a,"total","state",!0),this.setState({filteredStates:a,searched:!0})}else this.setState({searched:!1})}},{key:"render",value:function(){var e=this.state,t=e.filteredStates,a=e.searched,n=e.total,c=void 0===n?{}:n,s=c.lastupdatedtime;if(s){var l=s.split("/");s="".concat(l[1],"/").concat(l[0],"/").concat(l[2]);s=window.moment(new Date(s)).format("DD/MM/YYYY hh:mm:ss A")}return r.a.createElement("div",{className:"covid-container"},r.a.createElement("div",{className:"header"},r.a.createElement("h2",null,"COVID-19 Tracker"),r.a.createElement("div",{className:"india"},r.a.createElement("picture",null,r.a.createElement("source",{media:"(min-width: 1024px)",srcSet:k.a}),r.a.createElement("img",{alt:"cube",src:k.a}))),r.a.createElement("div",{className:"totals"},r.a.createElement("div",{className:"totals__lastupdated"},"Last updated on ",s),r.a.createElement("div",{className:"totals__confirmed totals__elem"},r.a.createElement("div",{className:"label"},r.a.createElement("b",null,"CONFIRMED")),r.a.createElement("div",{className:"count"},c.confirmed)),r.a.createElement("div",{className:"totals__active totals__elem"},r.a.createElement("div",{className:"label"},r.a.createElement("b",null,"ACTIVE")),r.a.createElement("div",{className:"count"},c.active)),r.a.createElement("div",{className:"totals__recovered totals__elem"},r.a.createElement("div",{className:"label"},r.a.createElement("b",null,"RECOVERED")),r.a.createElement("div",{className:"count"},c.recovered)),r.a.createElement("div",{className:"totals__deaths totals__elem"},r.a.createElement("div",{className:"label"},r.a.createElement("b",null,"DEATHS")),r.a.createElement("div",{className:"count"},c.deaths))),r.a.createElement(E,{search:C(this.searchState,300),hasError:a&&!t.length})),r.a.createElement(N,{data:t}))}}]),a}(n.Component)),Z=a(149),T=a.n(Z);u();var B=function(){return r.a.createElement(l.a,null,r.a.createElement(M,null))};window.moment=T.a;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},93:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAArCAIAAABHOBkQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ3MUZEODkyMEM3QTExRTY5QzBGRjIwRDI4RTFCRTcyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ3MUZEODkzMEM3QTExRTY5QzBGRjIwRDI4RTFCRTcyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDcxRkQ4OTAwQzdBMTFFNjlDMEZGMjBEMjhFMUJFNzIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDcxRkQ4OTEwQzdBMTFFNjlDMEZGMjBEMjhFMUJFNzIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7UBcPzAAACRElEQVR42uyXTUsbQRjHZ1an6q5b2DVVNqRNWzRRLx7WXjSWIOjJo/0EfgLPeqvoB/Akggl4E4UeFIoIHoxEMCWkHkyaSGjjmk0wLzbupu2mu32CH6FZ2IX5s4d5gRl+s8/zf2awtSUjN4tBLhcFoAAUgAJQAApAASjAf6gbGbqrAbCV/WzPwggRBpGudtv4iwwTWTYBWJZNZ5NXjGy2hixreFh8+5LYFkI2KJerra3F7u+bksRDV1UbgtC7uhoKBMTOb2Z1WslkaXIyur2dVNXHev3Xw8PvUknb2UnB4OVlsePbdTiENM1YWNhfXn4XDr9KpyuqqmGMBgfZsbGB83NlYyN+dPSB5585N4QODjKBgDA7608kiomEenv7E2Ps9fbremtmxnd4+GJv73ppacK5deDsrDA//+burpHJVOEP5HJ1yON0ut1WlEeYisUURxcyCCGPh9V1o1ptMgw+Pf1+cpJnGFSrNWHwacrRLsSypFIB8+FEse/mph4O+8EmTBMJQh9MFQoNlu12NEAo5Ds+zs/NvQbHBP/hOAI5IEn9waAImbC5+WVqyudogMXFYCRyBZkwPe2DwwYXgsGhIW50dCAeV1Kp8vr6e6fXAfAfWY5Eo1/B/qEOwFcua7u7V7IcvbhQnF4HngSeA5UYQsjrfQ7dYrHB82RlJTQ+7nHTXUj90cp+q1rIGhkRJb9ddyH86XrflnUxIqSLkLZNGy3T+GPadFK456PLHzQc6aFPSgpAASgABaAAFIACUACX6p8AAwA1QzjL03HfAwAAAABJRU5ErkJggjE0OTI="}},[[155,1,2]]]);
//# sourceMappingURL=main.fe03d87f.chunk.js.map