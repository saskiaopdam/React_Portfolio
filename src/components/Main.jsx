import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components/macro";

import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";

const Wrapper = styled.main`
  flex-grow: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const NavBar = styled.nav`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  margin-bottom: 20px;
`;

const Burger = styled.button`
  display: flex;
  @media (min-width: 400px) {
    display: none;
  }
  width: 100%;
  padding-bottom: 10px;
  background: transparent;
  color: white;
  border: none;
  font-size: 24px;
`;

const Menu = styled.div`
  display: none;
  @media (min-width: 400px) {
    display: flex;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 24px;
  font-weight: 700;
  color: white;
  display: flex;
  & + & {
    padding-top: 12px;
  }
  &:hover {
    text-decoration: underline;
  }
  &.menuLink {
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    & + & {
      padding-top: 0;
    }
  }
`;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: stretch;
  position: relative;
`;

const MobileMenu = styled.nav`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background: silver;
  z-index: 1;
  transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;

  @media (min-width: 400px) {
    display: none;
  }
`;

const Page = styled.div`
  width: 100%;
`;

function Main() {
  const [open, setOpen] = useState(false);
  // const [toggleOn, activeToggle] = useToggle();

  const toggleMenu = () => {
    setOpen(!open);
    // alert(open);
  };

  return (
    <Wrapper>
      <Router>
        <NavBar>
          <Burger
            open={open}
            setOpen={setOpen}
            onClick={toggleMenu}
            aria-label={open ? "close the menu" : "open the menu"}
          >
            {open ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </Burger>
          <Menu>
            <StyledLink to="/" className="menuLink">
              home
            </StyledLink>
            <StyledLink to="/about" className="menuLink">
              about
            </StyledLink>
            <StyledLink to="/work" className="menuLink">
              work
            </StyledLink>
            <StyledLink to="/contact" className="menuLink">
              contact
            </StyledLink>
          </Menu>
        </NavBar>
        <Content>
          <MobileMenu open={open} setOpen={setOpen} onClick={toggleMenu}>
            <StyledLink to="/">home</StyledLink>
            <StyledLink to="/about">about</StyledLink>
            <StyledLink to="/work">work</StyledLink>
            <StyledLink to="/contact">contact</StyledLink>
          </MobileMenu>
          <Page>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/work" component={Work} />
            <Route path="/contact" component={Contact} />
          </Page>
        </Content>
      </Router>
    </Wrapper>
  );
}

export default Main;
