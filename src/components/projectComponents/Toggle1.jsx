import styled from "styled-components/macro";

import toggle1 from "../../assets/toggle1.png";

const Wrapper = styled.div`
  flex-grow: 1;
  background: whitesmoke;
  padding: 20px;
`;

const Image = styled.img`
  width: 100%;
  display: block;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const Heading = styled.p`
  font-weight: bold;
`;

const Paragraph = styled.p`
  margin-bottom: 16px;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const Link = styled.a`
  color: mediumvioletred;
  & + & {
    margin-left: 32px;
  }
  &:hover {
    font-weight: bold;
  }
`;

function Toggle1() {
  return (
    <Wrapper>
      <Image src={toggle1} alt="screenshot of toggle1 project" />
      <Heading>date:</Heading>
      <Paragraph>april 2021</Paragraph>

      <Heading>stack:</Heading>
      <Paragraph>HTML, CSS, JavaScript</Paragraph>

      <Heading>description:</Heading>
      <Paragraph>
        Add interactivity to a website by adding eventlisteners.
      </Paragraph>

      <Link
        href="https://toggle1-wa.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        site online
      </Link>
      <Link
        href="https://github.com/saskiaopdam/Winc_Assignment_3_Colour_Toggle"
        target="_blank"
        rel="noreferrer"
      >
        code online
      </Link>
    </Wrapper>
  );
}

export default Toggle1;
