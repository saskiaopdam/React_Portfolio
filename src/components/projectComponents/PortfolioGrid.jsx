import styled from "styled-components/macro";

import portfoliogrid from "../../assets/winc-projects/portfolio-grid.png";

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

function PortfolioGrid() {
  return (
    <Wrapper>
      <AnchorLink
        href="https://upbeat-goodall-bb4ec2.netlify.app"
        target="_blank"
        rel="noreferrer"
      >
        <AnchorLabel>
          <Hovereffect>site online</Hovereffect> {">"}
        </AnchorLabel>
        <Image src={portfoliogrid} alt="screenshot of portfoliogrid project" />
      </AnchorLink>

      <Heading>date:</Heading>
      <Paragraph>april 2021</Paragraph>

      <Heading>stack:</Heading>
      <Paragraph>HTML, CSS, SCSS (level 2)</Paragraph>

      <Heading>description:</Heading>
      <Paragraph>
        Code to design, applying Sass and BEM principle. Create hover effect on
        the image and make responsive grid.
      </Paragraph>

      <AnchorLink
        href="https://github.com/saskiaopdam/Winc_Assignment_2B_Portfolio_Grid"
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

export default PortfolioGrid;
