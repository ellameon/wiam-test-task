import { observer } from "mobx-react-lite";
import { loanStore } from "../../../store";


export const LoanModal = observer(function LoanModal() {

  return (
    <div className="modal fade" id="Modal" tabIndex={-1} aria-labelledby="ModalLabel"
         aria-hidden="false">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Отлично!</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {`Поздравляем, ${loanStore.surname} ${loanStore.name}.
                 Вам одобрено ${loanStore.loanSum}$ на ${loanStore.loanTerm} дней.`}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-secondary"
              data-bs-dismiss="modal">
              Понятно
            </button>
          </div>
        </div>
      </div>
    </div>
  )
})