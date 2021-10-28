import { NavLink } from "react-router-dom";

import styled from "styled-components/macro";

// import StyledLink from "./StyledLink";

const Wrapper = styled.div`
  flex-grow: 1;
`;

const StyledLink = styled(NavLink)`
  display: flex;
  text-decoration: none;

  &:hover {
    font-weight: bold;
    transform: translate(-2px, -2px);
  }

  &.selected {
    font-weight: bold;
    pointer-events: none;
    text-decoration: underline;
  }

  color: ${({ open }) => (open ? "white" : "hotpink")};
  padding: ${({ open }) => (open ? "16px 10px" : "16px 0 0 0")};
  font-size: ${({ open }) => (open ? "20px" : "null")};
  align-items: ${({ open }) => (open ? "flex-start" : "center")};
`;

function MenuItems({ open }) {
  return (
    <Wrapper>
      <StyledLink to="/about" open={open} activeClassName="selected">
        about
      </StyledLink>
      <StyledLink to="/work" open={open} activeClassName="selected">
        work
      </StyledLink>
      <StyledLink to="/contact" open={open} activeClassName="selected">
        contact
      </StyledLink>
    </Wrapper>
  );
}

export default MenuItems;
