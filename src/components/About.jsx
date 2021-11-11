import styled from "styled-components/macro";

import portraitLight from "../assets/portraitLight.jpg";

const Wrapper = styled.div`
  flex-grow: 1;
`;

const Title = styled.h1`
  margin-bottom: 16px;
`;

const Summary = styled.div`
  margin-bottom: 32px;
`;

const H2 = styled.h2`
  margin-bottom: 24px;
  color: darkgray;
  @media (min-width: 500px) {
    text-align: center;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 16px;
  line-height: 1.25;
  // max-width: 500px;
`;

const Accent = styled.span`
  font-weight: bold;
`;

const Anchor = styled.a`
  color: black;
`;

const Image = styled.img`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
`;

function About() {
  return (
    <Wrapper>
      <Title>About</Title>
      <p>I'm working on this page</p>
      {/* <Title>about me</Title>
      <Summary>
        <H2>experienced freelance translator</H2>
        <H2>switching careers to development</H2>
        <H2>remotely learning full-stack</H2>
        <H2>almost finished front-end course</H2>
        <H2>loves solving problems</H2>
        <H2>loves visually beautiful things</H2>
        <H2>curious, eager to learn</H2>
        <H2>loves to dance, read and take long walks</H2>
        <H2>lives and works in The Hague</H2>
      </Summary>

      <Paragraph>
        After working on a website some time ago I got hooked and decided to
        learn more and <Accent>switch careers</Accent>. Since February this year
        I follow a full-stack development course at{" "}
        <Anchor
          href="https://www.wincacademy.nl/#"
          target="_blank"
          rel="noreferrer"
        >
          Winc Academy
        </Anchor>{" "}
        (remote learning). I just started working on the final front-end
        assignment and hope to graduate soon and continue with the back-end part
        of the course.
      </Paragraph>

      <Paragraph>
        What I love about programming is that it allows for{" "}
        <Accent>creativity</Accent> and logical thinking at the same time. The
        result is visual and - if done well - appealing to the eye. An anspect I
        miss in translation.
      </Paragraph>

      <Paragraph>
        I'm looking for an opportunity to gain experience and broaden my
        front-end skills in a junior <Accent>developer role</Accent>, while in
        the spare time finishing the back-end curriculum.
      </Paragraph>

      <Paragraph>
        If you are looking for someone with endless <Accent>curiosity</Accent>,
        eagerness to learn and love of creating and problem solving, please let
        me know.
      </Paragraph>
       */}
      <Image src={portraitLight} alt="portrait photo of Saskia Opdam" />
    </Wrapper>
  );
}

export default About;
