import React from 'react';
import './App.css';
import { getPlacesOfWork } from "./app/service";

function App() {

  getPlacesOfWork()

  return (
    <div className="App">

    </div>
  );
}

export default App;
