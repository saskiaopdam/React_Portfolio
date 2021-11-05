import styled from "styled-components/macro";

import tdd from "../../assets/winc-projects/tdd.png";

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const AnchorLink = styled.a`
  text-decoration: none;
  background: white;
  color: black;
  margin-bottom: 16px;
`;

const AnchorLabel = styled.p`
  color: royalblue;
  margin-bottom: 16px;
`;

const Hovereffect = styled.span`
  &:hover {
    text-decoration: underline;
  }
`;
const Image = styled.img`
  width: 100%;
  max-width: 460px;
  display: block;
  margin-bottom: 16px;
`;

const Heading = styled.p`
  font-weight: bold;
`;

const Paragraph = styled.p`
  margin-bottom: 16px;
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

      <AnchorLink
        href="https://github.com/saskiaopdam/Winc_Assignment_6_TDD_testing"
        target="_blank"
        rel="noreferrer"
      >
        <AnchorLabel>
          <Hovereffect>code online</Hovereffect> {">"}
        </AnchorLabel>
      </AnchorLink>
    </Wrapper>
  );
}

export default TDD;
