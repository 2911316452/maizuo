(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-688dc3d6"],{"1b0e":function(t,a,e){"use strict";e("625c")},"4de4":function(t,a,e){"use strict";var i=e("23e7"),n=e("b727").filter,s=e("1dde"),o=s("filter");i({target:"Array",proto:!0,forced:!o},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},"625c":function(t,a,e){},c399:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content_off"},[e("ul",[e("van-list",{attrs:{finished:t.finished,"finished-text":"我是有底线的...","immediate-check":!0},on:{load:t.onLoad},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},t._l(t.films,(function(a){return e("li",{on:{click:function(e){return t.detail(a.filmId)}}},[e("div",{staticClass:"movie_img"},[e("img",{staticClass:"fimg",attrs:{src:a.poster}})]),e("div",{staticClass:"right"},[e("p",{staticClass:"title"},[t._v(t._s(a.name)),e("span",{staticClass:"timeType"},[t._v(t._s(a.item.name))])]),e("p",{staticClass:"actors"},[t._v("主演："+t._s(t._f("otoa")(a.actors)))]),e("p",[t._v("上映日期："+t._s(t.date(a.premiereAt)))])]),e("button",{staticClass:"gbtn",attrs:{type:"button"}},[t._v("预购")])])})),0)],1)])},n=[],s=e("2909"),o=(e("4de4"),e("b0c0"),e("99af"),e("bc3a")),c=e.n(o),l=e("2b0e");l["a"].filter("otoa",(function(t){return t.reduce((function(t,a){return t+a.name+" "}),"")}));var r={data:function(){return{films:[],page:1,timer:"",finished:!1,loading:!1}},mounted:function(){},methods:{axios_:function(t){var a=this;c()({url:"https://m.maizuo.com/gateway?cityId=".concat(this.$store.state.cityId,"&pageNum=").concat(t,"&pageSize=10&type=2&k=1894032"),headers:{"X-Client-Info":'{"a":"3000","ch":"1002","v":"5.0.4","e":"16339322892594864621420545","bc":"110100"}',"X-Host":"mall.film-ticket.film.list"}}).then((function(t){var e;(e=a.films).push.apply(e,Object(s["a"])(t.data.data.films)),a.page++,a.loading=!1,0===t.data.data.films.length&&(a.finished=!0),a.films.length===t.data.data.total-1&&t.data.data.total>10&&(a.finished=!0),t.data.data.total<=10&&a.films.length===t.data.data.total&&(a.finished=!0)}))},onLoad:function(){this.axios_(this.page)},date:function(t){var a=new Date(1e3*t),e=(new Date).getFullYear()===a.getFullYear()?"":a.getFullYear()+"年";return this.week(a.getDay())+" "+e+(a.getMonth()+1)+"月"+a.getDate()+"日"},week:function(t){var a=["周日","周一","周二","周三","周四","周五","周六"];return a[t]},detail:function(t){this.$router.push("/main/movie/on/detail/".concat(t))}}},d=r,u=(e("1b0e"),e("2877")),f=Object(u["a"])(d,i,n,!1,null,"2e32cde7",null);a["default"]=f.exports}}]);
//# sourceMappingURL=chunk-688dc3d6.1d521da5.js.map