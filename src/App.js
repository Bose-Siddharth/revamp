import React, { useCallback, useState } from "react";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";
import Home from "./Pages/Home/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sites from "./Pages/Sites/Sites";

function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  const toggleSidebar = useCallback(() => setShowSidebar(value => !value),[]);
  return (
    <>
      <Router>
        <Sidebar showNav={showSidebar} onClick={toggleSidebar} />
        <Main onClick={toggleSidebar}>
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
