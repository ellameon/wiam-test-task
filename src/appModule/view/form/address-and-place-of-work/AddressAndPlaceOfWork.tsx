import { modifyLoan } from "../../../service";
import { loanStore, placesOfWorkStore } from "../../../store";
import { LoanStore } from "../../../types";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router";
import { validate } from "../../../utils";


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

  validate(".address")

  return (
    <>
      <div className={"card-header text-center fw-bolder"}>
        Адрес и место работы
      </div>
      <form className={"card-body address"} onSubmit={onClickNext} noValidate>
        <label htmlFor="address" className="form-label">
          Адрес
          <span className="badge text-danger ps-1">
            *
          </span>
        </label>
        <input
          type="text"
          className="form-control"
          id="address"
          required
          defaultValue={loanStore.address || ""}
          onChange={(event) => onChange("address", event.target.value)}
        />
        <div className="invalid-feedback">
          Введите адрес.
        </div>
        <label htmlFor="placeOfWork" className="form-label">
          Место работы
          <span className="badge text-danger ps-1">
            *
          </span>
        </label>
        <select
          className="form-select"
          id="placeOfWork"
          defaultValue={loanStore.placeOfWork || ""}
          required
          onChange={(event) => onChange("placeOfWork", event.target.value)}
        >
          <option value="" disabled>Выберите место работы</option>
          {list.map(place => (
            <option value={`${place}`} key={`${place}`}>{place}</option>
          ))}
        </select>
        <div className="invalid-feedback">
          Выберите место работы.
        </div>
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
              type="submit"
              className="btn btn-outline-secondary"
            >
              Далее
            </button>
          </div>
        </div>
      </form>
    </>
  )
})