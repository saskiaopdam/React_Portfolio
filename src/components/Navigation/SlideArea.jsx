import styled from "styled-components/macro";

import { AiFillUpCircle } from "react-icons/ai";

import SlideMenu from "./SlideMenu";

const Wrapper = styled.nav`
  flex-grow: 1;
  position: relative;
  background: transparent;
`;

// const ScrollUp = styled(Link)`
//   position: sticky;
//   bottom: 0;
//   background: transparent;
//   padding: 20px;
//   display: flex;
//   justify-content: right;
//   font-size: 24px;
// `;

function SlideArea({ open, setOpen, toggleMenu }) {
  return (
    <Wrapper>
      <SlideMenu open={open} setOpen={setOpen} toggleMenu={toggleMenu} />

      {/* <ScrollUp to="#">
        <AiFillUpCircle />
      </ScrollUp> */}
      {/* // gradually appear on scroll */}
    </Wrapper>
  );
}

export default SlideArea;
