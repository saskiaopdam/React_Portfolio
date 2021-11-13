import { NavLink } from "react-router-dom";

import styled from "styled-components/macro";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div``;

const Name = styled.h1`
  font-size: 18px;
  font-weight: 500;
  block-size: fit-content;
`;

const Role = styled.h2`
  font-size: 18px;
  font-weight: 500;
`;
const Location = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

const Burger = styled.button`
  flex-grow: 1;
  height: 21px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border: none;
  font-size: 18px;
  @media (min-width: 500px) {
    display: none;
  }
`;

const FullMenu = styled.div`
  display: none;
  @media (min-width: 500px) {
    display: flex;
    align-items: center;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 14px;
  block-size: fit-content;
  & + & {
    margin-left: 14px;
  }
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
  block-size: fit-content;
  margin-left: 14px;
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
      </StyledNavLink>
      {/* <Role>Junior front-end developer</Role>
        <Location>The Hague</Location> */}
      {/* </StyledNavLink> */}
      <Burger
        open={open}
        setOpen={setOpen}
        onClick={toggleMenu}
        aria-label={open ? "close the menu" : "open the menu"}
      >
        {open ? <AiOutlineClose /> : <AiOutlineMenu />}
      </Burger>

      <FullMenu>
        <StyledNavLink exact to="/" activeClassName="selected">
          home
        </StyledNavLink>
        <StyledNavLink to="/about" activeClassName="selected">
          about
        </StyledNavLink>
        <StyledNavLink to="/work" activeClassName="selected">
          work
        </StyledNavLink>
        <AnchorLink
          href="https://www.behance.net/opdamsaski0505"
          target="_blank"
          rel="noreferrer"
        >
          hobby
        </AnchorLink>
      </FullMenu>
    </Wrapper>
  );
}

export default NavBar;
