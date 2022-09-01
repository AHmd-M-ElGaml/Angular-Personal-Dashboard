(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-bookmark/add-bookmark.component.ts":
/*!********************************************************!*\
  !*** ./src/app/add-bookmark/add-bookmark.component.ts ***!
  \********************************************************/
/*! exports provided: AddBookmarkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBookmarkComponent", function() { return AddBookmarkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_bookmark_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/bookmark.model */ "./src/app/shared/bookmark.model.ts");
/* harmony import */ var _shared_bookmark_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/bookmark.service */ "./src/app/shared/bookmark.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/notification.service */ "./src/app/shared/notification.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







class AddBookmarkComponent {
    constructor(bookmarkService, router, notificationService) {
        this.bookmarkService = bookmarkService;
        this.router = router;
        this.notificationService = notificationService;
    }
    ngOnInit() {
    }
    onFormSubmit(form) {
        const { name, url } = form.value;
        const bookmark = new _shared_bookmark_model__WEBPACK_IMPORTED_MODULE_1__["Bookmark"](name, url);
        this.bookmarkService.addBookmark(bookmark);
        this.router.navigateByUrl("/bookmarks");
        this.notificationService.show('Created bookmark!');
    }
}
AddBookmarkComponent.ɵfac = function AddBookmarkComponent_Factory(t) { return new (t || AddBookmarkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_bookmark_service__WEBPACK_IMPORTED_MODULE_2__["BookmarkService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"])); };
AddBookmarkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddBookmarkComponent, selectors: [["app-add-bookmark"]], decls: 16, vars: 0, consts: [[1, "add-bookmark-wrapper", "container", "has-blurred-white-bg"], [1, "is-bold"], ["ngNativeValidate", "", 3, "ngSubmit"], ["form", "ngForm"], [1, "form-field"], ["ngModel", "", "name", "name", "type", "text", "placeholder", "Name: Wikipedia", 1, "textbox"], ["textField", "ngModel"], ["ngModel", "", "name", "url", "type", "url", "placeholder", "URL: https://wikipedia.com", "required", "", 1, "textbox"], [1, "btns-container"], ["routerLink", "../", 1, "btn"], [1, "btn", "align-end"]], template: function AddBookmarkComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Bookmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddBookmarkComponent_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx.onFormSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Create Bookmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".add-bookmark-wrapper[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-radius: 8px;\n  max-height: 100%;\n  overflow: auto;\n  width: 96%;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 26px;\n  margin-bottom: 14px;\n  color: rgba(0, 0, 0, 0.7);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWJvb2ttYXJrL0M6XFxVc2Vyc1xcTUdcXERvd25sb2Fkc1xcTmV3IGZvbGRlclxcYW5ndWxhci1wZXJzb25hbC1kYXNoYm9hcmQtbWFpbi9zcmNcXGFwcFxcYWRkLWJvb2ttYXJrXFxhZGQtYm9va21hcmsuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkZC1ib29rbWFyay9hZGQtYm9va21hcmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvYWRkLWJvb2ttYXJrL2FkZC1ib29rbWFyay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtYm9va21hcmstd3JhcHBlciB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHdpZHRoOiA5NiU7XG59XG5oMiB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgY29sb3I6cmdiYShibGFjaywgMC43KVxufVxuIiwiLmFkZC1ib29rbWFyay13cmFwcGVyIHtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgd2lkdGg6IDk2JTtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDI2cHg7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddBookmarkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-bookmark',
                templateUrl: './add-bookmark.component.html',
                styleUrls: ['./add-bookmark.component.scss']
            }]
    }], function () { return [{ type: _shared_bookmark_service__WEBPACK_IMPORTED_MODULE_2__["BookmarkService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _shared_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/add-note/add-note.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-note/add-note.component.ts ***!
  \************************************************/
/*! exports provided: AddNoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNoteComponent", function() { return AddNoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_note_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/note.model */ "./src/app/shared/note.model.ts");
/* harmony import */ var _shared_note_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/note.service */ "./src/app/shared/note.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/notification.service */ "./src/app/shared/notification.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function AddNoteComponent_ng_container_8_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a note title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddNoteComponent_ng_container_8_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Title must be at least 3 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddNoteComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddNoteComponent_ng_container_8_p_1_Template, 2, 0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddNoteComponent_ng_container_8_p_2_Template, 2, 0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.minlength);
} }
class AddNoteComponent {
    constructor(noteService, router, notificationService) {
        this.noteService = noteService;
        this.router = router;
        this.notificationService = notificationService;
    }
    ngOnInit() {
    }
    onFormSubmit(form) {
        console.log(form);
        if (form.invalid)
            return this.showValidationErrors = true;
        const note = new _shared_note_model__WEBPACK_IMPORTED_MODULE_1__["Note"](form.value.title, form.value.content);
        this.noteService.addNote(note);
        this.router.navigateByUrl("/notes");
        this.notificationService.show('Created Note');
    }
}
AddNoteComponent.ɵfac = function AddNoteComponent_Factory(t) { return new (t || AddNoteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_note_service__WEBPACK_IMPORTED_MODULE_2__["NoteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"])); };
AddNoteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddNoteComponent, selectors: [["app-add-note"]], decls: 16, vars: 1, consts: [[1, "add-note-wrapper", "container", "has-blurred-white-bg"], [1, "is-bold"], [3, "ngSubmit"], ["form", "ngForm"], [1, "form-field"], ["ngModel", "", "name", "title", "type", "text", "placeholder", "Enter note title...", "required", "", "minlength", "3", 1, "textbox"], ["titleField", "ngModel"], [4, "ngIf"], ["ngModel", "", "name", "content", "placeholder", "Enter note content...", 1, "textarea"], [1, "btns-container"], ["routerLink", "../", 1, "btn"], [1, "btn", "align-end"]], template: function AddNoteComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "New Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddNoteComponent_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx.onFormSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AddNoteComponent_ng_container_8_Template, 3, 2, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Create Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showValidationErrors && _r1.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".add-note-wrapper[_ngcontent-%COMP%] {\n  max-height: 100%;\n  overflow: auto;\n  width: 96%;\n  padding: 18px;\n  border-radius: 5px;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 26px;\n  margin-bottom: 16px;\n  color: rgba(0, 0, 0, 0.7);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLW5vdGUvQzpcXFVzZXJzXFxNR1xcRG93bmxvYWRzXFxOZXcgZm9sZGVyXFxhbmd1bGFyLXBlcnNvbmFsLWRhc2hib2FyZC1tYWluL3NyY1xcYXBwXFxhZGQtbm90ZVxcYWRkLW5vdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkZC1ub3RlL2FkZC1ub3RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2FkZC1ub3RlL2FkZC1ub3RlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZC1ub3RlLXdyYXBwZXIge1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgd2lkdGg6IDk2JTtcbiAgICBwYWRkaW5nOiAxOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbmgyIHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBjb2xvcjpyZ2JhKGJsYWNrLCAwLjcpXG59XG4iLCIuYWRkLW5vdGUtd3JhcHBlciB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB3aWR0aDogOTYlO1xuICBwYWRkaW5nOiAxOHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddNoteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-note',
                templateUrl: './add-note.component.html',
                styleUrls: ['./add-note.component.scss']
            }]
    }], function () { return [{ type: _shared_note_service__WEBPACK_IMPORTED_MODULE_2__["NoteService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _shared_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/add-todo/add-todo.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-todo/add-todo.component.ts ***!
  \************************************************/
/*! exports provided: AddTodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTodoComponent", function() { return AddTodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_todo_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/todo.model */ "./src/app/shared/todo.model.ts");
/* harmony import */ var _shared_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/todo.service */ "./src/app/shared/todo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/notification.service */ "./src/app/shared/notification.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function AddTodoComponent_ng_container_8_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter some text for this todo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddTodoComponent_ng_container_8_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "The todo text must be at least 3 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddTodoComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddTodoComponent_ng_container_8_p_1_Template, 2, 0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddTodoComponent_ng_container_8_p_2_Template, 2, 0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.minlength);
} }
class AddTodoComponent {
    constructor(todoService, router, notificationService) {
        this.todoService = todoService;
        this.router = router;
        this.notificationService = notificationService;
    }
    ngOnInit() {
    }
    onFormSubmit(form) {
        if (form.invalid)
            return this.showValidationErrors = true;
        const todo = new _shared_todo_model__WEBPACK_IMPORTED_MODULE_1__["Todo"](form.value.text);
        this.todoService.addTodo(todo);
        this.router.navigateByUrl('/todos');
        this.notificationService.show('Todo created!');
    }
}
AddTodoComponent.ɵfac = function AddTodoComponent_Factory(t) { return new (t || AddTodoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"])); };
AddTodoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddTodoComponent, selectors: [["app-add-todo"]], decls: 14, vars: 1, consts: [[1, "add-todo-wrapper", "container", "has-blurred-white-bg"], [1, "is-bold"], [3, "ngSubmit"], ["form", "ngForm"], [1, "form-field"], ["ngModel", "", "name", "text", "type", "text", "placeholder", "Enter todo text...", "required", "", "minlength", "3", 1, "textbox"], ["textField", "ngModel"], [4, "ngIf"], [1, "btns-container"], ["routerLink", "../", 1, "btn"], [1, "btn", "align-end"]], template: function AddTodoComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Todo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddTodoComponent_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx.onFormSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AddTodoComponent_ng_container_8_Template, 3, 2, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Create Todo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showValidationErrors && _r1.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".add-todo-wrapper[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  padding: 20px;\n  width: 96%;\n  max-height: 100%;\n  overflow: auto;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 26px;\n  margin-bottom: 14px;\n  color: rgba(0, 0, 0, 0.7);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXRvZG8vQzpcXFVzZXJzXFxNR1xcRG93bmxvYWRzXFxOZXcgZm9sZGVyXFxhbmd1bGFyLXBlcnNvbmFsLWRhc2hib2FyZC1tYWluL3NyY1xcYXBwXFxhZGQtdG9kb1xcYWRkLXRvZG8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkZC10b2RvL2FkZC10b2RvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBRENBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2FkZC10b2RvL2FkZC10b2RvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZC10b2RvLXdyYXBwZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHdpZHRoOiA5NiU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cbmgyIHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICBjb2xvcjpyZ2JhKGJsYWNrLCAwLjcpXG5cbn1cbiIsIi5hZGQtdG9kby13cmFwcGVyIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogOTYlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuaDIge1xuICBmb250LXNpemU6IDI2cHg7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddTodoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-todo',
                templateUrl: './add-todo.component.html',
                styleUrls: ['./add-todo.component.scss']
            }]
    }], function () { return [{ type: _shared_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _shared_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_bookmark_add_bookmark_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-bookmark/add-bookmark.component */ "./src/app/add-bookmark/add-bookmark.component.ts");
/* harmony import */ var _add_note_add_note_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-note/add-note.component */ "./src/app/add-note/add-note.component.ts");
/* harmony import */ var _add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-todo/add-todo.component */ "./src/app/add-todo/add-todo.component.ts");
/* harmony import */ var _bookmarks_bookmarks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bookmarks/bookmarks.component */ "./src/app/bookmarks/bookmarks.component.ts");
/* harmony import */ var _edit_bookmark_edit_bookmark_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-bookmark/edit-bookmark.component */ "./src/app/edit-bookmark/edit-bookmark.component.ts");
/* harmony import */ var _edit_note_edit_note_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-note/edit-note.component */ "./src/app/edit-note/edit-note.component.ts");
/* harmony import */ var _edit_todo_edit_todo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-todo/edit-todo.component */ "./src/app/edit-todo/edit-todo.component.ts");
/* harmony import */ var _manage_bookmarks_manage_bookmarks_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./manage-bookmarks/manage-bookmarks.component */ "./src/app/manage-bookmarks/manage-bookmarks.component.ts");
/* harmony import */ var _notes_notes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./notes/notes.component */ "./src/app/notes/notes.component.ts");
/* harmony import */ var _todos_todos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./todos/todos.component */ "./src/app/todos/todos.component.ts");














const routes = [
    { path: 'bookmarks', component: _bookmarks_bookmarks_component__WEBPACK_IMPORTED_MODULE_5__["BookmarksComponent"], data: { tab: 1 } },
    { path: 'bookmarks/add', component: _add_bookmark_add_bookmark_component__WEBPACK_IMPORTED_MODULE_2__["AddBookmarkComponent"] },
    { path: 'bookmarks/manage', component: _manage_bookmarks_manage_bookmarks_component__WEBPACK_IMPORTED_MODULE_9__["ManageBookmarksComponent"], children: [
            { path: ':id', component: _edit_bookmark_edit_bookmark_component__WEBPACK_IMPORTED_MODULE_6__["EditBookmarkComponent"] }
        ] },
    { path: 'todos', component: _todos_todos_component__WEBPACK_IMPORTED_MODULE_11__["TodosComponent"], data: { tab: 2 } },
    { path: 'todos/add', component: _add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_4__["AddTodoComponent"] },
    { path: 'todos/:id', component: _edit_todo_edit_todo_component__WEBPACK_IMPORTED_MODULE_8__["EditTodoComponent"] },
    { path: 'notes', component: _notes_notes_component__WEBPACK_IMPORTED_MODULE_10__["NotesComponent"], data: { tab: 3 } },
    { path: 'notes/add', component: _add_note_add_note_component__WEBPACK_IMPORTED_MODULE_3__["AddNoteComponent"] },
    { path: 'notes/:id', component: _edit_note_edit_note_component__WEBPACK_IMPORTED_MODULE_7__["EditNoteComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabs/tabs.component */ "./src/app/tabs/tabs.component.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/notification/notification.component.ts");










function AppComponent_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("load", function AppComponent_img_1_Template_img_load_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.onBGImageLoad($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bg_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", bg_r3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("@bgAnim", undefined);
} }
function AppComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.changeBGImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@fadeAnim", undefined);
} }
const baseStyles = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
    // display: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
});
class AppComponent {
    constructor() {
        this.backgrounds = [
            'https://images.unsplash.com/photo-1434907652076-85f8401482c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920'
        ];
    }
    ngOnInit() {
        this.dateTime = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => {
            return new Date();
        }));
    }
    prepareRoute(outlet) {
        if (outlet.isActivated) {
            const tab = outlet.activatedRouteData['tab'];
            if (!tab)
                return 'secondary';
            return tab;
        }
    }
    changeBGImage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadingBGImage = true;
            const result = yield fetch('https://source.unsplash.com/random/1920x1080', {
                method: 'HEAD'
            });
            const alreadyGot = this.backgrounds.includes(result.url);
            if (alreadyGot) {
                // this is the same image as we currently have, so re-run the function
                return this.changeBGImage();
            }
            this.backgrounds.push(result.url);
        });
    }
    onBGImageLoad(imgEvent) {
        // BG image has loaded, now remove the old BG image from the backgrounds array
        const imgElement = imgEvent.target;
        const src = imgElement.src;
        this.backgrounds = this.backgrounds.filter(b => b === src);
        this.loadingBGImage = false;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 18, vars: 15, consts: [[1, "app-wrapper"], ["class", "bg-img", 3, "src", "load", 4, "ngFor", "ngForOf"], ["class", "btn change-bg-btn", 3, "click", 4, "ngIf"], [1, "top-section"], [1, "content-section"], ["outlet", "outlet"], [1, "bottom-section"], [1, "bg-img", 3, "src", "load"], [1, "btn", "change-bg-btn", 3, "click"], [1, "material-icons"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_img_1_Template, 1, 2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppComponent_div_2_Template, 3, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "router-outlet", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "app-tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "app-notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.backgrounds.reverse());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loadingBGImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 8, ctx.dateTime), "HH:mm"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](10, 10, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 13, ctx.dateTime), "d MMMM y"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@routeAnim", ctx.prepareRoute(_r2));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_7__["TabsComponent"], _notification_notification_component__WEBPACK_IMPORTED_MODULE_8__["NotificationComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".app-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.bg-img[_ngcontent-%COMP%] {\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  z-index: -1;\n}\n\n.top-section[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 0 20px;\n}\n\n.top-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 90px;\n  font-weight: bold;\n  color: #f5f5f5;\n  text-shadow: 0px 1px 7px rgba(0, 0, 0, 0.1);\n}\n\n.top-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: white;\n  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n}\n\n.content-section[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  min-height: 0;\n}\n\n.bottom-section[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.bottom-section[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.change-bg-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  padding: 10px;\n  background: rgba(0, 0, 0, 0.1);\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.change-bg-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.3);\n  color: white;\n}\n\n.change-bg-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(1px);\n}\n\n@media (min-width: 769px) {\n  .top-section[_ngcontent-%COMP%] {\n    padding: 60px 0 20px;\n  }\n  .top-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 90px;\n  }\n  .top-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n\n@media (max-width: 768px) {\n  .top-section[_ngcontent-%COMP%] {\n    padding: 90px 0 70px;\n  }\n  .top-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 120px;\n  }\n  .top-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n}\n\n@media (max-width: 375px) {\n  .top-section[_ngcontent-%COMP%] {\n    padding: 75px 0 5px;\n  }\n  .top-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 80px;\n  }\n  .top-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxNR1xcRG93bmxvYWRzXFxOZXcgZm9sZGVyXFxhbmd1bGFyLXBlcnNvbmFsLWRhc2hib2FyZC1tYWluL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FEQ0k7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsMkNBQUE7QUNDUjs7QURFSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7QUNBUjs7QURJQTtFQUVJLFlBQUE7RUFDQSxhQUFBO0FDRko7O0FEU0E7RUFFSSxhQUFBO0FDUEo7O0FEWUk7RUFDSSxZQUFBO0FDVlI7O0FEY0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUVBLDhCQUFBO0VBQ0EsK0JBQUE7QUNaSjs7QURjSTtFQUNJLDhCQUFBO0VBQ0EsWUFBQTtBQ1pSOztBRGVJO0VBQ0ksMEJBQUE7QUNiUjs7QURpQkE7RUFDRTtJQUNFLG9CQUFBO0VDZEY7RURlRTtJQUNJLGVBQUE7RUNiTjtFRGVFO0lBQ0ksZUFBQTtFQ2JOO0FBQ0Y7O0FEZ0JBO0VBQ0U7SUFDRSxvQkFBQTtFQ2RGO0VEZUU7SUFDSSxnQkFBQTtFQ2JOO0VEZUU7SUFDSSxlQUFBO0VDYk47QUFDRjs7QURnQkE7RUFDRTtJQUNFLG1CQUFBO0VDZEY7RURlRTtJQUNJLGVBQUE7RUNiTjtFRGVFO0lBQ0ksZUFBQTtFQ2JOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5iZy1pbWcge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgei1pbmRleDogLTE7XG59XG5cbi50b3Atc2VjdGlvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDQwcHggMCAyMHB4O1xuXG4gICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDkwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogI2Y1ZjVmNTtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAxcHggN3B4IHJnYmEoYmxhY2ssIDAuMSk7XG4gICAgfVxuXG4gICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAxcHggNHB4IHJnYmEoYmxhY2ssIDAuMSk7XG4gICAgfVxufVxuXG4uY29udGVudC1zZWN0aW9uIHtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIG1pbi1oZWlnaHQ6IDA7XG4gICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vIGxlZnQ6IDUwJTtcbiAgICAvLyB0b3A6IDUwJTtcbiAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmJvdHRvbS1zZWN0aW9uIHtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JhbDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvLyBsZWZ0OiA1MCU7XG4gICAgLy8gYm90dG9tOiA0cHg7XG4gICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIGFwcC10YWJzIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbn1cblxuLmNoYW5nZS1iZy1idG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgcGFkZGluZzogMTBweDtcblxuICAgIGJhY2tncm91bmQ6IHJnYmEoYmxhY2ssIDAuMSk7XG4gICAgY29sb3I6IHJnYmEod2hpdGUsIDAuNyk7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYShibGFjaywgMC4zKTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgICY6YWN0aXZlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XG4gICAgfVxufVxuLy8gTWVkaWEtUXVlcnlcbkBtZWRpYShtaW4td2lkdGg6IDc2OXB4KSB7XG4gIC50b3Atc2VjdGlvbiB7XG4gICAgcGFkZGluZzogNjBweCAwIDIwcHg7XG4gICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDkwcHg7XG4gICAgfVxuICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgIH1cbiAgfVxufVxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnRvcC1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiA5MHB4IDAgNzBweDtcbiAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTIwcHg7XG4gICAgfVxuICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgIH1cbiAgfVxufVxuQG1lZGlhKG1heC13aWR0aDogMzc1cHgpIHtcbiAgLnRvcC1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiA3NXB4IDAgNXB4O1xuICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiA4MHB4O1xuICAgIH1cbiAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gIH1cbn1cbiIsIi5hcHAtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmJnLWltZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4udG9wLXNlY3Rpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDQwcHggMCAyMHB4O1xufVxuLnRvcC1zZWN0aW9uIGgxIHtcbiAgZm9udC1zaXplOiA5MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmNWY1ZjU7XG4gIHRleHQtc2hhZG93OiAwcHggMXB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4udG9wLXNlY3Rpb24gaDIge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IDBweCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmNvbnRlbnQtc2VjdGlvbiB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWluLWhlaWdodDogMDtcbn1cblxuLmJvdHRvbS1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5ib3R0b20tc2VjdGlvbiBhcHAtdGFicyB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmNoYW5nZS1iZy1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbn1cbi5jaGFuZ2UtYmctYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBjb2xvcjogd2hpdGU7XG59XG4uY2hhbmdlLWJnLWJ0bjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gIC50b3Atc2VjdGlvbiB7XG4gICAgcGFkZGluZzogNjBweCAwIDIwcHg7XG4gIH1cbiAgLnRvcC1zZWN0aW9uIGgxIHtcbiAgICBmb250LXNpemU6IDkwcHg7XG4gIH1cbiAgLnRvcC1zZWN0aW9uIGgyIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAudG9wLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDkwcHggMCA3MHB4O1xuICB9XG4gIC50b3Atc2VjdGlvbiBoMSB7XG4gICAgZm9udC1zaXplOiAxMjBweDtcbiAgfVxuICAudG9wLXNlY3Rpb24gaDIge1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM3NXB4KSB7XG4gIC50b3Atc2VjdGlvbiB7XG4gICAgcGFkZGluZzogNzVweCAwIDVweDtcbiAgfVxuICAudG9wLXNlY3Rpb24gaDEge1xuICAgIGZvbnQtc2l6ZTogODBweDtcbiAgfVxuICAudG9wLXNlY3Rpb24gaDIge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufSJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routeAnim', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':increment', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        position: 'relative',
                        overflow: 'hidden'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', [
                        baseStyles
                    ], { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                opacity: 0,
                                transform: 'translateX(-50px)'
                            }))
                        ], { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                transform: 'translateX(50px)',
                                opacity: 0
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms 120ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                opacity: 1,
                                transform: 'translateX(0)'
                            }))
                        ], { optional: true })
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':decrement', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        position: 'relative',
                        overflow: 'hidden'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', [
                        baseStyles
                    ], { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                opacity: 0,
                                transform: 'translateX(50px)'
                            }))
                        ], { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                transform: 'translateX(-50px)',
                                opacity: 0
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms 120ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                opacity: 1,
                                transform: 'translateX(0)'
                            }))
                        ], { optional: true })
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => secondary', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        position: 'relative',
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', [
                        baseStyles
                    ], { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                opacity: 0,
                                transform: 'scale(0.8)'
                            }))
                        ], { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                transform: 'scale(1.2)',
                                opacity: 0
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms 120ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                opacity: 1,
                                transform: 'scale(1)'
                            }))
                        ], { optional: true })
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('secondary => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        position: 'relative',
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', [
                        baseStyles
                    ], { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                opacity: 0,
                                transform: 'scale(1.25)'
                            }))
                        ], { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                transform: 'scale(0.8)',
                                opacity: 0
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms 120ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                opacity: 1,
                                transform: 'scale(1)'
                            }))
                        ], { optional: true })
                    ])
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('bgAnim', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 0
                    }))
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeAnim', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(250, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 1
                    }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(250, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routeAnim', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':increment', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                position: 'relative',
                                overflow: 'hidden'
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', [
                                baseStyles
                            ], { optional: true }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                        opacity: 0,
                                        transform: 'translateX(-50px)'
                                    }))
                                ], { optional: true }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                        transform: 'translateX(50px)',
                                        opacity: 0
                                    }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms 120ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                        opacity: 1,
                                        transform: 'translateX(0)'
                                    }))
                                ], { optional: true })
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':decrement', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                position: 'relative',
                                overflow: 'hidden'
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', [
                                baseStyles
                            ], { optional: true }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                        opacity: 0,
                                        transform: 'translateX(50px)'
                                    }))
                                ], { optional: true }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                        transform: 'translateX(-50px)',
                                        opacity: 0
                                    }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms 120ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                        opacity: 1,
                                        transform: 'translateX(0)'
                                    }))
                                ], { optional: true })
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => secondary', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                position: 'relative',
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', [
                                baseStyles
                            ], { optional: true }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                        opacity: 0,
                                        transform: 'scale(0.8)'
                                    }))
                                ], { optional: true }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                        transform: 'scale(1.2)',
                                        opacity: 0
                                    }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms 120ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                        opacity: 1,
                                        transform: 'scale(1)'
                                    }))
                                ], { optional: true })
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('secondary => *', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                position: 'relative',
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', [
                                baseStyles
                            ], { optional: true }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                        opacity: 0,
                                        transform: 'scale(1.25)'
                                    }))
                                ], { optional: true }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                        transform: 'scale(0.8)',
                                        opacity: 0
                                    }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms 120ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                        opacity: 1,
                                        transform: 'scale(1)'
                                    }))
                                ], { optional: true })
                            ])
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('bgAnim', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                opacity: 0
                            }))
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeAnim', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(250, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                                opacity: 1
                            }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(250, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }))
                        ])
                    ])
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs/tabs.component */ "./src/app/tabs/tabs.component.ts");
/* harmony import */ var _bookmarks_bookmarks_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bookmarks/bookmarks.component */ "./src/app/bookmarks/bookmarks.component.ts");
/* harmony import */ var _todos_todos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./todos/todos.component */ "./src/app/todos/todos.component.ts");
/* harmony import */ var _notes_notes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notes/notes.component */ "./src/app/notes/notes.component.ts");
/* harmony import */ var _bookmark_tile_bookmark_tile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bookmark-tile/bookmark-tile.component */ "./src/app/bookmark-tile/bookmark-tile.component.ts");
/* harmony import */ var _add_note_add_note_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-note/add-note.component */ "./src/app/add-note/add-note.component.ts");
/* harmony import */ var _note_card_note_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./note-card/note-card.component */ "./src/app/note-card/note-card.component.ts");
/* harmony import */ var _edit_note_edit_note_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./edit-note/edit-note.component */ "./src/app/edit-note/edit-note.component.ts");
/* harmony import */ var _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./todo-item/todo-item.component */ "./src/app/todo-item/todo-item.component.ts");
/* harmony import */ var _add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./add-todo/add-todo.component */ "./src/app/add-todo/add-todo.component.ts");
/* harmony import */ var _edit_todo_edit_todo_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./edit-todo/edit-todo.component */ "./src/app/edit-todo/edit-todo.component.ts");
/* harmony import */ var _add_bookmark_add_bookmark_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./add-bookmark/add-bookmark.component */ "./src/app/add-bookmark/add-bookmark.component.ts");
/* harmony import */ var _manage_bookmarks_manage_bookmarks_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./manage-bookmarks/manage-bookmarks.component */ "./src/app/manage-bookmarks/manage-bookmarks.component.ts");
/* harmony import */ var _edit_bookmark_edit_bookmark_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./edit-bookmark/edit-bookmark.component */ "./src/app/edit-bookmark/edit-bookmark.component.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/notification/notification.component.ts");






















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_6__["TabsComponent"],
        _bookmarks_bookmarks_component__WEBPACK_IMPORTED_MODULE_7__["BookmarksComponent"],
        _todos_todos_component__WEBPACK_IMPORTED_MODULE_8__["TodosComponent"],
        _notes_notes_component__WEBPACK_IMPORTED_MODULE_9__["NotesComponent"],
        _bookmark_tile_bookmark_tile_component__WEBPACK_IMPORTED_MODULE_10__["BookmarkTileComponent"],
        _add_note_add_note_component__WEBPACK_IMPORTED_MODULE_11__["AddNoteComponent"],
        _note_card_note_card_component__WEBPACK_IMPORTED_MODULE_12__["NoteCardComponent"],
        _edit_note_edit_note_component__WEBPACK_IMPORTED_MODULE_13__["EditNoteComponent"],
        _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_14__["TodoItemComponent"],
        _add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_15__["AddTodoComponent"],
        _edit_todo_edit_todo_component__WEBPACK_IMPORTED_MODULE_16__["EditTodoComponent"],
        _add_bookmark_add_bookmark_component__WEBPACK_IMPORTED_MODULE_17__["AddBookmarkComponent"],
        _manage_bookmarks_manage_bookmarks_component__WEBPACK_IMPORTED_MODULE_18__["ManageBookmarksComponent"],
        _edit_bookmark_edit_bookmark_component__WEBPACK_IMPORTED_MODULE_19__["EditBookmarkComponent"],
        _notification_notification_component__WEBPACK_IMPORTED_MODULE_20__["NotificationComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_6__["TabsComponent"],
                    _bookmarks_bookmarks_component__WEBPACK_IMPORTED_MODULE_7__["BookmarksComponent"],
                    _todos_todos_component__WEBPACK_IMPORTED_MODULE_8__["TodosComponent"],
                    _notes_notes_component__WEBPACK_IMPORTED_MODULE_9__["NotesComponent"],
                    _bookmark_tile_bookmark_tile_component__WEBPACK_IMPORTED_MODULE_10__["BookmarkTileComponent"],
                    _add_note_add_note_component__WEBPACK_IMPORTED_MODULE_11__["AddNoteComponent"],
                    _note_card_note_card_component__WEBPACK_IMPORTED_MODULE_12__["NoteCardComponent"],
                    _edit_note_edit_note_component__WEBPACK_IMPORTED_MODULE_13__["EditNoteComponent"],
                    _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_14__["TodoItemComponent"],
                    _add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_15__["AddTodoComponent"],
                    _edit_todo_edit_todo_component__WEBPACK_IMPORTED_MODULE_16__["EditTodoComponent"],
                    _add_bookmark_add_bookmark_component__WEBPACK_IMPORTED_MODULE_17__["AddBookmarkComponent"],
                    _manage_bookmarks_manage_bookmarks_component__WEBPACK_IMPORTED_MODULE_18__["ManageBookmarksComponent"],
                    _edit_bookmark_edit_bookmark_component__WEBPACK_IMPORTED_MODULE_19__["EditBookmarkComponent"],
                    _notification_notification_component__WEBPACK_IMPORTED_MODULE_20__["NotificationComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/bookmark-tile/bookmark-tile.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/bookmark-tile/bookmark-tile.component.ts ***!
  \**********************************************************/
/*! exports provided: BookmarkTileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarkTileComponent", function() { return BookmarkTileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function BookmarkTileComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function BookmarkTileComponent_div_1_Template_img_error_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.faviconError = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.tileIconSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function BookmarkTileComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.bookmark.name.toUpperCase()[0], " ");
} }
class BookmarkTileComponent {
    constructor() { }
    ngOnInit() {
        this.tileIconSrc = this.bookmark.url.origin + '/favicon.ico';
    }
}
BookmarkTileComponent.ɵfac = function BookmarkTileComponent_Factory(t) { return new (t || BookmarkTileComponent)(); };
BookmarkTileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookmarkTileComponent, selectors: [["app-bookmark-tile"]], inputs: { bookmark: "bookmark" }, decls: 5, vars: 4, consts: [["target", "_blank", 1, "bookmark-tile", 3, "href"], ["class", "tile-icon", 4, "ngIf"], ["class", "tile-icon fallback", 4, "ngIf"], [1, "tile-text"], [1, "tile-icon"], ["alt", "", 3, "src", "error"], [1, "tile-icon", "fallback"]], template: function BookmarkTileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BookmarkTileComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BookmarkTileComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.bookmark.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.faviconError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.faviconError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bookmark.name);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".bookmark-tile[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  gap: 12px;\n  background: rgba(0, 0, 0, 0.55);\n  border-radius: 5px;\n  width: 110px;\n  height: 105px;\n  cursor: pointer;\n  transition: all 0.1s;\n}\n.bookmark-tile[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.68);\n  -webkit-backdrop-filter: blur(2px);\n          backdrop-filter: blur(2px);\n}\n.bookmark-tile[_ngcontent-%COMP%]:active {\n  background: rgba(0, 0, 0, 0.75);\n  transform: translateY(2px);\n  transition-duration: 0s;\n}\n.bookmark-tile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 32px;\n}\n.tile-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.85);\n  max-width: 100%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.tile-icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 40px;\n  width: 40px;\n}\n.tile-icon.fallback[_ngcontent-%COMP%] {\n  background: rgba(45, 48, 53, 0.7);\n  color: #f5f7f8;\n  border-radius: 50%;\n  font-size: 20px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va21hcmstdGlsZS9DOlxcVXNlcnNcXE1HXFxEb3dubG9hZHNcXE5ldyBmb2xkZXJcXGFuZ3VsYXItcGVyc29uYWwtZGFzaGJvYXJkLW1haW4vc3JjXFxhcHBcXGJvb2ttYXJrLXRpbGVcXGJvb2ttYXJrLXRpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Jvb2ttYXJrLXRpbGUvYm9va21hcmstdGlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUVBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxhQUFBO0VBRUEsU0FBQTtFQUVBLCtCQUFBO0VBQ0Esa0JBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLGVBQUE7RUFFQSxvQkFBQTtBQ05KO0FEUUk7RUFDSSwrQkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7QUNOUjtBRFNJO0VBQ0ksK0JBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0FDUFI7QURXQTtFQUNJLGVBQUE7QUNSSjtBRFdBO0VBQ0ksZUFBQTtFQUNBLGdDQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ1RKO0FEWUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFlBQUE7RUFDQSxXQUFBO0FDVko7QURhQTtFQUNJLGlDQUFBO0VBQ0EsY0FBQTtFQUVBLGtCQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0FDWkoiLCJmaWxlIjoic3JjL2FwcC9ib29rbWFyay10aWxlL2Jvb2ttYXJrLXRpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9va21hcmstdGlsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIFxuICAgIGdhcDogMTJweDtcbiAgICBcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKGJsYWNrLCAwLjU1KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgICB3aWR0aDogMTEwcHg7XG4gICAgaGVpZ2h0OiAxMDVweDtcblxuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYShibGFjaywgMC42OCk7XG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xuICAgIH1cblxuICAgICY6YWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYShibGFjaywgMC43NSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwcztcbiAgICB9XG59XG5cbi5ib29rbWFyay10aWxlIGltZyB7XG4gICAgbWF4LXdpZHRoOiAzMnB4O1xufVxuXG4udGlsZS10ZXh0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHJnYmEod2hpdGUsIDAuODUpO1xuXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLnRpbGUtaWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIFxuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbn1cblxuLnRpbGUtaWNvbi5mYWxsYmFjayB7XG4gICAgYmFja2dyb3VuZDogcmdiYSg0NSwgNDgsIDUzLCAwLjcpO1xuICAgIGNvbG9yOiAjZjVmN2Y4O1xuXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59IiwiLmJvb2ttYXJrLXRpbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgZ2FwOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTUpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMTBweDtcbiAgaGVpZ2h0OiAxMDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcbn1cbi5ib29rbWFyay10aWxlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjY4KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XG59XG4uYm9va21hcmstdGlsZTphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMHM7XG59XG5cbi5ib29rbWFyay10aWxlIGltZyB7XG4gIG1heC13aWR0aDogMzJweDtcbn1cblxuLnRpbGUtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi50aWxlLWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbn1cblxuLnRpbGUtaWNvbi5mYWxsYmFjayB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNDUsIDQ4LCA1MywgMC43KTtcbiAgY29sb3I6ICNmNWY3Zjg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookmarkTileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bookmark-tile',
                templateUrl: './bookmark-tile.component.html',
                styleUrls: ['./bookmark-tile.component.scss']
            }]
    }], function () { return []; }, { bookmark: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/bookmarks/bookmarks.component.ts":
/*!**************************************************!*\
  !*** ./src/app/bookmarks/bookmarks.component.ts ***!
  \**************************************************/
/*! exports provided: BookmarksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarksComponent", function() { return BookmarksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_bookmark_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/bookmark.service */ "./src/app/shared/bookmark.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _bookmark_tile_bookmark_tile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bookmark-tile/bookmark-tile.component */ "./src/app/bookmark-tile/bookmark-tile.component.ts");






function BookmarksComponent_app_bookmark_tile_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-bookmark-tile", 9);
} if (rf & 2) {
    const bookmark_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bookmark", bookmark_r1);
} }
class BookmarksComponent {
    constructor(bookmarkService) {
        this.bookmarkService = bookmarkService;
    }
    ngOnInit() {
        this.bookmarks = this.bookmarkService.getBookmarks();
    }
}
BookmarksComponent.ɵfac = function BookmarksComponent_Factory(t) { return new (t || BookmarksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_bookmark_service__WEBPACK_IMPORTED_MODULE_1__["BookmarkService"])); };
BookmarksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookmarksComponent, selectors: [["app-bookmarks"]], decls: 13, vars: 1, consts: [[1, "bookmarks-wrapper"], [1, "container"], [1, "bookmark-tiles-container"], [3, "bookmark", 4, "ngFor", "ngForOf"], [1, "btns-container", "btns-centered"], ["routerLink", "add", 1, "btn", "add-btn"], [1, "material-icons-outlined"], ["routerLink", "manage", 1, "btn", "manage-btn"], [1, "material-icons"], [3, "bookmark"]], template: function BookmarksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BookmarksComponent_app_bookmark_tile_3_Template, 1, 1, "app-bookmark-tile", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Manage ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bookmarks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _bookmark_tile_bookmark_tile_component__WEBPACK_IMPORTED_MODULE_4__["BookmarkTileComponent"]], styles: [".bookmarks-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-y: auto;\n}\n\n.bookmark-tiles-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.add-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  margin-left: -3px;\n}\n\n.manage-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  opacity: 0.9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va21hcmtzL0M6XFxVc2Vyc1xcTUdcXERvd25sb2Fkc1xcTmV3IGZvbGRlclxcYW5ndWxhci1wZXJzb25hbC1kYXNoYm9hcmQtbWFpbi9zcmNcXGFwcFxcYm9va21hcmtzXFxib29rbWFya3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Jvb2ttYXJrcy9ib29rbWFya3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURHQTtFQUNJLGFBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFFQSxlQUFBO0FDREo7O0FESUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FDREo7O0FESUE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2Jvb2ttYXJrcy9ib29rbWFya3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9va21hcmtzLXdyYXBwZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIC8vIHdpZHRoOiA5NiU7XG59XG5cbi5ib29rbWFyay10aWxlcy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAyMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uYWRkLWJ0biBpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBtYXJnaW4tbGVmdDogLTNweDtcbn1cblxuLm1hbmFnZS1idG4gaSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgb3BhY2l0eTogMC45O1xufVxuIiwiLmJvb2ttYXJrcy13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uYm9va21hcmstdGlsZXMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uYWRkLWJ0biBpIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtM3B4O1xufVxuXG4ubWFuYWdlLWJ0biBpIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIG9wYWNpdHk6IDAuOTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookmarksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bookmarks',
                templateUrl: './bookmarks.component.html',
                styleUrls: ['./bookmarks.component.scss']
            }]
    }], function () { return [{ type: _shared_bookmark_service__WEBPACK_IMPORTED_MODULE_1__["BookmarkService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/edit-bookmark/edit-bookmark.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/edit-bookmark/edit-bookmark.component.ts ***!
  \**********************************************************/
/*! exports provided: EditBookmarkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBookmarkComponent", function() { return EditBookmarkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_bookmark_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/bookmark.service */ "./src/app/shared/bookmark.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/notification.service */ "./src/app/shared/notification.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







function EditBookmarkComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bookmark not found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditBookmarkComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditBookmarkComponent_ng_container_2_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onFormSubmit(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditBookmarkComponent_ng_container_2_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.bookmark.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.bookmark.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.bookmark.url);
} }
class EditBookmarkComponent {
    constructor(bookmarkService, route, router, notificationService) {
        this.bookmarkService = bookmarkService;
        this.route = route;
        this.router = router;
        this.notificationService = notificationService;
    }
    ngOnInit() {
        this.route.paramMap.subscribe((paramMap) => {
            const bookmarkId = paramMap.get('id');
            this.bookmark = this.bookmarkService.getBookmark(bookmarkId);
        });
    }
    onFormSubmit(form) {
        const { name, url } = form.value;
        this.bookmarkService.updateBookmark(this.bookmark.id, {
            name,
            url: new URL(url)
        });
        this.notificationService.show('Bookmark updated!');
    }
    delete() {
        this.bookmarkService.deleteBookmark(this.bookmark.id);
        this.router.navigate(['../'], { relativeTo: this.route });
        this.notificationService.show('Deleted Bookmark');
    }
}
EditBookmarkComponent.ɵfac = function EditBookmarkComponent_Factory(t) { return new (t || EditBookmarkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_bookmark_service__WEBPACK_IMPORTED_MODULE_1__["BookmarkService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"])); };
EditBookmarkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditBookmarkComponent, selectors: [["app-edit-bookmark"]], decls: 3, vars: 2, consts: [[1, "edit-bookmark-wrapper"], [4, "ngIf"], [1, "is-bold"], ["ngNativeValidate", "", 3, "ngSubmit"], ["form", "ngForm"], [1, "form-field"], [1, "form-label"], ["name", "name", "type", "text", "placeholder", "e.g. Wikipedia", 1, "textbox", 3, "ngModel"], ["textField", "ngModel"], ["name", "url", "type", "url", "placeholder", "e.g. https://wikipedia.com", "required", "", 1, "textbox", 3, "ngModel"], [1, "btns-container"], ["routerLink", "../", 1, "btn"], ["type", "button", 1, "btn", 3, "click"], [1, "btn", "align-end"]], template: function EditBookmarkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditBookmarkComponent_p_1_Template, 2, 0, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditBookmarkComponent_ng_container_2_Template, 22, 3, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.bookmark);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bookmark);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".edit-bookmark-wrapper[_ngcontent-%COMP%] {\n  padding: 35px;\n  width: 96%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1ib29rbWFyay9DOlxcVXNlcnNcXE1HXFxEb3dubG9hZHNcXE5ldyBmb2xkZXJcXGFuZ3VsYXItcGVyc29uYWwtZGFzaGJvYXJkLW1haW4vc3JjXFxhcHBcXGVkaXQtYm9va21hcmtcXGVkaXQtYm9va21hcmsuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2VkaXQtYm9va21hcmsvZWRpdC1ib29rbWFyay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxVQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9lZGl0LWJvb2ttYXJrL2VkaXQtYm9va21hcmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdC1ib29rbWFyay13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAzNXB4O1xuICAgIHdpZHRoOiA5NiU7XG59XG4iLCIuZWRpdC1ib29rbWFyay13cmFwcGVyIHtcbiAgcGFkZGluZzogMzVweDtcbiAgd2lkdGg6IDk2JTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditBookmarkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-bookmark',
                templateUrl: './edit-bookmark.component.html',
                styleUrls: ['./edit-bookmark.component.scss']
            }]
    }], function () { return [{ type: _shared_bookmark_service__WEBPACK_IMPORTED_MODULE_1__["BookmarkService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _shared_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/edit-note/edit-note.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-note/edit-note.component.ts ***!
  \**************************************************/
/*! exports provided: EditNoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNoteComponent", function() { return EditNoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_note_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/note.service */ "./src/app/shared/note.service.ts");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/notification.service */ "./src/app/shared/notification.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







function EditNoteComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Note not found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditNoteComponent_form_4_ng_container_5_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a note title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditNoteComponent_form_4_ng_container_5_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Title must be at least 3 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditNoteComponent_form_4_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditNoteComponent_form_4_ng_container_5_p_1_Template, 2, 0, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditNoteComponent_form_4_ng_container_5_p_2_Template, 2, 0, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.minlength);
} }
function EditNoteComponent_form_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditNoteComponent_form_4_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onFormSubmit(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EditNoteComponent_form_4_ng_container_5_Template, 3, 2, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "textarea", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditNoteComponent_form_4_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.deleteNote(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.note.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.note.content);
} }
class EditNoteComponent {
    constructor(route, noteService, router, notificationService) {
        this.route = route;
        this.noteService = noteService;
        this.router = router;
        this.notificationService = notificationService;
    }
    ngOnInit() {
        this.route.paramMap.subscribe((paramMap) => {
            const idParam = paramMap.get('id');
            this.note = this.noteService.getNote(idParam);
        });
    }
    onFormSubmit(form) {
        this.noteService.updateNote(this.note.id, form.value);
        this.router.navigateByUrl("/notes");
        this.notificationService.show('Note updated!');
    }
    deleteNote() {
        this.noteService.deleteNote(this.note.id);
        this.router.navigateByUrl("/notes");
        this.notificationService.show('Note deleted');
    }
}
EditNoteComponent.ɵfac = function EditNoteComponent_Factory(t) { return new (t || EditNoteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_note_service__WEBPACK_IMPORTED_MODULE_2__["NoteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"])); };
EditNoteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditNoteComponent, selectors: [["app-edit-note"]], decls: 5, vars: 2, consts: [[1, "edit-note-wrapper", "container", "has-blurred-white-bg"], [1, "is-bold"], [4, "ngIf"], [3, "ngSubmit", 4, "ngIf"], [3, "ngSubmit"], ["form", "ngForm"], [1, "form-field"], ["name", "title", "type", "text", "placeholder", "Enter note title...", "required", "", "minlength", "3", 1, "textbox", 3, "ngModel"], ["titleField", "ngModel"], ["name", "content", "placeholder", "Enter note content...", 1, "textarea", 3, "ngModel"], [1, "btns-container"], ["routerLink", "../", 1, "btn"], ["type", "button", 1, "btn", 3, "click"], [1, "btn", "align-end"]], template: function EditNoteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditNoteComponent_p_3_Template, 2, 0, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditNoteComponent_form_4_Template, 15, 3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.note);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.note);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".edit-note-wrapper[_ngcontent-%COMP%] {\n  max-height: 100%;\n  overflow: auto;\n  width: 96%;\n  padding: 35px;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1ub3RlL0M6XFxVc2Vyc1xcTUdcXERvd25sb2Fkc1xcTmV3IGZvbGRlclxcYW5ndWxhci1wZXJzb25hbC1kYXNoYm9hcmQtbWFpbi9zcmNcXGFwcFxcZWRpdC1ub3RlXFxlZGl0LW5vdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2VkaXQtbm90ZS9lZGl0LW5vdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUVBLGNBQUE7RUFDQSxVQUFBO0VBRUEsYUFBQTtFQUNBLGtCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9lZGl0LW5vdGUvZWRpdC1ub3RlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXQtbm90ZS13cmFwcGVyIHtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuXG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgd2lkdGg6IDk2JTtcblxuICAgIHBhZGRpbmc6IDM1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuIiwiLmVkaXQtbm90ZS13cmFwcGVyIHtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHdpZHRoOiA5NiU7XG4gIHBhZGRpbmc6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditNoteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-note',
                templateUrl: './edit-note.component.html',
                styleUrls: ['./edit-note.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _shared_note_service__WEBPACK_IMPORTED_MODULE_2__["NoteService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _shared_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/edit-todo/edit-todo.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-todo/edit-todo.component.ts ***!
  \**************************************************/
/*! exports provided: EditTodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTodoComponent", function() { return EditTodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/todo.service */ "./src/app/shared/todo.service.ts");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/notification.service */ "./src/app/shared/notification.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







function EditTodoComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Todo not found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditTodoComponent_form_4_ng_container_5_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter some text for this todo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditTodoComponent_form_4_ng_container_5_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "The todo text must be at least 3 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditTodoComponent_form_4_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditTodoComponent_form_4_ng_container_5_p_1_Template, 2, 0, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditTodoComponent_form_4_ng_container_5_p_2_Template, 2, 0, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.minlength);
} }
function EditTodoComponent_form_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditTodoComponent_form_4_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onFormSubmit(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EditTodoComponent_form_4_ng_container_5_Template, 3, 2, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.todo.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.invalid);
} }
class EditTodoComponent {
    constructor(route, todoService, router, notificationService) {
        this.route = route;
        this.todoService = todoService;
        this.router = router;
        this.notificationService = notificationService;
    }
    ngOnInit() {
        this.route.paramMap.subscribe((paramMap) => {
            const todoId = paramMap.get('id');
            this.todo = this.todoService.getTodo(todoId);
        });
    }
    onFormSubmit(form) {
        if (form.invalid)
            return;
        this.todoService.updateTodo(this.todo.id, form.value);
        this.router.navigateByUrl("/todos");
        this.notificationService.show('Todo updated!');
    }
}
EditTodoComponent.ɵfac = function EditTodoComponent_Factory(t) { return new (t || EditTodoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"])); };
EditTodoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditTodoComponent, selectors: [["app-edit-todo"]], decls: 5, vars: 2, consts: [[1, "edit-todo-wrapper", "container", "has-blurred-white-bg"], [1, "is-bold"], [4, "ngIf"], [3, "ngSubmit", 4, "ngIf"], [3, "ngSubmit"], ["form", "ngForm"], [1, "form-field"], ["name", "text", "type", "text", "placeholder", "Enter todo text...", "required", "", "minlength", "3", 1, "textbox", 3, "ngModel"], ["textField", "ngModel"], [1, "btns-container"], ["routerLink", "../", 1, "btn"], [1, "btn", "align-end"]], template: function EditTodoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Todo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditTodoComponent_p_3_Template, 2, 0, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditTodoComponent_form_4_Template, 11, 2, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.todo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.todo);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".edit-todo-wrapper[_ngcontent-%COMP%] {\n  padding: 35px;\n  border-radius: 5px;\n  width: 96%;\n  max-height: 100%;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC10b2RvL0M6XFxVc2Vyc1xcTUdcXERvd25sb2Fkc1xcTmV3IGZvbGRlclxcYW5ndWxhci1wZXJzb25hbC1kYXNoYm9hcmQtbWFpbi9zcmNcXGFwcFxcZWRpdC10b2RvXFxlZGl0LXRvZG8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2VkaXQtdG9kby9lZGl0LXRvZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBRUEsZ0JBQUE7RUFDQSxjQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9lZGl0LXRvZG8vZWRpdC10b2RvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXQtdG9kby13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAzNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB3aWR0aDogOTYlO1xuXG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cbiIsIi5lZGl0LXRvZG8td3JhcHBlciB7XG4gIHBhZGRpbmc6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDk2JTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditTodoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-todo',
                templateUrl: './edit-todo.component.html',
                styleUrls: ['./edit-todo.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _shared_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _shared_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/manage-bookmarks/manage-bookmarks.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/manage-bookmarks/manage-bookmarks.component.ts ***!
  \****************************************************************/
/*! exports provided: ManageBookmarksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageBookmarksComponent", function() { return ManageBookmarksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_bookmark_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/bookmark.service */ "./src/app/shared/bookmark.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = function (a0) { return [a0]; };
function ManageBookmarksComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bookmark_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, bookmark_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bookmark_r1.name);
} }
class ManageBookmarksComponent {
    constructor(bookmarkService) {
        this.bookmarkService = bookmarkService;
    }
    ngOnInit() {
        this.bookmarks = this.bookmarkService.getBookmarks();
    }
}
ManageBookmarksComponent.ɵfac = function ManageBookmarksComponent_Factory(t) { return new (t || ManageBookmarksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_bookmark_service__WEBPACK_IMPORTED_MODULE_1__["BookmarkService"])); };
ManageBookmarksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManageBookmarksComponent, selectors: [["app-manage-bookmarks"]], decls: 8, vars: 1, consts: [[1, "manage-bookmarks-wrapper", "container"], [1, "sidebar"], [1, "sidebar-heading"], [1, "sidebar-items"], ["routerLinkActive", "selected", "class", "sidebar-item", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "content", "has-blurred-white-bg"], ["routerLinkActive", "selected", 1, "sidebar-item", 3, "routerLink"]], template: function ManageBookmarksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Your Bookmarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ManageBookmarksComponent_a_5_Template, 2, 4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bookmarks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], styles: [".manage-bookmarks-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  width: 96%;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 35%;\n  background-color: rgba(0, 0, 0, 0.7);\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  overflow: auto;\n}\n\n.sidebar-heading[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n  font-weight: 600;\n  font-size: 18px;\n  padding: 20px;\n}\n\n.sidebar-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.sidebar-item[_ngcontent-%COMP%] {\n  position: relative;\n  color: rgba(255, 255, 255, 0.78);\n  font-size: 16px;\n  padding: 5px 25px;\n}\n\n.sidebar-item[_ngcontent-%COMP%]:hover {\n  color: rgba(255, 255, 255, 0.85);\n}\n\n.sidebar-item.selected[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.95);\n}\n\n.sidebar-item[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 2px;\n  background-color: rgba(255, 255, 255, 0.8);\n  transition: 0.2s;\n  opacity: 0;\n  transform: scaleY(0);\n}\n\n.sidebar-item.selected[_ngcontent-%COMP%]::before {\n  opacity: 1;\n  transform: scaleY(1);\n}\n\n.content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlLWJvb2ttYXJrcy9DOlxcVXNlcnNcXE1HXFxEb3dubG9hZHNcXE5ldyBmb2xkZXJcXGFuZ3VsYXItcGVyc29uYWwtZGFzaGJvYXJkLW1haW4vc3JjXFxhcHBcXG1hbmFnZS1ib29rbWFya3NcXG1hbmFnZS1ib29rbWFya3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21hbmFnZS1ib29rbWFya3MvbWFuYWdlLWJvb2ttYXJrcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxvQ0FBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBRUEsZ0NBQUE7RUFFQSxlQUFBO0VBRUEsaUJBQUE7QUNGSjs7QURJSTtFQUNJLGdDQUFBO0FDRlI7O0FES0k7RUFDSSxnQ0FBQTtBQ0hSOztBRE9BO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLDBDQUFBO0VBRUEsZ0JBQUE7RUFHQSxVQUFBO0VBRUEsb0JBQUE7QUNSSjs7QURXQTtFQUNJLFVBQUE7RUFDQSxvQkFBQTtBQ1JKOztBRFdBO0VBQ0ksWUFBQTtFQUVBLDRCQUFBO0VBQ0EsK0JBQUE7RUFFQSxjQUFBO0FDVkoiLCJmaWxlIjoic3JjL2FwcC9tYW5hZ2UtYm9va21hcmtzL21hbmFnZS1ib29rbWFya3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFuYWdlLWJvb2ttYXJrcy13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogOTYlO1xufVxuXG4uc2lkZWJhciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAzNSU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYShibGFjaywgMC43KTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uc2lkZWJhci1oZWFkaW5nIHtcbiAgICBjb2xvcjogcmdiYSh3aGl0ZSwgMC44KTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uc2lkZWJhci1pdGVtcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc2lkZWJhci1pdGVtIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBjb2xvcjogcmdiYSh3aGl0ZSwgMC43OCk7XG5cbiAgICBmb250LXNpemU6IDE2cHg7XG5cbiAgICBwYWRkaW5nOiA1cHggMjVweDtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogcmdiYSh3aGl0ZSwgMC44NSk7XG4gICAgfVxuXG4gICAgJi5zZWxlY3RlZCB7XG4gICAgICAgIGNvbG9yOiByZ2JhKHdoaXRlLCAwLjk1KTtcbiAgICB9XG59XG5cbi5zaWRlYmFyLWl0ZW06OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEod2hpdGUsIDAuOCk7XG5cbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuXG4gICAgLy8gaGlkZSBieSBkZWZhdWx0XG4gICAgb3BhY2l0eTogMDtcblxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xufVxuXG4uc2lkZWJhci1pdGVtLnNlbGVjdGVkOjpiZWZvcmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XG59XG5cbi5jb250ZW50IHtcbiAgICBmbGV4LWdyb3c6IDE7XG5cbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG5cbiAgICBvdmVyZmxvdzogYXV0bztcbn1cbiIsIi5tYW5hZ2UtYm9va21hcmtzLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA5NiU7XG59XG5cbi5zaWRlYmFyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMzUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5zaWRlYmFyLWhlYWRpbmcge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5zaWRlYmFyLWl0ZW1zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnNpZGViYXItaXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43OCk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogNXB4IDI1cHg7XG59XG4uc2lkZWJhci1pdGVtOmhvdmVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XG59XG4uc2lkZWJhci1pdGVtLnNlbGVjdGVkIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XG59XG5cbi5zaWRlYmFyLWl0ZW06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XG59XG5cbi5zaWRlYmFyLWl0ZW0uc2VsZWN0ZWQ6OmJlZm9yZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xufVxuXG4uY29udGVudCB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManageBookmarksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-manage-bookmarks',
                templateUrl: './manage-bookmarks.component.html',
                styleUrls: ['./manage-bookmarks.component.scss']
            }]
    }], function () { return [{ type: _shared_bookmark_service__WEBPACK_IMPORTED_MODULE_1__["BookmarkService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/note-card/note-card.component.ts":
/*!**************************************************!*\
  !*** ./src/app/note-card/note-card.component.ts ***!
  \**************************************************/
/*! exports provided: NoteCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteCardComponent", function() { return NoteCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function NoteCardComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.note.content);
} }
class NoteCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
NoteCardComponent.ɵfac = function NoteCardComponent_Factory(t) { return new (t || NoteCardComponent)(); };
NoteCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NoteCardComponent, selectors: [["app-note-card"]], inputs: { note: "note" }, decls: 4, vars: 2, consts: [[1, "note-card"], [1, "note-card-title"], ["class", "note-card-content", 4, "ngIf"], [1, "note-card-content"]], template: function NoteCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NoteCardComponent_div_3_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.note.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.note.content);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".note-card[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.5);\n  color: rgba(255, 255, 255, 0.95);\n  border-radius: 4px;\n  padding: 25px;\n  cursor: pointer;\n  transition: 0.1s;\n}\n.note-card[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.68);\n  -webkit-backdrop-filter: blur(2px);\n          backdrop-filter: blur(2px);\n}\n.note-card-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n}\n.note-card-content[_ngcontent-%COMP%] {\n  margin-top: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90ZS1jYXJkL0M6XFxVc2Vyc1xcTUdcXERvd25sb2Fkc1xcTmV3IGZvbGRlclxcYW5ndWxhci1wZXJzb25hbC1kYXNoYm9hcmQtbWFpbi9zcmNcXGFwcFxcbm90ZS1jYXJkXFxub3RlLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25vdGUtY2FyZC9ub3RlLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBQTtFQUNBLGdDQUFBO0VBRUEsa0JBQUE7RUFFQSxhQUFBO0VBRUEsZUFBQTtFQUVBLGdCQUFBO0FDSEo7QURLSTtFQUNJLHFDQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtBQ0hSO0FET0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNKSjtBRE9BO0VBQ0ksZUFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvbm90ZS1jYXJkL25vdGUtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3RlLWNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoYmxhY2ssIDAuNSk7XG4gICAgY29sb3I6IHJnYmEod2hpdGUsIDAuOTUpO1xuXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gICAgcGFkZGluZzogMjVweDtcblxuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIHRyYW5zaXRpb246IDAuMXM7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYShibGFjaywgMC42OCk7XG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xuICAgIH1cbn1cblxuLm5vdGUtY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5ub3RlLWNhcmQtY29udGVudCB7XG4gICAgbWFyZ2luLXRvcDogN3B4O1xufVxuIiwiLm5vdGUtY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjFzO1xufVxuLm5vdGUtY2FyZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42OCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xufVxuXG4ubm90ZS1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubm90ZS1jYXJkLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiA3cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoteCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-note-card',
                templateUrl: './note-card.component.html',
                styleUrls: ['./note-card.component.scss']
            }]
    }], function () { return []; }, { note: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/notes/notes.component.ts":
/*!******************************************!*\
  !*** ./src/app/notes/notes.component.ts ***!
  \******************************************/
/*! exports provided: NotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesComponent", function() { return NotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_note_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/note.service */ "./src/app/shared/note.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _note_card_note_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../note-card/note-card.component */ "./src/app/note-card/note-card.component.ts");






const _c0 = function (a0) { return [a0]; };
function NotesComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-note-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const note_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, note_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("note", note_r1);
} }
class NotesComponent {
    constructor(noteService) {
        this.noteService = noteService;
    }
    ngOnInit() {
        this.notes = this.noteService.getNotes();
    }
}
NotesComponent.ɵfac = function NotesComponent_Factory(t) { return new (t || NotesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_note_service__WEBPACK_IMPORTED_MODULE_1__["NoteService"])); };
NotesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotesComponent, selectors: [["app-notes"]], decls: 9, vars: 1, consts: [[1, "notes-wrapper"], [1, "container"], [1, "notes-list"], [3, "routerLink", 4, "ngFor", "ngForOf"], [1, "btns-container", "btns-centered"], ["routerLink", "add", 1, "btn", "add-btn"], [1, "material-icons-outlined"], [3, "routerLink"], [3, "note"]], template: function NotesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NotesComponent_a_3_Template, 2, 4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _note_card_note_card_component__WEBPACK_IMPORTED_MODULE_4__["NoteCardComponent"]], styles: [".notes-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-y: auto;\n}\n\n.add-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  margin-left: -3px;\n}\n\napp-note-card[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90ZXMvQzpcXFVzZXJzXFxNR1xcRG93bmxvYWRzXFxOZXcgZm9sZGVyXFxhbmd1bGFyLXBlcnNvbmFsLWRhc2hib2FyZC1tYWluL3NyY1xcYXBwXFxub3Rlc1xcbm90ZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25vdGVzL25vdGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL25vdGVzL25vdGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdGVzLXdyYXBwZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uYWRkLWJ0biBpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBtYXJnaW4tbGVmdDogLTNweDtcbn1cblxuYXBwLW5vdGUtY2FyZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbiIsIi5ub3Rlcy13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uYWRkLWJ0biBpIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtM3B4O1xufVxuXG5hcHAtbm90ZS1jYXJkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notes',
                templateUrl: './notes.component.html',
                styleUrls: ['./notes.component.scss']
            }]
    }], function () { return [{ type: _shared_note_service__WEBPACK_IMPORTED_MODULE_1__["NoteService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/notification/notification.component.ts":
/*!********************************************************!*\
  !*** ./src/app/notification/notification.component.ts ***!
  \********************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/notification.service */ "./src/app/shared/notification.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function NotificationComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const n_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@notificationAnim", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", n_r1.text, "\n");
} }
class NotificationComponent {
    constructor(notificationService) {
        this.notificationService = notificationService;
    }
    ngOnInit() {
        this.notificationService.notifications.subscribe((notification) => {
            this.notification = Array(notification);
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                this.notification = null;
            }, notification.duration);
        });
    }
}
NotificationComponent.ɵfac = function NotificationComponent_Factory(t) { return new (t || NotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"])); };
NotificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NotificationComponent, selectors: [["app-notification"]], decls: 1, vars: 1, consts: [["class", "notification", 4, "ngFor", "ngForOf"], [1, "notification"]], template: function NotificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NotificationComponent_div_0_Template, 2, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.notification);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".notification[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  padding: 15px 20px;\n  border-radius: 5px;\n  color: #111;\n  background: rgba(255, 255, 255, 0.55);\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWZpY2F0aW9uL0M6XFxVc2Vyc1xcTUdcXERvd25sb2Fkc1xcTmV3IGZvbGRlclxcYW5ndWxhci1wZXJzb25hbC1kYXNoYm9hcmQtbWFpbi9zcmNcXGFwcFxcbm90aWZpY2F0aW9uXFxub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtFQUVBLHFDQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUVBLDRDQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdGlmaWNhdGlvbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMjBweDtcbiAgICByaWdodDogMjBweDtcbiAgICBcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgY29sb3I6ICMxMTE7XG5cbiAgICBiYWNrZ3JvdW5kOiByZ2JhKHdoaXRlLCAwLjU1KTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcblxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTJweCByZ2JhKGJsYWNrLCAwLjEyKTtcbn0iLCIubm90aWZpY2F0aW9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDIwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICMxMTE7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn0iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('notificationAnim', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        opacity: 0,
                        transform: 'translateY(5px)'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms 125ms ease-out')
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(125, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        opacity: 0,
                        transform: 'scale(0.85)'
                    }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NotificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-notification',
                templateUrl: './notification.component.html',
                styleUrls: ['./notification.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('notificationAnim', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                opacity: 0,
                                transform: 'translateY(5px)'
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms 125ms ease-out')
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(125, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                opacity: 0,
                                transform: 'scale(0.85)'
                            }))
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: _shared_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/bookmark.model.ts":
/*!******************************************!*\
  !*** ./src/app/shared/bookmark.model.ts ***!
  \******************************************/
/*! exports provided: Bookmark */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bookmark", function() { return Bookmark; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");

class Bookmark {
    constructor(name, url) {
        this.id = Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])();
        this.url = new URL(url);
        if (!name)
            name = this.url.hostname;
        this.name = name;
    }
}


/***/ }),

/***/ "./src/app/shared/bookmark.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/bookmark.service.ts ***!
  \********************************************/
/*! exports provided: BookmarkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarkService", function() { return BookmarkService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class BookmarkService {
    constructor() {
        this.bookmarks = [];
        this.loadState();
        this.storageListenSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'storage')
            .subscribe((event) => {
            if (event.key === 'bookmarks')
                this.loadState();
        });
    }
    ngOnDestroy() {
        if (this.storageListenSub)
            this.storageListenSub.unsubscribe();
    }
    getBookmarks() {
        return this.bookmarks;
    }
    getBookmark(id) {
        return this.bookmarks.find(b => b.id === id);
    }
    addBookmark(bookmark) {
        this.bookmarks.push(bookmark);
        this.saveState();
    }
    updateBookmark(id, updatedFields) {
        const bookmark = this.getBookmark(id);
        Object.assign(bookmark, updatedFields);
        this.saveState();
    }
    deleteBookmark(id) {
        const bookmarkIndex = this.bookmarks.findIndex(b => b.id === id);
        if (bookmarkIndex == -1)
            return;
        this.bookmarks.splice(bookmarkIndex, 1);
        this.saveState();
    }
    saveState() {
        localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
    }
    loadState() {
        try {
            const bookmarksInStorage = JSON.parse(localStorage.getItem('bookmarks'), (key, value) => {
                if (key == 'url')
                    return new URL(value);
                return value;
            });
            this.bookmarks.length = 0; // clear the bookmarks array (while keeping the reference)
            this.bookmarks.push(...bookmarksInStorage);
        }
        catch (e) {
            console.log('There was an error retrieving the bookmarks from localStorage');
            console.log(e);
        }
    }
}
BookmarkService.ɵfac = function BookmarkService_Factory(t) { return new (t || BookmarkService)(); };
BookmarkService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BookmarkService, factory: BookmarkService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookmarkService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/note.model.ts":
/*!**************************************!*\
  !*** ./src/app/shared/note.model.ts ***!
  \**************************************/
/*! exports provided: Note */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Note", function() { return Note; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");

class Note {
    constructor(title, content) {
        this.title = title;
        this.content = content;
        this.id = Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])();
    }
}


/***/ }),

/***/ "./src/app/shared/note.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/note.service.ts ***!
  \****************************************/
/*! exports provided: NoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteService", function() { return NoteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class NoteService {
    constructor() {
        this.notes = [];
        this.loadState();
        this.storageListenSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'storage')
            .subscribe((event) => {
            if (event.key === 'notes')
                this.loadState();
        });
    }
    ngOnDestroy() {
        if (this.storageListenSub)
            this.storageListenSub.unsubscribe();
    }
    getNotes() {
        return this.notes;
    }
    getNote(id) {
        return this.notes.find(n => n.id === id);
    }
    addNote(note) {
        this.notes.push(note);
        this.saveState();
    }
    updateNote(id, updatedFields) {
        const note = this.getNote(id);
        Object.assign(note, updatedFields);
        this.saveState();
    }
    deleteNote(id) {
        const noteIndex = this.notes.findIndex(n => n.id === id);
        if (noteIndex == -1)
            return;
        this.notes.splice(noteIndex, 1);
        this.saveState();
    }
    saveState() {
        localStorage.setItem('notes', JSON.stringify(this.notes));
    }
    loadState() {
        try {
            const notesInStorage = JSON.parse(localStorage.getItem('notes'));
            // if (!notesInStorage) return
            this.notes.length = 0; // clear the notes array (while keeping the reference)
            this.notes.push(...notesInStorage);
        }
        catch (e) {
            console.log('There was an error retrieving the notes from localStorage');
            console.log(e);
        }
    }
}
NoteService.ɵfac = function NoteService_Factory(t) { return new (t || NoteService)(); };
NoteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NoteService, factory: NoteService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoteService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/notification.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/notification.service.ts ***!
  \************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class NotificationService {
    constructor() {
        this.notification$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    get notifications() {
        return this.notification$.asObservable();
    }
    show(text, duration = 5000) {
        this.notification$.next({ text, duration });
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(); };
NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/todo.model.ts":
/*!**************************************!*\
  !*** ./src/app/shared/todo.model.ts ***!
  \**************************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");

class Todo {
    constructor(text) {
        this.text = text;
        this.id = Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])();
    }
}


/***/ }),

/***/ "./src/app/shared/todo.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/todo.service.ts ***!
  \****************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class TodoService {
    constructor() {
        this.todos = [];
        this.loadState();
        this.storageListenSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'storage')
            .subscribe((event) => {
            if (event.key === 'todos')
                this.loadState();
        });
    }
    ngOnDestroy() {
        if (this.storageListenSub)
            this.storageListenSub.unsubscribe();
    }
    getTodos() {
        return this.todos;
    }
    getTodo(id) {
        return this.todos.find(t => t.id === id);
    }
    addTodo(todo) {
        this.todos.push(todo);
        this.saveState();
    }
    updateTodo(id, updatedTodoFields) {
        const todo = this.getTodo(id);
        Object.assign(todo, updatedTodoFields);
        this.saveState();
    }
    deleteTodo(id) {
        const index = this.todos.findIndex(t => t.id === id);
        if (index == -1)
            return;
        this.todos.splice(index, 1);
        this.saveState();
    }
    saveState() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }
    loadState() {
        try {
            const todosInStorage = JSON.parse(localStorage.getItem('todos'));
            if (!todosInStorage)
                return;
            this.todos.length = 0; // clear the todos array (while keeping the reference)
            this.todos.push(...todosInStorage);
        }
        catch (e) {
            console.log('There was an error retrieving the todos from localStorage');
            console.log(e);
        }
    }
}
TodoService.ɵfac = function TodoService_Factory(t) { return new (t || TodoService)(); };
TodoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TodoService, factory: TodoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/tabs/tabs.component.ts":
/*!****************************************!*\
  !*** ./src/app/tabs/tabs.component.ts ***!
  \****************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class TabsComponent {
    constructor() { }
    ngOnInit() {
    }
}
TabsComponent.ɵfac = function TabsComponent_Factory(t) { return new (t || TabsComponent)(); };
TabsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabsComponent, selectors: [["app-tabs"]], decls: 13, vars: 0, consts: [[1, "tabs"], ["routerLink", "bookmarks", "routerLinkActive", "selected", 1, "tab", "bookmarks-tab"], [1, "tab-tile"], [1, "material-icons-outlined"], ["routerLink", "todos", "routerLinkActive", "selected", 1, "tab", "todos-tab"], ["routerLink", "notes", "routerLinkActive", "selected", 1, "tab", "notes-tab"]], template: function TabsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "bookmarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "check");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  background-color: rgba(255, 255, 255, 0.25);\n  -webkit-backdrop-filter: blur(3px);\n          backdrop-filter: blur(3px);\n  border-radius: 12px;\n  padding: 10px;\n  margin: 12px;\n  margin-top: 50px;\n}\n\n.tab[_ngcontent-%COMP%] {\n  position: relative;\n  text-decoration: none;\n  z-index: 1;\n}\n\n.tab-tile[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 10px;\n  cursor: pointer;\n  transition: all 0.2s ease-out;\n}\n\n.tab-tile[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #222;\n}\n\n@media (min-width: 991px), (max-width: 786px) {\n  .tab-tile[_ngcontent-%COMP%] {\n    padding: 18px;\n  }\n}\n\n@media (min-width: 785px), (max-width: 375px) {\n  .tab-tile[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n}\n\n.tab.selected[_ngcontent-%COMP%]   .tab-tile[_ngcontent-%COMP%] {\n  transform: translateY(-50%);\n  transition-duration: 0.4s;\n  transition-timing-function: cubic-bezier(0, 0, 0, 2);\n}\n\n.tab-tile[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  height: 100%;\n  width: 100%;\n  border-radius: 10px;\n  opacity: 0.9;\n  transition: all 0.2s;\n}\n\n.bookmarks-tab[_ngcontent-%COMP%]   .tab-tile[_ngcontent-%COMP%]::before {\n  background: linear-gradient(45deg, #f8b5a5, #e2d2fd);\n}\n\n.todos-tab[_ngcontent-%COMP%]   .tab-tile[_ngcontent-%COMP%]::before {\n  background: linear-gradient(45deg, #a2ffff, #ffbdde);\n}\n\n.notes-tab[_ngcontent-%COMP%]   .tab-tile[_ngcontent-%COMP%]::before {\n  background: linear-gradient(45deg, #d2cdff, #5fffbc);\n}\n\n.tab-tile[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n  transform: scale(1.1);\n}\n\n.tab.selected[_ngcontent-%COMP%]   .tab-tile[_ngcontent-%COMP%]::before {\n  opacity: 1;\n  transform: scale(1.1);\n  border-radius: 50%;\n  box-shadow: 0px 7px 17px rgba(0, 0, 0, 0.12);\n  transition-delay: 0.2s;\n}\n\n.tab[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -10px;\n  left: 0;\n  right: 0;\n  height: 3px;\n  width: 50%;\n  margin: auto;\n  background-color: rgba(255, 255, 255, 0.85);\n  transition: all 0.2s;\n  opacity: 0;\n  transform: scaleX(0);\n}\n\n.tab.selected[_ngcontent-%COMP%]::after {\n  opacity: 1;\n  transform: scaleX(1);\n  transition-delay: 0.2s;\n}\n\n.tab.selected[_ngcontent-%COMP%] {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9DOlxcVXNlcnNcXE1HXFxEb3dubG9hZHNcXE5ldyBmb2xkZXJcXGFuZ3VsYXItcGVyc29uYWwtZGFzaGJvYXJkLW1haW4vc3JjXFxhcHBcXHRhYnNcXHRhYnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RhYnMvdGFicy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxTQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBSUEsNkJBQUE7QUNGSjs7QURESTtFQUNJLFdBQUE7QUNHUjs7QURDQTtFQUNFO0lBQ0UsYUFBQTtFQ0VGO0FBQ0Y7O0FEQUE7RUFDRTtJQUNFLGFBQUE7RUNFRjtBQUNGOztBREFBO0VBQ0ksMkJBQUE7RUFDQSx5QkFBQTtFQUNBLG9EQUFBO0FDRUo7O0FER0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDQUo7O0FER0E7RUFDSSxvREFBQTtBQ0FKOztBREdBO0VBQ0ksb0RBQUE7QUNBSjs7QURHQTtFQUNJLG9EQUFBO0FDQUo7O0FER0E7RUFDSSxVQUFBO0VBQ0EscUJBQUE7QUNBSjs7QURHQTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxzQkFBQTtBQ0FKOztBRFVBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxvQkFBQTtFQUVBLFVBQUE7RUFDQSxvQkFBQTtBQ1JKOztBRFdBO0VBQ0ksVUFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QUNSSjs7QURXQTtFQUFnQixhQUFBO0FDUGhCIiwiZmlsZSI6InNyYy9hcHAvdGFicy90YWJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEod2hpdGUsIDAuMjUpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDEycHg7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLnRhYiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4udGFiLXRpbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaSB7XG4gICAgICAgIGNvbG9yOiAjMjIyO1xuICAgIH1cbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbn1cbkBtZWRpYShtaW4td2lkdGg6IDk5MXB4KSwobWF4LXdpZHRoOiA3ODZweCl7XG4gIC50YWItdGlsZSB7XG4gICAgcGFkZGluZzogMThweDtcbn1cbn1cbkBtZWRpYShtaW4td2lkdGg6IDc4NXB4KSwobWF4LXdpZHRoOiAzNzVweCl7XG4gIC50YWItdGlsZSB7XG4gICAgcGFkZGluZzogMTJweDtcbn1cbn1cbi50YWIuc2VsZWN0ZWQgLnRhYi10aWxlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDAsIDAsIDIpO1xufVxuXG4vLyBTVFlMRVMgRk9SIFRIRSBUQUIgVElMRSBCQUNLR1JPVU5EICdTSEFQRSdcblxuLnRhYi10aWxlOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG5cbi5ib29rbWFya3MtdGFiIC50YWItdGlsZTo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmOGI1YTUsICNlMmQyZmQpO1xufVxuXG4udG9kb3MtdGFiIC50YWItdGlsZTo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNhMmZmZmYsICNmZmJkZGUpO1xufVxuXG4ubm90ZXMtdGFiIC50YWItdGlsZTo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNkMmNkZmYsICM1ZmZmYmMpO1xufVxuXG4udGFiLXRpbGU6aG92ZXI6OmJlZm9yZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi50YWIuc2VsZWN0ZWQgLnRhYi10aWxlOjpiZWZvcmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3gtc2hhZG93OiAwcHggN3B4IDE3cHggcmdiYShibGFjaywgMC4xMik7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbn1cblxuLy8gRU5EIE9GIFRBQiBUSUxFIEJBQ0tHUk9VTkQgJ1NIQVBFJyBTVFlMRVNcblxuXG5cblxuLy8gU1RZTEVTIEZPUiBUSEUgVU5ERVJMSU5FIEVGRkVDVFxuXG4udGFiOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTEwcHg7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHdoaXRlLCAwLjg1KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICAvLyBoaWRlIGJ5IGRlZmF1bHRcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xufVxuXG4udGFiLnNlbGVjdGVkOjphZnRlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xufVxuXG4udGFiLnNlbGVjdGVkIHsgb3V0bGluZTogbm9uZTsgfVxuIiwiLnRhYnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDE0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDEycHg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi50YWIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgei1pbmRleDogMTtcbn1cblxuLnRhYi10aWxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbn1cbi50YWItdGlsZSBpIHtcbiAgY29sb3I6ICMyMjI7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTFweCksIChtYXgtd2lkdGg6IDc4NnB4KSB7XG4gIC50YWItdGlsZSB7XG4gICAgcGFkZGluZzogMThweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc4NXB4KSwgKG1heC13aWR0aDogMzc1cHgpIHtcbiAgLnRhYi10aWxlIHtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICB9XG59XG4udGFiLnNlbGVjdGVkIC50YWItdGlsZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAwLCAwLCAyKTtcbn1cblxuLnRhYi10aWxlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogLTE7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG9wYWNpdHk6IDAuOTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG5cbi5ib29rbWFya3MtdGFiIC50YWItdGlsZTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZjhiNWE1LCAjZTJkMmZkKTtcbn1cblxuLnRvZG9zLXRhYiAudGFiLXRpbGU6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2EyZmZmZiwgI2ZmYmRkZSk7XG59XG5cbi5ub3Rlcy10YWIgLnRhYi10aWxlOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNkMmNkZmYsICM1ZmZmYmMpO1xufVxuXG4udGFiLXRpbGU6aG92ZXI6OmJlZm9yZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLnRhYi5zZWxlY3RlZCAudGFiLXRpbGU6OmJlZm9yZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAwcHggN3B4IDE3cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbn1cblxuLnRhYjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTEwcHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDNweDtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG59XG5cbi50YWIuc2VsZWN0ZWQ6OmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG59XG5cbi50YWIuc2VsZWN0ZWQge1xuICBvdXRsaW5lOiBub25lO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tabs',
                templateUrl: './tabs.component.html',
                styleUrls: ['./tabs.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/todo-item/todo-item.component.ts":
/*!**************************************************!*\
  !*** ./src/app/todo-item/todo-item.component.ts ***!
  \**************************************************/
/*! exports provided: TodoItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemComponent", function() { return TodoItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TodoItemComponent {
    constructor() {
        this.editClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onEditClick() {
        this.editClick.emit();
    }
    onDeleteClick() {
        this.deleteClick.emit();
    }
}
TodoItemComponent.ɵfac = function TodoItemComponent_Factory(t) { return new (t || TodoItemComponent)(); };
TodoItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoItemComponent, selectors: [["app-todo-item"]], inputs: { todo: "todo" }, outputs: { editClick: "editClick", deleteClick: "deleteClick" }, decls: 13, vars: 3, consts: [[1, "todo-item"], [1, "check-box"], [1, "material-icons-outlined"], [1, "todo-text"], [1, "todo-item-actions", 3, "click"], [1, "btn", "todo-item-action-btn", 3, "click"], [1, "material-icons"]], template: function TodoItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "check");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoItemComponent_Template_div_click_6_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoItemComponent_Template_div_click_7_listener() { return ctx.onEditClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoItemComponent_Template_div_click_10_listener() { return ctx.onDeleteClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("completed", ctx.todo.completed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.todo.text);
    } }, styles: [".todo-item[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 25px;\n  padding: 10px 12px;\n  cursor: pointer;\n}\n\n.todo-text[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.85);\n}\n\n.check-box[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 4px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-radius: 50%;\n  margin-right: 15px;\n}\n\n.check-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  opacity: 0;\n}\n\n.todo-item[_ngcontent-%COMP%]:hover   .todo-text[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.95);\n}\n\n.todo-item[_ngcontent-%COMP%]:hover   .check-box[_ngcontent-%COMP%] {\n  border-color: transparent;\n  background-color: rgba(255, 255, 255, 0.35);\n}\n\n.todo-item.completed[_ngcontent-%COMP%]   .todo-text[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.78);\n}\n\n.todo-item.completed[_ngcontent-%COMP%]   .check-box[_ngcontent-%COMP%] {\n  background: #09da59;\n  border-color: transparent;\n}\n\n.todo-item.completed[_ngcontent-%COMP%]   .check-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.todo-text[_ngcontent-%COMP%], .check-box[_ngcontent-%COMP%] {\n  transition: 0.12s;\n}\n\n.todo-item-actions[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  background: rgba(72, 72, 82, 0.85);\n  -webkit-backdrop-filter: blur(2px);\n          backdrop-filter: blur(2px);\n  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);\n  border-radius: 20px;\n  transition: 0.2s;\n  visibility: hidden;\n  opacity: 0;\n  transform: scale(0.8);\n}\n\n.todo-item-action-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  padding: 10px;\n  border-radius: inherit;\n}\n\n.todo-item-action-btn[_ngcontent-%COMP%]:first-child {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  padding-left: 14px;\n}\n\n.todo-item-action-btn[_ngcontent-%COMP%]:last-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  padding-right: 12px;\n}\n\n.todo-item-action-btn[_ngcontent-%COMP%]:hover {\n  background: #323235;\n}\n\n.todo-item-action-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.todo-item[_ngcontent-%COMP%]:hover   .todo-item-actions[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 1;\n  transform: scale(1);\n  transition-delay: 0.5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby1pdGVtL0M6XFxVc2Vyc1xcTUdcXERvd25sb2Fkc1xcTmV3IGZvbGRlclxcYW5ndWxhci1wZXJzb25hbC1kYXNoYm9hcmQtbWFpbi9zcmNcXGFwcFxcdG9kby1pdGVtXFx0b2RvLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RvZG8taXRlbS90b2RvLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUVBLG9DQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtFQUVBLGVBQUE7QUNGSjs7QURLQTtFQUNJLGdDQUFBO0FDRko7O0FES0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDJDQUFBO0VBRUEsa0JBQUE7RUFFQSxrQkFBQTtBQ0pKOztBRE1JO0VBQ0ksZUFBQTtFQUNBLFVBQUE7QUNKUjs7QURXSTtFQUNJLGdDQUFBO0FDUlI7O0FEV0k7RUFDSSx5QkFBQTtFQUNBLDJDQUFBO0FDVFI7O0FEY0k7RUFDSSxnQ0FBQTtBQ1hSOztBRGNJO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtBQ1pSOztBRGNRO0VBQ0ksVUFBQTtBQ1paOztBRGlCQTs7RUFFSSxpQkFBQTtBQ2RKOztBRGlCQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFFQSxrQ0FBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFFQSwyQ0FBQTtFQUVBLG1CQUFBO0VBRUEsZ0JBQUE7RUFLQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBQ3RCSjs7QUR5QkE7RUFDSSx1QkFBQTtFQUVBLGFBQUE7RUFFQSxzQkFBQTtBQ3hCSjs7QUQwQkk7RUFDSSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUN4QlI7O0FEMkJJO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FDekJSOztBRDRCSTtFQUNJLG1CQUFBO0FDMUJSOztBRDhCQTtFQUNJLGVBQUE7QUMzQko7O0FEOEJBO0VBQ0ksbUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFFQSxzQkFBQTtBQzVCSiIsImZpbGUiOiJzcmMvYXBwL3RvZG8taXRlbS90b2RvLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9kby1pdGVtIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYShibGFjaywgMC41KTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuXG4gICAgcGFkZGluZzogMTBweCAxMnB4O1xuXG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udG9kby10ZXh0IHtcbiAgICBjb2xvcjogcmdiYSh3aGl0ZSwgMC44NSk7XG59XG5cbi5jaGVjay1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEod2hpdGUsIDAuMzUpO1xuXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuXG4gICAgaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG59XG5cblxuXG4udG9kby1pdGVtOmhvdmVyIHtcbiAgICAudG9kby10ZXh0IHtcbiAgICAgICAgY29sb3I6IHJnYmEod2hpdGUsIDAuOTUpO1xuICAgIH1cblxuICAgIC5jaGVjay1ib3gge1xuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHdoaXRlLCAwLjM1KTtcbiAgICB9XG59XG5cbi50b2RvLWl0ZW0uY29tcGxldGVkIHtcbiAgICAudG9kby10ZXh0IHtcbiAgICAgICAgY29sb3I6IHJnYmEod2hpdGUsIDAuNzgpO1xuICAgIH1cblxuICAgIC5jaGVjay1ib3gge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoOSwgMjE4LCA4OSk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICAgICAgaSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4udG9kby10ZXh0LFxuLmNoZWNrLWJveCB7XG4gICAgdHJhbnNpdGlvbjogMC4xMnM7XG59XG5cbi50b2RvLWl0ZW0tYWN0aW9ucyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNXB4O1xuICAgIHJpZ2h0OiA1cHg7XG5cbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDcyLCA3MiwgODIsIDAuODUpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xuXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMnB4IHJnYmEoYmxhY2ssIDAuMik7XG5cbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuXG4gICAgdHJhbnNpdGlvbjogMC4ycztcblxuICAgIFxuICAgIFxuICAgIC8vIGhpZGUgYnkgZGVmYXVsdFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbn1cblxuLnRvZG8taXRlbS1hY3Rpb24tYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgXG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTRweDtcbiAgICB9XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuICAgIH1cbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDUwLCA1MCwgNTMpO1xuICAgIH1cbn1cblxuLnRvZG8taXRlbS1hY3Rpb24tYnRuIGkge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnRvZG8taXRlbTpob3ZlciAudG9kby1pdGVtLWFjdGlvbnMge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC41cztcbn0iLCIudG9kby1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udG9kby10ZXh0IHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XG59XG5cbi5jaGVjay1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiA0cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuLmNoZWNrLWJveCBpIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBvcGFjaXR5OiAwO1xufVxuXG4udG9kby1pdGVtOmhvdmVyIC50b2RvLXRleHQge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcbn1cbi50b2RvLWl0ZW06aG92ZXIgLmNoZWNrLWJveCB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSk7XG59XG5cbi50b2RvLWl0ZW0uY29tcGxldGVkIC50b2RvLXRleHQge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc4KTtcbn1cbi50b2RvLWl0ZW0uY29tcGxldGVkIC5jaGVjay1ib3gge1xuICBiYWNrZ3JvdW5kOiAjMDlkYTU5O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLnRvZG8taXRlbS5jb21wbGV0ZWQgLmNoZWNrLWJveCBpIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnRvZG8tdGV4dCxcbi5jaGVjay1ib3gge1xuICB0cmFuc2l0aW9uOiAwLjEycztcbn1cblxuLnRvZG8taXRlbS1hY3Rpb25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZDogcmdiYSg3MiwgNzIsIDgyLCAwLjg1KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xufVxuXG4udG9kby1pdGVtLWFjdGlvbi1idG4ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbn1cbi50b2RvLWl0ZW0tYWN0aW9uLWJ0bjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgcGFkZGluZy1sZWZ0OiAxNHB4O1xufVxuLnRvZG8taXRlbS1hY3Rpb24tYnRuOmxhc3QtY2hpbGQge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xufVxuLnRvZG8taXRlbS1hY3Rpb24tYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzMyMzIzNTtcbn1cblxuLnRvZG8taXRlbS1hY3Rpb24tYnRuIGkge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi50b2RvLWl0ZW06aG92ZXIgLnRvZG8taXRlbS1hY3Rpb25zIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC41cztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todo-item',
                templateUrl: './todo-item.component.html',
                styleUrls: ['./todo-item.component.scss']
            }]
    }], function () { return []; }, { todo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], editClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], deleteClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/todos/todos.component.ts":
/*!******************************************!*\
  !*** ./src/app/todos/todos.component.ts ***!
  \******************************************/
/*! exports provided: TodosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosComponent", function() { return TodosComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/todo.service */ "./src/app/shared/todo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../todo-item/todo-item.component */ "./src/app/todo-item/todo-item.component.ts");







function TodosComponent_app_todo_item_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-todo-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TodosComponent_app_todo_item_2_Template_app_todo_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const todo_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.toggleCompleted(todo_r1); })("editClick", function TodosComponent_app_todo_item_2_Template_app_todo_item_editClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const todo_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.onEditClick(todo_r1); })("deleteClick", function TodosComponent_app_todo_item_2_Template_app_todo_item_deleteClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const todo_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.onDeleteClick(todo_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const todo_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@todoItemAnim", undefined)("todo", todo_r1);
} }
class TodosComponent {
    constructor(todoService, router) {
        this.todoService = todoService;
        this.router = router;
    }
    ngOnInit() {
        this.todos = this.todoService.getTodos();
    }
    toggleCompleted(todo) {
        this.todoService.updateTodo(todo.id, { completed: !todo.completed });
    }
    onEditClick(todo) {
        this.router.navigate(['/todos', todo.id]);
    }
    onDeleteClick(todo) {
        this.todoService.deleteTodo(todo.id);
    }
    trackById(index, item) {
        return item.id;
    }
}
TodosComponent.ɵfac = function TodosComponent_Factory(t) { return new (t || TodosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
TodosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TodosComponent, selectors: [["app-todos"]], decls: 8, vars: 2, consts: [[1, "todos-wrapper"], [1, "container"], [3, "todo", "click", "editClick", "deleteClick", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "btns-container", "btns-centered"], ["routerLink", "add", 1, "btn", "add-btn"], [1, "material-icons-outlined"], [3, "todo", "click", "editClick", "deleteClick"]], template: function TodosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TodosComponent_app_todo_item_2_Template, 1, 2, "app-todo-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.todos)("ngForTrackBy", ctx.trackById);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_5__["TodoItemComponent"]], styles: [".todos-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-y: auto;\n}\n\n.add-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  margin-left: -3px;\n}\n\napp-todo-item[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kb3MvQzpcXFVzZXJzXFxNR1xcRG93bmxvYWRzXFxOZXcgZm9sZGVyXFxhbmd1bGFyLXBlcnNvbmFsLWRhc2hib2FyZC1tYWluL3NyY1xcYXBwXFx0b2Rvc1xcdG9kb3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RvZG9zL3RvZG9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3RvZG9zL3RvZG9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvZG9zLXdyYXBwZXIgeyBcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmFkZC1idG4gaSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0zcHg7XG59XG5cbmFwcC10b2RvLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59IiwiLnRvZG9zLXdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5hZGQtYnRuIGkge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IC0zcHg7XG59XG5cbmFwcC10b2RvLWl0ZW0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn0iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('todoItemAnim', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        opacity: 0,
                        height: 0,
                        marginBottom: 0
                    }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TodosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-todos',
                templateUrl: './todos.component.html',
                styleUrls: ['./todos.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('todoItemAnim', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                opacity: 0,
                                height: 0,
                                marginBottom: 0
                            }))
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: _shared_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MG\Downloads\New folder\angular-personal-dashboard-main\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map