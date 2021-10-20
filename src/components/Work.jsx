import styled from "styled-components/macro";

const Wrapper = styled.section`
  width: 100%;
  padding: 20px;
`;

function Work({ onPageClick }) {
  return (
    <Wrapper onClick={onPageClick}>
      <h2>Work</h2>
    </Wrapper>
  );
}

export default Work;
