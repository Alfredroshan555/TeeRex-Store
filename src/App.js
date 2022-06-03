import "./App.css";
import "bulma/css/bulma.min.css";
import * as React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Cards from "./components/Cards";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import {FunctionContextProvider} from './context/context'
import Search from "./components/Search";

function App() {
  return (
    <>
      <Navbar />
      <Search />
      <FunctionContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </FunctionContextProvider>
    </>
  );
}

export default App;
