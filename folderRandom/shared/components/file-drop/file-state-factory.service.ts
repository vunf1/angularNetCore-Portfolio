import { Injectable } from "@angular/core";

import { FileState } from "./file-state";
import { FileValidationService } from "shared/services/file-validation.service";

@Injectable()
export class FileStateFactory {
  public currentFile: DataTransfer | null = null;

  constructor(private fileValidationService: FileValidationService) { }

  public Create(): FileState {
    return new FileState(this.fileValidationService);
  }
}
