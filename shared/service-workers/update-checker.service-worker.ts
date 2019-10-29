import { SwUpdate } from "@angular/service-worker";
import { ApplicationRef, Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material";

import { interval } from "rxjs";

@Injectable()
export class UpdateCheckerServiceWorker {
  constructor(appRef: ApplicationRef, updates: SwUpdate, snackbar: MatSnackBar) {
    updates.available.subscribe((event) => {
      const snack = snackbar.open("An update has been released, please reload the page", "Reload");
      snack
        .onAction()
        .subscribe(() => {
          updates.activateUpdate()
            .then(() => (document as any).location.reload());
        });
    });

    const everyTenMinutes$ = interval(10 * 60 * 1000);
    everyTenMinutes$.subscribe(() => updates.checkForUpdate());
  }
}
