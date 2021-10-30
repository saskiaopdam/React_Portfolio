import { BrowserRouter as Router } from "react-router-dom";

import styled from "styled-components/macro";

import ScrollToTop from "./components/ScrollToTop";
import Navigation from "./components/Navigation/Navigation";
import Content from "./components/Content/Content";

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background: black;
`;

function App() {
  return (
    <Wrapper>
      <Router>
        <ScrollToTop>
          <Navigation />
          <Content />
        </ScrollToTop>
      </Router>
    </Wrapper>
  );
}

export default App;
