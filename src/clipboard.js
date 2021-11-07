const Links = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    align-self: center;
  }
`;

const StyledLink = styled(Link)`
  margin-bottom: 8px;
  color: black;
  text-decoration: none;
  @media (min-width: 768px) {
    margin-bottom: 0;
    & + & {
      margin-left: 32px;
    }
  }
`;

const Hovereffect = styled.span`
  &:hover {
    font-weight: bold;
  }
`;

const Social = styled.div`
  padding: 12px 0;
  background: white;
  display: flex;
  flex-direction: column;
  @media (min-width: 500px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const IconAnchorLink = styled.a`
  text-decoration: none;
  background: white;
  color: black;
  display: flex;
  align-items: center;
  // flex-direction: column;
  font-size: 24px;
  & + & {
    margin-top: 24px;
  }
  @media (min-width: 500px) {
    margin-bottom: 0;
    & + & {
      margin-top: 0;
      margin-left: 36px;
    }
  }
`;

const Icon = styled.div`
  height: 24px;
  color: royalblue;
`;

const IconAnchorLabel = styled.p`
  font-size: 14px;
  margin-left: 4px;
`;

const ImageAnchorLabel = styled.p`
  color: royalblue;
  margin-bottom: 16px;
  @media (min-width: 500px) {
    text-align: center;
  }
`;

const Hovereffect = styled.span`
  &:hover {
    font-weight: bold;
  }
`;

const ImageAnchorLink = styled.a`
  text-decoration: none;
  background: white;
  color: black;
  // padding-top: 16px;
  margin-bottom: 32px;
  @media (min-width: 500px) {
    text-align: center;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 480px;
  display: block;
  margin: 16px 0;
  @media (min-width: 768px) {
    margin: 16px auto;
  }
`;

<ImageAnchorLink
  href="https://www.behance.net/opdamsaski0505"
  target="_blank"
  rel="noreferrer"
>
  <ImageAnchorLabel>
    <Hovereffect>overview</Hovereffect> {">"}
  </ImageAnchorLabel>
  <Image src={lemons} alt="screenshot of lemons project" />
</ImageAnchorLink>;
