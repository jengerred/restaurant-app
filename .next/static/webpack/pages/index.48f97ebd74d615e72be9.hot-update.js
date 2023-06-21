webpackHotUpdate_N_E("pages/index",{

/***/ "./components/context.js":
/*!*******************************!*\
  !*** ./components/context.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* /context/AppContext.js */\n // create auth context with default value\n// set backup default for isAuthenticated if none is provided in Provider\n\nvar AppContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({\n  isAuthenticated: true,\n  cart: {\n    items: [],\n    total: 0\n  },\n  addItem: function addItem() {},\n  removeItem: function removeItem() {},\n  user: false,\n  setUser: function setUser() {}\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppContext); // /* /context/AppContext.js */\n// import React from \"react\";\n// // create auth context with default value\n// // set backup default for isAuthenticated if none is provided in Provider\n// const AppContext = React.createContext({\n//   isAuthenticated: true,\n//   cart: { items: [], total: 0 },\n//   addItem: () => {},\n//   removeItem: () => {},\n//   user: false,\n//   setUser: () => {},\n// });\n// export default AppContext;\n\n/*\nimport { createContext, useState } from \"react\";\n\nexport const AppContext = createContext({});\n\nexport const AppProvider = ({ children }) => {\n  const [globalData, setGlobalData] = useState({\n    isAuthenticated: false,\n    setIsAuthenticated: () => {},\n    cart: {\n      items: [],\n      total: 0,\n    },\n    user: false,\n    setUser: () => {},\n    addItems: () => {},\n    removeItems: () => {},\n  });\n\n  globalData.setIsAuthenticated = (boolVal) => {\n    setGlobalData((prev) => ({ ...prev, isAuthenticated: boolVal }));\n  };\n\n  globalData.setUser = (userData) => {\n    setGlobalData((prev) => ({ ...prev, user: userData }));\n  };\n\n  globalData.addItems = (item) => {\n    let { items } = globalData.cart;\n    let foundItem = true;\n\n    if (items.length > 0) {\n      foundItem = items.find(\n        (i) => i.attributes.dishId === item.attributes.dishId\n      );\n\n      if (!foundItem) foundItem = false;\n    } else {\n      foundItem = false;\n    }\n\n    if (!foundItem) {\n      let temp = JSON.parse(JSON.stringify(item));\n      temp.quantity = 1;\n\n      var newCart = {\n        items: [...globalData.cart.items, temp],\n        total: globalData.cart.total + item.attributes.price,\n      };\n\n      setGlobalData((prev) => ({ ...prev, cart: newCart }));\n    } else {\n      newCart = {\n        items: items.map((item) => {\n          if (item.attributes.dishId === foundItem.attributes.dishId) {\n            return Object.assign({}, item, { quantity: item.quantity + 1 });\n          } else {\n            return item;\n          }\n        }),\n        total: globalData.cart.total + item.attributes.price,\n      };\n\n      setGlobalData((prev) => ({ ...prev, cart: newCart }));\n    }\n  };\n\n  globalData.removeItems = (item) => {\n    let { items } = globalData.cart;\n\n    const foundItem = items.find(\n      (i) => i.attributes.dishId === item.attributes.dishId\n    );\n\n    console.log(foundItem);\n\n    if (foundItem.quantity > 1) {\n      var newCart = {\n        items: items.map((item) => {\n          if (item.attributes.dishId === foundItem.attributes.dishId) {\n            return Object.assign({}, item, { quantity: item.quantity - 1 });\n          } else {\n            return item;\n          }\n        }),\n        total: globalData.cart.total - item.attributes.price,\n      };\n    } else {\n      const index = items.findIndex(\n        (i) => i.attributes.dishId === foundItem.attributes.dishId\n      );\n\n      items.splice(index, 1);\n\n      var newCart = {\n        items: items,\n        total: globalData.cart.total - item.attributes.price,\n      };\n    }\n\n    setGlobalData((prev) => ({ ...prev, cart: newCart }));\n  };\n\n  return (\n    <AppContext.Provider value={{ globalData, setGlobalData }}>\n      {children}\n    </AppContext.Provider>\n  );\n};\n\nexport default AppContext;\n\n*/\n\n/* /context/AppContext.js */\n\n/*\nimport React from \"react\";\n// create auth context with default value\n\n// set backup default for isAuthenticated if none is provided in Provider\nconst AppContext = React.createContext(\n    {isAuthenticated:true, \n        cart: {items:[], \n        total:0},\n        addItem:()=>{},\n        removeItem:()=>{},\n        user:false, \n        setUser:()=>{}\n    });\nexport default AppContext;\n*/\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZXh0LmpzPzI0MzkiXSwibmFtZXMiOlsiQXBwQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsImlzQXV0aGVudGljYXRlZCIsImNhcnQiLCJpdGVtcyIsInRvdGFsIiwiYWRkSXRlbSIsInJlbW92ZUl0ZW0iLCJ1c2VyIiwic2V0VXNlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7Q0FHQTtBQUVBOztBQUNBLElBQU1BLFVBQVUsZ0JBQUdDLDRDQUFLLENBQUNDLGFBQU4sQ0FDZjtBQUFDQyxpQkFBZSxFQUFDLElBQWpCO0FBQ0lDLE1BQUksRUFBRTtBQUFDQyxTQUFLLEVBQUMsRUFBUDtBQUNOQyxTQUFLLEVBQUM7QUFEQSxHQURWO0FBR0lDLFNBQU8sRUFBQyxtQkFBSSxDQUFFLENBSGxCO0FBSUlDLFlBQVUsRUFBQyxzQkFBSSxDQUFFLENBSnJCO0FBS0lDLE1BQUksRUFBQyxLQUxUO0FBTUlDLFNBQU8sRUFBQyxtQkFBSSxDQUFFO0FBTmxCLENBRGUsQ0FBbkI7QUFVZVYseUVBQWYsRSxDQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAvY29udGV4dC9BcHBDb250ZXh0LmpzICovXG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGNyZWF0ZSBhdXRoIGNvbnRleHQgd2l0aCBkZWZhdWx0IHZhbHVlXG5cbi8vIHNldCBiYWNrdXAgZGVmYXVsdCBmb3IgaXNBdXRoZW50aWNhdGVkIGlmIG5vbmUgaXMgcHJvdmlkZWQgaW4gUHJvdmlkZXJcbmNvbnN0IEFwcENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KFxuICAgIHtpc0F1dGhlbnRpY2F0ZWQ6dHJ1ZSwgXG4gICAgICAgIGNhcnQ6IHtpdGVtczpbXSwgXG4gICAgICAgIHRvdGFsOjB9LFxuICAgICAgICBhZGRJdGVtOigpPT57fSxcbiAgICAgICAgcmVtb3ZlSXRlbTooKT0+e30sXG4gICAgICAgIHVzZXI6ZmFsc2UsIFxuICAgICAgICBzZXRVc2VyOigpPT57fVxuICAgIH0pO1xuICAgXG5leHBvcnQgZGVmYXVsdCBBcHBDb250ZXh0O1xuXG4vLyAvKiAvY29udGV4dC9BcHBDb250ZXh0LmpzICovXG5cbi8vIGltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIC8vIGNyZWF0ZSBhdXRoIGNvbnRleHQgd2l0aCBkZWZhdWx0IHZhbHVlXG5cbi8vIC8vIHNldCBiYWNrdXAgZGVmYXVsdCBmb3IgaXNBdXRoZW50aWNhdGVkIGlmIG5vbmUgaXMgcHJvdmlkZWQgaW4gUHJvdmlkZXJcbi8vIGNvbnN0IEFwcENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHtcbi8vICAgaXNBdXRoZW50aWNhdGVkOiB0cnVlLFxuLy8gICBjYXJ0OiB7IGl0ZW1zOiBbXSwgdG90YWw6IDAgfSxcbi8vICAgYWRkSXRlbTogKCkgPT4ge30sXG4vLyAgIHJlbW92ZUl0ZW06ICgpID0+IHt9LFxuLy8gICB1c2VyOiBmYWxzZSxcbi8vICAgc2V0VXNlcjogKCkgPT4ge30sXG4vLyB9KTtcbi8vIGV4cG9ydCBkZWZhdWx0IEFwcENvbnRleHQ7XG4vKlxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcblxuZXhwb3J0IGNvbnN0IEFwcFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbZ2xvYmFsRGF0YSwgc2V0R2xvYmFsRGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgaXNBdXRoZW50aWNhdGVkOiBmYWxzZSxcbiAgICBzZXRJc0F1dGhlbnRpY2F0ZWQ6ICgpID0+IHt9LFxuICAgIGNhcnQ6IHtcbiAgICAgIGl0ZW1zOiBbXSxcbiAgICAgIHRvdGFsOiAwLFxuICAgIH0sXG4gICAgdXNlcjogZmFsc2UsXG4gICAgc2V0VXNlcjogKCkgPT4ge30sXG4gICAgYWRkSXRlbXM6ICgpID0+IHt9LFxuICAgIHJlbW92ZUl0ZW1zOiAoKSA9PiB7fSxcbiAgfSk7XG5cbiAgZ2xvYmFsRGF0YS5zZXRJc0F1dGhlbnRpY2F0ZWQgPSAoYm9vbFZhbCkgPT4ge1xuICAgIHNldEdsb2JhbERhdGEoKHByZXYpID0+ICh7IC4uLnByZXYsIGlzQXV0aGVudGljYXRlZDogYm9vbFZhbCB9KSk7XG4gIH07XG5cbiAgZ2xvYmFsRGF0YS5zZXRVc2VyID0gKHVzZXJEYXRhKSA9PiB7XG4gICAgc2V0R2xvYmFsRGF0YSgocHJldikgPT4gKHsgLi4ucHJldiwgdXNlcjogdXNlckRhdGEgfSkpO1xuICB9O1xuXG4gIGdsb2JhbERhdGEuYWRkSXRlbXMgPSAoaXRlbSkgPT4ge1xuICAgIGxldCB7IGl0ZW1zIH0gPSBnbG9iYWxEYXRhLmNhcnQ7XG4gICAgbGV0IGZvdW5kSXRlbSA9IHRydWU7XG5cbiAgICBpZiAoaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgZm91bmRJdGVtID0gaXRlbXMuZmluZChcbiAgICAgICAgKGkpID0+IGkuYXR0cmlidXRlcy5kaXNoSWQgPT09IGl0ZW0uYXR0cmlidXRlcy5kaXNoSWRcbiAgICAgICk7XG5cbiAgICAgIGlmICghZm91bmRJdGVtKSBmb3VuZEl0ZW0gPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm91bmRJdGVtID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFmb3VuZEl0ZW0pIHtcbiAgICAgIGxldCB0ZW1wID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShpdGVtKSk7XG4gICAgICB0ZW1wLnF1YW50aXR5ID0gMTtcblxuICAgICAgdmFyIG5ld0NhcnQgPSB7XG4gICAgICAgIGl0ZW1zOiBbLi4uZ2xvYmFsRGF0YS5jYXJ0Lml0ZW1zLCB0ZW1wXSxcbiAgICAgICAgdG90YWw6IGdsb2JhbERhdGEuY2FydC50b3RhbCArIGl0ZW0uYXR0cmlidXRlcy5wcmljZSxcbiAgICAgIH07XG5cbiAgICAgIHNldEdsb2JhbERhdGEoKHByZXYpID0+ICh7IC4uLnByZXYsIGNhcnQ6IG5ld0NhcnQgfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdDYXJ0ID0ge1xuICAgICAgICBpdGVtczogaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0uYXR0cmlidXRlcy5kaXNoSWQgPT09IGZvdW5kSXRlbS5hdHRyaWJ1dGVzLmRpc2hJZCkge1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIHsgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHkgKyAxIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICB0b3RhbDogZ2xvYmFsRGF0YS5jYXJ0LnRvdGFsICsgaXRlbS5hdHRyaWJ1dGVzLnByaWNlLFxuICAgICAgfTtcblxuICAgICAgc2V0R2xvYmFsRGF0YSgocHJldikgPT4gKHsgLi4ucHJldiwgY2FydDogbmV3Q2FydCB9KSk7XG4gICAgfVxuICB9O1xuXG4gIGdsb2JhbERhdGEucmVtb3ZlSXRlbXMgPSAoaXRlbSkgPT4ge1xuICAgIGxldCB7IGl0ZW1zIH0gPSBnbG9iYWxEYXRhLmNhcnQ7XG5cbiAgICBjb25zdCBmb3VuZEl0ZW0gPSBpdGVtcy5maW5kKFxuICAgICAgKGkpID0+IGkuYXR0cmlidXRlcy5kaXNoSWQgPT09IGl0ZW0uYXR0cmlidXRlcy5kaXNoSWRcbiAgICApO1xuXG4gICAgY29uc29sZS5sb2coZm91bmRJdGVtKTtcblxuICAgIGlmIChmb3VuZEl0ZW0ucXVhbnRpdHkgPiAxKSB7XG4gICAgICB2YXIgbmV3Q2FydCA9IHtcbiAgICAgICAgaXRlbXM6IGl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGlmIChpdGVtLmF0dHJpYnV0ZXMuZGlzaElkID09PSBmb3VuZEl0ZW0uYXR0cmlidXRlcy5kaXNoSWQpIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpdGVtLCB7IHF1YW50aXR5OiBpdGVtLnF1YW50aXR5IC0gMSB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgdG90YWw6IGdsb2JhbERhdGEuY2FydC50b3RhbCAtIGl0ZW0uYXR0cmlidXRlcy5wcmljZSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gaXRlbXMuZmluZEluZGV4KFxuICAgICAgICAoaSkgPT4gaS5hdHRyaWJ1dGVzLmRpc2hJZCA9PT0gZm91bmRJdGVtLmF0dHJpYnV0ZXMuZGlzaElkXG4gICAgICApO1xuXG4gICAgICBpdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICB2YXIgbmV3Q2FydCA9IHtcbiAgICAgICAgaXRlbXM6IGl0ZW1zLFxuICAgICAgICB0b3RhbDogZ2xvYmFsRGF0YS5jYXJ0LnRvdGFsIC0gaXRlbS5hdHRyaWJ1dGVzLnByaWNlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBzZXRHbG9iYWxEYXRhKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBjYXJ0OiBuZXdDYXJ0IH0pKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGdsb2JhbERhdGEsIHNldEdsb2JhbERhdGEgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BcHBDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwQ29udGV4dDtcblxuKi9cblxuXG4vKiAvY29udGV4dC9BcHBDb250ZXh0LmpzICovXG4vKlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gY3JlYXRlIGF1dGggY29udGV4dCB3aXRoIGRlZmF1bHQgdmFsdWVcblxuLy8gc2V0IGJhY2t1cCBkZWZhdWx0IGZvciBpc0F1dGhlbnRpY2F0ZWQgaWYgbm9uZSBpcyBwcm92aWRlZCBpbiBQcm92aWRlclxuY29uc3QgQXBwQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoXG4gICAge2lzQXV0aGVudGljYXRlZDp0cnVlLCBcbiAgICAgICAgY2FydDoge2l0ZW1zOltdLCBcbiAgICAgICAgdG90YWw6MH0sXG4gICAgICAgIGFkZEl0ZW06KCk9Pnt9LFxuICAgICAgICByZW1vdmVJdGVtOigpPT57fSxcbiAgICAgICAgdXNlcjpmYWxzZSwgXG4gICAgICAgIHNldFVzZXI6KCk9Pnt9XG4gICAgfSk7XG5leHBvcnQgZGVmYXVsdCBBcHBDb250ZXh0O1xuKi8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/context.js\n");

/***/ })

})