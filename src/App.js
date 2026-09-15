// src/App.js
import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from "./utils/Themes.js";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

// ✅ Updated import – from HeroSection folder
import HeroSection from "./components/HeroSection/HeroSection";

import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact"; // EmailJS version
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  color: ${({ theme }) => theme.text};
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
`;

const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: absolute;
  top: 15px;
  right: 20px;
`;

const ToggleButton = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  border: none;
  padding: 8px 15px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  // 🔒 Disable right click & key combos
  useEffect(() => {
    const handleRightClick = (e) => e.preventDefault();
    const handleKeyDown = (e) => {
      if (
        e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
        (e.ctrlKey && e.keyCode === 85) || // Ctrl+U
        (e.ctrlKey && e.shiftKey && e.keyCode === 74) // Ctrl+Shift+J
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleRightClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleRightClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar>
          <ButtonRow>
            <ToggleButton onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
            </ToggleButton>
          </ButtonRow>
        </Navbar>

        <Body>
          <HeroSection />
          <Skills />
          <Experience />
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Education />
          <Contact />
          <Footer />
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
