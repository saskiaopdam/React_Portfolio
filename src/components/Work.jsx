import styled from "styled-components/macro";

import colourtoggle from "../assets/screenshots/winc-projects/colour-toggle.png";
import colourtoggle2 from "../assets/screenshots/own-projects/colour-toggle-2.png";
import dashboard from "../assets/screenshots/winc-projects/student-dashboard.png";
import website from "../assets/screenshots/winc-projects/website.png";
import moviefilter from "../assets/screenshots/winc-projects/movie-filter.png";
import playlist from "../assets/screenshots/winc-projects/playlist.png";
import portfolio from "../assets/screenshots/own-projects/portfolio.png";
import portfoliogrid from "../assets/screenshots/winc-projects/portfolio-grid.png";
import mediabuttons from "../assets/screenshots/winc-projects/media-buttons.png";
import testimonial from "../assets/screenshots/winc-projects/testimonial.png";
import todolist from "../assets/screenshots/winc-projects/todo-list.png";

import lemons from "../assets/screenshots/own-photo-projects/lemons.jpg";
import flowerleaves2 from "../assets/screenshots/own-photo-projects/flowers-leaves2.jpg";
import hydrangea from "../assets/screenshots/own-photo-projects/hydrangea.jpg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1000px) {
    align-items: flex-start;
  }
`;

const PageHeader = styled.h1`
  margin: 32px 0;
`;

const H2 = styled.h2`
  margin-bottom: 24px;
`;

const H3 = styled.h3`
  margin-bottom: 18px;
`;

const Screenshot = styled.img`
  width: 100%;
  // max-width: 480px;
  @media (min-width: 1000px) {
     max-width: 480px;
`;

const FigureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;

const Figure = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  & + & {
    margin-top: 18px;
  }
  // &.red {
  //   background: red;
  // }
  // &.blue {
  //   background: blue;
  // }
  @media (max-width: 999px) {
    align-items: center;
  }
  @media (min-width: 1000px) {
    & + & {
      margin-top: 0;
    }
  }
`;

function Work() {
  return (
    <Wrapper>
      <PageHeader>Work</PageHeader>

      <H2>Photography</H2>
      <FigureWrapper>
        <Figure>
          <Screenshot src={lemons} alt="screenshot of lemons project" />
          <H3>Lemons</H3>
          <p>photoshop & lightroom</p>
          <a href="https://www.behance.net/opdamsaski0505">more on Behance</a>
        </Figure>
        <Figure>
          <Screenshot src={hydrangea} alt="screenshot of hydrangea project" />
          <H3>Hydrangea</H3>
          <p>photoshop & lightroom</p>
          <a href="https://www.behance.net/opdamsaski0505">more on Behance</a>
        </Figure>
      </FigureWrapper>

      <H2>Development</H2>
      <FigureWrapper>
        <Figure>
          <Screenshot src={portfolio} alt="screenshot of portfolio project" />
          <H3>Portfolio</H3>
          <p>react</p>
          <a href="#">view code on GitHub</a>
        </Figure>
        <Figure>
          <Screenshot
            src={colourtoggle2}
            alt="screenshot of my own colourtoggle project"
          />
          <H3>Colour Toggle</H3>
          <p>javascript</p>
          <a
            href="https://suspicious-johnson-c894da.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            view site on Netlify
          </a>
          <a
            href="https://github.com/saskiaopdam/Colour_Toggle_Design"
            target="_blank"
            rel="noreferrer"
          >
            view code on GitHub
          </a>
        </Figure>
      </FigureWrapper>

      {/* <h2>Winc projects</h2>
      <p>Part of the front-end curriculum.</p>
      <Screenshot src={dashboard} alt="screenshot of dashboard project" />
      <Screenshot src={playlist} alt="screenshot of playlist project" />
      <Screenshot src={todolist} alt="screenshot of todolist project" />
      <Screenshot src={moviefilter} alt="screenshot of moviefilter project" />
      <Screenshot src={colourtoggle} alt="screenshot of colourtoggle project" />
      <Screenshot src={mediabuttons} alt="screenshot of mediabuttons project" />
      <Screenshot
        src={portfoliogrid}
        alt="screenshot of portfoliogrid project"
      />
      <Screenshot src={testimonial} alt="screenshot of testimonial project" />
      <Screenshot src={website} alt="screenshot of website project" /> */}
    </Wrapper>
  );
}

export default Work;
