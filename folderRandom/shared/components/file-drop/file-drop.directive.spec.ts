import { ElementRef } from "@angular/core";

import { FileDropDirective } from "./file-drop.directive";
import { FileStateFactory } from "./file-state-factory.service";
import { FileState } from "./file-state";
import { RejectionReasons } from "./rejection-reasons";
import { FileValidationService } from "shared/services/file-validation.service";

describe("FileDropDirectiveComponent", () => {
  it("should be initialised", () => {
    const fileService: FileStateFactory = new FileStateFactory(new FileValidationService());
    const elementRef = {} as ElementRef;
    const directive: FileDropDirective = new FileDropDirective(elementRef, fileService);

    directive.ngOnInit();
    expect(directive).toBeTruthy();
  });

  it("onDragOver adds current file", (done) => {
    const fileState = {
      currentFile: null,
    } as FileState;

    const fileStateFactory = {
      Create: () => fileState,
    } as FileStateFactory;

    const elementRef = {
      nativeElement: {},
    } as ElementRef;

    const dragOverEvent = {
      type: "dragover",
      currentTarget: elementRef.nativeElement,
      dataTransfer: { files: {} as FileList } as DataTransfer,
      preventDefault: () => { },
      stopPropagation: () => { },
    } as DragEvent;

    const fileDropDirective = new FileDropDirective(elementRef, fileStateFactory);

    fileDropDirective.hoverStart.subscribe((result: any) => {
      expect(result).toBeUndefined();
      done();
    });

    fileDropDirective.onDragOver(dragOverEvent);
  });

  it("onDragLeave ends hover", (done) => {
    const fileState = {
      currentFile: {} as DataTransfer,
    } as FileState;

    const fileStateFactory = {
      Create: () => fileState,
    } as FileStateFactory;

    const elementRef = {
      nativeElement: {},
    } as ElementRef;

    const dragLeaveEvent = {
      type: "dragleave",
      currentTarget: elementRef.nativeElement,
      preventDefault: () => { },
      stopPropagation: () => { },
    } as DragEvent;

    const fileDropDirective = new FileDropDirective(elementRef, fileStateFactory);

    fileDropDirective.hoverEnd.subscribe((result: any) => {
      expect(result).toBeUndefined();
      done();
    });

    fileDropDirective.onDragLeave(dragLeaveEvent);
  });

  it("onDrop accepts valid file data", (done) => {
    const file = {
      name: "Accepted",
      lastModified: 0,
    } as File;

    const fileList = {
      length: 1,
      item: (index: number) => file,
      0: file,
    } as FileList;

    const fileState = {
      currentFile: {} as DataTransfer,
      isFileValid: () => 0 as RejectionReasons,
      getFiles: () => fileList as FileList,
    } as FileState;

    const fileStateFactory = {
      Create: () => fileState,
    } as FileStateFactory;

    const elementRef = {
      nativeElement: {},
    } as ElementRef;

    const onDropEvent = {
      type: "drop",
      currentTarget: elementRef.nativeElement,
      dataTransfer: { files: {} as FileList } as DataTransfer,
      preventDefault: () => { },
      stopPropagation: () => { },
    } as DragEvent;

    const fileDropDirective = new FileDropDirective(elementRef, fileStateFactory);
    fileDropDirective.allowMultiple = false;

    fileDropDirective.fileAccepted.subscribe((result: any) => {
      expect(result.acceptedFile.name).toEqual("Accepted");
      done();
    });

    fileDropDirective.onDrop(onDropEvent);
  });
});
