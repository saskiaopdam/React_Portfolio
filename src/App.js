import { BrowserRouter as Router } from "react-router-dom";

import styled from "styled-components/macro";

import Navigation from "./components/Navigation";
import Content from "./components/Content";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  return (
    <Wrapper>
      <Router>
        <Navigation />
        <Content />
      </Router>
    </Wrapper>
  );
}

export default App;
