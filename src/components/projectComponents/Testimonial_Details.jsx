import styled from "styled-components/macro";

import testimonial from "../../assets/winc-projects/testimonial.png";

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

function Testimonial_Details() {
  return (
    <Wrapper>
      <AnchorLink
        href="https://amazing-cori-c6ed26.netlify.app"
        target="_blank"
        rel="noreferrer"
      >
        <AnchorLabel>
          <Hovereffect>site online</Hovereffect> {">"}
        </AnchorLabel>
        <Image src={testimonial} alt="screenshot of testimonial project" />
      </AnchorLink>

      <Heading>date:</Heading>
      <Paragraph>april 2021</Paragraph>

      <Heading>stack:</Heading>
      <Paragraph>HTML, CSS, SCSS (level 1)</Paragraph>

      <Heading>description:</Heading>
      <Paragraph>
        Code to design, applying Sass and BEM principle. Position the image
        correctly.
      </Paragraph>

      <AnchorLink
        href="https://github.com/saskiaopdam/Winc_Assignment_2A_Testimonial"
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

export default Testimonial_Details;
