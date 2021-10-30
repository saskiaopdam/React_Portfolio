import { NavLink } from "react-router-dom";

import styled from "styled-components/macro";

import { AiFillHome } from "react-icons/ai";

const Wrapper = styled.nav`
  flex-grow: 1;
  display: none;
  padding: 24px 0 0 0;

  @media (min-width: 500px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Left = styled.div``;
const Right = styled.div``;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  padding-left: 16px;

  &:hover {
    font-weight: bold;
    transform: translate(-2px, -2px);
  }

  &.selected {
    font-weight: bold;
    pointer-events: none;
    text-decoration: underline;
  }

  &.homeLink {
    padding-left: 0;
    &.selected {
      border-bottom: 1px solid white;
    }
  }
`;

function BarMenu() {
  return (
    <Wrapper>
      <Left>
        <StyledLink
          exact
          to="/"
          activeClassName="selected"
          className="homeLink"
        >
          <AiFillHome />
        </StyledLink>
      </Left>
      <Right>
        <StyledLink to="/about" activeClassName="selected">
          about
        </StyledLink>
        <StyledLink to="/work" activeClassName="selected">
          work
        </StyledLink>
        <StyledLink to="/contact" activeClassName="selected">
          contact
        </StyledLink>
      </Right>
    </Wrapper>
  );
}

export default BarMenu;
