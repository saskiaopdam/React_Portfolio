import { useState } from "react";
import styled from "styled-components/macro";

// import Inner from "./Inner";

const Wrapper = styled.nav`
  flex-grow: 1;
  background: black;
  color: white;

  position: fixed;
  width: 100%;
  height: 100%;
`;

const Inner = styled.div`
  flex-grow: 1;
  background: red;

  width: 100%;
  height: 100%;

  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
// when imported, Inner covers components Navbar and Slidemenu;
// in Content it doesn't
// fix: z-index?

const Navbar = styled.div`
  flex-grow: 1;
  background: orange;
  color: black;
`;

const Burger = styled.button`
  background: transparent;
  display: block;
`;

const SlideMenu = styled.div`
  flex-grow: 1;
  background: pink;
  color: black;
  position: relative;
`;

const Links = styled.div`
  position: absolute;
  right: -100%;
  width: 100%;
  height: 100%;
  background: black;
  color: ${({ open }) => (open ? "white" : "black")};
  transform: ${({ open }) => (open ? "translateX(-100%)" : "translateX(0%)")};

  transition: transform 0.3s ease;
`;

function Navigation() {
  const [open, setOpen] = useState(false);
  console.log(`open: ${open}`);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <Wrapper>
      <Inner>
        Navigation
        <Navbar>
          Navbar
          <Burger open={open} setOpen={setOpen} onClick={toggleMenu}>
            Burger
          </Burger>
        </Navbar>
        <SlideMenu>
          Slide Menu
          <Links open={open} setOpen={setOpen} onClick={toggleMenu}>
            Links
            <br />
            Links
            <br />
            Links
            <br />
            Links
            <br />
            Links
            <br />
            Links
            <br />
            Links
            <br />
          </Links>
        </SlideMenu>
      </Inner>
    </Wrapper>
  );
}

export default Navigation;
