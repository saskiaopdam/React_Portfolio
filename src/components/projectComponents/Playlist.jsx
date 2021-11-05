import styled from "styled-components/macro";

import playlist from "../../assets/winc-projects/playlist.png";

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

function Playlist() {
  return (
    <Wrapper>
      <AnchorLink
        href="https://lucid-kowalevski-bfd17f.netlify.app"
        target="_blank"
        rel="noreferrer"
      >
        <AnchorLabel>
          <Hovereffect>site online</Hovereffect> {">"}
        </AnchorLabel>
        <Image src={playlist} alt="screenshot of playlist project" />
      </AnchorLink>

      <Heading>date:</Heading>
      <Paragraph>september 2021</Paragraph>

      <Heading>stack:</Heading>
      <Paragraph>react/redux</Paragraph>

      <Heading>description:</Heading>
      <Paragraph>
        Single Page application to save favorite songs with a rating, using
        Redux for state management.
      </Paragraph>

      <AnchorLink
        href="https://github.com/saskiaopdam/Winc_Assignment_7_Playlist"
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

export default Playlist;
