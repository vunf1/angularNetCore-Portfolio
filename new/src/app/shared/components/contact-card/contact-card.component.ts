import { Component, OnInit, Input } from "@angular/core";

import { Contact } from "../../../api-models/instructions/contact";

@Component({
  selector: "apr-contact-card",
  templateUrl: "./contact-card.component.html",
})
export class ContactCardComponent implements OnInit {
  @Input() public contact: Contact | undefined;

  constructor() {}

  public ngOnInit() {}
}
