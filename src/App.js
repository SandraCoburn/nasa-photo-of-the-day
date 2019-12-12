import React from "react";
import "./App.css";
import NasaList from "./NasaList";
import NasaButtons from "./NasaButtons";

function App() {
  return (
    <div className="App">
      
      <h1>Astronomy Picture of the Day</h1>
      <NasaButtons />
        <NasaList />
      
    </div>
  );
}

export default App;
