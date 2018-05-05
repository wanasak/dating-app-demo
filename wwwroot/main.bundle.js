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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-nav></app-nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth0_angular_jwt__ = __webpack_require__("../../../../@auth0/angular-jwt/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(authService, jwtHelperService) {
        this.authService = authService;
        this.jwtHelperService = jwtHelperService;
        // jwtHelper: JwtHelper = new JwtHelper();
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        var token = localStorage.getItem('token');
        var user = JSON.parse(localStorage.getItem('user'));
        if (token) {
            this.authService.decodedToken = this.jwtHelperService.decodeToken(token);
        }
        if (user) {
            this.authService.currentUser = user;
            if (user.photoUrl) {
                this.authService.changeMemberPhoto(user.photoUrl);
            }
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth0_angular_jwt__["b" /* JwtHelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth0_angular_jwt__["b" /* JwtHelperService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_error_interceptor__ = __webpack_require__("../../../../../src/app/services/error.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth0_angular_jwt__ = __webpack_require__("../../../../@auth0/angular-jwt/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards_prevent_unsave_guard__ = __webpack_require__("../../../../../src/app/guards/prevent-unsave.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resolvers_member_list_resolver__ = __webpack_require__("../../../../../src/app/resolvers/member-list.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resolvers_member_detail_resolver__ = __webpack_require__("../../../../../src/app/resolvers/member-detail.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__members_member_card_member_card_component__ = __webpack_require__("../../../../../src/app/members/member-card/member-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes__ = __webpack_require__("../../../../../src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_gallery__ = __webpack_require__("../../../../ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_gallery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ngx_gallery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_time_ago_pipe__ = __webpack_require__("../../../../time-ago-pipe/time-ago-pipe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_time_ago_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_time_ago_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__nav_nav_component__ = __webpack_require__("../../../../../src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_alertify_service__ = __webpack_require__("../../../../../src/app/services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__members_member_list_member_list_component__ = __webpack_require__("../../../../../src/app/members/member-list/member-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__messages_messages_component__ = __webpack_require__("../../../../../src/app/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__lists_lists_component__ = __webpack_require__("../../../../../src/app/lists/lists.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__members_member_detail_member_detail_component__ = __webpack_require__("../../../../../src/app/members/member-detail/member-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__members_member_edit_member_edit_component__ = __webpack_require__("../../../../../src/app/members/member-edit/member-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__resolvers_member_edit_resolver__ = __webpack_require__("../../../../../src/app/resolvers/member-edit.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__members_photo_editor_photo_editor_component__ = __webpack_require__("../../../../../src/app/members/photo-editor/photo-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__resolvers_lists_resolver__ = __webpack_require__("../../../../../src/app/resolvers/lists.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__resolvers_message_resolver__ = __webpack_require__("../../../../../src/app/resolvers/message.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__members_member_messages_member_messages_component__ = __webpack_require__("../../../../../src/app/members/member-messages/member-messages.component.ts");
/* unused harmony export tokenGetter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































function tokenGetter() {
    return localStorage.getItem('token');
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_19__nav_nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_20__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_21__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_23__members_member_list_member_list_component__["a" /* MemberListComponent */],
            __WEBPACK_IMPORTED_MODULE_24__messages_messages_component__["a" /* MessagesComponent */],
            __WEBPACK_IMPORTED_MODULE_25__lists_lists_component__["a" /* ListsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__members_member_card_member_card_component__["a" /* MemberCardComponent */],
            __WEBPACK_IMPORTED_MODULE_28__members_member_detail_member_detail_component__["a" /* MemberDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_29__members_member_edit_member_edit_component__["a" /* MemberEditComponent */],
            __WEBPACK_IMPORTED_MODULE_31__members_photo_editor_photo_editor_component__["a" /* PhotoEditorComponent */],
            __WEBPACK_IMPORTED_MODULE_17_time_ago_pipe__["TimeAgoPipe"],
            __WEBPACK_IMPORTED_MODULE_34__members_member_messages_member_messages_component__["a" /* MemberMessagesComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap__["a" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_26__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__routes__["a" /* appRoutes */]),
            __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap__["b" /* TabsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_15_ngx_gallery__["NgxGalleryModule"],
            __WEBPACK_IMPORTED_MODULE_16_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap__["c" /* BsDatepickerModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap__["d" /* PaginationModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap__["e" /* ButtonsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_1__auth0_angular_jwt__["a" /* JwtModule */].forRoot({
                config: {
                    tokenGetter: tokenGetter,
                    whitelistedDomains: ['localhost:5000']
                }
            })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_22__services_alertify_service__["a" /* AlertifyService */],
            __WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_27__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__resolvers_member_detail_resolver__["a" /* MemberDetailResolver */],
            __WEBPACK_IMPORTED_MODULE_4__resolvers_member_list_resolver__["a" /* MemberListResolver */],
            __WEBPACK_IMPORTED_MODULE_30__resolvers_member_edit_resolver__["a" /* MemberEditResolver */],
            __WEBPACK_IMPORTED_MODULE_3__guards_prevent_unsave_guard__["a" /* PreventUnsaveGuard */],
            __WEBPACK_IMPORTED_MODULE_32__resolvers_lists_resolver__["a" /* ListsResolver */],
            __WEBPACK_IMPORTED_MODULE_33__resolvers_message_resolver__["a" /* MessagesResolver */],
            __WEBPACK_IMPORTED_MODULE_0__services_error_interceptor__["a" /* ErrorInterceptorProvider */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_alertify_service__ = __webpack_require__("../../../../../src/app/services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = (function () {
    function AuthGuard(authService, router, alertify) {
        this.authService = authService;
        this.router = router;
        this.alertify = alertify;
    }
    AuthGuard.prototype.canActivate = function () {
        // tslint:disable-next-line:curly
        if (this.authService.loggedIn())
            return true;
        this.alertify.error('You need to be logged in to access this area');
        this.router.navigate(['/home']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_alertify_service__["a" /* AlertifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_alertify_service__["a" /* AlertifyService */]) === "function" && _c || Object])
], AuthGuard);

var _a, _b, _c;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/guards/prevent-unsave.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreventUnsaveGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PreventUnsaveGuard = (function () {
    function PreventUnsaveGuard() {
    }
    // tslint:disable-next-line:max-line-length
    PreventUnsaveGuard.prototype.canDeactivate = function (component) {
        if (component.editForm.dirty) {
            return confirm('Are you sure you want to leave? Any unsaved chages will be lost.');
        }
        return true;
    };
    return PreventUnsaveGuard;
}());
PreventUnsaveGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], PreventUnsaveGuard);

//# sourceMappingURL=prevent-unsave.guard.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\" *ngIf=\"!isRegisterMode\">\n  <h1>Find your match</h1>\n  <p class=\"lead\">Come on in to view your match.. All you need to do is sign up!</p>\n  <div class=\"text-center\">\n    <button class=\"btn btn-primary btn-lg\" (click)=\"toggleRegisterMode()\">Register</button>\n    <button class=\"btn btn-info btn-lg\">Learn more</button>\n  </div>\n</div>\n\n<div class=\"container\" *ngIf=\"isRegisterMode\">\n  <div class=\"col-md-4 col-md-offset-4\">\n    <app-register (cancelRegister)=\"cancelRegister($event)\"></app-register>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.isRegisterMode = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.toggleRegisterMode = function () {
        this.isRegisterMode = !this.isRegisterMode;
    };
    HomeComponent.prototype.cancelRegister = function (registerMode) {
        this.isRegisterMode = registerMode;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/lists/lists.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lists/lists.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"btn-group\">\n      <label class=\"btn btn-primary\" [(ngModel)]=\"likesParam\" (click)=\"loadUsers()\" btnRadio=\"likers\" tabindex=\"0\" role=\"button\">Member who like me</label>\n      <label class=\"btn btn-primary\" [(ngModel)]=\"likesParam\" (click)=\"loadUsers()\" btnRadio=\"likees\" tabindex=\"0\" role=\"button\">Member who I like</label>\n    </div>\n  </div>\n\n  <h2>{{ likesParam === 'likers' ? 'Members who like me' : 'Members who I\\'ve liked' }}</h2>\n\n  <div class=\"row\">\n    <div class=\"col-lg-2 col-md-3 col-sm-6\" *ngFor=\"let u of users\">\n      <app-member-card [user]=\"u\"></app-member-card>\n    </div>\n  </div>\n\n  <div class=\"text-center\">\n    <pagination [boundaryLinks]=\"true\" [totalItems]=\"pagination.totalItems\" [itemsPerPage]=\"pagination.itemsPerPage\" [(ngModel)]=\"pagination.currentPage\"\n      (pageChanged)=\"pageChanged($event)\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\n    </pagination>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/lists/lists.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alertify_service__ = __webpack_require__("../../../../../src/app/services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListsComponent = (function () {
    function ListsComponent(authService, userService, alertify, route) {
        this.authService = authService;
        this.userService = userService;
        this.alertify = alertify;
        this.route = route;
        this.users = [];
    }
    ListsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            console.log(data);
            _this.users = data['users'].result;
            _this.pagination = data['users'].pagination;
        });
        this.likesParam = 'likers';
    };
    ListsComponent.prototype.loadUsers = function () {
        var _this = this;
        this.userService
            .getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, null, this.likesParam)
            .subscribe(function (res) {
            _this.users = res.result;
            _this.pagination = res.pagination;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ListsComponent.prototype.pageChanged = function (event) {
        this.pagination.currentPage = event.page;
        this.loadUsers();
    };
    return ListsComponent;
}());
ListsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-lists',
        template: __webpack_require__("../../../../../src/app/lists/lists.component.html"),
        styles: [__webpack_require__("../../../../../src/app/lists/lists.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_alertify_service__["a" /* AlertifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_alertify_service__["a" /* AlertifyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], ListsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=lists.component.js.map

/***/ }),

/***/ "../../../../../src/app/members/member-card/member-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel-body {\n  padding: 5px;\n}\n\n.panel-body img {\n  width: 100%;\n}\n\nimg {\n  transform: scale(1, 1);\n  transition-duration: 500ms;\n  transition-timing-function: ease-out;\n}\n\n.panel:hover img {\n  transform: scale(1.1, 1.1);\n  transition-duration: 500ms;\n  transition-timing-function: ease-out;\n}\n\n.panel-image {\n  overflow: hidden;\n  position: relative;\n}\n\n.member-icons {\n  position: absolute;\n  bottom: -30%;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n  opacity: 0;\n}\n\n.panel:hover .member-icons {\n  bottom: 0;\n  opacity: 1;\n}\n\n.animate {\n  transition: all 0.3s ease-in-out;\n}\n\n@media (min-width: 1200px) {\n  .btn {\n    padding: 6px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/members/member-card/member-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-body\">\n    <div class=\"panel-image\">\n      <img src=\"{{ user.photoUrl ? user.photoUrl : '../../../assets/user.png' }}\" alt=\"{{ user.knownAs}}\" />\n      <ul class=\"list-inline member-icons text-center animate\">\n        <li>\n          <a class=\"btn btn-primary\" [routerLink]=\"['/members', user.id]\">\n            <i class=\"fa fa-user\"></i>\n          </a>\n        </li>\n        <li>\n          <button (click)=\"sendLike(user.id)\" class=\"btn btn-primary\">\n            <i class=\"fa fa-heart\"></i>\n          </button>\n        </li>\n        <li>\n          <button class=\"btn btn-primary\" [routerLink]=\"['/members', user.id]\" [queryParams]=\"{tab: '3'}\">\n            <i class=\"fa fa-envelope\"></i>\n          </button>\n        </li>\n      </ul>\n    </div>\n    <div class=\"text-center\">\n      <h5>\n        <i class=\"fa fa-user\"></i> {{ user.knownAs }}, {{ user.age }}</h5>\n    </div>\n    <div class=\"text-center\">\n      <h5>\n        <small>{{ user.city }}</small>\n      </h5>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/members/member-card/member-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_alertify_service__ = __webpack_require__("../../../../../src/app/services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_User__ = __webpack_require__("../../../../../src/app/models/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_User___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__models_User__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MemberCardComponent = (function () {
    function MemberCardComponent(authService, userService, alertify) {
        this.authService = authService;
        this.userService = userService;
        this.alertify = alertify;
    }
    MemberCardComponent.prototype.ngOnInit = function () { };
    MemberCardComponent.prototype.sendLike = function (id) {
        var _this = this;
        this.userService.sendLike(this.authService.decodedToken.nameid, id)
            .subscribe(function (data) {
            _this.alertify.success('You have like ' + _this.user.knownAs);
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    return MemberCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__models_User__["User"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__models_User__["User"]) === "function" && _a || Object)
], MemberCardComponent.prototype, "user", void 0);
MemberCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'app-member-card',
        template: __webpack_require__("../../../../../src/app/members/member-card/member-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/members/member-card/member-card.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__services_alertify_service__["a" /* AlertifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_alertify_service__["a" /* AlertifyService */]) === "function" && _d || Object])
], MemberCardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=member-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/members/member-detail/member-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profile-image {\n  margin: 25px;\n  width: 85%;\n  height: 85%;\n}\n\n.panel-body {\n  padding: 0 25px;\n}\n\n.panel-footer {\n  padding: 10px 15px;\n  background-color: #fff;\n  border-top: none;\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px;\n}\n\n.btn-group-justified > .btn-group .btn {\n  width: 95%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/members/member-detail/member-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <h1>{{ user.knownAs }}'s Profile</h1>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <div class=\"panel panel-default\">\n        <img alt=\"{{ user.knownAs }}\" class=\"profile-image thumbnail\" src=\"{{ user.photoUrl ? user.photoUrl : '../../../assets/user.png' }}\" />\n        <div class=\"panel-body\">\n          <div>\n            <strong>Location:</strong>\n            <p>{{ user.city }}, {{ user.country }}</p>\n          </div>\n          <div>\n            <strong>Age:</strong>\n            <p>{{ user.age }}</p>\n          </div>\n          <div>\n            <strong>Last Active:</strong>\n            <p>{{ user.lastActive | timeAgo }}</p>\n          </div>\n          <div>\n            <strong>Member Since:</strong>\n            <p>{{ user.created | date: 'mediumDate' }}</p>\n          </div>\n        </div>\n        <div class=\"panel-footer\">\n          <div class=\"btn-group-justified\">\n            <div class=\"btn-group\">\n              <button class=\"btn btn-primary\">Like</button>\n            </div>\n            <div class=\"btn-group\">\n              <button class=\"btn btn-success\" (click)=\"selectTab(3)\">Message</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-8\">\n      <tabset class=\"member-tabset\" #memberTabs>\n        <tab heading=\"About {{ user.knownAs }}\">\n          <h4>Description:</h4>\n          <p>{{ user.introduction }}</p>\n          <h4>Looking For:</h4>\n          <p>{{ user.lookingFor }}</p>\n        </tab>\n        <tab heading=\"Interests\">\n          <h4>Description:</h4>\n          <p>{{ user.interests }}</p>\n        </tab>\n        <tab heading=\"Photos\">\n          <h4>Photos:</h4>\n          <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\n        </tab>\n        <tab heading=\"Messages\">\n          <app-member-messages [userId]=\"user.id\"></app-member-messages>\n        </tab>\n      </tabset>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/members/member-detail/member-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_alertify_service__ = __webpack_require__("../../../../../src/app/services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_gallery__ = __webpack_require__("../../../../ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_gallery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_gallery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MemberDetailComponent = (function () {
    function MemberDetailComponent(userService, alertify, route) {
        this.userService = userService;
        this.alertify = alertify;
        this.route = route;
        this.galleryImages = [];
    }
    MemberDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.loadUser();
        this.route.data.subscribe(function (data) {
            _this.user = data['user'];
            _this.galleryImages = _this.getImages();
        });
        this.route.queryParams.subscribe(function (params) {
            _this.memberTabs.tabs[params['tab'] || 0].active = true;
        });
        this.galleryOptions = [
            {
                width: '500px',
                height: '500px',
                imagePercent: 100,
                thumbnailsColumns: 4,
                preview: false,
                imageAnimation: __WEBPACK_IMPORTED_MODULE_4_ngx_gallery__["NgxGalleryAnimation"].Slide
            }
        ];
    };
    MemberDetailComponent.prototype.getImages = function () {
        console.log(this.user);
        var imageUrls = [];
        for (var index = 0; index < this.user.photos.length; index++) {
            var photo = this.user.photos[index];
            imageUrls.push({
                small: photo.url,
                medium: photo.url,
                big: photo.url,
                description: photo.description
            });
        }
        return imageUrls;
    };
    MemberDetailComponent.prototype.selectTab = function (tabId) {
        this.memberTabs.tabs[tabId].active = true;
    };
    return MemberDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('memberTabs'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["f" /* TabsetComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["f" /* TabsetComponent */]) === "function" && _a || Object)
], MemberDetailComponent.prototype, "memberTabs", void 0);
MemberDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-member-detail',
        template: __webpack_require__("../../../../../src/app/members/member-detail/member-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/members/member-detail/member-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_alertify_service__["a" /* AlertifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_alertify_service__["a" /* AlertifyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], MemberDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=member-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/members/member-edit/member-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profile-image {\n  margin: 25px;\n  width: 85%;\n  height: 85%;\n}\n\n.panel-body {\n  padding: 0 25px;\n}\n\n.panel-footer {\n  padding: 10px 15px;\n  background-color: #fff;\n  border-top: none;\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/members/member-edit/member-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <h1>Your Profile</h1>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"alert alert-info\" role=\"alert\" [hidden]=\"!editForm.dirty\">\n        <p>\n          <strong>Information:</strong> You have made chages.</p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <div class=\"panel panel-default\">\n        <img alt=\"{{ user.knownAs }}\" class=\"profile-image thumbnail\" src=\"{{ photoUrl }}\" />\n        <div class=\"panel-body\">\n          <div>\n            <strong>Location:</strong>\n            <p>{{ user.city }}, {{ user.country }}</p>\n          </div>\n          <div>\n            <strong>Age:</strong>\n            <p>{{ user.age }}</p>\n          </div>\n          <div>\n            <strong>Last Active:</strong>\n            <p>{{ user.lastActive | timeAgo }}</p>\n          </div>\n          <div>\n            <strong>Member Since:</strong>\n            <p>{{ user.created | date: 'mediumDate' }}</p>\n          </div>\n        </div>\n        <div class=\"panel-footer\">\n          <div class=\"btn-group-justified\">\n            <div class=\"btn-group\">\n              <button [disabled]=\"!editForm.dirty\" form=\"editForm\" class=\"btn btn-block btn-success\">Save</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-8\">\n      <tabset>\n        <tab heading=\"Edit Profile\">\n          <form #editForm=\"ngForm\" id=\"editForm\" (ngSubmit)=\"updateUser()\">\n            <h4>Description:</h4>\n            <textarea name=\"introduction\" rows=\"6\" class=\"form-control\" [(ngModel)]=\"user.introduction\"></textarea>\n            <h4>Looking For:</h4>\n            <textarea name=\"lookingFor\" rows=\"6\" class=\"form-control\" [(ngModel)]=\"user.lookingFor\"></textarea>\n            <h4>Interests:</h4>\n            <textarea name=\"interest\" rows=\"6\" class=\"form-control\" [(ngModel)]=\"user.interests\"></textarea>\n            <h4>Location:</h4>\n            <div class=\"form-inline\">\n              <label for=\"city\">City:</label>\n              <input type=\"text\" name=\"city\" [(ngModel)]=\"user.city\" class=\"form-control\" />\n              <label for=\"country\">Country:</label>\n              <input type=\"text\" name=\"country\" [(ngModel)]=\"user.country\" class=\"form-control\" />\n            </div>\n          </form>\n        </tab>\n        <tab heading=\"Edit Photos\">\n          <app-photo-editor [photos]=\"user.photos\" (memberPhotoChanged)=\"memberPhoto($event)\"></app-photo-editor>\n        </tab>\n      </tabset>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/members/member-edit/member-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_alertify_service__ = __webpack_require__("../../../../../src/app/services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MemberEditComponent = (function () {
    function MemberEditComponent(route, alertify, userService, authService) {
        this.route = route;
        this.alertify = alertify;
        this.userService = userService;
        this.authService = authService;
    }
    MemberEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.user = data['user'];
        });
        this.authService.currentPhotoUrl.subscribe(function (photoUrl) { return _this.photoUrl = photoUrl; });
    };
    MemberEditComponent.prototype.updateUser = function () {
        var _this = this;
        this.userService
            .updateUser(this.user, this.authService.decodedToken.nameid)
            .subscribe(function (res) {
            _this.alertify.success('Profile updated successfully');
            _this.editForm.reset(_this.user);
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MemberEditComponent.prototype.memberPhotoChanged = function (photoUrl) {
        this.user.photoUrl = photoUrl;
    };
    return MemberEditComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])('editForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* NgForm */]) === "function" && _a || Object)
], MemberEditComponent.prototype, "editForm", void 0);
MemberEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-member-edit',
        template: __webpack_require__("../../../../../src/app/members/member-edit/member-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/members/member-edit/member-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_alertify_service__["a" /* AlertifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_alertify_service__["a" /* AlertifyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]) === "function" && _e || Object])
], MemberEditComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=member-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/members/member-list/member-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/members/member-list/member-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"text-center\">\n      <h2>Your matches - {{pagination.totalItems}} found</h2>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <form class=\"form-inline\" novalidate #form=\"ngForm\" (ngSubmit)=\"loadUsers()\">\n      <div class=\"form-group\">\n        <label for=\"minAge\">Age From</label>\n        <input type=\"number\" class=\"form-control\" style=\"width: 70px\" id=\"minAge\" name=\"minAge\" [(ngModel)]=\"userParams.minAge\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"maxAge\">Age To</label>\n        <input type=\"number\" class=\"form-control\" style=\"width: 70px\" id=\"maxAge\" name=\"maxAge\" [(ngModel)]=\"userParams.maxAge\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"gender\">Show: </label>\n        <select class=\"form-control\" style=\"width: 130px\" id=\"gender\" name=\"gender\" [(ngModel)]=\"userParams.gender\">\n          <option *ngFor=\"let gender of genderList\" [value]=\"gender.value\">\n            {{ gender.display }}\n          </option>\n        </select>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\" style=\"margin-left:10px\">Apply Filters</button>\n      <button (click)=\"resetFilter()\" type=\"button\" class=\"btn btn-info\" style=\"margin-left:10px\">Reset Filter</button>\n\n      <div class=\"pull-right\">\n        <label style=\"margin-right: 10px\">Order By: </label>\n        <div class=\"btn-group\">\n          <button type=\"button\" [(ngModel)]=\"userParams.orderBy\" (click)=\"loadUsers()\" name=\"orderBy\" class=\"btn btn-primary\" btnRadio=\"lastActive\">Last Active</button>\n          <button type=\"button\" [(ngModel)]=\"userParams.orderBy\" (click)=\"loadUsers()\" name=\"orderBy\" class=\"btn btn-primary\" btnRadio=\"created\">Newest Members</button>\n        </div>\n      </div>\n    </form>\n  </div>\n\n  <br>\n\n  <div class=\"row\">\n    <!-- <div class=\"col-lg-2 col-md-3 col-sm-6\">\n      <p *ngFor=\"let user of users\">{{ user.knownAs }}</p>\n    </div> -->\n    <div class=\"col-lg-2 col-md-3 col-sm-6\" *ngFor=\"let u of users\">\n      <app-member-card [user]=\"u\"></app-member-card>\n    </div>\n  </div>\n\n  <div class=\"text-center\">\n    <pagination [boundaryLinks]=\"true\" [totalItems]=\"pagination.totalItems\" [itemsPerPage]=\"pagination.itemsPerPage\" [(ngModel)]=\"pagination.currentPage\"\n      (pageChanged)=\"pageChanged($event)\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\n    </pagination>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/members/member-list/member-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alertify_service__ = __webpack_require__("../../../../../src/app/services/alertify.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MemberListComponent = (function () {
    function MemberListComponent(userService, alertify, route) {
        this.userService = userService;
        this.alertify = alertify;
        this.route = route;
        this.users = [];
        this.genderList = [
            { value: 'male', display: 'Male' },
            { value: 'female', display: 'Female' }
        ];
        this.user = JSON.parse(localStorage.getItem('user'));
        this.userParams = {};
    }
    MemberListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.users = data['users'].result;
            _this.pagination = data['users'].pagination;
        });
        this.userParams.gender = this.user.gender === 'female' ? 'male' : 'female';
        this.userParams.minAge = 18;
        this.userParams.maxAge = 99;
        this.userParams.orderBy = 'lastActive';
    };
    MemberListComponent.prototype.loadUsers = function () {
        var _this = this;
        this.userService.getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, this.userParams)
            .subscribe(function (res) {
            _this.users = res.result;
            _this.pagination = res.pagination;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MemberListComponent.prototype.resetFilter = function () {
        this.userParams.gender = this.user.gender === 'female' ? 'male' : 'female';
        this.userParams.minAge = 18;
        this.userParams.maxAge = 99;
        this.userParams.orderBy = 'lastActive';
        this.loadUsers();
    };
    MemberListComponent.prototype.pageChanged = function (event) {
        this.pagination.currentPage = event.page;
        this.loadUsers();
    };
    return MemberListComponent;
}());
MemberListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-member-list',
        template: __webpack_require__("../../../../../src/app/members/member-list/member-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/members/member-list/member-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_alertify_service__["a" /* AlertifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alertify_service__["a" /* AlertifyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], MemberListComponent);

var _a, _b, _c;
//# sourceMappingURL=member-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/members/member-messages/member-messages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel-primary {\n  border: none;\n}\n\n.chat {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.chat li {\n  margin-bottom: 10px;\n  padding-bottom: 10px;\n  border-bottom: 1px dotted #b3a9a9;\n}\n\n.img-circle {\n  width: 50px;\n  height: 50px;\n}\n\n.panel-body {\n    overflow-y: scroll;\n    height: 400px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/members/member-messages/member-messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n  <div class=\"panel-body\">\n    <div *ngIf=\"messages?.length === 0\">\n      <p>No message yet</p>\n    </div>\n\n    <ul class=\"chat\">\n      <li *ngFor=\"let message of messages\">\n        <div *ngIf=\"message.senderId === userId\">\n          <span class=\"chat-img pull-left\">\n            <img src=\"{{ message.senderPhotoUrl }}\" class=\"img-circle\" />\n          </span>\n          <div class=\"chat-body\">\n            <div class=\"header\">\n              <strong class=\"primary-font\">{{ message.senderKnownAs }}</strong>\n              <small class=\"text-muted pull-right\">\n                <span class=\"fa fa-clock-o\"> {{ message.messageSent | timeAgo }}</span>\n              </small>\n            </div>\n            <p>{{ message.content }}</p>\n          </div>\n        </div>\n\n        <div *ngIf=\"message.senderId != userId\">\n          <span class=\"chat-img pull-right\">\n            <img src=\"{{ message.senderPhotoUrl }}\" class=\"img-circle\" />\n          </span>\n          <div class=\"chat-body\">\n            <div class=\"header\">\n              <small class=\"text-muted\">\n                <span class=\"fa fa-clock-o\"> {{ message.messageSent | timeAgo }}</span>\n                <span *ngIf=\"!message.isRead\" class=\"text-muted text-danger\">(Unread)</span>\n                <span *ngIf=\"message.isRead\" class=\"text-muted text-success\">(Read {{ message.dateRead | timeAgo }})</span>\n              </small>\n              <strong class=\"primary-font pull-right\">{{ message.senderKnownAs }}</strong>\n            </div>\n            <p>{{ message.content }}</p>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"panel-footer\">\n    <form #messageForm=\"ngForm\" (ngSubmit)=\"messageForm.valid && sendMessage()\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control input-sm\" placeholder=\"Send a private message\" required [(ngModel)]=\"newMessage.content\" name=\"content\" />\n        <span class=\"input-group-btn\">\n          <button class=\"btn btn-primary btn-sm\" [disabled]=\"!messageForm.valid\">Send</button>\n        </span>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/members/member-messages/member-messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alertify_service__ = __webpack_require__("../../../../../src/app/services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberMessagesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MemberMessagesComponent = (function () {
    function MemberMessagesComponent(userService, authService, alertify) {
        this.userService = userService;
        this.authService = authService;
        this.alertify = alertify;
        this.messages = [];
        this.newMessage = {};
    }
    MemberMessagesComponent.prototype.ngOnInit = function () {
        this.loadMessages();
    };
    MemberMessagesComponent.prototype.loadMessages = function () {
        var _this = this;
        var currentUserId = +this.authService.decodedToken.nameid;
        this.userService.getMessageThread(this.authService.decodedToken.nameid, this.userId)
            .do(function (messages) {
            __WEBPACK_IMPORTED_MODULE_4_underscore__["each"](messages, function (msg) {
                if (msg.isRead === false && msg.recipientId === currentUserId) {
                    _this.userService.markAsRead(currentUserId, msg.id);
                }
            });
        })
            .subscribe(function (messages) {
            _this.messages = messages;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MemberMessagesComponent.prototype.sendMessage = function () {
        var _this = this;
        this.newMessage.recipientId = this.userId;
        this.userService.sendMessage(this.authService.decodedToken.nameid, this.newMessage)
            .subscribe(function (message) {
            _this.messages.unshift(message);
            _this.newMessage.content = '';
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    return MemberMessagesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], MemberMessagesComponent.prototype, "userId", void 0);
MemberMessagesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-member-messages',
        template: __webpack_require__("../../../../../src/app/members/member-messages/member-messages.component.html"),
        styles: [__webpack_require__("../../../../../src/app/members/member-messages/member-messages.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_alertify_service__["a" /* AlertifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alertify_service__["a" /* AlertifyService */]) === "function" && _c || Object])
], MemberMessagesComponent);

var _a, _b, _c;
//# sourceMappingURL=member-messages.component.js.map

/***/ }),

/***/ "../../../../../src/app/members/photo-editor/photo-editor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img.thumbnail {\n  height: 100px;\n  width: 100px;\n  margin-bottom: 2px;\n  margin-top: 8px;\n}\n\n.nv-file-over {\n  border: dotted 3px red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/members/photo-editor/photo-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-2\" *ngFor=\"let photo of photos\">\n    <img src=\"{{ photo.url }}\" alt=\"\" class=\"thumbnail\">\n    <div class=\"text-center\">\n      <button type=\"button\" class=\"btn btn-xs btn-default\" [disabled]=\"photo.isMain\" (click)=\"setMainPhoto(photo)\" [ngClass]=\"photo.isMain ? 'btn-success active': 'btn-default'\">Main</button>\n      <button type=\"button\" class=\"btn btn-xs btn-danger\" (click)=\"deletePhoto(photo)\" [disabled]=\"photo.isMain\">\n        <i class=\"fa fa-trash-o\"></i>\n      </button>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n\n  <div class=\"col-md-3\">\n\n    <h3>Add Photo</h3>\n\n    <div ng2FileDrop [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\" (fileOver)=\"fileOverBase($event)\" [uploader]=\"uploader\"\n      class=\"well my-drop-zone\">\n      Drop Photo Here\n    </div>\n\n    Multiple\n    <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple />\n    <br/> Single\n    <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n  </div>\n\n  <div class=\"col-md-9\" style=\"margin-bottom: 40px\" *ngIf=\"uploader?.queue?.length\">\n\n    <h3>Upload queue</h3>\n    <p>Queue length: {{ uploader?.queue?.length }}</p>\n\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th width=\"50%\">Name</th>\n          <th>Size</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of uploader.queue\">\n          <td>\n            <strong>{{ item?.file?.name }}</strong>\n          </td>\n          <td *ngIf=\"uploader.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n        </tr>\n      </tbody>\n    </table>\n\n    <div>\n      <div>\n        Queue progress:\n        <div class=\"progress\" style=\"\">\n          <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n        </div>\n      </div>\n      <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n        <span class=\"glyphicon glyphicon-upload\"></span> Upload\n      </button>\n      <button type=\"button\" class=\"btn btn-warning btn-s\" (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n        <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\n      </button>\n      <button type=\"button\" class=\"btn btn-danger btn-s\" (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n        <span class=\"glyphicon glyphicon-trash\"></span> Remove\n      </button>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/members/photo-editor/photo-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_alertify_service__ = __webpack_require__("../../../../../src/app/services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_underscore__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoEditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PhotoEditorComponent = (function () {
    function PhotoEditorComponent(authService, userService, alertify) {
        this.authService = authService;
        this.userService = userService;
        this.alertify = alertify;
        this.photos = [];
        this.memberPhotoChanged = new __WEBPACK_IMPORTED_MODULE_4__angular_core__["EventEmitter"]();
        this.uploader = new __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__["FileUploader"]({});
        this.hasBaseDropZoneOver = false;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl;
    }
    PhotoEditorComponent.prototype.ngOnInit = function () {
        this.initializeUploader();
    };
    PhotoEditorComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    PhotoEditorComponent.prototype.initializeUploader = function () {
        var _this = this;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__["FileUploader"]({
            url: this.baseUrl +
                'users/' +
                this.authService.decodedToken.nameid +
                '/photos',
            authToken: 'Bearer ' + localStorage.getItem('token'),
            isHTML5: true,
            allowedFileType: ['image'],
            removeAfterUpload: true,
            autoUpload: false,
            maxFileSize: 10 * 1024 * 1024
        });
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            if (response) {
                var res = JSON.parse(response);
                var photo = {
                    id: res.id,
                    url: res.url,
                    dateAdded: res.dateAdded,
                    description: res.description,
                    isMain: res.isMain
                };
                _this.photos.push(photo);
                if (photo.isMain) {
                    _this.authService.changeMemberPhoto(photo.url);
                    _this.authService.currentUser.photoUrl = photo.url;
                    localStorage.setItem('user', JSON.stringify(_this.authService.currentUser));
                }
            }
        };
    };
    PhotoEditorComponent.prototype.setMainPhoto = function (photo) {
        var _this = this;
        this.userService
            .setMainPhoto(photo.id, this.authService.decodedToken.nameid)
            .subscribe(function () {
            var currentMainPhoto = __WEBPACK_IMPORTED_MODULE_6_underscore__["findWhere"](_this.photos, { isMain: true });
            currentMainPhoto.isMain = false;
            photo.isMain = true;
            // this.memberPhotoChanged.emit(photo.url);
            _this.authService.changeMemberPhoto(photo.url);
            _this.authService.currentUser.photoUrl = photo.url;
            localStorage.setItem('user', JSON.stringify(_this.authService.currentUser));
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    PhotoEditorComponent.prototype.deletePhoto = function (photo) {
        var _this = this;
        this.alertify.confirm('Are you sure you want to delete this photo?', function () {
            _this.userService
                .deletePhoto(photo.id, _this.authService.decodedToken.nameid)
                .subscribe(function () {
                _this.photos.splice(__WEBPACK_IMPORTED_MODULE_6_underscore__["findIndex"](_this.photos, { id: photo.id }), 1);
                _this.alertify.success('Photo has been deleted');
            }, function (error) {
                _this.alertify.error('Failed to delete photo');
            });
        });
    };
    return PhotoEditorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
    __metadata("design:type", Array)
], PhotoEditorComponent.prototype, "photos", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Output"])(),
    __metadata("design:type", Object)
], PhotoEditorComponent.prototype, "memberPhotoChanged", void 0);
PhotoEditorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'app-photo-editor',
        template: __webpack_require__("../../../../../src/app/members/photo-editor/photo-editor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/members/photo-editor/photo-editor.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_alertify_service__["a" /* AlertifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_alertify_service__["a" /* AlertifyService */]) === "function" && _c || Object])
], PhotoEditorComponent);

var _a, _b, _c;
//# sourceMappingURL=photo-editor.component.js.map

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img-circle {\n    height: 50px;\n    width: 50px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"btn-group\">\n      <button class=\"btn btn-primary\" [(ngModel)]=\"messageContainer\" btnRadio=\"unread\" (click)=\"loadMessages()\">\n        <i class=\"fa fa-envelope\"></i> Unread\n      </button>\n      <button class=\"btn btn-primary\" [(ngModel)]=\"messageContainer\" btnRadio=\"inbox\" (click)=\"loadMessages()\">\n        <i class=\"fa fa-envelope-open\"></i> Inbox\n      </button>\n      <button class=\"btn btn-primary\" [(ngModel)]=\"messageContainer\" btnRadio=\"outbox\" (click)=\"loadMessages()\">\n        <i class=\"fa fa-paper-plane\"></i> Outbox\n      </button>\n    </div>\n  </div>\n\n  <br />\n\n  <div class=\"row\" *ngIf=\"messages.length === 0\">\n    <h3>No messages</h3>\n  </div>\n\n  <div class=\"row\" *ngIf=\"messages.length > 0\">\n    <table class=\"table table-hover\">\n      <tr>\n        <th>Message</th>\n        <th>From / To</th>\n        <th>Sent / Received</th>\n        <th>Message</th>\n      </tr>\n      <tr *ngFor=\"let msg of messages\" [routerLink]=\"['/members', messageContainer == 'outbox' ? msg.recipientId: msg.senderId]\" [queryParams]=\"{tab: '3'}\">\n        <td>{{ msg.content }}</td>\n        <td>\n          <div *ngIf=\"messageContainer != 'outbox'\">\n            <img src=\"{{ msg.senderPhotoUrl}}\" class=\"img-circle\" />\n            <strong>{{ msg.senderKnownAs }}</strong>\n          </div>\n          <div *ngIf=\"messageContainer == 'outbox'\">\n            <img src=\"{{ msg.recipientPhotoUrl}}\" class=\"img-circle\" />\n            <strong>{{ msg.recipientKnownAs }}</strong>\n          </div>\n        </td>\n        <td>{{ msg.messageSent | timeAgo }}</td>\n        <td>\n          <button class=\"btn btn-danger\" (click)=\"$event.stopPropagation()\" (click)=\"deleteMessage(msg.id)\">Delete</button>\n        </td>\n      </tr>\n    </table>\n\n    <div class=\"text-center\">\n      <pagination [boundaryLinks]=\"true\" [totalItems]=\"pagination.totalItems\" [itemsPerPage]=\"pagination.itemsPerPage\" [(ngModel)]=\"pagination.currentPage\"\n        (pageChanged)=\"pageChanged($event)\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\n      </pagination>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_alertify_service__ = __webpack_require__("../../../../../src/app/services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_underscore__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MessagesComponent = (function () {
    function MessagesComponent(authService, route, userService, alertify) {
        this.authService = authService;
        this.route = route;
        this.userService = userService;
        this.alertify = alertify;
        this.messages = [];
        this.messageContainer = 'unread';
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            console.log(data);
            _this.messages = data['messages'].result;
            _this.pagination = data['messages'].pagination;
        });
    };
    MessagesComponent.prototype.loadMessages = function () {
        var _this = this;
        this.userService
            .getMessages(this.authService.decodedToken.nameid, this.pagination.currentPage, this.pagination.itemsPerPage, this.messageContainer)
            .subscribe(function (res) {
            _this.messages = res.result;
            _this.pagination = res.pagination;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MessagesComponent.prototype.pageChanged = function (event) {
        this.pagination.currentPage = event.page;
        this.loadMessages();
    };
    MessagesComponent.prototype.deleteMessage = function (id) {
        var _this = this;
        this.alertify.confirm('Are you sure to delete this message?', function () {
            _this.userService.deleteMessage(id, _this.authService.decodedToken.nameid)
                .subscribe(function () {
                _this.messages.splice(__WEBPACK_IMPORTED_MODULE_5_underscore__["findIndex"](_this.messages, { id: id }), 1);
                _this.alertify.success('Message has been deleted');
            }, function (err) {
                _this.alertify.error('Failed to delete this message');
            });
        });
    };
    return MessagesComponent;
}());
MessagesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-messages',
        template: __webpack_require__("../../../../../src/app/messages/messages.component.html"),
        styles: [__webpack_require__("../../../../../src/app/messages/messages.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__services_alertify_service__["a" /* AlertifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_alertify_service__["a" /* AlertifyService */]) === "function" && _d || Object])
], MessagesComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=messages.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/User.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=User.js.map

/***/ }),

/***/ "../../../../../src/app/models/pagination.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginatedResult; });
var PaginatedResult = (function () {
    function PaginatedResult() {
    }
    return PaginatedResult;
}());

//# sourceMappingURL=pagination.js.map

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropdown-menu li,\n.dropdown-toggle {\n  cursor: pointer;\n}\n\nimg {\n  max-height: 40px;\n  border: 2px solid white;\n  display: inline;\n  border-radius: 10px;\n  margin: 4px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\"\n        aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" [routerLink]=\"['/home']\">Dating App</a>\n    </div>\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav\" *ngIf=\"loggedIn()\">\n        <li routerLinkActive=\"active\">\n          <a [routerLink]=\"['/members']\">Matches</a>\n        </li>\n        <li routerLinkActive=\"active\">\n          <a [routerLink]=\"['/lists']\">Lists</a>\n        </li>\n        <li routerLinkActive=\"active\">\n          <a [routerLink]=\"['/messages']\">Messages</a>\n        </li>\n      </ul>\n\n      <form *ngIf=\"!loggedIn()\" #loginForm=\"ngForm\" class=\"navbar-form navbar-right\" (ngSubmit)=\"login()\">\n        <div class=\"form-group\">\n          <input type=\"text\" placeholder=\"Email\" class=\"form-control\" [(ngModel)]=\"model.username\" required name=\"username\">\n        </div>\n        <div class=\"form-group\">\n          <input type=\"password\" placeholder=\"Password\" class=\"form-control\" [(ngModel)]=\"model.password\" required name=\"password\">\n        </div>\n        <button type=\"submit\" [disabled]=\"!loginForm.valid\" class=\"btn btn-success\">Sign in</button>\n      </form>\n\n      <ul *ngIf=\"loggedIn()\" class=\"nav navbar-nav navbar-right\">\n        <li>\n          <img src=\"{{ photoUrl }}\" />\n        </li>\n        <li class=\"dropdown\" dropdown>\n          <a (click)=\"false\" class=\"dropdown-toggle\" dropdownToggle>Welcome {{ authService.decodedToken?.unique_name | titlecase }}\n            <span class=\"caret\"></span>\n          </a>\n          <ul class=\"dropdown-menu\" *dropdownMenu>\n            <li>\n              <a [routerLink]=\"['/members/edit']\">\n                <i class=\"fa fa-user\"></i> Edit Profile</a>\n            </li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li>\n              <a (click)=\"logout()\">\n                <i class=\"fa fa-sign-out\"></i> Logout</a>\n            </li>\n          </ul>\n        </li>\n      </ul>\n\n    </div>\n    <!--/.navbar-collapse -->\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_alertify_service__ = __webpack_require__("../../../../../src/app/services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavComponent = (function () {
    function NavComponent(authService, alertifyService, router) {
        this.authService = authService;
        this.alertifyService = alertifyService;
        this.router = router;
        this.model = {};
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.currentPhotoUrl.subscribe(function (photoUrl) { return _this.photoUrl = photoUrl; });
    };
    NavComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.model).subscribe(function (data) {
            _this.alertifyService.success('Login succesfully');
            _this.model = {};
        }, function (err) {
            _this.alertifyService.error(err);
        }, function () {
            _this.router.navigate(['/members']);
        });
    };
    NavComponent.prototype.logout = function () {
        this.authService.userToken = null;
        this.authService.currentUser = null;
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.alertifyService.message('logged out');
        this.router.navigate(['/home']);
    };
    NavComponent.prototype.loggedIn = function () {
        return this.authService.loggedIn();
    };
    return NavComponent;
}());
NavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-nav',
        template: __webpack_require__("../../../../../src/app/nav/nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/nav/nav.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_alertify_service__["a" /* AlertifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_alertify_service__["a" /* AlertifyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], NavComponent);

var _a, _b, _c;
//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n  <h2 class=\"text-center text-primary\">Sign Up</h2>\n\n  <hr>\n\n  <div class=\"form-group\">\n    <label class=\"control-label\" style=\"margin-right: 10px\">Gender:</label>\n    <label class=\"radio-inline\">\n      <input type=\"radio\" name=\"gender\" value=\"male\" formControlName=\"gender\">Male</label>\n    <label class=\"radio-inline\">\n      <input type=\"radio\" name=\"gender\" value=\"female\" formControlName=\"gender\">Female</label>\n  </div>\n\n  <div class=\"form-group\" [ngClass]=\"{ 'has-error': registerForm.get('username').errors && registerForm.get('username').touched }\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"Username\" name=\"username\" required formControlName=\"username\" />\n    <span class=\"help-block\" *ngIf=\"registerForm.get('username').hasError('required') && registerForm.get('username').touched\">\n      Password is required\n    </span>\n  </div>\n\n  <div class=\"form-group\" [ngClass]=\"{ 'has-error': registerForm.get('knownAs').errors && registerForm.get('knownAs').touched }\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"Known As\" name=\"knownAs\" required formControlName=\"knownAs\" />\n    <span class=\"help-block\" *ngIf=\"registerForm.get('knownAs').hasError('required') && registerForm.get('knownAs').touched\">\n      Know As is required\n    </span>\n  </div>\n\n  <div class=\"form-group\" [ngClass]=\"{ 'has-error': registerForm.get('dateOfBirth').errors && registerForm.get('dateOfBirth').touched }\">\n    <!-- <input type=\"date\" class=\"form-control\" placeholder=\"dateOfBirth\" name=\"dateOfBirth\" required formControlName=\"dateOfBirth\"\n    /> -->\n    <input type=\"text\" formControlName=\"dateOfBirth\" placeholder=\"Date of Birth\" class=\"form-control\" bsDatepicker [bsConfig]=\"bsConfig\">\n    <span class=\"help-block\" *ngIf=\"registerForm.get('dateOfBirth').hasError('required') && registerForm.get('dateOfBirth').touched\">\n      Date of Birth is required\n    </span>\n  </div>\n\n  <div class=\"form-group\" [ngClass]=\"{ 'has-error': registerForm.get('city').errors && registerForm.get('city').touched }\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"City\" name=\"city\" required formControlName=\"city\" />\n    <span class=\"help-block\" *ngIf=\"registerForm.get('city').hasError('required') && registerForm.get('city').touched\">\n      City is required\n    </span>\n  </div>\n\n  <div class=\"form-group\" [ngClass]=\"{ 'has-error': registerForm.get('country').errors && registerForm.get('country').touched }\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"Country\" name=\"country\" required formControlName=\"country\" />\n    <span class=\"help-block\" *ngIf=\"registerForm.get('country').hasError('required') && registerForm.get('country').touched\">\n      Country is required\n    </span>\n  </div>\n\n\n\n  <div class=\"form-group\" [ngClass]=\"{ 'has-error': registerForm.get('password').errors && registerForm.get('password').touched }\">\n    <input type=\"password\" class=\"form-control\" placeholder=\"Password\" name=\"password\" required formControlName=\"password\" />\n    <span class=\"help-block\" *ngIf=\"registerForm.get('password').hasError('required') && registerForm.get('password').touched\">\n      Password is required\n    </span>\n    <span class=\"help-block\" *ngIf=\"registerForm.get('password').hasError('minlength') && registerForm.get('password').touched\">\n      Password must be at least 4 characters\n    </span>\n    <span class=\"help-block\" *ngIf=\"registerForm.get('password').hasError('maxlength') && registerForm.get('password').touched\">\n      Password cannot exceed 8 characters\n    </span>\n  </div>\n\n  <div class=\"form-group\" [ngClass]=\"{ 'has-error': (registerForm.get('confirmPassword').errors || registerForm.errors)\n    && registerForm.get('confirmPassword').touched }\">\n    <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" name=\"confirmPassword\" required formControlName=\"confirmPassword\"\n    />\n    <span class=\"help-block\" *ngIf=\"registerForm.get('confirmPassword').hasError('required') && registerForm.get('confirmPassword').touched\">\n      Confirm password is required\n    </span>\n    <span class=\"help-block\" *ngIf=\"registerForm.get('confirmPassword').touched && registerForm.hasError('mismatch')\">\n      Confirm password must match password\n    </span>\n  </div>\n\n  <div class=\"form-group text-center\">\n    <button class=\"btn btn-success\" [disabled]=\"!registerForm.valid\" type=\"submit\">Register</button>\n    <button class=\"btn btn-default\" type=\"button\" (click)=\"cancel()\">Cancel</button>\n  </div>\n</form>\n\n<p>Form value: {{ registerForm.errors | json }}</p>\n<p>Form value: {{ registerForm.get('password').errors | json }}</p>\n<p>Form value: {{ registerForm.get('confirmPassword').touched | json }}</p>\n<p>Form status: {{ registerForm.status | json }}</p>\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alertify_service__ = __webpack_require__("../../../../../src/app/services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(authService, alertifyService, fb, router) {
        this.authService = authService;
        this.alertifyService = alertifyService;
        this.fb = fb;
        this.router = router;
        this.cancelRegister = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.bsConfig = {
            containerClass: 'theme-red'
        };
        this.createRegisterForm();
        // this.registerForm = new FormGroup(
        //   {
        //     username: new FormControl('', Validators.required),
        //     password: new FormControl('', [
        //       Validators.required,
        //       Validators.minLength(4),
        //       Validators.maxLength(8)
        //     ]),
        //     confirmPassword: new FormControl('', Validators.required)
        //   },
        //   this.passwordMatchValidator
        // );
    };
    RegisterComponent.prototype.createRegisterForm = function () {
        this.registerForm = this.fb.group({
            gender: ['male'],
            username: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required],
            knownAs: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required],
            dateOfBirth: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required],
            city: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required],
            country: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required],
            password: [
                '',
                [
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].minLength(4),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].maxLength(8)
                ]
            ],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required]
        }, { validator: this.passwordMatchValidator });
    };
    RegisterComponent.prototype.passwordMatchValidator = function (g) {
        return g.get('password').value === g.get('confirmPassword').value
            ? null
            : { mismatch: true };
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.registerForm.valid) {
            this.user = Object.assign({}, this.registerForm.value);
            this.authService.register(this.user).subscribe(function () {
                _this.alertifyService.success('Register succesfully');
            }, function (err) {
                _this.alertifyService.error(err);
            }, function () {
                _this.authService.login(_this.user).subscribe(function () {
                    _this.router.navigate(['/members']);
                });
            });
        }
    };
    RegisterComponent.prototype.cancel = function () {
        this.cancelRegister.emit(false);
    };
    return RegisterComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
    __metadata("design:type", Object)
], RegisterComponent.prototype, "cancelRegister", void 0);
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_alertify_service__["a" /* AlertifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_alertify_service__["a" /* AlertifyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/resolvers/lists.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_alertify_service__ = __webpack_require__("../../../../../src/app/services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListsResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ListsResolver = (function () {
    function ListsResolver(userService, alertify, router) {
        this.userService = userService;
        this.alertify = alertify;
        this.router = router;
        this.pageSize = 5;
        this.pageNumber = 1;
        this.likesParam = 'likers';
    }
    ListsResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getUsers(this.pageNumber, this.pageSize, null, this.likesParam).catch(function (err) {
            _this.alertify.error(err);
            _this.router.navigate(['/home']);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of(null);
        });
    };
    return ListsResolver;
}());
ListsResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_alertify_service__["a" /* AlertifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_alertify_service__["a" /* AlertifyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ListsResolver);

var _a, _b, _c;
//# sourceMappingURL=lists.resolver.js.map

/***/ }),

/***/ "../../../../../src/app/resolvers/member-detail.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_alertify_service__ = __webpack_require__("../../../../../src/app/services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberDetailResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MemberDetailResolver = (function () {
    function MemberDetailResolver(userService, alertify, router) {
        this.userService = userService;
        this.alertify = alertify;
        this.router = router;
    }
    MemberDetailResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getUser(route.params['id']).catch(function (err) {
            _this.alertify.error(err);
            _this.router.navigate(['/members']);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of(null);
        });
    };
    return MemberDetailResolver;
}());
MemberDetailResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_alertify_service__["a" /* AlertifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_alertify_service__["a" /* AlertifyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], MemberDetailResolver);

var _a, _b, _c;
//# sourceMappingURL=member-detail.resolver.js.map

/***/ }),

/***/ "../../../../../src/app/resolvers/member-edit.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alertify_service__ = __webpack_require__("../../../../../src/app/services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberEditResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MemberEditResolver = (function () {
    function MemberEditResolver(authService, userService, alertify, router) {
        this.authService = authService;
        this.userService = userService;
        this.alertify = alertify;
        this.router = router;
    }
    MemberEditResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getUser(this.authService.decodedToken.nameid).catch(function (err) {
            _this.alertify.error(err);
            _this.router.navigate(['/members']);
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].of(null);
        });
    };
    return MemberEditResolver;
}());
MemberEditResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_alertify_service__["a" /* AlertifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_alertify_service__["a" /* AlertifyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], MemberEditResolver);

var _a, _b, _c, _d;
//# sourceMappingURL=member-edit.resolver.js.map

/***/ }),

/***/ "../../../../../src/app/resolvers/member-list.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_alertify_service__ = __webpack_require__("../../../../../src/app/services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberListResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MemberListResolver = (function () {
    function MemberListResolver(userService, alertify, router) {
        this.userService = userService;
        this.alertify = alertify;
        this.router = router;
        this.pageSize = 5;
        this.pageNumber = 1;
    }
    MemberListResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getUsers(this.pageNumber, this.pageSize).catch(function (err) {
            _this.alertify.error(err);
            _this.router.navigate(['/home']);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of(null);
        });
    };
    return MemberListResolver;
}());
MemberListResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_alertify_service__["a" /* AlertifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_alertify_service__["a" /* AlertifyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], MemberListResolver);

var _a, _b, _c;
//# sourceMappingURL=member-list.resolver.js.map

/***/ }),

/***/ "../../../../../src/app/resolvers/message.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_alertify_service__ = __webpack_require__("../../../../../src/app/services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MessagesResolver = (function () {
    function MessagesResolver(authService, userService, alertify, router) {
        this.authService = authService;
        this.userService = userService;
        this.alertify = alertify;
        this.router = router;
        this.pageSize = 5;
        this.pageNumber = 1;
        this.messageContainer = 'unread';
    }
    MessagesResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService
            .getMessages(this.authService.decodedToken.nameid, this.pageNumber, this.pageSize, this.messageContainer)
            .catch(function (err) {
            _this.alertify.error(err);
            _this.router.navigate(['/home']);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of(null);
        });
    };
    return MessagesResolver;
}());
MessagesResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_alertify_service__["a" /* AlertifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_alertify_service__["a" /* AlertifyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], MessagesResolver);

var _a, _b, _c, _d;
//# sourceMappingURL=message.resolver.js.map

/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resolvers_message_resolver__ = __webpack_require__("../../../../../src/app/resolvers/message.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resolvers_lists_resolver__ = __webpack_require__("../../../../../src/app/resolvers/lists.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__members_member_edit_member_edit_component__ = __webpack_require__("../../../../../src/app/members/member-edit/member-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resolvers_member_detail_resolver__ = __webpack_require__("../../../../../src/app/resolvers/member-detail.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lists_lists_component__ = __webpack_require__("../../../../../src/app/lists/lists.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__members_member_list_member_list_component__ = __webpack_require__("../../../../../src/app/members/member-list/member-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__messages_messages_component__ = __webpack_require__("../../../../../src/app/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__members_member_detail_member_detail_component__ = __webpack_require__("../../../../../src/app/members/member-detail/member-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__resolvers_member_list_resolver__ = __webpack_require__("../../../../../src/app/resolvers/member-list.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__resolvers_member_edit_resolver__ = __webpack_require__("../../../../../src/app/resolvers/member-edit.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guards_prevent_unsave_guard__ = __webpack_require__("../../../../../src/app/guards/prevent-unsave.guard.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });













var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */] },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]],
        children: [
            { path: 'members', component: __WEBPACK_IMPORTED_MODULE_5__members_member_list_member_list_component__["a" /* MemberListComponent */], resolve: { users: __WEBPACK_IMPORTED_MODULE_10__resolvers_member_list_resolver__["a" /* MemberListResolver */] } },
            { path: 'members/edit', component: __WEBPACK_IMPORTED_MODULE_2__members_member_edit_member_edit_component__["a" /* MemberEditComponent */], resolve: { user: __WEBPACK_IMPORTED_MODULE_11__resolvers_member_edit_resolver__["a" /* MemberEditResolver */] }, canDeactivate: [__WEBPACK_IMPORTED_MODULE_12__guards_prevent_unsave_guard__["a" /* PreventUnsaveGuard */]] },
            { path: 'members/:id', component: __WEBPACK_IMPORTED_MODULE_9__members_member_detail_member_detail_component__["a" /* MemberDetailComponent */], resolve: { user: __WEBPACK_IMPORTED_MODULE_3__resolvers_member_detail_resolver__["a" /* MemberDetailResolver */] } },
            { path: 'messages', component: __WEBPACK_IMPORTED_MODULE_7__messages_messages_component__["a" /* MessagesComponent */], resolve: { messages: __WEBPACK_IMPORTED_MODULE_0__resolvers_message_resolver__["a" /* MessagesResolver */] } },
            { path: 'lists', component: __WEBPACK_IMPORTED_MODULE_4__lists_lists_component__["a" /* ListsComponent */], resolve: { users: __WEBPACK_IMPORTED_MODULE_1__resolvers_lists_resolver__["a" /* ListsResolver */] } }
        ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ "../../../../../src/app/services/alertify.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertifyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertifyService = (function () {
    function AlertifyService() {
    }
    AlertifyService.prototype.confirm = function (message, okCallbak) {
        alertify.confirm(message, function (e) {
            if (e) {
                okCallbak();
            }
            else {
            }
        });
    };
    AlertifyService.prototype.success = function (message) {
        alertify.success(message);
    };
    AlertifyService.prototype.error = function (message) {
        alertify.error(message);
    };
    AlertifyService.prototype.warning = function (message) {
        alertify.warning(message);
    };
    AlertifyService.prototype.message = function (message) {
        alertify.message(message);
    };
    return AlertifyService;
}());
AlertifyService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], AlertifyService);

//# sourceMappingURL=alertify.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth0_angular_jwt__ = __webpack_require__("../../../../@auth0/angular-jwt/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = (function () {
    function AuthService(http, jwtHelperService) {
        this.http = http;
        this.jwtHelperService = jwtHelperService;
        this.baseUrl = 'http://localhost:5000/api/auth/';
        // jwtHelper: JwtHelper = new JwtHelper();
        this.photoUrl = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"]('../../assets/user.png');
        this.currentPhotoUrl = this.photoUrl.asObservable();
    }
    AuthService.prototype.changeMemberPhoto = function (photoUrl) {
        this.photoUrl.next(photoUrl);
    };
    AuthService.prototype.login = function (model) {
        var _this = this;
        return this.http
            .post(this.baseUrl + 'login', model, {
            headers: new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["f" /* HttpHeaders */]().set('Content-Type', 'application/json')
        })
            .map(function (user) {
            if (user) {
                localStorage.setItem('token', user.tokenString);
                localStorage.setItem('user', JSON.stringify(user.user));
                _this.currentUser = user.user;
                _this.decodedToken = _this.jwtHelperService.decodeToken(user.tokenString);
                _this.userToken = user.tokenString;
                if (_this.currentUser.photoUrl) {
                    _this.changeMemberPhoto(_this.currentUser.photoUrl);
                }
            }
        });
    };
    AuthService.prototype.register = function (user) {
        return this.http
            .post(this.baseUrl + 'register', user, {
            headers: new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["f" /* HttpHeaders */]().set('Content-Type', 'application/json')
        });
    };
    AuthService.prototype.loggedIn = function () {
        var token = this.jwtHelperService.tokenGetter();
        if (!token) {
            return false;
        }
        return !this.jwtHelperService.isTokenExpired(token);
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["e" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["e" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__auth0_angular_jwt__["b" /* JwtHelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__auth0_angular_jwt__["b" /* JwtHelperService */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/error.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* unused harmony export ErrorInterceptor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorInterceptorProvider; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ErrorInterceptor = (function () {
    function ErrorInterceptor() {
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req).catch(function (error) {
            if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpErrorResponse */]) {
                var applicationError = error.headers.get('Application-Error');
                if (applicationError) {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(applicationError);
                }
                var serverError = error.error;
                var modelStateError = '';
                if (serverError && typeof serverError === 'object') {
                    for (var key in serverError) {
                        if (serverError[key]) {
                            modelStateError += serverError[key] + '\n';
                        }
                    }
                }
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(modelStateError || serverError || 'Server Error');
            }
        });
    };
    return ErrorInterceptor;
}());
ErrorInterceptor = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], ErrorInterceptor);

var ErrorInterceptorProvider = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HTTP_INTERCEPTORS */],
    useClass: ErrorInterceptor,
    multi: true
};
//# sourceMappingURL=error.interceptor.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_pagination__ = __webpack_require__("../../../../../src/app/models/pagination.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = (function () {
    function UserService(authHttp) {
        this.authHttp = authHttp;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl;
    }
    UserService.prototype.getUsers = function (page, itemsPerPage, userParams, likesParam) {
        var paginationResult = new __WEBPACK_IMPORTED_MODULE_1__models_pagination__["a" /* PaginatedResult */]();
        var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
        if (page != null && itemsPerPage != null) {
            params = params.append('pageNumber', page.toString());
            params = params.append('pageSize', itemsPerPage.toString());
        }
        if (likesParam === 'likers') {
            params = params.append('likers', 'true');
        }
        if (likesParam === 'likees') {
            params = params.append('likees', 'true');
        }
        if (userParams != null) {
            params = params.append('minAge', userParams.minAge);
            params = params.append('maxAge', userParams.maxAge);
            params = params.append('gender', userParams.gender);
            params = params.append('orderBy', userParams.orderBy);
        }
        return this.authHttp
            .get(this.baseUrl + 'users', { observe: 'response', params: params })
            .map(function (res) {
            paginationResult.result = res.body;
            if (res.headers.get('Pagination') != null) {
                paginationResult.pagination = JSON.parse(res.headers.get('Pagination'));
            }
            return paginationResult;
        });
    };
    UserService.prototype.getUser = function (id) {
        return this.authHttp
            .get(this.baseUrl + 'users/' + id);
    };
    UserService.prototype.updateUser = function (user, id) {
        return this.authHttp
            .put(this.baseUrl + 'users/' + id, user);
    };
    UserService.prototype.setMainPhoto = function (id, userId) {
        return this.authHttp
            .post(this.baseUrl + 'users/' + userId + '/photos/' + id + '/setMain', {});
    };
    UserService.prototype.sendLike = function (id, recipientId) {
        return this.authHttp
            .post(this.baseUrl + 'users/' + id + '/like/' + recipientId, {});
    };
    UserService.prototype.deletePhoto = function (id, userId) {
        return this.authHttp
            .delete(this.baseUrl + 'users/' + userId + '/photos/' + id);
    };
    UserService.prototype.getMessages = function (id, page, itemsPerPage, messageContainer) {
        var paginationResult = new __WEBPACK_IMPORTED_MODULE_1__models_pagination__["a" /* PaginatedResult */]();
        var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
        params = params.append('messageContainer', messageContainer);
        if (page != null && itemsPerPage != null) {
            params = params.append('pageNumber', page.toString());
            params = params.append('pageSize', itemsPerPage.toString());
        }
        return this.authHttp
            .get(this.baseUrl + 'users/' + id + '/messages', { observe: 'response', params: params })
            .map(function (res) {
            paginationResult.result = res.body;
            if (res.headers.get('Pagination') != null) {
                paginationResult.pagination = JSON.parse(res.headers.get('Pagination'));
            }
            return paginationResult;
        });
    };
    UserService.prototype.getMessageThread = function (id, recipientId) {
        return this.authHttp
            .get(this.baseUrl + 'users/' + id + '/messages/thread/' + recipientId);
    };
    UserService.prototype.sendMessage = function (id, message) {
        return this.authHttp
            .post(this.baseUrl + 'users/' + id + '/messages', message);
    };
    UserService.prototype.deleteMessage = function (id, userId) {
        return this.authHttp
            .post(this.baseUrl + 'users/' + userId + '/messages/' + id, {})
            .map(function (res) { });
    };
    UserService.prototype.markAsRead = function (userId, messageId) {
        return this.authHttp.post(this.baseUrl + 'users/' + userId + '/messages/' + messageId + '/read', {}).subscribe();
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpClient */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

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
    production: false,
    apiUrl: 'http://localhost:5000/api/'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map