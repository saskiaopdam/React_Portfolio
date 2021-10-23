import { BrowserRouter as Router } from "react-router-dom";
import { useState, useCallback } from "react";

import styled from "styled-components/macro";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => {
    setValue((v) => !v);
  }, []);
  return [value, toggle];
}

function App() {
  const [toggleOn, activeToggle] = useToggle();

  const handleClick = () => {
    activeToggle();
  };

  return (
    <Wrapper>
      <Router>
        <Header onClick={handleClick} toggleOn={toggleOn} />
        <Main toggleOn={toggleOn} activeToggle={activeToggle} />
        <Footer />
      </Router>
    </Wrapper>
  );
}

export default App;
