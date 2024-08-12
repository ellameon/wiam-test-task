import { SubmitApplicationData } from "../types";
import { submitApplicationTransport } from "../transport";

export function submitApplication(payload: SubmitApplicationData) {
  return submitApplicationTransport(payload)
}