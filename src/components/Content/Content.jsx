import styled from "styled-components/macro";

import NavBarSpacer from "./NavBarSpacer";
import Main from "./Main";
import Footer from "./Footer";

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  background: indigo;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 1000px;
  margin: 0 auto;
  background: hotpink;
`;

function Content() {
  return (
    <Wrapper>
      <Inner>
        <NavBarSpacer />
        <Main />
        <Footer />
      </Inner>
    </Wrapper>
  );
}

export default Content;
