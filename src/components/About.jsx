import styled from "styled-components/macro";

import { Link } from "react-router-dom";

const Wrapper = styled.section`
  width: 100%;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h3`
  font-size: 24px;
  font-weight: 500;
  color: white;
  margin-bottom: 12px;
  @media (min-width: 400px) {
    text-align: center;
  }
`;

const Details = styled.div`
  max-width: 500px;
  margin: 0 auto;
  text-align: justify;
`;

const Paragraph = styled.p`
  font-size: 15px;
  opacity: 0.75;
  line-height: 1.5;
  & + & {
    margin-top: 20px;
  }
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 16px;
  padding-bottom: 10px;
`;

function About() {
  return (
    <Wrapper>
      <Inner>
        <StyledLink to="/home">Home</StyledLink>
        <Heading>About</Heading>
        <Details>
          <Paragraph>
            While freelancing as a translator and editor I had the opportunity
            to work on my own website, and a colleagues. This was so inspiring
            that I kept thinking about it ever since.
          </Paragraph>
          <Paragraph>
            This year I decided to take the plunge and start a new adventure. In
            February I enrolled in a full-stack development course at Winc
            Academy (remote learning). So far I have gained knowledge and
            experience in HTML, CSS, SCSS, JavaScript, React, Redux, Jest, Git,
            Github and NodeJS.
          </Paragraph>
          <Paragraph>
            At present I'm busy with the final front-end assignment: a react-app
            showing ratings in a chart (student-dashboard). When finished, I
            will proceed with the back-end development course, which will cover
            Python, Flask and SQL.
          </Paragraph>
          <Paragraph>
            What I love about programming is that it allows for creativity and
            logical thinking, at the same time, both of which I love. It would
            be great to gain experience and broaden my front-end knowledge in a
            junior developer job, while in the spare time finishing the back-end
            course.
          </Paragraph>
          <Paragraph>
            So, if you are looking for an enthusiastic beginner programmer with
            a creative background (academy of arts), who loves to learn and
            would bring a problem solving attitude to your team, please feel
            free to get in touch.
          </Paragraph>
          <Paragraph>Hope to hear from you soon!</Paragraph>
        </Details>
      </Inner>
    </Wrapper>
  );
}

export default About;
