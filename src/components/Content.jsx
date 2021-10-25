import styled from "styled-components/macro";

import Inner from "./Inner";

const Wrapper = styled.main`
  flex-grow: 1;
  background: white;
  color: black;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const Something = styled.div`
  flex-grow: 1;
  background: orange;
  color: black;
`;

function Content() {
  return (
    <Wrapper>
      <Inner>
        Content
        <Something>Something</Something>
        <Something>Something</Something>
      </Inner>
    </Wrapper>
  );
}

export default Content;
