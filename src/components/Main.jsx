import { Route } from "react-router-dom";

import styled from "styled-components/macro";

import MobileMenu from "./MobileMenu";
import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";

const Wrapper = styled.main`
  flex-grow: 1;
  background: pink;
  position: relative;
  display: flex;
`;

function Main({ toggleOn, activeToggle }) {
  return (
    <Wrapper>
      {toggleOn ? (
        <MobileMenu toggleOn={toggleOn} activeToggle={activeToggle} />
      ) : null}
      {/* <MobileMenu toggleOn={toggleOn} activeToggle={activeToggle} /> */}
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/work" component={Work} />
      <Route path="/contact" component={Contact} />
    </Wrapper>
  );
}

export default Main;
