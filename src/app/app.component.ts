import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { ValidErrorStateMatcher } from './shared/matchers/valid.matcher';
import { DateValidator } from './shared/validators/date.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  public dateForm = new FormGroup({
    dateControl: new FormControl('01/13/2019', [
      Validators.required,
      DateValidator
    ]),
    rangeControl: new FormControl('365', [
      Validators.required,
      Validators.pattern(/^[0-9]*$/)
    ]),
    countryCodeControl: new FormControl('US', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(2)
    ])
  });
  public matcher = new ValidErrorStateMatcher();

}
