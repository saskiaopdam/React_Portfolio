import styled from "styled-components/macro";

import playlist from "../../assets/playlist.png";

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

function Playlist() {
  return (
    <Wrapper>
      <Image src={playlist} alt="screenshot of playllist project" />
      <Heading>date:</Heading>
      <Paragraph>september 2021</Paragraph>

      <Heading>stack:</Heading>
      <Paragraph>react/redux</Paragraph>

      <Heading>description:</Heading>
      <Paragraph>
        Single Page application to save favorite songs with a rating, using
        Redux for state management.
      </Paragraph>

      <Link
        href="https://playlist-wa.netlify.app"
        target="_blank"
        rel="noreferrer"
      >
        site online
      </Link>
      <Link
        href="https://github.com/saskiaopdam/Winc_Assignment_7_Playlist"
        target="_blank"
        rel="noreferrer"
      >
        code online
      </Link>
    </Wrapper>
  );
}

export default Playlist;
