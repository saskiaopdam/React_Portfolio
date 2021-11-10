import styled from "styled-components/macro";

import todolist from "../../assets/todolist.png";

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

function Todolist() {
  return (
    <Wrapper>
      <Image src={todolist} alt="screenshot of todo-list project" />
      <Heading>date:</Heading>
      <Paragraph>august 2021</Paragraph>

      <Heading>stack:</Heading>
      <Paragraph>HTML, CSS, JavaScript</Paragraph>

      <Heading>description:</Heading>
      <Paragraph>
        Fetching data from an API, gaining understanding of asynchronous
        javascript. Implementing error handling.
      </Paragraph>

      <Link
        href="https://todolist-wa.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        site online
      </Link>
      <Link
        href="https://github.com/saskiaopdam/Winc_Academy_5_To_Do_List"
        target="_blank"
        rel="noreferrer"
      >
        code online
      </Link>
    </Wrapper>
  );
}

export default Todolist;
