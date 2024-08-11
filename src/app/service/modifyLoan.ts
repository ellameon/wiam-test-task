import { loanStore } from "../store";
import { LoanStore } from "../types";
import { runInAction } from "mobx";

export function modifyLoan<KEY extends keyof LoanStore, VALUE extends LoanStore[KEY]>(fieldName: KEY, value: VALUE): void {
  runInAction(() => {
    loanStore[ fieldName ] = value
  })
}