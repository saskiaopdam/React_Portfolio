import styled from "styled-components/macro";

import portraitLight from "../assets/portrait-layout/portraitLight.jpg";

const Wrapper = styled.div`
  flex-grow: 1;
  position: relative;
  // background-image: url(${portraitLight});
  // background-size: 100%;
  // background-repeat: no-repeat;
  // background-position: bottom;
  // @media (min-width: 500px) {
  //   background-size: 50%;
  // }
  // opacity: 0.5;
`;

const Title = styled.h1`
  margin-top: 20px;
  margin-bottom: 16px;
  text-align: center;
`;

const Paragraph = styled.p`
  margin: 0px auto 16px;
  line-height: 1.25;
  @media (min-width: 500px) {
    width: 50%;
  }
`;

const Image = styled.img`
  width: 100%;
  display: block;
  margin: 40px auto 0px;
  padding: 0 20px 20px 20px;
  @media (min-width: 500px) {
    width: 50%;
  }
`;

const AnchorLink = styled.a`
  color: black;
`;

// const Summary = styled.div`
//   margin-bottom: 32px;
// `;

// const h2 = styled.h2`
//   margin-bottom: 24px;
//   color: darkgray;
//   @media (min-width: 500px) {
//     text-align: center;
//   }
// `;

// const Paragraph = styled.p`
//   margin-bottom: 16px;
//   line-height: 1.25;
//   // max-width: 500px;
// `;

// const Accent = styled.span`
//   font-weight: bold;
// `;

// const Anchor = styled.a`
//   color: black;
// `;

function About() {
  return (
    <Wrapper>
      <Title>Background</Title>
      <Paragraph>
        After working on a website some time ago I got hooked and decided to
        learn more and switch careers from translation to development. Since
        February this year I follow a full-stack development course at{" "}
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
        <strong>Current skills:</strong>
        <br /> HTML, CSS, JavaScript, React/Redux, NodeJS
      </Paragraph>
      <Paragraph>
        <strong> Upcoming skills:</strong>
        <br /> Python, Flask, SQL
      </Paragraph>
      <Paragraph></Paragraph>

      <Image src={portraitLight} alt="portrait photo of Saskia Opdam" />
      {/* <Summary>
      

        <h2>loves solving problems</h2>
        <h2>loves visually beautiful things</h2>
        <h2>curious, eager to learn</h2>
        <h2>loves to dance, read and take long walks</h2>
        <h2>lives and works in The Hague</h2>
      </Summary>
    
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
      </Paragraph> */}
    </Wrapper>
  );
}

export default About;
