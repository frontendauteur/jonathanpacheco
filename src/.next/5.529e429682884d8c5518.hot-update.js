webpackHotUpdate(5,{

/***/ "./pages/album.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("../node_modules/@babel/runtime/regenerator/index.js"));

var _react = _interopRequireWildcard(__webpack_require__("../node_modules/react/index.js"));

var _link = _interopRequireDefault(__webpack_require__("../node_modules/next/link.js"));

var _Layout = _interopRequireDefault(__webpack_require__("./components/Layout.js"));

var _isomorphicUnfetch = _interopRequireDefault(__webpack_require__("../node_modules/isomorphic-unfetch/browser.js"));

var _jsxFileName = "C:\\Users\\jonat\\Sites\\Personal\\star-wars-rpg-music\\src\\pages\\album.js";


function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

var Album = function Album(props) {
  return _react.default.createElement(_Layout.default, {
    title: props.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react.default.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, props.title), _react.default.createElement(_link.default, {
    as: "/admin/album/".concat(props.id),
    href: "/admin/album?id=".concat(props.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react.default.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Edit")), !!props.tracks.length && _react.default.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, props.tracks.map(function (track, index) {
    return _react.default.createElement("li", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    }, _react.default.createElement(_link.default, {
      as: "/track/".concat(track.id),
      href: "/track?id=".concat(track.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    }, _react.default.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    }, track.title)));
  })));
};

exports.default = Album;

Album.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(context) {
    var id, res, data;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id;
            _context.next = 3;
            return (0, _isomorphicUnfetch.default)("http://localhost:3000/api/album/".concat(id));

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            data = _context.sent;
            return _context.abrupt("return", data.album);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();
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
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.529e429682884d8c5518.hot-update.js.map