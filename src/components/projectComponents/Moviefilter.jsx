import styled from "styled-components/macro";

import moviefilter from "../../assets/moviefilter.png";

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

function Moviefilter() {
  return (
    <Wrapper>
      <Image src={moviefilter} alt="screenshot of moviefilter project" />
      <Heading>date:</Heading>
      <Paragraph>june 2021</Paragraph>

      <Heading>stack:</Heading>
      <Paragraph>HTML, CSS, JavaScript</Paragraph>

      <Heading>description:</Heading>
      <Paragraph>
        Apply array methods like .filter() and display data by adding elements
        to the DOM.
      </Paragraph>

      <Link
        href="https://moviefilter-wa.netlify.app"
        target="_blank"
        rel="noreferrer"
      >
        site online
      </Link>
      <Link
        href="https://github.com/saskiaopdam/Winc_Assignment_4_Movie_Filter"
        target="_blank"
        rel="noreferrer"
      >
        code online
      </Link>
    </Wrapper>
  );
}

export default Moviefilter;
