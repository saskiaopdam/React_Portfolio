import styled from "styled-components/macro";

import tdd from "../../assets/tdd.png";

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

function TDD() {
  return (
    <Wrapper>
      <Image src={tdd} alt="screenshot of TDD project" />
      <Heading>date:</Heading>
      <Paragraph>august 2021</Paragraph>

      <Heading>stack:</Heading>
      <Paragraph>TDD testing</Paragraph>

      <Heading>description:</Heading>
      <Paragraph>
        Writing tests to check if functions perform as expected, taking into
        account multiple environment factors.
      </Paragraph>

      <Link
        href="https://github.com/saskiaopdam/Winc_Assignment_6_TDD_testing"
        target="_blank"
        rel="noreferrer"
      >
        code online
      </Link>
    </Wrapper>
  );
}

export default TDD;
