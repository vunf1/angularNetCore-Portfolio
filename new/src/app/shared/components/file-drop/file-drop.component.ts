import { Component, Output, EventEmitter, Input, OnInit } from "@angular/core";

import { FileValidationService } from "shared/services/file-validation.service";
import { DroppedFiles } from "./dropped-files";
import { AcceptedFile } from "./accepted-file";
import { RejectedFile } from "./rejected-file";
import { RejectionReasons } from "./rejection-reasons";
import { FileValidationError } from "./file-validation-error";
import { getFileSizeString } from "shared/pipes/file-size.pipe";
import { mimeTypes } from "shared/services/mime-types";

@Component({
  selector: "apr-file-drop",
  templateUrl: "./file-drop.component.html",
})
export class FileDropComponent implements OnInit {
  @Input() public allowMultiple!: boolean;

  @Input() public fileName!: string;

  @Input()
  set supportedFileTypes(value: string[]) {
    this.fileValidationService.supportedFileTypes = value;
  }

  @Input()
  set maximumSizeBytes(value: number) {
    this.fileValidationService.maximumFileSizeInBytes = value;
  }

  @Output()
  public fileValidationErrors = new EventEmitter<FileValidationError[]>();

  @Output()
  public filesModified = new EventEmitter<File[]>();

  public selectedFiles: File[] = [];

  constructor(public fileValidationService: FileValidationService) { }

  public ngOnInit() {
    if (this.fileName) {
      this.selectedFiles = [{
        name: this.fileName,
        lastModified: 0,
        size: 0,
        type: "",
        slice: () => {} as Blob,
      }];
    }
  }

  public filesDropped(files: DroppedFiles) {
    if (!files.areAllAccepted) {
      this.selectedFiles = [];
    } else {
      this.selectedFiles = files.accepted.map((file) => file.file);
    }

    if (files.rejected.length > 0) {
      this.fileValidationErrors.emit(this.rejectionReasons(files.rejected));
    } else {
      this.fileValidationErrors.emit([]);
    }

    this.filesModified.emit(this.selectedFiles);
  }

  public fileRejected(file: RejectedFile) {
    this.selectedFiles = [];
    this.fileValidationErrors.emit([{
      error: this.rejectionReason(file.rejectionReason),
      type: file.rejectionReason,
    }]);
  }

  public fileAccepted($event: AcceptedFile) {
    this.selectedFiles = [$event.file];
    this.filesModified.emit(this.selectedFiles);
    this.fileValidationErrors.emit([]);
  }

  public onFileChange(event: any) {
    const target: DataTransfer = event.target as DataTransfer;

    if (!this.allowMultiple && target.files.length > 1) {
      return this.fileValidationErrors.emit([{
        error: this.rejectionReason(RejectionReasons.MultipleNotSupported),
        type: RejectionReasons.MultipleNotSupported,
      }]);
    }

    if (this.checkFilesAreSupported(target.files)) {
      const array: File[] = [];

      for (let i = 0; i < target.files.length; i++) {
        if (target.files.item(i) !== null) {
          array.push(target.files.item(i) as File);
        }
      }

      this.filesModified.emit(array);
      this.fileValidationErrors.emit([]);
      this.selectedFiles = array;
    }
  }

  public removeFile(index: number) {
    this.selectedFiles.splice(index, 1);
    this.filesModified.emit(this.selectedFiles);
  }

  private checkFilesAreSupported(files: FileList): boolean {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (!this.fileValidationService.isFileTypeSupported(file as File)) {
        this.fileRejected(new RejectedFile(file, RejectionReasons.FileType));

        return false;
      }

      if (!this.fileValidationService.isFileSizeSupported(file as File)) {
        this.fileRejected(new RejectedFile(file, RejectionReasons.FileSize));

        return false;
      }
    }

    return true;
  }

  private rejectionReason(reason: RejectionReasons): string {
    switch (reason) {
      case RejectionReasons.FileSize:
        const sizeString = getFileSizeString(this.fileValidationService.maximumFileSizeInBytes);
        return `File size is not supported. Maximum size is ${sizeString}`;
      case RejectionReasons.FileType:
      const supportedFriendlyTypes = this.fileValidationService.supportedFileTypes
        .map((t) => mimeTypes.getExtension(t));
      return `File type is not supported. Supported type(s): ${supportedFriendlyTypes.join(", ")}`;
      case RejectionReasons.MultipleNotSupported:
        return "Only one file can be uploaded";
      default:
        return "File was rejected";
    }
  }

  private rejectionReasons(files: RejectedFile[]): FileValidationError[] {
    const combinedErrors: FileValidationError[] = [];

    const typeNotSupported = files.filter((x) => x.rejectionReason === RejectionReasons.FileType);
    if (typeNotSupported.length > 0) {
      combinedErrors.push(
        {
          error: `File types are not supported for: (${typeNotSupported.map((x) => x.file.name).join(", ")})`,
          type: RejectionReasons.FileType,
        });
    }

    const sizeNotSupported = files.filter((x) => x.rejectionReason === RejectionReasons.FileSize);
    if (sizeNotSupported.length > 0) {
      combinedErrors.push(
        {
          error: `File size are not supported for: (${sizeNotSupported.map((x) => x.file.name).join(", ")})`,
          type: RejectionReasons.FileSize,
        });
    }

    const unknownReasons = files.filter((x) => x.rejectionReason === RejectionReasons.Unknown);
    if (unknownReasons.length > 0) {
      combinedErrors.push(
        {
          error: `Files were rejected: (${unknownReasons.map((x) => x.file.name).join(", ")})`,
          type: RejectionReasons.Unknown,
        });
    }

    return combinedErrors;
  }
}
