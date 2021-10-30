import styled from "styled-components/macro";

const Wrapper = styled.section`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: blue;
`;

const SectionHeader = styled.h3`
  font-size: 24px;
  font-weight: 400;
  color: white;
`;

// const List = styled.ul`
//   list-style-type: none;
//   margin-bottom: 20px;
// `;

// const ListItem = styled.MenuItem`
//   margin-bottom: 20px;
//   text-align: center;
// `;

// const A = styled.a`
//   color: black;
//   text-decoration: none;
// `;

function Contact() {
  return (
    <Wrapper>
      <SectionHeader>C O N T A C T</SectionHeader>
      {/* <List>
        <ListItem>
          <A href="mailto:opdamsaskia@icloud.com">opdamsaskia@icloud.com</A>
        </ListItem>

        <ListItem>
          <A href="https://www.linkedin.com/in/saskiaopdam/" target="_blank">
            LinkedIn
          </A>
        </ListItem>

        <ListItem>
          <A href="https://github.com/saskiaopdam/" target="_blank">
            GitHub
          </A>
        </ListItem> */}
      {/* </List> */}
    </Wrapper>
  );
}

export default Contact;
