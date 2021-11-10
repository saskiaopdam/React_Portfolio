import styled from "styled-components/macro";

import toggle2 from "../../assets/toggle2.png";

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

function Toggle2() {
  return (
    <Wrapper>
      <Image src={toggle2} alt="screenshot of toggle2 project" />
      <Heading>date:</Heading>
      <Paragraph>june 2021</Paragraph>

      <Heading>stack:</Heading>
      <Paragraph>HTML, CSS, JavaScript</Paragraph>

      <Heading>description:</Heading>
      <Paragraph>
        A new version of the Winc Academy colour toggle project.
      </Paragraph>

      <Link
        href="https://toggle2.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        site online
      </Link>
      <Link
        href="https://github.com/saskiaopdam/Colour_Toggle_Design"
        target="_blank"
        rel="noreferrer"
      >
        code online
      </Link>
    </Wrapper>
  );
}

export default Toggle2;
