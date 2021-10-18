import styled from "styled-components/macro";

import photo from "./_DSC3220_500x750.jpg";
import Projects from "./Projects";

const Wrapper = styled.main`
  flex-grow: 1;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #eee;
`;

const SectionHeader = styled.h2`
  text-align: center;
  margin: 30px;
  color: cadetblue;
`;

const Photo = styled.img`
  width: 50%;
  max-width: 350px;
`;

const Info = styled.h3`
  text-align: center;
  font-size: 18px;
  line-height: 1.5;
  margin: 30px;
  opacity: 0.5;
`;

const List = styled.ul`
  list-style-type: none;
  margin-bottom: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 20px;
  text-align: center;
`;

const A = styled.a`
  color: black;
  text-decoration: none;
`;

function Main() {
  return (
    <Wrapper>
      <StyledSection>
        <SectionHeader>Intro</SectionHeader>
        <Photo src={photo} alt="portrait photo of Saskia Opdam" />
        <Info>Full-stack development student at Winc Academy</Info>
      </StyledSection>

      <StyledSection>
        <SectionHeader>Projects</SectionHeader>
        <Projects />
      </StyledSection>

      <StyledSection>
        <SectionHeader>Contact</SectionHeader>
        <List>
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
        </List>
      </StyledSection>
    </Wrapper>
  );
}

export default Main;
