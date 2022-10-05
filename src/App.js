import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './HomePage';
import Header from "./components/Nav";
import ImageOne from "./projects/imageOne";
import TextBox from "./projects/TextBox";
import ImageTwo from "./projects/imageTwo";

function App() {
  return(
  <div>
    < HomePage />
    < ImageOne />
    < TextBox />
    < ImageTwo />
  </div>
  )
}

export default App;
