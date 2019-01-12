import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  public set range(range: string) {
    this._range = range;
  }
  public get range(): string {
    return this._range;
  }

  public get endDate(): Date {
    if (this.startDate && this._range) {
      let endDate = new Date(this.startDate);
      endDate.setDate(endDate.getDate() + +this._range);
      return endDate;
    }
    return null;
  }

  public startDate: string = '01/13/2019';
  public countryCode: string = 'US';

  private _range: string = '17';

}
