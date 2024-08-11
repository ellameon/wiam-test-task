import { makeObservableStore } from "./helpers";
import { LoanStore } from "../types";

export const loanStore = makeObservableStore<LoanStore>({})