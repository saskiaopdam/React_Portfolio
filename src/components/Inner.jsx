import styled from "styled-components/macro";

const Wrapper = styled.div`
  flex-grow: 1;
  background: red;

  width: 100%;
  height: 100%;

  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

function Inner() {
  return <Wrapper />;
}

export default Inner;
