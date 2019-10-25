import { RejectionReasons } from "./rejection-reasons";

export class RejectedFile {
  public get file(): File {
    return this.acceptedFile;
  }

  public get rejectionReason(): RejectionReasons {
    return this.reason;
  }

  constructor(private acceptedFile: File, private reason: RejectionReasons) {}
}
