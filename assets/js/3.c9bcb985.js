(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{153:function(t,n,o){"use strict";var s=o(4),i=o(15),r=o(16),v=o(76),c=o(74),a=o(6),e=o(97).f,l=o(98).f,g=o(9).f,d=o(99).trim,p=s.Number,_=p,u=p.prototype,f="Number"==r(o(75)(u)),h="trim"in String.prototype,w=function(t){var n=c(t,!1);if("string"==typeof n&&n.length>2){var o,s,i,r=(n=h?n.trim():d(n,3)).charCodeAt(0);if(43===r||45===r){if(88===(o=n.charCodeAt(2))||120===o)return NaN}else if(48===r){switch(n.charCodeAt(1)){case 66:case 98:s=2,i=49;break;case 79:case 111:s=8,i=55;break;default:return+n}for(var v,a=n.slice(2),e=0,l=a.length;e<l;e++)if((v=a.charCodeAt(e))<48||v>i)return NaN;return parseInt(a,s)}}return+n};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var n=arguments.length<1?0:t,o=this;return o instanceof p&&(f?a(function(){u.valueOf.call(o)}):"Number"!=r(o))?v(new _(w(n)),o,p):w(n)};for(var m,b=o(8)?e(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;b.length>N;N++)i(_,m=b[N])&&!i(p,m)&&g(p,m,l(_,m));p.prototype=u,u.constructor=p,o(11)(s,"Number",p)}},162:function(t,n,o){},163:function(t,n,o){},164:function(t,n,o){},192:function(t,n,o){"use strict";var s=o(162);o.n(s).a},193:function(t,n,o){"use strict";var s=o(3),i=o(78)(!0);s(s.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o(101)("includes")},194:function(t,n,o){"use strict";var s=o(3),i=o(195);s(s.P+s.F*o(196)("includes"),"String",{includes:function(t){return!!~i(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},195:function(t,n,o){var s=o(80),i=o(18);t.exports=function(t,n,o){if(s(n))throw TypeError("String#"+o+" doesn't accept regex!");return String(i(t))}},196:function(t,n,o){var s=o(2)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(o){try{return n[s]=!1,!"/./"[t](n)}catch(t){}}return!0}},197:function(t,n,o){"use strict";var s=o(163);o.n(s).a},198:function(t,n,o){"use strict";var s=o(164);o.n(s).a},216:function(t,n,o){"use strict";o.r(n);o(26),o(96),o(14),o(25),o(54),o(153);var s={name:"GuLuRow",props:{gutter:{type:[Number,String]},align:{type:String,validator:function(t){return["left","right","center"].indexOf(t)>=0}}},mounted:function(){var t=this;this.$children.forEach(function(n){n.gutter=t.gutter})},computed:{rowStyle:function(){var t=this.gutter;return{marginLeft:-t/2+"px",marginRight:-t/2+"px"}},rowClass:function(){var t=this.align;return[t&&"align-".concat(t)]}}},i=(o(192),o(1)),r=Object(i.a)(s,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",class:this.rowClass,style:this.rowStyle},[this._t("default")],2)},[],!1,null,"23202d19",null).exports,v=o(10),c=(o(193),o(194),o(21),o(31),function(t){var n=Object.keys(t),o=!0;return n.forEach(function(t){["span","offset"].includes(t)||(o=!1)}),o}),a={name:"GuLuCol",props:{span:{type:[Number,String]},offset:{offset:[Number,String]},phone:{type:Object,validator:c},ipad:{type:Object,validator:c},narrowPc:{type:Object,validator:c},pc:{type:Object,validator:c}},data:function(){return{gutter:0}},methods:{createClass:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return[];var o=[];return t.span&&o.push("col-".concat(n).concat(t.span)),t.offset&&o.push("offset-".concat(n).concat(t.offset)),o}},computed:{colClass:function(){var t=this.span,n=this.offset,o=this.ipad,s=this.narrowPc,i=this.pc,r=this.createClass;return Object(v.a)(r({span:t,offset:n})).concat(Object(v.a)(r(o,"ipad-")),Object(v.a)(r(s,"narrow-pc-")),Object(v.a)(r(i,"pc-")))},colStyle:function(){var t=this.gutter;return{paddingLeft:t/2+"px",paddingRight:t/2+"px"}}}},e=(o(197),{components:{GRow:r,GCol:Object(i.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[this._t("default")],2)},[],!1,null,"71b73232",null).exports},data:function(){return{content1:'\n      * {box-sizing: border-box;}\n        <g-row>\n            <g-col span="8"><div>8</div></g-col>\n            <g-col span="8"><div>8</div></g-col>\n            <g-col span="8"><div>8</div></g-col>\n        </g-row>\n        <g-row>\n            <g-col span="6"><div>6</div></g-col>\n            <g-col span="6"><div>6</div></g-col>\n            <g-col span="6"><div>6</div></g-col>\n            <g-col span="6"><div>6</div></g-col>\n        </g-row>\n        <g-row>\n            <g-col span="4"><div>4</div></g-col>\n            <g-col span="4"><div>4</div></g-col>\n            <g-col span="4"><div>4</div></g-col>\n            <g-col span="4"><div>4</div></g-col>\n            <g-col span="4"><div>4</div></g-col>\n            <g-col span="4"><div>4</div></g-col>\n        </g-row>\n        <g-row>\n            <g-col span="2"><div>2</div></g-col>\n            <g-col span="2"><div>2</div></g-col>\n            <g-col span="2"><div>2</div></g-col>\n            <g-col span="2"><div>2</div></g-col>\n            <g-col span="2"><div>2</div></g-col>\n            <g-col span="2"><div>2</div></g-col>\n            <g-col span="2"><div>2</div></g-col>\n            <g-col span="2"><div>2</div></g-col>\n            <g-col span="2"><div>2</div></g-col>\n            <g-col span="2"><div>2</div></g-col>\n            <g-col span="2"><div>2</div></g-col>\n            <g-col span="2"><div>2</div></g-col>\n        </g-row>\n                '.replace(/^ {8}/gm,"").trim(),content2:'\n    * {box-sizing: border-box;}\n        <g-row gutter="10">\n            <g-col span="8"><div>8</div></g-col>\n            <g-col span="8"><div>8</div></g-col>\n            <g-col span="8"><div>8</div></g-col>\n        </g-row>\n        <g-row gutter="10">\n            <g-col span="6"><div>6</div></g-col>\n            <g-col span="6"><div>6</div></g-col>\n            <g-col span="6"><div>6</div></g-col>\n            <g-col span="6"><div>6</div></g-col>\n        </g-row>\n        <g-row gutter="10">\n            <g-col span="4"><div>4</div></g-col>\n            <g-col span="4"><div>4</div></g-col>\n            <g-col span="4"><div>4</div></g-col>\n            <g-col span="4"><div>4</div></g-col>\n            <g-col span="4"><div>4</div></g-col>\n            <g-col span="4"><div>4</div></g-col>\n        </g-row>\n        '.replace(/^ {8}/gm,"").trim(),content3:'\n        <g-row gutter="10">\n            <g-col span="8"><div>8</div></g-col>\n            <g-col span="8"  offset="8"><div>8</div></g-col>\n\n        </g-row>\n        <g-row gutter="10">\n            <g-col span="6"><div>6</div></g-col>\n            <g-col span="6"  offset="3"><div>6</div></g-col>\n            <g-col span="6"  offset="3"><div>6</div></g-col>\n        </g-row>\n        <g-row gutter="10">\n            <g-col span="4"><div>4</div></g-col>\n            <g-col span="4" offset="4"><div>4</div></g-col>\n            <g-col span="4"><div>4</div></g-col>\n            <g-col span="4" offset="4"><div>4</div></g-col>\n        </g-row>'.replace(/^ {8}/gm,"")}}}),l=(o(198),Object(i.a)(e,function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticStyle:{"padding-top":"16px"}},[o("p",[t._v("Grid - 网格，最多可分为24小格，可设置 gutter 和空白，默认支持响应式布局")]),t._v(" "),o("h2",[t._v("24格网格")]),t._v(" "),t._m(0),t._v(" "),o("g-row",[o("g-col",{attrs:{span:"8"}},[o("div",[t._v("8")])]),t._v(" "),o("g-col",{attrs:{span:"8"}},[o("div",[t._v("8")])]),t._v(" "),o("g-col",{attrs:{span:"8"}},[o("div",[t._v("8")])])],1),t._v(" "),o("g-row",[o("g-col",{attrs:{span:"6"}},[o("div",[t._v("6")])]),t._v(" "),o("g-col",{attrs:{span:"6"}},[o("div",[t._v("6")])]),t._v(" "),o("g-col",{attrs:{span:"6"}},[o("div",[t._v("6")])]),t._v(" "),o("g-col",{attrs:{span:"6"}},[o("div",[t._v("6")])])],1),t._v(" "),o("g-row",[o("g-col",{attrs:{span:"4"}},[o("div",[t._v("4")])]),t._v(" "),o("g-col",{attrs:{span:"4"}},[o("div",[t._v("4")])]),t._v(" "),o("g-col",{attrs:{span:"4"}},[o("div",[t._v("4")])]),t._v(" "),o("g-col",{attrs:{span:"4"}},[o("div",[t._v("4")])]),t._v(" "),o("g-col",{attrs:{span:"4"}},[o("div",[t._v("4")])]),t._v(" "),o("g-col",{attrs:{span:"4"}},[o("div",[t._v("4")])])],1),t._v(" "),o("g-row",[o("g-col",{attrs:{span:"2"}},[o("div",[t._v("2")])]),t._v(" "),o("g-col",{attrs:{span:"2"}},[o("div",[t._v("2")])]),t._v(" "),o("g-col",{attrs:{span:"2"}},[o("div",[t._v("2")])]),t._v(" "),o("g-col",{attrs:{span:"2"}},[o("div",[t._v("2")])]),t._v(" "),o("g-col",{attrs:{span:"2"}},[o("div",[t._v("2")])]),t._v(" "),o("g-col",{attrs:{span:"2"}},[o("div",[t._v("2")])]),t._v(" "),o("g-col",{attrs:{span:"2"}},[o("div",[t._v("2")])]),t._v(" "),o("g-col",{attrs:{span:"2"}},[o("div",[t._v("2")])]),t._v(" "),o("g-col",{attrs:{span:"2"}},[o("div",[t._v("2")])]),t._v(" "),o("g-col",{attrs:{span:"2"}},[o("div",[t._v("2")])]),t._v(" "),o("g-col",{attrs:{span:"2"}},[o("div",[t._v("2")])]),t._v(" "),o("g-col",{attrs:{span:"2"}},[o("div",[t._v("2")])])],1),t._v(" "),t._m(1),t._v(" "),o("pre",[o("code",{staticClass:"html"},[t._v(t._s(t.content1))])]),t._v(" "),o("h2",[t._v("设置 gutter")]),t._v(" "),t._m(2),t._v(" "),o("g-row",{attrs:{gutter:"10"}},[o("g-col",{attrs:{span:"8"}},[o("div",[t._v("8")])]),t._v(" "),o("g-col",{attrs:{span:"8"}},[o("div",[t._v("8")])]),t._v(" "),o("g-col",{attrs:{span:"8"}},[o("div",[t._v("8")])])],1),t._v(" "),o("g-row",{attrs:{gutter:"10"}},[o("g-col",{attrs:{span:"6"}},[o("div",[t._v("6")])]),t._v(" "),o("g-col",{attrs:{span:"6"}},[o("div",[t._v("6")])]),t._v(" "),o("g-col",{attrs:{span:"6"}},[o("div",[t._v("6")])]),t._v(" "),o("g-col",{attrs:{span:"6"}},[o("div",[t._v("6")])])],1),t._v(" "),o("g-row",{attrs:{gutter:"10"}},[o("g-col",{attrs:{span:"4"}},[o("div",[t._v("4")])]),t._v(" "),o("g-col",{attrs:{span:"4"}},[o("div",[t._v("4")])]),t._v(" "),o("g-col",{attrs:{span:"4"}},[o("div",[t._v("4")])]),t._v(" "),o("g-col",{attrs:{span:"4"}},[o("div",[t._v("4")])]),t._v(" "),o("g-col",{attrs:{span:"4"}},[o("div",[t._v("4")])]),t._v(" "),o("g-col",{attrs:{span:"4"}},[o("div",[t._v("4")])])],1),t._v(" "),t._m(3),t._v(" "),o("pre",[o("code",[t._v(t._s(t.content2))])]),t._v(" "),o("h2",[t._v("设置 空白")]),t._v(" "),t._m(4),t._v(" "),o("g-row",{attrs:{gutter:"10"}},[o("g-col",{attrs:{span:"8"}},[o("div",[t._v("8")])]),t._v(" "),o("g-col",{attrs:{span:"8",offset:"8"}},[o("div",[t._v("8")])])],1),t._v(" "),o("g-row",{attrs:{gutter:"10"}},[o("g-col",{attrs:{span:"6"}},[o("div",[t._v("6")])]),t._v(" "),o("g-col",{attrs:{span:"6",offset:"3"}},[o("div",[t._v("6")])]),t._v(" "),o("g-col",{attrs:{span:"6",offset:"3"}},[o("div",[t._v("6")])])],1),t._v(" "),o("g-row",{attrs:{gutter:"10"}},[o("g-col",{attrs:{span:"4"}},[o("div",[t._v("4")])]),t._v(" "),o("g-col",{attrs:{span:"4",offset:"4"}},[o("div",[t._v("4")])]),t._v(" "),o("g-col",{attrs:{span:"4"}},[o("div",[t._v("4")])]),t._v(" "),o("g-col",{attrs:{span:"4",offset:"4"}},[o("div",[t._v("4")])])],1),t._v(" "),t._m(5),t._v(" "),o("pre",[o("code",[t._v(t._s(t.content3))])])],1)},[function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("预览")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("代码")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("预览")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("代码")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("预览")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("代码")])])}],!1,null,"d02e3fe8",null));n.default=l.exports}}]);