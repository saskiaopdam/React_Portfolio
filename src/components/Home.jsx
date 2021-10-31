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
      <h2>This is me</h2>

      <Photo src={photo} alt="portrait photo of Saskia Opdam" />
      <Photo src={photo} alt="portrait photo of Saskia Opdam" />
      <Paragraph>
        This year, I'm switching careers from translation to development. Why?
        Because I'm curious, eager to learn and love to create and problem
        solve. So, if you are looking for a enthousiastic beginner developer who
        you can teach the tricks of the trade, please read on.
      </Paragraph>
      <LinkButton>Read my bio</LinkButton>
    </Wrapper>
  );
}

export default Home;
