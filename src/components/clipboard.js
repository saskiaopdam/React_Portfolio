{


// const StyledSection = styled.section`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   border-bottom: 1px solid #eee;
// `;

// const SectionHeader = styled.h2`
//   text-align: center;
//   margin: 30px;
//   color: cadetblue;
// `;

// const Photo = styled.img`
//   width: 50%;
//   max-width: 350px;
// `;

// const Info = styled.h3`
//   text-align: center;
//   font-size: 18px;
//   line-height: 1.5;
//   margin: 30px;
//   opacity: 0.5;
// `;

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
