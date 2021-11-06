import styled from "styled-components/macro";

import lemons from "../assets/photo-projects/lemons.jpg";

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin-top: 32px;
  margin-bottom: 52px;
  @media (min-width: 500px) {
    text-align: center;
  }
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
  max-width: 500px;
`;

const Accent = styled.span`
  font-weight: bold;
`;

const Anchor = styled.a`
  color: black;
`;

const ImageAnchorLink = styled.a`
  text-decoration: none;
  background: white;
  color: black;
  // padding-top: 16px;
  margin-bottom: 32px;
  @media (min-width: 500px) {
    text-align: center;
  }
`;

const Heading = styled.h3`
  font-size: 18px;
  margin-bottom: 9px;
  @media (min-width: 500px) {
    text-align: center;
  }
`;

const ImageAnchorLabel = styled.p`
  color: royalblue;
  margin-bottom: 16px;
  @media (min-width: 500px) {
    text-align: center;
  }
`;

const Hovereffect = styled.span`
  &:hover {
    font-weight: bold;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 480px;
  display: block;
  margin: 16px 0;
  @media (min-width: 768px) {
    margin: 16px auto;
  }
`;

function About() {
  return (
    <Wrapper>
      <Title>about me</Title>
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
      <Heading>photo projects</Heading>

      <ImageAnchorLink
        href="https://www.behance.net/opdamsaski0505"
        target="_blank"
        rel="noreferrer"
      >
        <ImageAnchorLabel>
          <Hovereffect>overview</Hovereffect> {">"}
        </ImageAnchorLabel>
        <Image src={lemons} alt="screenshot of lemons project" />
      </ImageAnchorLink>
    </Wrapper>
  );
}

export default About;
