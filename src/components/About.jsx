import styled from "styled-components/macro";

import portraitLight from "../assets/portrait-layout/portrait-light.jpg";
import lemons from "../assets/portrait-layout/lemons.jpg";

const Wrapper = styled.div`
  flex-grow: 1;
`;

const Title = styled.h1`
  font-size: 22px;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  margin-bottom: 16px;
  line-height: 1.25;
  text-align: justify;
  @media (min-width: 768px) {
    width: 75%;
    margin: 0 auto 16px;
  }
`;

const Image = styled.img`
  width: 100%;
  display: block;
  margin-top: 20px;
  @media (min-width: 768px) {
    width: 25%;
    margin: 20px auto 0px;
  }
`;

const AnchorLink = styled.a`
  color: black;
`;

const Accent = styled.span`
  font-weight: bold;
`;

function About() {
  return (
    <Wrapper>
      <Title>Info</Title>
      <Paragraph>
        After working on a website some time ago I got hooked and decided to
        learn more and switch careers from translation to development. Since
        February this year I follow a{" "}
        <strong>full-stack development course</strong> at{" "}
        <AnchorLink
          href="https://www.wincacademy.nl/#"
          target="_blank"
          rel="noreferrer"
        >
          Winc Academy
        </AnchorLink>{" "}
        (remote learning). I just started working on the final front-end
        assignment.
      </Paragraph>
      <Paragraph>
        What I love about programming is that it allows for creativity and
        logical thinking at the same time. The result is visual and - if done
        well - appealing to the eye. An aspect I miss in translation.
      </Paragraph>
      <Paragraph>
        I'm looking for an opportunity to gain experience and broaden my
        front-end skills in a junior developer role, while in the spare time
        finishing the back-end curriculum.
      </Paragraph>
      <Paragraph>
        If you are looking for someone with endless curiosity, eagerness to
        learn and love of creating and problem solving, please let me know.
      </Paragraph>
      <Paragraph>
        <strong>Current skills:</strong>
        <br /> HTML | CSS | JavaScript | React | NodeJS
      </Paragraph>
      <Paragraph>
        <strong> Upcoming skills:</strong>
        <br /> Python, Flask, SQL
      </Paragraph>
    </Wrapper>
  );
}

export default About;
