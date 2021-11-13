import { Link, NavLink } from "react-router-dom";

import styled from "styled-components/macro";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 14px;
  & + & {
    margin-left: 14px;
  }
  &.selected {
    pointer-events: none;
    font-weight: bold;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const Info = styled.div``;

const Name = styled.h1`
  font-size: 22px;
`;

const Role = styled.h2`
  font-size: 18px;
  font-weight: 500;
`;
const Location = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

const BurgerMenu = styled.button`
  display: flex;
  justify-content: flex-end;
  background: transparent;
  border: none;
  font-size: 20px;
  padding-left: 44px;
  @media (min-width: 500px) {
    display: none;
  }
`;

const Icon = styled.div`
  height: 26px;
  display: flex;
  align-items: center;
`;

const FullMenu = styled.div`
  display: none;
  // display: flex;
  // flex-direction: column;
  // align-items: flex-end;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 14px;
  // & + & {
  //   margin-left: 14px;
  // }
  &.selected {
    pointer-events: none;
    font-weight: bold;
  }
  &:hover {
    text-decoration: underline;
    &.homelink {
      text-decoration: none;
    }
  }
`;

const AnchorLink = styled.a`
  color: black;
  text-decoration: none;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
  }
`;

function NavBar({ open, setOpen, toggleMenu }) {
  return (
    <Wrapper>
      <StyledNavLink
        exact
        to="/"
        activeClassName="selected"
        className="homelink"
      >
        <Name>Saskia Opdam</Name>
        <Role>Junior front-end developer</Role>
        <Location>The Hague</Location>
      </StyledNavLink>
      <BurgerMenu
        open={open}
        setOpen={setOpen}
        onClick={toggleMenu}
        aria-label={open ? "close the menu" : "open the menu"}
      >
        {open ? (
          <Icon>
            <AiOutlineClose />
          </Icon>
        ) : (
          <Icon>
            <AiOutlineMenu />
          </Icon>
        )}
      </BurgerMenu>
      <FullMenu>
        <StyledNavLink exact to="/" activeClassName="selected">
          Home
        </StyledNavLink>
        <StyledNavLink to="/about" activeClassName="selected">
          About
        </StyledNavLink>
        <StyledNavLink to="/work" activeClassName="selected">
          Work
        </StyledNavLink>
        <AnchorLink
          href="https://www.behance.net/opdamsaski0505"
          target="_blank"
          rel="noreferrer"
        >
          Hobby
        </AnchorLink>
      </FullMenu>
    </Wrapper>
  );
}

export default NavBar;
