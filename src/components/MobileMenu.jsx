import { Link } from "react-router-dom";

import styled from "styled-components/macro";

const Wrapper = styled.section`
  width: 100%;
  height: 500px;
  background: red;
  position: absolute;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  z-index: ${({ toggleOn }) => (toggleOn ? "1" : "-1")};
`;

// const Menu = styled.div`
//   padding: 20px;
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   background: green;
//   z-index: ${({ toggleOn }) => (toggleOn ? "1" : "-1")};
// `;

// padding: 20px;
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
// left: 0;

const StyledLink = styled(Link)`
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
    <Wrapper toggleOn={toggleOn} onClick={activeToggle}>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about">About</StyledLink>
      <StyledLink to="/work">Work</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
    </Wrapper>
  );
}

export default MobileMenu;
