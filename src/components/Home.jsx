import styled from "styled-components/macro";

import photo from "./_DSC3414_500x755.jpg";

const Wrapper = styled.div``;

const Title = styled.h1`
  margin: 32px 0 52px 0;
`;

const Skills = styled.h2`
  margin-bottom: 24px;
`;

const Accent = styled.span`
  &.deeppink {
    color: deeppink;
  }
  &.darkgray {
    color: darkgray;
    // text-decoration: underline;
    // text-decoration-color: deeppink;
  }
`;

const LinkButton = styled.button`
  background: white;
  border: 1px solid deeppink;
  // width: 100%;
  // max-width: 500px;
  padding: 10px;
  border-radius: 5px;
  margin: 20px 0;
  font-size: 20px;
  color: deeppink;
`;

const Photo = styled.img`
  width: 100%;
  max-width: 500px;
  @media (min-width: 1000px) {
    width: 50%;
  }
`;

const Paragraph = styled.p`
  margin-top: 16px;
`;

function Home() {
  return (
    <Wrapper>
      <Title>
        Hi there, and welcome to my portfolio.
        <br />
        I'm a <Accent className="deeppink">
          junior front-end developer
        </Accent>{" "}
        <Accent className="darkgray">learning full-stack</Accent>.
      </Title>
      <h2>My skills are:</h2>
      <p>HTML | CSS | JavaScript | React | Redux &amp; NodeJS</p>

      <h2>I'm about to learn:</h2>
      <p>Python | Flask &amp; SQL</p>

      <Photo src={photo} alt="portrait photo of Saskia Opdam" />
      <Paragraph>
        This year, I'm switching careers from translation to development. Why?
        Because I'm curious, eager to learn and love to create and problem
        solve. And, I guess, to follow my dream of doing this in my work (I
        missed a career in art conservation). So, if you are looking for a
        enthousiastic beginner developer to learn the tricks of the trade,
        please read on.
      </Paragraph>
      <a href="/about">Learn more about me</a>
      <br />
      <a href="/work">Have a look at my work</a>
      <br />
      <a href="mailto:opdamsaskia@icloud.com">Drop me an e-mail</a>
      <br />
      <a
        href="https://www.linkedin.com/in/saskiaopdam/"
        target="_blank"
        rel="noreferrer"
      >
        Connect with me on LinkedIn
      </a>
    </Wrapper>
  );
}

export default Home;
