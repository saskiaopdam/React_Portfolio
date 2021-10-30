import { NavLink } from "react-router-dom";

import styled from "styled-components/macro";

import {
  AiOutlineHome,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";

const Wrapper = styled.nav`
  position: absolute;
  left: -100%;
  // right: -100%;
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  background: ${({ open }) => (open ? "hotpink" : "indigo")};
  transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0%)")};
  // transform: ${({ open }) =>
    open ? "translateX(-100%)" : "translateX(0%)"};

  transition: transform 1s ease, background 1s ease;
  @media (min-width: 500px) {
    display: none;
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

  color: white;
  font-size: 20px;
  padding: 10px;
  & + & {
    padding-top: 16px;
  }
`;

function SlideMenu({ open, setOpen, toggleMenu }) {
  return (
    <Wrapper open={open} setOpen={setOpen} onClick={toggleMenu}>
      <StyledLink to="/about" className="mobile" activeClassName="selected">
        about
      </StyledLink>
      <StyledLink to="/work" className="mobile" activeClassName="selected">
        work
      </StyledLink>
      <StyledLink to="/contact" className="mobile" activeClassName="selected">
        contact
      </StyledLink>
    </Wrapper>
  );
}

export default SlideMenu;
