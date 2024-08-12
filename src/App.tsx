import React from 'react';
import { Router } from "./appModule";
import { getPlacesOfWork } from "./appModule/service";

function App() {

  getPlacesOfWork()

  return (
    <div style={{height: "100vh"}}>
      <div className={"container h-100"}>
        <div className={"row justify-content-md-center h-100"}>
          <div className={"col-6 justify-content-center d-flex align-items-center"}>
            <div className={"card w-75"}>
              <Router/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
