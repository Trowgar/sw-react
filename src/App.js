import React from "react";
import Header from "./components/Header";
import './app.scss';
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
        <Header/>
        <Content />
    </div>
  );
}

export default App;
