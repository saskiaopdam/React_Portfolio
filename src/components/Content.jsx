import styled from "styled-components/macro";

import Portfolio from "./Portfolio";

const Wrapper = styled.div`
  flex-grow: 1;
  background: white;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const Inner = styled.div`
  flex-grow: 1;
  background: hotpink;

  width: 100%;
  height: 100%;

  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

function Content() {
  return (
    <Wrapper>
      <Inner>
        <Portfolio />
      </Inner>
    </Wrapper>
  );
}

export default Content;
