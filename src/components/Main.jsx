import styled from "styled-components/macro";

import image from "./_DSC3220_500x750.jpg";

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

const AboutMe = styled.article`
  margin-bottom: 20px;
  background: white;
  /* media queries */
  @media (min-width: 1000px) {
    display: flex;
    align-items: stretch;
  }
`;

const MyPicture = styled.figure`
  max-width: 500px;
  @media (min-width: 1000px) {
    width: 50%;
  }
`;

const MyAmbition = styled.div`
  max-width: 500px;
  @media (min-width: 1000px) {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Column = styled.div`
  padding: 20px;
  @media (min-width: 500px) {
    padding: 20px 0;
  }
  @media (min-width: 1000px) {
    padding-left: 20px;
  }
`;

const Paragraph = styled.p`
  line-height: 1.25;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
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
        <SectionHeader>Aspiring full-stack developer</SectionHeader>
        <AboutMe>
          <MyPicture>
            <Image src={image} alt="image of Saskia Opdam" />
          </MyPicture>
          <MyAmbition>
            {/* <ArticleHeader>Background</ArticleHeader> */}
            <Column>
              <Paragraph>
                While freelancing as a translator and editor I had the
                opportunity to work on my own website, and a colleagues. This
                was so inspiring that I kept thinking about it ever since.
              </Paragraph>
              <Paragraph>
                This year I decided to take the plunge and start a new
                adventure. In February I enrolled in a full-stack development
                course at Winc Academy (remote learning). So far I have gained
                knowledge and experience in HTML, CSS, SCSS, JavaScript, React,
                Redux, Jest, Git, Github and NodeJS.
              </Paragraph>
              <Paragraph>
                At present I'm busy with the final front-end assignment: a
                react-app showing ratings in a chart (student-dashboard). When
                finished, I will proceed with the back-end development course,
                which will cover Python, Flask and SQL.
              </Paragraph>
              <Paragraph>
                What I love about programming is that it allows for creativity
                and logical thinking, at the same time, both of which I love. It
                would be great to gain experience and broaden my front-end
                knowledge in a junior developer job, while in the spare time
                finishing the back-end course.
              </Paragraph>
              <Paragraph>
                So, if you are looking for an enthusiastic beginner programmer
                with a creative background (academy of arts), who loves to learn
                and would bring a problem solving attitude to your team, please
                feel free to get in touch.
              </Paragraph>
              <Paragraph>Hope to hear from you soon!</Paragraph>
            </Column>
          </MyAmbition>
        </AboutMe>
      </StyledSection>

      <StyledSection>
        <SectionHeader>Portfolio</SectionHeader>
        <List>
          <ListItem>
            <A
              href="https://unruffled-kowalevski-7b0717.netlify.app"
              target="_blank"
            >
              Student dashboard (current)
            </A>
          </ListItem>
          <ListItem>
            <A
              href="https://lucid-kowalevski-bfd17f.netlify.app"
              target="_blank"
            >
              Playlist
            </A>
          </ListItem>
          <ListItem>
            <A href="https://loving-banach-713eaf.netlify.app" target="_blank">
              To do list
            </A>
          </ListItem>
          <ListItem>
            <A
              href="https://practical-sinoussi-a17cb3.netlify.app"
              target="_blank"
            >
              Movie search
            </A>
          </ListItem>
          <ListItem>
            <A
              href="https://suspicious-johnson-c894da.netlify.app"
              target="_blank"
            >
              Colour toggle design
            </A>
          </ListItem>
          <ListItem>
            <A
              href="https://affectionate-haibt-22ebd8.netlify.app"
              target="_blank"
            >
              Colour toggle
            </A>
          </ListItem>
          <ListItem>
            <A
              href="https://pensive-ptolemy-d5c4c6.netlify.app"
              target="_blank"
            >
              Social media buttons
            </A>
          </ListItem>
          <ListItem>
            <A href="https://upbeat-goodall-bb4ec2.netlify.app" target="_blank">
              Portfolio grid
            </A>
          </ListItem>
          <ListItem>
            <A href="https://amazing-cori-c6ed26.netlify.app" target="_blank">
              Testimonial
            </A>
          </ListItem>

          <ListItem>
            <A href="https://vibrant-bohr-d9a9ff.netlify.app" target="_blank">
              First website
            </A>
          </ListItem>
        </List>
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
