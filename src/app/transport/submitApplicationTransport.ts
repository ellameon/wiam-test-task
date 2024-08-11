import { SubmitApplicationData } from "../types";

export async function submitApplicationTransport(payload: SubmitApplicationData) {
  return await fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      title: `${payload.firstName} ${payload.lastName}`,
    })
  })
}