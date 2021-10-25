import styled from "styled-components/macro";

const Wrapper = styled.section`
  width: 100%;
  padding: 10px;
`;

// const Inner = styled.div`
//   width: 100%;
//   max-width: 1000px;
//   margin: 0 auto;
//   display: flex;
//   flex-direction: column;
// `;

const SectionHeader = styled.h3`
  font-size: 20px;
  font-weight: 400;
  color: white;
  margin-bottom: 10px;
`;

function Work() {
  return (
    <Wrapper>
      {/* <Inner> */}
      <SectionHeader>Work</SectionHeader>
      {/* </Inner> */}
    </Wrapper>
  );
}

export default Work;
