import { Link } from "react-router-dom";

import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.header`
  flex-shrink: 0;
  padding: 20px;
  @media (min-width: 400px) {
    padding: 30px 20px;
  }
`;

const Title = styled.h1`
  font-weight: 500;
  color: white;
  margin-bottom: 16px;
  @media (min-width: 400px) {
    text-align: center;
  }
`;

const SubTitle = styled.h2`
  font-weight: 500;
  color: white;
  margin-bottom: 12px;
  @media (min-width: 400px) {
    text-align: center;
  }
`;

const NavBar = styled.nav`
  @media (min-width: 400px) {
    background: green;
  }
`;

const Hamburger = styled.div`
  display: flex;
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

function Header({ onClick }) {
  return (
    <Wrapper>
      <Title>SASKIA OPDAM</Title>
      <SubTitle>Junior Front-end Developer</SubTitle>
      <NavBar>
        <Hamburger onClick={onClick}>
          <FontAwesomeIcon icon={faBars} area-hidden="true" />
          {/* <StyledLink to="/mobilemenu" area-label="Open the menu">
            <FontAwesomeIcon icon={faBars} area-hidden="true" />
          </StyledLink> */}
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
    </Wrapper>
  );
}

export default Header;
