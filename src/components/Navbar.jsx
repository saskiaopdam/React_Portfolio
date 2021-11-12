import { Link, NavLink } from "react-router-dom";

import styled from "styled-components/macro";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Name = styled.p`
  font-size: 18px;
`;

const BurgerMenu = styled.button`
  display: flex;
  background: white;
  border: none;
  font-size: 18px;
  @media (min-width: 500px) {
    display: none;
  }
`;

const BurgerLabel = styled.span`
  font-size: 14px;
  margin-right: 7px;
`;

const FullMenu = styled.div`
  display: none;
  @media (min-width: 500px) {
    display: flex;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: black;
  & + & {
    margin-left: 20px;
  }
  &.selected {
    pointer-events: none;
    font-weight: bold;
  }
  &:hover {
    font-weight: bold;
    color: royalblue;
  }
`;

function NavBar({ open, setOpen, toggleMenu }) {
  return (
    <Wrapper>
      <StyledLink to="/">
        <Name>Home</Name>
      </StyledLink>

      <BurgerMenu
        open={open}
        setOpen={setOpen}
        onClick={toggleMenu}
        aria-label={open ? "close the menu" : "open the menu"}
      >
        <BurgerLabel>{open ? "sluit" : "menu"}</BurgerLabel>
        {open ? <AiOutlineClose /> : <AiOutlineMenu />}
      </BurgerMenu>

      <FullMenu>
        <StyledNavLink to="/about" activeClassName="selected">
          about
        </StyledNavLink>
        <StyledNavLink to="/work" activeClassName="selected">
          work
        </StyledNavLink>
      </FullMenu>
    </Wrapper>
  );
}

export default NavBar;
