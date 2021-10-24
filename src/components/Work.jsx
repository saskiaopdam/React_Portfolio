import styled from "styled-components/macro";

const Wrapper = styled.section`
  width: 100%;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h3`
  font-size: 24px;
  font-weight: 500;
  color: white;
  margin-bottom: 12px;
  @media (min-width: 400px) {
    text-align: center;
  }
`;

function Work() {
  return (
    <Wrapper>
      <Inner>
        <Heading>Work</Heading>
      </Inner>
    </Wrapper>
  );
}

export default Work;
