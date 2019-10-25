import { Directive, EventEmitter, HostListener, Output, Input, OnInit, ElementRef } from "@angular/core";

import { FileState } from "./file-state";
import { RejectionReasons } from "./rejection-reasons";

import { AcceptedFile } from "./accepted-file";
import { RejectedFile } from "./rejected-file";
import { DroppedFiles } from "./dropped-files";
import { FileStateFactory } from "./file-state-factory.service";

@Directive({ selector: "[aprFileDrop]" })
export class FileDropDirective implements OnInit {
  @Output()
  public hoverStart: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  public hoverEnd: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  public fileAccepted: EventEmitter<AcceptedFile> = new EventEmitter<AcceptedFile>();
  @Output()
  public fileRejected: EventEmitter<RejectedFile> = new EventEmitter<RejectedFile>();
  @Output()
  public filesDropped: EventEmitter<DroppedFiles> = new EventEmitter<DroppedFiles>();

  @Input()
  public allowMultiple!: boolean;
  @Input()
  public supportedFileTypes: string[] = [];
  @Input()
  public maximumSizeBytes!: number;

  private fileState: FileState;

  public constructor(private element: ElementRef, fileStateFactory: FileStateFactory) {
    this.fileState = fileStateFactory.Create();
  }

  public ngOnInit() {
    this.fileState.setExpectedFileProperties(this.supportedFileTypes, this.maximumSizeBytes);
  }

  @HostListener("dragover", ["$event"])
  public onDragOver(event: Event): void {
    if (this.fileState.currentFile === null) {
      this.fileState.currentFile = this.getDataTransferObject(event);
      if (this.fileState.currentFile === null) {
        return;
      }
      this.hoverStart.emit();
    }
    this.preventAndStopEventPropagation(event);
  }

  @HostListener("dragleave", ["$event"])
  public onDragLeave(event: Event): void {
    if (this.fileState.currentFile !== null) {
      this.fileState.currentFile = null;
      if (event.currentTarget === (this as any).element[0]) {
        return;
      }
      this.hoverEnd.emit();
    }
    this.preventAndStopEventPropagation(event);
  }

  @HostListener("drop", ["$event"])
  public onDrop(event: Event): void {
    if (this.fileState.currentFile !== null) {
      this.hoverEnd.emit();

      this.fileState.currentFile = this.getDataTransferObject(event);

      if (this.allowMultiple) {
        const droppedFiles: DroppedFiles = this.fileState.verifyFiles();
        this.filesDropped.emit(droppedFiles);
      } else {
        const files = this.fileState.getFiles() || [];

        if (files.length > 1) {
          this.fileRejected.emit(new RejectedFile(files[0], RejectionReasons.MultipleNotSupported));
        } else {
          const rejectionReason: RejectionReasons = this.fileState.isFileValid();

          const fileData: File = files[0];
          if (rejectionReason === RejectionReasons.None) {
            this.fileAccepted.emit(new AcceptedFile(fileData));
          } else {
            this.fileRejected.emit(new RejectedFile(fileData, rejectionReason));
          }
        }
      }

      this.fileState.currentFile = null;
    }

    this.preventAndStopEventPropagation(event);
  }

  private preventAndStopEventPropagation(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
  }

  private getDataTransferObject(event: Event | any): DataTransfer {
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }
}
