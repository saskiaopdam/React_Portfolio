import styled from "styled-components/macro";

import dashboard from "../../assets/winc-projects/student-dashboard.png";

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
`;

const Heading = styled.p`
  font-weight: bold;
`;

const Paragraph = styled.p`
  margin-bottom: 16px;
`;

function Dashboard_Details() {
  return (
    <Wrapper>
      <AnchorLink
        href="https://unruffled-kowalevski-7b0717.netlify.app"
        target="_blank"
        rel="noreferrer"
      >
        <AnchorLabel>
          <Hovereffect>site online</Hovereffect> {">"}
        </AnchorLabel>
        <Image src={dashboard} alt="screenshot of dashboard project" />
      </AnchorLink>

      <Heading>date:</Heading>
      <Paragraph>just started (final front-end assignment)</Paragraph>

      <Heading>stack:</Heading>
      <Paragraph>react</Paragraph>

      <Heading>description:</Heading>
      <Paragraph>
        Present data from a Google Sheet in a chart using a JavaScript framework
        such as React.
      </Paragraph>

      <AnchorLink
        href="https://github.com/saskiaopdam/Winc_Assignment_8_Student_Dashboard"
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

export default Dashboard_Details;
