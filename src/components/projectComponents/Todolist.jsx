import styled from "styled-components/macro";

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Links = styled.div`
  display: flex;
`;

const AnchorLink = styled.a`
  text-decoration: none;
  padding: 8px 0 16px 0;
  & + & {
    margin-left: 32px;
  }
`;

const AnchorLabel = styled.p`
  color: royalblue;
`;

const Hovereffect = styled.span`
  &:hover {
    text-decoration: underline;
  }
`;

const Iframe = styled.iframe`
  width: 100%;
  max-width: 460px;
  border: none;
  margin-bottom: 16px;
`;

const Heading = styled.p`
  font-weight: bold;
`;

const Paragraph = styled.p`
  width: 100%;
  max-width: 460px;
  margin-bottom: 16px;
`;

function Todolist() {
  return (
    <Wrapper>
      <Links>
        <AnchorLink
          href="https://objective-banach-2a5a85.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <AnchorLabel>
            <Hovereffect>site online</Hovereffect> {">"}
          </AnchorLabel>
        </AnchorLink>

        <AnchorLink
          href="https://github.com/saskiaopdam/Winc_Academy_5_To_Do_List"
          target="_blank"
          rel="noreferrer"
        >
          <AnchorLabel>
            <Hovereffect>code online</Hovereffect> {">"}
          </AnchorLabel>
        </AnchorLink>
      </Links>

      <Iframe
        width="600"
        height="400"
        src="https://objective-banach-2a5a85.netlify.app"
      ></Iframe>

      <Heading>date:</Heading>
      <Paragraph>august 2021</Paragraph>

      <Heading>stack:</Heading>
      <Paragraph>HTML, CSS, JavaScript</Paragraph>

      <Heading>description:</Heading>
      <Paragraph>
        Fetching data from an API, gaining understanding of asynchronous
        javascript. Implementing error handling.
      </Paragraph>
    </Wrapper>
  );
}

export default Todolist;
