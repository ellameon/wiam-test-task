import { useNavigate } from "react-router";
import { LoanStore } from "../../../types";
import { modifyLoan } from "../../../service";
import { loanStore } from "../../../store";
import { observer } from "mobx-react-lite";

export const LoanParameters = observer(function LoanParameters() {

  const navigate = useNavigate();

  const onChange = (name: keyof LoanStore, value: string) => {
    modifyLoan(`${name}`, value)
  }

  const onClickBack = () => {
    navigate(`/address`)
  }

  return (
    <div className={"container h-100"}>
      <div className={"row justify-content-md-center h-100"}>
        <div className={"col-6 justify-content-center d-flex align-items-center"}>
          <div className={"card w-75"}>
            <div className={"card-header text-center fw-bolder"}>
              Параметры займа
            </div>
            <div className={"card-body"}>
              <label htmlFor="loanSum" className="form-label">{`Сумма займа ${loanStore.loanSum ? "- $" : ""}${loanStore.loanSum ? loanStore.loanSum : ""}`}</label>
              <input
                type="range"
                className="form-range"
                min="200"
                max="1000"
                step={100}
                id="loanSum"
                onChange={(event) => onChange("loanSum", event.target.value)}
              />
              <label htmlFor="loanTerm" className="form-label">{`Срок займа ${loanStore.loanTerm ? loanStore.loanTerm : ""} ${loanStore.loanTerm ? "дней" : ""}`}</label>
              <input
                type="range"
                className="form-range"
                min="10"
                max="30"
                step={1}
                id="loanTerm"
                onChange={(event) => onChange("loanTerm", event.target.value)}
              />
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
                <div className={"col-4 mt-3"}>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"

                  >
                    Подать заявку
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