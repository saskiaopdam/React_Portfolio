import styled from "styled-components/macro";

const Wrapper = styled.div`
  flex-grow: 1;
  padding: 20px;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PageHeader = styled.h3`
  font-size: 24px;
  font-weight: 400;
  color: white;
  text-align: center;
`;

function Intro() {
  return (
    <Wrapper>
      <PageHeader>Welcome to my portfolio</PageHeader>
    </Wrapper>
  );
}

export default Intro;
