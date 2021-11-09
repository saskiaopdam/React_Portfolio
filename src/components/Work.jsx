import { useState } from "react";

import styled from "styled-components/macro";

// // //own-projects
// import toggle2 from "../assets/coding-projects/toggle2.png";
// import portfolio from "../assets/coding-projects/portfolio.png";

// // //winc-projects
// import toggle1 from "../assets/winc-projects/toggle1.png";
// import dashboard from "../assets/winc-projects/student-dashboard.png";
// import website from "../assets/winc-projects/website.png";
// import moviefilter from "../assets/winc-projects/movie-filter.png";
// import playlist from "../assets/winc-projects/playlist.png";
// import portfoliogrid from "../assets/winc-projects/portfolio-grid.png";
// import mediabuttons from "../assets/winc-projects/media-buttons.png";
// import tdd from "../assets/winc-projects/tdd.png";
// import testimonial from "../assets/winc-projects/testimonial.png";
// import todolist from "../assets/winc-projects/todo-list.png";

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  margin-bottom: 16px;
`;

const ProjectList = styled.div`
  background: yellow;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const Project = styled.div`
  background: violet;
`;

const ProjectName = styled.h2`
  background: pink;
  height: 100%;
`;

const ProjectDetails = styled.div`
  position: relative;
  transform: translateY(-100%);
  background: whitesmoke;
  padding: 20px 0;
  opacity: ${({
    portfolioClicked,
    toggle2Clicked,
    dashboardClicked,
    playlistClicked,
    tddClicked,
    todolistClicked,
    moviefilterClicked,
    toggle1Clicked,
    mediabuttonsClicked,
    portfoliogridClicked,
    testimonialClicked,
    websiteClicked,

    visible,
  }) =>
    portfolioClicked && visible
      ? "1"
      : toggle2Clicked && visible
      ? "1"
      : dashboardClicked && visible
      ? "1"
      : playlistClicked && visible
      ? "1"
      : tddClicked && visible
      ? "1"
      : todolistClicked && visible
      ? "1"
      : moviefilterClicked && visible
      ? "1"
      : toggle1Clicked && visible
      ? "1"
      : mediabuttonsClicked && visible
      ? "1"
      : portfoliogridClicked && visible
      ? "1"
      : testimonialClicked && visible
      ? "1"
      : websiteClicked && visible
      ? "1"
      : "0"};
  transition: opacity 250ms linear;
`;

const Heading = styled.p`
  font-weight: bold;
`;

const Paragraph = styled.p`
  width: 100%;
  max-width: 460px;
  margin-bottom: 16px;
`;

const Links = styled.div`
  display: flex;
`;

const AnchorLink = styled.a`
  text-decoration: none;
  color: royalblue;
  & + & {
    margin-left: 32px;
  }
`;

const Hovereffect = styled.span`
  &:hover {
    text-decoration: underline;
  }
`;

function Work() {
  const [visible, setVisible] = useState(false);
  const [clickedProject, setClickedProject] = useState("");

  const handleClick = (event) => {
    setClickedProject(event.target.id);
    setVisible(!visible);
  };

  const portfolioClicked = clickedProject === "portfolio";
  const toggle2Clicked = clickedProject === "toggle2";

  const dashboardClicked = clickedProject === "dashboard";
  const playlistClicked = clickedProject === "playlist";
  const tddClicked = clickedProject === "tdd";
  const todolistClicked = clickedProject === "todolist";
  const moviefilterClicked = clickedProject === "moviefilter";
  const toggle1Clicked = clickedProject === "toggle1";
  const mediabuttonsClicked = clickedProject === "mediabuttons";
  const portfoliogridClicked = clickedProject === "portfoliogrid";
  const testimonialClicked = clickedProject === "testimonial";
  const websiteClicked = clickedProject === "website";

  return (
    <Wrapper>
      <Title>Work</Title>
      <ProjectList>
        <Project>
          <ProjectName id="portfolio" onClick={handleClick}>
            portfolio
          </ProjectName>
          <ProjectDetails visible={visible} portfolioClicked={portfolioClicked}>
            <Heading>date:</Heading>
            <Paragraph>november 2021</Paragraph>

            <Heading>stack:</Heading>
            <Paragraph>react</Paragraph>

            <Heading>description:</Heading>
            <Paragraph>
              Single Page portfolio app to demonstrate acquired skills and show
              projects.
            </Paragraph>

            <Links>
              <AnchorLink
                href="https://github.com/saskiaopdam/React_Portfolio"
                target="_blank"
                rel="noreferrer"
              >
                <Hovereffect>code online</Hovereffect> {">"}
              </AnchorLink>
            </Links>
          </ProjectDetails>
        </Project>

        <Project>
          <ProjectName id="toggle2" onClick={handleClick}>
            toggle2
          </ProjectName>
          <ProjectDetails visible={visible} toggle2Clicked={toggle2Clicked}>
            <Heading>date:</Heading>
            <Paragraph>june 2021</Paragraph>

            <Heading>stack:</Heading>
            <Paragraph>HTML, CSS, JavaScript</Paragraph>

            <Heading>description:</Heading>
            <Paragraph>
              A new and colourful version of the Winc Academy colour toggle
              project.
            </Paragraph>

            <Links>
              <AnchorLink
                href="https://toggle2.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <Hovereffect>site online</Hovereffect> {">"}
              </AnchorLink>

              <AnchorLink
                href="https://github.com/saskiaopdam/Colour_Toggle_Design"
                target="_blank"
                rel="noreferrer"
              >
                <Hovereffect>code online</Hovereffect> {">"}
              </AnchorLink>
            </Links>
          </ProjectDetails>
        </Project>

        <Project>
          <ProjectName id="dashboard" onClick={handleClick}>
            dashboard
          </ProjectName>
          <ProjectDetails visible={visible} dashboardClicked={dashboardClicked}>
            <Heading>date:</Heading>
            <Paragraph>just started (final front-end assignment)</Paragraph>

            <Heading>stack:</Heading>
            <Paragraph>react</Paragraph>

            <Heading>description:</Heading>
            <Paragraph>
              Present data from a Google Sheet in a chart using a JavaScript
              framework such as React.
            </Paragraph>

            <Links>
              <AnchorLink
                href="https://dashboard-wa.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <Hovereffect>site online</Hovereffect> {">"}
              </AnchorLink>

              <AnchorLink
                href="https://github.com/saskiaopdam/Winc_Assignment_8_Student_Dashboard"
                target="_blank"
                rel="noreferrer"
              >
                <Hovereffect>code online</Hovereffect> {">"}
              </AnchorLink>
            </Links>
          </ProjectDetails>
        </Project>

        <Project>
          <ProjectName id="playlist" onClick={handleClick}>
            playlist
          </ProjectName>
          <ProjectDetails visible={visible} playlistClicked={playlistClicked}>
            <Heading>date:</Heading>
            <Paragraph>september 2021</Paragraph>

            <Heading>stack:</Heading>
            <Paragraph>react/redux</Paragraph>

            <Heading>description:</Heading>
            <Paragraph>
              Single Page application to save favorite songs with a rating,
              using Redux for state management.
            </Paragraph>

            <Links>
              <AnchorLink
                href="https://playlist-wa.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <Hovereffect>site online</Hovereffect> {">"}
              </AnchorLink>

              <AnchorLink
                href="https://github.com/saskiaopdam/Winc_Assignment_7_Playlist"
                target="_blank"
                rel="noreferrer"
              >
                <Hovereffect>code online</Hovereffect> {">"}
              </AnchorLink>
            </Links>
          </ProjectDetails>
        </Project>

        <Project>
          <ProjectName id="tdd" onClick={handleClick}>
            TDD
          </ProjectName>
          <ProjectDetails visible={visible} tddClicked={tddClicked}>
            <Heading>date:</Heading>
            <Paragraph>august 2021</Paragraph>

            <Heading>stack:</Heading>
            <Paragraph>TDD testing</Paragraph>

            <Heading>description:</Heading>
            <Paragraph>
              Writing tests to check if functions perform as expected, taking
              into account multiple environment factors.
            </Paragraph>

            <Links>
              <AnchorLink
                href="https://github.com/saskiaopdam/Winc_Assignment_6_TDD_testing"
                target="_blank"
                rel="noreferrer"
              >
                <Hovereffect>code online</Hovereffect> {">"}
              </AnchorLink>
            </Links>
          </ProjectDetails>
        </Project>

        <Project>
          <ProjectName id="todolist" onClick={handleClick}>
            Todo-list
          </ProjectName>
          <ProjectDetails visible={visible} todolistClicked={todolistClicked}>
            <Heading>date:</Heading>
            <Paragraph>august 2021</Paragraph>

            <Heading>stack:</Heading>
            <Paragraph>HTML, CSS, JavaScript</Paragraph>

            <Heading>description:</Heading>
            <Paragraph>
              Fetching data from an API, gaining understanding of asynchronous
              javascript. Implementing error handling.
            </Paragraph>

            <Links>
              <AnchorLink
                href="https://todolist-wa.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <Hovereffect>site online</Hovereffect> {">"}
              </AnchorLink>

              <AnchorLink
                href="https://github.com/saskiaopdam/Winc_Assignment_5_To_Do_List"
                target="_blank"
                rel="noreferrer"
              >
                <Hovereffect>code online</Hovereffect> {">"}
              </AnchorLink>
            </Links>
          </ProjectDetails>
          {/* ) : null} */}
        </Project>

        <Project>
          <ProjectName id="moviefilter" onClick={handleClick}>
            Moviefilter
          </ProjectName>
          <ProjectDetails
            visible={visible}
            moviefilterClicked={moviefilterClicked}
          >
            <Heading>date:</Heading>
            <Paragraph>june 2021</Paragraph>

            <Heading>stack:</Heading>
            <Paragraph>HTML, CSS, JavaScript</Paragraph>

            <Heading>description:</Heading>
            <Paragraph>
              Apply array methods like .filter() and display data by adding
              elements to the DOM.
            </Paragraph>

            <Links>
              <AnchorLink
                href="https://moviefilter-wa.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <Hovereffect>site online</Hovereffect> {">"}
              </AnchorLink>

              <AnchorLink
                href="https://github.com/saskiaopdam/Winc_Assignment_4_Movie_Filter"
                target="_blank"
                rel="noreferrer"
              >
                <Hovereffect>code online</Hovereffect> {">"}
              </AnchorLink>
            </Links>
          </ProjectDetails>
        </Project>

        <Project>
          <ProjectName id="toggle1" onClick={handleClick}>
            Toggle1
          </ProjectName>
          <ProjectDetails visible={visible} toggle1Clicked={toggle1Clicked}>
            <Heading>date:</Heading>
            <Paragraph>april 2021</Paragraph>

            <Heading>stack:</Heading>
            <Paragraph>HTML, CSS, JavaScript</Paragraph>

            <Heading>description:</Heading>
            <Paragraph>
              Add interactivity to a website by adding eventlisteners, making
              the backgroundcolor change.
            </Paragraph>

            <Links>
              <AnchorLink
                href="https://toggle1-wa.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <Hovereffect>site online</Hovereffect> {">"}
              </AnchorLink>

              <AnchorLink
                href="https://github.com/saskiaopdam/Winc_Assignment_3_Colour_Toggle"
                target="_blank"
                rel="noreferrer"
              >
                <Hovereffect>code online</Hovereffect> {">"}
              </AnchorLink>
            </Links>
          </ProjectDetails>
        </Project>

        <Project>
          <ProjectName id="mediabuttons" onClick={handleClick}>
            Mediabuttons
          </ProjectName>
          <ProjectDetails
            visible={visible}
            mediabuttonsClicked={mediabuttonsClicked}
          >
            <Heading>date:</Heading>
            <Paragraph>april 2021</Paragraph>

            <Heading>stack:</Heading>
            <Paragraph>HTML, CSS, SCSS (level 3)</Paragraph>

            <Heading>description:</Heading>
            <Paragraph>
              Code to design, applying Sass and BEM principle. Create transition
              on hover and add icons.
            </Paragraph>

            <Links>
              <AnchorLink
                href="https://mediabuttons-wa.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <Hovereffect>site online</Hovereffect> {">"}
              </AnchorLink>

              <AnchorLink
                href="https://github.com/saskiaopdam/Winc_Assignment_2C_Social_Media_Buttons"
                target="_blank"
                rel="noreferrer"
              >
                <Hovereffect>code online</Hovereffect> {">"}
              </AnchorLink>
            </Links>
          </ProjectDetails>
        </Project>

        <Project>
          <ProjectName id="portfoliogrid" onClick={handleClick}>
            Portfoliogrid
          </ProjectName>
          <ProjectDetails
            visible={visible}
            portfoliogridClicked={portfoliogridClicked}
          >
            <Heading>date:</Heading>
            <Paragraph>april 2021</Paragraph>

            <Heading>stack:</Heading>
            <Paragraph>HTML, CSS, SCSS (level 2)</Paragraph>

            <Heading>description:</Heading>
            <Paragraph>
              Code to design, applying Sass and BEM principle. Create hover
              effect on the image and make responsive grid.
            </Paragraph>

            <Links>
              <AnchorLink
                href="https://portfoliogrid-wa.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <Hovereffect>site online</Hovereffect> {">"}
              </AnchorLink>

              <AnchorLink
                href="https://github.com/saskiaopdam/Winc_Assignment_2B_Portfolio_Grid"
                target="_blank"
                rel="noreferrer"
              >
                <Hovereffect>code online</Hovereffect> {">"}
              </AnchorLink>
            </Links>
          </ProjectDetails>
        </Project>

        <Project>
          <ProjectName id="testimonial" onClick={handleClick}>
            Testimonial
          </ProjectName>
          <ProjectDetails
            visible={visible}
            testimonialClicked={testimonialClicked}
          >
            <Heading>date:</Heading>
            <Paragraph>april 2021</Paragraph>

            <Heading>stack:</Heading>
            <Paragraph>HTML, CSS, SCSS (level 1)</Paragraph>

            <Heading>description:</Heading>
            <Paragraph>
              Code to design, applying Sass and BEM principle. Position the
              image correctly.
            </Paragraph>

            <Links>
              <AnchorLink
                href="https://testimonial-wa.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <Hovereffect>site online</Hovereffect> {">"}
              </AnchorLink>

              <AnchorLink
                href="https://github.com/saskiaopdam/Winc_Assignment_2A_Testimonial"
                target="_blank"
                rel="noreferrer"
              >
                <Hovereffect>code online</Hovereffect> {">"}
              </AnchorLink>
            </Links>
          </ProjectDetails>
        </Project>

        <Project>
          <ProjectName id="website" onClick={handleClick}>
            Website
          </ProjectName>
          <ProjectDetails visible={visible} websiteClicked={websiteClicked}>
            <Heading>date:</Heading>
            <Paragraph>april 2021</Paragraph>

            <Heading>stack:</Heading>
            <Paragraph>HTML, CSS</Paragraph>

            <Heading>description:</Heading>
            <Paragraph>
              Make a website using a mobile-first approach and use flexbox or
              grid for positioning.
            </Paragraph>

            <Links>
              <AnchorLink
                href="https://website-wa.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <Hovereffect>site online</Hovereffect> {">"}
              </AnchorLink>

              <AnchorLink
                href="https://github.com/saskiaopdam/Winc_Assignment_1_Website"
                target="_blank"
                rel="noreferrer"
              >
                <Hovereffect>code online</Hovereffect> {">"}
              </AnchorLink>
            </Links>
          </ProjectDetails>
        </Project>
      </ProjectList>
    </Wrapper>
  );
}

export default Work;
