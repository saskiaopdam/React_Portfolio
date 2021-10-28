import { Route } from "react-router-dom";

import styled from "styled-components/macro";

import Intro from "./Intro";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import Footer from "./Footer";

const Wrapper = styled.div`
  flex-grow: 1;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

function Portfolio() {
  return (
    <Wrapper>
      <Route exact path="/" component={Intro} />
      <Route path="/about" component={About} />
      <Route path="/work" component={Work} />
      <Route path="/contact" component={Contact} />
      <Footer />
    </Wrapper>
  );
}

export default Portfolio;
