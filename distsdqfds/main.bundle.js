webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{title}}!\n  </h1>\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" href=\"http://angularjs.blogspot.ca/\">Angular blog</a></h2>\n  </li>\n</ul>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__photography_photography_component__ = __webpack_require__("../../../../../src/app/photography/photography.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__photography_photography_component__["a" /* PhotographyComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/photography/photography.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/photography/photography.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"topnav\" style=\"display: block;\">\n  <ul class=\"nav-gallery-controls\">\n \n      <div class=\"controls\" [hidden]=\"!galleryActive\">\n        <li>\n              <span (click)=\"previousImage()\"><svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                  width=\"30px\" height=\"30px\" viewBox=\"0 0 236 236\" enable-background=\"new 0 0 236 236\" xml:space=\"preserve\">\n                <g>\n                  <!-- <rect x=\"5\" y=\"5\" fill=\"#FFFFFF\" stroke=\"#000000\" stroke-width=\"10\" stroke-miterlimit=\"10\" width=\"226\" height=\"226\"/> -->\n                  <g>\n                    <path d=\"M157.46,53.959c-1.021,1.938-2.165,3.751-3.244,5.632l-3.444,5.43c-1.13,1.829-2.355,3.561-3.537,5.337l-3.652,5.224\n                      l-3.745,5.13l-3.829,5.046c-1.265,1.693-2.601,3.315-3.902,4.972c-1.306,1.653-2.615,3.301-3.967,4.908l-4.02,4.855l-4.11,4.765\n                      c-1.361,1.598-2.744,3.173-4.155,4.72l-4.203,4.672c-1.402,1.556-2.855,3.061-4.281,4.594l-4.305,4.57l-4.521,4.484\n                      C97.07,129.784,96,131.31,94,132.763v-16.525l4.43,4.39c1.428,1.469,2.948,2.909,4.336,4.417l4.238,4.481l2.12,2.24l2.066,2.286\n                      l4.12,4.572c1.375,1.52,2.694,3.099,4.044,4.645c1.332,1.563,2.706,3.087,4.005,4.684l3.938,4.751\n                      c1.32,1.575,2.576,3.216,3.867,4.82c1.289,1.606,2.565,3.227,3.809,4.879c1.244,1.652,2.528,3.264,3.739,4.948\n                      c1.219,1.678,2.463,3.329,3.66,5.027c1.189,1.707,2.409,3.383,3.572,5.115c1.165,1.73,2.351,3.44,3.461,5.227l3.373,5.314\n                      c1.059,1.837,2.18,3.611,3.182,5.506l-0.92,0.92l-17.596-17.154l-17.457-17.293l-34.902-34.598l-0.923-0.915l0.923-0.915\n                      l35.648-35.352l17.83-17.67l17.977-17.522L157.46,53.959z\"/>\n                  </g>\n                </g>\n                </svg>\n              </span>\n       </li>\n      <li>\n        <span (click)=\"nextImage()\"><svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n              width=\"30px\" height=\"30px\" viewBox=\"0 0 236 236\" enable-background=\"new 0 0 236 236\" xml:space=\"preserve\">\n            <g>\n             <!-- <rect x=\"5\" y=\"5\" fill=\"#FFFFFF\" stroke=\"#000000\" stroke-width=\"10\" stroke-miterlimit=\"10\" width=\"226\" height=\"226\"/> -->\n              <g>\n                <path d=\"M86.46,53.041c1.938,1.02,3.751,2.165,5.631,3.243l5.431,3.445c1.829,1.13,3.561,2.356,5.338,3.537l5.223,3.652\n                  l5.13,3.745l5.046,3.829c1.693,1.265,3.315,2.601,4.973,3.903c1.653,1.305,3.301,2.615,4.908,3.967l4.855,4.02l4.765,4.11\n                  c1.597,1.361,3.173,2.744,4.72,4.155l4.672,4.203c1.556,1.402,3.061,2.856,4.594,4.281l4.57,4.305l4.484,4.391\n                  c1.485,1.473,3.011,2.906,4.464,4.411l8.205,8.492l-8.205,8.033l-4.39,4.298c-1.469,1.428-2.909,2.883-4.417,4.271l-4.481,4.206\n                  l-2.24,2.104l-2.286,2.058l-4.572,4.116c-1.52,1.375-3.099,2.692-4.645,4.042c-1.563,1.332-3.087,2.705-4.684,4.004l-4.751,3.937\n                  c-1.575,1.32-3.216,2.576-4.82,3.867c-1.606,1.289-3.227,2.565-4.879,3.809c-1.652,1.244-3.264,2.528-4.948,3.739\n                  c-1.678,1.219-3.329,2.463-5.027,3.66c-1.707,1.189-3.383,2.409-5.115,3.572c-1.73,1.165-3.44,2.351-5.227,3.461l-5.314,3.373\n                  c-1.837,1.059-3.611,2.18-5.506,3.182l-0.92-0.92l17.154-17.596l17.251-17.457L156,123.585v1.83l-35.309-35.648l-17.649-17.83\n                  L85.529,53.959L86.46,53.041z\"/>\n              </g>\n            </g>\n            </svg>\n        </span>\n      </li>\n      \n     </div>\n  \n       \n  </ul>\n\n  <div>\n    <!-- <a href=\"#\"><img id=\"logo\" src=\"../assets/logo.png\"/></a> -->\n  </div>\n  <ul>\n    <!--  <li [ngClass]=\"[menuToggleState]\" class=\"menu-item\">\n        <a href=\"\">home</a>\n      </li> -->\n      <li [ngClass]=\"[menuToggleState]\" class=\"menu-item\">\n        <a href=\"/photography\" class=\"active\">photography</a>\n      </li>\n      <li [ngClass]=\"[menuToggleState]\" class=\"menu-item\">\n          <a href=\"\">design</a>\n      </li>\n      <li [ngClass]=\"[menuToggleState]\" class=\"menu-item\">\n          <a href=\"\">projects</a>\n      </li>\n\n    <li style=\"padding-top: 10px;\">\n        <div id=\"nav-icon3\" [ngClass]=\"[menuToggleState]\" (click)=\"toggleNav($event)\" style=\"float: right;\">\n          <span></span>\n          <span></span>\n          <span></span>\n        </div>\n    </li>\n  </ul>\n</nav>\n\n\n \n\n\n<section class=\"page\">\n\n\n\n  <section class=\"content\"  [hidden]=\"galleryActive\">\n    <div>\n\n    </div>\n    <div class=\"sub-content-item\" >\n        <div class=\"grid-container inline-block\">\n            <div *ngFor=\"let image of images | paginate: { itemsPerPage: 200, currentPage: p }; let i = index\">\n              <div class=\"category\"  (click)=\"open(i)\">\n                <img class=\"grid-element\" src=\"{{image.src}}\"/>\n              </div>\n         <!--   <a href=\"#\" class=\"category grid-element\">\n            </a>\n            <a href=\"#\" class=\"category grid-element\">\n\n            </a>\n            <a href=\"#\"class=\"category grid-element\">\n\n            </a>\n              <a href=\"#\"class=\"category grid-element\">\n\n            </a>\n              <a href=\"#\" class=\"category grid-element\">\n            </a>\n            <a href=\"#\" class=\"category grid-element\">\n\n            </a>\n            <a href=\"#\"class=\"category grid-element\">\n\n            </a>\n            <a href=\"#\"class=\"category grid-element\">\n\n            </a> -->\n\n            </div>\n\n      </div>\n    </div>\n  </section>\n  <pagination-controls style=\"display: none;\" (pageChange)=\"p = $event\"></pagination-controls>\n\n</section>\n\n\n\n<div id=\"myNav\" class=\"overlay-gallery\" [ngStyle]=\"{'height': galleryActive === true ? '100%' : '0%' }\">\n\n<!--\n<div>\n  <p>wtf is happening</p>\n\n\n\n  <swiper class=\"swiper\" [config]=\"config\">\n      <div class=\"swiper-wrapper images\">\n          <img class=\"swiper-slide\" *ngFor=\"let image of images\" [src]=\"image.src\">\n      </div>\n      <div class=\"swiper-pagination\"></div>\n      <div class=\"swiper-button-next\"></div>\n      <div class=\"swiper-button-prev\"></div>\n  </swiper>\n</div>\n-->\n\n\n<div class=\"overlay-gallery-content outer\">\n    <div class=\"middle\">\n        <div class=\"overlay-gallery-image inner\">\n            <img [src]=\"image.src\"/>\n            <div class=\"info\">\n                <p><strong>Film:</strong> Kodak Portra 400</p>\n                <p><strong>Camera:</strong> Mamiya RB67</p>\n                <p><strong>Lens:</strong> Mamiya Sekor C 140mm F4.5</p>\n            </div>\n\n                  <!--\n                <div class=\"info\">\n                  <p>Film: <p>\n                  <span>Kodak Portra 400</span>  \n                  <p>Camera: Mamiya RB67</p>  \n              </div> -->\n        </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/photography/photography.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotographyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PhotographyComponent = (function () {
    function PhotographyComponent() {
        this.my_Class = 'checked';
        this.images = [
            { id: 1, category: '35mm', type: 'b&w', src: 'assets/gallery/1.jpg', thumb: 'assets/gallery/1.jpg' },
            { id: 2, category: '35mm', type: 'b&w', src: 'assets/gallery/2.jpg' },
            { id: 3, category: '35mm', type: 'b&w', src: 'assets/gallery/3.jpg' },
            { id: 4, category: '35mm', type: 'b&w', src: 'assets/gallery/4.jpg' },
            { id: 5, category: '35mm', type: 'b&w', src: 'assets/gallery/5.jpg' },
            { id: 6, category: '35mm', type: 'b&w', src: 'assets/gallery/6.jpg' },
            { id: 7, category: '35mm', type: 'b&w', src: 'assets/gallery/7.jpg' },
            { id: 8, category: '35mm', type: 'b&w', src: 'assets/gallery/8.jpg' },
            { id: 9, category: '35mm', type: 'b&w', src: 'assets/gallery/9.jpg' },
        ];
        this.menuActive = false;
        this.menuToggleState = '';
        this.galleryActive = true;
        this.image = { src: 'assets/gallery/2.jpg' };
        this.imageIndex = 0;
        this.fullGalleryClass = 'active';
        this.detailGalleryClass = (this.fullGalleryClass === 'active' ? '' : 'active');
    }
    PhotographyComponent.prototype.ngOnInit = function () {
    };
    PhotographyComponent.prototype.toggleGallery = function (mode) {
        if (mode === 'full') {
            this.fullGalleryClass = 'active';
            this.detailGalleryClass = '';
            this.galleryActive = false;
        }
        else {
            this.fullGalleryClass = '';
            this.detailGalleryClass = 'active';
            this.galleryActive = true;
            this.image = this.images[this.imageIndex];
        }
    };
    PhotographyComponent.prototype.toggleNav = function (e) {
        e.preventDefault();
        console.log('toggle menu');
        if (this.menuActive) {
            this.menuActive = false;
            this.menuToggleState = '';
        }
        else {
            this.menuActive = true;
            this.menuToggleState = 'open';
        }
    };
    PhotographyComponent.prototype.closeNav = function () {
        this.menuActive = false;
    };
    PhotographyComponent.prototype.expandGallery = function () {
        this.galleryActive = !this.galleryActive;
        this.image = this.images[this.imageIndex];
    };
    PhotographyComponent.prototype.open = function (index) {
        // this.galleryActive = true;
        this.toggleGallery('detail');
        this.imageIndex = index;
        this.image = this.images[this.imageIndex];
    };
    PhotographyComponent.prototype.nextImage = function () {
        this.imageIndex = (this.imageIndex + 1) % this.images.length;
        this.image = this.images[this.imageIndex];
    };
    PhotographyComponent.prototype.previousImage = function () {
        this.imageIndex = this.imageIndex === 0 ? this.imageIndex = this.images.length - 1 : this.imageIndex -= 1;
        this.image = this.images[this.imageIndex];
    };
    return PhotographyComponent;
}());
PhotographyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-photography',
        template: __webpack_require__("../../../../../src/app/photography/photography.component.html"),
        styles: [__webpack_require__("../../../../../src/app/photography/photography.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PhotographyComponent);

//# sourceMappingURL=photography.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map