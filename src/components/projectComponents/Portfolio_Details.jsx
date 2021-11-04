import styled from "styled-components/macro";

import portfolio from "../../assets/coding-projects/portfolio.png";

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

function Portfolio_Details() {
  return (
    <Wrapper>
      <Image src={portfolio} alt="screenshot of portfolio project" />

      <Heading>date:</Heading>
      <Paragraph>november 2021</Paragraph>

      <Heading>stack:</Heading>
      <Paragraph>react</Paragraph>

      <Heading>description:</Heading>
      <Paragraph>
        Single Page portfolio app to demonstrate acquired skills and show
        projects.
      </Paragraph>

      <AnchorLink
        href="https://github.com/saskiaopdam/React_Portfolio"
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

export default Portfolio_Details;
