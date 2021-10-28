import { Link } from "react-router-dom";

import styled from "styled-components/macro";

import photo from "./_DSC3220_500x750.jpg";

const Wrapper = styled.section`
  flex-grow: 1;
  width: 100%;
  padding: 20px;
`;

const SectionHeader = styled.h3`
  font-size: 24px;
  font-weight: 500;
  color: white;
  margin-bottom: 12px;
  text-align: center;
`;

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 30px;
`;

const Photo = styled.img`
  width: 100%;
  max-width: 200px;
  margin-bottomm: 20px;
`;

const Caption = styled.figcaption`
  text-align: center;
  opacity: 0.75;
  font-size: 15px;
`;

const A = styled.a`
  color: black;
`;

const NavbarSpace = styled.div`
  height: 158px;
`;

function About() {
  return (
    <Wrapper>
      <NavbarSpace>{""}</NavbarSpace>
      <SectionHeader>about</SectionHeader>
      <Figure>
        <Photo src={photo} alt="portrait photo of Saskia Opdam" />
        <Caption>
          full-stack development student
          <br /> at{" "}
          <A href="https://www.wincacademy.nl" target="_blank" rel="noreferrer">
            Winc Academy
          </A>
        </Caption>
        <Caption>HTML | CSS | JavaScript | React | Redux | NodeJS</Caption>
        <Caption>Python | Flask | SQL</Caption>
      </Figure>
    </Wrapper>
  );
}

export default About;
