import { Route } from "react-router-dom";

import styled from "styled-components/macro";

import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";

const Wrapper = styled.main`
  flex-grow: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background: darkorange;
`;

function Main() {
  return (
    <Wrapper>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/work" component={Work} />
      <Route path="/contact" component={Contact} />
    </Wrapper>
  );
}

export default Main;
