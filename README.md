# Calendar

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Task Guidelines

text-align: center;
                    width: 30px;
                    padding: 3px;
                    background: #4CAF50;
                    color: white;
                    &.weekend {
                        background: #FBC02D;
                    }
                    &.invalid {
                        background: #333;
                    }
                    &.heading {
                        text-align: center;
                    }
                    &.holiday {
                        backgrng ound: #00e676;

## Calendar Display

Weekends are displayed using Hex Color Code #FBC02D
Weekdays are displayed using Hex Color Code #4CAF50
Holidays are displayed using Hex Color Code #00e676
Invalid days are displayed using Hex Color Code #333

## Resources Used

Dates and Times regarding Holidays are being retrieved using https://www.calendarindex.com/
General Layout and Styles are being utilized from the Angular Material Library https://material.angular.io/

## Time to Complete

Time to complete was approximately 2 hours, 47 minutes

## Known Bugs

None

## Incomplete Requirements

None

## Current Feature Enhancements

Partial caching of API Requests to speed up additional requests for country code and year pairings.
Tooltips displaying which holidays are associated with a certain day.
Virtual Scrolling to ensure swift rendering, even with multi-thousand day ranges.

## Future Feature Enhancements

Refactor Calendar Generation to allow for users to determine First Day of the Week.
More Robust Caching of the Requests made to CalendarIndex.
Obfuscation of CalendarIndex API by storing it in a backend, not applicable for the project.
Refactor Calendar styles to fit better into the Virtual scrolling frame.