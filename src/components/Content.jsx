import { Route } from "react-router-dom";
import styled from "styled-components/macro";

import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";

// import Something from "./Something";

const Wrapper = styled.main`
  flex-grow: 1;
  background: white;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const Inner = styled.div`
  flex-grow: 1;
  background: hotpink;

  width: 100%;
  height: 100%;

  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const NavbarSpace = styled.div`
  height: 77px;
  background: yellow;
`;

function Content() {
  return (
    <Wrapper>
      <Inner>
        <NavbarSpace>Navbarspace</NavbarSpace>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/work" component={Work} />
        <Route path="/contact" component={Contact} />
      </Inner>
    </Wrapper>
  );
}

export default Content;
