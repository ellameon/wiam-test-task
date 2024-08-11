import { makeObservableStore } from "./helpers";
import { PlacesOfWork } from "../types";

export const placesOfWorkStore = makeObservableStore<PlacesOfWork>({places: []})