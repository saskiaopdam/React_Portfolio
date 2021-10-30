import styled from "styled-components/macro";

import Projects from "./Projects";

const Wrapper = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background: blue;
`;

const SectionHeader = styled.h3`
  font-size: 24px;
  font-weight: 400;
  color: white;
  margin: 24px 0;
  text-align: center;
`;

function Work() {
  return (
    <Wrapper>
      <SectionHeader>W O R K</SectionHeader>
      <Projects />
    </Wrapper>
  );
}

export default Work;