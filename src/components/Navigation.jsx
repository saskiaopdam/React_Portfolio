import { Link, NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { useState } from "react";

import styled from "styled-components/macro";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Wrapper = styled.nav`
  flex-grow: 1;
  background: transparent;

  position: fixed;
  width: 100%;
  height: 100%;
`;

const Inner = styled.div`
  flex-grow: 1;

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
  @media (min-width: 500px) {
    background: white;
    color: hotpink;
  }
`;

const Brand = styled.div`
  padding: 10px;
`;

const MyName = styled.h1`
  color: white;
  font-weight: 500;
  margin-bottom: 6px;
  @media (min-width: 500px) {
    color: hotpink;
  }
`;

const MyRole = styled.h2`
  color: white;
  font-size: 16px;
  font-weight: 400;
  font-style: italic;
  @media (min-width: 500px) {
    color: hotpink;
  }
`;

const Burger = styled.button`
  flex-grow: 1;
  padding: 10px;
  background: transparent;
  color: white;
  border: none;
  font-size: 24px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (min-width: 500px) {
    display: none;
  }
`;

const BurgerLabel = styled.span`
  font-size: 16px;
  margin-left: 8px;
`;

const RegularMenu = styled.nav`
  flex-grow: 1;
  padding: 10px;
  display: none;
  @media (min-width: 500px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
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
  display: flex;
  flex-direction: column;
  background: ${({ open }) => (open ? "hotpink" : "white")};
  transform: ${({ open }) => (open ? "translateX(-100%)" : "translateX(0%)")};

  transition: transform 0.3s ease;
  @media (min-width: 500px) {
    display: none;
  }
`;

const StyledLink = styled(NavHashLink)`
  display: flex;
  text-decoration: none;
  justify-content: flex-end;

  &:hover {
    opacity: 0.75;
    transform: translateX(-5px);
  }

  &.selected {
    text-decoration: underline;
    pointer-events: none;
  }

  &.regular {
    color: hotpink;
    padding-left: 16px;
    align-items: center;
    &:hover {
      transform: translate(-2px, -2px);
    }
  }

  &.mobile {
    color: white;
    font-size: 20px;
    padding: 10px;
    & + & {
      padding-top: 16px;
    }
  }
`;

const HomeLink = styled(Link)`
  text-decoration: none;
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
          <HomeLink exact to="/portfolio">
            <Brand>
              <MyName>Saskia Opdam</MyName>
              <MyRole>junior front-end developer</MyRole>
            </Brand>
          </HomeLink>

          <Burger
            open={open}
            setOpen={setOpen}
            onClick={toggleMenu}
            aria-label={open ? "close the menu" : "open the menu"}
          >
            {open ? <AiOutlineClose /> : <AiOutlineMenu />}
            <BurgerLabel>{open ? "sluiten" : "menu"}</BurgerLabel>
          </Burger>
          <RegularMenu>
            <StyledLink
              to="/portfolio#intro"
              className="regular"
              activeClassName="selected"
            >
              intro
            </StyledLink>
            <StyledLink
              to="/portfolio#about"
              className="regular"
              activeClassName="selected"
            >
              about
            </StyledLink>
            <StyledLink
              to="/portfolio#work"
              className="regular"
              activeClassName="selected"
            >
              work
            </StyledLink>
            <StyledLink
              to="/portfolio#contact"
              className="regular"
              activeClassName="selected"
            >
              contact
            </StyledLink>
          </RegularMenu>
        </Navbar>
        <SlideArea>
          <MobileMenu open={open} setOpen={setOpen} onClick={toggleMenu}>
            <StyledLink
              to="/portfolio#intro"
              className="mobile"
              activeClassName="selected"
            >
              about
            </StyledLink>
            <StyledLink
              to="/portfolio#about"
              className="mobile"
              activeClassName="selected"
            >
              about
            </StyledLink>
            <StyledLink
              to="/portfolio#work"
              className="mobile"
              activeClassName="selected"
            >
              work
            </StyledLink>
            <StyledLink
              to="/portfolio#contact"
              className="mobile"
              activeClassName="selected"
            >
              contact
            </StyledLink>
          </MobileMenu>
        </SlideArea>
      </Inner>
    </Wrapper>
  );
}

export default Navigation;
