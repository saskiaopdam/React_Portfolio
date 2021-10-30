import styled from "styled-components/macro";

const Wrapper = styled.section`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: blue;
`;

const IntroHeader = styled.h3`
  font-size: 24px;
  font-weight: 400;
  color: white;
  letter-spacing: 6px;
  line-height: 36px;
`;

function Home() {
  return (
    <Wrapper>
      <IntroHeader>welcome to my PORTFOLIO</IntroHeader>
    </Wrapper>
  );
}

export default Home;
