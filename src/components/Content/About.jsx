import styled from "styled-components/macro";

import photo from "./_DSC3220_500x750.jpg";

const Wrapper = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: blue;
`;

const SectionHeader = styled.h3`
  font-size: 24px;
  font-weight: 400;
  color: white;
  margin-bottom: 24px;
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const Photo = styled.img`
  width: 100%;
  max-width: 200px;
`;

const Summary = styled.p`
  text-align: center;
  color: white;
`;

const A = styled.a`
  color: white;
`;

function About() {
  return (
    <Wrapper>
      <SectionHeader>A B O U T</SectionHeader>
      <Intro>
        <Photo src={photo} alt="portrait photo of Saskia Opdam" />
        <Summary>
          full-stack development student
          <br /> at{" "}
          <A href="https://www.wincacademy.nl" target="_blank" rel="noreferrer">
            Winc Academy
          </A>
        </Summary>
        <Summary>HTML | CSS | JavaScript | React | Redux | NodeJS</Summary>
        <Summary>Python | Flask | SQL</Summary>
      </Intro>
    </Wrapper>
  );
}

export default About;
