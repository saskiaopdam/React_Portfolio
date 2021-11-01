import styled from "styled-components/macro";

const Wrapper = styled.div``;

const PageHeader = styled.h1`
  margin: 16px 0;
`;

const Paragraph = styled.p`
  margin-bottom: 8px;
`;

function About() {
  return (
    <Wrapper>
      <PageHeader>About me</PageHeader>
      <h2>From translator to developer</h2>
      <Paragraph>
        I'm an experienced freelance translator switching careers to
        development. I have a background in arts (introductory year at the
        Rietveld Academy) and I wanted to become an art conservator, but at the
        time no selection took place. The desire to work with visual and
        tangible objects has never left me. In my spare time I like to dance,
        read, and visit art and photograpy expositions. I live and work in The
        Hague in the Netherlands.
      </Paragraph>
      <h2>Why I'm switching careers</h2>
      <Paragraph>
        While freelancing as a translator and editor I had the opportunity to
        work on my own website, and a colleagues. This was so inspiring that I
        kept thinking about it ever since. This year I decided to take the
        plunge.
      </Paragraph>
      <h2>Where I'm learning full-stack development</h2>
      <Paragraph>
        In February this year I enrolled in a full-stack development course at{" "}
        <a href="https://www.wincacademy.nl/#" target="_blank" rel="noreferrer">
          Winc Academy
        </a>{" "}
        (remote learning). This covers: HTML, CSS, SCSS, JavaScript, React,
        Redux, Jest, Git, Github, NodeJS, Python, Flask and SQL.
      </Paragraph>
      <h2>What I'm doing at the moment</h2>
      <Paragraph>
        I started working on the final front-end assignment offered by the Winc
        Academy: the Student Dashboard. When finished, I will proceed with the
        back-end part of the course.
      </Paragraph>
      <h2>What I love about programming</h2>
      <Paragraph>
        I deeply enjoy coding because it allows for creativity and logical
        thinking at the same time, both of which I love. The result is visual
        and - if done well - appealing to the eye. An anspect I miss in
        translation.
      </Paragraph>
      <h2>What I'm looking for</h2>
      <Paragraph>
        I'm looking for an opportunity to gain real work experience and broaden
        my front-end skills in a junior developer role, while in the spare time
        finishing the back-end course.
      </Paragraph>
      <h2>What I can offer you</h2>
      <Paragraph>
        My curiosity, eagerness to learn and love of creating and problem
        solving.
      </Paragraph>
      <Paragraph>Hope to hear from you soon!</Paragraph>
    </Wrapper>
  );
}

export default About;
