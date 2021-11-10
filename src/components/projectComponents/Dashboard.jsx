import styled from "styled-components/macro";

import dashboard from "../../assets/dashboard.png";

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
function Dashboard() {
  return (
    <Wrapper>
      <Image src={dashboard} alt="screenshot of dashboard project" />
      <Heading>date:</Heading>
      <Paragraph>just started (final front-end assignment)</Paragraph>

      <Heading>stack:</Heading>
      <Paragraph>react</Paragraph>

      <Heading>description:</Heading>
      <Paragraph>
        Present data from a Google Sheet in a chart using a JavaScript framework
        such as React.
      </Paragraph>

      <Link
        href="https://dashboard-wa.netlify.app"
        target="_blank"
        rel="noreferrer"
      >
        site online
      </Link>
      <Link
        href="https://github.com/saskiaopdam/Winc_Assignment_8_Student_Dashboard"
        target="_blank"
        rel="noreferrer"
      >
        code online
      </Link>
    </Wrapper>
  );
}

export default Dashboard;
