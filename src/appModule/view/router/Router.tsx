import { Route, Routes } from "react-router";
import { paths } from "./paths";

export const Router = () => {
  return (
    <Routes>
      <Route path={paths.indexPath} element={<></>}></Route>
      <Route path={paths.formPath.personalData} element={<></>}></Route>
      <Route path={paths.formPath.addressAndPlaceOfWork} element={<></>}></Route>
      <Route path={paths.formPath.loanParameters} element={<></>}></Route>
    </Routes>
  )
}