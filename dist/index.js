// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"G+AJ":[function(require,module,exports) {
!function (d) {
  var t,
      c = '<svg><symbol id="i-download" viewBox="0 0 1024 1024"><path d="M937.25 962L86.75 962C73.25 962 62 950.75 62 937.25l0 0c0-13.5 11.25-24.75 24.75-24.75l850.5 0c13.5 0 24.75 11.25 24.75 24.75l0 0C962 950.75 950.75 962 937.25 962z"  ></path><path d="M876.5 392.75L876.5 392.75c-9-9-27-9-36 0L534.5 696.5 534.5 86.75C534.5 73.25 525.5 62 512 62s-22.5 11.25-22.5 24.75l0 609.75L183.5 392.75c-9-9-27-9-36 0-9 9-9 24.75 0 36l346.5 346.5c2.25 2.25 2.25 2.25 4.5 2.25 0 0 2.25 2.25 2.25 2.25 6.75 2.25 13.5 2.25 20.25 0 2.25 0 2.25-2.25 2.25-2.25 2.25 0 4.5-2.25 4.5-2.25l346.5-346.5C885.5 417.5 885.5 401.75 876.5 392.75z"  ></path></symbol><symbol id="i-error" viewBox="0 0 1024 1024"><path d="M514.171456 957.933305c-246.989277 0-447.212438-200.228277-447.212438-447.212438 0-246.99337 200.223161-447.221648 447.212438-447.221648 246.99337 0 447.216531 200.228277 447.216531 447.221648C961.387987 757.706051 761.164826 957.933305 514.171456 957.933305zM565.775764 300.010865c0-28.501124-23.103184-51.604308-51.604308-51.604308-28.497031 0-51.595099 23.103184-51.595099 51.604308l0 240.808508c0 28.497031 23.099091 51.604308 51.595099 51.604308 28.501124 0 51.604308-23.107277 51.604308-51.604308L565.775764 300.010865zM514.171456 661.223626c-28.497031 0-51.595099 23.103184-51.595099 51.604308 0 28.497031 23.099091 51.600215 51.595099 51.600215 28.501124 0 51.604308-23.103184 51.604308-51.600215C565.775764 684.32681 542.67258 661.223626 514.171456 661.223626z"  ></path></symbol><symbol id="i-settings" viewBox="0 0 1024 1024"><path d="M939.5 651.5C770.75 518.75 939.5 365.75 939.5 365.75l4.5-4.5-90-155.25-9 4.5c-29.25 13.5-56.25 18-81 18-130.5 0-166.5-162-166.5-162l0-4.5-177.75 0-2.25 9C399.5 201.5 314 226.25 248.75 226.25c-42.75 0-76.5-11.25-76.5-11.25L165.5 212.75l-87.75 155.25L84.5 372.5C253.25 505.25 84.5 658.25 84.5 658.25l-4.5 4.5 90 155.25 9-4.5c31.5-13.5 58.5-18 81-18 130.5 0 166.5 159.75 166.5 159.75l2.25 6.75 177.75 0 2.25-9c18-128.25 103.5-153 168.75-153 42.75 0 76.5 11.25 76.5 11.25l6.75 2.25 90-155.25L939.5 651.5zM836 759.5c-15.75-2.25-38.25-6.75-60.75-6.75-110.25 0-184.5 58.5-209.25 164.25l-105.75 0c-24.75-69.75-85.5-166.5-202.5-166.5-22.5 0-45 4.5-69.75 11.25L136.25 669.5c27-31.5 72-94.5 67.5-171-2.25-51.75-24.75-99-69.75-141.75L185.75 264.5c15.75 2.25 38.25 6.75 60.75 6.75 110.25 0 184.5-58.5 209.25-164.25l105.75 0c20.25 56.25 74.25 166.5 202.5 166.5 22.5 0 45-4.5 69.75-11.25l54 92.25c-27 31.5-72 94.5-69.75 171 2.25 51.75 24.75 99 69.75 141.75L836 759.5z"  ></path><path d="M512 320.75c-110.25 0-200.25 90-200.25 200.25s90 200.25 200.25 200.25 200.25-90 200.25-200.25S622.25 320.75 512 320.75zM512 676.25c-85.5 0-155.25-69.75-155.25-155.25s69.75-155.25 155.25-155.25 155.25 69.75 155.25 155.25S597.5 676.25 512 676.25z"  ></path></symbol><symbol id="i-down" viewBox="0 0 1024 1024"><path d="M129.06666667 280.10666667l374.93333333 374.93333333c2.02666667 2.02666667 4.8 3.30666667 8 3.30666667s5.97333333-1.28 8.10666667-3.41333334L894.93333333 280.10666667c14.82666667-14.82666667 39.14666667-14.82666667 53.97333334 0 14.82666667 14.82666667 14.82666667 39.14666667 0 53.97333333L538.98666667 743.89333333c-14.82666667 14.82666667-39.14666667 14.82666667-53.97333334 0-0.10666667-0.10666667-0.10666667-0.10666667-0.10666666-0.21333333L75.09333333 333.97333333c-14.82666667-14.82666667-14.82666667-39.14666667 0-53.97333333 14.82666667-14.72 39.14666667-14.72 53.97333334 0.10666667z"  ></path><path d="M501.12 649.81333333c0-0.21333333-0.10666667-0.32-0.10666667-0.53333333 0 0.21333333 0 0.32 0.10666667 0.53333333zM501.76 651.62666667c0-0.10666667-0.10666667-0.10666667-0.10666667-0.21333334 0 0.10666667 0 0.10666667 0.10666667 0.21333334zM500.69333333 647.04v0z"  ></path></symbol><symbol id="i-right" viewBox="0 0 1024 1024"><path d="M280.10666667 129.06666666L655.04 504c2.02666667 2.02666667 3.30666667 4.8 3.30666667 8s-1.28 5.97333333-3.41333334 8.10666667L280.10666667 894.93333334c-14.82666667 14.82666667-14.82666667 39.14666667 0 53.97333332 14.82666667 14.82666667 39.14666667 14.82666667 53.97333333 1e-8L743.89333333 538.98666666c14.82666667-14.82666667 14.82666667-39.14666667 0-53.97333332-0.10666667-0.10666667-0.10666667-0.10666667-0.21333333-0.10666667l-409.70666667-409.70666668c-14.82666667-14.82666667-39.14666667-14.82666667-53.97333333 1e-8-14.72 14.72-14.72 39.04 0.10666667 53.86666666z"  ></path><path d="M649.81333333 501.12c-0.21333334 0-0.32-0.10666667-0.53333334-0.10666667 0.21333334 0 0.31999999 0 0.53333334 0.10666667zM651.62666667 501.76c-0.10666667 0-0.10666667-0.10666667-0.21333334-0.10666667 0.10666667 0 0.10666667 0 0.21333334 0.10666667zM647.04 500.69333333l0.10666668 0-0.10666668 0z"  ></path></symbol><symbol id="i-loading" viewBox="0 0 1024 1024"><path d="M125.52910156 575.52910156c35.0859375 0 63.52998047-28.44316406 63.52998047-63.52910156 0-35.0859375-28.44316406-63.52910156-63.52998047-63.52910156C90.44316406 448.47089844 62 476.9140625 62 512c0 35.0859375 28.44316406 63.52910156 63.52910156 63.52910156z m772.94179688 0c35.0859375 0 63.52910156-28.44316406 63.52910156-63.52910156 0-35.0859375-28.44316406-63.52910156-63.52910156-63.52910156-35.0859375 0-63.52998047 28.44316406-63.52998047 63.52910156 0 35.0859375 28.44316406 63.52910156 63.52998047 63.52910156z m-450-450c0 35.0859375 28.44316406 63.52998047 63.52910156 63.52998047 35.0859375 0 63.52910156-28.44316406 63.52910156-63.52998047C575.52910156 90.44316406 547.0859375 62 512 62c-35.0859375 0-63.52910156 28.44316406-63.52910156 63.52910156z m0 772.94179688c0 35.0859375 28.44316406 63.52910156 63.52910156 63.52910156 35.0859375 0 63.52910156-28.44316406 63.52910156-63.52910156 0-35.0859375-28.44316406-63.52998047-63.52910156-63.52998047-35.0859375 0-63.52910156 28.44316406-63.52910156 63.52998047zM189.61015625 279.45371094c24.80976563 24.80976563 65.03378906 24.80976563 89.84355469 0 24.80976563-24.80976563 24.80976563-65.03378906 0-89.84355469-24.80976563-24.80976563-65.03378906-24.80976563-89.84355469 0-24.80976563 24.80976563-24.80976563 65.03378906 0 89.84355469zM736.16152344 826.00683594c24.80976563 24.80976563 65.03466797 24.80976563 89.84443359 0 24.80976563-24.80976563 24.80976563-65.03466797 0-89.8444336-24.80976563-24.80976563-65.03466797-24.80976563-89.84443359 0-24.80976563 24.80976563-24.80976563 65.03466797 0 89.8444336z m0-636.39580078c-24.80976563 24.80976563-24.80976563 65.03378906 0 89.84355468 24.80976563 24.80976563 65.03466797 24.80976563 89.84443359 0 24.80976563-24.80976563 24.80976563-65.03378906 0-89.84355468-24.80976563-24.80976563-65.03466797-24.80976563-89.84443359 0zM189.61015625 736.16152344c-24.80976563 24.80976563-24.80976563 65.03466797 0 89.84443359 24.80976563 24.80976563 65.03378906 24.80976563 89.84355469 0 24.80976563-24.80976563 24.80976563-65.03466797 0-89.84443359-24.80976563-24.80976563-65.03378906-24.80976563-89.84355469 0z"  ></path></symbol><symbol id="i-left" viewBox="0 0 1024 1024"><path d="M743.89333333 894.93333334L368.96 520c-2.02666667-2.02666667-3.30666668-4.8-3.30666668-8s1.28-5.97333332 3.41333335-8.10666667L743.89333333 129.06666666c14.82666667-14.82666667 14.82666667-39.14666667 0-53.97333332-14.82666667-14.82666667-39.14666667-14.82666667-53.97333333-1e-8L280.10666667 485.01333334c-14.82666667 14.82666667-14.82666667 39.14666667 0 53.97333332 0.10666667 0.10666667 0.10666667 0.10666667 0.21333333 0.10666667l409.70666667 409.70666667c14.82666667 14.82666667 39.14666667 14.82666667 53.97333333 0 14.72-14.72 14.72-39.04-0.10666667-53.86666666z"  ></path><path d="M374.18666667 522.87999999c0.21333334 0 0.32 0.10666668 0.53333334 0.10666668-0.21333334 0-0.31999999 0-0.53333334-0.10666668zM372.37333333 522.24c0.10666668 0 0.10666667 0.10666667 0.21333334 0.10666667-0.10666668 0-0.10666668 0-0.21333334-0.10666667zM376.95999999 523.30666667l-0.10666667 0 0.10666667 0z"  ></path></symbol><symbol id="i-info" viewBox="0 0 1024 1024"><path d="M509.828544 66.066695c246.989277 0 447.212438 200.228277 447.212438 447.212438 0 246.99337001-200.223161 447.221648-447.212438 447.221648-246.99337001 0-447.216531-200.228277-447.216531-447.221648C62.612013 266.293949 262.835174 66.066695 509.828544 66.066695zM458.224236 723.989135c0 28.501124 23.103184 51.604308 51.604308 51.604308 28.49703099 0 51.595099-23.103184 51.595099-51.604308l0-240.808508c0-28.49703099-23.099091-51.604308-51.595099-51.604308-28.501124 0-51.604308 23.10727701-51.604308 51.604308L458.224236 723.989135zM509.828544 362.776374c28.49703099 0 51.595099-23.103184 51.595099-51.604308 0-28.49703099-23.099091-51.600215-51.595099-51.600215-28.501124 0-51.604308 23.103184-51.604308 51.600215C458.224236 339.67319 481.32742 362.776374 509.828544 362.776374z"  ></path></symbol></svg>',
      e = (t = document.getElementsByTagName("script"))[t.length - 1].getAttribute("data-injectcss");

  if (e && !d.__iconfont__svg__cssinject__) {
    d.__iconfont__svg__cssinject__ = !0;

    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (t) {
      console && console.log(t);
    }
  }

  !function (t) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) setTimeout(t, 0);else {
        var e = function e() {
          document.removeEventListener("DOMContentLoaded", e, !1), t();
        };

        document.addEventListener("DOMContentLoaded", e, !1);
      }
    } else document.attachEvent && (o = t, i = d.document, n = !1, (_l = function l() {
      try {
        i.documentElement.doScroll("left");
      } catch (t) {
        return void setTimeout(_l, 50);
      }

      c();
    })(), i.onreadystatechange = function () {
      "complete" == i.readyState && (i.onreadystatechange = null, c());
    });

    function c() {
      n || (n = !0, o());
    }

    var o, i, n, _l;
  }(function () {
    var t, e;
    (t = document.createElement("div")).innerHTML = c, c = null, (e = t.getElementsByTagName("svg")[0]) && (e.setAttribute("aria-hidden", "true"), e.style.position = "absolute", e.style.width = 0, e.style.height = 0, e.style.overflow = "hidden", function (t, e) {
      e.firstChild ? function (t, e) {
        e.parentNode.insertBefore(t, e);
      }(t, e.firstChild) : e.appendChild(t);
    }(e, document.body));
  });
}(window);
},{}],"wFXB":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./svg");

//
//
//
//
//
var _default = {
  name: 'GuLuIcon',
  props: ['name']
};
exports.default = _default;
        var $c94875 = exports.default || module.exports;
      
      if (typeof $c94875 === 'function') {
        $c94875 = $c94875.options;
      }
    
        /* template */
        Object.assign($c94875, (function () {
          var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"g-icon"},[_c('use',{attrs:{"xlink:href":("#i-" + _vm.name)}})])}
var staticRenderFns = []

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
        })());
      
},{"./svg":"G+AJ"}],"iM1m":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _icon = _interopRequireDefault(require("./icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
var _default = {
  name: 'GuLuButton',
  //props:['icon','iconPosition']
  components: {
    'g-icon': _icon.default
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator: function validator(value) {
        return value === 'left' || value === 'right';
      }
    }
  }
};
exports.default = _default;
        var $45b531 = exports.default || module.exports;
      
      if (typeof $45b531 === 'function') {
        $45b531 = $45b531.options;
      }
    
        /* template */
        Object.assign($45b531, (function () {
          var render = function () {
var _obj;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"g-button",class:( _obj = {}, _obj[("icon-" + _vm.iconPosition)] = true, _obj ),on:{"click":function($event){return _vm.$emit('click')}}},[(_vm.icon && _vm.loading !== true)?_c('g-icon',{staticClass:"icon",attrs:{"name":_vm.icon}},[_vm._v(_vm._s(_vm.icon))]):_vm._e(),_vm._v(" "),(_vm.loading)?_c('g-icon',{staticClass:"loading icon",attrs:{"name":"loading"}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"g-button-content"},[_vm._t("default")],2)],1)}
var staticRenderFns = []

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
        })());
      
},{"./icon":"wFXB"}],"h0wh":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
var _default = {
  name: 'GuLuButtonGroup',
  mounted: function mounted() {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this.$el.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var node = _step.value;
        var name = node.nodeName.toLowerCase();

        if (name !== 'button') {
          console.warn("g-button-group \u7684\u5B50\u5143\u7D20\u5E94\u8BE5\u662F g-button ,\u4F60\u4F7F\u7528\u7684\u662F ".concat(name));
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
};
exports.default = _default;
        var $65a01c = exports.default || module.exports;
      
      if (typeof $65a01c === 'function') {
        $65a01c = $65a01c.options;
      }
    
        /* template */
        Object.assign($65a01c, (function () {
          var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"g-button-group"},[_vm._t("default")],2)}
var staticRenderFns = []

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
        })());
      
},{}],"Focm":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function () {
    return _button.default;
  }
});
Object.defineProperty(exports, "ButtonGroup", {
  enumerable: true,
  get: function () {
    return _buttonGroup.default;
  }
});
Object.defineProperty(exports, "Icon", {
  enumerable: true,
  get: function () {
    return _icon.default;
  }
});

var _button = _interopRequireDefault(require("./src/button"));

var _buttonGroup = _interopRequireDefault(require("./src/button-group"));

var _icon = _interopRequireDefault(require("./src/icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./src/button":"iM1m","./src/button-group":"h0wh","./src/icon":"wFXB"}]},{},["Focm"], null)
//# sourceMappingURL=/index.js.map