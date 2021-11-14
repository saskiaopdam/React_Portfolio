import { NavLink } from "react-router-dom";

import styled from "styled-components/macro";

import {
  AiOutlineGithub,
  AiOutlineInbox,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Wrapper = styled.nav`
  position: fixed;
  top: 61px;
  left: -100%;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  z-index: 1;
  background: ${({ open }) => (open ? "whitesmoke" : "white")};
  transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0%)")};

  transition: transform 0.7s ease, background 0.7s ease;
  @media (min-width: 500px) {
    display: none;
  }
`;

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 14px;
  display: flex;
  justify-content: flex-end;
  & + & {
    padding-top: 14px;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const AnchorLink = styled.a`
  color: black;
  text-decoration: none;
  font-size: 16px;
  padding-top: 16px;
  display: flex;
  justify-content: flex-end;
  &:hover {
    opacity: 0.5;
  }
`;

function SlideMenu({ open, setOpen, toggleMenu }) {
  return (
    <Wrapper open={open} setOpen={setOpen} onClick={toggleMenu}>
      <StyledLink exact to="/" activeClassName="selected">
        Home
      </StyledLink>
      <StyledLink to="/about" className="mobile" activeClassName="selected">
        About
      </StyledLink>
      <StyledLink to="/work" className="mobile" activeClassName="selected">
        Work
      </StyledLink>
      <AnchorLink
        href="mailto:opdamsaskia@icloud.com"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineInbox aria-label="e-mail" />
      </AnchorLink>
      <AnchorLink
        href="https://www.linkedin.com/in/saskiaopdam/"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineLinkedin aria-label="linkedin" />
      </AnchorLink>
      <AnchorLink
        href="https://github.com/saskiaopdam"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineGithub aria-label="github" />
      </AnchorLink>
    </Wrapper>
  );
}

export default SlideMenu;
