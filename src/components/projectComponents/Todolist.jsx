import styled from "styled-components/macro";

import todolist from "../../assets/winc-projects/todo-list.png";

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

function Todolist() {
  return (
    <Wrapper>
      <AnchorLink
        href="https://objective-banach-2a5a85.netlify.app"
        target="_blank"
        rel="noreferrer"
      >
        <AnchorLabel>
          <Hovereffect>site online</Hovereffect> {">"}
        </AnchorLabel>
        <Image src={todolist} alt="screenshot of todolist project" />
      </AnchorLink>

      <Heading>date:</Heading>
      <Paragraph>august 2021</Paragraph>

      <Heading>stack:</Heading>
      <Paragraph>HTML, CSS, JavaScript</Paragraph>

      <Heading>description:</Heading>
      <Paragraph>
        Fetching data from an API, gaining understanding of asynchronous
        javascript. Implementing error handling.
      </Paragraph>

      <AnchorLink
        href="https://github.com/saskiaopdam/Winc_Academy_5_To_Do_List"
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

export default Todolist;