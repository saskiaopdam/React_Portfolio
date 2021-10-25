import { Link, Route } from "react-router-dom";

import { useState } from "react";
import styled from "styled-components/macro";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

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
  // background: transparent;

  width: 100%;
  height: 100%;

  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Navbar = styled.div`
  background: hotpink;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  @media (min-width: 500px) {
    background: white;
    color: hotpink;
  }
`;

const MyName = styled.h1`
  color: white;
  font-weight: 500;
  @media (min-width: 500px) {
    color: hotpink;
  }
`;

const Burger = styled.button`
  background: transparent;
  color: white;
  border: none;
  font-size: 24px;
  @media (min-width: 500px) {
    display: none;
  }
  display: flex;
  align-items: center;
`;

const RegularMenu = styled.nav`
  display: none;
  @media (min-width: 500px) {
    display: flex;
  }
`;

const SlideArea = styled.div`
  flex-grow: 1;
  background: transparent;
  color: black;
  position: relative;
`;

const MobileMenu = styled.nav`
  position: absolute;
  right: -100%;
  width: 100%;
  height: 100%;
  padding: 10px;
  background: ${({ open }) => (open ? "hotpink" : "white")};
  transform: ${({ open }) => (open ? "translateX(-100%)" : "translateX(0%)")};

  transition: transform 0.3s ease;
  @media (min-width: 500px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
  justify-content: flex-end;

  &:hover {
    text-decoration: underline;
  }

  &.regular {
    color: hotpink;
    padding-left: 16px;
    align-items: center;
  }

  &.mobile {
    color: white;

    & + & {
      padding-top: 16px;
    }
  }
`;

function Navigation() {
  const [open, setOpen] = useState(false);
  console.log(`open: ${open}`);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <Wrapper aria-role="navigation">
      <Inner>
        <Navbar>
          <MyName>Saskia Opdam</MyName>
          <Burger
            open={open}
            setOpen={setOpen}
            onClick={toggleMenu}
            aria-label={open ? "close the menu" : "open the menu"}
          >
            {open ? <AiOutlineClose /> : <AiOutlineMenu />}
            {/* {open ? (
              <FontAwesomeIcon
                icon={faTimes}
                style={{ fontSize: "24px", fontWeight: "400" }}
              />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )} */}
          </Burger>
          <RegularMenu>
            <StyledLink to="/" className="regular">
              home
            </StyledLink>
            <StyledLink to="/about" className="regular">
              about
            </StyledLink>
            <StyledLink to="/work" className="regular">
              work
            </StyledLink>
            <StyledLink to="/contact" className="regular">
              contact
            </StyledLink>
          </RegularMenu>
        </Navbar>
        <SlideArea>
          {/* Slide Menu */}
          <MobileMenu open={open} setOpen={setOpen} onClick={toggleMenu}>
            <StyledLink to="/" className="mobile">
              home
            </StyledLink>
            <StyledLink to="/about" className="mobile">
              about
            </StyledLink>
            <StyledLink to="/work" className="mobile">
              work
            </StyledLink>
            <StyledLink to="/contact" className="mobile">
              contact
            </StyledLink>
          </MobileMenu>
        </SlideArea>
      </Inner>
    </Wrapper>
  );
}

export default Navigation;
