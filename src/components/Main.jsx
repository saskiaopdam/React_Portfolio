import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { useState, useCallback } from "react";

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
  background: blue;
  display: flex;
  flex-direction: column;
`;

const NavBar = styled.nav`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  background: blue;
  margin-bottom: 20px;
`;

const Hamburger = styled.button`
  display: flex;
  @media (min-width: 400px) {
    display: none;
  }
  border: none;
  background-color: blue;
  color: white;
  font-size: 20px;
`;

const Menu = styled.div`
  display: none;
  @media (min-width: 400px) {
    display: flex;
  }
  background: blue;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  display: flex;
  & + & {
    padding-top: 9px;
  }
  &:hover {
    background: fuchsia;
  }
  &.menuLink {
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    padding-top: 0;
  }
`;

const Content = styled.div`
  flex-grow: 1;
  background: yellow;
  display: flex;
  align-items: stretch;
  position: relative;
`;

const MobileMenu = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: blue;
  z-index: ${({ toggleOn }) => (toggleOn ? "1" : "-1")};
  @media (min-width: 400px) {
    display: none;
  }
`;

const Page = styled.div`
  background: green;
  width: 100%;
`;

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => {
    setValue((v) => !v);
  }, []);
  return [value, toggle];
}

function Main() {
  const [toggleOn, activeToggle] = useToggle();

  const toggleMenu = () => {
    activeToggle();
  };

  return (
    <Wrapper>
      <Router>
        <NavBar>
          <Hamburger
            onClick={toggleMenu}
            aria-label={toggleOn ? "close the menu" : "open the menu"}
          >
            {toggleOn ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </Hamburger>
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
          <MobileMenu
            toggleOn={toggleOn}
            activeToggle={activeToggle}
            onClick={activeToggle}
          >
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
