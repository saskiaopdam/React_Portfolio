import styled from "styled-components/macro";

import mediabuttons from "../../assets/mediabuttons.png";

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

function Mediabuttons() {
  return (
    <Wrapper>
      <Image src={mediabuttons} alt="screenshot of mediabuttons project" />
      <Heading>date:</Heading>
      <Paragraph>april 2021</Paragraph>

      <Heading>stack:</Heading>
      <Paragraph>HTML, CSS, SCSS (level 3)</Paragraph>

      <Heading>description:</Heading>
      <Paragraph>
        Code to design, applying Sass and BEM principle. Create transition on
        hover and add icons.
      </Paragraph>

      <Link
        href="https://mediabuttons-wa.netlify.app"
        target="_blank"
        rel="noreferrer"
      >
        site online
      </Link>
      <Link
        href="https://github.com/saskiaopdam/Winc_Assignment_2C_Social_Media_Buttons"
        target="_blank"
        rel="noreferrer"
      >
        code online
      </Link>
    </Wrapper>
  );
}

export default Mediabuttons;
