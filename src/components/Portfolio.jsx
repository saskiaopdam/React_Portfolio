import { Route } from "react-router-dom";

import styled from "styled-components/macro";

import Intro from "./Intro";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";

const Wrapper = styled.div`
  flex-grow: 1;
  // background: hotpink;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const Footer = styled.footer`
  flex-shrink: 0;
  background: hotpink;
  padding: 20px;
  @media (min-width: 400px) {
    background: white;
  }
`;

const Copyright = styled.small`
  display: block;
  font-size: 14px;
  color: indigo;
  @media (min-width: 400px) {
    text-align: center;
  }
`;

function Portfolio() {
  return (
    <Wrapper>
      <Route exact path="/" component={Intro} />
      <Route path="/about" component={About} />
      <Route path="/work" component={Work} />
      <Route path="/contact" component={Contact} />
      <Footer>
        <Copyright>© design by me</Copyright>
      </Footer>
    </Wrapper>
  );
}

export default Portfolio;
