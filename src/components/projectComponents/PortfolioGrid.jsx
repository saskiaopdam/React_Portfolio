import styled from "styled-components/macro";

import portfoliogrid from "../../assets/portfoliogrid.png";

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

function PortfolioGrid() {
  return (
    <Wrapper>
      <Image src={portfoliogrid} alt="screenshot of portfoliogrid project" />
      <Heading>date:</Heading>
      <Paragraph>april 2021</Paragraph>

      <Heading>stack:</Heading>
      <Paragraph>HTML, CSS, SCSS (level 2)</Paragraph>

      <Heading>description:</Heading>
      <Paragraph>
        Code to design, applying Sass and BEM principle. Create hover effect on
        the image and make responsive grid.
      </Paragraph>

      <Link
        href="https://portfoliogrid-wa.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        site online
      </Link>
      <Link
        href="https://github.com/saskiaopdam/Winc_Assignment_2B_Portfolio_Grid"
        target="_blank"
        rel="noreferrer"
      >
        code online
      </Link>
    </Wrapper>
  );
}

export default PortfolioGrid;
