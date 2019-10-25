export class AcceptedFile {
  public get file(): File {
    return this.acceptedFile;
  }

  constructor(private acceptedFile: File) {}
}
