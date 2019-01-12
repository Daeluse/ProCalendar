(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <form (ngSubmit)=\"calendar.refresh()\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"avatar-icon\">\n        <mat-icon>calendar_today</mat-icon>\n      </div>\n      <mat-card-title>ProCalendar</mat-card-title>\n      <mat-card-subtitle>Range Viewer</mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n      <div>\n        <div>\n          <mat-form-field>\n            <input matInput placeholder=\"Start Date\" [(ngModel)]=\"startDate\" name=\"startDate\">\n          </mat-form-field>\n        </div>\n        <div>\n          <mat-form-field>\n            <input matInput placeholder=\"Number of days\" [(ngModel)]=\"range\" name=\"range\">\n          </mat-form-field>\n        </div>\n        <div>\n          <mat-form-field>\n            <input matInput placeholder=\"Country Code\" [(ngModel)]=\"countryCode\" name=\"countryCode\">\n          </mat-form-field>\n        </div>\n      </div>\n      <div>\n        <app-calendar #calendar [startDate]=\"startDate\" [endDate]=\"endDate\" [countryCode]=\"countryCode\"></app-calendar>\n      </div>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-raised-button type=\"submit\">Generate Calendar</button>\n    </mat-card-actions>\n  </form>\n</mat-card>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.startDate = '01/13/2019';
        this.countryCode = 'US';
        this._range = '17';
    }
    Object.defineProperty(AppComponent.prototype, "range", {
        get: function () {
            return this._range;
        },
        set: function (range) {
            this._range = range;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "endDate", {
        get: function () {
            if (this.startDate && this._range) {
                var endDate = new Date(this.startDate);
                endDate.setDate(endDate.getDate() + +this._range);
                return endDate;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _calendar_calendar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./calendar/calendar.module */ "./src/app/calendar/calendar.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");






// Material Imports



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _calendar_calendar_module__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/calendar/calendar.module.ts":
/*!*********************************************!*\
  !*** ./src/app/calendar/calendar.module.ts ***!
  \*********************************************/
/*! exports provided: CalendarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarModule", function() { return CalendarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_calendar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/calendar.component */ "./src/app/calendar/components/calendar.component.ts");






var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
    }
    CalendarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_calendar_component__WEBPACK_IMPORTED_MODULE_5__["CalendarComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"]
            ],
            exports: [_components_calendar_component__WEBPACK_IMPORTED_MODULE_5__["CalendarComponent"]],
            providers: [],
        })
    ], CalendarModule);
    return CalendarModule;
}());



/***/ }),

/***/ "./src/app/calendar/components/calendar.component.html":
/*!*************************************************************!*\
  !*** ./src/app/calendar/components/calendar.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<cdk-virtual-scroll-viewport itemSize=\"220\" class=\"calendar-viewport\">\r\n    <div *cdkVirtualFor=\"let month of calendar\" class=\"calendar-viewport-item\">\r\n        <table>\r\n            <thead>\r\n                <th>\r\n                    S\r\n                </th>\r\n                <th>\r\n                    M\r\n                </th>\r\n                <th>\r\n                    T\r\n                </th>\r\n                <th>\r\n                    W\r\n                </th>\r\n                <th>\r\n                    T\r\n                </th>\r\n                <th>\r\n                    F\r\n                </th>\r\n                <th>\r\n                    S\r\n                </th>\r\n            </thead>\r\n            <tbody>\r\n                <tr>\r\n                    <td colspan=\"7\" class=\"heading\">\r\n                        {{ months[month.month] }} {{ month.year}}\r\n                    </td>\r\n                </tr>\r\n                <ng-template ngFor let-week [ngForOf]=\"month.weeks\">\r\n                    <tr>\r\n                        <ng-template ngFor let-day [ngForOf]=\"week\">\r\n                            <td [class.weekend]=\"day?.isWeekend\" [class.holiday]=\"day?.holidays?.length > 0\"\r\n                                [class.invalid]=\"!day\" [matTooltip]=\"getHolidayList(day)\">\r\n                                {{ day?.date.getDate() }}\r\n                            </td>\r\n                        </ng-template>\r\n                    </tr>\r\n                </ng-template>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</cdk-virtual-scroll-viewport>"

/***/ }),

/***/ "./src/app/calendar/components/calendar.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/calendar/components/calendar.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGVuZGFyL2NvbXBvbmVudHMvY2FsZW5kYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/calendar/components/calendar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/calendar/components/calendar.component.ts ***!
  \***********************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_months__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/months */ "./src/app/calendar/constants/months.ts");
/* harmony import */ var _services_calendar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/calendar.service */ "./src/app/calendar/services/calendar.service.ts");
/* harmony import */ var _services_holiday_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/holiday.service */ "./src/app/calendar/services/holiday.service.ts");





var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(_changeDetectorRef, _calendarService, _holidayService) {
        this._changeDetectorRef = _changeDetectorRef;
        this._calendarService = _calendarService;
        this._holidayService = _holidayService;
        this.months = _constants_months__WEBPACK_IMPORTED_MODULE_2__["MONTHS"];
    }
    Object.defineProperty(CalendarComponent.prototype, "startDate", {
        get: function () {
            return this._startDate.getMonth() + 1 + "/" + this._startDate.getDate() + "/" + this._startDate.getFullYear();
        },
        set: function (startDate) {
            if (startDate) {
                this._startDate = new Date(startDate);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarComponent.prototype, "endDate", {
        get: function () {
            return this._endDate.getMonth() + 1 + "/" + this._endDate.getDate() + "/" + this._endDate.getFullYear();
        },
        set: function (endDate) {
            if (endDate) {
                this._endDate = new Date(endDate);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarComponent.prototype, "countryCode", {
        get: function () {
            return this._countryCode;
        },
        set: function (countryCode) {
            if (countryCode) {
                this._countryCode = countryCode;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarComponent.prototype, "calendar", {
        get: function () {
            return this._calendar;
        },
        enumerable: true,
        configurable: true
    });
    CalendarComponent.prototype.refresh = function () {
        var _this = this;
        this._holidayService.requestHolidays('US', this._startDate.getFullYear(), this._endDate.getFullYear()).subscribe(function (res) {
            _this._calendar = _this._calendarService.generateCalendar(_this._startDate, _this._endDate, res);
            _this._changeDetectorRef.detectChanges();
        }, function () {
            console.warn('We were unable to load holidays for the range requested, the will not be displayed.');
            _this._calendar = _this._calendarService.generateCalendar(_this._startDate, _this._endDate);
            _this._changeDetectorRef.detectChanges();
        });
    };
    CalendarComponent.prototype.getHolidayList = function (day) {
        if (day && day.holidays && day.holidays.length > 0) {
            return day.holidays.reduce(function (acc, holiday) {
                acc = holiday.name + '\n';
                return acc;
            }, '');
        }
        return null;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], CalendarComponent.prototype, "startDate", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], CalendarComponent.prototype, "endDate", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], CalendarComponent.prototype, "countryCode", null);
    CalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calendar',
            template: __webpack_require__(/*! ./calendar.component.html */ "./src/app/calendar/components/calendar.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./calendar.component.scss */ "./src/app/calendar/components/calendar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _services_calendar_service__WEBPACK_IMPORTED_MODULE_3__["CalendarService"],
            _services_holiday_service__WEBPACK_IMPORTED_MODULE_4__["HolidayService"]])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./src/app/calendar/constants/months.ts":
/*!**********************************************!*\
  !*** ./src/app/calendar/constants/months.ts ***!
  \**********************************************/
/*! exports provided: MONTHS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONTHS", function() { return MONTHS; });
var MONTHS = [
    'JANUARY',
    'FEBRUARY',
    'MARCH',
    'APRIL',
    'MAY',
    'JUNE',
    'JULY',
    'AUGUST',
    'SEPTEMBER',
    'OCTOBER',
    'NOVEMBER',
    'DECEMBER'
];


/***/ }),

/***/ "./src/app/calendar/models/calendar.ts":
/*!*********************************************!*\
  !*** ./src/app/calendar/models/calendar.ts ***!
  \*********************************************/
/*! exports provided: Month, Day */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Month", function() { return Month; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Day", function() { return Day; });
var Month = /** @class */ (function () {
    function Month(date) {
        this.weeks = [];
        this.month = date.getMonth();
        this.year = date.getFullYear();
    }
    return Month;
}());

var Day = /** @class */ (function () {
    function Day(date) {
        this.holidays = [];
        this.isWeekend = false;
        this._date = new Date(date);
        this._processDateObject(this._date);
    }
    Object.defineProperty(Day.prototype, "date", {
        get: function () {
            return this._date;
        },
        enumerable: true,
        configurable: true
    });
    Day.prototype._processDateObject = function (date) {
        if (date.getDay() === 0 || date.getDay() === 6) {
            this.isWeekend = true;
        }
    };
    return Day;
}());



/***/ }),

/***/ "./src/app/calendar/services/calendar.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/calendar/services/calendar.service.ts ***!
  \*******************************************************/
/*! exports provided: CalendarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarService", function() { return CalendarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/calendar */ "./src/app/calendar/models/calendar.ts");



var CalendarService = /** @class */ (function () {
    function CalendarService() {
    }
    CalendarService.prototype.generateCalendar = function (startDate, endDate, holidays) {
        // Ensure our date range is valid
        if (!this._isValidDate(startDate)
            || !this._isValidDate(endDate)
            || startDate.getTime() > endDate.getTime()) {
            return [];
        }
        var calendar = this._generateRange(startDate, endDate, holidays);
        return calendar;
    };
    CalendarService.prototype._generateRange = function (startDate, endDate, holidays) {
        // Backing Data Stores for use in the loop
        var calendar = [];
        var activeDate = new Date(startDate);
        var activeWeek = [];
        var activeMonth = new _models_calendar__WEBPACK_IMPORTED_MODULE_2__["Month"](activeDate);
        // Loop through each day between the start and end dates
        while (activeDate <= endDate) {
            // Check if we need to perform left-hand padding to ensure proper position of the start date
            if (activeWeek.length < activeDate.getDay()) {
                activeWeek.push.apply(activeWeek, new Array(activeDate.getDay()));
            }
            // Create a new Day object to store relevant information for rendering
            var day = new _models_calendar__WEBPACK_IMPORTED_MODULE_2__["Day"](activeDate);
            // Append relevant holidays to the Day
            if (holidays != null) {
                day.holidays = this._getActiveHolidays(day, holidays);
            }
            // Append the Day to the Week
            activeWeek.push(day);
            // Check if the Day will be at the end of the week, or the end of the range
            if (activeDate.getDay() === 6
                || activeDate.getTime() === endDate.getTime()) {
                // Perform right-hand padding where applicable
                if (activeWeek.length < 7) {
                    activeWeek.push.apply(activeWeek, new Array(7 - activeWeek.length));
                }
                // Append the Week to the Month
                activeMonth.weeks.push(activeWeek);
                activeWeek = [];
            }
            // Move to the next Day in the loop
            activeDate = this._incrementDate(activeDate, 1);
            // Check if the Month or the Year needs to be incremented
            if (activeDate.getMonth() !== activeMonth.month
                || activeDate.getFullYear() !== activeMonth.year) {
                if (activeWeek.length > 0) {
                    // Perform right-hand padding where applicable
                    if (activeWeek.length < 7) {
                        activeWeek.push.apply(activeWeek, new Array(7 - activeWeek.length));
                    }
                    // Append the Week to the Month
                    activeMonth.weeks.push(activeWeek);
                    activeWeek = [];
                }
                // Append the Month to the Calendar
                calendar.push(activeMonth);
                activeMonth = new _models_calendar__WEBPACK_IMPORTED_MODULE_2__["Month"](activeDate);
            }
        }
        // Append the Month to the Calendar
        calendar.push(activeMonth);
        return calendar;
    };
    CalendarService.prototype._incrementDate = function (date, count) {
        // Re-Initialize the date to prevent in-line mutation from the caller
        date = new Date(date);
        date.setDate(date.getDate() + count);
        return date;
    };
    CalendarService.prototype._getActiveHolidays = function (day, holidays) {
        holidays = holidays.reduce(function (acc, holiday) {
            if (holiday.start.getTime() <= day.date.getTime()
                && holiday.end.getTime() > day.date.getTime()
                && holiday.date.getFullYear() === day.date.getFullYear()) {
                acc.push(holiday);
            }
            return acc;
        }, []);
        return holidays;
    };
    CalendarService.prototype._isValidDate = function (date) {
        return date instanceof Date && !isNaN(date);
    };
    CalendarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CalendarService);
    return CalendarService;
}());



/***/ }),

/***/ "./src/app/calendar/services/holiday.service.ts":
/*!******************************************************!*\
  !*** ./src/app/calendar/services/holiday.service.ts ***!
  \******************************************************/
/*! exports provided: HolidayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HolidayService", function() { return HolidayService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");






var HolidayService = /** @class */ (function () {
    function HolidayService(_httpClient) {
        this._httpClient = _httpClient;
        this._requestCache = {};
    }
    HolidayService.prototype.requestHolidays = function (countryCode, startYear, endYear) {
        var _this = this;
        var requests = [];
        var year = startYear;
        var request;
        while (year <= endYear) {
            /* tslint:disable */
            request = "https://www.calendarindex.com/api/v1/holidays?api_key=" + _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].holidayApiKey + "&country=" + countryCode + "&year=" + year;
            /* tslint:enable */
            if (this._requestCache[request] != null) {
                requests.push(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this._requestCache[request]));
            }
            else {
                requests.push(this._httpClient.get(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
                    _this._requestCache[request] = res;
                })));
            }
            year += 1;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(requests).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["timeout"])(10000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (holidays) {
            holidays = holidays.reduce(function (acc, holidayResponse) {
                acc.push.apply(acc, holidayResponse.response.holidays);
                return acc;
            }, []);
            return holidays.map(function (holiday) {
                holiday.date = new Date(holiday.date);
                holiday.start = new Date(holiday.start);
                holiday.end = new Date(holiday.end);
                return holiday;
            });
        }));
    };
    HolidayService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HolidayService);
    return HolidayService;
}());



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
var environment = {
    production: false,
    holidayApiKey: 'f2c4ba76497625d440fa7cda0fa1e7c45f59094b'
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\micha\workspace\calendar\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map