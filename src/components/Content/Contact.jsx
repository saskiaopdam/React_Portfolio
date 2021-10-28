import styled from "styled-components/macro";

const Wrapper = styled.section`
  flex-grow: 1;
  width: 100%;
  padding: 20px;
`;

const SectionHeader = styled.h3`
  font-size: 20px;
  font-weight: 400;
  color: white;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  font-size: 15px;
  line-height: 1.5;
  & + & {
    margin-top: 20px;
  }
`;

const NavbarSpace = styled.div`
  height: 158px;
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
      <NavbarSpace>{""}</NavbarSpace>
      <SectionHeader>Contact</SectionHeader>
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
        </ListItem>
      </List> */}
      <Paragraph>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
        harum, eveniet totam possimus sunt doloremque debitis, minus tenetur
        quia earum, excepturi inventore nulla omnis sed facere soluta animi.
        Exercitationem, ipsam?
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
        harum, eveniet totam possimus sunt doloremque debitis, minus tenetur
        quia earum, excepturi inventore nulla omnis sed facere soluta animi.
        Exercitationem, ipsam?
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
        harum, eveniet totam possimus sunt doloremque debitis, minus tenetur
        quia earum, excepturi inventore nulla omnis sed facere soluta animi.
        Exercitationem, ipsam?
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
        harum, eveniet totam possimus sunt doloremque debitis, minus tenetur
        quia earum, excepturi inventore nulla omnis sed facere soluta animi.
        Exercitationem, ipsam?
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
        harum, eveniet totam possimus sunt doloremque debitis, minus tenetur
        quia earum, excepturi inventore nulla omnis sed facere soluta animi.
        Exercitationem, ipsam?
      </Paragraph>
    </Wrapper>
  );
}

export default Contact;
