import styled from "styled-components/macro";

import testimonial from "../../assets/testimonial.png";

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

function Testimonial() {
  return (
    <Wrapper>
      <Image src={testimonial} alt="screenshot of testimonial project" />
      <Heading>date:</Heading>
      <Paragraph>april 2021</Paragraph>

      <Heading>stack:</Heading>
      <Paragraph>HTML, CSS, SCSS (level 1)</Paragraph>

      <Heading>description:</Heading>
      <Paragraph>
        Code to design, applying Sass and BEM principle. Position the image
        correctly.
      </Paragraph>

      <Link
        href="https://testimonial-wa.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        site online
      </Link>
      <Link
        href="https://github.com/saskiaopdam/Winc_Assignment_2A_Testimonial"
        target="_blank"
        rel="noreferrer"
      >
        code online
      </Link>
    </Wrapper>
  );
}

export default Testimonial;
