import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { useState, useCallback } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components/macro";

import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";

const Wrapper = styled.main`
  flex-grow: 1;
  padding: 20px;
  background: pink;
  display: flex;
  flex-direction: column;
`;

const NavBar = styled.nav`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  background: silver;
`;

const Hamburger = styled.div`
  display: flex;
  padding: 20px 0;
  @media (min-width: 400px) {
    display: none;
  }
`;

const Menu = styled.div`
  display: none;
  @media (min-width: 400px) {
    display: flex;
  }
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 16px;
  padding: 20px 0;
  flex-grow: 1;
  display: flex;
  &.menuLink {
    justify-content: center;
    &:hover {
      background: fuchsia;
    }
  }
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 20px;
  background: yellow;
  display: flex;
  align-items: stretch;
  position: relative;
`;

const MobileMenu = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: red;
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

  const handleClick = () => {
    activeToggle();
  };
  return (
    <Wrapper>
      <Router>
        <NavBar>
          <Hamburger onClick={handleClick}>
            <FontAwesomeIcon icon={faBars} area-hidden="true" />
          </Hamburger>
          <Menu>
            <StyledLink to="/" className="menuLink">
              Home
            </StyledLink>
            <StyledLink to="/about" className="menuLink">
              About
            </StyledLink>
            <StyledLink to="/work" className="menuLink">
              Work
            </StyledLink>
            <StyledLink to="/contact" className="menuLink">
              Contact
            </StyledLink>
          </Menu>
        </NavBar>

        <Content>
          <MobileMenu
            toggleOn={toggleOn}
            activeToggle={activeToggle}
            onClick={activeToggle}
          >
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/about">About</StyledLink>
            <StyledLink to="/work">Work</StyledLink>
            <StyledLink to="/contact">Contact</StyledLink>
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
