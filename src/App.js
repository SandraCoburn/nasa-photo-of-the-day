import React from "react";
import "./App.css";
import NasaList from "./NasaList";
import NavBar from "./NavBar";
import { Container } from "reactstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <NavBar />
        <h1>Astronomy Picture of the Day</h1>

        <NasaList />
      </Container>
    </div>
  );
}

export default App;
