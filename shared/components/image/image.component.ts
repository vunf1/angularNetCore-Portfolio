import { Component, EventEmitter, Input, Output } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { HttpErrorResponse } from "@angular/common/http";

import { EMPTY, Observable, BehaviorSubject } from "rxjs";
import { catchError, map, take } from "rxjs/operators";
import * as Moment from "moment";

import { ApiClientService } from "core/services";

import { Image } from "shared/components/image/image";

import { StoreRoutes } from "api-models";

@Component({
  selector: "apr-image",
  templateUrl: "./image.component.html",
})
export class ImageComponent {
  @Input("image")
  set image(value: Image) {
    if (this._image && (this._image.imageId === value.imageId)) {
      return;
    }

    this._image = value;

    if (!this._image) {
      this.empty.next(true);
      return;
    }

    if (this._image.url) {
      this.imageToShow = this._image.url;
      return;
    }

    const obs = this.getImage().subscribe(
      () => {
        obs.unsubscribe();
      },
      (error) => {
        this.error = error.message;
        obs.unsubscribe();
      },
    );
  }

  get image(): Image {
    return this._image;
  }

  @Input() public height!: string;
  @Input() public isAvatar = false;
  @Output() public imgSrcLoadError = new EventEmitter<Image>();

  public empty = new BehaviorSubject<boolean>(false);
  public error = new BehaviorSubject<boolean>(false);
  public imageToShow: SafeUrl | undefined;
  public isImageLoading = false;
  private _image!: Image;

  constructor(
    private apiClient: ApiClientService,
    private sanitizer: DomSanitizer,
  ) { }

  public onError(event: Event) {
    const url = this.image.url;
    if (url && this.hasUrlExpired(url)) {
      this.imgSrcLoadError.emit(this.image);
    } else {
      this.imageToShow = undefined;
      this.error.next(true);
    }
  }

  public hasUrlExpired(url: string): boolean {
    const urlObj = new URL(url);
    const expiryTime = urlObj.searchParams.get("se") && Moment(urlObj.searchParams.get("se") as string);
    if (expiryTime) {
      const timeNow = Moment();

      if (!expiryTime.isAfter(timeNow)) {
        return true;
      }
    }

    return false;
  }

  public getImage(): Observable<any> {
    this.reset();

    return this.apiClient
      .get(
        [
          `${StoreRoutes.controller}/`,
          `${this.image.sourceId}/`,
          `${this.image.fileStoreId}/`,
          this.image.imageId,
        ].join(""),
        { handleAndNavigateOnError: false, httpOptions: { responseType: "blob" as "json" } },
      )
      .pipe(
        take(1),
        map((result) => {
          this.isImageLoading = false;
          this.createImageFromBlob(result);
        }),
        catchError((error: HttpErrorResponse) => {
          this.isImageLoading = false;

          if (error.status === 404) {
            this.empty.next(true);
          } else {
            this.error.next(true);
          }

          return EMPTY;
        }),
      );
  }

  public createImageFromBlob(image: Blob) {
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        this.imageToShow = this.sanitizer.bypassSecurityTrustUrl(reader.result as string);
        this.isImageLoading = false;
      },
      false,
    );

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  private reset() {
    this.isImageLoading = true;
    this.imageToShow = undefined;
    this.empty.next(false);
    this.error.next(false);
  }
}
