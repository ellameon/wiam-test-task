import React from 'react';
import { Router } from "./appModule";
import { getPlacesOfWork } from "./appModule/service";

function App() {

  getPlacesOfWork()

  return (
    <div style={{height: "100vh"}}>
      <Router/>
    </div>
  );
}

export default App;
