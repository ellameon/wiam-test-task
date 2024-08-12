import { useNavigate } from "react-router";
import { observer } from "mobx-react-lite";
import { LoanStore } from "../../../types";
import { modifyLoan } from "../../../service";


export const PersonalData = observer(function PersonalData() {
  const navigate = useNavigate();

  const onChange = (name: keyof LoanStore, value: string) => {
    modifyLoan(`${name}`, value)
  }

  const onClickNext = () => {
    navigate(`/address`)
  }


  return (
    <div className={"container h-100"}>
      <div className={"row justify-content-md-center h-100"}>
        <div className={"col-6 justify-content-center d-flex align-items-center"}>
          <div className={"card w-75"}>
            <div className={"card-header text-center fw-bolder"}>
              Личные данные
            </div>
            <div className={"card-body"}>
              <label htmlFor="phone" className="form-label">Телефон</label>
              <input type="tel" className="form-control" id="phone"
                     pattern="0\d{3} \d{3} \d{4}"
                     placeholder="0XXX XXX XXX"
                     title="Введите номер в формате 0XXX XXX XXX"
                     required
                     onChange={(event) => onChange("phone", event.target.value)}
              />

              <label htmlFor="name" className="form-label">Имя</label>
              <input
                type="text"
                className="form-control"
                id="name"
                onChange={(event) => onChange("name", event.target.value)}
              />
              <label htmlFor="surname" className="form-label">Фамилия</label>
              <input
                type="text"
                className="form-control"
                id="surname"
                onChange={(event) => onChange("surname", event.target.value)}
              />
              <label htmlFor="sex" className="form-label">Пол</label>
              <select
                className="form-select"
                id="sex"
                defaultValue=""
                onChange={(event) => onChange("sex", event.target.value)}
              >
                <option value="" disabled>Выберите пол</option>
                <option value="male">Мужской</option>
                <option value="female">Женский</option>
              </select>
              <div className={"row justify-content-end"}>
                <div className={"col-3"}>
                  <button
                    type="button"
                    className="btn btn-outline-secondary mt-3"
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