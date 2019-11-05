import { Pipe, PipeTransform, LOCALE_ID, Inject } from "@angular/core";
import { CurrencyPipe } from "@angular/common";

@Pipe({
  name: "currency",
})
export class CustomCurrencyPipe extends CurrencyPipe implements PipeTransform {

constructor(@Inject(LOCALE_ID) locale: string) {
  super(locale);
}

  public transform(value: any, ...args: any[]): any {
    // Fixes an issue with Built-in currency pipe which doesn't handle all non-numeric values (whitespace strings)
    if (isNaN(value) || !parseInt(value, 10)) {
      return value;
    }

    return super.transform(value, ...args);
  }
}
