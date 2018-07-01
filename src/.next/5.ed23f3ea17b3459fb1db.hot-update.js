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

var _react = _interopRequireWildcard(__webpack_require__("../node_modules/react/index.js"));

var _link = _interopRequireDefault(__webpack_require__("../node_modules/next/link.js"));

var _Layout = _interopRequireDefault(__webpack_require__("./components/Layout.js"));

var _isomorphicUnfetch = _interopRequireDefault(__webpack_require__("../node_modules/isomorphic-unfetch/browser.js"));

var _jsxFileName = "C:\\Users\\jonat\\Sites\\Personal\\star-wars-rpg-music\\src\\pages\\album.js";


function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = function _default() {
  return _react.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "b");
}; // const Album = (props) => (
//   <Layout title={props.title}>
//     <h1>{props.title}</h1>
//     <Link as={`/admin/album/${props.id}`} href={`/admin/album?id=${props.id}`}>
//       <a>Edit</a>
//     </Link>
//     {!!props.tracks.length && (
//       <ul>
//         {props.tracks.map((track, index) => {
//           return (
//             <li key={index}>
//               <Link as={`/track/${track.id}`} href={`/track?id=${track.id}`}>
//                 <a>{track.title}</a>
//               </Link>
//             </li>
//           )
//         })}
//       </ul>
//     )}
//   </Layout>
// )
// Album.getInitialProps = async (context) => {
//   const { id } = context.query
//   const res = await fetch(`http://localhost:3000/api/album/${id}`)
//   const data = await res.json()
//   return data.album
// }
// export { Album as default }


exports.default = _default;
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
//# sourceMappingURL=5.ed23f3ea17b3459fb1db.hot-update.js.map