(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6363adf2"],{"0c74":function(t,e,n){},"107c":function(t,e,n){var r=n("d039"),i=n("da84"),a=i.RegExp;t.exports=r((function(){var t=a("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"14c3":function(t,e,n){var r=n("da84"),i=n("c65b"),a=n("825a"),c=n("1626"),o=n("c6b6"),s=n("9263"),u=r.TypeError;t.exports=function(t,e){var n=t.exec;if(c(n)){var r=i(n,t,e);return null!==r&&a(r),r}if("RegExp"===o(t))return i(s,t,e);throw u("RegExp#exec called on incompatible receiver")}},2532:function(t,e,n){"use strict";var r=n("23e7"),i=n("e330"),a=n("5a34"),c=n("1d80"),o=n("577e"),s=n("ab13"),u=i("".indexOf);r({target:"String",proto:!0,forced:!s("includes")},{includes:function(t){return!!~u(o(c(this)),o(a(t)),arguments.length>1?arguments[1]:void 0)}})},"25f0":function(t,e,n){"use strict";var r=n("e330"),i=n("5e77").PROPER,a=n("6eeb"),c=n("825a"),o=n("3a9b"),s=n("577e"),u=n("d039"),l=n("ad6d"),f="toString",d=RegExp.prototype,v=d[f],h=r(l),p=u((function(){return"/a/b"!=v.call({source:"a",flags:"b"})})),g=i&&v.name!=f;(p||g)&&a(RegExp.prototype,f,(function(){var t=c(this),e=s(t.source),n=t.flags,r=s(void 0===n&&o(d,t)&&!("flags"in d)?h(t):n);return"/"+e+"/"+r}),{unsafe:!0})},"29dd":function(t,e,n){"use strict";n("0c74")},"2ca0":function(t,e,n){"use strict";var r=n("23e7"),i=n("e330"),a=n("06cf").f,c=n("50c4"),o=n("577e"),s=n("5a34"),u=n("1d80"),l=n("ab13"),f=n("c430"),d=i("".startsWith),v=i("".slice),h=Math.min,p=l("startsWith"),g=!f&&!p&&!!function(){var t=a(String.prototype,"startsWith");return t&&!t.writable}();r({target:"String",proto:!0,forced:!g&&!p},{startsWith:function(t){var e=o(u(this));s(t);var n=c(h(arguments.length>1?arguments[1]:void 0,e.length)),r=o(t);return d?d(e,r,n):v(e,n,n+r.length)===r}})},"2cf3":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content_t"},[n("div",{staticClass:"fixed"},[n("van-nav-bar",{attrs:{title:"当前城市 -","left-text":"asdsad","left-arrow":!0},scopedSlots:t._u([{key:"left",fn:function(){return[n("van-icon",{attrs:{name:"cross",size:"24",color:"black"},on:{click:function(e){return t.$router.back()}}})]},proxy:!0}])}),n("van-search",{attrs:{placeholder:"输入城市名或拼音",clearable:t.focus,"show-action":t.focus},on:{focus:function(e){t.focus=!0},cancel:function(e){t.focus=!1}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),n("div",{staticClass:"value"},[n("div",{directives:[{name:"show",rawName:"v-show",value:""===t.value,expression:"value===''"}]},[t.isRender?n("div",{staticClass:"plan"},[n("div",{staticClass:"gps"},[n("p",[t._v("GPS定位你所在城市")]),n("div",[t.getCity?n("span",{on:{click:function(e){return t.chooseCity(t.isLocation)}}},[t._v(t._s(t.isLocation.name))]):n("span",[t._v(t._s("定位失败"))])])]),n("div",{staticClass:"hot"},[n("p",[t._v("热门城市")]),n("ul",t._l(t.hotCity,(function(e){return n("li",{on:{click:function(n){return t.chooseCity(e)}}},[t._v(t._s(e.name))])})),0)])]):t._e(),n("van-index-bar",{attrs:{sticky:!1,"index-list":t.value?[]:t.indexList}},[n("div",t._l(t.cityTree,(function(e,r){return n("div",[n("van-index-anchor",{attrs:{index:r}}),t._l(e,(function(e){return n("van-cell",{attrs:{title:e.name},on:{click:function(n){return t.chooseCity(e)}}})}))],2)})),0)])],1),n("div",{directives:[{name:"show",rawName:"v-show",value:""!=t.value,expression:"value!=''"}],staticClass:"search_value"},[n("van-index-bar",{attrs:{sticky:!1,"index-list":t.value?[]:t.indexList}},[n("div",t._l(t.searchCity,(function(e,r){return n("div",[n("van-cell",{staticClass:"my",attrs:{title:e.name},on:{click:function(n){return t.chooseCity(e)}}})],1)})),0)])],1)])])},i=[],a=n("1da1"),c=(n("4d63"),n("ac1f"),n("25f0"),n("159b"),n("2ca0"),n("caad"),n("2532"),n("b0c0"),n("99af"),n("fb6a"),n("841c"),n("96cf"),n("2b0e")),o=n("bc3a"),s=n.n(o),u=n("d399");c["a"].use(u["a"]);var l={data:function(){return{value:"",focus:!1,getCity:!0,allCityList:[],cityTree:{},isRender:!1,isLocation:"",hotCity:[],searchCity:[],timer:[],indexList:[]}},created:function(){this.getCityId()},methods:{city:function(){var t=this;try{var e=new BMap.Geolocation;e.getCurrentPosition((function(e){var n=e.address.city;return t.getCity=!0,t.isNowCity(n),n}),(function(e){t.getCity=!1}),{provider:"baidu"})}catch(n){t.getCity=!1}},axios_:function(){var t=this;return s()({url:"https://m.maizuo.com/gateway?k=7102382",headers:{"X-Client-Info":'{"a":"3000","ch":"1002","v":"5.0.4","e":"16352477313746499972300801","bc":"110100"}',"X-Host":"mall.film-ticket.city.list"}}).then((function(e){t.allCityList=e.data.data.cities,e.data.data.cities.some((function(t){return t===e}))}))},getCityId:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return u["a"].loading({message:"定位中...",forbidClick:!0,duration:0}),e.next=3,t.axios_();case 3:return e.next=5,t.city();case 5:u["a"].clear();case 6:case"end":return e.stop()}}),e)})))()},chooseCity:function(t){this.$store.commit("changeCity",t),this.$router.back()},search:function(t){var e=this,n=new RegExp("[A-Za-z]+");this.searchCity=[],clearTimeout(this.timer[0]);var r=[],i=[];this.timer[0]=setTimeout((function(){try{e.allCityList.forEach((function(e){if(n.test(t)){var a=e.pinyin;if(a===t)throw r.push(e),new Error("停止");if(a.startsWith(t))r.push(e);else if(a.includes(t,1))i.push(e);else{var c=[],o=[],s=0;if(1!=t.length){for(var u=0;u<t.length;u++)a.startsWith(t[0])?a.includes(t[u],s+1)&&0!==u&&(s=a.indexOf(t[u]),o.push(!0)):a.includes(t[u],s+1)&&(s=a.indexOf(t[u]),c.push(!0));o.length===t.length-1&&r.push(e),c.length===t.length&&i.push(e)}}}else e.name.includes(t)&&r.push(e)}))}catch(a){}e.searchCity=[].concat(r,i)}),200)},isNowCity:function(t){var e=this;try{this.allCityList.forEach((function(n){if(n.name===t.slice(0,t.length-1))throw e.isLocation=n,new Error(0)}))}catch(n){}}},watch:{allCityList:function(){for(var t=this,e=65;e<=90;e++)this.cityTree[String.fromCharCode(e)]=[];for(var n in this.allCityList.forEach((function(e){t.cityTree[e.pinyin.toUpperCase().slice(0,1)].push(e),1===e.isHot&&t.hotCity.push(e)})),this.cityTree)0===this.cityTree[n].length?delete this.cityTree[n]:this.indexList.push(n);this.isRender=!0},value:function(t){this.search(t)}}},f=l,d=(n("29dd"),n("2877")),v=Object(d["a"])(f,r,i,!1,null,null,null);e["default"]=v.exports},"44e7":function(t,e,n){var r=n("861d"),i=n("c6b6"),a=n("b622"),c=a("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[c])?!!e:"RegExp"==i(t))}},"4d63":function(t,e,n){var r=n("83ab"),i=n("da84"),a=n("e330"),c=n("94ca"),o=n("7156"),s=n("9112"),u=n("9bf2").f,l=n("241c").f,f=n("3a9b"),d=n("44e7"),v=n("577e"),h=n("ad6d"),p=n("9f7f"),g=n("6eeb"),x=n("d039"),y=n("1a2d"),b=n("69f3").enforce,m=n("2626"),C=n("b622"),w=n("fce3"),E=n("107c"),R=C("match"),_=i.RegExp,k=_.prototype,I=i.SyntaxError,T=a(h),L=a(k.exec),O=a("".charAt),S=a("".replace),A=a("".indexOf),P=a("".slice),N=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,U=/a/g,W=/a/g,$=new _(U)!==U,j=p.UNSUPPORTED_Y,z=r&&(!$||j||w||E||x((function(){return W[R]=!1,_(U)!=U||_(W)==W||"/a/i"!=_(U,"i")}))),B=function(t){for(var e,n=t.length,r=0,i="",a=!1;r<=n;r++)e=O(t,r),"\\"!==e?a||"."!==e?("["===e?a=!0:"]"===e&&(a=!1),i+=e):i+="[\\s\\S]":i+=e+O(t,++r);return i},D=function(t){for(var e,n=t.length,r=0,i="",a=[],c={},o=!1,s=!1,u=0,l="";r<=n;r++){if(e=O(t,r),"\\"===e)e+=O(t,++r);else if("]"===e)o=!1;else if(!o)switch(!0){case"["===e:o=!0;break;case"("===e:L(N,P(t,r+1))&&(r+=2,s=!0),i+=e,u++;continue;case">"===e&&s:if(""===l||y(c,l))throw new I("Invalid capture group name");c[l]=!0,a[a.length]=[l,u],s=!1,l="";continue}s?l+=e:i+=e}return[i,a]};if(c("RegExp",z)){for(var M=function(t,e){var n,r,i,a,c,u,l=f(k,this),h=d(t),p=void 0===e,g=[],x=t;if(!l&&h&&p&&t.constructor===M)return t;if((h||f(k,t))&&(t=t.source,p&&(e="flags"in x?x.flags:T(x))),t=void 0===t?"":v(t),e=void 0===e?"":v(e),x=t,w&&"dotAll"in U&&(r=!!e&&A(e,"s")>-1,r&&(e=S(e,/s/g,""))),n=e,j&&"sticky"in U&&(i=!!e&&A(e,"y")>-1,i&&(e=S(e,/y/g,""))),E&&(a=D(t),t=a[0],g=a[1]),c=o(_(t,e),l?this:k,M),(r||i||g.length)&&(u=b(c),r&&(u.dotAll=!0,u.raw=M(B(t),n)),i&&(u.sticky=!0),g.length&&(u.groups=g)),t!==x)try{s(c,"source",""===x?"(?:)":x)}catch(y){}return c},Y=function(t){t in M||u(M,t,{configurable:!0,get:function(){return _[t]},set:function(e){_[t]=e}})},G=l(_),H=0;G.length>H;)Y(G[H++]);k.constructor=M,M.prototype=k,g(i,"RegExp",M)}m("RegExp")},"5a34":function(t,e,n){var r=n("da84"),i=n("44e7"),a=r.TypeError;t.exports=function(t){if(i(t))throw a("The method doesn't accept regular expressions");return t}},7156:function(t,e,n){var r=n("1626"),i=n("861d"),a=n("d2bb");t.exports=function(t,e,n){var c,o;return a&&r(c=e.constructor)&&c!==n&&i(o=c.prototype)&&o!==n.prototype&&a(t,o),t}},"841c":function(t,e,n){"use strict";var r=n("c65b"),i=n("d784"),a=n("825a"),c=n("1d80"),o=n("129f"),s=n("577e"),u=n("dc4a"),l=n("14c3");i("search",(function(t,e,n){return[function(e){var n=c(this),i=void 0==e?void 0:u(e,t);return i?r(i,e,n):new RegExp(e)[t](s(n))},function(t){var r=a(this),i=s(t),c=n(e,r,i);if(c.done)return c.value;var u=r.lastIndex;o(u,0)||(r.lastIndex=0);var f=l(r,i);return o(r.lastIndex,u)||(r.lastIndex=u),null===f?-1:f.index}]}))},9263:function(t,e,n){"use strict";var r=n("c65b"),i=n("e330"),a=n("577e"),c=n("ad6d"),o=n("9f7f"),s=n("5692"),u=n("7c73"),l=n("69f3").get,f=n("fce3"),d=n("107c"),v=s("native-string-replace",String.prototype.replace),h=RegExp.prototype.exec,p=h,g=i("".charAt),x=i("".indexOf),y=i("".replace),b=i("".slice),m=function(){var t=/a/,e=/b*/g;return r(h,t,"a"),r(h,e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),C=o.UNSUPPORTED_Y||o.BROKEN_CARET,w=void 0!==/()??/.exec("")[1],E=m||w||C||f||d;E&&(p=function(t){var e,n,i,o,s,f,d,E=this,R=l(E),_=a(t),k=R.raw;if(k)return k.lastIndex=E.lastIndex,e=r(p,k,_),E.lastIndex=k.lastIndex,e;var I=R.groups,T=C&&E.sticky,L=r(c,E),O=E.source,S=0,A=_;if(T&&(L=y(L,"y",""),-1===x(L,"g")&&(L+="g"),A=b(_,E.lastIndex),E.lastIndex>0&&(!E.multiline||E.multiline&&"\n"!==g(_,E.lastIndex-1))&&(O="(?: "+O+")",A=" "+A,S++),n=new RegExp("^(?:"+O+")",L)),w&&(n=new RegExp("^"+O+"$(?!\\s)",L)),m&&(i=E.lastIndex),o=r(h,T?n:E,A),T?o?(o.input=b(o.input,S),o[0]=b(o[0],S),o.index=E.lastIndex,E.lastIndex+=o[0].length):E.lastIndex=0:m&&o&&(E.lastIndex=E.global?o.index+o[0].length:i),w&&o&&o.length>1&&r(v,o[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(o[s]=void 0)})),o&&I)for(o.groups=f=u(null),s=0;s<I.length;s++)d=I[s],f[d[0]]=o[d[1]];return o}),t.exports=p},"9f7f":function(t,e,n){var r=n("d039"),i=n("da84"),a=i.RegExp;e.UNSUPPORTED_Y=r((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ab13:function(t,e,n){var r=n("b622"),i=r("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[i]=!1,"/./"[t](e)}catch(r){}}return!1}},ac1f:function(t,e,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},caad:function(t,e,n){"use strict";var r=n("23e7"),i=n("4d64").includes,a=n("44d2");r({target:"Array",proto:!0},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a("includes")},d784:function(t,e,n){"use strict";n("ac1f");var r=n("e330"),i=n("6eeb"),a=n("9263"),c=n("d039"),o=n("b622"),s=n("9112"),u=o("species"),l=RegExp.prototype;t.exports=function(t,e,n,f){var d=o(t),v=!c((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),h=v&&!c((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return e=!0,null},n[d](""),!e}));if(!v||!h||n){var p=r(/./[d]),g=e(d,""[t],(function(t,e,n,i,c){var o=r(t),s=e.exec;return s===a||s===l.exec?v&&!c?{done:!0,value:p(e,n,i)}:{done:!0,value:o(n,e,i)}:{done:!1}}));i(String.prototype,t,g[0]),i(l,d,g[1])}f&&s(l[d],"sham",!0)}},fb6a:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),a=n("e8b5"),c=n("68ee"),o=n("861d"),s=n("23cb"),u=n("07fa"),l=n("fc6a"),f=n("8418"),d=n("b622"),v=n("1dde"),h=n("f36a"),p=v("slice"),g=d("species"),x=i.Array,y=Math.max;r({target:"Array",proto:!0,forced:!p},{slice:function(t,e){var n,r,i,d=l(this),v=u(d),p=s(t,v),b=s(void 0===e?v:e,v);if(a(d)&&(n=d.constructor,c(n)&&(n===x||a(n.prototype))?n=void 0:o(n)&&(n=n[g],null===n&&(n=void 0)),n===x||void 0===n))return h(d,p,b);for(r=new(void 0===n?x:n)(y(b-p,0)),i=0;p<b;p++,i++)p in d&&f(r,i,d[p]);return r.length=i,r}})},fce3:function(t,e,n){var r=n("d039"),i=n("da84"),a=i.RegExp;t.exports=r((function(){var t=a(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))}}]);
//# sourceMappingURL=chunk-6363adf2.2060fd8e.js.map