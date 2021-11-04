import styled from "styled-components/macro";

const Wrapper = styled.div`
  flex-grow: 1;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin-top: 12px;
  margin-bottom: 64px;
  @media (min-width: 500px) {
    text-align: center;
  }
`;

const Summary = styled.div`
  margin-bottom: 64px;
`;

const H2 = styled.h2`
  margin-bottom: 24px;
  color: darkgray;
  @media (min-width: 500px) {
    text-align: center;
  }
`;

const Paragraph = styled.p`
  font-size: 18px;
  margin-bottom: 27px;
  line-height: 1.25;
  max-width: 500px;
  text-indent: 32px;
`;

const Accent = styled.span`
  font-weight: bold;
`;

const Anchor = styled.a`
  font-weight: bold;
  color: black; ;
`;

function About() {
  return (
    <Wrapper>
      <Title>About me</Title>
      <Summary>
        <H2>experienced freelance translator</H2>
        <H2>switching careers to development</H2>
        <H2>why? because I love to puzzle and create</H2>
        <H2>remotely learning full-stack</H2>
        <H2>almost finished front-end course</H2>
        <H2>loves solving problems</H2>
        <H2>loves visually beautiful things</H2>
        <H2>curious, eager to learn</H2>
        <H2>loves to dance, read and take long walks</H2>
        <H2>lives and works in The Hague</H2>
      </Summary>

      <Paragraph>
        <Accent>I decided to switch careers because</Accent> while freelancing
        as a translator and editor, I had the opportunity to work on my own
        website, and a colleagues. This was so inspiring that I kept thinking
        about it ever since.{" "}
      </Paragraph>
      <Paragraph>
        <Accent>This year I decided to take the plunge:</Accent> In February I
        enrolled in a full-stack development course at{" "}
        <Anchor
          href="https://www.wincacademy.nl/#"
          target="_blank"
          rel="noreferrer"
        >
          Winc Academy
        </Anchor>{" "}
        (remote learning). I just started working on the final front-end
        assignment: the Student Dashboard.
      </Paragraph>
      <Paragraph>
        <Accent>What I love about programming is that</Accent> it allows for
        creativity and logical thinking at the same time. The result is visual
        and - if done well - appealing to the eye. An anspect I miss in
        translation.
      </Paragraph>

      <Paragraph>
        <Accent>I'm looking for an opportunity to gain</Accent> real work
        experience and broaden my front-end skills in a junior developer role,
        while in the spare time finishing the back-end course.
      </Paragraph>

      <Paragraph>
        <Accent>What I can offer you is</Accent> endless curiosity, eagerness to
        learn and love of creating and problem solving. I hope to hear from you
        soon!
      </Paragraph>
    </Wrapper>
  );
}

export default About;
