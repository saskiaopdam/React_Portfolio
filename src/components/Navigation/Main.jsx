import { Route } from "react-router-dom";

import styled from "styled-components/macro";
import SlideArea from "./SlideArea";
// import Home from "./Home";
// import About from "./About";
// import Work from "./Work";
// import Contact from "./Contact";

const Wrapper = styled.main`
  flex-grow: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background: darkorange;
`;

function Main({ open, setOpen, toggleMenu }) {
  return (
    <Wrapper>
      <SlideArea open={open} setOpen={setOpen} toggleMenu={toggleMenu} />
    </Wrapper>
  );
}

export default Main;
