import { RejectionReasons } from "./rejection-reasons";

export interface FileValidationError {
  error: string;
  type: RejectionReasons;
}
