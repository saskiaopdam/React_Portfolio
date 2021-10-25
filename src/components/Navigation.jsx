import { useState } from "react";
import styled from "styled-components/macro";

const Wrapper = styled.nav`
  flex-grow: 1;
  background: transparent;

  position: fixed;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const Inner = styled.div`
  flex-grow: 1;
  background: transparent;

  width: 100%;
  height: 100%;

  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Navbar = styled.div`
  flex-shrink: 0;
  background: white;
  color: hotpink;
  display: flex;
  justify-content: space-between;
`;

const MyName = styled.h1`
  color: hotpink;
  padding: 20px;
`;

const Burger = styled.button`
  background: white;
  color: hotpink;
  display: block;
  border: none;
  padding: 0 20px;
`;

const SlideMenu = styled.div`
  flex-grow: 1;
  background: transparent;
  color: black;
  position: relative;
`;

const Links = styled.div`
  position: absolute;
  right: -100%;
  width: 100%;
  height: 100%;
  background: ${({ open }) => (open ? "hotpink" : "white")};
  color: white;
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
        {/* Navigation */}
        <Navbar>
          <MyName>Saskia Opdam</MyName>
          <Burger open={open} setOpen={setOpen} onClick={toggleMenu}>
            <h1>Burger</h1>
          </Burger>
        </Navbar>
        <SlideMenu>
          {/* Slide Menu */}
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
