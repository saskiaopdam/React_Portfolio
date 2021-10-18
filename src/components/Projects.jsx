import { useState, useCallback } from "react";
import styled from "styled-components/macro";

import colourToggle from "../assets/colourToggle.png";
import colourToggleDesign from "../assets/colourToggleDesign.png";
import dashboard from "../assets/dashboard.png";
import firstWebsite from "../assets/firstWebsite.png";
import movieFilter from "../assets/movieFilter.png";
import playlist from "../assets/playlist.png";
import portfolio from "../assets/portfolio.png";
import portfolioGrid from "../assets/portfolioGrid.png";
import socialMediaButtons from "../assets/socialMediaButtons.png";
import testimonial from "../assets/testimonial.png";
import todolist from "../assets/todolist.png";

const ProjectList = styled.ul`
  list-style-type: none;
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const Project = styled.li`
  background: white;
`;

const Figure = styled.figure`
  background: white;
`;

const Screenshot = styled.img`
  width: 100%;
  max-width: 600px;
`;

const Caption = styled.figcaption`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const ProjectName = styled.p`
  font-weight: bold;
  font-size: 18px;
`;

const ProjectDate = styled.p`
  font-size: 18px;
`;

const Details = styled.div`
  padding: 0 20px 20px 20px;
  max-width: 600px;
`;

const Close = styled.button`
  display: block;
  border: none;
  background-color: transparent;
  text-align: right;
  width: 100%;
  margin-bottom: 10px;
  font-size: 16px;
`;

// const OpenButton = styled.button`
//   display: block;
//   border: none;
//   background-color: transparent;
//   text-align: right;
//   text-decoration: none;
//   float: right;
// `;

const Stack = styled.p`
  margin-bottom: 10px;
`;

const Summary = styled.p`
  font-style: italic;
  margin-bottom: 5px;
`;

const Info = styled.p`
  margin-bottom: 10px;
`;

const LinkToSite = styled.a`
  color: black;
  display: block;
`;

const Website = styled.a`
  color: black;
  display: block;
  margin-bottom: 3px;
`;

const Code = styled.a`
  color: black;
  display: block;
  margin-bottom: 5px;
`;

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => {
    setValue((v) => !v);
  }, []);
  return [value, toggle];
}

function Projects() {
  const [toggleOn, activeToggle] = useToggle();
  const [clickedScreenshot, setClickedScreenshot] = useState("");

  const handleClick = (event) => {
    setClickedScreenshot(event.target.id);
    activeToggle();
  };

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

  return (
    <ProjectList>
      <Project>
        <Figure>
          <Screenshot
            id="dashboard"
            src={dashboard}
            alt="screenshot of dashboard project"
            onClick={handleClick}
          />
          <Caption>
            <ProjectName>Dashboard</ProjectName>
            <ProjectDate>In progress</ProjectDate>
          </Caption>
        </Figure>

        {dashboardClicked & toggleOn ? (
          <Details>
            {/* <Close onClick={activeToggle}>X</Close> */}
            <Stack>Stack</Stack>
            <Summary>Summary</Summary>
            <Info>Description</Info>
            <Website target="_blank" rel="noreferrer">
              Site on Netlify
            </Website>
            <Code target="_blank" rel="noreferrer">
              Code on GitHub
            </Code>
          </Details>
        ) : null}
      </Project>

      <Project>
        <Figure>
          <Screenshot
            id="portfolio"
            src={portfolio}
            alt="screenshot of portfolio project"
            onClick={handleClick}
          />
          <Caption>
            <ProjectName>Portfolio</ProjectName>
            <ProjectDate>In progress</ProjectDate>
          </Caption>
        </Figure>

        {portfolioClicked & toggleOn ? (
          <Details>
            {/* <Close onClick={activeToggle}>X</Close> */}
            <Stack>Stack</Stack>
            <Summary>Summary</Summary>
            <Info>Description</Info>
            <Website target="_blank" rel="noreferrer">
              Site on Netlify
            </Website>
            <Code target="_blank" rel="noreferrer">
              Code on GitHub
            </Code>
          </Details>
        ) : null}
      </Project>

      <Project>
        <Figure>
          <Screenshot
            id="playlist"
            src={playlist}
            alt="screenshot of playlist project"
            onClick={handleClick}
          />
          <Caption>
            <ProjectName>Playlist</ProjectName>
            <ProjectDate>Month 2021</ProjectDate>
          </Caption>
        </Figure>

        {playlistClicked & toggleOn ? (
          <Details>
            {/* <Close onClick={activeToggle}>X</Close> */}
            <Stack>Stack</Stack>
            <Summary>Summary</Summary>
            <Info>Description</Info>
            <Website target="_blank" rel="noreferrer">
              Site on Netlify
            </Website>
            <Code target="_blank" rel="noreferrer">
              Code on GitHub
            </Code>
          </Details>
        ) : null}
      </Project>

      <Project>
        <Figure>
          <Screenshot
            id="todolist"
            src={todolist}
            alt="screenshot of to-do list project"
            onClick={handleClick}
          />
          <Caption>
            <ProjectName>To-do list</ProjectName>
            <ProjectDate>August 2021</ProjectDate>
          </Caption>
        </Figure>

        {todolistClicked & toggleOn ? (
          <Details>
            {/* <Close onClick={activeToggle}>X</Close> */}
            <Stack>HTML, CSS, JavaScript</Stack>
            <Summary>Fifth Winc Academy front-end assignment.</Summary>
            <Info>
              I gained basic understanding of asynchronous javascript and
              practiced with fetching data from an API. This project required
              including fetch requests (get, post, put and delete) in an API
              client, and providing the user with the options to add, edit and
              delete a task after the to do list has loaded. Also, I learned how
              to implement error handling in case something would go wrong with
              the fetch request.*
              <br />* Because of the data being fetched from localhost, Netlify
              displays 'failed to fetch'. Therefore, I uploaded a previous
              version without error handling and edit option. Both versions are
              on GitHub.
            </Info>
            <Website
              href="https://objective-banach-2a5a85.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Site on Netlify
            </Website>
            <Code
              href="https://github.com/saskiaopdam/Winc_Academy_5_To_Do_List"
              target="_blank"
              rel="noreferrer"
            >
              Code on GitHub
            </Code>
          </Details>
        ) : null}
      </Project>

      <Project>
        <Figure>
          <Screenshot
            id="movieFilter"
            src={movieFilter}
            alt="screenshot of movie filter project"
            onClick={handleClick}
          />
          <Caption>
            <ProjectName>Movie filter</ProjectName>
            <ProjectDate>June 2021</ProjectDate>
          </Caption>
        </Figure>

        {movieFilterClicked & toggleOn ? (
          <Details>
            {/* <Close onClick={activeToggle}>X</Close> */}
            <Stack>HTML, CSS, JavaScript</Stack>
            <Summary>Fourth Winc Academy front-end assignment.</Summary>
            <Info>
              I learned how to work with arrays, apply array methods like
              .filter() and display data by adding elements to the DOM. In the
              feedback I was a complimented for chosing clear method names, and
              received the tip to use arrow functions. In this project, we had
              to present a movie list and provide five different filter options
              in the form of radio buttons. When clicking on a film poster, the
              user had to be lead to the corresponding page on imdb.com. The
              focus lay on functionality and javascript, styling was a bonus
              requirement.
            </Info>
            <Website
              href="https://practical-sinoussi-a17cb3.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Site on Netlify
            </Website>
            <Code
              href="https://github.com/saskiaopdam/Winc_Assignment_4_Movie_Filter"
              target="_blank"
              rel="noreferrer"
            >
              Code on GitHub
            </Code>
          </Details>
        ) : null}
      </Project>

      <Project>
        <Figure>
          <Screenshot
            id="colourToggleDesign"
            src={colourToggleDesign}
            alt="screenshot of colour toggle design project"
            onClick={handleClick}
          />
          <Caption>
            <ProjectName>Colour toggle design</ProjectName>
            <ProjectDate>June 2021</ProjectDate>
          </Caption>
        </Figure>

        {colourToggleDesignClicked & toggleOn ? (
          <Details>
            {/* <Close onClick={activeToggle}>X</Close> */}
            <Stack>HTML, CSS, JavaScript</Stack>
            <Summary>A project of my own.</Summary>
            <Info>
              Inspired by the Colour Toggle assignment, I wanted to create a fun
              version of it, using a bright picture in the background. This
              time, the chosen colour shines through from behind the image of a
              painted wall, giving the website a red, orange, purple or greenish
              hue. It was quite a adventure to create a playful design and
              position all elements correctly.
            </Info>
            <Website
              href="https://suspicious-johnson-c894da.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Site on Netlify
            </Website>
            <Code
              href="https://github.com/saskiaopdam/Colour_Toggle_Design"
              target="_blank"
              rel="noreferrer"
            >
              Code on GitHub
            </Code>
          </Details>
        ) : null}
      </Project>

      <Project>
        <Figure>
          <Screenshot
            id="colourToggle"
            src={colourToggle}
            alt="screenshot of colour toggle project"
            onClick={handleClick}
          />
          <Caption>
            <ProjectName>Colour toggle</ProjectName>
            <ProjectDate>April 2021</ProjectDate>
          </Caption>
        </Figure>

        {colourToggleClicked & toggleOn ? (
          <Details>
            {/* <Close onClick={activeToggle}>X</Close> */}
            <Stack>HTML, CSS, JavaScript</Stack>
            <Summary>Third Winc Academy front-end assignment.</Summary>
            <Info>
              I learned how to add interactivity to a website by adding
              eventlisteners to html elements, and received useful feedback on
              how to reduce repetition in javascript and css code. The challenge
              was to create a clickable hamburger with a toggle function, making
              a colour menu visible on first click, and letting it dissapear on
              the next. Also, the menu had to become visible when hovering over
              the hamburger. Additional interactivity comprised change of
              background colour matching the colour selected in the menu.
            </Info>
            <Website
              href="https://affectionate-haibt-22ebd8.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Site on Netlify
            </Website>
            <Code
              href="https://github.com/saskiaopdam/Winc_Assignment_3_Colour_Toggle"
              target="_blank"
              rel="noreferrer"
            >
              Code on GitHub
            </Code>
          </Details>
        ) : null}
      </Project>

      <Project>
        <Figure>
          <Screenshot
            id="socialMediaButtons"
            src={socialMediaButtons}
            alt="screenshot of social media buttons project"
            onClick={handleClick}
          />
          <Caption>
            <ProjectName>Social media buttons</ProjectName>
            <ProjectDate>April 2021</ProjectDate>
          </Caption>
        </Figure>

        {socialMediaButtonsClicked & toggleOn ? (
          <Details>
            {/* <Close onClick={activeToggle}>X</Close> */}
            <Stack>HTML, CSS, JavaScript</Stack>
            <Summary>
              Second Winc Academy front-end assignment - level 3.
            </Summary>
            <Info>
              Code to design, applying Sass and BEM principle. The challenge
              with the social media buttons was to make them slide inside the
              browser window when hovered and to add icons to them using
              pseudo-elements.
            </Info>
            <Website
              href="https://pensive-ptolemy-d5c4c6.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Site on Netlify
            </Website>
            <Code
              href="https://github.com/saskiaopdam/Winc_Assignment_2C_Social_Media_Buttons"
              target="_blank"
              rel="noreferrer"
            >
              Code on GitHub
            </Code>
          </Details>
        ) : null}
      </Project>

      <Project>
        <Figure>
          <Screenshot
            id="portfolioGrid"
            src={portfolioGrid}
            alt="screenshot of portfolio grid project"
            onClick={handleClick}
          />
          <Caption>
            <ProjectName>Portfolio grid</ProjectName>
            <ProjectDate>April 2021</ProjectDate>
          </Caption>
        </Figure>

        {portfolioGridClicked & toggleOn ? (
          <Details>
            {/* <Close onClick={activeToggle}>X</Close> */}
            <Stack>HTML, CSS, SCSS</Stack>
            <Summary>
              Second Winc Academy front-end assignment - level 2.
            </Summary>
            <Info>
              Code to design, applying Sass and BEM principle. The challenge
              with the portfolio grid was to apply a hover effect on the image
              and make the grid responsive with 1, 2 and 3 columns respectively
              for mobile, tablet and desktop.
            </Info>
            <Website
              href="https://upbeat-goodall-bb4ec2.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Site on Netlify
            </Website>
            <Code
              href="https://github.com/saskiaopdam/Winc_Assignment_2B_Portfolio_Grid"
              target="_blank"
              rel="noreferrer"
            >
              Code on GitHub
            </Code>
          </Details>
        ) : null}
      </Project>

      <Project>
        <Figure>
          <Screenshot
            id="testimonial"
            src={testimonial}
            alt="screenshot of testimonial project"
            onClick={handleClick}
          />
          <Caption>
            <ProjectName>Testimonial</ProjectName>
            <ProjectDate>April 2021</ProjectDate>
          </Caption>
        </Figure>

        {testimonialClicked & toggleOn ? (
          <Details>
            {/* <Close onClick={activeToggle}>X</Close> */}
            <Stack>HTML, CSS, SCSS</Stack>
            <Summary>
              Second Winc Academy front-end assignment - level 1.
            </Summary>
            <Info>
              Code to design, applying Sass and BEM principle. The challenge
              with the testimonial was to position the image correctly and
              recreate the design of the example as closely as possible.
            </Info>
            <Website
              href="https://amazing-cori-c6ed26.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Site on Netlify
            </Website>
            <Code
              href="https://github.com/saskiaopdam/Winc_Assignment_2A_Testimonial"
              target="_blank"
              rel="noreferrer"
            >
              Code on GitHub
            </Code>
          </Details>
        ) : null}
      </Project>

      <Project>
        <Figure>
          <Screenshot
            id="firstWebsite"
            src={firstWebsite}
            alt="screenshot of first website project"
            onClick={handleClick}
          />
          <Caption>
            <ProjectName>First website</ProjectName>
            <ProjectDate>April 2021</ProjectDate>
          </Caption>
        </Figure>

        {firstWebsiteClicked & toggleOn ? (
          <Details>
            {/* <Close onClick={activeToggle}>X</Close> */}
            <Stack>HTML, CSS</Stack>
            <Summary>First Winc Academy front-end assignment.</Summary>
            <Info>
              I learned how to make a website using a mobile-first approach and
              semantic HTML, and received useful feedback on how to apply the
              right indentation and to neatly organise all files. The website
              had to cover a clearly outlined topic and to contain multiple
              pages, images and a form. We had to demonstrate understanding of
              the box-model and use flexbox or grid for positioning.
            </Info>
            <Website
              href="https://vibrant-bohr-d9a9ff.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Site on Netlify
            </Website>
            <Code
              href="https://github.com/saskiaopdam/Winc_Assignment_1_Website"
              target="_blank"
              rel="noreferrer"
            >
              Code on GitHub
            </Code>
          </Details>
        ) : null}
      </Project>
    </ProjectList>
  );
}

export default Projects;
