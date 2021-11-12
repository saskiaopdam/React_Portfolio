import { useState } from "react";

import styled from "styled-components/macro";

//own-projects
import portfolio from "../assets/portfolio.png";
import toggle2 from "../assets/toggle2.png";

//winc-projects
import dashboard from "../assets/dashboard.png";
import playlist from "../assets/playlist.png";
import tdd from "../assets/tdd.png";
import todolist from "../assets/todolist.png";
import moviefilter from "../assets/moviefilter.png";
import toggle1 from "../assets/toggle1.png";
import mediabuttons from "../assets/mediabuttons.png";
import portfoliogrid from "../assets/portfoliogrid.png";
import testimonial from "../assets/testimonial.png";
import website from "../assets/website.png";

const Wrapper = styled.div`
  flex-grow: 1;
`;

const Title = styled.h1`
  margin-top: 20px;
  margin-bottom: 16px;
  text-align: center;
`;

const FigureWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
`;

const Figure = styled.figure`
  position: relative;
  & + & {
    margin-top: 20px;
  }
  padding: 0 20px 20px 20px;
  @media (min-width: 768px) {
    width: 50%;
    & + & {
      margin-top: 0;
    }
    padding-bottom: 40px;
    &:nth-last-child(1) {
      padding-bottom: 20px;
    }
    &:nth-last-child(2) {
      padding-bottom: 20px;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  display: block;
`;

const Text = styled.div`
  padding: 20px;
  display: ${({
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
      ? "block"
      : toggle2Clicked && visible
      ? "block"
      : dashboardClicked && visible
      ? "block"
      : playlistClicked && visible
      ? "block"
      : tddClicked && visible
      ? "block"
      : todolistClicked && visible
      ? "block"
      : moviefilterClicked && visible
      ? "block"
      : toggle1Clicked && visible
      ? "block"
      : mediabuttonsClicked && visible
      ? "block"
      : portfoliogridClicked && visible
      ? "block"
      : testimonialClicked && visible
      ? "block"
      : websiteClicked && visible
      ? "block"
      : "none"};
`;

const Heading2 = styled.h2`
  margin-bottom: 12px;
`;

const Paragraph = styled.p`
  margin-bottom: 16px;
`;

const AnchorLink = styled.a`
  text-decoration: none;
  color: royalblue;
  display: block;
  margin-top: 8px;
`;

// const Projects = styled.div`
//   background: whitesmoke;
// `;

// const Heading = styled.h2`
//   margin-bottom: 12px;
// `;

// const StyledLink = styled(Link)`
//   text-decoration: none;
//   color: mediumvioletred;
//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const Image = styled.img`
//   width: 50%;
//   display: ${({
//     portfolioMouseEnter,
//     toggle2MouseEnter,
//     dashboardMouseEnter,
//     playlistMouseEnter,
//     tddMouseEnter,
//     todolistMouseEnter,
//     moviefilterMouseEnter,
//     toggle1MouseEnter,
//     mediabuttonsMouseEnter,
//     portfoliogridMouseEnter,
//     testimonialMouseEnter,
//     websiteMouseEnter,
//     visible,
//   }) =>
//     portfolioMouseEnter && visible
//       ? "block"
//       : toggle2MouseEnter && visible
//       ? "block"
//       : dashboardMouseEnter && visible
//       ? "block"
//       : playlistMouseEnter && visible
//       ? "block"
//       : tddMouseEnter && visible
//       ? "block"
//       : todolistMouseEnter && visible
//       ? "block"
//       : moviefilterMouseEnter && visible
//       ? "block"
//       : toggle1MouseEnter && visible
//       ? "block"
//       : mediabuttonsMouseEnter && visible
//       ? "block"
//       : portfoliogridMouseEnter && visible
//       ? "block"
//       : testimonialMouseEnter && visible
//       ? "block"
//       : websiteMouseEnter && visible
//       ? "block"
//       : "none"};
//   // @media (min-width: 768px) {
//   //   width: 25%;
//   // }
// `;

function Work() {
  // const [id, setId] = useState("");
  // const [visible, setVisible] = useState(false);

  // const handleMouseEnter = (event) => {
  //   setId(event.target.id);
  //   setVisible(true);
  // };

  // const handleMouseLeave = () => {
  //   setVisible(false);
  // };

  // const portfolioMouseEnter = id === "portfolio";
  // const toggle2MouseEnter = id === "toggle2";

  // const dashboardMouseEnter = id === "dashboard";
  // const playlistMouseEnter = id === "playlist";
  // const tddMouseEnter = id === "tdd";
  // const todolistMouseEnter = id === "todolist";
  // const moviefilterMouseEnter = id === "moviefilter";
  // const toggle1MouseEnter = id === "toggle1";
  // const mediabuttonsMouseEnter = id === "mediabuttons";
  // const portfoliogridMouseEnter = id === "portfoliogrid";
  // const testimonialMouseEnter = id === "testimonial";
  // const websiteMouseEnter = id === "website";

  const [id, setId] = useState("");
  const [visible, setVisible] = useState(false);

  const handleClick = (event) => {
    setId(event.target.id);
    setVisible(!visible);
  };

  const portfolioClicked = id === "portfolio";
  const toggle2Clicked = id === "toggle2";

  const dashboardClicked = id === "dashboard";
  const playlistClicked = id === "playlist";
  const tddClicked = id === "tdd";
  const todolistClicked = id === "todolist";
  const moviefilterClicked = id === "moviefilter";
  const toggle1Clicked = id === "toggle1";
  const mediabuttonsClicked = id === "mediabuttons";
  const portfoliogridClicked = id === "portfoliogrid";
  const testimonialClicked = id === "testimonial";
  const websiteClicked = id === "website";

  return (
    <Wrapper>
      <Title>Coding projects</Title>
      <FigureWrapper>
        <Figure>
          <Image
            src={portfolio}
            alt="screenshot of portfolio project"
            id="portfolio"
            onClick={handleClick}
          />
          <Text visible={visible} portfolioClicked={portfolioClicked}>
            <Heading2>Portfolio</Heading2>
            <Paragraph>November 2021 - React</Paragraph>
            <Paragraph>
              Single Page portfolio app to demonstrate acquired skills and show
              projects.
            </Paragraph>
            <AnchorLink
              href="https://github.com/saskiaopdam/React_Portfolio"
              target="_blank"
              rel="noreferrer"
            >
              code online
            </AnchorLink>
          </Text>
        </Figure>

        <Figure>
          <Image
            src={toggle2}
            alt="screenshot of toggle2 project"
            id="toggle2"
            onClick={handleClick}
          />
          <Text visible={visible} toggle2Clicked={toggle2Clicked}>
            <Heading2>Toggle2</Heading2>
            <Paragraph>June 2021 - HTML, CSS, JavaScript</Paragraph>
            <Paragraph>
              A new and colourful version of the Winc Academy colour toggle
              project.
            </Paragraph>
            <AnchorLink
              href="https://toggle2.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              site online
            </AnchorLink>
            <AnchorLink
              href="https://github.com/saskiaopdam/Colour_Toggle_Design"
              target="_blank"
              rel="noreferrer"
            >
              code online
            </AnchorLink>
          </Text>
        </Figure>
        <Figure>
          <Image
            src={dashboard}
            alt="screenshot of dashboard project"
            id="dashboard"
            onClick={handleClick}
          />
          <Text visible={visible} dashboardClicked={dashboardClicked}>
            <Heading2>Dashboard</Heading2>
            <Paragraph>Just started - React</Paragraph>
            <Paragraph>
              Final Winc Academy front-end assignment:
              <br />
              Present data from a Google Sheet in a chart using a JavaScript
              framework such as React.
            </Paragraph>
            <AnchorLink
              href="https://dashboard-wa.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              site online
            </AnchorLink>
            <AnchorLink
              href="https://github.com/saskiaopdam/Winc_Assignment_8_Student_Dashboard"
              target="_blank"
              rel="noreferrer"
            >
              code online
            </AnchorLink>
          </Text>
        </Figure>
        <Figure>
          <Image
            src={playlist}
            alt="screenshot of playlist project"
            id="playlist"
            onClick={handleClick}
          />
          <Text visible={visible} playlistClicked={playlistClicked}>
            <Heading2>Playlist</Heading2>
            <Paragraph>September 2021 - React/Redux</Paragraph>
            <Paragraph>
              Seventh Winc Academy front-end assignment:
              <br />
              Single Page application to save favorite songs with a rating,
              using Redux for state management.
            </Paragraph>
            <AnchorLink
              href="https://playlist-wa.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              site online
            </AnchorLink>
            <AnchorLink
              href="https://github.com/saskiaopdam/Winc_Assignment_7_Playlist"
              target="_blank"
              rel="noreferrer"
            >
              code online
            </AnchorLink>
          </Text>
        </Figure>
        <Figure>
          <Image
            src={tdd}
            alt="screenshot of tdd project"
            id="tdd"
            onClick={handleClick}
          />
          <Text visible={visible} tddClicked={tddClicked}>
            <Heading2>TDD</Heading2>
            <Paragraph>August 2021 - TDD testing</Paragraph>
            <Paragraph>
              Sixth Winc Academy front-end assignment:
              <br />
              Writing tests to check if functions perform as expected, taking
              into account multiple environment factors.
            </Paragraph>
            <AnchorLink
              href="https://github.com/saskiaopdam/Winc_Assignment_6_TDD_testing"
              target="_blank"
              rel="noreferrer"
            >
              code online
            </AnchorLink>
          </Text>
        </Figure>
        <Figure>
          <Image
            src={todolist}
            alt="screenshot of todolist project"
            id="todolist"
            onClick={handleClick}
          />
          <Text visible={visible} todolistClicked={todolistClicked}>
            <Heading2>Todo-list</Heading2>
            <Paragraph>August 2021 - HTML, CSS, JavaScript</Paragraph>
            <Paragraph>
              Fifth Winc Academy front-end assignment:
              <br />
              Fetching data from an API, gaining understanding of asynchronous
              javascript. Implementing error handling.
            </Paragraph>
            <AnchorLink
              href="https://todolist-wa.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              site online
            </AnchorLink>
            <AnchorLink
              href="https://github.com/saskiaopdam/Winc_Assignment_5_To_Do_List"
              target="_blank"
              rel="noreferrer"
            >
              code online
            </AnchorLink>
          </Text>
        </Figure>
        <Figure>
          <Image
            src={moviefilter}
            alt="screenshot of moviefilter project"
            id="moviefilter"
            onClick={handleClick}
          />
          <Text visible={visible} moviefilterClicked={moviefilterClicked}>
            <Heading2>Moviefilter</Heading2>
            <Paragraph>June 2021 - HTML, CSS, JavaScript</Paragraph>
            <Paragraph>
              Fourth Winc Academy front-end assignment:
              <br />
              Apply array methods like .filter() and display data by adding
              elements to the DOM.
            </Paragraph>
            <AnchorLink
              href="https://moviefilter-wa.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              site online
            </AnchorLink>
            <AnchorLink
              href="https://github.com/saskiaopdam/Winc_Assignment_4_Movie_Filter"
              target="_blank"
              rel="noreferrer"
            >
              code online
            </AnchorLink>
          </Text>
        </Figure>
        <Figure>
          <Image
            src={toggle1}
            alt="screenshot of toggle1 project"
            id="toggle1"
            onClick={handleClick}
          />
          <Text visible={visible} toggle1Clicked={toggle1Clicked}>
            <Heading2>Toggle</Heading2>
            <Paragraph>April 2021 - HTML, CSS, JavaScript</Paragraph>
            <Paragraph>
              Third Winc Academy front-end assignment:
              <br />
              Add interactivity to a website by adding eventlisteners, making
              the background-color change.
            </Paragraph>
            <AnchorLink
              href="https://toggle1-wa.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              site online
            </AnchorLink>
            <AnchorLink
              href="https://github.com/saskiaopdam/Winc_Assignment_3_Colour_Toggle"
              target="_blank"
              rel="noreferrer"
            >
              code online
            </AnchorLink>
          </Text>
        </Figure>
        <Figure>
          <Image
            src={mediabuttons}
            alt="screenshot of mediabuttons project"
            id="mediabuttons"
            onClick={handleClick}
          />
          <Text visible={visible} mediabuttonsClicked={mediabuttonsClicked}>
            <Heading2>Mediabuttons</Heading2>
            <Paragraph>April 2021 - HTML, CSS, SCSS</Paragraph>
            <Paragraph>
              Second Winc Academy front-end assignment, level 3:
              <br />
              Code to design, applying Sass and BEM principle. Create transition
              on hover and add icons.
            </Paragraph>
            <AnchorLink
              href="https://mediabuttons-wa.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              site online
            </AnchorLink>
            <AnchorLink
              href="https://github.com/saskiaopdam/Winc_Assignment_2C_Social_Media_Buttons"
              target="_blank"
              rel="noreferrer"
            >
              code online
            </AnchorLink>
          </Text>
        </Figure>
        <Figure>
          <Image
            src={portfoliogrid}
            alt="screenshot of portfoliogrid project"
            id="portfoliogrid"
            onClick={handleClick}
          />
          <Text visible={visible} portfoliogridClicked={portfoliogridClicked}>
            <Heading2>Portfolio-grid</Heading2>
            <Paragraph>April 2021 - HTML, CSS, SCSS</Paragraph>
            <Paragraph>
              Second Winc Academy front-end assignment, level 2:
              <br />
              Code to design, applying Sass and BEM principle. Create hover
              effect on the image and make responsive grid.
            </Paragraph>
            <AnchorLink
              href="https://portfoliogrid-wa.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              site online
            </AnchorLink>
            <AnchorLink
              href="https://github.com/saskiaopdam/Winc_Assignment_2B_Portfolio_Grid"
              target="_blank"
              rel="noreferrer"
            >
              code online
            </AnchorLink>
          </Text>
        </Figure>
        <Figure className="bottom">
          <Image
            src={testimonial}
            alt="screenshot of testimonial project"
            id="testimonial"
            onClick={handleClick}
          />
          <Text visible={visible} testimonialClicked={testimonialClicked}>
            <Heading2>Testimonial</Heading2>
            <Paragraph>April 2021 - HTML, CSS, SCSS</Paragraph>
            <Paragraph>
              Second Winc Academy front-end assignment, level block:
              <br />
              Code to design, applying Sass and BEM principle. Position the
              image correctly.
            </Paragraph>
            <AnchorLink
              href="https://testimonial-wa.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              site online
            </AnchorLink>
            <AnchorLink
              href="https://github.com/saskiaopdam/Winc_Assignment_2A_Testimonial"
              target="_blank"
              rel="noreferrer"
            >
              code online
            </AnchorLink>
          </Text>
        </Figure>
        <Figure className="bottom">
          <Image
            src={website}
            alt="screenshot of website project"
            id="website"
            onClick={handleClick}
          />
          <Text visible={visible} websiteClicked={websiteClicked}>
            <Heading2>Website</Heading2>
            <Paragraph>April 2021 - HTML, CSS</Paragraph>
            <Paragraph>
              First Winc Academy front-end assignment:
              <br />
              Make a website using a mobile-first approach and use flexbox or
              grid for positioning.
            </Paragraph>
            <AnchorLink
              href="https://website-wa.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              site online
            </AnchorLink>
            <AnchorLink
              href="https://github.com/saskiaopdam/Winc_Assignment_1_Website"
              target="_blank"
              rel="noreferrer"
            >
              code online
            </AnchorLink>
          </Text>
        </Figure>
      </FigureWrapper>
      {/* <Projects>
        <StyledLink to="/work/portfolio">
          <Heading
            id="portfolio"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            portfolio *
          </Heading>
        </StyledLink>
        <Image
          src={portfolio}
          alt="screenshot of portfolio project"
          visible={visible}
          portfolioMouseEnter={portfolioMouseEnter}
        />

        <StyledLink to="/work/toggle2">
          <Heading
            id="toggle2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            toggle2 *
          </Heading>
        </StyledLink>
        <Image
          src={toggle2}
          alt="screenshot of toggle2 project"
          visible={visible}
          toggle2MouseEnter={toggle2MouseEnter}
        />

        <StyledLink to="/work/dashboard">
          <Heading
            id="dashboard"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            dashboard
          </Heading>
        </StyledLink>
        <Image
          src={dashboard}
          alt="screenshot of dashboard project"
          visible={visible}
          dashboardMouseEnter={dashboardMouseEnter}
        />

        <StyledLink to="/work/playlist">
          <Heading
            id="playlist"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            playlist
          </Heading>
        </StyledLink>
        <Image
          src={playlist}
          alt="screenshot of playlist project"
          visible={visible}
          playlistMouseEnter={playlistMouseEnter}
        />

        <StyledLink to="/work/tdd">
          <Heading
            id="tdd"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            TDD
          </Heading>
        </StyledLink>
        <Image
          src={tdd}
          alt="screenshot of TDD project"
          visible={visible}
          tddMouseEnter={tddMouseEnter}
        />

        <StyledLink to="/work/todolist">
          <Heading
            id="todolist"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            todo-list
          </Heading>
        </StyledLink>
        <Image
          src={todolist}
          alt="screenshot of todo-list project"
          visible={visible}
          todolistMouseEnter={todolistMouseEnter}
        />

        <StyledLink to="/work/moviefilter">
          <Heading
            id="moviefilter"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            moviefilter
          </Heading>
        </StyledLink>
        <Image
          src={moviefilter}
          alt="screenshot of moviefilter project"
          visible={visible}
          moviefilterMouseEnter={moviefilterMouseEnter}
        />

        <StyledLink to="/work/toggle1">
          <Heading
            id="toggle1"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            toggle1
          </Heading>
        </StyledLink>
        <Image
          src={toggle1}
          alt="screenshot of toggle1 project"
          visible={visible}
          toggle1MouseEnter={toggle1MouseEnter}
        />

        <StyledLink to="/work/mediabuttons">
          <Heading
            id="mediabuttons"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            mediabuttons
          </Heading>
        </StyledLink>
        <Image
          src={mediabuttons}
          alt="screenshot of mediabuttons project"
          visible={visible}
          mediabuttonsMouseEnter={mediabuttonsMouseEnter}
        />

        <StyledLink to="/work/portfoliogrid">
          <Heading
            id="portfoliogrid"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            portfolio-grid
          </Heading>
        </StyledLink>
        <Image
          src={portfoliogrid}
          alt="screenshot of portfolio-grid project"
          visible={visible}
          portfoliogridMouseEnter={portfoliogridMouseEnter}
        />

        <StyledLink to="/work/testimonial">
          <Heading
            id="testimonial"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            testimonial
          </Heading>
        </StyledLink>
        <Image
          src={testimonial}
          alt="screenshot of testimonial project"
          visible={visible}
          testimonialMouseEnter={testimonialMouseEnter}
        />

        <StyledLink to="/work/website">
          <Heading
            id="website"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            website
          </Heading>
        </StyledLink>
        <Image
          src={website}
          alt="screenshot of website project"
          visible={visible}
          websiteMouseEnter={websiteMouseEnter}
        />
        <p>* My own projects. The rest are Winc Academy exam projects.</p>
      </Projects> */}
    </Wrapper>
  );
}

export default Work;
