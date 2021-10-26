import styled from "styled-components/macro";

import photo from "./_DSC3220_500x750.jpg";

const Wrapper = styled.section`
  flex-grow: 1;
  width: 100%;
  padding: 20px;
`;

const SectionHeader = styled.h3`
  font-size: 20px;
  font-weight: 400;
  color: white;
  margin-bottom: 10px;
`;

const Photo = styled.img`
  max-width: 100px;
`;

const Paragraph = styled.p`
  font-size: 15px;
  line-height: 1.5;
  & + & {
    margin-top: 20px;
  }
`;

const Summary = styled.p`
  margin-bottom: 20px;
  line-height: 1.5;
  @media (min-width: 400px) {
    text-align: center;
  }
`;

const NavbarSpace = styled.div`
  height: 158px;
`;

function About() {
  return (
    <Wrapper>
      <NavbarSpace>{""}</NavbarSpace>
      <SectionHeader>About</SectionHeader>
      <Photo src={photo} alt="portrait photo of Saskia Opdam" />
      <Summary>full-stack development student at Winc Academy</Summary>
      <Summary>
        HTML | CSS | JavaScript | React | Redux | NodeJS
        <br /> Python | Flask | SQL
      </Summary>
      <Paragraph>
        While freelancing as a translator and editor I had the opportunity to
        work on my own website, and a colleagues. This was so inspiring that I
        kept thinking about it ever since.
      </Paragraph>
      <Paragraph>
        This year I decided to take the plunge and start a new adventure. In
        February I enrolled in a full-stack development course at Winc Academy
        (remote learning). So far I have gained knowledge and experience in
        HTML, CSS, SCSS, JavaScript, React, Redux, Jest, Git, Github and NodeJS.
      </Paragraph>
      <Paragraph>
        At present I'm busy with the final front-end assignment: a react-app
        showing ratings in a chart (student-dashboard). When finished, I will
        proceed with the back-end development course, which will cover Python,
        Flask and SQL.
      </Paragraph>
      <Paragraph>
        What I love about programming is that it allows for creativity and
        logical thinking, at the same time, both of which I love. It would be
        great to gain experience and broaden my front-end knowledge in a junior
        developer job, while in the spare time finishing the back-end course.
      </Paragraph>
      <Paragraph>
        So, if you are looking for an enthusiastic beginner programmer with a
        creative background (academy of arts), who loves to learn and would
        bring a problem solving attitude to your team, please feel free to get
        in touch.
      </Paragraph>
      <Paragraph>Hope to hear from you soon!</Paragraph>
    </Wrapper>
  );
}

export default About;
