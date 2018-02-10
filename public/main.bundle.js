webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drawing_panel_drawing_panel_component__ = __webpack_require__("../../../../../src/app/drawing-panel/drawing-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__type_floor_area_to_cover_type_floor_area_to_cover_component__ = __webpack_require__("../../../../../src/app/type-floor-area-to-cover/type-floor-area-to-cover.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__grouparea_grouparea_component__ = __webpack_require__("../../../../../src/app/grouparea/grouparea.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sockettest_sockettest_component__ = __webpack_require__("../../../../../src/app/sockettest/sockettest.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    // { path: 'drawing', component: DrawingPanelComponent },
    { path: 'drawing/:type', component: __WEBPACK_IMPORTED_MODULE_2__drawing_panel_drawing_panel_component__["a" /* DrawingPanelComponent */] },
    { path: 'drawing/:type/:otherTitle', component: __WEBPACK_IMPORTED_MODULE_2__drawing_panel_drawing_panel_component__["a" /* DrawingPanelComponent */] },
    { path: 'areatocover', component: __WEBPACK_IMPORTED_MODULE_3__type_floor_area_to_cover_type_floor_area_to_cover_component__["a" /* TypeFloorAreaToCoverComponent */] },
    { path: 'grouping', component: __WEBPACK_IMPORTED_MODULE_4__grouparea_grouparea_component__["a" /* GroupareaComponent */] },
    { path: 'sockettest', component: __WEBPACK_IMPORTED_MODULE_5__sockettest_sockettest_component__["a" /* SockettestComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__type_floor_area_to_cover_type_floor_area_to_cover_component__["a" /* TypeFloorAreaToCoverComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__type_floor_area_to_cover_type_floor_area_to_cover_component__ = __webpack_require__("../../../../../src/app/type-floor-area-to-cover/type-floor-area-to-cover.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__area_to_cover_modal_area_to_cover_modal_component__ = __webpack_require__("../../../../../src/app/area-to-cover-modal/area-to-cover-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modal_component_modal_component_component__ = __webpack_require__("../../../../../src/app/modal-component/modal-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modal_modal_component__ = __webpack_require__("../../../../../src/app/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__area_area_component__ = __webpack_require__("../../../../../src/app/area/area.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__drawing_panel_drawing_panel_component__ = __webpack_require__("../../../../../src/app/drawing-panel/drawing-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__drawing_tool_button_drawing_tool_button_component__ = __webpack_require__("../../../../../src/app/drawing-tool-button/drawing-tool-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__build_living_room_modal_build_living_room_modal_component__ = __webpack_require__("../../../../../src/app/build-living-room-modal/build-living-room-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__wall_length_modal_wall_length_modal_component__ = __webpack_require__("../../../../../src/app/wall-length-modal/wall-length-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__panel_panel_component__ = __webpack_require__("../../../../../src/app/panel/panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__living_room_living_room_component__ = __webpack_require__("../../../../../src/app/living-room/living-room.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__wall_wall_component__ = __webpack_require__("../../../../../src/app/wall/wall.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__done_modal_done_modal_component__ = __webpack_require__("../../../../../src/app/done-modal/done-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__cancel_modal_cancel_modal_component__ = __webpack_require__("../../../../../src/app/cancel-modal/cancel-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__toolbuttons_backbutton_backbutton_component__ = __webpack_require__("../../../../../src/app/toolbuttons/backbutton/backbutton.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__toolbuttons_undobutton_undobutton_component__ = __webpack_require__("../../../../../src/app/toolbuttons/undobutton/undobutton.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__toolbuttons_redobutton_redobutton_component__ = __webpack_require__("../../../../../src/app/toolbuttons/redobutton/redobutton.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__toolbuttons_shapebutton_shapebutton_component__ = __webpack_require__("../../../../../src/app/toolbuttons/shapebutton/shapebutton.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__toolbuttons_strecherbutton_strecherbutton_component__ = __webpack_require__("../../../../../src/app/toolbuttons/strecherbutton/strecherbutton.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__toolbuttons_doorbutton_doorbutton_component__ = __webpack_require__("../../../../../src/app/toolbuttons/doorbutton/doorbutton.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__toolbuttons_connercutterbutton_connercutterbutton_component__ = __webpack_require__("../../../../../src/app/toolbuttons/connercutterbutton/connercutterbutton.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__toolbuttons_stepdownbutton_stepdownbutton_component__ = __webpack_require__("../../../../../src/app/toolbuttons/stepdownbutton/stepdownbutton.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__toolbuttons_closetbutton_closetbutton_component__ = __webpack_require__("../../../../../src/app/toolbuttons/closetbutton/closetbutton.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__toolbuttons_islandbutton_islandbutton_component__ = __webpack_require__("../../../../../src/app/toolbuttons/islandbutton/islandbutton.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__toolbuttons_halfwallbutton_halfwallbutton_component__ = __webpack_require__("../../../../../src/app/toolbuttons/halfwallbutton/halfwallbutton.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__toolbuttons_lockbutton_lockbutton_component__ = __webpack_require__("../../../../../src/app/toolbuttons/lockbutton/lockbutton.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__toolbuttons_deletebutton_deletebutton_component__ = __webpack_require__("../../../../../src/app/toolbuttons/deletebutton/deletebutton.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__toolbuttons_notebutton_notebutton_component__ = __webpack_require__("../../../../../src/app/toolbuttons/notebutton/notebutton.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__toolbuttons_photobutton_photobutton_component__ = __webpack_require__("../../../../../src/app/toolbuttons/photobutton/photobutton.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_lockbutton_service__ = __webpack_require__("../../../../../src/app/services/lockbutton.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_strecherbutton_service__ = __webpack_require__("../../../../../src/app/services/strecherbutton.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_doorbutton_service__ = __webpack_require__("../../../../../src/app/services/doorbutton.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__services_areas_service__ = __webpack_require__("../../../../../src/app/services/areas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__services_currentroom_service__ = __webpack_require__("../../../../../src/app/services/currentroom.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__services_currentgroup_service__ = __webpack_require__("../../../../../src/app/services/currentgroup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__preview_preview_component__ = __webpack_require__("../../../../../src/app/preview/preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__staircasepanel_staircasepanel_component__ = __webpack_require__("../../../../../src/app/staircasepanel/staircasepanel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__staircaseitem_staircaseitem_component__ = __webpack_require__("../../../../../src/app/staircaseitem/staircaseitem.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__doorlengthchange_doorlengthchange_component__ = __webpack_require__("../../../../../src/app/doorlengthchange/doorlengthchange.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__grouparea_grouparea_component__ = __webpack_require__("../../../../../src/app/grouparea/grouparea.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__lengthchangedialog_lengthchangedialog_component__ = __webpack_require__("../../../../../src/app/lengthchangedialog/lengthchangedialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__module_socket_io_module__ = __webpack_require__("../../../../../src/app/module/socket-io.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__sockettest_sockettest_component__ = __webpack_require__("../../../../../src/app/sockettest/sockettest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__services_socket_service__ = __webpack_require__("../../../../../src/app/services/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__devtool_devtool_component__ = __webpack_require__("../../../../../src/app/devtool/devtool.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__services_customer_service__ = __webpack_require__("../../../../../src/app/services/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__groupstaircaseinfomodal_groupstaircaseinfomodal_component__ = __webpack_require__("../../../../../src/app/groupstaircaseinfomodal/groupstaircaseinfomodal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__upload_upload_component__ = __webpack_require__("../../../../../src/app/upload/upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_55_ng2_file_upload__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























































var config = { url: 'http://192.168.0.63:3000', options: {} };
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__type_floor_area_to_cover_type_floor_area_to_cover_component__["a" /* TypeFloorAreaToCoverComponent */],
                __WEBPACK_IMPORTED_MODULE_6__area_to_cover_modal_area_to_cover_modal_component__["a" /* AreaToCoverModalComponent */],
                __WEBPACK_IMPORTED_MODULE_7__modal_component_modal_component_component__["a" /* ModalComponentComponent */],
                __WEBPACK_IMPORTED_MODULE_8__modal_modal_component__["a" /* ModalComponent */],
                __WEBPACK_IMPORTED_MODULE_10__area_area_component__["a" /* AreaComponent */],
                __WEBPACK_IMPORTED_MODULE_11__drawing_panel_drawing_panel_component__["a" /* DrawingPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_12__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_13__drawing_tool_button_drawing_tool_button_component__["a" /* DrawingToolButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_14__build_living_room_modal_build_living_room_modal_component__["a" /* BuildLivingRoomModalComponent */],
                __WEBPACK_IMPORTED_MODULE_15__wall_length_modal_wall_length_modal_component__["a" /* WallLengthModalComponent */],
                __WEBPACK_IMPORTED_MODULE_16__panel_panel_component__["a" /* PanelComponent */],
                __WEBPACK_IMPORTED_MODULE_17__living_room_living_room_component__["a" /* LivingRoomComponent */],
                __WEBPACK_IMPORTED_MODULE_18__wall_wall_component__["a" /* WallComponent */],
                __WEBPACK_IMPORTED_MODULE_19__done_modal_done_modal_component__["a" /* DoneModalComponent */],
                __WEBPACK_IMPORTED_MODULE_20__cancel_modal_cancel_modal_component__["a" /* CancelModalComponent */],
                __WEBPACK_IMPORTED_MODULE_21__toolbuttons_backbutton_backbutton_component__["a" /* BackbuttonComponent */],
                __WEBPACK_IMPORTED_MODULE_22__toolbuttons_undobutton_undobutton_component__["a" /* UndobuttonComponent */],
                __WEBPACK_IMPORTED_MODULE_23__toolbuttons_redobutton_redobutton_component__["a" /* RedobuttonComponent */],
                __WEBPACK_IMPORTED_MODULE_24__toolbuttons_shapebutton_shapebutton_component__["a" /* ShapebuttonComponent */],
                __WEBPACK_IMPORTED_MODULE_25__toolbuttons_strecherbutton_strecherbutton_component__["a" /* StrecherbuttonComponent */],
                __WEBPACK_IMPORTED_MODULE_26__toolbuttons_doorbutton_doorbutton_component__["a" /* DoorbuttonComponent */],
                __WEBPACK_IMPORTED_MODULE_27__toolbuttons_connercutterbutton_connercutterbutton_component__["a" /* ConnercutterbuttonComponent */],
                __WEBPACK_IMPORTED_MODULE_28__toolbuttons_stepdownbutton_stepdownbutton_component__["a" /* StepdownbuttonComponent */],
                __WEBPACK_IMPORTED_MODULE_29__toolbuttons_closetbutton_closetbutton_component__["a" /* ClosetbuttonComponent */],
                __WEBPACK_IMPORTED_MODULE_30__toolbuttons_islandbutton_islandbutton_component__["a" /* IslandbuttonComponent */],
                __WEBPACK_IMPORTED_MODULE_31__toolbuttons_halfwallbutton_halfwallbutton_component__["a" /* HalfwallbuttonComponent */],
                __WEBPACK_IMPORTED_MODULE_32__toolbuttons_lockbutton_lockbutton_component__["a" /* LockbuttonComponent */],
                __WEBPACK_IMPORTED_MODULE_33__toolbuttons_deletebutton_deletebutton_component__["a" /* DeletebuttonComponent */],
                __WEBPACK_IMPORTED_MODULE_34__toolbuttons_notebutton_notebutton_component__["a" /* NotebuttonComponent */],
                __WEBPACK_IMPORTED_MODULE_35__toolbuttons_photobutton_photobutton_component__["a" /* PhotobuttonComponent */],
                __WEBPACK_IMPORTED_MODULE_42__preview_preview_component__["a" /* PreviewComponent */],
                __WEBPACK_IMPORTED_MODULE_43__staircasepanel_staircasepanel_component__["a" /* StaircasepanelComponent */],
                __WEBPACK_IMPORTED_MODULE_44__staircaseitem_staircaseitem_component__["a" /* StaircaseitemComponent */],
                __WEBPACK_IMPORTED_MODULE_45__doorlengthchange_doorlengthchange_component__["a" /* DoorlengthchangeComponent */],
                __WEBPACK_IMPORTED_MODULE_46__grouparea_grouparea_component__["a" /* GroupareaComponent */],
                __WEBPACK_IMPORTED_MODULE_47__lengthchangedialog_lengthchangedialog_component__["a" /* LengthchangedialogComponent */],
                __WEBPACK_IMPORTED_MODULE_49__sockettest_sockettest_component__["a" /* SockettestComponent */],
                __WEBPACK_IMPORTED_MODULE_51__devtool_devtool_component__["a" /* DevtoolComponent */],
                __WEBPACK_IMPORTED_MODULE_53__groupstaircaseinfomodal_groupstaircaseinfomodal_component__["a" /* GroupstaircaseinfomodalComponent */],
                __WEBPACK_IMPORTED_MODULE_54__upload_upload_component__["a" /* UploadComponent */],
                __WEBPACK_IMPORTED_MODULE_55_ng2_file_upload__["FileSelectDirective"]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_48__module_socket_io_module__["b" /* SocketIoModule */].forRoot(config)
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__services_index__["a" /* ModalService */],
                __WEBPACK_IMPORTED_MODULE_36__services_lockbutton_service__["a" /* LockbuttonService */],
                __WEBPACK_IMPORTED_MODULE_37__services_strecherbutton_service__["a" /* StrecherbuttonService */],
                __WEBPACK_IMPORTED_MODULE_38__services_doorbutton_service__["a" /* DoorbuttonService */],
                __WEBPACK_IMPORTED_MODULE_39__services_areas_service__["a" /* AreasService */],
                __WEBPACK_IMPORTED_MODULE_40__services_currentroom_service__["a" /* CurrentroomService */],
                __WEBPACK_IMPORTED_MODULE_41__services_currentgroup_service__["a" /* CurrentgroupService */],
                __WEBPACK_IMPORTED_MODULE_50__services_socket_service__["a" /* SocketService */],
                __WEBPACK_IMPORTED_MODULE_52__services_customer_service__["a" /* CustomerService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/area-to-cover-modal/area-to-cover-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<modal id=\"custom-modal-{{area.areaId}}\">\r\n    <div class=\"modal-custom\">\r\n        <div class=\"modal-custom-body\">\r\n            <div class=\"area-to-cover-modal\"> \r\n                <h5>{{areaTitle}}</h5>\r\n                \r\n                <app-preview #preview [area]='area'></app-preview>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-1\"></div>\r\n                    <div class=\"col-md-2\">\r\n                        <div class=\"checkbox\">\r\n                            <label>\r\n                                <input type=\"checkbox\" [(ngModel)]='isLIV'> LIV</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <div class=\"checkbox\">\r\n                            <label>\r\n                                <input type=\"checkbox\" [(ngModel)]='isKIT'> KIT</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <div class=\"checkbox\">\r\n                            <label>\r\n                                <input type=\"checkbox\" [(ngModel)]='isFR'> FR</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <div class=\"checkbox\">\r\n                            <label>\r\n                                <input type=\"checkbox\" [(ngModel)]='isLAU'> LAU</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <div class=\"checkbox\">\r\n                            <label>\r\n                                <input type=\"checkbox\" [(ngModel)]='isDIN'> DIN</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-1\"></div>\r\n                    <div class=\"col-md-2\">\r\n                        <div class=\"checkbox\">\r\n                            <label>\r\n                                <input type=\"checkbox\" [(ngModel)]='isFOY'> FOY</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <div class=\"checkbox\">\r\n                            <label>\r\n                                <input type=\"checkbox\" [(ngModel)]='isHALL'> HALL</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <div class=\"checkbox\">\r\n                            <label>\r\n                                <input type=\"checkbox\" [(ngModel)]='isBASE'> BASE</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <div class=\"checkbox\">\r\n                            <label>\r\n                                <input type=\"checkbox\" [(ngModel)]='isBATH'> BATH</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <div class=\"checkbox\">\r\n                            <label>\r\n                                <input type=\"checkbox\" [(ngModel)]='isSTEPS'> STEPS</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-1\"></div>\r\n                    <div class=\"col-md-2\">\r\n                        <div class=\"checkbox\">\r\n                            <label>\r\n                                <input type=\"checkbox\" [(ngModel)]='isMB'> MB</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <div class=\"checkbox\">\r\n                            <label>\r\n                                <input type=\"checkbox\" [(ngModel)]='isBR'> BR</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <div class=\"checkbox\">\r\n                            <label><input type=\"checkbox\" [(ngModel)]='isOthers'> Others</label> \r\n                            <textarea *ngIf='isOthers' [(ngModel)]='otherTitle' class=\"form-control\"></textarea>\r\n                            \r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <button (click)=\"closeModal();\" class=\"submit-btn\">Cancel</button>\r\n                    </div>\r\n                    \r\n                    <div class=\"col-md-2\">\r\n                        <button (click)=\"build();\" class=\"submit-btn\">Submit</button>\r\n                    </div>\r\n                </div>\r\n\r\n                              \r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-custom-background\"></div>\r\n</modal>"

/***/ }),

/***/ "../../../../../src/app/area-to-cover-modal/area-to-cover-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".area-to-cover-modal {\n  border: solid 1px #000000;\n  padding: 10px;\n  min-width: 600px; }\n\n.area-to-cover-modal .submit-btn {\n  background: #aaa;\n  color: white;\n  border: solid 1px #000;\n  padding: 2px 15px;\n  border-radius: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/area-to-cover-modal/area-to-cover-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaToCoverModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__module_area__ = __webpack_require__("../../../../../src/app/module/area.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_areas_service__ = __webpack_require__("../../../../../src/app/services/areas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_currentroom_service__ = __webpack_require__("../../../../../src/app/services/currentroom.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_currentgroup_service__ = __webpack_require__("../../../../../src/app/services/currentgroup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__preview_preview_component__ = __webpack_require__("../../../../../src/app/preview/preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__module_group__ = __webpack_require__("../../../../../src/app/module/group.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AreaToCoverModalComponent = (function () {
    function AreaToCoverModalComponent(modalService, router, _areasSevice, _currentRoomService, _currentGroupService) {
        this.modalService = modalService;
        this.router = router;
        this._areasSevice = _areasSevice;
        this._currentRoomService = _currentRoomService;
        this._currentGroupService = _currentGroupService;
        this.areaTitle = 'Area To Cover';
        this.title = 'Building Living Room';
        this.type = '';
        this.otherTitle = '';
        this.isLIV = false;
        this.isKIT = false;
        this.isFR = false;
        this.isLAU = false;
        this.isDIN = false;
        this.isFOY = false;
        this.isHALL = false;
        this.isBASE = false;
        this.isBATH = false;
        this.isSTEPS = false;
        this.isMB = false;
        this.isBR = false;
        this.isOthers = false;
    }
    AreaToCoverModalComponent.prototype.ngOnInit = function () {
    };
    AreaToCoverModalComponent.prototype.build = function () {
        this.closeModal();
        this._areasSevice.currentEditingAreaId = this.area.areaId;
        this.checkOptions();
        if (this.type === 'Group') {
            var group = new __WEBPACK_IMPORTED_MODULE_8__module_group__["a" /* Group */]();
            this.area.rooms.map(function (room) {
                if (room.isSelectedForGrouping) {
                    group.rooms.push(room);
                }
            });
            this.area.groups.push(group);
            this._currentGroupService.currentGroup = group;
            this.modalService.close('custom-modal-' + this.area.areaId);
            this.router.navigateByUrl('grouping');
        }
        else if (this.isOthers) {
            this._currentRoomService.currentRoom.roomType = this.type;
            this._currentRoomService.currentRoom.roomId = this._areasSevice.calcCurrentRoomId(this.type);
            this.router.navigateByUrl('/drawing/' + this.type + '/' + this.otherTitle);
        }
        else {
            this._currentRoomService.currentRoom.roomType = this.type;
            this._currentRoomService.currentRoom.roomId = this._areasSevice.calcCurrentRoomId(this.type);
            // this._currentRoomService.currentRoom.staircases.push(new Staircase());
            this.router.navigateByUrl('/drawing/' + this.type);
        }
    };
    AreaToCoverModalComponent.prototype.closeModal = function () {
        this.modalService.close('custom-modal-' + this.area.areaId);
    };
    AreaToCoverModalComponent.prototype.checkOptions = function () {
        var _this = this;
        this.type = '';
        if (this.isLIV) {
            this.type += 'LIV';
        }
        if (this.isKIT) {
            this.type += this.type === '' ? 'KIT' : '+KIT';
        }
        if (this.isFR) {
            this.type += this.type === '' ? 'FR' : '+FR';
        }
        if (this.isLAU) {
            this.type += this.type === '' ? 'LAU' : '+LAU';
        }
        if (this.isDIN) {
            this.type += this.type === '' ? 'DIN' : '+DIN';
        }
        if (this.isFOY) {
            this.type += this.type === '' ? 'FOY' : '+FOY';
        }
        if (this.isHALL) {
            this.type += this.type === '' ? 'HALL' : '+HALL';
        }
        if (this.isBASE) {
            this.type += this.type === '' ? 'BASE' : '+BASE';
        }
        if (this.isBATH) {
            this.type += this.type === '' ? 'BATH' : '+BATH';
        }
        if (this.isSTEPS) {
            this.type = 'STEPS';
        }
        if (this.isMB) {
            this.type += this.type === '' ? 'MB' : '+MB';
        }
        if (this.isBR) {
            this.type += this.type === '' ? 'BR' : '+BR';
        }
        if (this.isOthers) {
            this.type = 'Others';
        }
        this.area.rooms.map(function (room) {
            if (room.isSelectedForGrouping) {
                _this.type = 'Group';
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__module_area__["a" /* Area */])
    ], AreaToCoverModalComponent.prototype, "area", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('preview'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7__preview_preview_component__["a" /* PreviewComponent */])
    ], AreaToCoverModalComponent.prototype, "preview", void 0);
    AreaToCoverModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-area-to-cover-modal',
            template: __webpack_require__("../../../../../src/app/area-to-cover-modal/area-to-cover-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/area-to-cover-modal/area-to-cover-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_areas_service__["a" /* AreasService */],
            __WEBPACK_IMPORTED_MODULE_5__services_currentroom_service__["a" /* CurrentroomService */],
            __WEBPACK_IMPORTED_MODULE_6__services_currentgroup_service__["a" /* CurrentgroupService */]])
    ], AreaToCoverModalComponent);
    return AreaToCoverModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/area/area.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"area-panel\">\n  <hr class=\"area-sep-line\">\n\n  <div class=\"area-header\">\n    <h3 class=\"area-title\">{{area.areaTitle}}</h3>\n  </div>\n\n  <div class=\"area-content\">\n    <div class=\"area-content-top-bar\">\n      <span class=\"area-content-top-bar-title\">Areas to Cover</span>\n      <button class=\"area-edit-btn\" (click)=\"openModal('custom-modal-'+area.areaId)\">Edit</button>\n    </div>\n\n    <div class=\"area-content-body\">\n      <div class=\"are-content-cell\">\n        <div class=\"area-content-cell-top\">\n          <span>Product</span>\n          <select>\n            <option>Select Option</option>\n          </select>\n          <button class=\"product-select-btn\">Select</button>\n        </div>\n        <hr class=\"cell-middle-line\">\n        <div class=\"area-content-cell-bottom\">\n          <span>Measure</span>\n          <button class=\"measure-edit-btn\">Edit</button>\n        </div>\n      </div>\n\n      <div class=\"are-content-cell \">\n        <div class=\"area-content-cell-top\">\n          <span>Product</span>\n          <select>\n            <option>Select Option</option>\n          </select>\n          <button class=\"product-select-btn\">Select</button>\n        </div>\n        <hr class=\"cell-middle-line\">\n        <div class=\"area-content-cell-bottom\">\n          <span>Measure</span>\n          <button class=\"measure-edit-btn\">Edit</button>\n        </div>\n      </div>\n\n      <div class=\"are-content-cell non-border\">\n        <div class=\"area-content-cell-top\">\n          <span>Product</span>\n          <select>\n            <option>Select Option</option>\n          </select>\n          <button class=\"product-select-btn\">Select</button>\n        </div>\n        <hr class=\"cell-middle-line\">\n        <div class=\"area-content-cell-bottom\">\n          <span>Measure</span>\n          <button class=\"measure-edit-btn\">Edit</button>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"area-content-bottom-bar\">\n      <app-area-to-cover-modal #covermodal [area]='area'></app-area-to-cover-modal>\n      <button class=\"comp-btn\">Comp</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/area/area.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".area-panel {\n  margin: 15px 0; }\n\n.area-sep-line {\n  border: none;\n  border-top: 3px dotted #000;\n  color: #fff;\n  background-color: #fff;\n  height: 1px;\n  width: 100%; }\n\n.area-panel .area-header {\n  background: #ac2c23;\n  padding: 5px;\n  padding-left: 20px; }\n\n.area-panel .area-header .area-title {\n  color: white; }\n\n.area-panel .area-content {\n  padding: 20px 5px; }\n\n.area-panel .area-content .area-content-top-bar-title {\n  font-size: 20px;\n  font-weight: 700; }\n\n.area-panel .area-content .area-edit-btn {\n  float: right;\n  padding: 5px 20px;\n  border: solid 2px #000;\n  border-radius: 5px;\n  cursor: pointer;\n  background: #1c415b;\n  color: white; }\n\n.area-panel .area-content .area-edit-btn:hover {\n  background: #2c516b; }\n\n.area-panel .area-content .area-content-body {\n  width: 100%;\n  margin: 20px 0px;\n  border-top: solid 1px;\n  border-bottom: solid 1px;\n  padding: 1px; }\n\n.area-panel .area-content .area-content-body .are-content-cell {\n  width: 33%;\n  display: inline-block;\n  border-right: solid 1px; }\n\n.non-border {\n  border: 0 !important; }\n\n.area-panel .area-content .area-content-body .are-content-cell .cell-middle-line {\n  margin: 10px 0;\n  border-top: solid 1px;\n  width: calc(100% - 5px); }\n\n.area-panel .area-content .area-content-body .are-content-cell .area-content-cell-top {\n  width: 100%;\n  padding: 15px; }\n\n.area-panel .area-content .area-content-body .are-content-cell .area-content-cell-top .product-select-btn {\n  background: #aaa;\n  border: solid 1px black;\n  padding: 5px 15px;\n  float: right;\n  margin-right: 5px;\n  border-radius: 5px;\n  color: white;\n  cursor: pointer; }\n\n.area-panel .area-content .area-content-body .are-content-cell .area-content-cell-bottom {\n  margin: 20px 0;\n  padding: 5px 10px; }\n\n.area-panel .area-content .area-content-body .are-content-cell .area-content-cell-bottom .measure-edit-btn {\n  background: #aaa;\n  border: solid 1px black;\n  padding: 5px 20px;\n  float: right;\n  margin-right: 10px;\n  border-radius: 5px;\n  color: white;\n  cursor: pointer; }\n\n.area-panel .area-content .area-content-bottom-bar .comp-btn {\n  background: #aaa;\n  padding: 5px 15px;\n  color: white;\n  border: solid 1px #000;\n  border-radius: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/area/area.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__area_to_cover_modal_area_to_cover_modal_component__ = __webpack_require__("../../../../../src/app/area-to-cover-modal/area-to-cover-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__module_area__ = __webpack_require__("../../../../../src/app/module/area.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AreaComponent = (function () {
    // areaCoverModal: AreaToCoverModalComponent = new AreaToCoverModalComponent(this.modalService);
    function AreaComponent(modalService) {
        this.modalService = modalService;
    }
    AreaComponent.prototype.ngOnInit = function () {
    };
    AreaComponent.prototype.openModal = function (id) {
        this.modalService.open(id);
        this.covermodal.preview.drawPreViews();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('covermodal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__area_to_cover_modal_area_to_cover_modal_component__["a" /* AreaToCoverModalComponent */])
    ], AreaComponent.prototype, "covermodal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__module_area__["a" /* Area */])
    ], AreaComponent.prototype, "area", void 0);
    AreaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-area',
            template: __webpack_require__("../../../../../src/app/area/area.component.html"),
            styles: [__webpack_require__("../../../../../src/app/area/area.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* ModalService */]])
    ], AreaComponent);
    return AreaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/build-living-room-modal/build-living-room-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<modal id=\"living-room-modal\">\n  <div class=\"modal-custom\">\n    <div class=\"modal-custom-body\">\n      <div class=\"modal-custom-content\">\n        <div class=\"building-title\"><h3>{{buildTitle}}</h3></div>\n        <div class=\"building-content\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <label>Substrate</label>\n            </div>\n\n            <div class=\"col-md-6\">\n              <select class=\"form-control\" [(ngModel)]=\"selectedSubstrate.id\" (change)=\"onChangeSubstrate($event)\">\n                <option value=\"0\"></option>\n                <option *ngFor=\"let substrate of substrates\" value=\"{{substrate.id}}\">{{substrate.name}}</option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <label>Existing flooring</label>\n            </div>\n          \n            <div class=\"col-md-6\">\n              <select class=\"form-control\" [(ngModel)]=\"selectedFlooring.id\" (change)=\"onChangeFlooring($event)\"> \n                <option value=\"0\"></option>\n                <option *ngFor=\"let flooring of floorings\" value=\"{{flooring.id}}\">{{flooring.name}}</option>\n                \n              </select>\n            </div>\n          \n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <label>Furniture</label>\n            </div>\n          \n            <div class=\"col-md-6\">\n              <select class=\"form-control\" [(ngModel)]=\"selectedFurniture.id\" (change)=\"onChangeFurniture($event)\">\n                <option value=\"0\"></option>\n                <option *ngFor=\"let furniture of furnitures\" value=\"{{furniture.id}}\">{{furniture.name}}</option>\n              </select>\n            </div>\n          \n          </div>\n\n          <div class=\"row\" *ngIf=\"isToilet\">\n            <div class=\"col-md-6\">\n              <label>Toilets</label>\n            </div>\n            \n            <div class=\"col-md-6\">\n              <input type=\"number\" class=\"form-control\">\n            </div>\n          </div>\n\n          <div class=\"row\" *ngIf=\"isApplicances\">\n            <div class=\"col-md-6\">\n              <label>Appliances</label>\n            </div>\n          \n            <div class=\"col-md-6\">\n              <input type=\"number\" class=\"form-control\">\n            </div>\n          </div>\n\n          <div class=\"row\" *ngIf='isLaundryTub'>\n            <div class=\"col-md-6\">\n              <label>Laundry tabs</label>\n            </div>\n          \n            <div class=\"col-md-6\">\n              <input type=\"number\" class=\"form-control\">\n            </div>\n          </div>\n\n        </div>\n\n\n      </div>\n\n      <div class=\"modal-custom-footer\">\n          <div class=\"btn cancel-btn\" routerLink='/areatocover'>Cancel</div>\n          <div class=\"btn submit-btn\" (click)=\"submit()\">Submit</div>\n      </div>\n      \n    </div>\n  </div>  \n  <div class=\"modal-custom-background\"></div>\n</modal>"

/***/ }),

/***/ "../../../../../src/app/build-living-room-modal/build-living-room-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nmodal {\n  /* modals are hidden by default */\n  display: none; }\n  modal .modal-custom {\n    /* modal container fixed across whole screen */\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    /* z-index must be higher than .modal-background */\n    z-index: 1000;\n    /* enables scrolling for tall modals */\n    overflow: auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n    modal .modal-custom .modal-custom-body {\n      padding: 20px;\n      background: #fff;\n      /* margin exposes part of the modal background */\n      margin: 40px;\n      box-shadow: 7px 6px 6px -1px #888888;\n      border: solid 1px #aaa;\n      border-radius: 5px; }\n      modal .modal-custom .modal-custom-body .modal-custom-content {\n        padding: 10px 50px; }\n        modal .modal-custom .modal-custom-body .modal-custom-content .building-content {\n          margin: 50px 0px; }\n          modal .modal-custom .modal-custom-body .modal-custom-content .building-content .row {\n            margin: 10px 0px; }\n      modal .modal-custom .modal-custom-body .modal-custom-footer .cancel-btn, modal .modal-custom .modal-custom-body .modal-custom-footer .submit-btn {\n        border: solid 1px #aaa;\n        box-shadow: 5px 3px 1px -1px #888888;\n        cursor: pointer;\n        color: #555;\n        font-weight: 700; }\n      modal .modal-custom .modal-custom-body .modal-custom-footer .submit-btn {\n        float: right; }\n      modal .modal-custom .modal-custom-body .modal-custom-footer .cancel-btn:hover, modal .modal-custom .modal-custom-body .modal-custom-footer .submit-btn:hover {\n        background: #888;\n        color: white; }\n  modal .modal-custom-background {\n    /* modal background fixed across whole screen */\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    /* semi-transparent black  */\n    background-color: #fff;\n    opacity: 0.5;\n    /* z-index must be below .modal and above everything else  */\n    z-index: 900; }\n\nbody.modal-open {\n  /* body overflow is hidden to hide main scrollbar when modal window is open */\n  overflow: hidden; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/build-living-room-modal/build-living-room-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuildLivingRoomModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__module_substrate__ = __webpack_require__("../../../../../src/app/module/substrate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__module_flooring__ = __webpack_require__("../../../../../src/app/module/flooring.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__module_funiture__ = __webpack_require__("../../../../../src/app/module/funiture.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BuildLivingRoomModalComponent = (function () {
    function BuildLivingRoomModalComponent(modalService) {
        this.modalService = modalService;
        this.isShowAtInit = true;
        this.buildTitle = 'Build Living Room';
        this.buildType = '';
        this.isToilet = false;
        this.isApplicances = false;
        this.isLaundryTub = false;
        this.substrates = [
            new __WEBPACK_IMPORTED_MODULE_2__module_substrate__["a" /* Substrate */](1, 'Wood'),
            new __WEBPACK_IMPORTED_MODULE_2__module_substrate__["a" /* Substrate */](2, 'Concrete'),
        ];
        this.selectedSubstrate = new __WEBPACK_IMPORTED_MODULE_2__module_substrate__["a" /* Substrate */](0, '');
        this.floorings = [
            new __WEBPACK_IMPORTED_MODULE_3__module_flooring__["a" /* Flooring */](1, 'Carpet'),
            new __WEBPACK_IMPORTED_MODULE_3__module_flooring__["a" /* Flooring */](2, 'Wood'),
            new __WEBPACK_IMPORTED_MODULE_3__module_flooring__["a" /* Flooring */](3, 'Laminate'),
            new __WEBPACK_IMPORTED_MODULE_3__module_flooring__["a" /* Flooring */](4, 'Vinyl'),
            new __WEBPACK_IMPORTED_MODULE_3__module_flooring__["a" /* Flooring */](5, 'Ceramic'),
            new __WEBPACK_IMPORTED_MODULE_3__module_flooring__["a" /* Flooring */](6, 'Clear'),
        ];
        this.selectedFlooring = new __WEBPACK_IMPORTED_MODULE_3__module_flooring__["a" /* Flooring */](0, '');
        this.furnitures = [
            new __WEBPACK_IMPORTED_MODULE_4__module_funiture__["a" /* Furniture */](1, 'Yes'),
            new __WEBPACK_IMPORTED_MODULE_4__module_funiture__["a" /* Furniture */](2, 'No'),
            new __WEBPACK_IMPORTED_MODULE_4__module_funiture__["a" /* Furniture */](3, 'Large'),
        ];
        this.selectedFurniture = new __WEBPACK_IMPORTED_MODULE_4__module_funiture__["a" /* Furniture */](0, '');
    }
    BuildLivingRoomModalComponent.prototype.ngOnInit = function () {
    };
    BuildLivingRoomModalComponent.prototype.ngAfterViewInit = function () {
        if (this.isShowAtInit) {
            this.modalService.open('living-room-modal');
        }
    };
    BuildLivingRoomModalComponent.prototype.onChangeSubstrate = function ($event) {
        console.log('substrate change ' + $event.target.value);
        console.log(this.selectedSubstrate.id);
    };
    BuildLivingRoomModalComponent.prototype.onChangeFlooring = function ($event) {
        console.log('flooring change ' + $event.target.value);
        console.log(this.selectedFlooring.id);
    };
    BuildLivingRoomModalComponent.prototype.onChangeFurniture = function ($event) {
        console.log('furniture change ' + $event.target.value);
        console.log(this.selectedFurniture.id);
    };
    BuildLivingRoomModalComponent.prototype.submit = function () {
        this.modalService.close('living-room-modal');
    };
    BuildLivingRoomModalComponent.prototype.defineShowDetails = function () {
        //alert(this.buildType);
        if (this.buildType.includes('BATH')) {
            this.isToilet = true;
        }
        if (this.buildType.includes('KIT')) {
            this.isApplicances = true;
        }
        if (this.buildType.includes('LAU')) {
            this.isApplicances = true;
            this.isLaundryTub = true;
        }
        // switch (this.buildType) {
        //   case 'BATH':
        //     this.isToilet = true;
        //     break;
        //   case 'KIT':
        //     this.isApplicances = true;
        //     break;
        //   case 'LAU':
        //     this.isApplicances = true;
        //     this.isLaundryTub = true;
        //     break;
        //   default:
        //     break;
        // }
    };
    BuildLivingRoomModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-build-living-room-modal',
            template: __webpack_require__("../../../../../src/app/build-living-room-modal/build-living-room-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/build-living-room-modal/build-living-room-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* ModalService */]])
    ], BuildLivingRoomModalComponent);
    return BuildLivingRoomModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cancel-modal/cancel-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<modal id=\"cancel-modal\">\n  <div class=\"modal-custom\">\n    <div class=\"modal-custom-body\">\n      <div class=\"modal-custom-content\">\n        <h1>Do you want to Cancel?</h1>\n        <div>\n          <div class=\"btn btn-success\" (click)=\"cancel()\">Cancel</div>\n          <div class=\"btn btn-danger\" (click)=\"ok()\" style=\"float:right\">Ok</div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-custom-background\"></div>\n</modal>"

/***/ }),

/***/ "../../../../../src/app/cancel-modal/cancel-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cancel-modal/cancel-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CancelModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CancelModalComponent = (function () {
    function CancelModalComponent(modalService, router) {
        this.modalService = modalService;
        this.router = router;
    }
    CancelModalComponent.prototype.ngOnInit = function () {
    };
    CancelModalComponent.prototype.cancel = function () {
        this.modalService.close('cancel-modal');
    };
    CancelModalComponent.prototype.ok = function () {
        this.modalService.close('cancel-modal');
        this.router.navigateByUrl('/');
    };
    CancelModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cancel-modal',
            template: __webpack_require__("../../../../../src/app/cancel-modal/cancel-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cancel-modal/cancel-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* ModalService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], CancelModalComponent);
    return CancelModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/devtool/devtool.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='tool-panel'>\n  <div class=\"tool-panel-heading\">Tool</div>\n  <div class=\"tool-panel-body\">\n    <span>Mouse Position</span>\n    <span>x: {{mouseX}}</span>\n    <span>y: {{mouseY}}</span>\n\n    <div class=\"devices-list\">\n      <button class=\"btn btn-success\" (click)=\"devicesLoad()\">Load</button>\n      <ul class=\"devices-list-ul\">\n        <li *ngFor=\"let device of devicesList\" class=\"device-item-li\" (click)=\"connect(device)\">{{device.deviceName}}\n          <span class=\"connected-label\" *ngIf=\"device.isConnected\">Connected!</span>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/devtool/devtool.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#tool-panel {\n  position: absolute;\n  top: 200px;\n  right: 20px;\n  width: 300px;\n  background: black;\n  color: white;\n  padding: 10px;\n  border-radius: 5px; }\n  #tool-panel .tool-panel-heading {\n    cursor: pointer; }\n  #tool-panel .devices-list-ul {\n    padding: 5px;\n    list-style: none; }\n    #tool-panel .devices-list-ul .device-item-li {\n      list-style: none;\n      padding: 10px;\n      cursor: pointer; }\n      #tool-panel .devices-list-ul .device-item-li .connected-label {\n        color: #f00;\n        font-weight: 700;\n        font-size: 12px;\n        float: right; }\n    #tool-panel .devices-list-ul .device-item-li:hover {\n      background: #fff;\n      color: #000;\n      border-radius: 5px;\n      box-shadow: 4px 4px 5px -2px #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/devtool/devtool.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevtoolComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_konva__ = __webpack_require__("../../../../konva/konva.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_konva___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_konva__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_socket_service__ = __webpack_require__("../../../../../src/app/services/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DevtoolComponent = (function () {
    function DevtoolComponent(socketService) {
        this.socketService = socketService;
        // tool variables
        this.mouseX = 0;
        this.mouseY = 0;
        this.devicesList = [];
    }
    DevtoolComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socketService.getDevicesList().subscribe(function (data) {
            _this.devicesList = data;
        });
    };
    DevtoolComponent.prototype.ngAfterContentInit = function () {
        var me = this;
        if (this.stage) {
            this.stage.on('contentMousemove', function (evt) {
                me.mouseX = evt.evt.layerX;
                me.mouseY = evt.evt.layerY;
            });
        }
        this.devicesLoad();
    };
    DevtoolComponent.prototype.devicesLoad = function () {
        this.socketService.requestDevicesList();
    };
    DevtoolComponent.prototype.connect = function (device) {
        this.socketService.requestDeviceConnect(device);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_konva__["Stage"])
    ], DevtoolComponent.prototype, "stage", void 0);
    DevtoolComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-devtool',
            template: __webpack_require__("../../../../../src/app/devtool/devtool.component.html"),
            styles: [__webpack_require__("../../../../../src/app/devtool/devtool.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_socket_service__["a" /* SocketService */]])
    ], DevtoolComponent);
    return DevtoolComponent;
}());



/***/ }),

/***/ "../../../../../src/app/done-modal/done-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<modal id=\"done-modal\">\n  <div class=\"modal-custom\">\n    <div class=\"modal-custom-body\">\n      <div class=\"modal-custom-content\">\n        <h1>Do you want to save?</h1>\n        <div>\n          <div class=\"btn btn-success\" (click)=\"cancel()\">Cancel</div>\n          <div class=\"btn btn-danger\" (click)=\"save()\" style=\"float:right\">Save</div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-custom-background\"></div>\n</modal>  "

/***/ }),

/***/ "../../../../../src/app/done-modal/done-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/done-modal/done-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoneModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_currentroom_service__ = __webpack_require__("../../../../../src/app/services/currentroom.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_areas_service__ = __webpack_require__("../../../../../src/app/services/areas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__module_room__ = __webpack_require__("../../../../../src/app/module/room.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_strecherbutton_service__ = __webpack_require__("../../../../../src/app/services/strecherbutton.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__module_point__ = __webpack_require__("../../../../../src/app/module/point.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DoneModalComponent = (function () {
    function DoneModalComponent(modalService, router, _currentRoomService, _areasService, _strecherButtonService) {
        this.modalService = modalService;
        this.router = router;
        this._currentRoomService = _currentRoomService;
        this._areasService = _areasService;
        this._strecherButtonService = _strecherButtonService;
    }
    DoneModalComponent.prototype.ngOnInit = function () {
    };
    DoneModalComponent.prototype.cancel = function () {
        this.modalService.close('done-modal');
    };
    DoneModalComponent.prototype.save = function () {
        // this._currentRoomService.currentRoom.islands.map(island => {
        //   var lineClientRect = island.line.getClientRect();
        //   island.position = new Point(lineClientRect.x, lineClientRect.y);
        //   island.calcPoints();
        // });
        this._currentRoomService.currentRoom.closets.map(function (closet) {
            var rectClientRect = closet.rect.getClientRect();
            closet.topleftPoint = new __WEBPACK_IMPORTED_MODULE_7__module_point__["a" /* Point */](rectClientRect.x, rectClientRect.y);
        });
        this._areasService.addCurrentRoom(this._currentRoomService.currentRoom);
        this._currentRoomService.currentRoom = new __WEBPACK_IMPORTED_MODULE_5__module_room__["a" /* Room */]();
        this._strecherButtonService.wallClicked(null);
        this.modalService.close('done-modal');
        this.router.navigateByUrl('/');
    };
    DoneModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-done-modal',
            template: __webpack_require__("../../../../../src/app/done-modal/done-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/done-modal/done-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_currentroom_service__["a" /* CurrentroomService */],
            __WEBPACK_IMPORTED_MODULE_4__services_areas_service__["a" /* AreasService */],
            __WEBPACK_IMPORTED_MODULE_6__services_strecherbutton_service__["a" /* StrecherbuttonService */]])
    ], DoneModalComponent);
    return DoneModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/doorlengthchange/doorlengthchange.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isEditing\" [ngStyle]='getPosition()' class=\"door-length-change-panel\">\n    <div class=\"door-length-edit-box\">\n      <input type='number' [(ngModel)]='lengthText1' [ngStyle]=\"getValidationColor1()\">\n      <b>'</b>\n      <input type='number' [(ngModel)]='lengthText2' [ngStyle]=\"getValidationColor2()\">\n      <b>\"</b>\n      <button (click)='submit()'>SUBMIT</button>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/doorlengthchange/doorlengthchange.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".door-length-change-panel {\n  background: #fff;\n  border: solid 1px #888;\n  border-radius: 5px;\n  box-shadow: 7px 6px 6px -1px #888888;\n  padding: 5px; }\n  .door-length-change-panel .door-length-edit-box input {\n    width: 60px; }\n  .door-length-change-panel .door-length-edit-box button {\n    background: #fff;\n    font-size: 12px;\n    border: solid 1px;\n    border-radius: 5px;\n    cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/doorlengthchange/doorlengthchange.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoorlengthchangeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_doorbutton_service__ = __webpack_require__("../../../../../src/app/services/doorbutton.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_socket_service__ = __webpack_require__("../../../../../src/app/services/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__module_evented__ = __webpack_require__("../../../../../src/app/module/evented.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DoorlengthchangeComponent = (function () {
    function DoorlengthchangeComponent(_doorButtonService, _socketService) {
        var _this = this;
        this._doorButtonService = _doorButtonService;
        this._socketService = _socketService;
        this.currentDoor = null;
        this.isEditing = false;
        this.subscribers = {};
        this.subscribers.doorChangeLengthSubscribe = _doorButtonService.doorChangeLenghth$.subscribe(function (door) {
            if (_this.currentDoor) {
                _this.currentDoor.showBetweenComponents(false);
            }
            _this.currentDoor = door;
            _this.isEditing = _this.currentDoor.isEditing;
            _this.lengthText1 = door.lengthText1;
            _this.lengthText2 = door.lengthText2;
            if (_this.isEditing) {
                _this._socketService.sendMessage(_this.currentDoor.doorId);
            }
        });
        var me = this;
        __WEBPACK_IMPORTED_MODULE_3__module_evented__["a" /* Evented */].on('length detect', function (e) {
            var data = e.args;
            if (me.isEditing && data.id === me.currentDoor.doorId) {
                me.lengthText1 = Number(data.foot);
                me.lengthText2 = Number(data.inch);
            }
        });
    }
    DoorlengthchangeComponent.prototype.ngOnInit = function () {
    };
    DoorlengthchangeComponent.prototype.ngOnDestroy = function () {
        this.subscribers.doorChangeLengthSubscribe.unsubscribe();
    };
    DoorlengthchangeComponent.prototype.getPosition = function () {
        var styles = {};
        if (this.isEditing) {
            styles = {
                'top.px': this.currentDoor.clickedPoint.y,
                'left.px': this.currentDoor.clickedPoint.x + 200,
                'position': 'absolute'
            };
        }
        return styles;
    };
    DoorlengthchangeComponent.prototype.getValidationColor1 = function () {
        if (this.lengthText1 < 0 || this.currentDoor.parentWall.calcLength() < (this.lengthText1 * 36 + this.lengthText2 * 3)) {
            return {
                'border': 'solid 2px red'
            };
        }
    };
    DoorlengthchangeComponent.prototype.getValidationColor2 = function () {
        if (this.lengthText2 > 11 || this.lengthText2 < 0 ||
            this.currentDoor.parentWall.calcLength() < (this.lengthText1 * 36 + this.lengthText2 * 3)) {
            return {
                'border': 'solid 2px red'
            };
        }
    };
    DoorlengthchangeComponent.prototype.submit = function () {
        if (this.lengthText1 < 0 || this.lengthText2 > 11 || this.lengthText2 < 0 ||
            this.currentDoor.parentWall.calcLength() < (this.lengthText1 * 36 + this.lengthText2 * 3)) {
            return;
        }
        this.currentDoor.isEditing = false;
        this.currentDoor.doorLength = this.lengthText1 * 12 * 3 + this.lengthText2 * 3;
        this.currentDoor.redrawDoorRect();
        this.currentDoor.redrawAll();
        this._doorButtonService.dblClickDoor(this.currentDoor);
    };
    DoorlengthchangeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-doorlengthchange',
            template: __webpack_require__("../../../../../src/app/doorlengthchange/doorlengthchange.component.html"),
            styles: [__webpack_require__("../../../../../src/app/doorlengthchange/doorlengthchange.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_doorbutton_service__["a" /* DoorbuttonService */],
            __WEBPACK_IMPORTED_MODULE_2__services_socket_service__["a" /* SocketService */]])
    ], DoorlengthchangeComponent);
    return DoorlengthchangeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/drawing-panel/drawing-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"drawing-panel\" [ngStyle]=\"getDrawingPanelStyle()\">\n  <div class=\"drawing-tool-panel\">\n    <div class=\"drawing-tool-inner\" [style.height.px]=\"drawingPanelHeight-100\">\n      <app-undobutton #undoButton></app-undobutton>\n      <app-redobutton #redoButton></app-redobutton>\n      <app-shapebutton #shapeButton></app-shapebutton>\n      <app-strecherbutton #wall_strecherButton></app-strecherbutton>\n      <app-doorbutton #doorButton></app-doorbutton>\n      <app-connercutterbutton #conner_cutterButton></app-connercutterbutton>\n      <app-stepdownbutton #step_downButton></app-stepdownbutton>\n      <app-closetbutton #closetButton></app-closetbutton>\n      <app-islandbutton #islandButton></app-islandbutton>\n      <app-halfwallbutton #half_wallButton></app-halfwallbutton>\n\n      <div class=\"done-cancel\" (click)='cancel()'>Cancel</div>\n      <div class=\"done-btn\" (click)=\"done()\">Done</div>\n    </div>\n  </div>\n  <div class=\"drawing-board-panel\" [ngStyle]=\"getDrawingBoardStyle()\" >\n    \n    <app-panel #drawingPanel *ngIf=\"isShowAppPanel\"></app-panel>\n    <app-staircasepanel #staircasePanel *ngIf=\"isShowStaircasePanel\">\n    </app-staircasepanel>\n\n    <div class=\"build-title-area\">\n      <h2 class=\"build-title\">{{buildTitle}}</h2>\n    </div>\n\n    <div class=\"lock-area\">\n      <app-lockbutton #lockButton></app-lockbutton>\n    </div>\n\n    <div class=\"sub-tool-area\">\n      <app-deletebutton #deleteButton></app-deletebutton>\n      <app-notebutton #noteButton></app-notebutton>\n      <app-photobutton #photoButton></app-photobutton>\n    </div>\n  </div>\n\n    \n</div>\n\n<app-build-living-room-modal #buildLivingRoomModal></app-build-living-room-modal>\n\n<app-wall-length-modal></app-wall-length-modal>\n\n<app-done-modal></app-done-modal>\n\n<app-cancel-modal></app-cancel-modal>\n\n<app-doorlengthchange></app-doorlengthchange>\n<app-lengthchangedialog></app-lengthchangedialog>\n\n<modal id=\"closet-warning-modal\">\n <div class=\"modal-custom\">\n  <div class=\"modal-custom-body\">\n    <div class=\"modal-custom-content\">\n      <h1>Please size the following items(s)</h1>\n      <ul>\n        <li>internal closet</li>\n        <li>exteranl closet</li>\n      </ul>\n        \n      <button (click)=\"closeClosetWarning()\">Close</button>\n    </div>\n  </div>\n</div>\n<div class=\"modal-custom-background\"></div>\n</modal>\n\n<modal id=\"staircase-warning-modal\">\n  <div class=\"modal-custom\">\n    <div class=\"modal-custom-body\">\n      <div class=\"modal-custom-content\">\n        <h1>Error!</h1>\n          <span>Please Input all data in each staircase.</span><br>\n        <button (click)=\"closeStairCaseWarning()\">Close</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-custom-background\"></div>\n</modal>"

/***/ }),

/***/ "../../../../../src/app/drawing-panel/drawing-panel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".drawing-panel {\n  background: #eee; }\n\n.drawing-tool-panel {\n  width: 200px;\n  padding: 50px 50px 50px 10px;\n  float: left; }\n\n.drawing-tool-inner {\n  border-right: solid 2px #888;\n  border-top: solid 1px #888;\n  border-bottom: solid 1px #888;\n  box-shadow: 5px 3px 4px 0px #888888;\n  padding: 10px;\n  overflow: scroll; }\n\n.drawing-board-panel {\n  float: right;\n  background: #eee;\n  position: relative; }\n  .drawing-board-panel .build-title-area {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 1000; }\n  .drawing-board-panel .lock-area {\n    position: absolute;\n    top: 0;\n    right: 20px;\n    padding: 10px; }\n    .drawing-board-panel .lock-area img {\n      width: 70px;\n      cursor: pointer; }\n    .drawing-board-panel .lock-area img:hover {\n      border: solid 1px #888; }\n  .drawing-board-panel .sub-tool-area {\n    position: absolute;\n    bottom: 20px;\n    right: 20px; }\n\n.done-btn, .done-cancel {\n  margin: 10px;\n  border: solid 2px #888;\n  padding: 5px;\n  text-align: center;\n  background: #eee;\n  color: #888;\n  font-weight: 700;\n  border-radius: 5px;\n  cursor: pointer; }\n\n.done-btn:hover,\n.done-cancel:hover {\n  background: #aaa; }\n\n.build-title {\n  padding: 20px 0; }\n\n#closet-warning-modal .modal-custom-body,\n#staircase-warning-modal .modal-custom-body {\n  padding: 40px;\n  margin: 40px;\n  border: solid 4px #888;\n  border-radius: 5px;\n  background: #ccc; }\n  #closet-warning-modal .modal-custom-body ul,\n  #staircase-warning-modal .modal-custom-body ul {\n    font-size: 25px;\n    font-weight: 600; }\n  #closet-warning-modal .modal-custom-body button,\n  #staircase-warning-modal .modal-custom-body button {\n    float: right;\n    background: #888;\n    color: #000;\n    font-size: 25px;\n    font-weight: 500;\n    padding: 2px 20px;\n    border: solid 3px #000;\n    box-shadow: 5px 6px 7px 0px black; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/drawing-panel/drawing-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawingPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__build_living_room_modal_build_living_room_modal_component__ = __webpack_require__("../../../../../src/app/build-living-room-modal/build-living-room-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__module_panel__ = __webpack_require__("../../../../../src/app/module/panel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toolbuttons_lockbutton_lockbutton_component__ = __webpack_require__("../../../../../src/app/toolbuttons/lockbutton/lockbutton.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__toolbuttons_undobutton_undobutton_component__ = __webpack_require__("../../../../../src/app/toolbuttons/undobutton/undobutton.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__toolbuttons_redobutton_redobutton_component__ = __webpack_require__("../../../../../src/app/toolbuttons/redobutton/redobutton.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__toolbuttons_shapebutton_shapebutton_component__ = __webpack_require__("../../../../../src/app/toolbuttons/shapebutton/shapebutton.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__toolbuttons_strecherbutton_strecherbutton_component__ = __webpack_require__("../../../../../src/app/toolbuttons/strecherbutton/strecherbutton.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__toolbuttons_doorbutton_doorbutton_component__ = __webpack_require__("../../../../../src/app/toolbuttons/doorbutton/doorbutton.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__toolbuttons_connercutterbutton_connercutterbutton_component__ = __webpack_require__("../../../../../src/app/toolbuttons/connercutterbutton/connercutterbutton.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__toolbuttons_stepdownbutton_stepdownbutton_component__ = __webpack_require__("../../../../../src/app/toolbuttons/stepdownbutton/stepdownbutton.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__toolbuttons_closetbutton_closetbutton_component__ = __webpack_require__("../../../../../src/app/toolbuttons/closetbutton/closetbutton.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__toolbuttons_islandbutton_islandbutton_component__ = __webpack_require__("../../../../../src/app/toolbuttons/islandbutton/islandbutton.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__toolbuttons_halfwallbutton_halfwallbutton_component__ = __webpack_require__("../../../../../src/app/toolbuttons/halfwallbutton/halfwallbutton.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__toolbuttons_deletebutton_deletebutton_component__ = __webpack_require__("../../../../../src/app/toolbuttons/deletebutton/deletebutton.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__toolbuttons_notebutton_notebutton_component__ = __webpack_require__("../../../../../src/app/toolbuttons/notebutton/notebutton.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__toolbuttons_photobutton_photobutton_component__ = __webpack_require__("../../../../../src/app/toolbuttons/photobutton/photobutton.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_areas_service__ = __webpack_require__("../../../../../src/app/services/areas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_currentroom_service__ = __webpack_require__("../../../../../src/app/services/currentroom.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__staircasepanel_staircasepanel_component__ = __webpack_require__("../../../../../src/app/staircasepanel/staircasepanel.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
























var DrawingPanelComponent = (function () {
    function DrawingPanelComponent(ngZone, modalService, _activatedRoute, _areasService, _currentRoomService) {
        var _this = this;
        this.ngZone = ngZone;
        this.modalService = modalService;
        this._activatedRoute = _activatedRoute;
        this._areasService = _areasService;
        this._currentRoomService = _currentRoomService;
        this.drawingPanelHeight = window.innerHeight;
        this.drawingPanelWidth = window.innerWidth;
        this.drawingBoardWith = this.drawingPanelWidth - 200;
        this.drawingBoardHight = window.innerHeight;
        this.buildTitle = 'Building Living Room 1 ...';
        this.buildType = '';
        this.otherTitle = '';
        this.isShowAppPanel = true;
        this.isShowStaircasePanel = false;
        window.onresize = function (e) {
            _this.ngZone.run(function () {
                _this.drawingPanelWidth = window.innerWidth;
                _this.drawingPanelHeight = window.innerHeight;
                _this.drawingBoardHight = window.innerHeight;
                _this.drawingBoardWith = _this.drawingPanelWidth - 200;
            });
        };
    }
    DrawingPanelComponent.prototype.ngOnInit = function () {
        this.buildType = this._activatedRoute.snapshot.params['type'];
        if (this.buildType === 'Others') {
            this.otherTitle = this._activatedRoute.snapshot.params['otherTitle'];
        }
        this.defineBuildTitleWithType();
        this.buildLivingRoomModal.buildTitle = this.buildTitle;
        if (this.buildType === 'Others') {
            this.buildLivingRoomModal.buildTitle = 'Building ' + this.otherTitle;
        }
        this.buildLivingRoomModal.buildType = this.buildType;
        this.buildLivingRoomModal.defineShowDetails();
    };
    DrawingPanelComponent.prototype.ngAfterContentInit = function () {
    };
    DrawingPanelComponent.prototype.getDrawingPanelStyle = function () {
        var styles = {
            'width.px': this.drawingPanelWidth,
            'height.px': this.drawingPanelHeight,
        };
        return styles;
    };
    DrawingPanelComponent.prototype.getDrawingBoardStyle = function () {
        var styles = {
            'width.px': this.drawingBoardWith,
            'height.px': this.drawingBoardHight,
        };
        return styles;
    };
    DrawingPanelComponent.prototype.open = function () {
        this.modalService.open('living-room-modal');
    };
    DrawingPanelComponent.prototype.done = function () {
        if (!this.checkClosetWarning()) {
            this.modalService.open('closet-warning-modal');
            return;
        }
        if (!this.checkStairCase()) {
            this.modalService.open('staircase-warning-modal');
            return;
        }
        this.modalService.open('done-modal');
    };
    DrawingPanelComponent.prototype.cancel = function () {
        this.modalService.open('cancel-modal');
    };
    DrawingPanelComponent.prototype.defineBuildTitleWithType = function () {
        this.buildLivingRoomModal.isShowAtInit = true;
        this.isShowAppPanel = true;
        this.buildTitle = 'Building ' + this.buildType;
        if (this.buildType === 'LIV') {
            this.buildTitle = 'Building Living Room';
        }
        else if (this.buildType === 'KIT') {
            this.buildTitle = 'Building Kitchen';
        }
        else if (this.buildType === 'FR') {
            this.buildTitle = 'Building Family Room';
        }
        else if (this.buildType === 'LAU') {
            this.buildTitle = 'Building Laundry Room';
        }
        else if (this.buildType === 'DIN') {
            this.buildTitle = 'Building Dinning Room';
        }
        else if (this.buildType === 'FOY') {
            this.buildTitle = 'Building Foryer';
        }
        else if (this.buildType === 'HALL') {
            this.buildTitle = 'Building HALL';
        }
        else if (this.buildType === 'BASE') {
            this.buildTitle = 'Building Basement';
        }
        else if (this.buildType === 'BATH') {
            this.buildTitle = 'Building Bathroom';
        }
        else if (this.buildType === 'STEPS') {
            // this.buildTitle = 'Building Staircase';
            this.isShowAppPanel = false;
            this.buildLivingRoomModal.isShowAtInit = false;
            this.isShowStaircasePanel = true;
        }
        else if (this.buildType === 'MB') {
            this.buildTitle = 'Building Master Bedroom';
        }
        else if (this.buildType === 'BR') {
            this.buildTitle = 'Building Bedroom';
        }
        else if (this.buildType === 'Others') {
            this.buildTitle = 'Building ' + this.otherTitle;
        }
        this.buildTitle = this.buildTitle + ' ' + String(this._currentRoomService.currentRoom.roomId) + ' ...';
    };
    DrawingPanelComponent.prototype.checkClosetWarning = function () {
        var isWarning = true;
        this._currentRoomService.currentRoom.walls.map(function (wall) {
            wall.closets.map(function (closet) {
                if (!closet.isSetDepth) {
                    isWarning = false;
                }
            });
        });
        return isWarning;
    };
    DrawingPanelComponent.prototype.checkStairCase = function () {
        var isWarning = true;
        this._currentRoomService.currentRoom.staircases.map(function (staircase) {
            if (!staircase.stairType) {
                isWarning = false;
            }
            if (staircase.numberOfSteps < 0) {
                isWarning = false;
            }
            if (staircase.treadDepth1 < 0) {
                isWarning = false;
            }
            if (staircase.treadDepth2 < 0 || staircase.treadDepth2 > 11) {
                isWarning = false;
            }
            if (staircase.riserHeight1 < 0) {
                isWarning = false;
            }
            if (staircase.riserHeight2 < 0 || staircase.riserHeight2 > 11) {
                isWarning = false;
            }
            if (staircase.stepWidth1 < 0) {
                isWarning = false;
            }
            if (staircase.stepWidth2 < 0 || staircase.stepWidth2 > 11) {
                isWarning = false;
            }
        });
        return isWarning;
    };
    DrawingPanelComponent.prototype.closeClosetWarning = function () {
        this.modalService.close('closet-warning-modal');
    };
    DrawingPanelComponent.prototype.closeStairCaseWarning = function () {
        this.modalService.close('staircase-warning-modal');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('undoButton'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__toolbuttons_undobutton_undobutton_component__["a" /* UndobuttonComponent */])
    ], DrawingPanelComponent.prototype, "undoButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('redoButton'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7__toolbuttons_redobutton_redobutton_component__["a" /* RedobuttonComponent */])
    ], DrawingPanelComponent.prototype, "redoButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('shapeButton'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8__toolbuttons_shapebutton_shapebutton_component__["a" /* ShapebuttonComponent */])
    ], DrawingPanelComponent.prototype, "shapeButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('wall_strecherButton'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9__toolbuttons_strecherbutton_strecherbutton_component__["a" /* StrecherbuttonComponent */])
    ], DrawingPanelComponent.prototype, "wall_strecherButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('doorButton'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_10__toolbuttons_doorbutton_doorbutton_component__["a" /* DoorbuttonComponent */])
    ], DrawingPanelComponent.prototype, "doorButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('conner_cutterButton'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_11__toolbuttons_connercutterbutton_connercutterbutton_component__["a" /* ConnercutterbuttonComponent */])
    ], DrawingPanelComponent.prototype, "conner_cutterButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('step_downButton'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_12__toolbuttons_stepdownbutton_stepdownbutton_component__["a" /* StepdownbuttonComponent */])
    ], DrawingPanelComponent.prototype, "step_downButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closetButton'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_13__toolbuttons_closetbutton_closetbutton_component__["a" /* ClosetbuttonComponent */])
    ], DrawingPanelComponent.prototype, "closetButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('islandButton'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_14__toolbuttons_islandbutton_islandbutton_component__["a" /* IslandbuttonComponent */])
    ], DrawingPanelComponent.prototype, "islandButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('half_wallButton'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_15__toolbuttons_halfwallbutton_halfwallbutton_component__["a" /* HalfwallbuttonComponent */])
    ], DrawingPanelComponent.prototype, "half_wallButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('lockButton'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__toolbuttons_lockbutton_lockbutton_component__["a" /* LockbuttonComponent */])
    ], DrawingPanelComponent.prototype, "lockButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('deleteButton'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_16__toolbuttons_deletebutton_deletebutton_component__["a" /* DeletebuttonComponent */])
    ], DrawingPanelComponent.prototype, "deleteButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('noteButton'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_17__toolbuttons_notebutton_notebutton_component__["a" /* NotebuttonComponent */])
    ], DrawingPanelComponent.prototype, "noteButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('photoButton'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_18__toolbuttons_photobutton_photobutton_component__["a" /* PhotobuttonComponent */])
    ], DrawingPanelComponent.prototype, "photoButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('buildLivingRoomModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__build_living_room_modal_build_living_room_modal_component__["a" /* BuildLivingRoomModalComponent */])
    ], DrawingPanelComponent.prototype, "buildLivingRoomModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('drawingPanel'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__module_panel__["a" /* Panel */])
    ], DrawingPanelComponent.prototype, "drawingPanel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('staircasePanel'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_21__staircasepanel_staircasepanel_component__["a" /* StaircasepanelComponent */])
    ], DrawingPanelComponent.prototype, "staircasePanel", void 0);
    DrawingPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-drawing-panel',
            template: __webpack_require__("../../../../../src/app/drawing-panel/drawing-panel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/drawing-panel/drawing-panel.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_3__services_index__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_19__services_areas_service__["a" /* AreasService */],
            __WEBPACK_IMPORTED_MODULE_20__services_currentroom_service__["a" /* CurrentroomService */]])
    ], DrawingPanelComponent);
    return DrawingPanelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/drawing-tool-button/drawing-tool-button.component.html":
/***/ (function(module, exports) {

module.exports = "<img [src]=\"buttonIconURL\" [ngStyle]='getImageStyle()' (click)='buttonClicked()'>\n"

/***/ }),

/***/ "../../../../../src/app/drawing-tool-button/drawing-tool-button.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img:hover {\n  opacity: 0.5;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/drawing-tool-button/drawing-tool-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawingToolButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DrawingToolButtonComponent = (function () {
    function DrawingToolButtonComponent() {
        //@Input()
        this.buttonIconURL = '';
        // @Input()
        this.isNormalButton = true;
        this.buttonName = 'normal';
        this.buttonIconURL = '';
    }
    DrawingToolButtonComponent.prototype.ngOnInit = function () {
    };
    DrawingToolButtonComponent.prototype.getImageStyle = function () {
        if (this.isNormalButton) {
            var styles = {
                'width.px': 60,
                'margin': '9px 20px'
            };
            return styles;
        }
        else {
            var styles = {
                'width.px': 48,
            };
            return styles;
        }
    };
    DrawingToolButtonComponent.prototype.buttonClicked = function () {
        console.log(this.buttonName);
    };
    DrawingToolButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-drawing-tool-button',
            template: __webpack_require__("../../../../../src/app/drawing-tool-button/drawing-tool-button.component.html"),
            styles: [__webpack_require__("../../../../../src/app/drawing-tool-button/drawing-tool-button.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DrawingToolButtonComponent);
    return DrawingToolButtonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/grouparea/grouparea.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"group-area\">\n  <div class=\"group-title-area\">\n    <h3>Grouping Area 1</h3>\n    <br>\n    \n    <h4 (click)=\"customerInfoClick()\" class=\"customer-info\">CUSTOMER INFO:</h4>\n    <div *ngIf=\"isShowCustomerInfo\" >\n      <p><span>{{_customerService.customer.firstName}}</span><span> {{_customerService.customer.lastName}}</span></p>\n      <p>SAH-XXXXX(lead ID)</p>\n      <p>{{_customerService.customer.phone}}</p>\n      <p>{{_customerService.customer.email}}</p>\n      <p>{{_customerService.customer.address}}, {{_customerService.customer.city}}, {{_customerService.customer.state}}{{_customerService.customer.zip}}</p>\n    </div>\n    <hr>\n\n    <h4 class=\"area-info\" (click)=\"areaInfoClick()\">AREAS TO COVER:</h4>\n    <div *ngIf=\"isShowAreaInfo\">\n      <p>\n        <span>LIV1</span> <span>noCI</span>\n      </p>\n    </div>\n\n    <br>\n    \n    <h4 class=\"sqft-info\" (click)=\"sqftInfoClick()\">SQFT:</h4>\n    <div *ngIf=\"isShowSQFTInfo\">\n      <p><span>Hard:</span> <span>xxxx</span> sf.</p>\n      <p><span>Soft:</span> <span>xxxx</span> sf.</p>\n      <div>(1.17*SUM for Soft Surfaces 1.07*SUM for Hard Surfaces) ** Includes steps' area Deducts islands' area</div>\n    </div>\n    \n    <br>\n    <h4 class=\"newwall-info\" (click)=\"newWallInfoClick()\">NEW WALL FINISH (h):</h4>\n    <div *ngIf=\"isShowNewWallInfo\">\n      <p>xxx lft.</p>\n      <div>(Both sides of the half wall need to be included)</div>\n    </div>\n    <br>\n    <div class=\"tool-area\">\n      <h5>Tool</h5>\n      <div>\n        <span>X : {{mouseX}}</span>\n        <span>Y : {{mouseY}}</span> \n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"group-drawing-panel\" [style.height.px]=\"groupDrawingPanelHeight\">\n    <div class=\"group-drawing-board\" id=\"group-drawing-board\">\n\n    </div>\n  </div>\n</div>\n\n<div class=\"group-area-buttons\">\n  <button class=\"btn btn-danger\" (click)=\"openModal('cancel-group-modal')\">Cancel</button>\n  <button class=\"btn btn-success submit-btn\" (click)=\"openModal('save-group-modal')\">Submit</button>\n</div>\n\n<modal id=\"save-group-modal\">\n  <div class=\"modal-custom\">\n    <div class=\"modal-custom-body\">\n      <div class=\"modal-custom-content\">\n        <h1>Do you want to save?</h1>\n        <div>\n          <div class=\"btn btn-success\" (click)=\"cancelModal('save-group-modal')\">Cancel</div>\n          <div class=\"btn btn-danger\" (click)=\"submit()\" style=\"float:right\">Save</div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-custom-background\"></div>\n</modal>\n\n<modal id=\"cancel-group-modal\">\n  <div class=\"modal-custom\">\n    <div class=\"modal-custom-body\">\n      <div class=\"modal-custom-content\">\n        <h1>Do you want to Cancel?</h1>\n        <div>\n          <div class=\"btn btn-success\" (click)=\"cancelModal('cancel-group-modal')\">Cancel</div>\n          <div class=\"btn btn-danger\" (click)=\"cancel()\" style=\"float:right\">Ok</div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-custom-background\"></div>\n</modal>\n\n<app-groupstaircaseinfomodal></app-groupstaircaseinfomodal>"

/***/ }),

/***/ "../../../../../src/app/grouparea/grouparea.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".group-area {\n  padding: 10px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n  .group-area .group-title-area {\n    padding: 30px;\n    width: 400px; }\n    .group-area .group-title-area .tool-area {\n      background: #000;\n      color: #fff;\n      padding: 10px;\n      border-radius: 5px; }\n    .group-area .group-title-area .customer-info,\n    .group-area .group-title-area .area-info,\n    .group-area .group-title-area .sqft-info,\n    .group-area .group-title-area .newwall-info {\n      background: #888;\n      padding: 5px;\n      border-radius: 5px;\n      color: #fff;\n      cursor: pointer; }\n  .group-area .group-drawing-panel {\n    width: 100%; }\n    .group-area .group-drawing-panel .group-drawing-board {\n      border: solid 2px #888;\n      min-width: 1200px !important;\n      min-height: 600px !important;\n      height: 100%;\n      width: 100%; }\n\n.group-area-buttons {\n  padding: 10px 50px; }\n  .group-area-buttons .submit-btn {\n    float: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/grouparea/grouparea.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupareaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_konva__ = __webpack_require__("../../../../konva/konva.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_konva___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_konva__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_currentgroup_service__ = __webpack_require__("../../../../../src/app/services/currentgroup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__module_grouproom__ = __webpack_require__("../../../../../src/app/module/grouproom.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__module_evented__ = __webpack_require__("../../../../../src/app/module/evented.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_customer_service__ = __webpack_require__("../../../../../src/app/services/customer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GroupareaComponent = (function () {
    function GroupareaComponent(_ngZone, _currentGroupService, router, _modalService, _customerService) {
        var _this = this;
        this._ngZone = _ngZone;
        this._currentGroupService = _currentGroupService;
        this.router = router;
        this._modalService = _modalService;
        this._customerService = _customerService;
        // stage constants
        this.STAGE_WIDTH = 2000;
        this.STAGE_HEIGHT = window.innerHeight - 150 < 600 ? 600 : window.innerHeight - 150;
        this.groupDrawingPanelHeight = window.innerHeight - 150;
        this.mouseX = 0;
        this.mouseY = 0;
        this.isShowCustomerInfo = false;
        this.isShowAreaInfo = false;
        this.isShowSQFTInfo = false;
        this.isShowNewWallInfo = false;
        window.onresize = function (e) {
            _this._ngZone.run(function () {
                _this.groupDrawingPanelHeight = window.innerHeight - 150;
            });
        };
    }
    GroupareaComponent.prototype.ngOnInit = function () {
    };
    GroupareaComponent.prototype.ngAfterContentInit = function () {
        this.initBoard();
    };
    GroupareaComponent.prototype.initBoard = function () {
        var me = this;
        this.stage = new __WEBPACK_IMPORTED_MODULE_1_konva__["Stage"]({
            container: '#group-drawing-board',
            width: this.STAGE_WIDTH,
            height: this.STAGE_HEIGHT,
            draggable: true
        });
        this.layer = new __WEBPACK_IMPORTED_MODULE_1_konva__["Layer"]();
        this.buildGroupingRoom();
        this.stage.add(this.layer);
        this.stage.on('contentMousemove', function (evt) {
            me.mouseX = evt.evt.layerX;
            me.mouseY = evt.evt.layerY;
        });
        this.stage.on('dragmove', function (evt) {
            __WEBPACK_IMPORTED_MODULE_4__module_evented__["a" /* Evented */].fire('stage-dragging');
        });
    };
    GroupareaComponent.prototype.buildGroupingRoom = function () {
        var _this = this;
        if (!this._currentGroupService.currentGroup) {
            return;
        }
        this._currentGroupService.currentGroup.rooms.map(function (room) {
            var tempGroupRoom = new __WEBPACK_IMPORTED_MODULE_3__module_grouproom__["a" /* GroupRoom */](_this, room);
            _this._currentGroupService.currentGroup.groupingRooms.push(tempGroupRoom);
        });
        var countRooms = 0;
        var previousWidth = 0;
        var previousHeight = 0;
        var oldPreviousHeight1 = 0;
        var oldPreviousHeight2 = 0;
        this._currentGroupService.currentGroup.groupingRooms.map(function (groupRoom) {
            var roomGroupClientRect = groupRoom.group.getClientRect();
            if (countRooms % 2 === 0) {
                previousWidth = 0;
                oldPreviousHeight1 = roomGroupClientRect.height;
            }
            else {
                oldPreviousHeight2 = roomGroupClientRect.height;
            }
            groupRoom.group.x(-roomGroupClientRect.x + previousWidth + 50 * (countRooms % 2));
            groupRoom.group.y(-roomGroupClientRect.y + previousHeight);
            groupRoom.group.draw();
            countRooms++;
            previousWidth = roomGroupClientRect.width;
            if (countRooms % 2 === 0) {
                previousHeight += oldPreviousHeight1 > oldPreviousHeight2 ? oldPreviousHeight1 : oldPreviousHeight2;
                oldPreviousHeight1 = 0;
                oldPreviousHeight2 = 0;
            }
        });
        if (countRooms % 2 === 1) {
            previousHeight += oldPreviousHeight1;
        }
        this.STAGE_HEIGHT = previousHeight + 100;
        this.groupDrawingPanelHeight = this.STAGE_HEIGHT;
        this.stage.height(this.STAGE_HEIGHT);
        this.layer.draw();
        this.stage.draw();
    };
    GroupareaComponent.prototype.submit = function () {
        if (this._currentGroupService.currentGroup) {
            this._currentGroupService.currentGroup.rooms = [];
        }
        this.router.navigateByUrl('/');
    };
    GroupareaComponent.prototype.cancel = function () {
        if (this._currentGroupService.currentGroup) {
            this._currentGroupService.currentGroup.rooms = [];
        }
        this.router.navigateByUrl('/');
    };
    GroupareaComponent.prototype.cancelModal = function (id) {
        // this._currentGroupService.currentGroup.rooms = [];
        // this.router.navigateByUrl('/');
        this._modalService.close(id);
    };
    GroupareaComponent.prototype.openModal = function (id) {
        this._modalService.open(id);
    };
    GroupareaComponent.prototype.customerInfoClick = function () {
        this.isShowCustomerInfo = !this.isShowCustomerInfo;
    };
    GroupareaComponent.prototype.areaInfoClick = function () {
        this.isShowAreaInfo = !this.isShowAreaInfo;
    };
    GroupareaComponent.prototype.sqftInfoClick = function () {
        this.isShowSQFTInfo = !this.isShowSQFTInfo;
    };
    GroupareaComponent.prototype.newWallInfoClick = function () {
        this.isShowNewWallInfo = !this.isShowNewWallInfo;
    };
    GroupareaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-grouparea',
            template: __webpack_require__("../../../../../src/app/grouparea/grouparea.component.html"),
            styles: [__webpack_require__("../../../../../src/app/grouparea/grouparea.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_2__services_currentgroup_service__["a" /* CurrentgroupService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__services_index__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_7__services_customer_service__["a" /* CustomerService */]])
    ], GroupareaComponent);
    return GroupareaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/groupstaircaseinfomodal/groupstaircaseinfomodal.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isShow\" [style.top.px]=\"y + 20\" [style.left.px]=\"x + 500\" class=\"groupstaircaseinfo\">\n  <table>\n    <thead>STEPS</thead>\n    <tbody>\n      <tr *ngFor=\"let staircase of groupstep.groupRoom.room.staircases\">\n        <div class=\"item-title\">{{staircase.numberOfSteps}} {{staircase.stairType}}</div>\n        <div class=\"itme-measurement\">{{calcMeasurementText(staircase)}}</div>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/groupstaircaseinfomodal/groupstaircaseinfomodal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".groupstaircaseinfo {\n  position: absolute; }\n  .groupstaircaseinfo table {\n    border: solid 2px;\n    width: 300px;\n    text-align: center;\n    background: white; }\n    .groupstaircaseinfo table thead {\n      color: #888;\n      font-weight: 700;\n      font-size: 20px; }\n    .groupstaircaseinfo table tbody tr {\n      border: solid 1px; }\n      .groupstaircaseinfo table tbody tr .item-title {\n        width: 50%;\n        float: left; }\n      .groupstaircaseinfo table tbody tr .item-measurement {\n        width: 50%;\n        float: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/groupstaircaseinfomodal/groupstaircaseinfomodal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupstaircaseinfomodalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__module_evented__ = __webpack_require__("../../../../../src/app/module/evented.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GroupstaircaseinfomodalComponent = (function () {
    function GroupstaircaseinfomodalComponent() {
        var _this = this;
        this.groupstep = null;
        this.isShow = false;
        this.x = 0;
        this.y = 0;
        __WEBPACK_IMPORTED_MODULE_1__module_evented__["a" /* Evented */].on('staircase clicked', function (e) {
            _this.groupstep = e.args;
            _this.isShow = _this.groupstep.groupRoom.SURFACE_IS_ACTIVE;
            var groupclientRect = _this.groupstep.group.getAbsolutePosition();
            _this.x = groupclientRect.x;
            _this.y = groupclientRect.y;
        });
    }
    GroupstaircaseinfomodalComponent.prototype.ngOnInit = function () {
    };
    GroupstaircaseinfomodalComponent.prototype.calcMeasurementText = function (staircase) {
        var inchSum = staircase.treadDepth1 + staircase.riserHeight1;
        var footSum = staircase.treadDepth2 + staircase.riserHeight2;
        if (footSum > 11) {
            footSum = footSum - 12;
            inchSum++;
        }
        return '' + inchSum + "'" + footSum + "\"" + ' * ' + staircase.stepWidth1 + "'" + staircase.stepWidth2 + "\"";
    };
    GroupstaircaseinfomodalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-groupstaircaseinfomodal',
            template: __webpack_require__("../../../../../src/app/groupstaircaseinfomodal/groupstaircaseinfomodal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/groupstaircaseinfomodal/groupstaircaseinfomodal.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GroupstaircaseinfomodalComponent);
    return GroupstaircaseinfomodalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/lengthchangedialog/lengthchangedialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='door-between-length-div length-change-div' \n      *ngIf=\"isShowbetweenDoor\" \n      [style.top.px]=\"betweenDoor.betweenMidPoint.y\"\n      [style.left.px]=\"betweenDoor.betweenMidPoint.x + 200\">\n  <div class=\"door-between-length-edit-box length-change-box\">\n    <input type='number' [(ngModel)]=\"betweendoorlength1\" [ngStyle]=\"validationdoorbetweenlength1()\">\n    <b>'</b>\n    <input type='number' [(ngModel)]=\"betweendoorlength2\" [ngStyle]=\"validationdoorbetweenlength2()\">\n    <b>\"</b>\n    <button (click)='betweendoorlengthsubmit()'>SUBMIT</button>\n  </div>\n</div>\n\n<!-- stepdown -->\n<div class='length-change-div' *ngIf=\"isShowStepDown\" [style.top.px]=\"stepdown.midPoint.y\" [style.left.px]=\"stepdown.midPoint.x + 200\">\n  <div class=\"length-change-box\">\n    <input type='number' [(ngModel)]=\"stepdownlength1\" [ngStyle]=\"validateStepDownLength1()\">\n    <b>'</b>\n    <input type='number' [(ngModel)]=\"stepdownlength2\" [ngStyle]=\"validateStepDownLength2()\">\n    <b>\"</b>\n    <button (click)=\"stepdownSubmit()\">SUBMIT</button>\n  </div>\n</div>\n\n<!-- stepdown for between-->\n<div class='length-change-div' *ngIf=\"isShowStepDownForBetween\" [style.top.px]=\"stepdownForBetween.betweenMidPoint.y\" [style.left.px]=\"stepdownForBetween.betweenMidPoint.x + 200\">\n  <div class=\"length-change-box\">\n    <input type='number' [(ngModel)]=\"stepdownForBetweenlength1\" [ngStyle]=\"validateStepDownForBetweenLength1()\">\n    <b>'</b>\n    <input type='number' [(ngModel)]=\"stepdownForBetweenlength2\" [ngStyle]=\"validateStepDownForBetweenLength2()\">\n    <b>\"</b>\n    <button (click)=\"stepdownForBetweenSubmit()\">SUBMIT</button>\n  </div>\n</div>\n\n<!-- roundwall-->\n<div class='length-change-div' *ngIf=\"isShowRoundWall\" [style.top.px]=\"roundwall.midPoint.y\" [style.left.px]=\"roundwall.midPoint.x + 200\">\n  <div class=\"length-change-box\">\n    <input type='number' [(ngModel)]=\"roundwallDiameter1\" [ngStyle]=\"validateroundwallDiameter1()\">\n    <b>'</b>\n    <input type='number' [(ngModel)]=\"roundwallDiameter2\" [ngStyle]=\"validateroundwallDiameter2()\">\n    <b>\"</b>\n    <button (click)=\"roundwallSubmit()\">SUBMIT</button>\n  </div>\n</div>\n\n<!-- wallcloset backline -->\n<div class='length-change-div' *ngIf=\"isShowWallCloset\" [style.top.px]=\"wallcloset.midPoint.y + 20\" [style.left.px]=\"wallcloset.midPoint.x + 200\">\n  <div class=\"length-change-box\">\n    <input type='number' [(ngModel)]=\"closetLength1\" [ngStyle]=\"validateFoot(closetLength1)\">\n    <b>'</b>\n    <input type='number' [(ngModel)]=\"closetLength2\" [ngStyle]=\"validateInch(closetLength2)\">\n    <b>\"</b>\n    <button (click)=\"closetSubmit()\">SUBMIT</button>\n  </div>\n</div>\n\n\n<!-- halfwall -->\n<div class='length-change-div' *ngIf=\"isShowHalfWall\" [style.top.px]=\"halfwall.midPoint.y + 20\" [style.left.px]=\"halfwall.midPoint.x + 220\">\n  <div class=\"length-change-box\">\n    <input type='number' [(ngModel)]=\"halfWallLength1\" [ngStyle]=\"validateFoot(halfWallLength1)\">\n    <b>'</b>\n    <input type='number' [(ngModel)]=\"halfWallLength2\" [ngStyle]=\"validateInch(halfWallLength2)\">\n    <b>\"</b>\n    <button (click)=\"halfWallSubmit()\">SUBMIT</button>\n  </div>\n</div>\n\n<!-- islandwall -->\n<div class='length-change-div' *ngIf=\"isShowIslandWall\" [style.top.px]=\"islandwall.midPoint.y + 20\" [style.left.px]=\"islandwall.midPoint.x + 220\">\n  <div class=\"length-change-box\">\n    <input type='number' [(ngModel)]=\"islandWallLength1\" [ngStyle]=\"validateFoot(islandWallLength1)\">\n    <b>'</b>\n    <input type='number' [(ngModel)]=\"islandWallLength2\" [ngStyle]=\"validateInch(islandWallLength2)\">\n    <b>\"</b>\n    <button (click)=\"islandWallSubmit()\">SUBMIT</button>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/lengthchangedialog/lengthchangedialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".length-change-div {\n  position: absolute; }\n  .length-change-div .length-change-box {\n    padding: 10px;\n    border: solid 1px #888;\n    border-radius: 5px;\n    background: #fff;\n    box-shadow: 4px 4px 5px -2px #888888; }\n    .length-change-div .length-change-box input {\n      width: 50px; }\n    .length-change-div .length-change-box button {\n      font-size: 12px;\n      border: solid 1px #888;\n      border-radius: 5px;\n      background: #fff;\n      cursor: pointer;\n      box-shadow: 4px 4px 5px -2px #888888; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lengthchangedialog/lengthchangedialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LengthchangedialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__module_evented__ = __webpack_require__("../../../../../src/app/module/evented.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_socket_service__ = __webpack_require__("../../../../../src/app/services/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__module_point__ = __webpack_require__("../../../../../src/app/module/point.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LengthchangedialogComponent = (function () {
    function LengthchangedialogComponent(socketService) {
        var _this = this;
        this.socketService = socketService;
        // between door part
        this.betweenDoor = null;
        this.isShowbetweenDoor = false;
        this.betweendoorlength1 = 0;
        this.betweendoorlength2 = 0;
        // stepdown  part
        this.stepdown = null;
        this.isShowStepDown = false;
        this.stepdownlength1 = 0;
        this.stepdownlength2 = 0;
        this.stepdownForBetween = null;
        this.isShowStepDownForBetween = false;
        this.stepdownForBetweenlength1 = 0;
        this.stepdownForBetweenlength2 = 0;
        // roundwall part
        this.roundwall = null;
        this.isShowRoundWall = false;
        this.roundwallDiameter1 = 0;
        this.roundwallDiameter2 = 0;
        // wallcloset part
        this.wallcloset = null;
        this.isShowWallCloset = false;
        this.closetLength1 = 0;
        this.closetLength2 = 0;
        // halfwall
        this.halfwall = null;
        this.isShowHalfWall = false;
        this.halfWallLength1 = 0;
        this.halfWallLength2 = 0;
        // islandwall
        this.islandwall = null;
        this.isShowIslandWall = false;
        this.islandWallLength1 = 0;
        this.islandWallLength2 = 0;
        var me = this;
        __WEBPACK_IMPORTED_MODULE_1__module_evented__["a" /* Evented */].on('door-between-length', function (e) {
            if (me.betweenDoor) {
                me.betweenDoor.showBetweenComponents(false);
            }
            me.betweenDoor = e.args;
            me.isShowbetweenDoor = me.betweenDoor.isShowBetweenLength;
            me.betweendoorlength1 = me.betweenDoor.betweenLength1;
            me.betweendoorlength2 = me.betweenDoor.betweenLength2;
            if (me.isShowbetweenDoor) {
                _this.socketService.sendMessage('betweendoor_' + me.betweenDoor.doorId);
            }
        });
        __WEBPACK_IMPORTED_MODULE_1__module_evented__["a" /* Evented */].on('stepdown-length-change', function (e) {
            if (me.stepdown) {
                me.stepdown.showBetweenComponent(false);
            }
            me.stepdown = e.args;
            me.isShowStepDown = me.stepdown.isEditing;
            me.stepdownlength1 = me.stepdown.lengthText1;
            me.stepdownlength2 = me.stepdown.lengthText2;
            if (me.isShowStepDown) {
                _this.socketService.sendMessage('stepdown_' + me.stepdown.stepdownId);
            }
        });
        __WEBPACK_IMPORTED_MODULE_1__module_evented__["a" /* Evented */].on('stepdown-between-length-change', function (e) {
            if (me.stepdownForBetween) {
                me.stepdownForBetween.showBetweenComponent(false);
            }
            me.stepdownForBetween = e.args;
            me.isShowStepDownForBetween = me.stepdownForBetween.isShowBetweenLength;
            me.stepdownForBetweenlength1 = me.stepdownForBetween.betweenLength1;
            me.stepdownForBetweenlength2 = me.stepdownForBetween.betweenLength2;
            if (me.isShowStepDownForBetween) {
                _this.socketService.sendMessage('stepdownbetween_' + me.stepdownForBetween.stepdownId);
            }
        });
        __WEBPACK_IMPORTED_MODULE_1__module_evented__["a" /* Evented */].on('roundwall diameter change', function (e) {
            me.roundwall = e.args;
            if (me.roundwall) {
                me.isShowRoundWall = me.roundwall.isShowDiameter;
                me.roundwallDiameter1 = me.roundwall.diameterText1;
                me.roundwallDiameter2 = me.roundwall.diameterText2;
                _this.socketService.sendMessage('roundwall_' + me.roundwall.roundWallId);
            }
            else {
                me.isShowRoundWall = false;
            }
        });
        // Evented.on('wallcloset-backline-change', (e: Event<WallCloset>) => {
        //   if (me.wallcloset) {
        //     me.wallcloset.backLineActive(false);
        //     me.wallcloset.sideLineActive(false);
        //   }
        //   me.wallcloset = e.args;
        //   if (me.wallcloset) {
        //     me.isShowWallCloset = me.wallcloset.isBackLineSelected;
        //     me.closetLength1 = me.wallcloset.backLength1;
        //     me.closetLength2 = me.wallcloset.backLength2;
        //     me.closetX = me.wallcloset.backLineMidPoint.x;
        //     me.closetY = me.wallcloset.backLineMidPoint.y;
        //     me.isWallClosetBackLine = true;
        //     this.socketService.sendMessage('backline_' + me.wallcloset.wallclosetId);
        //   } else {
        //     me.isShowWallCloset = false;
        //   }
        // });
        // Evented.on('wallcloset-sideline-change', (e: Event<WallCloset>) => {
        //   if (me.wallcloset) {
        //     me.wallcloset.backLineActive(false);
        //     me.wallcloset.sideLineActive(false);
        //   }
        //   me.wallcloset = e.args;
        //   if (me.wallcloset) {
        //     me.isShowWallCloset = me.wallcloset.isSideLineSelected;
        //     me.closetLength1 = me.wallcloset.sideLength1;
        //     me.closetLength2 = me.wallcloset.sideLength2;
        //     me.closetX = me.wallcloset.backLineMidPoint.x;
        //     me.closetY = me.wallcloset.backLineMidPoint.y;
        //     me.isWallClosetBackLine = false;
        //     this.socketService.sendMessage('sideline_' + me.wallcloset.wallclosetId);
        //   } else {
        //     me.isShowWallCloset = false;
        //   }
        // });
        __WEBPACK_IMPORTED_MODULE_1__module_evented__["a" /* Evented */].on('halfwall length change', function (e) {
            me.halfwall = e.args;
            me.isShowHalfWall = me.halfwall.isSelected;
            me.halfWallLength1 = me.halfwall.wallLength1;
            me.halfWallLength2 = me.halfwall.wallLength2;
            _this.socketService.sendMessage(me.halfwall.halfBasicWallId);
        });
        __WEBPACK_IMPORTED_MODULE_1__module_evented__["a" /* Evented */].on('islandwall length change', function (e) {
            me.islandwall = e.args;
            me.isShowIslandWall = me.islandwall.isSelected;
            me.islandWallLength1 = me.islandwall.wallLength1;
            me.islandWallLength2 = me.islandwall.wallLength2;
            _this.socketService.sendMessage(me.islandwall.islandBasicWallId);
        });
        __WEBPACK_IMPORTED_MODULE_1__module_evented__["a" /* Evented */].on('wallclosetbasicwall length change', function (e) {
            me.wallcloset = e.args;
            me.isShowWallCloset = me.wallcloset.isSelected;
            me.closetLength1 = me.wallcloset.wallLength1;
            me.closetLength2 = me.wallcloset.wallLength2;
            _this.socketService.sendMessage(me.wallcloset.wallClosetBasicWallId);
        });
        __WEBPACK_IMPORTED_MODULE_1__module_evented__["a" /* Evented */].on('length detect', function (e) {
            var data = e.args;
            if (me.isShowbetweenDoor && data.id === 'betweendoor_' + me.betweenDoor.doorId) {
                me.betweendoorlength1 = Number(data.foot);
                me.betweendoorlength2 = Number(data.inch);
            }
            if (me.isShowStepDown && data.id === 'stepdown_' + me.stepdown.stepdownId) {
                me.stepdownlength1 = Number(data.foot);
                me.stepdownlength2 = Number(data.inch);
            }
            if (me.isShowStepDownForBetween && data.id === 'stepdownbetween_' + me.stepdownForBetween.stepdownId) {
                me.stepdownForBetweenlength1 = Number(data.foot);
                me.stepdownForBetweenlength2 = Number(data.inch);
            }
            if (me.isShowRoundWall && data.id === 'roundwall_' + me.roundwall.roundWallId) {
                me.roundwallDiameter1 = Number(data.foot);
                me.roundwallDiameter2 = Number(data.inch);
            }
            if (me.wallcloset && me.isShowWallCloset && (data.id === me.wallcloset.wallClosetBasicWallId)) {
                me.closetLength1 = Number(data.foot);
                me.closetLength2 = Number(data.inch);
            }
            if (me.halfwall && me.isShowHalfWall && me.halfwall.halfBasicWallId === data.id) {
                me.halfWallLength1 = Number(data.foot);
                me.halfWallLength2 = Number(data.inch);
            }
            if (me.islandwall && me.isShowIslandWall && me.islandwall.islandBasicWallId === data.id) {
                me.islandWallLength1 = Number(data.foot);
                me.islandWallLength2 = Number(data.inch);
            }
        });
    }
    LengthchangedialogComponent.prototype.ngOnInit = function () {
    };
    // between door
    LengthchangedialogComponent.prototype.validationdoorbetweenlength1 = function () {
        var availablelength = this.betweenDoor.parentWall.calcLength() - this.betweenDoor.doorLength;
        var betweenlength = this.betweendoorlength1 * 36 + this.betweendoorlength2 * 3;
        if (this.betweendoorlength1 < 0 || availablelength < betweenlength) {
            return {
                'border': 'solid 2px red'
            };
        }
        else {
            return {};
        }
    };
    LengthchangedialogComponent.prototype.validationdoorbetweenlength2 = function () {
        var availablelength = this.betweenDoor.parentWall.calcLength() - this.betweenDoor.doorLength;
        var betweenlength = this.betweendoorlength1 * 36 + this.betweendoorlength2 * 3;
        if (this.betweendoorlength2 < 0 || this.betweendoorlength2 > 11 || availablelength < betweenlength) {
            return {
                'border': 'solid 2px red'
            };
        }
        else {
            return {};
        }
    };
    LengthchangedialogComponent.prototype.betweendoorlengthsubmit = function () {
        var availablelength = this.betweenDoor.parentWall.calcLength() - this.betweenDoor.doorLength;
        var betweenlength = this.betweendoorlength1 * 36 + this.betweendoorlength2 * 3;
        if (this.betweendoorlength1 < 0 || this.betweendoorlength2 < 0 || this.betweendoorlength2 > 11 || availablelength < betweenlength) {
            return;
        }
        var delta_length = this.betweenDoor.betweenLength - betweenlength;
        switch (this.betweenDoor.wallDirection) {
            case 'ltr':
                this.betweenDoor.clickedPoint.x += delta_length;
                break;
            case 'rtl':
                this.betweenDoor.clickedPoint.x -= delta_length;
                break;
            case 'ttd':
                this.betweenDoor.clickedPoint.y += delta_length;
                break;
            case 'dtt':
                this.betweenDoor.clickedPoint.y -= delta_length;
                break;
        }
        this.betweenDoor.redrawAll();
        this.isShowbetweenDoor = false;
        this.betweenDoor.isShowBetweenLength = false;
        this.betweenDoor.showBetweenComponents(false);
    };
    LengthchangedialogComponent.prototype.validateStepDownLength1 = function () {
        if (this.stepdownlength1 < 0 || this.stepdown.parentWall.calcLength() < (this.stepdownlength1 * 36 + this.stepdownlength2 * 3)) {
            return {
                'border': 'solid 2px red'
            };
        }
        else {
            return {};
        }
    };
    LengthchangedialogComponent.prototype.validateStepDownLength2 = function () {
        if (this.stepdownlength2 > 11 || this.stepdownlength2 < 0 ||
            this.stepdown.parentWall.calcLength() < (this.stepdownlength1 * 36 + this.stepdownlength2 * 3)) {
            return {
                'border': 'solid 2px red'
            };
        }
        else {
            return {};
        }
    };
    LengthchangedialogComponent.prototype.stepdownSubmit = function () {
        if (this.stepdownlength1 < 0 || this.stepdownlength2 < 0 || this.stepdownlength2 > 11
            || this.stepdown.parentWall.calcLength() < (this.stepdownlength1 * 36 + this.stepdownlength2 * 3)) {
            return;
        }
        this.stepdown.isEditing = false;
        this.isShowStepDown = false;
        this.stepdown.stepdownLength = this.stepdownlength1 * 12 * 3 + this.stepdownlength2 * 3;
        this.stepdown.redrawAll();
        this.stepdown.showBetweenComponent(false);
    };
    LengthchangedialogComponent.prototype.validateStepDownForBetweenLength1 = function () {
        var availablelength = this.stepdownForBetween.parentWall.calcLength() - this.stepdownForBetween.stepdownLength;
        var betweenlength = this.stepdownForBetweenlength1 * 36 + this.stepdownForBetweenlength2 * 3;
        if (this.stepdownForBetweenlength1 < 0 || availablelength < betweenlength) {
            return {
                'border': 'solid 2px red'
            };
        }
        else {
            return {};
        }
    };
    LengthchangedialogComponent.prototype.validateStepDownForBetweenLength2 = function () {
        var availablelength = this.stepdownForBetween.parentWall.calcLength() - this.stepdownForBetween.stepdownLength;
        var betweenlength = this.stepdownForBetweenlength1 * 36 + this.stepdownForBetweenlength2 * 3;
        if (this.stepdownForBetweenlength2 < 0 || this.stepdownForBetweenlength2 > 11 || availablelength < betweenlength) {
            return {
                'border': 'solid 2px red'
            };
        }
        else {
            return {};
        }
    };
    LengthchangedialogComponent.prototype.stepdownForBetweenSubmit = function () {
        var availablelength = this.stepdownForBetween.parentWall.calcLength() - this.stepdownForBetween.stepdownLength;
        var betweenlength = this.stepdownForBetweenlength1 * 36 + this.stepdownForBetweenlength2 * 3;
        if (this.stepdownForBetweenlength1 < 0 || this.stepdownForBetweenlength2 < 0 ||
            this.stepdownForBetweenlength2 > 11 || availablelength < betweenlength) {
            return;
        }
        var delta_length = this.stepdownForBetween.betweenLength - betweenlength;
        switch (this.stepdownForBetween.wallDirection) {
            case 'ltr':
                this.stepdownForBetween.clickedPoint.x += delta_length;
                break;
            case 'rtl':
                this.stepdownForBetween.clickedPoint.x -= delta_length;
                break;
            case 'ttd':
                this.stepdownForBetween.clickedPoint.y += delta_length;
                break;
            case 'dtt':
                this.stepdownForBetween.clickedPoint.y -= delta_length;
                break;
        }
        this.stepdownForBetween.redrawAll();
        this.isShowStepDownForBetween = false;
        this.stepdownForBetween.isShowBetweenLength = false;
        this.stepdownForBetween.showBetweenComponent(false);
    };
    LengthchangedialogComponent.prototype.validateroundwallDiameter1 = function () {
        if (this.roundwallDiameter1 < 0) {
            return {
                'border': 'solid 2px red'
            };
        }
        else {
            return {};
        }
    };
    LengthchangedialogComponent.prototype.validateroundwallDiameter2 = function () {
        if (this.roundwallDiameter2 < 0 || this.roundwallDiameter2 > 11) {
            return {
                'border': 'solid 2px red'
            };
        }
        else {
            return {};
        }
    };
    LengthchangedialogComponent.prototype.roundwallSubmit = function () {
        if (this.roundwallDiameter1 < 0 || this.roundwallDiameter2 < 0 || this.roundwallDiameter2 > 11) {
            return;
        }
        this.isShowRoundWall = false;
        this.roundwall.radius = (this.roundwallDiameter1 * 36 + this.roundwallDiameter2 * 3) / 2;
        this.roundwall.redrawAll();
    };
    // validateCloset1() {
    //   if (this.closetLength1 < 0) {
    //     return {
    //       'border': 'solid 2px red'
    //     };
    //   } else {
    //     return {};
    //   }
    // }
    // validateCloset2() {
    //   if (this.closetLength2 < 0 || this.closetLength2 > 11) {
    //     return {
    //       'border': 'solid 2px red'
    //     };
    //   } else {
    //     return {};
    //   }
    // }
    LengthchangedialogComponent.prototype.closetSubmit = function () {
        // this.isShowWallCloset = false;
        // this.wallcloset.isBackLineSelected = false;
        // this.wallcloset.isSideLineSelected = false;
        // this.wallcloset.backLineActive(false);
        // this.wallcloset.sideLineActive(false);
        // var length = this.closetLength1 * 36 + this.closetLength2 * 3;
        // if (this.isWallClosetBackLine) {
        //   this.wallcloset.backLength = length;
        // } else {
        //   this.wallcloset.sideLength = length;
        // }
        // this.wallcloset.redrawAll();
        if (this.closetLength1 < 0 || this.closetLength2 < 0 || this.closetLength2 > 11) {
            return;
        }
        // this.wallcloset.wallLength = this.closetLength1 * 36 + this.closetLength2 * 3;
        // this.wallcloset.isSelected = false;
        // this.wallcloset.redrawWallClosetBasicWall();
        // this.isShowWallCloset = false;
        // this.wallcloset.showStrecherComponents(false);
        this.wallcloset.wallLength = this.closetLength1 * 36 + this.closetLength2 * 3;
        this.wallcloset.isSelected = false;
        this.isShowWallCloset = false;
        if (this.wallcloset.endWall) {
            this.wallcloset.redrawWallClosetBasicWall();
            this.wallcloset.showStrecherComponents(false);
            var delta_x = this.wallcloset.endP.x - this.wallcloset.endWall.startP.x;
            var delta_y = this.wallcloset.endP.y - this.wallcloset.endWall.startP.y;
            this.wallcloset.endWall.startP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](this.wallcloset.endP.x, this.wallcloset.endP.y);
            this.wallcloset.endWall.endP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](this.wallcloset.endWall.endP.x + delta_x, this.wallcloset.endWall.endP.y + delta_y);
            this.wallcloset.endWall.redraw();
            if (this.wallcloset.endWall.endWall) {
                this.wallcloset.endWall.endWall.startP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](this.wallcloset.endWall.endP.x, this.wallcloset.endWall.endP.y);
                this.wallcloset.endWall.endWall.redraw();
            }
        }
        else if (this.wallcloset.startWall) {
            this.wallcloset.redrawWallClosetBasicWallForStartP();
            this.wallcloset.showStrecherComponents(false);
            var delta_x = this.wallcloset.startP.x - this.wallcloset.startWall.endP.x;
            var delta_y = this.wallcloset.startP.y - this.wallcloset.startWall.endP.y;
            this.wallcloset.startWall.endP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](this.wallcloset.startP.x, this.wallcloset.startP.y);
            this.wallcloset.startWall.startP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](this.wallcloset.startWall.startP.x + delta_x, this.wallcloset.startWall.startP.y + delta_y);
            this.wallcloset.startWall.redraw();
            if (this.wallcloset.startWall.startWall) {
                this.wallcloset.startWall.startWall.endP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](this.wallcloset.startWall.startP.x, this.wallcloset.startWall.startP.y);
                this.wallcloset.startWall.startWall.redraw();
            }
        }
        this.wallcloset.parentWallCloset.redrawAll();
    };
    LengthchangedialogComponent.prototype.validateFoot = function (foot) {
        if (foot < 0) {
            return {
                'border': 'solid 2px red'
            };
        }
        else {
            return {};
        }
    };
    LengthchangedialogComponent.prototype.validateInch = function (inch) {
        if (inch < 0 || inch > 11) {
            return {
                'border': 'solid 2px red'
            };
        }
        else {
            return {};
        }
    };
    LengthchangedialogComponent.prototype.halfWallSubmit = function () {
        if (this.halfWallLength1 < 0 || this.halfWallLength2 < 0 || this.halfWallLength2 > 11) {
            return;
        }
        this.halfwall.wallLength = this.halfWallLength1 * 36 + this.halfWallLength2 * 3;
        this.halfwall.isSelected = false;
        this.halfwall.redrawHalfBasicWall();
        this.isShowHalfWall = false;
        this.halfwall.showStrecherComponents(false);
        if (this.halfwall.endWall) {
            var delta_x = this.halfwall.endP.x - this.halfwall.endWall.startP.x;
            var delta_y = this.halfwall.endP.y - this.halfwall.endWall.startP.y;
            this.halfwall.endWall.startP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](this.halfwall.endP.x, this.halfwall.endP.y);
            this.halfwall.endWall.endP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](this.halfwall.endWall.endP.x + delta_x, this.halfwall.endWall.endP.y + delta_y);
            this.halfwall.endWall.redraw();
            if (this.halfwall.endWall.endWall) {
                this.halfwall.endWall.endWall.startP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](this.halfwall.endWall.endP.x, this.halfwall.endWall.endP.y);
                this.halfwall.endWall.endWall.redraw();
            }
        }
    };
    LengthchangedialogComponent.prototype.islandWallSubmit = function () {
        if (this.islandWallLength1 < 0 || this.islandWallLength2 < 0 || this.islandWallLength2 > 11) {
            return;
        }
        this.islandwall.wallLength = this.islandWallLength1 * 36 + this.islandWallLength2 * 3;
        this.islandwall.isSelected = false;
        this.islandwall.redrawIslandBasicWall();
        this.isShowIslandWall = false;
        this.islandwall.showStrecherComponents(false);
        if (this.islandwall.endWall) {
            var delta_x = this.islandwall.endP.x - this.islandwall.endWall.startP.x;
            var delta_y = this.islandwall.endP.y - this.islandwall.endWall.startP.y;
            this.islandwall.endWall.startP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](this.islandwall.endP.x, this.islandwall.endP.y);
            this.islandwall.endWall.endP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](this.islandwall.endWall.endP.x + delta_x, this.islandwall.endWall.endP.y + delta_y);
            this.islandwall.endWall.redraw();
            if (this.islandwall.endWall.endWall) {
                this.islandwall.endWall.endWall.startP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](this.islandwall.endWall.endP.x, this.islandwall.endWall.endP.y);
                this.islandwall.endWall.endWall.redraw();
            }
        }
        this.islandwall.parentIsland.redrawClosedLine();
    };
    LengthchangedialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lengthchangedialog',
            template: __webpack_require__("../../../../../src/app/lengthchangedialog/lengthchangedialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lengthchangedialog/lengthchangedialog.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_socket_service__["a" /* SocketService */]])
    ], LengthchangedialogComponent);
    return LengthchangedialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/living-room/living-room.component.html":
/***/ (function(module, exports) {

module.exports = "<app-wall *ngFor='let wall of walls ' \n    [stage]='stage'\n    [layer]='layer' \n    [_wall]='wall' \n    [changedTime]='wall.changedTime' \n    (lengthChangeEvent)='lengthChangeEvent($event)' \n    (clickMainLineEvent)='clickMainLineEvent($event)'\n    (strecherEvent)='strecherEvent($event)'>\n</app-wall>\n"

/***/ }),

/***/ "../../../../../src/app/living-room/living-room.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/living-room/living-room.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivingRoomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_konva__ = __webpack_require__("../../../../konva/konva.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_konva___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_konva__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__module_wall__ = __webpack_require__("../../../../../src/app/module/wall.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__module_point__ = __webpack_require__("../../../../../src/app/module/point.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_lockbutton_service__ = __webpack_require__("../../../../../src/app/services/lockbutton.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_strecherbutton_service__ = __webpack_require__("../../../../../src/app/services/strecherbutton.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_doorbutton_service__ = __webpack_require__("../../../../../src/app/services/doorbutton.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__module_door__ = __webpack_require__("../../../../../src/app/module/door.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_currentroom_service__ = __webpack_require__("../../../../../src/app/services/currentroom.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__module_evented__ = __webpack_require__("../../../../../src/app/module/evented.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__module_cornerpoint__ = __webpack_require__("../../../../../src/app/module/cornerpoint.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__module_roundwall__ = __webpack_require__("../../../../../src/app/module/roundwall.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__module_actionitem__ = __webpack_require__("../../../../../src/app/module/actionitem.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var LivingRoomComponent = (function () {
    function LivingRoomComponent(_lockButtonService, _strecherButtonService, _doorButtonService, _currentRoomService) {
        var _this = this;
        this._lockButtonService = _lockButtonService;
        this._strecherButtonService = _strecherButtonService;
        this._doorButtonService = _doorButtonService;
        this._currentRoomService = _currentRoomService;
        this.cornerPoints = [];
        this.subscribers = {};
        _currentRoomService.room$.subscribe(function (room) {
            _this.room = room;
            _this.walls = room.walls;
        });
        var me = this;
        this.subscribers.locksubscribe = _lockButtonService.lockButtonClicked$.subscribe(function (changedWall) {
            me.walls.map(function (wall) {
                if (wall.wallID === changedWall.wallID) {
                    wall = changedWall;
                    wall.changedTime = wall.changedTime = (new Date().getTime()).toString();
                }
            });
        });
        this.subscribers.strechersubscribe = _strecherButtonService.strecherButtonClicked$.subscribe(function (selectedWall) {
            me.strechWall(selectedWall);
        });
        this.subscribers.doorsubscribe = _doorButtonService.submitButtonClicked$.subscribe(function (data) {
            me.addDoorFunction(data);
        });
        __WEBPACK_IMPORTED_MODULE_9__module_evented__["a" /* Evented */].on('buttonrectclicked', function (e) {
            me.buttonRectClicked();
        });
        __WEBPACK_IMPORTED_MODULE_9__module_evented__["a" /* Evented */].on('buttonhouseclicked', function (e) {
            me.buttonHouseClicked();
        });
        __WEBPACK_IMPORTED_MODULE_9__module_evented__["a" /* Evented */].on('buttonroundclicked', function (e) {
            me.buttonRoundClicked();
        });
        __WEBPACK_IMPORTED_MODULE_9__module_evented__["a" /* Evented */].on('wall lengthchange event', function (e) {
            var oldWall = e.args;
            _this.walls.map(function (wall) {
                if (wall.wallID === oldWall.wallId) {
                    wall.startP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](oldWall.startP.x, oldWall.startP.y);
                    wall.endP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](oldWall.endP.x, oldWall.endP.y);
                    wall.changedTime = (new Date().getTime()).toString();
                }
            });
            _this.lengthChangeEvent({
                wallID: oldWall.wallId
            });
        });
        __WEBPACK_IMPORTED_MODULE_9__module_evented__["a" /* Evented */].on('undo add streching event', function (e) {
            _this.undoAddStreching(e.args);
        });
        __WEBPACK_IMPORTED_MODULE_9__module_evented__["a" /* Evented */].on('redo add streching event', function (e) {
            _this.walls.map(function (wall) {
                if (wall.wallID === e.args.oldObj[0].wallID) {
                    me.strechWall(wall);
                }
            });
        });
    }
    LivingRoomComponent.prototype.ngOnInit = function () {
        this.layer = new __WEBPACK_IMPORTED_MODULE_1_konva__["Layer"]();
        this._currentRoomService.layer = this.layer;
        var wall1 = new __WEBPACK_IMPORTED_MODULE_2__module_wall__["a" /* Wall */](new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](300, 300), new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](732, 300), '', '', '');
        var wall2 = new __WEBPACK_IMPORTED_MODULE_2__module_wall__["a" /* Wall */](new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](732, 300), new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](732, 732), '', '', '');
        var wall3 = new __WEBPACK_IMPORTED_MODULE_2__module_wall__["a" /* Wall */](new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](732, 732), new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](300, 732), '', '', '');
        var wall4 = new __WEBPACK_IMPORTED_MODULE_2__module_wall__["a" /* Wall */](new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](300, 732), new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](300, 300), '', '', '');
        wall1.startID = wall4.wallID;
        wall1.endID = wall2.wallID;
        wall1.relativeID = wall3.wallID;
        wall1.wallDirection = 'ltr';
        wall2.startID = wall1.wallID;
        wall2.endID = wall3.wallID;
        wall2.relativeID = wall4.wallID;
        wall2.wallDirection = 'ttd';
        wall3.startID = wall2.wallID;
        wall3.endID = wall4.wallID;
        wall3.relativeID = wall1.wallID;
        wall3.wallDirection = 'rtl';
        wall4.startID = wall3.wallID;
        wall4.endID = wall1.wallID;
        wall4.relativeID = wall2.wallID;
        wall4.wallDirection = 'dtt';
        this._currentRoomService.addWall(wall1);
        this._currentRoomService.addWall(wall2);
        this._currentRoomService.addWall(wall3);
        this._currentRoomService.addWall(wall4);
        this.cornerPoints.push(new __WEBPACK_IMPORTED_MODULE_10__module_cornerpoint__["a" /* CornerPoint */](wall1, wall4, this._currentRoomService));
        this.cornerPoints.push(new __WEBPACK_IMPORTED_MODULE_10__module_cornerpoint__["a" /* CornerPoint */](wall2, wall1, this._currentRoomService));
        this.cornerPoints.push(new __WEBPACK_IMPORTED_MODULE_10__module_cornerpoint__["a" /* CornerPoint */](wall3, wall2, this._currentRoomService));
        this.cornerPoints.push(new __WEBPACK_IMPORTED_MODULE_10__module_cornerpoint__["a" /* CornerPoint */](wall4, wall3, this._currentRoomService));
        this.stage.add(this.layer);
        this.stageEventInit();
    };
    LivingRoomComponent.prototype.ngAfterContentInit = function () {
    };
    LivingRoomComponent.prototype.lengthChangeEvent = function (data) {
        var me = this;
        console.log(data);
        this.walls.map(function (wall) {
            if (wall.wallID === data.wallID) {
                // wall.wallID = wall.wallID;
                wall.changedTime = (new Date().getTime()).toString();
                me.changeStartWall(wall, data);
                me.changeEndWall(wall, data);
                // me.changeRelatedWall(wall, data);
                me.changeNextWall(wall, data);
            }
        });
        __WEBPACK_IMPORTED_MODULE_9__module_evented__["a" /* Evented */].fire('wall length change');
    };
    LivingRoomComponent.prototype.changeStartWall = function (changedWall, data) {
        this.walls.map(function (wall) {
            if (wall.wallID === changedWall.startID) {
                // wall.endP = new Point(changedWall.startP.x + data.delta.x, changedWall.startP.y + data.delta.y);
                switch (changedWall.wallDirection) {
                    case 'ltr':
                        wall.endP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](changedWall.startP.x, changedWall.startP.y);
                        break;
                    case 'rtl':
                        wall.endP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](changedWall.startP.x, changedWall.startP.y);
                        if (wall.wallDirection !== 'rtl' && wall.wallDirection !== 'other') {
                            wall.startP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](changedWall.startP.x, wall.startP.y);
                        }
                        break;
                    case 'ttd':
                        wall.endP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](changedWall.startP.x, changedWall.startP.y);
                        break;
                    case 'dtt':
                        wall.endP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](changedWall.startP.x, changedWall.startP.y);
                        if (wall.wallDirection !== 'dtt' && wall.wallDirection !== 'other') {
                            wall.startP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](wall.startP.x, changedWall.startP.y);
                        }
                        break;
                    case 'other':
                        wall.endP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](changedWall.startP.x, changedWall.startP.y);
                        break;
                    default:
                        break;
                }
                wall.changedTime = (new Date().getTime()).toString();
            }
        });
    };
    LivingRoomComponent.prototype.changeEndWall = function (changedWall, data) {
        this.walls.map(function (wall) {
            if (wall.wallID === changedWall.endID) {
                switch (changedWall.wallDirection) {
                    case 'ltr':
                        wall.startP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](changedWall.endP.x, changedWall.endP.y);
                        if (wall.wallDirection !== 'ltr' && wall.wallDirection !== 'other') {
                            wall.endP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](changedWall.endP.x, wall.endP.y);
                        }
                        break;
                    case 'rtl':
                        wall.startP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](changedWall.endP.x, changedWall.endP.y);
                        break;
                    case 'ttd':
                        wall.startP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](changedWall.endP.x, changedWall.endP.y);
                        if (wall.wallDirection !== 'ttd' && wall.wallDirection !== 'other') {
                            wall.endP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](wall.endP.x, changedWall.endP.y);
                        }
                        break;
                    case 'dtt':
                        wall.startP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](changedWall.endP.x, changedWall.endP.y);
                        break;
                    case 'other':
                        wall.startP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](changedWall.endP.x, changedWall.endP.y);
                        if (wall.wallDirection === 'other') {
                            wall.endP.x += changedWall.deltaForLengthChange.d_x;
                            wall.endP.y += changedWall.deltaForLengthChange.d_y;
                        }
                        break;
                    default:
                        break;
                }
                wall.changedTime = (new Date().getTime()).toString();
            }
        });
    };
    LivingRoomComponent.prototype.changeRelatedWall = function (changedWall, data) {
        this.walls.map(function (wall) {
            if (wall.wallID === changedWall.relativeID) {
                wall.changedTime = (new Date().getTime()).toString();
                switch (changedWall.wallDirection) {
                    case 'ltr':
                        if (wall.wallDirection === 'rtl') {
                            wall.startP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](changedWall.endP.x, wall.startP.y);
                        }
                        else if (wall.wallDirection === 'ltr') {
                            wall.endP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](changedWall.endP.x, wall.endP.y);
                        }
                        break;
                    case 'rtl':
                        if (wall.wallDirection === 'rtl') {
                            wall.startP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](changedWall.startP.x, wall.startP.y);
                        }
                        else if (wall.wallDirection === 'ltr') {
                            wall.endP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](changedWall.startP.x, wall.endP.y);
                        }
                        break;
                    case 'ttd':
                        if (wall.wallDirection === 'ttd') {
                            wall.endP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](wall.endP.x, changedWall.endP.y);
                        }
                        else if (wall.wallDirection === 'dtt') {
                            wall.startP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](wall.startP.x, changedWall.endP.y);
                        }
                        break;
                    case 'dtt':
                        if (wall.wallDirection === 'ttd') {
                            wall.endP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](wall.endP.x, changedWall.startP.y);
                        }
                        else if (wall.wallDirection === 'dtt') {
                            wall.startP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](wall.startP.x, changedWall.startP.y);
                        }
                        break;
                    default:
                        break;
                }
            }
        });
    };
    LivingRoomComponent.prototype.changeNextWall = function (changedWall, data) {
        var me = this;
        switch (changedWall.wallDirection) {
            case 'ltr':
                me.walls.map(function (wall) {
                    if (changedWall.endID === wall.wallID) {
                        me.walls.map(function (wall_) {
                            if (wall.endID === wall_.wallID) {
                                wall_.changedTime = (new Date().getTime()).toString();
                                wall_.startP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](wall.endP.x, wall.endP.y);
                            }
                        });
                    }
                });
                break;
            case 'rtl':
                me.walls.map(function (wall) {
                    if (changedWall.startID === wall.wallID) {
                        me.walls.map(function (wall_) {
                            if (wall.startID === wall_.wallID) {
                                wall_.changedTime = (new Date().getTime()).toString();
                                wall_.endP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](wall.startP.x, wall.startP.y);
                            }
                        });
                    }
                });
                break;
            case 'ttd':
                me.walls.map(function (wall) {
                    if (changedWall.endID === wall.wallID) {
                        me.walls.map(function (wall_) {
                            if (wall.endID === wall_.wallID) {
                                wall_.changedTime = (new Date().getTime()).toString();
                                wall_.startP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](wall.endP.x, wall.endP.y);
                            }
                        });
                    }
                });
                break;
            case 'dtt':
                me.walls.map(function (wall) {
                    if (changedWall.startID === wall.wallID) {
                        me.walls.map(function (wall_) {
                            if (wall.startID === wall_.wallID) {
                                wall_.changedTime = (new Date().getTime()).toString();
                                wall_.endP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](wall.startP.x, wall.startP.y);
                            }
                        });
                    }
                });
                break;
            case 'other':
                me.walls.map(function (wall) {
                    if (changedWall.endID === wall.wallID) {
                        me.walls.map(function (wall_) {
                            if (wall.endID === wall_.wallID) {
                                wall_.changedTime = (new Date().getTime()).toString();
                                wall_.startP.x += changedWall.deltaForLengthChange.d_x;
                                wall_.startP.y += changedWall.deltaForLengthChange.d_y;
                            }
                        });
                    }
                });
                break;
            default:
                break;
        }
    };
    LivingRoomComponent.prototype.stageEventInit = function () {
        this.stage.on('click', function () {
        });
        this.stage.on('contentClick.foo', function (evt) {
        });
    };
    LivingRoomComponent.prototype.clickMainLineEvent = function (data) {
        this.walls.map(function (wall) {
            if (data.clickedWallId === wall.wallID) {
                wall.changedTime = (new Date().getTime()).toString();
            }
            else if (wall.isSelected) {
                wall.changedTime = (new Date().getTime()).toString();
                wall.isSelected = false;
            }
        });
    };
    LivingRoomComponent.prototype.strechWall = function (selectedWall) {
        var actionItem = new __WEBPACK_IMPORTED_MODULE_12__module_actionitem__["a" /* ActionItem */]();
        actionItem.actionId = this._currentRoomService.undoredo.getCountActionItems();
        actionItem.actionKind = 'strechingadd';
        actionItem.oldObj.push({
            wallID: selectedWall.wallID,
            startP: new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](selectedWall.startP.x, selectedWall.startP.y),
            endP: new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](selectedWall.endP.x, selectedWall.endP.y),
            startID: selectedWall.startID,
            endID: selectedWall.endID
        });
        var me = this;
        selectedWall.changedTime = (new Date().getTime()).toString();
        var strecherEndP = this.calcStrechWallEndP(selectedWall);
        var strecherWall = new __WEBPACK_IMPORTED_MODULE_2__module_wall__["a" /* Wall */](new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](selectedWall.startP.x, selectedWall.startP.y), strecherEndP, '', '', '');
        selectedWall.startP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](strecherEndP.x, strecherEndP.y);
        selectedWall.isSelected = false;
        selectedWall.relativeID = null;
        var startPWall1 = new __WEBPACK_IMPORTED_MODULE_2__module_wall__["a" /* Wall */](new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](strecherWall.startP.x, strecherWall.startP.y), new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](strecherWall.startP.x, strecherWall.startP.y), '', '', '');
        var startPWall2 = new __WEBPACK_IMPORTED_MODULE_2__module_wall__["a" /* Wall */](new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](strecherWall.startP.x, strecherWall.startP.y), new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](strecherWall.startP.x, strecherWall.startP.y), '', '', '');
        var endPWall1 = new __WEBPACK_IMPORTED_MODULE_2__module_wall__["a" /* Wall */](new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](strecherWall.endP.x, strecherWall.endP.y), new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](strecherWall.endP.x, strecherWall.endP.y), '', '', '');
        me.walls.map(function (wall_) {
            if (wall_.wallID === selectedWall.startID) {
                wall_.endID = startPWall1.wallID;
            }
        });
        startPWall1.startID = selectedWall.startID;
        startPWall1.endID = startPWall2.wallID;
        startPWall1.wallDirection = selectedWall.wallDirection;
        startPWall2.startID = startPWall1.wallID;
        startPWall2.endID = strecherWall.wallID;
        startPWall2.wallDirection = startPWall1.wallDirection === 'ltr' || startPWall1.wallDirection == 'rtl' ? 'ttd' : 'dtt';
        strecherWall.startID = startPWall2.wallID;
        strecherWall.endID = endPWall1.wallID;
        strecherWall.isSelected = true;
        strecherWall.isStreching = true;
        endPWall1.startID = strecherWall.wallID;
        endPWall1.endID = selectedWall.wallID;
        selectedWall.startID = endPWall1.wallID;
        this.walls.push(startPWall1);
        this.walls.push(startPWall2);
        this.walls.push(strecherWall);
        this.walls.push(endPWall1);
        // cornerpoints cut add and redraw
        var tempcornerpoint1 = new __WEBPACK_IMPORTED_MODULE_10__module_cornerpoint__["a" /* CornerPoint */](startPWall2, startPWall1, this._currentRoomService);
        var tempcornerpoint2 = new __WEBPACK_IMPORTED_MODULE_10__module_cornerpoint__["a" /* CornerPoint */](strecherWall, startPWall2, this._currentRoomService);
        var tempcornerpoint3 = new __WEBPACK_IMPORTED_MODULE_10__module_cornerpoint__["a" /* CornerPoint */](endPWall1, strecherWall, this._currentRoomService);
        var tempcornerpoint4 = new __WEBPACK_IMPORTED_MODULE_10__module_cornerpoint__["a" /* CornerPoint */](selectedWall, endPWall1, this._currentRoomService);
        this.cornerPoints.push(tempcornerpoint1);
        this.cornerPoints.push(tempcornerpoint2);
        this.cornerPoints.push(tempcornerpoint3);
        this.cornerPoints.push(tempcornerpoint4);
        actionItem.newObj.push({
            wallID: selectedWall.wallID,
            startP: new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](selectedWall.startP.x, selectedWall.startP.y),
            endP: new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](selectedWall.endP.x, selectedWall.endP.y),
            startID: selectedWall.startID,
            endID: selectedWall.endID
        });
        actionItem.newObj.push({
            wallID: startPWall1.wallID,
            startP: new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](startPWall1.startP.x, startPWall1.startP.y),
            endP: new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](startPWall1.endP.x, startPWall1.endP.y),
            startID: startPWall1.startID,
            endID: startPWall1.endID
        });
        actionItem.newObj.push({
            wallID: startPWall2.wallID,
            startP: new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](startPWall2.startP.x, startPWall2.startP.y),
            endP: new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](startPWall2.endP.x, startPWall2.endP.y),
            startID: startPWall2.startID,
            endID: startPWall2.endID
        });
        actionItem.newObj.push({
            wallID: strecherWall.wallID,
            startP: new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](strecherWall.startP.x, strecherWall.startP.y),
            endP: new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](strecherWall.endP.x, strecherWall.endP.y),
            startID: strecherWall.startID,
            endID: strecherWall.endID
        });
        actionItem.newObj.push({
            wallID: endPWall1.wallID,
            startP: new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](endPWall1.startP.x, endPWall1.startP.y),
            endP: new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](endPWall1.endP.x, endPWall1.endP.y),
            startID: endPWall1.startID,
            endID: endPWall1.endID
        });
        actionItem.newObj.push({
            cornerPointId: tempcornerpoint1.cornerPointId,
            startID: tempcornerpoint1.startWall.wallID,
            endID: tempcornerpoint1.endWall.wallID
        });
        actionItem.newObj.push({
            cornerPointId: tempcornerpoint2.cornerPointId,
            startID: tempcornerpoint2.startWall.wallID,
            endID: tempcornerpoint2.endWall.wallID
        });
        actionItem.newObj.push({
            cornerPointId: tempcornerpoint3.cornerPointId,
            startID: tempcornerpoint3.startWall.wallID,
            endID: tempcornerpoint3.endWall.wallID
        });
        actionItem.newObj.push({
            cornerPointId: tempcornerpoint4.cornerPointId,
            startID: tempcornerpoint4.startWall.wallID,
            endID: tempcornerpoint4.endWall.wallID
        });
        this.cornerPoints.map(function (cornerpoint) {
            if (cornerpoint.endWall.wallID === selectedWall.wallID) {
                actionItem.oldObj.push({
                    cornerPointId: cornerpoint.cornerPointId,
                    startID: cornerpoint.startWall.wallID,
                    endID: cornerpoint.endWall.wallID
                });
                cornerpoint.startWall = startPWall1;
                cornerpoint.redrawAll();
                actionItem.newObj.push({
                    cornerPointId: cornerpoint.cornerPointId,
                    startID: cornerpoint.startWall.wallID,
                    endID: cornerpoint.endWall.wallID
                });
            }
        });
        this._currentRoomService.undoredo.addActionItem(actionItem);
    };
    LivingRoomComponent.prototype.calcStrechWallEndP = function (selectedWall) {
        switch (selectedWall.wallDirection) {
            case 'ltr':
                return new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](selectedWall.startP.x + 42 * 3, selectedWall.startP.y);
            case 'rtl':
                return new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](selectedWall.startP.x - 42 * 3, selectedWall.startP.y);
            case 'ttd':
                return new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](selectedWall.startP.x, selectedWall.startP.y + 42 * 3);
            case 'dtt':
                return new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](selectedWall.startP.x, selectedWall.startP.y - 42 * 3);
            case 'other':
                // var tan_a = (selectedWall.endP.y - selectedWall.startP.y) / (selectedWall.endP.x - selectedWall.startP.x);
                // var alpha = Math.atan(tan_a);
                // console.log(Math.cos(alpha));
                // console.log(Math.sin(alpha));
                // var d = Math.sqrt((selectedWall.endP.x - selectedWall.startP.x) * (selectedWall.endP.x - selectedWall.startP.x) +
                //         (selectedWall.endP.y - selectedWall.startP.y) * (selectedWall.endP.y - selectedWall.startP.y));
                var dx = selectedWall.endP.x - selectedWall.startP.x;
                var dy = selectedWall.endP.y - selectedWall.startP.y;
                var d = Math.sqrt(dx * dx + dy * dy);
                var t = 42 * 3 / d;
                var dx1 = t * dx;
                var dy1 = t * dy;
                // return new Point(selectedWall.startP.x + 42 * 3 * Math.cos(alpha), selectedWall.endP.y - 42 * 3 * Math.sin(alpha));
                return new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](selectedWall.startP.x + dx1, selectedWall.startP.y + dy1);
            default:
                break;
        }
    };
    LivingRoomComponent.prototype.strecherEvent = function (selectedWall) {
        var me = this;
        selectedWall.changedTime = (new Date().getTime()).toString();
        me.strechStartWall(selectedWall);
        me.strechEndWall(selectedWall);
        this.cornerPoints.map(function (cornerpoint) {
            cornerpoint.redrawAll();
        });
    };
    LivingRoomComponent.prototype.strechStartWall = function (selectedWall) {
        var me = this;
        me.walls.map(function (wall) {
            if (wall.wallID === selectedWall.startID) {
                wall.changedTime = (new Date().getTime()).toString();
                switch (selectedWall.wallDirection) {
                    case 'ltr':
                        wall.endP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](selectedWall.startP.x, selectedWall.startP.y);
                        wall.startP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](selectedWall.startP.x, wall.startP.y);
                        break;
                    case 'rtl':
                        wall.endP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](selectedWall.startP.x, selectedWall.startP.y);
                        wall.startP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](selectedWall.startP.x, wall.startP.y);
                        break;
                    case 'ttd':
                        wall.endP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](selectedWall.startP.x, selectedWall.startP.y);
                        wall.startP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](wall.startP.x, selectedWall.startP.y);
                        break;
                    case 'dtt':
                        wall.endP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](selectedWall.startP.x, selectedWall.startP.y);
                        wall.startP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](wall.startP.x, selectedWall.startP.y);
                        break;
                    case 'other':
                        wall.endP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](selectedWall.startP.x, selectedWall.startP.y);
                        var tanA = -(selectedWall.endP.y - selectedWall.startP.y) / (selectedWall.endP.x - selectedWall.startP.x);
                        var dx = (selectedWall.deltaForStreching.d_x - selectedWall.deltaForStreching.d_y * tanA) / (1 + tanA * tanA);
                        wall.startP.x += dx;
                        wall.startP.y -= dx * tanA;
                        break;
                    default:
                        break;
                }
                me.strechStartStartWall(selectedWall, wall);
            }
        });
    };
    LivingRoomComponent.prototype.strechStartStartWall = function (selectedWall, startWall) {
        var me = this;
        me.walls.map(function (wall) {
            if (startWall.startID === wall.wallID) {
                wall.changedTime = (new Date().getTime()).toString();
                wall.endP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](startWall.startP.x, startWall.startP.y);
            }
        });
    };
    LivingRoomComponent.prototype.strechEndWall = function (selectedWall) {
        var me = this;
        me.walls.map(function (wall) {
            if (wall.wallID === selectedWall.endID) {
                wall.changedTime = (new Date().getTime()).toString();
                switch (selectedWall.wallDirection) {
                    case 'ltr':
                        wall.endP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](selectedWall.endP.x, wall.endP.y);
                        wall.startP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](selectedWall.endP.x, selectedWall.endP.y);
                        break;
                    case 'rtl':
                        wall.endP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](selectedWall.endP.x, wall.endP.y);
                        wall.startP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](selectedWall.endP.x, selectedWall.endP.y);
                        break;
                    case 'ttd':
                        wall.endP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](wall.endP.x, selectedWall.endP.y);
                        wall.startP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](selectedWall.endP.x, selectedWall.endP.y);
                        break;
                    case 'dtt':
                        wall.endP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](wall.endP.x, selectedWall.endP.y);
                        wall.startP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](selectedWall.endP.x, selectedWall.endP.y);
                        break;
                    case 'other':
                        wall.startP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](selectedWall.endP.x, selectedWall.endP.y);
                        var tanA = -(selectedWall.endP.y - selectedWall.startP.y) / (selectedWall.endP.x - selectedWall.startP.x);
                        var dx = (selectedWall.deltaForStreching.d_x - selectedWall.deltaForStreching.d_y * tanA) / (1 + tanA * tanA);
                        wall.endP.x += dx;
                        wall.endP.y -= dx * tanA;
                        break;
                    default:
                        break;
                }
                me.strechEndEndWall(selectedWall, wall);
            }
        });
    };
    LivingRoomComponent.prototype.strechEndEndWall = function (selectedWall, endWall) {
        var me = this;
        me.walls.map(function (wall) {
            if (wall.wallID === endWall.endID) {
                wall.changedTime = (new Date().getTime()).toString();
                wall.startP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](endWall.endP.x, endWall.endP.y);
            }
        });
    };
    LivingRoomComponent.prototype.addDoorFunction = function (data) {
        var actionItem = new __WEBPACK_IMPORTED_MODULE_12__module_actionitem__["a" /* ActionItem */]();
        actionItem.actionId = this._currentRoomService.undoredo.getCountActionItems();
        actionItem.actionKind = 'adddoor';
        actionItem.oldObj.push({
            wallID: data.selectedWall.wallID,
            startP: new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](data.selectedWall.startP.x, data.selectedWall.startP.y),
            endP: new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](data.selectedWall.endP.x, data.selectedWall.endP.y)
        });
        var temp_door = new __WEBPACK_IMPORTED_MODULE_7__module_door__["a" /* Door */](data, this.layer, this._doorButtonService);
        data.selectedWall.doors.push(temp_door);
        var delta_x = 0, delta_y = 0;
        var startWall, endWall;
        this.walls.map(function (wall) {
            if (wall.wallID === data.selectedWall.startID) {
                startWall = wall;
            }
            else if (wall.wallID === data.selectedWall.endID) {
                endWall = wall;
            }
        });
        if (data.selectedWall.doors.length <= 1) {
            switch (data.selectedWall.wallDirection) {
                case 'ltr':
                    if (endWall.wallDirection === 'ttd') {
                        delta_y = -3 * 3;
                    }
                    else if (endWall.wallDirection === 'dtt') {
                        delta_y = 3 * 3;
                    }
                    break;
                case 'rtl':
                    if (startWall.wallDirection === 'ttd') {
                        delta_y = 3 * 3;
                    }
                    else if (startWall.wallDirection === 'dtt') {
                        delta_y = -3 * 3;
                    }
                    break;
                case 'ttd':
                    if (endWall.wallDirection === 'rtl') {
                        delta_x = 3 * 3;
                    }
                    else if (endWall.wallDirection === 'ltr') {
                        delta_x = -3 * 3;
                    }
                    break;
                case 'dtt':
                    if (startWall.wallDirection === 'rtl') {
                        delta_x = -3 * 3;
                    }
                    else if (startWall.wallDirection === 'ltr') {
                        delta_x = 3 * 3;
                    }
                    break;
                default:
                    break;
            }
            data.selectedWall.isSelected = false;
            data.selectedWall.startP.x += delta_x;
            data.selectedWall.startP.y += delta_y;
            data.selectedWall.endP.x += delta_x;
            data.selectedWall.endP.y += delta_y;
            data.selectedWall.changedTime = (new Date().getTime()).toString();
            startWall.endP.x = data.selectedWall.startP.x;
            startWall.endP.y = data.selectedWall.startP.y;
            startWall.changedTime = (new Date().getTime()).toString();
            endWall.startP.x = data.selectedWall.endP.x;
            endWall.startP.y = data.selectedWall.endP.y;
            endWall.changedTime = (new Date().getTime()).toString();
        }
        actionItem.newObj.push({
            wallID: data.selectedWall.wallID,
            startP: new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](data.selectedWall.startP.x, data.selectedWall.startP.y),
            endP: new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](data.selectedWall.endP.x, data.selectedWall.endP.y)
        });
        actionItem.newObj.push({
            doorId: temp_door.doorId
        });
    };
    LivingRoomComponent.prototype.ngOnDestroy = function () {
        this.subscribers.strechersubscribe.unsubscribe();
        this.subscribers.locksubscribe.unsubscribe();
        this.subscribers.doorsubscribe.unsubscribe();
    };
    LivingRoomComponent.prototype.buttonRectClicked = function () {
        this.removeAll();
        var wall1 = new __WEBPACK_IMPORTED_MODULE_2__module_wall__["a" /* Wall */](new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](300, 300), new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](732, 300), '', '', '');
        var wall2 = new __WEBPACK_IMPORTED_MODULE_2__module_wall__["a" /* Wall */](new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](732, 300), new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](732, 732), '', '', '');
        var wall3 = new __WEBPACK_IMPORTED_MODULE_2__module_wall__["a" /* Wall */](new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](732, 732), new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](300, 732), '', '', '');
        var wall4 = new __WEBPACK_IMPORTED_MODULE_2__module_wall__["a" /* Wall */](new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](300, 732), new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](300, 300), '', '', '');
        wall1.startID = wall4.wallID;
        wall1.endID = wall2.wallID;
        wall1.relativeID = wall3.wallID;
        wall1.wallDirection = 'ltr';
        wall2.startID = wall1.wallID;
        wall2.endID = wall3.wallID;
        wall2.relativeID = wall4.wallID;
        wall2.wallDirection = 'ttd';
        wall3.startID = wall2.wallID;
        wall3.endID = wall4.wallID;
        wall3.relativeID = wall1.wallID;
        wall3.wallDirection = 'rtl';
        wall4.startID = wall3.wallID;
        wall4.endID = wall1.wallID;
        wall4.relativeID = wall2.wallID;
        wall4.wallDirection = 'dtt';
        this._currentRoomService.addWall(wall1);
        this._currentRoomService.addWall(wall2);
        this._currentRoomService.addWall(wall3);
        this._currentRoomService.addWall(wall4);
        this.cornerPoints.push(new __WEBPACK_IMPORTED_MODULE_10__module_cornerpoint__["a" /* CornerPoint */](wall1, wall4, this._currentRoomService));
        this.cornerPoints.push(new __WEBPACK_IMPORTED_MODULE_10__module_cornerpoint__["a" /* CornerPoint */](wall2, wall1, this._currentRoomService));
        this.cornerPoints.push(new __WEBPACK_IMPORTED_MODULE_10__module_cornerpoint__["a" /* CornerPoint */](wall3, wall2, this._currentRoomService));
        this.cornerPoints.push(new __WEBPACK_IMPORTED_MODULE_10__module_cornerpoint__["a" /* CornerPoint */](wall4, wall3, this._currentRoomService));
    };
    LivingRoomComponent.prototype.buttonHouseClicked = function () {
        this.removeAll();
        var wall1 = new __WEBPACK_IMPORTED_MODULE_2__module_wall__["a" /* Wall */](new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](408, 300), new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](624, 300), '', '', '');
        var wall2 = new __WEBPACK_IMPORTED_MODULE_2__module_wall__["a" /* Wall */](new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](624, 300), new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](732, 444), '', '', '');
        var wall3 = new __WEBPACK_IMPORTED_MODULE_2__module_wall__["a" /* Wall */](new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](732, 444), new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](732, 732), '', '', '');
        var wall4 = new __WEBPACK_IMPORTED_MODULE_2__module_wall__["a" /* Wall */](new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](732, 732), new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](300, 732), '', '', '');
        var wall5 = new __WEBPACK_IMPORTED_MODULE_2__module_wall__["a" /* Wall */](new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](300, 732), new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](300, 444), '', '', '');
        var wall6 = new __WEBPACK_IMPORTED_MODULE_2__module_wall__["a" /* Wall */](new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](300, 444), new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](408, 300), '', '', '');
        wall1.startID = wall6.wallID;
        wall1.endID = wall2.wallID;
        wall1.wallDirection = 'ltr';
        wall2.startID = wall1.wallID;
        wall2.endID = wall3.wallID;
        wall2.wallDirection = 'other';
        wall3.startID = wall2.wallID;
        wall3.endID = wall4.wallID;
        wall3.wallDirection = 'ttd';
        wall4.startID = wall3.wallID;
        wall4.endID = wall5.wallID;
        wall4.wallDirection = 'rtl';
        wall5.startID = wall4.wallID;
        wall5.endID = wall6.wallID;
        wall5.wallDirection = 'dtt';
        wall6.startID = wall5.wallID;
        wall6.endID = wall1.wallID;
        wall6.wallDirection = 'other';
        this._currentRoomService.addWall(wall1);
        this._currentRoomService.addWall(wall2);
        this._currentRoomService.addWall(wall3);
        this._currentRoomService.addWall(wall4);
        this._currentRoomService.addWall(wall5);
        this._currentRoomService.addWall(wall6);
        this.cornerPoints.push(new __WEBPACK_IMPORTED_MODULE_10__module_cornerpoint__["a" /* CornerPoint */](wall1, wall6, this._currentRoomService));
        this.cornerPoints.push(new __WEBPACK_IMPORTED_MODULE_10__module_cornerpoint__["a" /* CornerPoint */](wall2, wall1, this._currentRoomService));
        this.cornerPoints.push(new __WEBPACK_IMPORTED_MODULE_10__module_cornerpoint__["a" /* CornerPoint */](wall3, wall2, this._currentRoomService));
        this.cornerPoints.push(new __WEBPACK_IMPORTED_MODULE_10__module_cornerpoint__["a" /* CornerPoint */](wall4, wall3, this._currentRoomService));
        this.cornerPoints.push(new __WEBPACK_IMPORTED_MODULE_10__module_cornerpoint__["a" /* CornerPoint */](wall5, wall4, this._currentRoomService));
        this.cornerPoints.push(new __WEBPACK_IMPORTED_MODULE_10__module_cornerpoint__["a" /* CornerPoint */](wall6, wall5, this._currentRoomService));
    };
    LivingRoomComponent.prototype.buttonRoundClicked = function () {
        this.removeAll();
        var roundWall = new __WEBPACK_IMPORTED_MODULE_11__module_roundwall__["a" /* RoundWall */](new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](500, 500), 396, this._currentRoomService.layer);
        this._currentRoomService.currentRoom.roundWall = roundWall;
    };
    LivingRoomComponent.prototype.removeAll = function () {
        this.walls = [];
        this._currentRoomService.currentRoom.walls = [];
        this.cornerPoints = [];
        this._currentRoomService.currentRoom.closets.map(function (closet) {
            closet.removeAll();
        });
        this._currentRoomService.currentRoom.closets = [];
        this._currentRoomService.currentRoom.islands.map(function (island) {
            island.removeAll();
        });
        this._currentRoomService.currentRoom.islands = [];
        if (this._currentRoomService.currentRoom.roundWall) {
            this._currentRoomService.currentRoom.roundWall.removeAll();
            this._currentRoomService.currentRoom.roundWall = null;
        }
    };
    LivingRoomComponent.prototype.undoAddStreching = function (actionItem) {
        var me = this;
        this.walls.map(function (wall) {
            if (wall.wallID === actionItem.oldObj[0].wallID) {
                wall.startID = actionItem.oldObj[0].startID;
                wall.endID = actionItem.oldObj[0].endID;
                wall.startP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](actionItem.oldObj[0].startP.x, actionItem.oldObj[0].startP.y);
                wall.endP = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](actionItem.oldObj[0].endP.x, actionItem.oldObj[0].endP.y);
                wall.changedTime = (new Date().getTime()).toString();
            }
            if (wall.wallID === actionItem.oldObj[0].startID) {
                wall.endID = actionItem.oldObj[0].wallID;
            }
            if (wall.wallID === actionItem.oldObj[0].endID) {
                wall.startID = actionItem.oldObj[0].wallID;
            }
            if (wall.wallID === actionItem.oldObj[1].startID) {
                me.cornerPoints.map(function (cornerpoint) {
                    if (cornerpoint.cornerPointId === actionItem.oldObj[1].cornerPointId) {
                        cornerpoint.startWall = wall;
                        cornerpoint.redrawAll();
                    }
                });
            }
            if (wall.wallID === actionItem.oldObj[1].endID) {
                me.cornerPoints.map(function (cornerpoint) {
                    if (cornerpoint.cornerPointId === actionItem.oldObj[1].cornerPointId) {
                        cornerpoint.endWall = wall;
                        cornerpoint.redrawAll();
                    }
                });
            }
        });
        __WEBPACK_IMPORTED_MODULE_9__module_evented__["a" /* Evented */].fire('removeWall', actionItem.newObj[1].wallID);
        __WEBPACK_IMPORTED_MODULE_9__module_evented__["a" /* Evented */].fire('removeWall', actionItem.newObj[2].wallID);
        __WEBPACK_IMPORTED_MODULE_9__module_evented__["a" /* Evented */].fire('removeWall', actionItem.newObj[3].wallID);
        __WEBPACK_IMPORTED_MODULE_9__module_evented__["a" /* Evented */].fire('removeWall', actionItem.newObj[4].wallID);
        this.walls.pop();
        this.walls.pop();
        this.walls.pop();
        this.walls.pop();
        __WEBPACK_IMPORTED_MODULE_9__module_evented__["a" /* Evented */].fire('removeConerPoint', actionItem.newObj[5].cornerPointId);
        __WEBPACK_IMPORTED_MODULE_9__module_evented__["a" /* Evented */].fire('removeConerPoint', actionItem.newObj[6].cornerPointId);
        __WEBPACK_IMPORTED_MODULE_9__module_evented__["a" /* Evented */].fire('removeConerPoint', actionItem.newObj[7].cornerPointId);
        __WEBPACK_IMPORTED_MODULE_9__module_evented__["a" /* Evented */].fire('removeConerPoint', actionItem.newObj[8].cornerPointId);
        this.cornerPoints.pop();
        this.cornerPoints.pop();
        this.cornerPoints.pop();
        this.cornerPoints.pop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_konva__["Stage"])
    ], LivingRoomComponent.prototype, "stage", void 0);
    LivingRoomComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-living-room',
            template: __webpack_require__("../../../../../src/app/living-room/living-room.component.html"),
            styles: [__webpack_require__("../../../../../src/app/living-room/living-room.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_lockbutton_service__["a" /* LockbuttonService */],
            __WEBPACK_IMPORTED_MODULE_5__services_strecherbutton_service__["a" /* StrecherbuttonService */],
            __WEBPACK_IMPORTED_MODULE_6__services_doorbutton_service__["a" /* DoorbuttonService */],
            __WEBPACK_IMPORTED_MODULE_8__services_currentroom_service__["a" /* CurrentroomService */]])
    ], LivingRoomComponent);
    return LivingRoomComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modal-component/modal-component.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  modal-component works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/modal-component/modal-component.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modal-component/modal-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalComponentComponent = (function () {
    function ModalComponentComponent() {
    }
    ModalComponentComponent.prototype.ngOnInit = function () {
    };
    ModalComponentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-modal-component',
            template: __webpack_require__("../../../../../src/app/modal-component/modal-component.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modal-component/modal-component.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ModalComponentComponent);
    return ModalComponentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalComponent = (function () {
    function ModalComponent(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.element = $(el.nativeElement);
    }
    ModalComponent.prototype.ngOnInit = function () {
        var modal = this;
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        this.element.appendTo('body');
        // close modal on background click
        this.element.on('click', function (e) {
            var target = $(e.target);
            if (!target.closest('.modal-custom-body').length) {
                //modal.close();
            }
        });
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    };
    // remove self from modal service when directive is destroyed
    ModalComponent.prototype.ngOnDestroy = function () {
        this.modalService.remove(this.id);
        this.element.remove();
    };
    // open modal
    ModalComponent.prototype.open = function () {
        this.element.show();
        $('body').addClass('modal-open');
    };
    // close modal
    ModalComponent.prototype.close = function () {
        this.element.hide();
        $('body').removeClass('modal-open');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "id", void 0);
    ModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i.toString(),
            selector: 'modal',
            template: '<ng-content></ng-content>'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* ModalService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/module/actionitem.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__evented__ = __webpack_require__("../../../../../src/app/module/evented.ts");

var ActionItem = (function () {
    function ActionItem() {
        this.actionKind = '';
        this.oldObj = [];
        this.newObj = [];
    }
    ActionItem.prototype.undo = function () {
        console.log('undo');
        console.log(this);
        switch (this.actionKind) {
            case 'walllengthchange':
                this.undoWallLengthChange();
                break;
            case 'strechingadd':
                this.undoAddStreching();
                break;
        }
    };
    ActionItem.prototype.redo = function () {
        console.log('redo');
        console.log(this);
        switch (this.actionKind) {
            case 'walllengthchange':
                this.redoWallLengthChange();
                break;
            case 'strechingadd':
                this.redoAddStreching();
                break;
            default:
                break;
        }
    };
    ActionItem.prototype.undoWallLengthChange = function () {
        __WEBPACK_IMPORTED_MODULE_0__evented__["a" /* Evented */].fire('wall lengthchange event', this.oldObj[0]);
    };
    ActionItem.prototype.redoWallLengthChange = function () {
        __WEBPACK_IMPORTED_MODULE_0__evented__["a" /* Evented */].fire('wall lengthchange event', this.newObj[0]);
    };
    ActionItem.prototype.undoAddStreching = function () {
        __WEBPACK_IMPORTED_MODULE_0__evented__["a" /* Evented */].fire('undo add streching event', this);
    };
    ActionItem.prototype.redoAddStreching = function () {
        __WEBPACK_IMPORTED_MODULE_0__evented__["a" /* Evented */].fire('redo add streching event', this);
    };
    return ActionItem;
}());



/***/ }),

/***/ "../../../../../src/app/module/area.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Area; });
var Area = (function () {
    function Area(areaId) {
        this.rooms = [];
        this.groups = [];
        this.areaId = areaId;
        this.areaTitle = 'Area ' + this.areaId;
    }
    return Area;
}());



/***/ }),

/***/ "../../../../../src/app/module/basicwall.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicWall; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_konva__ = __webpack_require__("../../../../konva/konva.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_konva___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_konva__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__("../../../../../src/app/module/point.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__evented__ = __webpack_require__("../../../../../src/app/module/evented.ts");



var BasicWall = (function () {
    function BasicWall() {
        this.isSelected = false;
        this.wallLength1 = 0;
        this.wallLength2 = 0;
        this.wallLength = 0;
        this.note = '';
        this.startWall = null;
        this.endWall = null;
        this.isStreching = false;
        this.isLoadUI = false;
        this.isLoadStrechingUI = false;
        // constants
        this.MAINLINE_STROKE = '#000';
        this.MAINLINE_STROKE_WIDTH = 3;
        this.MAINLINE_ACTIVE_STROKE = '#F00';
        this.MAINLINE_ACTIVE_STROKE_WIDTH = 5;
        this.SIGNLINE_LENGTH = 30;
        this.SIGNLINE_STROKE = '#000';
        this.SIGNLINE_STROKE_WIDTH = 1;
        this.ARROW_POINTER_LENGTH = 5;
        this.ARROW_POINTER_WIDTH = 5;
        this.ARROW_FILL = '#000';
        this.ARROW_STROKE = '#000';
        this.ARROW_STROKEWIDTH = 1;
        this.TEXTLENGTH_NORMAL_COLOR = '#000';
        this.TEXTLENGTH_LOCKED_COLOR = '#f00';
        this.TEXTLENGTH_WIDTH = 100;
        this.TEXTLENGTH_FONT_SIZE = 20;
        this.STRECHER_DEFAULT_LENGTH = 3 * 36 + 6 * 3; // 3 FOOTS 6 INCHES
        this.STRECHING_CENTER_CIRCLE_RADIUS = 10;
        this.STRECHING_CENTER_CIRCLE_FILL = '#fff';
        this.STRECHING_CENTER_CIRCLE_STROKE = '#f00';
        this.STRECHING_CENTER_CIRCLE_STROKEWIDTH = 1;
        this.STRECHING_FIRSTP_CIRCLE_RADIUS = 5;
        this.STRECHING_FIRSTP_CIRCLE_FILL = '#fff';
        this.STRECHING_FIRSTP_CIRCLE_STROKE = '#f00';
        this.STRECHING_FIRSTP_CIRCLE_STROKEWIDTH = 1;
        this.STRECHING_ARROW_POINTER_LENGTH = 5;
        this.STRECHING_ARROW_POINTER_WIDTH = 10;
        this.STRECHING_ARROW_FILL = '#f00';
        this.STRECHING_ARROW_STROKE = '#f00';
        this.STRECHING_ARROW_STROKEWIDTH = 1;
        this.wallId = 'basicwall_' + Math.floor(Math.random() * 100000 % 100000);
    }
    BasicWall.prototype.defineWallType = function () {
        if (this.startP.y === this.endP.y) {
            if (this.startP.x <= this.endP.x) {
                this.wallDirection = 'ltr';
            }
            else {
                this.wallDirection = 'rtl';
            }
        }
        else if (this.startP.x === this.endP.x) {
            if (this.startP.y <= this.endP.y) {
                this.wallDirection = 'ttd';
            }
            else {
                this.wallDirection = 'dtt';
            }
        }
        else {
            this.wallDirection = 'other';
        }
        this.wallDirection = this.wallDirection;
    };
    BasicWall.prototype.initUI = function () {
        this.calcMidPoint();
        this.calculateLength();
        this.defineWallType();
        this.drawMainLine();
        this.drawSignLines();
        this.drawArrowLines();
        this.drawText();
        this.drawStrecherToolParts();
        this.group.getLayer().draw();
        this.isLoadUI = true;
    };
    BasicWall.prototype.drawMainLine = function () {
        var me = this;
        this.mainLine = new __WEBPACK_IMPORTED_MODULE_0_konva__["Line"]({
            points: [this.startP.x, this.startP.y, this.endP.x, this.endP.y],
            stroke: this.MAINLINE_STROKE,
            strokeWidth: this.MAINLINE_STROKE_WIDTH,
            lineCap: 'round',
            lineJoin: 'round'
        });
        this.mainLine.on('mouseover', function () {
            this.stroke(me.MAINLINE_ACTIVE_STROKE);
            this.strokeWidth(me.MAINLINE_ACTIVE_STROKE_WIDTH);
            document.body.style.cursor = 'pointer';
            me.group.draw();
            me.group.getLayer().draw();
        });
        this.mainLine.on('mouseout', function () {
            if (me.isSelected) {
                return;
            }
            this.stroke(me.MAINLINE_STROKE);
            this.strokeWidth(me.MAINLINE_STROKE_WIDTH);
            document.body.style.cursor = 'default';
            me.group.draw();
            me.group.getLayer().draw();
        });
        // this.mainLine.on('click', function () {
        //     me.mainLineClick();
        // });
        this.group.add(this.mainLine);
    };
    BasicWall.prototype.drawSignLines = function () {
        var signLineParams = this.calcSignLineParams();
        this.firstSignLine = new __WEBPACK_IMPORTED_MODULE_0_konva__["Line"]({
            points: [this.startP.x, this.startP.y, signLineParams.p1.x, signLineParams.p1.y],
            stroke: this.SIGNLINE_STROKE,
            strokeWidth: this.SIGNLINE_STROKE_WIDTH
        });
        this.secondSignLine = new __WEBPACK_IMPORTED_MODULE_0_konva__["Line"]({
            points: [this.endP.x, this.endP.y, signLineParams.p2.x, signLineParams.p2.y],
            stroke: this.SIGNLINE_STROKE,
            strokeWidth: this.SIGNLINE_STROKE_WIDTH
        });
        this.group.add(this.firstSignLine);
        this.group.add(this.secondSignLine);
    };
    BasicWall.prototype.drawArrowLines = function () {
        var arrowLineParams = this.calcArrowLineParams();
        this.firstArrow = new __WEBPACK_IMPORTED_MODULE_0_konva__["Arrow"]({
            points: [arrowLineParams.p1.x, arrowLineParams.p1.y, arrowLineParams.p2.x, arrowLineParams.p2.y],
            pointerLength: this.ARROW_POINTER_LENGTH,
            pointerWidth: this.ARROW_POINTER_WIDTH,
            stroke: this.ARROW_STROKE,
            strokeWidth: this.ARROW_STROKEWIDTH,
            fill: this.ARROW_FILL
        });
        this.secondArrow = new __WEBPACK_IMPORTED_MODULE_0_konva__["Arrow"]({
            points: [arrowLineParams.p3.x, arrowLineParams.p3.y, arrowLineParams.p4.x, arrowLineParams.p4.y],
            pointerLength: this.ARROW_POINTER_LENGTH,
            pointerWidth: this.ARROW_POINTER_WIDTH,
            stroke: this.ARROW_STROKE,
            strokeWidth: this.ARROW_STROKEWIDTH,
            fill: this.ARROW_FILL
        });
        this.group.add(this.firstArrow);
        this.group.add(this.secondArrow);
    };
    BasicWall.prototype.drawText = function () {
        var textParams = this.calcTextLengthParams();
        this.textLength = new __WEBPACK_IMPORTED_MODULE_0_konva__["Text"]({
            x: textParams.point.x,
            y: textParams.point.y,
            text: this.wallLength1 + "' " + this.wallLength2 + " \"",
            fontSize: this.TEXTLENGTH_FONT_SIZE,
            width: this.TEXTLENGTH_WIDTH,
            height: this.SIGNLINE_LENGTH,
            align: 'center',
            rotation: textParams.rotation
        });
        this.group.add(this.textLength);
    };
    BasicWall.prototype.drawStrecherToolParts = function () {
        if (!this.isStreching) {
            return;
        }
        var me = this;
        // this.strechingToolButtonGroup = new Konva.Group();
        this.strechingCenterCircle = new __WEBPACK_IMPORTED_MODULE_0_konva__["Circle"]({
            x: me.midPoint.x,
            y: me.midPoint.y,
            radius: me.STRECHING_CENTER_CIRCLE_RADIUS,
            stroke: me.STRECHING_CENTER_CIRCLE_STROKE,
            strokeWidth: me.STRECHING_CENTER_CIRCLE_STROKEWIDTH,
            draggable: true,
        });
        this.oldStrechingPoint = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.midPoint.x, this.midPoint.y);
        this.strechingCenterCircleForBackground = new __WEBPACK_IMPORTED_MODULE_0_konva__["Circle"]({
            x: me.midPoint.x,
            y: me.midPoint.y,
            radius: me.STRECHING_CENTER_CIRCLE_RADIUS,
            fill: me.STRECHING_CENTER_CIRCLE_FILL,
            stroke: me.STRECHING_CENTER_CIRCLE_STROKE,
            strokeWidth: me.STRECHING_CENTER_CIRCLE_STROKEWIDTH,
        });
        this.strechingCenterCircle.on('dragmove', function () {
            var newPoint = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.getX(), this.getY());
            var delta = {
                d_x: newPoint.x - me.oldStrechingPoint.x,
                d_y: newPoint.y - me.oldStrechingPoint.y
            };
            me.oldStrechingPoint = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.getX(), this.getY());
            me.strecherDrage(delta);
            __WEBPACK_IMPORTED_MODULE_2__evented__["a" /* Evented */].fire('streching', me);
        });
        this.strechingCenterCircle.on('dragend', function () {
            __WEBPACK_IMPORTED_MODULE_2__evented__["a" /* Evented */].fire('streching', me);
        });
        this.strechingCenterCircle.on('click', function () {
            me.showStrecherComponents(false);
        });
        // this.strechingCenterCircle.on('dragstart', function () {
        //     me.oldStrechingPoint = new Point(this.getX(), this.getY());
        //     console.log(me.startWall);
        //     console.log(me.endWall);
        //     console.log(me);
        //     console.log('-----------------------------------------------');
        // });
        // this.strechingCenterCircle.on('dblclick', function () {
        //     me.wall.isStreching = false;
        //     // me.strecherEvent.emit(this.wall);
        //     me.strechingToolButtonGroup.hide();
        // });
        this.strechingFirstPCircle = new __WEBPACK_IMPORTED_MODULE_0_konva__["Circle"]({
            x: this.startP.x,
            y: this.startP.y,
            radius: me.STRECHING_FIRSTP_CIRCLE_RADIUS,
            fill: me.STRECHING_FIRSTP_CIRCLE_FILL,
            stroke: me.STRECHING_FIRSTP_CIRCLE_STROKE,
            strokeWidth: me.STRECHING_FIRSTP_CIRCLE_STROKEWIDTH
        });
        this.strechingEndPCircle = new __WEBPACK_IMPORTED_MODULE_0_konva__["Circle"]({
            x: this.endP.x,
            y: this.endP.y,
            radius: me.STRECHING_FIRSTP_CIRCLE_RADIUS,
            fill: me.STRECHING_FIRSTP_CIRCLE_FILL,
            stroke: me.STRECHING_FIRSTP_CIRCLE_STROKE,
            strokeWidth: me.STRECHING_FIRSTP_CIRCLE_STROKEWIDTH
        });
        //adding arrows
        switch (this.wallDirection) {
            case 'ltr':
                this.strechingArrow1 = new __WEBPACK_IMPORTED_MODULE_0_konva__["Arrow"]({
                    points: [me.midPoint.x, me.midPoint.y, me.midPoint.x, me.midPoint.y + me.STRECHING_CENTER_CIRCLE_RADIUS - 3]
                });
                this.strechingArrow2 = new __WEBPACK_IMPORTED_MODULE_0_konva__["Arrow"]({
                    points: [me.midPoint.x, me.midPoint.y, me.midPoint.x, me.midPoint.y - me.STRECHING_CENTER_CIRCLE_RADIUS + 3]
                });
                break;
            case 'rtl':
                this.strechingArrow1 = new __WEBPACK_IMPORTED_MODULE_0_konva__["Arrow"]({
                    points: [me.midPoint.x, me.midPoint.y, me.midPoint.x, me.midPoint.y - me.STRECHING_CENTER_CIRCLE_RADIUS + 3]
                });
                this.strechingArrow2 = new __WEBPACK_IMPORTED_MODULE_0_konva__["Arrow"]({
                    points: [me.midPoint.x, me.midPoint.y, me.midPoint.x, me.midPoint.y + me.STRECHING_CENTER_CIRCLE_RADIUS - 3]
                });
                break;
            case 'ttd':
                this.strechingArrow1 = new __WEBPACK_IMPORTED_MODULE_0_konva__["Arrow"]({
                    points: [me.midPoint.x, me.midPoint.y, me.midPoint.x + me.STRECHING_CENTER_CIRCLE_RADIUS - 3, me.midPoint.y]
                });
                this.strechingArrow2 = new __WEBPACK_IMPORTED_MODULE_0_konva__["Arrow"]({
                    points: [me.midPoint.x, me.midPoint.y, me.midPoint.x - me.STRECHING_CENTER_CIRCLE_RADIUS + 3, me.midPoint.y]
                });
                break;
            case 'dtt':
                this.strechingArrow1 = new __WEBPACK_IMPORTED_MODULE_0_konva__["Arrow"]({
                    points: [me.midPoint.x, me.midPoint.y, me.midPoint.x - me.STRECHING_CENTER_CIRCLE_RADIUS + 3, me.midPoint.y]
                });
                this.strechingArrow2 = new __WEBPACK_IMPORTED_MODULE_0_konva__["Arrow"]({
                    points: [me.midPoint.x, me.midPoint.y, me.midPoint.x + me.STRECHING_CENTER_CIRCLE_RADIUS - 3, me.midPoint.y]
                });
                break;
        }
        this.strechingArrow1.pointerLength(this.STRECHING_ARROW_POINTER_LENGTH);
        this.strechingArrow1.pointerWidth(this.STRECHING_ARROW_POINTER_WIDTH);
        this.strechingArrow1.fill(this.STRECHING_ARROW_FILL);
        this.strechingArrow1.stroke(this.STRECHING_ARROW_STROKE);
        this.strechingArrow1.strokeWidth(this.STRECHING_ARROW_STROKEWIDTH);
        this.strechingArrow2.pointerLength(this.STRECHING_ARROW_POINTER_LENGTH);
        this.strechingArrow2.pointerWidth(this.STRECHING_ARROW_POINTER_WIDTH);
        this.strechingArrow2.fill(this.STRECHING_ARROW_FILL);
        this.strechingArrow2.stroke(this.STRECHING_ARROW_STROKE);
        this.strechingArrow2.strokeWidth(this.STRECHING_ARROW_STROKEWIDTH);
        this.group.add(this.strechingEndPCircle);
        this.group.add(this.strechingFirstPCircle);
        this.group.add(this.strechingCenterCircleForBackground);
        this.group.add(this.strechingArrow1);
        this.group.add(this.strechingArrow2);
        this.group.add(this.strechingCenterCircle);
        this.isLoadStrechingUI = true;
    };
    BasicWall.prototype.calcSignLineParams = function () {
        var p1, p2;
        switch (this.wallDirection) {
            case 'ltr':
                p1 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startP.x, this.startP.y - this.SIGNLINE_LENGTH);
                p2 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endP.x, this.endP.y - this.SIGNLINE_LENGTH);
                break;
            case 'rtl':
                p1 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startP.x, this.startP.y + this.SIGNLINE_LENGTH);
                p2 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endP.x, this.endP.y + this.SIGNLINE_LENGTH);
                break;
            case 'ttd':
                p1 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startP.x + this.SIGNLINE_LENGTH, this.startP.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endP.x + this.SIGNLINE_LENGTH, this.endP.y);
                break;
            case 'dtt':
                p1 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startP.x - this.SIGNLINE_LENGTH, this.startP.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endP.x - this.SIGNLINE_LENGTH, this.endP.y);
                break;
            case 'other':
                // var d_x = me.wall.endP.x - me.wall.startP.x;
                // var d_y = me.wall.endP.y - me.wall.startP.y;
                // var dd = Math.sqrt(d_x * d_x + d_y * d_y);
                // var d_x_1 = me.signLineLength * d_y / dd;
                // var d_y_1 = d_x_1 * d_x / d_y;
                // me.firstSignLine = new Konva.Line({
                //     points: [me.wall.startP.x, me.wall.startP.y, me.wall.startP.x + d_x_1, me.wall.startP.y - d_y_1],
                //     stroke: '#000',
                //     strokeWidth: 1,
                //     lineCap: 'round',
                //     lineJoin: 'round',
                // });
                // me.secondSignLine = new Konva.Line({
                //     points: [me.wall.endP.x, me.wall.endP.y, me.wall.endP.x + d_x_1, me.wall.endP.y - d_y_1],
                //     stroke: '#000',
                //     strokeWidth: 1,
                //     lineCap: 'round',
                //     lineJoin: 'round',
                // });
                break;
            default:
                break;
        }
        return {
            p1: p1,
            p2: p2
        };
    };
    BasicWall.prototype.calcMidPoint = function () {
        this.midPoint = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startP.x + (this.endP.x - this.startP.x) / 2, this.startP.y + (this.endP.y - this.startP.y) / 2);
    };
    BasicWall.prototype.calcArrowLineParams = function () {
        var p1, p2, p3, p4;
        switch (this.wallDirection) {
            case 'ltr':
                p1 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.midPoint.x - this.TEXTLENGTH_WIDTH / 2, this.midPoint.y - this.SIGNLINE_LENGTH / 2);
                p2 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startP.x, this.midPoint.y - this.SIGNLINE_LENGTH / 2);
                p3 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.midPoint.x + this.TEXTLENGTH_WIDTH / 2, this.midPoint.y - this.SIGNLINE_LENGTH / 2);
                p4 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endP.x, this.endP.y - this.SIGNLINE_LENGTH / 2);
                break;
            case 'rtl':
                p1 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.midPoint.x + this.TEXTLENGTH_WIDTH / 2, this.midPoint.y + this.SIGNLINE_LENGTH / 2);
                p2 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startP.x, this.midPoint.y + this.SIGNLINE_LENGTH / 2);
                p3 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.midPoint.x - this.TEXTLENGTH_WIDTH / 2, this.midPoint.y + this.SIGNLINE_LENGTH / 2);
                p4 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endP.x, this.endP.y + this.SIGNLINE_LENGTH / 2);
                break;
            case 'ttd':
                p1 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.midPoint.x + this.SIGNLINE_LENGTH / 2, this.midPoint.y - this.TEXTLENGTH_WIDTH / 2);
                p2 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startP.x + this.SIGNLINE_LENGTH / 2, this.startP.y);
                p3 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.midPoint.x + this.SIGNLINE_LENGTH / 2, this.midPoint.y + this.TEXTLENGTH_WIDTH / 2);
                p4 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endP.x + this.SIGNLINE_LENGTH / 2, this.endP.y);
                break;
            case 'dtt':
                p1 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.midPoint.x - this.SIGNLINE_LENGTH / 2, this.midPoint.y + this.TEXTLENGTH_WIDTH / 2);
                p2 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startP.x - this.SIGNLINE_LENGTH / 2, this.startP.y);
                p3 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.midPoint.x - this.SIGNLINE_LENGTH / 2, this.midPoint.y - this.TEXTLENGTH_WIDTH / 2);
                p4 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endP.x - this.SIGNLINE_LENGTH / 2, this.endP.y);
                break;
            case 'other':
                // var d_x = me.wall.endP.x - me.wall.startP.x;
                // var d_y = me.wall.endP.y - me.wall.startP.y;
                // var dd = Math.sqrt(d_x * d_x + d_y * d_y);
                // var k = d_x * Math.abs(d_y) / (d_y * Math.abs(d_x));
                // var k_x = d_x / Math.abs(d_x);
                // var k_y = d_y / Math.abs(d_y);
                // var d_x_1 = me.signLineLength * d_y / dd / 2;
                // var d_y_1 = d_x_1 * d_x / d_y;
                // var d_x_2 = Math.abs(me.TEXTLENGTH_WIDTH * d_y / 2 / dd) * k_x;
                // var d_y_2 = Math.abs(d_x_2 * d_y / d_x) * k_y;
                // me.firstArrow = new Konva.Arrow({
                //     points: [me.midPoint.x + d_x_1 - d_x_2, me.midPoint.y - d_y_1 - d_y_2,
                //     me.wall.startP.x + d_x_1, me.wall.startP.y - d_y_1],
                // });
                // me.secondArrow = new Konva.Arrow({
                //     points: [me.midPoint.x + d_x_1 + d_x_2, me.midPoint.y - d_y_1 + d_y_2,
                //     me.wall.endP.x + d_x_1, me.wall.endP.y - d_y_1],
                // });
                break;
            default:
                break;
        }
        return {
            p1: p1,
            p2: p2,
            p3: p3,
            p4: p4
        };
    };
    BasicWall.prototype.calcTextLengthParams = function () {
        var point, rotation;
        switch (this.wallDirection) {
            case 'ltr':
                point = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.midPoint.x - this.TEXTLENGTH_WIDTH / 2, this.midPoint.y - this.SIGNLINE_LENGTH);
                rotation = 0;
                break;
            case 'rtl':
                point = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.midPoint.x - this.TEXTLENGTH_WIDTH / 2, this.midPoint.y + this.SIGNLINE_LENGTH / 4);
                rotation = 0;
                break;
            case 'ttd':
                point = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.midPoint.x + this.SIGNLINE_LENGTH / 4, this.midPoint.y + this.TEXTLENGTH_WIDTH / 2);
                rotation = -90;
                break;
            case 'dtt':
                point = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.midPoint.x - this.SIGNLINE_LENGTH / 4, this.midPoint.y - this.TEXTLENGTH_WIDTH / 2);
                rotation = 90;
                break;
            case 'other':
                var d_x = this.endP.x - this.startP.x;
                var d_y = this.endP.y - this.startP.y;
                var dd = Math.sqrt(d_x * d_x + d_y * d_y);
                var d_x_1 = this.SIGNLINE_LENGTH * d_y / dd;
                var d_y_1 = d_x_1 * d_x / d_y;
                var alpha = Math.atan(d_y / d_x) * 180 / Math.PI;
                point = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.midPoint.x + d_x_1, this.midPoint.y - d_y_1);
                rotation = alpha;
                break;
            default:
                break;
        }
        return {
            point: point,
            rotation: rotation
        };
    };
    BasicWall.prototype.calculateLength = function () {
        this.wallLength = Math.sqrt((this.startP.x - this.endP.x) * (this.startP.x - this.endP.x)
            + (this.startP.y - this.endP.y) * (this.startP.y - this.endP.y));
        this.wallLength1 = Math.floor(this.wallLength / 36);
        this.wallLength2 = Number((this.wallLength % 36 / 3).toFixed(0));
        if (this.wallLength2 === 12) {
            this.wallLength1++;
            this.wallLength2 = 0;
        }
        if (this.isLoadUI && this.wallLength < 36 * 2) {
            this.showLengthComponent(false);
        }
        else if (this.isLoadUI && this.wallLength >= 36 * 2) {
            this.showLengthComponent(true);
        }
    };
    BasicWall.prototype.redraw = function () {
        this.calcMidPoint();
        this.calculateLength();
        this.defineWallType();
        this.mainLine.points([this.startP.x, this.startP.y, this.endP.x, this.endP.y]);
        if (this.isSelected) {
            this.mainLine.stroke(this.MAINLINE_ACTIVE_STROKE);
            this.mainLine.strokeWidth(this.MAINLINE_ACTIVE_STROKE_WIDTH);
        }
        else {
            this.mainLine.stroke(this.MAINLINE_STROKE);
            this.mainLine.strokeWidth(this.MAINLINE_STROKE_WIDTH);
        }
        var signLineParams = this.calcSignLineParams();
        this.firstSignLine.points([this.startP.x, this.startP.y, signLineParams.p1.x, signLineParams.p1.y]);
        this.secondSignLine.points([this.endP.x, this.endP.y, signLineParams.p2.x, signLineParams.p2.y]);
        var arrowLineParams = this.calcArrowLineParams();
        this.firstArrow.points([arrowLineParams.p1.x, arrowLineParams.p1.y, arrowLineParams.p2.x, arrowLineParams.p2.y]);
        this.secondArrow.points([arrowLineParams.p3.x, arrowLineParams.p3.y, arrowLineParams.p4.x, arrowLineParams.p4.y]);
        var textParams = this.calcTextLengthParams();
        this.textLength.x(textParams.point.x);
        this.textLength.y(textParams.point.y);
        this.textLength.text(this.wallLength1 + "' " + this.wallLength2 + " \"");
        this.textLength.rotation(textParams.rotation);
        if (!this.isStreching) {
            this.group.getLayer().draw();
            return;
        }
        var me = this;
        this.strechingCenterCircle.x(this.midPoint.x);
        this.strechingCenterCircle.y(this.midPoint.y);
        this.strechingCenterCircleForBackground.x(me.midPoint.x);
        this.strechingCenterCircleForBackground.y(me.midPoint.y);
        this.strechingFirstPCircle.x(this.startP.x);
        this.strechingFirstPCircle.y(this.startP.y);
        this.strechingEndPCircle.x(this.endP.x);
        this.strechingEndPCircle.y(this.endP.y);
        //adding arrows
        switch (this.wallDirection) {
            case 'ltr':
                this.strechingArrow1.points([me.midPoint.x, me.midPoint.y, me.midPoint.x,
                    me.midPoint.y + me.STRECHING_CENTER_CIRCLE_RADIUS - 3]);
                this.strechingArrow2.points([me.midPoint.x, me.midPoint.y, me.midPoint.x,
                    me.midPoint.y - me.STRECHING_CENTER_CIRCLE_RADIUS + 3]);
                break;
            case 'rtl':
                this.strechingArrow1.points([me.midPoint.x, me.midPoint.y,
                    me.midPoint.x, me.midPoint.y - me.STRECHING_CENTER_CIRCLE_RADIUS + 3]);
                this.strechingArrow2.points([me.midPoint.x, me.midPoint.y, me.midPoint.x,
                    me.midPoint.y + me.STRECHING_CENTER_CIRCLE_RADIUS - 3]);
                break;
            case 'ttd':
                this.strechingArrow1.points([me.midPoint.x, me.midPoint.y,
                    me.midPoint.x + me.STRECHING_CENTER_CIRCLE_RADIUS - 3, me.midPoint.y]);
                this.strechingArrow2.points([me.midPoint.x, me.midPoint.y,
                    me.midPoint.x - me.STRECHING_CENTER_CIRCLE_RADIUS + 3, me.midPoint.y]);
                break;
            case 'dtt':
                this.strechingArrow1.points([me.midPoint.x, me.midPoint.y,
                    me.midPoint.x - me.STRECHING_CENTER_CIRCLE_RADIUS + 3, me.midPoint.y]);
                this.strechingArrow2.points([me.midPoint.x, me.midPoint.y,
                    me.midPoint.x + me.STRECHING_CENTER_CIRCLE_RADIUS - 3, me.midPoint.y]);
                break;
        }
        this.group.getLayer().draw();
    };
    BasicWall.prototype.showLengthComponent = function (isShow) {
        if (isShow) {
            this.textLength.show();
            this.firstSignLine.show();
            this.secondSignLine.show();
            this.firstArrow.show();
            this.secondArrow.show();
        }
        else {
            this.textLength.hide();
            this.firstSignLine.hide();
            this.secondSignLine.hide();
            this.firstArrow.hide();
            this.secondArrow.hide();
        }
        this.group.getLayer().draw();
    };
    BasicWall.prototype.showStrecherComponents = function (isShow) {
        if (this.isLoadStrechingUI && this.isStreching && isShow) {
            this.strechingArrow1.show();
            this.strechingArrow2.show();
            this.strechingCenterCircle.show();
            this.strechingCenterCircleForBackground.show();
            this.strechingEndPCircle.show();
            this.strechingFirstPCircle.show();
            // this.strechingToolButtonGroup.show();
        }
        else if (this.isLoadStrechingUI && this.isStreching && !isShow) {
            this.strechingArrow1.hide();
            this.strechingArrow2.hide();
            this.strechingCenterCircle.hide();
            this.strechingCenterCircleForBackground.hide();
            this.strechingEndPCircle.hide();
            this.strechingFirstPCircle.hide();
            // this.strechingToolButtonGroup.hide();
        }
        this.isStreching = false;
        this.group.getLayer().draw();
    };
    // mainLineClick() {
    //     // Evented.fire('basicwall clicked', this);
    //     this.isSelected = !this.isSelected;
    //     // if (this.isStreching) {
    //     //     this.isStreching = false;
    //     //     this.showStrecherComponents(false);
    //     // }
    //     this.redraw();
    // }
    BasicWall.prototype.strecherDrage = function (delta) {
        this.startP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startP.x + delta.d_x, this.startP.y + delta.d_y);
        this.endP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endP.x + delta.d_x, this.endP.y + delta.d_y);
        this.redraw();
        this.startWall.endP.x = this.startWall.endP.x + delta.d_x;
        this.startWall.endP.y = this.startWall.endP.y + delta.d_y;
        this.endWall.startP.x = this.endWall.startP.x + delta.d_x;
        this.endWall.startP.y = this.endWall.startP.y + delta.d_y;
        if (this.wallDirection === 'ltr' || this.wallDirection === 'rtl') {
            this.startWall.startP.x += delta.d_x;
            this.startWall.startWall.endP.x += delta.d_x;
            this.endWall.endP.x += delta.d_x;
            this.endWall.endWall.startP.x += delta.d_x;
        }
        else if (this.wallDirection === 'ttd' || this.wallDirection === 'dtt') {
            this.startWall.startP.y += delta.d_y;
            this.startWall.startWall.endP.y += delta.d_y;
            this.endWall.endP.y = this.endWall.endP.y + delta.d_y;
            this.endWall.endWall.startP.y += delta.d_y;
        }
        this.startWall.redraw();
        this.startWall.startWall.redraw();
        this.endWall.redraw();
        this.endWall.endWall.redraw();
    };
    return BasicWall;
}());



/***/ }),

/***/ "../../../../../src/app/module/closet.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Closet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_konva__ = __webpack_require__("../../../../konva/konva.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_konva___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_konva__);

var Closet = (function () {
    function Closet(topleftPoint, layer) {
        // constants
        this.CLOSET_RECT_DEFAULT_WIDTH = 5 * 36;
        this.CLOSET_RECT_DEFAULT_HEIGT = 8 * 36;
        this.CLOSET_RECT_STROKE = '#000';
        this.CLOSET_RECT_STROKEWIDTH = 3;
        this.CLOSET_TEXT_WIDTH = 50;
        this.topleftPoint = topleftPoint;
        this.layer = layer;
        this.group = new __WEBPACK_IMPORTED_MODULE_0_konva__["Group"]({
            draggable: true
        });
        this.initUI();
        this.layer.add(this.group);
        this.layer.draw();
    }
    Closet.prototype.initUI = function () {
        var me = this;
        this.rect = new __WEBPACK_IMPORTED_MODULE_0_konva__["Rect"]({
            x: me.topleftPoint.x,
            y: me.topleftPoint.y,
            width: me.CLOSET_RECT_DEFAULT_WIDTH,
            height: me.CLOSET_RECT_DEFAULT_HEIGT,
            stroke: me.CLOSET_RECT_STROKE,
            strokeWidth: me.CLOSET_RECT_STROKEWIDTH
        });
        this.ciText = new __WEBPACK_IMPORTED_MODULE_0_konva__["Text"]({
            x: me.topleftPoint.x + me.CLOSET_RECT_DEFAULT_WIDTH / 2 - me.CLOSET_TEXT_WIDTH / 2,
            y: me.topleftPoint.y + me.CLOSET_RECT_DEFAULT_HEIGT / 2,
            text: 'CI',
            width: me.CLOSET_TEXT_WIDTH,
            align: 'center',
            fontSize: 30
        });
        this.group.add(this.rect);
        this.group.add(this.ciText);
    };
    Closet.prototype.removeAll = function () {
        this.group.remove();
    };
    return Closet;
}());



/***/ }),

/***/ "../../../../../src/app/module/cornerpoint.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CornerPoint; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__point__ = __webpack_require__("../../../../../src/app/module/point.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wall__ = __webpack_require__("../../../../../src/app/module/wall.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_konva__ = __webpack_require__("../../../../konva/konva.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_konva___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_konva__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__evented__ = __webpack_require__("../../../../../src/app/module/evented.ts");




var CornerPoint = (function () {
    function CornerPoint(startWall, endWall, _currentRoomService) {
        var _this = this;
        this._currentRoomService = _currentRoomService;
        this.isSelected = false;
        this.CORNERCIRCLE_RADIUS = 10;
        this.CORNERCIRCLE_FILL = '#F00';
        this.CORNERCIRCLE_STROKE = '#FFF';
        this.CORNERCIRCLE_STROKEWIDTH = 2;
        this.CORNERCIRCLE_HIDE_OPACITY = 0;
        this.CORNERCIRCLE_SHOW_OPACITY = 1;
        this.CORNERCUT_DEFAULT_LENGTH = 3 * 12 * 3; // 3'
        this.startWall = startWall;
        this.endWall = endWall;
        this.cornerPointId = 'cornerpoint_' + Math.floor(Math.random() * 100000 % 100000);
        var me = this;
        this.cornerCircle = new __WEBPACK_IMPORTED_MODULE_2_konva__["Circle"]({
            x: me.startWall.startP.x,
            y: me.startWall.startP.y,
            radius: me.CORNERCIRCLE_RADIUS,
            fill: me.CORNERCIRCLE_FILL,
            stroke: me.CORNERCIRCLE_STROKE,
            strokeWidth: me.CORNERCIRCLE_STROKEWIDTH,
            opacity: me.CORNERCIRCLE_HIDE_OPACITY
        });
        this._currentRoomService.layer.add(this.cornerCircle);
        this._currentRoomService.layer.draw();
        this.cornerCircle.on('click', function () {
            me.isSelected = !me.isSelected;
            if (me.isSelected) {
                me.cornerCircle.opacity(me.CORNERCIRCLE_SHOW_OPACITY);
                __WEBPACK_IMPORTED_MODULE_3__evented__["a" /* Evented */].fire('cornerpoint clicked', me);
            }
            else {
                me.cornerCircle.opacity(me.CORNERCIRCLE_HIDE_OPACITY);
                __WEBPACK_IMPORTED_MODULE_3__evented__["a" /* Evented */].fire('cornerpoint clicked', null);
            }
            me.cornerCircle.moveToTop();
            me._currentRoomService.layer.draw();
        });
        this.cornerCircle.on('mouseover', function () {
            me.cornerCircle.opacity(me.CORNERCIRCLE_SHOW_OPACITY);
            me.cornerCircle.moveToTop();
            me._currentRoomService.layer.draw();
        });
        this.cornerCircle.on('mouseout', function () {
            if (!me.isSelected) {
                me.cornerCircle.opacity(me.CORNERCIRCLE_HIDE_OPACITY);
            }
            me.cornerCircle.moveToTop();
            me._currentRoomService.layer.draw();
        });
        __WEBPACK_IMPORTED_MODULE_3__evented__["a" /* Evented */].on('cornerpoint clicked', function (e) {
            var clickedCorner = e.args;
            if (clickedCorner && clickedCorner.cornerPointId !== me.cornerPointId) {
                me.cornerCircle.opacity(me.CORNERCIRCLE_HIDE_OPACITY);
            }
            me.cornerCircle.moveToTop();
            me._currentRoomService.layer.draw();
        });
        __WEBPACK_IMPORTED_MODULE_3__evented__["a" /* Evented */].on('buttonrectclicked', function (e) {
            me.removeAll();
        });
        __WEBPACK_IMPORTED_MODULE_3__evented__["a" /* Evented */].on('buttonhouseclicked', function (e) {
            me.removeAll();
        });
        __WEBPACK_IMPORTED_MODULE_3__evented__["a" /* Evented */].on('buttonroundclicked', function (e) {
            me.removeAll();
        });
        __WEBPACK_IMPORTED_MODULE_3__evented__["a" /* Evented */].on('cornerbutton clicked', function (e) {
            var cornerPointId = e.args;
            if (cornerPointId !== me.cornerPointId) {
                return;
            }
            me.cornerCut();
        });
        __WEBPACK_IMPORTED_MODULE_3__evented__["a" /* Evented */].on('wall length change', function (e) {
            me.redrawAll();
        });
        __WEBPACK_IMPORTED_MODULE_3__evented__["a" /* Evented */].on('removeConerPoint', function (e) {
            if (_this.cornerPointId === e.args) {
                _this.removeAll();
            }
        });
    }
    CornerPoint.prototype.removeAll = function () {
        this.cornerCircle.remove();
        this.cornerCircle.destroy();
        this._currentRoomService.layer.draw();
    };
    CornerPoint.prototype.cornerCut = function () {
        var me = this;
        // starwall part
        var delta_l = me.CORNERCUT_DEFAULT_LENGTH / Math.sqrt(2);
        switch (me.startWall.wallDirection) {
            case 'ltr':
                me.startWall.startP.x += delta_l;
                break;
            case 'rtl':
                me.startWall.startP.x -= delta_l;
                break;
            case 'ttd':
                me.startWall.startP.y += delta_l;
                break;
            case 'dtt':
                me.startWall.startP.y -= delta_l;
                break;
            default:
                break;
        }
        // end wall part
        switch (me.endWall.wallDirection) {
            case 'ltr':
                me.endWall.endP.x -= delta_l;
                break;
            case 'rtl':
                me.endWall.endP.x += delta_l;
                break;
            case 'ttd':
                me.endWall.endP.y -= delta_l;
                break;
            case 'dtt':
                me.endWall.endP.y += delta_l;
                break;
            default:
                break;
        }
        // 45 degree wall part
        var temp_wall = new __WEBPACK_IMPORTED_MODULE_1__wall__["a" /* Wall */](new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](me.endWall.endP.x, me.endWall.endP.y), new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](me.startWall.startP.x, me.startWall.startP.y), '', '', '');
        me.startWall.startID = temp_wall.wallID;
        me.endWall.endID = temp_wall.wallID;
        temp_wall.startID = me.endWall.wallID;
        temp_wall.endID = me.startWall.wallID;
        temp_wall.wallDirection = 'other';
        me._currentRoomService.addWall(temp_wall);
        me.startWall.changedTime = (new Date().getTime()).toString();
        me.endWall.changedTime = (new Date().getTime()).toString();
        temp_wall.changedTime = (new Date().getTime()).toString();
        me.removeAll();
    };
    CornerPoint.prototype.redrawAll = function () {
        this.cornerCircle.x(this.startWall.startP.x);
        this.cornerCircle.y(this.startWall.startP.y);
        this._currentRoomService.layer.draw();
    };
    return CornerPoint;
}());



/***/ }),

/***/ "../../../../../src/app/module/customer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Customer; });
var Customer = (function () {
    function Customer() {
        this.firstName = '';
        this.lastName = '';
        this.phone = '';
        this.address = '';
        this.cell = '';
        this.email = '';
        this.city = '';
        this.state = '';
        this.zip = '';
        this.cross_streets1 = '';
        this.cross_streets2 = '';
        this.salesperson1 = '';
        this.salesperson2 = '';
    }
    return Customer;
}());



/***/ }),

/***/ "../../../../../src/app/module/door.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Door; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__point__ = __webpack_require__("../../../../../src/app/module/point.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_konva__ = __webpack_require__("../../../../konva/konva.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_konva___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_konva__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__evented__ = __webpack_require__("../../../../../src/app/module/evented.ts");



var Door = (function () {
    function Door(data, layer, doorButtonService) {
        this.doorButtonService = doorButtonService;
        this.defaultLength = 3 * 3 * 12;
        this.doorLength = 0;
        this.lengthText1 = 3;
        this.lengthText2 = 0;
        this.isEditing = false;
        this.betweenLength = 0;
        this.betweenLength1 = 0;
        this.betweenLength2 = 0;
        this.isShowBetweenLength = false;
        this.note = '';
        this.initStartP = null;
        this.initEndP = null;
        this.doorRect = null; // Konva.Line or Konva.Rect
        // door contstants
        this.DOOR_FILL = '#eee';
        this.DOOR_STROKE = '#eee';
        this.DOOR_HEIGHT = 20;
        this.DOOR_LINE_STROKE = '#000';
        this.DOOR_LINE_STROKEWIDTH = 3;
        this.DOOR_SIGN_LINE_LENGTH = 20;
        this.DOOR_SIGN_LINE_STROKE = '#000';
        this.DOOR_SIGN_LINE_STROKEWIDTH = 1;
        this.DOOR_ARROW_POINTER_LENGTH = 5;
        this.DOOR_ARROW_POINTER_WIDTH = 5;
        this.DOOR_ARROW_FILL = '#000';
        this.DOOR_ARROW_STROKE = '#000';
        this.DOOR_ARROW_STROKEWIDTH = 1;
        this.DOOR_LENGTH_TEXT_FONTSIZE = 15;
        this.DOOR_LENGTH_TEXT_FONTFAMILY = 'Calibri';
        this.DOOR_LENGTH_TEXT_FILL = '#000';
        this.DOOR_TEXT_LENGTH = 50;
        this.DOOR_TEXT_HEIGHT = 20;
        this.DOOR_TYPE_TEXT_FONTSIZE = 24;
        this.DOOR_TYPE_TEXT_FONTFAMILY = 'Calibri';
        this.DOOR_TYPE_TEXT_FILL = '#888';
        this.DOOR_TYPE_TEXT_WIDTH = 500;
        this.DOOR_TYPE_TEXT_HEIGHT = 50;
        this.doorId = 'door_' + Math.floor(Math.random() * 100000 % 100000);
        this.parentWall = data.selectedWall;
        this.wallDirection = this.parentWall.wallDirection;
        // this.clickedPoint = this.parentWall.clickedPoint;
        this.defineClickedPoint();
        this.doorType = data.doorType;
        this.layer = layer;
        this.doorLength = this.defaultLength;
        this.definePoints();
        this.initUI();
        var me = this;
        __WEBPACK_IMPORTED_MODULE_2__evented__["a" /* Evented */].on('buttonrectclicked', function (e) {
            me.buttonRectClicked();
        });
        __WEBPACK_IMPORTED_MODULE_2__evented__["a" /* Evented */].on('buttonhouseclicked', function (e) {
            me.buttonHouseClicked();
        });
        __WEBPACK_IMPORTED_MODULE_2__evented__["a" /* Evented */].on('buttonroundclicked', function (e) {
            me.buttonRoundClicked();
        });
    }
    Door.prototype.initUI = function () {
        var lineParams = this.calcLineParams();
        this.firstLine = new __WEBPACK_IMPORTED_MODULE_1_konva__["Line"]({
            points: [lineParams.p1.x, lineParams.p1.y, lineParams.p2.x, lineParams.p2.y],
            stroke: this.DOOR_LINE_STROKE,
            strokeWidth: this.DOOR_LINE_STROKEWIDTH,
        });
        this.secondLine = new __WEBPACK_IMPORTED_MODULE_1_konva__["Line"]({
            points: [lineParams.p3.x, lineParams.p3.y, lineParams.p4.x, lineParams.p4.y],
            stroke: this.DOOR_LINE_STROKE,
            strokeWidth: this.DOOR_LINE_STROKEWIDTH,
        });
        var me = this;
        var params = this.calcRectParams();
        if (this.wallDirection === 'other') {
            this.doorRect = new __WEBPACK_IMPORTED_MODULE_1_konva__["Line"]({
                points: [lineParams.p1.x, lineParams.p1.y, lineParams.p2.x, lineParams.p2.y,
                    lineParams.p4.x, lineParams.p4.y, lineParams.p3.x, lineParams.p3.y],
                fill: '#f00',
                stroke: this.DOOR_STROKE,
                closed: true,
                draggable: true,
                dragBoundFunc: function (pos) {
                    me.showBetweenComponents(true);
                    return me.calcPos(pos);
                }
            });
        }
        else {
            this.doorRect = new __WEBPACK_IMPORTED_MODULE_1_konva__["Rect"]({
                x: params.x,
                y: params.y,
                width: params.width,
                height: params.height,
                fill: '#f00',
                stroke: this.DOOR_STROKE,
                draggable: true,
                dragBoundFunc: function (pos) {
                    me.showBetweenComponents(true);
                    return me.calcPos(pos);
                }
            });
        }
        this.doorRect.on('dragend', function (evt) {
            me.showBetweenComponents(false);
        });
        this.doorRect.on('click', function () {
            me.isEditing = !me.isEditing;
            me.doorButtonService.dblClickDoor(me);
            me.showBetweenComponents(me.isEditing);
            __WEBPACK_IMPORTED_MODULE_2__evented__["a" /* Evented */].fire('doorrect clicked', me);
        });
        var signLineParams = this.calcSignLineParams();
        this.firstSignLine = new __WEBPACK_IMPORTED_MODULE_1_konva__["Line"]({
            points: [signLineParams.p1.x, signLineParams.p1.y, signLineParams.p2.x, signLineParams.p2.y],
            stroke: this.DOOR_SIGN_LINE_STROKE,
            strokeWidth: this.DOOR_SIGN_LINE_STROKEWIDTH
        });
        this.secondSignLine = new __WEBPACK_IMPORTED_MODULE_1_konva__["Line"]({
            points: [signLineParams.p3.x, signLineParams.p3.y, signLineParams.p4.x, signLineParams.p4.y],
            stroke: this.DOOR_SIGN_LINE_STROKE,
            strokeWidth: this.DOOR_SIGN_LINE_STROKEWIDTH
        });
        var arrowParams = this.calcArrowParams();
        this.firstArrow = new __WEBPACK_IMPORTED_MODULE_1_konva__["Arrow"]({
            points: [arrowParams.p1.x, arrowParams.p1.y, arrowParams.p2.x, arrowParams.p2.y],
            pointerLength: this.DOOR_ARROW_POINTER_LENGTH,
            pointerWidth: this.DOOR_ARROW_POINTER_WIDTH,
            fill: this.DOOR_ARROW_FILL,
            stroke: this.DOOR_ARROW_STROKE,
            strokeWidth: this.DOOR_ARROW_STROKEWIDTH
        });
        this.secondArrow = new __WEBPACK_IMPORTED_MODULE_1_konva__["Arrow"]({
            points: [arrowParams.p3.x, arrowParams.p3.y, arrowParams.p4.x, arrowParams.p4.y],
            pointerLength: this.DOOR_ARROW_POINTER_LENGTH,
            pointerWidth: this.DOOR_ARROW_POINTER_WIDTH,
            fill: this.DOOR_ARROW_FILL,
            stroke: this.DOOR_ARROW_STROKE,
            strokeWidth: this.DOOR_ARROW_STROKEWIDTH
        });
        var midPoint = this.calcMidPoint();
        var lengthTexts = this.calcLengthTexts();
        this.lengthText = new __WEBPACK_IMPORTED_MODULE_1_konva__["Text"]({
            x: (signLineParams.p2.x + signLineParams.p4.x) / 2,
            y: (signLineParams.p2.y + signLineParams.p4.y) / 2,
            text: this.lengthText1 + "'" + this.lengthText2 + "\"",
            fontSize: this.DOOR_LENGTH_TEXT_FONTSIZE,
            fontFamily: this.DOOR_LENGTH_TEXT_FONTFAMILY,
            fill: this.DOOR_LENGTH_TEXT_FILL,
            align: 'center',
            width: this.DOOR_TEXT_LENGTH,
            height: this.DOOR_TEXT_HEIGHT
        });
        this.lengthTextRect = new __WEBPACK_IMPORTED_MODULE_1_konva__["Rect"]({
            x: (signLineParams.p2.x + signLineParams.p4.x) / 2,
            y: (signLineParams.p2.y + signLineParams.p4.y) / 2,
            fill: '#eee',
            width: this.DOOR_TEXT_LENGTH,
            height: this.DOOR_TEXT_HEIGHT
        });
        this.doorTypeText = new __WEBPACK_IMPORTED_MODULE_1_konva__["Text"]({
            x: midPoint.x,
            y: midPoint.y,
            text: this.doorType.toString(),
            fontSize: this.DOOR_TYPE_TEXT_FONTSIZE,
            fontFamily: this.DOOR_TYPE_TEXT_FONTFAMILY,
            fill: this.DOOR_TYPE_TEXT_FILL,
            align: 'center',
            width: this.DOOR_TYPE_TEXT_WIDTH,
            height: this.DOOR_TYPE_TEXT_HEIGHT,
        });
        this.revisionLengthTextAndDoorTypeText();
        var betweenParams = this.calcBetweenSignLineParams();
        this.betweenArrow1 = new __WEBPACK_IMPORTED_MODULE_1_konva__["Arrow"]({
            points: [betweenParams.firstArrowLineP1.x, betweenParams.firstArrowLineP1.y,
                betweenParams.firstArrowLineP2.x, betweenParams.firstArrowLineP2.y],
            pointerLength: this.DOOR_ARROW_POINTER_LENGTH,
            pointerWidth: this.DOOR_ARROW_POINTER_WIDTH,
            fill: this.DOOR_ARROW_FILL,
            stroke: this.DOOR_ARROW_STROKE,
            strokeWidth: this.DOOR_ARROW_STROKEWIDTH
        });
        this.betweenArrow2 = new __WEBPACK_IMPORTED_MODULE_1_konva__["Arrow"]({
            points: [betweenParams.secondArrowLineP1.x, betweenParams.secondArrowLineP1.y,
                betweenParams.secondArrowLineP2.x, betweenParams.secondArrowLineP2.y],
            pointerLength: this.DOOR_ARROW_POINTER_LENGTH,
            pointerWidth: this.DOOR_ARROW_POINTER_WIDTH,
            fill: this.DOOR_ARROW_FILL,
            stroke: this.DOOR_ARROW_STROKE,
            strokeWidth: this.DOOR_ARROW_STROKEWIDTH
        });
        this.betweenLengthText = new __WEBPACK_IMPORTED_MODULE_1_konva__["Text"]({
            x: betweenParams.midPoint.x,
            y: betweenParams.midPoint.y,
            text: this.betweenLength1 + "'" + this.betweenLength2 + "\"",
            fontSize: 20,
            fontFamily: this.DOOR_LENGTH_TEXT_FONTFAMILY,
            fill: this.DOOR_LENGTH_TEXT_FILL,
            width: this.DOOR_TEXT_LENGTH,
            height: this.DOOR_TEXT_HEIGHT,
            align: 'center',
        });
        this.betweenLengthTextRect = new __WEBPACK_IMPORTED_MODULE_1_konva__["Rect"]({
            x: betweenParams.midPoint.x,
            y: betweenParams.midPoint.y,
            width: this.DOOR_TEXT_LENGTH,
            height: this.DOOR_TEXT_HEIGHT,
            fill: '#eee'
        });
        this.betweenLengthText.on('click', function () {
            me.isShowBetweenLength = !me.isShowBetweenLength;
            __WEBPACK_IMPORTED_MODULE_2__evented__["a" /* Evented */].fire('door-between-length', me);
        });
        this.revisionBetweenLengthText();
        this.betweenSignLine = new __WEBPACK_IMPORTED_MODULE_1_konva__["Line"]({
            points: [this.parentWall.endP.x, this.parentWall.endP.y,
                betweenParams.endPSignLinePoint.x, betweenParams.endPSignLinePoint.y],
            stroke: this.DOOR_SIGN_LINE_STROKE,
            strokeWidth: this.DOOR_SIGN_LINE_STROKEWIDTH
        });
        this.layer.add(this.doorRect);
        this.layer.add(this.doorTypeText);
        this.layer.add(this.firstLine);
        this.layer.add(this.secondLine);
        this.layer.add(this.firstSignLine);
        this.layer.add(this.secondSignLine);
        this.layer.add(this.firstArrow);
        this.layer.add(this.secondArrow);
        if (this.wallDirection === 'other') {
            this.layer.add(this.lengthTextRect);
        }
        this.layer.add(this.lengthText);
        this.layer.add(this.betweenArrow1);
        this.layer.add(this.betweenArrow2);
        if (this.wallDirection === 'other') {
            this.layer.add(this.betweenLengthTextRect);
        }
        this.layer.add(this.betweenLengthText);
        this.layer.add(this.betweenSignLine);
        this.showBetweenComponents(false);
        this.layer.draw();
        this.doorTypeText.moveToBottom();
    };
    Door.prototype.definePoints = function () {
        switch (this.wallDirection) {
            case 'ltr':
                this.startP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.clickedPoint.x - this.doorLength / 2, this.clickedPoint.y);
                this.endP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.clickedPoint.x + this.doorLength / 2, this.clickedPoint.y);
                break;
            case 'rtl':
                this.endP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.clickedPoint.x - this.doorLength / 2, this.clickedPoint.y);
                this.startP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.clickedPoint.x + this.doorLength / 2, this.clickedPoint.y);
                break;
            case 'ttd':
                this.startP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.clickedPoint.x, this.clickedPoint.y - this.doorLength / 2);
                this.endP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.clickedPoint.x, this.clickedPoint.y + this.doorLength / 2);
                break;
            case 'dtt':
                this.endP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.clickedPoint.x, this.clickedPoint.y - this.doorLength / 2);
                this.startP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.clickedPoint.x, this.clickedPoint.y + this.doorLength / 2);
                break;
            case 'other':
                var angle = Math.atan((this.parentWall.endP.y - this.parentWall.startP.y)
                    / (this.parentWall.endP.x - this.parentWall.startP.x));
                var dy = Math.sin(angle) * this.doorLength / 2;
                var dx = dy * (this.parentWall.endP.x - this.parentWall.startP.x)
                    / (this.parentWall.endP.y - this.parentWall.startP.y);
                this.startP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.clickedPoint.x - dx, this.clickedPoint.y - dy);
                this.endP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.clickedPoint.x + dx, this.clickedPoint.y + dy);
                break;
            default:
                break;
        }
        this.oldStartP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.parentWall.startP.x, this.parentWall.startP.y);
        this.oldEndP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.parentWall.endP.x, this.parentWall.endP.y);
        if (!this.initStartP && !this.initEndP) {
            this.initStartP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.startP.x, this.startP.y);
            this.initEndP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.endP.x, this.endP.y);
        }
    };
    Door.prototype.redefinePoints = function () {
        var delta_x = 0, delta_y = 0;
        delta_x = this.parentWall.startP.x - this.oldStartP.x;
        delta_y = this.parentWall.startP.y - this.oldStartP.y;
        this.clickedPoint.x = this.clickedPoint.x + delta_x;
        this.clickedPoint.y = this.clickedPoint.y + delta_y;
        this.definePoints();
    };
    Door.prototype.calcRectParams = function () {
        var x, y, width, height;
        switch (this.wallDirection) {
            case 'ltr':
                x = this.startP.x;
                y = this.startP.y - this.DOOR_HEIGHT / 2;
                width = this.endP.x - this.startP.x;
                height = this.DOOR_HEIGHT;
                break;
            case 'rtl':
                x = this.endP.x;
                y = this.endP.y - this.DOOR_HEIGHT / 2;
                width = this.startP.x - this.endP.x;
                height = this.DOOR_HEIGHT;
                break;
            case 'ttd':
                x = this.startP.x - this.DOOR_HEIGHT / 2;
                y = this.startP.y;
                width = this.DOOR_HEIGHT;
                height = this.endP.y - this.startP.y;
                break;
            case 'dtt':
                x = this.endP.x - this.DOOR_HEIGHT / 2;
                y = this.endP.y;
                width = this.DOOR_HEIGHT;
                height = this.startP.y - this.endP.y;
                break;
            default:
                break;
        }
        return {
            x: x,
            y: y,
            width: width,
            height: height,
        };
    };
    Door.prototype.calcLineParams = function () {
        var p1, p2, p3, p4;
        switch (this.wallDirection) {
            case 'ltr':
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.startP.x, this.startP.y - this.DOOR_HEIGHT / 2);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.startP.x, this.startP.y + this.DOOR_HEIGHT / 2);
                p3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.endP.x, this.endP.y - this.DOOR_HEIGHT / 2);
                p4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.endP.x, this.endP.y + this.DOOR_HEIGHT / 2);
                break;
            case 'rtl':
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.endP.x, this.endP.y - this.DOOR_HEIGHT / 2);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.endP.x, this.endP.y + this.DOOR_HEIGHT / 2);
                p3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.startP.x, this.startP.y - this.DOOR_HEIGHT / 2);
                p4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.startP.x, this.startP.y + this.DOOR_HEIGHT / 2);
                break;
            case 'ttd':
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.startP.x - this.DOOR_HEIGHT / 2, this.startP.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.startP.x + this.DOOR_HEIGHT / 2, this.startP.y);
                p3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.endP.x - this.DOOR_HEIGHT / 2, this.endP.y);
                p4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.endP.x + this.DOOR_HEIGHT / 2, this.endP.y);
                break;
            case 'dtt':
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.endP.x - this.DOOR_HEIGHT / 2, this.endP.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.endP.x + this.DOOR_HEIGHT / 2, this.endP.y);
                p3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.startP.x - this.DOOR_HEIGHT / 2, this.startP.y);
                p4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.startP.x + this.DOOR_HEIGHT / 2, this.startP.y);
                break;
            case 'other':
                var angle = Math.atan((this.parentWall.endP.y - this.parentWall.startP.y)
                    / (this.parentWall.endP.x - this.parentWall.startP.x));
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.startP.x + this.DOOR_HEIGHT * Math.sin(-angle) / 2, this.startP.y + this.DOOR_HEIGHT * Math.cos(-angle) / 2);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.startP.x - this.DOOR_HEIGHT * Math.sin(-angle) / 2, this.startP.y - this.DOOR_HEIGHT * Math.cos(-angle) / 2);
                p3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.endP.x + this.DOOR_HEIGHT * Math.sin(-angle) / 2, this.endP.y + this.DOOR_HEIGHT * Math.cos(-angle) / 2);
                p4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.endP.x - this.DOOR_HEIGHT * Math.sin(-angle) / 2, this.endP.y - this.DOOR_HEIGHT * Math.cos(-angle) / 2);
                break;
            default:
                break;
        }
        return {
            p1: p1,
            p2: p2,
            p3: p3,
            p4: p4
        };
    };
    Door.prototype.calcSignLineParams = function () {
        var p1, p2, p3, p4;
        var paramsLine = this.calcLineParams();
        switch (this.wallDirection) {
            case 'ltr':
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p2.x, paramsLine.p2.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](p1.x, p1.y + this.DOOR_SIGN_LINE_LENGTH);
                p3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p4.x, paramsLine.p4.y);
                p4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](p3.x, p3.y + this.DOOR_SIGN_LINE_LENGTH);
                break;
            case 'rtl':
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p1.x, paramsLine.p1.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](p1.x, p1.y - this.DOOR_SIGN_LINE_LENGTH);
                p3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p3.x, paramsLine.p3.y);
                p4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](p3.x, p3.y - this.DOOR_SIGN_LINE_LENGTH);
                break;
            case 'ttd':
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p1.x, paramsLine.p1.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](p1.x - this.DOOR_SIGN_LINE_LENGTH, p1.y);
                p3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p3.x, paramsLine.p3.y);
                p4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](p3.x - this.DOOR_SIGN_LINE_LENGTH, p3.y);
                break;
            case 'dtt':
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p2.x, paramsLine.p2.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](p1.x + this.DOOR_SIGN_LINE_LENGTH, p1.y);
                p3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p4.x, paramsLine.p4.y);
                p4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](p3.x + this.DOOR_SIGN_LINE_LENGTH, p3.y);
                break;
            case 'other':
                var angle = Math.atan((this.parentWall.endP.y - this.parentWall.startP.y)
                    / (this.parentWall.endP.x - this.parentWall.startP.x));
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p1.x, paramsLine.p1.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p1.x + this.DOOR_SIGN_LINE_LENGTH * Math.sin(-angle), paramsLine.p1.y + this.DOOR_SIGN_LINE_LENGTH * Math.cos(-angle));
                p3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p3.x, paramsLine.p3.y);
                p4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p3.x + this.DOOR_SIGN_LINE_LENGTH * Math.sin(-angle), paramsLine.p3.y + this.DOOR_SIGN_LINE_LENGTH * Math.cos(-angle));
                break;
            default:
                break;
        }
        return {
            p1: p1,
            p2: p2,
            p3: p3,
            p4: p4
        };
    };
    Door.prototype.calcArrowParams = function () {
        var paramsLine = this.calcLineParams();
        var midPoint = this.calcMidPoint();
        var p1, p2, p3, p4;
        switch (this.wallDirection) {
            case 'ltr':
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](midPoint.x - this.DOOR_TEXT_LENGTH / 2, midPoint.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p1.x, midPoint.y);
                p3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](midPoint.x + this.DOOR_TEXT_LENGTH / 2, midPoint.y);
                p4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p3.x, midPoint.y);
                break;
            case 'rtl':
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](midPoint.x - this.DOOR_TEXT_LENGTH / 2, midPoint.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p2.x, midPoint.y);
                p3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](midPoint.x + this.DOOR_TEXT_LENGTH / 2, midPoint.y);
                p4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p4.x, midPoint.y);
                break;
            case 'ttd':
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](midPoint.x, midPoint.y - this.DOOR_TEXT_LENGTH / 2);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](midPoint.x, paramsLine.p2.y);
                p3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](midPoint.x, midPoint.y + this.DOOR_TEXT_LENGTH / 2);
                p4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](midPoint.x, paramsLine.p4.y);
                break;
            case 'dtt':
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](midPoint.x, midPoint.y - this.DOOR_TEXT_LENGTH / 2);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](midPoint.x, paramsLine.p1.y);
                p3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](midPoint.x, midPoint.y + this.DOOR_TEXT_LENGTH / 2);
                p4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](midPoint.x, paramsLine.p3.y);
                break;
            case 'other':
                var signLineParams = this.calcSignLineParams();
                // var point1 = new Konva.Circle({
                //     x: (signLineParams.p2.x + signLineParams.p4.x) / 2,
                //     y: (signLineParams.p2.y + signLineParams.p4.y) / 2,
                //     radius: 5,
                //     fill: '#00f'
                // });
                // p1 = new Point(midPoint.x, midPoint.y - this.DOOR_TEXT_LENGTH / 2);
                // p2 = new Point(midPoint.x, paramsLine.p1.y);
                // p3 = new Point(midPoint.x, midPoint.y + this.DOOR_TEXT_LENGTH / 2);
                // p4 = new Point(midPoint.x, paramsLine.p3.y);
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */]((signLineParams.p2.x + signLineParams.p4.x) / 2, (signLineParams.p2.y + signLineParams.p4.y) / 2);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](signLineParams.p2.x, signLineParams.p2.y);
                p3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */]((signLineParams.p2.x + signLineParams.p4.x) / 2, (signLineParams.p2.y + signLineParams.p4.y) / 2);
                p4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](signLineParams.p4.x, signLineParams.p4.y);
                break;
            default:
                break;
        }
        return {
            p1: p1,
            p2: p2,
            p3: p3,
            p4: p4
        };
    };
    Door.prototype.calcMidPoint = function () {
        var paramsLine = this.calcLineParams();
        var midPoint;
        switch (this.wallDirection) {
            case 'ltr':
                midPoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */]((paramsLine.p2.x + paramsLine.p4.x) / 2, paramsLine.p2.y + this.DOOR_SIGN_LINE_LENGTH / 2);
                break;
            case 'rtl':
                midPoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */]((paramsLine.p1.x + paramsLine.p3.x) / 2, paramsLine.p1.y - this.DOOR_SIGN_LINE_LENGTH / 2);
                break;
            case 'ttd':
                midPoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p1.x - this.DOOR_SIGN_LINE_LENGTH / 2, (paramsLine.p1.y + paramsLine.p3.y) / 2);
                break;
            case 'dtt':
                midPoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p2.x + this.DOOR_SIGN_LINE_LENGTH / 2, (paramsLine.p1.y + paramsLine.p3.y) / 2);
                break;
            case 'other':
                midPoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */]((paramsLine.p1.x + paramsLine.p3.x) / 2, (paramsLine.p1.y + paramsLine.p3.y) / 2);
                break;
            default:
                break;
        }
        return midPoint;
    };
    Door.prototype.calcLengthTexts = function () {
        this.doorLength = Math.sqrt((this.startP.x - this.endP.x) * (this.startP.x - this.endP.x)
            + (this.startP.y - this.endP.y) * (this.startP.y - this.endP.y));
        this.lengthText1 = (Math.floor(this.doorLength / 36));
        this.lengthText2 = (this.doorLength % 36) / 3;
    };
    Door.prototype.revisionLengthTextAndDoorTypeText = function () {
        var midPoint = this.calcMidPoint();
        switch (this.wallDirection) {
            case 'ltr':
                this.lengthText.x(midPoint.x - this.DOOR_TEXT_LENGTH / 2);
                this.lengthText.y(midPoint.y - this.DOOR_SIGN_LINE_LENGTH / 2);
                this.doorTypeText.x(midPoint.x - this.DOOR_TYPE_TEXT_WIDTH / 2);
                this.doorTypeText.y(midPoint.y - this.DOOR_SIGN_LINE_LENGTH * 4);
                break;
            case 'rtl':
                this.lengthText.x(midPoint.x - this.DOOR_TEXT_LENGTH / 2);
                this.lengthText.y(midPoint.y - this.DOOR_SIGN_LINE_LENGTH / 2);
                this.doorTypeText.x(midPoint.x - this.DOOR_TYPE_TEXT_WIDTH / 2);
                this.doorTypeText.y(midPoint.y + this.DOOR_SIGN_LINE_LENGTH * 3);
                break;
            case 'ttd':
                this.lengthText.rotation(-90);
                this.doorTypeText.rotation(-90);
                this.lengthText.x(midPoint.x - this.DOOR_SIGN_LINE_LENGTH / 2);
                this.lengthText.y(midPoint.y + this.DOOR_TEXT_LENGTH / 2);
                this.doorTypeText.x(midPoint.x + this.DOOR_SIGN_LINE_LENGTH * 3);
                this.doorTypeText.y(midPoint.y + this.DOOR_TYPE_TEXT_WIDTH / 2);
                break;
            case 'dtt':
                this.lengthText.rotation(90);
                this.doorTypeText.rotation(90);
                this.lengthText.x(midPoint.x + this.DOOR_SIGN_LINE_LENGTH / 2);
                this.lengthText.y(midPoint.y - this.DOOR_TEXT_LENGTH / 2);
                this.doorTypeText.x(midPoint.x - this.DOOR_SIGN_LINE_LENGTH * 3);
                this.doorTypeText.y(midPoint.y - this.DOOR_TYPE_TEXT_WIDTH / 2);
                break;
            case 'other':
                var angle = Math.atan((this.parentWall.endP.y - this.parentWall.startP.y)
                    / (this.parentWall.endP.x - this.parentWall.startP.x));
                this.lengthText.rotation(angle * 180 / Math.PI);
                this.lengthText.offsetX(this.DOOR_TEXT_LENGTH / 2);
                this.lengthText.offsetY(this.DOOR_TEXT_HEIGHT / 2);
                this.doorTypeText.rotation(angle * 180 / Math.PI);
                this.doorTypeText.offsetX(this.DOOR_TYPE_TEXT_WIDTH / 2);
                this.doorTypeText.offsetY(this.DOOR_TYPE_TEXT_HEIGHT * 2 * (this.parentWall.endP.x - this.parentWall.startP.x)
                    / Math.abs(this.parentWall.endP.x - this.parentWall.startP.x));
                this.lengthTextRect.rotation(angle * 180 / Math.PI);
                this.lengthTextRect.offsetX(this.DOOR_TEXT_LENGTH / 2);
                this.lengthTextRect.offsetY(this.DOOR_TEXT_HEIGHT / 2);
                break;
            default:
                break;
        }
    };
    Door.prototype.revisionBetweenLengthText = function () {
        var midPoint = this.calcBetweenSignLineParams().midPoint;
        switch (this.wallDirection) {
            case 'ltr':
                this.betweenLengthText.x(midPoint.x - this.DOOR_TEXT_LENGTH / 2);
                this.betweenLengthText.y(midPoint.y - this.DOOR_SIGN_LINE_LENGTH / 2);
                break;
            case 'rtl':
                this.betweenLengthText.x(midPoint.x - this.DOOR_TEXT_LENGTH / 2);
                this.betweenLengthText.y(midPoint.y - this.DOOR_SIGN_LINE_LENGTH / 2);
                break;
            case 'ttd':
                this.betweenLengthText.rotation(-90);
                this.betweenLengthText.x(midPoint.x - this.DOOR_SIGN_LINE_LENGTH / 2);
                this.betweenLengthText.y(midPoint.y + this.DOOR_TEXT_LENGTH / 2);
                break;
            case 'dtt':
                this.betweenLengthText.rotation(90);
                this.betweenLengthText.x(midPoint.x + this.DOOR_SIGN_LINE_LENGTH / 2);
                this.betweenLengthText.y(midPoint.y - this.DOOR_TEXT_LENGTH / 2);
                break;
            case 'other':
                var angle = Math.atan((this.parentWall.endP.y - this.parentWall.startP.y)
                    / (this.parentWall.endP.x - this.parentWall.startP.x));
                this.betweenLengthTextRect.rotation(angle * 180 / Math.PI);
                this.betweenLengthText.rotation(angle * 180 / Math.PI);
                this.betweenLengthText.offsetX(this.DOOR_TEXT_LENGTH / 2);
                this.betweenLengthText.offsetY(this.DOOR_TEXT_HEIGHT / 2);
                this.betweenLengthTextRect.offsetX(this.DOOR_TEXT_LENGTH / 2);
                this.betweenLengthTextRect.offsetY(this.DOOR_TEXT_HEIGHT / 2);
                break;
            default:
                break;
        }
    };
    Door.prototype.redrawAll = function () {
        this.redefinePoints();
        var params = this.calcRectParams();
        var lineParams = this.calcLineParams();
        this.firstLine.points([lineParams.p1.x, lineParams.p1.y, lineParams.p2.x, lineParams.p2.y]);
        this.secondLine.points([lineParams.p3.x, lineParams.p3.y, lineParams.p4.x, lineParams.p4.y]);
        var signLineParams = this.calcSignLineParams();
        this.firstSignLine.points([signLineParams.p1.x, signLineParams.p1.y, signLineParams.p2.x, signLineParams.p2.y]);
        this.secondSignLine.points([signLineParams.p3.x, signLineParams.p3.y, signLineParams.p4.x, signLineParams.p4.y]);
        var arrowParams = this.calcArrowParams();
        this.firstArrow.points([arrowParams.p1.x, arrowParams.p1.y, arrowParams.p2.x, arrowParams.p2.y]);
        this.secondArrow.points([arrowParams.p3.x, arrowParams.p3.y, arrowParams.p4.x, arrowParams.p4.y]);
        this.calcLengthTexts();
        this.lengthText.text(this.lengthText1 + "'" + this.lengthText2 + "\"");
        this.revisionLengthTextAndDoorTypeText();
        var betweenParams = this.calcBetweenSignLineParams();
        this.betweenArrow1.points([betweenParams.firstArrowLineP1.x, betweenParams.firstArrowLineP1.y,
            betweenParams.firstArrowLineP2.x, betweenParams.firstArrowLineP2.y]);
        this.betweenArrow2.points([betweenParams.secondArrowLineP1.x, betweenParams.secondArrowLineP1.y,
            betweenParams.secondArrowLineP2.x, betweenParams.secondArrowLineP2.y]);
        this.betweenLengthText.x(betweenParams.midPoint.x);
        this.betweenLengthText.y(betweenParams.midPoint.y);
        this.betweenLengthText.text(this.betweenLength1 + "'" + this.betweenLength2 + "\"");
        this.betweenSignLine.points([this.parentWall.endP.x, this.parentWall.endP.y,
            betweenParams.endPSignLinePoint.x, betweenParams.endPSignLinePoint.y]);
        this.revisionBetweenLengthText();
        this.layer.draw();
    };
    Door.prototype.redrawDoorRect = function () {
        this.redefinePoints();
        var dot = new __WEBPACK_IMPORTED_MODULE_1_konva__["Circle"]({
            x: this.clickedPoint.x,
            y: this.clickedPoint.y,
            radius: 5,
            fill: '#000'
        });
        this.layer.add(dot);
        if (this.wallDirection === 'other') {
            var lineParams = this.calcLineParams();
            this.doorRect.points([lineParams.p1.x, lineParams.p1.y, lineParams.p2.x, lineParams.p2.y,
                lineParams.p4.x, lineParams.p4.y, lineParams.p3.x, lineParams.p3.y]);
        }
        else {
            var params = this.calcRectParams();
            this.doorRect.x(params.x);
            this.doorRect.y(params.y);
            this.doorRect.width(params.width);
            this.doorRect.height(params.height);
        }
    };
    Door.prototype.calcPos = function (pos) {
        var stageABS = this.doorRect.getStage().getAbsolutePosition();
        var returnPos = { x: 0, y: 0 };
        var params = this.calcRectParams();
        var rectABS = this.doorRect.getAbsolutePosition();
        var rectPos = this.doorRect.getPosition();
        switch (this.wallDirection) {
            case 'ltr':
                var x = pos.x;
                if (pos.x < this.parentWall.startP.x) {
                    x = this.parentWall.startP.x;
                }
                if (pos.x + this.doorLength > this.parentWall.endP.x) {
                    x = this.parentWall.endP.x - this.doorLength;
                }
                returnPos.x = x;
                returnPos.y = params.y;
                this.clickedPoint.x = rectPos.x + this.doorLength / 2;
                break;
            case 'rtl':
                var x = pos.x;
                if (pos.x < this.parentWall.endP.x) {
                    x = this.parentWall.endP.x;
                }
                if (pos.x + this.doorLength > this.parentWall.startP.x) {
                    x = this.parentWall.startP.x - this.doorLength;
                }
                returnPos.x = x;
                returnPos.y = params.y;
                this.clickedPoint.x = rectPos.x + this.doorLength / 2;
                break;
            case 'ttd':
                var y = pos.y;
                if (pos.y < this.parentWall.startP.y) {
                    y = this.parentWall.startP.y;
                }
                if (pos.y + this.doorLength > this.parentWall.endP.y) {
                    y = this.parentWall.endP.y - this.doorLength;
                }
                returnPos.x = params.x;
                returnPos.y = y;
                this.clickedPoint.y = rectPos.y + this.doorLength / 2;
                break;
            case 'dtt':
                var y = pos.y;
                if (pos.y < this.parentWall.endP.y) {
                    y = this.parentWall.endP.y;
                }
                if (pos.y + this.doorLength > this.parentWall.startP.y) {
                    y = this.parentWall.startP.y - this.doorLength;
                }
                returnPos.x = params.x;
                returnPos.y = y;
                this.clickedPoint.y = rectPos.y + this.doorLength / 2;
                break;
            case 'other':
                var dx1 = this.parentWall.startP.x - this.initStartP.x;
                var dx2 = this.parentWall.endP.x - this.initEndP.x;
                var maxX = dx1 > dx2 ? dx1 : dx2;
                var minX = dx1 > dx2 ? dx2 : dx1;
                var dx = this.parentWall.endP.x - this.parentWall.startP.x;
                var dxX = this.initEndP.x - this.initStartP.x;
                if (dx < 0) {
                    maxX -= dxX;
                    minX += dxX;
                }
                if (pos.x > maxX) {
                    returnPos.x = maxX;
                }
                else if (pos.x < minX) {
                    returnPos.x = minX;
                }
                else {
                    returnPos.x = pos.x;
                }
                returnPos.y = (this.parentWall.endP.y - this.parentWall.startP.y)
                    / (this.parentWall.endP.x - this.parentWall.startP.x)
                    * returnPos.x;
                this.clickedPoint.y = this.initClickedPoint.y + rectABS.y;
                this.clickedPoint.x = this.initClickedPoint.x + rectABS.x;
                break;
            default:
                break;
        }
        returnPos.x += stageABS.x;
        returnPos.y += stageABS.y;
        this.redrawAll();
        return returnPos;
    };
    Door.prototype.calcBetweenSignLineParams = function () {
        var signLineParams = this.calcSignLineParams();
        var midPoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](0, 0);
        var endPSignLinePoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](0, 0);
        var firstArrowLineP1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](0, 0);
        var firstArrowLineP2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](0, 0);
        var secondArrowLineP1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](0, 0);
        var secondArrowLineP2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](0, 0);
        switch (this.wallDirection) {
            case 'ltr':
                midPoint.x = (signLineParams.p4.x + this.parentWall.endP.x) / 2;
                midPoint.y = signLineParams.p3.y + this.DOOR_SIGN_LINE_LENGTH / 2;
                firstArrowLineP1.x = midPoint.x - this.DOOR_TEXT_LENGTH / 2;
                firstArrowLineP1.y = midPoint.y;
                firstArrowLineP2.x = signLineParams.p4.x;
                firstArrowLineP2.y = midPoint.y;
                secondArrowLineP1.x = midPoint.x + this.DOOR_TEXT_LENGTH / 2;
                secondArrowLineP1.y = midPoint.y;
                secondArrowLineP2.x = this.parentWall.endP.x;
                secondArrowLineP2.y = midPoint.y;
                endPSignLinePoint.x = this.parentWall.endP.x;
                endPSignLinePoint.y = this.parentWall.endP.y + this.DOOR_SIGN_LINE_LENGTH + this.DOOR_HEIGHT / 2;
                this.betweenLength = this.parentWall.endP.x - this.clickedPoint.x - this.doorLength / 2;
                break;
            case 'rtl':
                midPoint.x = (signLineParams.p2.x + this.parentWall.endP.x) / 2;
                midPoint.y = signLineParams.p2.y + this.DOOR_SIGN_LINE_LENGTH / 2;
                firstArrowLineP1.x = midPoint.x + this.DOOR_TEXT_LENGTH / 2;
                firstArrowLineP1.y = midPoint.y;
                firstArrowLineP2.x = signLineParams.p2.x;
                firstArrowLineP2.y = midPoint.y;
                secondArrowLineP1.x = midPoint.x - this.DOOR_TEXT_LENGTH / 2;
                secondArrowLineP1.y = midPoint.y;
                secondArrowLineP2.x = this.parentWall.endP.x;
                secondArrowLineP2.y = midPoint.y;
                endPSignLinePoint.x = this.parentWall.endP.x;
                endPSignLinePoint.y = this.parentWall.endP.y - this.DOOR_SIGN_LINE_LENGTH - this.DOOR_HEIGHT / 2;
                this.betweenLength = this.clickedPoint.x - this.parentWall.endP.x - this.doorLength / 2;
                break;
            case 'ttd':
                midPoint.x = signLineParams.p3.x - this.DOOR_SIGN_LINE_LENGTH / 2;
                midPoint.y = (signLineParams.p3.y + this.parentWall.endP.y) / 2;
                firstArrowLineP1.x = midPoint.x;
                firstArrowLineP1.y = midPoint.y - this.DOOR_TEXT_LENGTH / 2;
                firstArrowLineP2.x = midPoint.x;
                firstArrowLineP2.y = signLineParams.p3.y;
                secondArrowLineP1.x = midPoint.x;
                secondArrowLineP1.y = midPoint.y + this.DOOR_TEXT_LENGTH / 2;
                secondArrowLineP2.x = midPoint.x;
                secondArrowLineP2.y = this.parentWall.endP.y;
                endPSignLinePoint.x = this.parentWall.endP.x - this.DOOR_SIGN_LINE_LENGTH - this.DOOR_HEIGHT / 2;
                endPSignLinePoint.y = this.parentWall.endP.y;
                this.betweenLength = this.parentWall.endP.y - this.clickedPoint.y - this.doorLength / 2;
                break;
            case 'dtt':
                midPoint.x = signLineParams.p2.x - this.DOOR_SIGN_LINE_LENGTH / 2;
                midPoint.y = (signLineParams.p2.y + this.parentWall.endP.y) / 2;
                firstArrowLineP1.x = midPoint.x;
                firstArrowLineP1.y = midPoint.y + this.DOOR_TEXT_LENGTH / 2;
                firstArrowLineP2.x = midPoint.x;
                firstArrowLineP2.y = signLineParams.p2.y;
                secondArrowLineP1.x = midPoint.x;
                secondArrowLineP1.y = midPoint.y - this.DOOR_TEXT_LENGTH / 2;
                secondArrowLineP2.x = midPoint.x;
                secondArrowLineP2.y = this.parentWall.endP.y;
                endPSignLinePoint.x = this.parentWall.endP.x + this.DOOR_SIGN_LINE_LENGTH + this.DOOR_HEIGHT / 2;
                endPSignLinePoint.y = this.parentWall.endP.y;
                this.betweenLength = this.clickedPoint.y - this.parentWall.endP.y - this.doorLength / 2;
                break;
            case 'other':
                var signLineParams = this.calcSignLineParams();
                var angle = Math.atan((this.parentWall.endP.y - this.parentWall.startP.y)
                    / (this.parentWall.endP.x - this.parentWall.startP.x));
                endPSignLinePoint.x = this.parentWall.endP.x + (this.DOOR_SIGN_LINE_LENGTH + this.DOOR_HEIGHT / 2) * Math.sin(-angle);
                endPSignLinePoint.y = this.parentWall.endP.y + (this.DOOR_SIGN_LINE_LENGTH + this.DOOR_HEIGHT / 2) * Math.cos(-angle);
                if (this.parentWall.endP.x - this.parentWall.startP.x > 0) {
                    midPoint.x = (signLineParams.p4.x + endPSignLinePoint.x) / 2;
                    midPoint.y = (signLineParams.p4.y + endPSignLinePoint.y) / 2;
                    firstArrowLineP2.x = signLineParams.p4.x;
                    firstArrowLineP2.y = signLineParams.p4.y;
                }
                else {
                    midPoint.x = (signLineParams.p2.x + endPSignLinePoint.x) / 2;
                    midPoint.y = (signLineParams.p2.y + endPSignLinePoint.y) / 2;
                    firstArrowLineP2.x = signLineParams.p2.x;
                    firstArrowLineP2.y = signLineParams.p2.y;
                }
                firstArrowLineP1.x = midPoint.x;
                firstArrowLineP1.y = midPoint.y;
                secondArrowLineP1.x = midPoint.x;
                secondArrowLineP1.y = midPoint.y;
                secondArrowLineP2.x = endPSignLinePoint.x;
                secondArrowLineP2.y = endPSignLinePoint.y;
                var dx = this.parentWall.endP.x - this.clickedPoint.x;
                var dy = this.parentWall.endP.y - this.clickedPoint.y;
                // this.betweenLength = this.clickedPoint.y - this.parentWall.endP.y - this.doorLength / 2;
                this.betweenLength = Math.sqrt(dx * dx + dy * dy) - this.doorLength / 2;
                break;
            default:
                break;
        }
        this.betweenLength1 = Math.floor(this.betweenLength / 36);
        this.betweenLength2 = Number((this.betweenLength % 36 / 3).toFixed(0));
        this.betweenMidPoint = midPoint;
        return {
            midPoint: midPoint,
            firstArrowLineP1: firstArrowLineP1,
            firstArrowLineP2: firstArrowLineP2,
            secondArrowLineP1: secondArrowLineP1,
            secondArrowLineP2: secondArrowLineP2,
            endPSignLinePoint: endPSignLinePoint
        };
    };
    Door.prototype.buttonRectClicked = function () {
        this.removeAll();
    };
    Door.prototype.buttonHouseClicked = function () {
        this.removeAll();
    };
    Door.prototype.buttonRoundClicked = function () {
        this.removeAll();
    };
    Door.prototype.removeAll = function () {
        this.doorRect.remove();
        this.doorTypeText.remove();
        this.firstLine.remove();
        this.secondLine.remove();
        this.firstSignLine.remove();
        this.secondSignLine.remove();
        this.firstArrow.remove();
        this.secondArrow.remove();
        this.lengthText.remove();
        this.betweenArrow1.remove();
        this.betweenArrow2.remove();
        this.betweenLengthText.remove();
        this.betweenSignLine.remove();
    };
    Door.prototype.showBetweenComponents = function (isShow) {
        if (isShow) {
            this.betweenArrow1.show();
            this.betweenArrow2.show();
            this.betweenLengthText.show();
            this.betweenSignLine.show();
        }
        else {
            this.betweenArrow1.hide();
            this.betweenArrow2.hide();
            this.betweenLengthText.hide();
            this.betweenSignLine.hide();
        }
        this.layer.draw();
    };
    Door.prototype.defineClickedPoint = function () {
        var stageABS = this.parentWall.group.getStage().getAbsolutePosition();
        if (this.parentWall.wallDirection === 'ltr' || this.parentWall.wallDirection === 'rtl') {
            this.clickedPoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.parentWall.clickedPoint.x - stageABS.x, this.parentWall.clickedPoint.y);
        }
        if (this.parentWall.wallDirection === 'ttd' || this.parentWall.wallDirection === 'dtt') {
            this.clickedPoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.parentWall.clickedPoint.x, this.parentWall.clickedPoint.y - stageABS.y);
        }
        if (this.parentWall.wallDirection === 'other') {
            this.clickedPoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.parentWall.clickedPoint.x - stageABS.x, this.parentWall.clickedPoint.y - stageABS.y);
        }
        this.initClickedPoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.clickedPoint.x, this.clickedPoint.y);
    };
    return Door;
}());



/***/ }),

/***/ "../../../../../src/app/module/evented.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Evented; });
/* unused harmony export Event */
var Evented = (function () {
    function Evented() {
        this._listeners = {};
    }
    Evented.prototype.on = function (eventName, listener) {
        return Evented._on(this, eventName, listener);
    };
    Evented.prototype.off = function (eventName, listener) {
        Evented._off(eventName, this, listener);
    };
    Evented.prototype.fire = function (eventName, eventArgs, eventTarget) {
        if (eventTarget === void 0) { eventTarget = this; }
        Evented._fire(this, eventName, eventArgs, eventTarget);
    };
    Evented.prototype.listensTo = function (eventName) {
        return Evented._listensTo(this, eventName);
    };
    Evented.prototype.listeners = function (eventName) {
        return Evented._listeners(this, eventName);
    };
    Evented.fire = function (eventName, eventArgs, eventTarget) {
        Evented._fire(undefined, eventName, eventArgs, eventTarget);
    };
    Evented.on = function (eventName, listener) {
        return Evented._on(undefined, eventName, listener);
    };
    Evented.off = function (eventName, listener) {
        Evented._off(eventName, undefined, listener);
    };
    Evented.listensTo = function (eventName) {
        return Evented._listensTo(undefined, eventName);
    };
    Evented.listeners = function (eventName) {
        return Evented._listeners(undefined, eventName);
    };
    Evented._on = function (instance, eventName, listener) {
        var listeners;
        if (instance) {
            listeners = instance._listeners;
        }
        else {
            listeners = Evented.globalListeners;
        }
        if (listeners[eventName] === undefined) {
            listeners[eventName] = [];
        }
        listeners[eventName].push(listener);
        return function () { return Evented._off(eventName, instance, listener); };
    };
    Evented._off = function (eventName, instance, listener) {
        var eventListeners, listeners;
        if (instance) {
            listeners = instance._listeners;
        }
        else {
            listeners = Evented.globalListeners;
        }
        eventListeners = listeners[eventName];
        if (eventListeners instanceof Array) {
            if (!listener) {
                listeners[eventName] = undefined;
            }
            else {
                listeners[eventName] = eventListeners.filter(function (l) { return l !== listener; });
            }
        }
    };
    Evented._fire = function (instance, eventName, eventArgs, eventTarget) {
        var eventListeners, listeners, thisArg;
        if (instance) {
            listeners = instance._listeners;
            thisArg = instance;
        }
        else {
            listeners = Evented.globalListeners;
            thisArg = Evented;
        }
        eventListeners = listeners[eventName];
        if (eventListeners instanceof Array) {
            eventListeners.forEach(function (l) {
                l.call(thisArg, new Event(eventName, eventArgs, eventTarget));
            });
        }
    };
    Evented._listensTo = function (instance, eventName) {
        var listeners;
        if (instance) {
            listeners = instance._listeners;
        }
        else {
            listeners = Evented.globalListeners;
        }
        return (listeners[eventName] instanceof Array && listeners[eventName].length > 0);
    };
    Evented._listeners = function (instance, eventName) {
        var listeners;
        if (instance) {
            listeners = instance._listeners;
        }
        else {
            listeners = Evented.globalListeners;
        }
        return listeners[eventName];
    };
    Evented.globalListeners = {};
    return Evented;
}());

var Event = (function () {
    function Event(name, args, target) {
        this._name = name;
        this._args = args;
        this._target = target;
    }
    Object.defineProperty(Event.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "args", {
        get: function () {
            return this._args;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "target", {
        get: function () {
            return this._target;
        },
        enumerable: true,
        configurable: true
    });
    return Event;
}());



/***/ }),

/***/ "../../../../../src/app/module/flooring.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Flooring; });
var Flooring = (function () {
    function Flooring(id, name) {
        this.id = id;
        this.name = name;
    }
    return Flooring;
}());



/***/ }),

/***/ "../../../../../src/app/module/funiture.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Furniture; });
var Furniture = (function () {
    function Furniture(id, name) {
        this.id = id;
        this.name = name;
    }
    return Furniture;
}());



/***/ }),

/***/ "../../../../../src/app/module/group.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Group; });
var Group = (function () {
    function Group() {
        this.rooms = [];
        this.groupingRooms = [];
        this.groupId = 'group_' + Math.floor(Math.random() * 100000 % 100000);
    }
    return Group;
}());



/***/ }),

/***/ "../../../../../src/app/module/groupcloset.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupCloset; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_konva__ = __webpack_require__("../../../../konva/konva.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_konva___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_konva__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__("../../../../../src/app/module/point.ts");


var GroupCloset = (function () {
    // constructor(topleftPoint: Point, layer: Konva.Layer) {
    function GroupCloset(_groupRoom, closet) {
        this._groupRoom = _groupRoom;
        // constants
        this.CLOSET_RECT_DEFAULT_WIDTH = 5 * 36;
        this.CLOSET_RECT_DEFAULT_HEIGT = 8 * 36;
        this.CLOSET_RECT_STROKE = '#000';
        this.CLOSET_RECT_STROKEWIDTH = 3;
        this.CLOSET_TEXT_WIDTH = 50;
        this.parentRoom = _groupRoom;
        this.parentCloset = closet;
        this.topleftPoint = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.parentCloset.topleftPoint.x, this.parentCloset.topleftPoint.y);
        this.layer = this.parentRoom.layer;
        this.group = this._groupRoom.group;
        this.initUI();
        this.layer.add(this.group);
        this.layer.draw();
    }
    GroupCloset.prototype.initUI = function () {
        var me = this;
        this.rect = new __WEBPACK_IMPORTED_MODULE_0_konva__["Rect"]({
            x: me.topleftPoint.x,
            y: me.topleftPoint.y,
            width: me.CLOSET_RECT_DEFAULT_WIDTH,
            height: me.CLOSET_RECT_DEFAULT_HEIGT,
            stroke: me.CLOSET_RECT_STROKE,
            strokeWidth: me.CLOSET_RECT_STROKEWIDTH
        });
        this.ciText = new __WEBPACK_IMPORTED_MODULE_0_konva__["Text"]({
            x: me.topleftPoint.x + me.CLOSET_RECT_DEFAULT_WIDTH / 2 - me.CLOSET_TEXT_WIDTH / 2,
            y: me.topleftPoint.y + me.CLOSET_RECT_DEFAULT_HEIGT / 2,
            text: 'CI',
            width: me.CLOSET_TEXT_WIDTH,
            align: 'center',
            fontSize: 30
        });
        this.group.add(this.rect);
        this.group.add(this.ciText);
    };
    GroupCloset.prototype.removeAll = function () {
        this.group.remove();
    };
    return GroupCloset;
}());



/***/ }),

/***/ "../../../../../src/app/module/groupdoor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupDoor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__point__ = __webpack_require__("../../../../../src/app/module/point.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_konva__ = __webpack_require__("../../../../konva/konva.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_konva___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_konva__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__evented__ = __webpack_require__("../../../../../src/app/module/evented.ts");



var GroupDoor = (function () {
    function GroupDoor(_parentWall, _door) {
        this._parentWall = _parentWall;
        this._door = _door;
        this.merggedDoor = null;
        this.doorLength = 0;
        this.lengthText1 = 3;
        this.lengthText2 = 0;
        // door contstants
        this.DOOR_FILL = '#fff';
        this.DOOR_STROKE = '#fff';
        this.DOOR_HEIGHT = 20;
        this.DOOR_MERGGED_FILL = '#F00';
        this.DOOR_LINE_STROKE = '#000';
        this.DOOR_LINE_STROKEWIDTH = 3;
        this.DOOR_SIGN_LINE_LENGTH = 20;
        this.DOOR_SIGN_LINE_STROKE = '#000';
        this.DOOR_SIGN_LINE_STROKEWIDTH = 1;
        this.DOOR_ARROW_POINTER_LENGTH = 5;
        this.DOOR_ARROW_POINTER_WIDTH = 5;
        this.DOOR_ARROW_FILL = '#000';
        this.DOOR_ARROW_STROKE = '#000';
        this.DOOR_ARROW_STROKEWIDTH = 1;
        this.DOOR_LENGTH_TEXT_FONTSIZE = 15;
        this.DOOR_LENGTH_TEXT_FONTFAMILY = 'Calibri';
        this.DOOR_LENGTH_TEXT_FILL = '#000';
        this.DOOR_TEXT_LENGTH = 50;
        this.DOOR_TEXT_HEIGHT = 0;
        this.DOOR_TYPE_TEXT_FONTSIZE = 24;
        this.DOOR_TYPE_TEXT_FONTFAMILY = 'Calibri';
        this.DOOR_TYPE_TEXT_FILL = '#888';
        this.DOOR_TYPE_TEXT_WIDTH = 500;
        this.DOOR_TYPE_TEXT_HEIGHT = 50;
        this.parentWall = _parentWall;
        this.layer = _parentWall.layer;
        this.group = _parentWall.group;
        this.stage = _parentWall.stage;
        this.doorId = 'groupdoor_' + Math.floor(Math.random() * 100000 % 100000);
        this.wallDirection = _door.wallDirection;
        this.doorLength = _door.doorLength;
        this.clickedPoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](_door.clickedPoint.x, _door.clickedPoint.y);
        this.doorType = _door.doorType;
        this.initDoor();
        var me = this;
        // Evented.on('stage-dragging', (e) => {
        //     console.log(me.doorRect.getClientRect());
        // });
        // Evented.on('group-room-dragging', (e) => {
        //     me.checkMergeDoor(e.args);
        // });
        // Evented.on('group-room-end-dragging', (e) => {
        //     if (me.merggedDoor) {
        //         me.merggedDoor.drawMerggedDoor(true);
        //         me.merggedDoor.redrawByMergging(me);
        //     }
        // });
        __WEBPACK_IMPORTED_MODULE_2__evented__["a" /* Evented */].on('group-room-start-dragging', function (e) {
            // me.drawMerggedDoor(false);
            // me.merggedDoor = null;
            me.show();
        });
        // Evented.on('submit', (e) => {
        //     console.log(me.group.getAbsolutePosition());
        // });
    }
    GroupDoor.prototype.initDoor = function () {
        this.definePoints();
        var params = this.calcRectParams();
        this.doorRect = new __WEBPACK_IMPORTED_MODULE_1_konva__["Rect"]({
            x: params.x,
            y: params.y,
            width: params.width,
            height: params.height,
            fill: this.DOOR_FILL,
            stroke: this.DOOR_STROKE,
        });
        var lineParams = this.calcLineParams();
        this.firstLine = new __WEBPACK_IMPORTED_MODULE_1_konva__["Line"]({
            points: [lineParams.p1.x, lineParams.p1.y, lineParams.p2.x, lineParams.p2.y],
            stroke: this.DOOR_LINE_STROKE,
            strokeWidth: this.DOOR_LINE_STROKEWIDTH,
        });
        this.secondLine = new __WEBPACK_IMPORTED_MODULE_1_konva__["Line"]({
            points: [lineParams.p3.x, lineParams.p3.y, lineParams.p4.x, lineParams.p4.y],
            stroke: this.DOOR_LINE_STROKE,
            strokeWidth: this.DOOR_LINE_STROKEWIDTH,
        });
        var signLineParams = this.calcSignLineParams();
        this.firstSignLine = new __WEBPACK_IMPORTED_MODULE_1_konva__["Line"]({
            points: [signLineParams.p1.x, signLineParams.p1.y, signLineParams.p2.x, signLineParams.p2.y],
            stroke: this.DOOR_SIGN_LINE_STROKE,
            strokeWidth: this.DOOR_SIGN_LINE_STROKEWIDTH
        });
        this.secondSignLine = new __WEBPACK_IMPORTED_MODULE_1_konva__["Line"]({
            points: [signLineParams.p3.x, signLineParams.p3.y, signLineParams.p4.x, signLineParams.p4.y],
            stroke: this.DOOR_SIGN_LINE_STROKE,
            strokeWidth: this.DOOR_SIGN_LINE_STROKEWIDTH
        });
        var arrowParams = this.calcArrowParams();
        this.firstArrow = new __WEBPACK_IMPORTED_MODULE_1_konva__["Arrow"]({
            points: [arrowParams.p1.x, arrowParams.p1.y, arrowParams.p2.x, arrowParams.p2.y],
            pointerLength: this.DOOR_ARROW_POINTER_LENGTH,
            pointerWidth: this.DOOR_ARROW_POINTER_WIDTH,
            fill: this.DOOR_ARROW_FILL,
            stroke: this.DOOR_ARROW_STROKE,
            strokeWidth: this.DOOR_ARROW_STROKEWIDTH
        });
        this.secondArrow = new __WEBPACK_IMPORTED_MODULE_1_konva__["Arrow"]({
            points: [arrowParams.p3.x, arrowParams.p3.y, arrowParams.p4.x, arrowParams.p4.y],
            pointerLength: this.DOOR_ARROW_POINTER_LENGTH,
            pointerWidth: this.DOOR_ARROW_POINTER_WIDTH,
            fill: this.DOOR_ARROW_FILL,
            stroke: this.DOOR_ARROW_STROKE,
            strokeWidth: this.DOOR_ARROW_STROKEWIDTH
        });
        var midPoint = this.calcMidPoint();
        var lengthTexts = this.calcLengthTexts();
        this.lengthText = new __WEBPACK_IMPORTED_MODULE_1_konva__["Text"]({
            x: midPoint.x,
            y: midPoint.y,
            text: this.lengthText1 + "'" + this.lengthText2 + "\"",
            fontSize: this.DOOR_LENGTH_TEXT_FONTSIZE,
            fontFamily: this.DOOR_LENGTH_TEXT_FONTFAMILY,
            fill: this.DOOR_LENGTH_TEXT_FILL,
            align: 'center',
            width: this.DOOR_TEXT_LENGTH,
            height: this.DOOR_TEXT_HEIGHT
        });
        this.doorTypeText = new __WEBPACK_IMPORTED_MODULE_1_konva__["Text"]({
            x: midPoint.x,
            y: midPoint.y,
            text: this.doorType.toString(),
            fontSize: this.DOOR_TYPE_TEXT_FONTSIZE,
            fontFamily: this.DOOR_TYPE_TEXT_FONTFAMILY,
            fill: this.DOOR_TYPE_TEXT_FILL,
            align: 'center',
            width: this.DOOR_TYPE_TEXT_WIDTH,
            height: this.DOOR_TYPE_TEXT_HEIGHT,
        });
        this.revisionLengthTextAndDoorTypeText();
        this.group.add(this.doorRect);
        this.group.add(this.firstLine);
        this.group.add(this.secondLine);
        this.group.add(this.firstSignLine);
        this.group.add(this.secondSignLine);
        this.group.add(this.firstArrow);
        this.group.add(this.secondArrow);
        this.group.add(this.lengthText);
        this.group.add(this.doorTypeText);
    };
    GroupDoor.prototype.definePoints = function () {
        switch (this.wallDirection) {
            case 'ltr':
                this.startP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.clickedPoint.x - this.doorLength / 2, this.clickedPoint.y);
                this.endP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.clickedPoint.x + this.doorLength / 2, this.clickedPoint.y);
                break;
            case 'rtl':
                this.endP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.clickedPoint.x - this.doorLength / 2, this.clickedPoint.y);
                this.startP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.clickedPoint.x + this.doorLength / 2, this.clickedPoint.y);
                break;
            case 'ttd':
                this.startP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.clickedPoint.x, this.clickedPoint.y - this.doorLength / 2);
                this.endP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.clickedPoint.x, this.clickedPoint.y + this.doorLength / 2);
                break;
            case 'dtt':
                this.endP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.clickedPoint.x, this.clickedPoint.y - this.doorLength / 2);
                this.startP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.clickedPoint.x, this.clickedPoint.y + this.doorLength / 2);
                break;
            default:
                break;
        }
    };
    GroupDoor.prototype.calcRectParams = function () {
        var x, y, width, height;
        switch (this.wallDirection) {
            case 'ltr':
                x = this.startP.x;
                y = this.startP.y - this.DOOR_HEIGHT / 2;
                width = this.endP.x - this.startP.x;
                height = this.DOOR_HEIGHT;
                break;
            case 'rtl':
                x = this.endP.x;
                y = this.endP.y - this.DOOR_HEIGHT / 2;
                width = this.startP.x - this.endP.x;
                height = this.DOOR_HEIGHT;
                break;
            case 'ttd':
                x = this.startP.x - this.DOOR_HEIGHT / 2;
                y = this.startP.y;
                width = this.DOOR_HEIGHT;
                height = this.endP.y - this.startP.y;
                break;
            case 'dtt':
                x = this.endP.x - this.DOOR_HEIGHT / 2;
                y = this.endP.y;
                width = this.DOOR_HEIGHT;
                height = this.startP.y - this.endP.y;
                break;
            default:
                break;
        }
        return {
            x: x,
            y: y,
            width: width,
            height: height,
        };
    };
    GroupDoor.prototype.calcLineParams = function () {
        var p1, p2, p3, p4;
        switch (this.wallDirection) {
            case 'ltr':
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.startP.x, this.startP.y - this.DOOR_HEIGHT / 2);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.startP.x, this.startP.y + this.DOOR_HEIGHT / 2);
                p3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.endP.x, this.endP.y - this.DOOR_HEIGHT / 2);
                p4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.endP.x, this.endP.y + this.DOOR_HEIGHT / 2);
                break;
            case 'rtl':
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.endP.x, this.endP.y - this.DOOR_HEIGHT / 2);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.endP.x, this.endP.y + this.DOOR_HEIGHT / 2);
                p3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.startP.x, this.startP.y - this.DOOR_HEIGHT / 2);
                p4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.startP.x, this.startP.y + this.DOOR_HEIGHT / 2);
                break;
            case 'ttd':
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.startP.x - this.DOOR_HEIGHT / 2, this.startP.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.startP.x + this.DOOR_HEIGHT / 2, this.startP.y);
                p3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.endP.x - this.DOOR_HEIGHT / 2, this.endP.y);
                p4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.endP.x + this.DOOR_HEIGHT / 2, this.endP.y);
                break;
            case 'dtt':
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.endP.x - this.DOOR_HEIGHT / 2, this.endP.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.endP.x + this.DOOR_HEIGHT / 2, this.endP.y);
                p3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.startP.x - this.DOOR_HEIGHT / 2, this.startP.y);
                p4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.startP.x + this.DOOR_HEIGHT / 2, this.startP.y);
                break;
            default:
                break;
        }
        return {
            p1: p1,
            p2: p2,
            p3: p3,
            p4: p4
        };
    };
    GroupDoor.prototype.calcSignLineParams = function () {
        var p1, p2, p3, p4;
        var paramsLine = this.calcLineParams();
        switch (this.wallDirection) {
            case 'ltr':
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p2.x, paramsLine.p2.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](p1.x, p1.y + this.DOOR_SIGN_LINE_LENGTH);
                p3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p4.x, paramsLine.p4.y);
                p4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](p3.x, p3.y + this.DOOR_SIGN_LINE_LENGTH);
                break;
            case 'rtl':
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p1.x, paramsLine.p1.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](p1.x, p1.y - this.DOOR_SIGN_LINE_LENGTH);
                p3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p3.x, paramsLine.p3.y);
                p4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](p3.x, p3.y - this.DOOR_SIGN_LINE_LENGTH);
                break;
            case 'ttd':
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p1.x, paramsLine.p1.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](p1.x - this.DOOR_SIGN_LINE_LENGTH, p1.y);
                p3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p3.x, paramsLine.p3.y);
                p4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](p3.x - this.DOOR_SIGN_LINE_LENGTH, p3.y);
                break;
            case 'dtt':
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p2.x, paramsLine.p2.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](p1.x + this.DOOR_SIGN_LINE_LENGTH, p1.y);
                p3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p4.x, paramsLine.p4.y);
                p4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](p3.x + this.DOOR_SIGN_LINE_LENGTH, p3.y);
                break;
            default:
                break;
        }
        return {
            p1: p1,
            p2: p2,
            p3: p3,
            p4: p4
        };
    };
    GroupDoor.prototype.calcArrowParams = function () {
        var paramsLine = this.calcLineParams();
        var midPoint = this.calcMidPoint();
        var p1, p2, p3, p4;
        switch (this.wallDirection) {
            case 'ltr':
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](midPoint.x - this.DOOR_TEXT_LENGTH / 2, midPoint.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p1.x, midPoint.y);
                p3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](midPoint.x + this.DOOR_TEXT_LENGTH / 2, midPoint.y);
                p4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p3.x, midPoint.y);
                break;
            case 'rtl':
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](midPoint.x - this.DOOR_TEXT_LENGTH / 2, midPoint.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p2.x, midPoint.y);
                p3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](midPoint.x + this.DOOR_TEXT_LENGTH / 2, midPoint.y);
                p4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p4.x, midPoint.y);
                break;
            case 'ttd':
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](midPoint.x, midPoint.y - this.DOOR_TEXT_LENGTH / 2);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](midPoint.x, paramsLine.p2.y);
                p3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](midPoint.x, midPoint.y + this.DOOR_TEXT_LENGTH / 2);
                p4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](midPoint.x, paramsLine.p4.y);
                break;
            case 'dtt':
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](midPoint.x, midPoint.y - this.DOOR_TEXT_LENGTH / 2);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](midPoint.x, paramsLine.p1.y);
                p3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](midPoint.x, midPoint.y + this.DOOR_TEXT_LENGTH / 2);
                p4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](midPoint.x, paramsLine.p3.y);
                break;
            default:
                break;
        }
        return {
            p1: p1,
            p2: p2,
            p3: p3,
            p4: p4
        };
    };
    GroupDoor.prototype.calcMidPoint = function () {
        var paramsLine = this.calcLineParams();
        var midPoint;
        switch (this.wallDirection) {
            case 'ltr':
                midPoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */]((paramsLine.p2.x + paramsLine.p4.x) / 2, paramsLine.p2.y + this.DOOR_SIGN_LINE_LENGTH / 2);
                break;
            case 'rtl':
                midPoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */]((paramsLine.p1.x + paramsLine.p3.x) / 2, paramsLine.p1.y - this.DOOR_SIGN_LINE_LENGTH / 2);
                break;
            case 'ttd':
                midPoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p1.x - this.DOOR_SIGN_LINE_LENGTH / 2, (paramsLine.p1.y + paramsLine.p3.y) / 2);
                break;
            case 'dtt':
                midPoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p2.x + this.DOOR_SIGN_LINE_LENGTH / 2, (paramsLine.p1.y + paramsLine.p3.y) / 2);
                break;
            default:
                break;
        }
        return midPoint;
    };
    GroupDoor.prototype.calcLengthTexts = function () {
        this.doorLength = Math.sqrt((this.startP.x - this.endP.x) * (this.startP.x - this.endP.x)
            + (this.startP.y - this.endP.y) * (this.startP.y - this.endP.y));
        this.lengthText1 = (Math.floor(this.doorLength / 36));
        this.lengthText2 = (this.doorLength % 36) / 3;
    };
    GroupDoor.prototype.revisionLengthTextAndDoorTypeText = function () {
        var midPoint = this.calcMidPoint();
        switch (this.wallDirection) {
            case 'ltr':
                this.lengthText.x(midPoint.x - this.DOOR_TEXT_LENGTH / 2);
                this.lengthText.y(midPoint.y - this.DOOR_SIGN_LINE_LENGTH / 2);
                this.doorTypeText.x(midPoint.x - this.DOOR_TYPE_TEXT_WIDTH / 2);
                this.doorTypeText.y(midPoint.y - this.DOOR_SIGN_LINE_LENGTH * 4);
                break;
            case 'rtl':
                this.lengthText.x(midPoint.x - this.DOOR_TEXT_LENGTH / 2);
                this.lengthText.y(midPoint.y - this.DOOR_SIGN_LINE_LENGTH / 2);
                this.doorTypeText.x(midPoint.x - this.DOOR_TYPE_TEXT_WIDTH / 2);
                this.doorTypeText.y(midPoint.y + this.DOOR_SIGN_LINE_LENGTH * 4);
                break;
            case 'ttd':
                this.lengthText.rotation(-90);
                this.doorTypeText.rotation(-90);
                this.lengthText.x(midPoint.x - this.DOOR_SIGN_LINE_LENGTH / 2);
                this.lengthText.y(midPoint.y + this.DOOR_TEXT_LENGTH / 2);
                this.doorTypeText.x(midPoint.x + this.DOOR_SIGN_LINE_LENGTH * 4);
                this.doorTypeText.y(midPoint.y + this.DOOR_TYPE_TEXT_WIDTH / 2);
                break;
            case 'dtt':
                this.lengthText.rotation(90);
                this.doorTypeText.rotation(90);
                this.lengthText.x(midPoint.x + this.DOOR_SIGN_LINE_LENGTH / 2);
                this.lengthText.y(midPoint.y - this.DOOR_TEXT_LENGTH / 2);
                this.doorTypeText.x(midPoint.x - this.DOOR_SIGN_LINE_LENGTH * 4);
                this.doorTypeText.y(midPoint.y - this.DOOR_TYPE_TEXT_WIDTH / 2);
                break;
            default:
                break;
        }
    };
    GroupDoor.prototype.checkMergeDoor = function (groupRoom) {
        if (this._parentWall.parentRoom === groupRoom) {
            return;
        }
        var me = this;
        var countEntered = 0;
        groupRoom.walls.map(function (wall) {
            wall.groupDoors.map(function (groupDoor) {
                if (me.checkMergeDoorWithDoor(groupDoor)) {
                    countEntered++;
                }
            });
        });
        if (countEntered === 0) {
            this.drawMerggedDoor(false);
        }
        else {
            this.drawMerggedDoor(true);
        }
    };
    GroupDoor.prototype.checkMergeDoorWithDoor = function (draggingDoor) {
        var draggingDoorClientRect = draggingDoor.doorRect.getClientRect();
        var fixedDoorClientRect = this.doorRect.getClientRect();
        if (!this.isMergged(draggingDoorClientRect, fixedDoorClientRect, draggingDoor)) {
            // this.drawMerggedDoor(false);
            // draggingDoor.drawMerggedDoor(false);
            return false;
        }
        else {
            // this.drawMerggedDoor(true);
            // draggingDoor.drawMerggedDoor(true);
            return true;
        }
    };
    GroupDoor.prototype.isMergged = function (draggingRect, fixedRect, draggingDoor) {
        if (draggingDoor.doorLength !== this.doorLength) {
            return false;
        }
        if (draggingDoor.wallDirection === 'ltr' || draggingDoor.wallDirection === 'rtl') {
            if (this.wallDirection === 'ttd' || this.wallDirection === 'dtt') {
                return false;
            }
        }
        else {
            if (this.wallDirection === 'ltr' || this.wallDirection === 'rtl') {
                return false;
            }
        }
        if (this.parentWall.groupDoors.length !== draggingDoor.parentWall.groupDoors.length) {
            return false;
        }
        if (this.parentWall.calcLength() !== draggingDoor.parentWall.calcLength()) {
            return false;
        }
        var delta_x = draggingRect.x - fixedRect.x;
        var delta_y = draggingRect.y - fixedRect.y;
        var distance = Math.sqrt(delta_x * delta_x + delta_y * delta_y);
        var max_distance = Math.sqrt(this.doorLength * this.doorLength + this.DOOR_HEIGHT * this.DOOR_HEIGHT);
        if (distance > max_distance) {
            return false;
        }
        if (this.wallDirection === 'ltr' || this.wallDirection === 'rtl') {
            if (this.doorLength < Math.abs(delta_x)) {
                return false;
            }
            if (this.DOOR_HEIGHT < Math.abs(delta_y)) {
                return false;
            }
        }
        else {
            if (this.DOOR_HEIGHT < Math.abs(delta_x)) {
                return false;
            }
            if (this.doorLength < Math.abs(delta_y)) {
                return false;
            }
        }
        this.merggedDoor = draggingDoor;
        return true;
    };
    GroupDoor.prototype.drawMerggedDoor = function (isMergged) {
        if (isMergged) {
            this.doorRect.fill(this.DOOR_MERGGED_FILL);
        }
        else {
            this.doorRect.fill(this.DOOR_FILL);
            this.merggedDoor = null;
        }
        this.layer.draw();
    };
    GroupDoor.prototype.redrawByMergging = function (merggedDoor) {
        //    var draggingDoorClientRect = this.doorRect.getClientRect();
        //    var fixedDoorClientRect = merggedDoor.doorRect.getClientRect();
        var draggingDoorClientRect = this.parentWall.mainLine.getClientRect();
        var fixedDoorClientRect = merggedDoor.parentWall.mainLine.getClientRect();
        var delta_x = fixedDoorClientRect.x - draggingDoorClientRect.x;
        var delta_y = fixedDoorClientRect.y - draggingDoorClientRect.y;
        var groupClientRect = this.group.getClientRect();
        var absoluteGroupPosition = this.group.getAbsolutePosition();
        var absoluteStagePosition = this.stage.getAbsolutePosition();
        this.group.x(absoluteGroupPosition.x + delta_x - absoluteStagePosition.x);
        this.group.y(absoluteGroupPosition.y + delta_y - absoluteStagePosition.y);
        this.hide();
        this.group.draw();
        this.layer.draw();
    };
    GroupDoor.prototype.hide = function () {
        this.doorRect.hide();
        this.firstLine.hide();
        this.secondLine.hide();
        this.firstSignLine.hide();
        this.secondSignLine.hide();
        this.firstArrow.hide();
        this.secondArrow.hide();
        this.lengthText.hide();
        this.doorTypeText.hide();
    };
    GroupDoor.prototype.show = function () {
        this.doorRect.show();
        this.firstLine.show();
        this.secondLine.show();
        this.firstSignLine.show();
        this.secondSignLine.show();
        this.firstArrow.show();
        this.secondArrow.show();
        this.lengthText.show();
        this.doorTypeText.show();
    };
    return GroupDoor;
}());



/***/ }),

/***/ "../../../../../src/app/module/grouphalfwall.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupHalfWall; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__point__ = __webpack_require__("../../../../../src/app/module/point.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_konva__ = __webpack_require__("../../../../konva/konva.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_konva___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_konva__);


var GroupHalfWall = (function () {
    function GroupHalfWall(_parentWall, _halfwall) {
        this._parentWall = _parentWall;
        this._halfwall = _halfwall;
        this.GROUPHALFWALL_LINE_STROKE = '#000';
        this.GROUPHALFWALL_LINE_STROKEWIDTH = 3;
        var me = this;
        this.parentWall = _parentWall;
        this.halfwall = _halfwall;
        this.startP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.halfwall.startP.x, this.halfwall.startP.y);
        this.endP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.halfwall.endP.x, this.halfwall.endP.y);
        this.group = this.parentWall.group;
        this.initUI();
    }
    GroupHalfWall.prototype.initUI = function () {
        var me = this;
        this.line = new __WEBPACK_IMPORTED_MODULE_1_konva__["Line"]({
            points: [this.startP.x, this.startP.y, this.endP.x, this.endP.y],
            stroke: me.GROUPHALFWALL_LINE_STROKE,
            strokeWidth: me.GROUPHALFWALL_LINE_STROKEWIDTH
        });
        this.group.add(this.line);
    };
    return GroupHalfWall;
}());



/***/ }),

/***/ "../../../../../src/app/module/groupisland.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupIsland; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__point__ = __webpack_require__("../../../../../src/app/module/point.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_konva__ = __webpack_require__("../../../../konva/konva.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_konva___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_konva__);


var GroupIsland = (function () {
    function GroupIsland(_groupRoom, _island) {
        this._groupRoom = _groupRoom;
        this._island = _island;
        this.width = 108; // 3'
        this.height = 216; // 6'
        this.points = []; // point1,    point2,    point3,      point4
        // topleft,   topright,  rightbottom, leftbottom
        // constants
        this.ISLAND_LINE_FILL = '#fff';
        this.ISLAND_LINE_STROKE = '#000';
        this.ISLAND_LINE_STROKEWIDTH = 3;
        this.ISLAND_XLINE_STROKE = '#000';
        this.ISLAND_XLINE_STROKEWIDTH = 3;
        this.ISLAND_SIGNLINE_LENGTH = 20;
        this.ISLAND_SIGNLINE_STROKEWIDTH = 1;
        this.ISLAND_SIGNLINE_STROKE = '#000';
        this.ISLAND_ARROW_POINTER_LENGTH = 5;
        this.ISLAND_ARROW_POINTER_WIDTH = 5;
        this.ISLAND_ARROW_STROKE = '#000';
        this.ISLAND_ARROW_STROKEWIDTH = 1;
        this.ISLAND_LENGTH_TEXT_WIDTH = 50;
        this.ISLAND_LENGTH_TEXT_FONTSIZE = 20;
        this.ISLAND_LENGTH_TEXT_FONTFAMILY = 'Calibri';
        this.ISLAND_LENGTH_TEXT_FILL = '#000';
        this.group = _groupRoom.group;
        this.position = _island.position;
        this.width = _island.width;
        this.height = _island.height;
        this.calcPoints();
        this.initUI();
    }
    GroupIsland.prototype.calcPoints = function () {
        var point1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.position.x, this.position.y);
        var point2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.position.x + this.width, this.position.y);
        var point3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.position.x + this.width, this.position.y + this.height);
        var point4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.position.x, this.position.y + this.height);
        this.points[0] = point1;
        this.points[1] = point2;
        this.points[2] = point3;
        this.points[3] = point4;
    };
    GroupIsland.prototype.initUI = function () {
        var points = [];
        this.points.map(function (point) {
            points.push(point.x);
            points.push(point.y);
        });
        this.line = new __WEBPACK_IMPORTED_MODULE_1_konva__["Line"]({
            points: points,
            fill: this.ISLAND_LINE_FILL,
            stroke: this.ISLAND_LINE_STROKE,
            strokeWidth: this.ISLAND_LINE_STROKEWIDTH,
            closed: true
        });
        this.xline1 = new __WEBPACK_IMPORTED_MODULE_1_konva__["Line"]({
            points: [this.points[0].x, this.points[0].y, this.points[2].x, this.points[2].y],
            stroke: this.ISLAND_XLINE_STROKE,
            strokeWidth: this.ISLAND_XLINE_STROKEWIDTH
        });
        this.xline2 = new __WEBPACK_IMPORTED_MODULE_1_konva__["Line"]({
            points: [this.points[1].x, this.points[1].y, this.points[3].x, this.points[3].y],
            stroke: this.ISLAND_XLINE_STROKE,
            strokeWidth: this.ISLAND_XLINE_STROKEWIDTH
        });
        this.signLine1 = new __WEBPACK_IMPORTED_MODULE_1_konva__["Line"]({
            points: [this.points[0].x, this.points[0].y, this.points[0].x, this.points[0].y - this.ISLAND_SIGNLINE_LENGTH],
            stroke: this.ISLAND_SIGNLINE_STROKE,
            strokeWidth: this.ISLAND_SIGNLINE_STROKEWIDTH
        });
        this.signLine2 = new __WEBPACK_IMPORTED_MODULE_1_konva__["Line"]({
            points: [this.points[1].x, this.points[1].y, this.points[1].x, this.points[1].y - this.ISLAND_SIGNLINE_LENGTH],
            stroke: this.ISLAND_SIGNLINE_STROKE,
            strokeWidth: this.ISLAND_SIGNLINE_STROKEWIDTH
        });
        this.signLine3 = new __WEBPACK_IMPORTED_MODULE_1_konva__["Line"]({
            points: [this.points[0].x - this.ISLAND_SIGNLINE_LENGTH, this.points[0].y, this.points[0].x, this.points[0].y],
            stroke: this.ISLAND_SIGNLINE_STROKE,
            strokeWidth: this.ISLAND_SIGNLINE_STROKEWIDTH
        });
        this.signLine4 = new __WEBPACK_IMPORTED_MODULE_1_konva__["Line"]({
            points: [this.points[3].x - this.ISLAND_SIGNLINE_LENGTH, this.points[3].y, this.points[3].x, this.points[3].y],
            stroke: this.ISLAND_SIGNLINE_STROKE,
            strokeWidth: this.ISLAND_SIGNLINE_STROKEWIDTH
        });
        var midPoints = this.calcMidPoints();
        this.arrowLine1 = new __WEBPACK_IMPORTED_MODULE_1_konva__["Arrow"]({
            points: [midPoints.topMidPoint.x - this.ISLAND_LENGTH_TEXT_WIDTH / 2,
                midPoints.topMidPoint.y, this.points[0].x, midPoints.topMidPoint.y],
            pointerLength: this.ISLAND_ARROW_POINTER_LENGTH,
            pointerWidth: this.ISLAND_ARROW_POINTER_WIDTH,
            stroke: this.ISLAND_ARROW_STROKE,
            strokeWidth: this.ISLAND_ARROW_STROKEWIDTH
        });
        this.arrowLine2 = new __WEBPACK_IMPORTED_MODULE_1_konva__["Arrow"]({
            points: [midPoints.topMidPoint.x + this.ISLAND_LENGTH_TEXT_WIDTH / 2, midPoints.topMidPoint.y,
                this.points[1].x, midPoints.topMidPoint.y],
            pointerLength: this.ISLAND_ARROW_POINTER_LENGTH,
            pointerWidth: this.ISLAND_ARROW_POINTER_WIDTH,
            stroke: this.ISLAND_ARROW_STROKE,
            strokeWidth: this.ISLAND_ARROW_STROKEWIDTH
        });
        this.arrowLine3 = new __WEBPACK_IMPORTED_MODULE_1_konva__["Arrow"]({
            points: [midPoints.leftMidPoint.x, midPoints.leftMidPoint.y - this.ISLAND_LENGTH_TEXT_WIDTH / 2,
                midPoints.leftMidPoint.x, this.points[0].y],
            pointerLength: this.ISLAND_ARROW_POINTER_LENGTH,
            pointerWidth: this.ISLAND_ARROW_POINTER_WIDTH,
            stroke: this.ISLAND_ARROW_STROKE,
            strokeWidth: this.ISLAND_ARROW_STROKEWIDTH
        });
        this.arrowLine4 = new __WEBPACK_IMPORTED_MODULE_1_konva__["Arrow"]({
            points: [midPoints.leftMidPoint.x, midPoints.leftMidPoint.y + this.ISLAND_LENGTH_TEXT_WIDTH / 2,
                midPoints.leftMidPoint.x, this.points[3].y],
            pointerLength: this.ISLAND_ARROW_POINTER_LENGTH,
            pointerWidth: this.ISLAND_ARROW_POINTER_WIDTH,
            stroke: this.ISLAND_ARROW_STROKE,
            strokeWidth: this.ISLAND_ARROW_STROKEWIDTH
        });
        var lengths = this.getLengths();
        this.lengthText1 = new __WEBPACK_IMPORTED_MODULE_1_konva__["Text"]({
            x: midPoints.topMidPoint.x - this.ISLAND_LENGTH_TEXT_WIDTH / 2,
            y: midPoints.topMidPoint.y - this.ISLAND_SIGNLINE_LENGTH / 2,
            text: lengths.topLengthFoot + "'" + lengths.topLengthInch + "\"",
            fontSize: this.ISLAND_LENGTH_TEXT_FONTSIZE,
            fontFamily: this.ISLAND_LENGTH_TEXT_FONTFAMILY,
            fill: this.ISLAND_LENGTH_TEXT_FILL
        });
        this.lengthText2 = new __WEBPACK_IMPORTED_MODULE_1_konva__["Text"]({
            x: midPoints.leftMidPoint.x - this.ISLAND_LENGTH_TEXT_WIDTH / 2,
            y: midPoints.leftMidPoint.y - this.ISLAND_SIGNLINE_LENGTH / 2,
            text: lengths.leftLengthFoot + "'" + lengths.leftLengthInch + "\"",
            fontSize: this.ISLAND_LENGTH_TEXT_FONTSIZE,
            fontFamily: this.ISLAND_LENGTH_TEXT_FONTFAMILY,
            fill: this.ISLAND_LENGTH_TEXT_FILL,
        });
        this.group.add(this.line);
        this.group.add(this.xline1);
        this.group.add(this.xline2);
        this.group.add(this.signLine1);
        this.group.add(this.signLine2);
        this.group.add(this.signLine3);
        this.group.add(this.signLine4);
        this.group.add(this.arrowLine1);
        this.group.add(this.arrowLine2);
        this.group.add(this.arrowLine3);
        this.group.add(this.arrowLine4);
        this.group.add(this.lengthText1);
        this.group.add(this.lengthText2);
    };
    GroupIsland.prototype.calcMidPoints = function () {
        var topMidPoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */]((this.points[0].x + this.points[1].x) / 2, this.points[0].y - this.ISLAND_SIGNLINE_LENGTH / 2);
        var leftMidPoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.points[0].x - this.ISLAND_SIGNLINE_LENGTH / 2, (this.points[0].y + this.points[3].y) / 2);
        return {
            topMidPoint: topMidPoint,
            leftMidPoint: leftMidPoint
        };
    };
    GroupIsland.prototype.calcLengths = function () {
        return {
            lengthTop: this.points[1].x - this.points[0].x,
            lengthLeft: this.points[3].y - this.points[0].y
        };
    };
    GroupIsland.prototype.getLengths = function () {
        var lengths = this.calcLengths();
        return {
            topLengthFoot: Math.floor(lengths.lengthTop / 36),
            topLengthInch: (lengths.lengthTop % 36) / 3,
            leftLengthFoot: Math.floor(lengths.lengthLeft / 36),
            leftLengthInch: (lengths.lengthLeft % 36) / 3
        };
    };
    return GroupIsland;
}());



/***/ }),

/***/ "../../../../../src/app/module/grouproom.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupRoom; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_konva__ = __webpack_require__("../../../../konva/konva.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_konva___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_konva__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__groupwall__ = __webpack_require__("../../../../../src/app/module/groupwall.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__groupisland__ = __webpack_require__("../../../../../src/app/module/groupisland.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__evented__ = __webpack_require__("../../../../../src/app/module/evented.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__grouproundwall__ = __webpack_require__("../../../../../src/app/module/grouproundwall.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__groupcloset__ = __webpack_require__("../../../../../src/app/module/groupcloset.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__groupstep__ = __webpack_require__("../../../../../src/app/module/groupstep.ts");







var GroupRoom = (function () {
    function GroupRoom(_groupArea, _room) {
        this._groupArea = _groupArea;
        this._room = _room;
        this.walls = [];
        this.islands = [];
        this.staircases = [];
        this.closets = [];
        this.roomType = '';
        this.surface = null; // closed line or circle
        // surface constants
        this.SURFACE_NORMAL_FILL = '#888';
        this.SURFACE_NORMAL_OPACITY = 0;
        this.SURFACE_ACTIVE_OPACITY = 1;
        this.SURFACE_IS_ACTIVE = false;
        this.ROOMTITLE_OFFSET_X = 50;
        this.ROOMTITLE_OFFSET_Y = 50;
        this.ROOMTITLE_FONT_SIZE = 50;
        this.ROOMTITLE_FONT_FAMILY = 'Calibri';
        this.ROOMTITLE_FILL = '#333';
        this.room = _room;
        this.roomType = this._room.roomType;
        this.roomId = this._room.roomId;
        this.group = new __WEBPACK_IMPORTED_MODULE_0_konva__["Group"]({});
        this.layer = _groupArea.layer;
        this.stage = _groupArea.stage;
        this.initWalls();
        this.initIslands();
        this.initClosets();
        this.initSurface();
        this.initRoomTitle();
        this.surface.moveToTop();
        this.layer.add(this.group);
        var me = this;
        // this.group.on('dragmove', function() {
        //     Evented.fire('group-room-dragging', me);
        // });
        // this.group.on('dragend', function() {
        //     Evented.fire('group-room-end-dragging');
        // });
        this.group.on('dragstart', function () {
            __WEBPACK_IMPORTED_MODULE_3__evented__["a" /* Evented */].fire('group-room-start-dragging');
        });
        this.group.on('dragend', function () {
            __WEBPACK_IMPORTED_MODULE_3__evented__["a" /* Evented */].fire('group-room-end-dragging', me);
        });
    }
    GroupRoom.prototype.initWalls = function () {
        var _this = this;
        this._room.walls.map(function (wall) {
            var tempGroupWall = new __WEBPACK_IMPORTED_MODULE_1__groupwall__["a" /* GroupWall */](_this, wall);
            _this.walls.push(tempGroupWall);
        });
        if (this._room.roundWall) {
            this.roundWall = new __WEBPACK_IMPORTED_MODULE_4__grouproundwall__["a" /* GroupRoundWall */](this);
        }
        if (this._room.staircases.length !== 0) {
            var tempstaircase = new __WEBPACK_IMPORTED_MODULE_6__groupstep__["a" /* GroupStep */](this);
            this.staircases.push(tempstaircase);
        }
    };
    GroupRoom.prototype.initIslands = function () {
        var _this = this;
        this._room.islands.map(function (island) {
            var tempIsland = new __WEBPACK_IMPORTED_MODULE_2__groupisland__["a" /* GroupIsland */](_this, island);
            _this.islands.push(tempIsland);
        });
    };
    GroupRoom.prototype.initClosets = function () {
        var _this = this;
        this._room.closets.map(function (closet) {
            var tempCloset = new __WEBPACK_IMPORTED_MODULE_5__groupcloset__["a" /* GroupCloset */](_this, closet);
            _this.closets.push(tempCloset);
        });
    };
    GroupRoom.prototype.initSurface = function () {
        var me = this;
        var points = [];
        if (this._room.staircases.length !== 0) {
            var temppoints = this.staircases[0].calcLineParams();
            points.push(temppoints.p1.x);
            points.push(temppoints.p1.y);
            points.push(temppoints.p2.x);
            points.push(temppoints.p2.y);
            points.push(temppoints.p3.x);
            points.push(temppoints.p3.y);
            points.push(temppoints.p4.x);
            points.push(temppoints.p4.y);
            this.surface = new __WEBPACK_IMPORTED_MODULE_0_konva__["Line"]({
                points: points,
                fill: me.SURFACE_NORMAL_FILL,
                opacity: this.SURFACE_NORMAL_OPACITY,
                closed: true
            });
        }
        if (this._room.walls.length !== 0) {
            points = this.calcPointsClosed(this._room.walls[0], this._room.walls[0]);
            points.pop();
            points.pop();
            this.surface = new __WEBPACK_IMPORTED_MODULE_0_konva__["Line"]({
                points: points,
                fill: me.SURFACE_NORMAL_FILL,
                opacity: this.SURFACE_NORMAL_OPACITY,
                closed: true
            });
        }
        if (this._room.roundWall) {
            this.surface = new __WEBPACK_IMPORTED_MODULE_0_konva__["Circle"]({
                x: this._room.roundWall.centerPoint.x,
                y: this._room.roundWall.centerPoint.y,
                radius: this._room.roundWall.radius,
                opacity: this.SURFACE_NORMAL_OPACITY,
                fill: me.SURFACE_NORMAL_FILL
            });
        }
        if (this.surface) {
            this.surface.on('click', function () {
                me.SURFACE_IS_ACTIVE = !me.SURFACE_IS_ACTIVE;
                if (me.SURFACE_IS_ACTIVE) {
                    this.opacity(me.SURFACE_ACTIVE_OPACITY);
                    me.group.moveToTop();
                    __WEBPACK_IMPORTED_MODULE_3__evented__["a" /* Evented */].fire('group-room-clicked', me);
                }
                else {
                    this.opacity(me.SURFACE_NORMAL_OPACITY);
                    __WEBPACK_IMPORTED_MODULE_3__evented__["a" /* Evented */].fire('group-room-unclicked', me);
                }
                me.group.draggable(me.SURFACE_IS_ACTIVE);
                me.group.draw();
                me.layer.draw();
            });
            this.group.add(this.surface);
        }
    };
    GroupRoom.prototype.calcPointsClosed = function (currentWall, starWall) {
        var _this = this;
        var points = [];
        points.push(currentWall.startP.x);
        points.push(currentWall.startP.y);
        points.push(currentWall.endP.x);
        points.push(currentWall.endP.y);
        this._room.walls.map(function (wall) {
            if (wall.wallID === currentWall.endID) {
                if (wall.wallID === starWall.wallID) {
                    return points;
                }
                else {
                    points = points.concat(_this.calcPointsClosed(wall, starWall));
                }
            }
        });
        return points;
    };
    GroupRoom.prototype.initRoomTitle = function () {
        if (this._room.staircases.length !== 0) {
            var lineParams = this.staircases[0].calcLineParams();
            this.roomTitle = new __WEBPACK_IMPORTED_MODULE_0_konva__["Text"]({
                x: lineParams.p1.x,
                y: lineParams.p2.y,
                text: 'S\nT\nE\nP',
                fontSize: this.ROOMTITLE_FONT_SIZE,
                fontFamily: this.ROOMTITLE_FONT_FAMILY,
                fill: this.ROOMTITLE_FILL,
                width: (lineParams.p2.x - lineParams.p1.x),
                height: lineParams.p3.y - lineParams.p2.y,
                align: 'center'
            });
        }
        if (this._room.walls.length !== 0) {
            this.roomTitle = new __WEBPACK_IMPORTED_MODULE_0_konva__["Text"]({
                x: this._room.walls[0].startP.x + this.ROOMTITLE_OFFSET_X,
                y: this._room.walls[0].startP.y + this.ROOMTITLE_OFFSET_Y,
                text: this.roomType + ' ' + this.roomId,
                fontSize: this.ROOMTITLE_FONT_SIZE,
                fontFamily: this.ROOMTITLE_FONT_FAMILY,
                fill: this.ROOMTITLE_FILL
            });
        }
        if (this._room.roundWall) {
            this.roomTitle = new __WEBPACK_IMPORTED_MODULE_0_konva__["Text"]({
                x: this._room.roundWall.centerPoint.x - this.ROOMTITLE_OFFSET_X,
                y: this._room.roundWall.centerPoint.y - this.ROOMTITLE_OFFSET_Y,
                text: this.roomType + ' ' + this.roomId,
                fontSize: this.ROOMTITLE_FONT_SIZE,
                fontFamily: this.ROOMTITLE_FONT_FAMILY,
                fill: this.ROOMTITLE_FILL
            });
        }
        if (this.roomTitle) {
            this.group.add(this.roomTitle);
        }
    };
    return GroupRoom;
}());



/***/ }),

/***/ "../../../../../src/app/module/grouproundwall.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupRoundWall; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__module_evented__ = __webpack_require__("../../../../../src/app/module/evented.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_konva__ = __webpack_require__("../../../../konva/konva.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_konva___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_konva__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__module_point__ = __webpack_require__("../../../../../src/app/module/point.ts");



var GroupRoundWall = (function () {
    // constructor(centerPoint: Point, radius, layer: Konva.Layer) {
    function GroupRoundWall(_parentRoom) {
        this._parentRoom = _parentRoom;
        this.radius = 0;
        this.diameterText1 = 0; // foot
        this.diameterText2 = 0; // inch
        this.isShowDiameter = false;
        // constants
        this.ROUNDWALL_CIRCLE_STROKE = '#000';
        this.ROUNDWALL_CIRCLE_STROKEWIDTH = 3;
        this.ROUNDWALL_SIGNLINE_LENGTH = 50;
        this.ROUNDWALL_SIGNLINE_STROKE = '#000';
        this.ROUNDWALL_SIGNLINE_STROKEWIDTH = 1;
        this.ROUNDWALL_ARROWLINE_POINTERLENGTH = 5;
        this.ROUNDWALL_ARROWLINE_POINTERWIDTH = 5;
        this.ROUNDWALL_ARROWLINE_FILL = '#000';
        this.ROUNDWALL_ARROWLINE_STROKE = '#000';
        this.ROUNDWALL_ARROWLINE_STROKEWIDTH = 1;
        this.ROUNDWALL_TEXTLENGTH_WIDTH = 100;
        var me = this;
        this.parentRoom = _parentRoom;
        this.roundWallId = 'grouproundwall_' + Math.floor(Math.random() * 100000 % 100000);
        this.centerPoint = new __WEBPACK_IMPORTED_MODULE_2__module_point__["a" /* Point */](this.parentRoom.room.roundWall.centerPoint.x, this.parentRoom.room.roundWall.centerPoint.y);
        this.radius = this.parentRoom.room.roundWall.radius;
        this.layer = this.parentRoom.layer;
        this.group = this.parentRoom.group;
        this.initUI();
        this.layer.add(this.group);
    }
    GroupRoundWall.prototype.removeAll = function () {
        this.group.remove();
    };
    GroupRoundWall.prototype.initUI = function () {
        var me = this;
        this.calcMidPoint();
        this.circle = new __WEBPACK_IMPORTED_MODULE_1_konva__["Circle"]({
            x: me.centerPoint.x,
            y: me.centerPoint.y,
            radius: me.radius,
            stroke: me.ROUNDWALL_CIRCLE_STROKE,
            strokeWidth: me.ROUNDWALL_CIRCLE_STROKEWIDTH
        });
        var signlineparams = this.calcSignLineParams();
        me.signLine1 = new __WEBPACK_IMPORTED_MODULE_1_konva__["Line"]({
            points: [signlineparams.p1.x, signlineparams.p1.y, signlineparams.p2.x, signlineparams.p2.y],
            stroke: me.ROUNDWALL_SIGNLINE_STROKE,
            strokeWidth: me.ROUNDWALL_SIGNLINE_STROKEWIDTH
        });
        me.signLine2 = new __WEBPACK_IMPORTED_MODULE_1_konva__["Line"]({
            points: [signlineparams.p3.x, signlineparams.p3.y, signlineparams.p4.x, signlineparams.p4.y],
            stroke: me.ROUNDWALL_SIGNLINE_STROKE,
            strokeWidth: me.ROUNDWALL_SIGNLINE_STROKEWIDTH
        });
        var arrowlineparams = this.calcArrowParams();
        me.arrowLine1 = new __WEBPACK_IMPORTED_MODULE_1_konva__["Arrow"]({
            points: [arrowlineparams.p1.x, arrowlineparams.p1.y, arrowlineparams.p2.x, arrowlineparams.p2.y],
            pointerLength: me.ROUNDWALL_ARROWLINE_POINTERLENGTH,
            pointerWidth: me.ROUNDWALL_ARROWLINE_POINTERWIDTH,
            fill: me.ROUNDWALL_ARROWLINE_FILL,
            stroke: me.ROUNDWALL_ARROWLINE_STROKE,
            strokeWidth: me.ROUNDWALL_ARROWLINE_STROKEWIDTH
        });
        me.arrowLine2 = new __WEBPACK_IMPORTED_MODULE_1_konva__["Arrow"]({
            points: [arrowlineparams.p3.x, arrowlineparams.p3.y, arrowlineparams.p4.x, arrowlineparams.p4.y],
            pointerLength: me.ROUNDWALL_ARROWLINE_POINTERLENGTH,
            pointerWidth: me.ROUNDWALL_ARROWLINE_POINTERWIDTH,
            fill: me.ROUNDWALL_ARROWLINE_FILL,
            stroke: me.ROUNDWALL_ARROWLINE_STROKE,
            strokeWidth: me.ROUNDWALL_ARROWLINE_STROKEWIDTH
        });
        this.calcTextLengths();
        this.diameterText = new __WEBPACK_IMPORTED_MODULE_1_konva__["Text"]({
            x: me.midPoint.x - me.ROUNDWALL_TEXTLENGTH_WIDTH / 2,
            y: me.midPoint.y - 10,
            width: me.ROUNDWALL_TEXTLENGTH_WIDTH,
            align: 'center',
            fontSize: 20,
            text: me.diameterText1 + "'" + me.diameterText2 + "\""
        });
        this.diameterText.on('click', function () {
            me.isShowDiameter = !me.isShowDiameter;
            if (me.isShowDiameter) {
                __WEBPACK_IMPORTED_MODULE_0__module_evented__["a" /* Evented */].fire('roundwall diameter change', me);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_0__module_evented__["a" /* Evented */].fire('roundwall diameter change', null);
            }
        });
        this.group.add(this.circle);
        this.group.add(this.signLine1);
        this.group.add(this.signLine2);
        this.group.add(this.arrowLine1);
        this.group.add(this.arrowLine2);
        this.group.add(this.diameterText);
    };
    GroupRoundWall.prototype.calcMidPoint = function () {
        this.midPoint = new __WEBPACK_IMPORTED_MODULE_2__module_point__["a" /* Point */](this.centerPoint.x, this.centerPoint.y + this.radius + this.ROUNDWALL_SIGNLINE_LENGTH / 2);
    };
    GroupRoundWall.prototype.calcSignLineParams = function () {
        var p1 = new __WEBPACK_IMPORTED_MODULE_2__module_point__["a" /* Point */](this.centerPoint.x - this.radius, this.centerPoint.y + this.radius);
        var p2 = new __WEBPACK_IMPORTED_MODULE_2__module_point__["a" /* Point */](p1.x, p1.y + this.ROUNDWALL_SIGNLINE_LENGTH);
        var p3 = new __WEBPACK_IMPORTED_MODULE_2__module_point__["a" /* Point */](this.centerPoint.x + this.radius, this.centerPoint.y + this.radius);
        var p4 = new __WEBPACK_IMPORTED_MODULE_2__module_point__["a" /* Point */](p3.x, p3.y + this.ROUNDWALL_SIGNLINE_LENGTH);
        return {
            p1: p1,
            p2: p2,
            p3: p3,
            p4: p4
        };
    };
    GroupRoundWall.prototype.calcArrowParams = function () {
        var me = this;
        var p1 = new __WEBPACK_IMPORTED_MODULE_2__module_point__["a" /* Point */](me.midPoint.x - me.ROUNDWALL_TEXTLENGTH_WIDTH / 2, me.midPoint.y);
        var p2 = new __WEBPACK_IMPORTED_MODULE_2__module_point__["a" /* Point */](me.midPoint.x - me.radius, me.midPoint.y);
        var p3 = new __WEBPACK_IMPORTED_MODULE_2__module_point__["a" /* Point */](me.midPoint.x + me.ROUNDWALL_TEXTLENGTH_WIDTH / 2, me.midPoint.y);
        var p4 = new __WEBPACK_IMPORTED_MODULE_2__module_point__["a" /* Point */](me.midPoint.x + me.radius, me.midPoint.y);
        return {
            p1: p1,
            p2: p2,
            p3: p3,
            p4: p4
        };
    };
    GroupRoundWall.prototype.calcTextLengths = function () {
        this.diameterText1 = Math.floor(this.radius * 2 / 36);
        this.diameterText2 = Number((this.radius * 2 % 36 / 3).toFixed(0));
        if (this.diameterText2 === 12) {
            this.diameterText1++;
            this.diameterText2 = 0;
        }
    };
    GroupRoundWall.prototype.redrawAll = function () {
        var me = this;
        this.calcMidPoint();
        this.circle.radius(me.radius);
        var signlineparams = this.calcSignLineParams();
        this.signLine1.points([signlineparams.p1.x, signlineparams.p1.y, signlineparams.p2.x, signlineparams.p2.y]);
        this.signLine2.points([signlineparams.p3.x, signlineparams.p3.y, signlineparams.p4.x, signlineparams.p4.y]);
        var arrowlineparams = this.calcArrowParams();
        this.arrowLine1.points([arrowlineparams.p1.x, arrowlineparams.p1.y, arrowlineparams.p2.x, arrowlineparams.p2.y]);
        this.arrowLine2.points([arrowlineparams.p3.x, arrowlineparams.p3.y, arrowlineparams.p4.x, arrowlineparams.p4.y]);
        this.calcTextLengths();
        this.diameterText.x(me.midPoint.x - me.ROUNDWALL_TEXTLENGTH_WIDTH / 2);
        this.diameterText.y(me.midPoint.y - 10);
        this.diameterText.text(me.diameterText1 + "'" + me.diameterText2 + "\"");
        this.group.draw();
        this.layer.draw();
    };
    return GroupRoundWall;
}());



/***/ }),

/***/ "../../../../../src/app/module/groupstep.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupStep; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_konva__ = __webpack_require__("../../../../konva/konva.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_konva___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_konva__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__("../../../../../src/app/module/point.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__evented__ = __webpack_require__("../../../../../src/app/module/evented.ts");



var GroupStep = (function () {
    function GroupStep(_groupRoom) {
        this._groupRoom = _groupRoom;
        this.groupRoom = null;
        // stairecase: Staircase = null;
        this.width = 3 * 36;
        this.stepHeight = 6 * 3;
        this.countSteps = 10;
        // constants
        this.GROUPSTEP_LINE_STROKE = '#000';
        this.GROUPSTEP_LINE_STROKEWIDTH = 3;
        var me = this;
        this.groupRoom = _groupRoom;
        // this.stairecase = _stairecase;
        // this.width = this.stairecase.stepWidth1 * 36 + this.stairecase.stepWidth2 * 3;
        // this.stepHeight = this.stairecase.treadDepth1 * 36 + this.stairecase.treadDepth2 * 3;
        // this.countSteps = this.stairecase.numberOfSteps;
        this.group = _groupRoom.group;
        this.group.on('click', function () {
            __WEBPACK_IMPORTED_MODULE_2__evented__["a" /* Evented */].fire('staircase clicked', me);
        });
        this.initUI();
    }
    GroupStep.prototype.initUI = function () {
        var lineParams = this.calcLineParams();
        this.topLine = new __WEBPACK_IMPORTED_MODULE_0_konva__["Line"]({
            points: [lineParams.p1.x, lineParams.p1.y, lineParams.p2.x, lineParams.p2.y],
            stroke: this.GROUPSTEP_LINE_STROKE,
            strokeWidth: this.GROUPSTEP_LINE_STROKEWIDTH
        });
        this.rightLine = new __WEBPACK_IMPORTED_MODULE_0_konva__["Line"]({
            points: [lineParams.p2.x, lineParams.p2.y, lineParams.p3.x, lineParams.p3.y],
            stroke: this.GROUPSTEP_LINE_STROKE,
            strokeWidth: this.GROUPSTEP_LINE_STROKEWIDTH
        });
        this.bottomLine = new __WEBPACK_IMPORTED_MODULE_0_konva__["Line"]({
            points: [lineParams.p3.x, lineParams.p3.y, lineParams.p4.x, lineParams.p4.y],
            stroke: this.GROUPSTEP_LINE_STROKE,
            strokeWidth: this.GROUPSTEP_LINE_STROKEWIDTH
        });
        this.leftLine = new __WEBPACK_IMPORTED_MODULE_0_konva__["Line"]({
            points: [lineParams.p4.x, lineParams.p4.y, lineParams.p1.x, lineParams.p1.y],
            stroke: this.GROUPSTEP_LINE_STROKE,
            strokeWidth: this.GROUPSTEP_LINE_STROKEWIDTH
        });
        this.group.add(this.topLine);
        this.group.add(this.rightLine);
        this.group.add(this.bottomLine);
        this.group.add(this.leftLine);
        for (var i = 1; i < this.countSteps; i++) {
            var tempLine = new __WEBPACK_IMPORTED_MODULE_0_konva__["Line"]({
                points: [lineParams.p1.x, lineParams.p1.y + i * this.stepHeight,
                    lineParams.p2.x, lineParams.p2.y + i * this.stepHeight],
                stroke: this.GROUPSTEP_LINE_STROKE,
                strokeWidth: 1
            });
            this.group.add(tempLine);
        }
    };
    GroupStep.prototype.calcLineParams = function () {
        var p1, p2, p3, p4;
        p1 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](0, 0);
        p2 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](p1.x + this.width, p1.y);
        p3 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](p2.x, p2.y + this.stepHeight * this.countSteps);
        p4 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](p1.x, p3.y);
        return {
            p1: p1,
            p2: p2,
            p3: p3,
            p4: p4
        };
    };
    return GroupStep;
}());



/***/ }),

/***/ "../../../../../src/app/module/groupwall.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupWall; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__point__ = __webpack_require__("../../../../../src/app/module/point.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_konva__ = __webpack_require__("../../../../konva/konva.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_konva___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_konva__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__groupdoor__ = __webpack_require__("../../../../../src/app/module/groupdoor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__evented__ = __webpack_require__("../../../../../src/app/module/evented.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__grouphalfwall__ = __webpack_require__("../../../../../src/app/module/grouphalfwall.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__groupwallcloset__ = __webpack_require__("../../../../../src/app/module/groupwallcloset.ts");






var GroupWall = (function () {
    function GroupWall(_parentRoom, _wall) {
        this._parentRoom = _parentRoom;
        this._wall = _wall;
        this.groupDoors = [];
        this.groupHalfWalls = [];
        this.groupWallClosets = [];
        this.isMergged = false;
        // constants
        this.MAINLINE_STROKE = '#000';
        this.MAINLINE_STROKEWIDTH = 3;
        this.SIGNLINE_LENGTH = 30;
        this.SIGNLINE_STROKE = '#000';
        this.SIGNLINE_STROKEWIDTH = 1;
        this.ARROW_POINTER_LENGTH = 5;
        this.ARROW_POINTER_WIDTH = 5;
        this.ARROW_FILL = '#000';
        this.ARROW_STROKE = '#000';
        this.ARROW_STROKEWIDTH = 1;
        this.LENGTHTEXT_WIDTH = 50;
        this.LENGTHTEXT_FONTSIZE = 20;
        this.LENGTHTEXT_FONTFAMILY = 'Calibri';
        this.LENGTHTEXT_FILL = '#000';
        this.parentRoom = _parentRoom;
        this.wallId = 'groupwall_' + +Math.floor(Math.random() * 100000 % 100000);
        this.group = this._parentRoom.group;
        this.layer = this._parentRoom.layer;
        this.stage = this._parentRoom.stage;
        this.initWall();
        this.drawWall();
        var me = this;
        __WEBPACK_IMPORTED_MODULE_3__evented__["a" /* Evented */].on('group-room-clicked', function (e) {
            if (_parentRoom === e.args) {
                me.roomClicked(true);
            }
        });
        __WEBPACK_IMPORTED_MODULE_3__evented__["a" /* Evented */].on('group-room-unclicked', function (e) {
            if (_parentRoom === e.args) {
                me.roomClicked(false);
            }
        });
        __WEBPACK_IMPORTED_MODULE_3__evented__["a" /* Evented */].on('stage-dragging', function (e) {
        });
        __WEBPACK_IMPORTED_MODULE_3__evented__["a" /* Evented */].on('group-room-end-dragging', function (e) {
            if (e.args !== me.parentRoom) {
                me.mergeWall(e.args);
                // console.log('call merge wall');
            }
        });
        __WEBPACK_IMPORTED_MODULE_3__evented__["a" /* Evented */].on('group-room-start-dragging', function (e) {
            // me.drawMerggedDoor(false);
            // me.merggedDoor = null;
            me.isMergged = false;
            me.show();
        });
    }
    GroupWall.prototype.initWall = function () {
        this.startP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this._wall.startP.x, this._wall.startP.y);
        this.endP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this._wall.endP.x, this._wall.endP.y);
        this.midPoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */]((this.startP.x + this.endP.x) / 2, (this.startP.y + this.endP.y) / 2);
        this.wallDirection = this._wall.wallDirection;
    };
    GroupWall.prototype.drawWall = function () {
        this.mainLine = new __WEBPACK_IMPORTED_MODULE_1_konva__["Line"]({
            points: [this.startP.x, this.startP.y, this.endP.x, this.endP.y],
            stroke: this.MAINLINE_STROKE,
            strokeWidth: this.MAINLINE_STROKEWIDTH,
        });
        var signLineParams = this.calcSignLineParams();
        this.signLine1 = new __WEBPACK_IMPORTED_MODULE_1_konva__["Line"]({
            points: [this.startP.x, this.startP.y, signLineParams.p1.x, signLineParams.p1.y],
            stroke: this.SIGNLINE_STROKE,
            strokeWidth: this.SIGNLINE_STROKEWIDTH
        });
        this.signLine2 = new __WEBPACK_IMPORTED_MODULE_1_konva__["Line"]({
            points: [this.endP.x, this.endP.y, signLineParams.p2.x, signLineParams.p2.y],
            stroke: this.SIGNLINE_STROKE,
            strokeWidth: this.SIGNLINE_STROKEWIDTH
        });
        var arrowLineParams = this.calcArrowLineParams();
        this.arrowLine1 = new __WEBPACK_IMPORTED_MODULE_1_konva__["Arrow"]({
            points: [arrowLineParams.p1.x, arrowLineParams.p1.y, arrowLineParams.p2.x, arrowLineParams.p2.y],
            pointerLength: this.ARROW_POINTER_LENGTH,
            pointerWidth: this.ARROW_POINTER_WIDTH,
            fill: this.ARROW_FILL,
            stroke: this.ARROW_STROKE,
            strokeWidth: this.ARROW_STROKEWIDTH
        });
        this.arrowLine2 = new __WEBPACK_IMPORTED_MODULE_1_konva__["Arrow"]({
            points: [arrowLineParams.p3.x, arrowLineParams.p3.y, arrowLineParams.p4.x, arrowLineParams.p4.y],
            pointerLength: this.ARROW_POINTER_LENGTH,
            pointerWidth: this.ARROW_POINTER_WIDTH,
            fill: this.ARROW_FILL,
            stroke: this.ARROW_STROKE,
            strokeWidth: this.ARROW_STROKEWIDTH
        });
        this.calcLength();
        this.lengthText = new __WEBPACK_IMPORTED_MODULE_1_konva__["Text"]({
            x: this.midPoint.x,
            y: this.midPoint.y,
            width: this.LENGTHTEXT_WIDTH,
            align: 'center',
            text: this.lengthText1 + "'" + this.lengthText2 + "\"",
            fontSize: this.LENGTHTEXT_FONTSIZE,
            fontFamily: this.LENGTHTEXT_FONTFAMILY,
            fill: this.LENGTHTEXT_FILL
        });
        switch (this.wallDirection) {
            case 'ltr':
                this.lengthText.x(this.midPoint.x - this.LENGTHTEXT_WIDTH / 2);
                this.lengthText.y(this.midPoint.y - this.SIGNLINE_LENGTH);
                break;
            case 'rtl':
                this.lengthText.x(this.midPoint.x - this.LENGTHTEXT_WIDTH / 2);
                this.lengthText.y(this.midPoint.y + this.SIGNLINE_LENGTH / 2);
                break;
            case 'ttd':
                this.lengthText.rotation(-90);
                this.lengthText.x(this.midPoint.x + this.SIGNLINE_LENGTH / 2);
                this.lengthText.y(this.midPoint.y + this.LENGTHTEXT_WIDTH / 2);
                break;
            case 'dtt':
                this.lengthText.rotation(90);
                this.lengthText.x(this.midPoint.x - this.SIGNLINE_LENGTH / 2);
                this.lengthText.y(this.midPoint.y - this.LENGTHTEXT_WIDTH / 2);
                break;
            case 'other':
                var d_x = this.endP.x - this.startP.x;
                var d_y = this.endP.y - this.startP.y;
                var dd = Math.sqrt(d_x * d_x + d_y * d_y);
                var d_x_1 = this.SIGNLINE_LENGTH * d_y / dd;
                var d_y_1 = d_x_1 * d_x / d_y;
                var alpha = Math.atan(d_y / d_x) * 180 / Math.PI;
                this.lengthText.rotation(alpha);
                this.lengthText.x(arrowLineParams.p1.x);
                this.lengthText.y(arrowLineParams.p1.y);
                if (d_x < 0) {
                    this.lengthText.x(arrowLineParams.p3.x);
                    this.lengthText.y(arrowLineParams.p3.y);
                }
                break;
            default:
                break;
        }
        this.group.add(this.mainLine);
        this.group.add(this.signLine1);
        this.group.add(this.signLine2);
        this.group.add(this.arrowLine1);
        this.group.add(this.arrowLine2);
        this.group.add(this.lengthText);
        this.drawDoors();
        this.drawHalfWalls();
        this.drawWallClosets();
    };
    GroupWall.prototype.calcSignLineParams = function () {
        var p1, p2;
        switch (this.wallDirection) {
            case 'ltr':
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.startP.x, this.startP.y - this.SIGNLINE_LENGTH);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.endP.x, this.endP.y - this.SIGNLINE_LENGTH);
                break;
            case 'ttd':
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.startP.x + this.SIGNLINE_LENGTH, this.startP.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.endP.x + this.SIGNLINE_LENGTH, this.endP.y);
                break;
            case 'rtl':
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.startP.x, this.startP.y + this.SIGNLINE_LENGTH);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.endP.x, this.endP.y + this.SIGNLINE_LENGTH);
                break;
            case 'dtt':
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.startP.x - this.SIGNLINE_LENGTH, this.startP.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.endP.x - this.SIGNLINE_LENGTH, this.endP.y);
                break;
            case 'other':
                var d_x = this.endP.x - this.startP.x;
                var d_y = this.endP.y - this.startP.y;
                var dd = Math.sqrt(d_x * d_x + d_y * d_y);
                var d_x_1 = this.SIGNLINE_LENGTH * d_y / dd;
                var d_y_1 = d_x_1 * d_x / d_y;
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.startP.x + d_x_1, this.startP.y - d_y_1);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.endP.x + d_x_1, this.endP.y - d_y_1);
                break;
            default:
                break;
        }
        return {
            p1: p1,
            p2: p2
        };
    };
    GroupWall.prototype.calcArrowLineParams = function () {
        var p1, p2, p3, p4;
        switch (this.wallDirection) {
            case 'ltr':
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.midPoint.x - this.LENGTHTEXT_WIDTH / 2, this.midPoint.y - this.SIGNLINE_LENGTH / 2);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.startP.x, this.midPoint.y - this.SIGNLINE_LENGTH / 2);
                p3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.midPoint.x + this.LENGTHTEXT_WIDTH / 2, this.midPoint.y - this.SIGNLINE_LENGTH / 2);
                p4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.endP.x, this.midPoint.y - this.SIGNLINE_LENGTH / 2);
                break;
            case 'rtl':
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.midPoint.x + this.LENGTHTEXT_WIDTH / 2, this.midPoint.y + this.SIGNLINE_LENGTH / 2);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.startP.x, this.midPoint.y + this.SIGNLINE_LENGTH / 2);
                p3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.midPoint.x - this.LENGTHTEXT_WIDTH / 2, this.midPoint.y + this.SIGNLINE_LENGTH / 2);
                p4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.endP.x, this.midPoint.y + this.SIGNLINE_LENGTH / 2);
                break;
            case 'ttd':
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.midPoint.x + this.SIGNLINE_LENGTH / 2, this.midPoint.y - this.LENGTHTEXT_WIDTH / 2);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.startP.x + this.SIGNLINE_LENGTH / 2, this.startP.y);
                p3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.midPoint.x + this.SIGNLINE_LENGTH / 2, this.midPoint.y + this.LENGTHTEXT_WIDTH / 2);
                p4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.endP.x + this.SIGNLINE_LENGTH / 2, this.endP.y);
                break;
            case 'dtt':
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.midPoint.x - this.SIGNLINE_LENGTH / 2, this.midPoint.y + this.LENGTHTEXT_WIDTH / 2);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.startP.x - this.SIGNLINE_LENGTH / 2, this.startP.y);
                p3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.midPoint.x - this.SIGNLINE_LENGTH / 2, this.midPoint.y - this.LENGTHTEXT_WIDTH / 2);
                p4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.endP.x - this.SIGNLINE_LENGTH / 2, this.endP.y);
                break;
            case 'other':
                var d_x = this.endP.x - this.startP.x;
                var d_y = this.endP.y - this.startP.y;
                var dd = Math.sqrt(d_x * d_x + d_y * d_y);
                var k = d_x * Math.abs(d_y) / (d_y * Math.abs(d_x));
                var k_x = d_x / Math.abs(d_x);
                var k_y = d_y / Math.abs(d_y);
                var d_x_1 = this.SIGNLINE_LENGTH * d_y / dd / 2;
                var d_y_1 = d_x_1 * d_x / d_y;
                var d_x_2 = Math.abs(this.LENGTHTEXT_WIDTH * d_y / 2 / dd) * k_x;
                var d_y_2 = Math.abs(d_x_2 * d_y / d_x) * k_y;
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.midPoint.x + d_x_1 - d_x_2, this.midPoint.y - d_y_1 - d_y_2);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.startP.x + d_x_1, this.startP.y - d_y_1);
                p3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.midPoint.x + d_x_1 + d_x_2, this.midPoint.y - d_y_1 + d_y_2);
                p4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.endP.x + d_x_1, this.endP.y - d_y_1);
                break;
            default:
                break;
        }
        return {
            p1: p1,
            p2: p2,
            p3: p3,
            p4: p4
        };
    };
    GroupWall.prototype.calcLength = function () {
        var length = Math.sqrt((this.startP.x - this.endP.x) * (this.startP.x - this.endP.x) +
            (this.startP.y - this.endP.y) * (this.startP.y - this.endP.y));
        this.lengthText1 = Math.floor(length / 36);
        this.lengthText2 = (length % 36 / 3).toFixed(0);
        return length;
    };
    GroupWall.prototype.drawDoors = function () {
        var _this = this;
        this._wall.doors.map(function (door) {
            var tempDoor = new __WEBPACK_IMPORTED_MODULE_2__groupdoor__["a" /* GroupDoor */](_this, door);
            _this.groupDoors.push(tempDoor);
        });
    };
    GroupWall.prototype.drawHalfWalls = function () {
        var _this = this;
        this._wall.halfwalls.map(function (halfwall) {
            var tempgrouphalfwall = new __WEBPACK_IMPORTED_MODULE_4__grouphalfwall__["a" /* GroupHalfWall */](_this, halfwall);
            _this.groupHalfWalls.push(tempgrouphalfwall);
        });
    };
    GroupWall.prototype.drawWallClosets = function () {
        var _this = this;
        this._wall.closets.map(function (wallcloset) {
            var tempgroupwallcloset = new __WEBPACK_IMPORTED_MODULE_5__groupwallcloset__["a" /* GroupWallCloset */](_this, wallcloset);
            _this.groupWallClosets.push(tempgroupwallcloset);
        });
    };
    GroupWall.prototype.roomClicked = function (clicked) {
        if (this.isMergged) {
            return;
        }
        if (clicked) {
            this.signLine1.hide();
            this.signLine2.hide();
            this.arrowLine1.hide();
            this.arrowLine2.hide();
            this.lengthText.hide();
        }
        else {
            this.signLine1.show();
            this.signLine2.show();
            this.arrowLine1.show();
            this.arrowLine2.show();
            this.lengthText.show();
        }
    };
    GroupWall.prototype.mergeWall = function (draggingRoom) {
        var _this = this;
        var me = this;
        draggingRoom.walls.map(function (dragWall) {
            if (me.isMergeable(dragWall)) {
                var draggingDoorClientRect = dragWall.mainLine.getClientRect();
                var fixedDoorClientRect = _this.mainLine.getClientRect();
                var delta_x = fixedDoorClientRect.x - draggingDoorClientRect.x;
                var delta_y = fixedDoorClientRect.y - draggingDoorClientRect.y;
                var groupClientRect = dragWall.group.getClientRect();
                var absoluteGroupPosition = dragWall.group.getAbsolutePosition();
                var absoluteStagePosition = dragWall.stage.getAbsolutePosition();
                dragWall.group.x(absoluteGroupPosition.x + delta_x - absoluteStagePosition.x);
                dragWall.group.y(absoluteGroupPosition.y + delta_y - absoluteStagePosition.y);
                if (dragWall.groupDoors.length !== me.groupDoors.length) {
                    alert('Amount of doors must be same');
                }
                else {
                    dragWall.groupDoors.map(function (groupdoor) {
                        groupdoor.hide();
                    });
                    dragWall.hide();
                    dragWall.isMergged = true;
                }
                dragWall.group.draw();
                dragWall.layer.draw();
            }
        });
    };
    GroupWall.prototype.isMergeable = function (drageWall) {
        // if (this.groupDoors.length !== drageWall.groupDoors.length) {
        //     return false;
        // }
        switch (this.wallDirection) {
            case 'ltr':
                if (drageWall.wallDirection !== 'rtl') {
                    return false;
                }
                break;
            case 'rtl':
                if (drageWall.wallDirection !== 'ltr') {
                    return false;
                }
                break;
            case 'ttd':
                if (drageWall.wallDirection !== 'dtt') {
                    return false;
                }
                break;
            case 'dtt':
                if (drageWall.wallDirection !== 'ttd') {
                    return false;
                }
                break;
            default:
                break;
        }
        var fixedRect = this.mainLine.getClientRect();
        var drageRect = drageWall.mainLine.getClientRect();
        console.log(fixedRect);
        console.log(drageRect);
        var delta_x = drageRect.x - fixedRect.x;
        var delta_y = drageRect.y - fixedRect.y;
        var distance = Math.sqrt(delta_x * delta_x + delta_y * delta_y);
        var maxLength = Math.sqrt(fixedRect.width * fixedRect.width + fixedRect.height * fixedRect.height);
        if (fixedRect.width !== drageRect.width || fixedRect.height !== drageRect.height) {
            console.log('return from length');
            return false;
        }
        // if (distance > maxLength) {
        //     console.log(distance);
        //     console.log(maxLength);
        //     console.log('return from distance');
        //     return false;
        // }
        if (Math.abs(delta_x) > fixedRect.width + 10) {
            console.log('return from delta x');
            return false;
        }
        if (Math.abs(delta_y) > fixedRect.height + 10) {
            console.log('return from delta y');
            return false;
        }
        return true;
    };
    GroupWall.prototype.hide = function () {
        this.mainLine.hide();
        this.signLine1.hide();
        this.signLine2.hide();
        this.arrowLine1.hide();
        this.arrowLine2.hide();
        this.lengthText.hide();
    };
    GroupWall.prototype.show = function () {
        this.mainLine.show();
        this.signLine1.show();
        this.signLine2.show();
        this.arrowLine1.show();
        this.arrowLine2.show();
        this.lengthText.show();
    };
    return GroupWall;
}());



/***/ }),

/***/ "../../../../../src/app/module/groupwallcloset.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupWallCloset; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_konva__ = __webpack_require__("../../../../konva/konva.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_konva___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_konva__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__("../../../../../src/app/module/point.ts");


var GroupWallCloset = (function () {
    function GroupWallCloset(_parentWall, _wallcloset) {
        this._parentWall = _parentWall;
        this._wallcloset = _wallcloset;
        this.isStartPCloset = true;
        this.isInnerCloset = true;
        this.lastPos = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](0, 0);
        this.heightRange = { min: 0, max: 0 };
        this.lengthRange = { min: 0, max: 0 };
        this.isSetDepth = false;
        this.isSideLineSelected = false;
        this.isBackLineSelected = false;
        this.sideLength1 = 0; // foot
        this.sideLength2 = 0; // inch
        this.sideLength = 2 * 36 + 6 * 3;
        this.backLength = 6 * 36;
        this.backLength1 = 0;
        this.backLength2 = 0;
        // constants
        this.WALLCLOSET_DEFAULT_LENGTH = 6 * 36; // 6 FOOTS
        this.WALLCLOSET_DEFAULT_HEIGHT = 2 * 36 + 6 * 3; // 2 FOOTS 6 inches
        this.WALLCLOSET_BACKLINE_STROKE = '#000';
        this.WALLCLOSET_BACKLINE_STROKEWIDTH = 3;
        this.WALLCLOSET_SIDELINE_STROKE = '#000';
        this.WALLCLOSET_SIDELINE_STROKEWIDTH = 3;
        this.WALLCLOSET_TOPLINES_GAP = 0.5 * 36; // 0.5 FOOT
        this.WALLCLOSET_TOPLINE_STROKE = '#000';
        this.WALLCLOSET_TOPLINE_STROKEWIDTH = 3;
        this.WALLCLOSET_CITEXT_WIDTH = 50;
        this.WALLCLOSET_CITEXT_FONTSIZE = 30;
        this.WALLCLOSET_INNERPOLY_NORMAL_FILL = '#fff';
        this.groupwallclosetId = 'wallcloset_' + Math.floor(Math.random() * 100000 % 100000);
        this.parentWall = _parentWall;
        this.wallcloset = _wallcloset;
        this.group = this.parentWall.group;
        this.isInnerCloset = this.wallcloset.isInnerClosetChanged;
        this.isStartPCloset = this.wallcloset.isStartPClosetChanged;
        this.sideLength = this.wallcloset.sideLength;
        this.backLength = this.wallcloset.backLength;
        this.initUI();
    }
    GroupWallCloset.prototype.initUI = function () {
        var me = this;
        this.defineIsStart();
        this.calcSideLength();
        this.calcBackLength();
        var backLineParams = this.calcBackLineParams();
        this.backLine = new __WEBPACK_IMPORTED_MODULE_0_konva__["Line"]({
            points: [backLineParams.p1.x, backLineParams.p1.y, backLineParams.p2.x, backLineParams.p2.y],
            stroke: me.WALLCLOSET_BACKLINE_STROKE,
            strokeWidth: me.WALLCLOSET_BACKLINE_STROKEWIDTH
        });
        this.backLengthText = new __WEBPACK_IMPORTED_MODULE_0_konva__["Text"]({
            x: (backLineParams.p1.x + backLineParams.p2.x) / 2,
            y: (backLineParams.p1.y + backLineParams.p2.y) / 2,
            text: me.backLength1 + "'" + me.backLength2 + "\"",
            fontSize: 15
        });
        var sideParams = this.calcSideLineParams();
        this.sideLine1 = new __WEBPACK_IMPORTED_MODULE_0_konva__["Line"]({
            points: [sideParams.p1.x, sideParams.p1.y, sideParams.p2.x, sideParams.p2.y],
            stroke: me.WALLCLOSET_SIDELINE_STROKE,
            strokeWidth: me.WALLCLOSET_SIDELINE_STROKEWIDTH
        });
        this.sideLengthText1 = new __WEBPACK_IMPORTED_MODULE_0_konva__["Text"]({
            x: (sideParams.p1.x + sideParams.p2.x) / 2,
            y: (sideParams.p1.y + sideParams.p2.y) / 2,
            fontSize: 15,
            text: this.sideLength1 + "'" + this.sideLength2 + "\""
        });
        this.sideLine2 = new __WEBPACK_IMPORTED_MODULE_0_konva__["Line"]({
            points: [sideParams.p3.x, sideParams.p3.y, sideParams.p4.x, sideParams.p4.y],
            stroke: me.WALLCLOSET_SIDELINE_STROKE,
            strokeWidth: me.WALLCLOSET_SIDELINE_STROKEWIDTH
        });
        this.sideLengthText2 = new __WEBPACK_IMPORTED_MODULE_0_konva__["Text"]({
            x: (sideParams.p3.x + sideParams.p4.x) / 2,
            y: (sideParams.p3.y + sideParams.p4.y) / 2,
            fontSize: 15,
            text: this.sideLength1 + "'" + this.sideLength2 + "\""
        });
        var topLineParams = this.calcTopLineParams();
        this.topLine1 = new __WEBPACK_IMPORTED_MODULE_0_konva__["Line"]({
            points: [topLineParams.p1.x, topLineParams.p1.y, topLineParams.p2.x, topLineParams.p2.y,
                topLineParams.p3.x, topLineParams.p3.y],
            stroke: me.WALLCLOSET_TOPLINE_STROKE,
            strokeWidth: me.WALLCLOSET_TOPLINE_STROKEWIDTH
        });
        this.topLine2 = new __WEBPACK_IMPORTED_MODULE_0_konva__["Line"]({
            points: [topLineParams.p4.x, topLineParams.p4.y, topLineParams.p5.x, topLineParams.p5.y,
                topLineParams.p6.x, topLineParams.p6.y],
            stroke: me.WALLCLOSET_TOPLINE_STROKE,
            strokeWidth: me.WALLCLOSET_TOPLINE_STROKEWIDTH
        });
        var CITextCenterP = this.calcCITextCenterPoint();
        this.CLText = new __WEBPACK_IMPORTED_MODULE_0_konva__["Text"]({
            x: CITextCenterP.x,
            y: CITextCenterP.y,
            text: 'C L',
            align: 'center',
            width: me.WALLCLOSET_CITEXT_WIDTH,
            fontSize: me.WALLCLOSET_CITEXT_FONTSIZE
        });
        this.revisionCIText();
        this.innerPoly = new __WEBPACK_IMPORTED_MODULE_0_konva__["Line"]({
            points: [backLineParams.p1.x, backLineParams.p1.y, topLineParams.p1.x, topLineParams.p1.y,
                topLineParams.p2.x, topLineParams.p2.y, topLineParams.p3.x, topLineParams.p3.y,
                topLineParams.p6.x, topLineParams.p6.y, topLineParams.p5.x, topLineParams.p5.y,
                topLineParams.p4.x, topLineParams.p4.y, backLineParams.p2.x, backLineParams.p2.y],
            fill: me.WALLCLOSET_INNERPOLY_NORMAL_FILL,
            closed: true
        });
        this.doorPoly = new __WEBPACK_IMPORTED_MODULE_0_konva__["Line"]({
            points: [topLineParams.p2.x, topLineParams.p2.y, topLineParams.p3.x, topLineParams.p3.y,
                topLineParams.p6.x, topLineParams.p6.y, topLineParams.p5.x, topLineParams.p5.y],
            fill: '#eee',
            closed: true,
            stroke: '#eee',
            strokeWidth: 5
        });
        this.group.add(this.doorPoly);
        this.group.add(this.innerPoly);
        this.group.add(this.backLine);
        this.group.add(this.backLengthText);
        this.group.add(this.sideLine1);
        this.group.add(this.sideLine2);
        this.group.add(this.sideLengthText1);
        this.group.add(this.sideLengthText2);
        this.group.add(this.topLine1);
        this.group.add(this.topLine2);
        this.group.add(this.CLText);
    };
    GroupWallCloset.prototype.defineIsStart = function () {
        switch (this.parentWall.wallDirection) {
            case 'ltr':
                if (this.isStartPCloset) {
                    this.startP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.parentWall.startP.x, this.parentWall.startP.y);
                    this.endP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startP.x + this.backLength, this.startP.y);
                }
                else {
                    this.endP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.parentWall.endP.x, this.parentWall.endP.y);
                    this.startP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endP.x - this.backLength, this.endP.y);
                }
                break;
            case 'rtl':
                if (this.isStartPCloset) {
                    this.endP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.parentWall.startP.x, this.parentWall.startP.y);
                    this.startP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endP.x - this.backLength, this.endP.y);
                }
                else {
                    this.startP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.parentWall.endP.x, this.parentWall.endP.y);
                    this.endP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startP.x + this.backLength, this.startP.y);
                }
                break;
            case 'ttd':
                if (this.isStartPCloset) {
                    this.startP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.parentWall.startP.x, this.parentWall.startP.y);
                    this.endP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startP.x, this.startP.y + this.backLength);
                }
                else {
                    this.endP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.parentWall.endP.x, this.parentWall.endP.y);
                    this.startP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endP.x, this.endP.y - this.backLength);
                }
                break;
            case 'dtt':
                if (this.isStartPCloset) {
                    this.endP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.parentWall.startP.x, this.parentWall.startP.y);
                    this.startP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endP.x, this.endP.y - this.backLength);
                }
                else {
                    this.startP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.parentWall.endP.x, this.parentWall.endP.y);
                    this.endP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startP.x, this.startP.y + this.backLength);
                }
                break;
            default:
                break;
        }
    };
    GroupWallCloset.prototype.calcBackLineParams = function () {
        var p1, p2;
        p1 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startP.x, this.startP.y);
        p2 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endP.x, this.endP.y);
        if (!this.isInnerCloset) {
            switch (this.parentWall.wallDirection) {
                case 'ltr':
                    p1.y -= this.sideLength;
                    p2.y -= this.sideLength;
                    break;
                case 'rtl':
                    p1.y += this.sideLength;
                    p2.y += this.sideLength;
                    break;
                case 'ttd':
                    p1.x += this.sideLength;
                    p2.x += this.sideLength;
                    break;
                case 'dtt':
                    p1.x -= this.sideLength;
                    p2.x -= this.sideLength;
                default:
                    break;
            }
        }
        this.backLineMidPoint = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */]((p1.x + p2.x) / 2, (p1.y + p2.y) / 2);
        this.backLineMidPointOld = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */]((p1.x + p2.x) / 2, (p1.y + p2.y) / 2);
        return {
            p1: p1,
            p2: p2
        };
    };
    GroupWallCloset.prototype.calcSideLineParams = function () {
        var p1, p2, p3, p4;
        switch (this.parentWall.wallDirection) {
            case 'ltr':
                p1 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startP.x, this.startP.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startP.x, this.startP.y + this.sideLength);
                p3 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endP.x, this.endP.y);
                p4 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endP.x, this.endP.y + this.sideLength);
                if (!this.isInnerCloset) {
                    p1.y -= this.sideLength;
                    p2.y -= this.sideLength;
                    p3.y -= this.sideLength;
                    p4.y -= this.sideLength;
                }
                break;
            case 'rtl':
                p1 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startP.x, this.startP.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startP.x, this.startP.y - this.sideLength);
                p3 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endP.x, this.endP.y);
                p4 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endP.x, this.endP.y - this.sideLength);
                if (!this.isInnerCloset) {
                    p1.y += this.sideLength;
                    p2.y += this.sideLength;
                    p3.y += this.sideLength;
                    p4.y += this.sideLength;
                }
                break;
            case 'ttd':
                p1 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startP.x, this.startP.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startP.x - this.sideLength, this.startP.y);
                p3 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endP.x, this.endP.y);
                p4 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endP.x - this.sideLength, this.endP.y);
                if (!this.isInnerCloset) {
                    p1.x += this.sideLength;
                    p2.x += this.sideLength;
                    p3.x += this.sideLength;
                    p4.x += this.sideLength;
                }
                break;
            case 'dtt':
                p1 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startP.x, this.startP.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startP.x + this.sideLength, this.startP.y);
                p3 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endP.x, this.endP.y);
                p4 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endP.x + this.sideLength, this.endP.y);
                if (!this.isInnerCloset) {
                    p1.x -= this.sideLength;
                    p2.x -= this.sideLength;
                    p3.x -= this.sideLength;
                    p4.x -= this.sideLength;
                }
                break;
            default:
                break;
        }
        return {
            p1: p1,
            p2: p2,
            p3: p3,
            p4: p4
        };
    };
    GroupWallCloset.prototype.calcTopLineParams = function () {
        var p1, p2, p3, p4, p5, p6;
        this.calcMidPoint();
        var sideLineParams = this.calcSideLineParams();
        switch (this.parentWall.wallDirection) {
            case 'ltr':
                p1 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](sideLineParams.p2.x, sideLineParams.p2.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.midPoint.x - this.WALLCLOSET_TOPLINES_GAP * 1.5, p1.y);
                p3 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](p2.x + this.WALLCLOSET_TOPLINES_GAP, p2.y - this.WALLCLOSET_TOPLINES_GAP);
                p4 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](sideLineParams.p4.x, sideLineParams.p4.y);
                p5 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.midPoint.x + this.WALLCLOSET_TOPLINES_GAP * 1.5, p4.y);
                p6 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](p5.x - this.WALLCLOSET_TOPLINES_GAP, p5.y - this.WALLCLOSET_TOPLINES_GAP);
                break;
            case 'rtl':
                p1 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](sideLineParams.p2.x, sideLineParams.p2.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.midPoint.x - this.WALLCLOSET_TOPLINES_GAP * 1.5, p1.y);
                p3 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](p2.x + this.WALLCLOSET_TOPLINES_GAP, p2.y + this.WALLCLOSET_TOPLINES_GAP);
                p4 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](sideLineParams.p4.x, sideLineParams.p4.y);
                p5 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.midPoint.x + this.WALLCLOSET_TOPLINES_GAP * 1.5, p4.y);
                p6 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](p5.x - this.WALLCLOSET_TOPLINES_GAP, p5.y + this.WALLCLOSET_TOPLINES_GAP);
                break;
            case 'ttd':
                p1 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](sideLineParams.p2.x, sideLineParams.p2.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](p1.x, this.midPoint.y - this.WALLCLOSET_TOPLINES_GAP * 1.5);
                p3 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](p2.x + this.WALLCLOSET_TOPLINES_GAP, p2.y + this.WALLCLOSET_TOPLINES_GAP);
                p4 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](sideLineParams.p4.x, sideLineParams.p4.y);
                p5 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](p4.x, this.midPoint.y + this.WALLCLOSET_TOPLINES_GAP * 1.5);
                p6 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](p5.x + this.WALLCLOSET_TOPLINES_GAP, p5.y - this.WALLCLOSET_TOPLINES_GAP);
                break;
            case 'dtt':
                p1 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](sideLineParams.p2.x, sideLineParams.p2.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](p1.x, this.midPoint.y - this.WALLCLOSET_TOPLINES_GAP * 1.5);
                p3 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](p2.x - this.WALLCLOSET_TOPLINES_GAP, p2.y + this.WALLCLOSET_TOPLINES_GAP);
                p4 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](sideLineParams.p4.x, sideLineParams.p4.y);
                p5 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](p4.x, this.midPoint.y + this.WALLCLOSET_TOPLINES_GAP * 1.5);
                p6 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](p5.x - this.WALLCLOSET_TOPLINES_GAP, p5.y - this.WALLCLOSET_TOPLINES_GAP);
                break;
            default:
                break;
        }
        return {
            p1: p1,
            p2: p2,
            p3: p3,
            p4: p4,
            p5: p5,
            p6: p6
        };
    };
    GroupWallCloset.prototype.calcMidPoint = function () {
        this.midPoint = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */]((this.startP.x + this.endP.x) / 2, (this.startP.y + this.endP.y) / 2);
    };
    GroupWallCloset.prototype.calcCITextCenterPoint = function () {
        var sideLineParams = this.calcSideLineParams();
        var centerP;
        switch (this.parentWall.wallDirection) {
            case 'ltr':
                centerP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.midPoint.x, (sideLineParams.p1.y + sideLineParams.p2.y) / 2);
                break;
            case 'rtl':
                centerP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.midPoint.x, (sideLineParams.p1.y + sideLineParams.p2.y) / 2);
                break;
            case 'ttd':
                centerP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */]((sideLineParams.p1.x + sideLineParams.p2.x) / 2, this.midPoint.y);
                break;
            case 'dtt':
                centerP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */]((sideLineParams.p1.x + sideLineParams.p2.x) / 2, this.midPoint.y);
                break;
            default:
                break;
        }
        return centerP;
    };
    GroupWallCloset.prototype.revisionCIText = function () {
        var me = this;
        switch (this.parentWall.wallDirection) {
            case 'ltr':
                this.CLText.x(me.CLText.x() - me.WALLCLOSET_CITEXT_WIDTH / 2);
                this.CLText.y(me.CLText.y() - me.WALLCLOSET_CITEXT_FONTSIZE / 2);
                break;
            case 'rtl':
                this.CLText.x(me.CLText.x() - me.WALLCLOSET_CITEXT_WIDTH / 2);
                break;
            case 'ttd':
                this.CLText.rotation(-90);
                this.CLText.y(me.CLText.y() + me.WALLCLOSET_CITEXT_WIDTH / 2);
                break;
            case 'dtt':
                this.CLText.rotation(90);
                this.CLText.y(me.CLText.y() - me.WALLCLOSET_CITEXT_WIDTH / 2);
                break;
            default:
                break;
        }
    };
    GroupWallCloset.prototype.calcSideLength = function () {
        this.sideLength1 = (Math.floor(this.sideLength / 36));
        this.sideLength2 = (this.sideLength % 36) / 3;
    };
    GroupWallCloset.prototype.calcBackLength = function () {
        this.backLength1 = (Math.floor(this.backLength / 36));
        this.backLength2 = (this.backLength % 36) / 3;
    };
    return GroupWallCloset;
}());



/***/ }),

/***/ "../../../../../src/app/module/halfbasicwall.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HalfBasicWall; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basicwall__ = __webpack_require__("../../../../../src/app/module/basicwall.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__evented__ = __webpack_require__("../../../../../src/app/module/evented.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__point__ = __webpack_require__("../../../../../src/app/module/point.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var HalfBasicWall = (function (_super) {
    __extends(HalfBasicWall, _super);
    function HalfBasicWall() {
        var _this = _super.call(this) || this;
        _this.halfBasicWallId = 'halfbasicwallId_' + Math.floor(Math.random() * 100000 % 100000);
        return _this;
    }
    HalfBasicWall.prototype.eventsResister = function () {
        var me = this;
        this.textLength.on('click', function () {
            __WEBPACK_IMPORTED_MODULE_1__evented__["a" /* Evented */].fire('halfwall length change', me);
            me.isSelected = !me.isSelected;
            me.redraw();
        });
        this.mainLine.on('click', function () {
            me.mainLineClickHalfWallBasic();
            __WEBPACK_IMPORTED_MODULE_1__evented__["a" /* Evented */].fire('halfwall length change', me);
        });
        __WEBPACK_IMPORTED_MODULE_1__evented__["a" /* Evented */].on('halfwallbasic clicked', function (e) {
            var sender = e.args;
            if (sender.wallId !== me.wallId) {
                me.isSelected = false;
                me.showStrecherComponents(false);
                me.redraw();
            }
        });
    };
    HalfBasicWall.prototype.redrawHalfBasicWall = function () {
        this.calcEndP();
        this.redraw();
    };
    HalfBasicWall.prototype.calcEndP = function () {
        switch (this.wallDirection) {
            case 'ltr':
                this.endP = new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* Point */](this.startP.x + this.wallLength, this.startP.y);
                break;
            case 'rtl':
                this.endP = new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* Point */](this.startP.x - this.wallLength, this.startP.y);
                break;
            case 'ttd':
                this.endP = new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* Point */](this.startP.x, this.startP.y + this.wallLength);
                break;
            case 'dtt':
                this.endP = new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* Point */](this.startP.x, this.startP.y - this.wallLength);
                break;
            default:
                break;
        }
    };
    HalfBasicWall.prototype.mainLineClickHalfWallBasic = function () {
        this.isSelected = !this.isSelected;
        __WEBPACK_IMPORTED_MODULE_1__evented__["a" /* Evented */].fire('halfwallbasic clicked', this);
        this.redraw();
    };
    HalfBasicWall.prototype.strecherWall = function () {
        if (this.wallLength < 3 * 36 + 6 * 3) {
            alert('you can not strech this wall, because this wall length is very short.');
            return;
        }
        var strecherWall = new HalfBasicWall();
        var endWallForStrech1 = new HalfBasicWall();
        var endWallForStrech2 = new HalfBasicWall();
        var startWallForStrech = new HalfBasicWall();
        strecherWall.endP = new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* Point */](this.endP.x, this.endP.y);
        endWallForStrech1.startP = new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* Point */](this.endP.x, this.endP.y);
        endWallForStrech1.endP = new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* Point */](this.endP.x, this.endP.y);
        endWallForStrech1.group = this.group;
        endWallForStrech1.parentHalfWall = this.parentHalfWall;
        endWallForStrech1.initUI();
        endWallForStrech1.eventsResister();
        endWallForStrech2.startP = new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* Point */](this.endP.x, this.endP.y);
        endWallForStrech2.endP = new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* Point */](this.endP.x, this.endP.y);
        endWallForStrech2.group = this.group;
        endWallForStrech2.parentHalfWall = this.parentHalfWall;
        endWallForStrech2.initUI();
        endWallForStrech2.eventsResister();
        this.wallLength = this.wallLength - this.STRECHER_DEFAULT_LENGTH;
        this.isSelected = false;
        this.redrawHalfBasicWall();
        strecherWall.startP = new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* Point */](this.endP.x, this.endP.y);
        strecherWall.group = this.group;
        strecherWall.parentHalfWall = this.parentHalfWall;
        strecherWall.isStreching = true;
        strecherWall.initUI();
        strecherWall.eventsResister();
        startWallForStrech.startP = new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* Point */](this.endP.x, this.endP.y);
        startWallForStrech.endP = new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* Point */](this.endP.x, this.endP.y);
        startWallForStrech.group = this.group;
        startWallForStrech.parentHalfWall = this.parentHalfWall;
        startWallForStrech.initUI();
        startWallForStrech.eventsResister();
        this.parentHalfWall.basicWalls.push(endWallForStrech1);
        this.parentHalfWall.basicWalls.push(endWallForStrech2);
        this.parentHalfWall.basicWalls.push(strecherWall);
        this.parentHalfWall.basicWalls.push(startWallForStrech);
        this.endWall = startWallForStrech;
        startWallForStrech.startWall = this;
        startWallForStrech.endWall = strecherWall;
        strecherWall.startWall = startWallForStrech;
        strecherWall.endWall = endWallForStrech1;
        endWallForStrech1.startWall = strecherWall;
        endWallForStrech1.endWall = endWallForStrech2;
        endWallForStrech2.startWall = endWallForStrech1;
        strecherWall.isSelected = true;
        __WEBPACK_IMPORTED_MODULE_1__evented__["a" /* Evented */].fire('halfwall length change', strecherWall);
        __WEBPACK_IMPORTED_MODULE_1__evented__["a" /* Evented */].fire('halfwallbasic clicked', strecherWall);
    };
    return HalfBasicWall;
}(__WEBPACK_IMPORTED_MODULE_0__basicwall__["a" /* BasicWall */]));



/***/ }),

/***/ "../../../../../src/app/module/halfwall.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HalfWall; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__point__ = __webpack_require__("../../../../../src/app/module/point.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__evented__ = __webpack_require__("../../../../../src/app/module/evented.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__halfbasicwall__ = __webpack_require__("../../../../../src/app/module/halfbasicwall.ts");



var HalfWall = (function () {
    function HalfWall(parentWall, layer) {
        this.basicWalls = [];
        this.HALFWALL_DELFAULT_LENGTH = 5 * 36; // 5 FOOT
        this.HALFWALL_LINE_STROKE = '#000';
        this.HALFWALL_LINE_STROKEWIDTH = 3;
        // super();
        var me = this;
        this.halfwallId = 'halfwall_' + Math.floor(Math.random() * 100000 % 100000);
        this.parentWall = parentWall;
        this.layer = layer;
        var firstBasicWall = new __WEBPACK_IMPORTED_MODULE_2__halfbasicwall__["a" /* HalfBasicWall */]();
        firstBasicWall.startP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.parentWall.clickedPoint.x, this.parentWall.clickedPoint.y);
        this.oldParentStartP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.parentWall.startP.x, this.parentWall.startP.y);
        this.startP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.parentWall.clickedPoint.x, this.parentWall.clickedPoint.y);
        firstBasicWall.group = this.parentWall.group;
        firstBasicWall.wallLength = this.HALFWALL_DELFAULT_LENGTH;
        this.calcEndP();
        firstBasicWall.endP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.endP.x, this.endP.y);
        firstBasicWall.parentHalfWall = this;
        firstBasicWall.initUI();
        this.basicWalls.push(firstBasicWall);
        firstBasicWall.eventsResister();
        this.layer.draw();
        __WEBPACK_IMPORTED_MODULE_1__evented__["a" /* Evented */].on('wall length change', function (e) {
            me.definePoints();
            me.redrawAll();
        });
    }
    HalfWall.prototype.calcEndP = function () {
        switch (this.parentWall.wallDirection) {
            case 'ltr':
                this.endP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.startP.x, this.startP.y + this.HALFWALL_DELFAULT_LENGTH);
                break;
            case 'rtl':
                this.endP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.startP.x, this.startP.y - this.HALFWALL_DELFAULT_LENGTH);
                break;
            case 'ttd':
                this.endP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.startP.x - this.HALFWALL_DELFAULT_LENGTH, this.startP.y);
                break;
            case 'dtt':
                this.endP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.startP.x + this.HALFWALL_DELFAULT_LENGTH, this.startP.y);
                break;
            default:
                break;
        }
    };
    HalfWall.prototype.definePoints = function () {
        var delta_x = this.parentWall.startP.x - this.oldParentStartP.x;
        var delta_y = this.parentWall.startP.y - this.oldParentStartP.y;
        this.startP.x += delta_x;
        this.startP.y += delta_y;
        this.oldParentStartP.x = this.parentWall.startP.x;
        this.oldParentStartP.y = this.parentWall.startP.y;
        this.basicWalls.map(function (basicWall) {
            basicWall.startP.x += delta_x;
            basicWall.startP.y += delta_y;
            basicWall.endP.x += delta_x;
            basicWall.endP.y += delta_y;
        });
    };
    HalfWall.prototype.redrawAll = function () {
        var me = this;
        this.basicWalls.map(function (basicwall) {
            basicwall.redraw();
        });
        this.layer.draw();
    };
    return HalfWall;
}());



/***/ }),

/***/ "../../../../../src/app/module/island.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Island; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__point__ = __webpack_require__("../../../../../src/app/module/point.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_konva__ = __webpack_require__("../../../../konva/konva.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_konva___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_konva__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__islandbasicwall__ = __webpack_require__("../../../../../src/app/module/islandbasicwall.ts");



var Island = (function () {
    function Island(position, layer) {
        this.basicWalls = [];
        this.width = 108; // 3'
        this.height = 216; // 6'
        this.points = []; // point1,    point2,    point3,      point4
        // topleft,   topright,  rightbottom, leftbottom
        this.closedPoints = [];
        this.closedLinePoints = [];
        this.islandId = 'island_' + Math.floor(Math.random() * 100000 % 100000);
        this.layer = layer;
        this.position = position;
        this.group = new __WEBPACK_IMPORTED_MODULE_1_konva__["Group"]({
            draggable: true
        });
        var me = this;
        // this.group.on('dragend', function() {
        //    me.redraw();
        // });
        // this.group.on('dragmove', function(){
        //     me.calcMidPoints();
        // });
        this.layer.add(this.group);
        this.calcPoints();
        this.initUI();
    }
    Island.prototype.calcPoints = function () {
        var point1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.position.x, this.position.y);
        var point2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.position.x + this.width, this.position.y);
        var point3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.position.x + this.width, this.position.y + this.height);
        var point4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.position.x, this.position.y + this.height);
        this.points[0] = point1;
        this.points[1] = point2;
        this.points[2] = point3;
        this.points[3] = point4;
    };
    Island.prototype.initUI = function () {
        var me = this;
        var points = [];
        this.points.map(function (point) {
            points.push(point.x);
            points.push(point.y);
        });
        var wall1 = new __WEBPACK_IMPORTED_MODULE_2__islandbasicwall__["a" /* IslandBasicWall */]();
        wall1.startP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.points[0].x, this.points[0].y);
        wall1.endP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.points[1].x, this.points[1].y);
        var wall2 = new __WEBPACK_IMPORTED_MODULE_2__islandbasicwall__["a" /* IslandBasicWall */]();
        wall2.startP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.points[1].x, this.points[1].y);
        wall2.endP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.points[2].x, this.points[2].y);
        var wall3 = new __WEBPACK_IMPORTED_MODULE_2__islandbasicwall__["a" /* IslandBasicWall */]();
        wall3.startP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.points[2].x, this.points[2].y);
        wall3.endP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.points[3].x, this.points[3].y);
        var wall4 = new __WEBPACK_IMPORTED_MODULE_2__islandbasicwall__["a" /* IslandBasicWall */]();
        wall4.startP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.points[3].x, this.points[3].y);
        wall4.endP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.points[0].x, this.points[0].y);
        wall1.parentIsland = this;
        wall1.group = this.group;
        wall1.initUI();
        wall1.eventsResister();
        this.basicWalls.push(wall1);
        wall2.parentIsland = this;
        wall2.group = this.group;
        wall2.initUI();
        wall2.eventsResister();
        this.basicWalls.push(wall2);
        wall3.parentIsland = this;
        wall3.group = this.group;
        wall3.initUI();
        wall3.eventsResister();
        this.basicWalls.push(wall3);
        wall4.parentIsland = this;
        wall4.group = this.group;
        wall4.initUI();
        wall4.eventsResister();
        this.basicWalls.push(wall4);
        wall1.startWall = wall4;
        wall1.endWall = wall2;
        wall2.startWall = wall1;
        wall2.endWall = wall3;
        wall3.startWall = wall2;
        wall3.endWall = wall4;
        wall4.startWall = wall3;
        wall4.endWall = wall1;
        this.calcClosedPoints();
        this.closedLine = new __WEBPACK_IMPORTED_MODULE_1_konva__["Line"]({
            points: me.closedLinePoints,
            closed: true,
            strokeWidth: 0,
            fill: '#aaa',
        });
        this.group.add(this.closedLine);
        this.closedLine.moveToBottom();
        this.layer.add(this.group);
        this.layer.draw();
    };
    Island.prototype.redraw = function () {
        this.position = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](400, 400);
        this.calcPoints();
        var points = [];
        this.points.map(function (point) {
            points.push(point.x);
            points.push(point.y);
        });
        this.group.draw();
        this.layer.draw();
    };
    Island.prototype.removeAll = function () {
        this.group.remove();
    };
    Island.prototype.calcClosedPoints = function () {
        this.points = [];
        this.closedLinePoints = [];
        this.closedPoints = [];
        this.addClosedPoint(this.basicWalls[0]);
    };
    Island.prototype.redrawClosedLine = function () {
        this.calcClosedPoints();
        this.closedLine.points(this.closedLinePoints);
        this.layer.draw();
    };
    Island.prototype.addClosedPoint = function (islandbasicwall) {
        if (this.closedPoints.length >= 2 &&
            this.closedPoints[0].x === islandbasicwall.startP.x && this.closedPoints[0].y === islandbasicwall.startP.y) {
            return false;
        }
        var tempPoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](islandbasicwall.startP.x, islandbasicwall.startP.y);
        this.closedPoints.push(tempPoint);
        this.closedLinePoints.push(islandbasicwall.startP.x);
        this.closedLinePoints.push(islandbasicwall.startP.y);
        this.addClosedPoint(islandbasicwall.endWall);
    };
    return Island;
}());



/***/ }),

/***/ "../../../../../src/app/module/islandbasicwall.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IslandBasicWall; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basicwall__ = __webpack_require__("../../../../../src/app/module/basicwall.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__evented__ = __webpack_require__("../../../../../src/app/module/evented.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__point__ = __webpack_require__("../../../../../src/app/module/point.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var IslandBasicWall = (function (_super) {
    __extends(IslandBasicWall, _super);
    function IslandBasicWall() {
        var _this = _super.call(this) || this;
        _this.islandBasicWallId = 'islandbasicwallId_' + Math.floor(Math.random() * 100000 % 100000);
        return _this;
    }
    IslandBasicWall.prototype.eventsResister = function () {
        var _this = this;
        var me = this;
        this.textLength.on('click', function () {
            me.isSelected = !me.isSelected;
            __WEBPACK_IMPORTED_MODULE_1__evented__["a" /* Evented */].fire('islandwall length change', me);
            me.redraw();
        });
        this.mainLine.on('click', function () {
            me.mainLineClickIslandWallBasic();
            __WEBPACK_IMPORTED_MODULE_1__evented__["a" /* Evented */].fire('islandwall length change', me);
        });
        __WEBPACK_IMPORTED_MODULE_1__evented__["a" /* Evented */].on('islandwallbasic clicked', function (e) {
            var sender = e.args;
            if (sender.wallId !== me.wallId) {
                me.isSelected = false;
                me.showStrecherComponents(false);
                me.redraw();
            }
        });
        __WEBPACK_IMPORTED_MODULE_1__evented__["a" /* Evented */].on('streching', function (e) {
            var sender = e.args;
            if (sender.wallId === me.wallId) {
                _this.parentIsland.redrawClosedLine();
            }
        });
    };
    IslandBasicWall.prototype.mainLineClickIslandWallBasic = function () {
        this.isSelected = !this.isSelected;
        __WEBPACK_IMPORTED_MODULE_1__evented__["a" /* Evented */].fire('islandwallbasic clicked', this);
    };
    IslandBasicWall.prototype.strecherWall = function () {
        if (this.wallLength < 3 * 36 + 6 * 3) {
            alert('you can not strech this wall, because this wall length is very short.');
            return;
        }
        var strecherWall = new IslandBasicWall();
        var endWallForStrech1 = new IslandBasicWall();
        var endWallForStrech2 = new IslandBasicWall();
        var startWallForStrech = new IslandBasicWall();
        strecherWall.endP = new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* Point */](this.endP.x, this.endP.y);
        endWallForStrech1.startP = new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* Point */](this.endP.x, this.endP.y);
        endWallForStrech1.endP = new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* Point */](this.endP.x, this.endP.y);
        endWallForStrech1.group = this.group;
        endWallForStrech1.parentIsland = this.parentIsland;
        endWallForStrech1.initUI();
        endWallForStrech1.eventsResister();
        endWallForStrech2.startP = new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* Point */](this.endP.x, this.endP.y);
        endWallForStrech2.endP = new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* Point */](this.endP.x, this.endP.y);
        endWallForStrech2.group = this.group;
        endWallForStrech2.parentIsland = this.parentIsland;
        endWallForStrech2.initUI();
        endWallForStrech2.eventsResister();
        this.wallLength = this.wallLength - this.STRECHER_DEFAULT_LENGTH;
        this.isSelected = false;
        this.redrawIslandBasicWall();
        strecherWall.startP = new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* Point */](this.endP.x, this.endP.y);
        strecherWall.group = this.group;
        strecherWall.parentIsland = this.parentIsland;
        strecherWall.isStreching = true;
        strecherWall.initUI();
        strecherWall.eventsResister();
        startWallForStrech.startP = new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* Point */](this.endP.x, this.endP.y);
        startWallForStrech.endP = new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* Point */](this.endP.x, this.endP.y);
        startWallForStrech.group = this.group;
        startWallForStrech.parentIsland = this.parentIsland;
        startWallForStrech.initUI();
        startWallForStrech.eventsResister();
        this.parentIsland.basicWalls.push(endWallForStrech1);
        this.parentIsland.basicWalls.push(endWallForStrech2);
        this.parentIsland.basicWalls.push(strecherWall);
        this.parentIsland.basicWalls.push(startWallForStrech);
        endWallForStrech2.endWall = this.endWall;
        this.endWall = startWallForStrech;
        startWallForStrech.startWall = this;
        startWallForStrech.endWall = strecherWall;
        strecherWall.startWall = startWallForStrech;
        strecherWall.endWall = endWallForStrech1;
        endWallForStrech1.startWall = strecherWall;
        endWallForStrech1.endWall = endWallForStrech2;
        endWallForStrech2.startWall = endWallForStrech1;
        // this.parentIsland.redrawClosedLine();
        strecherWall.isSelected = true;
        __WEBPACK_IMPORTED_MODULE_1__evented__["a" /* Evented */].fire('islandwall length change', strecherWall);
        __WEBPACK_IMPORTED_MODULE_1__evented__["a" /* Evented */].fire('islandwallbasic clicked', strecherWall);
        this.parentIsland.redrawClosedLine();
    };
    IslandBasicWall.prototype.redrawIslandBasicWall = function () {
        this.calcEndP();
        this.redraw();
    };
    IslandBasicWall.prototype.calcEndP = function () {
        switch (this.wallDirection) {
            case 'ltr':
                this.endP = new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* Point */](this.startP.x + this.wallLength, this.startP.y);
                break;
            case 'rtl':
                this.endP = new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* Point */](this.startP.x - this.wallLength, this.startP.y);
                break;
            case 'ttd':
                this.endP = new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* Point */](this.startP.x, this.startP.y + this.wallLength);
                break;
            case 'dtt':
                this.endP = new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* Point */](this.startP.x, this.startP.y - this.wallLength);
                break;
            default:
                break;
        }
    };
    return IslandBasicWall;
}(__WEBPACK_IMPORTED_MODULE_0__basicwall__["a" /* BasicWall */]));



/***/ }),

/***/ "../../../../../src/app/module/livingroom.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivingRoom; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_konva__ = __webpack_require__("../../../../konva/konva.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_konva___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_konva__);

var LivingRoom = (function () {
    function LivingRoom() {
        this.layer = new __WEBPACK_IMPORTED_MODULE_0_konva__["Layer"]();
        this.walls = [];
    }
    return LivingRoom;
}());



/***/ }),

/***/ "../../../../../src/app/module/panel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Panel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_konva__ = __webpack_require__("../../../../konva/konva.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_konva___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_konva__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__livingroom__ = __webpack_require__("../../../../../src/app/module/livingroom.ts");


var Panel = (function () {
    function Panel() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.container = 'drawing-board-panel';
        this.buildingType = '';
    }
    Panel.prototype.initPanel = function () {
        this.stage = new __WEBPACK_IMPORTED_MODULE_0_konva__["Stage"]({
            container: this.container,
            width: this.width,
            height: this.height,
            draggable: true
        });
        this.livingRoom = new __WEBPACK_IMPORTED_MODULE_1__livingroom__["a" /* LivingRoom */]();
        // add the layer to the stage
        this.stage.add(this.livingRoom.layer);
    };
    return Panel;
}());



/***/ }),

/***/ "../../../../../src/app/module/point.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Point; });
var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());



/***/ }),

/***/ "../../../../../src/app/module/room.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Room; });
var Room = (function () {
    function Room() {
        this.walls = [];
        this.islands = [];
        this.staircases = [];
        this.roundWall = null;
        this.closets = [];
        this.roomId = 1;
        this.roomType = '';
        this.isSelectedForGrouping = false;
        this.note = '';
        this.roomName = 'living room';
    }
    return Room;
}());



/***/ }),

/***/ "../../../../../src/app/module/roundwall.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoundWall; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__module_evented__ = __webpack_require__("../../../../../src/app/module/evented.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_konva__ = __webpack_require__("../../../../konva/konva.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_konva___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_konva__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__module_point__ = __webpack_require__("../../../../../src/app/module/point.ts");



var RoundWall = (function () {
    function RoundWall(centerPoint, radius, layer) {
        this.radius = 0;
        this.diameterText1 = 0; // foot
        this.diameterText2 = 0; // inch
        this.isShowDiameter = false;
        // constants
        this.ROUNDWALL_CIRCLE_STROKE = '#000';
        this.ROUNDWALL_CIRCLE_STROKEWIDTH = 3;
        this.ROUNDWALL_SIGNLINE_LENGTH = 50;
        this.ROUNDWALL_SIGNLINE_STROKE = '#000';
        this.ROUNDWALL_SIGNLINE_STROKEWIDTH = 1;
        this.ROUNDWALL_ARROWLINE_POINTERLENGTH = 5;
        this.ROUNDWALL_ARROWLINE_POINTERWIDTH = 5;
        this.ROUNDWALL_ARROWLINE_FILL = '#000';
        this.ROUNDWALL_ARROWLINE_STROKE = '#000';
        this.ROUNDWALL_ARROWLINE_STROKEWIDTH = 1;
        this.ROUNDWALL_TEXTLENGTH_WIDTH = 100;
        var me = this;
        this.roundWallId = 'roundwall_' + Math.floor(Math.random() * 100000 % 100000);
        this.centerPoint = centerPoint;
        this.radius = radius;
        this.layer = layer;
        this.group = new __WEBPACK_IMPORTED_MODULE_1_konva__["Group"]();
        this.initUI();
        this.layer.add(this.group);
    }
    RoundWall.prototype.removeAll = function () {
        this.group.remove();
    };
    RoundWall.prototype.initUI = function () {
        var me = this;
        this.calcMidPoint();
        this.circle = new __WEBPACK_IMPORTED_MODULE_1_konva__["Circle"]({
            x: me.centerPoint.x,
            y: me.centerPoint.y,
            radius: me.radius,
            stroke: me.ROUNDWALL_CIRCLE_STROKE,
            strokeWidth: me.ROUNDWALL_CIRCLE_STROKEWIDTH
        });
        var signlineparams = this.calcSignLineParams();
        me.signLine1 = new __WEBPACK_IMPORTED_MODULE_1_konva__["Line"]({
            points: [signlineparams.p1.x, signlineparams.p1.y, signlineparams.p2.x, signlineparams.p2.y],
            stroke: me.ROUNDWALL_SIGNLINE_STROKE,
            strokeWidth: me.ROUNDWALL_SIGNLINE_STROKEWIDTH
        });
        me.signLine2 = new __WEBPACK_IMPORTED_MODULE_1_konva__["Line"]({
            points: [signlineparams.p3.x, signlineparams.p3.y, signlineparams.p4.x, signlineparams.p4.y],
            stroke: me.ROUNDWALL_SIGNLINE_STROKE,
            strokeWidth: me.ROUNDWALL_SIGNLINE_STROKEWIDTH
        });
        var arrowlineparams = this.calcArrowParams();
        me.arrowLine1 = new __WEBPACK_IMPORTED_MODULE_1_konva__["Arrow"]({
            points: [arrowlineparams.p1.x, arrowlineparams.p1.y, arrowlineparams.p2.x, arrowlineparams.p2.y],
            pointerLength: me.ROUNDWALL_ARROWLINE_POINTERLENGTH,
            pointerWidth: me.ROUNDWALL_ARROWLINE_POINTERWIDTH,
            fill: me.ROUNDWALL_ARROWLINE_FILL,
            stroke: me.ROUNDWALL_ARROWLINE_STROKE,
            strokeWidth: me.ROUNDWALL_ARROWLINE_STROKEWIDTH
        });
        me.arrowLine2 = new __WEBPACK_IMPORTED_MODULE_1_konva__["Arrow"]({
            points: [arrowlineparams.p3.x, arrowlineparams.p3.y, arrowlineparams.p4.x, arrowlineparams.p4.y],
            pointerLength: me.ROUNDWALL_ARROWLINE_POINTERLENGTH,
            pointerWidth: me.ROUNDWALL_ARROWLINE_POINTERWIDTH,
            fill: me.ROUNDWALL_ARROWLINE_FILL,
            stroke: me.ROUNDWALL_ARROWLINE_STROKE,
            strokeWidth: me.ROUNDWALL_ARROWLINE_STROKEWIDTH
        });
        this.calcTextLengths();
        this.diameterText = new __WEBPACK_IMPORTED_MODULE_1_konva__["Text"]({
            x: me.midPoint.x - me.ROUNDWALL_TEXTLENGTH_WIDTH / 2,
            y: me.midPoint.y - 10,
            width: me.ROUNDWALL_TEXTLENGTH_WIDTH,
            align: 'center',
            fontSize: 20,
            text: me.diameterText1 + "'" + me.diameterText2 + "\""
        });
        this.diameterText.on('click', function () {
            me.isShowDiameter = !me.isShowDiameter;
            if (me.isShowDiameter) {
                __WEBPACK_IMPORTED_MODULE_0__module_evented__["a" /* Evented */].fire('roundwall diameter change', me);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_0__module_evented__["a" /* Evented */].fire('roundwall diameter change', null);
            }
        });
        this.group.add(this.circle);
        this.group.add(this.signLine1);
        this.group.add(this.signLine2);
        this.group.add(this.arrowLine1);
        this.group.add(this.arrowLine2);
        this.group.add(this.diameterText);
    };
    RoundWall.prototype.calcMidPoint = function () {
        this.midPoint = new __WEBPACK_IMPORTED_MODULE_2__module_point__["a" /* Point */](this.centerPoint.x, this.centerPoint.y + this.radius + this.ROUNDWALL_SIGNLINE_LENGTH / 2);
    };
    RoundWall.prototype.calcSignLineParams = function () {
        var p1 = new __WEBPACK_IMPORTED_MODULE_2__module_point__["a" /* Point */](this.centerPoint.x - this.radius, this.centerPoint.y + this.radius);
        var p2 = new __WEBPACK_IMPORTED_MODULE_2__module_point__["a" /* Point */](p1.x, p1.y + this.ROUNDWALL_SIGNLINE_LENGTH);
        var p3 = new __WEBPACK_IMPORTED_MODULE_2__module_point__["a" /* Point */](this.centerPoint.x + this.radius, this.centerPoint.y + this.radius);
        var p4 = new __WEBPACK_IMPORTED_MODULE_2__module_point__["a" /* Point */](p3.x, p3.y + this.ROUNDWALL_SIGNLINE_LENGTH);
        return {
            p1: p1,
            p2: p2,
            p3: p3,
            p4: p4
        };
    };
    RoundWall.prototype.calcArrowParams = function () {
        var me = this;
        var p1 = new __WEBPACK_IMPORTED_MODULE_2__module_point__["a" /* Point */](me.midPoint.x - me.ROUNDWALL_TEXTLENGTH_WIDTH / 2, me.midPoint.y);
        var p2 = new __WEBPACK_IMPORTED_MODULE_2__module_point__["a" /* Point */](me.midPoint.x - me.radius, me.midPoint.y);
        var p3 = new __WEBPACK_IMPORTED_MODULE_2__module_point__["a" /* Point */](me.midPoint.x + me.ROUNDWALL_TEXTLENGTH_WIDTH / 2, me.midPoint.y);
        var p4 = new __WEBPACK_IMPORTED_MODULE_2__module_point__["a" /* Point */](me.midPoint.x + me.radius, me.midPoint.y);
        return {
            p1: p1,
            p2: p2,
            p3: p3,
            p4: p4
        };
    };
    RoundWall.prototype.calcTextLengths = function () {
        this.diameterText1 = Math.floor(this.radius * 2 / 36);
        this.diameterText2 = Number((this.radius * 2 % 36 / 3).toFixed(0));
        if (this.diameterText2 === 12) {
            this.diameterText1++;
            this.diameterText2 = 0;
        }
    };
    RoundWall.prototype.redrawAll = function () {
        var me = this;
        this.calcMidPoint();
        this.circle.radius(me.radius);
        var signlineparams = this.calcSignLineParams();
        this.signLine1.points([signlineparams.p1.x, signlineparams.p1.y, signlineparams.p2.x, signlineparams.p2.y]);
        this.signLine2.points([signlineparams.p3.x, signlineparams.p3.y, signlineparams.p4.x, signlineparams.p4.y]);
        var arrowlineparams = this.calcArrowParams();
        this.arrowLine1.points([arrowlineparams.p1.x, arrowlineparams.p1.y, arrowlineparams.p2.x, arrowlineparams.p2.y]);
        this.arrowLine2.points([arrowlineparams.p3.x, arrowlineparams.p3.y, arrowlineparams.p4.x, arrowlineparams.p4.y]);
        this.calcTextLengths();
        this.diameterText.x(me.midPoint.x - me.ROUNDWALL_TEXTLENGTH_WIDTH / 2);
        this.diameterText.y(me.midPoint.y - 10);
        this.diameterText.text(me.diameterText1 + "'" + me.diameterText2 + "\"");
        this.group.draw();
        this.layer.draw();
    };
    return RoundWall;
}());



/***/ }),

/***/ "../../../../../src/app/module/socket-io.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SocketFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SOCKET_CONFIG_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SocketIoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_io_service__ = __webpack_require__("../../../../../src/app/module/socket-io.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/** Socket factory */
function SocketFactory(config) {
    return new __WEBPACK_IMPORTED_MODULE_1__socket_io_service__["a" /* WrappedSocket */](config);
}
var SOCKET_CONFIG_TOKEN = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('__SOCKET_IO_CONFIG__');
var SocketIoModule = (function () {
    function SocketIoModule() {
    }
    SocketIoModule_1 = SocketIoModule;
    SocketIoModule.forRoot = function (config) {
        return {
            ngModule: SocketIoModule_1,
            providers: [
                { provide: SOCKET_CONFIG_TOKEN, useValue: config },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__socket_io_service__["a" /* WrappedSocket */],
                    useFactory: SocketFactory,
                    deps: [SOCKET_CONFIG_TOKEN]
                }
            ]
        };
    };
    SocketIoModule = SocketIoModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({})
    ], SocketIoModule);
    return SocketIoModule;
    var SocketIoModule_1;
}());



/***/ }),

/***/ "../../../../../src/app/module/socket-io.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WrappedSocket; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/share.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__socket_io_module__ = __webpack_require__("../../../../../src/app/module/socket-io.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var WrappedSocket = (function () {
    function WrappedSocket(config) {
        this.subscribersCounter = 0;
        var url = config.url || '';
        var options = config.options || {};
        this.ioSocket = __WEBPACK_IMPORTED_MODULE_3_socket_io_client__(url, options);
    }
    WrappedSocket.prototype.on = function (eventName, callback) {
        this.ioSocket.on(eventName, callback);
    };
    WrappedSocket.prototype.once = function (eventName, callback) {
        this.ioSocket.once(eventName, callback);
    };
    WrappedSocket.prototype.connect = function () {
        return this.ioSocket.connect();
    };
    WrappedSocket.prototype.disconnect = function (close) {
        return this.ioSocket.disconnect.apply(this.ioSocket, arguments);
    };
    WrappedSocket.prototype.emit = function (eventName, data, callback) {
        return this.ioSocket.emit.apply(this.ioSocket, arguments);
    };
    WrappedSocket.prototype.removeListener = function (eventName, callback) {
        return this.ioSocket.removeListener.apply(this.ioSocket, arguments);
    };
    WrappedSocket.prototype.removeAllListeners = function (eventName) {
        return this.ioSocket.removeAllListeners.apply(this.ioSocket, arguments);
    };
    /** create an Observable from an event */
    WrappedSocket.prototype.fromEvent = function (eventName) {
        var _this = this;
        this.subscribersCounter++;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            _this.ioSocket.on(eventName, function (data) {
                observer.next(data);
            });
            return function () {
                if (_this.subscribersCounter === 1) {
                    _this.ioSocket.removeListener(eventName);
                }
                _this.subscribersCounter--;
            };
        }).share();
    };
    /* Creates a Promise for a one-time event */
    WrappedSocket.prototype.fromEventOnce = function (eventName) {
        var _this = this;
        return new Promise(function (resolve) { return _this.once(eventName, resolve); });
    };
    WrappedSocket = __decorate([
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__socket_io_module__["a" /* SOCKET_CONFIG_TOKEN */])),
        __metadata("design:paramtypes", [Object])
    ], WrappedSocket);
    return WrappedSocket;
}());



/***/ }),

/***/ "../../../../../src/app/module/staircase.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Staircase; });
var Staircase = (function () {
    function Staircase() {
        this.treadDepth1 = 1;
        this.treadDepth2 = 0;
        this.riserHeight1 = 0;
        this.riserHeight2 = 7;
        this.stepWidth1 = 3;
        this.stepWidth2 = 0;
        this.staircaseId = '';
        this.stairTypes = [
            'Regular',
            'Single Capped',
            'Double Capped',
            'UPH',
            'Birdcage',
            'Wrapped',
            'Pie',
            'Other'
        ];
        this.staircaseId = 'staircase' + Math.floor(Math.random() * 100000 % 100000);
        this.treadDepth1 = 1;
        this.treadDepth2 = 0;
        this.riserHeight1 = 0;
        this.riserHeight2 = 7;
        this.stepWidth1 = 3;
        this.stepWidth2 = 0;
    }
    return Staircase;
}());



/***/ }),

/***/ "../../../../../src/app/module/stepdown.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StepDown; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__point__ = __webpack_require__("../../../../../src/app/module/point.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_konva__ = __webpack_require__("../../../../konva/konva.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_konva___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_konva__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__evented__ = __webpack_require__("../../../../../src/app/module/evented.ts");



var StepDown = (function () {
    function StepDown(parentWall, layer) {
        this.midPoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](0, 0);
        this.stepDownStatusText = 'O.N.';
        this.defaultLength = 3 * 3 * 12;
        this.stepdownLength = 0;
        this.lengthText1 = 3;
        this.lengthText2 = 0;
        this.isEditing = false;
        this.betweenLength = 0;
        this.betweenLength1 = 0;
        this.betweenLength2 = 0;
        this.isShowBetweenLength = false;
        this.note = '';
        // stepdown contstants
        this.STEPDOWN_FILL = '#eee';
        this.STEPDOWN_STROKE = '#eee';
        this.STEPDOWN_HEIGHT = 20;
        this.STEPDOWN_SIGN_LINE_LENGTH = 20;
        this.STEPDOWN_SIGN_LINE_STROKE = '#000';
        this.STEPDOWN_SIGN_LINE_STROKEWIDTH = 1;
        this.STEPDOWN_LENGTH_TEXT_FONTSIZE = 15;
        this.STEPDOWN_LENGTH_TEXT_FONTFAMILY = 'Calibri';
        this.STEPDOWN_LENGTH_TEXT_FILL = '#000';
        this.STEPDOWN_TEXT_LENGTH = 50;
        this.STEPDOWN_TEXT_HEIGHT = 0;
        this.STEPDOWN_ARROW_POINTER_LENGTH = 5;
        this.STEPDOWN_ARROW_POINTER_WIDTH = 5;
        this.STEPDOWN_ARROW_FILL = '#000';
        this.STEPDOWN_ARROW_STROKE = '#000';
        this.STEPDOWN_ARROW_STROKEWIDTH = 1;
        this.STEPDOWN_TYPE_TEXT_FONTSIZE = 24;
        this.STEPDOWN_TYPE_TEXT_FONTFAMILY = 'Calibri';
        this.STEPDOWN_TYPE_TEXT_FILL = '#888';
        this.STEPDOWN_TYPE_TEXT_WIDTH = 500;
        this.STEPDOWN_TYPE_TEXT_HEIGHT = 50;
        this.stepdownId = 'door_' + Math.floor(Math.random() * 100000 % 100000);
        this.parentWall = parentWall;
        this.wallDirection = this.parentWall.wallDirection;
        this.clickedPoint = this.parentWall.clickedPoint;
        this.stepdownLength = this.defaultLength;
        this.layer = layer;
        this.definePoints();
        this.initUI();
        var me = this;
        __WEBPACK_IMPORTED_MODULE_2__evented__["a" /* Evented */].on('buttonrectclicked', function (e) {
            me.buttonRectClicked();
        });
        __WEBPACK_IMPORTED_MODULE_2__evented__["a" /* Evented */].on('buttonhouseclicked', function (e) {
            me.buttonHouseClicked();
        });
        __WEBPACK_IMPORTED_MODULE_2__evented__["a" /* Evented */].on('buttonroundclicked', function (e) {
            me.buttonRoundClicked();
        });
    }
    StepDown.prototype.initUI = function () {
        var me = this;
        var params = this.calcRectParams();
        this.stepDownRect = new __WEBPACK_IMPORTED_MODULE_1_konva__["Rect"]({
            x: params.x,
            y: params.y,
            width: params.width,
            height: params.height,
            fill: this.STEPDOWN_FILL,
            stroke: this.STEPDOWN_STROKE,
            draggable: true,
            dragBoundFunc: function (pos) {
                me.showBetweenComponent(true);
                return me.calcPos(pos);
            }
        });
        this.stepDownRect.on('click', function () {
            me.isEditing = !me.isEditing;
            // me.doorButtonService.dblClickDoor(me);
            __WEBPACK_IMPORTED_MODULE_2__evented__["a" /* Evented */].fire('stepdown-length-change', me);
            me.showBetweenComponent(me.isEditing);
        });
        this.stepDownRect.on('dragend', function () {
            me.showBetweenComponent(false);
        });
        var signLineParams = this.calcSignLineParams();
        this.firstSignLine = new __WEBPACK_IMPORTED_MODULE_1_konva__["Line"]({
            points: [signLineParams.p1.x, signLineParams.p1.y, signLineParams.p2.x, signLineParams.p2.y],
            stroke: this.STEPDOWN_SIGN_LINE_STROKE,
            strokeWidth: this.STEPDOWN_SIGN_LINE_STROKEWIDTH
        });
        this.secondSignLine = new __WEBPACK_IMPORTED_MODULE_1_konva__["Line"]({
            points: [signLineParams.p3.x, signLineParams.p3.y, signLineParams.p4.x, signLineParams.p4.y],
            stroke: this.STEPDOWN_SIGN_LINE_STROKE,
            strokeWidth: this.STEPDOWN_SIGN_LINE_STROKEWIDTH
        });
        var arrowParams = this.calcArrowParams();
        this.firstArrow = new __WEBPACK_IMPORTED_MODULE_1_konva__["Arrow"]({
            points: [arrowParams.p1.x, arrowParams.p1.y, arrowParams.p2.x, arrowParams.p2.y],
            pointerLength: this.STEPDOWN_ARROW_POINTER_LENGTH,
            pointerWidth: this.STEPDOWN_ARROW_POINTER_WIDTH,
            fill: this.STEPDOWN_ARROW_FILL,
            stroke: this.STEPDOWN_ARROW_STROKE,
            strokeWidth: this.STEPDOWN_ARROW_STROKEWIDTH
        });
        this.secondArrow = new __WEBPACK_IMPORTED_MODULE_1_konva__["Arrow"]({
            points: [arrowParams.p3.x, arrowParams.p3.y, arrowParams.p4.x, arrowParams.p4.y],
            pointerLength: this.STEPDOWN_ARROW_POINTER_LENGTH,
            pointerWidth: this.STEPDOWN_ARROW_POINTER_WIDTH,
            fill: this.STEPDOWN_ARROW_FILL,
            stroke: this.STEPDOWN_ARROW_STROKE,
            strokeWidth: this.STEPDOWN_ARROW_STROKEWIDTH
        });
        var midPoint = this.calcMidPoint();
        var lengthTexts = this.calcLengthTexts();
        this.lengthText = new __WEBPACK_IMPORTED_MODULE_1_konva__["Text"]({
            x: midPoint.x,
            y: midPoint.y,
            text: this.lengthText1 + "'" + this.lengthText2 + "\"",
            fontSize: this.STEPDOWN_LENGTH_TEXT_FONTSIZE,
            fontFamily: this.STEPDOWN_LENGTH_TEXT_FONTFAMILY,
            fill: this.STEPDOWN_LENGTH_TEXT_FILL,
            align: 'center',
            width: this.STEPDOWN_TEXT_LENGTH,
            height: this.STEPDOWN_TEXT_HEIGHT
        });
        this.stepDownText = new __WEBPACK_IMPORTED_MODULE_1_konva__["Text"]({
            x: midPoint.x,
            y: midPoint.y,
            text: this.stepDownStatusText.toString(),
            fontSize: this.STEPDOWN_TYPE_TEXT_FONTSIZE,
            fontFamily: this.STEPDOWN_TYPE_TEXT_FONTFAMILY,
            fill: this.STEPDOWN_TYPE_TEXT_FILL,
            align: 'center',
            width: this.STEPDOWN_TYPE_TEXT_WIDTH,
            height: this.STEPDOWN_TYPE_TEXT_HEIGHT,
        });
        this.revisionLengthTextAndDoorTypeText();
        var betweenParams = this.calcBetweenSignLineParams();
        this.betweenArrow1 = new __WEBPACK_IMPORTED_MODULE_1_konva__["Arrow"]({
            points: [betweenParams.firstArrowLineP1.x, betweenParams.firstArrowLineP1.y,
                betweenParams.firstArrowLineP2.x, betweenParams.firstArrowLineP2.y],
            pointerLength: this.STEPDOWN_ARROW_POINTER_LENGTH,
            pointerWidth: this.STEPDOWN_ARROW_POINTER_WIDTH,
            fill: this.STEPDOWN_ARROW_FILL,
            stroke: this.STEPDOWN_ARROW_STROKE,
            strokeWidth: this.STEPDOWN_ARROW_STROKEWIDTH
        });
        this.betweenArrow2 = new __WEBPACK_IMPORTED_MODULE_1_konva__["Arrow"]({
            points: [betweenParams.secondArrowLineP1.x, betweenParams.secondArrowLineP1.y,
                betweenParams.secondArrowLineP2.x, betweenParams.secondArrowLineP2.y],
            pointerLength: this.STEPDOWN_ARROW_POINTER_LENGTH,
            pointerWidth: this.STEPDOWN_ARROW_POINTER_WIDTH,
            fill: this.STEPDOWN_ARROW_FILL,
            stroke: this.STEPDOWN_ARROW_STROKE,
            strokeWidth: this.STEPDOWN_ARROW_STROKEWIDTH
        });
        this.betweenLengthText = new __WEBPACK_IMPORTED_MODULE_1_konva__["Text"]({
            x: betweenParams.midPoint.x,
            y: betweenParams.midPoint.y,
            text: this.betweenLength1 + "'" + this.betweenLength2 + "\"",
            fontSize: 20,
            fontFamily: this.STEPDOWN_LENGTH_TEXT_FONTFAMILY,
            fill: this.STEPDOWN_LENGTH_TEXT_FILL,
            align: 'center',
        });
        this.betweenLengthText.on('click', function () {
            me.isShowBetweenLength = !me.isShowBetweenLength;
            __WEBPACK_IMPORTED_MODULE_2__evented__["a" /* Evented */].fire('stepdown-between-length-change', me);
        });
        this.revisionBetweenLengthText();
        this.betweenSignLine = new __WEBPACK_IMPORTED_MODULE_1_konva__["Line"]({
            points: [this.parentWall.endP.x, this.parentWall.endP.y,
                betweenParams.endPSignLinePoint.x, betweenParams.endPSignLinePoint.y],
            stroke: this.STEPDOWN_SIGN_LINE_STROKE,
            strokeWidth: this.STEPDOWN_SIGN_LINE_STROKEWIDTH
        });
        this.layer.add(this.stepDownRect);
        this.layer.add(this.firstSignLine);
        this.layer.add(this.secondSignLine);
        this.layer.add(this.firstArrow);
        this.layer.add(this.secondArrow);
        this.layer.add(this.lengthText);
        this.layer.add(this.stepDownText);
        this.layer.add(this.betweenArrow1);
        this.layer.add(this.betweenArrow2);
        this.layer.add(this.betweenLengthText);
        this.layer.add(this.betweenSignLine);
        this.showBetweenComponent(false);
        this.layer.draw();
    };
    StepDown.prototype.definePoints = function () {
        switch (this.wallDirection) {
            case 'ltr':
                this.startP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.clickedPoint.x - this.stepdownLength / 2, this.clickedPoint.y);
                this.endP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.clickedPoint.x + this.stepdownLength / 2, this.clickedPoint.y);
                break;
            case 'rtl':
                this.endP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.clickedPoint.x - this.stepdownLength / 2, this.clickedPoint.y);
                this.startP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.clickedPoint.x + this.stepdownLength / 2, this.clickedPoint.y);
                break;
            case 'ttd':
                this.startP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.clickedPoint.x, this.clickedPoint.y - this.stepdownLength / 2);
                this.endP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.clickedPoint.x, this.clickedPoint.y + this.stepdownLength / 2);
                break;
            case 'dtt':
                this.endP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.clickedPoint.x, this.clickedPoint.y - this.stepdownLength / 2);
                this.startP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.clickedPoint.x, this.clickedPoint.y + this.stepdownLength / 2);
                break;
            default:
                break;
        }
        this.oldStartP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.parentWall.startP.x, this.parentWall.startP.y);
        this.oldEndP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.parentWall.endP.x, this.parentWall.endP.y);
    };
    StepDown.prototype.calcRectParams = function () {
        var x, y, width, height;
        switch (this.wallDirection) {
            case 'ltr':
                x = this.startP.x;
                y = this.startP.y - this.STEPDOWN_HEIGHT / 2;
                width = this.endP.x - this.startP.x;
                height = this.STEPDOWN_HEIGHT;
                break;
            case 'rtl':
                x = this.endP.x;
                y = this.endP.y - this.STEPDOWN_HEIGHT / 2;
                width = this.startP.x - this.endP.x;
                height = this.STEPDOWN_HEIGHT;
                break;
            case 'ttd':
                x = this.startP.x - this.STEPDOWN_HEIGHT / 2;
                y = this.startP.y;
                width = this.STEPDOWN_HEIGHT;
                height = this.endP.y - this.startP.y;
                break;
            case 'dtt':
                x = this.endP.x - this.STEPDOWN_HEIGHT / 2;
                y = this.endP.y;
                width = this.STEPDOWN_HEIGHT;
                height = this.startP.y - this.endP.y;
                break;
            default:
                break;
        }
        return {
            x: x,
            y: y,
            width: width,
            height: height,
        };
    };
    StepDown.prototype.calcSignLineParams = function () {
        var p1, p2, p3, p4;
        var paramsLine = this.calcLineParams();
        switch (this.wallDirection) {
            case 'ltr':
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p2.x, paramsLine.p2.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](p1.x, p1.y + this.STEPDOWN_SIGN_LINE_LENGTH);
                p3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p4.x, paramsLine.p4.y);
                p4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](p3.x, p3.y + this.STEPDOWN_SIGN_LINE_LENGTH);
                break;
            case 'rtl':
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p1.x, paramsLine.p1.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](p1.x, p1.y - this.STEPDOWN_SIGN_LINE_LENGTH);
                p3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p3.x, paramsLine.p3.y);
                p4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](p3.x, p3.y - this.STEPDOWN_SIGN_LINE_LENGTH);
                break;
            case 'ttd':
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p1.x, paramsLine.p1.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](p1.x - this.STEPDOWN_SIGN_LINE_LENGTH, p1.y);
                p3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p3.x, paramsLine.p3.y);
                p4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](p3.x - this.STEPDOWN_SIGN_LINE_LENGTH, p3.y);
                break;
            case 'dtt':
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p2.x, paramsLine.p2.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](p1.x + this.STEPDOWN_SIGN_LINE_LENGTH, p1.y);
                p3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p4.x, paramsLine.p4.y);
                p4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](p3.x + this.STEPDOWN_SIGN_LINE_LENGTH, p3.y);
                break;
            default:
                break;
        }
        return {
            p1: p1,
            p2: p2,
            p3: p3,
            p4: p4
        };
    };
    StepDown.prototype.calcLineParams = function () {
        var p1, p2, p3, p4;
        switch (this.wallDirection) {
            case 'ltr':
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.startP.x, this.startP.y - this.STEPDOWN_HEIGHT / 2);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.startP.x, this.startP.y + this.STEPDOWN_HEIGHT / 2);
                p3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.endP.x, this.endP.y - this.STEPDOWN_HEIGHT / 2);
                p4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.endP.x, this.endP.y + this.STEPDOWN_HEIGHT / 2);
                break;
            case 'rtl':
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.endP.x, this.endP.y - this.STEPDOWN_HEIGHT / 2);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.endP.x, this.endP.y + this.STEPDOWN_HEIGHT / 2);
                p3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.startP.x, this.startP.y - this.STEPDOWN_HEIGHT / 2);
                p4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.startP.x, this.startP.y + this.STEPDOWN_HEIGHT / 2);
                break;
            case 'ttd':
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.startP.x - this.STEPDOWN_HEIGHT / 2, this.startP.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.startP.x + this.STEPDOWN_HEIGHT / 2, this.startP.y);
                p3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.endP.x - this.STEPDOWN_HEIGHT / 2, this.endP.y);
                p4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.endP.x + this.STEPDOWN_HEIGHT / 2, this.endP.y);
                break;
            case 'dtt':
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.endP.x - this.STEPDOWN_HEIGHT / 2, this.endP.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.endP.x + this.STEPDOWN_HEIGHT / 2, this.endP.y);
                p3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.startP.x - this.STEPDOWN_HEIGHT / 2, this.startP.y);
                p4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](this.startP.x + this.STEPDOWN_HEIGHT / 2, this.startP.y);
                break;
            default:
                break;
        }
        return {
            p1: p1,
            p2: p2,
            p3: p3,
            p4: p4
        };
    };
    StepDown.prototype.calcArrowParams = function () {
        var paramsLine = this.calcLineParams();
        var midPoint = this.calcMidPoint();
        var p1, p2, p3, p4;
        switch (this.wallDirection) {
            case 'ltr':
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](midPoint.x - this.STEPDOWN_TEXT_LENGTH / 2, midPoint.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p1.x, midPoint.y);
                p3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](midPoint.x + this.STEPDOWN_TEXT_LENGTH / 2, midPoint.y);
                p4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p3.x, midPoint.y);
                break;
            case 'rtl':
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](midPoint.x - this.STEPDOWN_TEXT_LENGTH / 2, midPoint.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p2.x, midPoint.y);
                p3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](midPoint.x + this.STEPDOWN_TEXT_LENGTH / 2, midPoint.y);
                p4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p4.x, midPoint.y);
                break;
            case 'ttd':
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](midPoint.x, midPoint.y - this.STEPDOWN_TEXT_LENGTH / 2);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](midPoint.x, paramsLine.p2.y);
                p3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](midPoint.x, midPoint.y + this.STEPDOWN_TEXT_LENGTH / 2);
                p4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](midPoint.x, paramsLine.p4.y);
                break;
            case 'dtt':
                p1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](midPoint.x, midPoint.y - this.STEPDOWN_TEXT_LENGTH / 2);
                p2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](midPoint.x, paramsLine.p1.y);
                p3 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](midPoint.x, midPoint.y + this.STEPDOWN_TEXT_LENGTH / 2);
                p4 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](midPoint.x, paramsLine.p3.y);
                break;
            default:
                break;
        }
        return {
            p1: p1,
            p2: p2,
            p3: p3,
            p4: p4
        };
    };
    StepDown.prototype.calcMidPoint = function () {
        var paramsLine = this.calcLineParams();
        var midPoint;
        switch (this.wallDirection) {
            case 'ltr':
                midPoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */]((paramsLine.p2.x + paramsLine.p4.x) / 2, paramsLine.p2.y + this.STEPDOWN_SIGN_LINE_LENGTH / 2);
                break;
            case 'rtl':
                midPoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */]((paramsLine.p1.x + paramsLine.p3.x) / 2, paramsLine.p1.y - this.STEPDOWN_SIGN_LINE_LENGTH / 2);
                break;
            case 'ttd':
                midPoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p1.x - this.STEPDOWN_SIGN_LINE_LENGTH / 2, (paramsLine.p1.y + paramsLine.p3.y) / 2);
                break;
            case 'dtt':
                midPoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](paramsLine.p2.x + this.STEPDOWN_SIGN_LINE_LENGTH / 2, (paramsLine.p1.y + paramsLine.p3.y) / 2);
                break;
            default:
                break;
        }
        this.midPoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](midPoint.x, midPoint.y);
        return midPoint;
    };
    StepDown.prototype.calcLengthTexts = function () {
        this.stepdownLength = Math.sqrt((this.startP.x - this.endP.x) * (this.startP.x - this.endP.x)
            + (this.startP.y - this.endP.y) * (this.startP.y - this.endP.y));
        this.lengthText1 = (Math.floor(this.stepdownLength / 36));
        this.lengthText2 = (this.stepdownLength % 36) / 3;
    };
    StepDown.prototype.revisionLengthTextAndDoorTypeText = function () {
        var midPoint = this.calcMidPoint();
        switch (this.wallDirection) {
            case 'ltr':
                this.lengthText.x(midPoint.x - this.STEPDOWN_TEXT_LENGTH / 2);
                this.lengthText.y(midPoint.y - this.STEPDOWN_SIGN_LINE_LENGTH / 2);
                this.stepDownText.x(midPoint.x - this.STEPDOWN_TYPE_TEXT_WIDTH / 2);
                this.stepDownText.y(midPoint.y + this.STEPDOWN_SIGN_LINE_LENGTH);
                break;
            case 'rtl':
                this.lengthText.x(midPoint.x - this.STEPDOWN_TEXT_LENGTH / 2);
                this.lengthText.y(midPoint.y - this.STEPDOWN_SIGN_LINE_LENGTH / 2);
                this.stepDownText.x(midPoint.x - this.STEPDOWN_TYPE_TEXT_WIDTH / 2);
                this.stepDownText.y(midPoint.y - this.STEPDOWN_SIGN_LINE_LENGTH * 2);
                break;
            case 'ttd':
                this.lengthText.rotation(-90);
                this.stepDownText.rotation(-90);
                this.lengthText.x(midPoint.x - this.STEPDOWN_SIGN_LINE_LENGTH / 2);
                this.lengthText.y(midPoint.y + this.STEPDOWN_TEXT_LENGTH / 2);
                this.stepDownText.x(midPoint.x - this.STEPDOWN_SIGN_LINE_LENGTH * 2);
                this.stepDownText.y(midPoint.y + this.STEPDOWN_TYPE_TEXT_WIDTH / 2);
                break;
            case 'dtt':
                this.lengthText.rotation(90);
                this.stepDownText.rotation(90);
                this.lengthText.x(midPoint.x + this.STEPDOWN_SIGN_LINE_LENGTH / 2);
                this.lengthText.y(midPoint.y - this.STEPDOWN_TEXT_LENGTH / 2);
                this.stepDownText.x(midPoint.x + this.STEPDOWN_SIGN_LINE_LENGTH * 2);
                this.stepDownText.y(midPoint.y - this.STEPDOWN_TYPE_TEXT_WIDTH / 2);
                break;
            default:
                break;
        }
    };
    StepDown.prototype.revisionBetweenLengthText = function () {
        var midPoint = this.calcBetweenSignLineParams().midPoint;
        switch (this.wallDirection) {
            case 'ltr':
                this.betweenLengthText.x(midPoint.x - this.STEPDOWN_TEXT_LENGTH / 2);
                this.betweenLengthText.y(midPoint.y - this.STEPDOWN_SIGN_LINE_LENGTH / 2);
                break;
            case 'rtl':
                this.betweenLengthText.x(midPoint.x - this.STEPDOWN_TEXT_LENGTH / 2);
                this.betweenLengthText.y(midPoint.y - this.STEPDOWN_SIGN_LINE_LENGTH / 2);
                break;
            case 'ttd':
                this.betweenLengthText.rotation(-90);
                this.betweenLengthText.x(midPoint.x - this.STEPDOWN_SIGN_LINE_LENGTH / 2);
                this.betweenLengthText.y(midPoint.y + this.STEPDOWN_TEXT_LENGTH / 2);
                break;
            case 'dtt':
                this.betweenLengthText.rotation(90);
                this.betweenLengthText.x(midPoint.x + this.STEPDOWN_SIGN_LINE_LENGTH / 2);
                this.betweenLengthText.y(midPoint.y - this.STEPDOWN_TEXT_LENGTH / 2);
                break;
            default:
                break;
        }
    };
    StepDown.prototype.calcBetweenSignLineParams = function () {
        var signLineParams = this.calcSignLineParams();
        var midPoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](0, 0);
        var endPSignLinePoint = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](0, 0);
        var firstArrowLineP1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](0, 0);
        var firstArrowLineP2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](0, 0);
        var secondArrowLineP1 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](0, 0);
        var secondArrowLineP2 = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](0, 0);
        switch (this.wallDirection) {
            case 'ltr':
                midPoint.x = (signLineParams.p4.x + this.parentWall.endP.x) / 2;
                midPoint.y = signLineParams.p3.y + this.STEPDOWN_SIGN_LINE_LENGTH / 2;
                firstArrowLineP1.x = midPoint.x - this.STEPDOWN_TEXT_LENGTH / 2;
                firstArrowLineP1.y = midPoint.y;
                firstArrowLineP2.x = signLineParams.p4.x;
                firstArrowLineP2.y = midPoint.y;
                secondArrowLineP1.x = midPoint.x + this.STEPDOWN_TEXT_LENGTH / 2;
                secondArrowLineP1.y = midPoint.y;
                secondArrowLineP2.x = this.parentWall.endP.x;
                secondArrowLineP2.y = midPoint.y;
                endPSignLinePoint.x = this.parentWall.endP.x;
                endPSignLinePoint.y = this.parentWall.endP.y + this.STEPDOWN_SIGN_LINE_LENGTH + this.STEPDOWN_HEIGHT / 2;
                this.betweenLength = this.parentWall.endP.x - this.clickedPoint.x - this.stepdownLength / 2;
                break;
            case 'rtl':
                midPoint.x = (signLineParams.p2.x + this.parentWall.endP.x) / 2;
                midPoint.y = signLineParams.p2.y + this.STEPDOWN_SIGN_LINE_LENGTH / 2;
                firstArrowLineP1.x = midPoint.x + this.STEPDOWN_TEXT_LENGTH / 2;
                firstArrowLineP1.y = midPoint.y;
                firstArrowLineP2.x = signLineParams.p2.x;
                firstArrowLineP2.y = midPoint.y;
                secondArrowLineP1.x = midPoint.x - this.STEPDOWN_TEXT_LENGTH / 2;
                secondArrowLineP1.y = midPoint.y;
                secondArrowLineP2.x = this.parentWall.endP.x;
                secondArrowLineP2.y = midPoint.y;
                endPSignLinePoint.x = this.parentWall.endP.x;
                endPSignLinePoint.y = this.parentWall.endP.y - this.STEPDOWN_SIGN_LINE_LENGTH - this.STEPDOWN_HEIGHT / 2;
                this.betweenLength = this.clickedPoint.x - this.parentWall.endP.x - this.stepdownLength / 2;
                break;
            case 'ttd':
                midPoint.x = signLineParams.p3.x - this.STEPDOWN_SIGN_LINE_LENGTH / 2;
                midPoint.y = (signLineParams.p3.y + this.parentWall.endP.y) / 2;
                firstArrowLineP1.x = midPoint.x;
                firstArrowLineP1.y = midPoint.y - this.STEPDOWN_TEXT_LENGTH / 2;
                firstArrowLineP2.x = midPoint.x;
                firstArrowLineP2.y = signLineParams.p3.y;
                secondArrowLineP1.x = midPoint.x;
                secondArrowLineP1.y = midPoint.y + this.STEPDOWN_TEXT_LENGTH / 2;
                secondArrowLineP2.x = midPoint.x;
                secondArrowLineP2.y = this.parentWall.endP.y;
                endPSignLinePoint.x = this.parentWall.endP.x - this.STEPDOWN_SIGN_LINE_LENGTH - this.STEPDOWN_HEIGHT / 2;
                endPSignLinePoint.y = this.parentWall.endP.y;
                this.betweenLength = this.parentWall.endP.y - this.clickedPoint.y - this.stepdownLength / 2;
                break;
            case 'dtt':
                midPoint.x = signLineParams.p2.x - this.STEPDOWN_SIGN_LINE_LENGTH / 2;
                midPoint.y = (signLineParams.p2.y + this.parentWall.endP.y) / 2;
                firstArrowLineP1.x = midPoint.x;
                firstArrowLineP1.y = midPoint.y + this.STEPDOWN_TEXT_LENGTH / 2;
                firstArrowLineP2.x = midPoint.x;
                firstArrowLineP2.y = signLineParams.p2.y;
                secondArrowLineP1.x = midPoint.x;
                secondArrowLineP1.y = midPoint.y - this.STEPDOWN_TEXT_LENGTH / 2;
                secondArrowLineP2.x = midPoint.x;
                secondArrowLineP2.y = this.parentWall.endP.y;
                endPSignLinePoint.x = this.parentWall.endP.x + this.STEPDOWN_SIGN_LINE_LENGTH + this.STEPDOWN_HEIGHT / 2;
                endPSignLinePoint.y = this.parentWall.endP.y;
                this.betweenLength = this.clickedPoint.y - this.parentWall.endP.y - this.stepdownLength / 2;
                break;
            default:
                break;
        }
        this.betweenLength1 = Math.floor(this.betweenLength / 36);
        this.betweenLength2 = Number((this.betweenLength % 36 / 3).toFixed(0));
        this.betweenMidPoint = midPoint;
        return {
            midPoint: midPoint,
            firstArrowLineP1: firstArrowLineP1,
            firstArrowLineP2: firstArrowLineP2,
            secondArrowLineP1: secondArrowLineP1,
            secondArrowLineP2: secondArrowLineP2,
            endPSignLinePoint: endPSignLinePoint
        };
    };
    StepDown.prototype.calcPos = function (pos) {
        var stageABS = this.stepDownRect.getStage().getAbsolutePosition();
        var returnPos = { x: 0, y: 0 };
        var params = this.calcRectParams();
        var rectPos = this.stepDownRect.getPosition();
        switch (this.wallDirection) {
            case 'ltr':
                var x = pos.x;
                if (pos.x < this.parentWall.startP.x) {
                    x = this.parentWall.startP.x;
                }
                if (pos.x + this.stepdownLength > this.parentWall.endP.x) {
                    x = this.parentWall.endP.x - this.stepdownLength;
                }
                returnPos.x = x;
                returnPos.y = params.y;
                this.clickedPoint.x = rectPos.x + this.stepdownLength / 2;
                break;
            case 'rtl':
                var x = pos.x;
                if (pos.x < this.parentWall.endP.x) {
                    x = this.parentWall.endP.x;
                }
                if (pos.x + this.stepdownLength > this.parentWall.startP.x) {
                    x = this.parentWall.startP.x - this.stepdownLength;
                }
                returnPos.x = x;
                returnPos.y = params.y;
                this.clickedPoint.x = rectPos.x + this.stepdownLength / 2;
                break;
            case 'ttd':
                var y = pos.y;
                if (pos.y < this.parentWall.startP.y) {
                    y = this.parentWall.startP.y;
                }
                if (pos.y + this.stepdownLength > this.parentWall.endP.y) {
                    y = this.parentWall.endP.y - this.stepdownLength;
                }
                returnPos.x = params.x;
                returnPos.y = y;
                this.clickedPoint.y = rectPos.y + this.stepdownLength / 2;
                break;
            case 'dtt':
                var y = pos.y;
                if (pos.y < this.parentWall.endP.y) {
                    y = this.parentWall.endP.y;
                }
                if (pos.y + this.stepdownLength > this.parentWall.startP.y) {
                    y = this.parentWall.startP.y - this.stepdownLength;
                }
                returnPos.x = params.x;
                returnPos.y = y;
                this.clickedPoint.y = rectPos.y + this.stepdownLength / 2;
                break;
            default:
                break;
        }
        this.redrawAll();
        returnPos.x += stageABS.x;
        returnPos.y += stageABS.y;
        return returnPos;
    };
    StepDown.prototype.redrawAll = function () {
        this.redefinePoints();
        var params = this.calcRectParams();
        this.stepDownRect.x(params.x);
        this.stepDownRect.y(params.y);
        this.stepDownRect.width(params.width);
        this.stepDownRect.height(params.height);
        var lineParams = this.calcLineParams();
        // this.firstLine.points([lineParams.p1.x, lineParams.p1.y, lineParams.p2.x, lineParams.p2.y]);
        // this.secondLine.points([lineParams.p3.x, lineParams.p3.y, lineParams.p4.x, lineParams.p4.y]);
        var signLineParams = this.calcSignLineParams();
        this.firstSignLine.points([signLineParams.p1.x, signLineParams.p1.y, signLineParams.p2.x, signLineParams.p2.y]);
        this.secondSignLine.points([signLineParams.p3.x, signLineParams.p3.y, signLineParams.p4.x, signLineParams.p4.y]);
        var arrowParams = this.calcArrowParams();
        this.firstArrow.points([arrowParams.p1.x, arrowParams.p1.y, arrowParams.p2.x, arrowParams.p2.y]);
        this.secondArrow.points([arrowParams.p3.x, arrowParams.p3.y, arrowParams.p4.x, arrowParams.p4.y]);
        this.calcLengthTexts();
        this.lengthText.text(this.lengthText1 + "'" + this.lengthText2 + "\"");
        this.revisionLengthTextAndDoorTypeText();
        var betweenParams = this.calcBetweenSignLineParams();
        this.betweenArrow1.points([betweenParams.firstArrowLineP1.x, betweenParams.firstArrowLineP1.y,
            betweenParams.firstArrowLineP2.x, betweenParams.firstArrowLineP2.y]);
        this.betweenArrow2.points([betweenParams.secondArrowLineP1.x, betweenParams.secondArrowLineP1.y,
            betweenParams.secondArrowLineP2.x, betweenParams.secondArrowLineP2.y]);
        this.betweenLengthText.x(betweenParams.midPoint.x);
        this.betweenLengthText.y(betweenParams.midPoint.y);
        this.betweenLengthText.text(this.betweenLength1 + "'" + this.betweenLength2 + "\"");
        this.betweenSignLine.points([this.parentWall.endP.x, this.parentWall.endP.y,
            betweenParams.endPSignLinePoint.x, betweenParams.endPSignLinePoint.y]);
        this.revisionBetweenLengthText();
        this.layer.draw();
    };
    StepDown.prototype.redefinePoints = function () {
        var delta_x = 0, delta_y = 0;
        delta_x = this.parentWall.startP.x - this.oldStartP.x;
        delta_y = this.parentWall.startP.y - this.oldStartP.y;
        this.clickedPoint.x = this.clickedPoint.x + delta_x;
        this.clickedPoint.y = this.clickedPoint.y + delta_y;
        this.definePoints();
    };
    StepDown.prototype.buttonRectClicked = function () {
        this.removeAll();
    };
    StepDown.prototype.buttonHouseClicked = function () {
        this.removeAll();
    };
    StepDown.prototype.buttonRoundClicked = function () {
        this.removeAll();
    };
    StepDown.prototype.removeAll = function () {
        this.stepDownRect.remove();
        this.firstSignLine.remove();
        this.secondSignLine.remove();
        this.firstArrow.remove();
        this.secondArrow.remove();
        this.lengthText.remove();
        this.stepDownText.remove();
        this.betweenArrow1.remove();
        this.betweenArrow2.remove();
        this.betweenLengthText.remove();
        this.betweenSignLine.remove();
    };
    StepDown.prototype.showBetweenComponent = function (isShow) {
        if (isShow) {
            this.betweenArrow1.show();
            this.betweenArrow2.show();
            this.betweenLengthText.show();
            this.betweenSignLine.show();
        }
        else {
            this.betweenArrow1.hide();
            this.betweenArrow2.hide();
            this.betweenLengthText.hide();
            this.betweenSignLine.hide();
        }
        this.layer.draw();
    };
    return StepDown;
}());



/***/ }),

/***/ "../../../../../src/app/module/substrate.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Substrate; });
var Substrate = (function () {
    function Substrate(id, name) {
        this.id = id;
        this.name = name;
    }
    return Substrate;
}());



/***/ }),

/***/ "../../../../../src/app/module/undoredo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UndoRedo; });
var UndoRedo = (function () {
    function UndoRedo() {
        this.actions = [];
        this.undoactions = [];
    }
    UndoRedo.prototype.addActionItem = function (actionItem) {
        this.actions.push(actionItem);
        this.undoactions = [];
    };
    UndoRedo.prototype.getCountActionItems = function () {
        return this.actions.length;
    };
    UndoRedo.prototype.checkUndoAble = function () {
        if (this.actions.length === 0) {
            return false;
        }
        return true;
    };
    UndoRedo.prototype.checkRedoAble = function () {
        if (this.undoactions.length === 0) {
            return false;
        }
        return true;
    };
    UndoRedo.prototype.undo = function () {
        var actionItem = this.actions.pop();
        this.undoactions.push(actionItem);
        actionItem.undo();
    };
    UndoRedo.prototype.redo = function () {
        var actionItem = this.undoactions.pop();
        this.actions.push(actionItem);
        actionItem.redo();
    };
    return UndoRedo;
}());



/***/ }),

/***/ "../../../../../src/app/module/wall.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wall; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__point__ = __webpack_require__("../../../../../src/app/module/point.ts");

var Wall = (function () {
    function Wall(startP, endP, startID, endID, relativeID) {
        this.doors = [];
        this.stepdowns = [];
        this.halfwalls = [];
        this.closets = [];
        this.note = '';
        this.deltaForStreching = null;
        this.deltaForLengthChange = null;
        this.startP = startP;
        this.endP = endP;
        this.initStartP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](startP.x, startP.y);
        this.initEndP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](endP.x, endP.y);
        this.startID = startID;
        this.endID = endID;
        this.relativeID = relativeID;
        this.wallID = 'wall_' + Math.floor(Math.random() * 100000 % 100000);
        this.changedTime = (new Date().getTime()).toString();
        this.isLocked = false;
        this.isSelected = false;
        this.isStreching = false;
    }
    Wall.prototype.calcLength = function () {
        return Math.sqrt((this.startP.x - this.endP.x) * (this.startP.x - this.endP.x) +
            (this.startP.y - this.endP.y) * (this.startP.y - this.endP.y));
    };
    return Wall;
}());



/***/ }),

/***/ "../../../../../src/app/module/wallcloset.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WallCloset; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_konva__ = __webpack_require__("../../../../konva/konva.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_konva___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_konva__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__("../../../../../src/app/module/point.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__evented__ = __webpack_require__("../../../../../src/app/module/evented.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wallclosetbasicwall__ = __webpack_require__("../../../../../src/app/module/wallclosetbasicwall.ts");




var WallCloset = (function () {
    function WallCloset(parentWall, layer) {
        this.isStartPCloset = true;
        this.isInnerCloset = false;
        this.isStartPClosetChanged = true;
        this.isInnerClosetChanged = false;
        this.lastPos = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](0, 0);
        this.heightRange = { min: 0, max: 0 };
        this.lengthRange = { min: 0, max: 0 };
        this.isSetDepth = true;
        this.isSideLineSelected = false;
        this.isBackLineSelected = false;
        this.sideLength1 = 0; // foot
        this.sideLength2 = 0; // inch
        this.sideLength = 2 * 36 + 6 * 3;
        this.backLength = 6 * 36;
        this.backLength1 = 0;
        this.backLength2 = 0;
        this.isSelected = false;
        this.note = '';
        this.basicWalls = [];
        this.innerPolyPointers = [];
        this.innerPolyPoints = [];
        // constants
        this.WALLCLOSET_DEFAULT_LENGTH = 6 * 36; // 6 FOOTS
        this.WALLCLOSET_DEFAULT_HEIGHT = 2 * 36 + 6 * 3; // 2 FOOTS 6 inches
        this.WALLCLOSET_BACKLINE_STROKE = '#000';
        this.WALLCLOSET_BACKLINE_STROKEWIDTH = 3;
        this.WALLCLOSET_BACKLINE_ACTIVE_STROKE = '#F00';
        this.WALLCLOSET_BACKLINE_ACTIVE_STROKEWIDTH = 5;
        this.WALLCLOSET_SIDELINE_STROKE = '#000';
        this.WALLCLOSET_SIDELINE_STROKEWIDTH = 3;
        this.WALLCLOSET_SIDELINE_ACTIVE_STROKE = '#F00';
        this.WALLCLOSET_SIDELINE_ACTIVE_STROKEWIDTH = 5;
        this.WALLCLOSET_TOPLINES_GAP = 0.5 * 36; // 0.5 FOOT
        this.WALLCLOSET_TOPLINE_STROKE = '#000';
        this.WALLCLOSET_TOPLINE_STROKEWIDTH = 3;
        this.WALLCLOSET_CITEXT_WIDTH = 50;
        this.WALLCLOSET_CITEXT_FONTSIZE = 30;
        this.WALLCLOSET_INNERPOLY_ACTIVE_FILL = '#888';
        this.WALLCLOSET_INNERPOLY_NORMAL_FILL = '#EEE';
        this.wallclosetId = 'wallcloset_' + Math.floor(Math.random() * 100000 % 100000);
        this.parentWall = parentWall;
        this.layer = layer;
        this.clickedPoint = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.parentWall.clickedPoint.x, this.parentWall.clickedPoint.y);
        this.initUI();
    }
    WallCloset.prototype.initUI = function () {
        var me = this;
        this.defineIsStart();
        this.calcSideLength();
        this.calcBackLength();
        this.group = new __WEBPACK_IMPORTED_MODULE_0_konva__["Group"]({
            draggable: true,
            dragBoundFunc: function (pos) {
                return me.calcDragePos(pos);
            }
        });
        this.group.on('dragend', function (evt) {
            me.rePos();
            me.innerPoly.fill(me.WALLCLOSET_INNERPOLY_NORMAL_FILL);
            me.isSelected = false;
            me.group.draw();
            me.layer.draw();
        });
        this.group.on('dragstart', function (evt) {
            me.calcRanges();
            me.innerPoly.fill(me.WALLCLOSET_INNERPOLY_ACTIVE_FILL);
            me.isSelected = true;
            me.group.draw();
            me.layer.draw();
        });
        this.group.on('click', function () {
            me.isSelected = !me.isSelected;
            if (me.isSelected) {
                me.innerPoly.fill(me.WALLCLOSET_INNERPOLY_ACTIVE_FILL);
                me.group.draw();
                me.layer.draw();
            }
            __WEBPACK_IMPORTED_MODULE_2__evented__["a" /* Evented */].fire('wallcloset-clicked', me);
        });
        var backLineParams = this.calcBackLineParams();
        var sideParams = this.calcSideLineParams();
        this.layer.add(this.group);
        var wall1 = new __WEBPACK_IMPORTED_MODULE_3__wallclosetbasicwall__["a" /* WallClosetBaicWall */]();
        var wall2 = new __WEBPACK_IMPORTED_MODULE_3__wallclosetbasicwall__["a" /* WallClosetBaicWall */]();
        var wall3 = new __WEBPACK_IMPORTED_MODULE_3__wallclosetbasicwall__["a" /* WallClosetBaicWall */]();
        wall1.startP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](sideParams.p2.x, sideParams.p2.y);
        wall1.endP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](sideParams.p1.x, sideParams.p1.y);
        wall1.group = this.group;
        wall1.parentWallCloset = this;
        wall1.initUI();
        wall1.eventsResister();
        wall2.startP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](backLineParams.p1.x, backLineParams.p1.y);
        wall2.endP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](backLineParams.p2.x, backLineParams.p2.y);
        wall2.group = this.group;
        wall2.parentWallCloset = this;
        wall2.initUI();
        wall2.eventsResister();
        wall3.startP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](sideParams.p3.x, sideParams.p3.y);
        wall3.endP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](sideParams.p4.x, sideParams.p4.y);
        wall3.group = this.group;
        wall3.parentWallCloset = this;
        wall3.initUI();
        wall3.eventsResister();
        wall1.endWall = wall2;
        wall2.startWall = wall1;
        wall2.endWall = wall3;
        wall3.startWall = wall2;
        this.basicWalls.push(wall1);
        this.basicWalls.push(wall2);
        this.basicWalls.push(wall3);
        this.startWall = wall1;
        this.endWall = wall3;
        var topLineParams = this.calcTopLineParams();
        this.topLine1 = new __WEBPACK_IMPORTED_MODULE_0_konva__["Line"]({
            points: [topLineParams.p1.x, topLineParams.p1.y, topLineParams.p2.x, topLineParams.p2.y,
                topLineParams.p3.x, topLineParams.p3.y],
            stroke: me.WALLCLOSET_TOPLINE_STROKE,
            strokeWidth: me.WALLCLOSET_TOPLINE_STROKEWIDTH
        });
        this.topLine2 = new __WEBPACK_IMPORTED_MODULE_0_konva__["Line"]({
            points: [topLineParams.p4.x, topLineParams.p4.y, topLineParams.p5.x, topLineParams.p5.y,
                topLineParams.p6.x, topLineParams.p6.y],
            stroke: me.WALLCLOSET_TOPLINE_STROKE,
            strokeWidth: me.WALLCLOSET_TOPLINE_STROKEWIDTH
        });
        var CITextCenterP = this.calcCITextCenterPoint();
        this.CLText = new __WEBPACK_IMPORTED_MODULE_0_konva__["Text"]({
            x: CITextCenterP.x,
            y: CITextCenterP.y,
            text: 'C L',
            align: 'center',
            width: me.WALLCLOSET_CITEXT_WIDTH,
            fontSize: me.WALLCLOSET_CITEXT_FONTSIZE
        });
        this.revisionCIText();
        this.calcInnerPolyParams();
        this.innerPoly = new __WEBPACK_IMPORTED_MODULE_0_konva__["Line"]({
            points: this.innerPolyPoints,
            fill: me.WALLCLOSET_INNERPOLY_NORMAL_FILL,
            closed: true
        });
        this.doorPoly = new __WEBPACK_IMPORTED_MODULE_0_konva__["Line"]({
            points: [topLineParams.p2.x, topLineParams.p2.y, topLineParams.p3.x, topLineParams.p3.y,
                topLineParams.p6.x, topLineParams.p6.y, topLineParams.p5.x, topLineParams.p5.y],
            fill: '#eee',
            closed: true,
            stroke: '#eee',
            strokeWidth: 5
        });
        this.group.add(this.doorPoly);
        this.group.add(this.innerPoly);
        this.group.add(this.topLine1);
        this.group.add(this.topLine2);
        this.group.add(this.CLText);
        this.innerPoly.moveToBottom();
        this.doorPoly.moveToBottom();
        this.layer.draw();
        this.calcRanges();
    };
    WallCloset.prototype.defineIsStart = function () {
        switch (this.parentWall.wallDirection) {
            case 'ltr':
                if (this.parentWall.midPoint.x > this.clickedPoint.x) {
                    this.isStartPCloset = true;
                    this.startP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.parentWall.startP.x, this.parentWall.startP.y);
                    this.endP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startP.x + this.backLength, this.startP.y);
                }
                else {
                    this.isStartPCloset = false;
                    this.endP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.parentWall.endP.x, this.parentWall.endP.y);
                    this.startP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endP.x - this.backLength, this.endP.y);
                }
                break;
            case 'rtl':
                if (this.parentWall.midPoint.x < this.clickedPoint.x) {
                    this.isStartPCloset = true;
                    this.endP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.parentWall.startP.x, this.parentWall.startP.y);
                    this.startP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endP.x - this.backLength, this.endP.y);
                }
                else {
                    this.isStartPCloset = false;
                    this.startP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.parentWall.endP.x, this.parentWall.endP.y);
                    this.endP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startP.x + this.backLength, this.startP.y);
                }
                break;
            case 'ttd':
                if (this.parentWall.midPoint.y > this.clickedPoint.y) {
                    this.isStartPCloset = true;
                    this.startP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.parentWall.startP.x, this.parentWall.startP.y);
                    this.endP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startP.x, this.startP.y + this.backLength);
                }
                else {
                    this.isStartPCloset = false;
                    this.endP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.parentWall.endP.x, this.parentWall.endP.y);
                    this.startP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endP.x, this.endP.y - this.backLength);
                }
                break;
            case 'dtt':
                if (this.parentWall.midPoint.y < this.clickedPoint.y) {
                    this.isStartPCloset = true;
                    this.endP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.parentWall.startP.x, this.parentWall.startP.y);
                    this.startP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endP.x, this.endP.y - this.backLength);
                }
                else {
                    this.isStartPCloset = false;
                    this.startP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.parentWall.endP.x, this.parentWall.endP.y);
                    this.endP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startP.x, this.startP.y + this.backLength);
                }
                break;
            default:
                break;
        }
    };
    WallCloset.prototype.calcBackLineParams = function () {
        var p1, p2;
        p1 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startP.x, this.startP.y);
        p2 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endP.x, this.endP.y);
        if (!this.isInnerCloset) {
            switch (this.parentWall.wallDirection) {
                case 'ltr':
                    p1.y -= this.sideLength;
                    p2.y -= this.sideLength;
                    break;
                case 'rtl':
                    p1.y += this.sideLength;
                    p2.y += this.sideLength;
                    break;
                case 'ttd':
                    p1.x += this.sideLength;
                    p2.x += this.sideLength;
                    break;
                case 'dtt':
                    p1.x -= this.sideLength;
                    p2.x -= this.sideLength;
                default:
                    break;
            }
        }
        this.backLineMidPoint = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */]((p1.x + p2.x) / 2, (p1.y + p2.y) / 2);
        this.backLineMidPointOld = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */]((p1.x + p2.x) / 2, (p1.y + p2.y) / 2);
        return {
            p1: p1,
            p2: p2
        };
    };
    WallCloset.prototype.calcSideLineParams = function () {
        var p1, p2, p3, p4;
        switch (this.parentWall.wallDirection) {
            case 'ltr':
                p1 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startP.x, this.startP.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startP.x, this.startP.y + this.sideLength);
                p3 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endP.x, this.endP.y);
                p4 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endP.x, this.endP.y + this.sideLength);
                if (!this.isInnerCloset) {
                    p1.y -= this.sideLength;
                    p2.y -= this.sideLength;
                    p3.y -= this.sideLength;
                    p4.y -= this.sideLength;
                }
                break;
            case 'rtl':
                p1 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startP.x, this.startP.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startP.x, this.startP.y - this.sideLength);
                p3 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endP.x, this.endP.y);
                p4 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endP.x, this.endP.y - this.sideLength);
                if (!this.isInnerCloset) {
                    p1.y += this.sideLength;
                    p2.y += this.sideLength;
                    p3.y += this.sideLength;
                    p4.y += this.sideLength;
                }
                break;
            case 'ttd':
                p1 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startP.x, this.startP.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startP.x - this.sideLength, this.startP.y);
                p3 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endP.x, this.endP.y);
                p4 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endP.x - this.sideLength, this.endP.y);
                if (!this.isInnerCloset) {
                    p1.x += this.sideLength;
                    p2.x += this.sideLength;
                    p3.x += this.sideLength;
                    p4.x += this.sideLength;
                }
                break;
            case 'dtt':
                p1 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startP.x, this.startP.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startP.x + this.sideLength, this.startP.y);
                p3 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endP.x, this.endP.y);
                p4 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endP.x + this.sideLength, this.endP.y);
                if (!this.isInnerCloset) {
                    p1.x -= this.sideLength;
                    p2.x -= this.sideLength;
                    p3.x -= this.sideLength;
                    p4.x -= this.sideLength;
                }
                break;
            default:
                break;
        }
        return {
            p1: p1,
            p2: p2,
            p3: p3,
            p4: p4
        };
    };
    WallCloset.prototype.calcTopLineParams = function () {
        var p1, p2, p3, p4, p5, p6;
        this.calcMidPoint();
        var sideLineParams = this.calcSideLineParams();
        // switch (this.parentWall.wallDirection) {
        //     case 'ltr':
        //         p1 = new Point(sideLineParams.p2.x, sideLineParams.p2.y);
        //         p2 = new Point(this.midPoint.x - this.WALLCLOSET_TOPLINES_GAP * 1.5, p1.y);
        //         p3 = new Point(p2.x + this.WALLCLOSET_TOPLINES_GAP, p2.y - this.WALLCLOSET_TOPLINES_GAP);
        //         p4 = new Point(sideLineParams.p4.x, sideLineParams.p4.y);
        //         p5 = new Point(this.midPoint.x + this.WALLCLOSET_TOPLINES_GAP * 1.5, p4.y);
        //         p6 = new Point(p5.x - this.WALLCLOSET_TOPLINES_GAP, p5.y - this.WALLCLOSET_TOPLINES_GAP);
        //         break;
        //     case 'rtl':
        //         p1 = new Point(sideLineParams.p2.x, sideLineParams.p2.y);
        //         p2 = new Point(this.midPoint.x - this.WALLCLOSET_TOPLINES_GAP * 1.5, p1.y);
        //         p3 = new Point(p2.x + this.WALLCLOSET_TOPLINES_GAP, p2.y + this.WALLCLOSET_TOPLINES_GAP);
        //         p4 = new Point(sideLineParams.p4.x, sideLineParams.p4.y);
        //         p5 = new Point(this.midPoint.x + this.WALLCLOSET_TOPLINES_GAP * 1.5, p4.y);
        //         p6 = new Point(p5.x - this.WALLCLOSET_TOPLINES_GAP, p5.y + this.WALLCLOSET_TOPLINES_GAP);
        //         break;
        //     case 'ttd':
        //         p1 = new Point(sideLineParams.p2.x, sideLineParams.p2.y);
        //         p2 = new Point(p1.x, this.midPoint.y - this.WALLCLOSET_TOPLINES_GAP * 1.5);
        //         p3 = new Point(p2.x + this.WALLCLOSET_TOPLINES_GAP, p2.y + this.WALLCLOSET_TOPLINES_GAP);
        //         p4 = new Point(sideLineParams.p4.x, sideLineParams.p4.y);
        //         p5 = new Point(p4.x, this.midPoint.y + this.WALLCLOSET_TOPLINES_GAP * 1.5);
        //         p6 = new Point(p5.x + this.WALLCLOSET_TOPLINES_GAP, p5.y - this.WALLCLOSET_TOPLINES_GAP);
        //         break;
        //     case 'dtt':
        //         p1 = new Point(sideLineParams.p2.x, sideLineParams.p2.y);
        //         p2 = new Point(p1.x, this.midPoint.y - this.WALLCLOSET_TOPLINES_GAP * 1.5);
        //         p3 = new Point(p2.x - this.WALLCLOSET_TOPLINES_GAP, p2.y + this.WALLCLOSET_TOPLINES_GAP);
        //         p4 = new Point(sideLineParams.p4.x, sideLineParams.p4.y);
        //         p5 = new Point(p4.x, this.midPoint.y + this.WALLCLOSET_TOPLINES_GAP * 1.5);
        //         p6 = new Point(p5.x - this.WALLCLOSET_TOPLINES_GAP, p5.y - this.WALLCLOSET_TOPLINES_GAP);
        //         break;
        //     default:
        //         break;
        // }
        switch (this.parentWall.wallDirection) {
            case 'ltr':
                p1 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startWall.startP.x, this.startWall.startP.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.midPoint.x - this.WALLCLOSET_TOPLINES_GAP * 1.5, p1.y);
                p3 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](p2.x + this.WALLCLOSET_TOPLINES_GAP, p2.y - this.WALLCLOSET_TOPLINES_GAP);
                p4 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endWall.endP.x, this.endWall.endP.y);
                p5 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.midPoint.x + this.WALLCLOSET_TOPLINES_GAP * 1.5, p4.y);
                p6 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](p5.x - this.WALLCLOSET_TOPLINES_GAP, p5.y - this.WALLCLOSET_TOPLINES_GAP);
                break;
            case 'rtl':
                p1 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startWall.startP.x, this.startWall.startP.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.midPoint.x - this.WALLCLOSET_TOPLINES_GAP * 1.5, p1.y);
                p3 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](p2.x + this.WALLCLOSET_TOPLINES_GAP, p2.y + this.WALLCLOSET_TOPLINES_GAP);
                p4 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endWall.endP.x, this.endWall.endP.y);
                p5 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.midPoint.x + this.WALLCLOSET_TOPLINES_GAP * 1.5, p4.y);
                p6 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](p5.x - this.WALLCLOSET_TOPLINES_GAP, p5.y + this.WALLCLOSET_TOPLINES_GAP);
                break;
            case 'ttd':
                p1 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startWall.startP.x, this.startWall.startP.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](p1.x, this.midPoint.y - this.WALLCLOSET_TOPLINES_GAP * 1.5);
                p3 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](p2.x + this.WALLCLOSET_TOPLINES_GAP, p2.y + this.WALLCLOSET_TOPLINES_GAP);
                p4 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endWall.endP.x, this.endWall.endP.y);
                p5 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](p4.x, this.midPoint.y + this.WALLCLOSET_TOPLINES_GAP * 1.5);
                p6 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](p5.x + this.WALLCLOSET_TOPLINES_GAP, p5.y - this.WALLCLOSET_TOPLINES_GAP);
                break;
            case 'dtt':
                p1 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startWall.startP.x, this.startWall.startP.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](p1.x, this.midPoint.y - this.WALLCLOSET_TOPLINES_GAP * 1.5);
                p3 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](p2.x - this.WALLCLOSET_TOPLINES_GAP, p2.y + this.WALLCLOSET_TOPLINES_GAP);
                p4 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endWall.endP.x, this.endWall.endP.y);
                p5 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](p4.x, this.midPoint.y + this.WALLCLOSET_TOPLINES_GAP * 1.5);
                p6 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](p5.x - this.WALLCLOSET_TOPLINES_GAP, p5.y - this.WALLCLOSET_TOPLINES_GAP);
                break;
            default:
                break;
        }
        return {
            p1: p1,
            p2: p2,
            p3: p3,
            p4: p4,
            p5: p5,
            p6: p6
        };
    };
    WallCloset.prototype.calcMidPoint = function () {
        // this.midPoint = new Point((this.startP.x + this.endP.x) / 2, (this.startP.y + this.endP.y) / 2);
        this.midPoint = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */]((this.startWall.startP.x + this.endWall.endP.x) / 2, (this.startWall.startP.y + this.endWall.endP.y) / 2);
    };
    WallCloset.prototype.calcCITextCenterPoint = function () {
        var sideLineParams = this.calcSideLineParams();
        var centerP;
        switch (this.parentWall.wallDirection) {
            case 'ltr':
                centerP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.midPoint.x, (sideLineParams.p1.y + sideLineParams.p2.y) / 2);
                break;
            case 'rtl':
                centerP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.midPoint.x, (sideLineParams.p1.y + sideLineParams.p2.y) / 2);
                break;
            case 'ttd':
                centerP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */]((sideLineParams.p1.x + sideLineParams.p2.x) / 2, this.midPoint.y);
                break;
            case 'dtt':
                centerP = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */]((sideLineParams.p1.x + sideLineParams.p2.x) / 2, this.midPoint.y);
                break;
            default:
                break;
        }
        return centerP;
    };
    WallCloset.prototype.revisionCIText = function () {
        var me = this;
        switch (this.parentWall.wallDirection) {
            case 'ltr':
                this.CLText.x(me.CLText.x() - me.WALLCLOSET_CITEXT_WIDTH / 2);
                this.CLText.y(me.CLText.y() - me.WALLCLOSET_CITEXT_FONTSIZE / 2);
                break;
            case 'rtl':
                this.CLText.x(me.CLText.x() - me.WALLCLOSET_CITEXT_WIDTH / 2);
                break;
            case 'ttd':
                this.CLText.rotation(-90);
                this.CLText.y(me.CLText.y() + me.WALLCLOSET_CITEXT_WIDTH / 2);
                break;
            case 'dtt':
                this.CLText.rotation(90);
                this.CLText.y(me.CLText.y() - me.WALLCLOSET_CITEXT_WIDTH / 2);
                break;
            default:
                break;
        }
    };
    WallCloset.prototype.calcDragePos = function (pos) {
        var returnPos = {
            x: pos.x,
            y: pos.y
        };
        if (pos.x < this.lengthRange.min) {
            returnPos.x = this.lengthRange.min;
        }
        if (pos.x > this.lengthRange.max) {
            returnPos.x = this.lengthRange.max;
        }
        if (pos.y < this.heightRange.min) {
            returnPos.y = this.heightRange.min;
        }
        if (pos.y > this.heightRange.max) {
            returnPos.y = this.heightRange.max;
        }
        var stageABS = this.group.getStage().getAbsolutePosition();
        returnPos.x += stageABS.x;
        returnPos.y += stageABS.y;
        this.lastPos.x = returnPos.x;
        this.lastPos.y = returnPos.y;
        return returnPos;
    };
    WallCloset.prototype.rePos = function () {
        var stageABS = this.group.getStage().getAbsolutePosition();
        if (this.lastPos.x - stageABS.x < (this.lengthRange.min + this.lengthRange.max) / 2) {
            this.group.x(this.lengthRange.min);
        }
        else {
            this.group.x(this.lengthRange.max);
        }
        if (this.lastPos.y - stageABS.y < (this.heightRange.min + this.heightRange.max) / 2) {
            this.group.y(this.heightRange.min);
        }
        else {
            this.group.y(this.heightRange.max);
        }
        // this.backLineMidPoint.x = this.backLineMidPointOld.x + this.group.getAbsolutePosition().x + 20;
        // this.backLineMidPoint.y = this.backLineMidPointOld.y + this.group.getAbsolutePosition().y + 20;
        this.calcChangedStatus();
        this.defineStartPAndEndPChanged();
        this.group.draw();
        this.layer.draw();
    };
    WallCloset.prototype.calcRanges = function () {
        switch (this.parentWall.wallDirection) {
            case 'ltr':
                if (this.isInnerCloset) {
                    this.heightRange.max = 0;
                    this.heightRange.min = -this.sideLength;
                }
                else {
                    this.heightRange.max = this.sideLength;
                    this.heightRange.min = 0;
                }
                if (this.isStartPCloset) {
                    this.lengthRange.min = 0;
                    this.lengthRange.max = this.parentWall.endP.x - this.parentWall.startP.x - this.backLength;
                }
                else {
                    this.lengthRange.min = -(this.parentWall.endP.x - this.parentWall.startP.x - this.backLength);
                    this.lengthRange.max = 0;
                }
                break;
            case 'rtl':
                if (this.isInnerCloset) {
                    this.heightRange.min = 0;
                    this.heightRange.max = this.sideLength;
                }
                else {
                    this.heightRange.min = -this.sideLength;
                    this.heightRange.max = 0;
                }
                if (this.isStartPCloset) {
                    this.lengthRange.max = 0;
                    this.lengthRange.min = -(this.parentWall.startP.x - this.parentWall.endP.x - this.backLength);
                }
                else {
                    this.lengthRange.max = this.parentWall.startP.x - this.parentWall.endP.x - this.backLength;
                    this.lengthRange.min = 0;
                }
                break;
            case 'ttd':
                if (this.isInnerCloset) {
                    this.lengthRange.min = 0;
                    this.lengthRange.max = this.sideLength;
                }
                else {
                    this.lengthRange.min = -this.sideLength;
                    this.lengthRange.max = 0;
                }
                if (this.isStartPCloset) {
                    this.heightRange.min = 0;
                    this.heightRange.max = this.parentWall.endP.y - this.parentWall.startP.y - this.backLength;
                }
                else {
                    this.heightRange.min = -(this.parentWall.endP.y - this.parentWall.startP.y - this.backLength);
                    this.heightRange.max = 0;
                }
                break;
            case 'dtt':
                if (this.isInnerCloset) {
                    this.lengthRange.max = 0;
                    this.lengthRange.min = -this.sideLength;
                }
                else {
                    this.lengthRange.max = this.sideLength;
                    this.lengthRange.min = 0;
                }
                if (this.isStartPCloset) {
                    this.heightRange.max = 0;
                    this.heightRange.min = -(this.parentWall.startP.y - this.parentWall.endP.y - this.backLength);
                }
                else {
                    this.heightRange.max = this.parentWall.startP.y - this.parentWall.endP.y - this.backLength;
                    this.heightRange.min = 0;
                }
                break;
            default:
                break;
        }
    };
    WallCloset.prototype.sideLineActive = function (isActive) {
        var me = this;
        if (me.isSideLineSelected || isActive) {
            me.sideLine1.stroke(me.WALLCLOSET_SIDELINE_ACTIVE_STROKE);
            me.sideLine1.strokeWidth(me.WALLCLOSET_SIDELINE_ACTIVE_STROKEWIDTH);
            me.sideLine2.stroke(me.WALLCLOSET_SIDELINE_ACTIVE_STROKE);
            me.sideLine2.strokeWidth(me.WALLCLOSET_SIDELINE_ACTIVE_STROKEWIDTH);
        }
        else {
            me.sideLine1.stroke(me.WALLCLOSET_SIDELINE_STROKE);
            me.sideLine1.strokeWidth(me.WALLCLOSET_SIDELINE_STROKEWIDTH);
            me.sideLine2.stroke(me.WALLCLOSET_SIDELINE_STROKE);
            me.sideLine2.strokeWidth(me.WALLCLOSET_SIDELINE_STROKEWIDTH);
        }
        me.group.draw();
        me.layer.draw();
    };
    WallCloset.prototype.backLineActive = function (isActive) {
        var me = this;
        if (me.isBackLineSelected || isActive) {
            me.backLine.stroke(me.WALLCLOSET_BACKLINE_ACTIVE_STROKE);
            me.backLine.strokeWidth(me.WALLCLOSET_BACKLINE_ACTIVE_STROKEWIDTH);
        }
        else {
            me.backLine.stroke(me.WALLCLOSET_SIDELINE_STROKE);
            me.backLine.strokeWidth(me.WALLCLOSET_SIDELINE_STROKEWIDTH);
        }
        me.group.draw();
        me.layer.draw();
    };
    WallCloset.prototype.calcSideLength = function () {
        this.sideLength1 = (Math.floor(this.sideLength / 36));
        this.sideLength2 = (this.sideLength % 36) / 3;
    };
    WallCloset.prototype.calcBackLength = function () {
        this.backLength1 = (Math.floor(this.backLength / 36));
        this.backLength2 = (this.backLength % 36) / 3;
    };
    WallCloset.prototype.redrawAll = function () {
        this.calcMidPoint();
        var topLineParams = this.calcTopLineParams();
        this.topLine1.points([topLineParams.p1.x, topLineParams.p1.y, topLineParams.p2.x, topLineParams.p2.y,
            topLineParams.p3.x, topLineParams.p3.y]);
        this.topLine2.points([topLineParams.p4.x, topLineParams.p4.y, topLineParams.p5.x, topLineParams.p5.y,
            topLineParams.p6.x, topLineParams.p6.y]);
        this.doorPoly.points([topLineParams.p2.x, topLineParams.p2.y, topLineParams.p3.x, topLineParams.p3.y,
            topLineParams.p6.x, topLineParams.p6.y, topLineParams.p5.x, topLineParams.p5.y]);
        this.calcInnerPolyParams();
        this.innerPoly.points(this.innerPolyPoints);
        this.group.draw();
        this.layer.draw();
        this.calcRanges();
        this.rePos();
    };
    WallCloset.prototype.removeAll = function () {
        this.group.remove();
        this.layer.draw();
    };
    WallCloset.prototype.calcChangedStatus = function () {
        if (this.group.x() === this.lengthRange.min) {
            switch (this.parentWall.wallDirection) {
                case 'ltr':
                    this.isStartPClosetChanged = true;
                    break;
                case 'rtl':
                    this.isStartPClosetChanged = false;
                    break;
                case 'ttd':
                    this.isInnerClosetChanged = true;
                    break;
                case 'dtt':
                    this.isInnerClosetChanged = false;
                    break;
                default:
                    break;
            }
        }
        else {
            switch (this.parentWall.wallDirection) {
                case 'ltr':
                    this.isStartPClosetChanged = false;
                    break;
                case 'rtl':
                    this.isStartPClosetChanged = true;
                    break;
                case 'ttd':
                    this.isInnerClosetChanged = false;
                    break;
                case 'dtt':
                    this.isInnerClosetChanged = true;
                    break;
                default:
                    break;
            }
        }
        if (this.group.y() === this.heightRange.min) {
            switch (this.parentWall.wallDirection) {
                case 'ltr':
                    this.isInnerClosetChanged = false;
                    break;
                case 'rtl':
                    this.isInnerClosetChanged = true;
                    break;
                case 'ttd':
                    this.isStartPClosetChanged = true;
                    break;
                case 'dtt':
                    this.isStartPClosetChanged = false;
                    break;
                default:
                    break;
            }
        }
        else {
            switch (this.parentWall.wallDirection) {
                case 'ltr':
                    this.isInnerClosetChanged = true;
                    break;
                case 'rtl':
                    this.isInnerClosetChanged = false;
                    break;
                case 'ttd':
                    this.isStartPClosetChanged = false;
                    break;
                case 'dtt':
                    this.isStartPClosetChanged = true;
                    break;
                default:
                    break;
            }
        }
    };
    WallCloset.prototype.defineStartPAndEndPChanged = function () {
        switch (this.parentWall.wallDirection) {
            case 'ltr':
                if (this.isStartPClosetChanged) {
                    this.startPChanged = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.parentWall.startP.x, this.parentWall.startP.y);
                    this.endPChanged = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startPChanged.x + this.backLength, this.startPChanged.y);
                }
                else {
                    this.endPChanged = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.parentWall.endP.x, this.parentWall.endP.y);
                    this.startPChanged = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endPChanged.x - this.backLength, this.endPChanged.y);
                }
                break;
            case 'rtl':
                if (this.isStartPClosetChanged) {
                    this.endPChanged = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.parentWall.startP.x, this.parentWall.startP.y);
                    this.startPChanged = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endPChanged.x - this.backLength, this.endPChanged.y);
                }
                else {
                    this.startPChanged = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.parentWall.endP.x, this.parentWall.endP.y);
                    this.endPChanged = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startPChanged.x + this.backLength, this.startPChanged.y);
                }
                break;
            case 'ttd':
                if (this.isStartPClosetChanged) {
                    this.startPChanged = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.parentWall.startP.x, this.parentWall.startP.y);
                    this.endPChanged = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startPChanged.x, this.startPChanged.y + this.backLength);
                }
                else {
                    this.endPChanged = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.parentWall.endP.x, this.parentWall.endP.y);
                    this.startPChanged = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endPChanged.x, this.endPChanged.y - this.backLength);
                }
                break;
            case 'dtt':
                if (this.isStartPClosetChanged) {
                    this.endPChanged = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.parentWall.startP.x, this.parentWall.startP.y);
                    this.startPChanged = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endPChanged.x, this.endPChanged.y - this.backLength);
                }
                else {
                    this.startPChanged = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.parentWall.endP.x, this.parentWall.endP.y);
                    this.endPChanged = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startPChanged.x, this.startPChanged.y + this.backLength);
                }
                break;
            default:
                break;
        }
    };
    WallCloset.prototype.calcSideLineParamsChanged = function () {
        var p1, p2, p3, p4;
        switch (this.parentWall.wallDirection) {
            case 'ltr':
                p1 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startPChanged.x, this.startPChanged.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startPChanged.x, this.startPChanged.y + this.sideLength);
                p3 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endPChanged.x, this.endPChanged.y);
                p4 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endPChanged.x, this.endPChanged.y + this.sideLength);
                if (!this.isInnerCloset) {
                    p1.y -= this.sideLength;
                    p2.y -= this.sideLength;
                    p3.y -= this.sideLength;
                    p4.y -= this.sideLength;
                }
                break;
            case 'rtl':
                p1 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startPChanged.x, this.startPChanged.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startPChanged.x, this.startPChanged.y - this.sideLength);
                p3 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endPChanged.x, this.endPChanged.y);
                p4 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endPChanged.x, this.endPChanged.y - this.sideLength);
                if (!this.isInnerCloset) {
                    p1.y += this.sideLength;
                    p2.y += this.sideLength;
                    p3.y += this.sideLength;
                    p4.y += this.sideLength;
                }
                break;
            case 'ttd':
                p1 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startPChanged.x, this.startPChanged.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startPChanged.x - this.sideLength, this.startPChanged.y);
                p3 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endPChanged.x, this.endPChanged.y);
                p4 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endPChanged.x - this.sideLength, this.endPChanged.y);
                if (!this.isInnerCloset) {
                    p1.x += this.sideLength;
                    p2.x += this.sideLength;
                    p3.x += this.sideLength;
                    p4.x += this.sideLength;
                }
                break;
            case 'dtt':
                p1 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startPChanged.x, this.startPChanged.y);
                p2 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.startPChanged.x + this.sideLength, this.startPChanged.y);
                p3 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endPChanged.x, this.endPChanged.y);
                p4 = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.endPChanged.x + this.sideLength, this.endPChanged.y);
                if (!this.isInnerCloset) {
                    p1.x -= this.sideLength;
                    p2.x -= this.sideLength;
                    p3.x -= this.sideLength;
                    p4.x -= this.sideLength;
                }
                break;
            default:
                break;
        }
        return {
            p1: p1,
            p2: p2,
            p3: p3,
            p4: p4
        };
    };
    WallCloset.prototype.calcInnerPolyParams = function () {
        var _this = this;
        this.innerPolyPointers = [];
        this.innerPolyPoints = [];
        var topLineParams = this.calcTopLineParams();
        this.innerPolyPointers.push(topLineParams.p5);
        this.innerPolyPointers.push(topLineParams.p6);
        this.innerPolyPointers.push(topLineParams.p3);
        this.innerPolyPointers.push(topLineParams.p2);
        this.innerPolyPointers.push(topLineParams.p1);
        this.addInnerPolyPont(this.startWall);
        this.innerPolyPointers.map(function (pointer) {
            _this.innerPolyPoints.push(pointer.x);
            _this.innerPolyPoints.push(pointer.y);
        });
    };
    WallCloset.prototype.addInnerPolyPont = function (wall) {
        this.innerPolyPointers.push(wall.endP);
        if (wall.endWall) {
            this.addInnerPolyPont(wall.endWall);
        }
    };
    WallCloset.prototype.redrawInnerPoly = function () {
        this.calcInnerPolyParams();
        this.innerPoly.points(this.innerPolyPoints);
        this.layer.draw();
    };
    return WallCloset;
}());



/***/ }),

/***/ "../../../../../src/app/module/wallclosetbasicwall.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WallClosetBaicWall; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basicwall__ = __webpack_require__("../../../../../src/app/module/basicwall.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__evented__ = __webpack_require__("../../../../../src/app/module/evented.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__point__ = __webpack_require__("../../../../../src/app/module/point.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var WallClosetBaicWall = (function (_super) {
    __extends(WallClosetBaicWall, _super);
    function WallClosetBaicWall() {
        var _this = _super.call(this) || this;
        _this.wallClosetBasicWallId = 'wallclosetbasicwallId_' + Math.floor(Math.random() * 100000 % 100000);
        return _this;
    }
    WallClosetBaicWall.prototype.eventsResister = function () {
        var _this = this;
        var me = this;
        this.textLength.on('click', function () {
            me.isSelected = !me.isSelected;
            __WEBPACK_IMPORTED_MODULE_1__evented__["a" /* Evented */].fire('wallclosetbasicwall length change', me);
            me.redraw();
        });
        this.mainLine.on('click', function () {
            me.mainLineClickIslandWallBasic();
            __WEBPACK_IMPORTED_MODULE_1__evented__["a" /* Evented */].fire('wallclosetbasicwall length change', me);
        });
        __WEBPACK_IMPORTED_MODULE_1__evented__["a" /* Evented */].on('wallclosetbasicwall clicked', function (e) {
            var sender = e.args;
            if (sender.wallId !== me.wallId) {
                me.isSelected = false;
                me.showStrecherComponents(false);
                me.redraw();
            }
        });
        __WEBPACK_IMPORTED_MODULE_1__evented__["a" /* Evented */].on('streching', function (e) {
            var sender = e.args;
            if (sender.wallId === me.wallId) {
                // this.parentWallCloset.redrawClosedLine();
                // this.parentWallCloset.redrawInnerPoly();
                _this.parentWallCloset.redrawAll();
            }
        });
    };
    WallClosetBaicWall.prototype.mainLineClickIslandWallBasic = function () {
        this.isSelected = !this.isSelected;
        __WEBPACK_IMPORTED_MODULE_1__evented__["a" /* Evented */].fire('wallclosetbasicwall clicked', this);
    };
    WallClosetBaicWall.prototype.strecherWall = function () {
        if (this.wallLength < 2 * 36 + 6 * 3) {
            alert('you can not strech this wall, because this wall length is very short.');
            return;
        }
        var strecherWall = new WallClosetBaicWall();
        var endWallForStrech1 = new WallClosetBaicWall();
        var endWallForStrech2 = new WallClosetBaicWall();
        var startWallForStrech = new WallClosetBaicWall();
        strecherWall.endP = new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* Point */](this.endP.x, this.endP.y);
        endWallForStrech1.startP = new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* Point */](this.endP.x, this.endP.y);
        endWallForStrech1.endP = new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* Point */](this.endP.x, this.endP.y);
        endWallForStrech1.group = this.group;
        endWallForStrech1.parentWallCloset = this.parentWallCloset;
        endWallForStrech1.initUI();
        endWallForStrech1.eventsResister();
        endWallForStrech2.startP = new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* Point */](this.endP.x, this.endP.y);
        endWallForStrech2.endP = new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* Point */](this.endP.x, this.endP.y);
        endWallForStrech2.group = this.group;
        endWallForStrech2.parentWallCloset = this.parentWallCloset;
        endWallForStrech2.initUI();
        endWallForStrech2.eventsResister();
        this.wallLength = this.wallLength - this.STRECHER_DEFAULT_LENGTH;
        this.isSelected = false;
        this.redrawWallClosetBasicWall();
        strecherWall.startP = new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* Point */](this.endP.x, this.endP.y);
        strecherWall.group = this.group;
        strecherWall.parentWallCloset = this.parentWallCloset;
        strecherWall.isStreching = true;
        strecherWall.initUI();
        strecherWall.eventsResister();
        startWallForStrech.startP = new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* Point */](this.endP.x, this.endP.y);
        startWallForStrech.endP = new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* Point */](this.endP.x, this.endP.y);
        startWallForStrech.group = this.group;
        startWallForStrech.parentWallCloset = this.parentWallCloset;
        startWallForStrech.initUI();
        startWallForStrech.eventsResister();
        this.parentWallCloset.basicWalls.push(endWallForStrech1);
        this.parentWallCloset.basicWalls.push(endWallForStrech2);
        this.parentWallCloset.basicWalls.push(strecherWall);
        this.parentWallCloset.basicWalls.push(startWallForStrech);
        endWallForStrech2.endWall = this.endWall;
        this.endWall = startWallForStrech;
        startWallForStrech.startWall = this;
        startWallForStrech.endWall = strecherWall;
        strecherWall.startWall = startWallForStrech;
        strecherWall.endWall = endWallForStrech1;
        endWallForStrech1.startWall = strecherWall;
        endWallForStrech1.endWall = endWallForStrech2;
        endWallForStrech2.startWall = endWallForStrech1;
        // this.parentIsland.redrawClosedLine();
        strecherWall.isSelected = true;
        __WEBPACK_IMPORTED_MODULE_1__evented__["a" /* Evented */].fire('wallclosetbasicwall length change', strecherWall);
        __WEBPACK_IMPORTED_MODULE_1__evented__["a" /* Evented */].fire('wallclosetbasicwall clicked', strecherWall);
        // this.parentIsland.redrawClosedLine();
        if (this.wallId === this.parentWallCloset.endWall.wallId) {
            this.parentWallCloset.endWall = endWallForStrech2;
        }
    };
    WallClosetBaicWall.prototype.redrawWallClosetBasicWall = function () {
        this.calcEndP();
        this.redraw();
    };
    WallClosetBaicWall.prototype.redrawWallClosetBasicWallForStartP = function () {
        this.calcStartP();
        this.redraw();
    };
    WallClosetBaicWall.prototype.calcEndP = function () {
        switch (this.wallDirection) {
            case 'ltr':
                this.endP = new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* Point */](this.startP.x + this.wallLength, this.startP.y);
                break;
            case 'rtl':
                this.endP = new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* Point */](this.startP.x - this.wallLength, this.startP.y);
                break;
            case 'ttd':
                this.endP = new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* Point */](this.startP.x, this.startP.y + this.wallLength);
                break;
            case 'dtt':
                this.endP = new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* Point */](this.startP.x, this.startP.y - this.wallLength);
                break;
            default:
                break;
        }
    };
    WallClosetBaicWall.prototype.calcStartP = function () {
        switch (this.wallDirection) {
            case 'ltr':
                this.startP = new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* Point */](this.endP.x - this.wallLength, this.endP.y);
                break;
            case 'rtl':
                this.startP = new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* Point */](this.endP.x + this.wallLength, this.endP.y);
                break;
            case 'ttd':
                this.startP = new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* Point */](this.endP.x, this.endP.y - this.wallLength);
                break;
            case 'dtt':
                this.startP = new __WEBPACK_IMPORTED_MODULE_2__point__["a" /* Point */](this.endP.x, this.endP.y + this.wallLength);
                break;
            default:
                break;
        }
    };
    return WallClosetBaicWall;
}(__WEBPACK_IMPORTED_MODULE_0__basicwall__["a" /* BasicWall */]));



/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/panel/panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"drawing-board-panel\">\n</div>\n<app-living-room [stage]='stage' #livingroom></app-living-room>\n\n<app-devtool [stage]=\"stage\"></app-devtool>"

/***/ }),

/***/ "../../../../../src/app/panel/panel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/panel/panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_konva__ = __webpack_require__("../../../../konva/konva.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_konva___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_konva__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__living_room_living_room_component__ = __webpack_require__("../../../../../src/app/living-room/living-room.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PanelComponent = (function () {
    function PanelComponent() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.container = 'drawing-board-panel';
        this.buildingType = '';
    }
    PanelComponent.prototype.ngOnInit = function () {
    };
    PanelComponent.prototype.ngAfterContentInit = function () {
        this.initPanel();
    };
    PanelComponent.prototype.initPanel = function () {
        this.stage = new __WEBPACK_IMPORTED_MODULE_1_konva__["Stage"]({
            container: this.container,
            width: this.width,
            height: this.height,
        });
        // this.livingRoom = new LivingRoomComponent(this.stage);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('livingroom'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__living_room_living_room_component__["a" /* LivingRoomComponent */])
    ], PanelComponent.prototype, "livingroom", void 0);
    PanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-panel',
            template: __webpack_require__("../../../../../src/app/panel/panel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/panel/panel.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PanelComponent);
    return PanelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/preview/preview.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isExistRoom\" class=\"prev-room-panel\">\r\n    <div class=\"prev-room-item\" *ngFor=\"let room of area.rooms\" [ngStyle]=\"prevRoomItemStyle(room)\" (click)=\"clickRoomForGrouping(room)\">\r\n        <div class=\"prev-drawing-panel\">\r\n            <div id=\"prev-board-{{room.roomType + '-' + room.roomId}}\" class=\"prev-room-board\">\r\n            </div>\r\n\r\n            <div class=\"prev-room-id\">\r\n                {{room.roomType + ' ' + room.roomId}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/preview/preview.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".prev-room-panel {\n  padding: 10px;\n  border-bottom: solid 1px;\n  max-width: 650px; }\n  .prev-room-panel .prev-room-item {\n    width: 110px;\n    height: 110px;\n    margin: 5px;\n    display: inline-block;\n    box-shadow: 3px 3px 2px -1px #888888;\n    border: solid 1px #888;\n    border-radius: 5px;\n    cursor: pointer; }\n    .prev-room-panel .prev-room-item .prev-drawing-panel {\n      width: 102px;\n      height: 102px;\n      margin: 3px;\n      border: solid 1px #888888;\n      position: relative; }\n      .prev-room-panel .prev-room-item .prev-drawing-panel .prev-room-board {\n        width: 100px;\n        height: 70px; }\n      .prev-room-panel .prev-room-item .prev-drawing-panel .prev-room-id {\n        height: 30px;\n        position: absolute;\n        bottom: 1px;\n        text-align: center;\n        width: 100%;\n        padding: 5px;\n        font-weight: 700; }\n  .prev-room-panel .prev-room-item:hover {\n    background: #888; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/preview/preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__module_area__ = __webpack_require__("../../../../../src/app/module/area.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_konva__ = __webpack_require__("../../../../konva/konva.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_konva___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_konva__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__module_point__ = __webpack_require__("../../../../../src/app/module/point.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PreviewComponent = (function () {
    function PreviewComponent() {
        this.isExistRoom = false;
    }
    PreviewComponent.prototype.initAllData = function () {
        this.area.rooms.map(function (room) {
            room.isSelectedForGrouping = false;
        });
    };
    PreviewComponent.prototype.ngOnInit = function () {
        if (this.area.rooms.length > 0) {
            this.isExistRoom = true;
            //this.drawPreViews();
        }
        else {
            this.isExistRoom = false;
        }
    };
    PreviewComponent.prototype.ngAfterContentInit = function () {
        // this.drawPreViews();
    };
    PreviewComponent.prototype.drawPreViews = function () {
        var _this = this;
        this.initAllData();
        this.area.rooms.map(function (room) {
            _this.drawPreView(room);
        });
    };
    PreviewComponent.prototype.drawPreView = function (room) {
        var stage = new __WEBPACK_IMPORTED_MODULE_2_konva__["Stage"]({
            container: 'prev-board-' + room.roomType + '-' + room.roomId,
            width: 100,
            height: 70,
            draggable: true
        });
        var layer = new __WEBPACK_IMPORTED_MODULE_2_konva__["Layer"]();
        if (room.roomType === 'STEPS') {
            this.drawStepsPreview(room, stage, layer);
        }
        else if (room.roundWall) {
            this.drawRoundWall(room, stage, layer);
        }
        else {
            this.drawNormalRoomPreview(room, stage, layer);
        }
    };
    PreviewComponent.prototype.drawNormalRoomPreview = function (room, stage, layer) {
        var points = [];
        var minmaxPoints = this.calcMinMaxPoints(room.walls);
        points = this.calcPointsClosed(room.walls, room.walls[0], room.walls[0], minmaxPoints);
        // points.pop();
        // points.pop();
        var poly = new __WEBPACK_IMPORTED_MODULE_2_konva__["Line"]({
            points: points,
            fill: '#000',
            stroke: '#000',
            closed: true
        });
        layer.add(poly);
        this.drawIslands(room.islands, layer, minmaxPoints);
        stage.add(layer);
    };
    PreviewComponent.prototype.calcPointsClosed = function (walls, currentWall, starWall, minmaxPoints) {
        var _this = this;
        var points = [];
        // currentWall.closets.map(wallcloset => {
        //   points.push((currentWall.startP.x - minmaxPoints.minPoint.x) * 100 * 0.9 / (minmaxPoints.maxPoint.x - minmaxPoints.minPoint.x));
        //   points.push((currentWall.startP.y - minmaxPoints.minPoint.y) * 70 * 0.9 / (minmaxPoints.maxPoint.y - minmaxPoints.minPoint.y));
        //   if (!wallcloset.isInnerClosetChanged) {
        //       wallcloset.innerPolyPointers.map(point => {
        //         points.push((point.x - minmaxPoints.minPoint.x) * 100 * 0.9 / (point.x - minmaxPoints.minPoint.x));
        //         points.push((point.y - minmaxPoints.minPoint.y) * 70 * 0.9 / (point.y - minmaxPoints.minPoint.y));
        //       });
        //     }
        // });
        points.push((currentWall.endP.x - minmaxPoints.minPoint.x) * 100 * 0.9 / (minmaxPoints.maxPoint.x - minmaxPoints.minPoint.x));
        points.push((currentWall.endP.y - minmaxPoints.minPoint.y) * 70 * 0.9 / (minmaxPoints.maxPoint.y - minmaxPoints.minPoint.y));
        walls.map(function (wall) {
            if (wall.wallID === currentWall.endID) {
                if (wall.wallID === starWall.wallID) {
                    return points;
                }
                else {
                    points = points.concat(_this.calcPointsClosed(walls, wall, starWall, minmaxPoints));
                }
            }
        });
        return points;
    };
    PreviewComponent.prototype.calcMinMaxPoints = function (walls) {
        var minPoint = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](walls[0].startP.x, walls[0].startP.y);
        var maxPoint = new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](walls[0].startP.x, walls[0].startP.y);
        walls.map(function (wall) {
            if (wall.startP.x < minPoint.x) {
                minPoint.x = wall.startP.x;
            }
            if (wall.startP.x > maxPoint.x) {
                maxPoint.x = wall.startP.x;
            }
            if (wall.startP.y < minPoint.y) {
                minPoint.y = wall.startP.y;
            }
            if (wall.startP.y > maxPoint.y) {
                maxPoint.y = wall.startP.y;
            }
            if (wall.endP.x < minPoint.x) {
                minPoint.x = wall.endP.x;
            }
            if (wall.endP.x > maxPoint.x) {
                maxPoint.x = wall.endP.x;
            }
            if (wall.endP.y < minPoint.y) {
                minPoint.y = wall.endP.y;
            }
            if (wall.endP.y > maxPoint.y) {
                maxPoint.y = wall.endP.y;
            }
            wall.closets.map(function (wallcloset) {
                if (!wallcloset.isInnerClosetChanged) {
                    // var sidelineparams = wallcloset.calcSideLineParamsChanged();
                    // if (sidelineparams.p1.x > maxPoint.x) { maxPoint.x = sidelineparams.p1.x; }
                    // if (sidelineparams.p2.x > maxPoint.x) { maxPoint.x = sidelineparams.p2.x; }
                    // if (sidelineparams.p3.x > maxPoint.x) { maxPoint.x = sidelineparams.p3.x; }
                    // if (sidelineparams.p4.x > maxPoint.x) { maxPoint.x = sidelineparams.p4.x; }
                    // if (sidelineparams.p1.y > maxPoint.y) { maxPoint.y = sidelineparams.p1.y; }
                    // if (sidelineparams.p2.y > maxPoint.y) { maxPoint.y = sidelineparams.p2.y; }
                    // if (sidelineparams.p3.y > maxPoint.y) { maxPoint.y = sidelineparams.p3.y; }
                    // if (sidelineparams.p4.y > maxPoint.y) { maxPoint.y = sidelineparams.p4.y; }
                    // if (sidelineparams.p1.x < minPoint.x) { minPoint.x = sidelineparams.p1.x; }
                    // if (sidelineparams.p2.x < minPoint.x) { minPoint.x = sidelineparams.p2.x; }
                    // if (sidelineparams.p3.x < minPoint.x) { minPoint.x = sidelineparams.p3.x; }
                    // if (sidelineparams.p4.x < minPoint.x) { minPoint.x = sidelineparams.p4.x; }
                    // if (sidelineparams.p1.x < minPoint.y) { minPoint.y = sidelineparams.p1.x; }
                    // if (sidelineparams.p2.x < minPoint.y) { minPoint.y = sidelineparams.p2.x; }
                    // if (sidelineparams.p3.x < minPoint.y) { minPoint.y = sidelineparams.p3.x; }
                    // if (sidelineparams.p4.x < minPoint.y) { minPoint.y = sidelineparams.p4.x; }
                }
            });
        });
        return {
            minPoint: minPoint,
            maxPoint: maxPoint
        };
    };
    PreviewComponent.prototype.drawIslands = function (islands, layer, minmaxPoints) {
        islands.map(function (island) {
            var points = [];
            // island.points.map(point => {
            //   points.push((point.x - minmaxPoints.minPoint.x) * 100 / minmaxPoints.maxPoint.x);
            //   points.push((point.y - minmaxPoints.minPoint.y) * 70 / minmaxPoints.maxPoint.y);
            // });
            var clientRect = island.group.getAbsolutePosition();
            island.closedPoints.map(function (point) {
                points.push((point.x + clientRect.x - minmaxPoints.minPoint.x) * 100 / minmaxPoints.maxPoint.x);
                points.push((point.y + clientRect.y - minmaxPoints.minPoint.y) * 70 / minmaxPoints.maxPoint.y);
            });
            var line = new __WEBPACK_IMPORTED_MODULE_2_konva__["Line"]({
                points: points,
                fill: '#fff',
                closed: true
            });
            layer.add(line);
        });
    };
    PreviewComponent.prototype.drawStepsPreview = function (room, stage, layer) {
        var pointers = [];
        pointers.push(new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](30, 0));
        pointers.push(new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](100, 0));
        pointers.push(new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](90, 10));
        pointers.push(new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](90, 30));
        pointers.push(new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](80, 40));
        pointers.push(new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](80, 60));
        pointers.push(new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](70, 70));
        pointers.push(new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](0, 70));
        pointers.push(new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](10, 60));
        pointers.push(new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](10, 40));
        pointers.push(new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](20, 30));
        pointers.push(new __WEBPACK_IMPORTED_MODULE_3__module_point__["a" /* Point */](20, 10));
        var points = [];
        pointers.map(function (point) {
            points.push(point.x * 0.9);
            points.push(point.y * 0.8);
        });
        var poly = new __WEBPACK_IMPORTED_MODULE_2_konva__["Line"]({
            points: points,
            fill: '#000',
            stroke: '#000',
            closed: true
        });
        layer.add(poly);
        stage.add(layer);
    };
    PreviewComponent.prototype.clickRoomForGrouping = function (room) {
        room.isSelectedForGrouping = !room.isSelectedForGrouping;
    };
    PreviewComponent.prototype.prevRoomItemStyle = function (room) {
        if (room.isSelectedForGrouping) {
            return {
                border: 'solid 2px #0e32e2'
            };
        }
        return {};
    };
    PreviewComponent.prototype.drawRoundWall = function (room, stage, layer) {
        var circle = new __WEBPACK_IMPORTED_MODULE_2_konva__["Circle"]({
            x: stage.getWidth() / 2,
            y: stage.getHeight() / 2,
            radius: 30,
            fill: '#000',
            stroke: '#000',
            strokeWidth: 4
        });
        layer.add(circle);
        stage.add(layer);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__module_area__["a" /* Area */])
    ], PreviewComponent.prototype, "area", void 0);
    PreviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-preview',
            template: __webpack_require__("../../../../../src/app/preview/preview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/preview/preview.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PreviewComponent);
    return PreviewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/areas.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreasService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AreasService = (function () {
    function AreasService() {
        this.areas = [];
        this.currentEditingAreaId = null;
        this.areasSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.areas$ = this.areasSource.asObservable();
    }
    AreasService.prototype.addArea = function (area) {
        this.areas.push(area);
        this.areasSource.next(this.areas);
    };
    AreasService.prototype.getAreas = function () {
        return this.areas;
    };
    AreasService.prototype.addCurrentRoom = function (currentRoom) {
        var _this = this;
        this.areas.map(function (area) {
            if (area.areaId === _this.currentEditingAreaId) {
                area.rooms.push(currentRoom);
            }
        });
    };
    AreasService.prototype.calcCurrentRoomId = function (roomType) {
        var sum = 1;
        this.areas.map(function (area) {
            area.rooms.map(function (room) {
                if (room.roomType === roomType) {
                    sum++;
                }
            });
        });
        return sum;
    };
    AreasService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AreasService);
    return AreasService;
}());



/***/ }),

/***/ "../../../../../src/app/services/currentgroup.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentgroupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CurrentgroupService = (function () {
    function CurrentgroupService() {
    }
    CurrentgroupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CurrentgroupService);
    return CurrentgroupService;
}());



/***/ }),

/***/ "../../../../../src/app/services/currentroom.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentroomService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__module_room__ = __webpack_require__("../../../../../src/app/module/room.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__module_island__ = __webpack_require__("../../../../../src/app/module/island.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__module_point__ = __webpack_require__("../../../../../src/app/module/point.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__module_evented__ = __webpack_require__("../../../../../src/app/module/evented.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__module_undoredo__ = __webpack_require__("../../../../../src/app/module/undoredo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CurrentroomService = (function () {
    function CurrentroomService() {
        this.currentRoom = new __WEBPACK_IMPORTED_MODULE_1__module_room__["a" /* Room */]();
        this.undoredo = new __WEBPACK_IMPORTED_MODULE_6__module_undoredo__["a" /* UndoRedo */]();
        this.roomSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.room$ = this.roomSource.asObservable();
        var me = this;
        __WEBPACK_IMPORTED_MODULE_5__module_evented__["a" /* Evented */].on('buttonrectclicked', function (e) {
            me.removeAll();
        });
        __WEBPACK_IMPORTED_MODULE_5__module_evented__["a" /* Evented */].on('buttonhouseclicked', function (e) {
            me.removeAll();
        });
        __WEBPACK_IMPORTED_MODULE_5__module_evented__["a" /* Evented */].on('buttonroundclicked', function (e) {
            me.removeAll();
            //  var roundWall = new RoundWall(new Point(500, 500), 396, me.layer);
            //  me.currentRoom.roundWall = roundWall;
        });
    }
    CurrentroomService.prototype.addWall = function (wall) {
        // console.log(this.currentRoom);
        this.currentRoom.walls.push(wall);
        this.roomSource.next(this.currentRoom);
    };
    CurrentroomService.prototype.addNewIsland = function () {
        var island = new __WEBPACK_IMPORTED_MODULE_3__module_island__["a" /* Island */](new __WEBPACK_IMPORTED_MODULE_4__module_point__["a" /* Point */](400, 400), this.layer);
        this.currentRoom.islands.push(island);
    };
    CurrentroomService.prototype.removeAll = function () {
        // this.currentRoom.walls = [];
        // this.currentRoom.islands = [];
        // if (this.currentRoom.roundWall) {
        //   this.currentRoom.roundWall.removeAll();
        //   this.currentRoom.roundWall = null;
        // }
    };
    CurrentroomService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CurrentroomService);
    return CurrentroomService;
}());



/***/ }),

/***/ "../../../../../src/app/services/customer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__module_customer__ = __webpack_require__("../../../../../src/app/module/customer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerService = (function () {
    function CustomerService() {
        this.customer = new __WEBPACK_IMPORTED_MODULE_1__module_customer__["a" /* Customer */]();
    }
    CustomerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "../../../../../src/app/services/doorbutton.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoorbuttonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DoorbuttonService = (function () {
    function DoorbuttonService() {
        this.wallClickedSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.wallClicked$ = this.wallClickedSource.asObservable();
        this.submitButtonClickedSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.submitButtonClicked$ = this.submitButtonClickedSource.asObservable();
        this.doorChangeLengthSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.doorChangeLenghth$ = this.doorChangeLengthSource.asObservable();
    }
    DoorbuttonService.prototype.wallClicked = function (selectedWall) {
        this.wallClickedSource.next(selectedWall);
    };
    DoorbuttonService.prototype.submitButtonClicked = function (data) {
        this.submitButtonClickedSource.next(data);
    };
    DoorbuttonService.prototype.dblClickDoor = function (door) {
        this.doorChangeLengthSource.next(door);
    };
    DoorbuttonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DoorbuttonService);
    return DoorbuttonService;
}());



/***/ }),

/***/ "../../../../../src/app/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_service__ = __webpack_require__("../../../../../src/app/services/modal.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__modal_service__["a"]; });



/***/ }),

/***/ "../../../../../src/app/services/lockbutton.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LockbuttonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LockbuttonService = (function () {
    function LockbuttonService() {
        this.lockButtonClickedSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.lockButtonClicked$ = this.lockButtonClickedSource.asObservable();
        this.wallClickedSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.wallClicked$ = this.wallClickedSource.asObservable();
    }
    LockbuttonService.prototype.lockButtonClicked = function (selectedWall) {
        this.lockButtonClickedSource.next(selectedWall);
    };
    LockbuttonService.prototype.wallClicked = function (selectedwall) {
        this.wallClickedSource.next(selectedwall);
    };
    LockbuttonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LockbuttonService);
    return LockbuttonService;
}());



/***/ }),

/***/ "../../../../../src/app/services/modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);

var ModalService = (function () {
    function ModalService() {
        this.modals = [];
    }
    ModalService.prototype.add = function (modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    };
    ModalService.prototype.remove = function (id) {
        // remove modal from array of active modals
        var modalToRemove = __WEBPACK_IMPORTED_MODULE_0_underscore__["findWhere"](this.modals, { id: id });
        this.modals = __WEBPACK_IMPORTED_MODULE_0_underscore__["without"](this.modals, modalToRemove);
    };
    ModalService.prototype.open = function (id) {
        // open modal specified by id
        var modal = __WEBPACK_IMPORTED_MODULE_0_underscore__["findWhere"](this.modals, { id: id });
        modal.open();
    };
    ModalService.prototype.close = function (id) {
        // close modal specified by id
        var modal = __WEBPACK_IMPORTED_MODULE_0_underscore__["find"](this.modals, { id: id });
        modal.close();
    };
    return ModalService;
}());



/***/ }),

/***/ "../../../../../src/app/services/socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__module_socket_io_service__ = __webpack_require__("../../../../../src/app/module/socket-io.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__module_evented__ = __webpack_require__("../../../../../src/app/module/evented.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SocketService = (function () {
    function SocketService(socket) {
        this.socket = socket;
        var me = this;
        this.socket.on('device', function () {
            me.requestDevicesList();
        });
        this.socket.on('length detect', function (data) {
            __WEBPACK_IMPORTED_MODULE_3__module_evented__["a" /* Evented */].fire('length detect', data);
        });
    }
    SocketService.prototype.getMessage = function () {
        return this.socket
            .fromEvent('new message')
            .map(function (data) { return data; });
    };
    SocketService.prototype.sendMessage = function (id) {
        this.socket.emit('new message', id);
    };
    SocketService.prototype.requestDevicesList = function () {
        this.socket.emit('devices list');
    };
    SocketService.prototype.getDevicesList = function () {
        var _this = this;
        return this.socket
            .fromEvent('devices list')
            .map(function (devices) {
            var tempdevices = [];
            devices.map(function (data) {
                if (data.isConnected) {
                    if (data.connectedId === _this.socket.ioSocket.id) {
                        tempdevices.push(data);
                    }
                }
                else {
                    tempdevices.push(data);
                }
            });
            return tempdevices;
        });
    };
    SocketService.prototype.requestDeviceConnect = function (data) {
        this.socket.emit('device connect', data);
    };
    SocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__module_socket_io_service__["a" /* WrappedSocket */]])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "../../../../../src/app/services/strecherbutton.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StrecherbuttonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StrecherbuttonService = (function () {
    function StrecherbuttonService() {
        this.wallClickedSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.wallClicked$ = this.wallClickedSource.asObservable();
        this.strecherButtonClickedSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.strecherButtonClicked$ = this.strecherButtonClickedSource.asObservable();
    }
    StrecherbuttonService.prototype.wallClicked = function (selectedwall) {
        this.wallClickedSource.next(selectedwall);
    };
    StrecherbuttonService.prototype.strecherButtonClicked = function (selectedwall) {
        this.strecherButtonClickedSource.next(selectedwall);
    };
    StrecherbuttonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], StrecherbuttonService);
    return StrecherbuttonService;
}());



/***/ }),

/***/ "../../../../../src/app/sockettest/sockettest.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <input type=\"text\" #msgInput name=\"\" value=\"\">\n  <button (click)=\"sendMsg(msgInput.value)\">Send</button>\n  <br>\n  <p>{{msg}} </p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/sockettest/sockettest.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sockettest/sockettest.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SockettestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_socket_service__ = __webpack_require__("../../../../../src/app/services/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SockettestComponent = (function () {
    function SockettestComponent(chatService) {
        this.chatService = chatService;
    }
    SockettestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatService
            .getMessage()
            .subscribe(function (msg) {
            _this.msg = msg.command + msg.id;
        });
    };
    SockettestComponent.prototype.sendMsg = function (msg) {
        this.chatService.sendMessage(msg);
    };
    SockettestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sockettest',
            template: __webpack_require__("../../../../../src/app/sockettest/sockettest.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sockettest/sockettest.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_socket_service__["a" /* SocketService */]])
    ], SockettestComponent);
    return SockettestComponent;
}());



/***/ }),

/***/ "../../../../../src/app/staircaseitem/staircaseitem.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"staircase-item-panel\">\n  <div class=\"staircase-item-content\">\n    <div class=\"row\">\n      <div class=\"col-md-5\"><h5>Stair Type</h5></div>\n      <div class=\"col-md-7\">\n        <select class=\"form-control\" [(ngModel)]=\"staircase.stairType\">\n          <option *ngFor=\"let stairType of staircase.stairTypes\" value=\"{{stairType}}\">{{stairType}}</option>\n        </select>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-5\"><h5>Number of Steps</h5></div>\n      <div class=\"col-md-7\">\n        <input class=\"form-control\" type=\"number\" [(ngModel)]=\"staircase.numberOfSteps\" [ngStyle]=\"validateNumberOfSteps()\">\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-5\"><h5>Tread Depth</h5></div>\n      <div class=\"col-md-3\">\n        <input class=\"form-control\" type=\"number\" [(ngModel)]=\"staircase.treadDepth1\" [ngStyle]=\"validatFoot(staircase.treadDepth1)\" (focus)=\"focusInput('treadDepth')\" (focusout)=\"focusOutInput('treadDepth')\">\n      </div>'\n      <div class=\"col-md-3\">\n        <input class=\"form-control\" type=\"number\" [(ngModel)]=\"staircase.treadDepth2\" [ngStyle]=\"validateInch(staircase.treadDepth2)\" (focus)=\"focusInput('treadDepth')\" (focusout)=\"focusOutInput('treadDepth')\">\n      </div>\"\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-5\"><h5>Riser Height</h5></div>\n      <div class=\"col-md-3\">\n        <input class=\"form-control\" type=\"number\" [(ngModel)]=\"staircase.riserHeight1\" [ngStyle]=\"validatFoot(staircase.riserHeight1)\" (focus)=\"focusInput('riserHeight')\" (focusout)=\"focusOutInput('riserHeight')\">\n      </div>'\n      <div class=\"col-md-3\">\n        <input class=\"form-control\" type=\"number\" [(ngModel)]=\"staircase.riserHeight2\" [ngStyle]=\"validateInch(staircase.riserHeight2)\" (focus)=\"focusInput('riserHeight')\" (focusout)=\"focusOutInput('riserHeight')\">\n      </div>\"\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-5\"><h5>Step Width</h5></div>\n      <div class=\"col-md-3\">\n        <input class=\"form-control\" type=\"number\" [(ngModel)]=\"staircase.stepWidth1\" [ngStyle]=\"validatFoot(staircase.stepWidth1)\" (focus)=\"focusInput('stepWidth')\" (focusout)=\"focusOutInput('stepWidth')\">\n      </div>'\n      <div class=\"col-md-3\">\n        <input class=\"form-control\" type=\"number\"[(ngModel)]=\"staircase.stepWidth2\" [ngStyle]=\"validateInch(staircase.stepWidth2)\" (focus)=\"focusInput('stepWidth')\" (focusout)=\"focusOutInput('stepWidth')\">\n      </div>\"\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/staircaseitem/staircaseitem.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".staircase-item-panel {\n  display: block;\n  padding: 30px; }\n  .staircase-item-panel .staircase-item-content {\n    box-shadow: 7px 6px 6px -1px #888888;\n    padding: 20px;\n    border: solid 1px #888;\n    border-radius: 5px; }\n    .staircase-item-panel .staircase-item-content .row {\n      margin-bottom: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/staircaseitem/staircaseitem.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaircaseitemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__module_staircase__ = __webpack_require__("../../../../../src/app/module/staircase.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_socket_service__ = __webpack_require__("../../../../../src/app/services/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__module_evented__ = __webpack_require__("../../../../../src/app/module/evented.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StaircaseitemComponent = (function () {
    function StaircaseitemComponent(_socketService) {
        var _this = this;
        this._socketService = _socketService;
        this.currentFocus = '';
        __WEBPACK_IMPORTED_MODULE_3__module_evented__["a" /* Evented */].on('length detect', function (e) {
            var data = e.args;
            if (data.id !== _this.staircase.staircaseId + '_' + _this.currentFocus) {
                return;
            }
            switch (_this.currentFocus) {
                case 'treadDepth':
                    _this.staircase.treadDepth1 = Number(data.foot);
                    _this.staircase.treadDepth2 = Number(data.inch);
                    break;
                case 'riserHeight':
                    _this.staircase.riserHeight1 = Number(data.foot);
                    _this.staircase.riserHeight2 = Number(data.inch);
                    break;
                case 'stepWidth':
                    _this.staircase.stepWidth1 = Number(data.foot);
                    _this.staircase.stepWidth2 = Number(data.inch);
                    break;
                default:
                    break;
            }
        });
    }
    StaircaseitemComponent.prototype.ngOnInit = function () {
    };
    StaircaseitemComponent.prototype.click = function () {
    };
    StaircaseitemComponent.prototype.validateNumberOfSteps = function () {
        if (this.staircase.numberOfSteps < 0) {
            return {
                'border': 'solid 2px red'
            };
        }
        else {
            return {};
        }
    };
    StaircaseitemComponent.prototype.validatFoot = function (foot) {
        if (foot < 0) {
            return {
                'border': 'solid 2px red'
            };
        }
        else {
            return {};
        }
    };
    StaircaseitemComponent.prototype.validateInch = function (inch) {
        if (inch < 0 || inch > 11) {
            return {
                'border': 'solid 2px red'
            };
        }
        else {
            return {};
        }
    };
    StaircaseitemComponent.prototype.focusInput = function (variableName) {
        this._socketService.sendMessage(this.staircase.staircaseId + '_' + variableName);
        this.currentFocus = variableName;
    };
    StaircaseitemComponent.prototype.focusOutInput = function (variableName) {
        this.currentFocus = '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__module_staircase__["a" /* Staircase */])
    ], StaircaseitemComponent.prototype, "staircase", void 0);
    StaircaseitemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-staircaseitem',
            template: __webpack_require__("../../../../../src/app/staircaseitem/staircaseitem.component.html"),
            styles: [__webpack_require__("../../../../../src/app/staircaseitem/staircaseitem.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_socket_service__["a" /* SocketService */]])
    ], StaircaseitemComponent);
    return StaircaseitemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/staircasepanel/staircasepanel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"staircase-panel\">\r\n    <div class=\"row\">\r\n        <app-staircaseitem *ngFor=\"let staircase of _currentRoomService.currentRoom.staircases\" [staircase]=\"staircase\" class=\"col-md-5\"></app-staircaseitem>\r\n        \r\n        <div class=\"col-md-2 plus-button-area\">\r\n            <img src=\"/assets/drawingtoolsicon/plus.png\" (click)='addButtonClick();'>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-2 col-md-offset-2\" style=\"padding-left: 50px;\">Strangers</div>\r\n        <div class=\"col-md-2\">\r\n            <input class=\"form-control\" type=\"number\">\r\n        </div>'\r\n    </div>\r\n    <app-devtool [stage]=\"NULL\"></app-devtool>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/staircasepanel/staircasepanel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".staircase-panel {\n  margin-top: 100px;\n  margin-right: 100px;\n  overflow: scroll;\n  height: calc(100% - 100px); }\n  .staircase-panel .plus-button-area img {\n    width: 60px;\n    margin-top: 30px;\n    cursor: pointer; }\n  .staircase-panel .plus-button-area img:hover {\n    opacity: 0.8; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/staircasepanel/staircasepanel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaircasepanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__module_staircase__ = __webpack_require__("../../../../../src/app/module/staircase.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_currentroom_service__ = __webpack_require__("../../../../../src/app/services/currentroom.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StaircasepanelComponent = (function () {
    function StaircasepanelComponent(_currentRoomService) {
        this._currentRoomService = _currentRoomService;
        this.staircases = [];
        var staircase = new __WEBPACK_IMPORTED_MODULE_1__module_staircase__["a" /* Staircase */]();
        this._currentRoomService.currentRoom.staircases.push(staircase);
    }
    StaircasepanelComponent.prototype.ngOnInit = function () {
    };
    StaircasepanelComponent.prototype.addButtonClick = function () {
        var staircase = new __WEBPACK_IMPORTED_MODULE_1__module_staircase__["a" /* Staircase */]();
        this._currentRoomService.currentRoom.staircases.push(staircase);
    };
    StaircasepanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-staircasepanel',
            template: __webpack_require__("../../../../../src/app/staircasepanel/staircasepanel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/staircasepanel/staircasepanel.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_currentroom_service__["a" /* CurrentroomService */]])
    ], StaircasepanelComponent);
    return StaircasepanelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/toolbuttons/backbutton/backbutton.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  backbutton works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/toolbuttons/backbutton/backbutton.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/toolbuttons/backbutton/backbutton.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackbuttonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BackbuttonComponent = (function () {
    function BackbuttonComponent() {
    }
    BackbuttonComponent.prototype.ngOnInit = function () {
    };
    BackbuttonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-backbutton',
            template: __webpack_require__("../../../../../src/app/toolbuttons/backbutton/backbutton.component.html"),
            styles: [__webpack_require__("../../../../../src/app/toolbuttons/backbutton/backbutton.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BackbuttonComponent);
    return BackbuttonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/toolbuttons/closetbutton/closetbutton.component.html":
/***/ (function(module, exports) {

module.exports = "<img [src]=\"buttonIconURL\" [ngStyle]='getImageStyle()' (click)='buttonClicked()'>"

/***/ }),

/***/ "../../../../../src/app/toolbuttons/closetbutton/closetbutton.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/toolbuttons/closetbutton/closetbutton.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClosetbuttonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drawing_tool_button_drawing_tool_button_component__ = __webpack_require__("../../../../../src/app/drawing-tool-button/drawing-tool-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_currentroom_service__ = __webpack_require__("../../../../../src/app/services/currentroom.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__module_closet__ = __webpack_require__("../../../../../src/app/module/closet.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__module_evented__ = __webpack_require__("../../../../../src/app/module/evented.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__module_wallcloset__ = __webpack_require__("../../../../../src/app/module/wallcloset.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClosetbuttonComponent = (function (_super) {
    __extends(ClosetbuttonComponent, _super);
    function ClosetbuttonComponent(_currentRoomService) {
        var _this = _super.call(this) || this;
        _this._currentRoomService = _currentRoomService;
        _this.selectedWall = null;
        _this.buttonIconURL = '/assets/drawingtoolsicon/closet.png';
        __WEBPACK_IMPORTED_MODULE_4__module_evented__["a" /* Evented */].on('wallClicked', function (e) {
            _this.selectedWall = e.args;
        });
        return _this;
    }
    ClosetbuttonComponent.prototype.ngOnInit = function () {
    };
    ClosetbuttonComponent.prototype.buttonClicked = function () {
        if (this._currentRoomService.currentRoom.roundWall) {
            var closet = new __WEBPACK_IMPORTED_MODULE_3__module_closet__["a" /* Closet */](this._currentRoomService.currentRoom.roundWall.centerPoint, this._currentRoomService.layer);
            this._currentRoomService.currentRoom.closets.push(closet);
        }
        else {
            if (!this.selectedWall || !this.selectedWall.isSelected) {
                alert('Please Select Wall');
                return;
            }
            else {
                var wallcloset = new __WEBPACK_IMPORTED_MODULE_5__module_wallcloset__["a" /* WallCloset */](this.selectedWall, this._currentRoomService.layer);
                this.selectedWall.closets.push(wallcloset);
                this.selectedWall.isSelected = false;
                this.selectedWall.changedTime = (new Date().getTime()).toString();
            }
        }
    };
    ClosetbuttonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-closetbutton',
            template: __webpack_require__("../../../../../src/app/toolbuttons/closetbutton/closetbutton.component.html"),
            styles: [__webpack_require__("../../../../../src/app/toolbuttons/closetbutton/closetbutton.component.scss"), __webpack_require__("../../../../../src/app/drawing-tool-button/drawing-tool-button.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_currentroom_service__["a" /* CurrentroomService */]])
    ], ClosetbuttonComponent);
    return ClosetbuttonComponent;
}(__WEBPACK_IMPORTED_MODULE_1__drawing_tool_button_drawing_tool_button_component__["a" /* DrawingToolButtonComponent */]));



/***/ }),

/***/ "../../../../../src/app/toolbuttons/connercutterbutton/connercutterbutton.component.html":
/***/ (function(module, exports) {

module.exports = "<img [src]=\"buttonIconURL\" [ngStyle]='getImageStyle()' (click)='buttonClicked()'>"

/***/ }),

/***/ "../../../../../src/app/toolbuttons/connercutterbutton/connercutterbutton.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/toolbuttons/connercutterbutton/connercutterbutton.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnercutterbuttonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drawing_tool_button_drawing_tool_button_component__ = __webpack_require__("../../../../../src/app/drawing-tool-button/drawing-tool-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__module_evented__ = __webpack_require__("../../../../../src/app/module/evented.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConnercutterbuttonComponent = (function (_super) {
    __extends(ConnercutterbuttonComponent, _super);
    function ConnercutterbuttonComponent() {
        var _this = _super.call(this) || this;
        _this.cornerPoint = null;
        _this.buttonIconURL = '/assets/drawingtoolsicon/conner-cutter.png';
        var me = _this;
        __WEBPACK_IMPORTED_MODULE_2__module_evented__["a" /* Evented */].on('cornerpoint clicked', function (e) {
            me.cornerPoint = e.args;
        });
        return _this;
    }
    ConnercutterbuttonComponent.prototype.ngOnInit = function () {
    };
    ConnercutterbuttonComponent.prototype.buttonClicked = function () {
        var me = this;
        if (!this.cornerPoint) {
            alert('Please Select corner to cut');
            return;
        }
        __WEBPACK_IMPORTED_MODULE_2__module_evented__["a" /* Evented */].fire('cornerbutton clicked', me.cornerPoint.cornerPointId);
        this.cornerPoint = null;
    };
    ConnercutterbuttonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-connercutterbutton',
            template: __webpack_require__("../../../../../src/app/toolbuttons/connercutterbutton/connercutterbutton.component.html"),
            styles: [__webpack_require__("../../../../../src/app/toolbuttons/connercutterbutton/connercutterbutton.component.scss"), __webpack_require__("../../../../../src/app/drawing-tool-button/drawing-tool-button.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ConnercutterbuttonComponent);
    return ConnercutterbuttonComponent;
}(__WEBPACK_IMPORTED_MODULE_1__drawing_tool_button_drawing_tool_button_component__["a" /* DrawingToolButtonComponent */]));



/***/ }),

/***/ "../../../../../src/app/toolbuttons/deletebutton/deletebutton.component.html":
/***/ (function(module, exports) {

module.exports = "<img [src]=\"buttonIconURL\" [ngStyle]='getImageStyle()' (click)='buttonClicked()'>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/toolbuttons/deletebutton/deletebutton.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/toolbuttons/deletebutton/deletebutton.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeletebuttonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drawing_tool_button_drawing_tool_button_component__ = __webpack_require__("../../../../../src/app/drawing-tool-button/drawing-tool-button.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeletebuttonComponent = (function (_super) {
    __extends(DeletebuttonComponent, _super);
    function DeletebuttonComponent() {
        var _this = _super.call(this) || this;
        _this.buttonIconURL = '/assets/drawingtoolsicon/delete.png';
        return _this;
    }
    DeletebuttonComponent.prototype.ngOnInit = function () {
    };
    DeletebuttonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-deletebutton',
            template: __webpack_require__("../../../../../src/app/toolbuttons/deletebutton/deletebutton.component.html"),
            styles: [__webpack_require__("../../../../../src/app/toolbuttons/deletebutton/deletebutton.component.scss"), __webpack_require__("../../../../../src/app/drawing-tool-button/drawing-tool-button.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DeletebuttonComponent);
    return DeletebuttonComponent;
}(__WEBPACK_IMPORTED_MODULE_1__drawing_tool_button_drawing_tool_button_component__["a" /* DrawingToolButtonComponent */]));



/***/ }),

/***/ "../../../../../src/app/toolbuttons/doorbutton/doorbutton.component.html":
/***/ (function(module, exports) {

module.exports = "<img [src]=\"buttonIconURL\" [ngStyle]='getImageStyle()' (click)='buttonClicked()'>\r\n<modal id=\"door-modal\">\r\n    <div class=\"modal-custom\">\r\n        <div class=\"modal-custom-body\">\r\n            <div class=\"modal-custom-content\">\r\n                <h2>Connecting Room...</h2>\r\n                <div>\r\n                    <select class=\"form-control\" [(ngModel)]=\"selectDoorType\">\r\n                        <option *ngFor=\"let doorType of doorTypesArray\" [ngValue]=\"doorType\">{{doorType}}</option>\r\n                    </select>\r\n                </div>\r\n                <div>\r\n                    <div class=\"btn btn-success\" (click)=\"cancel()\">Cancel</div>\r\n                    <div class=\"btn btn-danger\" (click)=\"submit()\" style=\"float:right\">Submit</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-custom-background\"></div>\r\n</modal>"

/***/ }),

/***/ "../../../../../src/app/toolbuttons/doorbutton/doorbutton.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#door-modal select {\n  margin-bottom: 100px; }\n\n#door-modal .modal-custom-body {\n  border: solid 1px #aaa;\n  border-radius: 5px; }\n  #door-modal .modal-custom-body .modal-custom-content {\n    min-width: 450px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/toolbuttons/doorbutton/doorbutton.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoorbuttonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drawing_tool_button_drawing_tool_button_component__ = __webpack_require__("../../../../../src/app/drawing-tool-button/drawing-tool-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_doorbutton_service__ = __webpack_require__("../../../../../src/app/services/doorbutton.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_currentroom_service__ = __webpack_require__("../../../../../src/app/services/currentroom.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DoorbuttonComponent = (function (_super) {
    __extends(DoorbuttonComponent, _super);
    function DoorbuttonComponent(_doorButtonService, _modalService, _currentRoomService) {
        var _this = _super.call(this) || this;
        _this._doorButtonService = _doorButtonService;
        _this._modalService = _modalService;
        _this._currentRoomService = _currentRoomService;
        _this.subscribers = {};
        _this.doorTypesArray = [
            '',
            'Carpet',
            'Wood',
            'Laminate',
            'Vinyl / LVT / LVP',
            'Ceramic Titles',
            'Entrance',
            'Clear'
        ];
        _this.buttonIconURL = '/assets/drawingtoolsicon/door.png';
        var me = _this;
        _this.subscribers.doorsubscribe = _doorButtonService.wallClicked$.subscribe(function (selectedWall) {
            if (!selectedWall || !me.selectedWall || me.selectedWall.wallID !== selectedWall.wallID) {
                me.selectDoorType = '';
            }
            me.selectedWall = selectedWall;
        });
        return _this;
    }
    DoorbuttonComponent.prototype.ngOnInit = function () {
    };
    DoorbuttonComponent.prototype.buttonClicked = function () {
        if (!this.selectedWall || !this.selectedWall.isSelected) {
            alert('Please select Wall to add door!');
            return;
        }
        this._modalService.open('door-modal');
    };
    DoorbuttonComponent.prototype.submit = function () {
        if (!this.selectDoorType) {
            alert('Please Select Door Type!');
            return;
        }
        this._doorButtonService.submitButtonClicked({
            selectedWall: this.selectedWall,
            doorType: this.selectDoorType
        });
        this._modalService.close('door-modal');
    };
    DoorbuttonComponent.prototype.cancel = function () {
        this._modalService.close('door-modal');
    };
    DoorbuttonComponent.prototype.ngOnDestroy = function () {
        this.subscribers.doorsubscribe.unsubscribe();
    };
    DoorbuttonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-doorbutton',
            template: __webpack_require__("../../../../../src/app/toolbuttons/doorbutton/doorbutton.component.html"),
            styles: [__webpack_require__("../../../../../src/app/toolbuttons/doorbutton/doorbutton.component.scss"), __webpack_require__("../../../../../src/app/drawing-tool-button/drawing-tool-button.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_doorbutton_service__["a" /* DoorbuttonService */],
            __WEBPACK_IMPORTED_MODULE_3__services_index__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_4__services_currentroom_service__["a" /* CurrentroomService */]])
    ], DoorbuttonComponent);
    return DoorbuttonComponent;
}(__WEBPACK_IMPORTED_MODULE_1__drawing_tool_button_drawing_tool_button_component__["a" /* DrawingToolButtonComponent */]));



/***/ }),

/***/ "../../../../../src/app/toolbuttons/halfwallbutton/halfwallbutton.component.html":
/***/ (function(module, exports) {

module.exports = "<img [src]=\"buttonIconURL\" [ngStyle]='getImageStyle()' (click)='buttonClicked()'>"

/***/ }),

/***/ "../../../../../src/app/toolbuttons/halfwallbutton/halfwallbutton.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/toolbuttons/halfwallbutton/halfwallbutton.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HalfwallbuttonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drawing_tool_button_drawing_tool_button_component__ = __webpack_require__("../../../../../src/app/drawing-tool-button/drawing-tool-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__module_evented__ = __webpack_require__("../../../../../src/app/module/evented.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__module_halfwall__ = __webpack_require__("../../../../../src/app/module/halfwall.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_currentroom_service__ = __webpack_require__("../../../../../src/app/services/currentroom.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HalfwallbuttonComponent = (function (_super) {
    __extends(HalfwallbuttonComponent, _super);
    function HalfwallbuttonComponent(_currentRoomService) {
        var _this = _super.call(this) || this;
        _this._currentRoomService = _currentRoomService;
        _this.selectedWall = null;
        _this.buttonIconURL = '/assets/drawingtoolsicon/half-wall.png';
        var me = _this;
        __WEBPACK_IMPORTED_MODULE_2__module_evented__["a" /* Evented */].on('wallClicked', function (e) {
            me.selectedWall = e.args;
        });
        return _this;
    }
    HalfwallbuttonComponent.prototype.ngOnInit = function () {
    };
    HalfwallbuttonComponent.prototype.buttonClicked = function () {
        if (!this.selectedWall || !this.selectedWall.isSelected) {
            alert('Please Select Wall');
            return;
        }
        var halfwall = new __WEBPACK_IMPORTED_MODULE_3__module_halfwall__["a" /* HalfWall */](this.selectedWall, this._currentRoomService.layer);
        this.selectedWall.halfwalls.push(halfwall);
        this.selectedWall.isSelected = false;
        this.selectedWall.changedTime = (new Date().getTime()).toString();
    };
    HalfwallbuttonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-halfwallbutton',
            template: __webpack_require__("../../../../../src/app/toolbuttons/halfwallbutton/halfwallbutton.component.html"),
            styles: [__webpack_require__("../../../../../src/app/toolbuttons/halfwallbutton/halfwallbutton.component.scss"), __webpack_require__("../../../../../src/app/drawing-tool-button/drawing-tool-button.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_currentroom_service__["a" /* CurrentroomService */]])
    ], HalfwallbuttonComponent);
    return HalfwallbuttonComponent;
}(__WEBPACK_IMPORTED_MODULE_1__drawing_tool_button_drawing_tool_button_component__["a" /* DrawingToolButtonComponent */]));



/***/ }),

/***/ "../../../../../src/app/toolbuttons/islandbutton/islandbutton.component.html":
/***/ (function(module, exports) {

module.exports = "<img [src]=\"buttonIconURL\" [ngStyle]='getImageStyle()' (click)='buttonClicked()'>"

/***/ }),

/***/ "../../../../../src/app/toolbuttons/islandbutton/islandbutton.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/toolbuttons/islandbutton/islandbutton.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IslandbuttonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drawing_tool_button_drawing_tool_button_component__ = __webpack_require__("../../../../../src/app/drawing-tool-button/drawing-tool-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_currentroom_service__ = __webpack_require__("../../../../../src/app/services/currentroom.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IslandbuttonComponent = (function (_super) {
    __extends(IslandbuttonComponent, _super);
    function IslandbuttonComponent(_currentRoomService) {
        var _this = _super.call(this) || this;
        _this._currentRoomService = _currentRoomService;
        _this.buttonIconURL = '/assets/drawingtoolsicon/island.png';
        return _this;
    }
    IslandbuttonComponent.prototype.ngOnInit = function () {
    };
    IslandbuttonComponent.prototype.buttonClicked = function () {
        this._currentRoomService.addNewIsland();
    };
    IslandbuttonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-islandbutton',
            template: __webpack_require__("../../../../../src/app/toolbuttons/islandbutton/islandbutton.component.html"),
            styles: [__webpack_require__("../../../../../src/app/toolbuttons/islandbutton/islandbutton.component.scss"), __webpack_require__("../../../../../src/app/drawing-tool-button/drawing-tool-button.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_currentroom_service__["a" /* CurrentroomService */]])
    ], IslandbuttonComponent);
    return IslandbuttonComponent;
}(__WEBPACK_IMPORTED_MODULE_1__drawing_tool_button_drawing_tool_button_component__["a" /* DrawingToolButtonComponent */]));



/***/ }),

/***/ "../../../../../src/app/toolbuttons/lockbutton/lockbutton.component.html":
/***/ (function(module, exports) {

module.exports = "<img [src]=\"buttonIconURL\" [ngStyle]='getImageStyle()' [ngStyle]='getLockStyle()' (click)='buttonClicked()'>"

/***/ }),

/***/ "../../../../../src/app/toolbuttons/lockbutton/lockbutton.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/toolbuttons/lockbutton/lockbutton.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LockbuttonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drawing_tool_button_drawing_tool_button_component__ = __webpack_require__("../../../../../src/app/drawing-tool-button/drawing-tool-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_lockbutton_service__ = __webpack_require__("../../../../../src/app/services/lockbutton.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LockbuttonComponent = (function (_super) {
    __extends(LockbuttonComponent, _super);
    function LockbuttonComponent(_lockButtonService) {
        var _this = _super.call(this) || this;
        _this._lockButtonService = _lockButtonService;
        _this.subscribers = {};
        _this.isLocked = false;
        _this.isLockable = false;
        var me = _this;
        _this.buttonIconURL = '/assets/drawingtoolsicon/lock.png';
        _this.subscribers.locksubscribe = _lockButtonService.wallClicked$.subscribe(function (selectedWall) {
            me.selectedWall = selectedWall;
            if (me.selectedWall) {
                me.isLockable = true;
                me.isLocked = me.selectedWall.isLocked;
            }
            else {
                me.isLockable = false;
                me.isLocked = false;
            }
        });
        return _this;
    }
    LockbuttonComponent.prototype.ngOnInit = function () {
    };
    LockbuttonComponent.prototype.buttonClicked = function () {
        if (!this.selectedWall) {
            alert('Please select wall');
            return;
        }
        this.isLocked = !this.isLocked;
        this.selectedWall.isLocked = this.isLocked;
        this._lockButtonService.lockButtonClicked(this.selectedWall);
    };
    LockbuttonComponent.prototype.getImageStyle = function () {
        var styles = {
            'width.px': 60,
            'margin': '9px 20px'
        };
        if (this.isLocked) {
            styles['background'] = 'red';
            styles['border-radius'] = '50%';
        }
        return styles;
    };
    LockbuttonComponent.prototype.ngOnDestroy = function () {
        this.subscribers.locksubscribe.unsubscribe();
    };
    LockbuttonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lockbutton',
            template: __webpack_require__("../../../../../src/app/toolbuttons/lockbutton/lockbutton.component.html"),
            styles: [__webpack_require__("../../../../../src/app/toolbuttons/lockbutton/lockbutton.component.scss"), __webpack_require__("../../../../../src/app/drawing-tool-button/drawing-tool-button.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_lockbutton_service__["a" /* LockbuttonService */]])
    ], LockbuttonComponent);
    return LockbuttonComponent;
}(__WEBPACK_IMPORTED_MODULE_1__drawing_tool_button_drawing_tool_button_component__["a" /* DrawingToolButtonComponent */]));



/***/ }),

/***/ "../../../../../src/app/toolbuttons/notebutton/notebutton.component.html":
/***/ (function(module, exports) {

module.exports = "<img [src]=\"buttonIconURL\" [ngStyle]='getImageStyle()' (click)='buttonClicked()'>\r\n<div *ngIf=\"isShow\" class=\"note-div\">\r\n    <h1>NOTE</h1>\r\n    <textarea class=\"form-control\" [(ngModel)]='note' placeholder=\"Please Input the note.\"></textarea>\r\n    <div class=\"button-div row\">\r\n        <button class=\"btn btn-success col-md-6\" (click)=\"done()\">Done</button>\r\n        <button class=\"btn btn-danger col-md-6\" (click)=\"cancel()\">Cancel</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/toolbuttons/notebutton/notebutton.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".note-div {\n  position: absolute;\n  top: -200px;\n  width: 300px;\n  border: solid 1px #888;\n  border-radius: 5px;\n  box-shadow: 4px 4px 5px -2px #888888;\n  padding: 5px;\n  background: #eee; }\n  .note-div h1 {\n    text-align: center;\n    color: #888; }\n  .note-div .button-div {\n    margin-top: 10px;\n    margin-left: 0;\n    margin-right: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/toolbuttons/notebutton/notebutton.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotebuttonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drawing_tool_button_drawing_tool_button_component__ = __webpack_require__("../../../../../src/app/drawing-tool-button/drawing-tool-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_currentroom_service__ = __webpack_require__("../../../../../src/app/services/currentroom.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__module_evented__ = __webpack_require__("../../../../../src/app/module/evented.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotebuttonComponent = (function (_super) {
    __extends(NotebuttonComponent, _super);
    function NotebuttonComponent(_currentRoomService) {
        var _this = _super.call(this) || this;
        _this._currentRoomService = _currentRoomService;
        _this.currentSelectedObj = null;
        _this.isShow = false;
        _this.note = '';
        _this.buttonIconURL = '/assets/drawingtoolsicon/note.png';
        _this.currentSelectedObj = _currentRoomService.currentRoom;
        _this.note = _this.currentSelectedObj.note;
        __WEBPACK_IMPORTED_MODULE_3__module_evented__["a" /* Evented */].on('wallClicked', function (e) {
            _this.currentSelectedObj = e.args;
            _this.checkCurrentObject();
        });
        __WEBPACK_IMPORTED_MODULE_3__module_evented__["a" /* Evented */].on('doorrect clicked', function (e) {
            _this.currentSelectedObj = e.args;
            _this.checkCurrentObject();
        });
        __WEBPACK_IMPORTED_MODULE_3__module_evented__["a" /* Evented */].on('stepdown-length-change', function (e) {
            _this.currentSelectedObj = e.args;
            _this.checkCurrentObject();
        });
        __WEBPACK_IMPORTED_MODULE_3__module_evented__["a" /* Evented */].on('wallcloset-clicked', function (e) {
            _this.currentSelectedObj = e.args;
            _this.checkCurrentObject();
        });
        __WEBPACK_IMPORTED_MODULE_3__module_evented__["a" /* Evented */].on('basicwall clicked', function (e) {
            _this.currentSelectedObj = e.args;
            _this.checkCurrentObject();
        });
        __WEBPACK_IMPORTED_MODULE_3__module_evented__["a" /* Evented */].on('halfwallbasic clicked', function (e) {
            _this.currentSelectedObj = e.args;
            _this.checkCurrentObject();
        });
        __WEBPACK_IMPORTED_MODULE_3__module_evented__["a" /* Evented */].on('islandwallbasic clicked', function (e) {
            _this.currentSelectedObj = e.args;
            _this.checkCurrentObject();
        });
        return _this;
    }
    NotebuttonComponent.prototype.checkCurrentObject = function () {
        if (this.currentSelectedObj === null) {
            this.currentSelectedObj = this._currentRoomService.currentRoom;
        }
        this.note = this.currentSelectedObj.note;
    };
    NotebuttonComponent.prototype.ngOnInit = function () {
    };
    NotebuttonComponent.prototype.buttonClicked = function () {
        this.isShow = !this.isShow;
    };
    NotebuttonComponent.prototype.done = function () {
        this.currentSelectedObj.note = this.note;
        this.isShow = false;
    };
    NotebuttonComponent.prototype.cancel = function () {
        this.note = this.currentSelectedObj.note;
        this.isShow = false;
    };
    NotebuttonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notebutton',
            template: __webpack_require__("../../../../../src/app/toolbuttons/notebutton/notebutton.component.html"),
            styles: [__webpack_require__("../../../../../src/app/toolbuttons/notebutton/notebutton.component.scss"), __webpack_require__("../../../../../src/app/drawing-tool-button/drawing-tool-button.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_currentroom_service__["a" /* CurrentroomService */]])
    ], NotebuttonComponent);
    return NotebuttonComponent;
}(__WEBPACK_IMPORTED_MODULE_1__drawing_tool_button_drawing_tool_button_component__["a" /* DrawingToolButtonComponent */]));



/***/ }),

/***/ "../../../../../src/app/toolbuttons/photobutton/photobutton.component.html":
/***/ (function(module, exports) {

module.exports = "<img [src]=\"buttonIconURL\" [ngStyle]='getImageStyle()' (click)='buttonClicked()'>\r\n\r\n<div class=\"upload-form\" *ngIf=\"isShow\">\r\n    <h1>Upload</h1>\r\n    <div class=\"row uploaded-imags\">\r\n        <div class=\"col-md-4 uploaded-image-div\" *ngFor=\"let image of images\">\r\n            <img class=\"uploaded-img\" src=\"{{URL_IMG + image}}\">\r\n        </div>\r\n    </div>\r\n    <input type=\"file\" name=\"photo\" ng2FileSelect [uploader]=\"uploader\" />\r\n    <!-- button to trigger the file upload when submitted -->\r\n    <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\r\n        Upload\r\n    </button>\r\n    <button class=\"btn btn-danger float-right\" (click)=\"close()\">Close</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/toolbuttons/photobutton/photobutton.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".upload-form {\n  position: absolute;\n  top: -300px;\n  width: 300px;\n  height: 300px;\n  border: solid 1px #888;\n  border-radius: 5px;\n  box-shadow: 4px 4px 5px -2px #888888;\n  padding: 5px;\n  background: #eee; }\n  .upload-form h1 {\n    text-align: center;\n    color: #888; }\n  .upload-form .uploaded-imags {\n    margin: 0;\n    height: 160px;\n    overflow: scroll;\n    margin: 3px;\n    border: solid 1px #888; }\n    .upload-form .uploaded-imags .uploaded-image-div {\n      padding: 1%; }\n      .upload-form .uploaded-imags .uploaded-image-div .uploaded-img {\n        width: 98%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/toolbuttons/photobutton/photobutton.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotobuttonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drawing_tool_button_drawing_tool_button_component__ = __webpack_require__("../../../../../src/app/drawing-tool-button/drawing-tool-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_file_upload_ng2_file_upload__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var URL = 'http://localhost:3000/upload';
var PhotobuttonComponent = (function (_super) {
    __extends(PhotobuttonComponent, _super);
    function PhotobuttonComponent() {
        var _this = _super.call(this) || this;
        _this.URL_IMG = 'http://localhost:3000/uploads/';
        _this.isShow = false;
        _this.uploader = new __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload_ng2_file_upload__["FileUploader"]({ url: URL, itemAlias: 'file' });
        _this.images = [];
        _this.buttonIconURL = '/assets/drawingtoolsicon/photo.png';
        return _this;
    }
    PhotobuttonComponent.prototype.ngOnInit = function () {
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        // overide the onCompleteItem property of the uploader so we are 
        // able to deal with the server response.
        var me = this;
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log(response);
            console.log(response.url);
            var result = JSON.parse(response);
            me.images.push(result.url);
        };
    };
    PhotobuttonComponent.prototype.buttonClicked = function () {
        this.isShow = !this.isShow;
    };
    PhotobuttonComponent.prototype.close = function () {
        this.isShow = false;
    };
    PhotobuttonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-photobutton',
            template: __webpack_require__("../../../../../src/app/toolbuttons/photobutton/photobutton.component.html"),
            styles: [__webpack_require__("../../../../../src/app/toolbuttons/photobutton/photobutton.component.scss"), __webpack_require__("../../../../../src/app/drawing-tool-button/drawing-tool-button.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PhotobuttonComponent);
    return PhotobuttonComponent;
}(__WEBPACK_IMPORTED_MODULE_1__drawing_tool_button_drawing_tool_button_component__["a" /* DrawingToolButtonComponent */]));



/***/ }),

/***/ "../../../../../src/app/toolbuttons/redobutton/redobutton.component.html":
/***/ (function(module, exports) {

module.exports = "<img [src]=\"buttonIconURL\" [ngStyle]='getImageStyle()' (click)='buttonClicked()'>\r\n\r\n<modal id=\"redo-error-modal\">\r\n    <div class=\"modal-custom\">\r\n        <div class=\"modal-custom-body\">\r\n            <div class=\"modal-custom-content\">\r\n                <h1>Error!</h1>\r\n                <h3>There is no any action to redo!</h3>\r\n                <div>\r\n                    <!-- <div class=\"btn btn-success\" (click)=\"cancel()\">Cancel</div> -->\r\n                    <div class=\"btn btn-danger\" (click)=\"close()\" style=\"float:right\">Close</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-custom-background\"></div>\r\n</modal>"

/***/ }),

/***/ "../../../../../src/app/toolbuttons/redobutton/redobutton.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/toolbuttons/redobutton/redobutton.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedobuttonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drawing_tool_button_drawing_tool_button_component__ = __webpack_require__("../../../../../src/app/drawing-tool-button/drawing-tool-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_currentroom_service__ = __webpack_require__("../../../../../src/app/services/currentroom.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RedobuttonComponent = (function (_super) {
    __extends(RedobuttonComponent, _super);
    function RedobuttonComponent(_currentRoomService, _modalService) {
        var _this = _super.call(this) || this;
        _this._currentRoomService = _currentRoomService;
        _this._modalService = _modalService;
        _this.buttonIconURL = '/assets/drawingtoolsicon/redo.png';
        _this.isNormalButton = false;
        return _this;
    }
    RedobuttonComponent.prototype.ngOnInit = function () {
    };
    RedobuttonComponent.prototype.buttonClicked = function () {
        if (!this._currentRoomService.undoredo.checkRedoAble()) {
            this._modalService.open('redo-error-modal');
            return;
        }
        this._currentRoomService.undoredo.redo();
    };
    RedobuttonComponent.prototype.close = function () {
        this._modalService.close('redo-error-modal');
    };
    RedobuttonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-redobutton',
            template: __webpack_require__("../../../../../src/app/toolbuttons/redobutton/redobutton.component.html"),
            styles: [__webpack_require__("../../../../../src/app/toolbuttons/redobutton/redobutton.component.scss"), __webpack_require__("../../../../../src/app/drawing-tool-button/drawing-tool-button.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_currentroom_service__["a" /* CurrentroomService */],
            __WEBPACK_IMPORTED_MODULE_3__services_index__["a" /* ModalService */]])
    ], RedobuttonComponent);
    return RedobuttonComponent;
}(__WEBPACK_IMPORTED_MODULE_1__drawing_tool_button_drawing_tool_button_component__["a" /* DrawingToolButtonComponent */]));



/***/ }),

/***/ "../../../../../src/app/toolbuttons/shapebutton/shapebutton.component.html":
/***/ (function(module, exports) {

module.exports = "<img [src]=\"buttonIconURL\" [ngStyle]='getImageStyle()' (click)='buttonClicked()'>\r\n\r\n<div *ngIf='isShowMoreShape' class=\"morebuttons\">\r\n    <img [src]=\"buttonRectURL\" [ngStyle]='getImageStyle()' (click)='buttonRectClicked()'>\r\n    <img [src]=\"buttonHouseURL\" [ngStyle]='getImageStyle()' (click)='buttonHouseClicked()'>\r\n    <img [src]=\"buttonRoundURL\" [ngStyle]='getImageStyle()' (click)='buttonRoundClicked()'>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/toolbuttons/shapebutton/shapebutton.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".morebuttons {\n  position: absolute;\n  margin-top: -60px;\n  margin-left: 80px;\n  z-index: 100;\n  background: #fff;\n  border: solid 1px #888;\n  box-shadow: 4px 4px 5px -2px #888888;\n  border-radius: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/toolbuttons/shapebutton/shapebutton.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShapebuttonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drawing_tool_button_drawing_tool_button_component__ = __webpack_require__("../../../../../src/app/drawing-tool-button/drawing-tool-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__module_evented__ = __webpack_require__("../../../../../src/app/module/evented.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShapebuttonComponent = (function (_super) {
    __extends(ShapebuttonComponent, _super);
    function ShapebuttonComponent() {
        var _this = _super.call(this) || this;
        _this.buttonRectURL = '/assets/drawingtoolsicon/rect.png';
        _this.buttonHouseURL = '/assets/drawingtoolsicon/house.png';
        _this.buttonRoundURL = '/assets/drawingtoolsicon/round.png';
        _this.isShowMoreShape = false;
        _this.buttonIconURL = '/assets/drawingtoolsicon/shape.png';
        return _this;
    }
    ShapebuttonComponent.prototype.ngOnInit = function () {
    };
    ShapebuttonComponent.prototype.buttonClicked = function () {
        this.isShowMoreShape = !this.isShowMoreShape;
    };
    ShapebuttonComponent.prototype.buttonRectClicked = function () {
        this.isShowMoreShape = !this.isShowMoreShape;
        __WEBPACK_IMPORTED_MODULE_2__module_evented__["a" /* Evented */].fire('buttonrectclicked');
    };
    ShapebuttonComponent.prototype.buttonHouseClicked = function () {
        this.isShowMoreShape = !this.isShowMoreShape;
        __WEBPACK_IMPORTED_MODULE_2__module_evented__["a" /* Evented */].fire('buttonhouseclicked');
    };
    ShapebuttonComponent.prototype.buttonRoundClicked = function () {
        this.isShowMoreShape = !this.isShowMoreShape;
        __WEBPACK_IMPORTED_MODULE_2__module_evented__["a" /* Evented */].fire('buttonroundclicked');
    };
    ShapebuttonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-shapebutton',
            template: __webpack_require__("../../../../../src/app/toolbuttons/shapebutton/shapebutton.component.html"),
            styles: [__webpack_require__("../../../../../src/app/toolbuttons/shapebutton/shapebutton.component.scss"), __webpack_require__("../../../../../src/app/drawing-tool-button/drawing-tool-button.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ShapebuttonComponent);
    return ShapebuttonComponent;
}(__WEBPACK_IMPORTED_MODULE_1__drawing_tool_button_drawing_tool_button_component__["a" /* DrawingToolButtonComponent */]));



/***/ }),

/***/ "../../../../../src/app/toolbuttons/stepdownbutton/stepdownbutton.component.html":
/***/ (function(module, exports) {

module.exports = "<img [src]=\"buttonIconURL\" [ngStyle]='getImageStyle()' (click)='buttonClicked()'>"

/***/ }),

/***/ "../../../../../src/app/toolbuttons/stepdownbutton/stepdownbutton.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/toolbuttons/stepdownbutton/stepdownbutton.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StepdownbuttonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drawing_tool_button_drawing_tool_button_component__ = __webpack_require__("../../../../../src/app/drawing-tool-button/drawing-tool-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__module_evented__ = __webpack_require__("../../../../../src/app/module/evented.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_currentroom_service__ = __webpack_require__("../../../../../src/app/services/currentroom.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__module_stepdown__ = __webpack_require__("../../../../../src/app/module/stepdown.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StepdownbuttonComponent = (function (_super) {
    __extends(StepdownbuttonComponent, _super);
    function StepdownbuttonComponent(_currentRoomService) {
        var _this = _super.call(this) || this;
        _this._currentRoomService = _currentRoomService;
        _this.currentWall = null;
        _this.buttonIconURL = '/assets/drawingtoolsicon/step-down.png';
        var me = _this;
        __WEBPACK_IMPORTED_MODULE_2__module_evented__["a" /* Evented */].on('wallClicked', function (e) {
            me.currentWall = e.args;
        });
        return _this;
    }
    StepdownbuttonComponent.prototype.ngOnInit = function () {
    };
    StepdownbuttonComponent.prototype.buttonClicked = function () {
        if (this.currentWall === null || !this.currentWall.isSelected) {
            alert('Please Select one Wall.');
            return;
        }
        var stepdown = new __WEBPACK_IMPORTED_MODULE_4__module_stepdown__["a" /* StepDown */](this.currentWall, this._currentRoomService.layer);
        this.currentWall.isSelected = false;
        this.currentWall.stepdowns.push(stepdown);
        this.currentWall.changedTime = (new Date().getTime()).toString();
    };
    StepdownbuttonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-stepdownbutton',
            template: __webpack_require__("../../../../../src/app/toolbuttons/stepdownbutton/stepdownbutton.component.html"),
            styles: [__webpack_require__("../../../../../src/app/toolbuttons/stepdownbutton/stepdownbutton.component.scss"), __webpack_require__("../../../../../src/app/drawing-tool-button/drawing-tool-button.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_currentroom_service__["a" /* CurrentroomService */]])
    ], StepdownbuttonComponent);
    return StepdownbuttonComponent;
}(__WEBPACK_IMPORTED_MODULE_1__drawing_tool_button_drawing_tool_button_component__["a" /* DrawingToolButtonComponent */]));



/***/ }),

/***/ "../../../../../src/app/toolbuttons/strecherbutton/strecherbutton.component.html":
/***/ (function(module, exports) {

module.exports = "<img [src]=\"buttonIconURL\" [ngStyle]='getImageStyle()' (click)='buttonClicked()'>"

/***/ }),

/***/ "../../../../../src/app/toolbuttons/strecherbutton/strecherbutton.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/toolbuttons/strecherbutton/strecherbutton.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StrecherbuttonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drawing_tool_button_drawing_tool_button_component__ = __webpack_require__("../../../../../src/app/drawing-tool-button/drawing-tool-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_strecherbutton_service__ = __webpack_require__("../../../../../src/app/services/strecherbutton.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__module_evented__ = __webpack_require__("../../../../../src/app/module/evented.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StrecherbuttonComponent = (function (_super) {
    __extends(StrecherbuttonComponent, _super);
    function StrecherbuttonComponent(_strecherService) {
        var _this = _super.call(this) || this;
        _this._strecherService = _strecherService;
        _this.selectedObj = null;
        _this.subscribers = {};
        _this.buttonIconURL = '/assets/drawingtoolsicon/wall-strecher.png';
        var me = _this;
        _this.subscribers.strecher = _strecherService.wallClicked$.subscribe(function (selectedWall) {
            me.selectedWall = selectedWall;
            _this.selectedObj = null;
        });
        __WEBPACK_IMPORTED_MODULE_3__module_evented__["a" /* Evented */].on('halfwallbasic clicked', function (e) {
            _this.selectedObj = e.args;
            _this.selectedWall = null;
        });
        __WEBPACK_IMPORTED_MODULE_3__module_evented__["a" /* Evented */].on('islandwallbasic clicked', function (e) {
            _this.selectedObj = e.args;
            _this.selectedWall = null;
        });
        __WEBPACK_IMPORTED_MODULE_3__module_evented__["a" /* Evented */].on('wallclosetbasicwall clicked', function (e) {
            _this.selectedObj = e.args;
            _this.selectedWall = null;
        });
        return _this;
    }
    StrecherbuttonComponent.prototype.ngOnInit = function () {
    };
    StrecherbuttonComponent.prototype.buttonClicked = function () {
        if ((!this.selectedWall || !this.selectedWall.isSelected) && (!this.selectedObj || !this.selectedObj.isSelected)) {
            alert('Please Select Wall');
            return;
        }
        if (this.selectedWall && this.selectedWall.isLocked) {
            alert('You cant change this wall, because this wall is locked');
            return;
        }
        if (this.selectedWall) {
            this.selectedWall.isSelected = false;
            this._strecherService.strecherButtonClicked(this.selectedWall);
        }
        else if (this.selectedObj) {
            this.selectedObj.strecherWall();
        }
    };
    StrecherbuttonComponent.prototype.ngOnDestroy = function () {
        this.subscribers.strecher.unsubscribe();
    };
    StrecherbuttonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-strecherbutton',
            template: __webpack_require__("../../../../../src/app/toolbuttons/strecherbutton/strecherbutton.component.html"),
            styles: [__webpack_require__("../../../../../src/app/toolbuttons/strecherbutton/strecherbutton.component.scss"), __webpack_require__("../../../../../src/app/drawing-tool-button/drawing-tool-button.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_strecherbutton_service__["a" /* StrecherbuttonService */]])
    ], StrecherbuttonComponent);
    return StrecherbuttonComponent;
}(__WEBPACK_IMPORTED_MODULE_1__drawing_tool_button_drawing_tool_button_component__["a" /* DrawingToolButtonComponent */]));



/***/ }),

/***/ "../../../../../src/app/toolbuttons/undobutton/undobutton.component.html":
/***/ (function(module, exports) {

module.exports = "<img [src]=\"buttonIconURL\" [ngStyle]='getImageStyle()' (click)='buttonClicked()'>\r\n\r\n<modal id=\"undo-error-modal\">\r\n    <div class=\"modal-custom\">\r\n        <div class=\"modal-custom-body\">\r\n            <div class=\"modal-custom-content\">\r\n                <h1>Error!</h1>\r\n                <h3>There is no any action to undo!</h3>\r\n                <div>\r\n                    <!-- <div class=\"btn btn-success\" (click)=\"cancel()\">Cancel</div> -->\r\n                    <div class=\"btn btn-danger\" (click)=\"close()\" style=\"float:right\">Close</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-custom-background\"></div>\r\n</modal>"

/***/ }),

/***/ "../../../../../src/app/toolbuttons/undobutton/undobutton.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/toolbuttons/undobutton/undobutton.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UndobuttonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drawing_tool_button_drawing_tool_button_component__ = __webpack_require__("../../../../../src/app/drawing-tool-button/drawing-tool-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_currentroom_service__ = __webpack_require__("../../../../../src/app/services/currentroom.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UndobuttonComponent = (function (_super) {
    __extends(UndobuttonComponent, _super);
    function UndobuttonComponent(_currentRoomService, _modalService) {
        var _this = _super.call(this) || this;
        _this._currentRoomService = _currentRoomService;
        _this._modalService = _modalService;
        _this.buttonIconURL = '/assets/drawingtoolsicon/back.png';
        _this.isNormalButton = false;
        return _this;
    }
    UndobuttonComponent.prototype.ngOnInit = function () {
    };
    UndobuttonComponent.prototype.buttonClicked = function () {
        if (!this._currentRoomService.undoredo.checkUndoAble()) {
            this._modalService.open('undo-error-modal');
            return;
        }
        this._currentRoomService.undoredo.undo();
    };
    UndobuttonComponent.prototype.close = function () {
        this._modalService.close('undo-error-modal');
    };
    UndobuttonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-undobutton',
            template: __webpack_require__("../../../../../src/app/toolbuttons/undobutton/undobutton.component.html"),
            styles: [__webpack_require__("../../../../../src/app/toolbuttons/undobutton/undobutton.component.scss"), __webpack_require__("../../../../../src/app/drawing-tool-button/drawing-tool-button.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_currentroom_service__["a" /* CurrentroomService */],
            __WEBPACK_IMPORTED_MODULE_3__services_index__["a" /* ModalService */]])
    ], UndobuttonComponent);
    return UndobuttonComponent;
}(__WEBPACK_IMPORTED_MODULE_1__drawing_tool_button_drawing_tool_button_component__["a" /* DrawingToolButtonComponent */]));



/***/ }),

/***/ "../../../../../src/app/type-floor-area-to-cover/type-floor-area-to-cover.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\n  <p style=\"text-align: center;color: red;\"><span style=\"font-weight:800;font-size7:0px;font-size:40px;\">World of®</span></p>\n  <h1 style=\"text-align: center;color: red;margin-top:-30px;font-size:70px;\">Floors</h1>\n  <div class=\"user-info\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <label class=\"col-md-5\">Last Name:</label>\n        <div class=\"col-md-7\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"_customerservice.customer.lastName\">\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <label class=\"col-md-5\">First Name:</label>\n        <div class=\"col-md-7\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"_customerservice.customer.firstName\">\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <label class=\"col-md-5\">Phone:</label>\n        <div class=\"col-md-7\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"_customerservice.customer.phone\">\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <label class=\"col-md-5\">Date:</label>\n        <div class=\"col-md-7\">\n          <span>17/1/2018</span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <label class=\"col-md-3\">Address:</label>\n        <div class=\"col-md-9\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"_customerservice.customer.address\">\n        </div>\n      </div>\n\n      <div class=\"col-md-3\">\n        <label class=\"col-md-5\">Cell:</label>\n        <div class=\"col-md-7\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"_customerservice.customer.cell\">\n        </div>\n      </div>\n\n      <div class=\"col-md-3\">\n        <label class=\"col-md-5\">Email:</label>\n        <div class=\"col-md-7\">\n          <input type=\"email\" class=\"form-control\" [(ngModel)]=\"_customerservice.customer.email\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <label class=\"col-md-3\">City:</label>\n        <div class=\"col-md-9\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"_customerservice.customer.city\">\n        </div>\n      </div>\n\n      <div class=\"col-md-2\">\n        <label class=\"col-md-3\">State:</label>\n        <div class=\"col-md-9\">\n          <select class=\"form-control\" [(ngModel)]=\"_customerservice.customer.state\">\n            <option>MI</option>\n          </select>\n        </div>\n      </div>\n\n      <div class=\"col-md-3\">\n        <label class=\"col-md-5\">Zip:</label>\n        <div class=\"col-md-7\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"_customerservice.customer.zip\">\n        </div>\n      </div>\n\n      <div class=\"col-md-3\">\n        <label class=\"col-md-5\">Salesperson1:</label>\n        <div class=\"col-md-7\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"_customerservice.customer.salesperson1\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-7\">\n          <label class=\"col-md-2\">Cross Streets:</label>\n          <div class=\"col-md-5\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"_customerservice.customer.cross_streets1\">\n          </div>&\n          <div class=\"col-md-5\">\n            <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"_customerservice.customer.cross_streets2\">\n          </div>\n      </div>\n      \n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-3\">\n        <label class=\"col-md-5\">Salesperson2</label>\n        <div class=\"col-md-7\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"_customerservice.customer.salesperson2\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <button class=\"create-customer-btn\">Create Customer</button><br><br>\n  <h2 style=\"color:rgb(73, 180, 224);\">Types of Flooring / Area to cover</h2>\n  <button class=\"add-area-button\" (click)=\"addArea()\">+ Areas</button>\n\n    <app-area *ngFor=\"let area of areas\" [area]=\"area\">\n    </app-area>\n\n  <button class=\"btn-total-savings\">Total Savings</button>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/type-floor-area-to-cover/type-floor-area-to-cover.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-container {\n  margin: 10px 50px;\n  min-height: 800px;\n  position: relative;\n  padding: 20px 0px; }\n  .page-container .user-info {\n    border: solid 1px;\n    padding: 10px;\n    margin-top: 30px;\n    margin-bottom: 30px;\n    font-weight: 500;\n    font-size: 20px; }\n    .page-container .user-info .row {\n      margin-bottom: 10px; }\n      .page-container .user-info .row .col-md-3, .page-container .user-info .row .col-md-6, .page-container .user-info .row .col-md-4, .page-container .user-info .row .col-md-2, .page-container .user-info .row .col-md-7 {\n        display: inherit; }\n  .page-container .create-customer-btn {\n    background: white;\n    border: solid 2px #000000;\n    padding: 3px 15px;\n    border-radius: 5px;\n    cursor: pointer; }\n\n.page-container .add-area-button {\n  background: white;\n  border: solid 2px #000000;\n  padding: 3px 15px;\n  border-radius: 5px;\n  cursor: pointer; }\n\n.page-container .add-area-button:hover {\n  background: #aaa; }\n\n.page-container .btn-total-savings {\n  color: white;\n  padding: 5px 20px;\n  border-radius: 10px;\n  background: #555;\n  /* For browsers that do not support gradients */\n  /* For Safari 5.1 to 6.0 */\n  /* For Opera 11.1 to 12.0 */\n  /* For Firefox 3.6 to 15 */\n  background: linear-gradient(#555, #aaa);\n  /* Standard syntax */\n  position: absolute;\n  bottom: 0;\n  left: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/type-floor-area-to-cover/type-floor-area-to-cover.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeFloorAreaToCoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__module_area__ = __webpack_require__("../../../../../src/app/module/area.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_areas_service__ = __webpack_require__("../../../../../src/app/services/areas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_customer_service__ = __webpack_require__("../../../../../src/app/services/customer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TypeFloorAreaToCoverComponent = (function () {
    function TypeFloorAreaToCoverComponent(modalService, _areasSevice, _customerservice) {
        var _this = this;
        this.modalService = modalService;
        this._areasSevice = _areasSevice;
        this._customerservice = _customerservice;
        this.areas = [];
        this.subscribers = {};
        this.subscribers.areasubscribe = this._areasSevice.areas$.subscribe(function (areas) {
            _this.areas = areas;
        });
        if (this._areasSevice.areas.length === 0) {
            var temp = new __WEBPACK_IMPORTED_MODULE_2__module_area__["a" /* Area */](String(this.areas.length + 1));
            this._areasSevice.addArea(temp);
        }
    }
    TypeFloorAreaToCoverComponent.prototype.ngOnInit = function () {
        this.areas = this._areasSevice.getAreas();
    };
    TypeFloorAreaToCoverComponent.prototype.addArea = function () {
        var temp = new __WEBPACK_IMPORTED_MODULE_2__module_area__["a" /* Area */](String(this.areas.length + 1));
        this._areasSevice.addArea(temp);
    };
    TypeFloorAreaToCoverComponent.prototype.ngOnDestroy = function () {
        this.subscribers.areasubscribe.unsubscribe();
    };
    TypeFloorAreaToCoverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-type-floor-area-to-cover',
            template: __webpack_require__("../../../../../src/app/type-floor-area-to-cover/type-floor-area-to-cover.component.html"),
            styles: [__webpack_require__("../../../../../src/app/type-floor-area-to-cover/type-floor-area-to-cover.component.scss")],
            moduleId: module.i.toString()
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_3__services_areas_service__["a" /* AreasService */],
            __WEBPACK_IMPORTED_MODULE_4__services_customer_service__["a" /* CustomerService */]])
    ], TypeFloorAreaToCoverComponent);
    return TypeFloorAreaToCoverComponent;
}());



/***/ }),

/***/ "../../../../../src/app/upload/upload.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  upload works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/upload/upload.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/upload/upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UploadComponent = (function () {
    function UploadComponent() {
    }
    UploadComponent.prototype.ngOnInit = function () {
    };
    UploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__("../../../../../src/app/upload/upload.component.html"),
            styles: [__webpack_require__("../../../../../src/app/upload/upload.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "../../../../../src/app/wall-length-modal/wall-length-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<modal id=\"wall-length-modal\">\n  <div class=\"modal-custom\">\n    <div class=\"modal-custom-body\">\n      <div class=\"modal-custom-content\">\n        hello\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-custom-background\"></div>\n</modal>\n"

/***/ }),

/***/ "../../../../../src/app/wall-length-modal/wall-length-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "modal {\n  /* modals are hidden by default */\n  display: none; }\n  modal .modal-custom {\n    /* modal container fixed across whole screen */\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    /* z-index must be higher than .modal-background */\n    z-index: 1000;\n    /* enables scrolling for tall modals */\n    overflow: auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n    modal .modal-custom .modal-custom-body {\n      padding: 20px;\n      background: #fff;\n      /* margin exposes part of the modal background */\n      margin: 40px;\n      box-shadow: 7px 6px 6px -1px #888888; }\n  modal .modal-custom-background {\n    /* modal background fixed across whole screen */\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    /* semi-transparent black  */\n    background-color: #fff;\n    opacity: 0.5;\n    /* z-index must be below .modal and above everything else  */\n    z-index: 900; }\n\nbody.modal-open {\n  /* body overflow is hidden to hide main scrollbar when modal window is open */\n  overflow: hidden; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wall-length-modal/wall-length-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WallLengthModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WallLengthModalComponent = (function () {
    function WallLengthModalComponent(modalService) {
        this.modalService = modalService;
    }
    WallLengthModalComponent.prototype.ngOnInit = function () {
    };
    WallLengthModalComponent.prototype.ngAfterViewInit = function () {
        //this.modalService.open('wall-length-modal');
    };
    WallLengthModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-wall-length-modal',
            template: __webpack_require__("../../../../../src/app/wall-length-modal/wall-length-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/wall-length-modal/wall-length-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* ModalService */]])
    ], WallLengthModalComponent);
    return WallLengthModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/wall/wall.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isShowEdit\" [ngStyle]=\"getDrawingPanelStyle()\">\n  <div class=\"wall-length-edit-box\">\n    <input type='number' [(ngModel)]='wallLength1' [ngStyle]=\"getValidationColor1()\">\n    <b>'</b>\n    <input type='number' [(ngModel)]='wallLength2' [ngStyle]=\"getValidationColor2()\">\n    <b>\"</b>\n    <button (click)='submit()'>SUBMIT</button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/wall/wall.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wall/wall.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WallComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_konva__ = __webpack_require__("../../../../konva/konva.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_konva___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_konva__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__module_point__ = __webpack_require__("../../../../../src/app/module/point.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__module_wall__ = __webpack_require__("../../../../../src/app/module/wall.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_lockbutton_service__ = __webpack_require__("../../../../../src/app/services/lockbutton.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_strecherbutton_service__ = __webpack_require__("../../../../../src/app/services/strecherbutton.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_doorbutton_service__ = __webpack_require__("../../../../../src/app/services/doorbutton.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_socket_service__ = __webpack_require__("../../../../../src/app/services/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__module_evented__ = __webpack_require__("../../../../../src/app/module/evented.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_currentroom_service__ = __webpack_require__("../../../../../src/app/services/currentroom.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__module_actionitem__ = __webpack_require__("../../../../../src/app/module/actionitem.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var WallComponent = (function () {
    function WallComponent(_lockButtonService, _strecherButtonService, _doorButtonService, _socketService, _currentRoomService) {
        var _this = this;
        this._lockButtonService = _lockButtonService;
        this._strecherButtonService = _strecherButtonService;
        this._doorButtonService = _doorButtonService;
        this._socketService = _socketService;
        this._currentRoomService = _currentRoomService;
        this.isloaded = false;
        this.lengthChangeEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.clickMainLineEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.strecherEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.signLineLength = 30;
        this.editFeild = null;
        this.isShowEdit = false;
        this.wallLength1 = 12;
        this.wallLength2 = 0;
        this.wallLength = 0;
        // mainline constants
        this.MAINLINE_NORMAL_WIDTH = 3;
        this.MAINLINE_SELECTED_WIDTH = 10;
        this.MAINLINE_NORMAL_COLOR = '#000';
        this.MAINLINE_SELECTED_COLOR = '#f00';
        // arrows for length contants
        this.ARROW_FOR_LENGTH_POINTER_LENGTH = 5;
        this.ARROW_FOR_LENGTH_POINTER_WIDTH = 5;
        this.ARROW_FOR_LENGTH_FILL = '#000';
        this.ARROW_FOR_LENGTH_STROKE = '#000';
        this.ARROW_FOR_LENGTH_STROKEWIDTH = 1;
        // text length constants
        this.TEXTLENGTH_NORMAL_COLOR = '#000';
        this.TEXTLENGTH_LOCKED_COLOR = '#f00';
        this.TEXTLENGTH_WIDTH = 50;
        // clicked point constants
        this.CLICKEDPOINT_NORMAL_STROKE = '#000';
        this.CLICKEDPOINT_CLICKED_STROKE = '#f00';
        this.CLICKEDPOINT_NORMAL_FILL = '#000';
        this.CLICKEDPOINT_CLICKED_FILL = '#FFF';
        this.CLICKEDPOINT_NORMAL_WIDTH = 0;
        this.CLICKEDPOINT_CLICKED_WIDTH = 1;
        this.CLICKEDPOINT_NORMAL_RADIUS = 0;
        this.CLICKEDPOINT_CLICKED_RADIUS = 6;
        // streching button constants
        this.STRECHING_CENTER_CIRCLE_RADIUS = 10;
        this.STRECHING_CENTER_CIRCLE_FILL = '#fff';
        this.STRECHING_CENTER_CIRCLE_STROKE = '#f00';
        this.STRECHING_CENTER_CIRCLE_STROKEWIDTH = 1;
        this.STRECHING_FIRSTP_CIRCLE_RADIUS = 5;
        this.STRECHING_FIRSTP_CIRCLE_FILL = '#fff';
        this.STRECHING_FIRSTP_CIRCLE_STROKE = '#f00';
        this.STRECHING_FIRSTP_CIRCLE_STROKEWIDTH = 1;
        this.STRECHING_ARROW_POINTER_LENGTH = 5;
        this.STRECHING_ARROW_POINTER_WIDTH = 10;
        this.STRECHING_ARROW_FILL = '#f00';
        this.STRECHING_ARROW_STROKE = '#f00';
        this.STRECHING_ARROW_STROKEWIDTH = 1;
        var me = this;
        __WEBPACK_IMPORTED_MODULE_8__module_evented__["a" /* Evented */].on('length detect', function (e) {
            var data = e.args;
            if (data.id === me.wall.wallID && me.isShowEdit) {
                me.wallLength1 = Number(data.foot);
                me.wallLength2 = Number(data.inch);
            }
        });
        __WEBPACK_IMPORTED_MODULE_8__module_evented__["a" /* Evented */].on('buttonrectclicked', function (e) {
            me.removeAll();
        });
        __WEBPACK_IMPORTED_MODULE_8__module_evented__["a" /* Evented */].on('buttonhouseclicked', function (e) {
            me.removeAll();
        });
        __WEBPACK_IMPORTED_MODULE_8__module_evented__["a" /* Evented */].on('buttonroundclicked', function (e) {
            me.removeAll();
        });
        __WEBPACK_IMPORTED_MODULE_8__module_evented__["a" /* Evented */].on('removeWall', function (e) {
            var wallID = e.args;
            if (_this.wall.wallID === wallID) {
                _this.removeAll();
            }
        });
    }
    Object.defineProperty(WallComponent.prototype, "_wall", {
        set: function (_wall) {
            this.wall = _wall;
            this.wallID = this.wall.wallID;
            this.wallDirection = this.wall.wallDirection;
            this.calculateLength();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WallComponent.prototype, "changedTime", {
        set: function (changedTime) {
            this._changedTime = changedTime;
            if (this.isloaded) {
                this.redrawAll(true);
            }
        },
        enumerable: true,
        configurable: true
    });
    WallComponent.prototype.ngOnInit = function () {
        var me = this;
        this.group = new __WEBPACK_IMPORTED_MODULE_1_konva__["Group"]({});
        me.wall.group = this.group;
        // this.group.on('dragmove', function() {
        //   me.strecherDrage(me.group.getAbsolutePosition());
        // });
        this.defineWallType();
        this.drawMainLine();
        this.calcMidPoint();
        this.drawSignBarLines();
        this.drawArrows();
        this.drawText();
        this.drawSelectedPoint();
        this.drawStrecherToolParts();
        this.layer.add(this.group);
        this.layer.draw();
        this.isloaded = true;
    };
    WallComponent.prototype.calcMidPoint = function () {
        var me = this;
        me.midPoint = new __WEBPACK_IMPORTED_MODULE_2__module_point__["a" /* Point */](me.wall.startP.x + (me.wall.endP.x - me.wall.startP.x) / 2, me.wall.startP.y + (me.wall.endP.y - me.wall.startP.y) / 2);
        me.wall.midPoint = new __WEBPACK_IMPORTED_MODULE_2__module_point__["a" /* Point */](me.wall.startP.x + (me.wall.endP.x - me.wall.startP.x) / 2, me.wall.startP.y + (me.wall.endP.y - me.wall.startP.y) / 2);
    };
    WallComponent.prototype.drawMainLine = function () {
        var me = this;
        this.mainLine = new __WEBPACK_IMPORTED_MODULE_1_konva__["Line"]({
            points: [this.wall.startP.x, this.wall.startP.y, this.wall.endP.x, this.wall.endP.y],
            stroke: me.MAINLINE_NORMAL_COLOR,
            strokeWidth: me.MAINLINE_NORMAL_WIDTH,
            lineCap: 'round',
            lineJoin: 'round'
        });
        this.mainLine.on('mouseover', function () {
            this.stroke(me.MAINLINE_SELECTED_COLOR);
            this.strokeWidth(me.MAINLINE_SELECTED_WIDTH);
            document.body.style.cursor = 'pointer';
            me.layer.draw();
        });
        this.mainLine.on('mouseout', function () {
            if (me.wall.isSelected) {
                return;
            }
            this.stroke('#000');
            this.strokeWidth(me.MAINLINE_NORMAL_WIDTH);
            document.body.style.cursor = 'default';
            me.layer.draw();
        });
        this.mainLine.on('click', function (evt) {
            me.wall.isSelected = !me.wall.isSelected;
            if (me.wall.isSelected) {
                this.stroke(me.MAINLINE_SELECTED_COLOR);
                this.strokeWidth(me.MAINLINE_SELECTED_WIDTH);
                me.clickMainLineEvent.emit({
                    clickedWallId: me.wall.wallID
                });
            }
            else {
                if (me.strechingToolButtonGroup) {
                    me.strechingToolButtonGroup.hide();
                    me.wall.isStreching = false;
                }
            }
            me.setClickedPoint(evt);
            me.allNotifyToButtonsSevices();
        });
        this.mainLine.on('dblclick', function () {
            me.viewEditLabel();
        });
        this.group.add(this.mainLine);
        if (me.wall.isSelected) {
            this.mainLine.stroke(me.MAINLINE_SELECTED_COLOR);
            this.mainLine.strokeWidth(me.MAINLINE_SELECTED_WIDTH);
        }
    };
    WallComponent.prototype.drawSignBarLines = function () {
        var me = this;
        switch (this.wallDirection) {
            case 'ltr':
                me.firstSignLine = new __WEBPACK_IMPORTED_MODULE_1_konva__["Line"]({
                    points: [me.wall.startP.x, me.wall.startP.y, me.wall.startP.x, me.wall.startP.y - me.signLineLength],
                    stroke: '#000',
                    strokeWidth: 1,
                    lineCap: 'round',
                    lineJoin: 'round',
                });
                me.secondSignLine = new __WEBPACK_IMPORTED_MODULE_1_konva__["Line"]({
                    points: [me.wall.endP.x, me.wall.endP.y, me.wall.endP.x, me.wall.endP.y - me.signLineLength],
                    stroke: '#000',
                    strokeWidth: 1,
                    lineCap: 'round',
                    lineJoin: 'round',
                });
                break;
            case 'rtl':
                me.firstSignLine = new __WEBPACK_IMPORTED_MODULE_1_konva__["Line"]({
                    points: [me.wall.startP.x, me.wall.startP.y, me.wall.startP.x, me.wall.startP.y + me.signLineLength],
                    stroke: '#000',
                    strokeWidth: 1,
                    lineCap: 'round',
                    lineJoin: 'round',
                });
                me.secondSignLine = new __WEBPACK_IMPORTED_MODULE_1_konva__["Line"]({
                    points: [me.wall.endP.x, me.wall.endP.y, me.wall.endP.x, me.wall.endP.y + me.signLineLength],
                    stroke: '#000',
                    strokeWidth: 1,
                    lineCap: 'round',
                    lineJoin: 'round',
                });
                break;
            case 'ttd':
                me.firstSignLine = new __WEBPACK_IMPORTED_MODULE_1_konva__["Line"]({
                    points: [me.wall.startP.x, me.wall.startP.y, me.wall.startP.x + me.signLineLength, me.wall.startP.y],
                    stroke: '#000',
                    strokeWidth: 1,
                    lineCap: 'round',
                    lineJoin: 'round',
                });
                me.secondSignLine = new __WEBPACK_IMPORTED_MODULE_1_konva__["Line"]({
                    points: [me.wall.endP.x, me.wall.endP.y, me.wall.endP.x + me.signLineLength, me.wall.endP.y],
                    stroke: '#000',
                    strokeWidth: 1,
                    lineCap: 'round',
                    lineJoin: 'round',
                });
                break;
            case 'dtt':
                me.firstSignLine = new __WEBPACK_IMPORTED_MODULE_1_konva__["Line"]({
                    points: [me.wall.startP.x, me.wall.startP.y, me.wall.startP.x - me.signLineLength, me.wall.startP.y],
                    stroke: '#000',
                    strokeWidth: 1,
                    lineCap: 'round',
                    lineJoin: 'round',
                });
                me.secondSignLine = new __WEBPACK_IMPORTED_MODULE_1_konva__["Line"]({
                    points: [me.wall.endP.x, me.wall.endP.y, me.wall.endP.x - me.signLineLength, me.wall.endP.y],
                    stroke: '#000',
                    strokeWidth: 1,
                    lineCap: 'round',
                    lineJoin: 'round',
                });
                break;
            case 'other':
                var d_x = me.wall.endP.x - me.wall.startP.x;
                var d_y = me.wall.endP.y - me.wall.startP.y;
                var dd = Math.sqrt(d_x * d_x + d_y * d_y);
                var d_x_1 = me.signLineLength * d_y / dd;
                var d_y_1 = d_x_1 * d_x / d_y;
                me.firstSignLine = new __WEBPACK_IMPORTED_MODULE_1_konva__["Line"]({
                    points: [me.wall.startP.x, me.wall.startP.y, me.wall.startP.x + d_x_1, me.wall.startP.y - d_y_1],
                    stroke: '#000',
                    strokeWidth: 1,
                    lineCap: 'round',
                    lineJoin: 'round',
                });
                me.secondSignLine = new __WEBPACK_IMPORTED_MODULE_1_konva__["Line"]({
                    points: [me.wall.endP.x, me.wall.endP.y, me.wall.endP.x + d_x_1, me.wall.endP.y - d_y_1],
                    stroke: '#000',
                    strokeWidth: 1,
                    lineCap: 'round',
                    lineJoin: 'round',
                });
                break;
            default:
                break;
        }
        me.group.add(me.firstSignLine);
        me.group.add(me.secondSignLine);
    };
    WallComponent.prototype.drawArrows = function () {
        var me = this;
        switch (me.wallDirection) {
            case 'ltr':
                me.firstArrow = new __WEBPACK_IMPORTED_MODULE_1_konva__["Arrow"]({
                    points: [me.midPoint.x - me.TEXTLENGTH_WIDTH, me.midPoint.y - me.signLineLength / 2,
                        me.wall.startP.x, this.midPoint.y - me.signLineLength / 2]
                });
                me.secondArrow = new __WEBPACK_IMPORTED_MODULE_1_konva__["Arrow"]({
                    points: [me.midPoint.x + me.TEXTLENGTH_WIDTH, me.midPoint.y - me.signLineLength / 2,
                        me.wall.endP.x, me.wall.endP.y - me.signLineLength / 2]
                });
                break;
            case 'rtl':
                me.firstArrow = new __WEBPACK_IMPORTED_MODULE_1_konva__["Arrow"]({
                    points: [me.midPoint.x + me.TEXTLENGTH_WIDTH, me.midPoint.y + me.signLineLength / 2,
                        me.wall.startP.x, me.midPoint.y + me.signLineLength / 2]
                });
                me.secondArrow = new __WEBPACK_IMPORTED_MODULE_1_konva__["Arrow"]({
                    points: [me.midPoint.x - me.TEXTLENGTH_WIDTH, me.midPoint.y + me.signLineLength / 2,
                        me.wall.endP.x, me.wall.endP.y + me.signLineLength / 2]
                });
                break;
            case 'ttd':
                me.firstArrow = new __WEBPACK_IMPORTED_MODULE_1_konva__["Arrow"]({
                    points: [me.midPoint.x + me.signLineLength / 2, me.midPoint.y - me.TEXTLENGTH_WIDTH,
                        me.wall.startP.x + me.signLineLength / 2, me.wall.startP.y]
                });
                me.secondArrow = new __WEBPACK_IMPORTED_MODULE_1_konva__["Arrow"]({
                    points: [me.midPoint.x + me.signLineLength / 2, me.midPoint.y + me.TEXTLENGTH_WIDTH,
                        me.wall.endP.x + me.signLineLength / 2, me.wall.endP.y]
                });
                break;
            case 'dtt':
                me.firstArrow = new __WEBPACK_IMPORTED_MODULE_1_konva__["Arrow"]({
                    points: [me.midPoint.x - me.signLineLength / 2, me.midPoint.y + me.TEXTLENGTH_WIDTH,
                        me.wall.startP.x - me.signLineLength / 2, me.wall.startP.y]
                });
                me.secondArrow = new __WEBPACK_IMPORTED_MODULE_1_konva__["Arrow"]({
                    points: [me.midPoint.x - me.signLineLength / 2, me.midPoint.y - me.TEXTLENGTH_WIDTH,
                        me.wall.endP.x - me.signLineLength / 2, me.wall.endP.y]
                });
                break;
            case 'other':
                var d_x = me.wall.endP.x - me.wall.startP.x;
                var d_y = me.wall.endP.y - me.wall.startP.y;
                var dd = Math.sqrt(d_x * d_x + d_y * d_y);
                var k = d_x * Math.abs(d_y) / (d_y * Math.abs(d_x));
                var k_x = d_x / Math.abs(d_x);
                var k_y = d_y / Math.abs(d_y);
                var d_x_1 = me.signLineLength * d_y / dd / 2;
                var d_y_1 = d_x_1 * d_x / d_y;
                var d_x_2 = Math.abs(me.TEXTLENGTH_WIDTH * d_y / 2 / dd) * k_x;
                var d_y_2 = Math.abs(d_x_2 * d_y / d_x) * k_y;
                me.firstArrow = new __WEBPACK_IMPORTED_MODULE_1_konva__["Arrow"]({
                    points: [me.midPoint.x + d_x_1 - d_x_2, me.midPoint.y - d_y_1 - d_y_2,
                        me.wall.startP.x + d_x_1, me.wall.startP.y - d_y_1],
                });
                me.secondArrow = new __WEBPACK_IMPORTED_MODULE_1_konva__["Arrow"]({
                    points: [me.midPoint.x + d_x_1 + d_x_2, me.midPoint.y - d_y_1 + d_y_2,
                        me.wall.endP.x + d_x_1, me.wall.endP.y - d_y_1],
                });
                break;
            default:
                break;
        }
        me.firstArrow.pointerLength(me.ARROW_FOR_LENGTH_POINTER_LENGTH);
        me.firstArrow.pointerWidth(me.ARROW_FOR_LENGTH_POINTER_WIDTH);
        me.firstArrow.fill(me.ARROW_FOR_LENGTH_FILL);
        me.firstArrow.stroke(me.ARROW_FOR_LENGTH_STROKE);
        me.firstArrow.strokeWidth(me.ARROW_FOR_LENGTH_STROKEWIDTH);
        me.secondArrow.pointerLength(me.ARROW_FOR_LENGTH_POINTER_LENGTH);
        me.secondArrow.pointerWidth(me.ARROW_FOR_LENGTH_POINTER_WIDTH);
        me.secondArrow.fill(me.ARROW_FOR_LENGTH_FILL);
        me.secondArrow.stroke(me.ARROW_FOR_LENGTH_STROKE);
        me.secondArrow.strokeWidth(me.ARROW_FOR_LENGTH_STROKEWIDTH);
        me.group.add(me.firstArrow);
        me.group.add(me.secondArrow);
    };
    WallComponent.prototype.drawText = function () {
        var me = this;
        switch (me.wall.wallDirection) {
            case 'ltr':
                me.textLength = new __WEBPACK_IMPORTED_MODULE_1_konva__["Text"]({
                    x: me.midPoint.x - me.TEXTLENGTH_WIDTH,
                    y: me.midPoint.y - me.signLineLength,
                    text: this.wallLength1 + "' " + this.wallLength2 + " \"",
                });
                break;
            case 'rtl':
                me.textLength = new __WEBPACK_IMPORTED_MODULE_1_konva__["Text"]({
                    x: me.midPoint.x - me.TEXTLENGTH_WIDTH,
                    y: me.midPoint.y + me.signLineLength / 4,
                    text: this.wallLength1 + "' " + this.wallLength2 + " \"",
                });
                break;
            case 'ttd':
                me.textLength = new __WEBPACK_IMPORTED_MODULE_1_konva__["Text"]({
                    x: me.midPoint.x + me.signLineLength / 4,
                    y: me.midPoint.y + me.TEXTLENGTH_WIDTH,
                    text: this.wallLength1 + "' " + this.wallLength2 + " \"",
                });
                me.textLength.rotation(-90);
                break;
            case 'dtt':
                me.textLength = new __WEBPACK_IMPORTED_MODULE_1_konva__["Text"]({
                    x: me.midPoint.x - me.signLineLength / 4,
                    y: me.midPoint.y - me.TEXTLENGTH_WIDTH,
                    text: this.wallLength1 + "' " + this.wallLength2 + " \"",
                });
                me.textLength.rotation(90);
                break;
            case 'other':
                var d_x = me.wall.endP.x - me.wall.startP.x;
                var d_y = me.wall.endP.y - me.wall.startP.y;
                var dd = Math.sqrt(d_x * d_x + d_y * d_y);
                var d_x_1 = me.signLineLength * d_y / dd;
                var d_y_1 = d_x_1 * d_x / d_y;
                var alpha = Math.atan(d_y / d_x) * 180 / Math.PI;
                me.textLength = new __WEBPACK_IMPORTED_MODULE_1_konva__["Text"]({
                    x: me.midPoint.x + d_x_1,
                    y: me.midPoint.y - d_y_1,
                    text: this.wallLength1 + "' " + this.wallLength2 + " \"",
                    align: 'center',
                    width: me.TEXTLENGTH_WIDTH,
                    offsetX: 50,
                });
                // me.textLength.x(me.midPoint.x + d_x_2 - d_x_1);
                // me.textLength.y(me.midPoint.y - d_y_2 - d_y_1);
                me.textLength.rotation(alpha);
                break;
            default:
                break;
        }
        if (this.wall.isLocked) {
            me.textLength.fill(me.TEXTLENGTH_LOCKED_COLOR);
        }
        me.textLength.fontSize(20);
        me.textLength.fontFamily('Calibri');
        me.textLength.width(100);
        me.textLength.height(me.signLineLength);
        me.textLength.align('center');
        me.group.add(me.textLength);
        this.textLength.on('click', function () {
            me.wall.isSelected = true;
            me.viewEditLabel();
        });
        me.textLength.moveToBottom();
        // me.group.draw();
    };
    WallComponent.prototype.drawSelectedPoint = function () {
        this.clickedCircle = new __WEBPACK_IMPORTED_MODULE_1_konva__["Circle"]({
            x: this.wall.startP.x,
            y: this.wall.startP.y,
            strokeWidth: this.CLICKEDPOINT_NORMAL_WIDTH,
            radius: this.CLICKEDPOINT_NORMAL_RADIUS,
        });
        this.group.add(this.clickedCircle);
    };
    WallComponent.prototype.defineWallType = function () {
        if (this.wall.startP.y === this.wall.endP.y) {
            if (this.wall.startP.x <= this.wall.endP.x) {
                this.wallDirection = 'ltr';
            }
            else {
                this.wallDirection = 'rtl';
            }
        }
        else if (this.wall.startP.x === this.wall.endP.x) {
            if (this.wall.startP.y <= this.wall.endP.y) {
                this.wallDirection = 'ttd';
            }
            else {
                this.wallDirection = 'dtt';
            }
        }
        else {
            this.wallDirection = 'other';
        }
        this.wall.wallDirection = this.wallDirection;
    };
    WallComponent.prototype.viewEditLabel = function () {
        var me = this;
        if (me.wall.isLocked) {
            alert('Please unlock the wall.');
            return;
        }
        me.isShowEdit = true;
        this._socketService.sendMessage(this.wall.wallID);
        me.redrawAll(true);
    };
    WallComponent.prototype.submit = function () {
        if (this.wallLength2 <= 11 && this.wallLength2 >= 0 && this.wallLength1 >= 0) {
            this.isShowEdit = false;
            this.wall.isSelected = false;
            if (this.wallLength1 * 36 + this.wallLength2 * 3 === this.wallLength) {
                return;
            }
            var actionItem = new __WEBPACK_IMPORTED_MODULE_10__module_actionitem__["a" /* ActionItem */]();
            actionItem.actionId = this._currentRoomService.undoredo.getCountActionItems();
            actionItem.actionKind = 'walllengthchange';
            actionItem.oldObj.push({
                wallId: this.wall.wallID,
                startP: new __WEBPACK_IMPORTED_MODULE_2__module_point__["a" /* Point */](this.wall.startP.x, this.wall.startP.y),
                endP: new __WEBPACK_IMPORTED_MODULE_2__module_point__["a" /* Point */](this.wall.endP.x, this.wall.endP.y),
            });
            this.redrawAll(false);
            this.changeLengthEvent();
            actionItem.newObj.push({
                wallId: this.wall.wallID,
                startP: new __WEBPACK_IMPORTED_MODULE_2__module_point__["a" /* Point */](this.wall.startP.x, this.wall.startP.y),
                endP: new __WEBPACK_IMPORTED_MODULE_2__module_point__["a" /* Point */](this.wall.endP.x, this.wall.endP.y),
            });
            this._currentRoomService.undoredo.addActionItem(actionItem);
        }
    };
    WallComponent.prototype.redrawAll = function (isByOther) {
        this.defineWallType();
        this.redrawMainLine(isByOther);
        this.calcMidPoint();
        this.redrawSignBarLines();
        this.redrawArrows();
        this.redrawTextLength();
        this.redrawClickedPoint();
        this.redrawStrecherToolParts();
        this.drawDoor();
        this.layer.draw();
    };
    WallComponent.prototype.redrawTextLength = function () {
        var me = this;
        me.calculateLength();
        this.textLength.text(this.wallLength1 + "' " + this.wallLength2 + " \"");
        switch (me.wallDirection) {
            case 'ltr':
                me.textLength.x(me.midPoint.x - me.TEXTLENGTH_WIDTH);
                me.textLength.y(me.midPoint.y - me.signLineLength);
                break;
            case 'rtl':
                me.textLength.x(me.midPoint.x - me.TEXTLENGTH_WIDTH);
                me.textLength.y(me.midPoint.y + me.signLineLength / 4);
                break;
            case 'ttd':
                me.textLength.x(me.midPoint.x + me.signLineLength / 4);
                me.textLength.y(me.midPoint.y + me.TEXTLENGTH_WIDTH);
                me.textLength.rotation(-90);
                break;
            case 'dtt':
                me.textLength.x(me.midPoint.x - me.signLineLength / 4);
                me.textLength.y(me.midPoint.y - me.TEXTLENGTH_WIDTH);
                me.textLength.rotation(90);
                break;
            case 'other':
                var d_x = me.wall.endP.x - me.wall.startP.x;
                var d_y = me.wall.endP.y - me.wall.startP.y;
                var dd = Math.sqrt(d_x * d_x + d_y * d_y);
                var d_x_1 = me.signLineLength * d_y / dd;
                var d_y_1 = d_x_1 * d_x / d_y;
                var alpha = Math.atan(d_y / d_x) * 180 / Math.PI;
                me.textLength.x(me.midPoint.x + d_x_1);
                me.textLength.y(me.midPoint.y - d_y_1);
                me.textLength.rotation(alpha);
                break;
            default:
                break;
        }
        if (me.wall.isLocked) {
            me.textLength.fill(me.TEXTLENGTH_LOCKED_COLOR);
        }
        else {
            me.textLength.fill(me.TEXTLENGTH_NORMAL_COLOR);
        }
    };
    WallComponent.prototype.redrawMainLine = function (isByOther) {
        var _this = this;
        var startWall, endWall;
        var wallChangeType = 0;
        if (isByOther === false) {
            if (this.wallLength1 * 36 + this.wallLength2 * 3 < this.wall.calcLength()) {
                this._currentRoomService.currentRoom.walls.map(function (wall) {
                    if (wall.wallID === _this.wall.startID && wall.wallDirection === 'other') {
                        startWall = wall;
                        wallChangeType += 1;
                    }
                    if (wall.wallID === _this.wall.endID && wall.wallDirection === 'other') {
                        endWall = wall;
                        wallChangeType += 2;
                    }
                });
            }
            switch (this.wallDirection) {
                case 'ltr':
                    if (wallChangeType === 1) {
                        this.wall.startP.x = this.wall.endP.x - (this.wallLength1 * 36 + this.wallLength2 * 3);
                    }
                    else {
                        this.wall.endP.x = this.wall.startP.x + this.wallLength1 * 36 + this.wallLength2 * 3;
                    }
                    break;
                case 'rtl':
                    if (wallChangeType === 2) {
                        this.wall.endP.x = this.wall.startP.x - (this.wallLength1 * 36 + this.wallLength2 * 3);
                    }
                    else {
                        this.wall.startP.x = this.wall.endP.x + this.wallLength1 * 36 + this.wallLength2 * 3;
                    }
                    break;
                case 'ttd':
                    if (wallChangeType === 1) {
                        this.wall.startP.y = this.wall.endP.y - (this.wallLength1 * 36 + this.wallLength2 * 3);
                    }
                    else {
                        this.wall.endP.y = this.wall.startP.y + this.wallLength1 * 36 + this.wallLength2 * 3;
                    }
                    break;
                case 'dtt':
                    if (wallChangeType === 2) {
                        this.wall.endP.y = this.wall.startP.y - (this.wallLength1 * 36 + this.wallLength2 * 3);
                    }
                    else {
                        this.wall.startP.y = this.wall.endP.y + this.wallLength1 * 36 + this.wallLength2 * 3;
                    }
                    break;
                case 'other':
                    this.redrawMainLineForother();
                    break;
                default:
                    break;
            }
        }
        this.mainLine.points([this.wall.startP.x, this.wall.startP.y, this.wall.endP.x, this.wall.endP.y]);
        if (this.wall.isSelected) {
            this.mainLine.stroke(this.MAINLINE_SELECTED_COLOR);
            this.mainLine.strokeWidth(this.MAINLINE_SELECTED_WIDTH);
        }
        else {
            this.mainLine.stroke(this.MAINLINE_NORMAL_COLOR);
            this.mainLine.strokeWidth(this.MAINLINE_NORMAL_WIDTH);
        }
    };
    WallComponent.prototype.redrawSignBarLines = function () {
        var me = this;
        switch (this.wallDirection) {
            case 'ltr':
                me.firstSignLine.points([me.wall.startP.x, me.wall.startP.y, me.wall.startP.x, me.wall.startP.y - me.signLineLength]);
                me.secondSignLine.points([me.wall.endP.x, me.wall.endP.y, me.wall.endP.x, me.wall.endP.y - me.signLineLength]);
                break;
            case 'rtl':
                me.firstSignLine.points([me.wall.startP.x, me.wall.startP.y, me.wall.startP.x, me.wall.startP.y + me.signLineLength]);
                me.secondSignLine.points([me.wall.endP.x, me.wall.endP.y, me.wall.endP.x, me.wall.endP.y + me.signLineLength]);
                break;
            case 'ttd':
                me.firstSignLine.points([me.wall.startP.x, me.wall.startP.y, me.wall.startP.x + me.signLineLength, me.wall.startP.y]);
                me.secondSignLine.points([me.wall.endP.x, me.wall.endP.y, me.wall.endP.x + me.signLineLength, me.wall.endP.y]);
                break;
            case 'dtt':
                me.firstSignLine.points([me.wall.startP.x, me.wall.startP.y, me.wall.startP.x - me.signLineLength, me.wall.startP.y]);
                me.secondSignLine.points([me.wall.endP.x, me.wall.endP.y, me.wall.endP.x - me.signLineLength, me.wall.endP.y]);
                break;
            case 'other':
                var d_x = me.wall.endP.x - me.wall.startP.x;
                var d_y = me.wall.endP.y - me.wall.startP.y;
                var dd = Math.sqrt(d_x * d_x + d_y * d_y);
                var d_x_1 = me.signLineLength * d_y / dd;
                var d_y_1 = d_x_1 * d_x / d_y;
                me.firstSignLine.points([me.wall.startP.x, me.wall.startP.y, me.wall.startP.x + d_x_1, me.wall.startP.y - d_y_1]);
                me.secondSignLine.points([me.wall.endP.x, me.wall.endP.y, me.wall.endP.x + d_x_1, me.wall.endP.y - d_y_1]);
                break;
            default:
                break;
        }
    };
    WallComponent.prototype.redrawArrows = function () {
        var me = this;
        switch (me.wallDirection) {
            case 'ltr':
                me.firstArrow.points([me.midPoint.x - 50, me.midPoint.y - me.signLineLength / 2,
                    me.wall.startP.x, this.midPoint.y - me.signLineLength / 2]);
                me.secondArrow.points([me.midPoint.x + 50, me.midPoint.y - me.signLineLength / 2,
                    me.wall.endP.x, me.wall.endP.y - me.signLineLength / 2]);
                break;
            case 'rtl':
                me.firstArrow.points([me.midPoint.x + 50, me.midPoint.y + me.signLineLength / 2,
                    me.wall.startP.x, me.midPoint.y + me.signLineLength / 2]);
                me.secondArrow.points([me.midPoint.x - 50, me.midPoint.y + me.signLineLength / 2,
                    me.wall.endP.x, me.wall.endP.y + me.signLineLength / 2]);
                break;
            case 'ttd':
                me.firstArrow.points([me.midPoint.x + me.signLineLength / 2, me.midPoint.y - 50,
                    me.wall.startP.x + me.signLineLength / 2, me.wall.startP.y]);
                me.secondArrow.points([me.midPoint.x + me.signLineLength / 2, me.midPoint.y + 50,
                    me.wall.endP.x + me.signLineLength / 2, me.wall.endP.y]);
                break;
            case 'dtt':
                me.firstArrow.points([me.midPoint.x - me.signLineLength / 2, me.midPoint.y + 50,
                    me.wall.startP.x - me.signLineLength / 2, me.wall.startP.y]);
                me.secondArrow.points([me.midPoint.x - me.signLineLength / 2, me.midPoint.y - 50,
                    me.wall.endP.x - me.signLineLength / 2, me.wall.endP.y]);
                break;
            case 'other':
                var d_x = me.wall.endP.x - me.wall.startP.x;
                var d_y = me.wall.endP.y - me.wall.startP.y;
                var dd = Math.sqrt(d_x * d_x + d_y * d_y);
                var k = d_x * Math.abs(d_y) / (d_y * Math.abs(d_x));
                var k_x = d_x / Math.abs(d_x);
                var k_y = d_y / Math.abs(d_y);
                var d_x_1 = me.signLineLength * d_y / dd / 2;
                var d_y_1 = d_x_1 * d_x / d_y;
                var d_x_2 = Math.abs(me.TEXTLENGTH_WIDTH * d_y / 2 / dd) * k_x;
                var d_y_2 = Math.abs(d_x_2 * d_y / d_x) * k_y;
                me.firstArrow.points([me.midPoint.x + d_x_1 - d_x_2, me.midPoint.y - d_y_1 - d_y_2,
                    me.wall.startP.x + d_x_1, me.wall.startP.y - d_y_1]);
                me.secondArrow.points([me.midPoint.x + d_x_1 + d_x_2, me.midPoint.y - d_y_1 + d_y_2,
                    me.wall.endP.x + d_x_1, me.wall.endP.y - d_y_1]);
                break;
            default:
                break;
        }
    };
    WallComponent.prototype.getDrawingPanelStyle = function () {
        var me = this;
        // this.calcMidPoint();
        var midPoint = new __WEBPACK_IMPORTED_MODULE_2__module_point__["a" /* Point */]((me.wall.startP.x + me.wall.endP.x) / 2 + me.mainLine.getAbsolutePosition().x, (me.wall.startP.y + me.wall.endP.y) / 2 + me.mainLine.getAbsolutePosition().y);
        var styles = {
            'top.px': midPoint.y,
            'left.px': midPoint.x,
            'position': 'absolute'
        };
        return styles;
    };
    WallComponent.prototype.getValidationColor1 = function () {
        if (this.wallLength1 < 0) {
            return {
                'border': 'solid 2px red'
            };
        }
    };
    WallComponent.prototype.getValidationColor2 = function () {
        if (this.wallLength2 > 11 || this.wallLength2 < 0) {
            return {
                'border': 'solid 2px red'
            };
        }
    };
    WallComponent.prototype.changeLengthEvent = function () {
        this.lengthChangeEvent.emit({
            wallID: this.wallID,
            delta: this.mainLine.getAbsolutePosition()
        });
    };
    WallComponent.prototype.setClickedPoint = function (evt) {
        // var stageABS = this.stage.getAbsolutePosition();
        var mouseEvent = evt.evt;
        if (this.wall.isSelected) {
            switch (this.wall.wallDirection) {
                case 'ltr':
                    this.wall.clickedPoint = new __WEBPACK_IMPORTED_MODULE_2__module_point__["a" /* Point */](mouseEvent.layerX, this.wall.startP.y);
                    break;
                case 'rtl':
                    this.wall.clickedPoint = new __WEBPACK_IMPORTED_MODULE_2__module_point__["a" /* Point */](mouseEvent.layerX, this.wall.startP.y);
                    break;
                case 'ttd':
                    this.wall.clickedPoint = new __WEBPACK_IMPORTED_MODULE_2__module_point__["a" /* Point */](this.wall.startP.x, mouseEvent.layerY);
                    break;
                case 'dtt':
                    this.wall.clickedPoint = new __WEBPACK_IMPORTED_MODULE_2__module_point__["a" /* Point */](this.wall.startP.x, mouseEvent.layerY);
                    break;
                case 'other':
                    this.wall.clickedPoint = new __WEBPACK_IMPORTED_MODULE_2__module_point__["a" /* Point */](mouseEvent.layerX, mouseEvent.layerY);
                    this.wall.clickedPoint.y = (this.wall.endP.y - this.wall.startP.y) / (this.wall.endP.x - this.wall.startP.x) *
                        (mouseEvent.layerX - this.wall.startP.x) + this.wall.startP.y;
                    break;
                default:
                    break;
            }
        }
        var circlie = new __WEBPACK_IMPORTED_MODULE_1_konva__["Circle"]({
            x: this.wall.clickedPoint.x,
            y: this.wall.clickedPoint.y,
            radius: 5,
            fill: '#0f0'
        });
        this.group.add(circlie);
        this.redrawClickedPoint();
        this.layer.draw();
    };
    WallComponent.prototype.redrawClickedPoint = function () {
        if (!this.wall.clickedPoint) {
            this.wall.clickedPoint = new __WEBPACK_IMPORTED_MODULE_2__module_point__["a" /* Point */](this.wall.startP.x, this.wall.startP.y);
        }
        if (this.wall.isSelected) {
            this.clickedCircle.x(this.wall.clickedPoint.x);
            this.clickedCircle.y(this.wall.clickedPoint.y);
            this.clickedCircle.stroke(this.CLICKEDPOINT_CLICKED_STROKE);
            this.clickedCircle.strokeWidth(this.CLICKEDPOINT_CLICKED_WIDTH);
            this.clickedCircle.fill(this.CLICKEDPOINT_CLICKED_FILL);
            this.clickedCircle.radius(this.CLICKEDPOINT_CLICKED_RADIUS);
            this.clickedCircle.show();
        }
        else {
            this.clickedCircle.x(this.wall.clickedPoint.x);
            this.clickedCircle.y(this.wall.clickedPoint.y);
            this.clickedCircle.stroke(this.CLICKEDPOINT_NORMAL_STROKE);
            this.clickedCircle.strokeWidth(this.CLICKEDPOINT_NORMAL_WIDTH);
            this.clickedCircle.fill(this.CLICKEDPOINT_NORMAL_FILL);
            this.clickedCircle.radius(this.CLICKEDPOINT_NORMAL_RADIUS);
            this.clickedCircle.hide();
        }
        var stageABS = this.stage.getAbsolutePosition();
        if (this.wall.isSelected) {
            switch (this.wall.wallDirection) {
                case 'ltr':
                    this.clickedCircle.x(this.wall.clickedPoint.x - stageABS.x);
                    break;
                case 'rtl':
                    this.clickedCircle.x(this.wall.clickedPoint.x - stageABS.x);
                    break;
                case 'ttd':
                    this.clickedCircle.y(this.wall.clickedPoint.y - stageABS.y);
                    break;
                case 'dtt':
                    this.clickedCircle.y(this.wall.clickedPoint.y - stageABS.y);
                    break;
                default:
                    break;
            }
        }
        this.layer.draw();
    };
    WallComponent.prototype.calculateLength = function () {
        var me = this;
        var length = Math.sqrt((me.wall.startP.x - me.wall.endP.x) * (me.wall.startP.x - me.wall.endP.x)
            + (me.wall.startP.y - me.wall.endP.y) * (me.wall.startP.y - me.wall.endP.y));
        me.wallLength = length;
        this.wallLength1 = Math.floor(length / 36);
        this.wallLength2 = Number((length % 36 / 3).toFixed(0));
        if (this.wallLength2 === 12) {
            this.wallLength1++;
            this.wallLength2 = 0;
        }
    };
    WallComponent.prototype.allNotifyToButtonsSevices = function () {
        var me = this;
        if (me.wall.isSelected) {
            me._lockButtonService.wallClicked(me.wall);
            me._strecherButtonService.wallClicked(me.wall);
            me._doorButtonService.wallClicked(me.wall);
            __WEBPACK_IMPORTED_MODULE_8__module_evented__["a" /* Evented */].fire('wallClicked', me.wall);
        }
        else {
            me._lockButtonService.wallClicked(null);
            me._strecherButtonService.wallClicked(null);
            me._doorButtonService.wallClicked(null);
            __WEBPACK_IMPORTED_MODULE_8__module_evented__["a" /* Evented */].fire('wallClicked', null);
        }
    };
    WallComponent.prototype.drawStrecherToolParts = function () {
        if (!this.wall.isStreching) {
            return;
        }
        var me = this;
        this.strechingToolButtonGroup = new __WEBPACK_IMPORTED_MODULE_1_konva__["Group"]();
        this.strechingCenterCircle = new __WEBPACK_IMPORTED_MODULE_1_konva__["Circle"]({
            x: me.midPoint.x,
            y: me.midPoint.y,
            radius: me.STRECHING_CENTER_CIRCLE_RADIUS,
            //fill: me.STRECHING_CENTER_CIRCLE_FILL,
            stroke: me.STRECHING_CENTER_CIRCLE_STROKE,
            strokeWidth: me.STRECHING_CENTER_CIRCLE_STROKEWIDTH,
            draggable: true,
        });
        this.strechingCenterCircleForBackground = new __WEBPACK_IMPORTED_MODULE_1_konva__["Circle"]({
            x: me.midPoint.x,
            y: me.midPoint.y,
            radius: me.STRECHING_CENTER_CIRCLE_RADIUS,
            fill: me.STRECHING_CENTER_CIRCLE_FILL,
            stroke: me.STRECHING_CENTER_CIRCLE_STROKE,
            strokeWidth: me.STRECHING_CENTER_CIRCLE_STROKEWIDTH,
        });
        this.strechingCenterCircle.on('dragmove', function () {
            var newPoint = new __WEBPACK_IMPORTED_MODULE_2__module_point__["a" /* Point */](this.getX(), this.getY());
            var delta = {
                d_x: newPoint.x - me.oldStrechingPoint.x,
                d_y: newPoint.y - me.oldStrechingPoint.y
            };
            me.oldStrechingPoint = new __WEBPACK_IMPORTED_MODULE_2__module_point__["a" /* Point */](this.getX(), this.getY());
            me.strecherDrage(delta);
        });
        this.strechingCenterCircle.on('dragstart', function () {
            me.oldStrechingPoint = new __WEBPACK_IMPORTED_MODULE_2__module_point__["a" /* Point */](this.getX(), this.getY());
        });
        this.strechingCenterCircle.on('dblclick', function () {
            me.wall.isStreching = false;
            // me.strecherEvent.emit(this.wall);
            me.strechingToolButtonGroup.hide();
        });
        this.strechingFirstPCircle = new __WEBPACK_IMPORTED_MODULE_1_konva__["Circle"]({
            x: me.wall.startP.x,
            y: me.wall.startP.y,
            radius: me.STRECHING_FIRSTP_CIRCLE_RADIUS,
            fill: me.STRECHING_FIRSTP_CIRCLE_FILL,
            stroke: me.STRECHING_FIRSTP_CIRCLE_STROKE,
            strokeWidth: me.STRECHING_FIRSTP_CIRCLE_STROKEWIDTH
        });
        this.strechingEndPCircle = new __WEBPACK_IMPORTED_MODULE_1_konva__["Circle"]({
            x: me.wall.endP.x,
            y: me.wall.endP.y,
            radius: me.STRECHING_FIRSTP_CIRCLE_RADIUS,
            fill: me.STRECHING_FIRSTP_CIRCLE_FILL,
            stroke: me.STRECHING_FIRSTP_CIRCLE_STROKE,
            strokeWidth: me.STRECHING_FIRSTP_CIRCLE_STROKEWIDTH
        });
        //adding arrows
        switch (this.wall.wallDirection) {
            case 'ltr':
                this.strechingArrow1 = new __WEBPACK_IMPORTED_MODULE_1_konva__["Arrow"]({
                    points: [me.midPoint.x, me.midPoint.y, me.midPoint.x, me.midPoint.y + me.STRECHING_CENTER_CIRCLE_RADIUS - 3]
                });
                this.strechingArrow2 = new __WEBPACK_IMPORTED_MODULE_1_konva__["Arrow"]({
                    points: [me.midPoint.x, me.midPoint.y, me.midPoint.x, me.midPoint.y - me.STRECHING_CENTER_CIRCLE_RADIUS + 3]
                });
                break;
            case 'rtl':
                this.strechingArrow1 = new __WEBPACK_IMPORTED_MODULE_1_konva__["Arrow"]({
                    points: [me.midPoint.x, me.midPoint.y, me.midPoint.x, me.midPoint.y - me.STRECHING_CENTER_CIRCLE_RADIUS + 3]
                });
                this.strechingArrow2 = new __WEBPACK_IMPORTED_MODULE_1_konva__["Arrow"]({
                    points: [me.midPoint.x, me.midPoint.y, me.midPoint.x, me.midPoint.y + me.STRECHING_CENTER_CIRCLE_RADIUS - 3]
                });
                break;
            case 'ttd':
                this.strechingArrow1 = new __WEBPACK_IMPORTED_MODULE_1_konva__["Arrow"]({
                    points: [me.midPoint.x, me.midPoint.y, me.midPoint.x + me.STRECHING_CENTER_CIRCLE_RADIUS - 3, me.midPoint.y]
                });
                this.strechingArrow2 = new __WEBPACK_IMPORTED_MODULE_1_konva__["Arrow"]({
                    points: [me.midPoint.x, me.midPoint.y, me.midPoint.x - me.STRECHING_CENTER_CIRCLE_RADIUS + 3, me.midPoint.y]
                });
                break;
            case 'dtt':
                this.strechingArrow1 = new __WEBPACK_IMPORTED_MODULE_1_konva__["Arrow"]({
                    points: [me.midPoint.x, me.midPoint.y, me.midPoint.x - me.STRECHING_CENTER_CIRCLE_RADIUS + 3, me.midPoint.y]
                });
                this.strechingArrow2 = new __WEBPACK_IMPORTED_MODULE_1_konva__["Arrow"]({
                    points: [me.midPoint.x, me.midPoint.y, me.midPoint.x + me.STRECHING_CENTER_CIRCLE_RADIUS - 3, me.midPoint.y]
                });
                break;
            case 'other':
                this.strechingArrow1 = new __WEBPACK_IMPORTED_MODULE_1_konva__["Arrow"]({
                    points: [me.midPoint.x, me.midPoint.y, me.midPoint.x - me.STRECHING_CENTER_CIRCLE_RADIUS + 3, me.midPoint.y]
                });
                this.strechingArrow2 = new __WEBPACK_IMPORTED_MODULE_1_konva__["Arrow"]({
                    points: [me.midPoint.x, me.midPoint.y, me.midPoint.x + me.STRECHING_CENTER_CIRCLE_RADIUS - 3, me.midPoint.y]
                });
                break;
        }
        this.strechingArrow1.pointerLength(this.STRECHING_ARROW_POINTER_LENGTH);
        this.strechingArrow1.pointerWidth(this.STRECHING_ARROW_POINTER_WIDTH);
        this.strechingArrow1.fill(this.STRECHING_ARROW_FILL);
        this.strechingArrow1.stroke(this.STRECHING_ARROW_STROKE);
        this.strechingArrow1.strokeWidth(this.STRECHING_ARROW_STROKEWIDTH);
        this.strechingArrow2.pointerLength(this.STRECHING_ARROW_POINTER_LENGTH);
        this.strechingArrow2.pointerWidth(this.STRECHING_ARROW_POINTER_WIDTH);
        this.strechingArrow2.fill(this.STRECHING_ARROW_FILL);
        this.strechingArrow2.stroke(this.STRECHING_ARROW_STROKE);
        this.strechingArrow2.strokeWidth(this.STRECHING_ARROW_STROKEWIDTH);
        this.strechingToolButtonGroup.add(this.strechingEndPCircle);
        this.strechingToolButtonGroup.add(this.strechingFirstPCircle);
        this.strechingToolButtonGroup.add(this.strechingCenterCircleForBackground);
        this.strechingToolButtonGroup.add(this.strechingArrow1);
        this.strechingToolButtonGroup.add(this.strechingArrow2);
        this.strechingToolButtonGroup.add(this.strechingCenterCircle);
        this.group.add(this.strechingToolButtonGroup);
    };
    WallComponent.prototype.redrawStrecherToolParts = function () {
        var me = this;
        if (this.wall.isStreching && this.wall.isSelected) {
            this.strechingToolButtonGroup.show();
            this.strechingCenterCircle.x(me.midPoint.x);
            this.strechingCenterCircle.y(me.midPoint.y);
            this.strechingFirstPCircle.x(me.wall.startP.x);
            this.strechingFirstPCircle.y(me.wall.startP.y);
            this.strechingEndPCircle.x(me.wall.endP.x);
            this.strechingEndPCircle.y(me.wall.endP.y);
            this.strechingCenterCircleForBackground.x(me.midPoint.x);
            this.strechingCenterCircleForBackground.y(me.midPoint.y);
            switch (this.wall.wallDirection) {
                case 'ltr':
                    this.strechingArrow1.points([me.midPoint.x, me.midPoint.y, me.midPoint.x, me.midPoint.y + me.STRECHING_CENTER_CIRCLE_RADIUS - 3]);
                    this.strechingArrow2.points([me.midPoint.x, me.midPoint.y, me.midPoint.x, me.midPoint.y - me.STRECHING_CENTER_CIRCLE_RADIUS + 3]);
                    break;
                case 'rtl':
                    this.strechingArrow1.points([me.midPoint.x, me.midPoint.y, me.midPoint.x, me.midPoint.y - me.STRECHING_CENTER_CIRCLE_RADIUS + 3]);
                    this.strechingArrow2.points([me.midPoint.x, me.midPoint.y, me.midPoint.x, me.midPoint.y + me.STRECHING_CENTER_CIRCLE_RADIUS - 3]);
                    break;
                case 'ttd':
                    this.strechingArrow1.points([me.midPoint.x, me.midPoint.y, me.midPoint.x + me.STRECHING_CENTER_CIRCLE_RADIUS - 3, me.midPoint.y]);
                    this.strechingArrow2.points([me.midPoint.x, me.midPoint.y, me.midPoint.x - me.STRECHING_CENTER_CIRCLE_RADIUS + 3, me.midPoint.y]);
                    break;
                case 'dtt':
                    this.strechingArrow1.points([me.midPoint.x, me.midPoint.y, me.midPoint.x - me.STRECHING_CENTER_CIRCLE_RADIUS + 3, me.midPoint.y]);
                    this.strechingArrow2.points([me.midPoint.x, me.midPoint.y, me.midPoint.x + me.STRECHING_CENTER_CIRCLE_RADIUS - 3, me.midPoint.y]);
                    break;
                case 'other':
                    this.strechingArrow1.points([me.midPoint.x, me.midPoint.y, me.midPoint.x - me.STRECHING_CENTER_CIRCLE_RADIUS + 3, me.midPoint.y]);
                    this.strechingArrow2.points([me.midPoint.x, me.midPoint.y, me.midPoint.x + me.STRECHING_CENTER_CIRCLE_RADIUS - 3, me.midPoint.y]);
                    break;
            }
        }
        else {
            if (this.strechingToolButtonGroup) {
                this.strechingToolButtonGroup.hide();
            }
        }
        this.clickedCircle.hide();
    };
    WallComponent.prototype.strecherDrage = function (delta) {
        //if (this.wall.isStreching) {
        this.wall.startP = new __WEBPACK_IMPORTED_MODULE_2__module_point__["a" /* Point */](this.wall.startP.x + delta.d_x, this.wall.startP.y + delta.d_y);
        this.wall.endP = new __WEBPACK_IMPORTED_MODULE_2__module_point__["a" /* Point */](this.wall.endP.x + delta.d_x, this.wall.endP.y + delta.d_y);
        this.clickedCircle.hide();
        this.wall.deltaForStreching = delta;
        this.strecherEvent.emit(this.wall);
        //}
    };
    WallComponent.prototype.drawDoor = function () {
        this.wall.doors.map(function (door) {
            door.redrawDoorRect();
            door.redrawAll();
        });
    };
    WallComponent.prototype.redrawMainLineForother = function () {
        var me = this;
        var new_length = me.wallLength1 * 36 + me.wallLength2 * 3;
        var ratio = new_length / this.wallLength;
        var d_l = new_length - this.wallLength;
        var d_x = this.wall.endP.x - this.wall.startP.x;
        var d_y = this.wall.endP.y - this.wall.startP.y;
        var startWall = null;
        var endWall = null;
        this._currentRoomService.currentRoom.walls.map(function (wall) {
            if (wall.wallID === me.wall.startID) {
                startWall = wall;
            }
            if (wall.wallID === me.wall.endID) {
                endWall = wall;
            }
        });
        var delta_1 = 0;
        var delta_2 = 0;
        switch (endWall.wallDirection) {
            case 'ltr':
                delta_1 = startWall.endP.y - endWall.startP.y;
                delta_2 = endWall.startP.x - startWall.endP.x;
                break;
            case 'rtl':
                delta_1 = endWall.startP.y - startWall.endP.y;
                delta_2 = startWall.endP.x - endWall.startP.x;
                break;
            case 'ttd':
                delta_1 = endWall.startP.x - startWall.endP.x;
                delta_2 = endWall.startP.y - startWall.endP.y;
                break;
            case 'dtt':
                delta_1 = startWall.endP.x - endWall.startP.x;
                delta_2 = startWall.endP.y - endWall.startP.y;
                break;
            case 'other':
                var tanA = d_y / d_x;
                var dxX = d_l / Math.cos(Math.atan(tanA));
                var dyY = d_l / Math.sin(Math.atan(tanA));
                this.wall.endP.x += dxX;
                this.wall.endP.y += dyY;
                this.wall.deltaForLengthChange = {
                    d_x: dxX,
                    d_y: dyY
                };
                break;
            default:
                break;
        }
        var delta_1_ = delta_1 * ratio;
        var delta_2_ = delta_2 * ratio;
        var dd_1 = delta_1_ - delta_1;
        var dd_2 = delta_2_ - delta_2;
        switch (endWall.wallDirection) {
            case 'ltr':
                me.wall.startP.y += dd_1;
                me.wall.endP.x += dd_2;
                break;
            case 'rtl':
                me.wall.startP.y -= dd_1;
                me.wall.endP.x -= dd_2;
                break;
            case 'ttd':
                me.wall.startP.x -= dd_1;
                me.wall.endP.y += dd_2;
                break;
            case 'dtt':
                me.wall.startP.x += dd_1;
                me.wall.endP.y -= dd_2;
                break;
            default:
                break;
        }
    };
    WallComponent.prototype.removeAll = function () {
        var me = this;
        me.group.remove();
        me.layer.draw();
        me.wall.isSelected = false;
        me.allNotifyToButtonsSevices();
        me.wall.doors = [];
        me.wall.stepdowns = [];
        me.wall.halfwalls = [];
        me.wall.closets.map(function (closet) {
            closet.removeAll();
        });
        me.wall.closets = [];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_konva__["Layer"])
    ], WallComponent.prototype, "layer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_konva__["Stage"])
    ], WallComponent.prototype, "stage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__module_wall__["a" /* Wall */]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__module_wall__["a" /* Wall */]])
    ], WallComponent.prototype, "_wall", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], WallComponent.prototype, "changedTime", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], WallComponent.prototype, "lengthChangeEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], WallComponent.prototype, "clickMainLineEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], WallComponent.prototype, "strecherEvent", void 0);
    WallComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-wall',
            template: __webpack_require__("../../../../../src/app/wall/wall.component.html"),
            styles: [__webpack_require__("../../../../../src/app/wall/wall.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_lockbutton_service__["a" /* LockbuttonService */],
            __WEBPACK_IMPORTED_MODULE_5__services_strecherbutton_service__["a" /* StrecherbuttonService */],
            __WEBPACK_IMPORTED_MODULE_6__services_doorbutton_service__["a" /* DoorbuttonService */],
            __WEBPACK_IMPORTED_MODULE_7__services_socket_service__["a" /* SocketService */],
            __WEBPACK_IMPORTED_MODULE_9__services_currentroom_service__["a" /* CurrentroomService */]])
    ], WallComponent);
    return WallComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map