import { Route, Routes } from "react-router";
import { paths } from "./paths";
import { AddressAndPlaceOfWork, LoanParameters, PersonalData } from "../form";
import { BrowserRouter } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.indexPath} element={<PersonalData/>}/>
        <Route path={paths.formPath.personalData} element={<PersonalData/>}/>
        <Route path={paths.formPath.addressAndPlaceOfWork} element={<AddressAndPlaceOfWork/>}/>
        <Route path={paths.formPath.loanParameters} element={<LoanParameters/>}/>
      </Routes>
    </BrowserRouter>
  )
}