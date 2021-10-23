import { Link } from "react-router-dom";

import styled from "styled-components/macro";

const Wrapper = styled.section`
  padding: 20px;
  width: 100%;
  background: blue;
`;

const Menu = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: green;
  z-index: ${({ toggleOn }) => (toggleOn ? "1" : "-1")};
`;

const StyledLink = styled(Link)`
  flex-grow: 1;
  color: black;
  text-decoration: none;
  font-size: 16px;
  padding-bottom: 10px;
  display: block;
  background: yellow;
  border-bottom: 1px solid pink;
  &:hover {
    background: fuchsia;
  }
`;

function MobileMenu({ toggleOn, activeToggle }) {
  return (
    <Wrapper>
      <Menu toggleOn={toggleOn} onClick={activeToggle}>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/work">Work</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </Menu>
    </Wrapper>
  );
}

export default MobileMenu;
