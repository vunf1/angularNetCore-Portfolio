import { RejectionReasons } from "./rejection-reasons";
import { AcceptedFile } from "./accepted-file";
import { RejectedFile } from "./rejected-file";
import { DroppedFiles } from "./dropped-files";
import { FileValidationService } from "shared/services/file-validation.service";

export class FileState {
  private currentObject!: DataTransfer | null;

  public get currentFile(): DataTransfer | null {
    return this.currentObject;
  }
  public set currentFile(thisFile: DataTransfer | null) {
    this.currentObject = thisFile;

    if (this.currentObject !== null && this.currentObject !== undefined) {
      this.currentObject.dropEffect = "copy";
      return;
    }
  }

  constructor(private fileValidationService: FileValidationService) {
  }

  public setExpectedFileProperties(supportFileFormats: string[], maximumFileSize: number) {
    this.fileValidationService.supportedFileTypes = supportFileFormats;
    this.fileValidationService.maximumFileSizeInBytes = maximumFileSize;
  }

  public getFiles(): FileList | null {
    if (this.currentObject === null) {
      return null;
    }

    if (this.currentObject.files.length === 0) {
      return null;
    }

    return this.currentObject.files;
  }

  public isFileValid(): RejectionReasons {
    const currentFiles: FileList | null = this.getFiles();
    if (!currentFiles) {
      return RejectionReasons.Unknown;
    }

    return this.getRejectionReason(currentFiles[0]);
  }

  public verifyFiles(): DroppedFiles {
    const currentFiles: FileList | null = this.getFiles();
    const acceptedFiles: AcceptedFile[] = [];
    const rejectedFiles: RejectedFile[] = [];

    if (currentFiles === null) {
      return new DroppedFiles();
    }

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < currentFiles.length; ++i) {
      const rejectionReason = this.getRejectionReason(currentFiles[i]);
      if (rejectionReason !== RejectionReasons.None) {
        rejectedFiles.push(new RejectedFile(currentFiles[i], rejectionReason));
        continue;
      }

      acceptedFiles.push(new AcceptedFile(currentFiles[i]));
    }

    return new DroppedFiles(acceptedFiles, rejectedFiles);
  }

  private getRejectionReason(file: File): RejectionReasons {
    if (!this.fileValidationService.isFileTypeSupported(file)) {
      return RejectionReasons.FileType;
    }

    if (!this.fileValidationService.isFileSizeSupported(file)) {
      return RejectionReasons.FileSize;
    }

    return RejectionReasons.None;
  }
}
