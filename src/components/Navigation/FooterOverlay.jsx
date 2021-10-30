import { Link } from "react-router-dom";
import styled from "styled-components/macro";

import { AiFillUpCircle, AiOutlineUpCircle } from "react-icons/ai";

const Wrapper = styled.footer`
  flex-shrink: 0;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
`;

// const Copyright = styled.small`
//   display: block;
//   font-size: 12px;
//   color: transparent;
// `;

const ScrollUp = styled(Link)`
  // position: sticky;
  // bottom: 0;
  display: flex;
  justify-content: right;
  // font-size: 24px;
`;

function Footer() {
  return (
    <Wrapper>
      {/* <Copyright>© design by me</Copyright> */}
      <ScrollUp to="#">
        <AiFillUpCircle />
      </ScrollUp>
    </Wrapper>
  );
}

export default Footer;
