import { ChangeDetectorRef, Pipe, PipeTransform, Injectable } from "@angular/core";

import { first } from "rxjs/operators";
import * as momentTz from "moment-timezone";

import { DateFormat, DateTimeFormat } from "shared/constants/dateFormatConstants";
import { AuthenticatedUserService } from "core/services";
import { AuthenticatedUserModel } from "api-models";

@Pipe({
  name: "utcToTimeZone",
})
export class UtcToTimeZonePipe implements PipeTransform {
  private _latestValue = "";
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private authenticatedUserService: AuthenticatedUserService,
  ) { }

  public transform(value: string | Date, format?: string, timeZoneId?: string): any {
    const timeZoneFormat = format === "DateTime" ? DateTimeFormat.display.dateA11yLabel : format
      || DateFormat.display.dateA11yLabel;
    let timeZone = timeZoneId || "";

    this.authenticatedUserService.authenticatedUser.pipe(first()).subscribe((user: AuthenticatedUserModel) => {
      if (!timeZoneId) {
        timeZone = user.timeZoneId || "UTC";
      }

      let date = momentTz
        .utc(value)
        .tz(timeZone)
        .format(timeZoneFormat);

      if (date === "Invalid date") {
        date = "";
      }

      this._latestValue = date;
      this.changeDetectorRef.markForCheck();
    });

    return this._latestValue;
  }
}
