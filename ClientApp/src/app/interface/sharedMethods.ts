import * as alertify from "node_modules/alertify.js";

/**
 *
 *  Muda o estado do elemento para ficar visivel
 *  o element (agarra o id do child) quando clicado (Melhoria possivel)
 *
 */
export function escondeElement(id: string): void {
  const element = document.getElementById(id);
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

/**
 * @version CustomAlertify
 *
 * @param logPosition
 * @value   bottom right
 * @value   bottom left
 * @value   top right
 * @value   top left
 *
 */
export class CustomAlert {

  public checker: boolean;
  constructor(logPosition: string) {

    alertify.logPosition(logPosition);
    alertify.maxLogItems(0);

  }

  public NotificationSuccess(string_html: any) {
    alertify.maxLogItems(1);
    alertify
      .success(string_html);
  }

  public NotificationError(string_html: any) {
    alertify
      .error(string_html);
  }

  public ModalOK(string_html: any) {
    alertify
      .alert(string_html);
  }

  public ConfirmDialog(string_html: string, promise: any) {
    /**
     * not working properly
     */
    alertify.confirm(string_html,
      (err, data) => {
        alertify.success(err);
        alertify.success(data);
        this.checker = true;
      },
      () => {
        alertify.error("Cancel");
        this.checker = false;
      });
    return  ;
  }

}

// tslint:disable-next-line: max-classes-per-file
export class ConsolaBrowser {
  /** Any, pois pode ser enviado objects, json format, html , erros .... */
  public warn(string: any) {
    console.warn(string);
  }
  public log(string: any) {
    console.log(string);
  }
  public error(string: any) {
    console.error(string);
  }
  public info(string: any) {
    console.info(string);
  }
}
