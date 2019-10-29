import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "debug",
})
export class DebugPipe implements PipeTransform {
  public transform(value: any, id?: string): any {
    console.log(id, value);
    return "";
  }
}
