import React from "react";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";
import Home from "./Pages/Home/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sites from "./Pages/Sites/Sites";

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/sites" element={<Sites />} />
          </Routes>
        </Main>
      </Router>
    </>
  );
}

export default App;
