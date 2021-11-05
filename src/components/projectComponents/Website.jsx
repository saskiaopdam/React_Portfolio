import styled from "styled-components/macro";

import website from "../../assets/winc-projects/website.png";

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

function Website() {
  return (
    <Wrapper>
      <AnchorLink
        href="https://vibrant-bohr-d9a9ff.netlify.app"
        target="_blank"
        rel="noreferrer"
      >
        <AnchorLabel>
          <Hovereffect>site online</Hovereffect> {">"}
        </AnchorLabel>
        <Image src={website} alt="screenshot of website project" />
      </AnchorLink>

      <Heading>date:</Heading>
      <Paragraph>april 2021</Paragraph>

      <Heading>stack:</Heading>
      <Paragraph>HTML, CSS</Paragraph>

      <Heading>description:</Heading>
      <Paragraph>
        Make a website using a mobile-first approach and use flexbox or grid for
        positioning.
      </Paragraph>

      <AnchorLink
        href="https://github.com/saskiaopdam/Winc_Assignment_1_Website"
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

export default Website;
