import { getPlacesOfWorkTransport } from "../transport";
import { placesOfWorkStore } from "../store";
import { runInAction } from "mobx";

export function getPlacesOfWork() {
  getPlacesOfWorkTransport().then(data => {
    runInAction(() => {
      placesOfWorkStore.places = data
    })
  })
}