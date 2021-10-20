{
  /* <StyledSection>
        <SectionHeader>Junior Front-end Developer</SectionHeader>
        <AboutMe>
          <MyPicture>
            <Image src={image} alt="image of Saskia Opdam" />
          </MyPicture>
          <MyInfo>
            {/* <ArticleHeader>Background</ArticleHeader> */
}
{
  /* <Column>
              <Paragraph>
                I'm A full-stack development student at Winc Academy.
                <br /> My current project is the student dashboard (react app).
                <br /> This is the final front-end development assignment.
              </Paragraph> */
}
{
  /* <Paragraph>
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
              <Paragraph>Hope to hear from you soon!</Paragraph> */
}
{
  /* </Column>
          </MyInfo>
        </AboutMe>
      </StyledSection> */
}

import photo from "./_DSC3220_500x750.jpg";
import colourToggle from "../assets/colourToggle.png";
import colourToggleDesign from "../assets/colourToggleDesign.png";
import firstWebsite from "../assets/firstWebsite.png";
import movieFilter from "../assets/movieFilter.png";
import playlist from "../assets/playlist.png";
import portfolioGrid from "../assets/portfolioGrid.png";
import socialMediaButtons from "../assets/socialMediaButtons.png";
import studentDashboard from "../assets/studentDashboard.png";
import testimonial from "../assets/testimonial.png";
import todoList from "../assets/todoList.png";

<Project>
  <Figure>
    <Screenshot
      id="playlist"
      src={playlist}
      alt="screenshot of playlist project"
      onClick={handleClick}
    />
    <Caption>
      <span>Playlist</span>
      <span>Month 2021</span>
    </Caption>
  </Figure>
  {dashboardClicked & toggleOn ? (
    <Details>
      <div>
        <CloseButton onClick={activeToggle}>Hide details</CloseButton>
        <p>info about {clickedScreenshot}</p>
      </div>
    </Details>
  ) : null}
  <LinkToSite
    href="https://unruffled-kowalevski-7b0717.netlify.app"
    target="_blank"
    rel="noreferrer"
  >
    Dashboard
  </LinkToSite>
</Project>;

const colourToggleClicked = clickedScreenshot === "colourToggle";
const colourToggleDesignClicked = clickedScreenshot === "colourToggleDesign";
const dashboardClicked = clickedScreenshot === "dashboard";
const firstWebsiteClicked = clickedScreenshot === "firstWebsite";
const movieFilterClicked = clickedScreenshot === "movieFilter";
const playlistClicked = clickedScreenshot === "playlist";
const portfolioClicked = clickedScreenshot === "portfolio";
const portfolioGridClicked = clickedScreenshot === "portfolioGrid";
const socialMediaButtonsClicked = clickedScreenshot === "socialMediaButtons";
const testimonialClicked = clickedScreenshot === "testimonial";
const todolistClicked = clickedScreenshot === "todolist";

{
  /* <StyledSection>
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
      </StyledSection> */
}
