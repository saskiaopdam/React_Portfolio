import { Link } from "react-router-dom";

import styled from "styled-components/macro";

import {
  AiOutlineInbox,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

import portraitDark from "../assets/portrait-layout/portraitDark.jpg";
import toggle2 from "../assets/portrait-layout/toggle2.png";
import lemons from "../assets/portrait-layout/lemons.jpg";

const Wrapper = styled.div`
  flex-grow: 1;
`;

const Title = styled.h1`
  margin-top: 40px;
  margin-bottom: 36px;
  text-align: center;
  font-weight: 500;
`;

const Subtitle = styled.h2`
  text-align: center;
  font-weight: 500;
`;

const FigureWrapper = styled.div`
  margin-top: 40px;
`;

const Figure = styled.figure`
  position: relative;
  padding: 40px;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const Image = styled.img`
  width: 100%;
  display: block;
`;

const Heading2 = styled.h2`
  margin-bottom: 24px;
`;

const Heading3 = styled.h3`
  font-size: 18px;
  font-weight: 500;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &.information {
    margin-bottom: 40px;
  }
  &.contact {
    flex-direction: row;
  }
`;

const StyledLink = styled(Link)`
  color: black;
  &.information {
    margin-bottom: 9px;
  }
`;

const AnchorLink = styled.a`
  color: black;
  &.contact {
    color: royalblue;
    font-size: 24px;
    & + & {
      margin-left: 32px;
    }
  }
`;

function Home() {
  return (
    <Wrapper>
      <Title>Saskia Opdam</Title>
      <Subtitle>Junior front-end developer</Subtitle>
      {/* <Subtitle>
        HTML | CSS | JavaScript | React/Redux | NodeJS | Python | Flask | SQL
      </Subtitle> */}
      {/* <Title>Junior front-end developer learning full-stack</Title>
      <Subtitle>
        HTML | CSS | JavaScript | React/Redux | NodeJS | Python | Flask | SQL
      </Subtitle> */}
      <FigureWrapper>
        <Figure>
          <Image src={portraitDark} alt="portrait photo of Saskia Opdam" />
        </Figure>
        <Figure>
          <Image src={toggle2} alt="screenshot of toggle2 project" />
        </Figure>
        <Figure>
          <Image src={lemons} alt="screenshot of lemons project" />
        </Figure>
      </FigureWrapper>
      {/* <Links className="information">
        <StyledLink to="/about" className="information">
          <Heading3>Background</Heading3>
        </StyledLink>

        <StyledLink to="/work" className="information">
          <Heading3>Coding projects</Heading3>
        </StyledLink>
        <AnchorLink
          href="https://www.behance.net/opdamsaski0505"
          target="_blank"
          rel="noreferrer"
        >
          <Heading3>Photo projects</Heading3>
        </AnchorLink>
      </Links>

      <Heading2>Contact</Heading2>
      <Links className="contact">
        <AnchorLink href="mailto:opdamsaskia@icloud.com" className="contact"> */}
      {/* <Icon> */}
      {/* <AiOutlineInbox aria-label="email" /> */}
      {/* </Icon> */}
      {/* <Heading3>mail</Heading3> */}
      {/* </AnchorLink>
        <AnchorLink
          href="https://www.linkedin.com/in/saskiaopdam/"
          target="_blank"
          rel="noreferrer"
          className="contact"
        > */}
      {/* <Icon> */}
      {/* <AiOutlineLinkedin aria-label="linkedin" /> */}
      {/* </Icon> */}
      {/* <Heading3>linkedin</Heading3> */}
      {/* </AnchorLink>
        <AnchorLink
          href="https://github.com/saskiaopdam"
          target="_blank"
          rel="noreferrer"
          className="contact"
        > */}
      {/* <Icon> */}
      {/* <AiOutlineGithub aria-label="github" /> */}
      {/* </Icon> */}
      {/* <Heading3>github</Heading3> */}
      {/* </AnchorLink>
      </Links> */}
    </Wrapper>
  );
}

export default Home;
