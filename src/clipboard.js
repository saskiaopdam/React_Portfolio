import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

{
  /* <Social>
        <a
          href="https://github.com/saskiaopdam/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/saskiaopdam/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a style={{ color: "indigo" }} href="mailto:opdamsaskia@icloud.com">
          <AiFillMail />
        </a>
      </Social> */
}

// import { AiFillUpCircle, AiOutlineUpCircle } from "react-icons/ai";
// // import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
// // import {
// //   AiOutlineGithub,
// //   AiOutlineLinkedin,
// //   AiOutlineMail,
// // } from "react-icons/ai";

import styled from "styled-components/macro";

import BarArea from "./BarArea";
import SlideArea from "./SlideArea";

// Navigation Main
const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 20px;
  // background: red;
`;

// const ScrollUp = styled(Link)`
//   // position: sticky;
//   // bottom: 0;
//   background: hotpink;
//   padding: 20px;
//   display: flex;
//   justify-content: right;
//   font-size: 24px;
// `;

function Main({ open, setOpen, toggleMenu }) {
  return (
    <Wrapper>
      <BarArea open={open} setOpen={setOpen} toggleMenu={toggleMenu} />
      <SlideArea open={open} setOpen={setOpen} toggleMenu={toggleMenu} />
      {/* <ScrollUp to="#">
          <AiFillUpCircle />
        </ScrollUp> */}
      {/* // gradually appear on scroll */}
    </Wrapper>
  );
}

export default Main;
