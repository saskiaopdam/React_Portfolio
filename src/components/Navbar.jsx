import { NavLink } from "react-router-dom";

import styled from "styled-components/macro";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
`;

const BurgerMenu = styled.div`
  display: flex;
  @media (min-width: 500px) {
    display: none;
  }
  // background: black;
`;

const Burger = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  color: white;
  border: 1px solid transparent;
  font-size: 16px;
  padding: 10px;
`;

const BurgerLabel = styled.span`
  font-size: 12px;
  margin-right: 6px;
`;

const FullMenu = styled.div`
  display: none;
  @media (min-width: 500px) {
    display: flex;
  }
  // background: blue;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  padding: 10px;

  &.selected {
    pointer-events: none;
    text-decoration: underline;
  }
`;

function NavBar({ open, setOpen, toggleMenu }) {
  return (
    <Wrapper>
      <Brand>
        <StyledNavLink to="/">SASKIA OPDAM</StyledNavLink>
      </Brand>
      <Menu>
        <BurgerMenu
          open={open}
          setOpen={setOpen}
          onClick={toggleMenu}
          aria-label={open ? "close the menu" : "open the menu"}
        >
          <Burger>
            <BurgerLabel>{open ? "sluit" : "menu"}</BurgerLabel>
            {open ? <AiOutlineClose /> : <AiOutlineMenu />}
          </Burger>
        </BurgerMenu>
        <FullMenu>
          <StyledNavLink to="/about" activeClassName="selected">
            about
          </StyledNavLink>
          <StyledNavLink to="/work" activeClassName="selected">
            work
          </StyledNavLink>
          <StyledNavLink to="/contact" activeClassName="selected">
            contact
          </StyledNavLink>
        </FullMenu>
      </Menu>
    </Wrapper>
  );
}

export default NavBar;
