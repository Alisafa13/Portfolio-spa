import React, { useState } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./Components/AboutPage";
import ContactsPage from "./Components/ContactPage";
import Team from "./Components/Team";

function App() {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <BrowserRouter>
      <div>
        <nav className={`navbar navbar-expand-lg navbar-light bg-light`}>
          <div className="wrapper">
            <div className="all">
              <div>
                <a className="navbar-brand" href="#">
                  Пингвины
                </a>
              </div>
              <div>
                <button onClick={toggleNav}></button>
              </div>
            </div>
            <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
              <ul>
                <li className="nav-item">
                  <Link className="link" to="/about">
                    О нас
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="link" to="/contacts">
                    Контакты
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="link" to="/team">
                    Наша команда
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/about" Component={AboutPage} />
          <Route path="/contacts" Component={ContactsPage} />
          <Route path="/team" Component={Team} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
