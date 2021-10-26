import styled from "styled-components/macro";

import Intro from "./Intro";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";

const Wrapper = styled.section`
  width: 100%;
  padding: 10px;
`;

function Portfolio() {
  return (
    <Wrapper>
      <h2>PORTFOLIO</h2>
      <Intro id="intro" />
      <About id="about" />
      <Work id="work" />
      <Contact id="contact" />
    </Wrapper>
  );
}

export default Portfolio;
