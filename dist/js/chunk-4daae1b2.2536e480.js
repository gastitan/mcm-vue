(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4daae1b2"],{"02f4":function(t,e,r){var a=r("4588"),c=r("be13");t.exports=function(t){return function(e,r){var n,i,s=String(c(e)),o=a(r),l=s.length;return o<0||o>=l?t?"":void 0:(n=s.charCodeAt(o),n<55296||n>56319||o+1===l||(i=s.charCodeAt(o+1))<56320||i>57343?t?s.charAt(o):n:t?s.slice(o,o+2):i-56320+(n-55296<<10)+65536)}}},"0390":function(t,e,r){"use strict";var a=r("02f4")(!0);t.exports=function(t,e,r){return e+(r?a(t,e).length:1)}},"214f":function(t,e,r){"use strict";r("b0c5");var a=r("2aba"),c=r("32e9"),n=r("79e5"),i=r("be13"),s=r("2b4c"),o=r("520a"),l=s("species"),u=!n(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),d=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();t.exports=function(t,e,r){var f=s(t),p=!n(function(){var e={};return e[f]=function(){return 7},7!=""[t](e)}),v=p?!n(function(){var e=!1,r=/a/;return r.exec=function(){return e=!0,null},"split"===t&&(r.constructor={},r.constructor[l]=function(){return r}),r[f](""),!e}):void 0;if(!p||!v||"replace"===t&&!u||"split"===t&&!d){var h=/./[f],g=r(i,f,""[t],function(t,e,r,a,c){return e.exec===o?p&&!c?{done:!0,value:h.call(e,r,a)}:{done:!0,value:t.call(r,e,a)}:{done:!1}}),m=g[0],b=g[1];a(String.prototype,t,m),c(RegExp.prototype,f,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},"520a":function(t,e,r){"use strict";var a=r("0bfb"),c=RegExp.prototype.exec,n=String.prototype.replace,i=c,s="lastIndex",o=function(){var t=/a/,e=/b*/g;return c.call(t,"a"),c.call(e,"a"),0!==t[s]||0!==e[s]}(),l=void 0!==/()??/.exec("")[1],u=o||l;u&&(i=function(t){var e,r,i,u,d=this;return l&&(r=new RegExp("^"+d.source+"$(?!\\s)",a.call(d))),o&&(e=d[s]),i=c.call(d,t),o&&i&&(d[s]=d.global?i.index+i[0].length:e),l&&i&&i.length>1&&n.call(i[0],r,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(i[u]=void 0)}),i}),t.exports=i},"526e":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cart-calculator"},[r("h4",{staticClass:"d-flex justify-content-between align-items-center mb-3"},[r("span",{staticClass:"text-muted"},[t._v("Your cart")]),r("span",{staticClass:"badge badge-primary badge-pill"},[t._v(t._s(t.cartProducts.length))])]),r("ul",{staticClass:"list-group mb-3"},[t._l(t.cartProducts,function(e,a){return r("li",{key:a,staticClass:"list-group-item d-flex justify-content-between lh-condensed"},[r("div",[r("h6",{staticClass:"my-0"},[t._v(t._s(e.productName))])]),r("span",{staticClass:"text-muted",staticStyle:{width:"120px"}},[t._v("$ "+t._s(e.productPrice))])])}),r("hr"),r("li",{staticClass:"list-group-item d-flex justify-content-between"},[r("span",[t._v("Total")]),r("strong",[t._v("$ "+t._s(t.totalValue.toFixed(2)))])])],2)])},c=[],n=(r("a481"),r("ac6a"),r("2f62")),i={name:"cartCalculator",data:function(){return{totalValue:0}},computed:Object(n["c"])(["cartProducts"]),methods:{calulateTotalPrice:function(){var t=this;this.totalValue=0,this.cartProducts.forEach(function(e){t.totalValue+=parseFloat(e.productPrice.replace(",",""))})}},created:function(){this.calulateTotalPrice()}},s=i,o=r("2877"),l=Object(o["a"])(s,a,c,!1,null,null,null);e["a"]=l.exports},"5f1b":function(t,e,r){"use strict";var a=r("23c6"),c=RegExp.prototype.exec;t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var n=r.call(t,e);if("object"!==typeof n)throw new TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==a(t))throw new TypeError("RegExp#exec called on incompatible receiver");return c.call(t,e)}},"70a4":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cart-products"},[r("div",{staticClass:"row mt-5"},[r("div",{staticClass:"col"},[r("div",{staticClass:"row"},[t.cartProducts.length>0?t._l(t.cartProducts,function(e,a){return r("div",{key:a,staticClass:"col-md-4"},[r("div",{staticClass:"card mb-4 shadow-sm",staticStyle:{height:"410px"}},[r("img",{staticClass:"card-img-top mt-2",staticStyle:{"max-height":"700px","max-width":"127.135px",margin:"auto"},attrs:{src:e.productImage,alt:"Card image cap"}}),r("div",{staticClass:"card-body"},[r("h6",{staticClass:"card-text"},[t._v(t._s(e.productName)+".")]),r("div",{staticClass:"d-flex justify-content-between align-items-center"},[t._m(0,!0),r("small",{staticClass:"text-muted footerIcons"},[r("a",{staticClass:"p-2",attrs:{href:"javascript:;;"},on:{click:function(r){return t.removeProductCart(e)}}},[r("i",{staticClass:"fa fa-trash"})])])])])])])}):[r("div",{staticClass:"error-template container"},[r("h1",[t._v("Oops!")]),r("h2",[t._v("No Products Found")]),r("div",{staticClass:"error-details"},[t._v("Your cart is empty")]),r("div",{staticClass:"error-actions"},[r("a",{staticClass:"btn text-white"},[r("span",{staticClass:"glyphicon glyphicon-envelope"}),r("router-link",{attrs:{to:"/products"}},[t._v("Take me to Products Page")])],1)])])]],2)]),r("div",{staticClass:"col-4"},[r("cart-calculator",{ref:"cartCalculator"}),r("ul",{staticClass:"list-group mb-3"},[r("router-link",{staticClass:"btn btn-primary mt-2 text-white",attrs:{to:"/products"}},[t._v("Continue Shipping")]),r("router-link",{staticClass:"btn btn-danger mt-2 text-white",attrs:{to:"/checkout"}},[t._v("Checkout")])],1)],1)])])},c=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"btn-group"},[r("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"}},[t._v("View")])])}],n=r("cebc"),i=r("2f62"),s=r("526e"),o={name:"CartProducts",components:{CartCalculator:s["a"]},data:function(){return{}},computed:Object(i["c"])(["cartProducts"]),methods:Object(n["a"])({},Object(i["b"])(["SET_CART_PRODUCTS"]),{removeProductCart:function(t){for(var e=JSON.parse(localStorage.getItem("iki-cart")),r=0;r<e.length;r++)e[r]._id===t._id&&e.splice(r,1);this.SET_CART_PRODUCTS(e),localStorage.setItem("iki-cart",JSON.stringify(e)),this.$refs.cartCalculator.calulateTotalPrice()}}),mounted:function(){}},l=o,u=(r("7922"),r("2877")),d=Object(u["a"])(l,a,c,!1,null,null,null);e["default"]=d.exports},"739d":function(t,e,r){},7922:function(t,e,r){"use strict";var a=r("739d"),c=r.n(a);c.a},a481:function(t,e,r){"use strict";var a=r("cb7c"),c=r("4bf8"),n=r("9def"),i=r("4588"),s=r("0390"),o=r("5f1b"),l=Math.max,u=Math.min,d=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g,v=function(t){return void 0===t?t:String(t)};r("214f")("replace",2,function(t,e,r,h){return[function(a,c){var n=t(this),i=void 0==a?void 0:a[e];return void 0!==i?i.call(a,n,c):r.call(String(n),a,c)},function(t,e){var c=h(r,t,this,e);if(c.done)return c.value;var d=a(t),f=String(this),p="function"===typeof e;p||(e=String(e));var m=d.global;if(m){var b=d.unicode;d.lastIndex=0}var C=[];while(1){var x=o(d,f);if(null===x)break;if(C.push(x),!m)break;var S=String(x[0]);""===S&&(d.lastIndex=s(f,n(d.lastIndex),b))}for(var y="",_=0,L=0;L<C.length;L++){x=C[L];for(var T=String(x[0]),w=l(u(i(x.index),f.length),0),P=[],k=1;k<x.length;k++)P.push(v(x[k]));var E=x.groups;if(p){var R=[T].concat(P,w,f);void 0!==E&&R.push(E);var O=String(e.apply(void 0,R))}else O=g(T,f,w,P,E,e);w>=_&&(y+=f.slice(_,w)+O,_=w+T.length)}return y+f.slice(_)}];function g(t,e,a,n,i,s){var o=a+t.length,l=n.length,u=p;return void 0!==i&&(i=c(i),u=f),r.call(s,u,function(r,c){var s;switch(c.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,a);case"'":return e.slice(o);case"<":s=i[c.slice(1,-1)];break;default:var u=+c;if(0===u)return r;if(u>l){var f=d(u/10);return 0===f?r:f<=l?void 0===n[f-1]?c.charAt(1):n[f-1]+c.charAt(1):r}s=n[u-1]}return void 0===s?"":s})}})},ac6a:function(t,e,r){for(var a=r("cadf"),c=r("0d58"),n=r("2aba"),i=r("7726"),s=r("32e9"),o=r("84f2"),l=r("2b4c"),u=l("iterator"),d=l("toStringTag"),f=o.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=c(p),h=0;h<v.length;h++){var g,m=v[h],b=p[m],C=i[m],x=C&&C.prototype;if(x&&(x[u]||s(x,u,f),x[d]||s(x,d,m),o[m]=f,b))for(g in a)x[g]||n(x,g,a[g],!0)}},b0c5:function(t,e,r){"use strict";var a=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:a!==/./.exec},{exec:a})}}]);
//# sourceMappingURL=chunk-4daae1b2.2536e480.js.map