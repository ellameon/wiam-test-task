import { modifyLoan } from "../../../service";
import { placesOfWorkStore } from "../../../store";
import { LoanStore } from "../../../types";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router";


export const AddressAndPlaceOfWork = observer(function AddressAndPlaceOfWork() {
  const navigate = useNavigate();

  const list = placesOfWorkStore.places

  const onChange = (name: keyof LoanStore, value: string) => {
    modifyLoan(`${name}`, value)
  }

  const onClickNext = () => {
    navigate(`/loan`)
  }

  const onClickBack = () => {
    navigate(`/personal`)
  }

  return (
    <div className={"container h-100"}>
      <div className={"row justify-content-md-center h-100"}>
        <div className={"col-6 justify-content-center d-flex align-items-center"}>
          <div className={"card w-75"}>
            <div className={"card-header text-center fw-bolder"}>
              Адрес и место работы
            </div>
            <div className={"card-body"}>
              <label htmlFor="address" className="form-label">Адрес</label>
              <input
                type="text"
                className="form-control"
                id="address"
                onChange={(event) => onChange("address", event.target.value)}
              />
              <label htmlFor="placeOfWork" className="form-label">Место работы</label>
              <select
                className="form-select"
                id="placeOfWork"
                defaultValue=""
                onChange={(event) => onChange("placeOfWork", event.target.value)}
              >
                <option value="" disabled>Выберите место работы</option>
                {list.map(place => (
                  <option value={`${place}`} key={`${place}`}>{place}</option>
                ))}
              </select>
              <div className={"row justify-content-end"}>
                <div className={"col-3 mt-3"}>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={onClickBack}
                  >
                    Назад
                  </button>
                </div>
                <div className={"col-3 mt-3"}>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={onClickNext}
                  >
                    Далее
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})