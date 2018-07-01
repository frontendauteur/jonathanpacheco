webpackHotUpdate(5,{

/***/ "../node_modules/webpack/buildin/harmony-module.js":
false,

/***/ "./pages/album.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _react.Component;
  }
});

var _react = _interopRequireWildcard(__webpack_require__("../node_modules/react/index.js"));

var _link = _interopRequireDefault(__webpack_require__("../node_modules/next/link.js"));

var _Layout = _interopRequireDefault(__webpack_require__("./components/Layout.js"));

var _isomorphicUnfetch = _interopRequireDefault(__webpack_require__("../node_modules/isomorphic-unfetch/browser.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/album")
  

/***/ })

})
//# sourceMappingURL=5.799f6216b6be577fa033.hot-update.js.map