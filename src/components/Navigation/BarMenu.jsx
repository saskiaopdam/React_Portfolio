import { NavLink } from "react-router-dom";

import styled from "styled-components/macro";

const Wrapper = styled.nav`
  flex-grow: 1;
  padding: 10px;
  display: none;
  @media (min-width: 500px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

const StyledLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  justify-content: flex-end;

  &:hover {
    font-weight: bold;
    transform: translate(-2px, -2px);
  }

  &.selected {
    font-weight: bold;
    pointer-events: none;
    text-decoration: underline;
  }

  color: hotpink;
  padding-left: 16px;
  align-items: center;
`;

function BarMenu() {
  return (
    <Wrapper>
      <StyledLink to="/about" className="regular" activeClassName="selected">
        about
      </StyledLink>
      <StyledLink to="/work" className="regular" activeClassName="selected">
        work
      </StyledLink>
      <StyledLink to="/contact" className="regular" activeClassName="selected">
        contact
      </StyledLink>
    </Wrapper>
  );
}

export default BarMenu;
