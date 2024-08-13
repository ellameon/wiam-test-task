import { useNavigate } from "react-router";
import { observer } from "mobx-react-lite";
import { LoanStore } from "../../../types";
import { modifyLoan } from "../../../service";
import { formatPhone, validate } from "../../../utils";
import { loanStore } from "../../../store";


export const PersonalData = observer(function PersonalData() {
  const navigate = useNavigate();

  const onChange = (name: keyof LoanStore, value: string) => {
    modifyLoan(`${name}`, value)
  }

  const onClickNext = () => {
    navigate(`/address`)
  }

  validate(".personal")

  return (
    <>
      <div className={"card-header text-center fw-bolder"}>
        Личные данные
      </div>
      <form className={"card-body personal"} onSubmit={onClickNext} noValidate>
        <label htmlFor="phone" className="form-label">
          Телефон
          <span className="badge text-danger ps-1">
            *
          </span>
        </label>
        <input type="tel" className="form-control" id="phone"
               pattern="0\d{3} \d{3} \d{3}"
               placeholder="0XXX XXX XXX"
               title="Введите номер в формате 0XXX XXX XXX"
               required
               defaultValue={loanStore.phone || ""}
               value={formatPhone(loanStore.phone || "")}
               onChange={(event) => onChange("phone", formatPhone(event.target.value))}
        />
        <div className="invalid-feedback">
          Введите телефон.
        </div>
        <label htmlFor="name" className="form-label">
          Имя
          <span className="badge text-danger ps-1">
            *
          </span>
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          required
          defaultValue={loanStore.name || ""}
          onChange={(event) => onChange("name", event.target.value)}
        />
        <div className="invalid-feedback">
          Введите имя.
        </div>
        <label htmlFor="surname" className="form-label">
          Фамилия
          <span className="badge text-danger ps-1">
            *
          </span>
        </label>
        <input
          type="text"
          className="form-control"
          id="surname"
          required
          defaultValue={loanStore.surname || ""}
          onChange={(event) => onChange("surname", event.target.value)}
        />
        <div className="invalid-feedback">
          Введите фамилию.
        </div>
        <label htmlFor="sex" className="form-label">
          Пол
          <span className="badge text-danger ps-1">
            *
          </span>
        </label>
        <select
          className="form-select"
          id="sex"
          defaultValue={loanStore.sex || ""}
          required
          onChange={(event) => onChange("sex", event.target.value)}
        >
          <div className="invalid-feedback">
            Please choose a username.
          </div>
          <option value="" disabled>Выберите пол</option>
          <option value="male">Мужской</option>
          <option value="female">Женский</option>
        </select>
        <div className="invalid-feedback">
          Выберите пол.
        </div>
        <div className={"row justify-content-end"}>
          <div className={"col-3"}>
            <button
              type="submit"
              className="btn btn-outline-secondary mt-3"
            >
              Далее
            </button>
          </div>
        </div>
      </form>
    </>
  )
})