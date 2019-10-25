import { AcceptedFile } from "./accepted-file";
import { RejectedFile } from "./rejected-file";

export class DroppedFiles {
  public get accepted(): AcceptedFile[] {
    return this.acceptedFiles;
  }

  public get rejected(): RejectedFile[] {
    return this.rejectedFiles;
  }

  constructor(private acceptedFiles: AcceptedFile[] = [], private rejectedFiles: RejectedFile[] = []) {}

  public areAllAccepted(): boolean {
    return this.acceptedFiles.length > 0 && this.rejectedFiles.length === 0;
  }
}
