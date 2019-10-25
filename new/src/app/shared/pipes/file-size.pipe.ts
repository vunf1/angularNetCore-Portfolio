import {
  Pipe,
  PipeTransform,
} from "@angular/core";

@Pipe({
  name: "filesize",
})
export class FileSizePipe implements PipeTransform {
  public transform(size: number): string {
    return getFileSizeString(size);
  }
}

const units = ["bytes", "KB", "MB", "GB", "TB"];

export function getFileSizeString(size: number): string {
  if (isNaN(size)) {
    return "-";
  }

  let unitCount = 0;

  while (size >= 1024) {
    size /= 1024; // tslint:disable-line:no-parameter-reassignment
    unitCount++;
  }

  let fixed = 0;
  // Get the decimals
  const decimals = size - Math.floor(size);
  if (decimals * 100 > 1) {
    fixed = 2;
  } else if (decimals * 10 > 1) {
    fixed = 1;
  }

  return `${size.toFixed(fixed)} ${units[unitCount]}`;
}
