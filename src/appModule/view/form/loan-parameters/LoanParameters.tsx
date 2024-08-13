import { useNavigate } from "react-router";
import { LoanStore } from "../../../types";
import { modifyLoan, submitApplication } from "../../../service";
import { loanStore } from "../../../store";
import { observer } from "mobx-react-lite";
import { useRef, useState } from "react";
import { LoanModal } from "../modal";

export const LoanParameters = observer(function LoanParameters() {

  const navigate = useNavigate();

  // тут используем валидацию через useState, потому что input type="range" не поддерживает валидацию силами бутстрапа
  const [termError, setTermError] = useState(false)
  const [sumError, setSumError] = useState(false)

  const buttonRef = useRef<HTMLButtonElement>(null)

  const onSubmit = () => {
    if (loanStore.loanSum && loanStore.loanTerm) {
      submitApplication({firstName: loanStore.name, lastName: loanStore.surname}).then(() => {
        if (buttonRef.current !== null) {
          buttonRef.current.click()
        }
      })
    } else {
      if (!loanStore.loanSum) {
        setSumError(true)
      }
      if (!loanStore.loanTerm) {
        setTermError(true)
      }
    }
  }

  const onChange = (name: keyof LoanStore, value: string) => {
    modifyLoan(`${name}`, value)
    if (loanStore.loanTerm) {
      setTermError(false)
    }
    if (loanStore.loanSum) {
      setSumError(false)
    }
  }

  const onClickBack = () => {
    navigate(`/address`)
  }

  return (
    <>
      <LoanModal/>
      <div className={"card-header text-center fw-bolder"}>
        Параметры займа
      </div>
      <div className={"card-body loan"}>
        <label htmlFor="loanSum"
               className="form-label">
          {`Сумма займа ${loanStore.loanSum ? "- $" : ""}${loanStore.loanSum ? loanStore.loanSum : ""}`}
          {!loanStore.loanSum &&
            <span className="badge text-danger ps-1">
            *
          </span>
          }
        </label>
        <input
          type="range"
          className="form-range"
          min="200"
          max="1000"
          step={100}
          id="loanSum"
          required
          defaultValue={loanStore.loanSum || ""}
          onChange={(event) => onChange("loanSum", event.target.value)}
        />
        {sumError &&
          <div className="invalid-feedback d-flex">
            Выберите сумму займа.
          </div>
        }
        <label htmlFor="loanTerm"
               className="form-label">
          {`Срок займа ${loanStore.loanTerm ? loanStore.loanTerm : ""} ${loanStore.loanTerm ? "дней" : ""}`}
          {!loanStore.loanTerm &&
            <span className="badge text-danger ps-1">
            *
          </span>
          }
        </label>
        <input
          type="range"
          className="form-range"
          min="10"
          max="30"
          step={1}
          id="loanTerm"
          required
          defaultValue={loanStore.loanTerm || ""}
          onChange={(event) => onChange("loanTerm", event.target.value)}
        />
        {termError &&
          <div className="invalid-feedback d-flex">
            Выберите срок займа.
          </div>
        }
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
              onClick={onSubmit}
              className="btn btn-outline-secondary"
            >
              Подать заявку
            </button>
          </div>
        </div>
        <button
          type="button"
          className=" d-none"
          data-bs-toggle="modal"
          data-bs-target="#Modal"
          ref={buttonRef}
        >
        </button>
      </div>
    </>
  )
})