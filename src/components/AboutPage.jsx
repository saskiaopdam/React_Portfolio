import styled from "styled-components/macro";

const Wrapper = styled.div`
  flex-grow: 1;
  background: yellow;
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

// const H3 = styled.h3`
//   margin-top: 28px;
//   margin-bottom: 18px;
//   @media (min-width: 500px) {
//     text-align: center;
//   }
// `;

const Paragraph = styled.p`
  margin-bottom: 8px;
`;

function AboutPage() {
  return (
    <Wrapper>
      <Title>About</Title>

      <Paragraph>
        This year, I'm switching careers from translation to development. Why?
        Because I'm curious, eager to learn and love to create and problem
        solve. And, I guess, to follow my dream of doing this in my work (I
        missed a career in art conservation). So, if you are looking for a
        enthousiastic beginner developer to learn the tricks of the trade,
        please read on.
      </Paragraph>

      <H2>From translator to developer</H2>
      <Paragraph>
        I'm an experienced freelance translator switching careers to
        development. I have a background in arts (introductory year at the
        Rietveld Academy) and I wanted to become an art conservator, but at the
        time no selection took place. The desire to work with visual and
        tangible objects has never left me. In my spare time I like to dance,
        read, and visit art and photograpy expositions. I live and work in The
        Hague in the Netherlands.
      </Paragraph>
      <H2>Why I'm switching careers</H2>
      <Paragraph>
        While freelancing as a translator and editor I had the opportunity to
        work on my own website, and a colleagues. This was so inspiring that I
        kept thinking about it ever since. This year I decided to take the
        plunge.
      </Paragraph>
      <H2>Where I'm learning full-stack development</H2>
      <Paragraph>
        In February this year I enrolled in a full-stack development course at{" "}
        <a href="https://www.wincacademy.nl/#" target="_blank" rel="noreferrer">
          Winc Academy
        </a>{" "}
        (remote learning). This covers: HTML, CSS, SCSS, JavaScript, React,
        Redux, Jest, Git, Github, NodeJS, Python, Flask and SQL.
      </Paragraph>
      <H2>What I'm doing at the moment</H2>
      <Paragraph>
        I started working on the final front-end assignment offered by the Winc
        Academy: the Student Dashboard. When finished, I will proceed with the
        back-end part of the course.
      </Paragraph>
      <H2>What I love about programming</H2>
      <Paragraph>
        I deeply enjoy coding because it allows for creativity and logical
        thinking at the same time, both of which I love. The result is visual
        and - if done well - appealing to the eye. An anspect I miss in
        translation.
      </Paragraph>
      <H2>What I'm looking for</H2>
      <Paragraph>
        I'm looking for an opportunity to gain real work experience and broaden
        my front-end skills in a junior developer role, while in the spare time
        finishing the back-end course.
      </Paragraph>
      <H2>What I can offer you</H2>
      <Paragraph>
        My curiosity, eagerness to learn and love of creating and problem
        solving.
      </Paragraph>
      <Paragraph>Hope to hear from you soon!</Paragraph>
    </Wrapper>
  );
}

export default AboutPage;
