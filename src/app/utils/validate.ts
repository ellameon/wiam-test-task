import { LoanStore, LoanStoreError } from "../types";

export function validate(store: LoanStore, fields: (keyof LoanStore)[]): LoanStoreError[] {
  const errors: LoanStoreError[] = [];

  fields.forEach(field => {
    if (!store[ field ]) {
      errors.push({
        name: field,
        message: `Поле ${field} должно быть заполнено.`
      });
    }
  });

  return errors;
}