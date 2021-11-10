import styled from "styled-components/macro";

import portfolio from "../../assets/portfolio.png";

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

function Portfolio() {
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

      <Link
        href="https://github.com/saskiaopdam/React_Portfolio"
        target="_blank"
        rel="noreferrer"
      >
        code online
      </Link>
    </Wrapper>
  );
}

export default Portfolio;
