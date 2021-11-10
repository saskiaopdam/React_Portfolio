import styled from "styled-components/macro";

import website from "../../assets/website.png";

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

function Website() {
  return (
    <Wrapper>
      <Image src={website} alt="screenshot of website project" />
      <Heading>date:</Heading>
      <Paragraph>april 2021</Paragraph>

      <Heading>stack:</Heading>
      <Paragraph>HTML, CSS</Paragraph>

      <Heading>description:</Heading>
      <Paragraph>
        Make a website using a mobile-first approach and use flexbox or grid for
        positioning.
      </Paragraph>

      <Link
        href="https://website-wa.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        site online
      </Link>
      <Link
        href="https://github.com/saskiaopdam/Winc_Assignment_1_Website"
        target="_blank"
        rel="noreferrer"
      >
        code online
      </Link>
    </Wrapper>
  );
}

export default Website;
