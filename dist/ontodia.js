(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("whatwg-fetch"), require("react"), require("react-dom"), require("d3-color"), require("lodash"), require("rdf-ext"), require("n3"), require("webcola"), require("file-saverjs"));
	else if(typeof define === 'function' && define.amd)
		define(["whatwg-fetch", "react", "react-dom", "d3-color", "lodash", "rdf-ext", "n3", "webcola", "file-saverjs"], factory);
	else if(typeof exports === 'object')
		exports["Ontodia"] = factory(require("whatwg-fetch"), require("react"), require("react-dom"), require("d3-color"), require("lodash"), require("rdf-ext"), require("n3"), require("webcola"), require("file-saverjs"));
	else
		root["Ontodia"] = factory(root["whatwg-fetch"], root["react"], root["react-dom"], root["d3-color"], root["lodash"], root["rdf-ext"], root["n3"], root["webcola"], root["file-saverjs"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__40__, __WEBPACK_EXTERNAL_MODULE__45__, __WEBPACK_EXTERNAL_MODULE__58__, __WEBPACK_EXTERNAL_MODULE__59__, __WEBPACK_EXTERNAL_MODULE__66__, __WEBPACK_EXTERNAL_MODULE__93__, __WEBPACK_EXTERNAL_MODULE__100__, __WEBPACK_EXTERNAL_MODULE__106__, __WEBPACK_EXTERNAL_MODULE__134__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
__webpack_require__(2);
__webpack_require__(40);
__webpack_require__(41);
__webpack_require__(42);
tslib_1.__exportStar(__webpack_require__(43), exports);
tslib_1.__exportStar(__webpack_require__(47), exports);
tslib_1.__exportStar(__webpack_require__(90), exports);
tslib_1.__exportStar(__webpack_require__(91), exports);
tslib_1.__exportStar(__webpack_require__(96), exports);
tslib_1.__exportStar(__webpack_require__(101), exports);
tslib_1.__exportStar(__webpack_require__(98), exports);
tslib_1.__exportStar(__webpack_require__(103), exports);
tslib_1.__exportStar(__webpack_require__(107), exports);
var schema_1 = __webpack_require__(53);
exports.DIAGRAM_CONTEXT_URL_V1 = schema_1.DIAGRAM_CONTEXT_URL_V1;
var commands_1 = __webpack_require__(63);
exports.RestoreGeometry = commands_1.RestoreGeometry;
exports.setElementExpanded = commands_1.setElementExpanded;
exports.setElementData = commands_1.setElementData;
exports.setLinkData = commands_1.setLinkData;
var elements_1 = __webpack_require__(52);
exports.Element = elements_1.Element;
exports.Link = elements_1.Link;
exports.LinkVertex = elements_1.LinkVertex;
exports.LinkDirection = elements_1.LinkDirection;
var embeddedLayer_1 = __webpack_require__(50);
exports.EmbeddedLayer = embeddedLayer_1.EmbeddedLayer;
tslib_1.__exportStar(__webpack_require__(56), exports);
tslib_1.__exportStar(__webpack_require__(64), exports);
var model_1 = __webpack_require__(108);
exports.DiagramModel = model_1.DiagramModel;
tslib_1.__exportStar(__webpack_require__(65), exports);
var paperArea_1 = __webpack_require__(82);
exports.getContentFittingBox = paperArea_1.getContentFittingBox;
tslib_1.__exportStar(__webpack_require__(110), exports);
var authoredEntity_1 = __webpack_require__(86);
exports.AuthoredEntity = authoredEntity_1.AuthoredEntity;
tslib_1.__exportStar(__webpack_require__(88), exports);
var editorController_1 = __webpack_require__(112);
exports.EditorController = editorController_1.EditorController;
var validation_1 = __webpack_require__(131);
exports.ValidationState = validation_1.ValidationState;
var serializedDiagram_1 = __webpack_require__(104);
exports.convertToSerializedDiagram = serializedDiagram_1.convertToSerializedDiagram;
exports.makeSerializedDiagram = serializedDiagram_1.makeSerializedDiagram;
exports.makeLayoutData = serializedDiagram_1.makeLayoutData;
var layout_1 = __webpack_require__(105);
exports.calculateLayout = layout_1.calculateLayout;
exports.removeOverlaps = layout_1.removeOverlaps;
exports.applyLayout = layout_1.applyLayout;
exports.forceLayout = layout_1.forceLayout;
var async_1 = __webpack_require__(60);
exports.Cancellation = async_1.Cancellation;
tslib_1.__exportStar(__webpack_require__(54), exports);
var toolbar_1 = __webpack_require__(132);
exports.DefaultToolbar = toolbar_1.DefaultToolbar;
var workspace_1 = __webpack_require__(133);
exports.Workspace = workspace_1.Workspace;
exports.renderTo = workspace_1.renderTo;
var workspaceContext_1 = __webpack_require__(87);
exports.WorkspaceEventKey = workspaceContext_1.WorkspaceEventKey;
var draggableHandle_1 = __webpack_require__(114);
exports.DraggableHandle = draggableHandle_1.DraggableHandle;
tslib_1.__exportStar(__webpack_require__(146), exports);
var InternalApi = __webpack_require__(150);
exports.InternalApi = InternalApi;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(3);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(38)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(4);
exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, ".ontodia-spinner__arrow {\n  animation-name: ontodia-spinner-rotation;\n  animation-duration: 1.5s;\n  animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n  animation-iteration-count: infinite; }\n\n.ontodia-spinner[data-error='true'] .ontodia-spinner__arrow {\n  animation-iteration-count: 1; }\n\n@keyframes ontodia-spinner-rotation {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n.clearfix:before, .clearfix:after {\n  display: table;\n  content: \"\"; }\n\n.clearfix:after {\n  clear: both; }\n\n.ontodia-label {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: 700; }\n\n.ontodia-btn {\n  display: inline-block;\n  padding: 6px 12px;\n  margin-bottom: 0;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  text-transform: none;\n  transition: background-color 0.3s; }\n  .ontodia-btn[disabled] {\n    cursor: not-allowed;\n    opacity: .65; }\n\n.ontodia-btn-default {\n  background-color: #fff;\n  border-color: #ccc;\n  color: #333; }\n  .ontodia-btn-default:hover {\n    background-color: #e0e0e0; }\n  .ontodia-btn-default.active {\n    background-color: #e0e0e0;\n    border-color: #dbdbdb; }\n  .ontodia-btn-default.active:hover {\n    background-color: #d4d4d4;\n    border-color: #8c8c8c; }\n  .ontodia-btn-default[disabled], .ontodia-btn-default[disabled]:hover, .ontodia-btn-default[disabled].active, .ontodia-btn-default[disabled].active:hover {\n    background-color: #e0e0e0; }\n\n.ontodia-btn-primary {\n  color: white;\n  background-color: #337ab7;\n  border-color: #245580; }\n  .ontodia-btn-primary:hover, .ontodia-btn-primary:focus, .ontodia-btn-primary:active {\n    background-color: #265a88; }\n  .ontodia-btn-primary:hover, .ontodia-btn-primary:focus {\n    border-color: #204d74; }\n  .ontodia-btn-primary.active {\n    border-color: #245580; }\n  .ontodia-btn-primary[disabled], .ontodia-btn-primary[disabled]:hover, .ontodia-btn-primary[disabled]:focus, .ontodia-btn-primary[disabled]:active, .ontodia-btn-primary[disabled].active {\n    background-color: #265a88; }\n\n.ontodia-btn-success {\n  background-color: #5cb85c;\n  border-color: #5cb85c;\n  color: #fff;\n  transition: 0.3s; }\n  .ontodia-btn-success:hover {\n    background: #47a447; }\n\n.ontodia-btn-danger {\n  background-color: #c9302c;\n  border-color: #c9302c;\n  color: #fff;\n  transition: 0.3s; }\n  .ontodia-btn-danger:hover {\n    background: #a82825; }\n\n.ontodia-btn-group {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle; }\n  .ontodia-btn-group > .ontodia-btn, .ontodia-btn-group > .ontodia-btn-group {\n    position: relative;\n    float: left; }\n  .ontodia-btn-group > .ontodia-btn:hover,\n  .ontodia-btn-group > .ontodia-btn:focus,\n  .ontodia-btn-group > .ontodia-btn.active,\n  .ontodia-btn-group > .ontodia-btn.active:hover {\n    z-index: 2; }\n  .ontodia-btn-group .ontodia-btn + .ontodia-btn,\n  .ontodia-btn-group .ontodia-btn + .ontodia-btn-group,\n  .ontodia-btn-group .ontodia-btn-group + .ontodia-btn,\n  .ontodia-btn-group .ontodia-btn-group + .ontodia-btn-group {\n    margin-left: -1px; }\n  .ontodia-btn-group > .ontodia-btn:first-child {\n    margin-left: 0; }\n  .ontodia-btn-group-sm > .ontodia-btn {\n    font-size: 12px;\n    line-height: 1.5;\n    padding: 5px 10px; }\n  .ontodia-btn-group-xs > .ontodia-btn {\n    font-size: 12px;\n    line-height: 1.5;\n    padding: 1px 5px; }\n\n.ontodia-form-control {\n  display: block;\n  width: 100%;\n  height: 34px;\n  margin: 0;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n  background: #fff;\n  border: 1px solid #ccc;\n  transition: border-color ease-in-out .15s; }\n  .ontodia-form-control:focus {\n    border-color: #66afe9;\n    outline: 0; }\n  .ontodia-form-control:disabled {\n    background-color: #eee;\n    cursor: not-allowed;\n    opacity: 0.6; }\n\n.ontodia-input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate; }\n  .ontodia-input-group .ontodia-form-control {\n    display: table-cell;\n    position: relative;\n    z-index: 2;\n    float: left;\n    width: 100%;\n    margin-bottom: 0; }\n  .ontodia-input-group .ontodia-form-control:first-child {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0; }\n\n.ontodia-input-group-btn {\n  display: table-cell;\n  width: 1%;\n  vertical-align: middle;\n  position: relative;\n  font-size: 0;\n  white-space: nowrap; }\n  .ontodia-input-group-btn:last-child > .ontodia-btn {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    z-index: 2;\n    margin-left: -1px; }\n\n.ontodia-list-group {\n  margin: 0;\n  padding: 0; }\n\n.ontodia-list-group-item:last-child {\n  margin-bottom: 0; }\n\n.ontodia-list-group-item {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ddd; }\n\n.ontodia-badge {\n  display: inline-block;\n  min-width: 10px;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1;\n  color: white;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  background-color: #777777;\n  padding: 3px 7px;\n  border-radius: 10px; }\n\n.ontodia-overlayed-element {\n  cursor: move;\n  outline: none; }\n\n.ontodia-overlayed-element,\n.ontodia-exported-element {\n  box-sizing: border-box;\n  color: black;\n  font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  font-size: 14px;\n  line-height: 1.42857143; }\n  .ontodia-overlayed-element img,\n  .ontodia-exported-element img {\n    vertical-align: middle; }\n\n.ontodia-exported-element *, .ontodia-exported-element *:before, .ontodia-exported-element *:after {\n  box-sizing: inherit; }\n\n.ontodia-overlayed-element--blurred {\n  filter: grayscale(100%);\n  opacity: 0.5; }\n\n.ontodia-link__wrap {\n  stroke-width: 12px;\n  stroke-linejoin: round;\n  stroke-linecap: round;\n  stroke: transparent;\n  fill: none; }\n\n.ontodia-link:hover .ontodia-link__wrap {\n  stroke: rgba(140, 140, 140, 0.44); }\n\n.ontodia-link__vertex {\n  cursor: all-scroll; }\n\n.ontodia-link:not(:hover) .ontodia-link__vertex {\n  fill: transparent; }\n\n.ontodia-link__vertex-tools {\n  opacity: 0;\n  cursor: pointer; }\n  .ontodia-link__vertex-tools > circle {\n    fill: gray; }\n  .ontodia-link__vertex-tools > path {\n    stroke: white; }\n  .ontodia-link__vertex-tools:hover > circle {\n    fill: black; }\n\n.ontodia-link:hover .ontodia-link__vertex-tools {\n  opacity: 0.8; }\n\n.ontodia-link--blurred {\n  opacity: 0.5; }\n\n.ontodia-paper-area {\n  flex: auto;\n  width: 0;\n  display: flex;\n  position: relative;\n  cursor: default;\n  background: #fff; }\n  .ontodia-paper-area__area {\n    flex: auto;\n    overflow: hidden; }\n  .ontodia-paper-area__widgets {\n    position: absolute;\n    left: 0;\n    top: 0; }\n  .ontodia-paper-area__watermark {\n    background-size: cover;\n    width: 8%;\n    max-width: 130px;\n    min-width: 50px;\n    position: absolute;\n    top: 15px;\n    right: 25px;\n    cursor: pointer;\n    opacity: 0.3;\n    transition: opacity 0.3s; }\n    .ontodia-paper-area__watermark:hover {\n      opacity: 0.5; }\n  .ontodia-paper-area--hide-scrollbars {\n    overflow: hidden; }\n\n.ontodia-paper {\n  position: relative; }\n\n.ontodia-exported-watermark {\n  opacity: 0.3;\n  transition: opacity 0.3s; }\n\n.ontodia-paper-area--animated .ontodia-overlayed-element {\n  transition: transform 0.5s ease-in-out; }\n\n.ontodia-paper-area--animated .ontodia-link-layer, .ontodia-paper-area--animated .ontodia-paper-area__widgets {\n  transition: none;\n  opacity: 0; }\n\n.ontodia-link-layer, .ontodia-paper-area__widgets {\n  transition: opacity 0.5s ease-in-out; }\n\n.ontodia-loading-widget {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.9);\n  z-index: 10; }\n\n.ontodia-authoring-state__item-error {\n  align-self: flex-end;\n  margin: 0px 5px;\n  display: flex;\n  align-items: center;\n  cursor: help; }\n\n.ontodia-authoring-state__item-error-icon {\n  background: url(" + escape(__webpack_require__(6)) + ");\n  height: 15px;\n  width: 17px; }\n\n.ontodia-authoring-state__state-label {\n  font-weight: bold;\n  margin-right: 5px; }\n\n.ontodia-authoring-state__state-cancel {\n  color: #3f87a6;\n  cursor: pointer; }\n  .ontodia-authoring-state__state-cancel:hover {\n    text-decoration: underline; }\n\n.ontodia-authoring-state__state-indicator {\n  position: absolute; }\n\n.ontodia-authoring-state__state-indicator-container {\n  position: relative; }\n\n.ontodia-authoring-state__state-indicator-body {\n  position: absolute;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.7);\n  border-radius: 5px; }\n\n.ontodia-authoring-tools {\n  margin: 10px; }\n  .ontodia-authoring-tools__create-entity {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    white-space: normal; }\n  .ontodia-authoring-tools__type-label {\n    color: black;\n    border: black 1px dashed;\n    background: #ffd221;\n    padding: 0 .5em 0 .5em;\n    word-wrap: break-word; }\n\n.ontodia-class-tree {\n  flex: auto;\n  display: flex;\n  flex-direction: column; }\n  .ontodia-class-tree__filter {\n    flex-shrink: 0;\n    margin: 10px 0 10px 0; }\n  .ontodia-class-tree__filter-group {\n    margin-left: 10px;\n    margin-right: 10px; }\n  .ontodia-class-tree__only-creatable {\n    display: block;\n    margin-top: 5px; }\n  .ontodia-class-tree__tree {\n    border-top: 1px solid #dddddd; }\n  .ontodia-class-tree__spinner {\n    align-self: center;\n    /* center vertically in flexbox */\n    margin: auto; }\n\n.ontodia-class-leaf {\n  margin: 1px 0; }\n  .ontodia-class-leaf__row {\n    display: flex;\n    align-items: center;\n    white-space: nowrap;\n    user-select: none; }\n    .ontodia-class-leaf__row > * {\n      flex-shrink: 0; }\n  .ontodia-class-leaf__body {\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    font-size: 15px;\n    padding: 1px;\n    border: 1px solid;\n    border-color: transparent; }\n    .ontodia-class-leaf__body:hover {\n      background: #dcebff91;\n      border-color: #ccefff;\n      cursor: pointer; }\n    .ontodia-class-leaf__body--selected {\n      background-color: #beebff;\n      border-color: #8edcff; }\n  .ontodia-class-leaf__icon-container {\n    height: 20px; }\n  .ontodia-class-leaf__icon {\n    display: block;\n    height: 100%; }\n  .ontodia-class-leaf__label {\n    margin-left: 5px;\n    color: black; }\n  .ontodia-class-leaf__highlighted-term {\n    font-weight: bold; }\n  .ontodia-class-leaf__count {\n    margin-left: 5px; }\n  .ontodia-class-leaf__children {\n    margin-left: 20px; }\n  .ontodia-class-leaf__no-toggle {\n    display: inline-block;\n    width: 22px;\n    height: 22px; }\n  .ontodia-class-leaf__toggle {\n    display: inline-block;\n    width: 12px;\n    height: 12px;\n    margin: 5px; }\n    .ontodia-class-leaf__toggle:hover:not(:empty) {\n      background: #dcebff91;\n      cursor: pointer; }\n  .ontodia-class-leaf__toggle-icon {\n    display: block;\n    height: 100%; }\n  .ontodia-class-leaf__create {\n    margin-left: 5px; }\n    .ontodia-class-leaf__create > button {\n      cursor: move; }\n\n.ontodia-connections-menu {\n  height: 100%;\n  display: flex;\n  flex-direction: column; }\n  .ontodia-connections-menu__sort-switch {\n    display: none; }\n  .ontodia-connections-menu__sort-switch:checked + .ontodia-connections-menu__sort-switch-label {\n    color: #337ab7;\n    opacity: 1; }\n  .ontodia-connections-menu__sort-switch-label {\n    cursor: pointer;\n    display: block;\n    margin: 0;\n    opacity: 0.4;\n    text-align: center; }\n    .ontodia-connections-menu__sort-switch-label:hover {\n      opacity: 1; }\n  .ontodia-connections-menu__search-line-input {\n    flex: 1 1 100%; }\n\n.ontodia-connections-menu_bread-crumbs {\n  padding: 10px;\n  padding-bottom: 0px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 27px;\n  min-height: 27px;\n  flex-grow: 0; }\n\n.ontodia-connections-menu__title-label {\n  position: absolute;\n  top: -11px;\n  left: 10px;\n  background: white;\n  padding-left: 3px;\n  padding-right: 3px;\n  border-radius: 6px; }\n\n.ontodia-connections-menu_search-line {\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  flex: 0 0 auto; }\n\n.ontodia-connections-menu_search-line-sort-switches {\n  flex: 0 0 20px;\n  margin-left: 10px; }\n\n.ontodia-connections-menu_links-list {\n  padding: 5px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border-top: 1px solid #dbdbdb;\n  flex-grow: 1;\n  margin: 0; }\n\n.ocm_links-list-empty {\n  display: flex;\n  align-items: center; }\n\n.ontodia-connections-menu_links-list__empty {\n  width: 100%;\n  position: relative;\n  font-size: x-large;\n  color: #cbcbcb;\n  text-align: center; }\n\n.ontodia-connections-menu__loading,\n.ontodia-connections-menu__error {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  font-size: x-large;\n  display: flex;\n  color: #cbcbcb;\n  align-items: center;\n  justify-content: center; }\n\n.ontodia-connections-menu__loading-objects {\n  border: 1px solid gray;\n  flex-grow: 1;\n  box-shadow: inset 0px 0px 23px -8px gray;\n  background-color: whitesmoke;\n  position: relative;\n  font-size: x-large;\n  display: flex;\n  color: #cbcbcb;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 5px; }\n\n.ontodia-connections-menu__move-to-filter {\n  display: flex;\n  padding: 5px 10px;\n  user-select: none;\n  cursor: pointer; }\n  .ontodia-connections-menu__move-to-filter:hover {\n    background-color: #e6e6e6; }\n\n.link-in-popup-menu {\n  display: flex;\n  overflow: hidden;\n  padding: 0 5px 0 0;\n  align-items: center;\n  margin-bottom: 4px;\n  background: #f7f7f7; }\n  .link-in-popup-menu__link-title {\n    flex-grow: 1;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    margin: 5px 0px 5px 5px; }\n  .link-in-popup-menu__count {\n    flex-shrink: 0;\n    margin-left: 10px; }\n  .link-in-popup-menu__navigate-button {\n    float: right;\n    background-image: url(" + escape(__webpack_require__(7)) + ");\n    width: 16px;\n    height: 16px;\n    opacity: 0.5;\n    margin-left: 10px;\n    min-width: 16px;\n    background-size: cover; }\n    .link-in-popup-menu__navigate-button:hover {\n      opacity: 1; }\n  .link-in-popup-menu__filter-button {\n    background-image: url(" + escape(__webpack_require__(8)) + ");\n    background-size: 20px 20px;\n    width: 20px;\n    height: 20px;\n    opacity: 0.4;\n    margin-left: 10px; }\n    .link-in-popup-menu__filter-button:hover {\n      opacity: 1; }\n  .link-in-popup-menu:hover {\n    background-color: #e2e2e2; }\n\n.link-in-popup-menu_direction {\n  background: rgba(219, 219, 219, 0.35);\n  min-height: 30px;\n  padding: 5px 0px 5px 10px;\n  display: flex;\n  align-items: center; }\n\n.link-in-popup-menu_direction__in-direction {\n  background: url(" + escape(__webpack_require__(9)) + ") 0 0 no-repeat;\n  flex-shrink: 0;\n  width: 22px;\n  height: 15px;\n  margin: 0 14px 0 0;\n  background-size: contain;\n  opacity: 0.5; }\n\n.link-in-popup-menu_direction__out-direction {\n  background: url(" + escape(__webpack_require__(10)) + ") 0 0 no-repeat;\n  flex-shrink: 0;\n  width: 22px;\n  height: 15px;\n  margin: 0 8px 0 6px;\n  background-size: contain;\n  opacity: 0.5; }\n\n.ontodia-connections-menu_links-list__loading {\n  text-align: center;\n  width: 100%;\n  position: relative;\n  font-size: x-large;\n  color: #cbcbcb; }\n\n.ontodia-connections-menu_links-list__hr {\n  margin-top: 10px;\n  margin-bottom: 10px; }\n\n.ontodia-connections-menu_objects-panel {\n  flex-grow: 1;\n  padding: 10px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding-top: 0px; }\n\n.ontodia-connections-menu_objects-panel__select-all {\n  white-space: nowrap;\n  margin-bottom: 5px;\n  display: flex; }\n  .ontodia-connections-menu_objects-panel__select-all input {\n    margin-right: 5px; }\n    .ontodia-connections-menu_objects-panel__select-all input:disabled {\n      opacity: 0.3; }\n\n.ontodia-connections-menu_objects-panel_bottom-panel {\n  height: 25px;\n  white-space: nowrap;\n  display: flex;\n  justify-content: space-between; }\n\n.ontodia-connections-menu_objects-panel_bottom-panel__count-label {\n  height: 25px;\n  float: left;\n  padding: 0px 5px;\n  font-size: larger;\n  display: flex;\n  align-items: center;\n  max-width: 60%; }\n\n.ontodia-connections-menu_objects-panel_bottom-panel__extra-elements {\n  color: gray;\n  cursor: help; }\n\n.ontodia-btn.ontodia-connections-menu_objects-panel_bottom-panel__add-button {\n  height: 25px;\n  padding-top: 1px;\n  padding-bottom: 2px; }\n\n.ontodia-connections-menu_objects-panel_objects-list {\n  border: 1px solid gray;\n  height: 0;\n  flex-grow: 1;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  padding: 5px;\n  margin-bottom: 5px; }\n\n.ontodia-connections-menu__link {\n  color: #337ab7;\n  cursor: pointer;\n  text-decoration: none; }\n  .ontodia-connections-menu__link:hover {\n    text-decoration: underline; }\n\n.ontodia-dialog {\n  background: #fff;\n  border: 1px solid #333;\n  box-shadow: 0 4px 15px 7px rgba(51, 51, 51, 0.05);\n  position: absolute; }\n  .ontodia-dialog__caption {\n    font-weight: bold;\n    position: absolute;\n    top: -11px;\n    left: 10px;\n    background: white;\n    padding-left: 3px;\n    padding-right: 3px;\n    border-radius: 6px; }\n  .ontodia-dialog__close-button {\n    background: transparent url(" + escape(__webpack_require__(11)) + ");\n    background-size: contain;\n    border: 0 none;\n    cursor: pointer;\n    display: block;\n    outline: none;\n    padding: 0;\n    position: absolute;\n    top: -22px;\n    right: -22px;\n    height: 20px;\n    width: 20px;\n    opacity: 0.5;\n    transition: 0.3s; }\n    .ontodia-dialog__close-button:hover {\n      opacity: 1; }\n\n.ontodia-dialog__bottom-right-handle {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0 0 10px 10px;\n  border-color: transparent transparent rgba(0, 0, 0, 0.38) transparent;\n  cursor: nwse-resize; }\n  .ontodia-dialog__bottom-right-handle::before {\n    content: \"\";\n    position: absolute;\n    bottom: -10px;\n    right: 0;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 0 0 5px 5px;\n    border-color: transparent transparent rgba(0, 0, 0, 0.38) transparent; }\n  .ontodia-dialog__bottom-right-handle:hover {\n    border-color: transparent transparent rgba(0, 0, 0, 0.5) transparent; }\n\n.ontodia-dialog__bottom-handle, .ontodia-dialog__right-handle {\n  position: absolute;\n  opacity: 0;\n  background-color: black; }\n  .ontodia-dialog__bottom-handle:hover, .ontodia-dialog__right-handle:hover {\n    opacity: 0.1; }\n\n.ontodia-dialog__bottom-handle {\n  bottom: 0;\n  width: 100%;\n  height: 5px;\n  cursor: ns-resize; }\n\n.ontodia-dialog__right-handle {\n  top: 0;\n  right: 0;\n  width: 5px;\n  height: 100%;\n  cursor: ew-resize; }\n\n.ontodia-edit-form {\n  height: 100%;\n  display: flex;\n  flex-direction: column; }\n  .ontodia-edit-form__body {\n    overflow: auto;\n    padding: 10px;\n    flex: 1 1 100%;\n    display: flex;\n    flex-direction: column;\n    position: relative; }\n  .ontodia-edit-form__controls {\n    border-top: 1px solid #ccc;\n    padding: 10px;\n    text-align: right;\n    flex: 0 0 auto; }\n  .ontodia-edit-form__apply-button {\n    margin-right: 5px; }\n  .ontodia-edit-form__form-row {\n    display: block;\n    margin-bottom: 10px; }\n  .ontodia-edit-form__element-selector {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column; }\n  .ontodia-edit-form__search {\n    flex-shrink: 0;\n    position: relative; }\n  .ontodia-edit-form__search-icon {\n    opacity: 0.6;\n    position: absolute;\n    top: 50%;\n    left: 10px;\n    margin-top: -7px; }\n  .ontodia-edit-form__search-input {\n    padding-left: 33px; }\n  .ontodia-edit-form__existing-elements-list {\n    flex-grow: 1;\n    margin-top: 7px;\n    padding-right: 10px;\n    overflow-y: scroll; }\n  .ontodia-edit-form__separator {\n    margin: 7px 0;\n    overflow: hidden;\n    text-align: center; }\n  .ontodia-edit-form__separator-text {\n    color: #555;\n    display: inline-block;\n    font-size: 13px;\n    position: relative; }\n    .ontodia-edit-form__separator-text:before, .ontodia-edit-form__separator-text:after {\n      content: \"\";\n      border-top: 1px solid;\n      position: absolute;\n      top: 50%;\n      margin: 0 10px;\n      width: 500px; }\n    .ontodia-edit-form__separator-text:before {\n      left: 100%; }\n    .ontodia-edit-form__separator-text:after {\n      right: 100%; }\n  .ontodia-edit-form__progress {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0; }\n  .ontodia-edit-form__control-row {\n    position: relative;\n    padding-bottom: 18px; }\n  .ontodia-edit-form__control-error {\n    color: red;\n    position: absolute;\n    bottom: 0;\n    left: 0; }\n\n.ontodia-halo {\n  position: absolute;\n  pointer-events: none;\n  border: 1.5px dashed #d8956d;\n  border-radius: 2px;\n  box-shadow: 0 0 5px 0 #d8956d inset; }\n  .ontodia-halo__navigate {\n    position: absolute;\n    background-color: transparent;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n    border: 0 none;\n    cursor: pointer;\n    outline: none;\n    padding: 0;\n    pointer-events: auto;\n    width: 20px;\n    height: 20px;\n    opacity: 0.5;\n    transition: opacity 0.3s;\n    top: 50%;\n    margin-top: -10px;\n    right: -22px; }\n    .ontodia-halo__navigate:hover {\n      opacity: 1; }\n    .ontodia-halo__navigate[disabled] {\n      cursor: not-allowed;\n      opacity: 0.2; }\n    .ontodia-halo__navigate--open {\n      background-image: url(" + escape(__webpack_require__(12)) + "); }\n    .ontodia-halo__navigate--closed {\n      background-image: url(" + escape(__webpack_require__(13)) + "); }\n  .ontodia-halo__folow {\n    position: absolute;\n    background-color: transparent;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n    border: 0 none;\n    cursor: pointer;\n    outline: none;\n    padding: 0;\n    pointer-events: auto;\n    width: 20px;\n    height: 20px;\n    opacity: 0.5;\n    transition: opacity 0.3s;\n    top: 50%;\n    margin-top: -10px;\n    left: -22px;\n    background-image: url(" + escape(__webpack_require__(14)) + "); }\n    .ontodia-halo__folow:hover {\n      opacity: 1; }\n    .ontodia-halo__folow[disabled] {\n      cursor: not-allowed;\n      opacity: 0.2; }\n  .ontodia-halo__remove {\n    position: absolute;\n    background-color: transparent;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n    border: 0 none;\n    cursor: pointer;\n    outline: none;\n    padding: 0;\n    pointer-events: auto;\n    width: 20px;\n    height: 20px;\n    opacity: 0.5;\n    transition: opacity 0.3s;\n    top: -22px;\n    right: -22px;\n    background-image: url(" + escape(__webpack_require__(15)) + "); }\n    .ontodia-halo__remove:hover {\n      opacity: 1; }\n    .ontodia-halo__remove[disabled] {\n      cursor: not-allowed;\n      opacity: 0.2; }\n  .ontodia-halo__expand {\n    position: absolute;\n    background-color: transparent;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n    border: 0 none;\n    cursor: pointer;\n    outline: none;\n    padding: 0;\n    pointer-events: auto;\n    width: 20px;\n    height: 20px;\n    opacity: 0.5;\n    transition: opacity 0.3s;\n    bottom: -22px;\n    left: 50%;\n    margin-left: -10px; }\n    .ontodia-halo__expand:hover {\n      opacity: 1; }\n    .ontodia-halo__expand[disabled] {\n      cursor: not-allowed;\n      opacity: 0.2; }\n    .ontodia-halo__expand--open {\n      background-image: url(" + escape(__webpack_require__(16)) + "); }\n    .ontodia-halo__expand--closed {\n      background-image: url(" + escape(__webpack_require__(17)) + "); }\n  .ontodia-halo__add-to-filter {\n    position: absolute;\n    background-color: transparent;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n    border: 0 none;\n    cursor: pointer;\n    outline: none;\n    padding: 0;\n    pointer-events: auto;\n    width: 20px;\n    height: 20px;\n    opacity: 0.5;\n    transition: opacity 0.3s;\n    bottom: -22px;\n    right: -22px;\n    background-image: url(" + escape(__webpack_require__(8)) + "); }\n    .ontodia-halo__add-to-filter:hover {\n      opacity: 1; }\n    .ontodia-halo__add-to-filter[disabled] {\n      cursor: not-allowed;\n      opacity: 0.2; }\n  .ontodia-halo__revert {\n    position: absolute;\n    background-color: transparent;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n    border: 0 none;\n    cursor: pointer;\n    outline: none;\n    padding: 0;\n    pointer-events: auto;\n    width: 20px;\n    height: 20px;\n    opacity: 0.5;\n    transition: opacity 0.3s;\n    top: -22px;\n    left: 50%;\n    margin-left: -10px;\n    background-image: url(" + escape(__webpack_require__(18)) + "); }\n    .ontodia-halo__revert:hover {\n      opacity: 1; }\n    .ontodia-halo__revert[disabled] {\n      cursor: not-allowed;\n      opacity: 0.2; }\n  .ontodia-halo__establish-connection {\n    position: absolute;\n    background-color: transparent;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n    border: 0 none;\n    cursor: pointer;\n    outline: none;\n    padding: 0;\n    pointer-events: auto;\n    width: 20px;\n    height: 20px;\n    opacity: 0.5;\n    transition: opacity 0.3s;\n    bottom: -22px;\n    left: -22px;\n    background-image: url(" + escape(__webpack_require__(19)) + "); }\n    .ontodia-halo__establish-connection:hover {\n      opacity: 1; }\n    .ontodia-halo__establish-connection[disabled] {\n      cursor: not-allowed;\n      opacity: 0.2; }\n  .ontodia-halo__establish-connection-spinner {\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    bottom: -22px;\n    left: -22px; }\n\n.ontodia-halo-link__button {\n  background: transparent;\n  border: 0 none;\n  cursor: pointer;\n  padding: 0;\n  position: absolute;\n  opacity: 0.8;\n  outline: none;\n  transition: opacity 0.3s; }\n  .ontodia-halo-link__button:hover {\n    opacity: 1; }\n  .ontodia-halo-link__button[disabled] {\n    cursor: not-allowed;\n    opacity: 0.5; }\n\n.ontodia-halo-link__edit {\n  background-color: #ccc;\n  background-position: 50%;\n  background-repeat: no-repeat;\n  background-size: 60%;\n  border-radius: 10px;\n  height: 20px;\n  width: 20px;\n  background-image: url(" + escape(__webpack_require__(20)) + "); }\n\n.ontodia-halo-link__delete {\n  background-color: #ccc;\n  background-position: 50%;\n  background-repeat: no-repeat;\n  background-size: 60%;\n  border-radius: 10px;\n  height: 20px;\n  width: 20px;\n  background-image: url(" + escape(__webpack_require__(21)) + "); }\n\n.ontodia-halo-link__spinner {\n  position: absolute; }\n\n.ontodia-halo-link__edit-label-button {\n  background: transparent url(" + escape(__webpack_require__(22)) + ") no-repeat;\n  background-size: cover;\n  border: 0 none;\n  cursor: pointer;\n  padding: 0;\n  position: absolute;\n  margin-left: 5px;\n  outline: none;\n  opacity: 0.5;\n  transition: opacity 0.3s; }\n  .ontodia-halo-link__edit-label-button:hover {\n    opacity: 1; }\n\n.ontodia-instances-search {\n  flex: auto;\n  display: flex;\n  flex-direction: column; }\n  .ontodia-instances-search__criteria {\n    flex-shrink: 0;\n    margin: 10px 0 10px 0; }\n  .ontodia-instances-search__criterions {\n    padding-left: 15px;\n    margin-bottom: 10px; }\n    .ontodia-instances-search__criterions:empty {\n      margin-bottom: 0; }\n  .ontodia-instances-search__criterion {\n    display: block;\n    position: relative;\n    width: 100%; }\n  .ontodia-instances-search__criterion-class {\n    border: black 1px dashed;\n    background: #ffd221;\n    padding: 0 .5em 0 .5em;\n    word-wrap: break-word; }\n  .ontodia-instances-search__criterion-element {\n    border: black 1px dashed;\n    background: #ff835c;\n    padding: 0 .5em 0 .5em;\n    word-wrap: break-word; }\n  .ontodia-instances-search__criterion-link-type {\n    border: black 1px dashed;\n    background: #caffce;\n    padding: 0 .5em 0 .5em;\n    word-wrap: break-word; }\n  .ontodia-instances-search__link-direction {\n    height: 1em;\n    opacity: 0.5; }\n  .ontodia-instances-search__criterion-remove {\n    float: right;\n    margin: 0 10px 4px 4px; }\n  .ontodia-instances-search__text-criteria {\n    margin: 0 10px; }\n  .ontodia-instances-search__rest {\n    padding: 10px 10px 0 10px;\n    border-top: 1px solid #dddddd; }\n  .ontodia-instances-search__results {\n    padding-left: 0;\n    padding-top: 10px;\n    margin: 0 10px 0 10px;\n    outline: none; }\n  .ontodia-instances-search[data-state='finished'] .ontodia-instances-search__results:empty:before {\n    content: 'No items correspond to the specified criteria.';\n    font-style: italic; }\n  .ontodia-instances-search__rest-end {\n    margin: 5px 0 10px 0; }\n  .ontodia-instances-search__load-more {\n    width: 100%; }\n\n.link-types-toolbox {\n  flex: auto;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 0; }\n  .link-types-toolbox__heading {\n    padding: 10px; }\n  .link-types-toolbox__searching-box {\n    display: flex;\n    align-items: center; }\n  .link-types-toolbox__clearSearch {\n    margin-left: -25px;\n    -webkit-appearance: none;\n    padding: 0;\n    cursor: pointer;\n    background: 0 0;\n    border: 0; }\n  .link-types-toolbox__switch-all {\n    margin-top: 5px; }\n  .link-types-toolbox__rest {\n    border-top: 1px solid #dddddd;\n    flex: auto;\n    display: flex;\n    flex-direction: column; }\n\n.link-types-toolbox .panel-heading {\n  flex-shrink: 0;\n  -webkit-flex-shrink: 0;\n  /* safari 8 */ }\n\n.link-types-toolbox ul {\n  margin-bottom: 0; }\n\n.link-types-toolbox .links-heading {\n  margin-left: .4em; }\n\n.link-types-toolbox .links-heading span {\n  border: black 1px dashed;\n  background: #ff835c;\n  padding: 0 .5em 0 .5em;\n  word-wrap: break-word;\n  line-height: 1.3; }\n\n.link-types-toolbox__heading .link-types-toolbox-controls {\n  padding: 5px 15px;\n  font-size: 14px;\n  font-style: italic; }\n\n.link-types-toolbox__heading .link-types-toolbox-controls > span {\n  padding-left: .3em; }\n\n.ontodia-list-group .linkInToolBox {\n  padding: 0 0 0 5px;\n  word-break: break-word; }\n\n.linkInToolBox > div {\n  display: inline; }\n\n.linkInToolBox__new-tag {\n  margin-left: .5em;\n  white-space: normal;\n  word-wrap: normal;\n  border-radius: 2px;\n  padding: 0 5px;\n  background: orange; }\n\n.linkInToolBox .ontodia-badge {\n  display: none;\n  margin-left: .5em;\n  white-space: normal;\n  word-wrap: normal; }\n\n.linkInToolBox .link-title {\n  font-size: 16px;\n  color: black;\n  display: inline; }\n\n.linkInToolBox .ontodia-btn-group {\n  float: left;\n  margin-top: 2px;\n  margin-right: 6px;\n  margin-bottom: 2px; }\n\n.linkInToolBox .ontodia-btn.ontodia-btn-default {\n  border-color: #c3c3c3; }\n\n.linkInToolBox__filter-button {\n  display: none;\n  float: right;\n  background-image: url(" + escape(__webpack_require__(8)) + ");\n  background-size: 20px 20px;\n  width: 20px;\n  height: 20px;\n  margin: 3px;\n  cursor: pointer;\n  opacity: 0.4;\n  transition: opacity 200ms 0ms; }\n\n.linkInToolBox:hover .linkInToolBox__filter-button {\n  opacity: 1.0;\n  transition: opacity 200ms 0ms; }\n\n.connected-links .linkInToolBox .ontodia-badge {\n  /* show connection count badge only in \"Connected to Element\" list */\n  display: inline; }\n\n.connected-links .linkInToolBox__filter-button {\n  /* show filter button only in \"Connected to Element\" list */\n  display: inline; }\n\n.ontodia-list-element-view {\n  position: relative;\n  display: block;\n  background: #808080;\n  padding: 1px 1px 1px 10px;\n  border-radius: 2px;\n  margin: 0 0 2px 0;\n  opacity: 1.0;\n  cursor: move;\n  user-select: none; }\n  .ontodia-list-element-view--disabled {\n    opacity: 0.4;\n    cursor: default; }\n  .ontodia-list-element-view__label {\n    background: white;\n    border-radius: 0 2px 2px 0;\n    font-family: \"Andale Mono\", sans-serif;\n    font-size: 15px;\n    min-height: 1.3em;\n    padding-left: 7px;\n    padding-right: 5px;\n    overflow-wrap: break-word; }\n\n.ontodia-text-highlight {\n  font-weight: bold; }\n\n.ontodia-navigator {\n  display: block;\n  position: absolute;\n  bottom: 25px;\n  right: 25px;\n  overflow: hidden;\n  background: #fff;\n  border: 1px solid #ddd;\n  box-shadow: 0 4px 15px 7px rgba(51, 51, 51, 0.05);\n  transition: width 0.3s, height 0.3s; }\n  .ontodia .ontodia-navigator {\n    box-sizing: content-box; }\n  .ontodia-navigator--collapsed {\n    width: 26px;\n    height: 26px; }\n  .ontodia-navigator > canvas {\n    transition: opacity 0.3s; }\n  .ontodia-navigator--expanded > canvas {\n    opacity: 1; }\n  .ontodia-navigator--collapsed > canvas {\n    opacity: 0; }\n  .ontodia-navigator__toggle {\n    position: absolute;\n    background: transparent;\n    border: none;\n    outline: none;\n    padding: 4px;\n    opacity: 0.5;\n    transition: opacity 0.3s; }\n    .ontodia-navigator__toggle:hover {\n      opacity: 1; }\n  .ontodia-navigator--expanded .ontodia-navigator__toggle {\n    top: 5px;\n    left: 5px; }\n  .ontodia-navigator--collapsed .ontodia-navigator__toggle {\n    top: 0px;\n    left: 0px; }\n  .ontodia-navigator__toggle-icon {\n    width: 18px;\n    height: 18px;\n    background-size: 18px 18px;\n    background-repeat: no-repeat; }\n  .ontodia-navigator--expanded .ontodia-navigator__toggle-icon {\n    background-image: url(" + escape(__webpack_require__(23)) + "); }\n  .ontodia-navigator--collapsed .ontodia-navigator__toggle-icon {\n    background-image: url(" + escape(__webpack_require__(24)) + "); }\n\n@keyframes ontodia-progress-bar-stripes {\n  from {\n    background-position: 40px 0; }\n  to {\n    background-position: 0 0; } }\n\n.ontodia-progress-bar {\n  flex-shrink: 0;\n  -webkit-flex-shrink: 0;\n  /* safari 8 */\n  width: 100%;\n  background-color: #f5f5f5;\n  background-image: linear-gradient(to bottom, #ebebeb 0%, #f5f5f5 100%);\n  background-repeat: repeat-x;\n  overflow: hidden;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1); }\n  .ontodia-progress-bar__bar {\n    float: left;\n    height: 100%;\n    font-size: 12px;\n    line-height: 20px;\n    color: #fff;\n    text-align: center;\n    transition: width .6s ease;\n    background-color: #337ab7;\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-repeat: repeat-x;\n    background-size: 40px 40px;\n    animation: ontodia-progress-bar-stripes 2s linear infinite; }\n  .ontodia-progress-bar--loading, .ontodia-progress-bar--error {\n    /* property name | duration | delay */\n    transition: height 300ms 300ms; }\n  .ontodia-progress-bar--error {\n    background-color: #E72F2F; }\n  .ontodia-progress-bar--completed {\n    /* property name | duration | delay */\n    transition: height 200ms 0ms; }\n\n.ontodia-search-results {\n  margin: 0;\n  padding: 0;\n  outline: none; }\n\n.ontodia-accordion {\n  flex: auto;\n  display: flex;\n  height: 100%;\n  width: 100%; }\n  .ontodia-accordion--scrollable {\n    overflow: auto; }\n  .ontodia-accordion--vertical {\n    flex-direction: column; }\n  .ontodia-accordion--vertical:not(.ontodia-accordion--resizing) > .ontodia-accordion-item {\n    transition: height 0.3s ease-in-out; }\n\n.ontodia-accordion-item {\n  display: flex;\n  position: relative;\n  flex: auto; }\n  .ontodia-accordion-item--resizing > .ontodia-accordion-item__handle, .ontodia-accordion-item__handle:hover {\n    background: rgba(0, 0, 0, 0.1); }\n  .ontodia-accordion-item--vertical {\n    border-top: 1px solid lightgray; }\n    .ontodia-accordion-item--vertical:first-child {\n      border-top-width: 0; }\n  .ontodia-accordion-item--horizontal {\n    border-right: 1px solid lightgray; }\n    .ontodia-accordion-item--horizontal:last-child {\n      border-right-width: 0; }\n  .ontodia-accordion-item__handle {\n    position: absolute;\n    z-index: 2; }\n  .ontodia-accordion-item__handle-vertical {\n    height: 5px;\n    bottom: -2.5px;\n    left: 0;\n    width: 100%;\n    cursor: ns-resize; }\n  .ontodia-accordion-item__handle-horizontal {\n    height: 100%;\n    top: 0;\n    right: -2.5px;\n    width: 5px;\n    cursor: ew-resize; }\n  .ontodia-accordion-item__handle-btn {\n    background: #fff;\n    border: 2px solid #17b;\n    box-shadow: 0 0 0 1px rgba(9, 30, 66, 0.08), 0 2px 4px 1px rgba(9, 30, 66, 0.08);\n    border-radius: 10px;\n    cursor: pointer;\n    height: 20px;\n    position: absolute;\n    top: 50%;\n    margin-top: -10px;\n    width: 20px;\n    z-index: 20;\n    transition: 0.3s; }\n    .ontodia-accordion-item__handle-btn::before {\n      background-position: 0 0;\n      background-repeat: no-repeat;\n      background-size: cover;\n      content: \"\";\n      height: 8px;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      margin-top: -4px;\n      margin-left: -4px;\n      width: 8px;\n      transition: background 0.3s; }\n    .ontodia-accordion-item__handle-btn:hover {\n      background: #17b; }\n  .ontodia-accordion-item__handle-btn-left {\n    left: 100%;\n    margin-left: -10px; }\n    .ontodia-accordion-item__handle-btn-left:before {\n      background-image: url(" + escape(__webpack_require__(25)) + "); }\n    .ontodia-accordion-item__handle-btn-left:hover:before {\n      background-image: url(" + escape(__webpack_require__(26)) + "); }\n  .ontodia-accordion-item__handle-btn-right {\n    right: 100%;\n    margin-right: -10px; }\n    .ontodia-accordion-item__handle-btn-right:before {\n      background-image: url(" + escape(__webpack_require__(27)) + "); }\n    .ontodia-accordion-item__handle-btn-right:hover:before {\n      background-image: url(" + escape(__webpack_require__(28)) + "); }\n  .ontodia-accordion-item--collapsed .ontodia-accordion-item__handle-btn:before {\n    transform: rotate(180deg); }\n  .ontodia-accordion-item__inner {\n    flex: auto;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden; }\n  .ontodia-accordion-item__body {\n    flex: 1 1 0px;\n    display: flex;\n    flex-direction: column; }\n  .ontodia-accordion-item__header {\n    padding-left: 20px;\n    position: relative;\n    flex-shrink: 0;\n    font-size: 16px;\n    background: #E4E4E4;\n    cursor: default;\n    /* unselectable */\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n    .ontodia-accordion-item__header:before {\n      border-top: 6px solid #555555;\n      border-left: 3.5px solid transparent;\n      border-right: 3.5px solid transparent;\n      content: \"\";\n      position: absolute;\n      top: 50%;\n      left: 7px;\n      margin-top: -3px;\n      -webkit-transition: 0.1s;\n      -moz-transition: 0.1s;\n      transition: 0.1s; }\n  .ontodia-accordion-item--collapsed .ontodia-accordion-item__header:before {\n    -webkit-transform: rotate(-90deg);\n    -moz-transform: rotate(-90deg);\n    -ms-transform: rotate(-90deg);\n    transform: rotate(-90deg); }\n  .ontodia-accordion-item--collapsed .ontodia-accordion-item__body {\n    display: none; }\n\n.ontodia-drag-resizable-column.ontodia-drag-resizable-column--docked-bottom .ontodia-drag-resizable-column__handle,\n.ontodia-drag-resizable-column.ontodia-drag-resizable-column--docked-top .ontodia-drag-resizable-column__handle {\n  height: 8px;\n  width: 100%;\n  top: initial;\n  left: 0;\n  cursor: ns-resize; }\n\n.ontodia-drag-resizable-column.ontodia-drag-resizable-column--docked-bottom .ontodia-drag-resizable-column__handle-btn,\n.ontodia-drag-resizable-column.ontodia-drag-resizable-column--docked-top .ontodia-drag-resizable-column__handle-btn {\n  height: 100%;\n  width: 40px;\n  top: 0;\n  left: 50%;\n  margin-left: -20px;\n  margin-top: 0px; }\n\n.ontodia-drag-resizable-column {\n  display: flex;\n  flex-direction: column;\n  position: relative; }\n  .ontodia-drag-resizable-column__handle {\n    background: #fff url(" + escape(__webpack_require__(29)) + ") repeat;\n    width: 8px;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: initial;\n    z-index: 2;\n    -webkit-transition: 0.3s;\n    -moz-transition: 0.3s;\n    transition: 0.3s;\n    cursor: ew-resize; }\n  .ontodia-drag-resizable-column__handle-btn {\n    background: #eee;\n    cursor: pointer;\n    height: 40px;\n    position: absolute;\n    top: 50%;\n    left: 0;\n    margin-top: -20px;\n    width: 100%;\n    z-index: 1;\n    -webkit-transition: 0.3s;\n    -moz-transition: 0.3s;\n    transition: 0.3s; }\n    .ontodia-drag-resizable-column__handle-btn::before {\n      background-position: 0 0;\n      background-repeat: no-repeat;\n      background-size: cover;\n      content: \"\";\n      height: 6px;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      margin-top: -3px;\n      margin-left: -3px;\n      width: 6px;\n      -webkit-transition: 0.3s;\n      -moz-transition: 0.3s;\n      transition: 0.3s; }\n    .ontodia-drag-resizable-column__handle-btn:hover {\n      background: #b3b3b3;\n      transform: scale(1.2); }\n  .ontodia-drag-resizable-column--closed .ontodia-drag-resizable-column__handle-btn::before {\n    transform: rotate(180deg); }\n  .ontodia-drag-resizable-column--docked-left {\n    margin-right: 8px; }\n  .ontodia-drag-resizable-column--docked-left .ontodia-drag-resizable-column__handle {\n    right: -8px; }\n  .ontodia-drag-resizable-column--docked-left .ontodia-drag-resizable-column__handle-btn::before {\n    background-image: url(" + escape(__webpack_require__(25)) + "); }\n  .ontodia-drag-resizable-column--docked-left .ontodia-drag-resizable-column__handle-btn:hover::before {\n    background-image: url(" + escape(__webpack_require__(26)) + "); }\n  .ontodia-drag-resizable-column--docked-right {\n    margin-left: 8px; }\n  .ontodia-drag-resizable-column--docked-right .ontodia-drag-resizable-column__handle {\n    left: -8px; }\n  .ontodia-drag-resizable-column--docked-right .ontodia-drag-resizable-column__handle-btn::before {\n    background-image: url(" + escape(__webpack_require__(27)) + "); }\n  .ontodia-drag-resizable-column--docked-right .ontodia-drag-resizable-column__handle-btn:hover::before {\n    background-image: url(" + escape(__webpack_require__(28)) + "); }\n  .ontodia-drag-resizable-column--docked-top {\n    margin-bottom: 8px; }\n  .ontodia-drag-resizable-column--docked-top .ontodia-drag-resizable-column__handle {\n    bottom: -8px; }\n  .ontodia-drag-resizable-column--docked-top .ontodia-drag-resizable-column__handle-btn::before {\n    background-image: url(" + escape(__webpack_require__(30)) + "); }\n  .ontodia-drag-resizable-column--docked-top .ontodia-drag-resizable-column__handle-btn:hover::before {\n    background-image: url(" + escape(__webpack_require__(31)) + "); }\n  .ontodia-drag-resizable-column--docked-bottom {\n    margin-top: 8px; }\n  .ontodia-drag-resizable-column--docked-bottom .ontodia-drag-resizable-column__handle {\n    top: -8px; }\n  .ontodia-drag-resizable-column--docked-bottom .ontodia-drag-resizable-column__handle-btn::before {\n    background-image: url(" + escape(__webpack_require__(32)) + "); }\n  .ontodia-drag-resizable-column--docked-bottom .ontodia-drag-resizable-column__handle-btn:hover::before {\n    background-image: url(" + escape(__webpack_require__(33)) + "); }\n\n.introjs-tooltiptext {\n  color: #333;\n  font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;\n  font-size: 14px;\n  line-height: 1.42857; }\n\n.ontodia-toolbar__language-selector {\n  padding: 5px;\n  margin-top: 4px; }\n  .ontodia-toolbar__language-selector > label {\n    margin-right: 5px; }\n    .ontodia-toolbar__language-selector > label > span {\n      vertical-align: middle; }\n\n.ontodia-toolbar__toggle {\n  line-height: 1; }\n\n.ontodia-toolbar__toggle:after {\n  background-position: 0 0;\n  background-repeat: no-repeat;\n  content: '';\n  display: block;\n  height: 12px;\n  margin: 3px 0;\n  width: 12px; }\n\n.ontodia-toolbar__toggle-left:after {\n  background-image: url(" + escape(__webpack_require__(34)) + "); }\n\n.ontodia-toolbar__toggle-right:after {\n  background-image: url(" + escape(__webpack_require__(35)) + "); }\n\n.ontodia-toolbar__toggle.active {\n  border-color: #c3c3c3; }\n\n.ontodia-toolbar__toggle-left.active:after {\n  background-image: url(" + escape(__webpack_require__(36)) + "); }\n\n.ontodia-toolbar__toggle-right.active:after {\n  background-image: url(" + escape(__webpack_require__(37)) + "); }\n\n.ontodia-toolbar__layout-group {\n  margin: 5px;\n  height: 30px;\n  float: left; }\n  .ontodia-toolbar__layout-group > label {\n    margin-right: 5px; }\n  .ontodia-toolbar__layout-group .btn-group, .ontodia-toolbar__layout-group button {\n    height: 100%; }\n\n.ontodia-toolbar {\n  background: rgba(0, 0, 0, 0.15); }\n\n.ontodia-toolbar > .ontodia-btn-group {\n  margin-left: 10px; }\n\n.ontodia-toolbar > .ontodia-btn-group > button {\n  margin-top: 5px;\n  margin-bottom: 5px; }\n\n.ontodia-toolbar .ontodia-toolbar__undo,\n.ontodia-toolbar .ontodia-toolbar__redo {\n  display: none; }\n\n.ontodia {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  box-sizing: border-box;\n  white-space: initial;\n  color: #333;\n  font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;\n  font-size: 14px;\n  line-height: 1.42857; }\n  .ontodia *, .ontodia *:before, .ontodia *:after {\n    box-sizing: inherit; }\n  .ontodia__header {\n    display: flex;\n    flex-direction: column;\n    flex: 0 0 auto; }\n  .ontodia__workspace {\n    display: flex;\n    flex: auto;\n    overflow: hidden;\n    flex-direction: column; }\n  .ontodia__main-panel {\n    display: flex;\n    flex: auto;\n    overflow: hidden;\n    width: 0; }\n  .ontodia--unselectable {\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n  .ontodia--horizontal-resizing * {\n    cursor: ew-resize !important; }\n  .ontodia--vertical-resizing * {\n    cursor: ns-resize !important; }\n  .ontodia h4 {\n    font-size: 18px;\n    font-weight: 500;\n    line-height: 1.1;\n    margin-top: 10px;\n    margin-bottom: 10px; }\n  .ontodia select {\n    color: inherit;\n    margin: 0;\n    font: inherit;\n    line-height: inherit;\n    text-transform: none; }\n  .ontodia hr {\n    border: 0;\n    border-top: 1px solid #eee;\n    height: 0; }\n\n.ontodia-scrollable {\n  flex: 1 1 0px;\n  overflow-y: scroll; }\n\n.ontodia-scrollable > * {\n  position: relative; }\n\n.jstree-icon.jstree-themeicon.jstree-themeicon-custom {\n  background-size: contain !important; }\n\n.ontodia-default-template, .ontodia-group-template__wrap {\n  max-width: 450px;\n  float: left;\n  border-radius: 12px;\n  border-style: solid;\n  border-width: 1px; }\n  .ontodia-default-template__thumbnail {\n    text-align: center; }\n    .ontodia-default-template__thumbnail > img {\n      max-width: 200px; }\n  .ontodia-default-template[data-expanded='true'] .ontodia-default-template__thumbnail > img, .ontodia-group-template__wrap[data-expanded='true'] .ontodia-default-template__thumbnail > img {\n    max-width: 350px; }\n\n.ontodia-default-template_type-line, .ontodia-group-template__type-line {\n  padding: 0px 7px;\n  color: white;\n  height: 18px;\n  margin-bottom: 2px;\n  overflow: hidden;\n  display: flex;\n  align-items: baseline;\n  margin-top: -3px; }\n\ndiv.ontodia-default-template_type-line__icon, div.ontodia-group-template__type-line-icon {\n  position: inherit !important;\n  margin-right: 4px; }\n\n.ontodia-default-template_type-line_text-container, .ontodia-group-template__type-line-text-container {\n  flex-grow: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 0; }\n\n.ontodia-default-template_type-line_text-container__text, .ontodia-group-template__type-line-text {\n  display: inline;\n  white-space: nowrap;\n  font-size: 12px; }\n\n.ontodia-default-template_body, .ontodia-group-template__body {\n  border-bottom-left-radius: 12px;\n  border-bottom-right-radius: 12px;\n  border-top-style: solid;\n  border-top-width: 1px;\n  background: white;\n  padding: 7px 10px 8px 10px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column; }\n\n.ontodia-default-template_body__label, .ontodia-group-template__label {\n  font-size: 19px;\n  font-weight: 100;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-bottom: 0;\n  white-space: nowrap;\n  word-wrap: break-word; }\n\n.ontodia-default-template_body_expander {\n  width: 100%;\n  overflow: hidden;\n  display: flex; }\n\n.ontodia-default-template_body_expander__iri_label {\n  font-size: 12px;\n  font-weight: 100;\n  margin-right: 15px;\n  color: #b6b6b6; }\n\n.ontodia-default-template_body_expander_iri {\n  font-size: 12px;\n  width: 100%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n\n.ontodia-default-template_body_expander_iri__link {\n  color: #b6b6b6; }\n\n.ontodia-default-template_body_expander__hr {\n  margin: 5px 0px 5px 0px; }\n\n.ontodia-default-template_body_expander_property-table {\n  font-size: 15px;\n  font-weight: 100;\n  margin-bottom: 5px;\n  max-height: 200px;\n  overflow-y: scroll;\n  overflow-x: hidden; }\n\n.ontodia-default-template_body_expander_property-table_row {\n  white-space: nowrap; }\n\n.ontodia-default-template_body_expander_property-table_row__key {\n  display: inline-block;\n  width: 50%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  vertical-align: top; }\n\n.ontodia-default-template_body_expander_property-table_row_key {\n  display: inline-block;\n  width: 50%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  vertical-align: top; }\n\n.ontodia-default-template_body_expander_property-table_row_key_values {\n  display: inline-block;\n  width: 50%;\n  text-overflow: ellipsis;\n  overflow: hidden; }\n\n.ontodia-default-template_body_expander_property-table_row_key_values__value {\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: initial;\n  padding-right: 10px; }\n\n.ontodia-group-template {\n  overflow: hidden; }\n  .ontodia-group-template__wrap {\n    max-width: none; }\n  .ontodia-group-template__body {\n    overflow: visible; }\n  .ontodia-group-template__embedded-layer {\n    margin-top: 7px; }\n  .ontodia-group-template .ontodia-paper__canvas {\n    border-color: #fff; }\n\n.ontodia-standard-template {\n  min-width: 180px;\n  max-width: 400px;\n  float: left; }\n  .ontodia-standard-template__main {\n    border-radius: 2px;\n    border: 1px solid; }\n  .ontodia-standard-template__body {\n    margin-left: 8px;\n    border-radius: 0 2px 2px 0;\n    border-left: 1px solid;\n    padding: 3px 0;\n    background: #fafaf9; }\n  .ontodia-standard-template__body-horizontal {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    overflow: hidden; }\n  .ontodia-standard-template__body-content {\n    flex-grow: 1;\n    min-width: 0;\n    margin-right: 12px; }\n  .ontodia-standard-template__label {\n    font-size: 19px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .ontodia-standard-template__thumbnail {\n    font-size: 26px;\n    margin: 5px 10px;\n    flex-shrink: 0;\n    width: 50px;\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n  .ontodia-standard-template__thumbnail-image {\n    max-height: 100%;\n    max-width: 100%; }\n  .ontodia-standard-template__thumbnail-icon {\n    max-height: 26px;\n    max-width: 26px; }\n  .ontodia-standard-template__photo {\n    border-bottom: 1px solid; }\n  .ontodia-standard-template__photo-image {\n    width: 100%;\n    border-radius: 2px 2px 0 0; }\n  .ontodia-standard-template__type {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-size: 11px;\n    font-style: italic;\n    color: #999;\n    display: flex; }\n  .ontodia-standard-template__type-value {\n    width: 0;\n    flex-grow: 1;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .ontodia-standard-template__iri {\n    width: 100%;\n    overflow: hidden;\n    display: flex; }\n  .ontodia-standard-template__iri-key {\n    font-size: 12px;\n    margin-right: 4px;\n    color: #b6b6b6; }\n  .ontodia-standard-template__iri-value {\n    font-size: 12px;\n    width: 100%;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\n  .ontodia-standard-template__iri-value a {\n    color: #b6b6b6; }\n  .ontodia-standard-template__hr {\n    margin: 5px 0; }\n  .ontodia-standard-template__properties {\n    font-size: 15px;\n    max-height: 200px;\n    overflow-y: scroll;\n    overflow-x: hidden; }\n  .ontodia-standard-template__propertites-row {\n    white-space: nowrap; }\n  .ontodia-standard-template__properties-key {\n    display: inline-block;\n    width: 50%;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    vertical-align: top; }\n  .ontodia-standard-template__properties-values {\n    display: inline-block;\n    width: 50%;\n    text-overflow: ellipsis;\n    overflow: hidden; }\n  .ontodia-standard-template__properties-value {\n    width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: initial;\n    padding-right: 10px; }\n  .ontodia-standard-template__pinned-props {\n    border-top: 1px solid;\n    margin: 0 5px; }\n  .ontodia-standard-template__dropdown {\n    border-radius: 2px;\n    background-color: white;\n    margin-top: 5px;\n    border: 1px solid; }\n  .ontodia-standard-template__dropdown-content {\n    width: 100%;\n    padding: 9px; }\n  .ontodia-standard-template__actions {\n    display: flex;\n    justify-content: space-between; }\n    .ontodia-standard-template__actions button {\n      padding: 5px;\n      min-width: 60px; }\n", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJmaWxsOiB3aGl0ZSIgdmlld0JveD0iMCAwIDU3NiA1MTIiPgogICAgPHJlY3QKICAgICAgICBzdHlsZT0iZmlsbDogd2hpdGUiCiAgICAgICAgd2lkdGg9IjE2MCIKICAgICAgICBoZWlnaHQ9IjM0MCIKICAgICAgICB4PSIyMDcuOTk5OCIKICAgICAgICB5PSIxMzYiCiAgICAgICAgcnk9IjAiIC8+CiAgICA8cGF0aCBzdHlsZT0iZmlsbDogcmVkIiBkPSJNNTY5LjUxNyA0NDAuMDEzQzU4Ny45NzUgNDcyLjAwNyA1NjQuODA2IDUxMiA1MjcuOTQgNTEySDQ4LjA1NGMtMzYuOTM3IDAtNTkuOTk5LTQwLjA1NS00MS41NzctNzEuOTg3TDI0Ni40MjMgMjMuOTg1YzE4LjQ2Ny0zMi4wMDkgNjQuNzItMzEuOTUxIDgzLjE1NCAwbDIzOS45NCA0MTYuMDI4ek0yODggMzU0Yy0yNS40MDUgMC00NiAyMC41OTUtNDYgNDZzMjAuNTk1IDQ2IDQ2IDQ2IDQ2LTIwLjU5NSA0Ni00Ni0yMC41OTUtNDYtNDYtNDZ6bS00My42NzMtMTY1LjM0Nmw3LjQxOCAxMzZjLjM0NyA2LjM2NCA1LjYwOSAxMS4zNDYgMTEuOTgyIDExLjM0Nmg0OC41NDZjNi4zNzMgMCAxMS42MzUtNC45ODIgMTEuOTgyLTExLjM0Nmw3LjQxOC0xMzZjLjM3NS02Ljg3NC01LjA5OC0xMi42NTQtMTEuOTgyLTEyLjY1NGgtNjMuMzgzYy02Ljg4NCAwLTEyLjM1NiA1Ljc4LTExLjk4MSAxMi42NTR6Ii8+Cjwvc3ZnPgo="

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGrSURBVHic7dYxSgNRGEXhGwOuRQyCi1AR3IHoUiwFW21cj5sRC3tFgrExzUBIMmPmP76cD145MxcODyYRyrTgm+dJDpO8F3xbHRdJPpK8JZkVb9l7yxiL32OUQt0YRim0KoZRCqyLYZQRbRrDKCOYZbsYy/Oa5Khgb/MmSZ6yfRBvyg4ZBcgoQEYBMgqQUYCMAmQUIKMAGQXIKEBGATIKkFGAjAJkFKChUY7Hn9w+owAZBcgoQEYBMgqQUYCMAjRJ8hijoBgFyChARgEyCpBRgIwCZBQgowANjXI6/uT2DYkyT3I5/uT2GQXIKEBGATIKkFGAsFEOdvViuEWSlyTfPZ6dJjn72zm6SvKZfjfkuWBv04wBYgwQY4AYA8QYIH1jzJPcFext2pAYtwV7m2YMEGOAGAPEGCDGADEGiDFAjAFiDBBjgBgDxBggxgAxBogxQIwBMiTGTcHephkDxBggxgAxBogxQIwBYgwQY4AYA8QYIMYAMQaIMUCMAWIMkJMkX+kX47pg7164jzcDZ9MoxhjRuijGKLAqijEKdaMYA2AZxRggD/HXVv/FDxh8HInEGLhOAAAAAElFTkSuQmCC"

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjExR/NCNwAAAuxJREFUeF7t3V1u4jAYhWFu+FkDIHHBGlgZILbBjtN8M/labEywYzs+js8rHYFUqGo/6twNXTHGWIVdLpduv993x+ORm3Fy53L3A8Nf8sX+gSuw4e7NCFJuBAEbQcBGELARBGxOkNPp9PZCbp4Nd2/2eDy67Xb79mIu7+TO5e775+/d7/dut9u9vYnLM7lrufP++eeIMs+8MDSi5F0QhkaUPJuEoREl7aIwNKKkWRIMjShxS4qhEWXasmBoRAlbVgyNKH6bBUMjyvhmxdCI4l4RDI0o5opiaET5PwgMrXUUKAytVRRIDK01FGgMrRWUKjC0paNUhaEtFaVKDG1pKFVjaEtBWQSGVjvKojC0WlEWiaHVhrJoDK0WlCYwNHSUpjA0VJQmMTQ0lKYxNBQUSIyu697mkXEwa16VRoHCcCHoPDMOZ827UihwvxkuCFlAxgGtBTU3ChyGFIkhGYe0FtxcKJAYUiSGZBzU2qRyo8BiSIggUi4UaAwJFURKjQKPISGDSKlQqsCQEEHsn+N2u3Xr9dr+3t6T98r36J/jVwOIJJ8r1T9M2vDeOqoFJOajP5wfXYGaHp4gIDlAfg9SYP8iyPBIEIAIAhZBwCIIWAQBiyBgKcQLSGjG4a1NiiAEwYkgYCGCuCKIf8bhrSWLIP4Zh7eWLIL4ZxzeWrKaBZmAYhzeWrKaBpEFZBzeWrKaB5F5ZhzeWrIIMswj4/DWkkWQl33JOLy1ZBHEsZIRZGQlIkjCpYgggfvU2NdCIojnvuXzGp8I8mW+hbx2LIIkXIqaAaklgoDVDIjrn5gciy0GxPl3AlFzXV6OxTYVZPTvBCLmurwci20KSDX/je011+XlWGyhIFViSK7Ly7HYQkCqxZBcl5djsfmCVI0huS4vx2LzAakeQ3JdXo7F9g1kERiS6/JyLLYxkMVg1NQnEGIUygVCjILZIMQo3CsIMQBSEGKAdDgcus1mQwyUzudzd71eiYHS8/kkBpu71eoHWjSksuGbaS0AAAAASUVORK5CYII="

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAbCAYAAAAOEM1uAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAZEQAAGREBkIelaAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAG2SURBVFiFzde9axRRFMbhJ3Hjx0YRgkWElGIRGyVgaaG9XQpBrNIETJHKjxBSJCA2NiIWdhYKgoqCIELq/AU2tiJpAiliDMHEWEyKZfdO5szHrr4wzcx77vnNnXPnnktcK9jBwYCuLcwNBeHGsIGovyltDweNbYOHg9Eo4D9Tq0bsGj40BXKoO5isEjiht4ifHuE/qVpJvO/O049PvIxN/MBMH8ZP6pzeGVxK+C4kfAsl8vTMYBnI1x1Bv3E54bmWSHCAx2KfvBbgKGbxJAfOIcS7HMjnKCqpWoBRtfE5B/IVRsoAtnAGd3GlQchd/NE7Y7dwCtPYiw72xuD216KFk/zN3Ii+SYOajhqHZUU9aK1GjS3M4xumFK+yMuPexLHEsy9YbChPJR3HW+na+yjbBvNU+zdzHbcxfoTnUw7cS8XNSS3AFx1B6zif8FzKgXsmVj6VAduyFrwzcCUHcL/L9yiaJAUYXRRjON1172zC9xX3ZS+ziTk8KAFYWWX7wRGcqJAnudVV1RTu1YhP6WL3jWjXO4HvzbLE9N8fmqKAv/SpNyvQdmorSmlHVvhX1TsJltFPPPwL/+nTC6wUIf8AAAAASUVORK5CYII="

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAbCAYAAAAOEM1uAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAZEQAAGREBkIelaAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGCSURBVFiFzdi9ShxRFAfwn+uiaAoRVBQbbfMEFqIoFja+QCoLLQQr8R0sbdIJgTQiSgT1AcTKzkdIQhpTaOlX0GyK2WJ2c8d1Pt0/XBjOnTnnP+eerxnYxj0aJa9nfEOvlLirgFx8zaQhV8Ng2jfKiVT2amWxKAr1gOwElwXpH8NWXiXtMbKZV2EMHwP6F2P7dR1O8T2PeBW/8EMHp5TpwWGtJewF06JEuWmzu4ueqgnC55juw6ZsHE8B218F8qJsgkS1b0Grh74EbDdwioGqCYbQj6MEkhcYIlxm3opZrGEyh47eJqH22JvDOZbJ5sEJ4Rgqeh1nLTMr6Mv4bBpMZSV4hj9FMknA96wxeC3qCOvyxWAd88L17wobdHkWV0VwxP+e3ksgd6LiOrgtyvhn7DRlo3gM2K68kwziNqb7QTSC9eN3m9136cWvjVuf8FOHaSZPJ8mLfRw0r/8m3RQiuIQPBZEY67CfSCyOsttV0hG/CV3/0VQTTbxVIrW9rv6z8A+8NRQ5z9bcwQAAAABJRU5ErkJggg=="

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhciIgZGF0YS1pY29uPSJ0aW1lcy1jaXJjbGUiIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS10aW1lcy1jaXJjbGUgZmEtdy0xNiIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4em0wIDQ0OGMtMTEwLjUgMC0yMDAtODkuNS0yMDAtMjAwUzE0NS41IDU2IDI1NiA1NnMyMDAgODkuNSAyMDAgMjAwLTg5LjUgMjAwLTIwMCAyMDB6bTEwMS44LTI2Mi4yTDI5NS42IDI1Nmw2Mi4yIDYyLjJjNC43IDQuNyA0LjcgMTIuMyAwIDE3bC0yMi42IDIyLjZjLTQuNyA0LjctMTIuMyA0LjctMTcgMEwyNTYgMjk1LjZsLTYyLjIgNjIuMmMtNC43IDQuNy0xMi4zIDQuNy0xNyAwbC0yMi42LTIyLjZjLTQuNy00LjctNC43LTEyLjMgMC0xN2w2Mi4yLTYyLjItNjIuMi02Mi4yYy00LjctNC43LTQuNy0xMi4zIDAtMTdsMjIuNi0yMi42YzQuNy00LjcgMTIuMy00LjcgMTcgMGw2Mi4yIDYyLjIgNjIuMi02Mi4yYzQuNy00LjcgMTIuMy00LjcgMTcgMGwyMi42IDIyLjZjNC43IDQuNyA0LjcgMTIuMyAwIDE3eiI+PC9wYXRoPjwvc3ZnPg=="

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB2aWV3Qm94PSIwIDAgMTEwIDExMCIKICAgdmVyc2lvbj0iMS4xIgogICB3aWR0aD0iNTAwIgogICBoZWlnaHQ9IjUwMCI+CiAgPHBhdGgKICAgICBkPSJNIDU1LjEwNTk2NSw1NC42NDg4MjUgTSA4Mi4xODI0MjIsOC4wNTIxMTA3IEEgNTMuODkyMzc3LDUzLjg5MjM3NyAwIDEgMCAyOC4wMjk1MDgsMTAxLjI0NTU0IDUzLjg5MjM3Nyw1My44OTIzNzcgMCAxIDAgODIuMTgyNDIyLDguMDUyMTEwNyBaIE0gNTUuMTA1OTY1LDU0LjY0ODgyNSBNIDc2LjY5MjUzNiwxNy40OTk4MjQgQSA0Mi45NjU0MzIsNDIuOTY1NDMyIDAgMCAxIDMzLjUxOTM5Myw5MS43OTc4MjcgNDIuOTY1NDMyLDQyLjk2NTQzMiAwIDAgMSA3Ni42OTI1MzYsMTcuNDk5ODI0IFoiCiAgICAgc3R5bGU9InN0cm9rZS13aWR0aDoxLjA2ODEyNzYzO2ZpbGw6IzAwMDAwMCIgLz4KICA8cGF0aAogICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjU4OTMyNTlweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgIGQ9Ik0gMjUuMjk0ODEsNTYuNTUyNTk3IEMgNzguODgyODYzLDI5LjgzNDkwNSA3OS4wMzU1MzYsMjkuODM0OTA1IDc5LjAzNTUzNiwyOS44MzQ5MDUgTCA1Mi4xNjUxNzQsODQuMTg2MzIgNDkuNTY5NzQsNTkuMzAwNyBaIiAvPgo8L3N2Zz4K"

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB2aWV3Qm94PSIwIDAgMTEwIDExMCIKICAgdmVyc2lvbj0iMS4xIgogICB3aWR0aD0iNTAwIgogICBoZWlnaHQ9IjUwMCI+CiAgPHBhdGgKICAgICBkPSJNIDU1LjEwNTk2NSw1NC42NDg4MjUgTSA4Mi4xODI0MjIsOC4wNTIxMTA3IEEgNTMuODkyMzc3LDUzLjg5MjM3NyAwIDEgMCAyOC4wMjk1MDgsMTAxLjI0NTU0IDUzLjg5MjM3Nyw1My44OTIzNzcgMCAxIDAgODIuMTgyNDIyLDguMDUyMTEwNyBaIE0gNTUuMTA1OTY1LDU0LjY0ODgyNSBNIDc2LjY5MjUzNiwxNy40OTk4MjQgQSA0Mi45NjU0MzIsNDIuOTY1NDMyIDAgMCAxIDMzLjUxOTM5Myw5MS43OTc4MjcgNDIuOTY1NDMyLDQyLjk2NTQzMiAwIDAgMSA3Ni42OTI1MzYsMTcuNDk5ODI0IFoiCiAgICAgc3R5bGU9InN0cm9rZS13aWR0aDoxLjA2ODEyNzYzIiAvPgogIDxwYXRoCiAgICAgZD0iTSA3MC43NDkzNjQsMzEuMjI0NjM1IDc4LjQyNjkzMywzOC45MTAxNDYgNjMuMDU0MjY1LDU0LjI2Njk3MyA3OC40MTEwNyw2OS42Mzk2NjIgNzAuNzI1NTcxLDc3LjMxNzI0MiA1NS4zNjg3NjYsNjEuOTQ0NTUzIDM5Ljk5NjA5OCw3Ny4zMDEzNzkgMzIuMzE4NTI5LDY5LjYxNTg2OSA0Ny42OTExOTcsNTQuMjU5MDQyIDMyLjMzNDM5MiwzOC44ODYzNTMgbCA3LjY4NTQ5OSwtNy42Nzc1OCAxNS4zNTY4MDUsMTUuMzcyNjg5IHoiCiAgICAgc3R5bGU9InN0cm9rZS13aWR0aDoxLjE3OTEzMTg3IiAvPgo8L3N2Zz4K"

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggZmlsbD0iIzAxMDEwMSIgZD0iTTQ1OS42NTQsMjMzLjM3M2wtOTAuNTMxLDkwLjVjLTQ5Ljk2OSw1MC0xMzEuMDMxLDUwLTE4MSwwYy03Ljg3NS03Ljg0NC0xNC4wMzEtMTYuNjg4LTE5LjQzOC0yNS44MTMKCWw0Mi4wNjMtNDIuMDYzYzItMi4wMTYsNC40NjktMy4xNzIsNi44MjgtNC41MzFjMi45MDYsOS45MzgsNy45ODQsMTkuMzQ0LDE1Ljc5NywyNy4xNTZjMjQuOTUzLDI0Ljk2OSw2NS41NjMsMjQuOTM4LDkwLjUsMAoJbDkwLjUtOTAuNWMyNC45NjktMjQuOTY5LDI0Ljk2OS02NS41NjMsMC05MC41MTZjLTI0LjkzOC0yNC45NTMtNjUuNTMxLTI0Ljk1My05MC41LDBsLTMyLjE4OCwzMi4yMTkKCWMtMjYuMTA5LTEwLjE3Mi01NC4yNS0xMi45MDYtODEuNjQxLTguODkxbDY4LjU3OC02OC41NzhjNTAtNDkuOTg0LDEzMS4wMzEtNDkuOTg0LDE4MS4wMzEsMAoJQzUwOS42MjMsMTAyLjM0Miw1MDkuNjIzLDE4My4zODksNDU5LjY1NCwyMzMuMzczeiBNMjIwLjMyNiwzODIuMTg2bC0zMi4yMDMsMzIuMjE5Yy0yNC45NTMsMjQuOTM4LTY1LjU2MywyNC45MzgtOTAuNTE2LDAKCWMtMjQuOTUzLTI0Ljk2OS0yNC45NTMtNjUuNTYzLDAtOTAuNTMxbDkwLjUxNi05MC41YzI0Ljk2OS0yNC45NjksNjUuNTQ3LTI0Ljk2OSw5MC41LDBjNy43OTcsNy43OTcsMTIuODc1LDE3LjIwMywxNS44MTMsMjcuMTI1CgljMi4zNzUtMS4zNzUsNC44MTMtMi41LDYuODEzLTQuNWw0Mi4wNjMtNDIuMDQ3Yy01LjM3NS05LjE1Ni0xMS41NjMtMTcuOTY5LTE5LjQzOC0yNS44MjhjLTQ5Ljk2OS00OS45ODQtMTMxLjAzMS00OS45ODQtMTgxLjAxNiwwCglsLTkwLjUsOTAuNWMtNDkuOTg0LDUwLTQ5Ljk4NCwxMzEuMDMxLDAsMTgxLjAzMWM0OS45ODQsNDkuOTY5LDEzMS4wMzEsNDkuOTY5LDE4MS4wMTYsMGw2OC41OTQtNjguNTk0CglDMjc0LjU2MSwzOTUuMDkyLDI0Ni40MiwzOTIuMzQyLDIyMC4zMjYsMzgyLjE4NnoiLz4KPC9zdmc+Cg=="

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB2aWV3Qm94PSIwIDAgMTEwIDExMCIKICAgdmVyc2lvbj0iMS4xIgogICB3aWR0aD0iNTAwIgogICBoZWlnaHQ9IjUwMCI+CiAgPHBhdGgKICAgICBkPSJNIDgyLjE4MjQyMiw4LjA1MjExMDcgQyA1Ni40NDc3NSwtNi45MDE4MTM3IDIzLjQ2MzE4NSwxLjgzNzcyNTggOC41MDkyNzA2LDI3LjU3MjM4IC02LjQ0NDY0MzQsNTMuMzA3MDM0IDIuMjk0ODM1Nyw4Ni4yOTE2MTYgMjguMDI5NTA4LDEwMS4yNDU1NCA1My43NjQxOCwxMTYuMTk5NDYgODYuNzQ4NzQ2LDEwNy40NTk5MyAxMDEuNzAyNjYsODEuNzI1MjcxIDExNi42NTY1Nyw1NS45OTA2MTYgMTA3LjkxNzA5LDIzLjAwNjAzNSA4Mi4xODI0MjIsOC4wNTIxMTA3IFogTSA3MS43NTYwMiwyOC41Nzg1NTMgODIuMjg2ODUsMzguODQ2OTg0IDY1LjQ1MzQ3OSw1Ni4zNzMyOTYgODMuMDY0NzM4LDczLjMxNDMwMSA3Mi43OTY5MzcsODMuODQ0NDg1IDU1LjE2OTczNiw2Ni42NTcwMzkgMzkuMDEwOTk4LDgzLjIyODcxMSAyOC40ODAxNjcsNzIuOTYwMjggNDQuNjM5Mzc4LDU2LjM4OTA2OSAyOC40MTUyMTEsNDAuNTY4NjMxIDM4LjY4MzAxMywzMC4wMzg0NDYgNTQuOTM4ODkzLDQ1Ljg1ODcxIFoiCiAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS4wNjgxMjc2MyIgLz4KPC9zdmc+Cg=="

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIMDxQ3d8lonQAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAEOSURBVEjH7dXNK0RhFAbwXxRyZyIlKwtlMbvZkUIW9rOThezEniIf/4E/UYgkGwskaTI2V51uF/NxZ6LuU+/ivec5z/Pe9+McSpQoUeK/YTgz38AEbgv2WcUkHvKCS2ilY7tA0/VU8w2NPMICHoP5TgGmy0HvBfXviNN4D+TdHkzn8BG05n9LmMJdSNjvwrSOZtjiWruJFdwE86MOTGshr4m1TlddxWsQOW5zwTFnsdtzquAyCJ39wJ3Fc+Cu9HozR3ERBE9zODOZF7FV1FtM8BSET0JsKC0MX7FG0VVuHFeZbR/Bffi22a8SO5Y58/inh/2u70lahVph7A2quVRxnZoeDLqzJTgvG3yJP4dPo59Rw97b1k8AAAAASUVORK5CYII="

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIMDx0nu7zDsAAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAD+SURBVEjH7ZQxa8JQFIU/HFSqXQri1KHQwc2txaLi4N5NHMRNdFeoqPkH/YlFRRBxcVAREakuEQ7RiDWJWHgHAuHl3Pu9e/PuAyOjO1QM+L419BEYAjugdctKlzb08DSChkaBvgCn8v4VFPQBGAjIAsLARNbKQbR3LoCufAs5Kv/0CxoBfiRx74QnCczEU/EKjTv+qXXG+wwsxJvzMjIrSdS5cKMa835NpSNJ0P5DbEritkDh0sAnYCzBzSu6lbahO2Btb+asEsBGoHUP5+MF+JVcr27GN8fJrPkwEVnJt7Q7caSMmKo+3gFFabnrjJeAjwBuvbxbtUZGRkb/R3tcflA+OTpkkAAAAABJRU5ErkJggg=="

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJ1bmRvIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtdW5kbyBmYS13LTE2IiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUxMiA1MTIiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTIxMi4zMzMgMjI0LjMzM0gxMmMtNi42MjcgMC0xMi01LjM3My0xMi0xMlYxMkMwIDUuMzczIDUuMzczIDAgMTIgMGg0OGM2LjYyNyAwIDEyIDUuMzczIDEyIDEydjc4LjExMkMxMTcuNzczIDM5LjI3OSAxODQuMjYgNy40NyAyNTguMTc1IDguMDA3YzEzNi45MDYuOTk0IDI0Ni40NDggMTExLjYyMyAyNDYuMTU3IDI0OC41MzJDNTA0LjA0MSAzOTMuMjU4IDM5My4xMiA1MDQgMjU2LjMzMyA1MDRjLTY0LjA4OSAwLTEyMi40OTYtMjQuMzEzLTE2Ni41MS02NC4yMTUtNS4wOTktNC42MjItNS4zMzQtMTIuNTU0LS40NjctMTcuNDJsMzMuOTY3LTMzLjk2N2M0LjQ3NC00LjQ3NCAxMS42NjItNC43MTcgMTYuNDAxLS41MjVDMTcwLjc2IDQxNS4zMzYgMjExLjU4IDQzMiAyNTYuMzMzIDQzMmM5Ny4yNjggMCAxNzYtNzguNzE2IDE3Ni0xNzYgMC05Ny4yNjctNzguNzE2LTE3Ni0xNzYtMTc2LTU4LjQ5NiAwLTExMC4yOCAyOC40NzYtMTQyLjI3NCA3Mi4zMzNoOTguMjc0YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2NDhjMCA2LjYyNy01LjM3MyAxMi0xMiAxMnoiPjwvcGF0aD48L3N2Zz4="

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48cGF0aCBkPSJNMjU2IDE0NFYzMmMwLTE3LjY3MyAxNC4zMjctMzIgMzItMzJzMzIgMTQuMzI3IDMyIDMydjExMmgtNjR6bTExMiAxNkgxNmMtOC44MzcgMC0xNiA3LjE2My0xNiAxNnYzMmMwIDguODM3IDcuMTYzIDE2IDE2IDE2aDE2djMyYzAgNzcuNDA2IDU0Ljk2OSAxNDEuOTcxIDEyOCAxNTYuNzk2VjUxMmg2NHYtOTkuMjA0YzczLjAzMS0xNC44MjUgMTI4LTc5LjM5IDEyOC0xNTYuNzk2di0zMmgxNmM4LjgzNyAwIDE2LTcuMTYzIDE2LTE2di0zMmMwLTguODM3LTcuMTYzLTE2LTE2LTE2em0tMjQwLTE2VjMyYzAtMTcuNjczLTE0LjMyNy0zMi0zMi0zMlM2NCAxNC4zMjcgNjQgMzJ2MTEyaDY0eiIvPjwvc3ZnPg=="

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48cGF0aCBkPSJNNDAyLjYgODMuMmw5MC4yIDkwLjJjMy44IDMuOCAzLjggMTAgMCAxMy44TDI3NC40IDQwNS42bC05Mi44IDEwLjNjLTEyLjQgMS40LTIyLjktOS4xLTIxLjUtMjEuNWwxMC4zLTkyLjhMMzg4LjggODMuMmMzLjgtMy44IDEwLTMuOCAxMy44IDB6bTE2Mi0yMi45bC00OC44LTQ4LjhjLTE1LjItMTUuMi0zOS45LTE1LjItNTUuMiAwbC0zNS40IDM1LjRjLTMuOCAzLjgtMy44IDEwIDAgMTMuOGw5MC4yIDkwLjJjMy44IDMuOCAxMCAzLjggMTMuOCAwbDM1LjQtMzUuNGMxNS4yLTE1LjMgMTUuMi00MCAwLTU1LjJ6TTM4NCAzNDYuMlY0NDhINjRWMTI4aDIyOS44YzMuMiAwIDYuMi0xLjMgOC41LTMuNWw0MC00MGM3LjYtNy42IDIuMi0yMC41LTguNS0yMC41SDQ4QzIxLjUgNjQgMCA4NS41IDAgMTEydjM1MmMwIDI2LjUgMjEuNSA0OCA0OCA0OGgzNTJjMjYuNSAwIDQ4LTIxLjUgNDgtNDhWMzA2LjJjMC0xMC43LTEyLjktMTYtMjAuNS04LjVsLTQwIDQwYy0yLjIgMi4zLTMuNSA1LjMtMy41IDguNXoiLz48L3N2Zz4="

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48cGF0aCBkPSJNMCA4NFY1NmMwLTEzLjMgMTAuNy0yNCAyNC0yNGgxMTJsOS40LTE4LjdjNC04LjIgMTIuMy0xMy4zIDIxLjQtMTMuM2gxMTQuM2M5LjEgMCAxNy40IDUuMSAyMS41IDEzLjNMMzEyIDMyaDExMmMxMy4zIDAgMjQgMTAuNyAyNCAyNHYyOGMwIDYuNi01LjQgMTItMTIgMTJIMTJDNS40IDk2IDAgOTAuNiAwIDg0em00MTYgNTZ2MzI0YzAgMjYuNS0yMS41IDQ4LTQ4IDQ4SDgwYy0yNi41IDAtNDgtMjEuNS00OC00OFYxNDBjMC02LjYgNS40LTEyIDEyLTEyaDM2MGM2LjYgMCAxMiA1LjQgMTIgMTJ6bS0yNzIgNjhjMC04LjgtNy4yLTE2LTE2LTE2cy0xNiA3LjItMTYgMTZ2MjI0YzAgOC44IDcuMiAxNiAxNiAxNnMxNi03LjIgMTYtMTZWMjA4em05NiAwYzAtOC44LTcuMi0xNi0xNi0xNnMtMTYgNy4yLTE2IDE2djIyNGMwIDguOCA3LjIgMTYgMTYgMTZzMTYtNy4yIDE2LTE2VjIwOHptOTYgMGMwLTguOC03LjItMTYtMTYtMTZzLTE2IDcuMi0xNiAxNnYyMjRjMCA4LjggNy4yIDE2IDE2IDE2czE2LTcuMiAxNi0xNlYyMDh6Ii8+PC9zdmc+"

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJwZW4tc3F1YXJlIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtcGVuLXNxdWFyZSBmYS13LTE0IiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQ0OCA1MTIiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTQwMCA0ODBINDhjLTI2LjUgMC00OC0yMS41LTQ4LTQ4VjgwYzAtMjYuNSAyMS41LTQ4IDQ4LTQ4aDM1MmMyNi41IDAgNDggMjEuNSA0OCA0OHYzNTJjMCAyNi41LTIxLjUgNDgtNDggNDh6TTIzOC4xIDE3Ny45TDEwMi40IDMxMy42bC02LjMgNTcuMWMtLjggNy42IDUuNiAxNC4xIDEzLjMgMTMuM2w1Ny4xLTYuM0wzMDIuMiAyNDJjMi4zLTIuMyAyLjMtNi4xIDAtOC41TDI0Ni43IDE3OGMtMi41LTIuNC02LjMtMi40LTguNi0uMXpNMzQ1IDE2NS4xTDMxNC45IDEzNWMtOS40LTkuNC0yNC42LTkuNC0zMy45IDBsLTIzLjEgMjMuMWMtMi4zIDIuMy0yLjMgNi4xIDAgOC41bDU1LjUgNTUuNWMyLjMgMi4zIDYuMSAyLjMgOC41IDBMMzQ1IDE5OWM5LjMtOS4zIDkuMy0yNC41IDAtMzMuOXoiPjwvcGF0aD48L3N2Zz4="

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhciIgZGF0YS1pY29uPSJtaW51cy1zcXVhcmUiIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1taW51cy1zcXVhcmUgZmEtdy0xNCIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMDggMjg0Yy02LjYgMC0xMi01LjQtMTItMTJ2LTMyYzAtNi42IDUuNC0xMiAxMi0xMmgyMzJjNi42IDAgMTIgNS40IDEyIDEydjMyYzAgNi42LTUuNCAxMi0xMiAxMkgxMDh6TTQ0OCA4MHYzNTJjMCAyNi41LTIxLjUgNDgtNDggNDhINDhjLTI2LjUgMC00OC0yMS41LTQ4LTQ4VjgwYzAtMjYuNSAyMS41LTQ4IDQ4LTQ4aDM1MmMyNi41IDAgNDggMjEuNSA0OCA0OHptLTQ4IDM0NlY4NmMwLTMuMy0yLjctNi02LTZINTRjLTMuMyAwLTYgMi43LTYgNnYzNDBjMCAzLjMgMi43IDYgNiA2aDM0MGMzLjMgMCA2LTIuNyA2LTZ6Ij48L3BhdGg+PC9zdmc+"

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhciIgZGF0YS1pY29uPSJwbHVzLXNxdWFyZSIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLXBsdXMtc3F1YXJlIGZhLXctMTQiIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDQ4IDUxMiI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMzUyIDI0MHYzMmMwIDYuNi01LjQgMTItMTIgMTJoLTg4djg4YzAgNi42LTUuNCAxMi0xMiAxMmgtMzJjLTYuNiAwLTEyLTUuNC0xMi0xMnYtODhoLTg4Yy02LjYgMC0xMi01LjQtMTItMTJ2LTMyYzAtNi42IDUuNC0xMiAxMi0xMmg4OHYtODhjMC02LjYgNS40LTEyIDEyLTEyaDMyYzYuNiAwIDEyIDUuNCAxMiAxMnY4OGg4OGM2LjYgMCAxMiA1LjQgMTIgMTJ6bTk2LTE2MHYzNTJjMCAyNi41LTIxLjUgNDgtNDggNDhINDhjLTI2LjUgMC00OC0yMS41LTQ4LTQ4VjgwYzAtMjYuNSAyMS41LTQ4IDQ4LTQ4aDM1MmMyNi41IDAgNDggMjEuNSA0OCA0OHptLTQ4IDM0NlY4NmMwLTMuMy0yLjctNi02LTZINTRjLTMuMyAwLTYgMi43LTYgNnYzNDBjMCAzLjMgMi43IDYgNiA2aDM0MGMzLjMgMCA2LTIuNyA2LTZ6Ij48L3BhdGg+PC9zdmc+"

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAACXSURBVHjaYvz//z8DIbBlyxYmIDUTiI/6+PgsQJZjJGQAVPMcIE4E4n9AnAA0ZDFRBqBphoELQGwKNOQPiMNEoubLQOwG04zTADyanYGaXyOrZaJEM4YBpGpGMYAczXgDkVgANwBoCyiOU4B4PpK8LhDvBbpOlCgXkGMIhhdINQRrGJBiCO2SMg6XgPh9yEmZkdLsDBBgAMUxZ3KEE1BeAAAAAElFTkSuQmCC"

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAACXSURBVHjaYvz//z8DIfD+/XsmIDUTiI8KCgouQJZjJGQAVPMcIE4E4n9AnAA0ZDFRBqBphoELQGwKNOQPiMNEoubLQOwG04zTADyanYGaXyOrZaJEM4YBpGpGMYAczXgDkVgANwBoCyiOU4B4PpK8LhDvBbpOlCgXkGMIhhdINQRrGJBiCO2SMg6XgPh9yEmZkdLsDBBgAKQBZhCkUF/8AAAAAElFTkSuQmCC"

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAACdSURBVHjaYvz//z8DMtiyZUsCkLIG4nQfH59/DAQAI7IBQM2xQGoBEDMB8XwgTiFkCNwAoGYWIHUaiA2Q5AkawgRjABX9AVJuQHwZST4RiOcADWciaADUkNdAypkUQzAESTUEq6mkGILTb8QawsRAIcBpANAWUSC1F4h18UUrEyWasRpAimYMA0jVTJOk3AfE/4jVjJEbycnOAAEGABIyZ3LVo9KqAAAAAElFTkSuQmCC"

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAACeSURBVHjaYvz//z8DMnj//n0CkLIG4nRBQcF/DAQAC5rmWCA1F4iZgJgZyE8hZAgjzAVAxSDDTgOxAZL8fCDGawgTjAFU9AdIuQHxZST5RCCeAzSciaABUENeAylnUgzBECTVEKymkmIITr8RawgTA4UApwFAW0SB1F4g1sUXrUyUaMZqACmaMQwgVTNNknIfEP8jVjOKC8jNzgABBgBosmVE6sxD1QAAAABJRU5ErkJggg=="

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAHElEQVQIW2PcvHnzf19fX0YGKIAzMARgKjFUAABdvQgFy9518AAAAABJRU5ErkJggg=="

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA30lEQVQ4T7WTzw2CMBSH37Ou4BiemICYeODABiYSmcAJOoELiPHgBiXhYGKYgBNjuIJQ80ghBfsaEmKPbb/v90v/ICwcuJAHr0BKuaIAKWXLBbECgoMgyAisqirlJE6BBScm+c5JfgQOuG/vlIwEHpiVDAIGrg25tQ5x1KQTcLAQYkfrTdO8AMApQR8cRdGbBEVRbDgJ5nl+BYDUqlhTcg/384wkQ6XUERFvAECPxgkzklZrferOQCl1QMSzEGI/TZ6+QNPkqbW+xHH8GG6hLMt1GIafOX/D3vvfzzSnzRcwRIO9lTALYQAAAABJRU5ErkJggg=="

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA1ElEQVQ4T7WTQQrCMBBF88Usu2jBY3gKwVsIij2BB/ECVlx4C8FT9BhCZ9FlpV9SmlJrphSKWSZ57w+ZCczMhZm8GRWQXLgAALUWpAocXBRF5sAkSVJNEhR4GMDBCUjeNMmPYAj70jXJl0CDxySdQIHzFl5rkkagwdbajTuvquppjAlKMAZHUfRygrIsV6pERC4k016fc5fsYb8fkgDIICJ7kldjjBuaIKxIagDH5g1EZEfyZK3dDpOHE9hW8gBwjuP43u/CEsB7yt8g2d3972eaUs0Hvw2bpYUKd8YAAAAASUVORK5CYII="

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA60lEQVQ4T62TzQ2CQBBGv3FtwTI8UQEx8cCBDkw0UoEVbAU2IMaDHSwJBxNDBZwswxZc1ixhCbI/IUGOy7w3s7MzhJkfzeTRC6qqWsZx/JkiHMa2AiHEjohOjLFtkiTvkKQsy5WU8qGUOqdpeichxJ6IrgAWAF6MsY1P0sFPAGsAjVLqSEVRXABkg6xOyQg24TlxzhdRFOUADj6JB77VdZ21PQhJ9H8ppSnb5GhhznnTv4JP0hH6zhasD37mwCMZPkqf2RxagxSQWLBVgbE6JE7YKxg1FqZhrgEL7oKupJM1vun83zJNWSJXzBeWo4O9On9s3QAAAABJRU5ErkJggg=="

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA5klEQVQ4T62TQQrCMBBF5xez7KIFj+EpBG8hKPYEHsQLWHHhLQRP4TGEZtFlpF8S2hJtUgo1q5DMf/NnJoHMXJiplx5AcgHgPQXoxzqA1npL8qiU2qRp+hqD1HW9NMbcAZyyLLtBa70jeRGRRESeSql1DNKKHyKyEpEGwMECziQLL2sQ8iN24QBKkEyqqioB7GOQkJjkNc/zwvVgDGLvjTGdbZejFwONP4Wgk9aVrXkgdmX4HY846UP8zN3h4CHFICHxwIFn86ucmDgK8Btr967bQBN6YKN/wZbTzjsoHnUw5U/8BfABHFmbpQyQ0q0AAAAASUVORK5CYII="

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9JzEyJyBoZWlnaHQ9JzEyJyB2aWV3Qm94PScwIDAgNDY5LjMzMyA0NjkuMzMzJz4KICAgIDxwYXRoIGZpbGw9JyMzMzMnIGQ9J000NDgsMEgyMS4zMzNDOS41NTIsMCwwLDkuNTUyLDAsMjEuMzMzVjQ0OGMwLDExLjc4MSw5LjU1MiwyMS4zMzMsMjEuMzMzLDIxLjMzM0g0NDhjMTEuNzgxLDAsMjEuMzMzLTkuNTUyLDIxLjMzMy0yMS4zMzNWMjEuMzMzQzQ2OS4zMzMsOS41NTIsNDU5Ljc4MSwwLDQ0OCwweiBNMTM4LjY2Nyw0MjYuNjY3aC05NnYtMzg0aDk2VjQyNi42Njd6TTQyNi42NjcsNDI2LjY2N0gxODEuMzMzdi0zODRoMjQ1LjMzM1Y0MjYuNjY3eicvPgo8L3N2Zz4K"

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9JzEyJyBoZWlnaHQ9JzEyJyB2aWV3Qm94PScwIDAgNDY5LjMzMyA0NjkuMzMzJz4KICAgIDxwYXRoIGZpbGw9JyMzMzMnIGQ9J000NDgsMEgyMS4zMzNDOS41NTIsMCwwLDkuNTUyLDAsMjEuMzMzVjQ0OGMwLDExLjc4MSw5LjU1MiwyMS4zMzMsMjEuMzMzLDIxLjMzM0g0NDhjMTEuNzgxLDAsMjEuMzMzLTkuNTUyLDIxLjMzMy0yMS4zMzNWMjEuMzMzQzQ2OS4zMzMsOS41NTIsNDU5Ljc4MSwwLDQ0OCwweiBNMjg4LDQyNi42NjdINDIuNjY3di0zODRIMjg4VjQyNi42Njd6TTQyNi42NjcsNDI2LjY2N2gtOTZ2LTM4NGg5NlY0MjYuNjY3eicvPgo8L3N2Zz4K"

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9JzEyJyBoZWlnaHQ9JzEyJyB2aWV3Qm94PScwIDAgNDY5LjMzMyA0NjkuMzMzJz4KICAgIDxwYXRoIGZpbGw9JyMzMzMnIGQ9J20gMzAuNSwyMzUuNjYwODQgMCwtMjA1LjIwODI1OSA1OS42ODM1LDAgNTkuNjgzNTIsMCAwLDIwNS4yMDgyNTkgMCwyMDUuMjA4MjggLTU5LjY4MzUyLDAgLTU5LjY4MzUsMCAwLC0yMDUuMjA4MjggeicvPgogICAgPHBhdGggZmlsbD0nIzMzMycgZD0nTTQ0OCwwSDIxLjMzM0M5LjU1MiwwLDAsOS41NTIsMCwyMS4zMzNWNDQ4YzAsMTEuNzgxLDkuNTUyLDIxLjMzMywyMS4zMzMsMjEuMzMzSDQ0OGMxMS43ODEsMCwyMS4zMzMtOS41NTIsMjEuMzMzLTIxLjMzM1YyMS4zMzNDNDY5LjMzMyw5LjU1Miw0NTkuNzgxLDAsNDQ4LDB6IE0xMzguNjY3LDQyNi42NjdoLTk2di0zODRoOTZWNDI2LjY2N3pNNDI2LjY2Nyw0MjYuNjY3SDE4MS4zMzN2LTM4NGgyNDUuMzMzVjQyNi42Njd6Jy8+Cjwvc3ZnPgo="

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9JzEyJyBoZWlnaHQ9JzEyJyB2aWV3Qm94PScwIDAgNDY5LjMzMyA0NjkuMzMzJz4KICAgIDxwYXRoIGZpbGw9JyMzMzMnIGQ9J20gMzE4LjkxNDksMjMzLjUwODE2IDAsLTIwNS4yMDgyNjIgNTkuNjgzNSwwIDU5LjY4MzUxLDAgMCwyMDUuMjA4MjYyIDAsMjA1LjIwODI4IC01OS42ODM1MSwwIC01OS42ODM1LDAgMCwtMjA1LjIwODI4IHonLz4KICAgIDxwYXRoIGZpbGw9JyMzMzMnIGQ9J000NDgsMEgyMS4zMzNDOS41NTIsMCwwLDkuNTUyLDAsMjEuMzMzVjQ0OGMwLDExLjc4MSw5LjU1MiwyMS4zMzMsMjEuMzMzLDIxLjMzM0g0NDhjMTEuNzgxLDAsMjEuMzMzLTkuNTUyLDIxLjMzMy0yMS4zMzNWMjEuMzMzQzQ2OS4zMzMsOS41NTIsNDU5Ljc4MSwwLDQ0OCwweiBNMjg4LDQyNi42NjdINDIuNjY3di0zODRIMjg4VjQyNi42Njd6TTQyNi42NjcsNDI2LjY2N2gtOTZ2LTM4NGg5NlY0MjYuNjY3eicvPgo8L3N2Zz4K"

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(39);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 39 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__40__;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/** Empty module for conditional compilation. */
// tslint:disable-next-line:no-default-export
exports.default = undefined;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isIE11() {
    return !(window.ActiveXObject) && 'ActiveXObject' in window;
}
exports.isIE11 = isIE11;
if (typeof Math.sign === 'undefined') {
    Math.sign = function (n) {
        if (n > 0) {
            return 1;
        }
        else if (n < 0) {
            return -1;
        }
        else {
            return 0;
        }
    };
}
if (typeof Number.isNaN === 'undefined') {
    Number.isNaN = function (value) {
        return typeof value === 'number' && isNaN(value);
    };
}
if (typeof Number.isFinite === 'undefined') {
    Number.isFinite = function (n) {
        return n !== Infinity && n !== -Infinity && !Number.isNaN(n);
    };
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (search, pos) {
        return this.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
    };
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// tslint:disable
if (!Array.prototype.find) {
    var arrayFind = function (predicate) {
        // 1. Let O be ? ToObject(this value).
        if (this == null) {
            throw new TypeError('"this" is null or not defined');
        }
        var o = Object(this);
        // 2. Let len be ? ToLength(? Get(O, "length")).
        var len = o.length >>> 0;
        // 3. If IsCallable(predicate) is false, throw a TypeError exception.
        if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
        }
        // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
        var thisArg = arguments[1];
        // 5. Let k be 0.
        var k = 0;
        // 6. Repeat, while k < len
        while (k < len) {
            // a. Let Pk be ! ToString(k).
            // b. Let kValue be ? Get(O, Pk).
            // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
            // d. If testResult is true, return kValue.
            var kValue = o[k];
            if (predicate.call(thisArg, kValue, k, o)) {
                return kValue;
            }
            // e. Increase k by 1.
            k++;
        }
        // 7. Return undefined.
        return undefined;
    };
    Object.defineProperty(Array.prototype, 'find', { value: arrayFind });
}
// https://tc39.github.io/ecma262/#sec-array.prototype.findindex
if (!Array.prototype.findIndex) {
    Object.defineProperty(Array.prototype, 'findIndex', {
        value: function (predicate) {
            // 1. Let O be ? ToObject(this value).
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }
            var o = Object(this);
            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;
            // 3. If IsCallable(predicate) is false, throw a TypeError exception.
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }
            // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
            var thisArg = arguments[1];
            // 5. Let k be 0.
            var k = 0;
            // 6. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ! ToString(k).
                // b. Let kValue be ? Get(O, Pk).
                // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
                // d. If testResult is true, return k.
                var kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o)) {
                    return k;
                }
                // e. Increase k by 1.
                k++;
            }
            // 7. Return -1.
            return -1;
        },
        configurable: true,
        writable: true
    });
}
// tslint:enable
// from:https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/remove()/remove().md
(function (arr) {
    arr.forEach(function (item) {
        if (item.hasOwnProperty('remove')) {
            return;
        }
        Object.defineProperty(item, 'remove', {
            configurable: true,
            enumerable: true,
            writable: true,
            value: function remove() {
                if (this.parentNode !== null) {
                    this.parentNode.removeChild(this);
                }
            }
        });
    });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
tslib_1.__exportStar(__webpack_require__(44), exports);
tslib_1.__exportStar(__webpack_require__(49), exports);
tslib_1.__exportStar(__webpack_require__(85), exports);
exports.DefaultElementTemplateBundle = function (types) { return undefined; };


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(45);
var utils_1 = __webpack_require__(46);
var CLASS_NAME = 'ontodia-default-template';
var DefaultElementTemplate = /** @class */ (function (_super) {
    tslib_1.__extends(DefaultElementTemplate, _super);
    function DefaultElementTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultElementTemplate.prototype.render = function () {
        var props = this.props;
        var image = props.imgUrl ? (React.createElement("div", { className: CLASS_NAME + "__thumbnail" },
            React.createElement("img", { src: props.imgUrl }))) : undefined;
        var expander = props.isExpanded ? (React.createElement("div", null,
            React.createElement("div", { className: 'ontodia-default-template_body_expander' },
                React.createElement("div", { className: 'ontodia-default-template_body_expander__iri_label' }, "IRI:"),
                React.createElement("div", { className: 'ontodia-default-template_body_expander_iri' },
                    React.createElement("a", { className: 'ontodia-default-template_body_expander_iri__link', href: props.iri, title: props.iri }, props.iri))),
            React.createElement("hr", { className: 'ontodia-default-template_body_expander__hr' }),
            this.renderPropertyTable())) : null;
        return (React.createElement("div", { className: 'ontodia-default-template', style: {
                backgroundColor: props.color,
                borderColor: props.color,
            }, "data-expanded": this.props.isExpanded },
            React.createElement("div", { className: 'ontodia-default-template_type-line', title: props.label },
                React.createElement("div", { className: 'ontodia-default-template_type-line__icon', "aria-hidden": 'true' },
                    React.createElement("img", { src: props.iconUrl })),
                React.createElement("div", { title: props.types, className: 'ontodia-default-template_type-line_text-container' },
                    React.createElement("div", { className: 'ontodia-default-template_type-line_text-container__text' }, props.types))),
            image,
            React.createElement("div", { className: 'ontodia-default-template_body', style: { borderColor: props.color } },
                React.createElement("span", { className: 'ontodia-default-template_body__label', title: props.label }, props.label),
                expander)));
    };
    DefaultElementTemplate.prototype.renderPropertyTable = function () {
        var propsAsList = this.props.propsAsList;
        if (propsAsList && propsAsList.length > 0) {
            return React.createElement("div", { className: 'ontodia-default-template_body_expander_property-table' }, propsAsList.map(function (prop) {
                var propertyValues = utils_1.getPropertyValues(prop.property);
                var values = propertyValues.map(function (text, index) { return (React.createElement("div", { className: 'ontodia-default-template_body_expander_property-table_row_key_values__value', key: index, title: text }, text)); });
                return (React.createElement("div", { key: prop.id, className: 'ontodia-default-template_body_expander_property-table_row' },
                    React.createElement("div", { title: prop.name + ' (' + prop.id + ')', className: 'ontodia-default-template_body_expander_property-table_row__key' }, prop.name),
                    React.createElement("div", { className: 'ontodia-default-template_body_expander_property-table_row_key_values' }, values)));
            }));
        }
        else {
            return React.createElement("div", null, "no properties");
        }
    };
    return DefaultElementTemplate;
}(React.Component));
exports.DefaultElementTemplate = DefaultElementTemplate;


/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__45__;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __webpack_require__(47);
function getProperty(props, id) {
    if (props && props[id]) {
        return getPropertyValues(props[id]).join(', ');
    }
    else {
        return undefined;
    }
}
exports.getProperty = getProperty;
function getPropertyValues(property) {
    if (model_1.isIriProperty(property)) {
        return property.values.map(function (_a) {
            var value = _a.value;
            return value;
        });
    }
    else if (model_1.isLiteralProperty(property)) {
        return property.values.map(function (_a) {
            var value = _a.value;
            return value;
        });
    }
    return [];
}
exports.getPropertyValues = getPropertyValues;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(48);
function isIriProperty(e) {
    return e && e.type === 'uri';
}
exports.isIriProperty = isIriProperty;
function isLiteralProperty(e) {
    return e && e.type === 'string';
}
exports.isLiteralProperty = isLiteralProperty;
function sameLink(left, right) {
    return (left.linkTypeId === right.linkTypeId &&
        left.sourceId === right.sourceId &&
        left.targetId === right.targetId);
}
exports.sameLink = sameLink;
function hashLink(link) {
    var linkTypeId = link.linkTypeId, sourceId = link.sourceId, targetId = link.targetId;
    var hash = utils_1.hashFnv32a(linkTypeId);
    hash = hash * 31 + utils_1.hashFnv32a(sourceId);
    hash = hash * 31 + utils_1.hashFnv32a(targetId);
    return hash;
}
exports.hashLink = hashLink;
function sameElement(left, right) {
    return (left.id === right.id &&
        isArraysEqual(left.types, right.types) &&
        isLiteralsEqual(left.label.values, right.label.values) &&
        left.image === right.image &&
        isPropertiesEqual(left.properties, right.properties) &&
        ((!left.sources && !right.sources) ||
            (left.sources && right.sources && isArraysEqual(left.sources, right.sources))));
}
exports.sameElement = sameElement;
function isArraysEqual(left, right) {
    if (left.length !== right.length) {
        return false;
    }
    for (var i = 0; i < left.length; i++) {
        if (left[i] !== right[i]) {
            return false;
        }
    }
    return true;
}
function isLiteralsEqual(left, right) {
    if (left.length !== right.length) {
        return false;
    }
    for (var i = 0; i < left.length; i++) {
        var leftValue = left[i];
        var rightValue = right[i];
        if (leftValue.value !== rightValue.value || leftValue.language !== rightValue.language) {
            return false;
        }
    }
    return true;
}
function isIriPropertiesEqual(left, right) {
    if (!isIriProperty(left) || !isIriProperty(right)) {
        return false;
    }
    if (left.values.length !== right.values.length) {
        return false;
    }
    for (var i = 0; i < left.values.length; i++) {
        var leftValue = left.values[i];
        var rightValue = right.values[i];
        if (leftValue.value !== rightValue.value) {
            return false;
        }
    }
    return true;
}
function isLiteralPropertiesEqual(left, right) {
    if (!isLiteralProperty(left) || !isLiteralProperty(right)) {
        return false;
    }
    return isLiteralsEqual(left.values, right.values);
}
function isPropertiesEqual(left, right) {
    if (Object.keys(left).length !== Object.keys(right).length) {
        return false;
    }
    for (var key in left.properties) {
        if (left.properties.hasOwnProperty(key)) {
            var leftProperty = left[key];
            var rightProperty = right[key];
            if (!rightProperty) {
                return false;
            }
            if (!isIriPropertiesEqual(leftProperty, rightProperty) &&
                !isLiteralPropertiesEqual(leftProperty, rightProperty)) {
                return false;
            }
        }
    }
    return true;
}


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/** Generates random 32-digit hexadecimal string. */
function generate128BitID() {
    function random32BitDigits() {
        return Math.floor((1 + Math.random()) * 0x100000000)
            .toString(16).substring(1);
    }
    // generate by half because of restricted numerical precision
    return random32BitDigits() + random32BitDigits() + random32BitDigits() + random32BitDigits();
}
exports.generate128BitID = generate128BitID;
/**
 * Calculate a 32 bit FNV-1a hash
 * Found here: https://gist.github.com/vaiorabbit/5657561
 * Ref.: http://isthe.com/chongo/tech/comp/fnv/
 *
 * @param {string} str the input value
 * @param {integer} [seed] optionally pass the hash of the previous chunk
 * @returns {integer}
 */
function hashFnv32a(str, seed) {
    if (seed === void 0) { seed = 0x811c9dc5; }
    /* tslint:disable:no-bitwise */
    var i, l, hval = seed & 0x7fffffff;
    for (i = 0, l = str.length; i < l; i++) {
        hval ^= str.charCodeAt(i);
        hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
    }
    return hval >>> 0;
    /* tslint:enable:no-bitwise */
}
exports.hashFnv32a = hashFnv32a;
/**
 * Extracts local name for URI the same way as it's done in RDF4J.
 */
function getUriLocalName(uri) {
    var index = uri.indexOf('#');
    if (index < 0) {
        index = uri.lastIndexOf('/');
    }
    if (index < 0) {
        index = uri.lastIndexOf(':');
    }
    if (index < 0) {
        return undefined;
    }
    return uri.substring(index + 1);
}
exports.getUriLocalName = getUriLocalName;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(45);
var embeddedLayer_1 = __webpack_require__(50);
var CLASS = 'ontodia-group-template';
var GroupTemplate = /** @class */ (function (_super) {
    tslib_1.__extends(GroupTemplate, _super);
    function GroupTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GroupTemplate.prototype.render = function () {
        var _a = this.props, label = _a.label, iconUrl = _a.iconUrl, types = _a.types, color = _a.color, isExpanded = _a.isExpanded;
        return (React.createElement("div", { className: CLASS },
            React.createElement("div", { className: CLASS + "__wrap", style: {
                    backgroundColor: color,
                    borderColor: color,
                } },
                React.createElement("div", { className: CLASS + "__type-line", title: label },
                    React.createElement("div", { className: CLASS + "__type-line-icon" },
                        React.createElement("img", { src: iconUrl })),
                    React.createElement("div", { title: types, className: CLASS + "__type-line-text-container" },
                        React.createElement("div", { className: CLASS + "__type-line-text" }, types))),
                React.createElement("div", { className: CLASS + "__body", style: { borderColor: color } },
                    React.createElement("span", { className: CLASS + "__label", title: label }, label),
                    isExpanded ? (React.createElement("div", { className: CLASS + "__embedded-layer" },
                        React.createElement(embeddedLayer_1.EmbeddedLayer, null))) : null))));
    };
    return GroupTemplate;
}(React.Component));
exports.GroupTemplate = GroupTemplate;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(45);
var paper_1 = __webpack_require__(51);
var paperArea_1 = __webpack_require__(82);
var elements_1 = __webpack_require__(52);
var elementLayer_1 = __webpack_require__(57);
var events_1 = __webpack_require__(54);
var paperArea_2 = __webpack_require__(82);
var EmbeddedLayer = /** @class */ (function (_super) {
    tslib_1.__extends(EmbeddedLayer, _super);
    function EmbeddedLayer(props) {
        var _this = _super.call(this, props) || this;
        _this.listener = new events_1.EventObserver();
        _this.nestedElementListener = new events_1.EventObserver();
        _this.layerOffsetLeft = 0;
        _this.layerOffsetTop = 0;
        _this.isApplyingParentMove = false;
        _this.isNestedElementMoving = false;
        _this.previousPositions = [];
        _this.moveNestedElements = function (offsetX, offsetY) {
            _this.isApplyingParentMove = true;
            try {
                for (var _i = 0, _a = _this.getNestedElements(); _i < _a.length; _i++) {
                    var element = _a[_i];
                    var _b = element.position, x = _b.x, y = _b.y;
                    var newPosition = { x: x + offsetX, y: y + offsetY };
                    element.setPosition(newPosition);
                }
            }
            finally {
                _this.isApplyingParentMove = false;
                _this.recomputeSelfBounds();
            }
        };
        _this.recomputeSelfBounds = function () {
            if (_this.isApplyingParentMove) {
                return;
            }
            var element = _this.context.ontodiaElement.element;
            var _a = _this.getContentFittingBox(), offsetX = _a.x, offsetY = _a.y, paperWidth = _a.width, paperHeight = _a.height;
            if (_this.isNestedElementMoving) {
                var position = {
                    x: offsetX - _this.layerOffsetLeft,
                    y: offsetY - _this.layerOffsetTop,
                };
                element.setPosition(position);
            }
            _this.setState({ offsetX: offsetX, offsetY: offsetY, paperWidth: paperWidth, paperHeight: paperHeight }, function () { return element.redraw(); });
        };
        _this.onPaperPointerDown = function (e, cell) {
            if (e.button !== 0 /* left mouse button */) {
                return;
            }
            if (cell && cell instanceof elements_1.Element) {
                e.preventDefault();
                _this.isNestedElementMoving = true;
            }
        };
        _this.onLayerInit = function (layer) {
            if (!layer) {
                return;
            }
            var _a = _this.calculateOffset(layer), left = _a.left, top = _a.top;
            _this.layerOffsetLeft = left;
            _this.layerOffsetTop = top;
        };
        _this.state = { paperWidth: 0, paperHeight: 0, offsetX: 0, offsetY: 0 };
        return _this;
    }
    EmbeddedLayer.prototype.componentDidMount = function () {
        var _this = this;
        var element = this.context.ontodiaElement.element;
        var _a = this.context.ontodiaPaperArea, paperArea = _a.paperArea, view = _a.view;
        this.listener.listen(view.model.events, 'changeGroupContent', function (_a) {
            var group = _a.group;
            if (group === element.id) {
                _this.listenNestedElements(_this.getNestedElements());
                var _b = _this.getOffset(), offsetX = _b.offsetX, offsetY = _b.offsetY;
                _this.moveNestedElements(offsetX, offsetY);
            }
        });
        this.listener.listen(element.events, 'changePosition', function () {
            if (_this.isNestedElementMoving) {
                return;
            }
            var _a = _this.getOffset(), offsetX = _a.offsetX, offsetY = _a.offsetY;
            var _b = _this.getContentFittingBox(), x = _b.x, y = _b.y;
            var diffX = offsetX - x;
            var diffY = offsetY - y;
            _this.moveNestedElements(diffX, diffY);
            _this.setState({ offsetX: offsetX, offsetY: offsetY });
        });
        this.listener.listen(paperArea.events, 'pointerUp', function (e) {
            _this.isNestedElementMoving = false;
        });
        var nestedElements = this.getNestedElements();
        this.listenNestedElements(nestedElements);
        if (nestedElements.length > 0) {
            var _b = this.getContentFittingBox(), offsetX = _b.x, offsetY = _b.y, paperWidth = _b.width, paperHeight = _b.height;
            this.setState({ offsetX: offsetX, offsetY: offsetY, paperWidth: paperWidth, paperHeight: paperHeight }, function () { return element.redraw(); });
        }
        else {
            element.requestGroupContent();
        }
    };
    EmbeddedLayer.prototype.listenNestedElements = function (nestedElements) {
        var listener = new events_1.EventObserver();
        for (var _i = 0, nestedElements_1 = nestedElements; _i < nestedElements_1.length; _i++) {
            var nestedElement = nestedElements_1[_i];
            listener.listen(nestedElement.events, 'changePosition', this.recomputeSelfBounds);
            listener.listen(nestedElement.events, 'changeSize', this.recomputeSelfBounds);
        }
        this.nestedElementListener.stopListening();
        this.nestedElementListener = listener;
    };
    EmbeddedLayer.prototype.componentWillUnmount = function () {
        this.listener.stopListening();
        this.nestedElementListener.stopListening();
        this.removeElements();
        this.setState({ paperWidth: 0, paperHeight: 0, offsetX: 0, offsetY: 0 });
    };
    EmbeddedLayer.prototype.getNestedElements = function () {
        var element = this.context.ontodiaElement.element;
        var view = this.context.ontodiaPaperArea.view;
        return view.model.elements.filter(function (el) { return el.group === element.id; });
    };
    EmbeddedLayer.prototype.getContentFittingBox = function () {
        var nestedElements = this.getNestedElements();
        return paperArea_2.getContentFittingBox(nestedElements, []);
    };
    EmbeddedLayer.prototype.removeElements = function () {
        var view = this.context.ontodiaPaperArea.view;
        var batch = view.model.history.startBatch();
        for (var _i = 0, _a = this.getNestedElements(); _i < _a.length; _i++) {
            var element = _a[_i];
            view.model.removeElement(element.id);
        }
        batch.discard();
    };
    EmbeddedLayer.prototype.getOffset = function () {
        var element = this.context.ontodiaElement.element;
        var _a = element.position, elementX = _a.x, elementY = _a.y;
        var offsetX = elementX + this.layerOffsetLeft;
        var offsetY = elementY + this.layerOffsetTop;
        return { offsetX: offsetX, offsetY: offsetY };
    };
    EmbeddedLayer.prototype.calculateOffset = function (layer) {
        var paperArea = this.context.ontodiaPaperArea.paperArea;
        var scale = paperArea.getScale();
        var parent = findParentElement(layer);
        var _a = layer.getBoundingClientRect(), left = _a.left, top = _a.top;
        var _b = parent.getBoundingClientRect(), parentLeft = _b.left, parentTop = _b.top;
        return { left: (left - parentLeft) / scale, top: (top - parentTop) / scale };
    };
    EmbeddedLayer.prototype.render = function () {
        var element = this.context.ontodiaElement.element;
        var view = this.context.ontodiaPaperArea.view;
        var _a = this.state, paperWidth = _a.paperWidth, paperHeight = _a.paperHeight, offsetX = _a.offsetX, offsetY = _a.offsetY;
        var paperTransform = {
            width: paperWidth,
            height: paperHeight,
            originX: -offsetX,
            originY: -offsetY,
            scale: 1,
            paddingX: 0,
            paddingY: 0,
        };
        return (React.createElement("div", { className: 'ontodia-embedded-layer', ref: this.onLayerInit },
            React.createElement(paper_1.Paper, { view: view, paperTransform: paperTransform, onPointerDown: this.onPaperPointerDown, group: element.id })));
    };
    EmbeddedLayer.contextTypes = tslib_1.__assign(tslib_1.__assign({}, elementLayer_1.ElementContextTypes), paperArea_1.PaperAreaContextTypes);
    return EmbeddedLayer;
}(React.Component));
exports.EmbeddedLayer = EmbeddedLayer;
function findParentElement(layer) {
    var parent = layer.parentElement;
    if (!parent) {
        throw new Error('Cannot find parent diagram element for EmbeddedLayer');
    }
    else if (parent.hasAttribute('data-element-id')) {
        return parent;
    }
    else {
        return findParentElement(parent);
    }
}


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(45);
var react_1 = __webpack_require__(45);
var elements_1 = __webpack_require__(52);
var elementLayer_1 = __webpack_require__(57);
var linkLayer_1 = __webpack_require__(81);
var CLASS_NAME = 'ontodia-paper';
var Paper = /** @class */ (function (_super) {
    tslib_1.__extends(Paper, _super);
    function Paper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onMouseDown = function (e) {
            var _a = _this.props, view = _a.view, onPointerDown = _a.onPointerDown;
            var cell = e.target instanceof Element
                ? findCell(e.target, e.currentTarget, view.model) : undefined;
            if (onPointerDown) {
                onPointerDown(e, cell);
            }
        };
        return _this;
    }
    Paper.prototype.render = function () {
        var _a = this.props, view = _a.view, group = _a.group, paperTransform = _a.paperTransform, linkLayerWidgets = _a.linkLayerWidgets, elementLayerWidgets = _a.elementLayerWidgets;
        var width = paperTransform.width, height = paperTransform.height, originX = paperTransform.originX, originY = paperTransform.originY, scale = paperTransform.scale, paddingX = paperTransform.paddingX, paddingY = paperTransform.paddingY;
        var scaledWidth = width * scale;
        var scaledHeight = height * scale;
        // using padding instead of margin in combination with setting width and height
        // on .paper element to avoid "over-constrained" margins, see an explanation here:
        // https://stackoverflow.com/questions/11695354
        var style = {
            width: scaledWidth + paddingX,
            height: scaledHeight + paddingY,
            marginLeft: paddingX,
            marginTop: paddingY,
            paddingRight: paddingX,
            paddingBottom: paddingY,
        };
        var htmlTransformStyle = {
            position: 'absolute', left: 0, top: 0,
            transform: "scale(" + scale + "," + scale + ")translate(" + originX + "px," + originY + "px)",
        };
        return (React.createElement("div", { className: CLASS_NAME, style: style, onMouseDown: this.onMouseDown },
            React.createElement(TransformedSvgCanvas, { className: CLASS_NAME + "__canvas", style: { overflow: 'visible' }, paperTransform: paperTransform },
                React.createElement(linkLayer_1.LinkMarkers, { view: view }),
                React.createElement(linkLayer_1.LinkLayer, { view: view, links: view.model.links, group: group })),
            linkLayerWidgets,
            React.createElement(elementLayer_1.ElementLayer, { view: view, group: group, style: htmlTransformStyle }),
            elementLayerWidgets));
    };
    return Paper;
}(react_1.Component));
exports.Paper = Paper;
function findCell(bottom, top, model) {
    var target = bottom;
    var vertexIndex;
    while (true) {
        if (target instanceof Element) {
            if (target.hasAttribute('data-element-id')) {
                return model.getElement(target.getAttribute('data-element-id'));
            }
            else if (target.hasAttribute('data-link-id')) {
                var link = model.getLinkById(target.getAttribute('data-link-id'));
                return typeof vertexIndex === 'number' ? new elements_1.LinkVertex(link, vertexIndex) : link;
            }
            else if (target.hasAttribute('data-vertex')) {
                vertexIndex = Number(target.getAttribute('data-vertex'));
            }
        }
        if (!target || target === top) {
            break;
        }
        target = target.parentNode;
    }
    return undefined;
}
var TransformedSvgCanvas = /** @class */ (function (_super) {
    tslib_1.__extends(TransformedSvgCanvas, _super);
    function TransformedSvgCanvas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TransformedSvgCanvas.prototype.render = function () {
        var _a = this.props, paperTransform = _a.paperTransform, style = _a.style, children = _a.children, otherProps = tslib_1.__rest(_a, ["paperTransform", "style", "children"]);
        var width = paperTransform.width, height = paperTransform.height, originX = paperTransform.originX, originY = paperTransform.originY, scale = paperTransform.scale, paddingX = paperTransform.paddingX, paddingY = paperTransform.paddingY;
        var scaledWidth = width * scale;
        var scaledHeight = height * scale;
        var svgStyle = TransformedSvgCanvas.SVG_STYLE;
        if (style) {
            svgStyle = tslib_1.__assign(tslib_1.__assign({}, svgStyle), style);
        }
        return (React.createElement("svg", tslib_1.__assign({ width: scaledWidth, height: scaledHeight, style: svgStyle }, otherProps),
            React.createElement("g", { transform: "scale(" + scale + "," + scale + ")translate(" + originX + "," + originY + ")" }, children)));
    };
    TransformedSvgCanvas.SVG_STYLE = {
        position: 'absolute',
        top: 0,
        left: 0,
    };
    return TransformedSvgCanvas;
}(react_1.Component));
exports.TransformedSvgCanvas = TransformedSvgCanvas;
/**
 * @returns scrollable pane size in non-scaled pane coords.
 */
function totalPaneSize(pt) {
    return {
        x: pt.width * pt.scale + pt.paddingX * 2,
        y: pt.height * pt.scale + pt.paddingY * 2,
    };
}
exports.totalPaneSize = totalPaneSize;
/**
 * @returns scrollable pane top-left corner position in non-scaled pane coords.
 */
function paneTopLeft(pt) {
    return { x: -pt.paddingX, y: -pt.paddingY };
}
exports.paneTopLeft = paneTopLeft;
function paneFromPaperCoords(paper, pt) {
    return {
        x: (paper.x + pt.originX) * pt.scale,
        y: (paper.y + pt.originY) * pt.scale,
    };
}
exports.paneFromPaperCoords = paneFromPaperCoords;
function paperFromPaneCoords(pane, pt) {
    return {
        x: pane.x / pt.scale - pt.originX,
        y: pane.y / pt.scale - pt.originY,
    };
}
exports.paperFromPaneCoords = paperFromPaneCoords;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var schema_1 = __webpack_require__(53);
var events_1 = __webpack_require__(54);
var geometry_1 = __webpack_require__(56);
var LinkDirection;
(function (LinkDirection) {
    LinkDirection["in"] = "in";
    LinkDirection["out"] = "out";
})(LinkDirection = exports.LinkDirection || (exports.LinkDirection = {}));
var Element = /** @class */ (function () {
    function Element(props) {
        this.source = new events_1.EventSource();
        this.events = this.source;
        /** All in and out links of the element */
        this.links = [];
        var id = props.id, data = props.data, _a = props.position, position = _a === void 0 ? { x: 0, y: 0 } : _a, _b = props.size, size = _b === void 0 ? { width: 0, height: 0 } : _b, _c = props.expanded, expanded = _c === void 0 ? false : _c, group = props.group, elementState = props.elementState, _d = props.temporary, temporary = _d === void 0 ? false : _d;
        this.id = id;
        this._data = data;
        this._position = position;
        this._size = size;
        this._expanded = expanded;
        this._group = group;
        this._elementState = elementState;
        this._temporary = temporary;
    }
    Object.defineProperty(Element.prototype, "iri", {
        get: function () { return this._data.id; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "data", {
        get: function () { return this._data; },
        enumerable: true,
        configurable: true
    });
    Element.prototype.setData = function (value) {
        var previous = this._data;
        if (previous === value) {
            return;
        }
        this._data = value;
        this.source.trigger('changeData', { source: this, previous: previous });
        updateLinksToReferByNewIri(this, previous.id, value.id);
    };
    Object.defineProperty(Element.prototype, "position", {
        get: function () { return this._position; },
        enumerable: true,
        configurable: true
    });
    Element.prototype.setPosition = function (value) {
        var previous = this._position;
        var same = (previous.x === value.x &&
            previous.y === value.y);
        if (same) {
            return;
        }
        this._position = value;
        this.source.trigger('changePosition', { source: this, previous: previous });
    };
    Object.defineProperty(Element.prototype, "size", {
        get: function () { return this._size; },
        enumerable: true,
        configurable: true
    });
    Element.prototype.setSize = function (value) {
        var previous = this._size;
        var same = (previous.width === value.width &&
            previous.height === value.height);
        if (same) {
            return;
        }
        this._size = value;
        this.source.trigger('changeSize', { source: this, previous: previous });
    };
    Object.defineProperty(Element.prototype, "isExpanded", {
        get: function () { return this._expanded; },
        enumerable: true,
        configurable: true
    });
    Element.prototype.setExpanded = function (value) {
        var previous = this._expanded;
        if (previous === value) {
            return;
        }
        this._expanded = value;
        this.source.trigger('changeExpanded', { source: this, previous: previous });
    };
    Object.defineProperty(Element.prototype, "group", {
        get: function () { return this._group; },
        enumerable: true,
        configurable: true
    });
    Element.prototype.setGroup = function (value) {
        var previous = this._group;
        if (previous === value) {
            return;
        }
        this._group = value;
        this.source.trigger('changeGroup', { source: this, previous: previous });
    };
    Object.defineProperty(Element.prototype, "elementState", {
        get: function () { return this._elementState; },
        enumerable: true,
        configurable: true
    });
    Element.prototype.setElementState = function (value) {
        var previous = this._elementState;
        if (previous === value) {
            return;
        }
        this._elementState = value;
        this.source.trigger('changeElementState', { source: this, previous: previous });
    };
    Object.defineProperty(Element.prototype, "temporary", {
        get: function () { return this._temporary; },
        enumerable: true,
        configurable: true
    });
    Element.prototype.focus = function () {
        this.source.trigger('requestedFocus', { source: this });
    };
    Element.prototype.requestGroupContent = function () {
        this.source.trigger('requestedGroupContent', { source: this });
    };
    Element.prototype.addToFilter = function (linkType, direction) {
        this.source.trigger('requestedAddToFilter', {
            source: this, linkType: linkType, direction: direction,
        });
    };
    Element.prototype.redraw = function () {
        this.source.trigger('requestedRedraw', { source: this });
    };
    return Element;
}());
exports.Element = Element;
function updateLinksToReferByNewIri(element, oldIri, newIri) {
    if (oldIri === newIri) {
        return;
    }
    for (var _i = 0, _a = element.links; _i < _a.length; _i++) {
        var link = _a[_i];
        var data = link.data;
        if (data.sourceId === oldIri) {
            data = tslib_1.__assign(tslib_1.__assign({}, data), { sourceId: newIri });
        }
        if (data.targetId === oldIri) {
            data = tslib_1.__assign(tslib_1.__assign({}, data), { targetId: newIri });
        }
        link.setData(data);
    }
}
var FatClassModel = /** @class */ (function () {
    function FatClassModel(props) {
        this.source = new events_1.EventSource();
        this.events = this.source;
        var id = props.id, _a = props.label, label = _a === void 0 ? [] : _a, count = props.count;
        this.id = id;
        this._label = label;
        this._count = count;
    }
    Object.defineProperty(FatClassModel.prototype, "label", {
        get: function () { return this._label; },
        enumerable: true,
        configurable: true
    });
    FatClassModel.prototype.setLabel = function (value) {
        var previous = this._label;
        if (previous === value) {
            return;
        }
        this._label = value;
        this.source.trigger('changeLabel', { source: this, previous: previous });
    };
    Object.defineProperty(FatClassModel.prototype, "count", {
        get: function () { return this._count; },
        enumerable: true,
        configurable: true
    });
    FatClassModel.prototype.setCount = function (value) {
        var previous = this._count;
        if (previous === value) {
            return;
        }
        this._count = value;
        this.source.trigger('changeCount', { source: this, previous: previous });
    };
    return FatClassModel;
}());
exports.FatClassModel = FatClassModel;
var RichProperty = /** @class */ (function () {
    function RichProperty(props) {
        this.source = new events_1.EventSource();
        this.events = this.source;
        var id = props.id, _a = props.label, label = _a === void 0 ? [] : _a;
        this.id = id;
        this._label = label;
    }
    Object.defineProperty(RichProperty.prototype, "label", {
        get: function () { return this._label; },
        enumerable: true,
        configurable: true
    });
    RichProperty.prototype.setLabel = function (value) {
        var previous = this._label;
        if (previous === value) {
            return;
        }
        this._label = value;
        this.source.trigger('changeLabel', { source: this, previous: previous });
    };
    return RichProperty;
}());
exports.RichProperty = RichProperty;
var Link = /** @class */ (function () {
    function Link(props) {
        this.source = new events_1.EventSource();
        this.events = this.source;
        var _a = props.id, id = _a === void 0 ? schema_1.GenerateID.forLink() : _a, typeId = props.typeId, sourceId = props.sourceId, targetId = props.targetId, data = props.data, _b = props.vertices, vertices = _b === void 0 ? [] : _b, linkState = props.linkState;
        this.id = id;
        this._typeId = typeId;
        this._sourceId = sourceId;
        this._targetId = targetId;
        this._data = data;
        this._vertices = vertices;
        this._linkState = linkState;
    }
    Object.defineProperty(Link.prototype, "typeId", {
        get: function () { return this._typeId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Link.prototype, "sourceId", {
        get: function () { return this._sourceId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Link.prototype, "targetId", {
        get: function () { return this._targetId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Link.prototype, "data", {
        get: function () { return this._data; },
        enumerable: true,
        configurable: true
    });
    Link.prototype.setData = function (value) {
        var previous = this._data;
        if (previous === value) {
            return;
        }
        this._data = value;
        this._typeId = value.linkTypeId;
        this.source.trigger('changeData', { source: this, previous: previous });
    };
    Object.defineProperty(Link.prototype, "labelBounds", {
        get: function () { return this._labelBounds; },
        enumerable: true,
        configurable: true
    });
    Link.prototype.setLabelBounds = function (value) {
        var previous = this._labelBounds;
        if (previous === value) {
            return;
        }
        this._labelBounds = value;
        this.source.trigger('changeLabelBounds', { source: this, previous: previous });
    };
    Object.defineProperty(Link.prototype, "layoutOnly", {
        get: function () { return this._layoutOnly; },
        enumerable: true,
        configurable: true
    });
    Link.prototype.setLayoutOnly = function (value) {
        var previous = this._layoutOnly;
        if (previous === value) {
            return;
        }
        this._layoutOnly = value;
        this.source.trigger('changeLayoutOnly', { source: this, previous: previous });
    };
    Object.defineProperty(Link.prototype, "vertices", {
        get: function () { return this._vertices; },
        enumerable: true,
        configurable: true
    });
    Link.prototype.setVertices = function (value) {
        var previous = this._vertices;
        if (geometry_1.isPolylineEqual(this._vertices, value)) {
            return;
        }
        this._vertices = value;
        this.source.trigger('changeVertices', { source: this, previous: previous });
    };
    Object.defineProperty(Link.prototype, "linkState", {
        get: function () { return this._linkState; },
        enumerable: true,
        configurable: true
    });
    Link.prototype.setLinkState = function (value) {
        var previous = this._linkState;
        if (previous === value) {
            return;
        }
        this._linkState = value;
        this.source.trigger('changeLinkState', { source: this, previous: previous });
    };
    return Link;
}());
exports.Link = Link;
function linkMarkerKey(linkTypeIndex, startMarker) {
    return "ontodia-" + (startMarker ? 'mstart' : 'mend') + "-" + linkTypeIndex;
}
exports.linkMarkerKey = linkMarkerKey;
/**
 * Properties:
 *     visible: boolean
 *     showLabel: boolean
 *     isNew?: boolean
 *     label?: { values: LocalizedString[] }
 */
var FatLinkType = /** @class */ (function () {
    function FatLinkType(props) {
        this.source = new events_1.EventSource();
        this.events = this.source;
        this._isNew = false;
        this._visible = true;
        this._showLabel = true;
        var id = props.id, index = props.index, _a = props.label, label = _a === void 0 ? [] : _a;
        this.id = id;
        this._index = index;
        this._label = label;
    }
    Object.defineProperty(FatLinkType.prototype, "index", {
        get: function () { return this._index; },
        enumerable: true,
        configurable: true
    });
    FatLinkType.prototype.setIndex = function (value) {
        if (typeof this._index === 'number') {
            throw new Error('Cannot set index for link type more than once.');
        }
        this._index = value;
    };
    Object.defineProperty(FatLinkType.prototype, "label", {
        get: function () { return this._label; },
        enumerable: true,
        configurable: true
    });
    FatLinkType.prototype.setLabel = function (value) {
        var previous = this._label;
        if (previous === value) {
            return;
        }
        this._label = value;
        this.source.trigger('changeLabel', { source: this, previous: previous });
    };
    Object.defineProperty(FatLinkType.prototype, "visible", {
        get: function () { return this._visible; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FatLinkType.prototype, "showLabel", {
        get: function () { return this._showLabel; },
        enumerable: true,
        configurable: true
    });
    FatLinkType.prototype.setVisibility = function (params) {
        var same = (this._visible === params.visible &&
            this._showLabel === params.showLabel);
        if (same) {
            return;
        }
        var preventLoading = Boolean(params.preventLoading) || this._visible === params.visible;
        this._visible = params.visible;
        this._showLabel = params.showLabel;
        this.source.trigger('changeVisibility', { source: this, preventLoading: preventLoading });
    };
    Object.defineProperty(FatLinkType.prototype, "isNew", {
        get: function () { return this._isNew; },
        enumerable: true,
        configurable: true
    });
    FatLinkType.prototype.setIsNew = function (value) {
        var previous = this._isNew;
        if (previous === value) {
            return;
        }
        this._isNew = value;
        this.source.trigger('changeIsNew', { source: this, previous: previous });
    };
    return FatLinkType;
}());
exports.FatLinkType = FatLinkType;
var LinkVertex = /** @class */ (function () {
    function LinkVertex(link, vertexIndex) {
        this.link = link;
        this.vertexIndex = vertexIndex;
    }
    LinkVertex.prototype.createAt = function (location) {
        var vertices = tslib_1.__spreadArrays(this.link.vertices);
        vertices.splice(this.vertexIndex, 0, location);
        this.link.setVertices(vertices);
    };
    LinkVertex.prototype.moveTo = function (location) {
        var vertices = tslib_1.__spreadArrays(this.link.vertices);
        vertices.splice(this.vertexIndex, 1, location);
        this.link.setVertices(vertices);
    };
    LinkVertex.prototype.remove = function () {
        var vertices = tslib_1.__spreadArrays(this.link.vertices);
        var location = vertices.splice(this.vertexIndex, 1)[0];
        this.link.setVertices(vertices);
    };
    return LinkVertex;
}());
exports.LinkVertex = LinkVertex;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(48);
// context could be imported directly from NPM package, e.g.
//   import OntodiaContextV1 from 'ontodia/schema/context-v1.json';
exports.DIAGRAM_CONTEXT_URL_V1 = 'https://ontodia.org/context/v1.json';
exports.PLACEHOLDER_ELEMENT_TYPE = 'http://ontodia.org/NewEntity';
exports.PLACEHOLDER_LINK_TYPE = 'http://ontodia.org/NewLink';
var ONTODIA_ID_URL_PREFIX = 'http://ontodia.org/data/';
var GenerateID;
(function (GenerateID) {
    function forElement() { return ONTODIA_ID_URL_PREFIX + "e_" + utils_1.generate128BitID(); }
    GenerateID.forElement = forElement;
    function forLink() { return ONTODIA_ID_URL_PREFIX + "l_" + utils_1.generate128BitID(); }
    GenerateID.forLink = forLink;
})(GenerateID = exports.GenerateID || (exports.GenerateID = {}));
var TemplateProperties;
(function (TemplateProperties) {
    TemplateProperties.PinnedProperties = 'ontodia:pinnedProperties';
    TemplateProperties.CustomLabel = 'ontodia:customLabel';
})(TemplateProperties = exports.TemplateProperties || (exports.TemplateProperties = {}));


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var collections_1 = __webpack_require__(55);
var EventSource = /** @class */ (function () {
    function EventSource() {
        this.listeners = collections_1.createStringMap();
    }
    EventSource.prototype.on = function (eventKey, listener) {
        var listeners = this.listeners[eventKey];
        if (!listeners) {
            listeners = [];
            this.listeners[eventKey] = listeners;
        }
        listeners.push(listener);
    };
    EventSource.prototype.onAny = function (listener) {
        var listeners = this.anyListeners;
        if (!listeners) {
            listeners = [];
            this.anyListeners = listeners;
        }
        listeners.push(listener);
    };
    EventSource.prototype.off = function (eventKey, listener) {
        var listeners = this.listeners[eventKey];
        if (!listeners) {
            return;
        }
        var index = listeners.indexOf(listener);
        if (index >= 0) {
            listeners.splice(index, 1);
        }
    };
    EventSource.prototype.offAny = function (listener) {
        var listeners = this.anyListeners;
        if (!listeners) {
            return;
        }
        var index = listeners.indexOf(listener);
        if (index >= 0) {
            listeners.splice(index, 1);
        }
    };
    EventSource.prototype.trigger = function (eventKey, data) {
        var _a;
        var listeners = this.listeners[eventKey];
        if (listeners) {
            for (var _i = 0, listeners_1 = listeners; _i < listeners_1.length; _i++) {
                var listener = listeners_1[_i];
                listener(data, eventKey);
            }
        }
        if (this.anyListeners) {
            for (var _b = 0, _c = this.anyListeners; _b < _c.length; _b++) {
                var anyListener = _c[_b];
                anyListener((_a = {}, _a[eventKey] = data, _a), eventKey);
            }
        }
    };
    return EventSource;
}());
exports.EventSource = EventSource;
var EventObserver = /** @class */ (function () {
    function EventObserver() {
        this.unsubscribeByKey = collections_1.createStringMap();
        this.onDispose = [];
    }
    EventObserver.prototype.listen = function (events, eventKey, listener) {
        events.on(eventKey, listener);
        this.onDispose.push(function () { return events.off(eventKey, listener); });
    };
    EventObserver.prototype.listenAny = function (events, listener) {
        events.onAny(listener);
        this.onDispose.push(function () { return events.offAny(listener); });
    };
    EventObserver.prototype.listenOnce = function (events, eventKey, listener) {
        var handled = false;
        var onceListener = function (data, key) {
            handled = true;
            events.off(eventKey, onceListener);
            listener(data, key);
        };
        events.on(eventKey, onceListener);
        this.onDispose.push(function () {
            if (handled) {
                return;
            }
            events.off(eventKey, onceListener);
        });
    };
    EventObserver.prototype.stopListening = function () {
        for (var _i = 0, _a = this.onDispose; _i < _a.length; _i++) {
            var unsubscribe = _a[_i];
            unsubscribe();
        }
        this.onDispose.length = 0;
        for (var key in this.unsubscribeByKey) {
            if (!collections_1.hasOwnProperty(this.unsubscribeByKey, key)) {
                continue;
            }
            var unsubscribers = this.unsubscribeByKey[key];
            for (var _b = 0, unsubscribers_1 = unsubscribers; _b < unsubscribers_1.length; _b++) {
                var unsubscribe = unsubscribers_1[_b];
                unsubscribe();
            }
        }
        this.unsubscribeByKey = {};
    };
    return EventObserver;
}());
exports.EventObserver = EventObserver;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
function createStringMap() {
    var map = Object.create(null);
    // tslint:disable-next-line:no-string-literal
    delete map['hint'];
    return map;
}
exports.createStringMap = createStringMap;
function createNumberMap() {
    return createStringMap();
}
exports.createNumberMap = createNumberMap;
function hasOwnProperty(collection, key) {
    return Object.prototype.hasOwnProperty.call(collection, key);
}
exports.hasOwnProperty = hasOwnProperty;
function objectValues(obj) {
    var items = [];
    for (var key in obj) {
        if (!Object.hasOwnProperty.call(obj, key)) {
            continue;
        }
        items.push(obj[key]);
    }
    return items;
}
exports.objectValues = objectValues;
function isEmptyMap(map) {
    for (var key in map) {
        if (hasOwnProperty(map, key)) {
            return false;
        }
    }
    return true;
}
exports.isEmptyMap = isEmptyMap;
/**
 * Clones Map collection. Required due to IE11 not supporing `new Map(map)`.
 */
function cloneMap(map) {
    var clone = new Map();
    map.forEach(function (value, key) { return clone.set(key, value); });
    return clone;
}
exports.cloneMap = cloneMap;
/**
 * Clones Set collection. Required due to IE11 not supporing `new Set(set)`.
 */
function cloneSet(set) {
    var clone = new Set();
    set.forEach(function (item) { return clone.add(item); });
    return clone;
}
exports.cloneSet = cloneSet;
function getOrCreateArrayInMap(map, key) {
    var values = map.get(key);
    if (!values) {
        values = [];
        map.set(key, values);
    }
    return values;
}
exports.getOrCreateArrayInMap = getOrCreateArrayInMap;
function getOrCreateSetInMap(map, key) {
    var values = map.get(key);
    if (!values) {
        values = new Set();
        map.set(key, values);
    }
    return values;
}
exports.getOrCreateSetInMap = getOrCreateSetInMap;
var OrderedMap = /** @class */ (function () {
    function OrderedMap() {
        this.mapping = createStringMap();
        this.ordered = [];
    }
    OrderedMap.prototype.reorder = function (compare) {
        this.ordered.sort(compare);
    };
    Object.defineProperty(OrderedMap.prototype, "items", {
        get: function () {
            return this.ordered;
        },
        enumerable: true,
        configurable: true
    });
    OrderedMap.prototype.get = function (key) {
        return this.mapping[key];
    };
    OrderedMap.prototype.push = function (key, value) {
        if (key in this.mapping) {
            var previous = this.mapping[key];
            if (previous === value) {
                return;
            }
            var index = this.ordered.indexOf(previous);
            this.ordered.splice(index, 1);
        }
        this.mapping[key] = value;
        this.ordered.push(value);
    };
    OrderedMap.prototype.delete = function (key) {
        if (!(key in this.mapping)) {
            return undefined;
        }
        var previous = this.mapping[key];
        var index = this.ordered.indexOf(previous);
        this.ordered.splice(index, 1);
        delete this.mapping[key];
        return previous;
    };
    return OrderedMap;
}());
exports.OrderedMap = OrderedMap;
var HashMap = /** @class */ (function () {
    function HashMap(hashCode, equals) {
        this.hashCode = hashCode;
        this.equals = equals;
        this.map = new Map();
        this._size = 0;
    }
    Object.defineProperty(HashMap.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: true,
        configurable: true
    });
    HashMap.prototype.has = function (key) {
        var _this = this;
        var items = this.map.get(this.hashCode(key));
        if (!items) {
            return false;
        }
        return Boolean(items.find(function (p) { return _this.equals(p.key, key); }));
    };
    HashMap.prototype.get = function (key) {
        var _this = this;
        var items = this.map.get(this.hashCode(key));
        if (!items) {
            return undefined;
        }
        var pair = items.find(function (p) { return _this.equals(p.key, key); });
        return pair ? pair.value : undefined;
    };
    HashMap.prototype.set = function (key, value) {
        var _this = this;
        var hash = this.hashCode(key);
        var items = this.map.get(hash);
        if (items) {
            var index = items.findIndex(function (p) { return _this.equals(p.key, key); });
            if (index >= 0) {
                items.splice(index, 1);
            }
            else {
                this._size++;
            }
            items.push({ key: key, value: value });
        }
        else {
            items = [{ key: key, value: value }];
            this.map.set(hash, items);
            this._size++;
        }
        return this;
    };
    HashMap.prototype.delete = function (key) {
        var _this = this;
        var items = this.map.get(this.hashCode(key));
        if (!items) {
            return false;
        }
        var index = items.findIndex(function (p) { return _this.equals(p.key, key); });
        if (index >= 0) {
            items.splice(index, 1);
            this._size--;
            return true;
        }
        else {
            return false;
        }
    };
    HashMap.prototype.clear = function () {
        this.map.clear();
        this._size = 0;
    };
    HashMap.prototype.forEach = function (callback) {
        var _this = this;
        this.map.forEach(function (items) {
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var _a = items_1[_i], key = _a.key, value = _a.value;
                callback(value, key, _this);
            }
        });
    };
    HashMap.prototype.clone = function () {
        var clone = new HashMap(this.hashCode, this.equals);
        clone._size = this.size;
        this.map.forEach(function (value, key) { return clone.map.set(key, tslib_1.__spreadArrays(value)); });
        return clone;
    };
    return HashMap;
}());
exports.HashMap = HashMap;
var MoveDirection;
(function (MoveDirection) {
    MoveDirection[MoveDirection["ToStart"] = -1] = "ToStart";
    MoveDirection[MoveDirection["ToEnd"] = 1] = "ToEnd";
})(MoveDirection = exports.MoveDirection || (exports.MoveDirection = {}));
function makeMoveComparator(items, selected, moveDirection) {
    var orderMap = new Map();
    var selectionIndexOffset = moveDirection * items.length;
    items.forEach(function (item, index) {
        orderMap.set(item, index);
    });
    for (var _i = 0, selected_1 = selected; _i < selected_1.length; _i++) {
        var selectedItem = selected_1[_i];
        orderMap.set(selectedItem, selectionIndexOffset + orderMap.get(selectedItem));
    }
    return function (a, b) {
        var orderA = orderMap.get(a);
        var orderB = orderMap.get(b);
        return (orderA > orderB ? 1 :
            orderA < orderB ? -1 :
                0);
    };
}
exports.makeMoveComparator = makeMoveComparator;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var Vector;
(function (Vector) {
    function equals(a, b) {
        return a.x === b.x && a.y === b.y;
    }
    Vector.equals = equals;
    function length(_a) {
        var x = _a.x, y = _a.y;
        return Math.sqrt(x * x + y * y);
    }
    Vector.length = length;
    function normalize(_a) {
        var x = _a.x, y = _a.y;
        if (x === 0 && y === 0) {
            return { x: x, y: y };
        }
        var inverseLength = 1 / Math.sqrt(x * x + y * y);
        return { x: x * inverseLength, y: y * inverseLength };
    }
    Vector.normalize = normalize;
    function dot(_a, _b) {
        var x1 = _a.x, y1 = _a.y;
        var x2 = _b.x, y2 = _b.y;
        return x1 * x2 + y1 * y2;
    }
    Vector.dot = dot;
    function cross2D(_a, _b) {
        var x1 = _a.x, y1 = _a.y;
        var x2 = _b.x, y2 = _b.y;
        return x1 * y2 - y1 * x2;
    }
    Vector.cross2D = cross2D;
})(Vector = exports.Vector || (exports.Vector = {}));
var Rect;
(function (Rect) {
    function center(_a) {
        var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
        return { x: x + width / 2, y: y + height / 2 };
    }
    Rect.center = center;
})(Rect = exports.Rect || (exports.Rect = {}));
function boundsOf(element) {
    var _a = element.position, x = _a.x, y = _a.y;
    var _b = element.size, width = _b.width, height = _b.height;
    return { x: x, y: y, width: width, height: height };
}
exports.boundsOf = boundsOf;
function intersectRayFromRectangleCenter(sourceRect, rayTarget) {
    var isTargetInsideRect = sourceRect.width === 0 || sourceRect.height === 0 ||
        rayTarget.x > sourceRect.x && rayTarget.x < (sourceRect.x + sourceRect.width) &&
            rayTarget.y > sourceRect.y && rayTarget.y < (sourceRect.y + sourceRect.height);
    var halfWidth = sourceRect.width / 2;
    var halfHeight = sourceRect.height / 2;
    var center = {
        x: sourceRect.x + halfWidth,
        y: sourceRect.y + halfHeight,
    };
    if (isTargetInsideRect) {
        return center;
    }
    var direction = Vector.normalize({
        x: rayTarget.x - center.x,
        y: rayTarget.y - center.y,
    });
    var rightDirection = { x: Math.abs(direction.x), y: direction.y };
    var isHorizontal = Vector.cross2D({ x: halfWidth, y: -halfHeight }, rightDirection) > 0 &&
        Vector.cross2D({ x: halfWidth, y: halfHeight }, rightDirection) < 0;
    if (isHorizontal) {
        return {
            x: center.x + halfWidth * Math.sign(direction.x),
            y: center.y + halfWidth * direction.y / Math.abs(direction.x),
        };
    }
    else {
        return {
            x: center.x + halfHeight * direction.x / Math.abs(direction.y),
            y: center.y + halfHeight * Math.sign(direction.y),
        };
    }
}
function isPolylineEqual(left, right) {
    if (left === right) {
        return true;
    }
    if (left.length !== right.length) {
        return false;
    }
    for (var i = 0; i < left.length; i++) {
        var a = left[i];
        var b = right[i];
        if (!(a.x === b.x && a.y === b.y)) {
            return false;
        }
    }
    return true;
}
exports.isPolylineEqual = isPolylineEqual;
function computePolyline(source, target, vertices) {
    var sourceRect = boundsOf(source);
    var targetRect = boundsOf(target);
    var startPoint = intersectRayFromRectangleCenter(sourceRect, vertices.length > 0 ? vertices[0] : Rect.center(targetRect));
    var endPoint = intersectRayFromRectangleCenter(targetRect, vertices.length > 0 ? vertices[vertices.length - 1] : Rect.center(sourceRect));
    return tslib_1.__spreadArrays([startPoint], vertices, [endPoint]);
}
exports.computePolyline = computePolyline;
function computePolylineLength(polyline) {
    var previous;
    return polyline.reduce(function (acc, point) {
        var segmentLength = previous ? Vector.length({ x: point.x - previous.x, y: point.y - previous.y }) : 0;
        previous = point;
        return acc + segmentLength;
    }, 0);
}
exports.computePolylineLength = computePolylineLength;
function getPointAlongPolyline(polyline, offset) {
    if (polyline.length === 0) {
        throw new Error('Cannot compute a point for empty polyline');
    }
    if (offset < 0) {
        return polyline[0];
    }
    var currentOffset = 0;
    for (var i = 1; i < polyline.length; i++) {
        var previous = polyline[i - 1];
        var point = polyline[i];
        var segment = { x: point.x - previous.x, y: point.y - previous.y };
        var segmentLength = Vector.length(segment);
        var newOffset = currentOffset + segmentLength;
        if (offset < newOffset) {
            var leftover = (offset - currentOffset) / segmentLength;
            return {
                x: previous.x + leftover * segment.x,
                y: previous.y + leftover * segment.y,
            };
        }
        else {
            currentOffset = newOffset;
        }
    }
    return polyline[polyline.length - 1];
}
exports.getPointAlongPolyline = getPointAlongPolyline;
function findNearestSegmentIndex(polyline, location) {
    var minDistance = Infinity;
    var foundIndex = 0;
    for (var i = 0; i < polyline.length - 1; i++) {
        var pivot = polyline[i];
        var next = polyline[i + 1];
        var target = { x: location.x - pivot.x, y: location.y - pivot.y };
        var segment = { x: next.x - pivot.x, y: next.y - pivot.y };
        var segmentLength = Vector.length(segment);
        var projectionToSegment = Vector.dot(target, segment) / segmentLength;
        if (projectionToSegment < 0 || projectionToSegment > segmentLength) {
            continue;
        }
        var distanceToSegment = Math.abs(Vector.cross2D(target, segment)) / segmentLength;
        if (distanceToSegment < minDistance) {
            minDistance = distanceToSegment;
            foundIndex = i;
        }
    }
    return foundIndex;
}
exports.findNearestSegmentIndex = findNearestSegmentIndex;
function computeGrouping(elements) {
    var grouping = new Map();
    for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
        var element = elements_1[_i];
        var group = element.group;
        if (typeof group === 'string') {
            var children = grouping.get(group);
            if (!children) {
                children = [];
                grouping.set(group, children);
            }
            children.push(element);
        }
    }
    return grouping;
}
exports.computeGrouping = computeGrouping;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(45);
var react_dom_1 = __webpack_require__(58);
var d3_color_1 = __webpack_require__(59);
var async_1 = __webpack_require__(60);
var events_1 = __webpack_require__(54);
var react_1 = __webpack_require__(61);
var keyedObserver_1 = __webpack_require__(62);
var commands_1 = __webpack_require__(63);
var view_1 = __webpack_require__(65);
// tslint:disable:no-bitwise
var RedrawFlags;
(function (RedrawFlags) {
    RedrawFlags[RedrawFlags["None"] = 0] = "None";
    RedrawFlags[RedrawFlags["Render"] = 1] = "Render";
    RedrawFlags[RedrawFlags["RecomputeTemplate"] = 3] = "RecomputeTemplate";
    RedrawFlags[RedrawFlags["RecomputeBlurred"] = 5] = "RecomputeBlurred";
})(RedrawFlags || (RedrawFlags = {}));
var ElementLayer = /** @class */ (function (_super) {
    tslib_1.__extends(ElementLayer, _super);
    function ElementLayer(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.listener = new events_1.EventObserver();
        _this.redrawBatch = {
            requests: new Map(),
            forAll: RedrawFlags.None,
        };
        _this.delatedRedraw = new async_1.Debouncer();
        _this.sizeRequests = new Map();
        _this.delayedUpdateSizes = new async_1.Debouncer();
        _this.onMount = function (layer) {
            _this.layer = layer;
        };
        _this.requestRedraw = function (element, request) {
            // tslint:disable:no-bitwise
            var flagsWithForAll = _this.redrawBatch.forAll | request;
            if (flagsWithForAll === _this.redrawBatch.forAll) {
                // forAll flags already include the request
                return;
            }
            var existing = _this.redrawBatch.requests.get(element.id);
            _this.redrawBatch.requests.set(element.id, existing | request);
            _this.delatedRedraw.call(_this.redrawElements);
            // tslint:enable:no-bitwise
        };
        _this.redrawElements = function () {
            var props = _this.props;
            _this.setState(function (state) { return ({
                elementStates: applyRedrawRequests(props.view, props.group, _this.redrawBatch, state.elementStates)
            }); });
        };
        _this.requestSizeUpdate = function (element, node) {
            _this.sizeRequests.set(element.id, { element: element, node: node });
            _this.delayedUpdateSizes.call(_this.recomputeQueuedSizes);
        };
        _this.recomputeQueuedSizes = function () {
            var batch = _this.sizeRequests;
            _this.sizeRequests = new Map();
            batch.forEach(function (_a) {
                var element = _a.element, node = _a.node;
                var clientWidth = node.clientWidth, clientHeight = node.clientHeight;
                element.setSize({ width: clientWidth, height: clientHeight });
            });
        };
        var _a = _this.props, view = _a.view, group = _a.group;
        _this.state = {
            elementStates: applyRedrawRequests(view, group, _this.redrawBatch, new Map())
        };
        return _this;
    }
    ElementLayer.prototype.render = function () {
        var _this = this;
        var _a = this.props, view = _a.view, style = _a.style;
        var elementStates = this.state.elementStates;
        var elementsToRender = [];
        for (var _i = 0, _b = view.model.elements; _i < _b.length; _i++) {
            var id = _b[_i].id;
            var state = elementStates.get(id);
            if (state) {
                elementsToRender.push(state);
            }
        }
        return React.createElement("div", { className: 'ontodia-element-layer', ref: this.onMount, style: style }, elementsToRender.map(function (state) {
            var overlayElement = (React.createElement(OverlayedElement, { key: state.element.id, state: state, view: view, onInvalidate: _this.requestRedraw, onResize: _this.requestSizeUpdate }));
            var elementDecorator = view._decorateElement(state.element);
            if (elementDecorator) {
                return (React.createElement("div", { key: state.element.id },
                    overlayElement,
                    elementDecorator));
            }
            return overlayElement;
        }));
    };
    ElementLayer.prototype.componentDidMount = function () {
        var _this = this;
        var view = this.props.view;
        this.listener.listen(view.model.events, 'changeCells', function () {
            _this.requestRedrawAll(RedrawFlags.None);
        });
        this.listener.listen(view.events, 'changeLanguage', function () {
            _this.requestRedrawAll(RedrawFlags.RecomputeTemplate);
        });
        this.listener.listen(view.events, 'changeHighlight', function () {
            _this.requestRedrawAll(RedrawFlags.RecomputeBlurred);
        });
        this.listener.listen(view.model.events, 'elementEvent', function (_a) {
            var data = _a.data;
            var invalidatesTemplate = data.changeData || data.changeExpanded || data.changeElementState;
            if (invalidatesTemplate) {
                _this.requestRedraw(invalidatesTemplate.source, RedrawFlags.RecomputeTemplate);
            }
            var invalidatesRender = data.changePosition || data.requestedRedraw;
            if (invalidatesRender) {
                _this.requestRedraw(invalidatesRender.source, RedrawFlags.Render);
            }
        });
        this.listener.listen(view.events, 'syncUpdate', function (_a) {
            var layer = _a.layer;
            if (layer === view_1.RenderingLayer.Element) {
                _this.delatedRedraw.runSynchronously();
            }
            else if (layer === view_1.RenderingLayer.ElementSize) {
                _this.delayedUpdateSizes.runSynchronously();
            }
        });
    };
    ElementLayer.prototype.componentWillReceiveProps = function (nextProps) {
        var _this = this;
        if (this.props.group !== nextProps.group) {
            this.setState(function (state) { return ({
                elementStates: applyRedrawRequests(nextProps.view, nextProps.group, _this.redrawBatch, state.elementStates)
            }); });
        }
    };
    ElementLayer.prototype.componentWillUnmount = function () {
        this.listener.stopListening();
        this.delatedRedraw.dispose();
        this.delayedUpdateSizes.dispose();
    };
    ElementLayer.prototype.requestRedrawAll = function (request) {
        // tslint:disable-next-line:no-bitwise
        this.redrawBatch.forAll |= request;
        this.delatedRedraw.call(this.redrawElements);
    };
    return ElementLayer;
}(React.Component));
exports.ElementLayer = ElementLayer;
function applyRedrawRequests(view, targetGroup, batch, previous) {
    var computed = new Map();
    for (var _i = 0, _a = view.model.elements; _i < _a.length; _i++) {
        var element = _a[_i];
        if (element.group !== targetGroup) {
            continue;
        }
        var elementId = element.id;
        if (previous.has(elementId)) {
            var state = previous.get(elementId);
            // tslint:disable:no-bitwise
            var request = (batch.requests.get(elementId) || RedrawFlags.None) | batch.forAll;
            if (request & RedrawFlags.Render) {
                state = {
                    element: element,
                    templateProps: (request & RedrawFlags.RecomputeTemplate) === RedrawFlags.RecomputeTemplate
                        ? computeTemplateProps(state.element, view) : state.templateProps,
                    blurred: (request & RedrawFlags.RecomputeBlurred) === RedrawFlags.RecomputeBlurred
                        ? computeIsBlurred(state.element, view) : state.blurred,
                };
            }
            computed.set(elementId, state);
            batch.requests.delete(elementId);
            // tslint:enable:no-bitwise
        }
        else {
            computed.set(element.id, {
                element: element,
                templateProps: computeTemplateProps(element, view),
                blurred: computeIsBlurred(element, view),
            });
        }
    }
    batch.forAll = RedrawFlags.None;
    return computed;
}
exports.ElementContextTypes = {
    ontodiaElement: react_1.PropTypes.anything,
};
var OverlayedElement = /** @class */ (function (_super) {
    tslib_1.__extends(OverlayedElement, _super);
    function OverlayedElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listener = new events_1.EventObserver();
        _this.disposed = false;
        _this.rerenderTemplate = function () {
            if (_this.disposed) {
                return;
            }
            _this.props.onInvalidate(_this.props.state.element, RedrawFlags.RecomputeTemplate);
        };
        _this.onMount = function (node) {
            if (!node) {
                return;
            }
            var _a = _this.props, state = _a.state, onResize = _a.onResize;
            onResize(state.element, node);
        };
        _this.onLoadOrErrorEvent = function () {
            var _a = _this.props, state = _a.state, onResize = _a.onResize;
            onResize(state.element, react_dom_1.findDOMNode(_this));
        };
        _this.onClick = function (e) {
            if (e.target instanceof HTMLElement && e.target.localName === 'a') {
                var anchor = e.target;
                var _a = _this.props, view = _a.view, state = _a.state;
                var clickIntent = e.target.getAttribute('data-iri-click-intent') === view_1.IriClickIntent.OpenEntityIri ?
                    view_1.IriClickIntent.OpenEntityIri : view_1.IriClickIntent.OpenOtherIri;
                view.onIriClick(decodeURI(anchor.href), state.element, clickIntent, e);
            }
        };
        _this.onDoubleClick = function (e) {
            e.preventDefault();
            e.stopPropagation();
            var _a = _this.props, view = _a.view, element = _a.state.element;
            view.model.history.execute(commands_1.setElementExpanded(element, !element.isExpanded));
        };
        return _this;
    }
    OverlayedElement.prototype.getChildContext = function () {
        var ontodiaElement = {
            element: this.props.state.element,
        };
        return { ontodiaElement: ontodiaElement };
    };
    OverlayedElement.prototype.render = function () {
        var _a = this.props.state, element = _a.element, blurred = _a.blurred;
        if (element.temporary) {
            return React.createElement("div", null);
        }
        var _b = element.position, _c = _b.x, x = _c === void 0 ? 0 : _c, _d = _b.y, y = _d === void 0 ? 0 : _d;
        var transform = "translate(" + x + "px," + y + "px)";
        // const angle = model.get('angle') || 0;
        // if (angle) { transform += `rotate(${angle}deg)`; }
        var className = ("ontodia-overlayed-element " + (blurred ? 'ontodia-overlayed-element--blurred' : ''));
        return React.createElement("div", { className: className, "data-element-id": element.id, style: { position: 'absolute', transform: transform }, tabIndex: 0, ref: this.onMount, 
            // resize element when child image loaded
            onLoad: this.onLoadOrErrorEvent, onError: this.onLoadOrErrorEvent, onClick: this.onClick, onDoubleClick: this.onDoubleClick },
            React.createElement(TemplatedElement, tslib_1.__assign({}, this.props)));
    };
    OverlayedElement.prototype.componentDidMount = function () {
        var _this = this;
        var _a = this.props, state = _a.state, view = _a.view;
        this.listener.listen(state.element.events, 'requestedFocus', function () {
            var element = react_dom_1.findDOMNode(_this);
            if (element) {
                element.focus();
            }
        });
        this.typesObserver = keyedObserver_1.observeElementTypes(view.model, 'changeLabel', this.rerenderTemplate);
        this.propertiesObserver = keyedObserver_1.observeProperties(view.model, 'changeLabel', this.rerenderTemplate);
        this.observeTypes();
    };
    OverlayedElement.prototype.componentWillUnmount = function () {
        this.listener.stopListening();
        this.typesObserver.stopListening();
        this.propertiesObserver.stopListening();
        this.disposed = true;
    };
    OverlayedElement.prototype.shouldComponentUpdate = function (nextProps) {
        return this.props.state !== nextProps.state;
    };
    OverlayedElement.prototype.componentDidUpdate = function () {
        this.observeTypes();
        this.props.onResize(this.props.state.element, react_dom_1.findDOMNode(this));
    };
    OverlayedElement.prototype.observeTypes = function () {
        var element = this.props.state.element;
        this.typesObserver.observe(element.data.types);
        this.propertiesObserver.observe(Object.keys(element.data.properties));
    };
    OverlayedElement.childContextTypes = exports.ElementContextTypes;
    return OverlayedElement;
}(React.Component));
var TemplatedElement = /** @class */ (function (_super) {
    tslib_1.__extends(TemplatedElement, _super);
    function TemplatedElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TemplatedElement.prototype.render = function () {
        var _a = this.props, state = _a.state, view = _a.view;
        var element = state.element, templateProps = state.templateProps;
        var templateClass = view.getElementTemplate(element.data.types);
        this.cachedTemplateClass = templateClass;
        this.cachedTemplateProps = templateProps;
        return React.createElement(templateClass, templateProps);
    };
    TemplatedElement.prototype.shouldComponentUpdate = function (nextProps) {
        var templateClass = nextProps.view.getElementTemplate(nextProps.state.element.data.types);
        return !(this.cachedTemplateClass === templateClass &&
            this.cachedTemplateProps === nextProps.state.templateProps);
    };
    return TemplatedElement;
}(React.Component));
function computeTemplateProps(model, view) {
    var types = model.data.types.length > 0
        ? view.getElementTypeString(model.data) : 'Thing';
    var label = view.formatLabel(model.data.label.values, model.iri);
    var _a = computeStyleFor(model, view), color = _a.color, icon = _a.icon;
    var propsAsList = computePropertyTable(model, view);
    return {
        elementId: model.id,
        data: model.data,
        iri: model.iri,
        types: types,
        label: label,
        color: color,
        iconUrl: icon,
        imgUrl: model.data.image,
        isExpanded: model.isExpanded,
        props: model.data.properties,
        propsAsList: propsAsList,
    };
}
function computePropertyTable(model, view) {
    if (!model.data.properties) {
        return [];
    }
    var propertyIris = Object.keys(model.data.properties);
    var propTable = propertyIris.map(function (key) {
        var property = view.model.createProperty(key);
        var name = view.formatLabel(property.label, key);
        return {
            id: key,
            name: name,
            property: model.data.properties[key],
        };
    });
    propTable.sort(function (a, b) {
        var aLabel = (a.name || a.id).toLowerCase();
        var bLabel = (b.name || b.id).toLowerCase();
        return aLabel.localeCompare(bLabel);
    });
    return propTable;
}
function computeStyleFor(model, view) {
    var _a = view.getTypeStyle(model.data.types), _b = _a.color, h = _b.h, c = _b.c, l = _b.l, icon = _a.icon;
    return {
        icon: icon,
        color: d3_color_1.hcl(h, c, l).toString(),
    };
}
function computeIsBlurred(element, view) {
    return view.highlighter && !view.highlighter(element);
}


/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__58__;

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__59__;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var events_1 = __webpack_require__(54);
var BatchingScheduler = /** @class */ (function () {
    function BatchingScheduler(waitingTime) {
        if (waitingTime === void 0) { waitingTime = 0; }
        this.waitingTime = waitingTime;
        this.useAnimationFrame = waitingTime === 0;
        this.runSynchronously = this.runSynchronously.bind(this);
    }
    BatchingScheduler.prototype.schedule = function () {
        if (typeof this.scheduled === 'undefined') {
            if (this.useAnimationFrame) {
                this.scheduled = requestAnimationFrame(this.runSynchronously);
            }
            else {
                this.scheduled = setTimeout(this.runSynchronously, this.waitingTime);
            }
        }
    };
    BatchingScheduler.prototype.runSynchronously = function () {
        var wasScheduled = this.cancelScheduledTimeout();
        if (wasScheduled) {
            this.run();
        }
    };
    BatchingScheduler.prototype.dispose = function () {
        this.cancelScheduledTimeout();
    };
    BatchingScheduler.prototype.cancelScheduledTimeout = function () {
        if (typeof this.scheduled !== 'undefined') {
            if (this.useAnimationFrame) {
                cancelAnimationFrame(this.scheduled);
            }
            else {
                clearTimeout(this.scheduled);
            }
            this.scheduled = undefined;
            return true;
        }
        return false;
    };
    return BatchingScheduler;
}());
exports.BatchingScheduler = BatchingScheduler;
var BufferingQueue = /** @class */ (function (_super) {
    tslib_1.__extends(BufferingQueue, _super);
    function BufferingQueue(onFetch, waitingTime) {
        if (waitingTime === void 0) { waitingTime = 200; }
        var _this = _super.call(this, waitingTime) || this;
        _this.onFetch = onFetch;
        _this.fetchingQueue = Object.create(null);
        return _this;
    }
    BufferingQueue.prototype.push = function (key) {
        this.fetchingQueue[key] = true;
        this.schedule();
    };
    BufferingQueue.prototype.clear = function () {
        this.fetchingQueue = Object.create(null);
    };
    BufferingQueue.prototype.run = function () {
        var _a = this, fetchingQueue = _a.fetchingQueue, onFetch = _a.onFetch;
        this.fetchingQueue = Object.create(null);
        onFetch(Object.keys(fetchingQueue));
    };
    return BufferingQueue;
}(BatchingScheduler));
exports.BufferingQueue = BufferingQueue;
var Debouncer = /** @class */ (function (_super) {
    tslib_1.__extends(Debouncer, _super);
    function Debouncer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Debouncer.prototype.call = function (callback) {
        this.callback = callback;
        this.schedule();
    };
    Debouncer.prototype.run = function () {
        var callback = this.callback;
        callback();
    };
    return Debouncer;
}(BatchingScheduler));
exports.Debouncer = Debouncer;
var Cancellation = /** @class */ (function () {
    function Cancellation() {
        this.source = new events_1.EventSource();
        this.aborted = false;
        this.signal = new (/** @class */ (function () {
            function class_1(parent) {
                this.parent = parent;
            }
            Object.defineProperty(class_1.prototype, "aborted", {
                get: function () { return this.parent.aborted; },
                enumerable: true,
                configurable: true
            });
            class_1.prototype.addEventListener = function (event, handler) {
                if (event !== 'abort') {
                    return;
                }
                if (this.parent.source) {
                    this.parent.source.on('abort', handler);
                }
                else {
                    handler();
                }
            };
            class_1.prototype.removeEventListener = function (event, handler) {
                if (event !== 'abort') {
                    return;
                }
                if (this.parent.source) {
                    this.parent.source.off('abort', handler);
                }
            };
            return class_1;
        }()))(this);
    }
    Cancellation.prototype.abort = function () {
        if (this.aborted) {
            return;
        }
        this.aborted = true;
        this.source.trigger('abort', undefined);
        this.source = undefined;
    };
    Cancellation.NEVER_SIGNAL = {
        aborted: false,
        addEventListener: function () { },
        removeEventListener: function () { },
    };
    return Cancellation;
}());
exports.Cancellation = Cancellation;
var CancelledError = /** @class */ (function (_super) {
    tslib_1.__extends(CancelledError, _super);
    function CancelledError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = CancelledError.name;
        Object.setPrototypeOf(_this, CancelledError.prototype);
        return _this;
    }
    return CancelledError;
}(Error));
exports.CancelledError = CancelledError;
function delay(timeout) {
    return new Promise(function (resolve) { return setTimeout(function () { return resolve(); }, timeout); });
}
exports.delay = delay;
function animateInterval(duration, onProgress, cancellation) {
    return new Promise(function (resolve) {
        var animationFrameId;
        var start;
        var animate = function (time) {
            if (cancellation && cancellation.signal.aborted) {
                return;
            }
            start = start || time;
            var timePassed = time - start;
            if (timePassed > duration) {
                timePassed = duration;
            }
            onProgress(timePassed / duration);
            if (timePassed < duration) {
                animationFrameId = requestAnimationFrame(animate);
            }
            else {
                resolve();
            }
        };
        cancellation.signal.addEventListener('abort', function () {
            cancelAnimationFrame(animationFrameId);
            resolve();
        });
        animationFrameId = requestAnimationFrame(animate);
    });
}
exports.animateInterval = animateInterval;
function easeInOutBezier(t) {
    if (t < 0) {
        return 0;
    }
    if (t > 1) {
        return 1;
    }
    return t * t * (3.0 - 2.0 * t);
}
exports.easeInOutBezier = easeInOutBezier;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes;
(function (PropTypes) {
    PropTypes.anything = function () { return null; };
})(PropTypes = exports.PropTypes || (exports.PropTypes = {}));


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var KeyedObserver = /** @class */ (function () {
    function KeyedObserver(subscribe) {
        this.subscribe = subscribe;
        this.observedKeys = new Map();
    }
    KeyedObserver.prototype.observe = function (keys) {
        if (keys.length === 0 && this.observedKeys.size === 0) {
            return;
        }
        var newObservedKeys = new Map();
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (newObservedKeys.has(key)) {
                continue;
            }
            var unsubscribe = this.observedKeys.get(key);
            if (!unsubscribe) {
                unsubscribe = this.subscribe(key);
            }
            newObservedKeys.set(key, unsubscribe);
        }
        this.observedKeys.forEach(function (unsubscribe, key) {
            if (!newObservedKeys.has(key)) {
                unsubscribe();
            }
        });
        this.observedKeys = newObservedKeys;
    };
    KeyedObserver.prototype.stopListening = function () {
        this.observe([]);
    };
    return KeyedObserver;
}());
exports.KeyedObserver = KeyedObserver;
function observeElementTypes(model, event, listener) {
    return new KeyedObserver(function (key) {
        var type = model.getClass(key);
        if (type) {
            type.events.on(event, listener);
            return function () { return type.events.off(event, listener); };
        }
        return undefined;
    });
}
exports.observeElementTypes = observeElementTypes;
function observeProperties(model, event, listener) {
    return new KeyedObserver(function (key) {
        var property = model.getProperty(key);
        if (property) {
            property.events.on(event, listener);
            return function () { return property.events.off(event, listener); };
        }
        return undefined;
    });
}
exports.observeProperties = observeProperties;
function observeLinkTypes(model, event, listener) {
    return new KeyedObserver(function (key) {
        var type = model.createLinkType(key);
        if (type) {
            type.events.on(event, listener);
            return function () { return type.events.off(event, listener); };
        }
        return undefined;
    });
}
exports.observeLinkTypes = observeLinkTypes;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var model_1 = __webpack_require__(47);
var geometry_1 = __webpack_require__(56);
var history_1 = __webpack_require__(64);
var RestoreGeometry = /** @class */ (function () {
    function RestoreGeometry(elementState, linkState) {
        this.elementState = elementState;
        this.linkState = linkState;
        this.title = 'Move elements and links';
    }
    RestoreGeometry.capture = function (model) {
        return RestoreGeometry.captureElementsAndLinks(model.elements, model.links);
    };
    RestoreGeometry.captureElementsAndLinks = function (elements, links) {
        return new RestoreGeometry(elements.map(function (element) { return ({ element: element, position: element.position }); }), links.map(function (link) { return ({ link: link, vertices: link.vertices }); }));
    };
    RestoreGeometry.prototype.hasChanges = function () {
        return this.elementState.length > 0 || this.linkState.length > 0;
    };
    RestoreGeometry.prototype.filterOutUnchanged = function () {
        return new RestoreGeometry(this.elementState.filter(function (_a) {
            var element = _a.element, position = _a.position;
            return !geometry_1.Vector.equals(element.position, position);
        }), this.linkState.filter(function (_a) {
            var link = _a.link, vertices = _a.vertices;
            return !geometry_1.isPolylineEqual(link.vertices, vertices);
        }));
    };
    RestoreGeometry.prototype.invoke = function () {
        var previous = RestoreGeometry.captureElementsAndLinks(this.elementState.map(function (state) { return state.element; }), this.linkState.map(function (state) { return state.link; }));
        // restore in reverse order to workaround position changed event
        // handling in EmbeddedLayer inside nested elements
        // (child's position change causes group to resize or move itself)
        for (var _i = 0, _a = tslib_1.__spreadArrays(this.elementState).reverse(); _i < _a.length; _i++) {
            var _b = _a[_i], element = _b.element, position = _b.position;
            element.setPosition(position);
        }
        for (var _c = 0, _d = this.linkState; _c < _d.length; _c++) {
            var _e = _d[_c], link = _e.link, vertices = _e.vertices;
            link.setVertices(vertices);
        }
        return previous;
    };
    return RestoreGeometry;
}());
exports.RestoreGeometry = RestoreGeometry;
function restoreCapturedLinkGeometry(link) {
    var vertices = link.vertices;
    return history_1.Command.create('Change link vertices', function () {
        var capturedInverse = restoreCapturedLinkGeometry(link);
        link.setVertices(vertices);
        return capturedInverse;
    });
}
exports.restoreCapturedLinkGeometry = restoreCapturedLinkGeometry;
function setElementExpanded(element, expanded) {
    var title = expanded ? 'Expand element' : 'Collapse element';
    return history_1.Command.create(title, function () {
        element.setExpanded(expanded);
        return setElementExpanded(element, !expanded);
    });
}
exports.setElementExpanded = setElementExpanded;
function changeLinkTypeVisibility(params) {
    var linkType = params.linkType, visible = params.visible, showLabel = params.showLabel, preventLoading = params.preventLoading;
    return history_1.Command.create('Change link type visibility', function () {
        var previousVisible = linkType.visible;
        var previousShowLabel = linkType.showLabel;
        linkType.setVisibility({ visible: visible, showLabel: showLabel, preventLoading: preventLoading });
        return changeLinkTypeVisibility({
            linkType: linkType,
            visible: previousVisible,
            showLabel: previousShowLabel,
            preventLoading: preventLoading,
        });
    });
}
exports.changeLinkTypeVisibility = changeLinkTypeVisibility;
function setElementData(model, target, data) {
    var elements = model.elements.filter(function (el) { return el.iri === target; });
    var previous = elements.length > 0 ? elements[0].data : undefined;
    return history_1.Command.create('Set element data', function () {
        for (var _i = 0, _a = model.elements.filter(function (el) { return el.iri === target; }); _i < _a.length; _i++) {
            var element = _a[_i];
            element.setData(data);
        }
        return setElementData(model, data.id, previous);
    });
}
exports.setElementData = setElementData;
function setLinkData(model, oldData, newData) {
    if (!model_1.sameLink(oldData, newData)) {
        throw new Error('Cannot change typeId, sourceId or targetId when changing link data');
    }
    return history_1.Command.create('Set link data', function () {
        for (var _i = 0, _a = model.links; _i < _a.length; _i++) {
            var link = _a[_i];
            if (model_1.sameLink(link.data, oldData)) {
                link.setData(newData);
            }
        }
        return setLinkData(model, newData, oldData);
    });
}
exports.setLinkData = setLinkData;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = __webpack_require__(54);
var Command;
(function (Command) {
    function create(title, action) {
        return { title: title, invoke: action };
    }
    Command.create = create;
    function effect(title, body) {
        var perform = {
            title: title,
            invoke: function () {
                body();
                return skip;
            }
        };
        var skip = {
            title: 'Skipped effect: ' + title,
            invoke: function () { return perform; },
        };
        return perform;
    }
    Command.effect = effect;
})(Command = exports.Command || (exports.Command = {}));
var NonRememberingHistory = /** @class */ (function () {
    function NonRememberingHistory() {
        this.source = new events_1.EventSource();
        this.events = this.source;
        this.undoStack = [];
        this.redoStack = [];
        this.storeBatch = function () { };
        this.discardBatch = function () { };
    }
    NonRememberingHistory.prototype.reset = function () {
        this.source.trigger('historyChanged', { hasChanges: false });
    };
    NonRememberingHistory.prototype.undo = function () {
        throw new Error('Undo is unsupported');
    };
    NonRememberingHistory.prototype.redo = function () {
        throw new Error('Redo is unsupported');
    };
    NonRememberingHistory.prototype.execute = function (command) {
        command.invoke();
        this.source.trigger('historyChanged', { hasChanges: true });
    };
    NonRememberingHistory.prototype.registerToUndo = function (command) {
        this.source.trigger('historyChanged', { hasChanges: true });
    };
    NonRememberingHistory.prototype.startBatch = function (title) {
        return {
            history: this,
            store: this.storeBatch,
            discard: this.discardBatch,
        };
    };
    return NonRememberingHistory;
}());
exports.NonRememberingHistory = NonRememberingHistory;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var d3_color_1 = __webpack_require__(59);
var lodash_1 = __webpack_require__(66);
var defaultTypeStyles_1 = __webpack_require__(67);
var defaultLinkStyles_1 = __webpack_require__(77);
var templates_1 = __webpack_require__(43);
var blankNodes_1 = __webpack_require__(78);
var utils_1 = __webpack_require__(48);
var events_1 = __webpack_require__(54);
var geometry_1 = __webpack_require__(56);
var linkRouter_1 = __webpack_require__(80);
var IriClickIntent;
(function (IriClickIntent) {
    IriClickIntent["JumpToEntity"] = "jumpToEntity";
    IriClickIntent["OpenEntityIri"] = "openEntityIri";
    IriClickIntent["OpenOtherIri"] = "openOtherIri";
})(IriClickIntent = exports.IriClickIntent || (exports.IriClickIntent = {}));
var RenderingLayer;
(function (RenderingLayer) {
    RenderingLayer[RenderingLayer["Element"] = 1] = "Element";
    RenderingLayer[RenderingLayer["ElementSize"] = 2] = "ElementSize";
    RenderingLayer[RenderingLayer["PaperArea"] = 3] = "PaperArea";
    RenderingLayer[RenderingLayer["Link"] = 4] = "Link";
    RenderingLayer[RenderingLayer["Editor"] = 5] = "Editor";
    RenderingLayer[RenderingLayer["FirstToUpdate"] = 1] = "FirstToUpdate";
    RenderingLayer[RenderingLayer["LastToUpdate"] = 5] = "LastToUpdate";
})(RenderingLayer = exports.RenderingLayer || (exports.RenderingLayer = {}));
var WidgetAttachment;
(function (WidgetAttachment) {
    WidgetAttachment[WidgetAttachment["Viewport"] = 1] = "Viewport";
    WidgetAttachment[WidgetAttachment["OverElements"] = 2] = "OverElements";
    WidgetAttachment[WidgetAttachment["OverLinks"] = 3] = "OverLinks";
})(WidgetAttachment = exports.WidgetAttachment || (exports.WidgetAttachment = {}));
var DiagramView = /** @class */ (function () {
    function DiagramView(model, options) {
        if (options === void 0) { options = {}; }
        this.model = model;
        this.options = options;
        this.listener = new events_1.EventObserver();
        this.source = new events_1.EventSource();
        this.events = this.source;
        this.disposed = false;
        this.colorSeed = 0x0BADBEEF;
        this._language = 'en';
        this.linkTemplates = new Map();
        this.routings = new Map();
        this.resolveTypeStyle = options.typeStyleResolver || defaultTypeStyles_1.DefaultTypeStyleBundle;
        this.resolveLinkTemplate = options.linkTemplateResolver || defaultLinkStyles_1.DefaultLinkTemplateBundle;
        this.resolveElementTemplate = options.elementTemplateResolver || templates_1.DefaultElementTemplateBundle;
        this.initRouting();
    }
    DiagramView.prototype.initRouting = function () {
        var _this = this;
        this.router = this.options.linkRouter || new linkRouter_1.DefaultLinkRouter();
        this.updateRoutings();
        this.listener.listen(this.model.events, 'changeCells', function () { return _this.updateRoutings(); });
        this.listener.listen(this.model.events, 'linkEvent', function (_a) {
            var key = _a.key, data = _a.data;
            if (data.changeVertices) {
                _this.updateRoutings();
            }
        });
        this.listener.listen(this.model.events, 'elementEvent', function (_a) {
            var key = _a.key, data = _a.data;
            if (data.changePosition || data.changeSize) {
                _this.updateRoutings();
            }
        });
    };
    DiagramView.prototype.updateRoutings = function () {
        var previousRoutes = this.routings;
        var computedRoutes = this.router.route(this.model);
        previousRoutes.forEach(function (previous, linkId) {
            var computed = computedRoutes.get(linkId);
            if (computed && sameRoutedLink(previous, computed)) {
                // replace new route with the old one if they're equal
                // so other components can use a simple reference equality checks
                computedRoutes.set(linkId, previous);
            }
        });
        this.routings = computedRoutes;
        this.source.trigger('updateRoutings', { source: this, previous: previousRoutes });
    };
    DiagramView.prototype.getRoutings = function () {
        return this.routings;
    };
    DiagramView.prototype.getRouting = function (linkId) {
        return this.routings.get(linkId);
    };
    DiagramView.prototype.getLanguage = function () { return this._language; };
    DiagramView.prototype.setLanguage = function (value) {
        if (!value) {
            throw new Error('Cannot set empty language.');
        }
        var previous = this._language;
        if (previous === value) {
            return;
        }
        this._language = value;
        this.source.trigger('changeLanguage', { source: this, previous: previous });
    };
    DiagramView.prototype.getLinkTemplates = function () {
        return this.linkTemplates;
    };
    DiagramView.prototype.performSyncUpdate = function () {
        for (var layer = RenderingLayer.FirstToUpdate; layer <= RenderingLayer.LastToUpdate; layer++) {
            this.source.trigger('syncUpdate', { layer: layer });
        }
    };
    DiagramView.prototype.onIriClick = function (iri, element, clickIntent, event) {
        event.persist();
        event.preventDefault();
        var onIriClick = this.options.onIriClick;
        if (onIriClick) {
            onIriClick({ iri: iri, element: element, clickIntent: clickIntent, originalEvent: event });
        }
    };
    DiagramView.prototype.setPaperWidget = function (widget) {
        var _a;
        var key = widget.key, element = widget.widget, attachment = widget.attachment;
        var widgets = (_a = {}, _a[key] = element ? { element: element, attachment: attachment } : undefined, _a);
        this.source.trigger('updateWidgets', { widgets: widgets });
    };
    DiagramView.prototype.setHandlerForNextDropOnPaper = function (handler) {
        this.dropOnPaperHandler = handler;
    };
    DiagramView.prototype._tryHandleDropOnPaper = function (e) {
        var dropOnPaperHandler = this.dropOnPaperHandler;
        if (dropOnPaperHandler) {
            this.dropOnPaperHandler = undefined;
            dropOnPaperHandler(e);
            return true;
        }
        return false;
    };
    DiagramView.prototype.selectLabel = function (labels, language) {
        var targetLanguage = typeof language === 'undefined' ? this.getLanguage() : language;
        var _a = this.options.selectLabelLanguage, selectLabelLanguage = _a === void 0 ? defaultSelectLabel : _a;
        return selectLabelLanguage(labels, targetLanguage);
    };
    DiagramView.prototype.formatLabel = function (labels, fallbackIri, language) {
        var label = this.selectLabel(labels, language);
        return resolveLabel(label, fallbackIri);
    };
    DiagramView.prototype.getElementTypeString = function (elementModel) {
        var _this = this;
        return elementModel.types.map(function (typeId) {
            var type = _this.model.createClass(typeId);
            return _this.formatLabel(type.label, type.id);
        }).sort().join(', ');
    };
    DiagramView.prototype.getTypeStyle = function (types) {
        types.sort();
        var customStyle = this.resolveTypeStyle(types);
        var icon = customStyle ? customStyle.icon : undefined;
        var color;
        if (customStyle && customStyle.color) {
            color = d3_color_1.hcl(customStyle.color);
        }
        else {
            var hue = getHueFromClasses(types, this.colorSeed);
            color = { h: hue, c: 40, l: 75 };
        }
        return { icon: icon, color: color };
    };
    DiagramView.prototype.formatIri = function (iri) {
        if (blankNodes_1.isEncodedBlank(iri)) {
            return '(blank node)';
        }
        return "<" + iri + ">";
    };
    DiagramView.prototype.getElementTemplate = function (types) {
        return this.resolveElementTemplate(types) || templates_1.StandardTemplate;
    };
    DiagramView.prototype.createLinkTemplate = function (linkType) {
        var existingTemplate = this.linkTemplates.get(linkType.id);
        if (existingTemplate) {
            return existingTemplate;
        }
        var template = {};
        var result = this.resolveLinkTemplate(linkType.id);
        if (result) {
            template = lodash_1.cloneDeep(result);
        }
        fillLinkTemplateDefaults(template);
        this.linkTemplates.set(linkType.id, template);
        this.source.trigger('changeLinkTemplates', {});
        return template;
    };
    DiagramView.prototype.dispose = function () {
        if (this.disposed) {
            return;
        }
        this.source.trigger('dispose', {});
        this.listener.stopListening();
        this.disposed = true;
    };
    Object.defineProperty(DiagramView.prototype, "highlighter", {
        get: function () { return this._highlighter; },
        enumerable: true,
        configurable: true
    });
    DiagramView.prototype.setHighlighter = function (value) {
        var previous = this._highlighter;
        if (previous === value) {
            return;
        }
        this._highlighter = value;
        this.source.trigger('changeHighlight', { source: this, previous: previous });
    };
    DiagramView.prototype._setElementDecorator = function (decorator) {
        this._elementDecorator = decorator;
    };
    DiagramView.prototype._decorateElement = function (element) {
        return this._elementDecorator(element);
    };
    return DiagramView;
}());
exports.DiagramView = DiagramView;
function sameRoutedLink(a, b) {
    return (a.linkId === b.linkId &&
        a.labelTextAnchor === b.labelTextAnchor &&
        geometry_1.isPolylineEqual(a.vertices, b.vertices));
}
function getHueFromClasses(classes, seed) {
    var hash = seed;
    for (var _i = 0, classes_1 = classes; _i < classes_1.length; _i++) {
        var name_1 = classes_1[_i];
        hash = utils_1.hashFnv32a(name_1, hash);
    }
    var MAX_INT32 = 0x7fffffff;
    return 360 * ((hash === undefined ? 0 : hash) / MAX_INT32);
}
function fillLinkTemplateDefaults(template) {
    var defaults = {
        markerTarget: { d: 'M0,0 L0,8 L9,4 z', width: 9, height: 8, fill: 'black' },
    };
    lodash_1.defaultsDeep(template, defaults);
    if (!template.renderLink) {
        template.renderLink = function () { return ({}); };
    }
}
function defaultSelectLabel(texts, language) {
    if (texts.length === 0) {
        return undefined;
    }
    var defaultValue;
    var englishValue;
    for (var _i = 0, texts_1 = texts; _i < texts_1.length; _i++) {
        var text = texts_1[_i];
        if (text.language === language) {
            return text;
        }
        else if (text.language === '') {
            defaultValue = text;
        }
        else if (text.language === 'en') {
            englishValue = text;
        }
    }
    return (defaultValue !== undefined ? defaultValue :
        englishValue !== undefined ? englishValue :
            texts[0]);
}
function resolveLabel(label, fallbackIri) {
    if (label) {
        return label.value;
    }
    return utils_1.getUriLocalName(fallbackIri) || fallbackIri;
}


/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__66__;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var classIcon = __webpack_require__(68);
var objectPropertyIcon = __webpack_require__(69);
var datatypePropertyIcon = __webpack_require__(70);
var personIcon = __webpack_require__(71);
var countryIcon = __webpack_require__(72);
var organizationIcon = __webpack_require__(73);
var locationIcon = __webpack_require__(74);
var eventIcon = __webpack_require__(75);
var objectIcon = __webpack_require__(76);
exports.DefaultTypeStyleBundle = function (types) {
    if (types.indexOf('http://www.w3.org/2002/07/owl#Class') !== -1 ||
        types.indexOf('http://www.w3.org/2000/01/rdf-schema#Class') !== -1) {
        return { color: '#eaac77', icon: classIcon };
    }
    else if (types.indexOf('http://www.w3.org/2002/07/owl#ObjectProperty') !== -1) {
        return { color: '#34c7f3', icon: objectPropertyIcon };
    }
    else if (types.indexOf('http://www.w3.org/2002/07/owl#DatatypeProperty') !== -1) {
        return { color: '#34c7f3', icon: datatypePropertyIcon };
    }
    else if (types.indexOf('http://xmlns.com/foaf/0.1/Person') !== -1 ||
        types.indexOf('http://www.wikidata.org/entity/Q5') !== -1) {
        return { color: '#eb7777', icon: personIcon };
    }
    else if (types.indexOf('http://www.wikidata.org/entity/Q6256') !== -1) {
        return { color: '#77ca98', icon: countryIcon };
    }
    else if (types.indexOf('http://schema.org/Organization') !== -1 ||
        types.indexOf('http://dbpedia.org/ontology/Organisation') !== -1 ||
        types.indexOf('http://xmlns.com/foaf/0.1/Organization') !== -1 ||
        types.indexOf('http://www.wikidata.org/entity/Q43229') !== -1) {
        return { color: '#77ca98', icon: organizationIcon };
    }
    else if (types.indexOf('http://www.wikidata.org/entity/Q618123') !== -1) {
        return { color: '#bebc71', icon: locationIcon };
    }
    else if (types.indexOf('http://www.wikidata.org/entity/Q1190554') !== -1) {
        return { color: '#b4b1fb', icon: eventIcon };
    }
    else if (types.indexOf('http://www.wikidata.org/entity/Q488383') !== -1) {
        return { color: '#53ccb2', icon: objectIcon };
    }
    else {
        return undefined;
    }
};


/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAyNiAyNiI+CiAgICA8dGV4dCB4PSIzIiB5PSIyMiIgY2xhc3M9InRleHQiIGZpbGw9IiNlYWFjNzciCiAgICAgICAgc3R5bGU9ImZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUnLCAnSGVsdmV0aWNhJywgJ0FyaWFsJywgc2Fucy1zZXJpZjsgZm9udC1zaXplOiAyNnB4OyBmb250LXdlaWdodDogYm9sZDsiPgogICAgICAgIEMKICAgIDwvdGV4dD4KPC9zdmc+Cg=="

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAyNiAyNiI+CiAgICA8dGV4dCB4PSIwIiB5PSIyMCIgY2xhc3M9InRleHQiIGZpbGw9IiMzNGM3ZjMiCiAgICAgICAgc3R5bGU9ImZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUnLCAnSGVsdmV0aWNhJywgJ0FyaWFsJywgc2Fucy1zZXJpZjsgZm9udC1zaXplOiAxOHB4OyBmb250LXdlaWdodDogYm9sZDsiPgogICAgICAgIE9QCiAgICA8L3RleHQ+Cjwvc3ZnPgo="

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAyNiAyNiI+CiAgICA8dGV4dCB4PSIwIiB5PSIyMCIgY2xhc3M9InRleHQiIGZpbGw9IiMzNGM3ZjMiCiAgICAgICAgc3R5bGU9ImZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUnLCAnSGVsdmV0aWNhJywgJ0FyaWFsJywgc2Fucy1zZXJpZjsgZm9udC1zaXplOiAxOHB4OyBmb250LXdlaWdodDogYm9sZDsiPgogICAgICAgIERQCiAgICA8L3RleHQ+Cjwvc3ZnPgo="

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzNTAgMzUwIj4KCTxwYXRoIGZpbGw9IiNlYjc3NzciIGQ9Ik0xNzUsMTcxLjE3M2MzOC45MTQsMCw3MC40NjMtMzguMzE4LDcwLjQ2My04NS41ODZDMjQ1LjQ2MywzOC4zMTgsMjM1LjEwNSwwLDE3NSwwcy03MC40NjUsMzguMzE4LTcwLjQ2NSw4NS41ODcKCQlDMTA0LjUzNSwxMzIuODU1LDEzNi4wODQsMTcxLjE3MywxNzUsMTcxLjE3M3oiLz4KCTxwYXRoIGZpbGw9IiNlYjc3NzciIGQ9Ik00MS45MDksMzAxLjg1M0M0MS44OTcsMjk4Ljk3MSw0MS44ODUsMzAxLjA0MSw0MS45MDksMzAxLjg1M0w0MS45MDksMzAxLjg1M3oiLz4KCTxwYXRoIGZpbGw9IiNlYjc3NzciIGQ9Ik0zMDguMDg1LDMwNC4xMDRDMzA4LjEyMywzMDMuMzE1LDMwOC4wOTgsMjk4LjYzLDMwOC4wODUsMzA0LjEwNEwzMDguMDg1LDMwNC4xMDR6Ii8+Cgk8cGF0aCBmaWxsPSIjZWI3Nzc3IiBkPSJNMzA3LjkzNSwyOTguMzk3Yy0xLjMwNS04Mi4zNDItMTIuMDU5LTEwNS44MDUtOTQuMzUyLTEyMC42NTdjMCwwLTExLjU4NCwxNC43NjEtMzguNTg0LDE0Ljc2MQoJCXMtMzguNTg2LTE0Ljc2MS0zOC41ODYtMTQuNzYxYy04MS4zOTUsMTQuNjktOTIuODAzLDM3LjgwNS05NC4zMDMsMTE3Ljk4MmMtMC4xMjMsNi41NDctMC4xOCw2Ljg5MS0wLjIwMiw2LjEzMQoJCWMwLjAwNSwxLjQyNCwwLjAxMSw0LjA1OCwwLjAxMSw4LjY1MWMwLDAsMTkuNTkyLDM5LjQ5NiwxMzMuMDgsMzkuNDk2YzExMy40ODYsMCwxMzMuMDgtMzkuNDk2LDEzMy4wOC0zOS40OTYKCQljMC0yLjk1MSwwLjAwMi01LjAwMywwLjAwNS02LjM5OUMzMDguMDYyLDMwNC41NzUsMzA4LjAxOCwzMDMuNjY0LDMwNy45MzUsMjk4LjM5N3oiLz4KPC9zdmc+Cg=="

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj4KICAgIDxwYXRoIGZpbGw9IiM3N2NhOTgiIGQ9Ik00NzIuOTI4LDM0Ljc1MmMtNC40MTYtMy4wMDgtMTAuMDE2LTMuNTUyLTE0Ljk0NC0xLjZjLTEuMDI0LDAuNDE2LTEwNi44OCw0Mi4wNDgtMTk1LjE2OCwwLjM4NAoJCQlDMTg2LjcyLTIuNDMyLDEwMi45MTIsMTQuNCw2NCwyNS43NlYxNmMwLTguODMyLTcuMTY4LTE2LTE2LTE2Yy04LjgzMiwwLTE2LDcuMTY4LTE2LDE2djMydjI1NnYxOTJjMCw4LjgzMiw3LjE2OCwxNiwxNiwxNgoJCQljOC44MzIsMCwxNi03LjE2OCwxNi0xNlYzMTUuMzI4YzI4LjM4NC05LjE4NCwxMTIuNjA4LTMxLjEzNiwxODUuMTg0LDMuMTM2YzM0LjU5MiwxNi4zNTIsNzAuNzg0LDIxLjc5MiwxMDMuNjQ4LDIxLjc5MgoJCQljNjMuMiwwLDExNC4wMTYtMjAuMTI4LDExNy4xODQtMjEuNDA4YzYuMDE2LTIuNDY0LDkuOTg0LTguMzIsOS45ODQtMTQuODQ4VjQ4QzQ4MCw0Mi42ODgsNDc3LjM0NCwzNy43MjgsNDcyLjkyOCwzNC43NTJ6Ii8+Cjwvc3ZnPgo="

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj4KICAgIDxwYXRoIGZpbGw9IiM3N2NhOTgiIGQ9Ik0xNTUsMEgxNUM2LjcxNiwwLDAsNi43MTYsMCwxNXYzNWgxNzBWMTVDMTcwLDYuNzE2LDE2My4yODQsMCwxNTUsMHoiLz4KICAgIDxwYXRoIGZpbGw9IiM3N2NhOTgiIGQ9Ik01MDQuNDY0LDE0Mi45ODljLTQuNjYyLTIuNjc0LTEwLjM5Ny0yLjY1MS0xNS4wMzYsMC4wNjNMMzQxLDIyOS44NTJWMTU2YzAtNS4zNzQtMi44NzUtMTAuMzM3LTcuNTM2LTEzLjAxMQoJCQljLTQuNjYyLTIuNjc0LTEwLjM5Ny0yLjY1MS0xNS4wMzYsMC4wNjNMMTcwLDIyOS44NTJWODBIMHY0MTdjMCw4LjI4NCw2LjcxNiwxNSwxNSwxNWg0ODJjOC4yODQsMCwxNS02LjcxNiwxNS0xNVYxNTYKCQkJQzUxMiwxNTAuNjI2LDUwOS4xMjUsMTQ1LjY2Myw1MDQuNDY0LDE0Mi45ODl6IE0yMzAsNDA2LjVjMCw4LjI4NC02LjcxNiwxNS0xNSwxNWgtNjBjLTguMjg0LDAtMTUtNi43MTYtMTUtMTV2LTYwCgkJCWMwLTguMjg0LDYuNzE2LTE1LDE1LTE1aDYwYzguMjg0LDAsMTUsNi43MTYsMTUsMTVWNDA2LjV6IE00MDEsNDA2LjVjMCw4LjI4NC02LjcxNiwxNS0xNSwxNWgtNjBjLTguMjg0LDAtMTUtNi43MTYtMTUtMTV2LTYwCgkJCWMwLTguMjg0LDYuNzE2LTE1LDE1LTE1aDYwYzguMjg0LDAsMTUsNi43MTYsMTUsMTVWNDA2LjV6Ii8+Cjwvc3ZnPgo="

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI0Ny44MjVweCIgaGVpZ2h0PSI0Ny44MjVweCIgdmlld0JveD0iMCAwIDQ3LjgyNSA0Ny44MjUiPgogICAgPHBhdGggZmlsbD0iI2JlYmM3MSIgZD0iTTM2LjQzOSwxMi42NDZjMC02LjkxOS01LjYwOC0xMi41MjctMTIuNTI4LTEyLjUyN1MxMS4zODQsNS43MjcsMTEuMzg0LDEyLjY0NmMwLDkuOTEzLDEyLjUyNywyNC41ODIsMTIuNTI3LDI0LjU4MgoJCQkJUzM2LjQzOSwyMi41MDgsMzYuNDM5LDEyLjY0NnogTTE3LjczMywxMS44OThjMC0zLjQxMywyLjc2Ny02LjE3OSw2LjE3OS02LjE3OXM2LjE3OSwyLjc2Niw2LjE3OSw2LjE3OQoJCQkJYzAsMy40MTMtMi43NjcsNi4xNzktNi4xNzksNi4xNzlTMTcuNzMzLDE1LjMxMSwxNy43MzMsMTEuODk4eiIvPgogICAgPGNpcmNsZSBmaWxsPSIjYmViYzcxIiBjeD0iMjMuOTExIiBjeT0iMTEuODk4IiByPSIzLjAzOCIvPgogICAgPHBhdGggZmlsbD0iI2JlYmM3MSIgZD0iTTMwLjk5NCwzMi44N2MtMS4wMjEsMS40NzYtMS45NzksMi43NjEtMi43NzcsMy43OTNjNy45MTYsMC40NzYsMTMuMTA0LDIuMTg1LDE1LjAzNCwzLjQ1NgoJCQkJYy0yLjI2MSwxLjQ5MS04Ljk3OSwzLjU4Ny0xOS4zMzgsMy41ODdjLTEwLjM1OCwwLTE3LjA3Ny0yLjA5Ny0xOS4zMzgtMy41ODdjMS45My0xLjI3MSw3LjExNC0yLjk3OSwxNS4wMjItMy40NTUKCQkJCWMtMC44LTEuMDMyLTEuNzU5LTIuMzE2LTIuNzgxLTMuNzkyQzcuMDc1LDMzLjgzMSwwLDM2LjcxMywwLDQwLjExOGMwLDQuMTksMTAuNzA3LDcuNTg4LDIzLjkxMyw3LjU4OAoJCQkJYzEzLjIwNywwLDIzLjkxMi0zLjM5NiwyMy45MTItNy41ODhDNDcuODI3LDM2LjcxMSw0MC43NDQsMzMuODI4LDMwLjk5NCwzMi44N3oiLz4KPC9zdmc+Cg=="

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI5Ny40NzNweCIgaGVpZ2h0PSI5Ny40NzNweCIgdmlld0JveD0iMCAwIDk3LjQ3MyA5Ny40NzMiPgoJPHJlY3QgZmlsbD0iI2I0YjFmYiIgeD0iNDEuNTY5IiB5PSI0Ny43NTMiIHdpZHRoPSIxNC4zMzMiIGhlaWdodD0iMTQuMzMzIi8+Cgk8cmVjdCBmaWxsPSIjYjRiMWZiIiB4PSI0MS41NjkiIHk9IjY3Ljc1NCIgd2lkdGg9IjE0LjMzMyIgaGVpZ2h0PSIxNC4zMzIiLz4KCTxyZWN0IGZpbGw9IiNiNGIxZmIiIHg9IjE4LjU2OSIgeT0iNjcuNzU0IiB3aWR0aD0iMTQuMzMzIiBoZWlnaHQ9IjE0LjMzMiIvPgoJPHJlY3QgZmlsbD0iI2I0YjFmYiIgeD0iMTguNTY5IiB5PSI0Ny43NTMiIHdpZHRoPSIxNC4zMzMiIGhlaWdodD0iMTQuMzMzIi8+Cgk8cGF0aCBmaWxsPSIjYjRiMWZiIiBkPSJNOTUuNDcyLDE0LjQ2Nkg4NC40MjdWMi43MDFjMC0xLjEwNC0wLjg5Ni0yLTItMkg2NS44MTFjLTEuMTA0LDAtMiwwLjg5Ni0yLDJ2MTEuNzY1SDMzLjY2MlYyLjcwMWMwLTEuMTA0LTAuODk2LTItMi0yCgkJCQlIMTUuMDQ1Yy0xLjEwNCwwLTIsMC44OTYtMiwydjExLjc2NUgyYy0xLjEwNCwwLTIsMC44OTYtMiwydjc4LjMwNWMwLDEuMTA0LDAuODk2LDIsMiwyaDkzLjQ3M2MxLjEwNCwwLDItMC44OTYsMi0yVjE2LjQ2NgoJCQkJQzk3LjQ3MiwxNS4zNjIsOTYuNTc2LDE0LjQ2Niw5NS40NzIsMTQuNDY2eiBNNjkuNjQ1LDguMDM3YzAtMC44MjgsMC42NzItMS41LDEuNS0xLjVoNS45NDdjMC44MjksMCwxLjUsMC42NzIsMS41LDEuNXYyMC4zNAoJCQkJYzAsMC44MjgtMC42NzEsMS41LTEuNSwxLjVoLTUuOTQ3Yy0wLjgyOCwwLTEuNS0wLjY3Mi0xLjUtMS41VjguMDM3eiBNMTguODgsOC4wMzdjMC0wLjgyOCwwLjY3MS0xLjUsMS41LTEuNWg1Ljk0NwoJCQkJYzAuODI5LDAsMS41LDAuNjcyLDEuNSwxLjV2MjAuMzRjMCwwLjgyOC0wLjY3MSwxLjUtMS41LDEuNUgyMC4zOGMtMC44MjksMC0xLjUtMC42NzItMS41LTEuNVY4LjAzN3ogTTg3LjA2OCw4NC45MDIKCQkJCWMwLDAuODI4LTAuNjcsMS41LTEuNSwxLjVIMTEuOTAzYy0wLjgyOSwwLTEuNS0wLjY3Mi0xLjUtMS41di00MGMwLTAuODI4LDAuNjcxLTEuNSwxLjUtMS41aDczLjY2NmMwLjgzLDAsMS41LDAuNjcyLDEuNSwxLjUKCQkJCVY4NC45MDJ6Ii8+Cgk8cmVjdCBmaWxsPSIjYjRiMWZiIiB4PSI2NC41NjgiIHk9IjQ3Ljc1MyIgd2lkdGg9IjE0LjMzNCIgaGVpZ2h0PSIxNC4zMzMiLz4KCTxyZWN0IGZpbGw9IiNiNGIxZmIiIHg9IjY0LjU2OCIgeT0iNjcuNzU0IiB3aWR0aD0iMTQuMzM0IiBoZWlnaHQ9IjE0LjMzMiIvPgo8L3N2Zz4K"

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI1MHB4IiBoZWlnaHQ9IjUwcHgiIHZpZXdCb3g9IjAgMCA1MCA1MCI+CiAgICA8cGF0aCBmaWxsPSIjNTNjY2IyIiBkPSJNMjYuMTIsMTQuNDg4YzAuODc5LTEuNDY4LDIuMjctMy41NjksNC4wMjctNS41ODVoMC4wMDJjMS40ODgtMS43MTEsNC40MDItMy45MDcsNC40MDItMy45MDcKCQkJYzAuNDM4LTAuMzMxLDAuMzkxLTAuNzkyLTAuMTA3LTEuMDI0bC0zLjUyMi0xLjY0NmMtMC40OTgtMC4yMzMtMS4xNzUtMC4wNjMtMS41MDUsMC4zNzZjMCwwLTIuNjA1LDMuNzM3LTUuNjcxLDExLjY5MgoJCQljLTkuNDgtNC4yODgtMTguNDkxLDEuNzE4LTE4LjQ5MSwxMi4xNjJjMCwxMC45MDksOC4zOTMsMjcuNDgsMTkuNzQzLDIyLjQ3OGMxMS45NTQsNS4xNzMsMTkuNzQ5LTExLjU2OCwxOS43NDktMjIuNDc4CgkJCUM0NC43NDcsMTYuMDIyLDM2LjY0Nyw5Ljg0NiwyNi4xMiwxNC40ODh6Ii8+CiAgICA8cGF0aCBmaWxsPSIjNTNjY2IyIiBkPSJNMjMuOTk3LDEwLjk1NWMwLjU0OC0wLjA0NiwxLjAzMi0wLjUzMSwxLjA3Ni0xLjA3OGMwLDAsMC4zNTItNC4yNjYtMi42MjEtNy4yNDJjLTIuOTgyLTIuOTc3LTcuMjQtMi42MjItNy4yNC0yLjYyMgoJCQljLTAuNTQ4LDAuMDQ2LTEuMDMyLDAuNTMxLTEuMDc3LDEuMDc4YzAsMC0wLjM1OCw0LjI2OCwyLjYxOSw3LjI0NUMxOS43MjksMTEuMzEsMjMuOTk3LDEwLjk1NSwyMy45OTcsMTAuOTU1eiIvPgo8L3N2Zz4K"

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var schema_1 = __webpack_require__(53);
exports.LINK_SHOW_IRI = {
    renderLink: function (link) { return ({
        properties: [{
                position: 0.5,
                attrs: {
                    text: {
                        text: [{
                                value: link.typeId,
                                language: '',
                            }],
                        fill: 'gray',
                        'font-size': 12,
                        'font-weight': 'lighter',
                    },
                },
            }],
    }); },
};
var LINK_SUB_CLASS_OF = {
    markerTarget: {
        fill: '#f8a485',
        stroke: '#cf8e76',
    },
    renderLink: function () { return ({
        connection: {
            stroke: '#f8a485',
            'stroke-width': 2,
        },
    }); },
};
var LINK_DOMAIN = {
    markerTarget: {
        fill: '#34c7f3',
        stroke: '#38b5db',
    },
    renderLink: function () { return ({
        connection: {
            stroke: '#34c7f3',
            'stroke-width': 2,
        },
    }); },
};
var LINK_RANGE = {
    markerTarget: {
        fill: '#34c7f3',
        stroke: '#38b5db',
    },
    renderLink: function () { return ({
        connection: {
            stroke: '#34c7f3',
            'stroke-width': 2,
        },
    }); },
};
var LINK_TYPE_OF = {
    markerTarget: {
        fill: '#8cd965',
        stroke: '#5b9a3b',
    },
    renderLink: function () { return ({
        connection: {
            stroke: '#8cd965',
            'stroke-width': 2,
        },
    }); },
};
exports.DefaultLinkTemplateBundle = function (type) {
    if (type === 'http://www.w3.org/2000/01/rdf-schema#subClassOf') {
        return LINK_SUB_CLASS_OF;
    }
    else if (type === 'http://www.w3.org/2000/01/rdf-schema#domain') {
        return LINK_DOMAIN;
    }
    else if (type === 'http://www.w3.org/2000/01/rdf-schema#range') {
        return LINK_RANGE;
    }
    else if (type === 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type') {
        return LINK_TYPE_OF;
    }
    else if (type === schema_1.PLACEHOLDER_LINK_TYPE) {
        return { markerTarget: { fill: 'none' } };
    }
    else {
        return undefined;
    }
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var utils_1 = __webpack_require__(48);
var sparqlModels_1 = __webpack_require__(79);
exports.MAX_RECURSION_DEEP = 3;
exports.ENCODED_PREFIX = 'sparql-blank:';
exports.BLANK_NODE_QUERY_PARAMETERS = '?blankTrgProp ?blankTrg ?blankSrc ?blankSrcProp ?listHead';
exports.BLANK_NODE_QUERY = "\n    OPTIONAL {\n        FILTER (ISBLANK(?inst)).\n        {\n            ?inst ?blankTrgProp ?blankTrg.\n            ?blankSrc ?blankSrcProp ?inst.\n            FILTER NOT EXISTS { ?inst rdf:first _:smth1 }.\n            BIND(\"blankNode\" as ?blankType)\n        } UNION {\n            ?inst rdf:rest*/rdf:first ?blankTrg.\n            ?blankSrc ?blankSrcProp ?inst.\n            _:smth2 rdf:first ?blankTrg.\n            BIND(?blankSrcProp as ?blankTrgProp)\n            BIND(\"listHead\" as ?blankType)\n            FILTER NOT EXISTS { _:smth3 rdf:rest ?inst }.\n        } UNION {\n            ?listHead rdf:rest* ?inst.\n            FILTER NOT EXISTS { _:smth4 rdf:rest ?listHead }.\n\n            ?listHead rdf:rest*/rdf:first ?blankTrg.\n            ?blankSrc ?blankSrcProp ?listHead.\n            _:smth5 rdf:first ?blankTrg.\n            BIND(?blankSrcProp as ?blankTrgProp)\n            BIND(\"listHead\" as ?blankType)\n        }\n    }\n";
function isEncodedBlank(id) {
    return id.startsWith(exports.ENCODED_PREFIX);
}
exports.isEncodedBlank = isEncodedBlank;
var QueryExecutor = /** @class */ (function () {
    function QueryExecutor(queryFunction) {
        this.queryFunction = queryFunction;
        this.queryDictionary = {};
    }
    QueryExecutor.prototype.executeQuery = function (query) {
        var _this = this;
        var execution = this.queryDictionary[query];
        if (execution) {
            return execution;
        }
        else {
            this.queryDictionary[query] = this.queryFunction(query).then(function (response) {
                delete _this.queryDictionary[query];
                return response;
            });
            return this.queryDictionary[query];
        }
    };
    return QueryExecutor;
}());
exports.QueryExecutor = QueryExecutor;
function updateFilterResults(result, queryFunction, settings) {
    var completeBindings = [];
    var blankBindings = [];
    for (var _i = 0, _a = result.results.bindings; _i < _a.length; _i++) {
        var binding = _a[_i];
        if (sparqlModels_1.isBlankBinding(binding)) {
            blankBindings.push(binding);
        }
        else {
            completeBindings.push(binding);
        }
    }
    return processBlankBindings(blankBindings, function (callBackQuery) {
        return queryFunction(callBackQuery);
    }, settings).then(function (processedBindings) {
        result.results.bindings = completeBindings.concat(processedBindings);
        return result;
    });
}
exports.updateFilterResults = updateFilterResults;
function processBlankBindings(blankBindings, queryFunction, settings) {
    var bindingGroupsById = {};
    for (var _i = 0, blankBindings_1 = blankBindings; _i < blankBindings_1.length; _i++) {
        var binding = blankBindings_1[_i];
        if (binding.newInst) {
            binding.inst = binding.newInst;
        }
        if (!bindingGroupsById[binding.inst.value]) {
            bindingGroupsById[binding.inst.value] = [];
        }
        bindingGroupsById[binding.inst.value].push(binding);
    }
    var relatedBlankBindnings = [];
    for (var _a = 0, blankBindings_2 = blankBindings; _a < blankBindings_2.length; _a++) {
        var b = blankBindings_2[_a];
        if (sparqlModels_1.isRdfBlank(b.blankTrg)) {
            relatedBlankBindnings.push([b]);
        }
    }
    var queryExecutor = new QueryExecutor(queryFunction);
    return loadRelatedBlankNodes(relatedBlankBindnings, queryExecutor, settings).then(function (loadedGroupsById) {
        var idsMap = getEncodedIdDictionary(loadedGroupsById);
        var groups = Object.keys(bindingGroupsById).map(function (key) { return bindingGroupsById[key]; });
        for (var _i = 0, groups_1 = groups; _i < groups_1.length; _i++) {
            var group = groups_1[_i];
            for (var _a = 0, group_1 = group; _a < group_1.length; _a++) {
                var blankBinding = group_1[_a];
                if (!blankBinding.label) {
                    blankBinding.label = createLabelForBlankBinding(blankBinding);
                }
                var encodedId4LoadedElement = idsMap[blankBinding.blankTrg.value];
                if (encodedId4LoadedElement) {
                    blankBinding.blankTrg.value = encodedId4LoadedElement;
                }
            }
            var encodedId = encodeId(group);
            updateGroupIds(group, encodedId);
        }
        return blankBindings;
    });
}
exports.processBlankBindings = processBlankBindings;
function getEncodedIdDictionary(blankBindingGroups) {
    var idDictionary = {};
    var keys = Object.keys(blankBindingGroups);
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        idDictionary[key] = encodeId(blankBindingGroups[key]);
        updateGroupIds(blankBindingGroups[key], idDictionary[key]);
    }
    return idDictionary;
}
function updateGroupIds(group, newId) {
    for (var _i = 0, group_2 = group; _i < group_2.length; _i++) {
        var loadedBlankBinding = group_2[_i];
        loadedBlankBinding.inst.value = newId;
    }
}
function encodeId(blankBindings) {
    var bindingSet = {};
    for (var _i = 0, blankBindings_3 = blankBindings; _i < blankBindings_3.length; _i++) {
        var binding = blankBindings_3[_i];
        // leave out instance unique ID
        var inst = binding.inst, exceptInst = tslib_1.__rest(binding, ["inst"]);
        var encodedBinding = JSON.stringify(exceptInst);
        bindingSet[encodedBinding] = exceptInst;
    }
    var normalizedBindings = Object.keys(bindingSet).sort().map(function (key) { return bindingSet[key]; });
    return exports.ENCODED_PREFIX + encodeURI(JSON.stringify(normalizedBindings));
}
exports.encodeId = encodeId;
function decodeId(id) {
    if (!isEncodedBlank(id)) {
        return undefined;
    }
    try {
        var clearId = id.substring(exports.ENCODED_PREFIX.length, id.length);
        var parsedBindings = JSON.parse(decodeURI(clearId));
        var bindings = parsedBindings.map(function (binding) {
            // restore instance unique ID
            binding.inst = { type: 'uri', value: id };
            return binding;
        });
        return bindings;
    }
    catch (error) {
        /* silent */
        return undefined;
    }
}
exports.decodeId = decodeId;
function createLabelForBlankBinding(bn) {
    if (bn.blankType.value === 'listHead') {
        return {
            type: 'literal',
            value: 'RDFList',
            'xml:lang': '',
        };
    }
    else {
        return {
            type: 'literal',
            value: bn.class ? (utils_1.getUriLocalName(bn.class.value) || bn.class.value) : 'anonymous',
            'xml:lang': '',
        };
    }
}
exports.createLabelForBlankBinding = createLabelForBlankBinding;
function loadRelatedBlankNodes(blankChains, queryExecutor, settings, recursionDeep) {
    recursionDeep = recursionDeep || 1;
    if (recursionDeep > exports.MAX_RECURSION_DEEP) {
        return Promise.resolve({});
    }
    var queryPairs = blankChains.map(function (chain) { return ({
        query: getQueryForChain(chain, settings),
        chain: chain,
    }); });
    var promises = queryPairs.map(function (pair) { return queryExecutor.executeQuery(pair.query).then(function (response) { return ({
        response: response,
        chain: pair.chain,
    }); }); });
    return Promise.all(promises)
        .then(function (results) {
        var recursionPromises = [];
        var loadedBlankBindings = {};
        var _loop_1 = function (result) {
            var bindings = result.response.results.bindings;
            if (bindings.length > 0) {
                var relatedBlankBindings = [];
                for (var _i = 0, bindings_1 = bindings; _i < bindings_1.length; _i++) {
                    var binding = bindings_1[_i];
                    if (sparqlModels_1.isRdfBlank(binding.blankTrg)) {
                        relatedBlankBindings.push(result.chain.concat([binding]));
                    }
                }
                recursionPromises.push(loadRelatedBlankNodes(relatedBlankBindings, queryExecutor, settings, (recursionDeep + 1))
                    .then(function (loadedGroupsById) {
                    var idsMap = getEncodedIdDictionary(loadedGroupsById);
                    var mergedResults = {};
                    for (var _i = 0, bindings_2 = bindings; _i < bindings_2.length; _i++) {
                        var binding = bindings_2[_i];
                        binding.label = createLabelForBlankBinding(binding);
                        var encodedId = idsMap[binding.blankTrg.value];
                        if (encodedId) {
                            binding.blankTrg.value = encodedId;
                        }
                        if (!mergedResults[binding.inst.value]) {
                            mergedResults[binding.inst.value] = [];
                        }
                        mergedResults[binding.inst.value].push(binding);
                    }
                    Object.keys(mergedResults).forEach(function (key) {
                        var group = mergedResults[key];
                        var originalId = group[0].inst.value;
                        loadedBlankBindings[originalId] = group;
                    });
                    return true;
                }));
            }
        };
        for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
            var result = results_1[_i];
            _loop_1(result);
        }
        return Promise.all(recursionPromises).then(function () {
            return loadedBlankBindings;
        });
    });
}
function getQueryForChain(blankNodes, sparqlDataProviderSettings) {
    function getQueryBlock(blankNode, index, maxIndex) {
        // if blankNode has type 'listHead' then his target and targetProperty is artificial,
        // and we can't include this id in chain
        var trustableTrgProp = (index === 0 || blankNode.blankType.value !== 'listHead');
        var sourceId = index > 0 ? '?inst' + (index - 1) : '<' + blankNode.blankSrc.value + '>';
        var sourcePropId = trustableTrgProp ?
            (index > 0 ? '?blankTrgProp' + (index - 1) : '<' + blankNode.blankSrcProp.value + '>') :
            '?anyType' + index;
        var instPostfix = index === maxIndex ? '' : index.toString();
        var targetPropId = trustableTrgProp ? '<' + blankNode.blankTrgProp.value + '>' : '?anyType0' + index;
        var firstRelation = index === 0 && blankNode.blankType.value === 'listHead' ?
            "\n            ?blankSrc" + index + " rdf:rest*/rdf:first ?inst" + instPostfix + ".\n            " :
            "?blankSrc" + index + " " + targetPropId + " ?inst" + instPostfix + ".";
        return "\n            # ======================\n            " + sourceId + " " + sourcePropId + " ?blankSrc" + index + ".\n            " + firstRelation + "\n            BIND (<" + blankNode.blankTrgProp.value + "> as ?blankSrcProp" + index + ").\n            FILTER (ISBLANK(?inst" + instPostfix + ")).\n            {\n                ?inst" + instPostfix + " ?blankTrgProp" + instPostfix + " ?blankTrg" + instPostfix + ".\n                BIND(\"blankNode\" as ?blankType" + instPostfix + ").\n                FILTER NOT EXISTS { ?inst" + instPostfix + " rdf:first _:smth1" + index + " }.\n            } UNION {\n                ?inst" + instPostfix + " rdf:rest*/rdf:first ?blankTrg" + instPostfix + ".\n                ?blankSrc" + index + " ?blankSrcProp" + index + " ?inst" + instPostfix + ".\n                _:smth2" + index + " rdf:first ?blankTrg" + instPostfix + ".\n                BIND(?blankSrcProp" + index + " as ?blankTrgProp" + instPostfix + ")\n                BIND(\"listHead\" as ?blankType" + instPostfix + ")\n                FILTER NOT EXISTS { _:smth3" + index + " rdf:rest ?inst" + instPostfix + " }.\n            }\n            OPTIONAL {\n                ?inst" + instPostfix + " rdf:type ?class" + instPostfix + ".\n            }\n        ";
    }
    var body = blankNodes.map(function (bn, index) { return getQueryBlock(bn, index, blankNodes.length - 1); }).join('\n');
    var query = sparqlDataProviderSettings.defaultPrefix + "\n    SELECT ?inst ?class ?label ?blankTrgProp ?blankTrg ?blankType\n        WHERE {\n           " + body + "\n        }\n    ";
    return query;
}
function elementInfo(elementIds) {
    var ids = elementIds.filter(function (id) { return isEncodedBlank(id); });
    return {
        head: undefined,
        results: { bindings: getElementBindings(ids) },
    };
}
exports.elementInfo = elementInfo;
function linksInfo(elementIds) {
    return {
        head: undefined,
        results: { bindings: getLinkBinding(elementIds) },
    };
}
exports.linksInfo = linksInfo;
function linkTypesOf(params) {
    return {
        head: undefined,
        results: { bindings: getLinkCountBinding(params.elementId) },
    };
}
exports.linkTypesOf = linkTypesOf;
function filter(params) {
    var filterResponse = {
        head: undefined,
        results: { bindings: [] },
    };
    if (params.limit === 0) {
        params.limit = 100;
    }
    if (params.elementTypeId) {
        filterResponse.results.bindings = [];
    }
    else if (params.refElementId && params.refElementLinkId) {
        filterResponse.results.bindings = getAllRelatedByLinkTypeElements(params.refElementId, params.refElementLinkId, params.linkDirection);
    }
    else if (params.refElementId) {
        filterResponse.results.bindings = getAllRelatedElements(params.refElementId);
    }
    if (params.text && filterResponse.results.bindings.length !== 0) {
        filterResponse.results.bindings =
            filterResponse.results.bindings.filter(function (be) { return be.inst.value.toLowerCase().indexOf(params.text) !== -1; });
    }
    return filterResponse;
}
exports.filter = filter;
function getElementTypes(elementIds) {
    var bindings = [];
    for (var _i = 0, elementIds_1 = elementIds; _i < elementIds_1.length; _i++) {
        var id = elementIds_1[_i];
        var blankBindings = decodeId(id);
        if (blankBindings) {
            for (var _a = 0, blankBindings_4 = blankBindings; _a < blankBindings_4.length; _a++) {
                var be = blankBindings_4[_a];
                if (sparqlModels_1.isRdfIri(be.inst) && be.class) {
                    bindings.push({ inst: be.inst, class: be.class });
                }
            }
        }
    }
    return { head: undefined, results: { bindings: bindings } };
}
exports.getElementTypes = getElementTypes;
function getAllRelatedByLinkTypeElements(refElementId, refElementLinkId, linkDirection) {
    var blankElements = (decodeId(refElementId) || [])
        .concat(decodeId(refElementLinkId) || []);
    var bindings = [];
    if (blankElements.length > 0) {
        for (var _i = 0, blankElements_1 = blankElements; _i < blankElements_1.length; _i++) {
            var be = blankElements_1[_i];
            if (linkDirection === 'in') {
                if (be.inst.value === refElementId &&
                    (sparqlModels_1.isRdfIri(be.blankSrc) || sparqlModels_1.isRdfBlank(be.blankSrc)) &&
                    refElementLinkId === be.blankSrcProp.value) {
                    if (sparqlModels_1.isRdfIri(be.blankSrc)) {
                        bindings.push({
                            inst: be.blankSrc,
                        });
                    }
                    else {
                        bindings = bindings.concat(decodeId(be.blankSrc.value) || [{ inst: be.blankSrc }]);
                    }
                }
                else if (be.blankTrg.value === refElementId &&
                    refElementLinkId === be.blankTrgProp.value) {
                    bindings.push(be);
                }
            }
            else {
                if (be.inst.value === refElementId &&
                    (sparqlModels_1.isRdfIri(be.blankTrg) || sparqlModels_1.isRdfBlank(be.blankTrg)) &&
                    refElementLinkId === be.blankTrgProp.value) {
                    if (sparqlModels_1.isRdfIri(be.blankTrg)) {
                        bindings.push({
                            inst: be.blankTrg,
                        });
                    }
                    else {
                        bindings = bindings.concat(decodeId(be.blankTrg.value) || [{ inst: be.blankTrg }]);
                    }
                }
                else if (be.blankSrc.value === refElementId &&
                    refElementLinkId === be.blankSrcProp.value) {
                    bindings.push(be);
                }
            }
        }
    }
    return bindings;
}
function getAllRelatedElements(id) {
    var blankElements = decodeId(id);
    var bindings = [];
    if (blankElements) {
        for (var _i = 0, blankElements_2 = blankElements; _i < blankElements_2.length; _i++) {
            var be = blankElements_2[_i];
            if (be.inst.value === id || id === be.blankSrc.value || id === be.blankTrg.value) {
                bindings.push(be);
                if (sparqlModels_1.isRdfIri(be.blankSrc)) {
                    bindings.push({ inst: be.blankSrc });
                }
                else if (sparqlModels_1.isRdfBlank(be.blankSrc)) {
                    bindings = bindings.concat(decodeId(be.blankSrc.value) || [{ inst: be.blankSrc }]);
                }
                if (sparqlModels_1.isRdfIri(be.blankTrg)) {
                    bindings.push({ inst: be.blankTrg });
                }
                else if (sparqlModels_1.isRdfBlank(be.blankTrg)) {
                    bindings = bindings.concat(decodeId(be.blankTrg.value) || [{ inst: be.blankTrg }]);
                }
            }
        }
    }
    return bindings;
}
function getElementBindings(ids) {
    var blankElements = [];
    for (var _i = 0, ids_1 = ids; _i < ids_1.length; _i++) {
        var id = ids_1[_i];
        var blankBindings = decodeId(id);
        if (blankBindings) {
            blankElements = blankElements.concat(decodeId(id));
        }
    }
    return blankElements.filter(function (be) {
        return ids.indexOf(be.inst.value) !== -1;
    });
}
function getLinkBinding(ids) {
    var blankElements = [];
    for (var _i = 0, ids_2 = ids; _i < ids_2.length; _i++) {
        var id = ids_2[_i];
        var blankBindings = decodeId(id);
        if (blankBindings) {
            blankElements = blankElements.concat(decodeId(id));
        }
    }
    var bindings = [];
    for (var _a = 0, blankElements_3 = blankElements; _a < blankElements_3.length; _a++) {
        var be = blankElements_3[_a];
        if (ids.indexOf(be.inst.value) !== -1) {
            if ((sparqlModels_1.isRdfIri(be.blankSrc) || sparqlModels_1.isRdfBlank(be.blankSrc)) &&
                sparqlModels_1.isRdfIri(be.blankSrcProp) &&
                ids.indexOf(be.blankSrc.value) !== -1) {
                bindings.push({
                    source: be.blankSrc,
                    type: be.blankSrcProp,
                    target: be.inst,
                });
            }
            if ((sparqlModels_1.isRdfIri(be.blankTrg) || sparqlModels_1.isRdfBlank(be.blankTrg)) &&
                sparqlModels_1.isRdfIri(be.blankTrgProp) &&
                ids.indexOf(be.blankTrg.value) !== -1) {
                bindings.push({
                    source: be.inst,
                    type: be.blankTrgProp,
                    target: be.blankTrg,
                });
            }
        }
    }
    return bindings;
}
function getLinkCountBinding(id) {
    var blankElements = decodeId(id);
    var bindings = [];
    var dictionary = {};
    for (var _i = 0, blankElements_4 = blankElements; _i < blankElements_4.length; _i++) {
        var be = blankElements_4[_i];
        if (id === be.inst.value) {
            if ((sparqlModels_1.isRdfIri(be.blankTrg) || sparqlModels_1.isRdfBlank(be.blankTrg)) &&
                sparqlModels_1.isRdfIri(be.blankTrgProp)) {
                if ((sparqlModels_1.isRdfIri(be.blankSrc) || sparqlModels_1.isRdfBlank(be.blankSrc)) &&
                    sparqlModels_1.isRdfIri(be.blankSrcProp)) {
                    if (!dictionary[be.blankSrcProp.value]) {
                        dictionary[be.blankSrcProp.value] = {
                            link: be.blankSrcProp,
                            inCount: {
                                type: 'literal',
                                value: '1',
                                'xml:lang': '',
                            },
                            outCount: {
                                type: 'literal',
                                value: '0',
                                'xml:lang': '',
                            },
                        };
                    }
                }
                if (!dictionary[be.blankTrgProp.value]) {
                    dictionary[be.blankTrgProp.value] = {
                        link: be.blankTrgProp,
                        inCount: {
                            type: 'literal',
                            value: '0',
                            'xml:lang': '',
                        },
                        outCount: {
                            type: 'literal',
                            value: '1',
                            'xml:lang': '',
                        },
                    };
                }
                else {
                    dictionary[be.blankTrgProp.value].outCount.value =
                        (+dictionary[be.blankTrgProp.value].outCount.value + 1).toString();
                }
            }
        }
    }
    return Object.keys(dictionary).map(function (k) { return dictionary[k]; });
}


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isRdfBlank(e) {
    return e && e.type === 'bnode';
}
exports.isRdfBlank = isRdfBlank;
function isRdfIri(e) {
    return e && e.type === 'uri';
}
exports.isRdfIri = isRdfIri;
function isRdfLiteral(e) {
    return e && e.type === 'literal';
}
exports.isRdfLiteral = isRdfLiteral;
function isBlankBinding(binding) {
    var blank = binding;
    return blank.blankTrgProp !== undefined
        || blank.blankTrg !== undefined
        || blank.blankSrcProp !== undefined
        || blank.blankSrc !== undefined;
}
exports.isBlankBinding = isBlankBinding;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var geometry_1 = __webpack_require__(56);
var DefaultLinkRouter = /** @class */ (function () {
    function DefaultLinkRouter(gap) {
        if (gap === void 0) { gap = 20; }
        this.gap = gap;
    }
    DefaultLinkRouter.prototype.route = function (model) {
        var routings = new Map();
        for (var _i = 0, _a = model.links; _i < _a.length; _i++) {
            var link = _a[_i];
            if (routings.has(link.id)) {
                continue;
            }
            // The cell is a link. Let's find its source and target models.
            var sourceId = link.sourceId, targetId = link.targetId;
            if (!sourceId || !targetId) {
                continue;
            }
            else if (sourceId === targetId) {
                this.routeFeedbackSiblingLinks(model, sourceId, routings);
            }
            else {
                this.routeNormalSiblingLinks(model, sourceId, targetId, routings);
            }
        }
        return routings;
    };
    DefaultLinkRouter.prototype.routeFeedbackSiblingLinks = function (model, elementId, routings) {
        var element = model.getElement(elementId);
        var _a = element.position, x = _a.x, y = _a.y;
        var _b = element.size, width = _b.width, height = _b.height;
        var index = 0;
        for (var _i = 0, _c = element.links; _i < _c.length; _i++) {
            var sibling = _c[_i];
            if (routings.has(sibling.id) || hasUserPlacedVertices(sibling)) {
                continue;
            }
            var sourceId = sibling.sourceId, targetId = sibling.targetId;
            if (sourceId === targetId) {
                var offset = this.gap * (index + 1);
                var vertices = [
                    { x: x - offset, y: y + height / 2 },
                    { x: x - offset, y: y - offset },
                    { x: x + width / 2, y: y - offset },
                ];
                routings.set(sibling.id, { linkId: sibling.id, vertices: vertices });
                index++;
            }
        }
    };
    DefaultLinkRouter.prototype.routeNormalSiblingLinks = function (model, sourceId, targetId, routings) {
        var _this = this;
        var source = model.getElement(sourceId);
        var target = model.getElement(targetId);
        var sourceCenter = centerOfElement(source);
        var targetCenter = centerOfElement(target);
        var midPoint = {
            x: (sourceCenter.x + targetCenter.x) / 2,
            y: (sourceCenter.y + targetCenter.y) / 2,
        };
        var direction = geometry_1.Vector.normalize({
            x: targetCenter.x - sourceCenter.x,
            y: targetCenter.y - sourceCenter.y,
        });
        var siblings = source.links.filter(function (link) {
            return (link.sourceId === targetId || link.targetId === targetId) &&
                !routings.has(link.id) &&
                !hasUserPlacedVertices(link);
        });
        if (siblings.length <= 1) {
            return;
        }
        var indexModifier = siblings.length % 2 ? 0 : 1;
        siblings.forEach(function (sibling, siblingIndex) {
            // For mor beautifull positioning
            var index = siblingIndex + indexModifier;
            // We want the offset values to be calculated as follows 0, 50, 50, 100, 100, 150, 150 ..
            var offset = _this.gap * Math.ceil(index / 2) - (indexModifier ? _this.gap / 2 : 0);
            // Now we need the vertices to be placed at points which are 'offset' pixels distant
            // from the first link and forms a perpendicular angle to it. And as index goes up
            // alternate left and right.
            //
            //  ^  odd indexes
            //  |
            //  |---->  index 0 line (straight line between a source center and a target center.
            //  |
            //  v  even indexes
            var offsetDirection = index % 2
                ? { x: -direction.y, y: direction.x } // rotate by 90 degrees counter-clockwise
                : { x: direction.y, y: -direction.x }; // rotate by 90 degrees clockwise
            // We found the vertex.
            var vertex = {
                x: midPoint.x + offsetDirection.x * offset,
                y: midPoint.y + offsetDirection.y * offset,
            };
            routings.set(sibling.id, {
                linkId: sibling.id,
                vertices: [vertex],
                labelTextAnchor: _this.getLabelAlignment(direction, siblingIndex, siblings.length),
            });
        });
    };
    DefaultLinkRouter.prototype.getLabelAlignment = function (connectionDirection, siblingIndex, siblingCount) {
        // offset direction angle in [0; 2 Pi] interval
        var angle = Math.atan2(connectionDirection.y, connectionDirection.x);
        var absoluteAngle = Math.abs(angle);
        var isHorizontal = absoluteAngle < Math.PI * 1 / 8 || absoluteAngle > Math.PI * 7 / 8;
        var isTop = angle < 0;
        var isBottom = angle > 0;
        var firstOuter = siblingCount - 2;
        var secondOuter = siblingCount - 1;
        if (!isHorizontal) {
            if (isTop && siblingIndex === secondOuter || isBottom && siblingIndex === firstOuter) {
                return 'end';
            }
            else if (isTop && siblingIndex === firstOuter || isBottom && siblingIndex === secondOuter) {
                return 'start';
            }
        }
        return 'middle';
    };
    return DefaultLinkRouter;
}());
exports.DefaultLinkRouter = DefaultLinkRouter;
function hasUserPlacedVertices(link) {
    var vertices = link.vertices;
    return vertices && vertices.length > 0;
}
function centerOfElement(element) {
    var _a = element.position, x = _a.x, y = _a.y;
    var _b = element.size, width = _b.width, height = _b.height;
    return { x: x + width / 2, y: y + height / 2 };
}


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(45);
var react_1 = __webpack_require__(45);
var async_1 = __webpack_require__(60);
var collections_1 = __webpack_require__(55);
var events_1 = __webpack_require__(54);
var commands_1 = __webpack_require__(63);
var elements_1 = __webpack_require__(52);
var geometry_1 = __webpack_require__(56);
var view_1 = __webpack_require__(65);
var UpdateRequest;
(function (UpdateRequest) {
    /** Some part of layer requested an update */
    UpdateRequest[UpdateRequest["Partial"] = 1] = "Partial";
    /** Full update requested */
    UpdateRequest[UpdateRequest["All"] = 2] = "All";
})(UpdateRequest || (UpdateRequest = {}));
var CLASS_NAME = 'ontodia-link-layer';
var LinkLayer = /** @class */ (function (_super) {
    tslib_1.__extends(LinkLayer, _super);
    function LinkLayer(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.listener = new events_1.EventObserver();
        _this.delayedUpdate = new async_1.Debouncer();
        _this.updateState = UpdateRequest.Partial;
        /** List of link IDs to update at the next flush event */
        _this.scheduledToUpdate = collections_1.createStringMap();
        _this.scheduleUpdateAll = function () {
            if (_this.updateState !== UpdateRequest.All) {
                _this.updateState = UpdateRequest.All;
                _this.scheduledToUpdate = collections_1.createStringMap();
            }
            _this.delayedUpdate.call(_this.performUpdate);
        };
        _this.performUpdate = function () {
            _this.forceUpdate();
        };
        _this.getLinks = function () {
            var _a = _this.props, view = _a.view, links = _a.links, group = _a.group;
            if (!group) {
                return links;
            }
            var grouping = geometry_1.computeGrouping(view.model.elements);
            var nestedElements = computeDeepNestedElements(grouping, group);
            return links.filter(function (link) {
                var sourceId = link.sourceId, targetId = link.targetId;
                var source = view.model.getElement(sourceId);
                var target = view.model.getElement(targetId);
                if (!source || !target) {
                    return false;
                }
                var sourceGroup = source.group;
                var targetGroup = target.group;
                return nestedElements[sourceGroup] || nestedElements[targetGroup];
            });
        };
        return _this;
    }
    LinkLayer.prototype.componentDidMount = function () {
        var _this = this;
        var view = this.props.view;
        this.listener.listen(view.events, 'changeLanguage', this.scheduleUpdateAll);
        this.listener.listen(view.events, 'changeHighlight', this.scheduleUpdateAll);
        var updateChangedRoutes = function (changed, previous) {
            changed.forEach(function (routing, linkId) {
                if (previous.get(linkId) !== routing) {
                    _this.scheduleUpdateLink(linkId);
                }
            });
        };
        this.listener.listen(view.events, 'updateRoutings', function (_a) {
            var previous = _a.previous;
            var newRoutes = view.getRoutings();
            updateChangedRoutes(newRoutes, previous);
            updateChangedRoutes(previous, newRoutes);
        });
        this.listener.listen(view.model.events, 'changeCells', this.scheduleUpdateAll);
        this.listener.listen(view.model.events, 'elementEvent', function (_a) {
            var data = _a.data;
            var elementEvent = data.changePosition || data.changeSize;
            if (!elementEvent) {
                return;
            }
            for (var _i = 0, _b = elementEvent.source.links; _i < _b.length; _i++) {
                var link = _b[_i];
                _this.scheduleUpdateLink(link.id);
            }
        });
        this.listener.listen(view.model.events, 'linkEvent', function (_a) {
            var data = _a.data;
            var linkEvent = (data.changeData ||
                data.changeLayoutOnly ||
                data.changeVertices ||
                data.changeLinkState);
            if (linkEvent) {
                _this.scheduleUpdateLink(linkEvent.source.id);
            }
        });
        this.listener.listen(view.model.events, 'linkTypeEvent', function (_a) {
            var data = _a.data;
            var linkTypeEvent = data.changeLabel || data.changeVisibility;
            if (!linkTypeEvent) {
                return;
            }
            var linkTypeId = linkTypeEvent.source.id;
            for (var _i = 0, _b = view.model.linksOfType(linkTypeId); _i < _b.length; _i++) {
                var link = _b[_i];
                _this.scheduleUpdateLink(link.id);
            }
        });
        this.listener.listen(view.events, 'syncUpdate', function (_a) {
            var layer = _a.layer;
            if (layer !== view_1.RenderingLayer.Link) {
                return;
            }
            _this.delayedUpdate.runSynchronously();
        });
    };
    LinkLayer.prototype.shouldComponentUpdate = function () {
        return false;
    };
    LinkLayer.prototype.componentWillUnmount = function () {
        this.listener.stopListening();
        this.delayedUpdate.dispose();
    };
    LinkLayer.prototype.scheduleUpdateLink = function (linkId) {
        if (this.updateState === UpdateRequest.Partial) {
            this.scheduledToUpdate[linkId] = true;
        }
        this.delayedUpdate.call(this.performUpdate);
    };
    LinkLayer.prototype.popShouldUpdatePredicate = function () {
        var _a = this, updateState = _a.updateState, scheduledToUpdate = _a.scheduledToUpdate;
        this.scheduledToUpdate = collections_1.createStringMap();
        this.updateState = UpdateRequest.Partial;
        return updateState === UpdateRequest.All
            ? function () { return true; }
            : function (link) { return Boolean(scheduledToUpdate[link.id]); };
    };
    LinkLayer.prototype.render = function () {
        var view = this.props.view;
        var shouldUpdate = this.popShouldUpdatePredicate();
        return React.createElement("g", { className: CLASS_NAME }, this.getLinks().map(function (model) { return (React.createElement(LinkView, { key: model.id, view: view, model: model, shouldUpdate: shouldUpdate(model), route: view.getRouting(model.id) })); }));
    };
    return LinkLayer;
}(react_1.Component));
exports.LinkLayer = LinkLayer;
function computeDeepNestedElements(grouping, groupId) {
    var deepChildren = {};
    function collectNestedItems(parentId) {
        deepChildren[parentId] = true;
        var children = grouping.get(parentId);
        if (!children) {
            return;
        }
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var element = children_1[_i];
            if (element.group !== parentId) {
                continue;
            }
            collectNestedItems(element.id);
        }
    }
    collectNestedItems(groupId);
    return deepChildren;
}
var LINK_CLASS = 'ontodia-link';
var LABEL_GROUPING_PRECISION = 100;
// temporary, cleared-before-render map to hold line numbers for labels
// grouped on the same link offset
var TEMPORARY_LABEL_LINES = new Map();
var LinkView = /** @class */ (function (_super) {
    tslib_1.__extends(LinkView, _super);
    function LinkView(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.onRemoveLinkVertex = function (vertex) {
            var model = _this.props.view.model;
            model.history.registerToUndo(commands_1.restoreCapturedLinkGeometry(vertex.link));
            vertex.remove();
        };
        _this.onBoundsUpdate = function (newBounds) {
            var model = _this.props.model;
            model.setLabelBounds(newBounds);
        };
        _this.grabLinkTemplate(_this.props);
        return _this;
    }
    LinkView.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.linkType.id !== nextProps.model.typeId) {
            this.grabLinkTemplate(nextProps);
        }
    };
    LinkView.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return nextProps.shouldUpdate;
    };
    LinkView.prototype.grabLinkTemplate = function (props) {
        this.linkType = props.view.model.getLinkType(props.model.typeId);
        this.template = props.view.createLinkTemplate(this.linkType);
    };
    LinkView.prototype.render = function () {
        var _a = this.props, view = _a.view, model = _a.model, route = _a.route;
        var source = view.model.getElement(model.sourceId);
        var target = view.model.getElement(model.targetId);
        if (!(source && target)) {
            return null;
        }
        var verticesDefinedByUser = model.vertices || [];
        var vertices = route ? route.vertices : verticesDefinedByUser;
        var polyline = geometry_1.computePolyline(source, target, vertices);
        var path = 'M' + polyline.map(function (_a) {
            var x = _a.x, y = _a.y;
            return x + "," + y;
        }).join(' L');
        var _b = this.linkType, typeIndex = _b.index, showLabel = _b.showLabel;
        var style = this.template.renderLink(model);
        var pathAttributes = getPathAttributes(model, style);
        var isBlurred = view.highlighter && !view.highlighter(model);
        var className = LINK_CLASS + " " + (isBlurred ? LINK_CLASS + "--blurred" : '');
        return (React.createElement("g", { className: className, "data-link-id": model.id, "data-source-id": source.id, "data-target-id": target.id },
            React.createElement("path", tslib_1.__assign({ className: LINK_CLASS + "__connection", d: path }, pathAttributes, { markerStart: "url(#" + elements_1.linkMarkerKey(typeIndex, true) + ")", markerEnd: "url(#" + elements_1.linkMarkerKey(typeIndex, false) + ")" })),
            React.createElement("path", { className: LINK_CLASS + "__wrap", d: path }),
            showLabel ? this.renderLabels(polyline, style) : undefined,
            this.renderVertices(verticesDefinedByUser, pathAttributes.stroke)));
    };
    LinkView.prototype.renderVertices = function (vertices, fill) {
        var elements = [];
        var vertexClass = LINK_CLASS + "__vertex";
        var vertexRadius = 10;
        var index = 0;
        for (var _i = 0, vertices_1 = vertices; _i < vertices_1.length; _i++) {
            var _a = vertices_1[_i], x = _a.x, y = _a.y;
            elements.push(React.createElement("circle", { key: index * 2, "data-vertex": index, className: vertexClass, cx: x, cy: y, r: vertexRadius, fill: fill }));
            elements.push(React.createElement(VertexTools, { key: index * 2 + 1, className: LINK_CLASS + "__vertex-tools", model: this.props.model, vertexIndex: index, vertexRadius: vertexRadius, x: x, y: y, onRemove: this.onRemoveLinkVertex }));
            index++;
        }
        return React.createElement("g", { className: LINK_CLASS + "__vertices" }, elements);
    };
    LinkView.prototype.renderLabels = function (polyline, style) {
        var _this = this;
        var _a = this.props, view = _a.view, model = _a.model, route = _a.route;
        var labels = computeLinkLabels(model, style, view);
        var textAnchor = 'middle';
        if (route && route.labelTextAnchor) {
            textAnchor = route.labelTextAnchor;
        }
        var polylineLength = geometry_1.computePolylineLength(polyline);
        TEMPORARY_LABEL_LINES.clear();
        return (React.createElement("g", { className: LINK_CLASS + "__labels" }, labels.map(function (label, index) {
            var _a = geometry_1.getPointAlongPolyline(polyline, polylineLength * label.offset), x = _a.x, y = _a.y;
            var groupKey = Math.round(label.offset * LABEL_GROUPING_PRECISION) / LABEL_GROUPING_PRECISION;
            var line = TEMPORARY_LABEL_LINES.get(groupKey) || 0;
            TEMPORARY_LABEL_LINES.set(groupKey, line + 1);
            return (React.createElement(LinkLabel, { key: index, x: x, y: y, line: line, label: label, textAnchor: textAnchor, onBoundsUpdate: index === 0 ? _this.onBoundsUpdate : undefined }));
        })));
    };
    return LinkView;
}(react_1.Component));
function computeLinkLabels(model, style, view) {
    var labels = [];
    var labelStyle = style.label || {};
    var labelTexts = labelStyle.attrs && labelStyle.attrs.text ? labelStyle.attrs.text.text : undefined;
    var text;
    var title = labelStyle.title;
    if (labelTexts && labelTexts.length > 0) {
        text = view.selectLabel(labelTexts);
    }
    else {
        var type = view.model.getLinkType(model.typeId);
        text = view.selectLabel(type.label) || {
            value: view.formatLabel(type.label, type.id),
            language: '',
        };
        if (title === undefined) {
            title = text.value + " " + view.formatIri(model.typeId);
        }
    }
    labels.push({
        offset: labelStyle.position || 0.5,
        text: text,
        title: title,
        attributes: {
            text: getLabelTextAttributes(labelStyle),
            rect: getLabelRectAttributes(labelStyle),
        },
    });
    if (style.properties) {
        for (var _i = 0, _a = style.properties; _i < _a.length; _i++) {
            var property = _a[_i];
            if (!(property.attrs && property.attrs.text && property.attrs.text.text)) {
                continue;
            }
            labels.push({
                offset: property.position || 0.5,
                text: view.selectLabel(property.attrs.text.text),
                title: property.title,
                attributes: {
                    text: getLabelTextAttributes(property),
                    rect: getLabelRectAttributes(property),
                },
            });
        }
    }
    return labels;
}
function getPathAttributes(model, style) {
    var connectionAttributes = style.connection || {};
    var defaultStrokeDasharray = model.layoutOnly ? '5,5' : undefined;
    var _a = connectionAttributes.fill, fill = _a === void 0 ? 'none' : _a, _b = connectionAttributes.stroke, stroke = _b === void 0 ? 'black' : _b, strokeWidth = connectionAttributes["stroke-width"], _c = connectionAttributes["stroke-dasharray"], strokeDasharray = _c === void 0 ? defaultStrokeDasharray : _c;
    return { fill: fill, stroke: stroke, strokeWidth: strokeWidth, strokeDasharray: strokeDasharray };
}
function getLabelTextAttributes(label) {
    var _a = label.attrs ? label.attrs.text : {}, _b = _a.fill, fill = _b === void 0 ? 'black' : _b, _c = _a.stroke, stroke = _c === void 0 ? 'none' : _c, _d = _a["stroke-width"], strokeWidth = _d === void 0 ? 0 : _d, _e = _a["font-family"], fontFamily = _e === void 0 ? '"Helvetica Neue", "Helvetica", "Arial", sans-serif' : _e, _f = _a["font-size"], fontSize = _f === void 0 ? 'inherit' : _f, _g = _a["font-weight"], fontWeight = _g === void 0 ? 'bold' : _g;
    return {
        fill: fill, stroke: stroke, strokeWidth: strokeWidth, fontFamily: fontFamily, fontSize: fontSize,
        fontWeight: fontWeight,
    };
}
function getLabelRectAttributes(label) {
    var _a = label.attrs && label.attrs.rect ? label.attrs.rect : {}, _b = _a.fill, fill = _b === void 0 ? 'white' : _b, _c = _a.stroke, stroke = _c === void 0 ? 'none' : _c, _d = _a["stroke-width"], strokeWidth = _d === void 0 ? 0 : _d;
    return { fill: fill, stroke: stroke, strokeWidth: strokeWidth };
}
var GROUPED_LABEL_MARGIN = 2;
var LinkLabel = /** @class */ (function (_super) {
    tslib_1.__extends(LinkLabel, _super);
    function LinkLabel(props) {
        var _this = _super.call(this, props) || this;
        _this.shouldUpdateBounds = true;
        _this.onTextMount = function (text) {
            _this.text = text;
        };
        _this.state = { width: 0, height: 0 };
        return _this;
    }
    LinkLabel.prototype.render = function () {
        var _a = this.props, x = _a.x, y = _a.y, label = _a.label, line = _a.line, textAnchor = _a.textAnchor;
        var _b = this.state, width = _b.width, height = _b.height;
        var _c = this.getLabelRectangle(width, height), rectX = _c.x, rectY = _c.y;
        var transform = line === 0 ? undefined :
            "translate(0, " + line * (height + GROUPED_LABEL_MARGIN) + "px)";
        // HACK: 'alignment-baseline' and 'dominant-baseline' are not supported in Edge and IE
        var dy = '0.6ex';
        return (React.createElement("g", { style: transform ? { transform: transform } : undefined },
            label.title ? React.createElement("title", null, label.title) : undefined,
            React.createElement("rect", { x: rectX, y: rectY, width: width, height: height, style: label.attributes.rect }),
            React.createElement("text", { ref: this.onTextMount, x: x, y: y, dy: dy, textAnchor: textAnchor, style: label.attributes.text }, label.text.value)));
    };
    LinkLabel.prototype.getLabelRectangle = function (width, height) {
        var _a = this.props, x = _a.x, y = _a.y, textAnchor = _a.textAnchor;
        var xOffset = 0;
        if (textAnchor === 'middle') {
            xOffset = -width / 2;
        }
        else if (textAnchor === 'end') {
            xOffset = -width;
        }
        return {
            x: x + xOffset,
            y: y - height / 2,
            width: width,
            height: height,
        };
    };
    LinkLabel.prototype.componentDidMount = function () {
        this.recomputeBounds(this.props);
    };
    LinkLabel.prototype.componentWillUnmount = function () {
        var onBoundsUpdate = this.props.onBoundsUpdate;
        onBoundsUpdate(undefined);
    };
    LinkLabel.prototype.componentWillReceiveProps = function (nextProps) {
        this.shouldUpdateBounds = true;
    };
    LinkLabel.prototype.componentDidUpdate = function (props) {
        this.recomputeBounds(this.props);
    };
    LinkLabel.prototype.recomputeBounds = function (props) {
        if (this.shouldUpdateBounds) {
            var onBoundsUpdate = this.props.onBoundsUpdate;
            this.shouldUpdateBounds = false;
            var bounds = this.text.getBBox();
            if (onBoundsUpdate) {
                var labelBounds = this.getLabelRectangle(bounds.width, bounds.height);
                onBoundsUpdate(labelBounds);
            }
            this.setState({
                width: bounds.width,
                height: bounds.height,
            });
        }
    };
    return LinkLabel;
}(react_1.Component));
var VertexTools = /** @class */ (function (_super) {
    tslib_1.__extends(VertexTools, _super);
    function VertexTools() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onRemoveVertex = function (e) {
            if (e.button !== 0 /* left button */) {
                return;
            }
            e.preventDefault();
            e.stopPropagation();
            var _a = _this.props, onRemove = _a.onRemove, model = _a.model, vertexIndex = _a.vertexIndex;
            onRemove(new elements_1.LinkVertex(model, vertexIndex));
        };
        return _this;
    }
    VertexTools.prototype.render = function () {
        var _a = this.props, className = _a.className, vertexIndex = _a.vertexIndex, vertexRadius = _a.vertexRadius, x = _a.x, y = _a.y;
        var transform = "translate(" + (x + 2 * vertexRadius) + "," + (y - 2 * vertexRadius) + ")scale(" + vertexRadius + ")";
        return (React.createElement("g", { className: className, transform: transform, onMouseDown: this.onRemoveVertex },
            React.createElement("title", null, "Remove vertex"),
            React.createElement("circle", { r: 1 }),
            React.createElement("path", { d: 'M-0.5,-0.5 L0.5,0.5 M0.5,-0.5 L-0.5,0.5', strokeWidth: 2 / vertexRadius })));
    };
    return VertexTools;
}(react_1.Component));
var LinkMarkers = /** @class */ (function (_super) {
    tslib_1.__extends(LinkMarkers, _super);
    function LinkMarkers() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listener = new events_1.EventObserver();
        _this.delayedUpdate = new async_1.Debouncer();
        return _this;
    }
    LinkMarkers.prototype.render = function () {
        var view = this.props.view;
        var markers = [];
        view.getLinkTemplates().forEach(function (template, linkTypeId) {
            var type = view.model.getLinkType(linkTypeId);
            if (!type) {
                return;
            }
            var typeIndex = type.index;
            if (template.markerSource) {
                markers.push(React.createElement(LinkMarker, { key: typeIndex * 2, linkTypeIndex: typeIndex, style: template.markerSource, isStartMarker: true }));
            }
            if (template.markerTarget) {
                markers.push(React.createElement(LinkMarker, { key: typeIndex * 2 + 1, linkTypeIndex: typeIndex, style: template.markerTarget, isStartMarker: false }));
            }
        });
        return React.createElement("defs", null, markers);
    };
    LinkMarkers.prototype.componentDidMount = function () {
        var _this = this;
        var view = this.props.view;
        this.listener.listen(view.events, 'syncUpdate', function (_a) {
            var layer = _a.layer;
            if (layer !== view_1.RenderingLayer.Link) {
                return;
            }
            _this.delayedUpdate.runSynchronously();
        });
        this.listener.listen(view.events, 'changeLinkTemplates', function () {
            _this.delayedUpdate.call(function () { return _this.forceUpdate(); });
        });
    };
    LinkMarkers.prototype.shouldComponentUpdate = function () {
        return false;
    };
    LinkMarkers.prototype.componentWillUnmount = function () {
        this.listener.stopListening();
        this.delayedUpdate.dispose();
    };
    return LinkMarkers;
}(react_1.Component));
exports.LinkMarkers = LinkMarkers;
var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
var LinkMarker = /** @class */ (function (_super) {
    tslib_1.__extends(LinkMarker, _super);
    function LinkMarker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onMarkerMount = function (marker) {
            if (!marker) {
                return;
            }
            var _a = _this.props, linkTypeIndex = _a.linkTypeIndex, isStartMarker = _a.isStartMarker, style = _a.style;
            marker.setAttribute('id', elements_1.linkMarkerKey(linkTypeIndex, isStartMarker));
            marker.setAttribute('markerWidth', style.width.toString());
            marker.setAttribute('markerHeight', style.height.toString());
            marker.setAttribute('orient', 'auto');
            var xOffset = isStartMarker ? 0 : (style.width - 1);
            marker.setAttribute('refX', xOffset.toString());
            marker.setAttribute('refY', (style.height / 2).toString());
            marker.setAttribute('markerUnits', 'userSpaceOnUse');
            var path = document.createElementNS(SVG_NAMESPACE, 'path');
            path.setAttribute('d', style.d);
            if (style.fill !== undefined) {
                path.setAttribute('fill', style.fill);
            }
            if (style.stroke !== undefined) {
                path.setAttribute('stroke', style.stroke);
            }
            if (style.strokeWidth !== undefined) {
                path.setAttribute('stroke-width', style.strokeWidth);
            }
            marker.appendChild(path);
        };
        return _this;
    }
    LinkMarker.prototype.render = function () {
        return React.createElement("marker", { ref: this.onMarkerMount });
    };
    LinkMarker.prototype.shouldComponentUpdate = function () {
        return false;
    };
    return LinkMarker;
}(react_1.Component));


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(45);
var async_1 = __webpack_require__(60);
var events_1 = __webpack_require__(54);
var polyfills_1 = __webpack_require__(42);
var react_1 = __webpack_require__(61);
var toSvg_1 = __webpack_require__(83);
var commands_1 = __webpack_require__(63);
var elements_1 = __webpack_require__(52);
var geometry_1 = __webpack_require__(56);
var view_1 = __webpack_require__(65);
var paper_1 = __webpack_require__(51);
exports.PaperAreaContextTypes = {
    ontodiaPaperArea: react_1.PropTypes.anything,
};
var CLASS_NAME = 'ontodia-paper-area';
var DEFAULT_ANIMATION_DURATION = 500;
var LEFT_MOUSE_BUTTON = 0;
var PaperArea = /** @class */ (function (_super) {
    tslib_1.__extends(PaperArea, _super);
    function PaperArea(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.listener = new events_1.EventObserver();
        _this.source = new events_1.EventSource();
        _this.events = _this.source;
        _this.widgets = {};
        _this.pageSize = { x: 1500, y: 800 };
        _this.cssAnimations = 0;
        _this.delayedPaperAdjust = new async_1.Debouncer();
        _this.onOuterMount = function (outer) { _this.outer = outer; };
        _this.onAreaMount = function (area) { _this.area = area; };
        _this.onWidgetsMouseDown = function (e) {
            // prevent PaperArea from generating click on a blank area
            e.stopPropagation();
        };
        _this.adjustPaper = function (callback) {
            var _a = _this.area, clientWidth = _a.clientWidth, clientHeight = _a.clientHeight;
            var adjusted = tslib_1.__assign(tslib_1.__assign({}, _this.computeAdjustedBox()), { paddingX: Math.ceil(clientWidth), paddingY: Math.ceil(clientHeight) });
            var previous = _this.state;
            var samePaperProps = (adjusted.paperWidth === previous.paperWidth &&
                adjusted.paperHeight === previous.paperHeight &&
                adjusted.originX === previous.originX &&
                adjusted.originY === previous.originY &&
                adjusted.paddingX === previous.paddingX &&
                adjusted.paddingY === previous.paddingY);
            if (!samePaperProps) {
                _this.scrollBeforeUpdate = {
                    left: _this.area.scrollLeft,
                    top: _this.area.scrollTop,
                };
                _this.setState(adjusted, callback);
            }
            else if (callback) {
                callback();
            }
        };
        _this.onPaperPointerDown = function (e, cell) {
            if (_this.movingState) {
                return;
            }
            var restore = commands_1.RestoreGeometry.capture(_this.props.view.model);
            var batch = _this.props.view.model.history.startBatch(restore.title);
            if (cell && e.button === LEFT_MOUSE_BUTTON) {
                if (cell instanceof elements_1.Element) {
                    e.preventDefault();
                    _this.startMoving(e, cell);
                    _this.listenToPointerMove(e, cell, batch, restore);
                }
                else {
                    e.preventDefault();
                    _this.listenToPointerMove(e, cell, batch, restore);
                }
            }
            else {
                e.preventDefault();
                _this.listenToPointerMove(e, undefined, batch, restore);
            }
        };
        _this.onAreaPointerDown = function (e) {
            if (e.target === _this.area) {
                _this.onPaperPointerDown(e, undefined);
            }
        };
        _this.onPointerMove = function (e) {
            if (!_this.movingState || _this.scrollBeforeUpdate) {
                return;
            }
            var _a = _this.movingState, origin = _a.origin, target = _a.target, panning = _a.panning;
            var pageOffsetX = e.pageX - origin.pageX;
            var pageOffsetY = e.pageY - origin.pageY;
            if (Math.abs(pageOffsetX) >= 1 && Math.abs(pageOffsetY) >= 1) {
                _this.movingState.pointerMoved = true;
            }
            if (typeof target === 'undefined') {
                if (panning) {
                    _this.area.scrollLeft = _this.panningScrollOrigin.scrollLeft - pageOffsetX;
                    _this.area.scrollTop = _this.panningScrollOrigin.scrollTop - pageOffsetY;
                }
                _this.source.trigger('pointerMove', { source: _this, sourceEvent: e, target: target, panning: panning });
            }
            else if (target instanceof elements_1.Element) {
                var _b = _this.pageToPaperCoords(e.pageX, e.pageY), x = _b.x, y = _b.y;
                var _c = _this.movingElementOrigin, pointerX = _c.pointerX, pointerY = _c.pointerY, elementX = _c.elementX, elementY = _c.elementY;
                target.setPosition({
                    x: elementX + x - pointerX,
                    y: elementY + y - pointerY,
                });
                _this.source.trigger('pointerMove', { source: _this, sourceEvent: e, target: target, panning: panning });
                _this.props.view.performSyncUpdate();
            }
            else if (target instanceof elements_1.Link) {
                var location_1 = _this.pageToPaperCoords(e.pageX, e.pageY);
                var linkVertex = _this.generateLinkVertex(target, location_1);
                linkVertex.createAt(location_1);
                _this.movingState.target = linkVertex;
            }
            else if (target instanceof elements_1.LinkVertex) {
                var location_2 = _this.pageToPaperCoords(e.pageX, e.pageY);
                target.moveTo(location_2);
                _this.source.trigger('pointerMove', { source: _this, sourceEvent: e, target: target, panning: panning });
                _this.props.view.performSyncUpdate();
            }
        };
        _this.stopListeningToPointerMove = function (e) {
            var movingState = _this.movingState;
            _this.movingState = undefined;
            if (movingState) {
                document.removeEventListener('mousemove', _this.onPointerMove);
                document.removeEventListener('mouseup', _this.stopListeningToPointerMove);
            }
            if (e && movingState) {
                var pointerMoved = movingState.pointerMoved, target = movingState.target, batch = movingState.batch, restoreGeometry = movingState.restoreGeometry;
                _this.source.trigger('pointerUp', {
                    source: _this,
                    sourceEvent: e,
                    target: target,
                    panning: movingState.panning,
                    triggerAsClick: !pointerMoved,
                });
                var restore = restoreGeometry.filterOutUnchanged();
                if (restore.hasChanges()) {
                    batch.history.registerToUndo(restore);
                }
                batch.store();
            }
        };
        _this.onWheel = function (e) {
            if (_this.shouldStartZooming(e)) {
                e.preventDefault();
                var delta = Math.max(-1, Math.min(1, e.deltaY || e.deltaX));
                var pivot = _this.pageToPaperCoords(e.pageX, e.pageY);
                _this.zoomBy(-delta * 0.1, { pivot: pivot });
            }
        };
        _this.onDragOver = function (e) {
            // Necessary. Allows us to drop.
            if (e.preventDefault) {
                e.preventDefault();
            }
            e.dataTransfer.dropEffect = 'move';
            var _a = clientCoordsFor(_this.area, e), x = _a.x, y = _a.y;
            return false;
        };
        _this.onDragDrop = function (e) {
            if (_this.props.onDragDrop) {
                var _a = clientCoordsFor(_this.area, e), x = _a.x, y = _a.y;
                var paperPosition = _this.clientToPaperCoords(x, y);
                _this.props.onDragDrop(e, paperPosition);
            }
        };
        _this.onScroll = function () {
            _this.source.trigger('scroll', { source: _this });
        };
        _this.applyViewportState = function (targetState) {
            var scale = targetState.scale.x;
            var paperCenter = targetState.center;
            _this.setState({ scale: scale }, function () {
                var _a = _this.state, originX = _a.originX, originY = _a.originY, paddingX = _a.paddingX, paddingY = _a.paddingY;
                var scrollCenterX = (paperCenter.x + originX) * scale;
                var scrollCenterY = (paperCenter.y + originY) * scale;
                var _b = _this.area, clientWidth = _b.clientWidth, clientHeight = _b.clientHeight;
                _this.area.scrollLeft = scrollCenterX - clientWidth / 2 + paddingX;
                _this.area.scrollTop = scrollCenterY - clientHeight / 2 + paddingY;
                if (_this.props.onZoom) {
                    _this.props.onZoom(scale, scale);
                }
            });
        };
        _this.state = {
            paperWidth: _this.pageSize.x,
            paperHeight: _this.pageSize.y,
            originX: 0,
            originY: 0,
            scale: 1,
            paddingX: 0,
            paddingY: 0,
            renderedWidgets: [],
        };
        return _this;
    }
    Object.defineProperty(PaperArea.prototype, "zoomOptions", {
        get: function () {
            var _a = this.props.zoomOptions || {}, _b = _a.min, min = _b === void 0 ? 0.2 : _b, _c = _a.max, max = _c === void 0 ? 2 : _c, _d = _a.step, step = _d === void 0 ? 0.1 : _d, _e = _a.maxFit, maxFit = _e === void 0 ? 1 : _e, _f = _a.fitPadding, fitPadding = _f === void 0 ? 20 : _f, _g = _a.requireCtrl, requireCtrl = _g === void 0 ? true : _g;
            return { min: min, max: max, step: step, maxFit: maxFit, fitPadding: fitPadding, requireCtrl: requireCtrl };
        },
        enumerable: true,
        configurable: true
    });
    PaperArea.prototype.getChildContext = function () {
        var view = this.props.view;
        var ontodiaPaperArea = { paperArea: this, view: view };
        return { ontodiaPaperArea: ontodiaPaperArea };
    };
    PaperArea.prototype.render = function () {
        var _a = this.props, view = _a.view, watermarkSvg = _a.watermarkSvg, watermarkUrl = _a.watermarkUrl;
        var _b = this.state, paperWidth = _b.paperWidth, paperHeight = _b.paperHeight, originX = _b.originX, originY = _b.originY, scale = _b.scale, paddingX = _b.paddingX, paddingY = _b.paddingY, renderedWidgets = _b.renderedWidgets;
        var paperTransform = {
            width: paperWidth, height: paperHeight,
            originX: originX, originY: originY, scale: scale, paddingX: paddingX, paddingY: paddingY,
        };
        var widgetProps = { paperArea: this, paperTransform: paperTransform };
        var areaClass = CLASS_NAME + "__area";
        if (this.props.hideScrollBars) {
            areaClass += " " + CLASS_NAME + "--hide-scrollbars";
        }
        var componentClass = CLASS_NAME;
        if (this.isAnimatingGraph()) {
            componentClass += " " + CLASS_NAME + "--animated";
        }
        return (React.createElement("div", { className: componentClass, ref: this.onOuterMount },
            React.createElement("div", { className: areaClass, ref: this.onAreaMount, onMouseDown: this.onAreaPointerDown },
                React.createElement(paper_1.Paper, { view: view, paperTransform: paperTransform, onPointerDown: this.onPaperPointerDown, linkLayerWidgets: React.createElement("div", { className: CLASS_NAME + "__widgets", onMouseDown: this.onWidgetsMouseDown }, renderedWidgets.filter(function (w) { return w.attachment === view_1.WidgetAttachment.OverLinks; }).map(function (widget) { return React.cloneElement(widget.element, widgetProps); })), elementLayerWidgets: React.createElement("div", { className: CLASS_NAME + "__widgets", onMouseDown: this.onWidgetsMouseDown }, renderedWidgets.filter(function (w) { return w.attachment === view_1.WidgetAttachment.OverElements; }).map(function (widget) { return React.cloneElement(widget.element, widgetProps); })) }),
                watermarkSvg ? (React.createElement("a", { href: watermarkUrl, target: '_blank', rel: 'noopener' },
                    React.createElement("img", { className: CLASS_NAME + "__watermark", src: watermarkSvg, draggable: false }))) : null),
            renderedWidgets.filter(function (w) { return w.attachment === view_1.WidgetAttachment.Viewport; }).map(function (widget) {
                return React.cloneElement(widget.element, widgetProps);
            })));
    };
    PaperArea.prototype.componentDidMount = function () {
        var _this = this;
        this.adjustPaper(function () { return _this.centerTo(); });
        var view = this.props.view;
        var delayedAdjust = function () { return _this.delayedPaperAdjust.call(_this.adjustPaper); };
        this.listener.listen(view.model.events, 'changeCells', delayedAdjust);
        this.listener.listen(view.model.events, 'elementEvent', function (_a) {
            var data = _a.data;
            if (data.changePosition || data.changeSize) {
                delayedAdjust();
            }
        });
        this.listener.listen(view.model.events, 'linkEvent', function (_a) {
            var data = _a.data;
            if (data.changeVertices) {
                delayedAdjust();
            }
        });
        this.listener.listen(view.events, 'syncUpdate', function (_a) {
            var layer = _a.layer;
            if (layer !== view_1.RenderingLayer.PaperArea) {
                return;
            }
            _this.delayedPaperAdjust.runSynchronously();
        });
        this.listener.listen(view.events, 'updateWidgets', function (_a) {
            var widgets = _a.widgets;
            _this.updateWidgets(widgets);
        });
        this.area.addEventListener('dragover', this.onDragOver);
        this.area.addEventListener('drop', this.onDragDrop);
        this.area.addEventListener('scroll', this.onScroll);
        this.area.addEventListener('wheel', this.onWheel, polyfills_1.isIE11() ? false : { passive: false });
    };
    PaperArea.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (this.scrollBeforeUpdate) {
            var _a = this.state, scale = _a.scale, originX = _a.originX, originY = _a.originY, paddingX = _a.paddingX, paddingY = _a.paddingY;
            var scrollX_1 = (originX - prevState.originX) * scale + (paddingX - prevState.paddingX);
            var scrollY_1 = (originY - prevState.originY) * scale + (paddingY - prevState.paddingY);
            var scrollLeft = this.scrollBeforeUpdate.left + scrollX_1;
            var scrollTop = this.scrollBeforeUpdate.top + scrollY_1;
            this.area.scrollLeft = scrollLeft;
            this.area.scrollTop = scrollTop;
            this.scrollBeforeUpdate = undefined;
        }
    };
    PaperArea.prototype.componentWillUnmount = function () {
        this.stopListeningToPointerMove();
        this.listener.stopListening();
        this.area.removeEventListener('dragover', this.onDragOver);
        this.area.removeEventListener('drop', this.onDragDrop);
        this.area.removeEventListener('scroll', this.onScroll);
        this.area.removeEventListener('wheel', this.onWheel);
    };
    PaperArea.prototype.updateWidgets = function (update) {
        var _this = this;
        this.widgets = tslib_1.__assign(tslib_1.__assign({}, this.widgets), update);
        var renderedWidgets = Object.keys(this.widgets)
            .filter(function (key) { return _this.widgets[key]; })
            .map(function (key) {
            var widget = _this.widgets[key];
            var element = React.cloneElement(widget.element, { key: key });
            return tslib_1.__assign(tslib_1.__assign({}, widget), { element: element });
        });
        this.setState({ renderedWidgets: renderedWidgets });
    };
    PaperArea.prototype.pageToPaperCoords = function (pageX, pageY) {
        var _a = this.area.getBoundingClientRect(), left = _a.left, top = _a.top;
        return this.clientToPaperCoords(pageX - (left + window.pageXOffset), pageY - (top + window.pageYOffset));
    };
    PaperArea.prototype.clientToPaperCoords = function (areaClientX, areaClientY) {
        var _a = this.clientToScrollablePaneCoords(areaClientX, areaClientY), paneX = _a.x, paneY = _a.y;
        return this.scrollablePaneToPaperCoords(paneX, paneY);
    };
    PaperArea.prototype.clientToScrollablePaneCoords = function (areaClientX, areaClientY) {
        var _a = this.state, paddingX = _a.paddingX, paddingY = _a.paddingY;
        var paneX = areaClientX + this.area.scrollLeft - paddingX;
        var paneY = areaClientY + this.area.scrollTop - paddingY;
        return { x: paneX, y: paneY };
    };
    PaperArea.prototype.scrollablePaneToPaperCoords = function (paneX, paneY) {
        var _a = this.state, scale = _a.scale, paddingX = _a.paddingX, paddingY = _a.paddingY, originX = _a.originX, originY = _a.originY;
        var paperX = paneX / scale - originX;
        var paperY = paneY / scale - originY;
        return { x: paperX, y: paperY };
    };
    PaperArea.prototype.paperToScrollablePaneCoords = function (paperX, paperY) {
        var _a = this.state, scale = _a.scale, paddingX = _a.paddingX, paddingY = _a.paddingY, originX = _a.originX, originY = _a.originY;
        var paneX = (paperX + originX) * scale;
        var paneY = (paperY + originY) * scale;
        return { x: paneX, y: paneY };
    };
    /** Returns bounding box of paper content in paper coordinates. */
    PaperArea.prototype.getContentFittingBox = function () {
        var _a = this.props.view.model, elements = _a.elements, links = _a.links;
        return getContentFittingBox(elements, links);
    };
    /** Returns paper size in paper coordinates. */
    PaperArea.prototype.getPaperSize = function () {
        var _a = this.state, width = _a.paperWidth, height = _a.paperHeight, scale = _a.scale;
        return { width: width / scale, height: height / scale };
    };
    PaperArea.prototype.getAreaMetrics = function () {
        var _a = this.area, clientWidth = _a.clientWidth, clientHeight = _a.clientHeight, offsetWidth = _a.offsetWidth, offsetHeight = _a.offsetHeight;
        return { clientWidth: clientWidth, clientHeight: clientHeight, offsetWidth: offsetWidth, offsetHeight: offsetHeight };
    };
    PaperArea.prototype.computeAdjustedBox = function () {
        // bbox in paper coordinates
        var bbox = this.getContentFittingBox();
        var bboxLeft = bbox.x;
        var bboxTop = bbox.y;
        var bboxRight = bbox.x + bbox.width;
        var bboxBottom = bbox.y + bbox.height;
        var _a = this.pageSize, gridWidth = _a.x, gridHeight = _a.y;
        // bbox in integer grid coordinates (open-closed intervals)
        var bboxGrid = {
            left: Math.floor(bboxLeft / gridWidth),
            top: Math.floor(bboxTop / gridHeight),
            right: Math.ceil(bboxRight / gridWidth),
            bottom: Math.ceil(bboxBottom / gridHeight),
        };
        // const oldOrigin = this.paper.options.origin;
        var originX = -bboxGrid.left * gridWidth;
        var originY = -bboxGrid.top * gridHeight;
        var paperWidth = Math.max(bboxGrid.right - bboxGrid.left, 1) * gridWidth;
        var paperHeight = Math.max(bboxGrid.bottom - bboxGrid.top, 1) * gridHeight;
        return { paperWidth: paperWidth, paperHeight: paperHeight, originX: originX, originY: originY };
    };
    PaperArea.prototype.shouldStartZooming = function (e) {
        return Boolean(e.ctrlKey) && Boolean(this.zoomOptions.requireCtrl) || !this.zoomOptions.requireCtrl;
    };
    PaperArea.prototype.shouldStartPanning = function (e) {
        var modifierPressed = e.ctrlKey || e.shiftKey || e.altKey;
        return e.button === LEFT_MOUSE_BUTTON && !modifierPressed;
    };
    PaperArea.prototype.startMoving = function (e, element) {
        var _a = this.pageToPaperCoords(e.pageX, e.pageY), pointerX = _a.x, pointerY = _a.y;
        var _b = element.position, elementX = _b.x, elementY = _b.y;
        this.movingElementOrigin = { pointerX: pointerX, pointerY: pointerY, elementX: elementX, elementY: elementY };
    };
    PaperArea.prototype.startPanning = function (event) {
        var _a = this.area, scrollLeft = _a.scrollLeft, scrollTop = _a.scrollTop;
        this.panningScrollOrigin = { scrollLeft: scrollLeft, scrollTop: scrollTop };
        this.clearTextSelectionInArea();
    };
    /** Clears accidental text selection in the diagram area. */
    PaperArea.prototype.clearTextSelectionInArea = function () {
        if (document.getSelection) {
            var selection = document.getSelection();
            if (selection.removeAllRanges) {
                selection.removeAllRanges();
            }
        }
    };
    PaperArea.prototype.generateLinkVertex = function (link, location) {
        var previous = link.vertices;
        var vertices = previous ? tslib_1.__spreadArrays(previous) : [];
        var model = this.props.view.model;
        var polyline = geometry_1.computePolyline(model.getElement(link.sourceId), model.getElement(link.targetId), vertices);
        var segmentIndex = geometry_1.findNearestSegmentIndex(polyline, location);
        return new elements_1.LinkVertex(link, segmentIndex);
    };
    PaperArea.prototype.listenToPointerMove = function (event, cell, batch, restoreGeometry) {
        if (this.movingState) {
            return;
        }
        var panning = cell === undefined && this.shouldStartPanning(event);
        if (panning) {
            this.startPanning(event);
        }
        var pageX = event.pageX, pageY = event.pageY;
        this.movingState = {
            origin: { pageX: pageX, pageY: pageY },
            target: cell,
            panning: panning,
            pointerMoved: false,
            batch: batch,
            restoreGeometry: restoreGeometry,
        };
        document.addEventListener('mousemove', this.onPointerMove);
        document.addEventListener('mouseup', this.stopListeningToPointerMove);
        this.source.trigger('pointerDown', {
            source: this, sourceEvent: event, target: cell, panning: panning,
        });
    };
    PaperArea.prototype.centerTo = function (paperPosition, options) {
        if (options === void 0) { options = {}; }
        var _a = this.state, paperWidth = _a.paperWidth, paperHeight = _a.paperHeight;
        var paperCenter = paperPosition || { x: paperWidth / 2, y: paperHeight / 2 };
        var viewportState = {
            center: paperCenter,
        };
        return this.setViewportState(viewportState, options);
    };
    PaperArea.prototype.centerContent = function (options) {
        if (options === void 0) { options = {}; }
        var bbox = this.getContentFittingBox();
        return this.centerTo({
            x: bbox.x + bbox.width / 2,
            y: bbox.y + bbox.height / 2,
        }, options);
    };
    PaperArea.prototype.getScale = function () {
        return this.state.scale;
    };
    PaperArea.prototype.setScale = function (value, options) {
        var scale = value;
        var _a = this.zoomOptions, min = _a.min, max = _a.max;
        scale = Math.max(scale, min);
        scale = Math.min(scale, max);
        var viewportState;
        if (options && options.pivot) {
            var _b = options.pivot, x = _b.x, y = _b.y;
            var paperCenter = this.clientToPaperCoords(this.area.clientWidth / 2, this.area.clientHeight / 2);
            var previousScale = this.state.scale;
            var scaledBy = scale / previousScale;
            viewportState = {
                center: {
                    x: x - (x - paperCenter.x) / scaledBy,
                    y: y - (y - paperCenter.y) / scaledBy,
                },
                scale: { x: scale, y: scale },
            };
        }
        else {
            viewportState = {
                scale: { x: scale, y: scale },
            };
        }
        return this.setViewportState(viewportState, options);
    };
    PaperArea.prototype.zoomBy = function (value, options) {
        return this.setScale(this.getScale() + value, options);
    };
    PaperArea.prototype.zoomIn = function (scaleOptions) {
        return this.zoomBy(this.zoomOptions.step, scaleOptions);
    };
    PaperArea.prototype.zoomOut = function (scaleOptions) {
        return this.zoomBy(-this.zoomOptions.step, scaleOptions);
    };
    PaperArea.prototype.zoomToFit = function (options) {
        if (options === void 0) { options = {}; }
        if (options.elements && options.elements.size === 0) {
            return;
        }
        if (this.props.view.model.elements.length === 0) {
            return this.centerTo();
        }
        var bbox;
        var elements;
        if (options.elements) {
            var selectionElements_1 = [];
            options.elements.forEach(function (el) { return selectionElements_1.push(el); });
            elements = selectionElements_1;
        }
        else {
            elements = this.props.view.model.elements;
        }
        bbox = getContentFittingBox(elements, []);
        return this.zoomToFitRect(bbox, options);
    };
    PaperArea.prototype.zoomToFitRect = function (bbox, options) {
        if (options === void 0) { options = {}; }
        var _a = this.area, clientWidth = _a.clientWidth, clientHeight = _a.clientHeight;
        if (bbox.width === 0) {
            return;
        }
        var width = toSvg_1.fitRectKeepingAspectRatio(bbox.width, bbox.height, clientWidth, clientHeight).width;
        var scale = width / bbox.width;
        var _b = this.zoomOptions, min = _b.min, maxFit = _b.maxFit;
        scale = Math.max(scale, min);
        scale = Math.min(scale, maxFit);
        var center = {
            x: bbox.x + bbox.width / 2,
            y: bbox.y + bbox.height / 2,
        };
        var viewPortState = {
            center: center,
            scale: { x: scale, y: scale },
        };
        return this.setViewportState(viewPortState, options);
    };
    PaperArea.prototype.makeToSVGOptions = function () {
        var _this = this;
        var svg = this.area.querySelector('.ontodia-paper__canvas');
        if (!svg) {
            throw new Error('Cannot find SVG canvas to export');
        }
        return {
            model: this.props.view.model,
            paper: svg,
            contentBox: this.getContentFittingBox(),
            getOverlayedElement: function (id) { return _this.area.querySelector("[data-element-id='" + id + "']"); },
            preserveDimensions: true,
            convertImagesToDataUris: true,
            elementsToRemoveSelector: '.ontodia-link__vertex-tools',
            watermarkSvg: this.props.watermarkSvg,
        };
    };
    PaperArea.prototype.exportSVG = function () {
        return toSvg_1.toSVG(this.makeToSVGOptions());
    };
    PaperArea.prototype.exportPNG = function (options) {
        return toSvg_1.toDataURL(tslib_1.__assign(tslib_1.__assign({}, options), this.makeToSVGOptions()));
    };
    PaperArea.prototype.isAnimatingGraph = function () {
        return this.cssAnimations > 0;
    };
    /**
     * Starts animation for graph elements and links.
     *
     * @param setupChanges immediately called function to perform animatable changes on graph
     * @param duration animation duration in milliseconds (requires custom CSS to override)
     * @returns promise which resolves when this animation ends
     */
    PaperArea.prototype.animateGraph = function (setupChanges, duration) {
        var _this = this;
        this.changeGraphAnimationCount(+1);
        setupChanges();
        var timeout = typeof duration === 'number' ? duration : DEFAULT_ANIMATION_DURATION;
        return async_1.delay(timeout).then(function () { return _this.onGraphAnimationEnd(); });
    };
    PaperArea.prototype.onGraphAnimationEnd = function () {
        this.changeGraphAnimationCount(-1);
    };
    PaperArea.prototype.changeGraphAnimationCount = function (change) {
        var newValue = this.cssAnimations + change;
        if (newValue < 0) {
            return;
        }
        var previous = this.isAnimatingGraph();
        this.cssAnimations = newValue;
        var current = this.isAnimatingGraph();
        if (previous !== current) {
            this.forceUpdate();
            this.source.trigger('changeAnimatingGraph', { source: this, previous: previous });
        }
    };
    Object.defineProperty(PaperArea.prototype, "viewportState", {
        get: function () {
            var _a = this.area, clientWidth = _a.clientWidth, clientHeight = _a.clientHeight;
            var _b = this.state, originX = _b.originX, originY = _b.originY, paddingX = _b.paddingX, paddingY = _b.paddingY, scale = _b.scale;
            var scrollCenterX = this.area.scrollLeft + clientWidth / 2 - paddingX;
            var scrollCenterY = this.area.scrollTop + clientHeight / 2 - paddingY;
            var paperCenter = {
                x: scrollCenterX / scale - originX,
                y: scrollCenterY / scale - originY,
            };
            return {
                center: paperCenter,
                scale: {
                    x: scale,
                    y: scale,
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    PaperArea.prototype.setViewportState = function (state, options) {
        var _this = this;
        if (this.viewportAnimation) {
            this.viewportAnimation.cancellation.abort();
        }
        var from = this.viewportState;
        var to = tslib_1.__assign(tslib_1.__assign({}, from), state);
        var animate = options && (options.animate || options.duration > 0);
        if (animate) {
            var viewportAnimation = {
                from: from, to: to, cancellation: new async_1.Cancellation(),
            };
            var durationMs = typeof options.duration === 'number'
                ? options.duration : DEFAULT_ANIMATION_DURATION;
            var awaitPromise = async_1.animateInterval(durationMs, function (progress) {
                var t = async_1.easeInOutBezier(progress);
                var computed = {
                    center: {
                        x: from.center.x + (to.center.x - from.center.x) * t,
                        y: from.center.y + (to.center.y - from.center.y) * t,
                    },
                    scale: {
                        x: from.scale.x + (to.scale.x - from.scale.x) * t,
                        y: from.scale.y + (to.scale.y - from.scale.y) * t,
                    },
                };
                _this.applyViewportState(computed);
            }, viewportAnimation.cancellation);
            this.viewportAnimation = viewportAnimation;
            return awaitPromise.then(function () {
                _this.viewportAnimation = undefined;
            });
        }
        else {
            this.applyViewportState(to);
            return Promise.resolve();
        }
    };
    PaperArea.childContextTypes = exports.PaperAreaContextTypes;
    return PaperArea;
}(React.Component));
exports.PaperArea = PaperArea;
function clientCoordsFor(container, e) {
    var target = (e.target instanceof SVGElement && e.target.ownerSVGElement !== null)
        ? e.target.ownerSVGElement : e.target;
    var targetBox = target.getBoundingClientRect();
    var containerBox = container.getBoundingClientRect();
    return {
        x: e.offsetX + (targetBox.left - containerBox.left),
        y: e.offsetY + (targetBox.top - containerBox.top),
    };
}
function getContentFittingBox(elements, links) {
    var minX = Infinity, minY = Infinity;
    var maxX = -Infinity, maxY = -Infinity;
    for (var _i = 0, elements_2 = elements; _i < elements_2.length; _i++) {
        var element = elements_2[_i];
        var _a = element.position, x = _a.x, y = _a.y;
        var size = element.size;
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x + size.width);
        maxY = Math.max(maxY, y + size.height);
    }
    for (var _b = 0, links_1 = links; _b < links_1.length; _b++) {
        var link = links_1[_b];
        var vertices = link.vertices || [];
        for (var _c = 0, vertices_1 = vertices; _c < vertices_1.length; _c++) {
            var _d = vertices_1[_c], x = _d.x, y = _d.y;
            minX = Math.min(minX, x);
            minY = Math.min(minY, y);
            maxX = Math.max(maxX, x);
            maxY = Math.max(maxY, y);
        }
    }
    return {
        x: Number.isFinite(minX) ? minX : 0,
        y: Number.isFinite(minY) ? minY : 0,
        width: Number.isFinite(minX) && Number.isFinite(maxX) ? (maxX - minX) : 0,
        height: Number.isFinite(minY) && Number.isFinite(maxY) ? (maxY - minY) : 0,
    };
}
exports.getContentFittingBox = getContentFittingBox;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var lodash_1 = __webpack_require__(66);
var geometry_1 = __webpack_require__(56);
var polyfills_1 = __webpack_require__(42);
var htmlToSvg_1 = __webpack_require__(84);
var canvg = __webpack_require__(41);
var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
/**
 * Padding (in px) for <foreignObject> elements of exported SVG to
 * mitigate issues with elements body overflow caused by missing styles
 * in exported image.
 */
var FOREIGN_OBJECT_SIZE_PADDING = 2;
var BORDER_PADDING = 100;
function toSVG(options) {
    return exportSVG(options).then(function (svg) { return new XMLSerializer().serializeToString(svg); });
}
exports.toSVG = toSVG;
function exportSVG(options) {
    var bbox = options.contentBox, watermarkSvg = options.watermarkSvg;
    var _a = clonePaperSvg(options, FOREIGN_OBJECT_SIZE_PADDING), svgClone = _a.svgClone, imageBounds = _a.imageBounds;
    if (polyfills_1.isIE11()) {
        clearAttributes(svgClone);
    }
    var paddedWidth = bbox.width + 2 * BORDER_PADDING;
    var paddedHeight = bbox.height + 2 * BORDER_PADDING;
    if (options.preserveDimensions) {
        svgClone.setAttribute('width', paddedWidth.toString());
        svgClone.setAttribute('height', paddedHeight.toString());
    }
    else {
        svgClone.setAttribute('width', '100%');
        svgClone.setAttribute('height', '100%');
    }
    var viewBox = {
        x: bbox.x - BORDER_PADDING,
        y: bbox.y - BORDER_PADDING,
        width: paddedWidth,
        height: paddedHeight,
    };
    svgClone.setAttribute('viewBox', viewBox.x + " " + viewBox.y + " " + viewBox.width + " " + viewBox.height);
    addWatermark(svgClone, viewBox, watermarkSvg);
    var images = [];
    if (!polyfills_1.isIE11()) {
        var nodes = svgClone.querySelectorAll('img');
        foreachNode(nodes, function (node) { return images.push(node); });
    }
    var convertingImages = Promise.all(images.map(function (img) {
        var exportKey = img.getAttribute('export-key');
        img.removeAttribute('export-key');
        if (exportKey) {
            var _a = imageBounds[exportKey], width = _a.width, height = _a.height;
            img.setAttribute('width', width.toString());
            img.setAttribute('height', height.toString());
            if (!options.convertImagesToDataUris) {
                return Promise.resolve();
            }
            return exportAsDataUri(img).then(function (dataUri) {
                // check for empty svg data URI which happens when mockJointXHR catches an exception
                if (dataUri && dataUri !== 'data:image/svg+xml,') {
                    img.src = dataUri;
                }
            }).catch(function (err) {
                // tslint:disable-next-line:no-console
                console.warn('Failed to export image: ' + img.src, err);
            });
        }
        else {
            return Promise.resolve();
        }
    }));
    return convertingImages.then(function () {
        // workaround to include only ontodia-related stylesheets
        var exportedCssText = extractCSSFromDocument(svgClone);
        var defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        defs.innerHTML = "<style>" + exportedCssText + "</style>";
        svgClone.insertBefore(defs, svgClone.firstChild);
        if (options.elementsToRemoveSelector) {
            foreachNode(svgClone.querySelectorAll(options.elementsToRemoveSelector), function (node) { return node.remove(); });
        }
        return svgClone;
    });
}
function addWatermark(svg, viewBox, watermarkSvg) {
    var WATERMARK_CLASS = 'ontodia-exported-watermark';
    var WATERMARK_MAX_WIDTH = 120;
    var WATERMARK_PADDING = 20;
    var image = document.createElementNS(SVG_NAMESPACE, 'image');
    image.setAttributeNS('http://www.w3.org/1999/xlink', 'href', watermarkSvg);
    image.setAttribute('class', WATERMARK_CLASS);
    var width = Math.min(viewBox.width * 0.2, WATERMARK_MAX_WIDTH);
    var x = viewBox.x + viewBox.width - width - WATERMARK_PADDING;
    var y = viewBox.y + WATERMARK_PADDING;
    image.setAttribute('x', x.toString());
    image.setAttribute('y', y.toString());
    image.setAttribute('width', width.toString());
    image.setAttribute('opacity', '0.3');
    svg.insertBefore(image, svg.firstChild);
}
function clearAttributes(svg) {
    var availableIds = {};
    var prohibitedIds = {};
    var defss = svg.querySelectorAll('defs');
    foreachNode(defss, function (defs) {
        foreachNode(defs.childNodes, function (def) {
            var id = def.getAttribute('id');
            if (id) {
                availableIds[id] = true;
                if (polyfills_1.isIE11() && def instanceof SVGFilterElement) {
                    availableIds[id] = false;
                }
            }
        });
    });
    var paths = svg.querySelectorAll('*');
    foreachNode(paths, function (path) {
        var markerStart = extractId(path.getAttribute('marker-start'));
        if (markerStart && !availableIds[markerStart]) {
            path.removeAttribute('marker-start');
        }
        var markerEnd = extractId(path.getAttribute('marker-end'));
        if (markerEnd && !availableIds[markerEnd]) {
            path.removeAttribute('marker-end');
        }
        var filterId = extractId(path.getAttribute('filter'));
        if (filterId && !availableIds[filterId]) {
            path.removeAttribute('filter');
        }
    });
    function extractId(attributeValue) {
        if (attributeValue) {
            if (polyfills_1.isIE11()) {
                return (attributeValue.match(/#(.*?)"/) || [])[1];
            }
            else {
                return (attributeValue.match(/#(.*?)\)/) || [])[1];
            }
        }
        else {
            return undefined;
        }
    }
}
function extractCSSFromDocument(targetSubtree) {
    var exportedRules = new Set();
    for (var i = 0; i < document.styleSheets.length; i++) {
        var rules = void 0;
        try {
            var cssSheet = document.styleSheets[i];
            rules = cssSheet.cssRules || cssSheet.rules;
            if (!rules) {
                continue;
            }
        }
        catch (e) {
            continue;
        }
        for (var j = 0; j < rules.length; j++) {
            var rule = rules[j];
            if (rule instanceof CSSStyleRule) {
                if (targetSubtree.querySelector(rule.selectorText)) {
                    exportedRules.add(rule);
                }
            }
        }
    }
    var exportedCssTexts = [];
    exportedRules.forEach(function (rule) { return exportedCssTexts.push(rule.cssText); });
    return exportedCssTexts.join('\n');
}
function clonePaperSvg(options, elementSizePadding) {
    var model = options.model, paper = options.paper, getOverlayedElement = options.getOverlayedElement;
    var svgClone = paper.cloneNode(true);
    svgClone.removeAttribute('class');
    svgClone.removeAttribute('style');
    function findViewport() {
        var child = svgClone.firstChild;
        while (child) {
            if (child instanceof SVGGElement) {
                return child;
            }
            child = child.nextSibling;
        }
        return undefined;
    }
    var viewport = findViewport();
    viewport.removeAttribute('transform');
    var imageBounds = {};
    var _loop_1 = function (element) {
        var modelId = element.id;
        var overlayedView = getOverlayedElement(modelId);
        if (!overlayedView) {
            return "continue";
        }
        var elementRoot = document.createElementNS(SVG_NAMESPACE, 'g');
        var overlayedViewContent = overlayedView.firstChild.cloneNode(true);
        elementRoot.setAttribute('class', 'ontodia-exported-element');
        var newRoot = void 0;
        if (polyfills_1.isIE11()) {
            newRoot = htmlToSvg_1.htmlToSvg(overlayedView, [], options.mockImages);
        }
        else {
            newRoot = document.createElementNS(SVG_NAMESPACE, 'foreignObject');
            newRoot.appendChild(overlayedViewContent);
        }
        var _a = geometry_1.boundsOf(element), x = _a.x, y = _a.y, width = _a.width, height = _a.height;
        newRoot.setAttribute('transform', "translate(" + x + "," + y + ")");
        newRoot.setAttribute('width', (width + elementSizePadding).toString());
        newRoot.setAttribute('height', (height + elementSizePadding).toString());
        elementRoot.appendChild(newRoot);
        viewport.appendChild(elementRoot);
        var originalNodes = overlayedView.firstChild.querySelectorAll('img');
        var clonedNodes = overlayedViewContent.querySelectorAll('img');
        foreachNode(overlayedView.querySelectorAll('img'), function (img, index) {
            var exportKey = lodash_1.uniqueId('export-key-');
            clonedNodes[index].setAttribute('export-key', exportKey);
            imageBounds[exportKey] = {
                width: img.clientWidth,
                height: img.clientHeight,
            };
        });
    };
    for (var _i = 0, _a = model.elements; _i < _a.length; _i++) {
        var element = _a[_i];
        _loop_1(element);
    }
    return { svgClone: svgClone, imageBounds: imageBounds };
}
function exportAsDataUri(original) {
    var url = original.src;
    if (!url || url.startsWith('data:')) {
        return Promise.resolve(url);
    }
    return loadCrossOriginImage(original.src).then(function (image) {
        var canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
        var context = canvas.getContext('2d');
        context.drawImage(image, 0, 0);
        // match extensions like htttp://example.com/images/foo.JPG&w=200
        var extensionMatch = url.match(/\.([a-zA-Z0-9]+)[^\.a-zA-Z0-9]?[^\.]*$/);
        var extension = extensionMatch ? extensionMatch[1].toLowerCase() : 'png';
        try {
            var mimeType = 'image/' + (extension === 'jpg' ? 'jpeg' : extension);
            var dataUri = canvas.toDataURL(mimeType);
            return Promise.resolve(dataUri);
        }
        catch (e) {
            if (extension !== 'svg') {
                return Promise.reject('Failed to convert image to data URI');
            }
            return fetch(url)
                .then(function (response) { return response.text(); })
                .then(function (svg) { return svg.length > 0 ? ('data:image/svg+xml,' + encodeURIComponent(svg)) : ''; });
        }
    });
}
function loadCrossOriginImage(src) {
    var image = new Image();
    image.crossOrigin = 'anonymous';
    var promise = new Promise(function (resolve, reject) {
        image.onload = function () { return resolve(image); };
        image.onerror = function (ev) { return reject(ev); };
    });
    image.src = src;
    return promise;
}
function foreachNode(nodeList, callback) {
    for (var i = 0; i < nodeList.length; i++) {
        callback(nodeList[i], i);
    }
}
var MAX_CANVAS_LENGTH = 4096;
function toDataURL(options) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        function createCanvas(canvasWidth, canvasHeight, backgroundColor) {
            var cnv = document.createElement('canvas');
            cnv.width = canvasWidth;
            cnv.height = canvasHeight;
            var cnt = cnv.getContext('2d');
            if (backgroundColor) {
                cnt.fillStyle = backgroundColor;
                cnt.fillRect(0, 0, canvasWidth, canvasHeight);
            }
            return { canvas: cnv, context: cnt };
        }
        var paper, _a, mimeType, svgOptions, svg, svgBox, containerSize, _b, innerSize, outerSize, offset, svgString, _c, canvas, context, image;
        return tslib_1.__generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    paper = options.paper, _a = options.mimeType, mimeType = _a === void 0 ? 'image/png' : _a;
                    svgOptions = tslib_1.__assign(tslib_1.__assign({}, options), { convertImagesToDataUris: true, mockImages: polyfills_1.isIE11(), preserveDimensions: true });
                    return [4 /*yield*/, exportSVG(svgOptions)];
                case 1:
                    svg = _d.sent();
                    svgBox = {
                        width: Number(svg.getAttribute('width')),
                        height: Number(svg.getAttribute('height')),
                    };
                    containerSize = (typeof options.width === 'number' || typeof options.height === 'number')
                        ? { width: options.width, height: options.height }
                        : fallbackContainerSize(svgBox);
                    _b = computeAutofit(svgBox, containerSize), innerSize = _b.innerSize, outerSize = _b.outerSize, offset = _b.offset;
                    svg.setAttribute('width', innerSize.width.toString());
                    svg.setAttribute('height', innerSize.height.toString());
                    svgString = new XMLSerializer().serializeToString(svg);
                    _c = createCanvas(outerSize.width, outerSize.height, options.backgroundColor), canvas = _c.canvas, context = _c.context;
                    if (!polyfills_1.isIE11()) return [3 /*break*/, 2];
                    if (!canvg) {
                        throw new Error('"canvg-fixed" dependency required to support exporting in the IE.');
                    }
                    canvg(canvas, svgString, {
                        offsetX: offset.x,
                        offsetY: offset.y,
                        scaleWidth: innerSize.width,
                        scaleHeight: innerSize.height,
                        ignoreDimensions: true,
                        ignoreClear: true,
                    });
                    return [2 /*return*/, canvas.toDataURL(mimeType, options.quality)];
                case 2: return [4 /*yield*/, loadImage('data:image/svg+xml,' + encodeURIComponent(svgString))];
                case 3:
                    image = _d.sent();
                    context.drawImage(image, offset.x, offset.y, innerSize.width, innerSize.height);
                    return [2 /*return*/, canvas.toDataURL(mimeType, options.quality)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.toDataURL = toDataURL;
function loadImage(source) {
    return new Promise(function (resolve, reject) {
        var image = new Image();
        image.onload = function () {
            resolve(image);
        };
        image.onerror = function (ev) {
            reject(ev);
        };
        image.src = source;
    });
}
exports.loadImage = loadImage;
function computeAutofit(itemSize, containerSize) {
    var fit = fitRectKeepingAspectRatio(itemSize.width, itemSize.height, containerSize.width, containerSize.height);
    var innerSize = {
        width: Math.floor(fit.width),
        height: Math.floor(fit.height),
    };
    var outerSize = {
        width: typeof containerSize.width === 'number' ? containerSize.width : innerSize.width,
        height: typeof containerSize.height === 'number' ? containerSize.height : innerSize.height,
    };
    var offset = {
        x: Math.round((outerSize.width - innerSize.width) / 2),
        y: Math.round((outerSize.height - innerSize.height) / 2),
    };
    return { innerSize: innerSize, outerSize: outerSize, offset: offset };
}
function fallbackContainerSize(itemSize) {
    var maxResolutionScale = Math.min(MAX_CANVAS_LENGTH / itemSize.width, MAX_CANVAS_LENGTH / itemSize.height);
    var resolutionScale = Math.min(2.0, maxResolutionScale);
    var width = Math.floor(itemSize.width * resolutionScale);
    var height = Math.floor(itemSize.height * resolutionScale);
    return { width: width, height: height };
}
function fitRectKeepingAspectRatio(sourceWidth, sourceHeight, targetWidth, targetHeight) {
    if (!(typeof targetWidth === 'number' || typeof targetHeight === 'number')) {
        return { width: sourceWidth, height: sourceHeight };
    }
    var sourceAspectRatio = sourceWidth / sourceHeight;
    targetWidth = typeof targetWidth === 'number' ? targetWidth : targetHeight * sourceAspectRatio;
    targetHeight = typeof targetHeight === 'number' ? targetHeight : targetWidth / sourceAspectRatio;
    if (targetHeight * sourceAspectRatio <= targetWidth) {
        return { width: targetHeight * sourceAspectRatio, height: targetHeight };
    }
    else {
        return { width: targetWidth, height: targetWidth / sourceAspectRatio };
    }
}
exports.fitRectKeepingAspectRatio = fitRectKeepingAspectRatio;
/**
 * Creates and returns a blob from a data URL (either base64 encoded or not).
 *
 * @param {string} dataURL The data URL to convert.
 * @return {Blob} A blob representing the array buffer data.
 */
function dataURLToBlob(dataURL) {
    var BASE64_MARKER = ';base64,';
    if (dataURL.indexOf(BASE64_MARKER) === -1) {
        var parts = dataURL.split(',');
        var contentType = parts[0].split(':')[1];
        var raw = decodeURIComponent(parts[1]);
        return new Blob([raw], { type: contentType });
    }
    else {
        var parts = dataURL.split(BASE64_MARKER);
        var contentType = parts[0].split(':')[1];
        var raw = window.atob(parts[1]);
        var rawLength = raw.length;
        var uInt8Array = new Uint8Array(rawLength);
        for (var i = 0; i < rawLength; ++i) {
            uInt8Array[i] = raw.charCodeAt(i);
        }
        return new Blob([uInt8Array], { type: contentType });
    }
}
exports.dataURLToBlob = dataURLToBlob;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __webpack_require__(66);
function htmlToSvg(htmlView, blackList, mockImages) {
    blackList = blackList || [];
    var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    var defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    var primitives = breakIntoPrimitives(htmlView);
    for (var _i = 0, primitives_1 = primitives; _i < primitives_1.length; _i++) {
        var primitive = primitives_1[_i];
        var id = primitive.getAttribute('id');
        if (!id) {
            g.appendChild(primitive);
        }
        else {
            primitive.removeAttribute('id');
            var clipPath = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
            clipPath.setAttribute('id', id);
            clipPath.appendChild(primitive);
            defs.appendChild(clipPath);
        }
    }
    g.appendChild(defs);
    return g;
    function breakIntoPrimitives(domElement) {
        if (domElement instanceof Element) {
            if (domElement instanceof HTMLImageElement) {
                return !mockImages ? processImage(domElement) : processElement(domElement);
            }
            else if (domElement instanceof HTMLElement) {
                return processElement(domElement);
            }
        }
        else if (domElement instanceof Text) {
            return processText(domElement);
        }
        return [];
    }
    function processImage(htmlElement) {
        var image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
        // Process current node
        var style = window.getComputedStyle(htmlElement);
        var offsetTop = getOffsetTop(htmlElement);
        var offsetLeft = getOffsetLeft(htmlElement);
        var width = style.width;
        var height = style.height;
        // path.setAttribute('className', htmlElement.className);
        image.setAttribute('stroke', style.borderColor);
        image.setAttribute('stroke-width', style.borderWidth);
        image.setAttribute('x', "" + offsetLeft);
        image.setAttribute('y', "" + offsetTop);
        image.setAttribute('width', "" + width);
        image.setAttribute('height', "" + height);
        image.setAttribute('href', htmlElement.getAttribute('src'));
        htmlElement.removeAttribute('crossorigin');
        return [image];
    }
    function processElement(htmlElement) {
        var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        var parts = [];
        // Process children
        var contentSize = { width: 0, height: 0 };
        forEachNode(htmlElement.childNodes, function (child) {
            var nestedParts = breakIntoPrimitives(child);
            if (nestedParts.length > 0) {
                for (var _i = 0, nestedParts_1 = nestedParts; _i < nestedParts_1.length; _i++) {
                    var p = nestedParts_1[_i];
                    var bbox = getElementBoundingBox(p);
                    contentSize.width = Math.max(contentSize.width, bbox.x + bbox.width);
                    contentSize.height = Math.max(contentSize.height, bbox.y + bbox.height);
                }
                parts = parts.concat(nestedParts);
            }
        });
        // Process current node
        var style = window.getComputedStyle(htmlElement);
        var y = getOffsetTop(htmlElement);
        var x = getOffsetLeft(htmlElement);
        var _a = htmlElement.getBoundingClientRect(), width = _a.width, height = _a.height;
        // const width = !style.width.endsWith('px') ? contentSize.width + 'px' : style.width;
        // const height = !style.width.endsWith('px') ? contentSize.height + 'px' : style.height;
        var radius = getBorderRadius(style);
        var borderColor = getBorderColor(style);
        var borderWidth = getBorderWidth(style);
        // path.setAttribute('className', htmlElement.className);
        path.setAttribute('fill', style.backgroundColor);
        path.setAttribute('stroke', borderColor);
        path.setAttribute('stroke-width', borderWidth + "px");
        // path.setAttribute('transform', `translate(${x}, ${y})`);
        path.setAttribute('x', "" + x);
        path.setAttribute('y', "" + y);
        path.setAttribute('width', "" + width);
        path.setAttribute('height', "" + height);
        path.setAttribute('d', generatePathData(x, y, width, height, radius[0], radius[1], radius[2], radius[3]));
        // create mask if it's needed
        if (style.overflow === 'hidden' || style.overflow === 'auto') {
            var rect = createRect(x, y, width, height);
            var id_1 = rect.getAttribute('id');
            parts.forEach(function (p) {
                if (!p.getAttribute('clip-path') && !p.getAttribute('id') && !(p instanceof SVGTextElement)) {
                    p.setAttribute('clip-path', "url(" + ('#' + id_1) + ")");
                }
            });
            parts.push(rect);
        }
        parts = [path].concat(parts);
        return parts;
    }
    function processText(textElement) {
        var parts = [];
        var textContent = textElement.textContent.trim();
        if (textContent.length === 0 || !(textElement.parentNode instanceof Element)) {
            return [];
        }
        var parent = textElement.parentNode;
        var style = window.getComputedStyle(parent);
        var x = getOffsetLeft(parent);
        var y = getOffsetTop(parent);
        var fill = style.color;
        var textSize = getTextSize(textContent, style.font);
        var prefferedWidth = stringToNumber(style.width);
        var lines = breakInLines(textContent, textSize, stringToNumber(style.width));
        lines.forEach(function (line, index) {
            var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('transform', "translate(" + x + ", " + (y + index * textSize.height) + ")");
            text.setAttribute('x', "" + 0);
            text.setAttribute('y', "" + 0);
            // text.setAttribute('x', `${x}`);
            // text.setAttribute('y', `${y + index * textSize.height}`);
            text.setAttribute('width', "" + (prefferedWidth || textSize.width));
            text.setAttribute('height', "" + textSize.height);
            text.setAttribute('fill', fill);
            text.setAttribute('font', style.font);
            // It's not working for IE11 (our main goal)
            // text.setAttribute('alignment-baseline', 'hanging');
            text.setAttribute('dy', "" + textSize.height);
            text.textContent = line;
            parts.push(text);
        });
        return parts;
    }
}
exports.htmlToSvg = htmlToSvg;
function getBorderRadius(style) {
    var radius = Math.round(stringToNumber(style.borderRadius.split(' ')[0])) || 0;
    return [
        Math.round(stringToNumber(style.borderTopLeftRadius)) || radius,
        Math.round(stringToNumber(style.borderTopRightRadius)) || radius,
        Math.round(stringToNumber(style.borderBottomRightRadius)) || radius,
        Math.round(stringToNumber(style.borderBottomLeftRadius)) || radius,
    ];
}
function getBorderColor(style) {
    var color = style.borderColor.split(' ')[0];
    return style.borderTopColor ||
        style.borderRightColor ||
        style.borderBottomColor ||
        style.borderLeftColor || color || null;
}
function getBorderWidth(style) {
    // const width = Math.round(stringToNumber(style.borderWidth.split(' ')[0]) || 0);
    var top = Math.round(stringToNumber(style.borderTopWidth) || 0);
    var right = Math.round(stringToNumber(style.borderRightWidth) || 0);
    var bottom = Math.round(stringToNumber(style.borderBottomWidth) || 0);
    var left = Math.round(stringToNumber(style.borderLeftWidth) || 0);
    return Math.min(top, right, bottom, left);
}
function createRect(x, y, width, height) {
    var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('id', lodash_1.uniqueId('clip-rect-'));
    rect.setAttribute('x', "" + x);
    rect.setAttribute('y', "" + y);
    rect.setAttribute('width', width + "px");
    rect.setAttribute('height', height + "px");
    return rect;
}
function getOffsetTop(element) {
    if (element.className !== 'ontodia-overlayed-element') {
        return element.offsetTop +
            element.clientTop +
            (element.offsetParent && element.offsetParent instanceof HTMLElement ?
                getOffsetTop(element.offsetParent) : 0);
    }
    else {
        return 0;
    }
}
function getOffsetLeft(element) {
    if (element.className !== 'ontodia-overlayed-element') {
        return element.offsetLeft +
            element.clientLeft +
            (element.offsetParent && element.offsetParent instanceof HTMLElement ?
                getOffsetLeft(element.offsetParent) : 0);
    }
    else {
        return 0;
    }
}
function breakInLines(text, textSize, prefferedWidth, elipsis) {
    var width = textSize.width, height = textSize.height;
    var lines = [];
    // breakText
    if (!prefferedWidth || width <= prefferedWidth) {
        lines.push(text);
    }
    else {
        var oneCharLength = width / text.length;
        var charsInLine = Math.floor(prefferedWidth / oneCharLength);
        if (elipsis) {
            var ELIPSIS_LENGTH = 3;
            lines.push(text.substring(0, charsInLine - ELIPSIS_LENGTH) + '...');
        }
        else {
            var c = 0;
            var line = '';
            for (var i = 0; i < text.length; i++, c++) {
                if (c >= charsInLine) {
                    lines.push(line);
                    line = '';
                    c = 0;
                }
                line += text[i];
            }
        }
    }
    return lines;
}
function getElementBoundingBox(element) {
    return {
        x: stringToNumber(element.getAttribute('x')),
        y: stringToNumber(element.getAttribute('y')),
        width: stringToNumber(element.getAttribute('width')),
        height: stringToNumber(element.getAttribute('height')),
    };
}
/**
 * @param {string} text
 * @param {string} font
 */
function getTextSize(text, font) {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    context.font = font;
    var fontSizeString = context.font.split(' ').filter(function (term) { return term.indexOf('px') !== -1; })[0];
    var fontSize = +fontSizeString.substring(0, fontSizeString.length - 2);
    var metrics = context.measureText(text);
    return {
        width: metrics.width,
        height: fontSize,
    };
}
function forEachNode(nodeList, callback) {
    for (var i = 0; i < nodeList.length; i++) {
        callback(nodeList[i]);
    }
}
function stringToNumber(value) {
    var newValue = +cutExtension(value);
    return newValue;
}
var postfixes = ['px', 'vh', 'vw'];
function cutExtension(value) {
    var lowerCaseValue = value.toLowerCase();
    if (postfixes.filter(function (postfix) { return lowerCaseValue.indexOf(postfix) !== -1; }).length > 0) {
        return value.substring(0, value.length - 2);
    }
    else {
        return value;
    }
}
/*
 * Generate a path's data attribute
 *
 * @param {Number} width Width of the rectangular shape
 * @param {Number} height Height of the rectangular shape
 * @param {Number} tr Top border radius of the rectangular shape
 * @param {Number} br Bottom border radius of the rectangular shape
 * @return {String} a path's data attribute value
 */
function generatePathData(x, y, width, height, tl, tr, br, bl) {
    var data = [];
    // start point in top-middle of the rectangle
    data.push('M' + (width / 2 + x) + ',' + y);
    // next we go to the right
    data.push('H' + (x + width - tr));
    if (tr > 0) {
        // now we draw the arc in the top-right corner
        data.push('A' + arcParameter(tr, tr, 0, 0, 1, x + width, y + tr));
    }
    // next we go down
    data.push('V' + (y + height - br));
    if (br > 0) {
        // now we draw the arc in the lower-right corner
        data.push('A' + arcParameter(br, br, 0, 0, 1, x + width - br, y + height));
    }
    // now we go to the left
    data.push('H' + (x + bl));
    if (bl > 0) {
        // now we draw the arc in the lower-left corner
        data.push('A' + arcParameter(bl, bl, 0, 0, 1, x, y + height - bl));
    }
    // next we go up
    data.push('V' + (y + tl));
    if (tl > 0) {
        // now we draw the arc in the top-left corner
        data.push('A' + arcParameter(tl, tl, 0, 0, 1, x + tl, y));
    }
    // and we close the path
    data.push('Z');
    return data.join(' ');
}
function arcParameter(rx, ry, xAxisRotation, largeArcFlag, sweepFlag, x, y) {
    return [
        rx, ',',
        ry, ' ',
        xAxisRotation, ' ',
        largeArcFlag, ',',
        sweepFlag, ' ',
        x, ',',
        y,
    ].join('');
}


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(45);
var react_1 = __webpack_require__(45);
var blankNodes_1 = __webpack_require__(78);
var utils_1 = __webpack_require__(46);
var schema_1 = __webpack_require__(53);
var authoredEntity_1 = __webpack_require__(86);
var authoringState_1 = __webpack_require__(88);
var spinner_1 = __webpack_require__(89);
var FOAF_NAME = 'http://xmlns.com/foaf/0.1/name';
var CLASS_NAME = 'ontodia-standard-template';
var StandardTemplate = /** @class */ (function (_super) {
    tslib_1.__extends(StandardTemplate, _super);
    function StandardTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StandardTemplate.prototype.render = function () {
        var _this = this;
        return (React.createElement(authoredEntity_1.AuthoredEntity, { templateProps: this.props }, function (context) { return _this.renderTemplate(context); }));
    };
    StandardTemplate.prototype.renderTemplate = function (context) {
        var _a = this.props, color = _a.color, types = _a.types, isExpanded = _a.isExpanded, iri = _a.iri, propsAsList = _a.propsAsList;
        var label = this.getLabel();
        var editor = context.editor;
        var isNewElement = authoringState_1.AuthoringState.isNewElement(editor.authoringState, iri);
        var leftStripeColor = isNewElement ? 'white' : color;
        var pinnedProperties = this.findPinnedProperties(context);
        return (React.createElement("div", { className: CLASS_NAME },
            React.createElement("div", { className: CLASS_NAME + "__main", style: { backgroundColor: leftStripeColor, borderColor: color } },
                React.createElement("div", { className: CLASS_NAME + "__body", style: { borderLeftColor: color } },
                    React.createElement("div", { className: CLASS_NAME + "__body-horizontal" },
                        this.renderThumbnail(),
                        React.createElement("div", { className: CLASS_NAME + "__body-content" },
                            React.createElement("div", { title: types, className: CLASS_NAME + "__type" },
                                React.createElement("div", { className: CLASS_NAME + "__type-value" }, this.getTypesLabel())),
                            React.createElement("div", { className: CLASS_NAME + "__label", title: label }, label))),
                    pinnedProperties ? (React.createElement("div", { className: CLASS_NAME + "__pinned-props", style: { borderColor: color } }, this.renderProperties(pinnedProperties))) : null)),
            isExpanded ? (React.createElement("div", { className: CLASS_NAME + "__dropdown", style: { borderColor: color } },
                this.renderPhoto(),
                React.createElement("div", { className: CLASS_NAME + "__dropdown-content" },
                    this.renderIri(context),
                    this.renderProperties(propsAsList),
                    editor.inAuthoringMode ? React.createElement("hr", { className: CLASS_NAME + "__hr" }) : null,
                    editor.inAuthoringMode ? this.renderActions(context) : null))) : null));
    };
    StandardTemplate.prototype.findPinnedProperties = function (context) {
        var _a = this.props, isExpanded = _a.isExpanded, propsAsList = _a.propsAsList, elementId = _a.elementId;
        if (isExpanded) {
            return undefined;
        }
        var templateState = context.view.model.getElement(elementId).elementState;
        if (!templateState) {
            return undefined;
        }
        var pinned = templateState[schema_1.TemplateProperties.PinnedProperties];
        if (!pinned) {
            return undefined;
        }
        var filtered = propsAsList.filter(function (prop) { return Boolean(pinned[prop.id]); });
        return filtered.length === 0 ? undefined : filtered;
    };
    StandardTemplate.prototype.renderProperties = function (propsAsList) {
        if (!propsAsList.length) {
            return React.createElement("div", null, "no properties");
        }
        return (React.createElement("div", { className: CLASS_NAME + "__properties" }, propsAsList.map(function (_a) {
            var name = _a.name, id = _a.id, property = _a.property;
            var propertyValues = utils_1.getPropertyValues(property);
            return React.createElement("div", { key: id, className: CLASS_NAME + "__properties-row" },
                React.createElement("div", { className: CLASS_NAME + "__properties-key", title: name + " (" + id + ")" }, name),
                React.createElement("div", { className: CLASS_NAME + "__properties-values" }, propertyValues.map(function (text, index) { return (React.createElement("div", { className: CLASS_NAME + "__properties-value", key: index, title: text }, text)); })));
        })));
    };
    StandardTemplate.prototype.renderPhoto = function () {
        var _a = this.props, color = _a.color, imgUrl = _a.imgUrl;
        if (!imgUrl) {
            return null;
        }
        return (React.createElement("div", { className: CLASS_NAME + "__photo", style: { borderColor: color } },
            React.createElement("img", { src: imgUrl, className: CLASS_NAME + "__photo-image" })));
    };
    StandardTemplate.prototype.renderIri = function (context) {
        var iri = this.props.iri;
        var finalIri = context.editedIri === undefined ? iri : context.editedIri;
        return (React.createElement("div", null,
            React.createElement("div", { className: CLASS_NAME + "__iri" },
                React.createElement("div", { className: CLASS_NAME + "__iri-key" },
                    "IRI",
                    context.editedIri ? '\u00A0(edited)' : '',
                    ":"),
                React.createElement("div", { className: CLASS_NAME + "__iri-value" }, blankNodes_1.isEncodedBlank(finalIri)
                    ? React.createElement("span", null, "(blank node)")
                    : React.createElement("a", { href: finalIri, title: finalIri, "data-iri-click-intent": 'openEntityIri' }, finalIri))),
            React.createElement("hr", { className: CLASS_NAME + "__hr" })));
    };
    StandardTemplate.prototype.renderThumbnail = function () {
        var _a = this.props, color = _a.color, imgUrl = _a.imgUrl, iconUrl = _a.iconUrl;
        if (imgUrl) {
            return (React.createElement("div", { className: CLASS_NAME + "__thumbnail", "aria-hidden": 'true' },
                React.createElement("img", { src: imgUrl, className: CLASS_NAME + "__thumbnail-image" })));
        }
        else if (iconUrl) {
            return (React.createElement("div", { className: CLASS_NAME + "__thumbnail", "aria-hidden": 'true' },
                React.createElement("img", { src: iconUrl, className: CLASS_NAME + "__thumbnail-icon" })));
        }
        var typeLabel = this.getTypesLabel();
        return (React.createElement("div", { className: CLASS_NAME + "__thumbnail", "aria-hidden": 'true', style: { color: color } }, typeLabel.length > 0 ? typeLabel.charAt(0).toUpperCase() : '✳'));
    };
    StandardTemplate.prototype.getTypesLabel = function () {
        return this.props.types;
    };
    StandardTemplate.prototype.getLabel = function () {
        var _a = this.props, label = _a.label, props = _a.props;
        return utils_1.getProperty(props, FOAF_NAME) || label;
    };
    StandardTemplate.prototype.renderActions = function (context) {
        var canEdit = context.canEdit, canDelete = context.canDelete, onEdit = context.onEdit, onDelete = context.onDelete;
        var SPINNER_WIDTH = 15;
        var SPINNER_HEIGHT = 12;
        return (React.createElement("div", { className: CLASS_NAME + "__actions" },
            React.createElement("button", { type: 'button', className: 'ontodia-btn ontodia-btn-default', title: canDelete ? 'Delete entity' : 'Deletion is unavailable for the selected element', disabled: !canDelete, onClick: onDelete },
                React.createElement("span", { className: 'fa fa-trash' }),
                "\u00A0",
                canEdit === undefined
                    ? React.createElement(spinner_1.HtmlSpinner, { width: SPINNER_WIDTH, height: SPINNER_HEIGHT })
                    : 'Delete'),
            React.createElement("button", { type: 'button', className: 'ontodia-btn ontodia-btn-default', title: canEdit ? 'Edit entity' : 'Editing is unavailable for the selected element', disabled: !canEdit, onClick: onEdit },
                React.createElement("span", { className: 'fa fa-edit' }),
                "\u00A0",
                canEdit === undefined
                    ? React.createElement(spinner_1.HtmlSpinner, { width: SPINNER_WIDTH, height: SPINNER_HEIGHT })
                    : 'Edit')));
    };
    return StandardTemplate;
}(react_1.Component));
exports.StandardTemplate = StandardTemplate;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(45);
var paperArea_1 = __webpack_require__(82);
var async_1 = __webpack_require__(60);
var workspaceContext_1 = __webpack_require__(87);
var authoringState_1 = __webpack_require__(88);
/**
 * Component to simplify tracking changes in validation messages (property and link type labels).
 */
var AuthoredEntity = /** @class */ (function (_super) {
    tslib_1.__extends(AuthoredEntity, _super);
    function AuthoredEntity(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.queryCancellation = new async_1.Cancellation();
        _this.onChangeAuthoringState = function (e) {
            var editor = e.source, previous = e.previous;
            var iri = _this.props.templateProps.data.id;
            var current = editor.authoringState;
            if (current.elements.get(iri) !== previous.elements.get(iri)) {
                _this.queryAllowedActions();
            }
        };
        _this.onEdit = function () {
            var editor = _this.context.ontodiaWorkspace.editor;
            var elementId = _this.props.templateProps.elementId;
            var element = editor.model.getElement(elementId);
            editor.showEditEntityForm(element);
        };
        _this.onDelete = function () {
            var editor = _this.context.ontodiaWorkspace.editor;
            var data = _this.props.templateProps.data;
            editor.deleteEntity(data.id);
        };
        _this.state = {};
        return _this;
    }
    AuthoredEntity.prototype.componentDidMount = function () {
        var editor = this.context.ontodiaWorkspace.editor;
        editor.events.on('changeAuthoringState', this.onChangeAuthoringState);
        this.queryAllowedActions();
    };
    AuthoredEntity.prototype.componentDidUpdate = function (prevProps) {
        var shouldUpdateAllowedActions = !(this.props.templateProps.data === prevProps.templateProps.data &&
            this.props.templateProps.isExpanded === prevProps.templateProps.isExpanded);
        if (shouldUpdateAllowedActions) {
            this.queryAllowedActions();
        }
    };
    AuthoredEntity.prototype.componentWillUnmount = function () {
        var editor = this.context.ontodiaWorkspace.editor;
        editor.events.off('changeAuthoringState', this.onChangeAuthoringState);
        this.queryCancellation.abort();
    };
    AuthoredEntity.prototype.queryAllowedActions = function () {
        var data = this.props.templateProps.data;
        this.queryCancellation.abort();
        this.queryCancellation = new async_1.Cancellation();
        var editor = this.context.ontodiaWorkspace.editor;
        if (!editor.metadataApi || authoringState_1.AuthoringState.isDeletedElement(editor.authoringState, data.id)) {
            this.setState({ canEdit: false, canDelete: false });
        }
        else {
            this.queryCanEdit(data);
            this.queryCanDelete(data);
        }
    };
    AuthoredEntity.prototype.queryCanEdit = function (data) {
        var _this = this;
        var editor = this.context.ontodiaWorkspace.editor;
        var signal = this.queryCancellation.signal;
        this.setState({ canEdit: undefined });
        editor.metadataApi.canEditElement(data, signal).then(function (canEdit) {
            if (signal.aborted) {
                return;
            }
            _this.setState({ canEdit: canEdit });
        });
    };
    AuthoredEntity.prototype.queryCanDelete = function (data) {
        var _this = this;
        var editor = this.context.ontodiaWorkspace.editor;
        var signal = this.queryCancellation.signal;
        this.setState({ canDelete: undefined });
        editor.metadataApi.canDeleteElement(data, signal).then(function (canDelete) {
            if (signal.aborted) {
                return;
            }
            _this.setState({ canDelete: canDelete });
        });
    };
    AuthoredEntity.prototype.render = function () {
        var renderTemplate = this.props.children;
        var view = this.context.ontodiaPaperArea.view;
        var editor = this.context.ontodiaWorkspace.editor;
        var _a = this.state, canEdit = _a.canEdit, canDelete = _a.canDelete;
        var iri = this.props.templateProps.iri;
        var elementEvent = editor.authoringState.elements.get(iri);
        var editedIri = elementEvent && elementEvent.type === authoringState_1.AuthoringKind.ChangeElement ?
            elementEvent.newIri : undefined;
        return renderTemplate({
            editor: editor, view: view, canEdit: canEdit, canDelete: canDelete, editedIri: editedIri,
            onEdit: this.onEdit,
            onDelete: this.onDelete,
        });
    };
    AuthoredEntity.contextTypes = tslib_1.__assign(tslib_1.__assign({}, paperArea_1.PaperAreaContextTypes), workspaceContext_1.WorkspaceContextTypes);
    return AuthoredEntity;
}(React.Component));
exports.AuthoredEntity = AuthoredEntity;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(61);
var WorkspaceEventKey;
(function (WorkspaceEventKey) {
    WorkspaceEventKey["searchUpdateCriteria"] = "search:updateCriteria";
    WorkspaceEventKey["searchQueryItem"] = "search:queryItems";
    WorkspaceEventKey["connectionsLoadLinks"] = "connections:loadLinks";
    WorkspaceEventKey["connectionsExpandLink"] = "connections:expandLink";
    WorkspaceEventKey["connectionsLoadElements"] = "connections:loadElements";
    WorkspaceEventKey["editorChangeSelection"] = "editor:changeSelection";
    WorkspaceEventKey["editorToggleDialog"] = "editor:toggleDialog";
    WorkspaceEventKey["editorAddElements"] = "editor:addElements";
})(WorkspaceEventKey = exports.WorkspaceEventKey || (exports.WorkspaceEventKey = {}));
exports.WorkspaceContextTypes = {
    ontodiaWorkspace: react_1.PropTypes.anything,
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var model_1 = __webpack_require__(47);
var collections_1 = __webpack_require__(55);
var AuthoringKind;
(function (AuthoringKind) {
    AuthoringKind["ChangeElement"] = "changeElement";
    AuthoringKind["ChangeLink"] = "changeLink";
})(AuthoringKind = exports.AuthoringKind || (exports.AuthoringKind = {}));
var AuthoringState;
(function (AuthoringState) {
    AuthoringState.empty = {
        elements: new Map(),
        links: new collections_1.HashMap(model_1.hashLink, model_1.sameLink),
    };
    function isEmpty(state) {
        return state.elements.size === 0 && state.links.size === 0;
    }
    AuthoringState.isEmpty = isEmpty;
    function clone(index) {
        return {
            elements: collections_1.cloneMap(index.elements),
            links: index.links.clone(),
        };
    }
    AuthoringState.clone = clone;
    function has(state, event) {
        return event.type === AuthoringKind.ChangeElement
            ? state.elements.get(event.after.id) === event
            : state.links.get(event.after) === event;
    }
    AuthoringState.has = has;
    function discard(state, discarded) {
        if (!has(state, discarded)) {
            return state;
        }
        var newState = clone(state);
        if (discarded.type === AuthoringKind.ChangeElement) {
            newState.elements.delete(discarded.after.id);
            if (!discarded.before) {
                state.links.forEach(function (e) {
                    if (isLinkConnectedToElement(e.after, discarded.after.id)) {
                        newState.links.delete(e.after);
                    }
                });
            }
        }
        else {
            newState.links.delete(discarded.after);
        }
        return newState;
    }
    AuthoringState.discard = discard;
    function addElement(state, item) {
        var event = { type: AuthoringKind.ChangeElement, after: item, deleted: false };
        var newState = clone(state);
        newState.elements.set(event.after.id, event);
        return newState;
    }
    AuthoringState.addElement = addElement;
    function addLink(state, item) {
        var event = { type: AuthoringKind.ChangeLink, after: item, deleted: false };
        var newState = clone(state);
        newState.links.set(event.after, event);
        return newState;
    }
    AuthoringState.addLink = addLink;
    function changeElement(state, before, after) {
        var newState = clone(state);
        // delete previous state for an entity
        newState.elements.delete(before.id);
        var previous = state.elements.get(before.id);
        if (previous && !previous.before) {
            // adding or changing new entity
            newState.elements.set(after.id, {
                type: AuthoringKind.ChangeElement,
                after: after,
                deleted: false,
            });
            if (before.id !== after.id) {
                state.links.forEach(function (e) {
                    if (!e.before && isLinkConnectedToElement(e.after, before.id)) {
                        var updatedLink = updateLinkToReferByNewIri(e.after, before.id, after.id);
                        newState.links.delete(e.after);
                        newState.links.set(updatedLink, {
                            type: AuthoringKind.ChangeLink,
                            after: updatedLink,
                            deleted: false,
                        });
                    }
                });
            }
        }
        else {
            // changing existing entity
            var iriChanged = after.id !== before.id;
            var previousBefore = previous ? previous.before : undefined;
            newState.elements.set(before.id, {
                type: AuthoringKind.ChangeElement,
                // always initialize 'before', otherwise entity will be considered new
                before: previousBefore || before,
                after: iriChanged ? tslib_1.__assign(tslib_1.__assign({}, after), { id: before.id }) : after,
                newIri: iriChanged ? after.id : undefined,
                deleted: false,
            });
        }
        return newState;
    }
    AuthoringState.changeElement = changeElement;
    function changeLink(state, before, after) {
        if (!model_1.sameLink(before, after)) {
            throw new Error('Cannot move link to another element or change its type');
        }
        var newState = clone(state);
        var previous = state.links.get(before);
        newState.links.set(before, {
            type: AuthoringKind.ChangeLink,
            before: previous ? previous.before : undefined,
            after: after,
            deleted: false,
        });
        return newState;
    }
    AuthoringState.changeLink = changeLink;
    function deleteElement(state, model) {
        var newState = clone(state);
        newState.elements.delete(model.id);
        state.links.forEach(function (e) {
            if (isLinkConnectedToElement(e.after, model.id)) {
                newState.links.delete(e.after);
            }
        });
        if (!isNewElement(state, model.id)) {
            newState.elements.set(model.id, {
                type: AuthoringKind.ChangeElement,
                before: model,
                after: model,
                deleted: true,
            });
        }
        return newState;
    }
    AuthoringState.deleteElement = deleteElement;
    function deleteLink(state, target) {
        var newState = clone(state);
        newState.links.delete(target);
        if (!isNewLink(state, target)) {
            newState.links.set(target, {
                type: AuthoringKind.ChangeLink,
                before: target,
                after: target,
                deleted: true,
            });
        }
        return newState;
    }
    AuthoringState.deleteLink = deleteLink;
    function deleteNewLinksConnectedToElements(state, elementIris) {
        var newState = clone(state);
        state.links.forEach(function (e) {
            if (!e.before) {
                var target = e.after;
                if (elementIris.has(target.sourceId) || elementIris.has(target.targetId)) {
                    newState.links.delete(target);
                }
            }
        });
        return newState;
    }
    AuthoringState.deleteNewLinksConnectedToElements = deleteNewLinksConnectedToElements;
    function isNewElement(state, target) {
        var event = state.elements.get(target);
        return event && event.type === AuthoringKind.ChangeElement && !event.before;
    }
    AuthoringState.isNewElement = isNewElement;
    function isDeletedElement(state, target) {
        var event = state.elements.get(target);
        return event && event.deleted;
    }
    AuthoringState.isDeletedElement = isDeletedElement;
    function isElementWithModifiedIri(state, target) {
        var event = state.elements.get(target);
        return event && event.type === AuthoringKind.ChangeElement &&
            event.before && Boolean(event.newIri);
    }
    AuthoringState.isElementWithModifiedIri = isElementWithModifiedIri;
    function isNewLink(state, linkModel) {
        var event = state.links.get(linkModel);
        return event && !event.before;
    }
    AuthoringState.isNewLink = isNewLink;
    function isDeletedLink(state, linkModel) {
        var event = state.links.get(linkModel);
        return event && event.deleted ||
            isDeletedElement(state, linkModel.sourceId) ||
            isDeletedElement(state, linkModel.targetId);
    }
    AuthoringState.isDeletedLink = isDeletedLink;
    function isUncertainLink(state, linkModel) {
        return !isDeletedLink(state, linkModel) && (isElementWithModifiedIri(state, linkModel.sourceId) ||
            isElementWithModifiedIri(state, linkModel.targetId));
    }
    AuthoringState.isUncertainLink = isUncertainLink;
})(AuthoringState = exports.AuthoringState || (exports.AuthoringState = {}));
var TemporaryState;
(function (TemporaryState) {
    TemporaryState.empty = {
        elements: new Map(),
        links: new collections_1.HashMap(model_1.hashLink, model_1.sameLink),
    };
    function addElement(state, element) {
        var elements = collections_1.cloneMap(state.elements);
        elements.set(element.id, element);
        return tslib_1.__assign(tslib_1.__assign({}, state), { elements: elements });
    }
    TemporaryState.addElement = addElement;
    function deleteElement(state, element) {
        var elements = collections_1.cloneMap(state.elements);
        elements.delete(element.id);
        return tslib_1.__assign(tslib_1.__assign({}, state), { elements: elements });
    }
    TemporaryState.deleteElement = deleteElement;
    function addLink(state, link) {
        var links = state.links.clone();
        links.set(link, link);
        return tslib_1.__assign(tslib_1.__assign({}, state), { links: links });
    }
    TemporaryState.addLink = addLink;
    function deleteLink(state, link) {
        var links = state.links.clone();
        links.delete(link);
        return tslib_1.__assign(tslib_1.__assign({}, state), { links: links });
    }
    TemporaryState.deleteLink = deleteLink;
})(TemporaryState = exports.TemporaryState || (exports.TemporaryState = {}));
function isLinkConnectedToElement(link, elementIri) {
    return link.sourceId === elementIri || link.targetId === elementIri;
}
exports.isLinkConnectedToElement = isLinkConnectedToElement;
function updateLinkToReferByNewIri(link, oldIri, newIri) {
    return tslib_1.__assign(tslib_1.__assign({}, link), { sourceId: link.sourceId === oldIri ? newIri : link.sourceId, targetId: link.targetId === oldIri ? newIri : link.targetId });
}


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(45);
var CLASS_NAME = 'ontodia-spinner';
var Spinner = /** @class */ (function (_super) {
    tslib_1.__extends(Spinner, _super);
    function Spinner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Spinner.prototype.render = function () {
        var _a = this.props, _b = _a.position, position = _b === void 0 ? { x: 0, y: 0 } : _b, _c = _a.size, size = _c === void 0 ? 50 : _c, statusText = _a.statusText, errorOccured = _a.errorOccured;
        var textLeftMargin = 5;
        var pathGeometry = 'm3.47,-19.7 a20,20 0 1,1 -6.95,0 m0,0 l-6,5 m6,-5 l-8,-0' +
            (errorOccured ? 'M-8,-8L8,8M-8,8L8,-8' : '');
        return React.createElement("g", { className: CLASS_NAME, "data-error": errorOccured, transform: "translate(" + position.x + "," + position.y + ")" },
            React.createElement("g", { className: CLASS_NAME + "__arrow" },
                React.createElement("path", { d: pathGeometry, transform: "scale(0.02)scale(" + size + ")", fill: 'none', stroke: errorOccured ? 'red' : 'black', strokeWidth: '3', strokeLinecap: 'round' })),
            React.createElement("text", { style: { dominantBaseline: 'middle' }, x: size / 2 + textLeftMargin }, statusText));
    };
    return Spinner;
}(React.Component));
exports.Spinner = Spinner;
var HtmlSpinner = /** @class */ (function (_super) {
    tslib_1.__extends(HtmlSpinner, _super);
    function HtmlSpinner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HtmlSpinner.prototype.render = function () {
        var _a = this.props, width = _a.width, height = _a.height;
        var size = Math.min(width, height);
        return (React.createElement("svg", { width: width, height: height },
            React.createElement(Spinner, { size: size, position: { x: width / 2, y: height / 2 } })));
    };
    return HtmlSpinner;
}(React.Component));
exports.HtmlSpinner = HtmlSpinner;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __webpack_require__(66);
var DemoDataProvider = /** @class */ (function () {
    function DemoDataProvider(allClasses, allLinkTypes, allElements, allLinks) {
        this.allClasses = allClasses;
        this.allLinkTypes = allLinkTypes;
        this.allElements = allElements;
        this.allLinks = allLinks;
    }
    DemoDataProvider.prototype.simulateNetwork = function (result) {
        var MEAN_DELAY = 200;
        var cloned = lodash_1.cloneDeep(result);
        // simulate exponential distribution
        var delay = -Math.log(Math.random()) * MEAN_DELAY;
        return new Promise(function (resolve) {
            setTimeout(function () { return resolve(cloned); }, delay);
        });
    };
    DemoDataProvider.prototype.classTree = function () {
        return this.simulateNetwork(this.allClasses);
    };
    DemoDataProvider.prototype.classInfo = function (params) {
        var classIds = params.classIds || [];
        return this.simulateNetwork(this.allClasses.filter(function (cl) { return classIds.indexOf(cl.id); }));
    };
    DemoDataProvider.prototype.linkTypes = function () {
        return this.simulateNetwork(this.allLinkTypes);
    };
    DemoDataProvider.prototype.linkTypesInfo = function (params) {
        var types = lodash_1.keyBy(params.linkTypeIds);
        var linkTypes = this.allLinkTypes.filter(function (type) { return types[type.id]; });
        return this.simulateNetwork(linkTypes);
    };
    DemoDataProvider.prototype.elementInfo = function (params) {
        var _this = this;
        var elements = params.elementIds
            .map(function (elementId) { return _this.allElements[elementId]; })
            .filter(function (element) { return element !== undefined; });
        return this.simulateNetwork(lodash_1.keyBy(elements, function (element) { return element.id; }));
    };
    DemoDataProvider.prototype.linksInfo = function (params) {
        var nodes = lodash_1.keyBy(params.elementIds);
        var types = lodash_1.keyBy(params.linkTypeIds);
        var links = this.allLinks.filter(function (link) {
            return types[link.linkTypeId] && nodes[link.sourceId] && nodes[link.targetId];
        });
        return this.simulateNetwork(links);
    };
    DemoDataProvider.prototype.linkTypesOf = function (params) {
        var counts = {};
        for (var _i = 0, _a = this.allLinks; _i < _a.length; _i++) {
            var link = _a[_i];
            if (link.sourceId === params.elementId ||
                link.targetId === params.elementId) {
                var linkCount = counts[link.linkTypeId];
                var isSource = link.sourceId === params.elementId;
                if (linkCount) {
                    isSource ? linkCount.outCount++ : linkCount.inCount++;
                }
                else {
                    counts[link.linkTypeId] = isSource
                        ? { id: link.linkTypeId, inCount: 0, outCount: 1 }
                        : { id: link.linkTypeId, inCount: 1, outCount: 0 };
                }
            }
        }
        return this.simulateNetwork(lodash_1.map(counts));
    };
    DemoDataProvider.prototype.linkElements = function (params) {
        // for sparql we have rich filtering features and we just reuse filter.
        return this.filter({
            refElementId: params.elementId,
            refElementLinkId: params.linkId,
            linkDirection: params.direction,
            limit: params.limit,
            offset: params.offset,
            languageCode: '',
        });
    };
    DemoDataProvider.prototype.filter = function (params) {
        if (params.limit === undefined) {
            params.limit = 100;
        }
        if (params.offset > 0) {
            return Promise.resolve({});
        }
        var filtered = {};
        if (params.elementTypeId) {
            lodash_1.each(this.allElements, function (element) {
                if (element.types.indexOf(params.elementTypeId) >= 0) {
                    filtered[element.id] = element;
                }
            });
        }
        else if (params.refElementId) {
            var filteredLinks = params.refElementLinkId
                ? this.allLinks.filter(function (link) { return link.linkTypeId === params.refElementLinkId; })
                : this.allLinks;
            var nodeId = params.refElementId;
            for (var _i = 0, filteredLinks_1 = filteredLinks; _i < filteredLinks_1.length; _i++) {
                var link = filteredLinks_1[_i];
                var linkedElementId = void 0;
                if (link.sourceId === nodeId && params.linkDirection !== 'in') {
                    linkedElementId = link.targetId;
                }
                else if (link.targetId === nodeId && params.linkDirection !== 'out') {
                    linkedElementId = link.sourceId;
                }
                if (linkedElementId !== undefined) {
                    var linkedElement = this.allElements[linkedElementId];
                    if (linkedElement) {
                        filtered[linkedElement.id] = linkedElement;
                    }
                }
            }
        }
        else if (params.text) {
            filtered = this.allElements; // filtering by text is done below
        }
        else {
            return Promise.reject(new Error('This type of filter is not implemented'));
        }
        if (params.text) {
            var filteredByText_1 = {};
            var text_1 = params.text.toLowerCase();
            lodash_1.each(filtered, function (element) {
                var found = false;
                if (element.id.toLowerCase().indexOf(text_1) >= 0) {
                    found = true;
                }
                else {
                    found = element.label.values.some(function (label) { return label.value.toLowerCase().indexOf(text_1) >= 0; });
                }
                if (found) {
                    filteredByText_1[element.id] = element;
                }
            });
            return this.simulateNetwork(filteredByText_1);
        }
        else {
            return this.simulateNetwork(filtered);
        }
    };
    return DemoDataProvider;
}());
exports.DemoDataProvider = DemoDataProvider;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var rdfCacheableStore_1 = __webpack_require__(92);
var rdfLoader_1 = __webpack_require__(94);
var rdfCompositeParser_1 = __webpack_require__(95);
var PREFIX_FACTORIES = {
    RDF: rdfCacheableStore_1.prefixFactory('http://www.w3.org/1999/02/22-rdf-syntax-ns#'),
    RDFS: rdfCacheableStore_1.prefixFactory('http://www.w3.org/2000/01/rdf-schema#'),
    FOAF: rdfCacheableStore_1.prefixFactory('http://xmlns.com/foaf/0.1/'),
    XSD: rdfCacheableStore_1.prefixFactory('http://www.w3.org/2001/XMLSchema#'),
    OWL: rdfCacheableStore_1.prefixFactory('http://www.w3.org/2002/07/owl#'),
};
var RDFDataProvider = /** @class */ (function () {
    function RDFDataProvider(options) {
        var _this = this;
        var parser = new rdfCompositeParser_1.RDFCompositeParser(options.parsers);
        this.rdfStorage = new rdfCacheableStore_1.RDFCacheableStore({
            parser: parser,
            acceptBlankNodes: options.acceptBlankNodes,
        });
        this.rdfLoader = new rdfLoader_1.RDFLoader({
            parser: parser,
            proxy: options.proxy,
        });
        this.dataFetching = options.dataFetching;
        var parsePromises = (options.data || []).map(function (datum) {
            return parser.parse(datum.content, datum.type, datum.fileName)
                .then(function (rdfGraph) {
                _this.rdfStorage.add(rdfGraph);
                return true;
            });
        });
        this.initStatement = Promise.all(parsePromises).catch(function (error) {
            error.message = 'Initialization failed! Cause: ' + error.message;
            throw error;
        });
        this.options = options;
    }
    RDFDataProvider.prototype.addGraph = function (graph) {
        this.rdfStorage.add(graph);
    };
    RDFDataProvider.prototype.waitInitCompleted = function () {
        var _this = this;
        if (this.initStatement) {
            return this.initStatement.then(function () {
                delete _this.initStatement;
            });
        }
        else {
            return Promise.resolve();
        }
    };
    RDFDataProvider.prototype.classTree = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var rdfClassesQuery, owlClassesQuery, fromRDFTypesQuery, subClassesQuery, _a, rdfClassesGraph, owlClassesGraph, rdfTypesGraph, subClassesGraph, rdfClasses, owlClasses, rdfTypes, subClasses, classes, classIris, parents, _i, subClasses_1, triple, subClassIRI, classIRI, dictionary, firstLevel, labelQueries, _loop_1, this_1, _b, classIris_1, classIri, result;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.waitInitCompleted()];
                    case 1:
                        _c.sent();
                        rdfClassesQuery = this.rdfStorage.match(null, PREFIX_FACTORIES.RDF('type'), PREFIX_FACTORIES.RDFS('Class'), null);
                        owlClassesQuery = this.rdfStorage.match(null, PREFIX_FACTORIES.RDF('type'), PREFIX_FACTORIES.OWL('Class'));
                        fromRDFTypesQuery = this.rdfStorage.match(null, PREFIX_FACTORIES.RDF('type'), null);
                        subClassesQuery = this.rdfStorage.match(null, PREFIX_FACTORIES.RDFS('subClassOf'), null);
                        return [4 /*yield*/, Promise.all([
                                rdfClassesQuery,
                                owlClassesQuery,
                                fromRDFTypesQuery,
                                subClassesQuery,
                            ])];
                    case 2:
                        _a = _c.sent(), rdfClassesGraph = _a[0], owlClassesGraph = _a[1], rdfTypesGraph = _a[2], subClassesGraph = _a[3];
                        rdfClasses = rdfClassesGraph.toArray().map(function (cl) { return cl.subject; });
                        owlClasses = owlClassesGraph.toArray().map(function (cl) { return cl.subject; });
                        rdfTypes = rdfTypesGraph.toArray().map(function (cl) { return cl.object; });
                        subClasses = subClassesGraph.toArray();
                        classes = rdfClasses.concat(owlClasses).concat(rdfTypes);
                        classIris = classes
                            .filter(function (clazz) { return clazz.interfaceName !== 'BlankNode'; })
                            .map(function (clazz) { return clazz.nominalValue; });
                        parents = {};
                        for (_i = 0, subClasses_1 = subClasses; _i < subClasses_1.length; _i++) {
                            triple = subClasses_1[_i];
                            subClassIRI = triple.subject.nominalValue;
                            classIRI = triple.object.nominalValue;
                            if (rdfCacheableStore_1.isNamedNode(triple.subject) && !parents[subClassIRI]) {
                                parents[subClassIRI] = [];
                            }
                            if (rdfCacheableStore_1.isNamedNode(triple.object) && parents[subClassIRI].indexOf(classIRI) === -1) {
                                parents[subClassIRI].push(classIRI);
                            }
                        }
                        dictionary = {};
                        firstLevel = {};
                        labelQueries = [];
                        _loop_1 = function (classIri) {
                            var classElement;
                            if (!dictionary[classIri]) {
                                classElement = this_1.createEmptyClass(classIri);
                                dictionary[classIri] = classElement;
                                firstLevel[classIri] = classElement;
                                labelQueries.push(this_1.getLabels(classIri).then(function (labels) {
                                    classElement.label = { values: labels };
                                }));
                            }
                            else {
                                classElement = dictionary[classIri];
                            }
                            if (parents[classIri]) {
                                var _loop_2 = function (parentIri) {
                                    if (!dictionary[parentIri]) {
                                        var parentElement_1 = this_1.createEmptyClass(parentIri);
                                        dictionary[parentIri] = parentElement_1;
                                        firstLevel[parentIri] = parentElement_1;
                                        labelQueries.push(this_1.getLabels(parentIri).then(function (labels) {
                                            parentElement_1.label = { values: labels };
                                        }));
                                    }
                                    if (dictionary[parentIri].children.indexOf(classElement) === -1) {
                                        dictionary[parentIri].children.push(classElement);
                                        dictionary[parentIri].count += classElement.count;
                                    }
                                    delete firstLevel[classElement.id];
                                };
                                for (var _i = 0, _a = parents[classIri]; _i < _a.length; _i++) {
                                    var parentIri = _a[_i];
                                    _loop_2(parentIri);
                                }
                            }
                        };
                        this_1 = this;
                        for (_b = 0, classIris_1 = classIris; _b < classIris_1.length; _b++) {
                            classIri = classIris_1[_b];
                            _loop_1(classIri);
                        }
                        return [4 /*yield*/, Promise.all(labelQueries)];
                    case 3:
                        _c.sent();
                        result = Object.keys(firstLevel).map(function (k) { return firstLevel[k]; });
                        return [2 /*return*/, result];
                }
            });
        });
    };
    RDFDataProvider.prototype.propertyInfo = function (params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var propertyInfoResult, queries, fetchedModels, _i, fetchedModels_1, model;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitInitCompleted()];
                    case 1:
                        _a.sent();
                        propertyInfoResult = {};
                        queries = params.propertyIds.map(function (propId) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var isExists, labels, error_1;
                            return tslib_1.__generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 4, , 5]);
                                        return [4 /*yield*/, this.checkElement(propId)];
                                    case 1:
                                        isExists = _a.sent();
                                        return [4 /*yield*/, this.fetchIfNecessary(propId, isExists)];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, this.getLabels(propId)];
                                    case 3:
                                        labels = _a.sent();
                                        return [2 /*return*/, {
                                                id: propId,
                                                label: { values: labels },
                                            }];
                                    case 4:
                                        error_1 = _a.sent();
                                        // tslint:disable-next-line:no-console
                                        console.warn(error_1);
                                        return [2 /*return*/, null];
                                    case 5: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [4 /*yield*/, Promise.all(queries)];
                    case 2:
                        fetchedModels = _a.sent();
                        for (_i = 0, fetchedModels_1 = fetchedModels; _i < fetchedModels_1.length; _i++) {
                            model = fetchedModels_1[_i];
                            if (model) {
                                propertyInfoResult[model.id] = model;
                            }
                        }
                        return [2 /*return*/, propertyInfoResult];
                }
            });
        });
    };
    RDFDataProvider.prototype.classInfo = function (params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var queries, fetchedModels;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitInitCompleted()];
                    case 1:
                        _a.sent();
                        queries = params.classIds.map(function (classId) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var isExists, labels, error_2;
                            return tslib_1.__generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 4, , 5]);
                                        return [4 /*yield*/, this.checkElement(classId)];
                                    case 1:
                                        isExists = _a.sent();
                                        return [4 /*yield*/, this.fetchIfNecessary(classId, isExists)];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, this.getLabels(classId)];
                                    case 3:
                                        labels = _a.sent();
                                        return [2 /*return*/, {
                                                id: classId,
                                                label: { values: labels },
                                                count: this.rdfStorage.getTypeCount(classId),
                                                children: [],
                                            }];
                                    case 4:
                                        error_2 = _a.sent();
                                        // tslint:disable-next-line:no-console
                                        console.warn(error_2);
                                        return [2 /*return*/, null];
                                    case 5: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [4 /*yield*/, Promise.all(queries)];
                    case 2:
                        fetchedModels = _a.sent();
                        return [2 /*return*/, fetchedModels.filter(function (cm) { return cm; })];
                }
            });
        });
    };
    RDFDataProvider.prototype.linkTypesInfo = function (params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var queries, fetchedModels;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitInitCompleted()];
                    case 1:
                        _a.sent();
                        queries = params.linkTypeIds.map(function (typeId) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var isExists, labels, error_3;
                            return tslib_1.__generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 4, , 5]);
                                        return [4 /*yield*/, this.rdfStorage.checkElement(typeId)];
                                    case 1:
                                        isExists = _a.sent();
                                        return [4 /*yield*/, this.fetchIfNecessary(typeId, isExists)];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, this.getLabels(typeId)];
                                    case 3:
                                        labels = _a.sent();
                                        return [2 /*return*/, {
                                                id: typeId,
                                                label: { values: labels },
                                                count: this.rdfStorage.getTypeCount(typeId),
                                            }];
                                    case 4:
                                        error_3 = _a.sent();
                                        // tslint:disable-next-line:no-console
                                        console.warn(error_3);
                                        return [2 /*return*/, null];
                                    case 5: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [4 /*yield*/, Promise.all(queries)];
                    case 2:
                        fetchedModels = _a.sent();
                        return [2 /*return*/, fetchedModels.filter(function (lt) { return lt; })];
                }
            });
        });
    };
    RDFDataProvider.prototype.linkTypes = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var linkTypes, rdfLinksQueries, owlLinksQueries, _a, rdfLinks, owlLinks, linkTypeIds, mapLinkTriple, linkTypePromises, _i, _b, linkTriple, _c, _d, linkTriple;
            var _this = this;
            return tslib_1.__generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, this.waitInitCompleted()];
                    case 1:
                        _e.sent();
                        linkTypes = [];
                        rdfLinksQueries = this.rdfStorage.match(undefined, PREFIX_FACTORIES.RDF('type'), PREFIX_FACTORIES.RDF('Property'));
                        owlLinksQueries = this.rdfStorage.match(undefined, PREFIX_FACTORIES.RDF('type'), PREFIX_FACTORIES.OWL('ObjectProperty'));
                        return [4 /*yield*/, Promise.all([rdfLinksQueries, owlLinksQueries])];
                    case 2:
                        _a = _e.sent(), rdfLinks = _a[0], owlLinks = _a[1];
                        linkTypeIds = new Set();
                        mapLinkTriple = function (triple) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var labels;
                            return tslib_1.__generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!!linkTypeIds.has(triple.subject.nominalValue)) return [3 /*break*/, 2];
                                        linkTypeIds.add(triple.subject.nominalValue);
                                        return [4 /*yield*/, this.getLabels(triple.subject.nominalValue)];
                                    case 1:
                                        labels = _a.sent();
                                        linkTypes.push({
                                            id: triple.subject.nominalValue,
                                            label: { values: labels },
                                            count: this.rdfStorage.getTypeCount(triple.subject.nominalValue),
                                        });
                                        _a.label = 2;
                                    case 2: return [2 /*return*/];
                                }
                            });
                        }); };
                        linkTypePromises = [];
                        for (_i = 0, _b = rdfLinks.toArray(); _i < _b.length; _i++) {
                            linkTriple = _b[_i];
                            linkTypePromises.push(mapLinkTriple(linkTriple));
                        }
                        for (_c = 0, _d = owlLinks.toArray(); _c < _d.length; _c++) {
                            linkTriple = _d[_c];
                            linkTypePromises.push(mapLinkTriple(linkTriple));
                        }
                        return [4 /*yield*/, Promise.all(linkTypePromises)];
                    case 3:
                        _e.sent();
                        return [2 /*return*/, linkTypes];
                }
            });
        });
    };
    RDFDataProvider.prototype.elementInfo = function (params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var elementInfoResult, queries, fetchedModels, _i, fetchedModels_2, model;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitInitCompleted()];
                    case 1:
                        _a.sent();
                        elementInfoResult = {};
                        queries = params.elementIds.map(function (elementId) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var isExists, error_4;
                            return tslib_1.__generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 3, , 4]);
                                        return [4 /*yield*/, this.rdfStorage.checkElement(elementId)];
                                    case 1:
                                        isExists = _a.sent();
                                        return [4 /*yield*/, this.fetchIfNecessary(elementId, isExists)];
                                    case 2:
                                        _a.sent();
                                        return [2 /*return*/, this.getElementInfo(elementId)];
                                    case 3:
                                        error_4 = _a.sent();
                                        // tslint:disable-next-line:no-console
                                        console.warn(error_4);
                                        return [2 /*return*/, null];
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [4 /*yield*/, Promise.all(queries)];
                    case 2:
                        fetchedModels = _a.sent();
                        for (_i = 0, fetchedModels_2 = fetchedModels; _i < fetchedModels_2.length; _i++) {
                            model = fetchedModels_2[_i];
                            if (model) {
                                elementInfoResult[model.id] = model;
                            }
                        }
                        return [2 /*return*/, elementInfoResult];
                }
            });
        });
    };
    RDFDataProvider.prototype.linksInfo = function (params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var statementPromises, _loop_3, this_2, _i, _a, source, statements, graph, triples, fetchedModels;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.waitInitCompleted()];
                    case 1:
                        _b.sent();
                        statementPromises = [];
                        _loop_3 = function (source) {
                            var _loop_4 = function (target) {
                                statementPromises.push(Promise.all([
                                    this_2.rdfStorage.checkElement(source)
                                        .then(function (exists) { return _this.fetchIfNecessary(source, exists); }),
                                    this_2.rdfStorage.checkElement(target)
                                        .then(function (exists) { return _this.fetchIfNecessary(target, exists); }),
                                ]).then(function () { return ({ subject: source, object: target }); }).catch(function (error) {
                                    // tslint:disable-next-line:no-console
                                    console.warn(error);
                                    return null;
                                }));
                            };
                            for (var _i = 0, _a = params.elementIds; _i < _a.length; _i++) {
                                var target = _a[_i];
                                _loop_4(target);
                            }
                        };
                        this_2 = this;
                        for (_i = 0, _a = params.elementIds; _i < _a.length; _i++) {
                            source = _a[_i];
                            _loop_3(source);
                        }
                        return [4 /*yield*/, Promise.all(statementPromises)];
                    case 2:
                        statements = _b.sent();
                        return [4 /*yield*/, this.rdfStorage.matchAll(statements.filter(function (statement) { return statement; }))];
                    case 3:
                        graph = _b.sent();
                        if (this.options.acceptBlankNodes) {
                            triples = graph.toArray();
                        }
                        else {
                            triples = graph.toArray().filter(function (tripple) {
                                return rdfCacheableStore_1.isNamedNode(tripple.subject) && rdfCacheableStore_1.isNamedNode(tripple.object);
                            });
                        }
                        fetchedModels = triples.map(function (t) { return ({
                            linkTypeId: t.predicate.nominalValue,
                            sourceId: t.subject.nominalValue,
                            targetId: t.object.nominalValue,
                        }); });
                        return [2 /*return*/, fetchedModels];
                }
            });
        });
    };
    RDFDataProvider.prototype.linkTypesOf = function (params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var links, element, linkMap, incomingElementsTriples, incomingElements, _i, incomingElements_1, el, linkTypeId, outgoingElementsTriples, outElements, _a, outElements_1, el, linkTypeId;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.waitInitCompleted()];
                    case 1:
                        _b.sent();
                        links = [];
                        element = params.elementId;
                        linkMap = {};
                        return [4 /*yield*/, this.rdfStorage.match(null, null, element)];
                    case 2:
                        incomingElementsTriples = _b.sent();
                        incomingElements = incomingElementsTriples.toArray()
                            .filter(function (t) { return rdfCacheableStore_1.isNamedNode(t.subject); })
                            .map(function (triple) { return triple.predicate; });
                        for (_i = 0, incomingElements_1 = incomingElements; _i < incomingElements_1.length; _i++) {
                            el = incomingElements_1[_i];
                            linkTypeId = el.nominalValue;
                            if (!linkMap[linkTypeId]) {
                                linkMap[linkTypeId] = {
                                    id: linkTypeId,
                                    inCount: 1,
                                    outCount: 0,
                                };
                                links.push(linkMap[linkTypeId]);
                            }
                            else {
                                linkMap[linkTypeId].inCount++;
                            }
                        }
                        return [4 /*yield*/, this.rdfStorage.match(element, null, null)];
                    case 3:
                        outgoingElementsTriples = _b.sent();
                        outElements = outgoingElementsTriples.toArray()
                            .filter(function (t) { return rdfCacheableStore_1.isNamedNode(t.object); })
                            .map(function (triple) { return triple.predicate; });
                        for (_a = 0, outElements_1 = outElements; _a < outElements_1.length; _a++) {
                            el = outElements_1[_a];
                            linkTypeId = el.nominalValue;
                            if (!linkMap[linkTypeId]) {
                                linkMap[linkTypeId] = {
                                    id: linkTypeId,
                                    inCount: 0,
                                    outCount: 1,
                                };
                                links.push(linkMap[linkTypeId]);
                            }
                            else {
                                linkMap[linkTypeId].outCount++;
                            }
                        }
                        return [2 /*return*/, links];
                }
            });
        });
    };
    RDFDataProvider.prototype.linkElements = function (params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitInitCompleted()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.filter({
                                refElementId: params.elementId,
                                refElementLinkId: params.linkId,
                                linkDirection: params.direction,
                                limit: params.limit,
                                offset: params.offset,
                                languageCode: '',
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RDFDataProvider.prototype.filter = function (params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var limitCallback, offsetIndex, limitIndex, blankNodes, elementsPromise, filteredElements, elements;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitInitCompleted()];
                    case 1:
                        _a.sent();
                        if (params.limit === undefined) {
                            params.limit = 100;
                        }
                        limitCallback = function (node, index) {
                            return (blankNodes || rdfCacheableStore_1.isNamedNode(node))
                                && offsetIndex <= index
                                && index < limitIndex;
                        };
                        offsetIndex = params.offset;
                        limitIndex = params.offset + params.limit;
                        blankNodes = this.options.acceptBlankNodes;
                        if (!params.elementTypeId) return [3 /*break*/, 2];
                        elementsPromise = this.filterByTypeId(params.elementTypeId, limitCallback);
                        return [3 /*break*/, 7];
                    case 2:
                        if (!(params.refElementId && params.refElementLinkId)) return [3 /*break*/, 3];
                        elementsPromise = this.filterByRefAndLink(params.refElementId, params.refElementLinkId, params.linkDirection, limitCallback);
                        return [3 /*break*/, 7];
                    case 3:
                        if (!params.refElementId) return [3 /*break*/, 4];
                        elementsPromise = this.filterByRef(params.refElementId, limitCallback);
                        return [3 /*break*/, 7];
                    case 4:
                        if (!params.text) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.getAllElements(params.text, limitCallback)];
                    case 5:
                        filteredElements = _a.sent();
                        return [2 /*return*/, this.filterByKey(undefined, filteredElements)];
                    case 6: return [2 /*return*/, {}];
                    case 7: return [4 /*yield*/, elementsPromise];
                    case 8:
                        elements = _a.sent();
                        return [2 /*return*/, this.filterByKey(params.text, elements)];
                }
            });
        });
    };
    RDFDataProvider.prototype.filterByTypeId = function (elementTypeId, filter) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var elementTriples;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.rdfStorage.match(undefined, PREFIX_FACTORIES.RDF('type'), elementTypeId)];
                    case 1:
                        elementTriples = _a.sent();
                        return [2 /*return*/, Promise.all(elementTriples.toArray()
                                .filter(function (t, index) { return filter(t.subject, index); })
                                .map(function (el) { return _this.getElementInfo(el.subject.nominalValue, true); }))];
                }
            });
        });
    };
    RDFDataProvider.prototype.filterByRefAndLink = function (refEl, refLink, linkDirection, filter) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var elementTriples, elementTriples;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(linkDirection === 'in')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.rdfStorage.match(null, refLink, refEl)];
                    case 1:
                        elementTriples = _a.sent();
                        return [2 /*return*/, Promise.all(elementTriples.toArray().filter(function (t, index) { return filter(t.subject, index); })
                                .map(function (el) { return _this.getElementInfo(el.subject.nominalValue, true); }))];
                    case 2: return [4 /*yield*/, this.rdfStorage.match(refEl, refLink, null)];
                    case 3:
                        elementTriples = _a.sent();
                        return [2 /*return*/, Promise.all(elementTriples.toArray().filter(function (t, index) { return filter(t.object, index); })
                                .map(function (el) { return _this.getElementInfo(el.object.nominalValue, true); }))];
                }
            });
        });
    };
    RDFDataProvider.prototype.filterByRef = function (refEl, filter) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var incomingTriples, inRelations, outgoingTriples, outRelations;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.rdfStorage.match(null, null, refEl)];
                    case 1:
                        incomingTriples = _a.sent();
                        return [4 /*yield*/, Promise.all(incomingTriples.toArray().filter(function (t, index) { return filter(t.subject, index); })
                                .map(function (el) { return _this.getElementInfo(el.subject.nominalValue, true); }))];
                    case 2:
                        inRelations = _a.sent();
                        return [4 /*yield*/, this.rdfStorage.match(refEl, null, null)];
                    case 3:
                        outgoingTriples = _a.sent();
                        return [4 /*yield*/, Promise.all(outgoingTriples.toArray().filter(function (t, index) { return filter(t.object, index); })
                                .map(function (el) { return _this.getElementInfo(el.object.nominalValue, true); }))];
                    case 4:
                        outRelations = _a.sent();
                        return [2 /*return*/, inRelations.concat(outRelations)];
                }
            });
        });
    };
    RDFDataProvider.prototype.getAllElements = function (text, filter) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var key, elementTriples, promices, _i, _a, triple, objectIsLiteral, isLabel, containsKey;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        key = (text ? text.toLowerCase() : null);
                        return [4 /*yield*/, this.rdfStorage.match(null, null, null)];
                    case 1:
                        elementTriples = _b.sent();
                        promices = [];
                        for (_i = 0, _a = elementTriples.toArray(); _i < _a.length; _i++) {
                            triple = _a[_i];
                            if (filter(triple.subject, promices.length)) {
                                objectIsLiteral = triple.object.interfaceName === 'Literal';
                                isLabel = rdfCacheableStore_1.isLabelType(triple.predicate.nominalValue);
                                containsKey = isLabel &&
                                    triple.object.nominalValue.toLowerCase().indexOf(key) !== -1 ||
                                    !objectIsLiteral &&
                                        triple.subject.nominalValue.toLowerCase().indexOf(key) !== -1;
                                if (containsKey) {
                                    promices.push(this.getElementInfo(triple.subject.nominalValue, true));
                                }
                            }
                        }
                        return [2 /*return*/, Promise.all(promices)];
                }
            });
        });
    };
    RDFDataProvider.prototype.filterByKey = function (text, elements) {
        var result = {};
        var key = (text ? text.toLowerCase() : null);
        if (key) {
            for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
                var el = elements_1[_i];
                var acceptableKey = false;
                for (var _a = 0, _b = el.label.values; _a < _b.length; _a++) {
                    var label = _b[_a];
                    acceptableKey = acceptableKey || label.value.toLowerCase().indexOf(key) !== -1;
                    if (acceptableKey) {
                        break;
                    }
                }
                acceptableKey = acceptableKey || el.id.toLowerCase().indexOf(key) !== -1;
                if (acceptableKey) {
                    result[el.id] = el;
                }
            }
        }
        else {
            for (var _c = 0, elements_2 = elements; _c < elements_2.length; _c++) {
                var el = elements_2[_c];
                result[el.id] = el;
            }
        }
        return result;
    };
    RDFDataProvider.prototype.checkElement = function (id) {
        return this.dataFetching ?
            this.rdfStorage.checkElement(id) :
            Promise.resolve(true);
    };
    RDFDataProvider.prototype.fetchIfNecessary = function (id, exists) {
        var _this = this;
        if (exists || !this.dataFetching) {
            return Promise.resolve();
        }
        else {
            return this.rdfLoader.downloadElement(id).then(function (rdfGraph) {
                _this.rdfStorage.add(rdfGraph);
                return;
            }).catch(function (error) {
                // tslint:disable-next-line:no-console
                console.warn(error);
                return;
            });
        }
    };
    RDFDataProvider.prototype.getElementInfo = function (id, shortInfo) {
        return Promise.all([
            this.getTypes(id),
            (!shortInfo ? this.getProps(id) : Promise.resolve({})),
            this.getLabels(id),
        ]).then(function (_a) {
            var types = _a[0], props = _a[1], labels = _a[2];
            return {
                id: id,
                types: types,
                label: { values: labels },
                properties: props,
            };
        });
    };
    RDFDataProvider.prototype.getLabels = function (id) {
        return this.rdfStorage.getLabels(id).then(function (labelTriples) {
            return labelTriples.toArray().map(function (l) { return ({
                value: l.object.nominalValue,
                language: rdfCacheableStore_1.isLiteral(l.object) ? l.object.language || '' : '',
            }); });
        });
    };
    RDFDataProvider.prototype.getProps = function (el) {
        return this.rdfStorage.match(el, null, null).then(function (propsGraph) {
            var props = {};
            var propTriples = propsGraph.toArray();
            for (var _i = 0, propTriples_1 = propTriples; _i < propTriples_1.length; _i++) {
                var statemet = propTriples_1[_i];
                if (rdfCacheableStore_1.isLiteral(statemet.object) &&
                    statemet.predicate.nominalValue !== PREFIX_FACTORIES.RDFS('label')) {
                    var property = props[statemet.predicate.nominalValue];
                    var value = {
                        text: statemet.object.nominalValue,
                        lang: statemet.object.language || '',
                    };
                    props[statemet.predicate.nominalValue] = {
                        type: 'string',
                        values: property ? tslib_1.__spreadArrays(property.values, [value]) : [value],
                    };
                }
            }
            return props;
        });
    };
    RDFDataProvider.prototype.getTypes = function (el) {
        return this.rdfStorage.match(el, PREFIX_FACTORIES.RDF('type'), null)
            .then(function (typeTriples) {
            return typeTriples.toArray().map(function (t) { return t.object.nominalValue; });
        });
    };
    RDFDataProvider.prototype.createEmptyClass = function (classIri) {
        return {
            id: classIri,
            label: {
                values: [],
            },
            count: this.rdfStorage.getTypeCount(classIri),
            children: [],
        };
    };
    return RDFDataProvider;
}());
exports.RDFDataProvider = RDFDataProvider;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rdf_ext_1 = __webpack_require__(93);
var lodash_1 = __webpack_require__(66);
var DEFAULT_STORAGE_TYPE = 'text/turtle';
var DEFAULT_STORAGE_URI = 'http://ontodia.org/defaultGraph';
function prefixFactory(prefix) {
    var lastSymbol = prefix[prefix.length - 1];
    var _prefix = lastSymbol === '/' || lastSymbol === '#' ? prefix : prefix + '/';
    return function (id) {
        return _prefix + id;
    };
}
exports.prefixFactory = prefixFactory;
function isLiteral(el) {
    return el.interfaceName === 'Literal';
}
exports.isLiteral = isLiteral;
function isNamedNode(el) {
    return el.interfaceName === 'NamedNode';
}
exports.isNamedNode = isNamedNode;
exports.LABEL_URIS = [
    'http://www.w3.org/2004/02/skos/core#prefLabel',
    'http://www.w3.org/2004/02/skos/core#label',
    'http://www.w3.org/2004/02/skos/core#altLabel',
    'http://www.w3.org/2000/01/rdf-schema#prefLabel',
    'http://www.w3.org/2000/01/rdf-schema#label',
    'http://xmlns.com/foaf/0.1/name',
    'http://schema.org/name',
];
exports.LABEL_POSTFIXES = [
    'prefLabel',
    'prefName',
    'label',
    'name',
    'title',
];
function isLabelType(predicateIri) {
    var isLabelIri = exports.LABEL_URIS.indexOf(predicateIri) !== -1;
    var type = predicateIri.toLocaleLowerCase();
    var looksLikeLabel = Boolean(exports.LABEL_POSTFIXES.find(function (value, index, array) {
        var postfix = value.toLocaleLowerCase();
        return type.indexOf(postfix) !== -1;
    }));
    return isLabelIri || looksLikeLabel;
}
exports.isLabelType = isLabelType;
var RDFCacheableStore = /** @class */ (function () {
    function RDFCacheableStore(options) {
        this.checkingElementMap = {};
        this.labelsMap = {};
        this.countMap = {};
        this.elementTypes = {};
        this.parser = options.parser;
        this.acceptBlankNodes = Boolean(options.acceptBlankNodes);
        this.rdfStorage = rdf_ext_1.createStore();
        this.prefs = {
            RDF: prefixFactory('http://www.w3.org/1999/02/22-rdf-syntax-ns#'),
            RDFS: prefixFactory('http://www.w3.org/2000/01/rdf-schema#'),
            FOAF: prefixFactory('http://xmlns.com/foaf/0.1/'),
            XSD: prefixFactory('http://www.w3.org/2001/XMLSchema#'),
            OWL: prefixFactory('http://www.w3.org/2002/07/owl#'),
        };
    }
    RDFCacheableStore.prototype.add = function (rdfGraph, prefix) {
        this.rdfStorage.add(lodash_1.uniqueId(prefix) || (lodash_1.uniqueId(DEFAULT_STORAGE_URI)), rdfGraph);
        this.enrichMaps(rdfGraph);
    };
    RDFCacheableStore.prototype.match = function (subject, predicate, object, iri, callback, limit) {
        if (subject && (exports.LABEL_URIS.indexOf(predicate) !== -1) && !object) {
            return Promise.resolve(this._getLabels(subject));
        }
        else if (subject && predicate === this.prefs.RDF('type') && !object) {
            return Promise.resolve(this.getTypes(subject));
        }
        else {
            return this.rdfStorage.match(subject, predicate, object, iri, callback, limit);
        }
    };
    RDFCacheableStore.prototype.matchAll = function (statements) {
        var _this = this;
        var slowQueries = [];
        var queries = [];
        statements.forEach(function (statement) {
            if (statement.subject && (exports.LABEL_URIS.indexOf(statement.predicate) !== -1) && !statement.object) {
                queries.push(_this._getLabels(statement.subject));
            }
            else if (statement.subject && statement.predicate === _this.prefs.RDF('type') && !statement.object) {
                queries.push(_this.getTypes(statement.subject));
            }
            else {
                slowQueries.push(statement);
            }
        });
        queries.push(this.multipleMatch(slowQueries));
        return Promise.resolve(this.combineGraphs(queries));
    };
    RDFCacheableStore.prototype.getLabels = function (id) {
        return Promise.resolve(rdf_ext_1.createGraph(this.labelsMap[id]));
    };
    // Checks whetger the element is in the storage.
    RDFCacheableStore.prototype.checkElement = function (id) {
        if (this.labelsMap[id]) { // if there is label for an id then the element is already fetched
            return Promise.resolve(true);
        }
        else {
            if (!this.checkingElementMap[id]) {
                this.checkingElementMap[id] = this.rdfStorage.match(id, null, null).then(function (result) {
                    var resultArray = result.toArray();
                    return resultArray.length !== 0;
                });
            }
            return this.checkingElementMap[id];
        }
    };
    RDFCacheableStore.prototype.getTypeCount = function (id) {
        return this.countMap[id] || 0;
    };
    RDFCacheableStore.prototype.enrichMaps = function (newGraph) {
        var _this = this;
        var triples = newGraph.toArray();
        // Deal with labels
        for (var _i = 0, triples_1 = triples; _i < triples_1.length; _i++) {
            var triple = triples_1[_i];
            var element = triple.subject.nominalValue;
            var predicate = triple.predicate.nominalValue;
            if (isLabelType(predicate)) {
                if (!this.labelsMap[element]) {
                    this.labelsMap[element] = [];
                }
                if (isLiteral(triple.object)) {
                    this.labelsMap[element].push(triple);
                    this.labelsMap[element].sort(function (a, b) {
                        var index1 = exports.LABEL_URIS.indexOf(a.predicate.nominalValue);
                        var index2 = exports.LABEL_URIS.indexOf(b.predicate.nominalValue);
                        if (index1 > index2) {
                            return 1;
                        }
                        else if (index1 < index2) {
                            return -1;
                        }
                        else {
                            return 0;
                        }
                    });
                }
            }
        }
        // Deal with counts
        var typeInstances = newGraph.match(null, this.prefs.RDF('type'), null).toArray();
        var typeInstMap = {};
        for (var _a = 0, typeInstances_1 = typeInstances; _a < typeInstances_1.length; _a++) {
            var instTriple = typeInstances_1[_a];
            var type = instTriple.object.nominalValue;
            var inst = instTriple.subject.nominalValue;
            if (!typeInstMap[type]) {
                typeInstMap[type] = [];
            }
            if (this.acceptBlankNodes || isNamedNode(instTriple.subject)) {
                if (!this.elementTypes[inst]) {
                    this.elementTypes[inst] = [];
                }
                if (typeInstMap[type].indexOf(inst) === -1) {
                    typeInstMap[type].push(inst);
                }
                this.elementTypes[inst].push(instTriple);
            }
        }
        Object.keys(typeInstMap).forEach(function (key) { return _this.countMap[key] = typeInstMap[key].length; });
        return true;
    };
    RDFCacheableStore.prototype._getLabels = function (id) {
        return rdf_ext_1.createGraph(this.labelsMap[id]);
    };
    RDFCacheableStore.prototype.getTypes = function (id) {
        return rdf_ext_1.createGraph(this.elementTypes[id]);
    };
    RDFCacheableStore.prototype.combineGraphs = function (graphs) {
        var triples = [];
        for (var _i = 0, graphs_1 = graphs; _i < graphs_1.length; _i++) {
            var graph = graphs_1[_i];
            for (var _a = 0, _b = graph.toArray(); _a < _b.length; _a++) {
                var triple = _b[_a];
                triples.push(triple);
            }
        }
        return rdf_ext_1.createGraph(triples);
    };
    RDFCacheableStore.prototype.multipleMatch = function (statements) {
        var _this = this;
        var triples = [];
        var graphs = Object.keys(this.rdfStorage.graphs).map(function (id) { return _this.rdfStorage.graphs[id]; });
        for (var _i = 0, graphs_2 = graphs; _i < graphs_2.length; _i++) {
            var graph = graphs_2[_i];
            for (var _a = 0, _b = graph._graph; _a < _b.length; _a++) {
                var triple = _b[_a];
                for (var _c = 0, statements_1 = statements; _c < statements_1.length; _c++) {
                    var statement = statements_1[_c];
                    if (((!statement.object) || statement.object === triple.object.nominalValue) &&
                        ((!statement.predicate) || statement.predicate === triple.predicate.nominalValue) &&
                        ((!statement.subject) || statement.subject === triple.subject.nominalValue)) {
                        triples.push(triple);
                        continue;
                    }
                }
            }
        }
        return rdf_ext_1.createGraph(triples);
    };
    return RDFCacheableStore;
}());
exports.RDFCacheableStore = RDFCacheableStore;


/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__93__;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_PROXY = '/lod-proxy/';
var RDFLoader = /** @class */ (function () {
    function RDFLoader(parameters) {
        this.fetchingFileCatche = {};
        this.parser = parameters.parser;
        this.proxy = parameters.proxy || exports.DEFAULT_PROXY;
    }
    RDFLoader.prototype.parseData = function (data, contentType, prefix) {
        var result;
        result = this.parser.parse(data, contentType);
        return result;
    };
    RDFLoader.prototype.downloadElement = function (elementId) {
        var _this = this;
        var sharpIndex = elementId.indexOf('#');
        var fileUrl = sharpIndex !== -1 ? elementId.substr(0, sharpIndex) : elementId;
        var typePointer = 0;
        var mimeTypes = Object.keys(this.parser.parserMap);
        var recursivePart = function () {
            var acceptType = mimeTypes[typePointer++];
            if (acceptType && (elementId.startsWith('http') || elementId.startsWith('file'))) {
                return fetchFile({
                    url: elementId,
                    proxy: _this.proxy,
                    headers: {
                        'Accept': acceptType,
                    },
                }).then(function (body) {
                    return _this.parseData(body, acceptType, elementId)
                        .catch(function (error) {
                        // tslint:disable-next-line:no-console
                        console.warn(error);
                        if (typePointer < mimeTypes.length) {
                            return recursivePart();
                        }
                        else {
                            throw new Error("Unable to parse response. Response: " + body);
                        }
                    });
                });
            }
            else {
                throw new Error("Unable to fetch data using this id (" + elementId + ")");
            }
        };
        if (!this.fetchingFileCatche[fileUrl]) {
            this.fetchingFileCatche[fileUrl] = recursivePart();
        }
        return this.fetchingFileCatche[fileUrl];
    };
    return RDFLoader;
}());
exports.RDFLoader = RDFLoader;
function fetchFile(params) {
    return fetch(params.proxy + params.url, {
        method: 'GET',
        credentials: 'same-origin',
        mode: 'cors',
        cache: 'default',
        headers: params.headers || {
            'Accept': 'application/rdf+xml',
        },
    }).then(function (response) {
        if (response.ok) {
            return response.text();
        }
        else {
            var error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    });
}


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function workaroundForRDFXmlParser(body) {
    // For some strange reason we've encountered xml parser errors
    // when parsing rdf/xml file with Collection tag.
    // As I remember, file came from x3c Ontology
    // and this workaround helps to get file through xml parsing.
    return body.replace(/parseType=["']Collection["']/ig, 'parseType="Collection1"');
}
var POSTFIX_TO_MIME = {
    'xml': 'application/rdf+xml',
    'rdf': 'application/rdf+xml',
    'owl': 'application/rdf+xml',
    'nttl': 'application/x-turtle',
    'jsonld': 'application/ld+json',
    'rj': 'application/ld+json',
    'ttl': 'text/turtle',
    'nt': 'text/turtle',
    'nq': 'text/turtle',
};
function getMimeTypeByFileName(fileName) {
    var postfix = (fileName.match(/\.([\S]*)$/i) || [])[1];
    return postfix ? POSTFIX_TO_MIME[postfix] : undefined;
}
var RDFCompositeParser = /** @class */ (function () {
    function RDFCompositeParser(parserMap) {
        this.parserMap = parserMap;
    }
    RDFCompositeParser.prototype.parse = function (body, mimeType, fileName) {
        if (mimeType) {
            if (mimeType === 'application/rdf+xml') {
                body = workaroundForRDFXmlParser(body);
            }
            if (!this.parserMap[mimeType]) {
                throw Error('There is no parser for this MIME type');
            }
            return this.parserMap[mimeType].parse(body);
        }
        else {
            return this.tryToGuessMimeType(body, fileName);
        }
    };
    RDFCompositeParser.prototype.tryToGuessMimeType = function (body, fileName) {
        var _this = this;
        var mimeTypeIndex = 0;
        var mimeTypes = Object.keys(this.parserMap);
        if (fileName) {
            var mime_1 = getMimeTypeByFileName(fileName);
            if (mime_1) {
                mimeTypes = [mime_1].concat(mimeTypes.filter(function (type) { return type !== mime_1; }));
            }
        }
        var errors = [];
        var recursion = function () {
            if (mimeTypeIndex < mimeTypes.length) {
                var mimeType_1 = mimeTypes[mimeTypeIndex++];
                try {
                    var bodyToParse = mimeType_1 === 'application/rdf+xml' ?
                        workaroundForRDFXmlParser(body) : body;
                    return _this.parserMap[mimeType_1].parse(bodyToParse).catch(function (error) {
                        errors.push({ mimeType: mimeType_1, error: error });
                        return recursion();
                    });
                }
                catch (error) {
                    return recursion();
                }
            }
            else {
                throw new Error('Unknow mime type. Parse errors:\n' +
                    errors.map(function (e) { return e.mimeType + ": " + e.error.message + " " + e.error.stack + ";\n"; }).join('\n'));
            }
        };
        return recursion();
    };
    return RDFCompositeParser;
}());
exports.RDFCompositeParser = RDFCompositeParser;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var collections_1 = __webpack_require__(55);
var responseHandler_1 = __webpack_require__(97);
var sparqlDataProviderSettings_1 = __webpack_require__(98);
var BlankNodes = __webpack_require__(78);
var turtle_1 = __webpack_require__(99);
var SparqlQueryMethod;
(function (SparqlQueryMethod) {
    SparqlQueryMethod[SparqlQueryMethod["GET"] = 1] = "GET";
    SparqlQueryMethod[SparqlQueryMethod["POST"] = 2] = "POST";
})(SparqlQueryMethod = exports.SparqlQueryMethod || (exports.SparqlQueryMethod = {}));
var SparqlDataProvider = /** @class */ (function () {
    function SparqlDataProvider(options, settings) {
        if (settings === void 0) { settings = sparqlDataProviderSettings_1.OWLStatsSettings; }
        this.linkByPredicate = new Map();
        this.linkById = new Map();
        this.propertyByPredicate = new Map();
        var _a = options.queryFunction, queryFunction = _a === void 0 ? queryInternal : _a;
        this.options = tslib_1.__assign(tslib_1.__assign({}, options), { queryFunction: queryFunction });
        this.settings = settings;
        for (var _i = 0, _b = settings.linkConfigurations; _i < _b.length; _i++) {
            var link = _b[_i];
            this.linkById.set(link.id, link);
            var predicate = responseHandler_1.isDirectLink(link) ? link.path : link.id;
            collections_1.getOrCreateArrayInMap(this.linkByPredicate, predicate).push(link);
        }
        this.openWorldLinks = settings.linkConfigurations.length === 0 ||
            Boolean(settings.openWorldLinks);
        for (var _c = 0, _d = settings.propertyConfigurations; _c < _d.length; _c++) {
            var property = _d[_c];
            var predicate = responseHandler_1.isDirectProperty(property) ? property.path : property.id;
            collections_1.getOrCreateArrayInMap(this.propertyByPredicate, predicate).push(property);
        }
        this.openWorldProperties = settings.propertyConfigurations.length === 0 ||
            Boolean(settings.openWorldProperties);
    }
    SparqlDataProvider.prototype.classTree = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, defaultPrefix, schemaLabelProperty, classTreeQuery, query, result, classTree;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.settings, defaultPrefix = _a.defaultPrefix, schemaLabelProperty = _a.schemaLabelProperty, classTreeQuery = _a.classTreeQuery;
                        if (!classTreeQuery) {
                            return [2 /*return*/, []];
                        }
                        query = defaultPrefix + resolveTemplate(classTreeQuery, {
                            schemaLabelProperty: schemaLabelProperty,
                        });
                        return [4 /*yield*/, this.executeSparqlQuery(query)];
                    case 1:
                        result = _b.sent();
                        classTree = responseHandler_1.getClassTree(result);
                        if (!this.options.prepareLabels) return [3 /*break*/, 3];
                        return [4 /*yield*/, attachLabels(responseHandler_1.flattenClassTree(classTree), this.options.prepareLabels)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3: return [2 /*return*/, classTree];
                }
            });
        });
    };
    SparqlDataProvider.prototype.propertyInfo = function (params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, defaultPrefix, schemaLabelProperty, propertyInfoQuery, properties, ids, query, result, _i, _b, id;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.settings, defaultPrefix = _a.defaultPrefix, schemaLabelProperty = _a.schemaLabelProperty, propertyInfoQuery = _a.propertyInfoQuery;
                        if (!propertyInfoQuery) return [3 /*break*/, 2];
                        ids = params.propertyIds.map(escapeIri).map(function (id) { return " ( " + id + " )"; }).join(' ');
                        query = defaultPrefix + resolveTemplate(propertyInfoQuery, {
                            ids: ids,
                            schemaLabelProperty: schemaLabelProperty,
                        });
                        return [4 /*yield*/, this.executeSparqlQuery(query)];
                    case 1:
                        result = _c.sent();
                        properties = responseHandler_1.getPropertyInfo(result);
                        return [3 /*break*/, 3];
                    case 2:
                        properties = {};
                        for (_i = 0, _b = params.propertyIds; _i < _b.length; _i++) {
                            id = _b[_i];
                            properties[id] = { id: id, label: { values: [] } };
                        }
                        _c.label = 3;
                    case 3:
                        if (!this.options.prepareLabels) return [3 /*break*/, 5];
                        return [4 /*yield*/, attachLabels(collections_1.objectValues(properties), this.options.prepareLabels)];
                    case 4:
                        _c.sent();
                        _c.label = 5;
                    case 5: return [2 /*return*/, properties];
                }
            });
        });
    };
    SparqlDataProvider.prototype.classInfo = function (params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, defaultPrefix, schemaLabelProperty, classInfoQuery, classes, ids, query, result;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.settings, defaultPrefix = _a.defaultPrefix, schemaLabelProperty = _a.schemaLabelProperty, classInfoQuery = _a.classInfoQuery;
                        if (!classInfoQuery) return [3 /*break*/, 2];
                        ids = params.classIds.map(escapeIri).map(function (id) { return " ( " + id + " )"; }).join(' ');
                        query = defaultPrefix + resolveTemplate(classInfoQuery, {
                            ids: ids,
                            schemaLabelProperty: schemaLabelProperty,
                        });
                        return [4 /*yield*/, this.executeSparqlQuery(query)];
                    case 1:
                        result = _b.sent();
                        classes = responseHandler_1.getClassInfo(result);
                        return [3 /*break*/, 3];
                    case 2:
                        classes = params.classIds.map(function (id) { return ({ id: id, label: { values: [] }, children: [] }); });
                        _b.label = 3;
                    case 3:
                        if (!this.options.prepareLabels) return [3 /*break*/, 5];
                        return [4 /*yield*/, attachLabels(classes, this.options.prepareLabels)];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5: return [2 /*return*/, classes];
                }
            });
        });
    };
    SparqlDataProvider.prototype.linkTypesInfo = function (params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, defaultPrefix, schemaLabelProperty, linkTypesInfoQuery, linkTypes, ids, query, result;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.settings, defaultPrefix = _a.defaultPrefix, schemaLabelProperty = _a.schemaLabelProperty, linkTypesInfoQuery = _a.linkTypesInfoQuery;
                        if (!linkTypesInfoQuery) return [3 /*break*/, 2];
                        ids = params.linkTypeIds.map(escapeIri).map(function (id) { return " ( " + id + " )"; }).join(' ');
                        query = defaultPrefix + resolveTemplate(linkTypesInfoQuery, {
                            ids: ids,
                            schemaLabelProperty: schemaLabelProperty,
                        });
                        return [4 /*yield*/, this.executeSparqlQuery(query)];
                    case 1:
                        result = _b.sent();
                        linkTypes = responseHandler_1.getLinkTypes(result);
                        return [3 /*break*/, 3];
                    case 2:
                        linkTypes = params.linkTypeIds.map(function (id) { return ({ id: id, label: { values: [] } }); });
                        _b.label = 3;
                    case 3:
                        if (!this.options.prepareLabels) return [3 /*break*/, 5];
                        return [4 /*yield*/, attachLabels(linkTypes, this.options.prepareLabels)];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5: return [2 /*return*/, linkTypes];
                }
            });
        });
    };
    SparqlDataProvider.prototype.linkTypes = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, defaultPrefix, schemaLabelProperty, linkTypesQuery, linkTypesPattern, query, result, linkTypes;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.settings, defaultPrefix = _a.defaultPrefix, schemaLabelProperty = _a.schemaLabelProperty, linkTypesQuery = _a.linkTypesQuery, linkTypesPattern = _a.linkTypesPattern;
                        if (!linkTypesQuery) {
                            return [2 /*return*/, []];
                        }
                        query = defaultPrefix + resolveTemplate(linkTypesQuery, {
                            linkTypesPattern: linkTypesPattern,
                            schemaLabelProperty: schemaLabelProperty,
                        });
                        return [4 /*yield*/, this.executeSparqlQuery(query)];
                    case 1:
                        result = _b.sent();
                        linkTypes = responseHandler_1.getLinkTypes(result);
                        if (!this.options.prepareLabels) return [3 /*break*/, 3];
                        return [4 /*yield*/, attachLabels(linkTypes, this.options.prepareLabels)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3: return [2 /*return*/, linkTypes];
                }
            });
        });
    };
    SparqlDataProvider.prototype.elementInfo = function (params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var nonBlankResources, blankNodeResponse, triples, ids, _a, defaultPrefix, dataLabelProperty, elementInfoQuery, query, types, bindings, bindingsWithBlanks, elementModels, _b, _c;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        nonBlankResources = params.elementIds.filter(function (id) { return !BlankNodes.isEncodedBlank(id); });
                        blankNodeResponse = this.options.acceptBlankNodes
                            ? BlankNodes.elementInfo(params.elementIds) : undefined;
                        if (!(nonBlankResources.length > 0)) return [3 /*break*/, 2];
                        ids = nonBlankResources.map(escapeIri).map(function (id) { return " (" + id + ")"; }).join(' ');
                        _a = this.settings, defaultPrefix = _a.defaultPrefix, dataLabelProperty = _a.dataLabelProperty, elementInfoQuery = _a.elementInfoQuery;
                        query = defaultPrefix + resolveTemplate(elementInfoQuery, {
                            ids: ids,
                            dataLabelProperty: dataLabelProperty,
                            propertyConfigurations: this.formatPropertyInfo(),
                        });
                        return [4 /*yield*/, this.executeSparqlConstruct(query)];
                    case 1:
                        triples = _d.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        triples = [];
                        _d.label = 3;
                    case 3:
                        types = this.queryManyElementTypes(this.settings.propertyConfigurations.length > 0 ? params.elementIds : []);
                        bindings = responseHandler_1.triplesToElementBinding(triples);
                        bindingsWithBlanks = responseHandler_1.prependAdditionalBindings(bindings, blankNodeResponse);
                        _b = responseHandler_1.getElementsInfo;
                        _c = [bindingsWithBlanks];
                        return [4 /*yield*/, types];
                    case 4:
                        elementModels = _b.apply(void 0, _c.concat([_d.sent(),
                            this.propertyByPredicate,
                            this.openWorldProperties]));
                        if (!this.options.prepareLabels) return [3 /*break*/, 6];
                        return [4 /*yield*/, attachLabels(collections_1.objectValues(elementModels), this.options.prepareLabels)];
                    case 5:
                        _d.sent();
                        _d.label = 6;
                    case 6:
                        if (!this.options.prepareImages) return [3 /*break*/, 8];
                        return [4 /*yield*/, prepareElementImages(this.options.prepareImages, elementModels)];
                    case 7:
                        _d.sent();
                        return [3 /*break*/, 10];
                    case 8:
                        if (!(this.options.imagePropertyUris && this.options.imagePropertyUris.length)) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.attachImages(elementModels, this.options.imagePropertyUris)];
                    case 9:
                        _d.sent();
                        _d.label = 10;
                    case 10: return [2 /*return*/, elementModels];
                }
            });
        });
    };
    SparqlDataProvider.prototype.attachImages = function (elementsInfo, types) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var ids, typesString, query, bindings, err_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ids = Object.keys(elementsInfo).filter(function (id) { return !BlankNodes.isEncodedBlank(id); })
                            .map(escapeIri).map(function (id) { return " ( " + id + " )"; }).join(' ');
                        typesString = types.map(escapeIri).map(function (id) { return " ( " + id + " )"; }).join(' ');
                        query = this.settings.defaultPrefix + ("\n            SELECT ?inst ?linkType ?image\n            WHERE {{\n                VALUES (?inst) {" + ids + "}\n                VALUES (?linkType) {" + typesString + "}\n                " + this.settings.imageQueryPattern + "\n            }}\n        ");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.executeSparqlQuery(query)];
                    case 2:
                        bindings = _a.sent();
                        responseHandler_1.enrichElementsWithImages(bindings, elementsInfo);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        // tslint:disable-next-line:no-console
                        console.error(err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SparqlDataProvider.prototype.linksInfo = function (params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var nonBlankResources, blankNodeResponse, linkConfigurations, bindings, types, ids, linksInfoQuery, bindingsWithBlanks, _a, linksInfo, _b, _c;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        nonBlankResources = params.elementIds.filter(function (id) { return !BlankNodes.isEncodedBlank(id); });
                        blankNodeResponse = this.options.acceptBlankNodes
                            ? BlankNodes.linksInfo(params.elementIds) : undefined;
                        linkConfigurations = this.formatLinkLinks();
                        if (nonBlankResources.length > 0) {
                            ids = nonBlankResources.map(escapeIri).map(function (id) { return " ( " + id + " )"; }).join(' ');
                            linksInfoQuery = this.settings.defaultPrefix + resolveTemplate(this.settings.linksInfoQuery, {
                                ids: ids,
                                linkConfigurations: linkConfigurations,
                            });
                            bindings = this.executeSparqlQuery(linksInfoQuery);
                            types = this.queryManyElementTypes(params.elementIds);
                        }
                        else {
                            bindings = Promise.resolve({
                                head: { vars: [] },
                                results: { bindings: [] },
                            });
                            types = this.queryManyElementTypes([]);
                        }
                        _a = responseHandler_1.prependAdditionalBindings;
                        return [4 /*yield*/, bindings];
                    case 1:
                        bindingsWithBlanks = _a.apply(void 0, [_d.sent(), blankNodeResponse]);
                        _b = responseHandler_1.getLinksInfo;
                        _c = [bindingsWithBlanks];
                        return [4 /*yield*/, types];
                    case 2:
                        linksInfo = _b.apply(void 0, _c.concat([_d.sent(),
                            this.linkByPredicate,
                            this.openWorldLinks]));
                        return [2 /*return*/, linksInfo];
                }
            });
        });
    };
    SparqlDataProvider.prototype.linkTypesOf = function (params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, defaultPrefix, linkTypesOfQuery, linkTypesStatisticsQuery, filterTypePattern, elementIri, forAll, query, linkTypeBindings, linkTypeIds, navigateElementFilterOut, navigateElementFilterIn, foundLinkStats;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.options.acceptBlankNodes && BlankNodes.isEncodedBlank(params.elementId)) {
                            return [2 /*return*/, Promise.resolve(responseHandler_1.getLinksTypesOf(BlankNodes.linkTypesOf(params)))];
                        }
                        _a = this.settings, defaultPrefix = _a.defaultPrefix, linkTypesOfQuery = _a.linkTypesOfQuery, linkTypesStatisticsQuery = _a.linkTypesStatisticsQuery, filterTypePattern = _a.filterTypePattern;
                        elementIri = escapeIri(params.elementId);
                        forAll = this.formatLinkUnion(params.elementId, undefined, undefined, '?outObject', '?inObject', false);
                        if (forAll.usePredicatePart) {
                            forAll.unionParts.push("{ " + elementIri + " ?link ?outObject }");
                            forAll.unionParts.push("{ ?inObject ?link " + elementIri + " }");
                        }
                        query = defaultPrefix + resolveTemplate(linkTypesOfQuery, {
                            elementIri: elementIri,
                            linkConfigurations: forAll.unionParts.join('\nUNION\n'),
                        });
                        return [4 /*yield*/, this.executeSparqlQuery(query)];
                    case 1:
                        linkTypeBindings = _b.sent();
                        linkTypeIds = responseHandler_1.getLinksTypeIds(linkTypeBindings, this.linkByPredicate, this.openWorldLinks);
                        navigateElementFilterOut = this.options.acceptBlankNodes
                            ? "FILTER (IsIri(?outObject) || IsBlank(?outObject))"
                            : "FILTER IsIri(?outObject)";
                        navigateElementFilterIn = this.options.acceptBlankNodes
                            ? "FILTER (IsIri(?inObject) || IsBlank(?inObject))"
                            : "FILTER IsIri(?inObject)";
                        foundLinkStats = [];
                        return [4 /*yield*/, Promise.all(linkTypeIds.map(function (linkId) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                var linkConfig, linkConfigurationOut, linkConfigurationIn, predicate, commaSeparatedDomains, restrictionOut, restrictionIn, statsQuery, bindings, linkStats;
                                var _a;
                                return tslib_1.__generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            linkConfig = this.linkById.get(linkId);
                                            if (!linkConfig || responseHandler_1.isDirectLink(linkConfig)) {
                                                predicate = escapeIri(linkConfig && responseHandler_1.isDirectLink(linkConfig) ? linkConfig.path : linkId);
                                                linkConfigurationOut = elementIri + " " + predicate + " ?outObject";
                                                linkConfigurationIn = "?inObject " + predicate + " " + elementIri;
                                            }
                                            else {
                                                linkConfigurationOut = this.formatLinkPath(linkConfig.path, elementIri, '?outObject');
                                                linkConfigurationIn = this.formatLinkPath(linkConfig.path, '?inObject', elementIri);
                                            }
                                            if (linkConfig && ((_a = linkConfig.domain) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                                                commaSeparatedDomains = linkConfig.domain.map(escapeIri).join(', ');
                                                restrictionOut = filterTypePattern.replace(/[?$]inst\b/g, elementIri);
                                                restrictionIn = filterTypePattern.replace(/[?$]inst\b/g, '?inObject');
                                                linkConfigurationOut += " { " + restrictionOut + " FILTER(?class IN (" + commaSeparatedDomains + ")) }";
                                                linkConfigurationIn += " { " + restrictionIn + " FILTER(?class IN (" + commaSeparatedDomains + ")) }";
                                            }
                                            statsQuery = defaultPrefix + resolveTemplate(linkTypesStatisticsQuery, {
                                                linkId: escapeIri(linkId),
                                                elementIri: elementIri,
                                                linkConfigurationOut: linkConfigurationOut,
                                                linkConfigurationIn: linkConfigurationIn,
                                                navigateElementFilterOut: navigateElementFilterOut,
                                                navigateElementFilterIn: navigateElementFilterIn,
                                            });
                                            return [4 /*yield*/, this.executeSparqlQuery(statsQuery)];
                                        case 1:
                                            bindings = _b.sent();
                                            linkStats = responseHandler_1.getLinkStatistics(bindings);
                                            if (linkStats) {
                                                foundLinkStats.push(linkStats);
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, foundLinkStats];
                }
            });
        });
    };
    SparqlDataProvider.prototype.linkElements = function (params) {
        // for sparql we have rich filtering features and we just reuse filter.
        return this.filter({
            refElementId: params.elementId,
            refElementLinkId: params.linkId,
            linkDirection: params.direction,
            limit: params.limit,
            offset: params.offset,
            languageCode: ''
        });
    };
    SparqlDataProvider.prototype.filter = function (baseParams) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var params, types, blankFiltration, _a, _b, filterQuery, bindings, bindingsWithBlanks, elementModels, _c, _d;
            var _this = this;
            return tslib_1.__generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        params = tslib_1.__assign({}, baseParams);
                        if (params.limit === undefined) {
                            params.limit = 100;
                        }
                        types = this.querySingleElementTypes(params.refElementId && this.settings.linkConfigurations.length > 0
                            ? params.refElementId : undefined);
                        blankFiltration = this.options.acceptBlankNodes ? BlankNodes.filter(params) : undefined;
                        if (!(blankFiltration && blankFiltration.results.bindings.length > 0)) return [3 /*break*/, 2];
                        _a = responseHandler_1.getFilteredData;
                        _b = [blankFiltration];
                        return [4 /*yield*/, types];
                    case 1: return [2 /*return*/, _a.apply(void 0, _b.concat([_e.sent(), this.linkByPredicate, this.openWorldLinks]))];
                    case 2:
                        filterQuery = this.createFilterQuery(params);
                        return [4 /*yield*/, this.executeSparqlQuery(filterQuery)];
                    case 3:
                        bindings = _e.sent();
                        if (!this.options.acceptBlankNodes) return [3 /*break*/, 5];
                        return [4 /*yield*/, BlankNodes.updateFilterResults(bindings, function (blankQuery) { return _this.executeSparqlQuery(blankQuery); }, this.settings)];
                    case 4:
                        bindingsWithBlanks = _e.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        bindingsWithBlanks = bindings;
                        _e.label = 6;
                    case 6:
                        _c = responseHandler_1.getFilteredData;
                        _d = [bindingsWithBlanks];
                        return [4 /*yield*/, types];
                    case 7:
                        elementModels = _c.apply(void 0, _d.concat([_e.sent(), this.linkByPredicate, this.openWorldLinks]));
                        if (!this.options.prepareLabels) return [3 /*break*/, 9];
                        return [4 /*yield*/, attachLabels(collections_1.objectValues(elementModels), this.options.prepareLabels)];
                    case 8:
                        _e.sent();
                        _e.label = 9;
                    case 9: return [2 /*return*/, elementModels];
                }
            });
        });
    };
    SparqlDataProvider.prototype.createFilterQuery = function (params) {
        if (!params.refElementId && params.refElementLinkId) {
            throw new Error('Cannot execute refElementLink filter without refElement');
        }
        var outerProjection = '?inst ?class ?label ?blankType';
        var innerProjection = '?inst';
        var refQueryPart = '';
        var refQueryTypes = '';
        if (params.refElementId) {
            outerProjection += ' ?link ?direction';
            innerProjection += ' ?link ?direction';
            refQueryPart = this.createRefQueryPart({
                elementId: params.refElementId,
                linkId: params.refElementLinkId,
                direction: params.linkDirection,
            });
            if (this.settings.linkConfigurations.length > 0) {
                outerProjection += ' ?classAll';
                refQueryTypes = this.settings.filterTypePattern.replace(/[?$]class\b/g, '?classAll');
            }
        }
        var elementTypePart = '';
        if (params.elementTypeId) {
            var elementTypeIri = escapeIri(params.elementTypeId);
            elementTypePart = this.settings.filterTypePattern.replace(/[?$]class\b/g, elementTypeIri);
        }
        var _a = this.settings, defaultPrefix = _a.defaultPrefix, fullTextSearch = _a.fullTextSearch, dataLabelProperty = _a.dataLabelProperty;
        var textSearchPart = '';
        if (params.text) {
            innerProjection += ' ?score';
            if (this.settings.fullTextSearch.extractLabel) {
                textSearchPart += sparqlExtractLabel('?inst', '?extractedLabel');
            }
            textSearchPart = resolveTemplate(fullTextSearch.queryPattern, { text: params.text, dataLabelProperty: dataLabelProperty });
        }
        var blankNodes = this.options.acceptBlankNodes;
        if (blankNodes) {
            outerProjection += " " + BlankNodes.BLANK_NODE_QUERY_PARAMETERS;
        }
        return defaultPrefix + "\n            " + fullTextSearch.prefix + "\n\n        SELECT " + outerProjection + "\n        WHERE {\n            {\n                SELECT DISTINCT " + innerProjection + " WHERE {\n                    " + elementTypePart + "\n                    " + refQueryPart + "\n                    " + textSearchPart + "\n                    " + this.settings.filterAdditionalRestriction + "\n                }\n                " + (textSearchPart ? 'ORDER BY DESC(?score)' : '') + "\n                LIMIT " + params.limit + " OFFSET " + params.offset + "\n            }\n            " + refQueryTypes + "\n            " + resolveTemplate(this.settings.filterElementInfoPattern, { dataLabelProperty: dataLabelProperty }) + "\n            " + (blankNodes ? BlankNodes.BLANK_NODE_QUERY : '') + "\n        } " + (textSearchPart ? 'ORDER BY DESC(?score)' : '') + "\n        ";
    };
    SparqlDataProvider.prototype.executeSparqlQuery = function (query) {
        var method = this.options.queryMethod ? this.options.queryMethod : SparqlQueryMethod.GET;
        return executeSparqlQuery(this.options.endpointUrl, query, method, this.options.queryFunction);
    };
    SparqlDataProvider.prototype.executeSparqlConstruct = function (query) {
        var method = this.options.queryMethod ? this.options.queryMethod : SparqlQueryMethod.GET;
        return executeSparqlConstruct(this.options.endpointUrl, query, method, this.options.queryFunction);
    };
    SparqlDataProvider.prototype.createRefQueryPart = function (params) {
        var elementId = params.elementId, linkId = params.linkId, direction = params.direction;
        var _a = this.formatLinkUnion(elementId, linkId, direction, '?inst', '?inst', true), unionParts = _a.unionParts, usePredicatePart = _a.usePredicatePart;
        if (usePredicatePart) {
            var refElementIRI = escapeIri(params.elementId);
            var refLinkType = void 0;
            if (linkId) {
                var link = this.linkById.get(linkId);
                refLinkType = link && responseHandler_1.isDirectLink(link) ? escapeIri(link.path) : escapeIri(linkId);
            }
            var linkPattern = refLinkType || '?link';
            var bindType = refLinkType ? "BIND(" + refLinkType + " as ?link)" : '';
            // FILTER ISIRI is used to prevent blank nodes appearing in results
            var blankFilter = this.options.acceptBlankNodes
                ? 'FILTER(isIri(?inst) || isBlank(?inst))'
                : 'FILTER(isIri(?inst))';
            if (!direction || direction === 'out') {
                unionParts.push("{ " + refElementIRI + " " + linkPattern + " ?inst BIND(\"out\" as ?direction) " + bindType + " " + blankFilter + " }");
            }
            if (!direction || direction === 'in') {
                unionParts.push("{ ?inst " + linkPattern + " " + refElementIRI + " BIND(\"in\" as ?direction) " + bindType + " " + blankFilter + " }");
            }
        }
        var resultPattern = unionParts.length === 0 ? 'FILTER(false)' : unionParts.join("\nUNION\n");
        var useAllLinksPattern = !linkId && this.settings.filterRefElementLinkPattern.length > 0;
        if (useAllLinksPattern) {
            resultPattern += "\n" + this.settings.filterRefElementLinkPattern;
        }
        return resultPattern;
    };
    SparqlDataProvider.prototype.formatLinkUnion = function (refElementIri, linkIri, direction, outElementVar, inElementVar, bindDirection) {
        var linkConfigurations = this.settings.linkConfigurations;
        var fixedIri = escapeIri(refElementIri);
        var unionParts = [];
        var hasDirectLink = false;
        for (var _i = 0, linkConfigurations_1 = linkConfigurations; _i < linkConfigurations_1.length; _i++) {
            var link = linkConfigurations_1[_i];
            if (linkIri && link.id !== linkIri) {
                continue;
            }
            if (responseHandler_1.isDirectLink(link)) {
                hasDirectLink = true;
            }
            else {
                var linkType = escapeIri(link.id);
                if (!direction || direction === 'out') {
                    var path = this.formatLinkPath(link.path, fixedIri, outElementVar);
                    var boundedDirection = bindDirection ? "BIND(\"out\" as ?direction) " : '';
                    unionParts.push("{ " + path + " BIND(" + linkType + " as ?link) " + boundedDirection + "}");
                }
                if (!direction || direction === 'in') {
                    var path = this.formatLinkPath(link.path, inElementVar, fixedIri);
                    var boundedDirection = bindDirection ? "BIND(\"in\" as ?direction) " : '';
                    unionParts.push("{ " + path + " BIND(" + linkType + " as ?link) " + boundedDirection + "}");
                }
            }
        }
        var usePredicatePart = this.openWorldLinks || hasDirectLink;
        return { unionParts: unionParts, usePredicatePart: usePredicatePart };
    };
    SparqlDataProvider.prototype.formatLinkLinks = function () {
        var unionParts = [];
        var hasDirectLink = false;
        for (var _i = 0, _a = this.settings.linkConfigurations; _i < _a.length; _i++) {
            var link = _a[_i];
            if (responseHandler_1.isDirectLink(link)) {
                hasDirectLink = true;
            }
            else {
                var linkType = escapeIri(link.id);
                unionParts.push("{ " + this.formatLinkPath(link.path, '?source', '?target') + " BIND(" + linkType + " as ?type) }");
            }
        }
        var usePredicatePart = this.openWorldLinks || hasDirectLink;
        if (usePredicatePart) {
            unionParts.push("{ ?source ?type ?target }");
        }
        return unionParts.join('\nUNION\n');
    };
    SparqlDataProvider.prototype.formatLinkPath = function (path, source, target) {
        return path.replace(/[?$]source\b/g, source).replace(/[?$]target\b/g, target);
    };
    SparqlDataProvider.prototype.formatPropertyInfo = function () {
        var unionParts = [];
        var hasDirectProperty = false;
        for (var _i = 0, _a = this.settings.propertyConfigurations; _i < _a.length; _i++) {
            var property = _a[_i];
            if (responseHandler_1.isDirectProperty(property)) {
                hasDirectProperty = true;
            }
            else {
                var propType = escapeIri(property.id);
                var formatted = this.formatPropertyPath(property.path, '?inst', '?propValue');
                unionParts.push("{ " + formatted + " BIND(" + propType + " as ?propType) }");
            }
        }
        var usePredicatePart = this.openWorldProperties || hasDirectProperty;
        if (usePredicatePart) {
            unionParts.push("{ ?inst ?propType ?propValue }");
        }
        return unionParts.join('\nUNION\n');
    };
    SparqlDataProvider.prototype.formatPropertyPath = function (path, subject, value) {
        return path.replace(/[?$]inst\b/g, subject).replace(/[?$]value\b/g, value);
    };
    SparqlDataProvider.prototype.querySingleElementTypes = function (element) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var types;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.queryManyElementTypes(element ? [element] : [])];
                    case 1:
                        types = _a.sent();
                        return [2 /*return*/, types.get(element)];
                }
            });
        });
    };
    SparqlDataProvider.prototype.queryManyElementTypes = function (elements) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var filterTypePattern, ids, queryTemplate, query, response, blankResponse;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (elements.length === 0) {
                            return [2 /*return*/, new Map()];
                        }
                        filterTypePattern = this.settings.filterTypePattern;
                        ids = elements
                            .filter(function (iri) { return !BlankNodes.isEncodedBlank(iri); })
                            .map(function (iri) { return "(" + escapeIri(iri) + ")"; }).join(' ');
                        queryTemplate = "SELECT ?inst ?class { VALUES(?inst) { ${ids} } ${filterTypePattern} }";
                        query = resolveTemplate(queryTemplate, { ids: ids, filterTypePattern: filterTypePattern });
                        return [4 /*yield*/, this.executeSparqlQuery(query)];
                    case 1:
                        response = _a.sent();
                        if (this.options.acceptBlankNodes && elements.find(BlankNodes.isEncodedBlank)) {
                            blankResponse = BlankNodes.getElementTypes(elements);
                            response = responseHandler_1.prependAdditionalBindings(response, blankResponse);
                        }
                        return [2 /*return*/, responseHandler_1.getElementTypes(response)];
                }
            });
        });
    };
    return SparqlDataProvider;
}());
exports.SparqlDataProvider = SparqlDataProvider;
function attachLabels(items, fetchLabels) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var resources, _i, items_1, item, labels, _a, items_2, item;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    resources = new Set();
                    for (_i = 0, items_1 = items; _i < items_1.length; _i++) {
                        item = items_1[_i];
                        if (BlankNodes.isEncodedBlank(item.id)) {
                            continue;
                        }
                        resources.add(item.id);
                    }
                    return [4 /*yield*/, fetchLabels(resources)];
                case 1:
                    labels = _b.sent();
                    for (_a = 0, items_2 = items; _a < items_2.length; _a++) {
                        item = items_2[_a];
                        if (labels.has(item.id)) {
                            item.label = { values: labels.get(item.id) };
                        }
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function prepareElementImages(fetchImages, elementsInfo) {
    return fetchImages(elementsInfo).then(function (images) {
        for (var iri in images) {
            if (Object.prototype.hasOwnProperty.call(images, iri) && elementsInfo[iri]) {
                elementsInfo[iri].image = images[iri];
            }
        }
    });
}
function resolveTemplate(template, values) {
    var result = template;
    for (var replaceKey in values) {
        if (!values.hasOwnProperty(replaceKey)) {
            continue;
        }
        var replaceValue = values[replaceKey];
        if (replaceValue) {
            result = result.replace(new RegExp('\\${' + replaceKey + '}', 'g'), replaceValue);
        }
    }
    return result;
}
function executeSparqlQuery(endpoint, query, method, queryFunction) {
    var internalQuery;
    if (method === SparqlQueryMethod.GET) {
        internalQuery = queryFunction({
            url: appendQueryParams(endpoint, { query: query }),
            headers: {
                'Accept': 'application/sparql-results+json',
            },
            method: 'GET',
        });
    }
    else {
        internalQuery = queryFunction({
            url: endpoint,
            body: query,
            headers: {
                'Accept': 'application/sparql-results+json',
                'Content-Type': 'application/sparql-query; charset=UTF-8',
            },
            method: 'POST',
        });
    }
    return internalQuery.then(function (response) {
        if (response.ok) {
            return response.json();
        }
        else {
            var error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    });
}
exports.executeSparqlQuery = executeSparqlQuery;
function executeSparqlConstruct(endpoint, query, method, queryFunction) {
    var internalQuery;
    if (method === SparqlQueryMethod.GET) {
        internalQuery = queryFunction({
            url: appendQueryParams(endpoint, { query: query }),
            headers: {
                'Accept': 'text/turtle',
            },
            method: 'GET',
        });
    }
    else {
        internalQuery = queryFunction({
            url: endpoint,
            body: query,
            headers: {
                'Accept': 'text/turtle',
                'Content-Type': 'application/sparql-query; charset=UTF-8',
            },
            method: 'POST',
        });
    }
    return internalQuery.then(function (response) {
        if (response.ok) {
            return response.text();
        }
        else {
            var error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    }).then(turtle_1.parseTurtleText);
}
exports.executeSparqlConstruct = executeSparqlConstruct;
function appendQueryParams(endpoint, queryParams) {
    if (queryParams === void 0) { queryParams = {}; }
    var initialSeparator = endpoint.indexOf('?') < 0 ? '?' : '&';
    var additionalParams = initialSeparator + Object.keys(queryParams)
        .map(function (key) { return key + "=" + encodeURIComponent(queryParams[key]); })
        .join('&');
    return endpoint + additionalParams;
}
function queryInternal(params) {
    return fetch(params.url, {
        method: params.method,
        body: params.body,
        credentials: 'same-origin',
        mode: 'cors',
        cache: 'default',
        headers: params.headers,
    });
}
function sparqlExtractLabel(subject, label) {
    return "\n        BIND ( str( " + subject + " ) as ?uriStr)\n        BIND ( strafter(?uriStr, \"#\") as ?label3)\n        BIND ( strafter(strafter(?uriStr, \"//\"), \"/\") as ?label6)\n        BIND ( strafter(?label6, \"/\") as ?label5)\n        BIND ( strafter(?label5, \"/\") as ?label4)\n        BIND (if (?label3 != \"\", ?label3,\n            if (?label4 != \"\", ?label4,\n            if (?label5 != \"\", ?label5, ?label6))) as " + label + ")\n    ";
}
function escapeIri(iri) {
    if (typeof iri !== 'string') {
        throw new Error("Cannot escape IRI of type \"" + typeof iri + "\"");
    }
    return "<" + iri + ">";
}


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var sparqlModels_1 = __webpack_require__(79);
var model_1 = __webpack_require__(47);
var collections_1 = __webpack_require__(55);
var LABEL_URI = 'http://www.w3.org/2000/01/rdf-schema#label';
var RDF_TYPE_URI = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type';
var EMPTY_MAP = new Map();
function getClassTree(response) {
    var treeNodes = createClassMap(response.results.bindings);
    var allNodes = [];
    // createClassMap ensures we get both elements and parents and we can use treeNodes[treeNode.parent] safely
    treeNodes.forEach(function (node) {
        allNodes.push(node);
        node.parents.forEach(function (parent) {
            treeNodes.get(parent).children.push(node);
        });
        node.parents = undefined;
    });
    var withoutCycles = breakCyclesAndCalculateCounts(allNodes);
    var leafs = new Set();
    for (var _i = 0, withoutCycles_1 = withoutCycles; _i < withoutCycles_1.length; _i++) {
        var node = withoutCycles_1[_i];
        for (var _a = 0, _b = node.children; _a < _b.length; _a++) {
            var child = _b[_a];
            leafs.add(child.id);
        }
    }
    var tree = withoutCycles.filter(function (node) { return !leafs.has(node.id); });
    return tree;
}
exports.getClassTree = getClassTree;
function flattenClassTree(classTree) {
    var all = [];
    var visitClasses = function (classes) {
        for (var _i = 0, classes_1 = classes; _i < classes_1.length; _i++) {
            var model = classes_1[_i];
            all.push(model);
            visitClasses(model.children);
        }
    };
    visitClasses(classTree);
    return all;
}
exports.flattenClassTree = flattenClassTree;
function createClassMap(bindings) {
    var treeNodes = new Map();
    for (var _i = 0, bindings_1 = bindings; _i < bindings_1.length; _i++) {
        var binding = bindings_1[_i];
        if (!sparqlModels_1.isRdfIri(binding.class)) {
            continue;
        }
        var classIri = binding.class.value;
        var node = treeNodes.get(classIri);
        if (!node) {
            node = createEmptyModel(classIri);
            treeNodes.set(classIri, node);
        }
        if (binding.label) {
            appendLabel(node.label, getLocalizedString(binding.label));
        }
        if (binding.parent) {
            var parentIri = binding.parent.value;
            node.parents.add(parentIri);
        }
        if (binding.instcount) {
            node.count = getInstCount(binding.instcount);
        }
    }
    // ensuring parent will always be there
    for (var _a = 0, bindings_2 = bindings; _a < bindings_2.length; _a++) {
        var binding = bindings_2[_a];
        if (binding.parent) {
            var parentIri = binding.parent.value;
            if (!treeNodes.has(parentIri)) {
                treeNodes.set(parentIri, createEmptyModel(parentIri));
            }
        }
    }
    function createEmptyModel(iri) {
        return {
            id: iri,
            children: [],
            label: { values: [] },
            count: undefined,
            parents: new Set(),
        };
    }
    return treeNodes;
}
function breakCyclesAndCalculateCounts(tree) {
    var visiting = new Set();
    function reduceChildren(acc, node) {
        if (visiting.has(node.id)) {
            // prevent unbounded recursion
            return acc;
        }
        // no more to count
        if (!node.children) {
            return;
        }
        // ensure all children have their counts completed;
        visiting.add(node.id);
        node.children = node.children.reduce(reduceChildren, []);
        visiting.delete(node.id);
        // we have to preserve no data here. If nor element nor childs have no count information,
        // we just pass undefined upwards.
        var childCount;
        node.children.forEach(function (_a) {
            var count = _a.count;
            if (count === undefined) {
                return;
            }
            childCount = childCount === undefined ? count : childCount + count;
        });
        if (childCount !== undefined) {
            node.count = node.count === undefined ? childCount : node.count + childCount;
        }
        acc.push(node);
        return acc;
    }
    return tree.reduce(reduceChildren, []);
}
function getClassInfo(response) {
    var classes = {};
    for (var _i = 0, _a = response.results.bindings; _i < _a.length; _i++) {
        var binding = _a[_i];
        if (!binding.class) {
            continue;
        }
        var id = binding.class.value;
        var model = classes[id];
        if (model) {
            appendLabel(model.label, getLocalizedString(binding.label));
            var instanceCount = getInstCount(binding.instcount);
            if (instanceCount !== undefined) {
                model.count = Math.max(model.count, instanceCount);
            }
        }
        else {
            var label = getLocalizedString(binding.label);
            classes[id] = {
                id: id,
                children: [],
                label: { values: label ? [label] : [] },
                count: getInstCount(binding.instcount),
            };
        }
    }
    var classesList = [];
    for (var id in classes) {
        if (!classes.hasOwnProperty(id)) {
            continue;
        }
        var model = classes[id];
        classesList.push(model);
    }
    return classesList;
}
exports.getClassInfo = getClassInfo;
function getPropertyInfo(response) {
    var models = {};
    for (var _i = 0, _a = response.results.bindings; _i < _a.length; _i++) {
        var sProperty = _a[_i];
        var sPropertyTypeId = sProperty.property.value;
        if (models[sPropertyTypeId]) {
            if (sProperty.label) {
                var label = models[sPropertyTypeId].label;
                if (label.values.length === 1 && !label.values[0].language) {
                    label.values = [];
                }
                label.values.push(getLocalizedString(sProperty.label));
            }
        }
        else {
            models[sPropertyTypeId] = getPropertyModel(sProperty);
        }
    }
    return models;
}
exports.getPropertyInfo = getPropertyInfo;
function getLinkTypes(response) {
    var sInst = response.results.bindings;
    var linkTypes = [];
    var linkTypesMap = {};
    for (var _i = 0, sInst_1 = sInst; _i < sInst_1.length; _i++) {
        var sLink = sInst_1[_i];
        var sInstTypeId = sLink.link.value;
        if (linkTypesMap[sInstTypeId]) {
            if (sLink.label) {
                var label = linkTypesMap[sInstTypeId].label;
                if (label.values.length === 1 && !label.values[0].language) {
                    label.values = [];
                }
                label.values.push(getLocalizedString(sLink.label));
            }
        }
        else {
            linkTypesMap[sInstTypeId] = getLinkTypeInfo(sLink);
            linkTypes.push(linkTypesMap[sInstTypeId]);
        }
    }
    return linkTypes;
}
exports.getLinkTypes = getLinkTypes;
function triplesToElementBinding(triples) {
    var map = {};
    var convertedResponse = {
        head: {
            vars: ['inst', 'class', 'label', 'blankType', 'propType', 'propValue'],
        },
        results: {
            bindings: [],
        },
    };
    for (var _i = 0, triples_1 = triples; _i < triples_1.length; _i++) {
        var triple = triples_1[_i];
        var trippleId = triple.subject.value;
        if (!map[trippleId]) {
            map[trippleId] = createAndPushBinding(triple);
        }
        if (triple.predicate.value === LABEL_URI && sparqlModels_1.isRdfLiteral(triple.object)) { // Label
            if (map[trippleId].label) {
                map[trippleId] = createAndPushBinding(triple);
            }
            map[trippleId].label = triple.object;
        }
        else if ( // Class
        triple.predicate.value === RDF_TYPE_URI &&
            sparqlModels_1.isRdfIri(triple.object) && sparqlModels_1.isRdfIri(triple.predicate)) {
            if (map[trippleId].class) {
                map[trippleId] = createAndPushBinding(triple);
            }
            map[trippleId].class = triple.object;
        }
        else if (!sparqlModels_1.isRdfBlank(triple.object) && sparqlModels_1.isRdfIri(triple.predicate)) { // Property
            if (map[trippleId].propType) {
                map[trippleId] = createAndPushBinding(triple);
            }
            map[trippleId].propType = triple.predicate;
            map[trippleId].propValue = triple.object;
        }
    }
    function createAndPushBinding(tripple) {
        var binding = {
            inst: tripple.subject,
        };
        convertedResponse.results.bindings.push(binding);
        return binding;
    }
    return convertedResponse;
}
exports.triplesToElementBinding = triplesToElementBinding;
function getElementsInfo(response, types, propertyByPredicate, openWorldProperties) {
    if (types === void 0) { types = EMPTY_MAP; }
    if (propertyByPredicate === void 0) { propertyByPredicate = EMPTY_MAP; }
    if (openWorldProperties === void 0) { openWorldProperties = true; }
    var instancesMap = {};
    for (var _i = 0, _a = response.results.bindings; _i < _a.length; _i++) {
        var binding = _a[_i];
        if (!sparqlModels_1.isRdfIri(binding.inst)) {
            continue;
        }
        var iri = binding.inst.value;
        var model = instancesMap[iri];
        if (!model) {
            model = emptyElementInfo(iri);
            instancesMap[iri] = model;
        }
        enrichElement(model, binding);
    }
    if (!openWorldProperties || propertyByPredicate.size > 0) {
        for (var iri in instancesMap) {
            if (!Object.hasOwnProperty.call(instancesMap, iri)) {
                continue;
            }
            var model = instancesMap[iri];
            var modelTypes = types.get(model.id);
            model.properties = mapPropertiesByConfig(model, modelTypes, propertyByPredicate, openWorldProperties);
        }
    }
    return instancesMap;
}
exports.getElementsInfo = getElementsInfo;
function mapPropertiesByConfig(model, modelTypes, propertyByPredicate, openWorldProperties) {
    var mapped = {};
    for (var propertyIri in model.properties) {
        if (!Object.hasOwnProperty.call(model.properties, propertyIri)) {
            continue;
        }
        var properties = propertyByPredicate.get(propertyIri);
        if (properties && properties.length > 0) {
            for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
                var property = properties_1[_i];
                if (typeMatchesDomain(property, modelTypes)) {
                    mapped[property.id] = model.properties[propertyIri];
                }
            }
        }
        else if (openWorldProperties) {
            mapped[propertyIri] = model.properties[propertyIri];
        }
    }
    return mapped;
}
function enrichElementsWithImages(response, elementsInfo) {
    var respElements = response.results.bindings;
    for (var _i = 0, respElements_1 = respElements; _i < respElements_1.length; _i++) {
        var respEl = respElements_1[_i];
        var elementInfo = elementsInfo[respEl.inst.value];
        if (elementInfo) {
            elementInfo.image = respEl.image.value;
        }
    }
}
exports.enrichElementsWithImages = enrichElementsWithImages;
function getElementTypes(response) {
    var types = new Map();
    for (var _i = 0, _a = response.results.bindings; _i < _a.length; _i++) {
        var binding = _a[_i];
        if (sparqlModels_1.isRdfIri(binding.inst) && sparqlModels_1.isRdfIri(binding.class)) {
            var element = binding.inst.value;
            var type = binding.class.value;
            collections_1.getOrCreateSetInMap(types, element).add(type);
        }
    }
    return types;
}
exports.getElementTypes = getElementTypes;
function getLinksInfo(response, types, linkByPredicateType, openWorldLinks) {
    if (types === void 0) { types = EMPTY_MAP; }
    if (linkByPredicateType === void 0) { linkByPredicateType = EMPTY_MAP; }
    if (openWorldLinks === void 0) { openWorldLinks = true; }
    var sparqlLinks = response.results.bindings;
    var links = new collections_1.HashMap(model_1.hashLink, model_1.sameLink);
    for (var _i = 0, sparqlLinks_1 = sparqlLinks; _i < sparqlLinks_1.length; _i++) {
        var binding = sparqlLinks_1[_i];
        var model = {
            sourceId: binding.source.value,
            linkTypeId: binding.type.value,
            targetId: binding.target.value,
            properties: {},
        };
        if (links.has(model)) {
            // this can only happen due to error in sparql or when merging properties
            if (binding.propType) {
                var existing = links.get(model);
                mergeProperties(existing.properties, binding.propType, binding.propValue);
            }
        }
        else {
            if (binding.propType) {
                mergeProperties(model.properties, binding.propType, binding.propValue);
            }
            var linkConfigs = linkByPredicateType.get(model.linkTypeId);
            if (linkConfigs && linkConfigs.length > 0) {
                for (var _a = 0, linkConfigs_1 = linkConfigs; _a < linkConfigs_1.length; _a++) {
                    var linkConfig = linkConfigs_1[_a];
                    if (typeMatchesDomain(linkConfig, types.get(model.sourceId))) {
                        var mappedModel = isDirectLink(linkConfig)
                            ? tslib_1.__assign(tslib_1.__assign({}, model), { linkTypeId: linkConfig.id }) : model;
                        links.set(mappedModel, mappedModel);
                    }
                }
            }
            else if (openWorldLinks) {
                links.set(model, model);
            }
        }
    }
    var linkArray = [];
    links.forEach(function (value) { return linkArray.push(value); });
    return linkArray;
}
exports.getLinksInfo = getLinksInfo;
function getLinksTypesOf(response) {
    var sparqlLinkTypes = response.results.bindings.filter(function (b) { return !sparqlModels_1.isRdfBlank(b.link); });
    return sparqlLinkTypes.map(function (sLink) { return getLinkCount(sLink); });
}
exports.getLinksTypesOf = getLinksTypesOf;
function getLinksTypeIds(response, linkByPredicateType, openWorldLinks) {
    if (linkByPredicateType === void 0) { linkByPredicateType = EMPTY_MAP; }
    if (openWorldLinks === void 0) { openWorldLinks = true; }
    var linkTypes = [];
    for (var _i = 0, _a = response.results.bindings; _i < _a.length; _i++) {
        var binding = _a[_i];
        if (!sparqlModels_1.isRdfIri(binding.link)) {
            continue;
        }
        var linkConfigs = linkByPredicateType.get(binding.link.value);
        if (linkConfigs && linkConfigs.length > 0) {
            for (var _b = 0, linkConfigs_2 = linkConfigs; _b < linkConfigs_2.length; _b++) {
                var linkConfig = linkConfigs_2[_b];
                var mappedLinkType = isDirectLink(linkConfig)
                    ? linkConfig.id : binding.link.value;
                linkTypes.push(mappedLinkType);
            }
        }
        else if (openWorldLinks) {
            linkTypes.push(binding.link.value);
        }
    }
    return linkTypes;
}
exports.getLinksTypeIds = getLinksTypeIds;
function getLinkStatistics(response) {
    for (var _i = 0, _a = response.results.bindings; _i < _a.length; _i++) {
        var binding = _a[_i];
        if (sparqlModels_1.isRdfIri(binding.link)) {
            return getLinkCount(binding);
        }
    }
    return undefined;
}
exports.getLinkStatistics = getLinkStatistics;
function getFilteredData(response, sourceTypes, linkByPredicateType, openWorldLinks) {
    if (linkByPredicateType === void 0) { linkByPredicateType = EMPTY_MAP; }
    if (openWorldLinks === void 0) { openWorldLinks = true; }
    var instancesMap = {};
    var resultTypes = new Map();
    var outPredicates = new Map();
    var inPredicates = new Map();
    for (var _i = 0, _a = response.results.bindings; _i < _a.length; _i++) {
        var binding = _a[_i];
        if (!sparqlModels_1.isRdfIri(binding.inst) && !sparqlModels_1.isRdfBlank(binding.inst)) {
            continue;
        }
        var iri = binding.inst.value;
        var model = instancesMap[iri];
        if (!model) {
            model = emptyElementInfo(iri);
            instancesMap[iri] = model;
        }
        enrichElement(model, binding);
        if (sparqlModels_1.isRdfIri(binding.classAll)) {
            collections_1.getOrCreateSetInMap(resultTypes, iri).add(binding.classAll.value);
        }
        if (!openWorldLinks && binding.link && binding.direction) {
            var predicates = binding.direction.value === 'out' ? outPredicates : inPredicates;
            collections_1.getOrCreateSetInMap(predicates, model.id).add(binding.link.value);
        }
    }
    if (!openWorldLinks) {
        for (var _b = 0, _c = Object.keys(instancesMap); _b < _c.length; _b++) {
            var id = _c[_b];
            var model = instancesMap[id];
            var targetTypes = resultTypes.get(model.id);
            var doesMatchesDomain = (matchesDomainForLink(sourceTypes, outPredicates.get(model.id), linkByPredicateType) &&
                matchesDomainForLink(targetTypes, inPredicates.get(model.id), linkByPredicateType));
            if (!doesMatchesDomain) {
                delete instancesMap[id];
            }
        }
    }
    return instancesMap;
}
exports.getFilteredData = getFilteredData;
function matchesDomainForLink(types, predicates, linkByPredicateType) {
    if (!predicates) {
        return true;
    }
    var hasMatch = false;
    predicates.forEach(function (predicate) {
        var matched = linkByPredicateType.get(predicate);
        if (matched) {
            for (var _i = 0, matched_1 = matched; _i < matched_1.length; _i++) {
                var link = matched_1[_i];
                if (typeMatchesDomain(link, types)) {
                    hasMatch = true;
                }
            }
        }
    });
    return hasMatch;
}
function isDirectLink(link) {
    // link configuration is path-based if includes any variables
    var pathBased = /[?$][a-zA-Z]+\b/.test(link.path);
    return !pathBased;
}
exports.isDirectLink = isDirectLink;
function isDirectProperty(property) {
    // property configuration is path-based if includes any variables
    var pathBased = /[?$][a-zA-Z]+\b/.test(property.path);
    return !pathBased;
}
exports.isDirectProperty = isDirectProperty;
function typeMatchesDomain(config, types) {
    if (!config.domain || config.domain.length === 0) {
        return true;
    }
    else if (!types) {
        return false;
    }
    else {
        for (var _i = 0, _a = config.domain; _i < _a.length; _i++) {
            var type = _a[_i];
            if (types.has(type)) {
                return true;
            }
        }
        return false;
    }
}
/**
 * Modifies properties with merging with new values, couls be new peroperty or new value for existing properties.
 * @param properties
 * @param propType
 * @param propValue
 */
function mergeProperties(properties, propType, propValue) {
    var property = properties[propType.value];
    if (sparqlModels_1.isRdfIri(propValue)) {
        if (!property) {
            property = { type: 'uri', values: [] };
        }
        if (model_1.isIriProperty(property) && property.values.every(function (_a) {
            var value = _a.value;
            return value !== propValue.value;
        })) {
            property.values = tslib_1.__spreadArrays(property.values, [propValue]);
        }
    }
    else if (sparqlModels_1.isRdfLiteral(propValue)) {
        if (!property) {
            property = { type: 'string', values: [] };
        }
        var propertyValue_1 = getLocalizedString(propValue);
        if (model_1.isLiteralProperty(property) && property.values.every(function (value) { return !isLocalizedEqual(value, propertyValue_1); })) {
            property.values = tslib_1.__spreadArrays(property.values, [propertyValue_1]);
        }
    }
    properties[propType.value] = property;
}
function enrichElement(element, sInst) {
    if (!element) {
        return;
    }
    if (sInst.label) {
        var label_1 = getLocalizedString(sInst.label);
        if (element.label.values.every(function (value) { return !isLocalizedEqual(value, label_1); })) {
            element.label.values.push(label_1);
        }
    }
    if (sInst.class && element.types.indexOf(sInst.class.value) < 0) {
        element.types.push(sInst.class.value);
    }
    if (sInst.propType && sInst.propType.value !== LABEL_URI) {
        mergeProperties(element.properties, sInst.propType, sInst.propValue);
    }
}
exports.enrichElement = enrichElement;
function appendLabel(container, newLabel) {
    if (!newLabel) {
        return;
    }
    for (var _i = 0, _a = container.values; _i < _a.length; _i++) {
        var existing = _a[_i];
        if (isLocalizedEqual(existing, newLabel)) {
            return;
        }
    }
    container.values.push(newLabel);
}
function isLocalizedEqual(left, right) {
    return left.language === right.language && left.value === right.value;
}
function getLocalizedString(label) {
    if (label) {
        return {
            value: label.value,
            language: label['xml:lang'],
            datatype: label.datatype ? { value: label.datatype } : undefined,
        };
    }
    else {
        return undefined;
    }
}
exports.getLocalizedString = getLocalizedString;
function getInstCount(instcount) {
    return (instcount ? +instcount.value : undefined);
}
exports.getInstCount = getInstCount;
function getPropertyModel(node) {
    var label = getLocalizedString(node.label);
    return {
        id: node.property.value,
        label: { values: label ? [label] : [] },
    };
}
exports.getPropertyModel = getPropertyModel;
function getLinkCount(sLinkType) {
    return {
        id: sLinkType.link.value,
        inCount: getInstCount(sLinkType.inCount),
        outCount: getInstCount(sLinkType.outCount),
    };
}
exports.getLinkCount = getLinkCount;
function emptyElementInfo(id) {
    var elementInfo = {
        id: id,
        label: { values: [] },
        types: [],
        properties: {},
    };
    return elementInfo;
}
exports.emptyElementInfo = emptyElementInfo;
function getLinkTypeInfo(sLinkInfo) {
    if (!sLinkInfo) {
        return undefined;
    }
    var label = getLocalizedString(sLinkInfo.label);
    return {
        id: sLinkInfo.link.value,
        label: { values: label ? [label] : [] },
        count: getInstCount(sLinkInfo.instcount),
    };
}
exports.getLinkTypeInfo = getLinkTypeInfo;
function prependAdditionalBindings(base, additional) {
    if (!additional) {
        return base;
    }
    return {
        head: { vars: base.head.vars },
        results: {
            bindings: tslib_1.__spreadArrays(additional.results.bindings, base.results.bindings)
        },
    };
}
exports.prependAdditionalBindings = prependAdditionalBindings;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
exports.RDFSettings = {
    linkConfigurations: [],
    openWorldLinks: false,
    propertyConfigurations: [],
    openWorldProperties: false,
    linksInfoQuery: "SELECT ?source ?type ?target\n            WHERE {\n                ${linkConfigurations}\n                VALUES (?source) {${ids}}\n                VALUES (?target) {${ids}}\n            }",
    defaultPrefix: '',
    schemaLabelProperty: 'rdfs:label',
    dataLabelProperty: 'rdfs:label',
    fullTextSearch: {
        prefix: '',
        queryPattern: "",
    },
    classTreeQuery: "",
    classInfoQuery: "SELECT ?class ?label ?instcount WHERE {\n    VALUES(?class) {${ids}}\n    OPTIONAL { ?class ${schemaLabelProperty} ?label }\n    BIND(\"\" as ?instcount)\n}",
    linkTypesQuery: "SELECT DISTINCT ?link ?instcount ?label WHERE {\n    ${linkTypesPattern}\n    OPTIONAL { ?link ${schemaLabelProperty} ?label }\n}",
    linkTypesPattern: "",
    linkTypesInfoQuery: "SELECT ?link ?label WHERE {\n    VALUES(?link) {${ids}}\n    OPTIONAL { ?link ${schemaLabelProperty} ?label }\n}",
    propertyInfoQuery: "SELECT ?property ?label WHERE {\n    VALUES(?property) {${ids}}\n    OPTIONAL { ?property ${schemaLabelProperty} ?label }\n}",
    elementInfoQuery: "",
    imageQueryPattern: "",
    linkTypesOfQuery: "",
    linkTypesStatisticsQuery: "",
    filterRefElementLinkPattern: '',
    filterTypePattern: "",
    filterAdditionalRestriction: "",
    filterElementInfoPattern: "",
};
var WikidataSettingsOverride = {
    defaultPrefix: "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n PREFIX rdf:  <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n PREFIX wdt: <http://www.wikidata.org/prop/direct/>\n PREFIX wd: <http://www.wikidata.org/entity/>\n PREFIX owl:  <http://www.w3.org/2002/07/owl#>\n\n",
    schemaLabelProperty: 'rdfs:label',
    dataLabelProperty: 'rdfs:label',
    fullTextSearch: {
        prefix: 'PREFIX bds: <http://www.bigdata.com/rdf/search#>' + '\n',
        queryPattern: "\n              ?inst rdfs:label ?searchLabel.\n              SERVICE bds:search {\n                     ?searchLabel bds:search \"${text}*\" ;\n                                  bds:minRelevance '0.5' ;\n                                  bds:matchAllTerms 'true' .\n              }\n              BIND(IF(STRLEN(?strInst) > 33,\n                            0-<http://www.w3.org/2001/XMLSchema#integer>(SUBSTR(?strInst, 33)),\n                            -10000) as ?score)\n            ",
    },
    classTreeQuery: "\n            SELECT distinct ?class ?label ?parent WHERE {\n              ?class rdfs:label ?label.\n              { ?class wdt:P279 wd:Q35120. }\n                UNION\n              { ?parent wdt:P279 wd:Q35120.\n                ?class wdt:P279 ?parent. }\n                UNION\n              { ?parent wdt:P279/wdt:P279 wd:Q35120.\n                ?class wdt:P279 ?parent. }\n            }\n        ",
    // todo: think more, maybe add a limit here?
    linkTypesPattern: "?link wdt:P279* wd:Q18616576.\n    BIND(0 as ?instcount)\n",
    elementInfoQuery: "\n        CONSTRUCT {\n            ?inst rdf:type ?class .\n            ?inst rdfs:label ?label .\n            ?inst ?propType ?propValue.\n        } WHERE {\n            VALUES (?inst) {${ids}}\n            OPTIONAL {\n                ?inst wdt:P31 ?class\n            }\n            OPTIONAL {?inst rdfs:label ?label}\n            OPTIONAL {\n                ${propertyConfigurations}\n                FILTER (isLiteral(?propValue))\n            }\n        }\n    ",
    imageQueryPattern: " { ?inst ?linkType ?fullImage } union { ?inst wdt:P163/wdt:P18 ?fullImage }\n                BIND(CONCAT(\"https://commons.wikimedia.org/w/thumb.php?f=\",\n                    STRAFTER(STR(?fullImage), \"Special:FilePath/\"), \"&w=200\") AS ?image)",
    linkTypesOfQuery: "\n        SELECT DISTINCT ?link\n        WHERE {\n            ${linkConfigurations}\n            ?claim <http://wikiba.se/ontology#directClaim> ?link .\n        }\n    ",
    linkTypesStatisticsQuery: "\n        SELECT (${linkId} as ?link) (COUNT(?outObject) AS ?outCount) (COUNT(?inObject) AS ?inCount)\n        WHERE {\n            {\n                {\n                    SELECT DISTINCT ?outObject WHERE {\n                        ${linkConfigurationOut}\n                        FILTER(ISIRI(?outObject))\n                        ?outObject ?someprop ?someobj.\n                    }\n                    LIMIT 101\n                }\n            } UNION {\n                {\n                    SELECT DISTINCT ?inObject WHERE {\n                        ${linkConfigurationIn}\n                        FILTER(ISIRI(?inObject))\n                        ?inObject ?someprop ?someobj.\n                    }\n                    LIMIT 101\n                }\n            }\n        }\n    ",
    filterRefElementLinkPattern: '?claim <http://wikiba.se/ontology#directClaim> ?link .',
    filterTypePattern: "?inst wdt:P31 ?instType. ?instType wdt:P279* ?class",
    filterAdditionalRestriction: "FILTER ISIRI(?inst)\n                        BIND(STR(?inst) as ?strInst)\n                        FILTER exists {?inst ?someprop ?someobj}\n",
    filterElementInfoPattern: "OPTIONAL {?inst wdt:P31 ?foundClass}\n                BIND (coalesce(?foundClass, owl:Thing) as ?class)\n                OPTIONAL {?inst rdfs:label ?label}\n",
};
exports.WikidataSettings = tslib_1.__assign(tslib_1.__assign({}, exports.RDFSettings), WikidataSettingsOverride);
exports.OWLRDFSSettingsOverride = {
    defaultPrefix: "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n PREFIX rdf:  <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n PREFIX owl:  <http://www.w3.org/2002/07/owl#>\n",
    schemaLabelProperty: 'rdfs:label',
    dataLabelProperty: 'rdfs:label',
    fullTextSearch: {
        prefix: '',
        queryPattern: " OPTIONAL {?inst ${dataLabelProperty} ?search1}\n        FILTER regex(COALESCE(str(?search1), str(?extractedLabel)), \"${text}\", \"i\")\n        BIND(0 as ?score)\n",
        extractLabel: true,
    },
    classTreeQuery: "\n            SELECT ?class ?label ?parent\n            WHERE {\n                {\n                    ?class a rdfs:Class\n                } UNION {\n                    ?class a owl:Class\n                }\n                FILTER ISIRI(?class)\n                OPTIONAL {?class rdfs:label ?label}\n                OPTIONAL {?class rdfs:subClassOf ?parent. FILTER ISIRI(?parent)}\n            }\n        ",
    // todo: think more, maybe add a limit here?
    linkTypesPattern: "{\t?link a rdf:Property\n                    } UNION {\n                    ?link a owl:ObjectProperty\n                }\n                BIND('' as ?instcount)\n    ",
    elementInfoQuery: "\n        CONSTRUCT {\n            ?inst rdf:type ?class .\n            ?inst rdfs:label ?label .\n            ?inst ?propType ?propValue.\n        } WHERE {\n            VALUES (?inst) {${ids}}\n            OPTIONAL { ?inst a ?class }\n            OPTIONAL {?inst ${dataLabelProperty} ?label}\n            OPTIONAL {\n                ${propertyConfigurations}\n                FILTER (isLiteral(?propValue))\n            }\n        }\n    ",
    imageQueryPattern: "{ ?inst ?linkType ?image } UNION { [] ?linkType ?inst. BIND(?inst as ?image) }",
    linkTypesOfQuery: "\n        SELECT DISTINCT ?link\n        WHERE {\n            ${linkConfigurations}\n        }\n    ",
    linkTypesStatisticsQuery: "\n        SELECT ?link ?outCount ?inCount\n        WHERE {\n            {\n                SELECT (${linkId} as ?link) (count(?outObject) as ?outCount) WHERE {\n                    ${linkConfigurationOut}\n                    ${navigateElementFilterOut}\n                } LIMIT 101\n            } {\n                SELECT (${linkId} as ?link) (count(?inObject) as ?inCount) WHERE {\n                    ${linkConfigurationIn}\n                    ${navigateElementFilterIn}\n                } LIMIT 101\n            }\n        }\n    ",
    filterRefElementLinkPattern: '',
    filterTypePattern: "?inst a ?instType. ?instType rdfs:subClassOf* ?class",
    filterElementInfoPattern: "OPTIONAL {?inst rdf:type ?foundClass}\n                BIND (coalesce(?foundClass, owl:Thing) as ?class)\n                OPTIONAL {?inst ${dataLabelProperty} ?label}",
    filterAdditionalRestriction: '',
};
exports.OWLRDFSSettings = tslib_1.__assign(tslib_1.__assign({}, exports.RDFSettings), exports.OWLRDFSSettingsOverride);
var OWLStatsOverride = {
    classTreeQuery: "\n        SELECT ?class ?instcount ?label ?parent\n        WHERE {\n            {SELECT ?class (count(?inst) as ?instcount)\n                WHERE {\n                    ?inst rdf:type ?class.\n                    FILTER ISIRI(?class)\n                } GROUP BY ?class } UNION\n            {\n                ?class rdf:type rdfs:Class\n            } UNION {\n                ?class rdf:type owl:Class\n            }\n            OPTIONAL {?class rdfs:label ?label}\n            OPTIONAL {?class rdfs:subClassOf ?parent. FILTER ISIRI(?parent)}\n        }\n    ",
};
exports.OWLStatsSettings = tslib_1.__assign(tslib_1.__assign({}, exports.OWLRDFSSettings), OWLStatsOverride);
var DBPediaOverride = {
    fullTextSearch: {
        prefix: 'PREFIX dbo: <http://dbpedia.org/ontology/>\n',
        queryPattern: "\n              ?inst rdfs:label ?searchLabel.\n              ?searchLabel bif:contains \"${text}\".\n              ?inst dbo:wikiPageID ?origScore .\n              BIND(0-?origScore as ?score)\n        ",
    },
    classTreeQuery: "\n        SELECT distinct ?class ?label ?parent WHERE {\n            ?class rdfs:label ?label.\n            OPTIONAL {?class rdfs:subClassOf ?parent}\n            ?root rdfs:subClassOf owl:Thing.\n            ?class rdfs:subClassOf? | rdfs:subClassOf/rdfs:subClassOf ?root\n        }\n    ",
    elementInfoQuery: "\n        CONSTRUCT {\n            ?inst rdf:type ?class .\n            ?inst rdfs:label ?label .\n            ?inst ?propType ?propValue.\n        } WHERE {\n            VALUES (?inst) {${ids}}\n            ?inst a ?class .\n            ?inst rdfs:label ?label .\n            FILTER (!contains(str(?class), 'http://dbpedia.org/class/yago'))\n            OPTIONAL {\n                ${propertyConfigurations}\n                FILTER (isLiteral(?propValue))\n            }\n        }\n    ",
    filterTypePattern: "?inst a ?instType. ?instType rdfs:subClassOf* ?class",
    filterElementInfoPattern: "\n        OPTIONAL {?inst rdf:type ?foundClass. FILTER (!contains(str(?foundClass), 'http://dbpedia.org/class/yago'))}\n        BIND (coalesce(?foundClass, owl:Thing) as ?class)\n        OPTIONAL {?inst ${dataLabelProperty} ?label}",
    imageQueryPattern: " { ?inst ?linkType ?fullImage } UNION { [] ?linkType ?inst. BIND(?inst as ?fullImage) }\n            BIND(CONCAT(\"https://commons.wikimedia.org/w/thumb.php?f=\",\n            STRAFTER(STR(?fullImage), \"Special:FilePath/\"), \"&w=200\") AS ?image)\n    ",
};
exports.DBPediaSettings = tslib_1.__assign(tslib_1.__assign({}, exports.OWLRDFSSettings), DBPediaOverride);


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var N3 = __webpack_require__(100);
function parseTurtleText(turtleText) {
    return new Promise(function (resolve, reject) {
        var triples = [];
        N3.Parser().parse(turtleText, function (error, triple, hash) {
            if (error) {
                reject(error);
            }
            else if (triple) {
                triples.push({
                    subject: n3toRdfNode(triple.subject),
                    predicate: n3toRdfNode(triple.predicate),
                    object: n3toRdfNode(triple.object),
                });
            }
            else {
                resolve(triples);
            }
        });
    });
}
exports.parseTurtleText = parseTurtleText;
function n3toRdfNode(entity) {
    if (N3.Util.isLiteral(entity)) {
        return {
            type: 'literal',
            value: N3.Util.getLiteralValue(entity),
            datatype: N3.Util.getLiteralType(entity),
            'xml:lang': N3.Util.getLiteralLanguage(entity),
        };
    }
    else {
        return { type: 'uri', value: entity };
    }
}
exports.n3toRdfNode = n3toRdfNode;


/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__100__;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mergeUtils_1 = __webpack_require__(102);
function isDefinition(dp) {
    var definition = dp;
    return definition.name !== undefined && definition.dataProvider !== undefined;
}
var CompositeDataProvider = /** @class */ (function () {
    function CompositeDataProvider(dataProviders, params) {
        this.mergeMode = 'fetchAll';
        var dpCounter = 1;
        this.dataProviders = dataProviders.map(function (dp) {
            if (isDefinition(dp)) {
                return dp;
            }
            else {
                return {
                    name: 'dataProvider_' + dpCounter++,
                    dataProvider: dp,
                };
            }
        });
        if (params && params.mergeMode) {
            this.mergeMode = params.mergeMode;
        }
    }
    CompositeDataProvider.prototype.classTree = function () {
        return this.fetchSequentially('classTree', mergeUtils_1.mergeClassTree, undefined);
    };
    CompositeDataProvider.prototype.propertyInfo = function (params) {
        if (this.mergeMode === 'fetchAll') {
            return this.fetchSequentially('propertyInfo', mergeUtils_1.mergePropertyInfo, params);
        }
        else {
            var propertyIds_1 = params.propertyIds;
            return this.queueProcessResults(function (previousResult, dp) {
                propertyIds_1 = propertyIds_1.filter(function (id) { return !previousResult || !previousResult[id]; });
                return propertyIds_1.length > 0 ? dp.dataProvider.propertyInfo({ propertyIds: propertyIds_1 }) : undefined;
            }).then(mergeUtils_1.mergePropertyInfo);
        }
    };
    CompositeDataProvider.prototype.classInfo = function (params) {
        if (this.mergeMode === 'fetchAll') {
            return this.fetchSequentially('classInfo', mergeUtils_1.mergeClassInfo, params);
        }
        else {
            var classIds_1 = params.classIds;
            return this.queueProcessResults(function (previousResult, dp) {
                classIds_1 = classIds_1.filter(function (id) { return !previousResult || previousResult.map(function (cm) { return cm.id; }).indexOf(id) === -1; });
                return classIds_1.length > 0 ? dp.dataProvider.classInfo({ classIds: classIds_1 }) : undefined;
            }).then(mergeUtils_1.mergeClassInfo);
        }
    };
    CompositeDataProvider.prototype.linkTypesInfo = function (params) {
        if (this.mergeMode === 'fetchAll') {
            return this.fetchSequentially('linkTypesInfo', mergeUtils_1.mergeLinkTypesInfo, params);
        }
        else {
            var linkTypeIds_1 = params.linkTypeIds;
            return this.queueProcessResults(function (previousResult, dp) {
                linkTypeIds_1 = linkTypeIds_1.filter(function (id) {
                    return !previousResult || previousResult.map(function (lt) { return lt.id; }).indexOf(id) === -1;
                });
                return linkTypeIds_1.length > 0 ? dp.dataProvider.linkTypesInfo({ linkTypeIds: linkTypeIds_1 }) : undefined;
            }).then(mergeUtils_1.mergeLinkTypesInfo);
        }
    };
    CompositeDataProvider.prototype.linkTypes = function () {
        return this.fetchSequentially('linkTypes', mergeUtils_1.mergeLinkTypes, undefined);
    };
    CompositeDataProvider.prototype.elementInfo = function (params) {
        if (this.mergeMode === 'fetchAll') {
            return this.fetchSequentially('elementInfo', mergeUtils_1.mergeElementInfo, params);
        }
        else {
            var elementIds_1 = params.elementIds;
            return this.queueProcessResults(function (previousResult, dp) {
                elementIds_1 = elementIds_1.filter(function (id) { return !previousResult || !previousResult[id]; });
                return elementIds_1.length > 0 ? dp.dataProvider.elementInfo({ elementIds: elementIds_1 }) : undefined;
            }).then(mergeUtils_1.mergeElementInfo);
        }
    };
    CompositeDataProvider.prototype.linksInfo = function (params) {
        if (this.mergeMode === 'fetchAll') {
            return this.fetchSequentially('linksInfo', mergeUtils_1.mergeLinksInfo, params);
        }
        else {
            var elementIds_2 = params.elementIds;
            return this.queueProcessResults(function (previousResult, dp) {
                elementIds_2 = elementIds_2.filter(function (id) {
                    if (previousResult) {
                        for (var _i = 0, previousResult_1 = previousResult; _i < previousResult_1.length; _i++) {
                            var linkModel = previousResult_1[_i];
                            if (linkModel.sourceId === id) {
                                return false;
                            }
                        }
                    }
                    return true;
                });
                return elementIds_2.length > 0 ?
                    dp.dataProvider.linksInfo({ elementIds: elementIds_2, linkTypeIds: params.linkTypeIds }) : undefined;
            }).then(mergeUtils_1.mergeLinksInfo);
        }
    };
    CompositeDataProvider.prototype.linkTypesOf = function (params) {
        if (this.mergeMode === 'fetchAll') {
            return this.fetchSequentially('linkTypesOf', mergeUtils_1.mergeLinkTypesOf, params);
        }
        else {
            return this.queueProcessResults(function (previousResult, dp) {
                if (!previousResult || previousResult && previousResult.length === 0) {
                    return dp.dataProvider.linkTypesOf(params);
                }
                else {
                    return undefined;
                }
            }).then(mergeUtils_1.mergeLinkTypesOf);
        }
    };
    CompositeDataProvider.prototype.linkElements = function (params) {
        if (this.mergeMode === 'fetchAll') {
            return this.fetchSequentially('linkElements', mergeUtils_1.mergeLinkElements, params);
        }
        else {
            return this.queueProcessResults(function (previousResult, dp) {
                if (!previousResult || previousResult && Object.keys(previousResult).length === 0) {
                    return dp.dataProvider.linkElements(params);
                }
                else {
                    return undefined;
                }
            }).then(mergeUtils_1.mergeLinkElements);
        }
    };
    CompositeDataProvider.prototype.filter = function (params) {
        if (this.mergeMode === 'fetchAll') {
            return this.fetchSequentially('filter', mergeUtils_1.mergeFilter, params);
        }
        else {
            return this.queueProcessResults(function (previousResult, dp) {
                if (!previousResult || previousResult && Object.keys(previousResult).length === 0) {
                    return dp.dataProvider.filter(params);
                }
                else {
                    return undefined;
                }
            }).then(mergeUtils_1.mergeFilter);
        }
    };
    CompositeDataProvider.prototype.processResults = function (responsePromise, dpName, useProviderInStats) {
        return responsePromise
            .then(function (response) { return ({ dataSourceName: dpName, useInStats: useProviderInStats, response: response }); })
            .catch(function (error) {
            // tslint:disable-next-line:no-console
            console.error(error);
            return { dataSourceName: dpName, useInStats: useProviderInStats, response: undefined };
        });
    };
    CompositeDataProvider.prototype.queueProcessResults = function (callBack) {
        var _this = this;
        var counter = 0;
        var responseList = [];
        var recursiveCall = function (result) {
            if (_this.dataProviders.length > counter) {
                var dp_1 = _this.dataProviders[counter++];
                var callBackResult = callBack(result, dp_1);
                if (!callBackResult) {
                    return Promise.resolve(responseList);
                }
                return callBackResult.then(function (newResult) {
                    responseList.push({
                        dataSourceName: dp_1.name,
                        response: newResult,
                    });
                    return recursiveCall(newResult);
                }).catch(function (error) {
                    // tslint:disable-next-line:no-console
                    console.error(error);
                    return recursiveCall(result);
                });
            }
            else {
                return Promise.resolve(responseList);
            }
        };
        return recursiveCall();
    };
    CompositeDataProvider.prototype.fetchSequentially = function (functionName, mergeFunction, params) {
        var _this = this;
        var resultPromises = this.dataProviders.map(function (dp) {
            var providerMethod = dp.dataProvider[functionName];
            return _this.processResults(providerMethod.call(dp.dataProvider, params), dp.name, dp.useInStats);
        });
        return Promise.all(resultPromises).then(mergeFunction);
    };
    return CompositeDataProvider;
}());
exports.CompositeDataProvider = CompositeDataProvider;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DATA_PROVIDER_PROPERTY = 'http://ontodia.org/property/DataProvider';
function mergeClassTree(composite) {
    var lists = composite.filter(function (r) { return r.response; }).map(function (_a) {
        var useInStats = _a.useInStats, response = _a.response;
        return ({ useInStats: useInStats, classes: classTreeToArray(response) });
    });
    var dictionary = {};
    var topLevelModels = {};
    var childrenMap = {};
    for (var _i = 0, lists_1 = lists; _i < lists_1.length; _i++) {
        var _a = lists_1[_i], useInStats = _a.useInStats, classes = _a.classes;
        var _loop_1 = function (model) {
            var childrenIds = childrenMap[model.id] || [];
            model.children.map(function (ch) { return ch.id; }).forEach(function (id) {
                if (childrenIds.indexOf(id) === -1) {
                    childrenIds.push(id);
                }
            });
            model.children = [];
            if (!useInStats) {
                delete model.count;
            }
            if (!dictionary[model.id]) {
                topLevelModels[model.id] = model;
                dictionary[model.id] = model;
                childrenMap[model.id] = childrenIds;
            }
            else {
                topLevelModels[model.id] = mergeClassModel(dictionary[model.id], model);
                dictionary[model.id] = topLevelModels[model.id];
            }
        };
        for (var _b = 0, classes_1 = classes; _b < classes_1.length; _b++) {
            var model = classes_1[_b];
            _loop_1(model);
        }
    }
    var models = Object.keys(dictionary).map(function (key) { return dictionary[key]; });
    for (var _c = 0, models_1 = models; _c < models_1.length; _c++) {
        var m = models_1[_c];
        m.children = (childrenMap[m.id] || []).map(function (id) {
            delete topLevelModels[id];
            return dictionary[id];
        });
    }
    return Object.keys(topLevelModels).map(function (key) { return topLevelModels[key]; });
}
exports.mergeClassTree = mergeClassTree;
function mergePropertyInfo(response) {
    var result = {};
    var props = response.filter(function (r) { return r.response; }).map(function (r) { return r.response; });
    for (var _i = 0, props_1 = props; _i < props_1.length; _i++) {
        var model = props_1[_i];
        var keys = Object.keys(model);
        for (var _a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
            var key = keys_1[_a];
            var prop = model[key];
            if (!result[key]) {
                result[key] = prop;
            }
            else {
                result[key].label = mergeLabels(result[key].label, prop.label);
            }
        }
    }
    return result;
}
exports.mergePropertyInfo = mergePropertyInfo;
function mergeClassInfo(response) {
    var dictionaries = response.filter(function (r) { return r.response; }).map(function (r) { return r.response; });
    var dictionary = {};
    for (var _i = 0, dictionaries_1 = dictionaries; _i < dictionaries_1.length; _i++) {
        var models = dictionaries_1[_i];
        for (var _a = 0, models_2 = models; _a < models_2.length; _a++) {
            var model = models_2[_a];
            if (!dictionary[model.id]) {
                dictionary[model.id] = model;
            }
            else {
                dictionary[model.id] = mergeClassModel(dictionary[model.id], model);
            }
        }
    }
    return Object.keys(dictionary).map(function (key) { return dictionary[key]; });
}
exports.mergeClassInfo = mergeClassInfo;
function mergeLinkTypesInfo(response) {
    var lists = response.filter(function (r) { return r.response; }).map(function (r) { return r.response; });
    var mergeLinkType = function (a, b) {
        return {
            id: a.id,
            label: mergeLabels(a.label, b.label),
            count: a.count + b.count,
        };
    };
    var dictionary = {};
    for (var _i = 0, lists_2 = lists; _i < lists_2.length; _i++) {
        var linkTypes = lists_2[_i];
        for (var _a = 0, linkTypes_1 = linkTypes; _a < linkTypes_1.length; _a++) {
            var linkType = linkTypes_1[_a];
            if (!dictionary[linkType.id]) {
                dictionary[linkType.id] = linkType;
            }
            else {
                dictionary[linkType.id] = mergeLinkType(dictionary[linkType.id], linkType);
            }
        }
    }
    return Object.keys(dictionary).map(function (key) { return dictionary[key]; });
}
exports.mergeLinkTypesInfo = mergeLinkTypesInfo;
function mergeLinkTypes(response) {
    return mergeLinkTypesInfo(response);
}
exports.mergeLinkTypes = mergeLinkTypes;
function mergeElementInfo(response) {
    var mergeElementModels = function (a, b) {
        var types = a.types;
        for (var _i = 0, _a = b.types; _i < _a.length; _i++) {
            var t = _a[_i];
            if (types.indexOf(t) === -1) {
                types.push(t);
            }
        }
        var sources = [];
        for (var _b = 0, _c = a.sources; _b < _c.length; _b++) {
            var s = _c[_b];
            if (sources.indexOf(s) === -1) {
                sources.push(s);
            }
        }
        for (var _d = 0, _e = b.sources; _d < _e.length; _d++) {
            var s = _e[_d];
            if (sources.indexOf(s) === -1) {
                sources.push(s);
            }
        }
        return {
            id: a.id,
            label: mergeLabels(a.label, b.label),
            types: types,
            image: a.image || b.image,
            properties: mergeProperties(a.properties, b.properties),
            sources: sources,
        };
    };
    var dictionaries = response.filter(function (r) { return r.response; }).map(function (r) { return r.response; });
    var dictionary = {};
    var _loop_2 = function (resp) {
        if (!resp.response) {
            return "continue";
        }
        var list = Object.keys(resp.response).map(function (k) { return resp.response[k]; });
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var em = list_1[_i];
            em.sources = [resp.dataSourceName];
            em.properties[DATA_PROVIDER_PROPERTY] = {
                type: 'string',
                values: [{ value: resp.dataSourceName, language: '' }],
            };
            if (!dictionary[em.id]) {
                dictionary[em.id] = em;
            }
            else {
                dictionary[em.id] = mergeElementModels(dictionary[em.id], em);
            }
        }
    };
    for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
        var resp = response_1[_i];
        _loop_2(resp);
    }
    return dictionary;
}
exports.mergeElementInfo = mergeElementInfo;
function mergeProperties(a, b) {
    var aLists = Object.keys(a);
    var bLists = Object.keys(b);
    var result = {};
    function createIdForProperty(baseId) {
        var counter = 1;
        while (result[baseId + '_' + counter]) {
            counter++;
        }
        return baseId + '_' + counter;
    }
    for (var _i = 0, aLists_1 = aLists; _i < aLists_1.length; _i++) {
        var pKey = aLists_1[_i];
        var prop = a[pKey];
        if (!result[pKey]) {
            result[pKey] = prop;
        }
        else {
            result[createIdForProperty(pKey)] = prop;
        }
    }
    for (var _a = 0, bLists_1 = bLists; _a < bLists_1.length; _a++) {
        var pKey = bLists_1[_a];
        var prop = b[pKey];
        if (!result[pKey]) {
            result[pKey] = prop;
        }
        else {
            result[createIdForProperty(pKey)] = prop;
        }
    }
    return result;
}
exports.mergeProperties = mergeProperties;
function mergeLinksInfo(response) {
    var lists = response.filter(function (r) { return r.response; }).map(function (r) { return r.response; });
    var resultInfo = [];
    function compareLinksInfo(a, b) {
        return a.sourceId === b.sourceId &&
            a.targetId === b.targetId &&
            a.linkTypeId === b.linkTypeId;
    }
    for (var _i = 0, lists_3 = lists; _i < lists_3.length; _i++) {
        var linkInfo = lists_3[_i];
        var _loop_3 = function (linkModel) {
            if (!resultInfo.some(function (l) { return compareLinksInfo(l, linkModel); })) {
                resultInfo.push(linkModel);
            }
        };
        for (var _a = 0, linkInfo_1 = linkInfo; _a < linkInfo_1.length; _a++) {
            var linkModel = linkInfo_1[_a];
            _loop_3(linkModel);
        }
    }
    return resultInfo;
}
exports.mergeLinksInfo = mergeLinksInfo;
function mergeLinkTypesOf(response) {
    var lists = response.filter(function (r) { return r.response; }).map(function (r) { return r.response; });
    var dictionary = {};
    var merge = function (a, b) {
        return {
            id: a.id,
            inCount: a.inCount + b.inCount,
            outCount: a.outCount + b.outCount,
        };
    };
    for (var _i = 0, lists_4 = lists; _i < lists_4.length; _i++) {
        var linkCount = lists_4[_i];
        for (var _a = 0, linkCount_1 = linkCount; _a < linkCount_1.length; _a++) {
            var lCount = linkCount_1[_a];
            if (!dictionary[lCount.id]) {
                dictionary[lCount.id] = lCount;
            }
            else {
                dictionary[lCount.id] = merge(lCount, dictionary[lCount.id]);
            }
        }
    }
    return Object.keys(dictionary).map(function (key) { return dictionary[key]; });
}
exports.mergeLinkTypesOf = mergeLinkTypesOf;
function mergeLinkElements(response) {
    return mergeElementInfo(response);
}
exports.mergeLinkElements = mergeLinkElements;
function mergeFilter(response) {
    return mergeElementInfo(response);
}
exports.mergeFilter = mergeFilter;
function classTreeToArray(models) {
    var resultArray = models;
    function getDescendants(model) {
        var descendants = model.children || [];
        for (var _i = 0, descendants_1 = descendants; _i < descendants_1.length; _i++) {
            var descendant = descendants_1[_i];
            var nextGeneration = getDescendants(descendant);
            descendants = descendants.concat(nextGeneration);
        }
        return descendants;
    }
    for (var _i = 0, models_3 = models; _i < models_3.length; _i++) {
        var model = models_3[_i];
        var descendants = getDescendants(model);
        resultArray = resultArray.concat(descendants);
    }
    return resultArray;
}
exports.classTreeToArray = classTreeToArray;
function mergeLabels(a, b) {
    function compareLabels(l1, l2) {
        return l1.language === l2.language && l1.value === l2.value;
    }
    var mergedValuesList = a.values;
    var _loop_4 = function (locStr) {
        if (!mergedValuesList.some(function (l) { return compareLabels(l, locStr); })) {
            mergedValuesList.push(locStr);
        }
    };
    for (var _i = 0, _a = b.values; _i < _a.length; _i++) {
        var locStr = _a[_i];
        _loop_4(locStr);
    }
    return {
        values: mergedValuesList,
    };
}
exports.mergeLabels = mergeLabels;
function mergeCounts(a, b) {
    if (a === undefined && b === undefined) {
        return undefined;
    }
    return (a || 0) + (b || 0);
}
exports.mergeCounts = mergeCounts;
function mergeClassModel(a, b) {
    var childrenDictionary = {};
    for (var _i = 0, _a = a.children.concat(b.children); _i < _a.length; _i++) {
        var child = _a[_i];
        if (!childrenDictionary[child.id]) {
            childrenDictionary[child.id] = child;
        }
    }
    return {
        id: a.id,
        label: mergeLabels(a.label, b.label),
        count: mergeCounts(a.count, b.count),
        children: Object.keys(childrenDictionary).map(function (key) { return childrenDictionary[key]; }),
    };
}
exports.mergeClassModel = mergeClassModel;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __webpack_require__(66);
var schema_1 = __webpack_require__(53);
var serializedDiagram_1 = __webpack_require__(104);
var layout_1 = __webpack_require__(105);
var turtle_1 = __webpack_require__(99);
var GREED_STEP = 150;
var GraphBuilder = /** @class */ (function () {
    function GraphBuilder(dataProvider) {
        this.dataProvider = dataProvider;
    }
    GraphBuilder.prototype.createGraph = function (graph) {
        return this.dataProvider.elementInfo({ elementIds: graph.elementIds }).then(function (elementsInfo) { return ({
            preloadedElements: elementsInfo,
            diagram: makeLayout(graph.elementIds, graph.links),
        }); });
    };
    GraphBuilder.prototype.getGraphFromRDFGraph = function (graph) {
        var _a = makeGraphItems(graph), elementIds = _a.elementIds, links = _a.links;
        return this.createGraph({ elementIds: elementIds, links: links });
    };
    GraphBuilder.prototype.getGraphFromTurtleGraph = function (graph) {
        var _this = this;
        return turtle_1.parseTurtleText(graph).then(function (triples) { return _this.getGraphFromRDFGraph(triples); });
    };
    return GraphBuilder;
}());
exports.GraphBuilder = GraphBuilder;
function makeGraphItems(response) {
    var elements = {};
    var links = [];
    for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
        var _a = response_1[_i], subject = _a.subject, predicate = _a.predicate, object = _a.object;
        if (subject.type === 'uri' && !elements[subject.value]) {
            elements[subject.value] = true;
        }
        if (object.type === 'uri' && !elements[object.value]) {
            elements[object.value] = true;
        }
        if (subject.type === 'uri' && object.type === 'uri') {
            links.push({
                linkTypeId: predicate.value,
                sourceId: subject.value,
                targetId: object.value,
            });
        }
    }
    return { elementIds: Object.keys(elements), links: links };
}
exports.makeGraphItems = makeGraphItems;
function makeLayout(elementsIds, linksInfo) {
    var rows = Math.ceil(Math.sqrt(elementsIds.length));
    var grid = layout_1.uniformGrid({ rows: rows, cellSize: { x: GREED_STEP, y: GREED_STEP } });
    var elements = elementsIds.map(function (id, index) {
        var _a = grid(index), x = _a.x, y = _a.y;
        return { '@type': 'Element', '@id': schema_1.GenerateID.forElement(), iri: id, position: { x: x, y: y } };
    });
    var layoutElementsMap = lodash_1.keyBy(elements, 'iri');
    var links = [];
    linksInfo.forEach(function (link, index) {
        var source = layoutElementsMap[link.sourceId];
        var target = layoutElementsMap[link.targetId];
        if (!source || !target) {
            return;
        }
        links.push({
            '@type': 'Link',
            '@id': schema_1.GenerateID.forLink(),
            property: link.linkTypeId,
            source: { '@id': source['@id'] },
            target: { '@id': target['@id'] },
        });
    });
    return serializedDiagram_1.makeSerializedDiagram({ layoutData: { '@type': 'Layout', elements: elements, links: links }, linkTypeOptions: [] });
}
exports.makeLayout = makeLayout;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var lodash_1 = __webpack_require__(66);
var schema_1 = __webpack_require__(53);
var serializedCellProperties = [
    // common properties
    'id', 'type',
    // element properties
    'size', 'angle', 'isExpanded', 'position', 'iri', 'group',
    // link properties
    'typeId', 'source', 'target', 'vertices',
];
function emptyDiagram() {
    return {
        '@context': schema_1.DIAGRAM_CONTEXT_URL_V1,
        '@type': 'Diagram',
        layoutData: emptyLayoutData(),
        linkTypeOptions: [],
    };
}
exports.emptyDiagram = emptyDiagram;
function emptyLayoutData() {
    return { '@type': 'Layout', elements: [], links: [] };
}
exports.emptyLayoutData = emptyLayoutData;
function convertToSerializedDiagram(params) {
    var elements = [];
    var links = [];
    for (var _i = 0, _a = params.layoutData.cells; _i < _a.length; _i++) {
        var cell = _a[_i];
        // get rid of unused properties
        var newCell = lodash_1.pick(cell, serializedCellProperties);
        // normalize type
        if (newCell.type === 'Ontodia.Element' || newCell.type === 'element') {
            newCell.type = 'Element';
        }
        // normalize type
        if (newCell.type === 'link') {
            newCell.type = 'Link';
        }
        if (!newCell.iri) {
            newCell.iri = newCell.id;
        }
        // rename to @id and @type to match JSON-LD
        newCell['@id'] = newCell.id;
        delete newCell.id;
        newCell['@type'] = newCell.type;
        delete newCell.type;
        // make two separate lists
        switch (newCell['@type']) {
            case 'Element':
                elements.push(newCell);
                break;
            case 'Link':
                // rename internal IDs
                newCell.source['@id'] = newCell.source.id;
                delete newCell.source.id;
                newCell.target['@id'] = newCell.target.id;
                delete newCell.target.id;
                // rename typeID to property
                newCell.property = newCell.typeId;
                delete newCell.typeId;
                links.push(newCell);
                break;
        }
    }
    return tslib_1.__assign(tslib_1.__assign({}, emptyDiagram()), { layoutData: { '@type': 'Layout', elements: elements, links: links }, linkTypeOptions: params.linkTypeOptions });
}
exports.convertToSerializedDiagram = convertToSerializedDiagram;
function makeSerializedDiagram(params) {
    var diagram = tslib_1.__assign(tslib_1.__assign({}, emptyDiagram()), { linkTypeOptions: params.linkTypeOptions });
    // layout data is a complex structure we want to persist
    if (params.layoutData) {
        diagram.layoutData = params.layoutData;
    }
    return diagram;
}
exports.makeSerializedDiagram = makeSerializedDiagram;
function makeLayoutData(modelElements, modelLinks) {
    var elements = modelElements.map(function (element) { return ({
        '@type': 'Element',
        '@id': element.id,
        iri: element.iri,
        position: element.position,
        size: element.size,
        isExpanded: element.isExpanded,
        group: element.group,
        elementState: element.elementState,
    }); });
    var links = modelLinks.map(function (link) { return ({
        '@type': 'Link',
        '@id': link.id,
        property: link.typeId,
        source: { '@id': link.sourceId },
        target: { '@id': link.targetId },
        vertices: tslib_1.__spreadArrays(link.vertices),
        linkState: link.linkState,
    }); });
    return { '@type': 'Layout', elements: elements, links: links };
}
exports.makeLayoutData = makeLayoutData;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cola = __webpack_require__(106);
var geometry_1 = __webpack_require__(56);
var events_1 = __webpack_require__(54);
var paperArea_1 = __webpack_require__(82);
function groupForceLayout(params) {
    var layout = new cola.Layout()
        .nodes(params.nodes)
        .links(params.links)
        .avoidOverlaps(params.avoidOvelaps)
        .convergenceThreshold(1e-9)
        .jaccardLinkLengths(params.preferredLinkLength)
        .handleDisconnected(true);
    layout.start(30, 0, 10, undefined, false);
}
exports.groupForceLayout = groupForceLayout;
function groupRemoveOverlaps(nodes) {
    var nodeRectangles = [];
    for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
        var node = nodes_1[_i];
        nodeRectangles.push(new cola.Rectangle(node.x, node.x + node.width, node.y, node.y + node.height));
    }
    cola.removeOverlaps(nodeRectangles);
    for (var i = 0; i < nodeRectangles.length; i++) {
        var node = nodes[i];
        var rectangle = nodeRectangles[i];
        node.x = rectangle.x;
        node.y = rectangle.y;
    }
}
exports.groupRemoveOverlaps = groupRemoveOverlaps;
function translateToPositiveQuadrant(positions, offset) {
    var minX = Infinity, minY = Infinity;
    positions.forEach(function (position) {
        minX = Math.min(minX, position.x);
        minY = Math.min(minY, position.y);
    });
    var x = offset.x, y = offset.y;
    positions.forEach(function (position, key) {
        positions.set(key, {
            x: position.x - minX + x,
            y: position.y - minY + y,
        });
    });
}
exports.translateToPositiveQuadrant = translateToPositiveQuadrant;
function uniformGrid(params) {
    return function (cellIndex) {
        var row = Math.floor(cellIndex / params.rows);
        var column = cellIndex - row * params.rows;
        return {
            x: column * params.cellSize.x,
            y: row * params.cellSize.y,
            width: params.cellSize.x,
            height: params.cellSize.y,
        };
    };
}
exports.uniformGrid = uniformGrid;
function padded(nodes, padding, transform) {
    if (padding) {
        for (var _i = 0, nodes_2 = nodes; _i < nodes_2.length; _i++) {
            var node = nodes_2[_i];
            node.x -= padding.x;
            node.y -= padding.y;
            node.width += 2 * padding.x;
            node.height += 2 * padding.y;
        }
    }
    transform();
    if (padding) {
        for (var _a = 0, nodes_3 = nodes; _a < nodes_3.length; _a++) {
            var node = nodes_3[_a];
            node.x += padding.x;
            node.y += padding.y;
            node.width -= 2 * padding.x;
            node.height -= 2 * padding.y;
        }
    }
}
exports.padded = padded;
function biasFreePadded(nodes, padding, transform) {
    var nodeSizeMap = new Map();
    var possibleCompression = { x: Infinity, y: Infinity };
    for (var _i = 0, nodes_4 = nodes; _i < nodes_4.length; _i++) {
        var node = nodes_4[_i];
        nodeSizeMap.set(node.id, { width: node.width, height: node.height });
        var maxSide = Math.max(node.width, node.height);
        var compressionX = node.width ? (maxSide / node.width) : 1;
        var compressionY = node.height ? (maxSide / node.height) : 1;
        possibleCompression.x = Math.min(1 + (compressionX - 1), possibleCompression.x);
        possibleCompression.y = Math.min(1 + (compressionY - 1), possibleCompression.y);
        node.height = maxSide;
        node.width = maxSide;
    }
    padded(nodes, padding, function () { return transform(); });
    var fittingBox = getContentFittingBoxForLayout(nodes);
    for (var _a = 0, nodes_5 = nodes; _a < nodes_5.length; _a++) {
        var node = nodes_5[_a];
        var size = nodeSizeMap.get(node.id);
        node.x = (node.x - fittingBox.x) / possibleCompression.x + fittingBox.x;
        node.y = (node.y - fittingBox.y) / possibleCompression.y + fittingBox.y;
        node.height = size.height;
        node.width = size.width;
    }
}
exports.biasFreePadded = biasFreePadded;
function calculateLayout(params) {
    var grouping = geometry_1.computeGrouping(params.model.elements);
    var layoutFunction = params.layoutFunction, model = params.model, fixedElements = params.fixedElements, selectedElements = params.selectedElements;
    if (selectedElements && selectedElements.size <= 1) {
        return {
            positions: new Map(),
            nestedLayouts: [],
            keepAveragePosition: false,
        };
    }
    return internalRecursion(params.group);
    function internalRecursion(group) {
        var elementsToProcess = group
            ? grouping.get(group)
            : model.elements.filter(function (el) { return el.group === undefined; });
        var elements = selectedElements
            ? elementsToProcess.filter(function (el) { return selectedElements.has(el); })
            : elementsToProcess;
        var nestedLayouts = [];
        for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
            var element = elements_1[_i];
            if (grouping.has(element.id)) {
                nestedLayouts.push(internalRecursion(element.id));
            }
        }
        var nodes = [];
        var nodeById = {};
        for (var _a = 0, elements_2 = elements; _a < elements_2.length; _a++) {
            var element = elements_2[_a];
            var _b = geometry_1.boundsOf(element), x = _b.x, y = _b.y, width = _b.width, height = _b.height;
            var node = {
                id: element.id,
                x: x, y: y, width: width, height: height,
                fixed: fixedElements && fixedElements.has(element) ? 1 : 0,
            };
            nodeById[element.id] = node;
            nodes.push(node);
        }
        var links = [];
        for (var _c = 0, _d = model.links; _c < _d.length; _c++) {
            var link = _d[_c];
            if (!model.isSourceAndTargetVisible(link)) {
                continue;
            }
            var source = model.sourceOf(link);
            var target = model.targetOf(link);
            var sourceNode = nodeById[source.id];
            var targetNode = nodeById[target.id];
            if (sourceNode && targetNode) {
                links.push({ source: sourceNode, target: targetNode });
            }
        }
        layoutFunction(nodes, links, group);
        var positions = new Map();
        for (var _e = 0, nodes_6 = nodes; _e < nodes_6.length; _e++) {
            var node = nodes_6[_e];
            positions.set(node.id, { x: node.x, y: node.y });
        }
        return {
            positions: positions,
            group: group,
            nestedLayouts: nestedLayouts,
            keepAveragePosition: Boolean(selectedElements)
        };
    }
}
exports.calculateLayout = calculateLayout;
function applyLayout(model, layout) {
    var _a = layout, positions = _a.positions, group = _a.group, nestedLayouts = _a.nestedLayouts, keepAveragePosition = _a.keepAveragePosition;
    var elements = model.elements.filter(function (_a) {
        var id = _a.id;
        return positions.has(id);
    });
    for (var _i = 0, nestedLayouts_1 = nestedLayouts; _i < nestedLayouts_1.length; _i++) {
        var nestedLayout = nestedLayouts_1[_i];
        applyLayout(model, nestedLayout);
    }
    if (group) {
        var offset = paperArea_1.getContentFittingBox(elements, []);
        translateToPositiveQuadrant(positions, offset);
    }
    var averagePosition = keepAveragePosition ? calculateAveragePosition(elements) : undefined;
    for (var _b = 0, elements_3 = elements; _b < elements_3.length; _b++) {
        var element = elements_3[_b];
        element.setPosition(positions.get(element.id));
    }
    if (keepAveragePosition) {
        var newAveragePosition = calculateAveragePosition(elements);
        var averageDiff_1 = {
            x: averagePosition.x - newAveragePosition.x,
            y: averagePosition.y - newAveragePosition.y,
        };
        positions.forEach(function (position, elementId) {
            var element = model.getElement(elementId);
            element.setPosition({
                x: position.x + averageDiff_1.x,
                y: position.y + averageDiff_1.y,
            });
        });
    }
}
exports.applyLayout = applyLayout;
function calculateAveragePosition(position) {
    var xSum = 0;
    var ySum = 0;
    for (var _i = 0, position_1 = position; _i < position_1.length; _i++) {
        var element = position_1[_i];
        xSum += element.position.x + element.size.width / 2;
        ySum += element.position.y + element.size.height / 2;
    }
    return {
        x: xSum / position.length,
        y: ySum / position.length,
    };
}
exports.calculateAveragePosition = calculateAveragePosition;
function placeElementsAround(params) {
    var model = params.model, elements = params.elements, targetElement = params.targetElement, prefferedLinksLength = params.prefferedLinksLength;
    var targetElementBounds = geometry_1.boundsOf(targetElement);
    var targetPosition = {
        x: targetElementBounds.x + targetElementBounds.width / 2,
        y: targetElementBounds.y + targetElementBounds.height / 2,
    };
    var outgoingAngle = 0;
    if (targetElement.links.length > 0) {
        var averageSourcePosition = calculateAveragePosition(targetElement.links.map(function (link) {
            var linkSource = model.sourceOf(link);
            return linkSource !== targetElement ? linkSource : model.targetOf(link);
        }));
        var vectorDiff = {
            x: targetPosition.x - averageSourcePosition.x, y: targetPosition.y - averageSourcePosition.y,
        };
        if (vectorDiff.x !== 0 || vectorDiff.y !== 0) {
            outgoingAngle = Math.atan2(vectorDiff.y, vectorDiff.x);
        }
    }
    var step = Math.min(Math.PI / elements.length, Math.PI / 6);
    var elementsSteck = [].concat(elements);
    var placeElementFromSteck = function (curAngle, element) {
        if (element) {
            var size = element.size;
            element.setPosition({
                x: targetPosition.x + prefferedLinksLength * Math.cos(curAngle) - size.width / 2,
                y: targetPosition.y + prefferedLinksLength * Math.sin(curAngle) - size.height / 2,
            });
        }
    };
    var isOddLength = elementsSteck.length % 2 === 0;
    if (isOddLength) {
        for (var angle = step / 2; elementsSteck.length > 0; angle += step) {
            placeElementFromSteck(outgoingAngle - angle, elementsSteck.pop());
            placeElementFromSteck(outgoingAngle + angle, elementsSteck.pop());
        }
    }
    else {
        placeElementFromSteck(outgoingAngle, elementsSteck.pop());
        for (var angle = step; elementsSteck.length > 0; angle += step) {
            placeElementFromSteck(outgoingAngle - angle, elementsSteck.pop());
            placeElementFromSteck(outgoingAngle + angle, elementsSteck.pop());
        }
    }
    return new Promise(function (resolve) {
        var listener = new events_1.EventObserver();
        listener.listen(model.events, 'changeCells', function () {
            listener.stopListening();
            removeOverlaps({
                model: model,
                padding: { x: 15, y: 15 },
            });
            resolve();
        });
    });
}
exports.placeElementsAround = placeElementsAround;
function removeOverlaps(params) {
    var padding = params.padding, model = params.model, group = params.group, fixedElements = params.fixedElements, selectedElements = params.selectedElements;
    return calculateLayout({
        model: model,
        group: group,
        fixedElements: fixedElements,
        selectedElements: selectedElements,
        layoutFunction: function (nodes) {
            padded(nodes, padding, function () { return groupRemoveOverlaps(nodes); });
        },
    });
}
exports.removeOverlaps = removeOverlaps;
function forceLayout(params) {
    var model = params.model, group = params.group, fixedElements = params.fixedElements, selectedElements = params.selectedElements;
    return calculateLayout({
        model: model,
        group: group,
        fixedElements: fixedElements,
        selectedElements: selectedElements,
        layoutFunction: function (nodes, links) {
            if (fixedElements && fixedElements.size > 0) {
                biasFreePadded(nodes, { x: 50, y: 50 }, function () { return groupForceLayout({
                    nodes: nodes, links: links, preferredLinkLength: 200,
                    avoidOvelaps: true,
                }); });
            }
            else {
                groupForceLayout({ nodes: nodes, links: links, preferredLinkLength: 200 });
                biasFreePadded(nodes, { x: 50, y: 50 }, function () { return groupRemoveOverlaps(nodes); });
            }
        },
    });
}
exports.forceLayout = forceLayout;
function getContentFittingBoxForLayout(nodes) {
    var minX = Infinity, minY = Infinity;
    var maxX = -Infinity, maxY = -Infinity;
    for (var _i = 0, nodes_7 = nodes; _i < nodes_7.length; _i++) {
        var node = nodes_7[_i];
        var x = node.x, y = node.y, width = node.width, height = node.height;
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x + width);
        maxY = Math.max(maxY, y + height);
    }
    return {
        x: Number.isFinite(minX) ? minX : 0,
        y: Number.isFinite(minY) ? minY : 0,
        width: Number.isFinite(minX) && Number.isFinite(maxX) ? (maxX - minX) : 0,
        height: Number.isFinite(minY) && Number.isFinite(maxY) ? (maxY - minY) : 0,
    };
}
exports.getContentFittingBoxForLayout = getContentFittingBoxForLayout;


/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__106__;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var graphBuilder_1 = __webpack_require__(103);
var DEFAULT_PREFIX = "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n PREFIX rdf:  <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n PREFIX owl:  <http://www.w3.org/2002/07/owl#>" + '\n\n';
var SparqlGraphBuilder = /** @class */ (function () {
    function SparqlGraphBuilder(dataProvider) {
        this.dataProvider = dataProvider;
        this.graphBuilder = new graphBuilder_1.GraphBuilder(dataProvider);
    }
    SparqlGraphBuilder.prototype.getGraphFromConstruct = function (constructQuery) {
        var _this = this;
        var query = DEFAULT_PREFIX + constructQuery;
        return this.dataProvider.executeSparqlConstruct(query)
            .then(function (graph) { return _this.graphBuilder.getGraphFromRDFGraph(graph); });
    };
    return SparqlGraphBuilder;
}());
exports.SparqlGraphBuilder = SparqlGraphBuilder;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var schema_1 = __webpack_require__(53);
var events_1 = __webpack_require__(54);
var elements_1 = __webpack_require__(52);
var graph_1 = __webpack_require__(109);
var history_1 = __webpack_require__(64);
/**
 * Model of diagram.
 */
var DiagramModel = /** @class */ (function () {
    function DiagramModel(history) {
        this.history = history;
        this.source = new events_1.EventSource();
        this.events = this.source;
        this.graph = new graph_1.Graph();
        this.graphListener = new events_1.EventObserver();
    }
    Object.defineProperty(DiagramModel.prototype, "elements", {
        get: function () { return this.graph.getElements(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiagramModel.prototype, "links", {
        get: function () { return this.graph.getLinks(); },
        enumerable: true,
        configurable: true
    });
    DiagramModel.prototype.getElement = function (elementId) {
        return this.graph.getElement(elementId);
    };
    DiagramModel.prototype.getLinkById = function (linkId) {
        return this.graph.getLink(linkId);
    };
    DiagramModel.prototype.linksOfType = function (linkTypeId) {
        return this.graph.getLinks().filter(function (link) { return link.typeId === linkTypeId; });
    };
    DiagramModel.prototype.findLink = function (linkTypeId, sourceId, targetId) {
        return this.graph.findLink(linkTypeId, sourceId, targetId);
    };
    DiagramModel.prototype.sourceOf = function (link) { return this.getElement(link.sourceId); };
    DiagramModel.prototype.targetOf = function (link) { return this.getElement(link.targetId); };
    DiagramModel.prototype.isSourceAndTargetVisible = function (link) {
        return Boolean(this.sourceOf(link) && this.targetOf(link));
    };
    DiagramModel.prototype.resetGraph = function () {
        if (this.graphListener) {
            this.graphListener.stopListening();
            this.graphListener = new events_1.EventObserver();
        }
        this.graph = new graph_1.Graph();
    };
    DiagramModel.prototype.subscribeGraph = function () {
        var _this = this;
        this.graphListener.listen(this.graph.events, 'changeCells', function () {
            _this.source.trigger('changeCells', {});
        });
        this.graphListener.listen(this.graph.events, 'elementEvent', function (e) {
            _this.source.trigger('elementEvent', e);
        });
        this.graphListener.listen(this.graph.events, 'linkEvent', function (e) {
            _this.source.trigger('linkEvent', e);
        });
        this.graphListener.listen(this.graph.events, 'linkTypeEvent', function (e) {
            _this.source.trigger('linkTypeEvent', e);
        });
        this.graphListener.listen(this.graph.events, 'classEvent', function (e) {
            _this.source.trigger('classEvent', e);
        });
        this.source.trigger('changeCells', { source: this });
    };
    DiagramModel.prototype.reorderElements = function (compare) {
        this.graph.reorderElements(compare);
    };
    DiagramModel.prototype.createElement = function (elementIriOrModel, group) {
        var elementIri = typeof elementIriOrModel === 'string'
            ? elementIriOrModel : elementIriOrModel.id;
        var elements = this.elements.filter(function (el) { return el.iri === elementIri && el.group === group; });
        if (elements.length > 0) {
            // usually there should be only one element
            return elements[0];
        }
        var data = typeof elementIriOrModel === 'string'
            ? placeholderDataFromIri(elementIri)
            : elementIriOrModel;
        data = tslib_1.__assign(tslib_1.__assign({}, data), { id: data.id });
        var element = new elements_1.Element({ id: schema_1.GenerateID.forElement(), data: data, group: group });
        this.history.execute(addElement(this.graph, element, []));
        return element;
    };
    DiagramModel.prototype.removeElement = function (elementId) {
        var element = this.getElement(elementId);
        if (element) {
            this.history.execute(removeElement(this.graph, element));
        }
    };
    DiagramModel.prototype.addLink = function (link) {
        var typeId = link.typeId, sourceId = link.sourceId, targetId = link.targetId, data = link.data;
        if (data && data.linkTypeId !== typeId) {
            throw new Error('linkTypeId must match linkType.id');
        }
        var existingLink = this.findLink(typeId, sourceId, targetId);
        if (existingLink) {
            if (link.data) {
                existingLink.setLayoutOnly(false);
                existingLink.setData(data);
            }
            return existingLink;
        }
        var linkType = this.createLinkType(link.typeId);
        var source = this.getElement(sourceId);
        var target = this.getElement(targetId);
        var shouldBeVisible = linkType.visible && source && target;
        if (!shouldBeVisible) {
            return undefined;
        }
        if (!link.data) {
            link.setData({ linkTypeId: typeId, sourceId: source.iri, targetId: target.iri });
        }
        this.graph.addLink(link);
        return link;
    };
    DiagramModel.prototype.removeLink = function (linkId) {
        this.graph.removeLink(linkId);
    };
    DiagramModel.prototype.getClass = function (classIri) {
        return this.graph.getClass(classIri);
    };
    DiagramModel.prototype.createClass = function (classIri) {
        var existing = this.graph.getClass(classIri);
        if (existing) {
            return existing;
        }
        var classModel = new elements_1.FatClassModel({ id: classIri });
        this.addClass(classModel);
        return classModel;
    };
    DiagramModel.prototype.addClass = function (model) {
        this.graph.addClass(model);
    };
    DiagramModel.prototype.getLinkType = function (linkTypeIri) {
        return this.graph.getLinkType(linkTypeIri);
    };
    DiagramModel.prototype.createLinkType = function (linkTypeIri) {
        var existing = this.graph.getLinkType(linkTypeIri);
        if (existing) {
            return existing;
        }
        var linkType = new elements_1.FatLinkType({ id: linkTypeIri });
        this.graph.addLinkType(linkType);
        return linkType;
    };
    DiagramModel.prototype.getProperty = function (propertyTypeIri) {
        return this.graph.getProperty(propertyTypeIri);
    };
    DiagramModel.prototype.createProperty = function (propertyIri) {
        var existing = this.graph.getProperty(propertyIri);
        if (existing) {
            return existing;
        }
        var property = new elements_1.RichProperty({ id: propertyIri });
        this.graph.addProperty(property);
        return property;
    };
    DiagramModel.prototype.triggerChangeGroupContent = function (group) {
        this.source.trigger('changeGroupContent', { group: group });
    };
    DiagramModel.prototype.createTemporaryElement = function () {
        var target = new elements_1.Element({
            id: schema_1.GenerateID.forElement(),
            data: placeholderDataFromIri(''),
            temporary: true,
        });
        this.graph.addElement(target);
        return target;
    };
    return DiagramModel;
}());
exports.DiagramModel = DiagramModel;
function placeholderDataFromIri(iri) {
    return {
        id: iri,
        types: [],
        label: { values: [] },
        properties: {},
    };
}
exports.placeholderDataFromIri = placeholderDataFromIri;
function addElement(graph, element, connectedLinks) {
    return history_1.Command.create('Add element', function () {
        graph.addElement(element);
        for (var _i = 0, connectedLinks_1 = connectedLinks; _i < connectedLinks_1.length; _i++) {
            var link = connectedLinks_1[_i];
            var existing = graph.getLink(link.id) || graph.findLink(link.typeId, link.sourceId, link.targetId);
            if (!existing) {
                graph.addLink(link);
            }
        }
        return removeElement(graph, element);
    });
}
function removeElement(graph, element) {
    return history_1.Command.create('Remove element', function () {
        var connectedLinks = tslib_1.__spreadArrays(element.links);
        graph.removeElement(element.id);
        return addElement(graph, element, connectedLinks);
    });
}


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var collections_1 = __webpack_require__(55);
var events_1 = __webpack_require__(54);
var Graph = /** @class */ (function () {
    function Graph() {
        var _this = this;
        this.source = new events_1.EventSource();
        this.events = this.source;
        this.elements = new collections_1.OrderedMap();
        this.links = new collections_1.OrderedMap();
        this.classesById = new Map();
        this.propertiesById = new Map();
        this.linkTypes = new Map();
        this.onElementEvent = function (data, key) {
            _this.source.trigger('elementEvent', { key: key, data: data });
        };
        this.onLinkEvent = function (data, key) {
            _this.source.trigger('linkEvent', { key: key, data: data });
        };
        this.onLinkTypeEvent = function (data, key) {
            _this.source.trigger('linkTypeEvent', { key: key, data: data });
        };
        this.onClassEvent = function (data, key) {
            _this.source.trigger('classEvent', { key: key, data: data });
        };
    }
    Graph.prototype.getElements = function () { return this.elements.items; };
    Graph.prototype.getLinks = function () { return this.links.items; };
    Graph.prototype.getLink = function (linkId) {
        return this.links.get(linkId);
    };
    Graph.prototype.findLink = function (linkTypeId, sourceId, targetId) {
        var source = this.getElement(sourceId);
        if (!source) {
            return undefined;
        }
        var index = findLinkIndex(source.links, linkTypeId, sourceId, targetId);
        return index >= 0 ? source.links[index] : undefined;
    };
    Graph.prototype.sourceOf = function (link) {
        return this.getElement(link.sourceId);
    };
    Graph.prototype.targetOf = function (link) {
        return this.getElement(link.targetId);
    };
    Graph.prototype.reorderElements = function (compare) {
        this.elements.reorder(compare);
    };
    Graph.prototype.getElement = function (elementId) {
        return this.elements.get(elementId);
    };
    Graph.prototype.addElement = function (element) {
        if (this.getElement(element.id)) {
            throw new Error("Link type '" + element.id + "' already exists.");
        }
        element.events.onAny(this.onElementEvent);
        this.elements.push(element.id, element);
        this.source.trigger('changeCells', {});
    };
    Graph.prototype.removeElement = function (elementId) {
        var element = this.elements.get(elementId);
        if (element) {
            var options = { silent: true };
            // clone links to prevent modifications during iteration
            for (var _i = 0, _a = tslib_1.__spreadArrays(element.links); _i < _a.length; _i++) {
                var link = _a[_i];
                this.removeLink(link.id, options);
            }
            this.elements.delete(elementId);
            element.events.offAny(this.onElementEvent);
            this.source.trigger('changeCells', {});
        }
    };
    Graph.prototype.addLink = function (link) {
        if (this.getLink(link.id)) {
            throw new Error("Link '" + link.id + "' already exists.");
        }
        var linkType = this.getLinkType(link.typeId);
        if (!linkType) {
            throw new Error("Link type '" + link.typeId + "' not found.");
        }
        this.registerLink(link);
    };
    Graph.prototype.registerLink = function (link) {
        var typeId = link.typeId;
        this.sourceOf(link).links.push(link);
        if (link.sourceId !== link.targetId) {
            this.targetOf(link).links.push(link);
        }
        link.events.onAny(this.onLinkEvent);
        this.links.push(link.id, link);
        this.source.trigger('changeCells', {});
    };
    Graph.prototype.removeLink = function (linkId, options) {
        var link = this.links.delete(linkId);
        if (link) {
            var typeId = link.typeId, sourceId = link.sourceId, targetId = link.targetId;
            link.events.offAny(this.onLinkEvent);
            this.removeLinkReferences(typeId, sourceId, targetId);
            if (!(options && options.silent)) {
                this.source.trigger('changeCells', {});
            }
        }
    };
    Graph.prototype.removeLinkReferences = function (linkTypeId, sourceId, targetId) {
        var source = this.getElement(sourceId);
        if (source) {
            removeLinkFrom(source.links, linkTypeId, sourceId, targetId);
        }
        var target = this.getElement(targetId);
        if (target) {
            removeLinkFrom(target.links, linkTypeId, sourceId, targetId);
        }
    };
    Graph.prototype.getLinkTypes = function () {
        var result = [];
        this.linkTypes.forEach(function (type) { return result.push(type); });
        return result;
    };
    Graph.prototype.getLinkType = function (linkTypeId) {
        return this.linkTypes.get(linkTypeId);
    };
    Graph.prototype.addLinkType = function (linkType) {
        if (this.getLinkType(linkType.id)) {
            throw new Error("Link type '" + linkType.id + "' already exists.");
        }
        linkType.setIndex(Graph.nextLinkTypeIndex++);
        linkType.events.onAny(this.onLinkTypeEvent);
        this.linkTypes.set(linkType.id, linkType);
    };
    Graph.prototype.getProperty = function (propertyId) {
        return this.propertiesById.get(propertyId);
    };
    Graph.prototype.addProperty = function (property) {
        if (this.getProperty(property.id)) {
            throw new Error("Property '" + property.id + "' already exists.");
        }
        this.propertiesById.set(property.id, property);
    };
    Graph.prototype.getClass = function (classId) {
        return this.classesById.get(classId);
    };
    Graph.prototype.getClasses = function () {
        var classes = [];
        this.classesById.forEach(function (richClass) { return classes.push(richClass); });
        return classes;
    };
    Graph.prototype.addClass = function (classModel) {
        if (this.getClass(classModel.id)) {
            throw new Error("Class '" + classModel.id + "' already exists.");
        }
        classModel.events.onAny(this.onClassEvent);
        this.classesById.set(classModel.id, classModel);
    };
    Graph.nextLinkTypeIndex = 0;
    return Graph;
}());
exports.Graph = Graph;
function removeLinkFrom(links, linkTypeId, sourceId, targetId) {
    if (!links) {
        return;
    }
    while (true) {
        var index = findLinkIndex(links, linkTypeId, sourceId, targetId);
        if (index < 0) {
            break;
        }
        links.splice(index, 1);
    }
}
function findLinkIndex(haystack, linkTypeId, sourceId, targetId) {
    for (var i = 0; i < haystack.length; i++) {
        var link = haystack[i];
        if (link.sourceId === sourceId &&
            link.targetId === targetId &&
            link.typeId === linkTypeId) {
            return i;
        }
    }
    return -1;
}


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var schema_1 = __webpack_require__(53);
var elements_1 = __webpack_require__(52);
var history_1 = __webpack_require__(64);
var model_1 = __webpack_require__(108);
var dataFetcher_1 = __webpack_require__(111);
var serializedDiagram_1 = __webpack_require__(104);
var AsyncModel = /** @class */ (function (_super) {
    tslib_1.__extends(AsyncModel, _super);
    function AsyncModel(history, groupByProperties) {
        var _this = _super.call(this, history) || this;
        _this.groupByProperties = groupByProperties;
        _this.linkSettings = {};
        _this.onLinkTypeVisibilityChanged = function (e) {
            if (e.source.visible) {
                if (!e.preventLoading) {
                    _this.requestLinksOfType([e.source.id]);
                }
            }
            else {
                for (var _i = 0, _a = _this.linksOfType(e.source.id); _i < _a.length; _i++) {
                    var link = _a[_i];
                    _this.graph.removeLink(link.id);
                }
            }
        };
        return _this;
    }
    Object.defineProperty(AsyncModel.prototype, "asyncSource", {
        get: function () {
            return this.source;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AsyncModel.prototype, "dataProvider", {
        get: function () { return this._dataProvider; },
        enumerable: true,
        configurable: true
    });
    AsyncModel.prototype.subscribeGraph = function () {
        var _this = this;
        _super.prototype.subscribeGraph.call(this);
        this.graphListener.listen(this.graph.events, 'linkTypeEvent', function (e) {
            if (e.key === 'changeVisibility') {
                _this.onLinkTypeVisibilityChanged(e.data[e.key], e.key);
            }
        });
    };
    AsyncModel.prototype.setDataProvider = function (dataProvider) {
        this._dataProvider = dataProvider;
        this.fetcher = new dataFetcher_1.DataFetcher(this.graph, dataProvider);
    };
    AsyncModel.prototype.createNewDiagram = function (dataProvider) {
        var _this = this;
        this.resetGraph();
        this.setDataProvider(dataProvider);
        this.asyncSource.trigger('loadingStart', { source: this });
        return this.dataProvider.linkTypes().then(function (linkTypes) {
            var allLinkTypes = _this.initLinkTypes(linkTypes);
            return _this.loadAndRenderLayout({
                allLinkTypes: allLinkTypes,
                markLinksAsLayoutOnly: false,
            });
        }).catch(function (error) {
            // tslint:disable-next-line:no-console
            console.error(error);
            _this.asyncSource.trigger('loadingError', { source: _this, error: error });
            return Promise.reject(error);
        });
    };
    AsyncModel.prototype.importLayout = function (params) {
        var _this = this;
        this.resetGraph();
        this.setDataProvider(params.dataProvider);
        this.asyncSource.trigger('loadingStart', { source: this });
        return this.dataProvider.linkTypes().then(function (linkTypes) {
            var allLinkTypes = _this.initLinkTypes(linkTypes);
            var diagram = params.diagram ? params.diagram : serializedDiagram_1.emptyDiagram();
            _this.setLinkSettings(diagram.linkTypeOptions);
            var loadingModels = _this.loadAndRenderLayout({
                layoutData: diagram.layoutData,
                preloadedElements: params.preloadedElements || {},
                markLinksAsLayoutOnly: params.validateLinks || false,
                allLinkTypes: allLinkTypes,
                hideUnusedLinkTypes: params.hideUnusedLinkTypes,
            });
            var requestingLinks = params.validateLinks
                ? _this.requestLinksOfType() : Promise.resolve();
            return Promise.all([loadingModels, requestingLinks]);
        }).then(function () {
            _this.asyncSource.trigger('loadingSuccess', { source: _this });
        }).catch(function (error) {
            // tslint:disable-next-line:no-console
            console.error(error);
            _this.asyncSource.trigger('loadingError', { source: _this, error: error });
            return Promise.reject(error);
        });
    };
    AsyncModel.prototype.exportLayout = function () {
        var layoutData = serializedDiagram_1.makeLayoutData(this.graph.getElements(), this.graph.getLinks());
        var linkTypeOptions = this.graph.getLinkTypes()
            // do not serialize default link type options
            .filter(function (linkType) { return (!linkType.visible || !linkType.showLabel) && linkType.id !== schema_1.PLACEHOLDER_LINK_TYPE; })
            .map(function (_a) {
            var id = _a.id, visible = _a.visible, showLabel = _a.showLabel;
            return ({ '@type': 'LinkTypeOptions', property: id, visible: visible, showLabel: showLabel });
        });
        return serializedDiagram_1.makeSerializedDiagram({ layoutData: layoutData, linkTypeOptions: linkTypeOptions });
    };
    AsyncModel.prototype.initLinkTypes = function (linkTypes) {
        var types = [];
        for (var _i = 0, linkTypes_1 = linkTypes; _i < linkTypes_1.length; _i++) {
            var _a = linkTypes_1[_i], id = _a.id, label = _a.label;
            var linkType = new elements_1.FatLinkType({ id: id, label: label.values });
            this.graph.addLinkType(linkType);
            types.push(linkType);
        }
        return types;
    };
    AsyncModel.prototype.setLinkSettings = function (settings) {
        if (!settings) {
            return;
        }
        for (var _i = 0, settings_1 = settings; _i < settings_1.length; _i++) {
            var setting = settings_1[_i];
            var _a = setting.visible, visible = _a === void 0 ? true : _a, _b = setting.showLabel, showLabel = _b === void 0 ? true : _b;
            var linkTypeId = setting.property;
            this.linkSettings[linkTypeId] = { '@type': 'LinkTypeOptions', property: linkTypeId, visible: visible, showLabel: showLabel };
            var linkType = this.getLinkType(linkTypeId);
            if (linkType) {
                linkType.setVisibility({ visible: visible, showLabel: showLabel });
            }
        }
    };
    AsyncModel.prototype.loadAndRenderLayout = function (params) {
        var _a = params.layoutData, layoutData = _a === void 0 ? serializedDiagram_1.emptyLayoutData() : _a, _b = params.preloadedElements, preloadedElements = _b === void 0 ? {} : _b, markLinksAsLayoutOnly = params.markLinksAsLayoutOnly, hideUnusedLinkTypes = params.hideUnusedLinkTypes;
        var elementIrisToRequestData = [];
        var usedLinkTypes = {};
        for (var _i = 0, _c = layoutData.elements; _i < _c.length; _i++) {
            var layoutElement = _c[_i];
            var id = layoutElement["@id"], iri = layoutElement.iri, position = layoutElement.position, size = layoutElement.size, isExpanded = layoutElement.isExpanded, group = layoutElement.group, elementState = layoutElement.elementState;
            var template = preloadedElements[iri];
            var data = template || model_1.placeholderDataFromIri(iri);
            var element = new elements_1.Element({ id: id, data: data, position: position, size: size, expanded: isExpanded, group: group, elementState: elementState });
            this.graph.addElement(element);
            if (!template) {
                elementIrisToRequestData.push(element.iri);
            }
        }
        for (var _d = 0, _e = layoutData.links; _d < _e.length; _d++) {
            var layoutLink = _e[_d];
            var id = layoutLink["@id"], property = layoutLink.property, source = layoutLink.source, target = layoutLink.target, vertices = layoutLink.vertices, linkState = layoutLink.linkState;
            var linkType = this.createLinkType(property);
            usedLinkTypes[linkType.id] = linkType;
            var link = this.addLink(new elements_1.Link({
                id: id,
                typeId: linkType.id,
                sourceId: source['@id'],
                targetId: target['@id'],
                vertices: vertices,
                linkState: linkState,
            }));
            if (link) {
                link.setLayoutOnly(markLinksAsLayoutOnly);
            }
        }
        this.subscribeGraph();
        var requestingModels = this.requestElementData(elementIrisToRequestData);
        if (hideUnusedLinkTypes && params.allLinkTypes) {
            this.hideUnusedLinkTypes(params.allLinkTypes, usedLinkTypes);
        }
        return requestingModels;
    };
    AsyncModel.prototype.hideUnusedLinkTypes = function (allTypes, usedTypes) {
        for (var _i = 0, allTypes_1 = allTypes; _i < allTypes_1.length; _i++) {
            var linkType = allTypes_1[_i];
            if (!usedTypes[linkType.id]) {
                linkType.setVisibility({
                    visible: false,
                    showLabel: linkType.showLabel,
                });
            }
        }
    };
    AsyncModel.prototype.requestElementData = function (elementIris) {
        return this.fetcher.fetchElementData(elementIris);
    };
    AsyncModel.prototype.requestLinksOfType = function (linkTypeIds) {
        var _this = this;
        var linkTypes = linkTypeIds || this.graph.getLinkTypes()
            .filter(function (type) { return type.visible; })
            .map(function (type) { return type.id; });
        return this.dataProvider.linksInfo({
            elementIds: this.graph.getElements().map(function (element) { return element.iri; }),
            linkTypeIds: linkTypes,
        }).then(function (links) { return _this.onLinkInfoLoaded(links); });
    };
    AsyncModel.prototype.createClass = function (classId) {
        if (this.graph.getClass(classId)) {
            return _super.prototype.getClass.call(this, classId);
        }
        var classModel = _super.prototype.createClass.call(this, classId);
        this.fetcher.fetchClass(classModel);
        return classModel;
    };
    AsyncModel.prototype.createLinkType = function (linkTypeId) {
        if (this.graph.getLinkType(linkTypeId)) {
            return _super.prototype.createLinkType.call(this, linkTypeId);
        }
        var linkType = _super.prototype.createLinkType.call(this, linkTypeId);
        var setting = this.linkSettings[linkType.id];
        if (setting) {
            var visible = setting.visible, showLabel = setting.showLabel;
            linkType.setVisibility({ visible: visible, showLabel: showLabel, preventLoading: true });
        }
        this.fetcher.fetchLinkType(linkType);
        return linkType;
    };
    AsyncModel.prototype.createProperty = function (propertyIri) {
        if (this.graph.getProperty(propertyIri)) {
            return _super.prototype.createProperty.call(this, propertyIri);
        }
        var property = _super.prototype.createProperty.call(this, propertyIri);
        this.fetcher.fetchPropertyType(property);
        return property;
    };
    AsyncModel.prototype.onLinkInfoLoaded = function (links) {
        var allowToCreate;
        var cancel = function () { allowToCreate = false; };
        for (var _i = 0, links_1 = links; _i < links_1.length; _i++) {
            var linkModel = links_1[_i];
            this.createLinkType(linkModel.linkTypeId);
            allowToCreate = true;
            this.asyncSource.trigger('createLoadedLink', { source: this, model: linkModel, cancel: cancel });
            if (allowToCreate) {
                this.createLinks(linkModel);
            }
        }
    };
    AsyncModel.prototype.createLinks = function (data) {
        var sources = this.graph.getElements().filter(function (el) { return el.iri === data.sourceId; });
        var targets = this.graph.getElements().filter(function (el) { return el.iri === data.targetId; });
        var typeId = data.linkTypeId;
        for (var _i = 0, sources_1 = sources; _i < sources_1.length; _i++) {
            var source = sources_1[_i];
            for (var _a = 0, targets_1 = targets; _a < targets_1.length; _a++) {
                var target = targets_1[_a];
                this.addLink(new elements_1.Link({ typeId: typeId, sourceId: source.id, targetId: target.id, data: data }));
            }
        }
    };
    AsyncModel.prototype.loadEmbeddedElements = function (elementIri) {
        var _this = this;
        var elements = this.groupByProperties.map(function (groupBy) {
            return _this.dataProvider.linkElements({
                elementId: elementIri,
                linkId: groupBy.linkType,
                offset: 0,
                direction: groupBy.linkDirection,
            });
        });
        return Promise.all(elements).then(function (res) {
            return res.reduce(function (memo, current) { return Object.assign(memo, current); }, {});
        });
    };
    return AsyncModel;
}(model_1.DiagramModel));
exports.AsyncModel = AsyncModel;
function requestElementData(model, elementIris) {
    return history_1.Command.effect('Fetch element data', function () {
        model.requestElementData(elementIris);
    });
}
exports.requestElementData = requestElementData;
function restoreLinksBetweenElements(model) {
    return history_1.Command.effect('Restore links between elements', function () {
        model.requestLinksOfType();
    });
}
exports.restoreLinksBetweenElements = restoreLinksBetweenElements;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var async_1 = __webpack_require__(60);
var collections_1 = __webpack_require__(55);
var DataFetcher = /** @class */ (function () {
    function DataFetcher(graph, dataProvider) {
        var _this = this;
        this.graph = graph;
        this.dataProvider = dataProvider;
        this.classQueue = new async_1.BufferingQueue(function (classIds) {
            _this.dataProvider.classInfo({ classIds: classIds }).then(_this.onClassesLoaded);
        });
        this.linkTypeQueue = new async_1.BufferingQueue(function (linkTypeIds) {
            _this.dataProvider.linkTypesInfo({ linkTypeIds: linkTypeIds }).then(_this.onLinkTypesLoaded);
        });
        this.propertyTypeQueue = new async_1.BufferingQueue(function (propertyIds) {
            _this.dataProvider.propertyInfo({ propertyIds: propertyIds }).then(_this.onPropertyTypesLoaded);
        });
        this.onElementInfoLoaded = function (elements) {
            for (var _i = 0, _a = _this.graph.getElements(); _i < _a.length; _i++) {
                var element = _a[_i];
                var loadedModel = elements[element.iri];
                if (loadedModel) {
                    element.setData(loadedModel);
                }
            }
        };
        this.onClassesLoaded = function (classInfos) {
            for (var _i = 0, classInfos_1 = classInfos; _i < classInfos_1.length; _i++) {
                var _a = classInfos_1[_i], id = _a.id, label = _a.label, count = _a.count;
                var model = _this.graph.getClass(id);
                if (!model) {
                    continue;
                }
                model.setLabel(label.values);
                if (typeof count === 'number') {
                    model.setCount(count);
                }
            }
        };
        this.onLinkTypesLoaded = function (linkTypesInfo) {
            for (var _i = 0, linkTypesInfo_1 = linkTypesInfo; _i < linkTypesInfo_1.length; _i++) {
                var _a = linkTypesInfo_1[_i], id = _a.id, label = _a.label;
                var model = _this.graph.getLinkType(id);
                if (!model) {
                    continue;
                }
                model.setLabel(label.values);
            }
        };
        this.onPropertyTypesLoaded = function (propertyModels) {
            for (var propId in propertyModels) {
                if (!collections_1.hasOwnProperty(propertyModels, propId)) {
                    continue;
                }
                var _a = propertyModels[propId], id = _a.id, label = _a.label;
                var targetProperty = _this.graph.getProperty(id);
                if (targetProperty) {
                    targetProperty.setLabel(label.values);
                }
            }
        };
    }
    DataFetcher.prototype.fetchElementData = function (elementIris) {
        if (elementIris.length === 0) {
            return Promise.resolve();
        }
        return this.dataProvider.elementInfo({ elementIds: tslib_1.__spreadArrays(elementIris) })
            .then(this.onElementInfoLoaded);
    };
    DataFetcher.prototype.fetchClass = function (model) {
        this.classQueue.push(model.id);
    };
    DataFetcher.prototype.fetchLinkType = function (linkType) {
        this.linkTypeQueue.push(linkType.id);
    };
    DataFetcher.prototype.fetchPropertyType = function (propertyType) {
        if (!this.dataProvider.propertyInfo) {
            return;
        }
        this.propertyTypeQueue.push(propertyType.id);
    };
    return DataFetcher;
}());
exports.DataFetcher = DataFetcher;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(45);
var model_1 = __webpack_require__(47);
var commands_1 = __webpack_require__(63);
var elements_1 = __webpack_require__(52);
var geometry_1 = __webpack_require__(56);
var history_1 = __webpack_require__(64);
var view_1 = __webpack_require__(65);
var events_1 = __webpack_require__(54);
var dialog_1 = __webpack_require__(113);
var connectionsMenu_1 = __webpack_require__(115);
var editEntityForm_1 = __webpack_require__(119);
var editElementTypeForm_1 = __webpack_require__(120);
var editLinkForm_1 = __webpack_require__(124);
var editLinkLabelForm_1 = __webpack_require__(125);
var halo_1 = __webpack_require__(126);
var haloLink_1 = __webpack_require__(127);
var linkStateWidget_1 = __webpack_require__(128);
var elementDecorator_1 = __webpack_require__(129);
var layout_1 = __webpack_require__(105);
var spinner_1 = __webpack_require__(89);
var asyncModel_1 = __webpack_require__(110);
var authoringState_1 = __webpack_require__(88);
var editLayer_1 = __webpack_require__(130);
var validation_1 = __webpack_require__(131);
var async_1 = __webpack_require__(60);
var collections_1 = __webpack_require__(55);
var DialogTypes;
(function (DialogTypes) {
    DialogTypes[DialogTypes["ConnectionsMenu"] = 0] = "ConnectionsMenu";
    DialogTypes[DialogTypes["EditEntityForm"] = 1] = "EditEntityForm";
    DialogTypes[DialogTypes["EditLinkForm"] = 2] = "EditLinkForm";
    DialogTypes[DialogTypes["EditEntityTypeForm"] = 3] = "EditEntityTypeForm";
    DialogTypes[DialogTypes["EditLinkLabelForm"] = 4] = "EditLinkLabelForm";
})(DialogTypes = exports.DialogTypes || (exports.DialogTypes = {}));
var EditorController = /** @class */ (function () {
    function EditorController(props) {
        var _this = this;
        this.listener = new events_1.EventObserver();
        this.source = new events_1.EventSource();
        this.events = this.source;
        this._authoringState = authoringState_1.AuthoringState.empty;
        this._validationState = validation_1.ValidationState.empty;
        this._temporaryState = authoringState_1.TemporaryState.empty;
        this._selection = [];
        this.cancellation = new async_1.Cancellation();
        this.onKeyUp = function (e) {
            var DELETE_KEY_CODE = 46;
            if (e.keyCode === DELETE_KEY_CODE &&
                document.activeElement.localName !== 'input') {
                _this.removeSelectedElements();
            }
        };
        var model = props.model, view = props.view, options = tslib_1.__rest(props, ["model", "view"]);
        this.model = model;
        this.view = view;
        this.options = options;
        this.listener.listen(this.events, 'changeValidationState', function (e) {
            for (var _i = 0, _a = _this.model.elements; _i < _a.length; _i++) {
                var element = _a[_i];
                var previous = e.previous.elements.get(element.iri);
                var current = _this.validationState.elements.get(element.iri);
                if (current !== previous) {
                    element.redraw();
                }
            }
        });
        this.listener.listen(this.events, 'changeAuthoringState', function (e) {
            if (_this.options.validationApi) {
                var changedElements = validation_1.changedElementsToValidate(e.previous, _this);
                validation_1.validateElements(changedElements, _this.options.validationApi, _this, _this.cancellation.signal);
            }
        });
        this.view._setElementDecorator(function (element) {
            return React.createElement(elementDecorator_1.ElementDecorator, { model: element, view: _this.view, editor: _this, position: element.position });
        });
    }
    EditorController.prototype._initializePaperComponents = function (paperArea) {
        var _this = this;
        this.listener.listen(paperArea.events, 'pointerUp', function (e) { return _this.onPaperPointerUp(e); });
        this.listener.listen(this.model.events, 'changeCells', function () { return _this.onCellsChanged(); });
        this.listener.listen(this.model.events, 'elementEvent', function (e) {
            if (e.key === 'requestedGroupContent') {
                _this.loadGroupContent(e.data.requestedGroupContent.source);
            }
        });
        this.listener.listen(this.model.events, 'loadingStart', function () { return _this.setSpinner({}); });
        this.listener.listen(this.model.events, 'loadingSuccess', function () {
            _this.setSpinner(undefined);
            var widget = React.createElement(linkStateWidget_1.LinkStateWidget, { view: _this.view, editor: _this });
            _this.view.setPaperWidget({ key: 'states', widget: widget, attachment: view_1.WidgetAttachment.OverLinks });
        });
        this.listener.listen(this.model.events, 'loadingError', function (_a) {
            var error = _a.error;
            var statusText = error ? error.message : undefined;
            _this.setSpinner({ statusText: statusText, errorOccured: true });
        });
        if (!this.options.disableHalo) {
            this.configureHalo();
            document.addEventListener('keyup', this.onKeyUp);
            this.listener.listen(this.view.events, 'dispose', function () {
                document.removeEventListener('keyup', _this.onKeyUp);
            });
        }
    };
    Object.defineProperty(EditorController.prototype, "inAuthoringMode", {
        get: function () {
            return Boolean(this._metadataApi);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorController.prototype, "metadataApi", {
        get: function () { return this._metadataApi; },
        enumerable: true,
        configurable: true
    });
    EditorController.prototype.setMetadataApi = function (value) {
        var previous = this._metadataApi;
        if (value === previous) {
            return;
        }
        this._metadataApi = value;
        if (Boolean(value) !== Boolean(previous)) {
            // authoring mode changed
            this.source.trigger('changeMode', { source: this });
        }
    };
    Object.defineProperty(EditorController.prototype, "authoringState", {
        get: function () { return this._authoringState; },
        enumerable: true,
        configurable: true
    });
    EditorController.prototype.setAuthoringState = function (value) {
        var previous = this._authoringState;
        if (previous === value) {
            return;
        }
        this.model.history.execute(this.updateAuthoringState(value));
    };
    EditorController.prototype.updateAuthoringState = function (state) {
        var _this = this;
        var previous = this._authoringState;
        return history_1.Command.create('Create or delete entities and links', function () {
            _this._authoringState = state;
            _this.source.trigger('changeAuthoringState', { source: _this, previous: previous });
            return _this.updateAuthoringState(previous);
        });
    };
    Object.defineProperty(EditorController.prototype, "validationState", {
        get: function () { return this._validationState; },
        enumerable: true,
        configurable: true
    });
    EditorController.prototype.setValidationState = function (value) {
        var previous = this._validationState;
        if (value === previous) {
            return;
        }
        this._validationState = value;
        this.source.trigger('changeValidationState', { source: this, previous: previous });
    };
    Object.defineProperty(EditorController.prototype, "temporaryState", {
        get: function () { return this._temporaryState; },
        enumerable: true,
        configurable: true
    });
    EditorController.prototype.setTemporaryState = function (value) {
        var previous = this._temporaryState;
        if (value === previous) {
            return;
        }
        this._temporaryState = value;
        this.source.trigger('changeTemporaryState', { source: this, previous: previous });
    };
    Object.defineProperty(EditorController.prototype, "selection", {
        get: function () { return this._selection; },
        enumerable: true,
        configurable: true
    });
    EditorController.prototype.setSelection = function (value) {
        var previous = this._selection;
        if (previous === value) {
            return;
        }
        this._selection = value;
        this.source.trigger('changeSelection', { source: this, previous: previous });
    };
    EditorController.prototype.cancelSelection = function () {
        this.setSelection([]);
    };
    EditorController.prototype.removeSelectedElements = function () {
        var itemsToRemove = this.selection;
        if (itemsToRemove.length === 0) {
            return;
        }
        this.cancelSelection();
        this.removeItems(itemsToRemove);
    };
    EditorController.prototype.removeItems = function (items) {
        var batch = this.model.history.startBatch();
        var deletedElementIris = new Set();
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            if (item instanceof elements_1.Element) {
                var event_1 = this.authoringState.elements.get(item.iri);
                if (event_1) {
                    this.discardChange(event_1);
                }
                this.model.removeElement(item.id);
                deletedElementIris.add(item.iri);
            }
            else if (item instanceof elements_1.Link) {
                if (authoringState_1.AuthoringState.isNewLink(this.authoringState, item.data)) {
                    this.deleteLink(item.data);
                }
            }
        }
        if (deletedElementIris.size > 0) {
            var newState = authoringState_1.AuthoringState.deleteNewLinksConnectedToElements(this.authoringState, deletedElementIris);
            this.setAuthoringState(newState);
        }
        batch.store();
    };
    EditorController.prototype.onPaperPointerUp = function (event) {
        if (this.options.disableHalo) {
            return;
        }
        var sourceEvent = event.sourceEvent, target = event.target, triggerAsClick = event.triggerAsClick;
        if (sourceEvent.ctrlKey || sourceEvent.shiftKey || sourceEvent.metaKey) {
            return;
        }
        if (this.dialogTarget && this.dialogType === DialogTypes.EditEntityForm) {
            return;
        }
        if (target instanceof elements_1.Element) {
            this.setSelection([target]);
            target.focus();
        }
        else if (target instanceof elements_1.Link) {
            this.setSelection([target]);
        }
        else if (target instanceof elements_1.LinkVertex) {
            this.setSelection([target.link]);
        }
        else if (!target && triggerAsClick) {
            this.setSelection([]);
            this.hideDialog();
            if (document.activeElement) {
                document.activeElement.blur();
            }
        }
    };
    EditorController.prototype.onCellsChanged = function () {
        var _this = this;
        if (this.selection.length === 0) {
            return;
        }
        var newSelection = this.selection.filter(function (el) { return _this.model.getElement(el.id); });
        if (newSelection.length < this.selection.length) {
            this.setSelection(newSelection);
        }
    };
    EditorController.prototype.setSpinner = function (props) {
        var widget = props ? React.createElement(LoadingWidget, { spinnerProps: props }) : undefined;
        this.view.setPaperWidget({ key: LoadingWidget.Key, widget: widget, attachment: view_1.WidgetAttachment.Viewport });
    };
    EditorController.prototype.configureHalo = function () {
        var _this = this;
        if (this.options.disableHalo) {
            return;
        }
        this.listener.listen(this.events, 'changeSelection', function () {
            var selected = _this.selection.length === 1 ? _this.selection[0] : undefined;
            if (_this.dialogTarget && selected !== _this.dialogTarget) {
                _this.hideDialog();
            }
            _this.bringSelectedElementsToFront();
            _this.renderDefaultHalo();
        });
        this.listener.listen(this.events, 'toggleDialog', function (_a) {
            var isOpened = _a.isOpened;
            _this.renderDefaultHalo();
        });
        this.renderDefaultHalo();
    };
    EditorController.prototype.bringSelectedElementsToFront = function () {
        if (this.selection.length === 0) {
            return;
        }
        this.model.reorderElements(collections_1.makeMoveComparator(this.model.elements, this.selection.filter(function (item) { return item instanceof elements_1.Element; }), collections_1.MoveDirection.ToEnd));
        this.view.performSyncUpdate();
    };
    EditorController.prototype.renderDefaultHalo = function () {
        var _this = this;
        var selected = this.selection.length === 1 ? this.selection[0] : undefined;
        var halo;
        if (selected instanceof elements_1.Element) {
            halo = (React.createElement(halo_1.Halo, { editor: this, metadataApi: this.metadataApi, target: selected, onRemove: function () { return _this.removeSelectedElements(); }, onExpand: function () {
                    _this.model.history.execute(commands_1.setElementExpanded(selected, !selected.isExpanded));
                }, navigationMenuOpened: this.dialogType === DialogTypes.ConnectionsMenu, onToggleNavigationMenu: function () {
                    if (_this.dialogTarget && _this.dialogType === DialogTypes.ConnectionsMenu) {
                        _this.hideDialog();
                    }
                    else {
                        _this.showConnectionsMenu(selected);
                    }
                    _this.renderDefaultHalo();
                }, onAddToFilter: function () { return selected.addToFilter(); }, onEstablishNewLink: function (point) {
                    return _this.startEditing({ target: selected, mode: editLayer_1.EditLayerMode.establishLink, point: point });
                }, onFollowLink: function (element, e) {
                    return _this.view.onIriClick(element.iri, element, view_1.IriClickIntent.JumpToEntity, e);
                } }));
        }
        else if (selected instanceof elements_1.Link) {
            halo = (React.createElement(haloLink_1.HaloLink, { view: this.view, editor: this, metadataApi: this.metadataApi, target: selected, onEdit: function () { return _this.showEditLinkForm(selected); }, onDelete: function () { return _this.deleteLink(selected.data); }, onSourceMove: function (point) {
                    return _this.startEditing({ target: selected, mode: editLayer_1.EditLayerMode.moveLinkSource, point: point });
                }, onTargetMove: function (point) {
                    return _this.startEditing({ target: selected, mode: editLayer_1.EditLayerMode.moveLinkTarget, point: point });
                }, onEditLabel: function () { return _this.showEditLinkLabelForm(selected); } }));
        }
        this.view.setPaperWidget({ key: 'halo', widget: halo, attachment: view_1.WidgetAttachment.OverElements });
    };
    EditorController.prototype.showConnectionsMenu = function (target) {
        var _this = this;
        var dialogType = DialogTypes.ConnectionsMenu;
        var onClose = function () { return _this.hideDialog(); };
        var content = (React.createElement(connectionsMenu_1.ConnectionsMenu, { view: this.view, editor: this, target: target, onAddElements: function (iris, linkType) {
                return _this.onAddElementsInConnectionMenu(iris, target, linkType);
            }, onClose: onClose, suggestProperties: this.options.suggestProperties }));
        this.showDialog({ target: target, dialogType: dialogType, content: content, onClose: onClose });
    };
    EditorController.prototype.showEditEntityForm = function (target) {
        var _this = this;
        var propertyEditor = this.options.propertyEditor;
        var dialogType = DialogTypes.EditEntityForm;
        var onSubmit = function (newData) {
            _this.hideDialog();
            _this.changeEntityData(target.data.id, newData);
        };
        var isIriModified = authoringState_1.AuthoringState.isElementWithModifiedIri(this.authoringState, target.data.id);
        var modelToEdit;
        if (isIriModified) {
            var relatedEvent = this.authoringState.elements.get(target.data.id);
            modelToEdit = tslib_1.__assign(tslib_1.__assign({}, target.data), { id: relatedEvent.newIri });
        }
        else {
            modelToEdit = target.data;
        }
        var onCancel = function () { return _this.hideDialog(); };
        var content = propertyEditor ? propertyEditor({ elementData: target.data, onSubmit: onSubmit, onCancel: onCancel }) : (React.createElement(editEntityForm_1.EditEntityForm, { view: this.view, entity: modelToEdit, onApply: onSubmit, onCancel: onCancel }));
        this.showDialog({ target: target, dialogType: dialogType, content: content, onClose: onCancel });
    };
    EditorController.prototype.showEditElementTypeForm = function (_a) {
        var _this = this;
        var link = _a.link, source = _a.source, target = _a.target;
        var dialogType = DialogTypes.EditEntityTypeForm;
        var onCancel = function () {
            _this.removeTemporaryElement(target);
            _this.removeTemporaryLink(link);
            _this.hideDialog();
        };
        var content = (React.createElement(editElementTypeForm_1.EditElementTypeForm, { editor: this, view: this.view, metadataApi: this.metadataApi, link: link.data, source: source.data, target: target.data, onChangeElement: function (data) {
                _this.setTemporaryState(authoringState_1.TemporaryState.deleteElement(_this.temporaryState, target.data));
                target.setData(data);
                _this.setTemporaryState(authoringState_1.TemporaryState.addElement(_this.temporaryState, target.data));
            }, onChangeLink: function (data) {
                _this.removeTemporaryLink(link);
                var newLink = createLinkAndChangeDirection({
                    data: data,
                    originalData: link.data,
                    sourceId: link.sourceId,
                    targetId: link.targetId,
                });
                link = _this.createNewLink({ link: newLink, temporary: true });
            }, onApply: function (elementData, linkData) {
                var isNewElement = target.iri === elementData.id;
                var position = target.position;
                _this.removeTemporaryElement(target);
                _this.removeTemporaryLink(link);
                var batch = _this.model.history.startBatch();
                var newTarget = _this.model.createElement(elementData);
                newTarget.setPosition(position);
                if (isNewElement) {
                    newTarget.setExpanded(true);
                    _this.addNewEntity(newTarget.data);
                }
                else {
                    _this.model.requestLinksOfType();
                }
                var newLink = createLinkAndChangeDirection({
                    data: linkData,
                    originalData: link.data,
                    sourceId: source.id,
                    targetId: newTarget.id,
                });
                _this.createNewLink({ link: newLink });
                batch.store();
                _this.hideDialog();
                if (isNewElement) {
                    _this.showEditEntityForm(newTarget);
                }
            }, onCancel: onCancel }));
        this.showDialog({ target: target, dialogType: dialogType, content: content, caption: 'Establish New Connection', onClose: onCancel });
    };
    EditorController.prototype.showEditLinkForm = function (link) {
        var _this = this;
        var dialogType = DialogTypes.EditLinkForm;
        var source = this.model.getElement(link.sourceId).data;
        var target = this.model.getElement(link.targetId).data;
        var onCancel = function () {
            if (_this.temporaryState.links.has(link.data)) {
                _this.removeTemporaryLink(link);
            }
            _this.hideDialog();
        };
        var content = (React.createElement(editLinkForm_1.EditLinkForm, { editor: this, view: this.view, metadataApi: this.metadataApi, link: link.data, source: source, target: target, onChange: function (data) {
                if (_this.temporaryState.links.has(link.data)) {
                    _this.removeTemporaryLink(link);
                    var newLink = createLinkAndChangeDirection({
                        data: data,
                        originalData: link.data,
                        sourceId: link.sourceId,
                        targetId: link.targetId,
                    });
                    _this.showEditLinkForm(_this.createNewLink({ link: newLink, temporary: true }));
                }
            }, onApply: function (data) {
                if (_this.temporaryState.links.has(link.data)) {
                    _this.removeTemporaryLink(link);
                    var newLink = createLinkAndChangeDirection({
                        data: data,
                        originalData: link.data,
                        sourceId: link.sourceId,
                        targetId: link.targetId,
                    });
                    _this.createNewLink({ link: newLink });
                }
                else {
                    _this.changeLink(link.data, data);
                }
                _this.hideDialog();
            }, onCancel: onCancel }));
        var caption = this.temporaryState.links.has(link.data) ? 'Establish New Connection' : 'Edit Connection';
        this.showDialog({
            target: link,
            dialogType: dialogType,
            content: content,
            size: { width: 300, height: 160 },
            caption: caption,
            onClose: onCancel,
        });
    };
    // Link editing implementation could be rethought in the future.
    EditorController.prototype.showEditLinkLabelForm = function (link) {
        var _this = this;
        var linkType = this.view.model.getLinkType(link.typeId);
        var template = this.view.createLinkTemplate(linkType);
        var size = { width: 300, height: 145 };
        var onCancel = function () { return _this.hideDialog(); };
        this.showDialog({
            target: link,
            dialogType: DialogTypes.EditLinkLabelForm,
            content: (React.createElement(editLinkLabelForm_1.EditLinkLabelForm, { view: this.view, link: link, onApply: function (label) {
                    template.setLinkLabel(link, label);
                    _this.hideDialog();
                }, onCancel: onCancel })),
            size: size,
            caption: 'Edit Link Label',
            offset: { x: 25, y: -size.height / 2 },
            calculatePosition: function () {
                var _a = link.labelBounds, x = _a.x, y = _a.y, width = _a.width, height = _a.height;
                return { x: x + width, y: y + height / 2 };
            },
            onClose: onCancel,
        });
    };
    EditorController.prototype.showDialog = function (params) {
        var target = params.target, dialogType = params.dialogType, content = params.content, size = params.size, caption = params.caption, offset = params.offset, calculatePosition = params.calculatePosition, onClose = params.onClose;
        this.dialogTarget = target;
        this.dialogType = dialogType;
        var dialog = (React.createElement(dialog_1.Dialog, { view: this.view, target: target, size: size, caption: caption, offset: offset, calculatePosition: calculatePosition, onClose: onClose }, content));
        this.view.setPaperWidget({ key: 'dialog', widget: dialog, attachment: view_1.WidgetAttachment.OverElements });
        this.source.trigger('toggleDialog', { isOpened: false });
    };
    EditorController.prototype.hideDialog = function () {
        if (this.dialogTarget) {
            var isTemporaryElement = this.dialogTarget instanceof elements_1.Element && this.temporaryState.elements.has(this.dialogTarget.iri);
            var isTemporaryLink = this.dialogTarget instanceof elements_1.Link && this.temporaryState.links.has(this.dialogTarget.data);
            if (isTemporaryElement || isTemporaryLink) {
                this.resetTemporaryState();
            }
            this.dialogType = undefined;
            this.dialogTarget = undefined;
            this.view.setPaperWidget({ key: 'dialog', widget: undefined, attachment: view_1.WidgetAttachment.OverElements });
            this.source.trigger('toggleDialog', { isOpened: false });
        }
    };
    EditorController.prototype.onDragDrop = function (dragged, paperPosition) {
        var batch = this.model.history.startBatch('Drag and drop onto diagram');
        var placedElements = placeElements(this.view, dragged, paperPosition);
        var irisToLoad = placedElements.map(function (elem) { return elem.iri; });
        batch.history.execute(asyncModel_1.requestElementData(this.model, irisToLoad));
        batch.history.execute(asyncModel_1.restoreLinksBetweenElements(this.model));
        batch.store();
        if (placedElements.length > 0) {
            placedElements[placedElements.length - 1].focus();
        }
        this.setSelection(placedElements);
        this.source.trigger('addElements', { elements: placedElements });
    };
    EditorController.prototype.onAddElementsInConnectionMenu = function (elementIris, targetElement, linkType) {
        var _this = this;
        var batch = this.view.model.history.startBatch();
        var elements = elementIris.map(function (iri) { return _this.model.createElement(iri); });
        this.view.performSyncUpdate();
        layout_1.placeElementsAround({
            model: this.model,
            elements: elements,
            targetElement: targetElement,
            prefferedLinksLength: 300,
        }).then(function () {
            _this.source.trigger('addElements', { elements: elements });
        });
        if (linkType && !linkType.visible) {
            batch.history.execute(commands_1.changeLinkTypeVisibility({
                linkType: linkType,
                visible: true,
                showLabel: true,
                preventLoading: true,
            }));
        }
        batch.history.execute(asyncModel_1.requestElementData(this.model, elementIris));
        batch.history.execute(asyncModel_1.restoreLinksBetweenElements(this.model));
        batch.store();
    };
    EditorController.prototype.loadGroupContent = function (element) {
        var _this = this;
        return this.model.loadEmbeddedElements(element.iri).then(function (models) {
            var batch = _this.model.history.startBatch();
            var elementIris = Object.keys(models);
            var elements = elementIris.map(function (key) { return _this.model.createElement(models[key], element.id); });
            batch.discard();
            return Promise.all([
                _this.model.requestElementData(elementIris),
                _this.model.requestLinksOfType(),
            ]).then(function () {
                _this.view.performSyncUpdate();
                layout_1.applyLayout(_this.model, layout_1.forceLayout({
                    model: _this.model,
                    group: element.id,
                }));
                _this.model.triggerChangeGroupContent(element.id);
            });
        });
    };
    EditorController.prototype.createNewEntity = function (_a) {
        var elementModel = _a.elementModel, temporary = _a.temporary;
        var batch = this.model.history.startBatch('Create new entity');
        var element = this.model.createElement(elementModel);
        element.setExpanded(true);
        if (temporary) {
            this.setTemporaryState(authoringState_1.TemporaryState.addElement(this.temporaryState, element.data));
            batch.discard();
        }
        else {
            this.setAuthoringState(authoringState_1.AuthoringState.addElement(this._authoringState, element.data));
            batch.store();
        }
        return element;
    };
    EditorController.prototype.changeEntityData = function (targetIri, newData) {
        var elements = this.model.elements.filter(function (el) { return el.iri === targetIri; });
        if (elements.length === 0) {
            return;
        }
        var oldData = elements[0].data;
        var batch = this.model.history.startBatch('Edit entity');
        var newState = authoringState_1.AuthoringState.changeElement(this._authoringState, oldData, newData);
        // get created authoring event by either old or new IRI (in case of new entities)
        var event = newState.elements.get(targetIri) || newState.elements.get(newData.id);
        this.model.history.execute(commands_1.setElementData(this.model, targetIri, event.after));
        this.setAuthoringState(newState);
        batch.store();
    };
    EditorController.prototype.deleteEntity = function (elementIri) {
        var _this = this;
        var state = this.authoringState;
        var elements = this.model.elements.filter(function (el) { return el.iri === elementIri; });
        if (elements.length === 0) {
            return;
        }
        var batch = this.model.history.startBatch('Delete entity');
        var model = elements[0].data;
        var event = state.elements.get(elementIri);
        // remove new connected links
        var linksToRemove = new Set();
        for (var _i = 0, elements_2 = elements; _i < elements_2.length; _i++) {
            var element = elements_2[_i];
            for (var _a = 0, _b = element.links; _a < _b.length; _a++) {
                var link = _b[_a];
                if (link.data && authoringState_1.AuthoringState.isNewLink(state, link.data)) {
                    linksToRemove.add(link.id);
                }
            }
        }
        linksToRemove.forEach(function (linkId) { return _this.model.removeLink(linkId); });
        if (event) {
            this.discardChange(event);
        }
        this.setAuthoringState(authoringState_1.AuthoringState.deleteElement(state, model));
        batch.store();
    };
    EditorController.prototype.createNewLink = function (_a) {
        var base = _a.link, temporary = _a.temporary;
        var existingLink = this.model.findLink(base.typeId, base.sourceId, base.targetId);
        if (existingLink) {
            throw Error('The link already exists');
        }
        var batch = this.model.history.startBatch('Create new link');
        this.model.createLinks(base.data);
        var links = this.model.links.filter(function (link) { return model_1.sameLink(link.data, base.data); });
        if (links.length > 0) {
            if (temporary) {
                this.setTemporaryState(authoringState_1.TemporaryState.addLink(this.temporaryState, base.data));
                batch.discard();
            }
            else {
                this.setAuthoringState(authoringState_1.AuthoringState.addLink(this._authoringState, base.data));
                batch.store();
            }
        }
        else {
            batch.discard();
        }
        return links.find(function (_a) {
            var sourceId = _a.sourceId, targetId = _a.targetId;
            return sourceId === base.sourceId && targetId === base.targetId;
        });
    };
    EditorController.prototype.changeLink = function (oldData, newData) {
        var _this = this;
        var batch = this.model.history.startBatch('Change link');
        if (model_1.sameLink(oldData, newData)) {
            this.model.history.execute(commands_1.setLinkData(this.model, oldData, newData));
            this.setAuthoringState(authoringState_1.AuthoringState.changeLink(this._authoringState, oldData, newData));
        }
        else {
            var newState = this._authoringState;
            newState = authoringState_1.AuthoringState.deleteLink(newState, oldData);
            newState = authoringState_1.AuthoringState.addLink(newState, newData);
            if (authoringState_1.AuthoringState.isNewLink(this._authoringState, oldData)) {
                this.model.links
                    .filter(function (link) { return model_1.sameLink(link.data, oldData); })
                    .forEach(function (link) { return _this.model.removeLink(link.id); });
            }
            this.model.createLinks(newData);
            this.setAuthoringState(newState);
        }
        batch.store();
    };
    EditorController.prototype.moveLinkSource = function (params) {
        var link = params.link, newSource = params.newSource;
        var batch = this.model.history.startBatch('Move link to another element');
        this.changeLink(link.data, tslib_1.__assign(tslib_1.__assign({}, link.data), { sourceId: newSource.iri }));
        var newLink = this.model.findLink(link.typeId, newSource.id, link.targetId);
        newLink.setVertices(link.vertices);
        batch.store();
        return newLink;
    };
    EditorController.prototype.moveLinkTarget = function (params) {
        var link = params.link, newTarget = params.newTarget;
        var batch = this.model.history.startBatch('Move link to another element');
        this.changeLink(link.data, tslib_1.__assign(tslib_1.__assign({}, link.data), { targetId: newTarget.iri }));
        var newLink = this.model.findLink(link.typeId, link.sourceId, newTarget.id);
        newLink.setVertices(link.vertices);
        batch.store();
        return newLink;
    };
    EditorController.prototype.deleteLink = function (model) {
        var _this = this;
        var state = this.authoringState;
        if (authoringState_1.AuthoringState.isDeletedLink(state, model)) {
            return;
        }
        var batch = this.model.history.startBatch('Delete link');
        var newState = authoringState_1.AuthoringState.deleteLink(state, model);
        if (authoringState_1.AuthoringState.isNewLink(state, model)) {
            this.model.links
                .filter(function (_a) {
                var data = _a.data;
                return model_1.sameLink(data, model);
            })
                .forEach(function (link) { return _this.model.removeLink(link.id); });
        }
        this.setAuthoringState(newState);
        batch.store();
    };
    EditorController.prototype.startEditing = function (params) {
        var target = params.target, mode = params.mode, point = params.point;
        var editLayer = (React.createElement(editLayer_1.EditLayer, { view: this.view, editor: this, metadataApi: this.metadataApi, mode: mode, target: target, point: point }));
        this.view.setPaperWidget({ key: 'editLayer', widget: editLayer, attachment: view_1.WidgetAttachment.OverElements });
    };
    EditorController.prototype.finishEditing = function () {
        this.view.setPaperWidget({ key: 'editLayer', widget: undefined, attachment: view_1.WidgetAttachment.OverElements });
    };
    EditorController.prototype.addNewEntity = function (element) {
        var batch = this.model.history.startBatch('Create new entity');
        this.setAuthoringState(authoringState_1.AuthoringState.addElement(this._authoringState, element));
        batch.store();
    };
    EditorController.prototype.resetTemporaryState = function () {
        var _this = this;
        if (this.temporaryState.elements.size) {
            this.model.elements.forEach(function (element) {
                if (_this.temporaryState.elements.has(element.iri)) {
                    _this.removeTemporaryElement(element);
                }
            });
        }
        if (this.temporaryState.links.size) {
            this.model.links.forEach(function (link) {
                if (_this.temporaryState.links.get(link.data)) {
                    _this.removeTemporaryLink(link);
                }
            });
        }
    };
    EditorController.prototype.removeTemporaryElement = function (element) {
        var batch = this.model.history.startBatch();
        this.model.removeElement(element.id);
        batch.discard();
        this.setTemporaryState(authoringState_1.TemporaryState.deleteElement(this.temporaryState, element.data));
    };
    EditorController.prototype.removeTemporaryLink = function (link) {
        this.model.removeLink(link.id);
        this.setTemporaryState(authoringState_1.TemporaryState.deleteLink(this.temporaryState, link.data));
    };
    EditorController.prototype.discardChange = function (event) {
        var _this = this;
        var newState = authoringState_1.AuthoringState.discard(this._authoringState, event);
        if (newState === this._authoringState) {
            return;
        }
        var batch = this.model.history.startBatch('Discard change');
        if (event.type === authoringState_1.AuthoringKind.ChangeElement) {
            if (event.deleted) {
                /* nothing */
            }
            else if (event.before) {
                this.model.history.execute(commands_1.setElementData(this.model, event.after.id, event.before));
            }
            else {
                this.model.elements
                    .filter(function (el) { return el.iri === event.after.id; })
                    .forEach(function (el) { return _this.model.removeElement(el.id); });
            }
        }
        else if (event.type === authoringState_1.AuthoringKind.ChangeLink) {
            if (event.deleted) {
                /* nothing */
            }
            else if (event.before) {
                this.model.history.execute(commands_1.setLinkData(this.model, event.after, event.before));
            }
            else {
                this.model.links
                    .filter(function (_a) {
                    var data = _a.data;
                    return model_1.sameLink(data, event.after);
                })
                    .forEach(function (link) { return _this.model.removeLink(link.id); });
            }
        }
        this.setAuthoringState(newState);
        batch.store();
    };
    return EditorController;
}());
exports.EditorController = EditorController;
var LoadingWidget = /** @class */ (function (_super) {
    tslib_1.__extends(LoadingWidget, _super);
    function LoadingWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoadingWidget.prototype.render = function () {
        var _a = this.props, spinnerProps = _a.spinnerProps, paperArea = _a.paperArea;
        var areaMetrics = paperArea.getAreaMetrics();
        var paneWidth = areaMetrics.clientWidth;
        var paneHeight = areaMetrics.clientHeight;
        var x = spinnerProps.statusText ? paneWidth / 3 : paneWidth / 2;
        var position = { x: x, y: paneHeight / 2 };
        return (React.createElement("div", { className: 'ontodia-loading-widget' },
            React.createElement("svg", { width: paneWidth, height: paneHeight },
                React.createElement(spinner_1.Spinner, tslib_1.__assign({ position: position }, spinnerProps)))));
    };
    LoadingWidget.Key = 'loadingWidget';
    return LoadingWidget;
}(React.Component));
function placeElements(view, dragged, position) {
    var elements = dragged.map(function (item) { return view.model.createElement(item); });
    view.performSyncUpdate();
    var x = position.x, y = position.y;
    var isFirst = true;
    for (var _i = 0, elements_3 = elements; _i < elements_3.length; _i++) {
        var element = elements_3[_i];
        var _a = geometry_1.boundsOf(element), width = _a.width, height = _a.height;
        if (width === 0) {
            width = 100;
        }
        if (height === 0) {
            height = 50;
        }
        if (isFirst) {
            isFirst = false;
            x -= width / 2;
            y -= height / 2;
        }
        element.setPosition({ x: x, y: y });
        y += height + 20;
    }
    return elements;
}
function createLinkAndChangeDirection(_a) {
    var _b;
    var data = _a.data, originalData = _a.originalData, sourceId = _a.sourceId, targetId = _a.targetId;
    // some of the ids can be totally different because of generating IRI so we use "OR" instead of "AND"
    var directionHasChanged = originalData.sourceId === data.targetId || originalData.targetId === data.sourceId;
    if (directionHasChanged) {
        _b = [targetId, sourceId], sourceId = _b[0], targetId = _b[1];
    }
    return new elements_1.Link({ typeId: data.linkTypeId, sourceId: sourceId, targetId: targetId, data: data });
}
exports.createLinkAndChangeDirection = createLinkAndChangeDirection;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(45);
var elements_1 = __webpack_require__(52);
var events_1 = __webpack_require__(54);
var geometry_1 = __webpack_require__(56);
var draggableHandle_1 = __webpack_require__(114);
var DEFAULT_WIDTH = 300;
var DEFAULT_HEIGHT = 300;
var MIN_WIDTH = 250;
var MIN_HEIGHT = 250;
var MAX_WIDTH = 800;
var MAX_HEIGHT = 800;
var ELEMENT_OFFSET = 40;
var LINK_OFFSET = 20;
var FOCUS_OFFSET = 20;
var CLASS_NAME = 'ontodia-dialog';
var Dialog = /** @class */ (function (_super) {
    tslib_1.__extends(Dialog, _super);
    function Dialog(props) {
        var _this = _super.call(this, props) || this;
        _this.unsubscribeFromTarget = undefined;
        _this.handler = new events_1.EventObserver();
        _this.updateAll = function () { return _this.forceUpdate(); };
        _this.onStartDragging = function (e) {
            _this.preventSelection();
            var size = _this.props.size;
            _this.startSize = { x: _this.state.width || size.width, y: _this.state.height || size.height };
        };
        _this.onDragHandleBottom = function (e, dx, dy) {
            var height = _this.calculateHeight(_this.startSize.y + dy);
            _this.setState({ height: height });
        };
        _this.onDragHandleRight = function (e, dx) {
            var width = _this.calculateWidth(_this.startSize.x + dx);
            _this.setState({ width: width });
        };
        _this.onDragHandleBottomRight = function (e, dx, dy) {
            var width = _this.calculateWidth(_this.startSize.x + dx);
            var height = _this.calculateHeight(_this.startSize.y + dy);
            _this.setState({ width: width, height: height });
        };
        _this.preventSelection = function () {
            var onMouseUp = function () {
                document.body.classList.remove('ontodia--unselectable');
                document.removeEventListener('mouseup', onMouseUp);
            };
            document.addEventListener('mouseup', onMouseUp);
            document.body.classList.add('ontodia--unselectable');
        };
        _this.state = {};
        return _this;
    }
    Dialog.prototype.componentDidMount = function () {
        this.listenToTarget(this.props.target);
        this.focusOn();
    };
    Dialog.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.target !== this.props.target) {
            this.listenToTarget(nextProps.target);
        }
    };
    Dialog.prototype.componentWillUnmount = function () {
        this.listenToTarget(undefined);
    };
    Dialog.prototype.listenToTarget = function (target) {
        var _this = this;
        if (this.unsubscribeFromTarget) {
            this.unsubscribeFromTarget();
            this.unsubscribeFromTarget = undefined;
        }
        if (target) {
            var view = this.props.view;
            if (target instanceof elements_1.Element) {
                this.listenToElement(target);
            }
            else if (target instanceof elements_1.Link) {
                this.listenToLink(target);
            }
            this.handler.listen(view.events, 'changeLanguage', this.updateAll);
            this.unsubscribeFromTarget = function () { _this.handler.stopListening(); };
        }
    };
    Dialog.prototype.listenToElement = function (element) {
        this.handler.listen(element.events, 'changePosition', this.updateAll);
        this.handler.listen(element.events, 'changeSize', this.updateAll);
    };
    Dialog.prototype.listenToLink = function (link) {
        var view = this.props.view;
        var source = view.model.getElement(link.sourceId);
        var target = view.model.getElement(link.targetId);
        this.listenToElement(source);
        this.listenToElement(target);
        this.handler.listen(link.events, 'changeVertices', this.updateAll);
        this.handler.listen(link.events, 'changeLabelBounds', this.updateAll);
    };
    Dialog.prototype.calculatePositionForElement = function (element) {
        var _a = this.props, paperArea = _a.paperArea, size = _a.size;
        var bbox = geometry_1.boundsOf(element);
        var y0 = paperArea.paperToScrollablePaneCoords(bbox.x, bbox.y).y;
        var _b = paperArea.paperToScrollablePaneCoords(bbox.x + bbox.width, bbox.y + bbox.height), x1 = _b.x, y1 = _b.y;
        return {
            x: x1 + ELEMENT_OFFSET,
            y: (y0 + y1) / 2 - (size.height / 2),
        };
    };
    Dialog.prototype.calculatePositionForLink = function (link) {
        var _a = this.props, view = _a.view, paperArea = _a.paperArea;
        var source = view.model.getElement(link.sourceId);
        var target = view.model.getElement(link.targetId);
        if (!source || !target) {
            throw new Error('Source and target are not specified');
        }
        var route = view.getRouting(link.id);
        var verticesDefinedByUser = link.vertices || [];
        var vertices = route ? route.vertices : verticesDefinedByUser;
        var polyline = geometry_1.computePolyline(source, target, vertices);
        var polylineLength = geometry_1.computePolylineLength(polyline);
        var targetPoint = geometry_1.getPointAlongPolyline(polyline, polylineLength / 2);
        var _b = paperArea.paperToScrollablePaneCoords(targetPoint.x, targetPoint.y), x = _b.x, y = _b.y;
        return { y: y + LINK_OFFSET, x: x + LINK_OFFSET };
    };
    Dialog.prototype.calculatePosition = function () {
        var _a = this.props, target = _a.target, paperArea = _a.paperArea, _b = _a.offset, offset = _b === void 0 ? { x: 0, y: 0 } : _b, calculatePosition = _a.calculatePosition;
        if (calculatePosition) {
            var pos = calculatePosition();
            var _c = paperArea.paperToScrollablePaneCoords(pos.x, pos.y), x = _c.x, y = _c.y;
            return { x: x + offset.x, y: y + offset.y };
        }
        if (target instanceof elements_1.Element) {
            return this.calculatePositionForElement(target);
        }
        else if (target instanceof elements_1.Link) {
            return this.calculatePositionForLink(target);
        }
        throw new Error('Unknown target type');
    };
    Dialog.prototype.getViewPortScrollablePoints = function () {
        var paperArea = this.props.paperArea;
        var paperAreaMetrix = paperArea.getAreaMetrics();
        var min = paperArea.clientToScrollablePaneCoords(0, 0);
        var max = paperArea.clientToScrollablePaneCoords(paperAreaMetrix.clientWidth, paperAreaMetrix.clientHeight);
        return { min: min, max: max };
    };
    Dialog.prototype.getDialogScrollablePoints = function () {
        var size = this.props.size;
        var _a = this.calculatePosition(), x = _a.x, y = _a.y;
        var min = {
            x: x - FOCUS_OFFSET,
            y: y - FOCUS_OFFSET,
        };
        var max = {
            x: min.x + size.width + FOCUS_OFFSET * 2,
            y: min.y + size.height + FOCUS_OFFSET * 2,
        };
        return { min: min, max: max };
    };
    Dialog.prototype.focusOn = function () {
        var paperArea = this.props.paperArea;
        var _a = this.getViewPortScrollablePoints(), viewPortMin = _a.min, viewPortMax = _a.max;
        var _b = this.getDialogScrollablePoints(), min = _b.min, max = _b.max;
        var xOffset = 0;
        if (min.x < viewPortMin.x) {
            xOffset = min.x - viewPortMin.x;
        }
        else if (max.x > viewPortMax.x) {
            xOffset = max.x - viewPortMax.x;
        }
        var yOffset = 0;
        if (min.y < viewPortMin.y) {
            yOffset = min.y - viewPortMin.y;
        }
        else if (max.y > viewPortMax.y) {
            yOffset = max.y - viewPortMax.y;
        }
        var curScrollableCenter = {
            x: viewPortMin.x + (viewPortMax.x - viewPortMin.x) / 2,
            y: viewPortMin.y + (viewPortMax.y - viewPortMin.y) / 2,
        };
        var newScrollabalCenter = {
            x: curScrollableCenter.x + xOffset,
            y: curScrollableCenter.y + yOffset,
        };
        var paperCenter = paperArea.scrollablePaneToPaperCoords(newScrollabalCenter.x, newScrollabalCenter.y);
        paperArea.centerTo(paperCenter);
    };
    Dialog.prototype.calculateHeight = function (height) {
        var size = this.props.size;
        var minHeight = Math.min(size.height, MIN_HEIGHT);
        var maxHeight = Math.max(size.height, MAX_HEIGHT);
        return Math.max(minHeight, Math.min(maxHeight, height));
    };
    Dialog.prototype.calculateWidth = function (width) {
        var size = this.props.size;
        var minWidth = Math.min(size.width, MIN_WIDTH);
        var maxWidth = Math.max(size.width, MAX_WIDTH);
        return Math.max(minWidth, Math.min(maxWidth, width));
    };
    Dialog.prototype.render = function () {
        var _this = this;
        var _a = this.props, size = _a.size, caption = _a.caption;
        var _b = this.calculatePosition(), x = _b.x, y = _b.y;
        var width = this.state.width || size.width;
        var height = this.state.height || size.height;
        var style = {
            top: y,
            left: x,
            width: width,
            height: height,
        };
        return (React.createElement("div", { className: CLASS_NAME, style: style },
            React.createElement("button", { className: CLASS_NAME + "__close-button", onClick: function () { return _this.props.onClose(); } }),
            caption ? React.createElement("div", { className: 'ontodia-dialog__caption' }, caption) : null,
            this.props.children,
            React.createElement(draggableHandle_1.DraggableHandle, { className: CLASS_NAME + "__bottom-handle", onBeginDragHandle: this.onStartDragging, onDragHandle: this.onDragHandleBottom }),
            React.createElement(draggableHandle_1.DraggableHandle, { className: CLASS_NAME + "__right-handle", onBeginDragHandle: this.onStartDragging, onDragHandle: this.onDragHandleRight }),
            React.createElement(draggableHandle_1.DraggableHandle, { className: CLASS_NAME + "__bottom-right-handle", onBeginDragHandle: this.onStartDragging, onDragHandle: this.onDragHandleBottomRight })));
    };
    Dialog.defaultProps = {
        size: { width: DEFAULT_WIDTH, height: DEFAULT_HEIGHT },
    };
    return Dialog;
}(React.Component));
exports.Dialog = Dialog;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(45);
var DraggableHandle = /** @class */ (function (_super) {
    tslib_1.__extends(DraggableHandle, _super);
    function DraggableHandle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isHoldingMouse = false;
        _this.onHandleMouseDown = function (e) {
            if (e.target !== e.currentTarget) {
                return;
            }
            if (_this.isHoldingMouse) {
                return;
            }
            var LEFT_BUTTON = 0;
            if (e.button !== LEFT_BUTTON) {
                return;
            }
            _this.isHoldingMouse = true;
            _this.originPageX = e.pageX;
            _this.originPageY = e.pageY;
            document.addEventListener('mousemove', _this.onMouseMove);
            document.addEventListener('mouseup', _this.onMouseUp);
            _this.props.onBeginDragHandle(e);
        };
        _this.onMouseMove = function (e) {
            if (!_this.isHoldingMouse) {
                return;
            }
            e.preventDefault();
            _this.props.onDragHandle(e, e.pageX - _this.originPageX, e.pageY - _this.originPageY);
        };
        _this.onMouseUp = function (e) {
            _this.removeListeners();
            if (_this.props.onEndDragHandle) {
                _this.props.onEndDragHandle(e);
            }
        };
        return _this;
    }
    DraggableHandle.prototype.render = function () {
        // remove custom handlers from `div` props
        // tslint:disable-next-line:no-unused-variable
        var _a = this.props, onBeginDragHandle = _a.onBeginDragHandle, onDragHandle = _a.onDragHandle, onEndDragHandle = _a.onEndDragHandle, props = tslib_1.__rest(_a, ["onBeginDragHandle", "onDragHandle", "onEndDragHandle"]);
        return React.createElement("div", tslib_1.__assign({}, props, { onMouseDown: this.onHandleMouseDown }), this.props.children);
    };
    DraggableHandle.prototype.componentWillUnmount = function () {
        this.removeListeners();
    };
    DraggableHandle.prototype.removeListeners = function () {
        if (this.isHoldingMouse) {
            this.isHoldingMouse = false;
            document.removeEventListener('mousemove', this.onMouseMove);
            document.removeEventListener('mouseup', this.onMouseUp);
        }
    };
    return DraggableHandle;
}(React.Component));
exports.DraggableHandle = DraggableHandle;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(45);
var elements_1 = __webpack_require__(52);
var events_1 = __webpack_require__(54);
var progressBar_1 = __webpack_require__(116);
var listElementView_1 = __webpack_require__(117);
var searchResults_1 = __webpack_require__(118);
var workspaceContext_1 = __webpack_require__(87);
var MAX_LINK_COUNT = 100;
var ALL_RELATED_ELEMENTS_LINK = new elements_1.FatLinkType({
    id: 'allRelatedElements',
    label: [{ value: 'All', language: '' }],
});
var ConnectionsMenu = /** @class */ (function (_super) {
    tslib_1.__extends(ConnectionsMenu, _super);
    function ConnectionsMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handler = new events_1.EventObserver();
        _this.linkTypesListener = new events_1.EventObserver();
        _this.loadingState = progressBar_1.ProgressState.none;
        _this.updateAll = function () { return _this.forceUpdate(); };
        _this.addSelectedElements = function (selectedObjects) {
            var _a = _this.props, onClose = _a.onClose, onAddElements = _a.onAddElements;
            var addedElementsIris = selectedObjects.map(function (item) { return item.model.id; });
            var linkType = _this.linkDataChunk ? _this.linkDataChunk.link : undefined;
            var hasChosenLinkType = _this.linkDataChunk && linkType !== ALL_RELATED_ELEMENTS_LINK;
            onAddElements(addedElementsIris, hasChosenLinkType ? linkType : undefined);
            onClose();
        };
        _this.onExpandLink = function (linkDataChunk) {
            var alreadyLoaded = (_this.objects &&
                _this.linkDataChunk &&
                _this.linkDataChunk.link === linkDataChunk.link &&
                _this.linkDataChunk.direction === linkDataChunk.direction);
            if (!alreadyLoaded) {
                _this.loadObjects(linkDataChunk);
            }
            _this.updateAll();
            _this.context.ontodiaWorkspace.triggerWorkspaceEvent(workspaceContext_1.WorkspaceEventKey.connectionsExpandLink);
        };
        _this.onMoveToFilter = function (linkDataChunk) {
            var _a = _this.props, view = _a.view, target = _a.target;
            var link = linkDataChunk.link, direction = linkDataChunk.direction;
            if (link === ALL_RELATED_ELEMENTS_LINK) {
                target.addToFilter();
            }
            else {
                var selectedElement = view.model.getElement(target.id);
                selectedElement.addToFilter(link, direction);
            }
        };
        return _this;
    }
    ConnectionsMenu.prototype.componentDidMount = function () {
        var view = this.props.view;
        this.handler.listen(view.events, 'changeLanguage', this.updateAll);
        this.loadLinks();
    };
    ConnectionsMenu.prototype.componentWillUnmount = function () {
        this.handler.stopListening();
        this.linkTypesListener.stopListening();
    };
    ConnectionsMenu.prototype.resubscribeOnLinkTypeEvents = function (linkTypesOfElement) {
        this.linkTypesListener.stopListening();
        for (var _i = 0, linkTypesOfElement_1 = linkTypesOfElement; _i < linkTypesOfElement_1.length; _i++) {
            var linkType = linkTypesOfElement_1[_i];
            this.linkTypesListener.listen(linkType.events, 'changeLabel', this.updateAll);
            this.linkTypesListener.listen(linkType.events, 'changeVisibility', this.updateAll);
        }
    };
    ConnectionsMenu.prototype.loadLinks = function () {
        var _this = this;
        var _a = this.props, view = _a.view, editor = _a.editor, target = _a.target;
        this.loadingState = progressBar_1.ProgressState.loading;
        this.links = [];
        this.countMap = {};
        editor.model.dataProvider.linkTypesOf({ elementId: target.iri })
            .then(function (linkTypes) {
            _this.loadingState = progressBar_1.ProgressState.completed;
            var countMap = {};
            var links = [];
            for (var _i = 0, linkTypes_1 = linkTypes; _i < linkTypes_1.length; _i++) {
                var _a = linkTypes_1[_i], linkTypeId = _a.id, inCount = _a.inCount, outCount = _a.outCount;
                countMap[linkTypeId] = { inCount: inCount, outCount: outCount };
                links.push(view.model.createLinkType(linkTypeId));
            }
            countMap[ALL_RELATED_ELEMENTS_LINK.id] = Object.keys(countMap)
                .map(function (key) { return countMap[key]; })
                .reduce(function (a, b) {
                return { inCount: a.inCount + b.inCount, outCount: a.outCount + b.outCount };
            }, { inCount: 0, outCount: 0 });
            _this.countMap = countMap;
            _this.links = links;
            _this.resubscribeOnLinkTypeEvents(_this.links);
            _this.updateAll();
            _this.context.ontodiaWorkspace.triggerWorkspaceEvent(workspaceContext_1.WorkspaceEventKey.connectionsLoadLinks);
        })
            .catch(function (err) {
            // tslint:disable-next-line:no-console
            console.error(err);
            _this.loadingState = progressBar_1.ProgressState.error;
            _this.updateAll();
        });
        this.updateAll();
    };
    ConnectionsMenu.prototype.loadObjects = function (linkDataChunk) {
        var _this = this;
        var _a = this.props, view = _a.view, editor = _a.editor, target = _a.target;
        var link = linkDataChunk.link, direction = linkDataChunk.direction;
        var offset = (linkDataChunk.offset || 0);
        this.loadingState = progressBar_1.ProgressState.loading;
        this.linkDataChunk = linkDataChunk;
        this.objects = [];
        editor.model.dataProvider.linkElements({
            elementId: target.iri,
            linkId: (link === ALL_RELATED_ELEMENTS_LINK ? undefined : link.id),
            limit: offset + MAX_LINK_COUNT,
            offset: offset,
            direction: direction,
        }).then(function (elements) {
            _this.loadingState = progressBar_1.ProgressState.completed;
            _this.objects = Object.keys(elements).map(function (iri) { return ({
                model: elements[iri],
                presentOnDiagram: view.model.elements.findIndex(function (element) { return element.iri === iri && element.group === undefined; }) >= 0,
            }); });
            _this.updateAll();
            _this.context.ontodiaWorkspace.triggerWorkspaceEvent(workspaceContext_1.WorkspaceEventKey.connectionsLoadElements);
        }).catch(function (err) {
            // tslint:disable-next-line:no-console
            console.error(err);
            _this.loadingState = progressBar_1.ProgressState.error;
            _this.updateAll();
        });
    };
    ConnectionsMenu.prototype.render = function () {
        var connectionsData = {
            links: this.links || [],
            countMap: this.countMap || {},
        };
        var objectsData = null;
        if (this.linkDataChunk && this.objects) {
            objectsData = {
                linkDataChunk: this.linkDataChunk,
                objects: this.objects,
            };
        }
        var _a = this.props, view = _a.view, target = _a.target, suggestProperties = _a.suggestProperties;
        return (React.createElement(ConnectionsMenuMarkup, { target: target, connectionsData: connectionsData, objectsData: objectsData, state: this.loadingState, view: view, onExpandLink: this.onExpandLink, onPressAddSelected: this.addSelectedElements, onMoveToFilter: this.onMoveToFilter, propertySuggestionCall: suggestProperties }));
    };
    ConnectionsMenu.contextTypes = workspaceContext_1.WorkspaceContextTypes;
    return ConnectionsMenu;
}(React.Component));
exports.ConnectionsMenu = ConnectionsMenu;
var ConnectionsMenuMarkup = /** @class */ (function (_super) {
    tslib_1.__extends(ConnectionsMenuMarkup, _super);
    function ConnectionsMenuMarkup(props) {
        var _this = _super.call(this, props) || this;
        _this.onChangeFilter = function (e) {
            var filterKey = e.currentTarget.value;
            _this.setState({ filterKey: filterKey });
        };
        _this.getTitle = function () {
            if (_this.props.objectsData && _this.state.panel === 'objects') {
                return 'Objects';
            }
            else if (_this.props.connectionsData && _this.state.panel === 'connections') {
                return 'Connections';
            }
            return 'Error';
        };
        _this.onExpandLink = function (linkDataChunk) {
            _this.setState({ filterKey: '', panel: 'objects' });
            _this.props.onExpandLink(linkDataChunk);
        };
        _this.onCollapseLink = function () {
            _this.setState({ filterKey: '', panel: 'connections' });
        };
        _this.getBreadCrumbs = function () {
            if (_this.props.objectsData && _this.state.panel === 'objects') {
                var _a = _this.props.objectsData.linkDataChunk, link = _a.link, direction = _a.direction;
                var localizedText = _this.props.view.formatLabel(link.label, link.id);
                return React.createElement("span", { className: 'ontodia-connections-menu_bread-crumbs' },
                    React.createElement("a", { className: 'ontodia-connections-menu__link', onClick: _this.onCollapseLink }, "Connections"),
                    '\u00A0' + '/' + '\u00A0',
                    localizedText,
                    " ",
                    direction ? "(" + direction + ")" : null);
            }
            else {
                return null;
            }
        };
        _this.getBody = function () {
            if (_this.props.state === 'error') {
                return React.createElement("label", { className: 'ontodia-label ontodia-connections-menu__error' }, "Error");
            }
            else if (_this.props.objectsData && _this.state.panel === 'objects') {
                return React.createElement(ObjectsPanel, { data: _this.props.objectsData, onMoveToFilter: _this.props.onMoveToFilter, view: _this.props.view, filterKey: _this.state.filterKey, loading: _this.props.state === progressBar_1.ProgressState.loading, onPressAddSelected: _this.props.onPressAddSelected });
            }
            else if (_this.props.connectionsData && _this.state.panel === 'connections') {
                if (_this.props.state === progressBar_1.ProgressState.loading) {
                    return React.createElement("label", { className: 'ontodia-label ontodia-connections-menu__loading' }, "Loading...");
                }
                return React.createElement(ConnectionsList, { id: _this.props.target.id, data: _this.props.connectionsData, view: _this.props.view, filterKey: _this.state.filterKey, onExpandLink: _this.onExpandLink, onMoveToFilter: _this.props.onMoveToFilter, propertySuggestionCall: _this.props.propertySuggestionCall, sortMode: _this.state.sortMode });
            }
            else {
                return React.createElement("div", null);
            }
        };
        _this.onSortChange = function (e) {
            var value = e.target.value;
            if (_this.state.sortMode === value) {
                return;
            }
            _this.setState({ sortMode: value });
        };
        _this.renderSortSwitch = function (id, icon, title) {
            return (React.createElement("div", null,
                React.createElement("input", { type: 'radio', name: 'sort', id: id, value: id, className: 'ontodia-connections-menu__sort-switch', onChange: _this.onSortChange, checked: _this.state.sortMode === id }),
                React.createElement("label", { htmlFor: id, className: 'ontodia-connections-menu__sort-switch-label', title: title },
                    React.createElement("i", { className: "fa " + icon }))));
        };
        _this.renderSortSwitches = function () {
            if (_this.state.panel !== 'connections' || !_this.props.propertySuggestionCall) {
                return null;
            }
            return (React.createElement("div", { className: 'ontodia-connections-menu_search-line-sort-switches' },
                _this.renderSortSwitch('alphabet', 'fa-sort-alpha-asc', 'Sort alphabetically'),
                _this.renderSortSwitch('smart', 'fa-lightbulb-o', 'Smart sort')));
        };
        _this.state = {
            filterKey: '',
            panel: 'connections',
            sortMode: 'alphabet',
        };
        return _this;
    }
    ConnectionsMenuMarkup.prototype.render = function () {
        return (React.createElement("div", { className: 'ontodia-connections-menu' },
            React.createElement("label", { className: 'ontodia-label ontodia-connections-menu__title-label' }, this.getTitle()),
            this.getBreadCrumbs(),
            React.createElement("div", { className: 'ontodia-connections-menu_search-line' },
                React.createElement("input", { type: 'text', className: 'search-input ontodia-form-control ontodia-connections-menu__search-line-input', value: this.state.filterKey, onChange: this.onChangeFilter, placeholder: 'Search for...' }),
                this.renderSortSwitches()),
            React.createElement(progressBar_1.ProgressBar, { state: this.props.state, height: 10 }),
            this.getBody()));
    };
    return ConnectionsMenuMarkup;
}(React.Component));
var ConnectionsList = /** @class */ (function (_super) {
    tslib_1.__extends(ConnectionsList, _super);
    function ConnectionsList(props) {
        var _this = _super.call(this, props) || this;
        _this.updateScores = function (props) {
            if (props.propertySuggestionCall && (props.filterKey || props.sortMode === 'smart')) {
                var id = props.id, data = props.data, view = props.view, filterKey = props.filterKey;
                var lang = view.getLanguage();
                var token = filterKey.trim();
                var properties = data.links.map(function (l) { return l.id; });
                props.propertySuggestionCall({ elementId: id, token: token, properties: properties, lang: lang }).then(function (scores) {
                    return _this.setState({ scores: scores });
                });
            }
        };
        _this.compareLinks = function (a, b) {
            var view = _this.props.view;
            var aText = view.formatLabel(a.label, a.id);
            var bText = view.formatLabel(b.label, b.id);
            return aText.localeCompare(bText);
        };
        _this.compareLinksByWeight = function (a, b) {
            var view = _this.props.view;
            var aText = view.formatLabel(a.label, a.id);
            var bText = view.formatLabel(b.label, b.id);
            var aWeight = _this.state.scores[a.id] ? _this.state.scores[a.id].score : 0;
            var bWeight = _this.state.scores[b.id] ? _this.state.scores[b.id].score : 0;
            return (aWeight > bWeight ? -1 :
                aWeight < bWeight ? 1 :
                    aText.localeCompare(bText));
        };
        _this.getLinks = function () {
            var _a = _this.props, view = _a.view, data = _a.data, filterKey = _a.filterKey;
            return (data.links || []).filter(function (link) {
                var text = view.formatLabel(link.label, link.id).toLowerCase();
                return !filterKey || text.indexOf(filterKey.toLowerCase()) >= 0;
            })
                .sort(_this.compareLinks);
        };
        _this.getProbableLinks = function () {
            var isSmartMode = _this.isSmartMode();
            return (_this.props.data.links || []).filter(function (link) {
                return _this.state.scores[link.id] && (_this.state.scores[link.id].score > 0 || isSmartMode);
            }).sort(_this.compareLinksByWeight);
        };
        _this.getViews = function (links, notSure) {
            var view = _this.props.view;
            var countMap = _this.props.data.countMap || {};
            var views = [];
            var addView = function (link, direction) {
                var count = direction === 'in'
                    ? countMap[link.id].inCount
                    : countMap[link.id].outCount;
                if (count === 0) {
                    return;
                }
                var postfix = notSure ? '-probable' : '';
                views.push(React.createElement(LinkInPopupMenu, { key: direction + "-" + link.id + "-" + postfix, link: link, onExpandLink: _this.props.onExpandLink, view: view, count: count, direction: direction, filterKey: notSure ? '' : _this.props.filterKey, onMoveToFilter: _this.props.onMoveToFilter, probability: (_this.state.scores[link.id] && notSure ? _this.state.scores[link.id].score : 0) }));
            };
            for (var _i = 0, links_1 = links; _i < links_1.length; _i++) {
                var link = links_1[_i];
                addView(link, 'in');
                addView(link, 'out');
            }
            return views;
        };
        _this.state = { scores: {} };
        _this.updateScores(props);
        return _this;
    }
    ConnectionsList.prototype.componentWillReceiveProps = function (newProps) {
        this.updateScores(newProps);
    };
    ConnectionsList.prototype.isSmartMode = function () {
        return this.props.sortMode === 'smart' && !this.props.filterKey;
    };
    ConnectionsList.prototype.render = function () {
        var view = this.props.view;
        var isSmartMode = this.isSmartMode();
        var links = isSmartMode ? [] : this.getLinks();
        var probableLinks = this.getProbableLinks().filter(function (link) { return links.indexOf(link) === -1; });
        var views = this.getViews(links);
        var probableViews = this.getViews(probableLinks, true);
        var viewList;
        if (views.length === 0 && probableViews.length === 0) {
            viewList = React.createElement("label", { className: 'ontodia-label ontodia-connections-menu_links-list__empty' }, "List empty");
        }
        else {
            viewList = views;
            if (views.length > 1 || (isSmartMode && probableViews.length > 1)) {
                var countMap = this.props.data.countMap || {};
                var allRelatedElements = countMap[ALL_RELATED_ELEMENTS_LINK.id];
                viewList = [
                    React.createElement(LinkInPopupMenu, { key: ALL_RELATED_ELEMENTS_LINK.id, link: ALL_RELATED_ELEMENTS_LINK, onExpandLink: this.props.onExpandLink, view: view, count: allRelatedElements.inCount + allRelatedElements.outCount, onMoveToFilter: this.props.onMoveToFilter }),
                    React.createElement("hr", { key: 'ontodia-hr-line', className: 'ontodia-connections-menu_links-list__hr' }),
                ].concat(viewList);
            }
        }
        var probablePart = null;
        if (probableViews.length !== 0) {
            probablePart = [
                isSmartMode ? null : (React.createElement("li", { key: 'probable-links' },
                    React.createElement("span", { className: 'ontodia-label' }, "Probably, you're looking for.."))),
                probableViews,
            ];
        }
        return React.createElement("ul", { className: 'ontodia-connections-menu_links-list '
                + (views.length === 0 && probableViews.length === 0 ? 'ocm_links-list-empty' : '') },
            viewList,
            probablePart);
    };
    return ConnectionsList;
}(React.Component));
var LinkInPopupMenu = /** @class */ (function (_super) {
    tslib_1.__extends(LinkInPopupMenu, _super);
    function LinkInPopupMenu(props) {
        var _this = _super.call(this, props) || this;
        _this.onExpandLink = function (expectedCount, direction) {
            _this.props.onExpandLink({
                link: _this.props.link,
                direction: direction,
                expectedCount: expectedCount,
            });
        };
        _this.onMoveToFilter = function (evt) {
            evt.stopPropagation();
            _this.props.onMoveToFilter({
                link: _this.props.link,
                direction: _this.props.direction,
                expectedCount: _this.props.count,
            });
        };
        return _this;
    }
    LinkInPopupMenu.prototype.render = function () {
        var _this = this;
        var _a = this.props, view = _a.view, link = _a.link;
        var fullText = view.formatLabel(link.label, link.id);
        var probability = Math.round(this.props.probability * 100);
        var textLine = listElementView_1.highlightSubstring(fullText + (probability > 0 ? ' (' + probability + '%)' : ''), this.props.filterKey);
        var directionName = this.props.direction === 'in' ? 'source' :
            this.props.direction === 'out' ? 'target' :
                'all connected';
        return (React.createElement("li", { "data-linktypeid": this.props.link.id, className: 'link-in-popup-menu', title: directionName + " of \"" + fullText + "\" " + view.formatIri(link.id), onClick: function () { return _this.onExpandLink(_this.props.count, _this.props.direction); } },
            this.props.direction === 'in' || this.props.direction === 'out' ?
                React.createElement("div", { className: 'link-in-popup-menu_direction' },
                    this.props.direction === 'in' && React.createElement("div", { className: 'link-in-popup-menu_direction__in-direction' }),
                    this.props.direction === 'out' && React.createElement("div", { className: 'link-in-popup-menu_direction__out-direction' }))
                : null,
            React.createElement("div", { className: 'link-in-popup-menu__link-title' }, textLine),
            React.createElement("span", { className: 'ontodia-badge link-in-popup-menu__count' }, this.props.count <= MAX_LINK_COUNT ? this.props.count : '100+'),
            React.createElement("div", { className: 'link-in-popup-menu__filter-button', onClick: this.onMoveToFilter, title: 'Set as filter in the Instances panel' }),
            React.createElement("div", { className: 'link-in-popup-menu__navigate-button', title: "Navigate to " + directionName + " \"" + fullText + "\" elements" })));
    };
    return LinkInPopupMenu;
}(React.Component));
var ObjectsPanel = /** @class */ (function (_super) {
    tslib_1.__extends(ObjectsPanel, _super);
    function ObjectsPanel(props) {
        var _this = _super.call(this, props) || this;
        _this.onSelectAll = function () {
            var objects = _this.props.data.objects;
            if (objects.length === 0) {
                return;
            }
            var allSelected = allNonPresentedAreSelected(objects, _this.state.selection);
            var newSelection = allSelected ? new Set() : selectNonPresented(_this.props.data.objects);
            _this.updateSelection(newSelection);
        };
        _this.updateSelection = function (newSelection) {
            _this.setState({ selection: newSelection });
        };
        _this.counter = function (activeObjCount) {
            var countString = activeObjCount + "\u00A0of\u00A0" + _this.props.data.objects.length;
            var wrongNodes = Math.min(MAX_LINK_COUNT, _this.props.data.linkDataChunk.expectedCount) - _this.props.data.objects.length;
            var wrongNodesString = Math.abs(wrongNodes) > MAX_LINK_COUNT ?
                MAX_LINK_COUNT + "+" : Math.abs(wrongNodes).toString();
            var wrongNodesCount = wrongNodes === 0 ? '' : (wrongNodes < 0 ?
                "\u00A0(" + wrongNodesString + ")" : "\u00A0(" + wrongNodesString + ")");
            var wrongNodesTitle = wrongNodes === 0 ? '' : (wrongNodes > 0 ? 'Unavailable nodes' : 'Extra nodes');
            return React.createElement("div", { className: 'ontodia-label ontodia-connections-menu_objects-panel_bottom-panel__count-label' },
                React.createElement("span", null, countString),
                React.createElement("span", { className: 'ontodia-connections-menu_objects-panel_bottom-panel__extra-elements', title: wrongNodesTitle }, wrongNodesCount));
        };
        _this.state = { selection: new Set() };
        return _this;
    }
    ObjectsPanel.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.props.data.objects.length < nextProps.data.objects.length) {
            this.setState({ selection: new Set() });
        }
    };
    ObjectsPanel.prototype.getFilteredObjects = function () {
        var _this = this;
        if (!this.props.filterKey) {
            return this.props.data.objects;
        }
        var filterKey = this.props.filterKey.toLowerCase();
        return this.props.data.objects.filter(function (element) {
            var text = _this.props.view.formatLabel(element.model.label.values, element.model.id).toLowerCase();
            return text && text.indexOf(filterKey) >= 0;
        });
    };
    ObjectsPanel.prototype.getItems = function (list) {
        var added = {};
        var result = [];
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var obj = list_1[_i];
            if (added[obj.model.id]) {
                continue;
            }
            added[obj.model.id] = true;
            result.push(obj.model);
        }
        return result;
    };
    ObjectsPanel.prototype.render = function () {
        var _this = this;
        var _a = this.props, onPressAddSelected = _a.onPressAddSelected, filterKey = _a.filterKey;
        var selection = this.state.selection;
        var objects = this.getFilteredObjects();
        var isAllSelected = allNonPresentedAreSelected(objects, selection);
        var nonPresented = objects.filter(function (el) { return !el.presentOnDiagram; });
        var active = nonPresented.filter(function (el) { return selection.has(el.model.id); });
        return React.createElement("div", { className: 'ontodia-connections-menu_objects-panel' },
            React.createElement("div", { className: 'ontodia-connections-menu_objects-panel__select-all' },
                React.createElement("label", null,
                    React.createElement("input", { type: 'checkbox', checked: isAllSelected && nonPresented.length > 0, onChange: this.onSelectAll, disabled: nonPresented.length === 0 }),
                    "Select All")),
            (this.props.loading ?
                React.createElement("label", { className: 'ontodia-label ontodia-connections-menu__loading-objects' }, "Loading...") :
                objects.length === 0 ?
                    React.createElement("label", { className: 'ontodia-label ontodia-connections-menu__loading-objects' }, "No available nodes") :
                    React.createElement("div", { className: 'ontodia-connections-menu_objects-panel_objects-list' },
                        React.createElement(searchResults_1.SearchResults, { view: this.props.view, items: this.getItems(objects), selection: this.state.selection, onSelectionChanged: this.updateSelection, highlightText: filterKey }),
                        this.props.data.linkDataChunk.expectedCount > MAX_LINK_COUNT ? (React.createElement("div", { className: 'ontodia-connections-menu__move-to-filter', onClick: function () { return _this.props.onMoveToFilter(_this.props.data.linkDataChunk); } }, "The list was truncated, for more data click here to use the filter panel")) : null)),
            React.createElement("div", { className: 'ontodia-connections-menu_objects-panel_bottom-panel' },
                this.counter(active.length),
                React.createElement("button", { className: 'ontodia-btn ontodia-btn-primary pull-right ' +
                        'ontodia-connections-menu_objects-panel_bottom-panel__add-button', disabled: this.props.loading || nonPresented.length === 0, onClick: function () { return onPressAddSelected(active.length > 0 ? active : nonPresented); } }, active.length > 0 ? 'Add selected' : 'Add all')));
    };
    return ObjectsPanel;
}(React.Component));
function selectNonPresented(objects) {
    var selection = new Set();
    for (var _i = 0, objects_1 = objects; _i < objects_1.length; _i++) {
        var object = objects_1[_i];
        if (object.presentOnDiagram) {
            continue;
        }
        selection.add(object.model.id);
    }
    return selection;
}
function allNonPresentedAreSelected(objects, selection) {
    var allSelected = true;
    for (var _i = 0, objects_2 = objects; _i < objects_2.length; _i++) {
        var object = objects_2[_i];
        if (object.presentOnDiagram) {
            continue;
        }
        allSelected = allSelected && selection.has(object.model.id);
    }
    return allSelected;
}


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(45);
var ProgressState;
(function (ProgressState) {
    ProgressState["none"] = "none";
    ProgressState["loading"] = "loading";
    ProgressState["error"] = "error";
    ProgressState["completed"] = "completed";
})(ProgressState = exports.ProgressState || (exports.ProgressState = {}));
var CLASS_NAME = 'ontodia-progress-bar';
var ProgressBar = /** @class */ (function (_super) {
    tslib_1.__extends(ProgressBar, _super);
    function ProgressBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProgressBar.prototype.render = function () {
        var _a = this.props, state = _a.state, _b = _a.percent, percent = _b === void 0 ? 100 : _b, _c = _a.height, height = _c === void 0 ? 20 : _c;
        var className = CLASS_NAME + " " + CLASS_NAME + "--" + state;
        var showBar = state === ProgressState.loading || state === ProgressState.error;
        return (React.createElement("div", { className: className, style: { height: showBar ? height : 0 } },
            React.createElement("div", { className: CLASS_NAME + "__bar", role: 'progressbar', style: { width: percent + "%" }, "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": percent })));
    };
    return ProgressBar;
}(React.Component));
exports.ProgressBar = ProgressBar;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(45);
var d3_color_1 = __webpack_require__(59);
var CLASS_NAME = 'ontodia-list-element-view';
var ListElementView = /** @class */ (function (_super) {
    tslib_1.__extends(ListElementView, _super);
    function ListElementView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onClick = function (event) {
            var _a = _this.props, disabled = _a.disabled, model = _a.model, onClick = _a.onClick;
            if (!disabled && onClick) {
                event.persist();
                onClick(event, model);
            }
        };
        return _this;
    }
    ListElementView.prototype.render = function () {
        var _a = this.props, className = _a.className, view = _a.view, model = _a.model, highlightText = _a.highlightText, disabled = _a.disabled, selected = _a.selected, onDragStart = _a.onDragStart;
        var _b = view.getTypeStyle(model.types).color, h = _b.h, c = _b.c, l = _b.l;
        var frontColor = (selected && !disabled) ? d3_color_1.hcl(h, c, l * 1.2) : d3_color_1.hcl('white');
        var classNames = "" + CLASS_NAME;
        classNames += disabled ? " " + CLASS_NAME + "--disabled" : '';
        classNames += className ? " " + className : '';
        var localizedText = view.formatLabel(model.label.values, model.id);
        var classesString = model.types.length > 0 ? "\nClasses: " + view.getElementTypeString(model) : '';
        return React.createElement("li", { className: classNames, draggable: !disabled && Boolean(onDragStart), title: localizedText + " " + view.formatIri(model.id) + classesString, style: { background: d3_color_1.hcl(h, c, l) }, onClick: this.onClick, onDragStart: onDragStart },
            React.createElement("div", { className: CLASS_NAME + "__label", style: { background: frontColor } }, highlightSubstring(localizedText, highlightText)));
    };
    return ListElementView;
}(React.Component));
exports.ListElementView = ListElementView;
function startDragElements(e, iris) {
    try {
        e.dataTransfer.setData('application/x-ontodia-elements', JSON.stringify(iris));
    }
    catch (ex) { // IE fix
        e.dataTransfer.setData('text', JSON.stringify(iris));
    }
    return false;
}
exports.startDragElements = startDragElements;
var DEFAULT_HIGHLIGHT_PROPS = {
    className: "ontodia-text-highlight"
};
function highlightSubstring(text, substring, highlightProps) {
    if (highlightProps === void 0) { highlightProps = DEFAULT_HIGHLIGHT_PROPS; }
    if (!substring) {
        return React.createElement("span", null, text);
    }
    var start = text.toLowerCase().indexOf(substring.toLowerCase());
    if (start < 0) {
        return React.createElement("span", null, text);
    }
    var end = start + substring.length;
    var before = text.substring(0, start);
    var highlighted = text.substring(start, end);
    var after = text.substring(end);
    return React.createElement("span", null,
        before,
        React.createElement("span", tslib_1.__assign({}, highlightProps), highlighted),
        after);
}
exports.highlightSubstring = highlightSubstring;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(45);
var collections_1 = __webpack_require__(55);
var async_1 = __webpack_require__(60);
var events_1 = __webpack_require__(54);
var listElementView_1 = __webpack_require__(117);
var CLASS_NAME = 'ontodia-search-results';
var SearchResults = /** @class */ (function (_super) {
    tslib_1.__extends(SearchResults, _super);
    function SearchResults(props) {
        var _this = _super.call(this, props) || this;
        _this.listener = new events_1.EventObserver();
        _this.delayedChangeCells = new async_1.Debouncer();
        _this.startSelection = 0;
        _this.endSelection = 0;
        _this.onRootMount = function (root) {
            _this.root = root;
        };
        _this.renderResultItem = function (model) {
            var useDragAndDrop = _this.props.useDragAndDrop;
            var canBeSelected = _this.canBeSelected(model);
            return (React.createElement(listElementView_1.ListElementView, { key: model.id, model: model, view: _this.props.view, highlightText: _this.props.highlightText, disabled: !canBeSelected, selected: _this.props.selection.has(model.id), onClick: canBeSelected ? _this.onItemClick : undefined, onDragStart: useDragAndDrop ? function (e) {
                    var selection = _this.props.selection;
                    var iris = [];
                    selection.forEach(function (iri) { return iris.push(iri); });
                    if (!selection.has(model.id)) {
                        iris.push(model.id);
                    }
                    return listElementView_1.startDragElements(e, iris);
                } : undefined }));
        };
        _this.onChangeCells = function () {
            var _a = _this.props, items = _a.items, selection = _a.selection;
            if (selection.size === 0) {
                if (items && items.length > 0) {
                    // redraw "already on diagram" state
                    _this.forceUpdate();
                }
            }
            else {
                var newSelection = collections_1.cloneSet(selection);
                for (var _i = 0, _b = _this.props.view.model.elements; _i < _b.length; _i++) {
                    var element = _b[_i];
                    if (element.group === undefined && selection.has(element.iri)) {
                        newSelection.delete(element.iri);
                    }
                }
                _this.updateSelection(newSelection);
            }
        };
        _this.addKeyListener = function () {
            document.addEventListener('keydown', _this.onKeyUp);
        };
        _this.removeKeyListener = function () {
            document.removeEventListener('keydown', _this.onKeyUp);
        };
        _this.onKeyUp = function (event) {
            var items = _this.props.items;
            var isPressedUp = event.keyCode === 38 || event.which === 38;
            var isPressDown = event.keyCode === 40 || event.which === 40;
            if (isPressedUp || isPressDown) {
                if (event.shiftKey) { // select range
                    if (isPressedUp) {
                        _this.endSelection = _this.getNextIndex(_this.endSelection, 0 /* Up */);
                    }
                    else if (isPressDown) {
                        _this.endSelection = _this.getNextIndex(_this.endSelection, 1 /* Down */);
                    }
                    var startIndex = Math.min(_this.startSelection, _this.endSelection);
                    var finishIndex = Math.max(_this.startSelection, _this.endSelection);
                    var selection = _this.selectRange(startIndex, finishIndex);
                    _this.updateSelection(selection);
                    _this.focusOn(_this.endSelection);
                }
                else { // change focus
                    var startIndex = Math.min(_this.startSelection, _this.endSelection);
                    var finishIndex = Math.max(_this.startSelection, _this.endSelection);
                    if (isPressedUp) {
                        _this.startSelection = _this.getNextIndex(startIndex, 0 /* Up */);
                    }
                    else if (isPressDown) {
                        _this.startSelection = _this.getNextIndex(finishIndex, 1 /* Down */);
                    }
                    _this.endSelection = _this.startSelection;
                    var focusElement = items[_this.startSelection];
                    var newSelection = new Set();
                    newSelection.add(focusElement.id);
                    _this.updateSelection(newSelection);
                    _this.focusOn(_this.startSelection);
                }
            }
            event.preventDefault();
        };
        _this.onItemClick = function (event, model) {
            event.preventDefault();
            var _a = _this.props, items = _a.items, selection = _a.selection, onSelectionChanged = _a.onSelectionChanged;
            var previouslySelected = selection.has(model.id);
            var modelIndex = items.indexOf(model);
            var newSelection;
            if (event.shiftKey && _this.startSelection !== -1) { // select range
                var start = Math.min(_this.startSelection, modelIndex);
                var end = Math.max(_this.startSelection, modelIndex);
                newSelection = _this.selectRange(start, end);
            }
            else {
                _this.endSelection = _this.startSelection = modelIndex;
                var ctrlKey = event.ctrlKey || event.metaKey;
                if (ctrlKey) { // select/deselect
                    newSelection = collections_1.cloneSet(selection);
                    if (selection.has(model.id)) {
                        newSelection.delete(model.id);
                    }
                    else {
                        newSelection.add(model.id);
                    }
                }
                else { // single click
                    newSelection = new Set();
                    newSelection.add(model.id);
                }
            }
            onSelectionChanged(newSelection);
        };
        _this.state = {
            selection: props.selection || {},
        };
        return _this;
    }
    SearchResults.prototype.render = function () {
        var items = this.props.items || [];
        return React.createElement("ul", { className: CLASS_NAME, ref: this.onRootMount, tabIndex: -1, onFocus: this.addKeyListener, onBlur: this.removeKeyListener }, items.map(this.renderResultItem));
    };
    SearchResults.prototype.componentDidMount = function () {
        var _this = this;
        this.listener.listen(this.props.view.model.events, 'changeCells', function () {
            _this.delayedChangeCells.call(_this.onChangeCells);
        });
    };
    SearchResults.prototype.componentWillReceiveProps = function (props) {
        this.setState({ selection: props.selection || {} });
    };
    SearchResults.prototype.componentWillUnmount = function () {
        this.removeKeyListener();
        this.listener.stopListening();
        this.delayedChangeCells.dispose();
    };
    SearchResults.prototype.updateSelection = function (selection) {
        var onSelectionChanged = this.props.onSelectionChanged;
        onSelectionChanged(selection);
    };
    SearchResults.prototype.selectRange = function (start, end) {
        var items = this.props.items;
        var selection = new Set();
        for (var i = start; i <= end; i++) {
            var selectedModel = items[i];
            if (this.canBeSelected(selectedModel)) {
                selection.add(selectedModel.id);
            }
        }
        return selection;
    };
    SearchResults.prototype.getNextIndex = function (startIndex, direction) {
        var items = this.props.items;
        if (items.length === 0) {
            return startIndex;
        }
        var indexDelta = direction === 0 /* Up */ ? -1 : 1;
        for (var step = 1; step < items.length; step++) {
            var nextIndex = startIndex + step * indexDelta;
            if (nextIndex < 0) {
                nextIndex += items.length;
            }
            if (nextIndex >= items.length) {
                nextIndex -= items.length;
            }
            if (this.canBeSelected(items[nextIndex])) {
                return nextIndex;
            }
        }
        return startIndex;
    };
    SearchResults.prototype.canBeSelected = function (model) {
        var alreadyOnDiagram = this.props.view.model.elements.findIndex(function (element) { return element.iri === model.id && element.group === undefined; }) >= 0;
        return !this.props.useDragAndDrop || !alreadyOnDiagram;
    };
    SearchResults.prototype.focusOn = function (index) {
        var scrollableContainer = this.root.parentElement;
        var containerBounds = scrollableContainer.getBoundingClientRect();
        var item = this.root.children.item(index);
        var itemBounds = item.getBoundingClientRect();
        var itemTop = itemBounds.top - containerBounds.top;
        var itemBottom = itemBounds.bottom - containerBounds.top;
        if (itemTop < 0) {
            scrollableContainer.scrollTop += itemTop;
        }
        else if (itemBottom > containerBounds.height) {
            scrollableContainer.scrollTop += (itemBottom - containerBounds.height);
        }
        item.focus();
    };
    SearchResults.defaultProps = {
        useDragAndDrop: true,
    };
    return SearchResults;
}(React.Component));
exports.SearchResults = SearchResults;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(45);
var model_1 = __webpack_require__(47);
var CLASS_NAME = 'ontodia-edit-form';
var EditEntityForm = /** @class */ (function (_super) {
    tslib_1.__extends(EditEntityForm, _super);
    function EditEntityForm(props) {
        var _this = _super.call(this, props) || this;
        _this.renderProperty = function (key, property) {
            var view = _this.props.view;
            var richProperty = view.model.getProperty(key);
            var label = view.formatLabel(richProperty.label, key);
            var values = [];
            if (model_1.isIriProperty(property)) {
                values = property.values.map(function (_a) {
                    var value = _a.value;
                    return value;
                });
            }
            else if (model_1.isLiteralProperty(property)) {
                values = property.values.map(function (_a) {
                    var value = _a.value;
                    return value;
                });
            }
            return (React.createElement("div", { key: key, className: CLASS_NAME + "__form-row" },
                React.createElement("label", null,
                    label,
                    values.map(function (value, index) { return (React.createElement("input", { key: index, className: 'ontodia-form-control', defaultValue: value })); }))));
        };
        _this.onChangeIri = function (e) {
            var target = e.target;
            var iri = target.value;
            _this.setState(function (prevState) {
                return {
                    elementModel: tslib_1.__assign(tslib_1.__assign({}, prevState.elementModel), { id: iri })
                };
            });
        };
        _this.onChangeLabel = function (e) {
            var target = e.target;
            var labels = target.value.length > 0 ? [{ value: target.value, language: '' }] : [];
            _this.setState({ elementModel: tslib_1.__assign(tslib_1.__assign({}, _this.state.elementModel), { label: { values: labels } }) });
        };
        _this.state = { elementModel: props.entity };
        return _this;
    }
    EditEntityForm.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.props.entity !== nextProps.entity) {
            this.setState({ elementModel: nextProps.entity });
        }
    };
    EditEntityForm.prototype.renderProperties = function () {
        var _this = this;
        var properties = this.props.entity.properties;
        var propertyIris = Object.keys(properties);
        return (React.createElement("div", null, propertyIris.map(function (iri) {
            return _this.renderProperty(iri, properties[iri]);
        })));
    };
    EditEntityForm.prototype.renderType = function () {
        var view = this.props.view;
        var elementModel = this.state.elementModel;
        var label = view.getElementTypeString(elementModel);
        return (React.createElement("label", null,
            "Type",
            React.createElement("input", { className: 'ontodia-form-control', value: label, disabled: true })));
    };
    EditEntityForm.prototype.renderIri = function () {
        var elementModel = this.state.elementModel;
        return (React.createElement("label", null,
            "IRI",
            React.createElement("input", { className: 'ontodia-form-control', defaultValue: elementModel.id, onChange: this.onChangeIri })));
    };
    EditEntityForm.prototype.renderLabel = function () {
        var view = this.props.view;
        var label = view.selectLabel(this.state.elementModel.label.values);
        var text = label ? label.value : '';
        return (React.createElement("label", null,
            "Label",
            React.createElement("input", { className: 'ontodia-form-control', value: text, onChange: this.onChangeLabel })));
    };
    EditEntityForm.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: CLASS_NAME },
            React.createElement("div", { className: CLASS_NAME + "__body" },
                React.createElement("div", { className: CLASS_NAME + "__form-row" }, this.renderIri()),
                React.createElement("div", { className: CLASS_NAME + "__form-row" }, this.renderType()),
                React.createElement("div", { className: CLASS_NAME + "__form-row" }, this.renderLabel()),
                this.renderProperties()),
            React.createElement("div", { className: CLASS_NAME + "__controls" },
                React.createElement("button", { className: "ontodia-btn ontodia-btn-success " + CLASS_NAME + "__apply-button", onClick: function () { return _this.props.onApply(_this.state.elementModel); } }, "Apply"),
                React.createElement("button", { className: 'ontodia-btn ontodia-btn-danger', onClick: this.props.onCancel }, "Cancel"))));
    };
    return EditEntityForm;
}(React.Component));
exports.EditEntityForm = EditEntityForm;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(45);
var model_1 = __webpack_require__(47);
var elements_1 = __webpack_require__(52);
var async_1 = __webpack_require__(60);
var progressBar_1 = __webpack_require__(116);
var elementTypeSelector_1 = __webpack_require__(121);
var linkTypeSelector_1 = __webpack_require__(123);
var CLASS_NAME = 'ontodia-edit-form';
var EditElementTypeForm = /** @class */ (function (_super) {
    tslib_1.__extends(EditElementTypeForm, _super);
    function EditElementTypeForm(props) {
        var _this = _super.call(this, props) || this;
        _this.validationCancellation = new async_1.Cancellation();
        _this.state = {
            elementValue: { value: props.target, validated: true },
            linkValue: { value: { link: props.link, direction: elements_1.LinkDirection.out }, validated: true },
            isValid: true,
        };
        return _this;
    }
    EditElementTypeForm.prototype.componentDidMount = function () {
        this.validate();
    };
    EditElementTypeForm.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _a = this.state, elementValue = _a.elementValue, linkValue = _a.linkValue;
        var elementChanged = !model_1.sameElement(elementValue.value, prevState.elementValue.value);
        var linkChanged = !model_1.sameLink(linkValue.value.link, prevState.linkValue.value.link);
        if (elementChanged || linkChanged) {
            if (elementChanged) {
                this.resetLinkValue();
            }
            this.validate();
        }
        if (elementValue !== prevState.elementValue && elementValue.validated && !elementValue.error) {
            this.props.onChangeElement(elementValue.value);
        }
        if (linkValue !== prevState.linkValue && linkValue.validated && !linkValue.error) {
            this.props.onChangeLink(linkValue.value.link);
        }
    };
    EditElementTypeForm.prototype.componentWillUnmount = function () {
        this.validationCancellation.abort();
    };
    EditElementTypeForm.prototype.resetLinkValue = function () {
        var originalLink = this.props.link;
        this.setState(function (_a) {
            var element = _a.elementValue.value;
            var link = tslib_1.__assign(tslib_1.__assign({}, originalLink), { targetId: element.id });
            return { linkValue: { value: { link: link, direction: elements_1.LinkDirection.out }, error: undefined, validated: false } };
        });
    };
    EditElementTypeForm.prototype.validate = function () {
        var _this = this;
        var _a = this.props, editor = _a.editor, originalLink = _a.link;
        var _b = this.state, element = _b.elementValue.value, value = _b.linkValue.value;
        this.setState({ isValidating: true });
        this.validationCancellation.abort();
        this.validationCancellation = new async_1.Cancellation();
        var signal = this.validationCancellation.signal;
        var validateElement = elementTypeSelector_1.validateElementType(element);
        var validateLink = linkTypeSelector_1.validateLinkType(editor, value.link, originalLink);
        Promise.all([validateElement, validateLink]).then(function (_a) {
            var elementError = _a[0], linkError = _a[1];
            if (signal.aborted) {
                return;
            }
            _this.setState(function (_a) {
                var elementValue = _a.elementValue, linkValue = _a.linkValue;
                return ({
                    elementValue: tslib_1.__assign(tslib_1.__assign({}, elementValue), { error: elementError, validated: true }),
                    linkValue: tslib_1.__assign(tslib_1.__assign({}, linkValue), { error: linkError, validated: true }),
                    isValid: !(elementError || linkError),
                    isValidating: false,
                });
            });
        });
    };
    EditElementTypeForm.prototype.render = function () {
        var _this = this;
        var _a = this.props, editor = _a.editor, view = _a.view, metadataApi = _a.metadataApi, source = _a.source;
        var _b = this.state, elementValue = _b.elementValue, linkValue = _b.linkValue, isValid = _b.isValid, isValidating = _b.isValidating;
        return (React.createElement("div", { className: CLASS_NAME },
            React.createElement("div", { className: CLASS_NAME + "__body" },
                React.createElement(elementTypeSelector_1.ElementTypeSelector, { editor: editor, view: view, metadataApi: metadataApi, source: source, elementValue: elementValue, onChange: function (value) {
                        return _this.setState({ elementValue: { value: value, error: undefined, validated: false } });
                    } }),
                React.createElement(linkTypeSelector_1.LinkTypeSelector, { editor: editor, view: view, metadataApi: metadataApi, linkValue: linkValue, source: source, target: elementValue.value, onChange: function (value) { return _this.setState({ linkValue: { value: value, error: undefined, validated: false } }); }, disabled: elementValue.error !== undefined }),
                isValidating ? (React.createElement("div", { className: CLASS_NAME + "__progress" },
                    React.createElement(progressBar_1.ProgressBar, { state: progressBar_1.ProgressState.loading, height: 10 }))) : null),
            React.createElement("div", { className: CLASS_NAME + "__controls" },
                React.createElement("button", { className: "ontodia-btn ontodia-btn-success " + CLASS_NAME + "__apply-button", onClick: function () { return _this.props.onApply(elementValue.value, linkValue.value.link); }, disabled: !isValid || isValidating }, "Apply"),
                React.createElement("button", { className: 'ontodia-btn ontodia-btn-danger', onClick: this.props.onCancel }, "Cancel"))));
    };
    return EditElementTypeForm;
}(React.Component));
exports.EditElementTypeForm = EditElementTypeForm;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(45);
var schema_1 = __webpack_require__(53);
var instancesSearch_1 = __webpack_require__(122);
var listElementView_1 = __webpack_require__(117);
var async_1 = __webpack_require__(60);
var spinner_1 = __webpack_require__(89);
var CLASS_NAME = 'ontodia-edit-form';
var ElementTypeSelector = /** @class */ (function (_super) {
    tslib_1.__extends(ElementTypeSelector, _super);
    function ElementTypeSelector(props) {
        var _this = _super.call(this, props) || this;
        _this.cancellation = new async_1.Cancellation();
        _this.filterCancellation = new async_1.Cancellation();
        _this.newIriCancellation = new async_1.Cancellation();
        _this.onElementTypeChange = function (e) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var signal, _a, elementValue, onChange, metadataApi, classId, type, typeName, types, newId;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.setState({ isLoading: true });
                        this.newIriCancellation.abort();
                        this.newIriCancellation = new async_1.Cancellation();
                        signal = this.newIriCancellation.signal;
                        _a = this.props, elementValue = _a.elementValue, onChange = _a.onChange, metadataApi = _a.metadataApi;
                        classId = e.target.value;
                        type = this.props.editor.model.createClass(classId);
                        typeName = this.props.view.formatLabel(type.label, type.id);
                        types = [classId];
                        return [4 /*yield*/, metadataApi.generateNewElementIri(types, signal)];
                    case 1:
                        newId = _b.sent();
                        if (signal.aborted) {
                            return [2 /*return*/];
                        }
                        this.setState({ isLoading: false });
                        onChange(tslib_1.__assign(tslib_1.__assign({}, elementValue.value), { id: newId, types: types, label: { values: [{ value: "New " + typeName, language: '' }] } }));
                        return [2 /*return*/];
                }
            });
        }); };
        _this.renderPossibleElementType = function (elementType) {
            var view = _this.props.view;
            var type = view.model.createClass(elementType);
            var label = view.formatLabel(type.label, type.id);
            return React.createElement("option", { key: elementType, value: elementType }, label);
        };
        _this.state = { searchString: '', existingElements: [] };
        return _this;
    }
    ElementTypeSelector.prototype.componentDidMount = function () {
        this.fetchPossibleElementTypes();
    };
    ElementTypeSelector.prototype.componentDidUpdate = function (prevProps, prevState) {
        var searchString = this.state.searchString;
        if (searchString !== prevState.searchString) {
            this.searchExistingElements();
        }
    };
    ElementTypeSelector.prototype.componentWillUnmount = function () {
        this.cancellation.abort();
        this.filterCancellation.abort();
        this.newIriCancellation.abort();
    };
    ElementTypeSelector.prototype.fetchPossibleElementTypes = function () {
        var _this = this;
        var _a = this.props, view = _a.view, metadataApi = _a.metadataApi, source = _a.source;
        if (!metadataApi) {
            return;
        }
        metadataApi.typesOfElementsDraggedFrom(source, this.cancellation.signal).then(function (elementTypes) {
            if (_this.cancellation.signal.aborted) {
                return;
            }
            elementTypes.sort(makeElementTypeComparatorByLabel(view));
            _this.setState({ elementTypes: elementTypes });
        });
    };
    ElementTypeSelector.prototype.searchExistingElements = function () {
        var _this = this;
        var _a = this.props, editor = _a.editor, view = _a.view;
        var searchString = this.state.searchString;
        this.setState({ existingElements: [] });
        if (searchString.length > 0) {
            this.setState({ isLoading: true });
            this.filterCancellation.abort();
            this.filterCancellation = new async_1.Cancellation();
            var signal_1 = this.filterCancellation.signal;
            var request = instancesSearch_1.createRequest({ text: searchString }, view.getLanguage());
            editor.model.dataProvider.filter(request).then(function (elements) {
                if (signal_1.aborted) {
                    return;
                }
                var existingElements = Object.keys(elements).map(function (key) { return elements[key]; });
                _this.setState({ existingElements: existingElements, isLoading: false });
            });
        }
    };
    ElementTypeSelector.prototype.renderElementTypeSelector = function () {
        var elementValue = this.props.elementValue;
        var _a = this.state, elementTypes = _a.elementTypes, isLoading = _a.isLoading;
        var value = elementValue.value.types.length ? elementValue.value.types[0] : '';
        if (isLoading) {
            return React.createElement(spinner_1.HtmlSpinner, { width: 20, height: 20 });
        }
        return (React.createElement("div", { className: CLASS_NAME + "__control-row" },
            React.createElement("label", null, "Entity Type"),
            elementTypes ? (React.createElement("select", { className: 'ontodia-form-control', value: value, onChange: this.onElementTypeChange },
                React.createElement("option", { value: schema_1.PLACEHOLDER_ELEMENT_TYPE, disabled: true }, "Select entity type"),
                elementTypes.map(this.renderPossibleElementType))) : React.createElement("div", null,
                React.createElement(spinner_1.HtmlSpinner, { width: 20, height: 20 })),
            elementValue.error ? React.createElement("span", { className: CLASS_NAME + "__control-error" }, elementValue.error) : ''));
    };
    ElementTypeSelector.prototype.renderExistingElementsList = function () {
        var _a = this.props, view = _a.view, elementValue = _a.elementValue, onChange = _a.onChange;
        var _b = this.state, elementTypes = _b.elementTypes, isLoading = _b.isLoading, existingElements = _b.existingElements;
        if (isLoading) {
            return React.createElement(spinner_1.HtmlSpinner, { width: 20, height: 20 });
        }
        if (existingElements.length > 0) {
            return existingElements.map(function (element) {
                var isAlreadyOnDiagram = Boolean(view.model.elements.find(function (_a) {
                    var iri = _a.iri, group = _a.group;
                    return iri === element.id && group === undefined;
                }));
                var hasAppropriateType = Boolean(elementTypes.find(function (type) { return element.types.indexOf(type) >= 0; }));
                return (React.createElement(listElementView_1.ListElementView, { key: element.id, view: view, model: element, disabled: isAlreadyOnDiagram || !hasAppropriateType, selected: element.id === elementValue.value.id, onClick: function (e, model) { return onChange(model); } }));
            });
        }
        return React.createElement("span", null, "No results");
    };
    ElementTypeSelector.prototype.render = function () {
        var _this = this;
        var searchString = this.state.searchString;
        return (React.createElement("div", { className: CLASS_NAME + "__form-row " + CLASS_NAME + "__element-selector" },
            React.createElement("div", { className: CLASS_NAME + "__search" },
                React.createElement("i", { className: "fa fa-search " + CLASS_NAME + "__search-icon" }),
                React.createElement("input", { value: searchString, onChange: function (e) { return _this.setState({ searchString: e.target.value }); }, className: "ontodia-form-control " + CLASS_NAME + "__search-input", placeholder: 'Search for...', autoFocus: true })),
            searchString.length > 0 ? (React.createElement("div", { className: CLASS_NAME + "__existing-elements-list" }, this.renderExistingElementsList())) : (React.createElement("div", null,
                React.createElement("div", { className: CLASS_NAME + "__separator" },
                    React.createElement("i", { className: CLASS_NAME + "__separator-text" }, "or create new entity")),
                this.renderElementTypeSelector()))));
    };
    return ElementTypeSelector;
}(React.Component));
exports.ElementTypeSelector = ElementTypeSelector;
function makeElementTypeComparatorByLabel(view) {
    return function (a, b) {
        var typeA = view.model.createClass(a);
        var typeB = view.model.createClass(b);
        var labelA = view.formatLabel(typeA.label, typeA.id);
        var labelB = view.formatLabel(typeB.label, typeB.id);
        return labelA.localeCompare(labelB);
    };
}
function validateElementType(element) {
    var isElementTypeSelected = element.types.indexOf(schema_1.PLACEHOLDER_ELEMENT_TYPE) < 0;
    var error = !isElementTypeSelected ? 'Required!' : undefined;
    return Promise.resolve(error);
}
exports.validateElementType = validateElementType;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(45);
var events_1 = __webpack_require__(54);
var progressBar_1 = __webpack_require__(116);
var searchResults_1 = __webpack_require__(118);
var workspaceContext_1 = __webpack_require__(87);
var DirectionInImage = __webpack_require__(9);
var DirectionOutImage = __webpack_require__(10);
var CLASS_NAME = 'ontodia-instances-search';
var InstancesSearch = /** @class */ (function (_super) {
    tslib_1.__extends(InstancesSearch, _super);
    function InstancesSearch(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.listener = new events_1.EventObserver();
        _this.onSelectionChanged = function (newSelection) {
            _this.setState({ selection: newSelection });
        };
        _this.state = {
            resultId: 0,
            selection: new Set(),
        };
        return _this;
    }
    InstancesSearch.prototype.render = function () {
        var _this = this;
        var ENTER_KEY_CODE = 13;
        var className = CLASS_NAME + " " + (this.props.className || '');
        var progressState = (this.state.quering ? progressBar_1.ProgressState.loading :
            this.state.error ? progressBar_1.ProgressState.error :
                this.state.items ? progressBar_1.ProgressState.completed :
                    progressBar_1.ProgressState.none);
        var searchTerm = this.state.inputText === undefined
            ? this.props.criteria.text : this.state.inputText;
        return React.createElement("div", { className: className },
            React.createElement(progressBar_1.ProgressBar, { state: progressState }),
            React.createElement("div", { className: CLASS_NAME + "__criteria" },
                this.renderCriteria(),
                React.createElement("div", { className: CLASS_NAME + "__text-criteria ontodia-input-group" },
                    React.createElement("input", { type: 'text', className: 'ontodia-form-control', placeholder: 'Search for...', value: searchTerm || '', onChange: function (e) { return _this.setState({ inputText: e.currentTarget.value }); }, onKeyUp: function (e) {
                            if (e.keyCode === ENTER_KEY_CODE) {
                                _this.submitCriteriaUpdate();
                            }
                        } }),
                    React.createElement("span", { className: 'ontodia-input-group-btn' },
                        React.createElement("button", { className: 'ontodia-btn ontodia-btn-default', type: 'button', title: 'Search', onClick: function () { return _this.submitCriteriaUpdate(); } },
                            React.createElement("span", { className: 'fa fa-search', "aria-hidden": 'true' }))))),
            React.createElement("div", { className: CLASS_NAME + "__rest ontodia-scrollable", key: this.state.resultId },
                React.createElement(searchResults_1.SearchResults, { view: this.props.view, items: this.state.items, highlightText: this.props.criteria.text, selection: this.state.selection, onSelectionChanged: this.onSelectionChanged }),
                React.createElement("div", { className: CLASS_NAME + "__rest-end" },
                    React.createElement("button", { type: 'button', className: CLASS_NAME + "__load-more ontodia-btn ontodia-btn-primary", disabled: this.state.quering, style: { display: this.state.moreItemsAvailable ? undefined : 'none' }, onClick: function () { return _this.queryItems(true); } },
                        React.createElement("span", { className: 'fa fa-chevron-down', "aria-hidden": 'true' }),
                        "\u00A0Show more"))));
    };
    InstancesSearch.prototype.renderCriteria = function () {
        var _this = this;
        var _a = this.props, _b = _a.criteria, criteria = _b === void 0 ? {} : _b, view = _a.view;
        var criterions = [];
        if (criteria.elementType) {
            var classInfo = criteria.elementType;
            var classLabel = view.formatLabel(classInfo.label, classInfo.id);
            criterions.push(React.createElement("div", { key: 'hasType', className: CLASS_NAME + "__criterion" },
                this.renderRemoveCriterionButtons(function () { return _this.props.onCriteriaChanged(tslib_1.__assign(tslib_1.__assign({}, _this.props.criteria), { elementType: undefined })); }),
                "Has type ",
                React.createElement("span", { className: CLASS_NAME + "__criterion-class", title: classInfo.id }, classLabel)));
        }
        else if (criteria.refElement) {
            var element = criteria.refElement;
            var elementLabel = view.formatLabel(element.data.label.values, element.iri);
            var linkType = criteria.refElementLink;
            var linkTypeLabel = linkType ? view.formatLabel(linkType.label, linkType.id) : undefined;
            criterions.push(React.createElement("div", { key: 'hasLinkedElement', className: CLASS_NAME + "__criterion" },
                this.renderRemoveCriterionButtons(function () { return _this.props.onCriteriaChanged(tslib_1.__assign(tslib_1.__assign({}, _this.props.criteria), { refElement: undefined, refElementLink: undefined })); }),
                "Connected to ",
                React.createElement("span", { className: CLASS_NAME + "__criterion-element", title: element ? element.iri : undefined }, elementLabel),
                linkType && React.createElement("span", null,
                    ' through ',
                    React.createElement("span", { className: CLASS_NAME + "__criterion-link-type", title: linkType ? linkType.id : undefined }, linkTypeLabel),
                    criteria.linkDirection === 'in' && React.createElement("span", null,
                        ' as ',
                        React.createElement("img", { className: CLASS_NAME + "__link-direction", src: DirectionInImage }),
                        "\u00A0source"),
                    criteria.linkDirection === 'out' && React.createElement("span", null,
                        ' as ',
                        React.createElement("img", { className: CLASS_NAME + "__link-direction", src: DirectionOutImage }),
                        "\u00A0target"))));
        }
        return React.createElement("div", { className: CLASS_NAME + "__criterions" }, criterions);
    };
    InstancesSearch.prototype.renderRemoveCriterionButtons = function (onClick) {
        return React.createElement("div", { className: CLASS_NAME + "__criterion-remove ontoidia-btn-group ontodia-btn-group-xs" },
            React.createElement("button", { type: 'button', className: 'ontodia-btn ontodia-btn-default', title: 'Remove criteria', onClick: onClick },
                React.createElement("span", { className: 'fa fa-times', "aria-hidden": 'true' })));
    };
    InstancesSearch.prototype.submitCriteriaUpdate = function () {
        var text = this.state.inputText === undefined ? this.props.criteria.text : this.state.inputText;
        text = text === '' ? undefined : text;
        this.props.onCriteriaChanged(tslib_1.__assign(tslib_1.__assign({}, this.props.criteria), { text: text }));
    };
    InstancesSearch.prototype.componentDidMount = function () {
        var _this = this;
        this.listener.listen(this.props.view.events, 'changeLanguage', function () { return _this.forceUpdate(); });
        this.queryItems(false);
    };
    InstancesSearch.prototype.componentWillReceiveProps = function (nextProps) {
        var _this = this;
        var languageChanged = this.currentRequest
            ? this.currentRequest.languageCode !== nextProps.view.getLanguage() : false;
        if (this.props.criteria !== nextProps.criteria || languageChanged) {
            this.setState({ inputText: undefined }, function () { return _this.queryItems(false); });
        }
    };
    InstancesSearch.prototype.componentWillUnmount = function () {
        this.listener.stopListening();
        this.currentRequest = undefined;
    };
    InstancesSearch.prototype.queryItems = function (loadMoreItems) {
        var _this = this;
        var request;
        if (loadMoreItems) {
            if (!this.currentRequest) {
                throw new Error('Cannot request more items without initial request.');
            }
            var _a = this.currentRequest, offset = _a.offset, limit = _a.limit;
            request = tslib_1.__assign(tslib_1.__assign({}, this.currentRequest), { offset: offset + limit });
        }
        else {
            request = createRequest(this.props.criteria, this.props.view.getLanguage());
        }
        if (!(request.text || request.elementTypeId || request.refElementId || request.refElementLinkId)) {
            this.setState({
                quering: false,
                error: undefined,
                items: undefined,
                selection: new Set(),
                moreItemsAvailable: false,
            });
            return;
        }
        this.currentRequest = request;
        this.setState({
            quering: true,
            error: undefined,
            moreItemsAvailable: false,
        });
        this.props.model.dataProvider.filter(request).then(function (elements) {
            if (_this.currentRequest !== request) {
                return;
            }
            _this.processFilterData(elements);
            _this.context.ontodiaWorkspace.triggerWorkspaceEvent(workspaceContext_1.WorkspaceEventKey.searchQueryItem);
        }).catch(function (error) {
            if (_this.currentRequest !== request) {
                return;
            }
            // tslint:disable-next-line:no-console
            console.error(error);
            _this.setState({ quering: false, error: error });
        });
    };
    InstancesSearch.prototype.processFilterData = function (elements) {
        var requestedAdditionalItems = this.currentRequest.offset > 0;
        var existingIris = {};
        if (requestedAdditionalItems) {
            this.state.items.forEach(function (item) { return existingIris[item.id] = true; });
        }
        var items = requestedAdditionalItems ? tslib_1.__spreadArrays(this.state.items) : [];
        for (var iri in elements) {
            if (!elements.hasOwnProperty(iri)) {
                continue;
            }
            if (existingIris[iri]) {
                continue;
            }
            items.push(elements[iri]);
        }
        var moreItemsAvailable = Object.keys(elements).length >= this.currentRequest.limit;
        if (requestedAdditionalItems) {
            this.setState({ quering: false, items: items, error: undefined, moreItemsAvailable: moreItemsAvailable });
        }
        else {
            this.setState({
                quering: false,
                resultId: this.state.resultId + 1,
                items: items,
                selection: new Set(),
                error: undefined,
                moreItemsAvailable: moreItemsAvailable,
            });
        }
    };
    InstancesSearch.contextTypes = workspaceContext_1.WorkspaceContextTypes;
    return InstancesSearch;
}(React.Component));
exports.InstancesSearch = InstancesSearch;
function createRequest(criteria, language) {
    var text = criteria.text, elementType = criteria.elementType, refElement = criteria.refElement, refElementLink = criteria.refElementLink, linkDirection = criteria.linkDirection;
    return {
        text: text,
        elementTypeId: elementType ? elementType.id : undefined,
        refElementId: refElement ? refElement.iri : undefined,
        refElementLinkId: refElementLink ? refElementLink.id : undefined,
        linkDirection: linkDirection,
        offset: 0,
        limit: 100,
        languageCode: language || 'en',
    };
}
exports.createRequest = createRequest;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(45);
var model_1 = __webpack_require__(47);
var schema_1 = __webpack_require__(53);
var elements_1 = __webpack_require__(52);
var events_1 = __webpack_require__(54);
var async_1 = __webpack_require__(60);
var spinner_1 = __webpack_require__(89);
var CLASS_NAME = 'ontodia-edit-form';
var LinkTypeSelector = /** @class */ (function (_super) {
    tslib_1.__extends(LinkTypeSelector, _super);
    function LinkTypeSelector(props) {
        var _this = _super.call(this, props) || this;
        _this.listener = new events_1.EventObserver();
        _this.cancellation = new async_1.Cancellation();
        _this.updateAll = function () { return _this.forceUpdate(); };
        _this.onChangeType = function (e) {
            var _a = _this.props.linkValue.value, originalLink = _a.link, originalDirection = _a.direction;
            var index = parseInt(e.currentTarget.value, 10);
            var _b = _this.state.fatLinkTypes[index], fatLinkType = _b.fatLinkType, direction = _b.direction;
            var link = tslib_1.__assign(tslib_1.__assign({}, originalLink), { linkTypeId: fatLinkType.id });
            // switches source and target if the direction has changed
            if (originalDirection !== direction) {
                link.sourceId = originalLink.targetId;
                link.targetId = originalLink.sourceId;
            }
            _this.props.onChange({ link: link, direction: direction });
        };
        _this.renderPossibleLinkType = function (_a, index) {
            var _b;
            var fatLinkType = _a.fatLinkType, direction = _a.direction;
            var _c = _this.props, view = _c.view, linkValue = _c.linkValue, source = _c.source, target = _c.target;
            var label = view.formatLabel(fatLinkType.label, fatLinkType.id);
            var _d = [source, target].map(function (element) {
                return view.formatLabel(element.label.values, element.id);
            }), sourceLabel = _d[0], targetLabel = _d[1];
            if (direction !== linkValue.value.direction) {
                _b = [targetLabel, sourceLabel], sourceLabel = _b[0], targetLabel = _b[1];
            }
            return React.createElement("option", { key: index, value: index },
                label,
                " [",
                sourceLabel,
                " \u2192 ",
                targetLabel,
                "]");
        };
        _this.state = {
            fatLinkTypes: [],
        };
        return _this;
    }
    LinkTypeSelector.prototype.componentDidMount = function () {
        this.fetchPossibleLinkTypes();
    };
    LinkTypeSelector.prototype.componentDidUpdate = function (prevProps) {
        var _a = this.props, source = _a.source, target = _a.target;
        if (prevProps.source !== source || prevProps.target !== target) {
            this.setState({ fatLinkTypes: undefined });
            this.fetchPossibleLinkTypes();
        }
    };
    LinkTypeSelector.prototype.componentWillUnmount = function () {
        this.listener.stopListening();
        this.cancellation.abort();
    };
    LinkTypeSelector.prototype.fetchPossibleLinkTypes = function () {
        var _this = this;
        var _a = this.props, view = _a.view, metadataApi = _a.metadataApi, source = _a.source, target = _a.target;
        if (!metadataApi) {
            return;
        }
        metadataApi.possibleLinkTypes(source, target, this.cancellation.signal).then(function (linkTypes) {
            if (_this.cancellation.signal.aborted) {
                return;
            }
            var fatLinkTypes = [];
            linkTypes.forEach(function (_a) {
                var linkTypeIri = _a.linkTypeIri, direction = _a.direction;
                var fatLinkType = view.model.createLinkType(linkTypeIri);
                fatLinkTypes.push({ fatLinkType: fatLinkType, direction: direction });
            });
            fatLinkTypes.sort(makeLinkTypeComparatorByLabelAndDirection(view));
            _this.setState({ fatLinkTypes: fatLinkTypes });
            _this.listenToLinkLabels(fatLinkTypes);
        });
    };
    LinkTypeSelector.prototype.listenToLinkLabels = function (fatLinkTypes) {
        var _this = this;
        fatLinkTypes.forEach(function (_a) {
            var fatLinkType = _a.fatLinkType;
            return _this.listener.listen(fatLinkType.events, 'changeLabel', _this.updateAll);
        });
    };
    LinkTypeSelector.prototype.render = function () {
        var _a = this.props, linkValue = _a.linkValue, disabled = _a.disabled;
        var fatLinkTypes = this.state.fatLinkTypes;
        var value = (fatLinkTypes || []).findIndex(function (_a) {
            var fatLinkType = _a.fatLinkType, direction = _a.direction;
            return fatLinkType.id === linkValue.value.link.linkTypeId && direction === linkValue.value.direction;
        });
        return (React.createElement("div", { className: CLASS_NAME + "__control-row" },
            React.createElement("label", null, "Link Type"),
            fatLinkTypes ? (React.createElement("select", { className: 'ontodia-form-control', value: value, onChange: this.onChangeType, disabled: disabled },
                React.createElement("option", { value: -1, disabled: true }, "Select link type"),
                fatLinkTypes.map(this.renderPossibleLinkType))) : React.createElement("div", null,
                React.createElement(spinner_1.HtmlSpinner, { width: 20, height: 20 })),
            linkValue.error ? React.createElement("span", { className: CLASS_NAME + "__control-error" }, linkValue.error) : ''));
    };
    return LinkTypeSelector;
}(React.Component));
exports.LinkTypeSelector = LinkTypeSelector;
function makeLinkTypeComparatorByLabelAndDirection(view) {
    return function (a, b) {
        var labelA = view.formatLabel(a.fatLinkType.label, a.fatLinkType.id);
        var labelB = view.formatLabel(b.fatLinkType.label, b.fatLinkType.id);
        var labelCompareResult = labelA.localeCompare(labelB);
        if (labelCompareResult !== 0) {
            return labelCompareResult;
        }
        if (a.direction === elements_1.LinkDirection.out && b.direction === elements_1.LinkDirection.in) {
            return -1;
        }
        if (a.direction === elements_1.LinkDirection.in && b.direction === elements_1.LinkDirection.out) {
            return 1;
        }
        return 0;
    };
}
function validateLinkType(editor, currentLink, originalLink) {
    if (currentLink.linkTypeId === schema_1.PLACEHOLDER_LINK_TYPE) {
        return Promise.resolve('Required!');
    }
    if (model_1.sameLink(currentLink, originalLink)) {
        return Promise.resolve(undefined);
    }
    var alreadyOnDiagram = editor.model.links.find(function (_a) {
        var _b = _a.data, linkTypeId = _b.linkTypeId, sourceId = _b.sourceId, targetId = _b.targetId;
        return linkTypeId === currentLink.linkTypeId &&
            sourceId === currentLink.sourceId &&
            targetId === currentLink.targetId &&
            !editor.temporaryState.links.has(currentLink);
    });
    if (alreadyOnDiagram) {
        return Promise.resolve('The link already exists!');
    }
    return editor.model.dataProvider.linksInfo({
        elementIds: [currentLink.sourceId, currentLink.targetId],
        linkTypeIds: [currentLink.linkTypeId],
    }).then(function (links) {
        var alreadyExists = links.some(function (link) { return model_1.sameLink(link, currentLink); });
        return alreadyExists ? 'The link already exists!' : undefined;
    });
}
exports.validateLinkType = validateLinkType;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(45);
var model_1 = __webpack_require__(47);
var elements_1 = __webpack_require__(52);
var async_1 = __webpack_require__(60);
var progressBar_1 = __webpack_require__(116);
var linkTypeSelector_1 = __webpack_require__(123);
var CLASS_NAME = 'ontodia-edit-form';
var EditLinkForm = /** @class */ (function (_super) {
    tslib_1.__extends(EditLinkForm, _super);
    function EditLinkForm(props) {
        var _this = _super.call(this, props) || this;
        _this.validationCancellation = new async_1.Cancellation();
        _this.state = {
            linkValue: {
                value: { link: props.link, direction: elements_1.LinkDirection.out },
                validated: true,
            },
            isValid: true,
        };
        return _this;
    }
    EditLinkForm.prototype.componentDidMount = function () {
        this.validate();
    };
    EditLinkForm.prototype.componentDidUpdate = function (prevProps, prevState) {
        var linkValue = this.state.linkValue;
        if (!model_1.sameLink(linkValue.value.link, prevState.linkValue.value.link)) {
            this.validate();
        }
        if (linkValue !== prevState.linkValue && linkValue.validated && !linkValue.error) {
            this.props.onChange(linkValue.value.link);
        }
    };
    EditLinkForm.prototype.componentWillUnmount = function () {
        this.validationCancellation.abort();
    };
    EditLinkForm.prototype.validate = function () {
        var _this = this;
        var _a = this.props, editor = _a.editor, originalLink = _a.link;
        var value = this.state.linkValue.value;
        this.setState({ isValidating: true });
        this.validationCancellation.abort();
        this.validationCancellation = new async_1.Cancellation();
        var signal = this.validationCancellation.signal;
        linkTypeSelector_1.validateLinkType(editor, value.link, originalLink).then(function (error) {
            if (signal.aborted) {
                return;
            }
            _this.setState(function (_a) {
                var linkValue = _a.linkValue;
                return ({
                    linkValue: tslib_1.__assign(tslib_1.__assign({}, linkValue), { error: error, validated: true }),
                    isValid: !error,
                    isValidating: false,
                });
            });
        });
    };
    EditLinkForm.prototype.render = function () {
        var _this = this;
        var _a = this.props, editor = _a.editor, view = _a.view, metadataApi = _a.metadataApi, source = _a.source, target = _a.target;
        var _b = this.state, linkValue = _b.linkValue, isValid = _b.isValid, isValidating = _b.isValidating;
        return (React.createElement("div", { className: CLASS_NAME },
            React.createElement("div", { className: CLASS_NAME + "__body" },
                React.createElement(linkTypeSelector_1.LinkTypeSelector, { editor: editor, view: view, metadataApi: metadataApi, linkValue: linkValue, source: source, target: target, onChange: function (value) { return _this.setState({ linkValue: { value: value, error: undefined, validated: false } }); } }),
                isValidating ? (React.createElement("div", { className: CLASS_NAME + "__progress" },
                    React.createElement(progressBar_1.ProgressBar, { state: progressBar_1.ProgressState.loading, height: 10 }))) : null),
            React.createElement("div", { className: CLASS_NAME + "__controls" },
                React.createElement("button", { className: "ontodia-btn ontodia-btn-success " + CLASS_NAME + "__apply-button", onClick: function () { return _this.props.onApply(linkValue.value.link); }, disabled: !isValid || isValidating }, "Apply"),
                React.createElement("button", { className: 'ontodia-btn ontodia-btn-danger', onClick: this.props.onCancel }, "Cancel"))));
    };
    return EditLinkForm;
}(React.Component));
exports.EditLinkForm = EditLinkForm;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(45);
var CLASS_NAME = 'ontodia-edit-form';
var EditLinkLabelForm = /** @class */ (function (_super) {
    tslib_1.__extends(EditLinkLabelForm, _super);
    function EditLinkLabelForm(props) {
        var _this = _super.call(this, props) || this;
        var label = _this.computeLabel();
        _this.state = { label: label };
        return _this;
    }
    EditLinkLabelForm.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.link.typeId !== prevProps.link.typeId) {
            var label = this.computeLabel();
            this.setState({ label: label });
        }
    };
    EditLinkLabelForm.prototype.computeLabel = function () {
        var _a = this.props, view = _a.view, link = _a.link;
        var linkType = view.model.getLinkType(link.typeId);
        var template = view.createLinkTemplate(linkType);
        var _b = template.renderLink(link).label, label = _b === void 0 ? {} : _b;
        var labelTexts = label.attrs && label.attrs.text ? label.attrs.text.text : undefined;
        return (labelTexts && labelTexts.length > 0)
            ? view.selectLabel(labelTexts).value
            : view.formatLabel(linkType.label, linkType.id);
    };
    EditLinkLabelForm.prototype.render = function () {
        var _this = this;
        var _a = this.props, onApply = _a.onApply, onCancel = _a.onCancel;
        var label = this.state.label;
        return (React.createElement("div", { className: CLASS_NAME },
            React.createElement("div", { className: CLASS_NAME + "__body" },
                React.createElement("div", { className: CLASS_NAME + "__form-row" },
                    React.createElement("label", null, "Link Label"),
                    React.createElement("input", { className: 'ontodia-form-control', value: label, onChange: function (e) { return _this.setState({ label: e.target.value }); } }))),
            React.createElement("div", { className: CLASS_NAME + "__controls" },
                React.createElement("button", { className: "ontodia-btn ontodia-btn-success " + CLASS_NAME + "__apply-button", onClick: function () { return onApply(label); } }, "Apply"),
                React.createElement("button", { className: 'ontodia-btn ontodia-btn-danger', onClick: function () { return onCancel(); } }, "Cancel"))));
    };
    return EditLinkLabelForm;
}(React.Component));
exports.EditLinkLabelForm = EditLinkLabelForm;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(45);
var geometry_1 = __webpack_require__(56);
var authoringState_1 = __webpack_require__(88);
var events_1 = __webpack_require__(54);
var async_1 = __webpack_require__(60);
var spinner_1 = __webpack_require__(89);
var CLASS_NAME = 'ontodia-halo';
var Halo = /** @class */ (function (_super) {
    tslib_1.__extends(Halo, _super);
    function Halo(props) {
        var _this = _super.call(this, props) || this;
        _this.listener = new events_1.EventObserver();
        _this.targetListener = new events_1.EventObserver();
        _this.queryDebouncer = new async_1.Debouncer();
        _this.queryCancellation = new async_1.Cancellation();
        _this.onElementEvent = function (data) {
            if (data.changePosition || data.changeSize || data.changeExpanded) {
                _this.forceUpdate();
            }
            if (data.changeData) {
                _this.queryAllowedActions();
            }
        };
        _this.onEstablishNewLink = function (e) {
            var point = _this.props.paperArea.pageToPaperCoords(e.pageX, e.pageY);
            _this.props.onEstablishNewLink(point);
        };
        _this.state = {};
        return _this;
    }
    Halo.prototype.componentDidMount = function () {
        var _this = this;
        var _a = this.props, editor = _a.editor, target = _a.target;
        this.listener.listen(editor.events, 'changeAuthoringState', function () {
            _this.queryAllowedActions();
        });
        this.listenToElement(target);
        this.queryAllowedActions();
    };
    Halo.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.target !== this.props.target) {
            this.listenToElement(this.props.target);
            this.queryAllowedActions();
        }
    };
    Halo.prototype.componentWillUnmount = function () {
        this.listener.stopListening();
        this.listenToElement(undefined);
        this.queryDebouncer.dispose();
        this.queryCancellation.abort();
    };
    Halo.prototype.listenToElement = function (element) {
        this.targetListener.stopListening();
        if (element) {
            this.targetListener.listenAny(element.events, this.onElementEvent);
        }
    };
    Halo.prototype.queryAllowedActions = function () {
        var _this = this;
        this.queryDebouncer.call(function () {
            _this.queryCancellation.abort();
            _this.queryCancellation = new async_1.Cancellation();
            _this.canLink(_this.props.target);
        });
    };
    Halo.prototype.canLink = function (target) {
        var _this = this;
        var _a = this.props, metadataApi = _a.metadataApi, editor = _a.editor;
        if (!metadataApi) {
            this.setState({ canLink: false });
            return;
        }
        var event = editor.authoringState.elements.get(target.iri);
        if (event && event.deleted) {
            this.setState({ canLink: false });
        }
        else {
            this.setState({ canLink: undefined });
            var signal_1 = this.queryCancellation.signal;
            metadataApi.canLinkElement(target.data, signal_1).then(function (canLink) {
                if (signal_1.aborted) {
                    return;
                }
                if (_this.props.target.iri === target.iri) {
                    _this.setState({ canLink: canLink });
                }
            });
        }
    };
    Halo.prototype.render = function () {
        var _a = this.props, paperArea = _a.paperArea, editor = _a.editor, target = _a.target, navigationMenuOpened = _a.navigationMenuOpened, onToggleNavigationMenu = _a.onToggleNavigationMenu, onAddToFilter = _a.onAddToFilter, onExpand = _a.onExpand, onFollowLink = _a.onFollowLink;
        if (!target) {
            return React.createElement("div", { className: CLASS_NAME, style: { display: 'none' } });
        }
        var bbox = geometry_1.boundsOf(target);
        var _b = paperArea.paperToScrollablePaneCoords(bbox.x, bbox.y), x0 = _b.x, y0 = _b.y;
        var _c = paperArea.paperToScrollablePaneCoords(bbox.x + bbox.width, bbox.y + bbox.height), x1 = _c.x, y1 = _c.y;
        var MARGIN = 5;
        var style = { left: x0 - MARGIN, top: y0 - MARGIN,
            width: ((x1 - x0) + MARGIN * 2), height: ((y1 - y0) + MARGIN * 2) };
        return (React.createElement("div", { className: CLASS_NAME, style: style },
            this.renderRemoveOrDeleteButton(),
            onToggleNavigationMenu && React.createElement("div", { className: CLASS_NAME + "__navigate " +
                    (CLASS_NAME + "__navigate--" + (navigationMenuOpened ? 'closed' : 'open')), role: 'button', title: 'Open a dialog to navigate to connected elements', onClick: onToggleNavigationMenu }),
            onFollowLink && React.createElement("a", { className: CLASS_NAME + "__folow", href: target.iri, role: 'button', title: 'Jump to resource', onClick: function (e) { return onFollowLink(target, e); } }),
            onAddToFilter && React.createElement("div", { className: CLASS_NAME + "__add-to-filter", role: 'button', title: 'Search for connected elements', onClick: onAddToFilter }),
            onExpand && React.createElement("div", { className: CLASS_NAME + "__expand " +
                    (CLASS_NAME + "__expand--" + (target.isExpanded ? 'closed' : 'open')), role: 'button', title: "Expand an element to reveal additional properties", onClick: onExpand }),
            editor.inAuthoringMode ? this.renderEstablishNewLinkButton() : null));
    };
    Halo.prototype.renderRemoveOrDeleteButton = function () {
        var _a = this.props, editor = _a.editor, target = _a.target, onRemove = _a.onRemove;
        if (!onRemove) {
            return null;
        }
        var isNewElement = authoringState_1.AuthoringState.isNewElement(editor.authoringState, target.iri);
        return (React.createElement("div", { className: isNewElement ? CLASS_NAME + "__delete" : CLASS_NAME + "__remove", role: 'button', title: isNewElement ? 'Delete new element' : 'Remove an element from the diagram', onClick: onRemove }));
    };
    Halo.prototype.renderEstablishNewLinkButton = function () {
        var onEstablishNewLink = this.props.onEstablishNewLink;
        var canLink = this.state.canLink;
        if (!onEstablishNewLink) {
            return null;
        }
        if (canLink === undefined) {
            return (React.createElement("div", { className: CLASS_NAME + "__establish-connection-spinner" },
                React.createElement(spinner_1.HtmlSpinner, { width: 20, height: 20 })));
        }
        var title = canLink
            ? 'Establish connection'
            : 'Establishing connection is unavailable for the selected element';
        return (React.createElement("button", { className: CLASS_NAME + "__establish-connection", title: title, onMouseDown: this.onEstablishNewLink, disabled: !canLink }));
    };
    return Halo;
}(React.Component));
exports.Halo = Halo;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(45);
var geometry_1 = __webpack_require__(56);
var events_1 = __webpack_require__(54);
var async_1 = __webpack_require__(60);
var spinner_1 = __webpack_require__(89);
var CLASS_NAME = 'ontodia-halo-link';
var BUTTON_SIZE = 20;
var BUTTON_MARGIN = 5;
var HaloLink = /** @class */ (function (_super) {
    tslib_1.__extends(HaloLink, _super);
    function HaloLink(props) {
        var _this = _super.call(this, props) || this;
        _this.listener = new events_1.EventObserver();
        _this.targetListener = new events_1.EventObserver();
        _this.queryDebouncer = new async_1.Debouncer();
        _this.queryCancellation = new async_1.Cancellation();
        _this.updateAll = function () { return _this.forceUpdate(); };
        _this.onSourceMove = function (e) {
            var point = _this.props.paperArea.pageToPaperCoords(e.pageX, e.pageY);
            _this.props.onSourceMove(point);
        };
        _this.onTargetMove = function (e) {
            var point = _this.props.paperArea.pageToPaperCoords(e.pageX, e.pageY);
            _this.props.onTargetMove(point);
        };
        _this.state = {};
        return _this;
    }
    HaloLink.prototype.componentDidMount = function () {
        var _this = this;
        var _a = this.props, target = _a.target, editor = _a.editor;
        this.listener.listen(editor.events, 'changeAuthoringState', function () {
            _this.queryAllowedActions();
        });
        this.listenToTarget(target);
        this.queryAllowedActions();
    };
    HaloLink.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.target !== this.props.target) {
            this.listenToTarget(this.props.target);
            this.queryAllowedActions();
        }
    };
    HaloLink.prototype.componentWillUnmount = function () {
        this.listener.stopListening();
        this.listenToTarget(undefined);
        this.queryDebouncer.dispose();
        this.queryCancellation.abort();
    };
    HaloLink.prototype.queryAllowedActions = function () {
        var _this = this;
        this.queryDebouncer.call(function () {
            _this.queryCancellation.abort();
            _this.queryCancellation = new async_1.Cancellation();
            _this.queryCanDelete(_this.props.target);
            _this.queryCanEdit(_this.props.target);
        });
    };
    HaloLink.prototype.queryCanDelete = function (link) {
        var _this = this;
        var _a = this.props, metadataApi = _a.metadataApi, editor = _a.editor, view = _a.view;
        if (!metadataApi) {
            this.setState({ canDelete: false });
            return;
        }
        if (isSourceOrTargetDeleted(editor.authoringState, link)) {
            this.setState({ canDelete: false });
        }
        else {
            this.setState({ canDelete: undefined });
            var source = view.model.getElement(link.sourceId);
            var target = view.model.getElement(link.targetId);
            var signal_1 = this.queryCancellation.signal;
            metadataApi.canDeleteLink(link.data, source.data, target.data, signal_1).then(function (canDelete) {
                if (signal_1.aborted) {
                    return;
                }
                if (_this.props.target.id === link.id) {
                    _this.setState({ canDelete: canDelete });
                }
            });
        }
    };
    HaloLink.prototype.queryCanEdit = function (link) {
        var _this = this;
        var _a = this.props, metadataApi = _a.metadataApi, editor = _a.editor, view = _a.view;
        if (!metadataApi) {
            this.setState({ canEdit: false });
            return;
        }
        if (isDeletedLink(editor.authoringState, link)) {
            this.setState({ canEdit: false });
        }
        else {
            this.setState({ canEdit: undefined });
            var source = view.model.getElement(link.sourceId);
            var target = view.model.getElement(link.targetId);
            var signal_2 = this.queryCancellation.signal;
            metadataApi.canEditLink(link.data, source.data, target.data, signal_2).then(function (canEdit) {
                if (signal_2.aborted) {
                    return;
                }
                if (_this.props.target.id === link.id) {
                    _this.setState({ canEdit: canEdit });
                }
            });
        }
    };
    HaloLink.prototype.listenToTarget = function (link) {
        var _this = this;
        var view = this.props.view;
        this.targetListener.stopListening();
        if (link) {
            var source = view.model.getElement(link.sourceId);
            var target = view.model.getElement(link.targetId);
            var listenToElement = function (element) {
                _this.targetListener.listen(element.events, 'changePosition', _this.updateAll);
                _this.targetListener.listen(element.events, 'changeSize', _this.updateAll);
            };
            listenToElement(source);
            listenToElement(target);
            this.targetListener.listen(link.events, 'changeVertices', this.updateAll);
            this.targetListener.listen(link.events, 'changeLabelBounds', this.updateAll);
        }
    };
    HaloLink.prototype.paperToScrollablePaneCoords = function (point) {
        return this.props.paperArea.paperToScrollablePaneCoords(point.x, point.y);
    };
    HaloLink.prototype.computePolyline = function () {
        var _a = this.props, view = _a.view, target = _a.target;
        var sourceElement = view.model.getElement(target.sourceId);
        var targetElement = view.model.getElement(target.targetId);
        if (!(sourceElement && targetElement)) {
            return undefined;
        }
        var route = view.getRouting(target.id);
        var verticesDefinedByUser = target.vertices || [];
        var vertices = route ? route.vertices : verticesDefinedByUser;
        return geometry_1.computePolyline(sourceElement, targetElement, vertices);
    };
    HaloLink.prototype.calculateDegree = function (source, target) {
        var x = target.x - source.x;
        var y = target.y - source.y;
        var r = Math.sqrt(x * x + y * y);
        var unit = { x: x / r, y: y / r };
        return Math.atan2(unit.y, unit.x) * (180 / Math.PI);
    };
    HaloLink.prototype.renderSourceButton = function (polyline) {
        var _a = this.props, editor = _a.editor, target = _a.target;
        var point = geometry_1.getPointAlongPolyline(polyline, 0);
        var _b = this.paperToScrollablePaneCoords(point), x = _b.x, y = _b.y;
        var style = { top: y - BUTTON_SIZE / 2, left: x - BUTTON_SIZE / 2 };
        return (React.createElement("button", { className: CLASS_NAME + "__button", style: style, disabled: isDeletedLink(editor.authoringState, target), onMouseDown: this.onSourceMove },
            React.createElement("svg", { width: BUTTON_SIZE, height: BUTTON_SIZE },
                React.createElement("g", { transform: "scale(" + BUTTON_SIZE + ")" },
                    React.createElement("circle", { r: 0.5, cx: 0.5, cy: 0.5, fill: '#198AD3' })))));
    };
    HaloLink.prototype.getButtonPosition = function (polyline, index) {
        var polylineLength = geometry_1.computePolylineLength(polyline);
        var point = geometry_1.getPointAlongPolyline(polyline, polylineLength - (BUTTON_SIZE + BUTTON_MARGIN) * index);
        var _a = this.paperToScrollablePaneCoords(point), x = _a.x, y = _a.y;
        return { top: y - BUTTON_SIZE / 2, left: x - BUTTON_SIZE / 2 };
    };
    HaloLink.prototype.renderTargetButton = function (polyline) {
        var _a = this.props, editor = _a.editor, target = _a.target;
        var style = this.getButtonPosition(polyline, 0);
        var length = polyline.length;
        var degree = this.calculateDegree(polyline[length - 1], polyline[length - 2]);
        return (React.createElement("button", { className: CLASS_NAME + "__button", style: style, disabled: isDeletedLink(editor.authoringState, target), onMouseDown: this.onTargetMove },
            React.createElement("svg", { width: BUTTON_SIZE, height: BUTTON_SIZE, style: { transform: "rotate(" + degree + "deg)" } },
                React.createElement("g", { transform: "scale(" + BUTTON_SIZE + ")" },
                    React.createElement("polygon", { points: '0,0.5 1,1 1,0', fill: '#198AD3' })))));
    };
    HaloLink.prototype.renderEditButton = function (polyline) {
        var canEdit = this.state.canEdit;
        var style = this.getButtonPosition(polyline, 1);
        if (canEdit === undefined) {
            return (React.createElement("div", { className: CLASS_NAME + "__spinner", style: style },
                React.createElement(spinner_1.HtmlSpinner, { width: 20, height: 20 })));
        }
        var title = canEdit ? 'Edit link' : 'Editing is unavailable for the selected link';
        return (React.createElement("button", { className: CLASS_NAME + "__button " + CLASS_NAME + "__edit", style: style, title: title, onClick: this.props.onEdit, disabled: !canEdit }));
    };
    HaloLink.prototype.renderDeleteButton = function (polyline) {
        var canDelete = this.state.canDelete;
        var style = this.getButtonPosition(polyline, 2);
        if (canDelete === undefined) {
            return (React.createElement("div", { className: CLASS_NAME + "__spinner", style: style },
                React.createElement(spinner_1.HtmlSpinner, { width: 20, height: 20 })));
        }
        var title = canDelete ? 'Delete link' : 'Deletion is unavailable for the selected link';
        return (React.createElement("button", { className: CLASS_NAME + "__button " + CLASS_NAME + "__delete", style: style, title: title, onClick: this.props.onDelete, disabled: !canDelete }));
    };
    // Link editing implementation could be rethought in the future.
    HaloLink.prototype.renderEditLabelButton = function () {
        var _a = this.props, view = _a.view, target = _a.target, paperArea = _a.paperArea, onEditLabel = _a.onEditLabel;
        var linkType = view.model.getLinkType(target.typeId);
        var template = view.createLinkTemplate(linkType);
        if (!template.setLinkLabel || !target.labelBounds) {
            return null;
        }
        var _b = target.labelBounds, x = _b.x, y = _b.y, width = _b.width, height = _b.height;
        var _c = paperArea.paperToScrollablePaneCoords(x + width, y + height / 2), left = _c.x, top = _c.y;
        var size = { width: 15, height: 17 };
        var style = { width: size.width, height: size.height, top: top - size.height / 2, left: left };
        return React.createElement("button", { className: CLASS_NAME + "__edit-label-button", style: style, onClick: function () { return onEditLabel(); }, title: 'Edit Link Label' });
    };
    HaloLink.prototype.render = function () {
        var _a = this.props, editor = _a.editor, target = _a.target, metadataApi = _a.metadataApi;
        var polyline = this.computePolyline();
        if (!polyline) {
            return null;
        }
        var isAuthoringMode = Boolean(metadataApi);
        var deleteButton = (isDeletedByItself(editor.authoringState, target) ||
            isSourceOrTargetDeleted(editor.authoringState, target) ? null : this.renderDeleteButton(polyline));
        return (React.createElement("div", { className: "" + CLASS_NAME },
            isAuthoringMode ? this.renderTargetButton(polyline) : null,
            isAuthoringMode ? this.renderSourceButton(polyline) : null,
            !isAuthoringMode || isDeletedLink(editor.authoringState, target)
                ? null : this.renderEditButton(polyline),
            isAuthoringMode ? deleteButton : null,
            this.renderEditLabelButton()));
    };
    return HaloLink;
}(React.Component));
exports.HaloLink = HaloLink;
function isDeletedLink(state, link) {
    return isDeletedByItself(state, link) || isSourceOrTargetDeleted(state, link);
}
function isDeletedByItself(state, link) {
    var event = state.links.get(link.data);
    return event && event.deleted;
}
function isSourceOrTargetDeleted(state, link) {
    var sourceEvent = state.elements.get(link.data.sourceId);
    var targetEvent = state.elements.get(link.data.targetId);
    return (sourceEvent && sourceEvent.deleted ||
        targetEvent && targetEvent.deleted);
}


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(45);
var geometry_1 = __webpack_require__(56);
var paper_1 = __webpack_require__(51);
var view_1 = __webpack_require__(65);
var async_1 = __webpack_require__(60);
var events_1 = __webpack_require__(54);
var spinner_1 = __webpack_require__(89);
var authoringState_1 = __webpack_require__(88);
var CLASS_NAME = "ontodia-authoring-state";
var LINK_LABEL_MARGIN = 5;
var LinkStateWidget = /** @class */ (function (_super) {
    tslib_1.__extends(LinkStateWidget, _super);
    function LinkStateWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listener = new events_1.EventObserver();
        _this.delayedUpdate = new async_1.Debouncer();
        _this.scheduleUpdate = function () {
            _this.delayedUpdate.call(_this.performUpdate);
        };
        _this.performUpdate = function () {
            _this.forceUpdate();
        };
        return _this;
    }
    LinkStateWidget.prototype.componentDidMount = function () {
        this.listenEvents();
    };
    LinkStateWidget.prototype.componentDidUpdate = function (prevProps) {
        var sameEventSources = (this.props.view === prevProps.view);
        if (!sameEventSources) {
            this.listener.stopListening();
            this.listenEvents();
        }
    };
    LinkStateWidget.prototype.componentWillUnmount = function () {
        this.listener.stopListening();
    };
    LinkStateWidget.prototype.listenEvents = function () {
        var _this = this;
        var _a = this.props, editor = _a.editor, view = _a.view;
        this.listener.listen(editor.model.events, 'elementEvent', function (_a) {
            var data = _a.data;
            if (data.changeSize || data.changePosition) {
                _this.scheduleUpdate();
            }
        });
        this.listener.listen(editor.model.events, 'linkEvent', function (_a) {
            var data = _a.data;
            if (data.changeVertices || data.changeLabelBounds) {
                _this.scheduleUpdate();
            }
        });
        this.listener.listen(editor.model.events, 'changeCells', this.scheduleUpdate);
        this.listener.listen(editor.events, 'changeAuthoringState', this.scheduleUpdate);
        this.listener.listen(editor.events, 'changeTemporaryState', this.scheduleUpdate);
        this.listener.listen(editor.events, 'changeValidationState', this.scheduleUpdate);
        this.listener.listen(view.events, 'syncUpdate', function (_a) {
            var layer = _a.layer;
            if (layer === view_1.RenderingLayer.Editor) {
                _this.delayedUpdate.runSynchronously();
            }
        });
    };
    LinkStateWidget.prototype.calculateLinkPath = function (link) {
        var polyline = this.calculatePolyline(link);
        return 'M' + polyline.map(function (_a) {
            var x = _a.x, y = _a.y;
            return x + "," + y;
        }).join(' L');
    };
    LinkStateWidget.prototype.calculatePolyline = function (link) {
        var _a = this.props, editor = _a.editor, view = _a.view;
        var source = editor.model.getElement(link.sourceId);
        var target = editor.model.getElement(link.targetId);
        var route = view.getRouting(link.id);
        var verticesDefinedByUser = link.vertices || [];
        var vertices = route ? route.vertices : verticesDefinedByUser;
        return geometry_1.computePolyline(source, target, vertices);
    };
    LinkStateWidget.prototype.renderLinkStateLabels = function () {
        var _this = this;
        var editor = this.props.editor;
        return editor.model.links.map(function (link) {
            var renderedState = null;
            var state = editor.authoringState.links.get(link.data);
            if (state) {
                var onCancel = function () { return editor.discardChange(state); };
                var statusText = void 0;
                var title = void 0;
                if (state.deleted) {
                    statusText = 'Delete';
                    title = 'Revert deletion of the link';
                }
                else if (!state.before) {
                    statusText = 'New';
                    title = 'Revert creation of the link';
                }
                else {
                    statusText = 'Change';
                    title = 'Revert all changes in properties of the link';
                }
                if (statusText && title) {
                    renderedState = (React.createElement("span", null,
                        React.createElement("span", { className: CLASS_NAME + "__state-label" }, statusText),
                        "[",
                        React.createElement("span", { className: CLASS_NAME + "__state-cancel", onClick: onCancel, title: title }, "cancel"),
                        "]"));
                }
            }
            var renderedErrors = _this.renderLinkErrors(link.data);
            if (renderedState || renderedErrors) {
                var labelPosition = _this.getLinkStateLabelPosition(link);
                if (!labelPosition) {
                    return null;
                }
                var style = { left: labelPosition.x, top: labelPosition.y };
                return React.createElement("div", { className: CLASS_NAME + "__state-indicator", key: link.id, style: style },
                    React.createElement("div", { className: CLASS_NAME + "__state-indicator-container" },
                        React.createElement("div", { className: CLASS_NAME + "__state-indicator-body" },
                            renderedState,
                            renderedErrors)));
            }
            else {
                return null;
            }
        });
    };
    LinkStateWidget.prototype.renderLinkStateHighlighting = function () {
        var _this = this;
        var editor = this.props.editor;
        return editor.model.links.map(function (link) {
            if (editor.temporaryState.links.has(link.data)) {
                var path = _this.calculateLinkPath(link);
                return (React.createElement("path", { key: link.id, d: path, fill: 'none', stroke: 'grey', strokeWidth: 5, strokeOpacity: 0.5, strokeDasharray: '8 8' }));
            }
            var event = editor.authoringState.links.get(link.data);
            var isDeletedLink = authoringState_1.AuthoringState.isDeletedLink(editor.authoringState, link.data);
            var isUncertainLink = authoringState_1.AuthoringState.isUncertainLink(editor.authoringState, link.data);
            if (event || isDeletedLink || isUncertainLink) {
                var path = _this.calculateLinkPath(link);
                var color = void 0;
                if (isDeletedLink) {
                    color = 'red';
                }
                else if (isUncertainLink) {
                    color = 'blue';
                }
                else if (event && event.type === authoringState_1.AuthoringKind.ChangeLink) {
                    color = event.before ? 'blue' : 'green';
                }
                return (React.createElement("path", { key: link.id, d: path, fill: 'none', stroke: color, strokeWidth: 5, strokeOpacity: 0.5 }));
            }
            return null;
        });
    };
    LinkStateWidget.prototype.getLinkStateLabelPosition = function (link) {
        if (link.labelBounds) {
            var _a = link.labelBounds, x = _a.x, y = _a.y;
            return { x: x, y: y - LINK_LABEL_MARGIN / 2 };
        }
        else {
            var polyline = this.calculatePolyline(link);
            var polylineLength = geometry_1.computePolylineLength(polyline);
            return geometry_1.getPointAlongPolyline(polyline, polylineLength / 2);
        }
    };
    LinkStateWidget.prototype.renderLinkErrors = function (linkModel) {
        var editor = this.props.editor;
        var validationState = editor.validationState;
        var validation = validationState.links.get(linkModel);
        if (!validation) {
            return null;
        }
        var title = validation.errors.map(function (error) { return error.message; }).join('\n');
        return this.renderErrorIcon(title, validation);
    };
    LinkStateWidget.prototype.renderErrorIcon = function (title, validation) {
        return React.createElement("div", { className: CLASS_NAME + "__item-error", title: title },
            validation.loading
                ? React.createElement(spinner_1.HtmlSpinner, { width: 15, height: 17 })
                : React.createElement("div", { className: CLASS_NAME + "__item-error-icon" }),
            (!validation.loading && validation.errors.length > 0)
                ? validation.errors.length : undefined);
    };
    LinkStateWidget.prototype.render = function () {
        var _a = this.props, editor = _a.editor, paperTransform = _a.paperTransform;
        var scale = paperTransform.scale, originX = paperTransform.originX, originY = paperTransform.originY;
        if (!editor.inAuthoringMode) {
            return null;
        }
        var htmlTransformStyle = {
            position: 'absolute', left: 0, top: 0,
            transform: "scale(" + scale + "," + scale + ")translate(" + originX + "px," + originY + "px)",
        };
        return React.createElement("div", { className: "" + CLASS_NAME },
            React.createElement(paper_1.TransformedSvgCanvas, { paperTransform: paperTransform, style: { overflow: 'visible', pointerEvents: 'none' } }, this.renderLinkStateHighlighting()),
            React.createElement("div", { className: CLASS_NAME + "__validation-layer", style: htmlTransformStyle }, this.renderLinkStateLabels()));
    };
    return LinkStateWidget;
}(React.Component));
exports.LinkStateWidget = LinkStateWidget;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(45);
var async_1 = __webpack_require__(60);
var events_1 = __webpack_require__(54);
var spinner_1 = __webpack_require__(89);
var CLASS_NAME = "ontodia-authoring-state";
var ElementDecorator = /** @class */ (function (_super) {
    tslib_1.__extends(ElementDecorator, _super);
    function ElementDecorator(props) {
        var _this = _super.call(this, props) || this;
        _this.listener = new events_1.EventObserver();
        _this.delayedUpdate = new async_1.Debouncer();
        var model = props.model, editor = props.editor;
        _this.state = {
            state: editor.authoringState.elements.get(model.iri),
            validation: editor.validationState.elements.get(model.iri),
            isTemporary: editor.temporaryState.elements.has(model.iri),
        };
        return _this;
    }
    ElementDecorator.prototype.componentDidMount = function () {
        var _this = this;
        var _a = this.props, model = _a.model, editor = _a.editor;
        this.listener.listen(model.events, 'changeSize', function () {
            return _this.forceUpdate();
        });
        this.listener.listen(editor.events, 'changeAuthoringState', function () {
            return _this.setState({ state: editor.authoringState.elements.get(model.iri) });
        });
        this.listener.listen(editor.events, 'changeValidationState', function () {
            return _this.setState({ validation: editor.validationState.elements.get(model.iri) });
        });
        this.listener.listen(editor.events, 'changeTemporaryState', function () {
            return _this.setState({ isTemporary: editor.temporaryState.elements.has(model.iri) });
        });
        this.listener.listen(model.events, 'changeData', function (event) {
            if (event.previous.id !== model.iri) {
                _this.setState({
                    isTemporary: editor.temporaryState.elements.has(model.iri),
                    validation: editor.validationState.elements.get(model.iri),
                    state: editor.authoringState.elements.get(model.iri),
                });
            }
        });
    };
    ElementDecorator.prototype.componentWillUnmount = function () {
        this.listener.stopListening();
        this.delayedUpdate.dispose();
    };
    ElementDecorator.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return (this.state.state !== nextState.state ||
            this.state.validation !== nextState.validation ||
            this.state.isTemporary !== nextState.isTemporary ||
            this.props.position !== nextProps.position);
    };
    ElementDecorator.prototype.renderElementOutlines = function () {
        var model = this.props.model;
        var _a = this.state, state = _a.state, isTemporary = _a.isTemporary;
        var _b = model.size, width = _b.width, height = _b.height;
        if (isTemporary) {
            return [
                React.createElement("rect", { key: model.id + "-opacity", x: 0, y: 0, width: width, height: height, fill: 'rgba(255, 255, 255, 0.5)' }),
                React.createElement("rect", { key: model.id + "-stripes", x: 0, y: 0, width: width, height: height, fill: 'url(#stripe-pattern)' })
            ];
        }
        if (state && state.deleted) {
            var right = width;
            var bottom = height;
            return (React.createElement("g", { key: model.id },
                React.createElement("rect", { x: 0, y: 0, width: width, height: height, fill: 'white', fillOpacity: 0.5 }),
                React.createElement("line", { x1: 0, y1: 0, x2: right, y2: bottom, stroke: 'red' }),
                React.createElement("line", { x1: right, y1: 0, x2: 0, y2: bottom, stroke: 'red' })));
        }
        return null;
    };
    ElementDecorator.prototype.renderErrorIcon = function (title, validation) {
        return React.createElement("div", { className: CLASS_NAME + "__item-error", title: title },
            validation.loading
                ? React.createElement(spinner_1.HtmlSpinner, { width: 15, height: 17 })
                : React.createElement("div", { className: CLASS_NAME + "__item-error-icon" }),
            (!validation.loading && validation.errors.length > 0)
                ? validation.errors.length : undefined);
    };
    ElementDecorator.prototype.renderElementErrors = function () {
        var view = this.props.view;
        var validation = this.state.validation;
        if (!validation) {
            return null;
        }
        var title = validation.errors.map(function (error) {
            if (error.propertyType) {
                var _a = view.model.createProperty(error.propertyType), id = _a.id, label = _a.label;
                var source = view.formatLabel(label, id);
                return source + ": " + error.message;
            }
            else {
                return error.message;
            }
        }).join('\n');
        return this.renderErrorIcon(title, validation);
    };
    ElementDecorator.prototype.renderElementState = function () {
        var _a = this.props, model = _a.model, editor = _a.editor;
        var state = this.state.state;
        if (state) {
            var onCancel = function () { return editor.discardChange(state); };
            var renderedState = void 0;
            var statusText = void 0;
            var title = void 0;
            if (state.deleted) {
                statusText = 'Delete';
                title = 'Revert deletion of the element';
            }
            else if (!state.before) {
                statusText = 'New';
                title = 'Revert creation of the element';
            }
            else {
                statusText = 'Change';
                title = 'Revert all changes in properties of the element';
            }
            if (statusText && title) {
                renderedState = (React.createElement("span", null,
                    React.createElement("span", { className: CLASS_NAME + "__state-label" }, statusText),
                    "[",
                    React.createElement("span", { className: CLASS_NAME + "__state-cancel", onClick: onCancel, title: title }, "cancel"),
                    "]"));
            }
            var renderedErrors = this.renderElementErrors();
            if (renderedState || renderedErrors) {
                return (React.createElement("div", { className: CLASS_NAME + "__state-indicator", key: model.id, style: { left: 0, top: 0 } },
                    React.createElement("div", { className: CLASS_NAME + "__state-indicator-container" },
                        React.createElement("div", { className: CLASS_NAME + "__state-indicator-body" },
                            renderedState,
                            renderedErrors))));
            }
        }
        return null;
    };
    ElementDecorator.prototype.render = function () {
        var _a = this.props.model, position = _a.position, size = _a.size;
        var transform = "translate(" + position.x + "px," + position.y + "px)";
        var outlines = this.renderElementOutlines();
        var state = this.renderElementState();
        if (!outlines && !state) {
            return null;
        }
        return (React.createElement("div", { style: { position: 'absolute', transform: transform } },
            outlines ? (React.createElement("svg", { width: size.width, height: size.height, style: { position: 'absolute', pointerEvents: 'none', overflow: 'visible' } },
                React.createElement("defs", null,
                    React.createElement("pattern", { id: 'stripe-pattern', patternUnits: 'userSpaceOnUse', width: 13, height: 13, patternTransform: 'rotate(45)' },
                        React.createElement("line", { x1: 0, y: 0, x2: 0, y2: 13, stroke: '#ddd', strokeWidth: 10, strokeOpacity: 0.2 }))),
                this.renderElementOutlines())) : null,
            state));
    };
    return ElementDecorator;
}(React.Component));
exports.ElementDecorator = ElementDecorator;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(45);
var schema_1 = __webpack_require__(53);
var linkLayer_1 = __webpack_require__(81);
var elements_1 = __webpack_require__(52);
var geometry_1 = __webpack_require__(56);
var paper_1 = __webpack_require__(51);
var async_1 = __webpack_require__(60);
var events_1 = __webpack_require__(54);
var spinner_1 = __webpack_require__(89);
var EditLayerMode;
(function (EditLayerMode) {
    EditLayerMode[EditLayerMode["establishLink"] = 0] = "establishLink";
    EditLayerMode[EditLayerMode["moveLinkSource"] = 1] = "moveLinkSource";
    EditLayerMode[EditLayerMode["moveLinkTarget"] = 2] = "moveLinkTarget";
})(EditLayerMode = exports.EditLayerMode || (exports.EditLayerMode = {}));
var EditLayer = /** @class */ (function (_super) {
    tslib_1.__extends(EditLayer, _super);
    function EditLayer(props) {
        var _this = _super.call(this, props) || this;
        _this.listener = new events_1.EventObserver();
        _this.cancellation = new async_1.Cancellation();
        _this.beginCreatingLink = function (params) {
            var model = _this.props.view.model;
            var sourceId = params.sourceId, point = params.point;
            var temporaryElement = _this.createTemporaryElement(point);
            var temporaryLink = model.addLink(new elements_1.Link({
                typeId: schema_1.PLACEHOLDER_LINK_TYPE,
                sourceId: sourceId,
                targetId: temporaryElement.id,
            }));
            var fatLinkType = model.createLinkType(temporaryLink.typeId);
            fatLinkType.setVisibility({ visible: true, showLabel: false });
            _this.temporaryElement = temporaryElement;
            _this.temporaryLink = temporaryLink;
        };
        _this.onMouseMove = function (e) {
            var targetElement = _this.state.targetElement;
            e.preventDefault();
            e.stopPropagation();
            var point = _this.props.paperArea.pageToPaperCoords(e.pageX, e.pageY);
            _this.temporaryElement.setPosition(point);
            var newTargetElement = _this.findElementFormPoint(point);
            if (newTargetElement && (!targetElement || newTargetElement.iri !== targetElement.iri)) {
                _this.canDropOnElement(newTargetElement);
            }
            _this.setState({ targetElement: newTargetElement });
        };
        _this.onMouseUp = function (e) {
            var _a = _this.props, editor = _a.editor, mode = _a.mode;
            var _b = _this.state, targetElement = _b.targetElement, canDropOnElement = _b.canDropOnElement, canDropOnCanvas = _b.canDropOnCanvas;
            var batch = editor.model.history.startBatch();
            editor.model.removeElement(_this.temporaryElement.id);
            batch.discard();
            if (targetElement || (mode === EditLayerMode.moveLinkSource || mode === EditLayerMode.moveLinkTarget)) {
                _this.endChangingLink({ link: _this.temporaryLink, targetElement: targetElement, canDrop: canDropOnElement }).then(function (link) {
                    if (link) {
                        editor.setSelection([link]);
                        editor.showEditLinkForm(link);
                    }
                });
            }
            else if (canDropOnCanvas) {
                var point_1 = _this.props.paperArea.pageToPaperCoords(e.pageX, e.pageY);
                var source_1 = editor.model.getElement(_this.temporaryLink.sourceId);
                _this.createNewElement(source_1.data).then(function (target) {
                    target.setPosition(point_1);
                    _this.endChangingLink({
                        link: _this.temporaryLink, targetElement: target, canDrop: canDropOnCanvas,
                    }).then(function (link) {
                        editor.setSelection([target]);
                        editor.showEditElementTypeForm({ link: link, source: source_1, target: target });
                    });
                });
            }
            editor.finishEditing();
        };
        _this.createNewElement = function (source) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var _a, editor, metadataApi, elementTypes, classId, type, typeName, labelText, types, entityIri, elementModel;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.props, editor = _a.editor, metadataApi = _a.metadataApi;
                        if (!metadataApi) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, metadataApi.typesOfElementsDraggedFrom(source, this.cancellation.signal)];
                    case 1:
                        elementTypes = _b.sent();
                        classId = elementTypes.length === 1 ? elementTypes[0] : schema_1.PLACEHOLDER_ELEMENT_TYPE;
                        type = this.props.editor.model.createClass(classId);
                        typeName = this.props.view.formatLabel(type.label, type.id);
                        labelText = classId === schema_1.PLACEHOLDER_ELEMENT_TYPE ? 'New Entity' : "New " + typeName;
                        types = [classId];
                        return [4 /*yield*/, metadataApi.generateNewElementIri(types, async_1.Cancellation.NEVER_SIGNAL)];
                    case 2:
                        entityIri = _b.sent();
                        elementModel = {
                            id: entityIri,
                            types: types,
                            label: { values: [{ value: labelText, language: '' }] },
                            properties: {},
                        };
                        return [2 /*return*/, editor.createNewEntity({ elementModel: elementModel, temporary: true })];
                }
            });
        }); };
        _this.state = {};
        return _this;
    }
    EditLayer.prototype.componentDidMount = function () {
        var _a = this.props, mode = _a.mode, target = _a.target, point = _a.point;
        if (mode === EditLayerMode.establishLink) {
            this.beginCreatingLink({ sourceId: target.id, point: point });
        }
        else if (mode === EditLayerMode.moveLinkSource || mode === EditLayerMode.moveLinkTarget) {
            this.beginMovingLink({ link: target, point: point });
        }
        else {
            throw new Error('Unknown edit mode');
        }
        this.forceUpdate();
        this.canDropOnCanvas();
        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('mouseup', this.onMouseUp);
    };
    EditLayer.prototype.componentWillUnmount = function () {
        this.listener.stopListening();
        this.cancellation.abort();
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp);
    };
    EditLayer.prototype.beginMovingLink = function (params) {
        var _a = this.props, editor = _a.editor, mode = _a.mode;
        var link = params.link, point = params.point;
        this.oldLink = link;
        editor.model.removeLink(link.id);
        var id = link.id, typeId = link.typeId, sourceId = link.sourceId, targetId = link.targetId, data = link.data, vertices = link.vertices;
        var temporaryElement = this.createTemporaryElement(point);
        var temporaryLink;
        if (mode === EditLayerMode.moveLinkSource) {
            temporaryLink = editor.model.addLink(new elements_1.Link({
                id: id, typeId: typeId, sourceId: temporaryElement.id, targetId: targetId, data: data, vertices: vertices,
            }));
        }
        else if (mode === EditLayerMode.moveLinkTarget) {
            temporaryLink = editor.model.addLink(new elements_1.Link({
                id: id, typeId: typeId, sourceId: sourceId, targetId: temporaryElement.id, data: data, vertices: vertices,
            }));
        }
        else {
            throw new Error('Unknown edit mode');
        }
        this.temporaryElement = temporaryElement;
        this.temporaryLink = temporaryLink;
    };
    EditLayer.prototype.createTemporaryElement = function (point) {
        var temporaryElement = this.props.view.model.createTemporaryElement();
        temporaryElement.setPosition(point);
        return temporaryElement;
    };
    EditLayer.prototype.canDropOnCanvas = function () {
        var _this = this;
        var _a = this.props, mode = _a.mode, editor = _a.editor, metadataApi = _a.metadataApi;
        if (!metadataApi || mode !== EditLayerMode.establishLink) {
            this.setState({ canDropOnCanvas: false });
            return;
        }
        this.setState({ canDropOnCanvas: undefined });
        var source = editor.model.getElement(this.temporaryLink.sourceId).data;
        metadataApi.canDropOnCanvas(source, this.cancellation.signal).then(function (canDropOnCanvas) {
            if (!_this.cancellation.signal.aborted) {
                _this.setState({ canDropOnCanvas: canDropOnCanvas });
            }
        });
    };
    EditLayer.prototype.canDropOnElement = function (targetElement) {
        var _this = this;
        var _a = this.props, mode = _a.mode, editor = _a.editor, metadataApi = _a.metadataApi;
        if (!metadataApi) {
            this.setState({ canDropOnElement: false });
            return;
        }
        this.setState({ canDropOnElement: undefined });
        var source;
        var target;
        if (mode === EditLayerMode.establishLink || mode === EditLayerMode.moveLinkTarget) {
            source = editor.model.getElement(this.temporaryLink.sourceId).data;
            target = targetElement.data;
        }
        else if (mode === EditLayerMode.moveLinkSource) {
            source = targetElement.data;
            target = editor.model.getElement(this.temporaryLink.targetId).data;
        }
        metadataApi.canDropOnElement(source, target, this.cancellation.signal).then(function (canDropOnElement) {
            if (!_this.cancellation.signal.aborted) {
                _this.setState({ canDropOnElement: canDropOnElement });
            }
        });
    };
    EditLayer.prototype.endChangingLink = function (params) {
        var _a = this.props, editor = _a.editor, mode = _a.mode;
        var link = params.link, targetElement = params.targetElement, canDrop = params.canDrop;
        var originalLink;
        editor.model.removeLink(link.id);
        if (this.oldLink) {
            originalLink = editor.model.addLink(this.oldLink);
        }
        if (mode === EditLayerMode.establishLink) {
            var sourceElement = editor.model.getElement(link.sourceId);
            if (canDrop && targetElement) {
                return this.createNewLink(sourceElement, targetElement);
            }
        }
        else if (mode === EditLayerMode.moveLinkSource) {
            if (canDrop && targetElement) {
                return Promise.resolve(editor.moveLinkSource({ link: link, newSource: targetElement }));
            }
        }
        else if (mode === EditLayerMode.moveLinkTarget) {
            if (canDrop && targetElement) {
                return Promise.resolve(editor.moveLinkTarget({ link: link, newTarget: targetElement }));
            }
        }
        else {
            throw new Error('Unknown edit mode');
        }
        return Promise.resolve(originalLink);
    };
    EditLayer.prototype.createNewLink = function (source, target) {
        var _a = this.props, editor = _a.editor, metadataApi = _a.metadataApi;
        if (!metadataApi) {
            return Promise.resolve(undefined);
        }
        return metadataApi.possibleLinkTypes(source.data, target.data, this.cancellation.signal).then(function (linkTypes) {
            var _a;
            var placeholder = { linkTypeIri: schema_1.PLACEHOLDER_LINK_TYPE, direction: elements_1.LinkDirection.out };
            var _b = linkTypes.length === 1 ? linkTypes[0] : placeholder, typeId = _b.linkTypeIri, direction = _b.direction;
            var data = {
                linkTypeId: typeId,
                sourceId: source.iri,
                targetId: target.iri,
            };
            var _c = [source.id, target.id], sourceId = _c[0], targetId = _c[1];
            // switches source and target if the direction equals 'in'
            if (direction === elements_1.LinkDirection.in) {
                data.sourceId = target.iri;
                data.targetId = source.iri;
                _a = [targetId, sourceId], sourceId = _a[0], targetId = _a[1];
            }
            var link = new elements_1.Link({ typeId: typeId, sourceId: sourceId, targetId: targetId, data: data });
            var existingLink = editor.model.findLink(link.typeId, link.sourceId, link.targetId);
            return existingLink || editor.createNewLink({ link: link, temporary: true });
        });
    };
    EditLayer.prototype.findElementFormPoint = function (point) {
        var elements = this.props.view.model.elements;
        for (var i = elements.length - 1; i >= 0; i--) {
            var element = elements[i];
            var _a = geometry_1.boundsOf(element), x = _a.x, y = _a.y, width = _a.width, height = _a.height;
            if (element.temporary) {
                continue;
            }
            if (point.x >= x && point.x <= x + width && point.y >= y && point.y <= y + height) {
                return element;
            }
        }
        return undefined;
    };
    EditLayer.prototype.renderHighlight = function () {
        var _a = this.state, targetElement = _a.targetElement, canDropOnElement = _a.canDropOnElement;
        if (!targetElement) {
            return null;
        }
        var _b = geometry_1.boundsOf(targetElement), x = _b.x, y = _b.y, width = _b.width, height = _b.height;
        if (canDropOnElement === undefined) {
            return (React.createElement("g", { transform: "translate(" + x + "," + y + ")" },
                React.createElement("rect", { width: width, height: height, fill: 'white', fillOpacity: 0.5 }),
                React.createElement(spinner_1.Spinner, { size: 30, position: { x: width / 2, y: height / 2 } })));
        }
        var stroke = canDropOnElement ? '#5cb85c' : '#c9302c';
        return (React.createElement("rect", { x: x, y: y, width: width, height: height, fill: 'transparent', stroke: stroke, strokeWidth: 3 }));
    };
    EditLayer.prototype.renderCanDropIndicator = function () {
        var _a = this.state, targetElement = _a.targetElement, canDropOnCanvas = _a.canDropOnCanvas;
        if (targetElement) {
            return null;
        }
        var _b = this.temporaryElement.position, x = _b.x, y = _b.y;
        var indicator;
        if (canDropOnCanvas === undefined) {
            indicator = React.createElement(spinner_1.Spinner, { size: 1.2, position: { x: 0.5, y: -0.5 } });
        }
        else if (canDropOnCanvas) {
            indicator = React.createElement("path", { d: 'M0.5,0 L0.5,-1 M0,-0.5 L1,-0.5', strokeWidth: 0.2, stroke: '#5cb85c' });
        }
        else {
            indicator = (React.createElement("g", null,
                React.createElement("circle", { cx: '0.5', cy: '-0.5', r: '0.5', fill: 'none', strokeWidth: 0.2, stroke: '#c9302c' }),
                React.createElement("path", { d: 'M0.5,0 L0.5,-1', strokeWidth: 0.2, stroke: '#c9302c', transform: 'rotate(-45 0.5 -0.5)' })));
        }
        return (React.createElement("g", { transform: "translate(" + x + " " + y + ")scale(40)" },
            React.createElement("rect", { x: -0.5, y: -0.5, width: 1, height: 1, fill: 'rgba(0, 0, 0, 0.1)', rx: 0.25, ry: 0.25 }),
            React.createElement("g", { transform: "translate(" + 0.5 + ", -" + 0.5 + ")scale(" + 0.25 + ")" }, indicator)));
    };
    EditLayer.prototype.render = function () {
        var _a = this.props, view = _a.view, paperTransform = _a.paperTransform;
        if (!this.temporaryLink) {
            return null;
        }
        return (React.createElement(paper_1.TransformedSvgCanvas, { paperTransform: paperTransform, style: { overflow: 'visible' } },
            React.createElement(linkLayer_1.LinkMarkers, { view: view }),
            this.renderHighlight(),
            this.renderCanDropIndicator(),
            React.createElement(linkLayer_1.LinkLayer, { view: view, links: [this.temporaryLink] })));
    };
    return EditLayer;
}(React.Component));
exports.EditLayer = EditLayer;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var model_1 = __webpack_require__(47);
var collections_1 = __webpack_require__(55);
var ValidationState;
(function (ValidationState) {
    ValidationState.empty = createMutable();
    ValidationState.emptyElement = { loading: false, errors: [] };
    ValidationState.emptyLink = { loading: false, errors: [] };
    function createMutable() {
        return {
            elements: new Map(),
            links: new collections_1.HashMap(model_1.hashLink, model_1.sameLink),
        };
    }
    ValidationState.createMutable = createMutable;
    function setElementErrors(state, target, errors) {
        var elements = collections_1.cloneMap(state.elements);
        if (errors.length > 0) {
            elements.set(target, { loading: false, errors: errors });
        }
        else {
            elements.delete(target);
        }
        return tslib_1.__assign(tslib_1.__assign({}, state), { elements: elements });
    }
    ValidationState.setElementErrors = setElementErrors;
    function setLinkErrors(state, target, errors) {
        var links = state.links.clone();
        if (errors.length > 0) {
            links.set(target, { loading: false, errors: errors });
        }
        else {
            links.delete(target);
        }
        return tslib_1.__assign(tslib_1.__assign({}, state), { links: links });
    }
    ValidationState.setLinkErrors = setLinkErrors;
})(ValidationState = exports.ValidationState || (exports.ValidationState = {}));
function changedElementsToValidate(previousAuthoring, editor) {
    var currentAuthoring = editor.authoringState;
    var links = new collections_1.HashMap(model_1.hashLink, model_1.sameLink);
    previousAuthoring.links.forEach(function (e, model) { return links.set(model, true); });
    currentAuthoring.links.forEach(function (e, model) { return links.set(model, true); });
    var toValidate = new Set();
    links.forEach(function (value, linkModel) {
        var current = currentAuthoring.links.get(linkModel);
        var previous = previousAuthoring.links.get(linkModel);
        if (current !== previous) {
            toValidate.add(linkModel.sourceId);
        }
    });
    for (var _i = 0, _a = editor.model.elements; _i < _a.length; _i++) {
        var element = _a[_i];
        var current = currentAuthoring.elements.get(element.iri);
        var previous = previousAuthoring.elements.get(element.iri);
        if (current !== previous) {
            toValidate.add(element.iri);
            // when we remove element incoming link are removed as well so we should update their sources
            if ((current || previous).deleted) {
                for (var _b = 0, _c = element.links; _b < _c.length; _b++) {
                    var link = _c[_b];
                    if (link.data.sourceId !== element.iri) {
                        toValidate.add(link.data.sourceId);
                    }
                }
            }
        }
    }
    return toValidate;
}
exports.changedElementsToValidate = changedElementsToValidate;
function validateElements(targets, validationApi, editor, cancellation) {
    var previousState = editor.validationState;
    var newState = ValidationState.createMutable();
    var _loop_1 = function (element) {
        if (newState.elements.has(element.iri)) {
            return "continue";
        }
        var outboundLinks = element.links.reduce(function (acc, link) {
            if (link.sourceId === element.id) {
                acc.push(link.data);
            }
            return acc;
        }, []);
        if (targets.has(element.iri)) {
            var event_1 = {
                target: element.data,
                outboundLinks: outboundLinks,
                state: editor.authoringState,
                model: editor.model,
                cancellation: cancellation,
            };
            var result = validationApi.validate(event_1);
            var loadingElement = { loading: true, errors: [] };
            var loadingLink_1 = { loading: true, errors: [] };
            newState.elements.set(element.iri, loadingElement);
            outboundLinks.forEach(function (link) { return newState.links.set(link, loadingLink_1); });
            processValidationResult(result, loadingElement, loadingLink_1, event_1, editor);
        }
        else {
            // use previous state for element and outbound links
            newState.elements.set(element.iri, previousState.elements.get(element.iri));
            for (var _i = 0, outboundLinks_1 = outboundLinks; _i < outboundLinks_1.length; _i++) {
                var link = outboundLinks_1[_i];
                newState.links.set(link, previousState.links.get(link));
            }
        }
    };
    for (var _i = 0, _a = editor.model.elements; _i < _a.length; _i++) {
        var element = _a[_i];
        _loop_1(element);
    }
    editor.setValidationState(newState);
}
exports.validateElements = validateElements;
function processValidationResult(result, previousElement, previousLink, e, editor) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var allErrors, err_1, elementErrors, linkErrors, _i, allErrors_1, error, state;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, result];
                case 1:
                    allErrors = _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    // tslint:disable-next-line:no-console
                    console.error("Failed to validate element", e.target, err_1);
                    allErrors = [{ type: 'element', target: e.target.id, message: "Failed to validate element" }];
                    return [3 /*break*/, 3];
                case 3:
                    elementErrors = [];
                    linkErrors = new collections_1.HashMap(model_1.hashLink, model_1.sameLink);
                    e.outboundLinks.forEach(function (link) { return linkErrors.set(link, []); });
                    for (_i = 0, allErrors_1 = allErrors; _i < allErrors_1.length; _i++) {
                        error = allErrors_1[_i];
                        if (error.type === 'element' && error.target === e.target.id) {
                            elementErrors.push(error);
                        }
                        else if (error.type === 'link' && linkErrors.has(error.target)) {
                            linkErrors.get(error.target).push(error);
                        }
                    }
                    state = editor.validationState;
                    if (state.elements.get(e.target.id) === previousElement) {
                        state = ValidationState.setElementErrors(state, e.target.id, elementErrors);
                    }
                    linkErrors.forEach(function (errors, link) {
                        if (state.links.get(link) === previousLink) {
                            state = ValidationState.setLinkErrors(state, link, errors);
                        }
                    });
                    editor.setValidationState(state);
                    return [2 /*return*/];
            }
        });
    });
}


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(45);
var CLASS_NAME = 'ontodia-toolbar';
var DefaultToolbar = /** @class */ (function (_super) {
    tslib_1.__extends(DefaultToolbar, _super);
    function DefaultToolbar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onChangeLanguage = function (event) {
            var value = event.currentTarget.value;
            _this.props.onChangeLanguage(value);
        };
        _this.onExportSVG = function () {
            _this.props.onExportSVG();
        };
        _this.onExportPNG = function () {
            _this.props.onExportPNG();
        };
        return _this;
    }
    DefaultToolbar.prototype.renderSaveDiagramButton = function () {
        if (!this.props.onSaveDiagram) {
            return null;
        }
        return (React.createElement("button", { type: 'button', className: 'saveDiagramButton ontodia-btn ontodia-btn-primary', disabled: this.props.canSaveDiagram === false, onClick: this.props.onSaveDiagram },
            React.createElement("span", { className: 'fa fa-floppy-o', "aria-hidden": 'true' }),
            " Save diagram"));
    };
    DefaultToolbar.prototype.renderPersistAuthoredChangesButton = function () {
        if (!this.props.onPersistChanges) {
            return null;
        }
        return (React.createElement("button", { type: 'button', className: 'saveDiagramButton ontodia-btn ontodia-btn-success', disabled: this.props.canPersistChanges === false, onClick: this.props.onPersistChanges },
            React.createElement("span", { className: 'fa fa-floppy-o', "aria-hidden": 'true' }),
            " Save data"));
    };
    DefaultToolbar.prototype.renderLanguages = function () {
        var _a = this.props, selectedLanguage = _a.selectedLanguage, languages = _a.languages;
        if (languages.length <= 1) {
            return null;
        }
        return (React.createElement("span", { className: "ontodia-btn-group " + CLASS_NAME + "__language-selector" },
            React.createElement("label", { className: 'ontodia-label' },
                React.createElement("span", null, "Data Language - ")),
            React.createElement("select", { value: selectedLanguage, onChange: this.onChangeLanguage }, languages.map(function (_a) {
                var code = _a.code, label = _a.label;
                return React.createElement("option", { key: code, value: code }, label);
            }))));
    };
    DefaultToolbar.prototype.render = function () {
        return (React.createElement("div", { className: CLASS_NAME },
            React.createElement("div", { className: 'ontodia-btn-group ontodia-btn-group-sm' },
                this.renderSaveDiagramButton(),
                this.renderPersistAuthoredChangesButton(),
                this.props.onClearAll ? (React.createElement("button", { type: 'button', className: 'ontodia-btn ontodia-btn-default', title: 'Clear All', onClick: this.props.onClearAll },
                    React.createElement("span", { className: 'fa fa-trash', "aria-hidden": 'true' }),
                    "\u00A0Clear All")) : null,
                React.createElement("button", { type: 'button', className: 'ontodia-btn ontodia-btn-default', title: 'Force layout', onClick: this.props.onForceLayout },
                    React.createElement("span", { className: 'fa fa-sitemap', "aria-hidden": 'true' }),
                    " Layout"),
                React.createElement("button", { type: 'button', className: 'ontodia-btn ontodia-btn-default', title: 'Zoom In', onClick: this.props.onZoomIn },
                    React.createElement("span", { className: 'fa fa-search-plus', "aria-hidden": 'true' })),
                React.createElement("button", { type: 'button', className: 'ontodia-btn ontodia-btn-default', title: 'Zoom Out', onClick: this.props.onZoomOut },
                    React.createElement("span", { className: 'fa fa-search-minus', "aria-hidden": 'true' })),
                React.createElement("button", { type: 'button', className: 'ontodia-btn ontodia-btn-default', title: 'Fit to Screen', onClick: this.props.onZoomToFit },
                    React.createElement("span", { className: 'fa fa-arrows-alt', "aria-hidden": 'true' })),
                React.createElement("button", { type: 'button', className: 'ontodia-btn ontodia-btn-default', title: 'Export diagram as PNG', onClick: this.onExportPNG },
                    React.createElement("span", { className: 'fa fa-picture-o', "aria-hidden": 'true' }),
                    " PNG"),
                React.createElement("button", { type: 'button', className: 'ontodia-btn ontodia-btn-default', title: 'Export diagram as SVG', onClick: this.onExportSVG },
                    React.createElement("span", { className: 'fa fa-picture-o', "aria-hidden": 'true' }),
                    " SVG"),
                React.createElement("button", { type: 'button', className: 'ontodia-btn ontodia-btn-default', title: 'Print diagram', onClick: this.props.onPrint },
                    React.createElement("span", { className: 'fa fa-print', "aria-hidden": 'true' })),
                this.renderLanguages())));
    };
    return DefaultToolbar;
}(React.Component));
exports.DefaultToolbar = DefaultToolbar;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var react_1 = __webpack_require__(45);
var ReactDOM = __webpack_require__(58);
var saveAs = __webpack_require__(134);
var commands_1 = __webpack_require__(63);
var history_1 = __webpack_require__(64);
var view_1 = __webpack_require__(65);
var asyncModel_1 = __webpack_require__(110);
var authoringState_1 = __webpack_require__(88);
var editorController_1 = __webpack_require__(112);
var events_1 = __webpack_require__(54);
var toSvg_1 = __webpack_require__(83);
var navigator_1 = __webpack_require__(135);
var toolbar_1 = __webpack_require__(132);
var workspaceMarkup_1 = __webpack_require__(136);
var workspaceContext_1 = __webpack_require__(87);
var layout_1 = __webpack_require__(105);
var ONTODIA_WEBSITE = 'https://ontodia.org/';
var ONTODIA_LOGO_SVG = __webpack_require__(149);
var Workspace = /** @class */ (function (_super) {
    tslib_1.__extends(Workspace, _super);
    function Workspace(props) {
        var _this = _super.call(this, props) || this;
        _this.listener = new events_1.EventObserver();
        _this._watermarkSvg = ONTODIA_LOGO_SVG;
        _this._watermarkUrl = ONTODIA_WEBSITE;
        _this.zoomToFit = function () {
            return _this.markup.paperArea.zoomToFit();
        };
        _this.zoomToFitRect = function (bbox) {
            _this.markup.paperArea.zoomToFitRect(bbox);
        };
        _this.clearAll = function () {
            _this.editor.removeItems(tslib_1.__spreadArrays(_this.model.elements));
        };
        _this.forceLayout = function () {
            var batch = _this.model.history.startBatch('Force layout');
            batch.history.registerToUndo(commands_1.RestoreGeometry.capture(_this.model));
            layout_1.applyLayout(_this.model, layout_1.forceLayout({ model: _this.model }));
            for (var _i = 0, _a = _this.model.links; _i < _a.length; _i++) {
                var link = _a[_i];
                link.setVertices([]);
            }
            batch.store();
        };
        _this.exportSvg = function (fileName) {
            _this.markup.paperArea.exportSVG().then(function (svg) {
                fileName = fileName || 'diagram.svg';
                var xmlEncodingHeader = '<?xml version="1.0" encoding="UTF-8"?>';
                var blob = new Blob([xmlEncodingHeader + svg], { type: 'image/svg+xml' });
                saveAs(blob, fileName);
            });
        };
        _this.exportPng = function (fileName) {
            fileName = fileName || 'diagram.png';
            _this.markup.paperArea.exportPNG({ backgroundColor: 'white' }).then(function (dataUri) {
                var blob = toSvg_1.dataURLToBlob(dataUri);
                saveAs(blob, fileName);
            });
        };
        _this.undo = function () {
            _this.model.history.undo();
        };
        _this.redo = function () {
            _this.model.history.redo();
        };
        _this.zoomBy = function (value) {
            _this.markup.paperArea.zoomBy(value);
        };
        _this.zoomIn = function () {
            _this.markup.paperArea.zoomIn();
        };
        _this.zoomOut = function () {
            _this.markup.paperArea.zoomOut();
        };
        _this.print = function () {
            _this.markup.paperArea.exportSVG().then(function (svg) {
                var printWindow = window.open('', undefined, 'width=1280,height=720');
                printWindow.document.write(svg);
                printWindow.document.close();
                printWindow.print();
            });
        };
        _this.changeLanguage = function (language) {
            var onLanguageChange = _this.props.onLanguageChange;
            // if language is in controlled mode we'll just forward the change
            if (onLanguageChange) {
                onLanguageChange(language);
            }
            else {
                _this.view.setLanguage(language);
                // since we have toolbar dependent on language, we're forcing update here
                _this.forceUpdate();
            }
        };
        _this.centerTo = function (paperPosition) {
            _this.markup.paperArea.centerTo(paperPosition);
        };
        var _a = _this.props, hideHalo = _a.hideHalo, history = _a.history, _b = _a.viewOptions, viewOptions = _b === void 0 ? {} : _b, metadataApi = _a.metadataApi, validationApi = _a.validationApi, propertyEditor = _a.propertyEditor, elementTemplateResolver = _a.elementTemplateResolver, linkTemplateResolver = _a.linkTemplateResolver, typeStyleResolver = _a.typeStyleResolver, selectLabelLanguage = _a.selectLabelLanguage;
        var linkRouter = viewOptions.linkRouter, onIriClick = viewOptions.onIriClick, disableDefaultHalo = viewOptions.disableDefaultHalo, suggestProperties = viewOptions.suggestProperties, groupBy = viewOptions.groupBy;
        _this.model = new asyncModel_1.AsyncModel(history || new history_1.NonRememberingHistory(), groupBy || []);
        _this.view = new view_1.DiagramView(_this.model, {
            elementTemplateResolver: elementTemplateResolver,
            linkTemplateResolver: linkTemplateResolver,
            typeStyleResolver: typeStyleResolver,
            selectLabelLanguage: selectLabelLanguage,
            linkRouter: linkRouter,
            onIriClick: onIriClick,
        });
        _this.editor = new editorController_1.EditorController({
            model: _this.model,
            view: _this.view,
            disableHalo: hideHalo || disableDefaultHalo,
            suggestProperties: suggestProperties,
            validationApi: validationApi,
            propertyEditor: propertyEditor,
        });
        _this.editor.setMetadataApi(metadataApi);
        _this.view.setLanguage(_this.props.language);
        _this.state = {};
        return _this;
    }
    Workspace.prototype._getPaperArea = function () {
        return this.markup ? this.markup.paperArea : undefined;
    };
    Workspace.prototype._setWatermark = function (watermarkSvg, watermarkUrl) {
        this._watermarkSvg = watermarkSvg;
        this._watermarkUrl = watermarkUrl;
        this.forceUpdate();
    };
    Workspace.prototype.render = function () {
        var _this = this;
        var _a = this.props, hidePanels = _a.hidePanels, hideToolbar = _a.hideToolbar, metadataApi = _a.metadataApi, hideScrollBars = _a.hideScrollBars, onWorkspaceEvent = _a.onWorkspaceEvent, _elementsSearchPanel = _a._elementsSearchPanel;
        return react_1.createElement(workspaceMarkup_1.WorkspaceMarkup, {
            ref: function (markup) { _this.markup = markup; },
            hidePanels: hidePanels,
            hideToolbar: hideToolbar,
            hideScrollBars: hideScrollBars,
            model: this.model,
            view: this.view,
            editor: this.editor,
            metadataApi: metadataApi,
            leftPanelInitiallyOpen: this.props.leftPanelInitiallyOpen,
            rightPanelInitiallyOpen: this.props.rightPanelInitiallyOpen,
            searchCriteria: this.state.criteria,
            onSearchCriteriaChanged: function (criteria) { return _this.setState({ criteria: criteria }); },
            zoomOptions: this.props.zoomOptions,
            onZoom: this.props.onZoom,
            isLeftPanelOpen: this.props.leftPanelInitiallyOpen,
            isRightPanelOpen: this.props.rightPanelInitiallyOpen,
            toolbar: react_1.createElement(ToolbarWrapper, { workspace: this }),
            onWorkspaceEvent: onWorkspaceEvent,
            watermarkSvg: this._watermarkSvg,
            watermarkUrl: this._watermarkUrl,
            elementsSearchPanel: _elementsSearchPanel,
        });
    };
    Workspace.prototype.componentDidMount = function () {
        var _this = this;
        var onWorkspaceEvent = this.props.onWorkspaceEvent;
        this.editor._initializePaperComponents(this.markup.paperArea);
        this.updateNavigator(!this.props.hideNavigator);
        this.listener.listen(this.model.events, 'loadingSuccess', function () {
            _this.view.performSyncUpdate();
            _this.markup.paperArea.centerContent();
        });
        this.listener.listen(this.model.events, 'elementEvent', function (_a) {
            var key = _a.key, data = _a.data;
            if (!data.requestedAddToFilter) {
                return;
            }
            var _b = data.requestedAddToFilter, source = _b.source, linkType = _b.linkType, direction = _b.direction;
            _this.setState({
                criteria: {
                    refElement: source,
                    refElementLink: linkType,
                    linkDirection: direction,
                },
            });
            if (onWorkspaceEvent) {
                onWorkspaceEvent(workspaceContext_1.WorkspaceEventKey.searchUpdateCriteria);
            }
        });
        this.listener.listen(this.markup.paperArea.events, 'pointerUp', function (e) {
            if (_this.props.onPointerUp) {
                _this.props.onPointerUp(e);
            }
        });
        this.listener.listen(this.markup.paperArea.events, 'pointerMove', function (e) {
            if (_this.props.onPointerMove) {
                _this.props.onPointerMove(e);
            }
        });
        this.listener.listen(this.markup.paperArea.events, 'pointerDown', function (e) {
            if (_this.props.onPointerDown) {
                _this.props.onPointerDown(e);
            }
        });
        if (onWorkspaceEvent) {
            this.listener.listen(this.editor.events, 'changeSelection', function () {
                return onWorkspaceEvent(workspaceContext_1.WorkspaceEventKey.editorChangeSelection);
            });
            this.listener.listen(this.editor.events, 'toggleDialog', function () {
                return onWorkspaceEvent(workspaceContext_1.WorkspaceEventKey.editorToggleDialog);
            });
            this.listener.listen(this.editor.events, 'addElements', function () {
                return onWorkspaceEvent(workspaceContext_1.WorkspaceEventKey.editorAddElements);
            });
        }
    };
    Workspace.prototype.componentWillReceiveProps = function (nextProps) {
        var controlledLanguage = Boolean(nextProps.onLanguageChange);
        if (controlledLanguage && nextProps.language !== this.view.getLanguage()) {
            this.view.setLanguage(nextProps.language);
        }
        if (nextProps.metadataApi !== this.editor.metadataApi) {
            this.editor.setMetadataApi(nextProps.metadataApi);
        }
        if (nextProps.hideNavigator !== this.props.hideNavigator) {
            this.updateNavigator(!nextProps.hideNavigator);
        }
    };
    Workspace.prototype.componentWillUnmount = function () {
        this.listener.stopListening();
        this.view.dispose();
    };
    Workspace.prototype.updateNavigator = function (showNavigator) {
        if (showNavigator) {
            var widget = react_1.createElement(navigator_1.Navigator, { view: this.view, expanded: !this.props.collapseNavigator });
            this.view.setPaperWidget({ key: 'navigator', widget: widget, attachment: view_1.WidgetAttachment.Viewport });
        }
        else {
            this.view.setPaperWidget({ key: 'navigator', widget: undefined, attachment: view_1.WidgetAttachment.Viewport });
        }
    };
    Workspace.prototype.getModel = function () { return this.model; };
    Workspace.prototype.getDiagram = function () { return this.view; };
    Workspace.prototype.getEditor = function () { return this.editor; };
    Workspace.prototype.preventTextSelectionUntilMouseUp = function () { this.markup.preventTextSelection(); };
    Workspace.prototype.showWaitIndicatorWhile = function (operation) {
        var _this = this;
        this.markup.paperArea.centerTo();
        this.editor.setSpinner({});
        if (operation) {
            operation.then(function () {
                _this.editor.setSpinner(undefined);
            }).catch(function (error) {
                // tslint:disable-next-line:no-console
                console.error(error);
                _this.editor.setSpinner({ statusText: 'Unknown error occured', errorOccured: true });
            });
        }
    };
    Workspace.defaultProps = {
        hideTutorial: true,
        collapseNavigator: false,
        leftPanelInitiallyOpen: true,
        rightPanelInitiallyOpen: false,
        languages: [
            { code: 'en', label: 'English' },
            { code: 'ru', label: 'Russian' },
        ],
        language: 'en',
    };
    return Workspace;
}(react_1.Component));
exports.Workspace = Workspace;
var ToolbarWrapper = /** @class */ (function (_super) {
    tslib_1.__extends(ToolbarWrapper, _super);
    function ToolbarWrapper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listener = new events_1.EventObserver();
        return _this;
    }
    ToolbarWrapper.prototype.render = function () {
        var workspace = this.props.workspace;
        var view = workspace.getDiagram();
        var editor = workspace.getEditor();
        var _a = workspace.props, languages = _a.languages, onSaveDiagram = _a.onSaveDiagram, onPersistChanges = _a.onPersistChanges, hidePanels = _a.hidePanels, toolbar = _a.toolbar;
        var canPersistChanges = onPersistChanges ? !authoringState_1.AuthoringState.isEmpty(editor.authoringState) : undefined;
        var canSaveDiagram = !canPersistChanges;
        var defaultToolbarProps = {
            onZoomIn: workspace.zoomIn,
            onZoomOut: workspace.zoomOut,
            onZoomToFit: workspace.zoomToFit,
            onPrint: workspace.print,
            onExportSVG: workspace.exportSvg,
            onExportPNG: workspace.exportPng,
            canSaveDiagram: canSaveDiagram,
            onSaveDiagram: onSaveDiagram ? function () { return onSaveDiagram(workspace); } : undefined,
            canPersistChanges: canPersistChanges,
            onPersistChanges: onPersistChanges ? function () { return onPersistChanges(workspace); } : undefined,
            onForceLayout: function () {
                workspace.forceLayout();
                workspace.getDiagram().performSyncUpdate();
                workspace.zoomToFit();
            },
            onClearAll: workspace.clearAll,
            languages: languages,
            selectedLanguage: view.getLanguage(),
            onChangeLanguage: workspace.changeLanguage,
            hidePanels: hidePanels,
        };
        if (toolbar) {
            var toolbarProps = tslib_1.__assign(tslib_1.__assign({}, defaultToolbarProps), toolbar.props);
            return react_1.cloneElement(toolbar, toolbarProps);
        }
        else {
            return react_1.createElement(toolbar_1.DefaultToolbar, defaultToolbarProps);
        }
    };
    ToolbarWrapper.prototype.componentDidMount = function () {
        var _this = this;
        var workspace = this.props.workspace;
        var editor = workspace.getEditor();
        this.listener.listen(editor.events, 'changeAuthoringState', function () {
            _this.forceUpdate();
        });
    };
    ToolbarWrapper.prototype.componentWillUnmount = function () {
        this.listener.stopListening();
    };
    return ToolbarWrapper;
}(react_1.Component));
function renderTo(workspace, container, props) {
    ReactDOM.render(react_1.createElement(workspace, props), container);
}
exports.renderTo = renderTo;


/***/ }),
/* 134 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__134__;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(45);
var d3_color_1 = __webpack_require__(59);
var async_1 = __webpack_require__(60);
var events_1 = __webpack_require__(54);
var paper_1 = __webpack_require__(51);
var CLASS_NAME = 'ontodia-navigator';
var MIN_SCALE = 0.25;
var Navigator = /** @class */ (function (_super) {
    tslib_1.__extends(Navigator, _super);
    function Navigator(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.delayedRedraw = new async_1.Debouncer();
        _this.listener = new events_1.EventObserver();
        _this.scheduleRedraw = function () {
            if (_this.state.expanded) {
                _this.delayedRedraw.call(_this.draw);
            }
        };
        _this.draw = function () {
            var _a = _this.props, pt = _a.paperTransform, width = _a.width, height = _a.height;
            _this.calculateTransform();
            var ctx = _this.canvas.getContext('2d');
            ctx.fillStyle = '#EEEEEE';
            ctx.clearRect(0, 0, width, height);
            ctx.fillRect(0, 0, width, height);
            var paneStart = paper_1.paneTopLeft(pt);
            var paneSize = paper_1.totalPaneSize(pt);
            var paneEnd = {
                x: paneStart.x + paneSize.x,
                y: paneStart.y + paneSize.y,
            };
            var start = canvasFromPaneCoords(paneStart, pt, _this.transform);
            var end = canvasFromPaneCoords(paneEnd, pt, _this.transform);
            ctx.fillStyle = 'white';
            ctx.fillRect(start.x, start.y, end.x - start.x, end.y - start.y);
            ctx.save();
            _this.drawElements(ctx);
            _this.drawViewport(ctx);
            ctx.restore();
        };
        _this.onDragViewport = function (e) {
            e.preventDefault();
            if (_this.isDraggingViewport) {
                var canvas = _this.canvasFromPageCoords(e.pageX, e.pageY);
                var paper = paperFromCanvasCoords(canvas, _this.props.paperTransform, _this.transform);
                _this.props.paperArea.centerTo(paper);
            }
        };
        _this.onMouseUp = function () {
            _this.stopDraggingViewport();
        };
        _this.onWheel = function (e) {
            e.preventDefault();
            var delta = Math.max(-1, Math.min(1, e.deltaY || e.deltaX));
            _this.props.paperArea.zoomBy(-delta * 0.1);
        };
        _this.onToggleClick = function () {
            _this.setState(function (state) { return ({ expanded: !state.expanded }); }, _this.scheduleRedraw);
        };
        _this.state = { expanded: _this.props.expanded };
        return _this;
    }
    Navigator.prototype.componentDidMount = function () {
        var _a = this.props, view = _a.view, paperArea = _a.paperArea;
        this.listener.listen(view.events, 'changeHighlight', this.scheduleRedraw);
        this.listener.listen(view.model.events, 'changeCells', this.scheduleRedraw);
        this.listener.listen(view.model.events, 'elementEvent', this.scheduleRedraw);
        this.listener.listen(paperArea.events, 'pointerMove', this.scheduleRedraw);
        this.listener.listen(paperArea.events, 'scroll', this.scheduleRedraw);
    };
    Navigator.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return nextState !== this.state;
    };
    Navigator.prototype.componentWillUnmount = function () {
        this.delayedRedraw.dispose();
        this.listener.stopListening();
        this.stopDraggingViewport();
    };
    Navigator.prototype.drawElements = function (ctx) {
        var _this = this;
        var _a = this.props, view = _a.view, pt = _a.paperTransform;
        view.model.elements.forEach(function (element) {
            var position = element.position, size = element.size;
            ctx.fillStyle = _this.chooseElementColor(element);
            var _a = canvasFromPaperCoords(position, pt, _this.transform), x1 = _a.x, y1 = _a.y;
            var _b = canvasFromPaperCoords({
                x: position.x + size.width,
                y: position.y + size.height,
            }, pt, _this.transform), x2 = _b.x, y2 = _b.y;
            ctx.fillRect(x1, y1, x2 - x1, y2 - y1);
        });
    };
    Navigator.prototype.chooseElementColor = function (element) {
        var view = this.props.view;
        var isBlurred = view.highlighter && !view.highlighter(element);
        if (isBlurred) {
            return 'lightgray';
        }
        var _a = view.getTypeStyle(element.data.types).color, h = _a.h, c = _a.c, l = _a.l;
        return d3_color_1.hcl(h, c, l).toString();
    };
    Navigator.prototype.drawViewport = function (ctx) {
        var _a = this.props, paperArea = _a.paperArea, pt = _a.paperTransform, width = _a.width, height = _a.height;
        ctx.strokeStyle = '#337ab7';
        ctx.lineWidth = 2;
        var _b = paperArea.getAreaMetrics(), clientWidth = _b.clientWidth, clientHeight = _b.clientHeight;
        var viewportStart = paperArea.clientToScrollablePaneCoords(0, 0);
        var viewportEnd = paperArea.clientToScrollablePaneCoords(clientWidth, clientHeight);
        var _c = canvasFromPaneCoords(viewportStart, pt, this.transform), x1 = _c.x, y1 = _c.y;
        var _d = canvasFromPaneCoords(viewportEnd, pt, this.transform), x2 = _d.x, y2 = _d.y;
        // draw visible viewport rectangle
        ctx.strokeRect(x1, y1, x2 - x1, y2 - y1);
        // draw "out of area" viewport borders
        ctx.beginPath();
        if (x1 < 0) {
            ctx.moveTo(0, y1);
            ctx.lineTo(0, y2);
        }
        if (y1 < 0) {
            ctx.moveTo(x1, 0);
            ctx.lineTo(x2, 0);
        }
        if (x2 > width) {
            ctx.moveTo(width, y1);
            ctx.lineTo(width, y2);
        }
        if (y2 > height) {
            ctx.moveTo(x1, height);
            ctx.lineTo(x2, height);
        }
        ctx.lineWidth = 4;
        ctx.strokeStyle = '#a0d2ff';
        ctx.setLineDash([5, 5]);
        ctx.stroke();
    };
    Navigator.prototype.calculateTransform = function () {
        var _a = this.props, paperArea = _a.paperArea, pt = _a.paperTransform, width = _a.width, height = _a.height, scalePadding = _a.scalePadding;
        var box = paperArea.getContentFittingBox();
        var displayPadding = {
            x: Math.max(box.width, width / MIN_SCALE) * scalePadding,
            y: Math.max(box.height, height / MIN_SCALE) * scalePadding,
        };
        var displayStart = paper_1.paneFromPaperCoords({
            x: box.x - displayPadding.x,
            y: box.y - displayPadding.y,
        }, pt);
        var displayEnd = paper_1.paneFromPaperCoords({
            x: box.x + box.width + displayPadding.x,
            y: box.y + box.height + displayPadding.y,
        }, pt);
        var displaySize = {
            x: displayEnd.x - displayStart.x,
            y: displayEnd.y - displayStart.y,
        };
        var scale = Math.min(width / displaySize.x, height / displaySize.y);
        var canvasOffset = {
            x: (width - displaySize.x * scale) / 2,
            y: (height - displaySize.y * scale) / 2,
        };
        this.transform = { scale: scale, canvasOffset: canvasOffset, paneOffset: displayStart };
    };
    Navigator.prototype.canvasFromPageCoords = function (pageX, pageY) {
        var _a = this.canvas.getBoundingClientRect(), top = _a.top, left = _a.left;
        return {
            x: pageX - left - window.pageXOffset,
            y: pageY - top - window.pageYOffset,
        };
    };
    Navigator.prototype.render = function () {
        var _this = this;
        var _a = this.props, width = _a.width, height = _a.height;
        var expanded = this.state.expanded;
        return (React.createElement("div", { className: CLASS_NAME + " " + CLASS_NAME + "--" + (expanded ? 'expanded' : 'collapsed'), style: expanded ? { width: width, height: height } : undefined },
            React.createElement("canvas", { ref: function (canvas) { return _this.canvas = canvas; }, width: width, height: height, onMouseDown: function (e) {
                    _this.startDragginViewport();
                    _this.onDragViewport(e);
                }, onWheel: this.onWheel }),
            React.createElement("button", { className: CLASS_NAME + "__toggle", title: expanded ? 'Collapse navigator' : 'Expand navigator', onClick: this.onToggleClick },
                React.createElement("div", { className: CLASS_NAME + "__toggle-icon" }))));
    };
    Navigator.prototype.startDragginViewport = function () {
        if (!this.isDraggingViewport) {
            this.isDraggingViewport = true;
            document.addEventListener('mousemove', this.onDragViewport);
            document.addEventListener('mouseup', this.onMouseUp);
        }
    };
    Navigator.prototype.stopDraggingViewport = function () {
        if (this.isDraggingViewport) {
            this.isDraggingViewport = false;
            document.removeEventListener('mousemove', this.onDragViewport);
            document.removeEventListener('mouseup', this.onMouseUp);
        }
    };
    Navigator.defaultProps = {
        width: 300,
        height: 160,
        scalePadding: 0.2,
        expanded: true,
    };
    return Navigator;
}(React.Component));
exports.Navigator = Navigator;
function canvasFromPaneCoords(pane, pt, nt) {
    return {
        x: nt.canvasOffset.x + (pane.x - nt.paneOffset.x) * nt.scale,
        y: nt.canvasOffset.y + (pane.y - nt.paneOffset.y) * nt.scale,
    };
}
function canvasFromPaperCoords(paper, pt, nt) {
    var pane = paper_1.paneFromPaperCoords(paper, pt);
    return canvasFromPaneCoords(pane, pt, nt);
}
function paperFromCanvasCoords(canvas, pt, nt) {
    var pane = {
        x: nt.paneOffset.x + (canvas.x - nt.canvasOffset.x) / nt.scale,
        y: nt.paneOffset.y + (canvas.y - nt.canvasOffset.y) / nt.scale,
    };
    return paper_1.paperFromPaneCoords(pane, pt);
}


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(45);
var paperArea_1 = __webpack_require__(82);
var classTree_1 = __webpack_require__(137);
var instancesSearch_1 = __webpack_require__(122);
var linksToolbox_1 = __webpack_require__(145);
var workspaceContext_1 = __webpack_require__(87);
var async_1 = __webpack_require__(60);
var layout_1 = __webpack_require__(146);
var WorkspaceMarkup = /** @class */ (function (_super) {
    tslib_1.__extends(WorkspaceMarkup, _super);
    function WorkspaceMarkup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.untilMouseUpClasses = [];
        _this.cancellation = new async_1.Cancellation();
        _this.triggerWorkspaceEvent = function (key) {
            var onWorkspaceEvent = _this.props.onWorkspaceEvent;
            if (onWorkspaceEvent) {
                onWorkspaceEvent(key);
            }
        };
        _this.renderToolbar = function () {
            var _a = _this.props, hideToolbar = _a.hideToolbar, toolbar = _a.toolbar;
            if (hideToolbar) {
                return null;
            }
            return React.createElement("div", { className: 'ontodia__header' }, toolbar);
        };
        _this.onCreateInstance = function (classId, position) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var _a, editor, view, model, metadataApi, batch, type, typeName, types, signal, newEntityIri, elementModel, element, targetPosition;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.props, editor = _a.editor, view = _a.view, model = _a.model, metadataApi = _a.metadataApi;
                        return [4 /*yield*/, forceNonReactExecutionContext()];
                    case 1:
                        _b.sent();
                        batch = model.history.startBatch();
                        type = editor.model.getClass(classId);
                        typeName = view.formatLabel(type.label, type.id);
                        types = [classId];
                        signal = this.cancellation.signal;
                        return [4 /*yield*/, metadataApi.generateNewElementIri(types, signal)];
                    case 2:
                        newEntityIri = _b.sent();
                        if (signal.aborted) {
                            return [2 /*return*/];
                        }
                        elementModel = {
                            id: newEntityIri,
                            types: types,
                            label: { values: [{ value: "New " + typeName, language: '' }] },
                            properties: {},
                        };
                        element = editor.createNewEntity({ elementModel: elementModel });
                        view.performSyncUpdate();
                        targetPosition = position || getViewportCenterInPaperCoords(this.paperArea);
                        centerElementToPosition(element, targetPosition);
                        batch.store();
                        editor.setSelection([element]);
                        editor.showEditEntityForm(element);
                        return [2 /*return*/];
                }
            });
        }); };
        _this.onDocumentMouseUp = function () {
            for (var _i = 0, _a = _this.untilMouseUpClasses; _i < _a.length; _i++) {
                var className = _a[_i];
                _this.element.classList.remove(className);
            }
            _this.untilMouseUpClasses = [];
        };
        _this.onDropOnPaper = function (e, paperPosition) {
            e.preventDefault();
            var event = { dragEvent: e, paperPosition: paperPosition };
            if (_this.props.view._tryHandleDropOnPaper(event)) {
                return;
            }
            var iris = tryParseDefaultDragAndDropData(e);
            if (iris.length > 0) {
                _this.props.editor.onDragDrop(iris, paperPosition);
            }
        };
        return _this;
    }
    WorkspaceMarkup.prototype.getChildContext = function () {
        var editor = this.props.editor;
        var ontodiaWorkspace = { editor: editor, triggerWorkspaceEvent: this.triggerWorkspaceEvent };
        return { ontodiaWorkspace: ontodiaWorkspace };
    };
    WorkspaceMarkup.prototype.getLeftPanelLayout = function () {
        var _a = this.props, view = _a.view, editor = _a.editor, model = _a.model, searchCriteria = _a.searchCriteria, onSearchCriteriaChanged = _a.onSearchCriteriaChanged;
        var classTree = (React.createElement(classTree_1.ClassTree, { view: view, editor: editor, onClassSelected: function (classId) {
                var elementType = model.createClass(classId);
                onSearchCriteriaChanged({ elementType: elementType });
            }, onCreateInstance: this.onCreateInstance }));
        var instancesSearch = (React.createElement(instancesSearch_1.InstancesSearch, { view: view, model: model, criteria: searchCriteria || {}, onCriteriaChanged: onSearchCriteriaChanged }));
        return {
            type: layout_1.WorkspaceLayoutType.Column,
            children: [{
                    id: 'classes',
                    type: layout_1.WorkspaceLayoutType.Component,
                    content: classTree,
                    heading: 'Classes',
                }, {
                    id: 'instances',
                    type: layout_1.WorkspaceLayoutType.Component,
                    content: instancesSearch,
                    heading: 'Instances',
                }],
            defaultSize: 275,
            defaultCollapsed: !this.props.isLeftPanelOpen,
        };
    };
    WorkspaceMarkup.prototype.getRightPanelLayout = function () {
        var _a = this.props, view = _a.view, editor = _a.editor, elementsSearchPanel = _a.elementsSearchPanel;
        var rightPanel = {
            type: layout_1.WorkspaceLayoutType.Column,
            children: [{
                    id: 'connections',
                    type: layout_1.WorkspaceLayoutType.Component,
                    content: React.createElement(linksToolbox_1.LinkTypesToolbox, { view: view, editor: editor }),
                    heading: 'Connections',
                }],
            defaultSize: 275,
            defaultCollapsed: !this.props.isRightPanelOpen,
        };
        if (elementsSearchPanel) {
            rightPanel.children = tslib_1.__spreadArrays(rightPanel.children, [
                {
                    id: 'search',
                    type: layout_1.WorkspaceLayoutType.Component,
                    content: React.cloneElement(elementsSearchPanel, { view: view, editor: editor }),
                    heading: 'Search in diagram',
                }
            ]);
        }
        return rightPanel;
    };
    WorkspaceMarkup.prototype.render = function () {
        var _this = this;
        var paper = {
            id: 'paper',
            type: layout_1.WorkspaceLayoutType.Component,
            content: (React.createElement("div", { className: 'ontodia__main-panel', style: { flex: '1 1 0px', width: '100%' } },
                React.createElement(paperArea_1.PaperArea, { ref: function (el) { return _this.paperArea = el; }, view: this.props.view, zoomOptions: this.props.zoomOptions, hideScrollBars: this.props.hideScrollBars, watermarkSvg: this.props.watermarkSvg, watermarkUrl: this.props.watermarkUrl, onDragDrop: this.onDropOnPaper, onZoom: this.props.onZoom }))),
        };
        var workspaceLayout = this.props.hidePanels ? paper : {
            type: layout_1.WorkspaceLayoutType.Row,
            children: [
                this.getLeftPanelLayout(),
                paper,
                this.getRightPanelLayout(),
            ]
        };
        return (React.createElement("div", { ref: function (e) { return _this.element = e; }, className: 'ontodia' },
            this.renderToolbar(),
            React.createElement("div", { className: 'ontodia__workspace' },
                React.createElement(layout_1.WorkspaceLayout, { layout: workspaceLayout, _onStartResize: function (direction) {
                        return _this.untilMouseUp({
                            preventTextSelection: true,
                            verticalResizing: direction === 'vertical',
                            horizontalResizing: direction === 'horizontal',
                        });
                    } }))));
    };
    WorkspaceMarkup.prototype.componentDidMount = function () {
        document.addEventListener('mouseup', this.onDocumentMouseUp);
    };
    WorkspaceMarkup.prototype.componentWillUnmount = function () {
        document.removeEventListener('mouseup', this.onDocumentMouseUp);
        this.cancellation.abort();
    };
    WorkspaceMarkup.prototype.preventTextSelection = function () {
        this.untilMouseUp({ preventTextSelection: true });
    };
    WorkspaceMarkup.prototype.untilMouseUp = function (params) {
        this.untilMouseUpClasses = [];
        if (params.preventTextSelection) {
            this.untilMouseUpClasses.push('ontodia--unselectable');
        }
        if (params.horizontalResizing) {
            this.untilMouseUpClasses.push('ontodia--horizontal-resizing');
        }
        if (params.verticalResizing) {
            this.untilMouseUpClasses.push('ontodia--vertical-resizing');
        }
        for (var _i = 0, _a = this.untilMouseUpClasses; _i < _a.length; _i++) {
            var className = _a[_i];
            this.element.classList.add(className);
        }
    };
    WorkspaceMarkup.childContextTypes = workspaceContext_1.WorkspaceContextTypes;
    return WorkspaceMarkup;
}(React.Component));
exports.WorkspaceMarkup = WorkspaceMarkup;
function forceNonReactExecutionContext() {
    // force non-React executing context to resolve forceUpdate() synchronously
    return Promise.resolve();
}
function getViewportCenterInPaperCoords(paperArea) {
    var viewport = paperArea.getAreaMetrics();
    return paperArea.clientToPaperCoords(viewport.clientWidth / 2, viewport.clientHeight / 2);
}
function centerElementToPosition(element, center) {
    var position = {
        x: center.x - element.size.width / 2,
        y: center.y - element.size.height / 2,
    };
    element.setPosition(position);
}
function tryParseDefaultDragAndDropData(e) {
    var tryGetIri = function (type, decode) {
        if (decode === void 0) { decode = false; }
        try {
            var iriString = e.dataTransfer.getData(type);
            if (!iriString) {
                return undefined;
            }
            var iris = void 0;
            try {
                iris = JSON.parse(iriString);
            }
            catch (e) {
                iris = [(decode ? decodeURI(iriString) : iriString)];
            }
            return iris.length === 0 ? undefined : iris;
        }
        catch (e) {
            return undefined;
        }
    };
    return tryGetIri('application/x-ontodia-elements')
        || tryGetIri('text/uri-list', true)
        || tryGetIri('text') // IE11, Edge
        || [];
}


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var classTree_1 = __webpack_require__(138);
exports.ClassTree = classTree_1.ClassTree;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(45);
var elements_1 = __webpack_require__(52);
var async_1 = __webpack_require__(60);
var collections_1 = __webpack_require__(55);
var events_1 = __webpack_require__(54);
var spinner_1 = __webpack_require__(89);
var progressBar_1 = __webpack_require__(116);
var treeModel_1 = __webpack_require__(139);
var leaf_1 = __webpack_require__(140);
var CLASS_NAME = 'ontodia-class-tree';
var MIN_TERM_LENGTH = 3;
var ClassTree = /** @class */ (function (_super) {
    tslib_1.__extends(ClassTree, _super);
    function ClassTree(props) {
        var _this = _super.call(this, props) || this;
        _this.listener = new events_1.EventObserver();
        _this.delayedClassUpdate = new async_1.Debouncer();
        _this.delayedSearch = new async_1.Debouncer(200 /* ms */);
        _this.loadClassesOperation = new async_1.Cancellation();
        _this.refreshOperation = new async_1.Cancellation();
        _this.onSearchTextChange = function (e) {
            var requestedSearchText = e.currentTarget.value;
            _this.setState({ requestedSearchText: requestedSearchText });
            _this.delayedSearch.call(_this.performSearch);
        };
        _this.performSearch = function () {
            var requestedSearchText = _this.state.requestedSearchText;
            var requested = normalizeSearchText(requestedSearchText);
            if (requested === _this.state.appliedSearchText) {
                return;
            }
            var appliedSearchText = requested.length < MIN_TERM_LENGTH ? undefined : requested;
            _this.setState(function (state) { return applyFilters(tslib_1.__assign(tslib_1.__assign({}, state), { appliedSearchText: appliedSearchText })); });
        };
        _this.onShowOnlyCreatableChange = function (e) {
            _this.setState(function (state) { return applyFilters(tslib_1.__assign(tslib_1.__assign({}, state), { showOnlyConstructible: !state.showOnlyConstructible })); });
        };
        _this.onSelectNode = function (node) {
            var onClassSelected = _this.props.onClassSelected;
            _this.setState({ selectedNode: node });
            onClassSelected(node.model.id);
        };
        _this.onCreateInstance = function (node) {
            var onCreateInstance = _this.props.onCreateInstance;
            onCreateInstance(node.model.id);
        };
        _this.onDragCreate = function (node) {
            var _a = _this.props, view = _a.view, onCreateInstance = _a.onCreateInstance;
            view.setHandlerForNextDropOnPaper(function (e) {
                onCreateInstance(node.model.id, e.paperPosition);
            });
        };
        _this.refreshClassTree = function () {
            var cancellation = new async_1.Cancellation();
            var editor = _this.props.editor;
            _this.refreshOperation.abort();
            _this.refreshOperation = cancellation;
            _this.setState(function (state, props) {
                if (!_this.classTree) {
                    return { refreshingState: progressBar_1.ProgressState.none };
                }
                var refreshingState = progressBar_1.ProgressState.none;
                if (editor.inAuthoringMode) {
                    var newIris = getNewClassIris(state.constructibleClasses, _this.classTree);
                    if (newIris.size > 0) {
                        refreshingState = progressBar_1.ProgressState.loading;
                        _this.queryCreatableTypes(newIris, cancellation.signal);
                    }
                }
                var roots = createRoots(_this.classTree, props.view);
                return applyFilters(tslib_1.__assign(tslib_1.__assign({}, state), { roots: sortTree(roots), refreshingState: refreshingState }));
            });
        };
        _this.state = {
            refreshingState: progressBar_1.ProgressState.none,
            roots: [],
            filteredRoots: [],
            requestedSearchText: '',
            appliedSearchText: '',
            constructibleClasses: new Map(),
            showOnlyConstructible: false,
        };
        return _this;
    }
    ClassTree.prototype.render = function () {
        var _a = this.props, view = _a.view, editor = _a.editor;
        var _b = this.state, refreshingState = _b.refreshingState, requestedSearchText = _b.requestedSearchText, appliedSearchText = _b.appliedSearchText, filteredRoots = _b.filteredRoots, selectedNode = _b.selectedNode, constructibleClasses = _b.constructibleClasses, showOnlyConstructible = _b.showOnlyConstructible;
        var normalizedSearchText = normalizeSearchText(requestedSearchText);
        // highlight search term only if actual tree is already filtered by current or previous term:
        //  - this immediately highlights typed characters thus making it look more responsive,
        //  - prevents expanding non-filtered tree (which can be too large) just to highlight the term
        var searchText = appliedSearchText ? normalizedSearchText : undefined;
        return (React.createElement("div", { className: CLASS_NAME },
            React.createElement("div", { className: CLASS_NAME + "__filter" },
                React.createElement("div", { className: CLASS_NAME + "__filter-group" },
                    React.createElement("input", { type: 'text', className: 'search-input ontodia-form-control', placeholder: 'Search for...', value: this.state.requestedSearchText, onChange: this.onSearchTextChange }),
                    editor.inAuthoringMode ? (React.createElement("label", { className: CLASS_NAME + "__only-creatable" },
                        React.createElement("input", { type: 'checkbox', checked: showOnlyConstructible, onChange: this.onShowOnlyCreatableChange }),
                        " Show only constructible")) : null)),
            React.createElement(progressBar_1.ProgressBar, { state: refreshingState }),
            this.classTree ? (React.createElement(leaf_1.Forest, { className: CLASS_NAME + "__tree ontodia-scrollable", view: view, nodes: filteredRoots, searchText: searchText, selectedNode: selectedNode, onSelect: this.onSelectNode, creatableClasses: constructibleClasses, onClickCreate: this.onCreateInstance, onDragCreate: this.onDragCreate })) : (React.createElement("div", { className: CLASS_NAME + "__spinner" },
                React.createElement(spinner_1.HtmlSpinner, { width: 30, height: 30 })))));
    };
    ClassTree.prototype.componentDidMount = function () {
        var _this = this;
        var _a = this.props, view = _a.view, editor = _a.editor;
        this.listener.listen(view.events, 'changeLanguage', function () { return _this.refreshClassTree(); });
        this.listener.listen(editor.model.events, 'loadingStart', function () {
            _this.initClassTree();
        });
        this.listener.listen(editor.model.events, 'classEvent', function (_a) {
            var data = _a.data;
            if (data.changeLabel || data.changeCount) {
                _this.delayedClassUpdate.call(_this.refreshClassTree);
            }
        });
        this.initClassTree();
    };
    ClassTree.prototype.componentWillUnmount = function () {
        this.listener.stopListening();
        this.delayedClassUpdate.dispose();
        this.delayedSearch.dispose();
        this.loadClassesOperation.abort();
        this.refreshOperation.abort();
    };
    ClassTree.prototype.initClassTree = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var cancellation, classes;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.dataProvider !== this.props.editor.model.dataProvider)) return [3 /*break*/, 2];
                        this.dataProvider = this.props.editor.model.dataProvider;
                        this.classTree = undefined;
                        cancellation = new async_1.Cancellation();
                        this.loadClassesOperation.abort();
                        this.loadClassesOperation = cancellation;
                        return [4 /*yield*/, this.dataProvider.classTree()];
                    case 1:
                        classes = _a.sent();
                        if (cancellation.signal.aborted) {
                            return [2 /*return*/];
                        }
                        this.setClassTree(classes);
                        _a.label = 2;
                    case 2:
                        this.refreshClassTree();
                        return [2 /*return*/];
                }
            });
        });
    };
    ClassTree.prototype.setClassTree = function (roots) {
        var diagramModel = this.props.editor.model;
        var visiting = new Set();
        var reduceNonCycle = function (acc, model) {
            if (!visiting.has(model.id)) {
                visiting.add(model.id);
                var children = model.children.reduce(reduceNonCycle, []);
                acc.push(tslib_1.__assign(tslib_1.__assign({}, model), { children: children }));
                visiting.delete(model.id);
            }
            return acc;
        };
        this.classTree = roots.reduce(reduceNonCycle, []);
        var addClass = function (model) {
            var existing = diagramModel.getClass(model.id);
            if (!existing) {
                var id = model.id, label = model.label, count = model.count, children = model.children;
                var richClass = new elements_1.FatClassModel({ id: id, label: label.values, count: count });
                diagramModel.addClass(richClass);
                children.forEach(addClass);
            }
        };
        this.classTree.forEach(addClass);
        this.refreshClassTree();
    };
    ClassTree.prototype.queryCreatableTypes = function (typeIris, ct) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result_1, err_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.props.editor.metadataApi.filterConstructibleTypes(typeIris, ct)];
                    case 1:
                        result_1 = _a.sent();
                        if (ct.aborted) {
                            return [2 /*return*/];
                        }
                        this.setState(function (state) {
                            var constructibleClasses = collections_1.cloneMap(state.constructibleClasses);
                            typeIris.forEach(function (type) {
                                constructibleClasses.set(type, result_1.has(type));
                            });
                            return applyFilters(tslib_1.__assign(tslib_1.__assign({}, state), { constructibleClasses: constructibleClasses, refreshingState: progressBar_1.ProgressState.completed }));
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        // tslint:disable-next-line:no-console
                        console.error(err_1);
                        if (ct.aborted) {
                            return [2 /*return*/];
                        }
                        this.setState(function (state) { return applyFilters(tslib_1.__assign(tslib_1.__assign({}, state), { refreshingState: progressBar_1.ProgressState.error })); });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return ClassTree;
}(React.Component));
exports.ClassTree = ClassTree;
function createRoots(classTree, view) {
    var mapClass = function (model) {
        var richClass = view.model.createClass(model.id);
        return {
            model: richClass,
            label: view.formatLabel(richClass.label, richClass.id),
            derived: model.children.map(mapClass),
        };
    };
    return classTree.map(mapClass);
}
function getNewClassIris(existingClasses, classTree) {
    var classIris = new Set();
    var visitClass = function (model) {
        if (!existingClasses.has(model.id)) {
            classIris.add(model.id);
        }
        model.children.forEach(visitClass);
    };
    classTree.forEach(visitClass);
    return classIris;
}
function normalizeSearchText(text) {
    return text.trim().toLowerCase();
}
function sortTree(roots) {
    function mapNodes(nodes) {
        if (nodes.length === 0) {
            return nodes;
        }
        var mapped = nodes.map(mapNode);
        mapped.sort(compareByLabel);
        return mapped;
    }
    function mapNode(node) {
        return treeModel_1.TreeNode.setDerived(node, mapNodes(node.derived));
    }
    function compareByLabel(left, right) {
        return left.label.localeCompare(right.label);
    }
    return mapNodes(roots);
}
function applyFilters(state) {
    var filteredRoots = state.roots;
    if (state.appliedSearchText) {
        filteredRoots = filterByKeyword(filteredRoots, state.appliedSearchText);
    }
    if (state.showOnlyConstructible) {
        filteredRoots = filterOnlyCreatable(filteredRoots, state.constructibleClasses);
    }
    return tslib_1.__assign(tslib_1.__assign({}, state), { filteredRoots: filteredRoots });
}
function filterByKeyword(roots, searchText) {
    if (roots.length === 0) {
        return roots;
    }
    function collectByKeyword(acc, node) {
        var derived = node.derived.reduce(collectByKeyword, []);
        // keep parent if children is included or label contains keyword
        if (derived.length > 0 || node.label.toLowerCase().indexOf(searchText) >= 0) {
            acc.push(treeModel_1.TreeNode.setDerived(node, derived));
        }
        return acc;
    }
    return roots.reduce(collectByKeyword, []);
}
function filterOnlyCreatable(roots, creatableClasses) {
    function collectOnlyCreatable(acc, node) {
        var derived = node.derived.reduce(collectOnlyCreatable, []);
        if (derived.length > 0 || creatableClasses.get(node.model.id)) {
            acc.push(treeModel_1.TreeNode.setDerived(node, derived));
        }
        return acc;
    }
    return roots.reduce(collectOnlyCreatable, []);
}


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
exports.TreeNode = {
    setDerived: function (node, derived) { return (tslib_1.__assign(tslib_1.__assign({}, node), { derived: derived })); },
};


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(45);
var listElementView_1 = __webpack_require__(117);
var EXPAND_ICON = __webpack_require__(141);
var COLLAPSE_ICON = __webpack_require__(142);
var DEFAULT_LEAF_ICON = __webpack_require__(143);
var DEFAULT_PARENT_ICON = __webpack_require__(144);
var LEAF_CLASS = 'ontodia-class-leaf';
var Leaf = /** @class */ (function (_super) {
    tslib_1.__extends(Leaf, _super);
    function Leaf(props) {
        var _this = _super.call(this, props) || this;
        _this.onClick = function (e) {
            e.preventDefault();
            var _a = _this.props, node = _a.node, onSelect = _a.onSelect;
            onSelect(node);
        };
        _this.toggle = function () {
            _this.setState(function (state) { return ({ expanded: !state.expanded }); });
        };
        _this.onClickCreate = function () {
            _this.props.onClickCreate(_this.props.node);
        };
        _this.onDragCreate = function (e) {
            // sets the drag data to support drag-n-drop in Firefox
            // see https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations for more details
            // IE supports only 'text' and 'URL' formats, see https://msdn.microsoft.com/en-us/ie/ms536744(v=vs.94)
            e.dataTransfer.setData('text', '');
            _this.props.onDragCreate(_this.props.node);
        };
        _this.state = {
            expanded: Boolean(_this.props.searchText),
        };
        return _this;
    }
    Leaf.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.props.searchText !== nextProps.searchText) {
            this.setState({
                expanded: Boolean(nextProps.searchText),
            });
        }
    };
    Leaf.prototype.render = function () {
        var _a = this.props, node = _a.node, otherProps = tslib_1.__rest(_a, ["node"]);
        var view = otherProps.view, selectedNode = otherProps.selectedNode, searchText = otherProps.searchText, creatableClasses = otherProps.creatableClasses;
        var expanded = this.state.expanded;
        var toggleIcon;
        if (node.derived.length > 0) {
            toggleIcon = expanded ? COLLAPSE_ICON : EXPAND_ICON;
        }
        var icon = view.getTypeStyle([node.model.id]).icon;
        if (!icon) {
            icon = node.derived.length === 0 ? DEFAULT_LEAF_ICON : DEFAULT_PARENT_ICON;
        }
        var bodyClass = LEAF_CLASS + "__body";
        if (selectedNode && selectedNode.model === node.model) {
            bodyClass += " " + LEAF_CLASS + "__body--selected";
        }
        var label = listElementView_1.highlightSubstring(node.label, searchText, { className: LEAF_CLASS + "__highlighted-term" });
        return (React.createElement("div", { className: LEAF_CLASS, role: 'tree-item' },
            React.createElement("div", { className: LEAF_CLASS + "__row" },
                React.createElement("div", { className: LEAF_CLASS + "__toggle", onClick: this.toggle, role: 'button' }, toggleIcon ? React.createElement("img", { className: LEAF_CLASS + "__toggle-icon", src: toggleIcon }) : null),
                React.createElement("a", { className: bodyClass, href: node.model.id, onClick: this.onClick },
                    React.createElement("div", { className: LEAF_CLASS + "__icon-container" },
                        React.createElement("img", { className: LEAF_CLASS + "__icon", src: icon })),
                    React.createElement("span", { className: LEAF_CLASS + "__label" }, label),
                    node.model.count ? (React.createElement("span", { className: LEAF_CLASS + "__count ontodia-badge" }, node.model.count)) : null),
                creatableClasses.get(node.model.id) ? (React.createElement("div", { className: LEAF_CLASS + "__create ontodia-btn-group ontodia-btn-group-xs" },
                    React.createElement("button", { className: 'ontodia-btn ontodia-btn-default', title: 'Click or drag to create new entity of this type', draggable: true, onClick: this.onClickCreate, onDragStart: this.onDragCreate }, "+"))) : null),
            expanded && node.derived.length > 0 ? (React.createElement(Forest, tslib_1.__assign({ className: LEAF_CLASS + "__children", nodes: node.derived }, otherProps))) : null));
    };
    return Leaf;
}(React.Component));
exports.Leaf = Leaf;
var Forest = /** @class */ (function (_super) {
    tslib_1.__extends(Forest, _super);
    function Forest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Forest.prototype.render = function () {
        var _a = this.props, nodes = _a.nodes, className = _a.className, otherProps = tslib_1.__rest(_a, ["nodes", "className"]);
        return (React.createElement("div", { className: className, role: 'tree' }, nodes.map(function (node) { return (React.createElement(Leaf, tslib_1.__assign({ key: "node-" + node.model.id, node: node }, otherProps))); })));
    };
    return Forest;
}(React.Component));
exports.Forest = Forest;


/***/ }),
/* 141 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Ym94PSIwIDAgMTI4IDEyOCI+CiAgPGVsbGlwc2Ugc3Ryb2tlPSIjMDAwIiByeT0iNjAiIHJ4PSI2MCIgY3k9IjY0IiBjeD0iNjQiIHN0cm9rZS13aWR0aD0iNSIgZmlsbD0ibm9uZSIvPgogIDxsaW5lIHkyPSI2My40Mzc1IiB4Mj0iMTA0LjUiIHkxPSI2My40Mzc1IiB4MT0iMjIuNSIgc3Ryb2tlLXdpZHRoPSI1IiBzdHJva2U9IiMwMDAiIGZpbGw9Im5vbmUiLz4KICA8bGluZSB5Mj0iMTAyLjQ0NDM0OSIgeDI9IjYzLjUiIHkxPSIyOS40Mzc1IiB4MT0iNjMuNSIgc3Ryb2tlLXdpZHRoPSI1IiBzdHJva2U9IiMwMDAiIGZpbGw9Im5vbmUiLz4KPC9zdmc+Cg=="

/***/ }),
/* 142 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Ym94PSIwIDAgMTI4IDEyOCI+CiAgPGVsbGlwc2Ugc3Ryb2tlPSIjMDAwIiByeT0iNjAiIHJ4PSI2MCIgY3k9IjY0IiBjeD0iNjQiIHN0cm9rZS13aWR0aD0iNSIgZmlsbD0ibm9uZSIvPgogIDxsaW5lIHkyPSI2My40Mzc1IiB4Mj0iMTA0LjUiIHkxPSI2My40Mzc1IiB4MT0iMjIuNSIgc3Ryb2tlLXdpZHRoPSI1IiBzdHJva2U9IiMwMDAiIGZpbGw9Im5vbmUiLz4KPC9zdmc+Cg=="

/***/ }),
/* 143 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMTI4IgogICBoZWlnaHQ9IjEyOCIKICAgdmlld2JveD0iMCAwIDEyOCAxMjgiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzQ1MDciCiAgIHNvZGlwb2RpOmRvY25hbWU9InRyZWUtbGVhZi5zdmciCiAgIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM0NTExIiAvPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgICBvYmplY3R0b2xlcmFuY2U9IjEwIgogICAgIGdyaWR0b2xlcmFuY2U9IjEwIgogICAgIGd1aWRldG9sZXJhbmNlPSIxMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3IgogICAgIGlkPSJuYW1lZHZpZXc0NTA5IgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTp6b29tPSIwLjkwNTA5NjY4IgogICAgIGlua3NjYXBlOmN4PSItMjcyLjY4NDciCiAgICAgaW5rc2NhcGU6Y3k9Ii01Ljg1OTY0ODciCiAgICAgaW5rc2NhcGU6d2luZG93LXg9Ii04IgogICAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2ZzQ1MDciIC8+CiAgPGcKICAgICBpZD0iZzQ1MDUiPgogICAgPGNpcmNsZQogICAgICAgaWQ9InN2Z18xIgogICAgICAgY3k9IjY0IgogICAgICAgY3g9IjY0IgogICAgICAgc3Ryb2tlLW9wYWNpdHk9Im51bGwiCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTU3M2IwO3N0cm9rZS13aWR0aDo1IgogICAgICAgcj0iNjAiIC8+CiAgICA8Y2lyY2xlCiAgICAgICBpZD0ic3ZnXzMiCiAgICAgICBjeT0iNjQiCiAgICAgICBjeD0iNjQiCiAgICAgICBzdHJva2Utb3BhY2l0eT0ibnVsbCIKICAgICAgIHN0eWxlPSJmaWxsOiMxNTczYjA7c3Ryb2tlOiMxNTczYjA7c3Ryb2tlLXdpZHRoOjUuNzEwMjYzMjUiCiAgICAgICByPSIzNyIgLz4KICA8L2c+Cjwvc3ZnPgo="

/***/ }),
/* 144 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMTI4IgogICBoZWlnaHQ9IjEyOCIKICAgdmlld2JveD0iMCAwIDEyOCAxMjgiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzUwODgiCiAgIHNvZGlwb2RpOmRvY25hbWU9InRyZWUtbGVhZi1mb2xkZXIuc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjEgcjE1MzcxIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzNTA5MiIgLz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEiCiAgICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIKICAgICBncmlkdG9sZXJhbmNlPSIxMCIKICAgICBndWlkZXRvbGVyYW5jZT0iMTAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAxNyIKICAgICBpZD0ibmFtZWR2aWV3NTA5MCIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaW5rc2NhcGU6em9vbT0iMi42MDc0NTYzIgogICAgIGlua3NjYXBlOmN4PSIxMjguNzQ2MTQiCiAgICAgaW5rc2NhcGU6Y3k9IjMwLjkwNTQ3MiIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnNTA4OCIgLz4KICA8ZwogICAgIGlkPSJnNTA4NiI+CiAgICA8Y2lyY2xlCiAgICAgICBpZD0ic3ZnXzEiCiAgICAgICBjeT0iNjQiCiAgICAgICBjeD0iNjQiCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTU3M2IwO3N0cm9rZS13aWR0aDo1IgogICAgICAgcj0iNjAiIC8+CiAgICA8Y2lyY2xlCiAgICAgICBpZD0ic3ZnXzMiCiAgICAgICBjeT0iNjQiCiAgICAgICBjeD0iNjQiCiAgICAgICBzdHJva2Utb3BhY2l0eT0ibnVsbCIKICAgICAgIHN0eWxlPSJmaWxsOiMxNTczYjA7c3Ryb2tlOiMxNTczYjA7c3Ryb2tlLXdpZHRoOjUiCiAgICAgICByPSIzNyIgLz4KICAgIDxwYXRoCiAgICAgICBpZD0ic3ZnXzUiCiAgICAgICBkPSJtIDEyNy4yMjU4LDg2LjU0NjY0MyBjIC0wLjAxMDUsLTUuOTcxMDY1IC00LjcyMzE0LC0xMC44MDkwMzQgLTEwLjU0MDA5LC0xMC44MTcxNDcgdiAtMC4wMDI3IEggODQuMzgwMTUyIGMgLTEuMzMxMDIsLTQuMzg2MzUzIC01LjMwMDM1NywtNy41OTM2MzcgLTEwLjAyODc3MSwtNy42MDE3NSBoIC03LjU3NzU4NyBjIC01LjgxOTU4NiwwLjAwNTQgLTEwLjUzNDgyMiw0Ljg0NjA4MiAtMTAuNTQ1MzY1LDEwLjgxNzE0NyB2IDM4LjM2ODQxNyBjIDAuMDEwNTQsNS45NjU2NSA0LjcyNTc3OCwxMC44MDM2MiAxMC41NDUzNjUsMTAuODE0NDQgaCA0OS45MTQ1NTYgYyA1LjgxMTY3LC0wLjAxMDggMTAuNTI5NTUsLTQuODQ4NzkgMTAuNTQwMDksLTEwLjgxNDQ0IFYgODYuNTQ2NjQzIFoiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc3R5bGU9ImZpbGw6IzBmNTM3NiIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2NjY2NjYyIgLz4KICA8L2c+Cjwvc3ZnPgo="

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(45);
var commands_1 = __webpack_require__(63);
var elements_1 = __webpack_require__(52);
var async_1 = __webpack_require__(60);
var events_1 = __webpack_require__(54);
var listElementView_1 = __webpack_require__(117);
var progressBar_1 = __webpack_require__(116);
var LinkInToolBox = /** @class */ (function (_super) {
    tslib_1.__extends(LinkInToolBox, _super);
    function LinkInToolBox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onPressFilter = function () {
            if (_this.props.onPressFilter) {
                _this.props.onPressFilter(_this.props.link);
            }
        };
        _this.changeState = function (state) {
            var history = _this.props.view.model.history;
            changeLinkTypeState(history, state, [_this.props.link]);
        };
        _this.isChecked = function (stateName) {
            var curState;
            if (!_this.props.link.visible) {
                curState = 'invisible';
            }
            else if (!_this.props.link.showLabel) {
                curState = 'withoutLabels';
            }
            else {
                curState = 'allVisible';
            }
            return stateName === curState;
        };
        _this.getText = function () {
            var _a = _this.props, linkType = _a.link, view = _a.view, filterKey = _a.filterKey;
            var fullText = view.formatLabel(linkType.label, linkType.id);
            return listElementView_1.highlightSubstring(fullText, filterKey);
        };
        return _this;
    }
    LinkInToolBox.prototype.render = function () {
        var _this = this;
        var newIcon = (this.props.link.isNew ? React.createElement("span", { className: 'linkInToolBox__new-tag' }, "new") : '');
        var countIcon = (this.props.count > 0 ? React.createElement("span", { className: 'ontodia-badge' }, this.props.count) : '');
        var badgeContainer = (newIcon || countIcon ? React.createElement("div", null,
            newIcon,
            countIcon) : '');
        return (React.createElement("li", { "data-linktypeid": this.props.link.id, className: 'ontodia-list-group-item linkInToolBox clearfix' },
            React.createElement("span", { className: 'ontodia-btn-group ontodia-btn-group-xs', "data-toggle": 'buttons' },
                React.createElement("label", { className: 'ontodia-btn ontodia-btn-default' + (this.isChecked('invisible') ? ' active' : ''), id: 'invisible', title: 'Hide links and labels', onClick: function () { return _this.changeState('invisible'); } },
                    React.createElement("span", { className: 'fa fa-times', "aria-hidden": 'true' })),
                React.createElement("label", { className: 'ontodia-btn ontodia-btn-default' + (this.isChecked('withoutLabels') ? ' active' : ''), id: 'withoutLabels', title: 'Show links without labels', onClick: function () { return _this.changeState('withoutLabels'); } },
                    React.createElement("span", { className: 'fa fa-arrows-h', "aria-hidden": 'true' })),
                React.createElement("label", { className: 'ontodia-btn ontodia-btn-default' + (this.isChecked('allVisible') ? ' active' : ''), id: 'allVisible', title: 'Show links with labels', onClick: function () { return _this.changeState('allVisible'); } },
                    React.createElement("span", { className: 'fa fa-text-width', "aria-hidden": 'true' }))),
            React.createElement("div", { className: 'link-title' }, this.getText()),
            badgeContainer,
            React.createElement("div", { className: 'linkInToolBox__filter-button', onClick: this.onPressFilter })));
    };
    return LinkInToolBox;
}(React.Component));
var LinkTypesToolboxView = /** @class */ (function (_super) {
    tslib_1.__extends(LinkTypesToolboxView, _super);
    function LinkTypesToolboxView(props) {
        var _this = _super.call(this, props) || this;
        _this.compareLinks = function (a, b) {
            var view = _this.props.view;
            var aText = view.formatLabel(a.label, a.id);
            var bText = view.formatLabel(b.label, b.id);
            return aText.localeCompare(bText);
        };
        _this.onChangeInput = function (e) {
            _this.setState({ filterKey: e.currentTarget.value });
        };
        _this.onDropFilter = function () {
            _this.setState({ filterKey: '' });
        };
        _this.getLinks = function () {
            var _a = _this.props, view = _a.view, _b = _a.links, links = _b === void 0 ? [] : _b;
            return links.filter(function (linkType) {
                var text = view.formatLabel(linkType.label, linkType.id).toLowerCase();
                return !_this.state.filterKey || text.indexOf(_this.state.filterKey.toLowerCase()) >= 0;
            })
                .sort(_this.compareLinks);
        };
        _this.getViews = function (links) {
            var countMap = _this.props.countMap || {};
            var views = [];
            for (var _i = 0, links_1 = links; _i < links_1.length; _i++) {
                var link = links_1[_i];
                views.push(React.createElement(LinkInToolBox, { key: link.id, view: _this.props.view, link: link, onPressFilter: _this.props.filterCallback, count: countMap[link.id] || 0, filterKey: _this.state.filterKey }));
            }
            return views;
        };
        _this.state = { filterKey: '' };
        return _this;
    }
    LinkTypesToolboxView.prototype.render = function () {
        var className = 'link-types-toolbox';
        var _a = this.props, view = _a.view, dataState = _a.dataState, selectedElement = _a.selectedElement;
        var history = view.model.history;
        var links = this.getLinks();
        var views = this.getViews(links);
        var connectedTo = null;
        if (selectedElement) {
            var selectedElementLabel = view.formatLabel(selectedElement.data.label.values, selectedElement.iri);
            connectedTo = (React.createElement("h4", { className: 'links-heading', style: { display: 'block' } },
                "Connected to",
                '\u00A0',
                React.createElement("span", null, selectedElementLabel)));
        }
        var dropButton = null;
        if (this.state.filterKey) {
            dropButton = React.createElement("button", { type: 'button', className: className + "__clearSearch", onClick: this.onDropFilter },
                React.createElement("span", { className: 'fa fa-times', "aria-hidden": 'true' }));
        }
        return (React.createElement("div", { className: className },
            React.createElement("div", { className: className + "__heading" },
                React.createElement("div", { className: className + "__searching-box" },
                    React.createElement("input", { className: 'search-input ontodia-form-control', type: 'text', value: this.state.filterKey, onChange: this.onChangeInput, placeholder: 'Search for...' }),
                    dropButton),
                React.createElement("div", { className: className + "__switch-all" },
                    React.createElement("div", { className: 'ontodia-btn-group ontodia-btn-group-xs' },
                        React.createElement("label", { className: 'ontodia-btn ontodia-btn-default', title: 'Hide links and labels', onClick: function () { return changeLinkTypeState(history, 'invisible', links); } },
                            React.createElement("span", { className: 'fa fa-times', "aria-hidden": 'true' })),
                        React.createElement("label", { className: 'ontodia-btn ontodia-btn-default', title: 'Show links without labels', onClick: function () { return changeLinkTypeState(history, 'withoutLabels', links); } },
                            React.createElement("span", { className: 'fa fa-arrows-h', "aria-hidden": 'true' })),
                        React.createElement("label", { className: 'ontodia-btn ontodia-btn-default', title: 'Show links with labels', onClick: function () { return changeLinkTypeState(history, 'allVisible', links); } },
                            React.createElement("span", { className: 'fa fa-text-width', "aria-hidden": 'true' }))),
                    React.createElement("span", null, "\u00A0Switch all"))),
            React.createElement(progressBar_1.ProgressBar, { state: dataState }),
            React.createElement("div", { className: className + "__rest" },
                connectedTo,
                React.createElement("div", { className: 'ontodia-scrollable' },
                    React.createElement("ul", { className: 'ontodia-list-group connected-links' }, views)))));
    };
    return LinkTypesToolboxView;
}(React.Component));
var LinkTypesToolbox = /** @class */ (function (_super) {
    tslib_1.__extends(LinkTypesToolbox, _super);
    function LinkTypesToolbox(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.listener = new events_1.EventObserver();
        _this.linkListener = new events_1.EventObserver();
        _this.debounceSelection = new async_1.Debouncer(50 /* ms */);
        _this.updateOnCurrentSelection = function () {
            var editor = _this.props.editor;
            var single = editor.selection.length === 1 ? editor.selection[0] : null;
            if (single !== _this.state.selectedElement && single instanceof elements_1.Element) {
                _this.requestLinksOf(single);
            }
        };
        _this.onLinkChanged = function () {
            _this.forceUpdate();
        };
        _this.onAddToFilter = function (linkType) {
            var selectedElement = _this.state.selectedElement;
            selectedElement.addToFilter(linkType);
        };
        var _a = _this.props, view = _a.view, editor = _a.editor;
        _this.listener.listen(view.events, 'changeLanguage', function () { return _this.updateOnCurrentSelection(); });
        _this.listener.listen(editor.model.events, 'loadingSuccess', function () { return _this.updateOnCurrentSelection(); });
        _this.listener.listen(editor.events, 'changeSelection', function () {
            _this.debounceSelection.call(_this.updateOnCurrentSelection);
        });
        _this.state = { dataState: progressBar_1.ProgressState.none };
        return _this;
    }
    LinkTypesToolbox.prototype.componentDidMount = function () {
        this.updateOnCurrentSelection();
    };
    LinkTypesToolbox.prototype.componentWillUnmount = function () {
        this.listener.stopListening();
        this.linkListener.stopListening();
        this.debounceSelection.dispose();
    };
    LinkTypesToolbox.prototype.requestLinksOf = function (selectedElement) {
        var _this = this;
        if (selectedElement) {
            var request_1 = { elementId: selectedElement.iri };
            this.currentRequest = request_1;
            this.setState({ dataState: progressBar_1.ProgressState.loading, selectedElement: selectedElement });
            this.props.editor.model.dataProvider.linkTypesOf(request_1).then(function (linkTypes) {
                if (_this.currentRequest !== request_1) {
                    return;
                }
                var _a = _this.computeStateFromRequestResult(linkTypes), linksOfElement = _a.linksOfElement, countMap = _a.countMap;
                _this.subscribeOnLinksEvents(linksOfElement);
                _this.setState({ dataState: progressBar_1.ProgressState.completed, linksOfElement: linksOfElement, countMap: countMap });
            }).catch(function (error) {
                if (_this.currentRequest !== request_1) {
                    return;
                }
                // tslint:disable-next-line:no-console
                console.error(error);
                _this.setState({ dataState: progressBar_1.ProgressState.error, linksOfElement: undefined, countMap: {} });
            });
        }
        else {
            this.currentRequest = null;
            this.setState({
                dataState: progressBar_1.ProgressState.completed,
                selectedElement: selectedElement,
                linksOfElement: undefined,
                countMap: {},
            });
        }
    };
    LinkTypesToolbox.prototype.computeStateFromRequestResult = function (linkTypes) {
        var linksOfElement = [];
        var countMap = {};
        var model = this.props.editor.model;
        for (var _i = 0, linkTypes_1 = linkTypes; _i < linkTypes_1.length; _i++) {
            var linkType = linkTypes_1[_i];
            var type = model.createLinkType(linkType.id);
            linksOfElement.push(type);
            countMap[linkType.id] = linkType.inCount + linkType.outCount;
        }
        return { linksOfElement: linksOfElement, countMap: countMap };
    };
    LinkTypesToolbox.prototype.subscribeOnLinksEvents = function (linksOfElement) {
        this.linkListener.stopListening();
        var listener = this.linkListener;
        for (var _i = 0, linksOfElement_1 = linksOfElement; _i < linksOfElement_1.length; _i++) {
            var link = linksOfElement_1[_i];
            listener.listen(link.events, 'changeLabel', this.onLinkChanged);
            listener.listen(link.events, 'changeVisibility', this.onLinkChanged);
        }
    };
    LinkTypesToolbox.prototype.render = function () {
        var view = this.props.view;
        var _a = this.state, selectedElement = _a.selectedElement, dataState = _a.dataState, linksOfElement = _a.linksOfElement, countMap = _a.countMap;
        return React.createElement(LinkTypesToolboxView, { view: view, dataState: dataState, links: linksOfElement, countMap: countMap, filterCallback: this.onAddToFilter, selectedElement: selectedElement });
    };
    return LinkTypesToolbox;
}(React.Component));
exports.LinkTypesToolbox = LinkTypesToolbox;
function changeLinkTypeState(history, state, links) {
    var batch = history.startBatch();
    var _a = (state === 'invisible' ? { visible: false, showLabel: false } :
        state === 'withoutLabels' ? { visible: true, showLabel: false } :
            state === 'allVisible' ? { visible: true, showLabel: true } :
                undefined), visible = _a.visible, showLabel = _a.showLabel;
    for (var _i = 0, links_2 = links; _i < links_2.length; _i++) {
        var linkType = links_2[_i];
        history.execute(commands_1.changeLinkTypeVisibility({ linkType: linkType, visible: visible, showLabel: showLabel }));
    }
    batch.store();
}


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(45);
var accordion_1 = __webpack_require__(147);
var accordionItem_1 = __webpack_require__(148);
var DEFAULT_HORIZONTAL_COLLAPSED_SIZE = 28;
var WorkspaceLayoutType;
(function (WorkspaceLayoutType) {
    WorkspaceLayoutType["Row"] = "row";
    WorkspaceLayoutType["Column"] = "column";
    WorkspaceLayoutType["Component"] = "component";
})(WorkspaceLayoutType = exports.WorkspaceLayoutType || (exports.WorkspaceLayoutType = {}));
var WorkspaceLayout = /** @class */ (function (_super) {
    tslib_1.__extends(WorkspaceLayout, _super);
    function WorkspaceLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WorkspaceLayout.prototype.renderAccordion = function (_a) {
        var _this = this;
        var children = _a.children, direction = _a.direction, animationDuration = _a.animationDuration;
        var _b = this.props, _onStartResize = _b._onStartResize, _onResize = _b._onResize;
        var items = children.map(function (child, index) {
            var dockSide;
            if (direction === 'horizontal' && !child.undocked) {
                if (index === 0) {
                    dockSide = accordionItem_1.DockSide.Left;
                }
                else if (index === children.length - 1) {
                    dockSide = accordionItem_1.DockSide.Right;
                }
            }
            var collapsedSize = child.collapsedSize;
            if (collapsedSize === undefined && direction === 'horizontal') {
                collapsedSize = DEFAULT_HORIZONTAL_COLLAPSED_SIZE;
            }
            return (React.createElement(accordionItem_1.AccordionItem, { key: child.type === WorkspaceLayoutType.Component ? child.id : index, heading: child.type === WorkspaceLayoutType.Component ? child.heading : undefined, dockSide: dockSide, defaultSize: child.defaultSize, defaultCollapsed: child.defaultCollapsed, collapsedSize: collapsedSize, minSize: child.minSize }, _this.renderLayout(child)));
        });
        return (React.createElement(accordion_1.Accordion, { direction: direction, onStartResize: _onStartResize, onResize: _onResize, animationDuration: animationDuration }, items));
    };
    WorkspaceLayout.prototype.renderLayout = function (layout) {
        if (layout.type === WorkspaceLayoutType.Row) {
            return this.renderAccordion({
                children: layout.children,
                direction: 'horizontal',
                animationDuration: layout.animationDuration,
            });
        }
        if (layout.type === WorkspaceLayoutType.Column) {
            return this.renderAccordion({
                children: layout.children,
                direction: 'vertical',
                animationDuration: layout.animationDuration,
            });
        }
        if (layout.type === WorkspaceLayoutType.Component) {
            return React.Children.only(layout.content);
        }
        return null;
    };
    WorkspaceLayout.prototype.render = function () {
        var layout = this.props.layout;
        return this.renderLayout(layout);
    };
    return WorkspaceLayout;
}(React.Component));
exports.WorkspaceLayout = WorkspaceLayout;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(45);
var CLASS_NAME = 'ontodia-accordion';
var Accordion = /** @class */ (function (_super) {
    tslib_1.__extends(Accordion, _super);
    function Accordion(props) {
        var _this = _super.call(this, props) || this;
        _this.items = [];
        _this.isScrollable = false;
        _this.updateSizes = function () {
            var children = _this.props.children;
            var defaultProps = new Map();
            React.Children.forEach(children, function (child, index) {
                if (typeof child !== 'object') {
                    return;
                }
                var _a = child.props, defaultSize = _a.defaultSize, defaultCollapsed = _a.defaultCollapsed, collapsedSize = _a.collapsedSize, minSize = _a.minSize;
                // enables the scrollbar in the accordion if at least one item has min size
                if (minSize !== undefined) {
                    _this.isScrollable = true;
                }
                defaultProps.set(index, { defaultSize: defaultSize, defaultCollapsed: defaultCollapsed, collapsedSize: collapsedSize, minSize: minSize });
            });
            _this.defaultProps = defaultProps;
            _this.setState(function (_a) {
                var collapsed = _a.collapsed;
                var totalSize = _this.clientSize(_this.element.parentElement);
                var leftSize = totalSize;
                var leftChildCount = React.Children.count(children);
                var newCollapsed = [];
                _this.defaultProps.forEach(function (_a, index) {
                    var defaultSize = _a.defaultSize, _b = _a.defaultCollapsed, defaultCollapsed = _b === void 0 ? false : _b;
                    // preserves items collapsed by user
                    var itemCollapsed = collapsed[index] === undefined
                        ? defaultCollapsed
                        : collapsed[index];
                    // if no expanded items, expands the last one
                    var isLastItem = index === _this.defaultProps.size - 1;
                    var noExpandedItems = newCollapsed.findIndex(function (c) { return !c; }) < 0;
                    if (isLastItem && noExpandedItems) {
                        itemCollapsed = false;
                    }
                    var size = itemCollapsed ? _this.sizeWhenCollapsed(index) : defaultSize;
                    if (size) {
                        leftSize = leftSize - size;
                        leftChildCount = leftChildCount - 1;
                    }
                    newCollapsed.push(itemCollapsed);
                });
                var newSizes = [];
                var newPercents = [];
                _this.defaultProps.forEach(function (_a, index) {
                    var defaultSize = _a.defaultSize, minSize = _a.minSize;
                    var size = leftSize / leftChildCount;
                    var collapsedSize = _this.sizeWhenCollapsed(index);
                    if (newCollapsed[index]) {
                        size = collapsedSize;
                    }
                    else if (defaultSize !== undefined) {
                        size = defaultSize;
                    }
                    else if (size < minSize) {
                        size = collapsedSize + minSize;
                    }
                    if (size < collapsedSize) {
                        size = collapsedSize;
                        newCollapsed[index] = true;
                    }
                    var percent = 100 * size / totalSize + "%";
                    newSizes.push(size);
                    newPercents.push(percent);
                });
                return {
                    sizes: newSizes,
                    percents: newPercents,
                    collapsed: newCollapsed,
                };
            });
        };
        _this.onBeginDragHandle = function (itemIndex) {
            _this.originTotalSize = _this.clientSize(_this.element);
            _this.originSizes = _this.computeEffectiveItemSizes();
            _this.originCollapsed = tslib_1.__spreadArrays(_this.state.collapsed);
            _this.setState({ resizing: true }, function () {
                var _a = _this.props, direction = _a.direction, onStartResize = _a.onStartResize;
                if (onStartResize) {
                    onStartResize(direction);
                }
            });
        };
        _this.onEndDragHandle = function () {
            _this.setState({ resizing: false });
        };
        _this.sizeWhenCollapsed = function (index) {
            var item = _this.items[index];
            var collapsedSize = _this.defaultProps.get(index).collapsedSize;
            if (collapsedSize !== undefined) {
                return collapsedSize;
            }
            var headerSize = item.header ? _this.clientSize(item.header) : 0;
            return headerSize + (_this.offsetSize(item.element) - _this.clientSize(item.element));
        };
        _this.onDragHandle = function (itemIndex, dx, dy) {
            var sizes = tslib_1.__spreadArrays(_this.originSizes);
            var collapsed = tslib_1.__spreadArrays(_this.originCollapsed);
            new SizeDistributor(sizes, collapsed, _this.originTotalSize, _this.sizeWhenCollapsed).distribute(itemIndex + 1, _this.isVertical ? dy : dx);
            var percents = sizes.map(function (size) { return 100 * size / _this.originTotalSize + "%"; });
            _this.setState({ sizes: sizes, percents: percents, collapsed: collapsed });
        };
        var childCount = React.Children.count(_this.props.children);
        _this.state = {
            collapsed: [],
            resizing: false,
            percents: React.Children.map(_this.props.children, function () { return 100 / childCount + "%"; }),
        };
        return _this;
    }
    Accordion.prototype.componentDidMount = function () {
        this.updateSizes();
    };
    Accordion.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _a = this.props, direction = _a.direction, children = _a.children, onResize = _a.onResize, animationDuration = _a.animationDuration;
        if (React.Children.count(children) !== React.Children.count(prevProps.children)) {
            this.updateSizes();
        }
        var _b = this.state, sizes = _b.sizes, resizing = _b.resizing;
        if (sizes !== prevState.sizes && onResize) {
            if (resizing) {
                onResize(direction);
            }
            else {
                // triggers the callback after finishing CSS animation
                setTimeout(function () { return onResize(direction); }, animationDuration);
            }
        }
    };
    Object.defineProperty(Accordion.prototype, "isVertical", {
        get: function () {
            return this.props.direction === 'vertical';
        },
        enumerable: true,
        configurable: true
    });
    Accordion.prototype.clientSize = function (element) {
        var clientWidth = element.clientWidth, clientHeight = element.clientHeight;
        return this.isVertical ? clientHeight : clientWidth;
    };
    Accordion.prototype.offsetSize = function (element) {
        var offsetWidth = element.offsetWidth, offsetHeight = element.offsetHeight;
        return this.isVertical ? offsetHeight : offsetWidth;
    };
    Accordion.prototype.render = function () {
        var _this = this;
        var direction = this.props.direction;
        var resizing = this.state.resizing;
        var resizingClassName = resizing ? CLASS_NAME + "--resizing" : '';
        var scrollableClassName = this.isScrollable ? CLASS_NAME + "--scrollable" : '';
        return (React.createElement("div", { className: CLASS_NAME + " " + CLASS_NAME + "--" + direction + " " + resizingClassName + " " + scrollableClassName, ref: function (element) { return _this.element = element; } }, this.renderItems()));
    };
    Accordion.prototype.renderItems = function () {
        var _this = this;
        var _a = this.state, sizes = _a.sizes, percents = _a.percents, collapsed = _a.collapsed;
        var _b = this.props, children = _b.children, direction = _b.direction;
        return React.Children.map(children, function (child, index) {
            if (typeof child !== 'object') {
                throw new Error('Accordion should have only AccordionItem elements as children');
            }
            var lastChild = index === React.Children.count(children) - 1;
            var size = collapsed[index] ? sizes[index] : percents[index];
            var additionalProps = {
                ref: function (element) { return _this.items[index] = element; },
                collapsed: collapsed[index],
                size: size,
                direction: direction,
                onChangeCollapsed: function (itemCollapsed) { return _this.onItemChangeCollapsed({ itemIndex: index, itemCollapsed: itemCollapsed }); },
                onBeginDragHandle: lastChild ? undefined : function () { return _this.onBeginDragHandle(index); },
                onDragHandle: lastChild ? undefined : function (dx, dy) { return _this.onDragHandle(index, dx, dy); },
                onEndDragHandle: _this.onEndDragHandle,
            };
            return React.cloneElement(child, additionalProps);
        });
    };
    Accordion.prototype.computeEffectiveItemSizes = function () {
        var _this = this;
        var sizes = [];
        this.items.forEach(function (item, index) {
            if (!item) {
                return;
            }
            if (_this.state.collapsed[index]) {
                var collapsedSize = _this.sizeWhenCollapsed(index);
                sizes.push(collapsedSize);
            }
            else {
                sizes.push(_this.offsetSize(item.element));
            }
        });
        return sizes;
    };
    Accordion.prototype.onItemChangeCollapsed = function (_a) {
        var itemIndex = _a.itemIndex, itemCollapsed = _a.itemCollapsed;
        var totalSize = this.clientSize(this.element);
        var sizes = this.computeEffectiveItemSizes();
        if (sizes.length === 1) {
            return;
        }
        var collapsed = tslib_1.__spreadArrays(this.state.collapsed);
        var effectiveSize = sizes[itemIndex];
        var collapsedSize = this.sizeWhenCollapsed(itemIndex);
        var distributor = new SizeDistributor(sizes, collapsed, totalSize, this.sizeWhenCollapsed);
        if (itemCollapsed) {
            var splitShift = Math.max(effectiveSize - collapsedSize, 0);
            sizes[itemIndex] = collapsedSize;
            if (itemIndex === sizes.length - 1) {
                distributor.expand(splitShift, itemIndex - 1);
            }
            else {
                distributor.expand(splitShift, itemIndex + 1);
            }
        }
        else {
            var _b = this.defaultProps.get(itemIndex), defaultSize = _b.defaultSize, minSize = _b.minSize;
            var shift = (defaultSize || (totalSize / sizes.length)) - collapsedSize;
            var freeSize = 0;
            if (itemIndex === sizes.length - 1) {
                freeSize = distributor.collapseForward({ shift: shift, from: itemIndex - 1, to: itemIndex });
            }
            else {
                freeSize = distributor.collapseForward({ shift: shift, from: itemIndex + 1, to: sizes.length });
            }
            freeSize = Math.max(freeSize, distributor.leftoverSize());
            if (freeSize < shift) {
                freeSize += distributor.collapseForward({ shift: shift - freeSize, from: 0, to: itemIndex });
            }
            if (freeSize < minSize) {
                freeSize = minSize;
            }
            sizes[itemIndex] = Math.round(collapsedSize + freeSize);
        }
        collapsed[itemIndex] = itemCollapsed;
        var percents = sizes.map(function (size) { return 100 * size / totalSize + "%"; });
        this.setState({ sizes: sizes, percents: percents, collapsed: collapsed });
    };
    Accordion.defaultProps = {
        direction: 'vertical',
        animationDuration: 300,
    };
    return Accordion;
}(React.Component));
exports.Accordion = Accordion;
var SizeDistributor = /** @class */ (function () {
    function SizeDistributor(sizes, collapsed, totalSize, sizeWhenCollapsed) {
        this.sizes = sizes;
        this.collapsed = collapsed;
        this.totalSize = totalSize;
        this.sizeWhenCollapsed = sizeWhenCollapsed;
    }
    SizeDistributor.prototype.distribute = function (splitIndex, splitShift) {
        if (splitShift > 0) {
            var freeSize = this.collapseForward({ shift: splitShift, from: splitIndex, to: this.sizes.length });
            freeSize = Math.max(freeSize, this.leftoverSize());
            this.expand(freeSize, splitIndex - 1);
        }
        else {
            var freeSize = this.collapseBackward({ shift: -splitShift, from: 0, to: splitIndex });
            freeSize = Math.max(freeSize, this.leftoverSize());
            this.expand(freeSize, splitIndex);
        }
    };
    SizeDistributor.prototype.collapseForward = function (_a) {
        var shift = _a.shift, from = _a.from, to = _a.to;
        if (shift <= 0) {
            return 0;
        }
        var shiftLeft = shift;
        for (var i = from; i < to; i++) {
            shiftLeft = this.collapse(shiftLeft, i);
        }
        return shift - shiftLeft;
    };
    SizeDistributor.prototype.collapseBackward = function (_a) {
        var shift = _a.shift, from = _a.from, to = _a.to;
        if (shift <= 0) {
            return 0;
        }
        var shiftLeft = shift;
        for (var i = to - 1; i >= from; i--) {
            shiftLeft = this.collapse(shiftLeft, i);
        }
        return shift - shiftLeft;
    };
    SizeDistributor.prototype.collapse = function (shift, index) {
        if (this.collapsed[index]) {
            return shift;
        }
        var size = this.sizes[index];
        var collapsedSize = this.sizeWhenCollapsed(index);
        var newSize = Math.round(Math.max(size - shift, collapsedSize));
        this.sizes[index] = newSize;
        this.collapsed[index] = newSize <= collapsedSize;
        return shift - (size - newSize);
    };
    SizeDistributor.prototype.expand = function (shift, index) {
        if (shift <= 0) {
            return 0;
        }
        var oldSize = this.sizes[index];
        var newSize = Math.round(oldSize + shift);
        this.sizes[index] = newSize;
        this.collapsed[index] = newSize <= this.sizeWhenCollapsed(index);
        return newSize - oldSize;
    };
    SizeDistributor.prototype.leftoverSize = function () {
        var sizeSum = this.sizes.reduce(function (sum, size) { return sum + size; }, 0);
        return Math.max(this.totalSize - sizeSum, 0);
    };
    return SizeDistributor;
}());


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var React = __webpack_require__(45);
var draggableHandle_1 = __webpack_require__(114);
var DockSide;
(function (DockSide) {
    DockSide[DockSide["Left"] = 1] = "Left";
    DockSide[DockSide["Right"] = 2] = "Right";
})(DockSide = exports.DockSide || (exports.DockSide = {}));
var CLASS_NAME = 'ontodia-accordion-item';
var AccordionItem = /** @class */ (function (_super) {
    tslib_1.__extends(AccordionItem, _super);
    function AccordionItem(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            resizing: false,
        };
        return _this;
    }
    Object.defineProperty(AccordionItem.prototype, "element", {
        get: function () { return this._element; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionItem.prototype, "header", {
        get: function () { return this._header; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionItem.prototype, "isVertical", {
        get: function () {
            return this.props.direction === 'vertical';
        },
        enumerable: true,
        configurable: true
    });
    AccordionItem.prototype.renderToggleButton = function () {
        var _a = this.props, collapsed = _a.collapsed, dockSide = _a.dockSide, onChangeCollapsed = _a.onChangeCollapsed;
        if (!dockSide) {
            return null;
        }
        var side = dockSide === DockSide.Left ? 'left' : 'right';
        return React.createElement("div", { className: CLASS_NAME + "__handle-btn " + CLASS_NAME + "__handle-btn-" + side, onClick: function () { return onChangeCollapsed(!collapsed); } });
    };
    AccordionItem.prototype.render = function () {
        var _this = this;
        var _a = this.props, heading = _a.heading, bodyClassName = _a.bodyClassName, children = _a.children, bodyRef = _a.bodyRef, collapsed = _a.collapsed, size = _a.size, direction = _a.direction, onBeginDragHandle = _a.onBeginDragHandle, onDragHandle = _a.onDragHandle, onEndDragHandle = _a.onEndDragHandle, dockSide = _a.dockSide;
        var resizing = this.state.resizing;
        var shouldRenderHandle = onBeginDragHandle && onDragHandle && onEndDragHandle;
        var style = this.isVertical ? { height: size } : { width: size };
        // unmount child component when the accordion item is collapsed and has dockSide
        var isMounted = !(collapsed && dockSide);
        return React.createElement("div", { className: CLASS_NAME + " " + CLASS_NAME + "--" + (collapsed ? 'collapsed' : 'expanded') + " " + CLASS_NAME + "--" + direction + "\n                " + (resizing ? CLASS_NAME + "--resizing" : ''), ref: function (element) { return _this._element = element; }, style: style },
            React.createElement("div", { className: CLASS_NAME + "__inner" },
                heading ? React.createElement("div", { className: CLASS_NAME + "__header", ref: function (header) { return _this._header = header; }, onClick: function () { return _this.props.onChangeCollapsed(!collapsed); } }, heading) : null,
                React.createElement("div", { className: CLASS_NAME + "__body" }, children && isMounted ? children :
                    React.createElement("div", { ref: bodyRef, className: "" + (bodyClassName || '') }))),
            shouldRenderHandle ? (React.createElement(draggableHandle_1.DraggableHandle, { className: CLASS_NAME + "__handle " + CLASS_NAME + "__handle-" + direction, onBeginDragHandle: function (e) {
                    _this.setState({ resizing: true });
                    onBeginDragHandle();
                }, onDragHandle: function (e, x, y) { return onDragHandle(x, y); }, onEndDragHandle: function (e) {
                    _this.setState({ resizing: false });
                    onEndDragHandle();
                } })) : null,
            this.renderToggleButton());
    };
    AccordionItem.defaultProps = {
        direction: 'vertical',
    };
    return AccordionItem;
}(React.Component));
exports.AccordionItem = AccordionItem;


/***/ }),
/* 149 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjYyIiBoZWlnaHQ9IjEzOSIgdmlld0JveD0iMCAwIDE5Ni41IDEwNC4yNSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTtjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6c1JHQjtmaWxsOm5vbmU7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVjYXA6c3F1YXJlO3N0cm9rZS1taXRlcmxpbWl0OjMiPgogICAgPHN0eWxlPgogICAgICAuc3R5bGUxIHsKICAgICAgICBmaWxsOiMwMDU0OTM7c3Ryb2tlOiMwMDU0OTM7c3Ryb2tlLXdpZHRoOjA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjM7c3Ryb2tlLWRhc2hhcnJheTpub25lCiAgICAgIH0KICAgICAgLnN0eWxlMiB7CiAgICAgICAgZmlsbDojZmZmZmZmO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoyLjE3MDk4MDY5O3N0cm9rZS1taXRlcmxpbWl0OjM7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuOTkwODI1NwogICAgICB9CiAgICAgIC5zdHlsZTMgewogICAgICAgIGZpbGw6IzAwMGUyNjtmaWxsLW9wYWNpdHk6MTtzdHJva2Utd2lkdGg6MC40NjQwMzA2OAogICAgICB9CiAgICA8L3N0eWxlPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwyNy43NSkiPgogICAgICAgIDxnIGlkPSJnODY3Ij4KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMS4wNTgzMywwLDAsMS4wNTgzMywxMjAuNzQ5NzIsLTUuNzM3MjY2MSkiIHN0eWxlPSJmaWxsOm5vbmU7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVjYXA6c3F1YXJlO3N0cm9rZS1taXRlcmxpbWl0OjMiPgogICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9InN0eWxlMSIgZD0iTSA3MC44NjYyMDMsNDEuNTYyODAxIEEgMzUuNDMzMTAyLDM1LjQzMzEwMiAwIDAgMSAzNS40MzMxMDIsNzYuOTk1OTAzIDM1LjQzMzEwMiwzNS40MzMxMDIgMCAwIDEgMCw0MS41NjI4MDEgMzUuNDMzMTAyLDM1LjQzMzEwMiAwIDAgMSAzNS40MzMxMDIsNi4xMjk2OTk3IDM1LjQzMzEwMiwzNS40MzMxMDIgMCAwIDEgNzAuODY2MjAzLDQxLjU2MjgwMSBaIi8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC45MjAxNTkzOSwwLDAsMS4wODA1MDg5LDM4LjM2NjgyMywtNy41Nzc4MjY4KSIKICAgICAgICAgICAgICBzdHlsZT0iZmlsbDpub25lO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbWl0ZXJsaW1pdDozIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0gMCw3LjgzMDUyMDIgSCAxMzAuMTU4IFYgNzYuOTk1OTE4IEggMCBaIgogICAgICAgICAgICAgICAgICBzdHlsZT0iZmlsbDojMDA1NDkzO3N0cm9rZTojMDA1NDkzO3N0cm9rZS13aWR0aDowLjI1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utb3BhY2l0eTowLjk1OTk5OTk1IiAvPgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEuMDU4MzMsMCwwLDEuMDU4MzMsMC43NDk5OTg3OSwtNS43MzcyNjYxKSIgCiAgICAgICAgICAgICAgc3R5bGU9ImZpbGw6bm9uZTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLW1pdGVybGltaXQ6MyI+CiAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz0ic3R5bGUxIiBkPSJNIDcwLjg2NjIwMyw0MS41NjI4MDEgQSAzNS40MzMxMDIsMzUuNDMzMTAyIDAgMCAxIDM1LjQzMzEwMiw3Ni45OTU5MDMgMzUuNDMzMTAyLDM1LjQzMzEwMiAwIDAgMSAwLDQxLjU2MjgwMSAzNS40MzMxMDIsMzUuNDMzMTAyIDAgMCAxIDM1LjQzMzEwMiw2LjEyOTY5OTcgMzUuNDMzMTAyLDM1LjQzMzEwMiAwIDAgMSA3MC44NjYyMDMsNDEuNTYyODAxIFoiLz4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8Y2lyY2xlIGN5PSIzOC4yNDk5MTIiIGN4PSIzOC4yNDk5MDgiIHI9IjMzLjc0OTkyIgogICAgICAgICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiMwMDU0OTM7c3Ryb2tlLXdpZHRoOjA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjM7c3Ryb2tlLWRhc2hhcnJheTpub25lIi8+CiAgICAgICAgPC9nPgogICAgICAgIDxnIGFyaWEtbGFiZWw9Im50b2RpYSIgdHJhbnNmb3JtPSJzY2FsZSgwLjk4NDgwNDE3LDEuMDE1NDMwMykiIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZTo1Ni4yOTc2NTMycHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTonVHcgQ2VuIE1UIENvbmRlbnNlZCc7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjonVHcgQ2VuIE1UIENvbmRlbnNlZCwgTm9ybWFsJztmb250LXZhcmlhbnQtbGlnYXR1cmVzOm5vcm1hbDtmb250LXZhcmlhbnQtY2Fwczpub3JtYWw7Zm9udC12YXJpYW50LW51bWVyaWM6bm9ybWFsO2ZvbnQtZmVhdHVyZS1zZXR0aW5nczpub3JtYWw7dGV4dC1hbGlnbjpzdGFydDtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDt3cml0aW5nLW1vZGU6bHItdGI7dGV4dC1hbmNob3I6c3RhcnQ7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoyLjE3MDk4MDY5O3N0cm9rZS1taXRlcmxpbWl0OjM7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuOTkwODI1NyI+CiAgICAgICAgICAgIDxwYXRoIGNsYXNzPSJzdHlsZTIiIGQ9Im0gODUuOTk4OTg4LDI2LjQyNjYzNCB2IDIuMzA5MDg0IGggMC4xMDk5NTYgcSAxLjczMTgxMiwtMi42Mzg5NTMgNC42NzMxNDUsLTIuNjM4OTUzIDUuMjIyOTI3LDAgNS4yMjI5MjcsNS42OTAyNDIgViA1MC41MzQ1NjUgSCA5MS41NTE3ODMgViAzMy4wNzg5OTQgcSAwLC0zLjU0NjA5MyAtMi44MDM4ODcsLTMuNTQ2MDkzIC0xLjI5MTk4NywwIC0yLjA2MTY4MSwwLjk2MjExOCAtMC43NDIyMDYsMC45MzQ2MjkgLTAuNzQyMjA2LDIuNTgzOTc1IHYgMTcuNDU1NTcxIGggLTQuNTA4MjEgViAyNi40MjY2MzQgWiIvPgogICAgICAgICAgICA8cGF0aCBjbGFzcz0ic3R5bGUyIiBkPSJtIDExMC42NTY3LDMwLjA1NTE5NCBoIC0yLjkxMzg0IHYgMjAuNDc5MzcxIGggLTQuNTA4MjEgViAzMC4wNTUxOTQgaCAtMi44ODYzNiB2IC0zLjU0NjA5MiBoIDIuODg2MzYgdiAtNi41NDI0MDMgaCA0LjUwODIxIHYgNi41NDI0MDMgaCAyLjkxMzg0IHoiLz4KICAgICAgICAgICAgPHBhdGggY2xhc3M9InN0eWxlMiIgZD0ibSAxMjIuMjI5NjEsMjYuMDk2NzY1IHEgMy40MzYxMywwIDUuNTI1MywyLjYxMTQ2NCAyLjA4OTE3LDIuNjExNDYzIDIuMDg5MTcsMTAuMTE1OTg0IDAsNy4wMzcyMDcgLTIuMTk5MTIsOS41Mzg3MTQgLTIuMTcxNjQsMi41MDE1MDcgLTUuMzYwMzgsMi41MDE1MDcgLTMuOTg1OTEsMCAtNS45MTAxNSwtMi45OTYzMTEgLTEuOTI0MjQsLTIuOTk2MzEgLTEuOTI0MjQsLTkuMjA4ODQ0IDAsLTcuNjE0NDc4IDIuMTk5MTMsLTEwLjA4ODQ5NiAyLjE5OTEzLC0yLjQ3NDAxOCA1LjQ3MDMzLC0yLjQ3NDAxOCB6IG0gMi44MzEzNywxMy44NTQ1MDEgcSAwLC02LjEzMDA2NyAtMC41NzcyNywtOC4xMzY3NyAtMC41NzcyNywtMi4wMDY3MDQgLTIuMzA5MDgsLTIuMDA2NzA0IC0xLjY0OTM1LDAgLTIuMjU0MTEsMS41NjY4NzggLTAuNjA0NzYsMS41NjY4NzggLTAuNjA0NzYsNS4zMDUzOTQgMCw3LjI4NDYwOSAwLjY1OTc0LDguOTA2NDY1IDAuNjg3MjMsMS42MjE4NTYgMi4yNTQxMSwxLjYyMTg1NiAxLjY3NjgzLDAgMi4yNTQxLC0xLjYyMTg1NiAwLjU3NzI3LC0xLjY0OTM0NSAwLjU3NzI3LC01LjYzNTI2MyB6Ii8+CiAgICAgICAgICAgIDxwYXRoIGNsYXNzPSJzdHlsZTIiIGQ9Im0gMTQ1LjczMjc4LDE0LjI3NjQ1NyBoIDQuNDgwNzIgdiAzNi4yNTgxMDggaCAtNC40MjU3NCB2IC0zLjIxNjIyMyBoIC0wLjEwOTk2IHEgLTEuNjIxODYsMy41NDYwOTIgLTQuNjE4MTcsMy41NDYwOTIgLTEuNzU5MywwIC0zLjI0MzcxLC0xLjE4MjAzMSAtMS40NTY5MiwtMS4xODIwMzEgLTIuMDM0MTksLTMuMjk4NjkgLTAuNTc3MjcsLTIuMTE2NjYgLTAuNTc3MjcsLTcuMDY0Njk2IDAsLTUuNjM1MjYzIDAuNDk0OCwtOC4wNTQzMDMgMC40OTQ4LC0yLjQ0NjUyOSAxLjg5Njc1LC0zLjc5MzQ5NCAxLjQwMTk0LC0xLjM3NDQ1NSAzLjU3MzU4LC0xLjM3NDQ1NSAyLjgzMTM4LDAgNC40NTMyMywzLjIxNjIyNCBoIDAuMTA5OTYgeiBtIDAuMDU1LDIzLjg2MDUyOSBxIDAsLTQuNDUzMjMyIC0wLjU3NzI3LC02LjI5NTAwMSAtMC41NDk3OSwtMS44NjkyNTggLTIuMjU0MTEsLTEuODY5MjU4IC0xLjcwNDMyLDAgLTIuMzM2NTcsMS45NTE3MjUgLTAuNjMyMjUsMS45NTE3MjUgLTAuNjMyMjUsNi40NTk5MzYgMCw0LjY3MzE0NSAwLjU3NzI3LDYuNjc5ODQ4IDAuNjA0NzYsMS45NzkyMTUgMi4yODE1OSwxLjk3OTIxNSAxLjY0OTM1LDAgMi4yODE2LC0yLjA2MTY4MiAwLjY1OTc0LC0yLjA4OTE3MSAwLjY1OTc0LC02Ljg0NDc4MyB6Ii8+CiAgICAgICAgICAgIDxwYXRoIGNsYXNzPSJzdHlsZTIiIGQ9Im0gMTU1Ljk4NjIxLDE5LjE2OTUxNSBxIDAsLTAuOTg5NjA3IDAuNzE0NzEsLTEuNzMxODEzIDAuNzQyMjEsLTAuNzQyMjA1IDEuNzU5MywtMC43NDIyMDUgMS4wMTcxLDAgMS43MzE4MiwwLjc0MjIwNSAwLjc0MjIsMC43NDIyMDYgMC43NDIyLDEuNzMxODEzIDAsMS4wMTcwOTYgLTAuNzQyMiwxLjc1OTMwMiAtMC43MTQ3MiwwLjcxNDcxNiAtMS43MzE4MiwwLjcxNDcxNiAtMS4wNDQ1OCwwIC0xLjc1OTMsLTAuNzE0NzE2IC0wLjcxNDcxLC0wLjc0MjIwNiAtMC43MTQ3MSwtMS43NTkzMDIgeiBtIDAuMjE5OTEsNy4zMzk1ODcgaCA0LjQ1MzIzIHYgMjQuMDI1NDYzIGggLTQuNDUzMjMgeiIvPgogICAgICAgICAgICA8cGF0aCBjbGFzcz0ic3R5bGUyIiBkPSJtIDE4MS4yMjExOSw1MC41MzQ1NjUgaCAtNC40ODA3MiB2IC0yLjkxMzg0MyBoIC0wLjEzNzQ1IHEgLTEuNzMxODEsMy4yNDM3MTIgLTQuNDgwNzIsMy4yNDM3MTIgLTIuMzM2NTcsMCAtNC4xMjMzNiwtMi4xNzE2MzggLTEuNzg2NzksLTIuMTk5MTI3IC0xLjc4Njc5LC05LjgxMzYwNSAwLC02Ljc2MjMxNSAxLjM0Njk2LC05LjczMTEzNyAxLjM0Njk3LC0yLjk5NjMxMSA0LjYxODE3LC0yLjk5NjMxMSAxLjUzOTM5LDAgMi40NzQwMiwwLjcxNDcxNyAwLjk2MjExLDAuNzE0NzE2IDEuOTUxNzIsMi4yODE1OTQgaCAwLjEzNzQ1IHYgLTIuNjM4OTUyIGggNC40ODA3MiB6IG0gLTcuMzY3MDgsLTMuNjAxMDcxIHEgMS43MzE4MiwwIDIuMzA5MDksLTIuMDYxNjgxIDAuNTc3MjcsLTIuMDYxNjgyIDAuNTc3MjcsLTcuMDA5NzE4IDAsLTQuMzQzMjc2IC0wLjUyMjMsLTYuMTAyNTc3IC0wLjUyMjI5LC0xLjc4Njc5MSAtMi4xOTkxMiwtMS43ODY3OTEgLTEuNjc2ODQsMCAtMi4zMzY1OCwxLjY0OTM0NSAtMC42MzIyNCwxLjY0OTM0NSAtMC42MzIyNCw1Ljk2NTEzMiAwLDUuMDg1NDgyIDAuNDk0OCw3LjIyOTYzMSAwLjUyMjI5LDIuMTE2NjU5IDIuMzA5MDgsMi4xMTY2NTkgeiIvPgogICAgICAgIDwvZz4KICAgIDxnIGFyaWEtbGFiZWw9InBvd2VyZWQgYnkiIHRyYW5zZm9ybT0ibWF0cml4KDEuNjk3NzQ5NSwwLDAsMS41NTIyMjgsLTU5LjE1MTkxOSwwLjE0OTk5OTc3KSIgc3R5bGU9ImZpbGw6IzAwMGUyNjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC40NjQwMzA2OCI+CiAgICAgIDxwYXRoIGNsYXNzPSJzdHlsZTMiIGQ9Im0gNjUuODc5MzM5LC0xMi4xMDQ2NzQgcSAwLjM2MjUyNCwtMC41MTY1OTcgMC42OTc4NTksLTAuNzUyMjM3IDAuMzQ0Mzk4LC0wLjIzNTY0MSAwLjgwNjYxNiwtMC4yMzU2NDEgMS4wNjAzODIsMCAxLjUwNDQ3NCwwLjk0MjU2MiAwLjQ0NDA5MiwwLjk0MjU2MiAwLjQ0NDA5MiwzLjA3MjM5MDYgMCwyLjQwMTcyMTEgLTAuNDcxMjgxLDMuMjgwODQxNyAtMC40NjIyMTgsMC44NzAwNTc1IC0xLjQ1OTE1OSwwLjg3MDA1NzUgLTAuNDM1MDI5LDAgLTAuNzM0MTExLC0wLjE5MDMyNTEgLTAuMjk5MDgyLC0wLjE5OTM4ODIgLTAuNzUyMjM3LC0wLjgwNjYxNTggaCAtMC4wMzYyNSB2IDQuMzc3NDc2NiBIIDY0LjM5Mjk5MSBWIC0xMi45NzQ3MzIgaCAxLjQ1MDA5NiB2IDAuODcwMDU4IHogbSAwLjg4ODE4NCw1LjkwMDA3NjkgcSAwLjUzNDcyMywwIDAuNzYxMywtMC42MTYyOTA3IDAuMjI2NTc4LC0wLjYyNTM1MzggMC4yMjY1NzgsLTIuMDIxMDcxIDAsLTEuNjIyMjk0MiAtMC4yMDg0NTEsLTIuMzAyMDI3MiAtMC4yMDg0NTIsLTAuNjg4Nzk1IC0wLjc3OTQyNywtMC42ODg3OTUgLTAuNTI1NjYsMCAtMC43MTU5ODUsMC41NzA5NzUgLTAuMTkwMzI1LDAuNTYxOTEyIC0wLjE5MDMyNSwxLjkyMTM3NjcgMCwxLjY4NTczNjQgMC4xNDUwMSwyLjQxMDc4NDMgMC4xNTQwNzMsMC43MjUwNDc5IDAuNzYxMywwLjcyNTA0NzkgeiIvPgogICAgICA8cGF0aCBkPSJtIDczLjQ5MjM0MiwtMTMuMTEwNjc4IHEgMS4xMzI4ODgsMCAxLjgyMTY4MywwLjg2MDk5NCAwLjY4ODc5NiwwLjg2MDk5NCAwLjY4ODc5NiwzLjMzNTIyMDQgMCwyLjMyMDE1MzIgLTAuNzI1MDQ4LDMuMTQ0ODk1MiAtMC43MTU5ODUsMC44MjQ3NDIgLTEuNzY3MzA1LDAuODI0NzQyIC0xLjMxNDE0OSwwIC0xLjk0ODU2NiwtMC45ODc4Nzc4IC0wLjYzNDQxNywtMC45ODc4Nzc3IC0wLjYzNDQxNywtMy4wMzYxMzggMCwtMi41MTA0Nzg4IDAuNzI1MDQ4LC0zLjMyNjE1NjggMC43MjUwNDgsLTAuODE1Njc5IDEuODAzNTU3LC0wLjgxNTY3OSB6IG0gMC45MzM0OTksNC41Njc4MDE0IHEgMCwtMi4wMjEwNzE0IC0wLjE5MDMyNSwtMi42ODI2Nzc0IC0wLjE5MDMyNSwtMC42NjE2MDYgLTAuNzYxMywtMC42NjE2MDYgLTAuNTQzNzg2LDAgLTAuNzQzMTc0LDAuNTE2NTk3IC0wLjE5OTM4OCwwLjUxNjU5NiAtMC4xOTkzODgsMS43NDkxNzc3IDAsMi40MDE3MjExIDAuMjE3NTE0LDIuOTM2NDQzOSAwLjIyNjU3OCwwLjUzNDcyMjggMC43NDMxNzQsMC41MzQ3MjI4IDAuNTUyODQ5LDAgMC43NDMxNzQsLTAuNTM0NzIyOCAwLjE5MDMyNSwtMC41NDM3ODU5IDAuMTkwMzI1LC0xLjg1NzkzNTIgeiIvPgogICAgICA8cGF0aCBjbGFzcz0ic3R5bGUzIiBkPSJtIDg1LjA3NDk4MiwtMTIuOTc0NzMyIC0xLjk0ODU2Niw3LjkyMTE0ODQgSCA4Mi4wODQxNiBsIC0wLjk3ODgxNSwtNC44NDg3NTc4IGggLTAuMDM2MjUgbCAtMC45ODc4NzgsNC44NDg3NTc4IEggNzkuMTAyNCBsIC0xLjk2NjY5MiwtNy45MjExNDg0IGggMS4zNjg1MjggbCAxLjExNDc2MSw1LjI4Mzc4NjcgaCAwLjAzNjI1IGwgMS4wNjAzODMsLTUuMjgzNzg2NyBoIDAuNzYxMyBsIDEuMTE0NzYxLDUuMzAxOTEyOSBoIDAuMDM2MjUgbCAxLjA1MTMyLC01LjMwMTkxMjkgeiIvPgogICAgICA8cGF0aCBjbGFzcz0ic3R5bGUzIiBkPSJtIDkwLjk2NTk5NiwtOC43NTEzMjc4IGggLTMuMzM1MjIgcSAwLDEuMjg2OTYgMC4xNzIxOTgsMS45NDg1NjYyIDAuMTgxMjYyLDAuNjUyNTQzIDAuODQyODY5LDAuNjUyNTQzIDAuNTA3NTMzLDAgMC42ODg3OTUsLTAuMzgwNjUwMSAwLjE4MTI2MiwtMC4zODA2NTAxIDAuMTkwMzI1LC0xLjE5NjMyOSBoIDEuMzUwNDAyIHEgLTAuMDYzNDQsMi43ODIzNzEzIC0yLjM1NjQwNiwyLjc4MjM3MTMgLTIuNDY1MTYzLDAgLTIuNDY1MTYzLC0zLjg5NzEzMjQgMCwtNC4yNTA1OTMyIDIuNTU1Nzk0LC00LjI1MDU5MzIgMC45Njk3NTIsMCAxLjY1ODU0NywwLjczNDExMSAwLjY5Nzg1OSwwLjczNDExMSAwLjY5Nzg1OSwzLjAzNjEzNzkgeiBtIC0xLjQ5NTQxMSwtMS4xNTEwMTM2IHEgMCwtMS4xNzgyMDI2IC0wLjE5MDMyNSwtMS42ODU3MzY2IC0wLjE5MDMyNiwtMC41MTY1OTYgLTAuNjg4Nzk2LC0wLjUxNjU5NiAtMC41ODkxMDEsMCAtMC43Nzk0MjYsMC41NDM3ODYgLTAuMTgxMjYyLDAuNTM0NzIyIC0wLjE4MTI2MiwxLjY1ODU0NjYgeiIvPgogICAgICA8cGF0aCBjbGFzcz0ic3R5bGUzIiBkPSJtIDk2LjI4NjAzNCwtMTEuODA1NTkyIHEgLTEuMDI0MTMsMC4wMjcxOSAtMS40NTkxNTksMC4zODk3MTMgLTAuNDM1MDI5LDAuMzYyNTI0IC0wLjQzNTAyOSwxLjYxMzIzMTcgdiA0Ljc0OTA2MzcgaCAtMS41MDQ0NzQgdiAtNy45MjExNDg0IGggMS41MDQ0NzQgdiAxLjE2OTE0IGggMC4wMzYyNSBxIDAuNjUyNTQzLC0xLjI4Njk2IDEuNzU4MjQxLC0xLjI4Njk2IGwgMC4wOTk2OSwwLjAxODEzIHoiLz4KICAgICAgPHBhdGggY2xhc3M9InN0eWxlMyIgZD0ibSAxMDIuMzQ5MjUsLTguNzUxMzI3OCBoIC0zLjMzNTIyMSBxIDAsMS4yODY5NiAwLjE3MjE5OSwxLjk0ODU2NjIgMC4xODEyNjIsMC42NTI1NDMgMC44NDI4NzIsMC42NTI1NDMgMC41MDc1MywwIDAuNjg4NzksLTAuMzgwNjUwMSAwLjE4MTI2LC0wLjM4MDY1MDEgMC4xOTAzMywtMS4xOTYzMjkgaCAxLjM1MDQgcSAtMC4wNjM0LDIuNzgyMzcxMyAtMi4zNTY0MDgsMi43ODIzNzEzIC0yLjQ2NTE2MiwwIC0yLjQ2NTE2MiwtMy44OTcxMzI0IDAsLTQuMjUwNTkzMiAyLjU1NTc5MywtNC4yNTA1OTMyIDAuOTY5NzQ3LDAgMS42NTg1NDcsMC43MzQxMTEgMC42OTc4NiwwLjczNDExMSAwLjY5Nzg2LDMuMDM2MTM3OSB6IG0gLTEuNDk1NDEsLTEuMTUxMDEzNiBxIDAsLTEuMTc4MjAyNiAtMC4xOTAzMywtMS42ODU3MzY2IC0wLjE5MDMyLC0wLjUxNjU5NiAtMC42ODg3OTMsLTAuNTE2NTk2IC0wLjU4OTEwMSwwIC0wLjc3OTQyNiwwLjU0Mzc4NiAtMC4xODEyNjIsMC41MzQ3MjIgLTAuMTgxMjYyLDEuNjU4NTQ2NiB6Ii8+CiAgICAgIDxwYXRoIGNsYXNzPSJzdHlsZTMiIGQ9Im0gMTA3LjY2OTI5LC0xNy4wMDc4MTEgaCAxLjQ3NzI4IHYgMTEuOTU0MjI3NCBoIC0xLjQ1OTE2IHYgLTEuMDYwMzgyNiBoIC0wLjAzNjIgcSAtMC41MzQ3MiwxLjE2OTEzOTggLTEuNTIyNiwxLjE2OTEzOTggLTAuNTgwMDQsMCAtMS4wNjk0NSwtMC4zODk3MTMzIC0wLjQ4MDM0LC0wLjM4OTcxMzIgLTAuNjcwNjcsLTEuMDg3NTcxOCAtMC4xOTAzMiwtMC42OTc4NTg2IC0wLjE5MDMyLC0yLjMyOTIxNjMgMCwtMS44NTc5MzUyIDAuMTYzMTMsLTIuNjU1NDg4MiAwLjE2MzE0LC0wLjgwNjYxNSAwLjYyNTM2LC0xLjI1MDcwNyAwLjQ2MjIyLC0wLjQ1MzE1NSAxLjE3ODIsLTAuNDUzMTU1IDAuOTMzNSwwIDEuNDY4MjIsMS4wNjAzODIgaCAwLjAzNjMgeiBtIDAuMDE4MSw3Ljg2Njc2OTkgcSAwLC0xLjQ2ODIyMTkgLTAuMTkwMzIsLTIuMDc1NDQ5OSAtMC4xODEyNywtMC42MTYyOSAtMC43NDMxOCwtMC42MTYyOSAtMC41NjE5MSwwIC0wLjc3MDM2LDAuNjQzNDggLTAuMjA4NDUsMC42NDM0OCAtMC4yMDg0NSwyLjEyOTgyNzggMCwxLjU0MDcyNjggMC4xOTAzMiwyLjIwMjMzMyAwLjE5OTM5LDAuNjUyNTQzMSAwLjc1MjI0LDAuNjUyNTQzMSAwLjU0Mzc5LDAgMC43NTIyNCwtMC42Nzk3MzI0IDAuMjE3NTEsLTAuNjg4Nzk1NSAwLjIxNzUxLC0yLjI1NjcxMTYgeiIvPgogICAgICA8cGF0aCBjbGFzcz0ic3R5bGUzIiBkPSJtIDExNC40NzU2NywtMTcuMDA3ODExIGggMS40ODYzNSB2IDUuMDg0Mzk5IGggMC4wMzYzIHEgMC40MTY5LC0xLjE4NzI2NiAxLjU0MDcyLC0xLjE4NzI2NiAwLjgzMzgxLDAgMS4zNjg1MywwLjc3OTQyNiAwLjU0Mzc5LDAuNzc5NDI3IDAuNTQzNzksMy4wMDg5NDg5IDAsMi43MTg5Mjk2IC0wLjQ4MDM1LDMuNTQzNjcxNiAtMC40ODAzNCwwLjgxNTY3ODkgLTEuNDg2MzUsMC44MTU2Nzg5IC0wLjk2MDY4LDAgLTEuNTA0NDcsLTEuMTg3MjY2IGggLTAuMDM2MiB2IDEuMDk2NjM1IGggLTEuNDY4MjMgeiBtIDMuMzk4NjcsOC4yNzQ2MDk0IHEgMCwtMS42ODU3MzY0IC0wLjE5OTM5LC0yLjQwMTcyMTQgLTAuMTkwMzMsLTAuNzE1OTg1IC0wLjc4ODQ5LC0wLjcxNTk4NSAtMC41MDc1MywwIC0wLjcyNTA1LDAuNTgwMDM5IC0wLjIxNzUxLDAuNTgwMDM4IC0wLjIxNzUxLDEuODU3OTM1IDAsMS43MzEwNTE4IDAuMTk5MzgsMi40NjUxNjI4IDAuMjA4NDYsMC43MjUwNDc5IDAuNzc5NDMsMC43MjUwNDc5IDAuNTE2NiwwIDAuNzM0MTEsLTAuNTg5MTAxNCAwLjIxNzUyLC0wLjU5ODE2NDYgMC4yMTc1MiwtMS45MjEzNzY5IHoiLz4KICAgICAgPHBhdGggY2xhc3M9InN0eWxlMyIgZD0ibSAxMjYuMjM5NTcsLTEyLjk3NDczMiAtMy42OTc3NCwxMS40Mjg1Njc1IGggLTEuMjk2MDIgbCAxLjI5NjAyLC00LjIxNDM0MDggLTIuMTQ3OTUsLTcuMjE0MjI2NyBoIDEuNDc3MjggbCAxLjMwNTA5LDUuNDU1OTg1NiBoIDAuMDM2MyBsIDEuNjEzMjMsLTUuNDU1OTg1NiB6Ii8+CiAgICA8L2cKICA+PC9nPgo8L3N2Zz4="

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var defaultLinkStyles_1 = __webpack_require__(77);
exports.LINK_SHOW_IRI = defaultLinkStyles_1.LINK_SHOW_IRI;
var schema_1 = __webpack_require__(53);
exports.TemplateProperties = schema_1.TemplateProperties;
tslib_1.__exportStar(__webpack_require__(51), exports);
tslib_1.__exportStar(__webpack_require__(82), exports);
tslib_1.__exportStar(__webpack_require__(60), exports);
tslib_1.__exportStar(__webpack_require__(55), exports);
tslib_1.__exportStar(__webpack_require__(62), exports);
tslib_1.__exportStar(__webpack_require__(89), exports);
tslib_1.__exportStar(__webpack_require__(117), exports);
tslib_1.__exportStar(__webpack_require__(118), exports);
var workspaceContext_1 = __webpack_require__(87);
exports.WorkspaceContextTypes = workspaceContext_1.WorkspaceContextTypes;
var layout_1 = __webpack_require__(105);
exports.groupForceLayout = layout_1.groupForceLayout;
exports.groupRemoveOverlaps = layout_1.groupRemoveOverlaps;
exports.padded = layout_1.padded;
exports.biasFreePadded = layout_1.biasFreePadded;
exports.getContentFittingBoxForLayout = layout_1.getContentFittingBoxForLayout;


/***/ })
/******/ ]);
});
//# sourceMappingURL=ontodia.js.map