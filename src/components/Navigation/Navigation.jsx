import { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components/macro";

import { AiFillUpCircle, AiOutlineUpCircle } from "react-icons/ai";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";

import BarArea from "./BarArea";
import SlideArea from "./SlideArea";

const Wrapper = styled.div`
  flex-grow: 1;

  position: fixed;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const Inner = styled.div`
  flex-grow: 1;

  width: 100%;
  height: 100%;

  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const ScrollUp = styled(Link)`
  position: sticky;
  bottom: 0;
  background: transparent;
  padding: 20px;
  display: flex;
  justify-content: right;
  font-size: 24px;
`;

function Navigation() {
  const [open, setOpen] = useState(false);
  console.log(`open: ${open}`);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <Wrapper>
      <Inner>
        <BarArea open={open} setOpen={setOpen} toggleMenu={toggleMenu} />
        <SlideArea open={open} setOpen={setOpen} toggleMenu={toggleMenu} />
        <ScrollUp to="#">
          <AiFillUpCircle />
        </ScrollUp>
        {/* // gradually appear on scroll */}
      </Inner>
    </Wrapper>
  );
}

export default Navigation;
