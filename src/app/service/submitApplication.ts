import { SubmitApplicationData } from "../types";
import { submitApplicationTransport } from "../transport";

export function submitApplication (payload: SubmitApplicationData) {
  submitApplicationTransport(payload).then(res => {
    console.log(res)
  })
}