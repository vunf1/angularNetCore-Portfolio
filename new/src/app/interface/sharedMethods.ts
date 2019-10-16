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

  constructor(logPosition: string) {

    alertify.logPosition(logPosition);
    alertify.maxLogItems(0);
  }

  public alertLogSuccess(string_html: any) {
    alertify.maxLogItems(1);
    alertify
      .success(string_html);
  }

  public alertLogError(string_html: any) {
    alertify
      .error(string_html);
  }

  public alertModalOK(string_html: any) {
    alertify
      .alert(
        "<h1>Ola</h1>" + string_html, "OIOI" + string_html);
  }

  public alertDialogOK(string_html: any) {
    alertify.alert("Alert Title").setHeader("<h2>Ola</h2>");

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
