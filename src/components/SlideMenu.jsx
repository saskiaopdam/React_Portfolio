import { NavLink } from "react-router-dom";

import styled from "styled-components/macro";

import {
  AiOutlineGithub,
  AiOutlineInbox,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Wrapper = styled.nav`
  position: fixed;
  top: 58px;
  left: -100%;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background: ${({ open }) => (open ? "royalblue" : "white")};
  transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0%)")};

  transition: transform 0.7s ease, background 0.7s ease;
  @media (min-width: 500px) {
    display: none;
  }
`;

const StyledLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  justify-content: flex-end;
  &:hover {
    transform: translateX(-5px);
  }

  // &.selected {
  //   pointer-events: none;
  //   text-decoration: underline;
  // }

  color: white;
  font-size: 20px;
  padding-top: 12px;
  & + & {
    padding-top: 32px;
  }
`;

const AnchorLink = styled.a`
  display: flex;
  text-decoration: none;
  justify-content: flex-end;
  &:hover {
    transform: translateX(-5px);
  }

  &.selected {
    pointer-events: none;
    text-decoration: underline;
  }

  color: white;
  font-size: 20px;
  padding-top: 32px;
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

      <AnchorLink
        href="mailto:opdamsaskia@icloud.com"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineInbox />
      </AnchorLink>
      <AnchorLink
        href="https://www.linkedin.com/in/saskiaopdam/"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineLinkedin />
      </AnchorLink>
      <AnchorLink
        href="https://github.com/saskiaopdam"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineGithub />
      </AnchorLink>
    </Wrapper>
  );
}

export default SlideMenu;
