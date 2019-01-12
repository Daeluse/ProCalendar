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
      const endDate = new Date(this.startDate);
      endDate.setDate(endDate.getDate() + +this._range);
      return endDate;
    }
    return null;
  }

  public startDate = '01/13/2019';
  public countryCode = 'US';

  private _range = '17';

}
