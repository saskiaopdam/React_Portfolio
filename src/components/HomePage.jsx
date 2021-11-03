import { Link } from "react-router-dom";
import styled from "styled-components/macro";

import photo from "../assets/portrait-photos/_DSC3414_500x755.jpg";
import lemons from "../assets/photo-projects/lemons.jpg";
import colourtoggle2 from "../assets/coding-projects/colour-toggle-2.png";

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  margin-top: 32px;
  margin-bottom: 52px;
  color: indigo;
  @media (min-width: 500px) {
    text-align: center;
  }
`;

const H2 = styled.h2`
  margin-bottom: 24px;
  color: darkgray;
  @media (min-width: 500px) {
    text-align: center;
  }
`;

const H3 = styled.h3`
  margin-top: 28px;
  margin-bottom: 18px;
  @media (min-width: 500px) {
    text-align: center;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 16px;
  @media (min-width: 500px) {
    text-align: center;
  }
`;

const Accent = styled.span`
  &.deeppink {
    color: indigo;
  }
  &.darkgray {
    color: darkgray;
    // text-decoration: underline;
    // text-decoration-color: deeppink;
  }
`;

const Image = styled.img`
  width: 100%;
  margin: 0 auto 12px;
  @media (min-width: 500px) {
    width: 50%;
  }
`;

const Anchor = styled.a`
  @media (min-width: 500px) {
    text-align: center;
  }
`;

const StyledLink = styled(Link)`
  color: indigo;
  @media (min-width: 500px) {
    text-align: center;
  }
`;

function HomePage() {
  return (
    <Wrapper>
      <Title>I'm a junior front-end developer learning full-stack</Title>

      <Paragraph>skills:</Paragraph>
      <H2>HTML | CSS | JavaScript | React | Redux | NodeJS</H2>

      <Paragraph>upcoming:</Paragraph>
      <H2>Python | Flask | SQL</H2>

      <H3>I like coding</H3>

      <Anchor
        href="https://suspicious-johnson-c894da.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={colourtoggle2} alt="screenshot of colourtoggle project" />
      </Anchor>
      <StyledLink to="/work">see all coding projects</StyledLink>

      <H3>and photo-editing</H3>

      <Anchor
        href="https://www.behance.net/gallery/73920763/Lemons"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={lemons} alt="image of lemons made by photo editing" />
      </Anchor>
      <Anchor
        href="https://www.behance.net/opdamsaski0505"
        target="_blank"
        rel="noreferrer"
      >
        see all photo-editing projects
      </Anchor>

      <H3>this is me</H3>
      <Image src={photo} alt="portrait photo of Saskia Opdam" />
      <StyledLink to="/about">learn more about me</StyledLink>

      {/* <Title>
        Hi there, and welcome to my portfolio.
        <br />
      </Title>
     

     
    
      <a href="/work">See the code on GitHub</a>
      <br />
      <a href="mailto:opdamsaskia@icloud.com">Drop me an e-mail</a>
      <br />
      <a
        href="https://www.linkedin.com/in/saskiaopdam/"
        target="_blank"
        rel="noreferrer"
      >
        Connect with me on LinkedIn
      </a> */}
    </Wrapper>
  );
}

export default HomePage;
