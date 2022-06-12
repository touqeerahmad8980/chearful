import React from "react";
import { Header } from "./components";
import PagesRoute from "./routes/Routes";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <PagesRoute />
    </div>
  );
}

export default App;
