import { Link } from "react-router-dom";

import styled from "styled-components/macro";

//own-projects
import toggle2 from "../assets/coding-projects/toggle2.png";
import portfolio from "../assets/coding-projects/portfolio.png";

//winc-projects
import toggle1 from "../assets/winc-projects/toggle1.png";
import dashboard from "../assets/winc-projects/student-dashboard.png";
import website from "../assets/winc-projects/website.png";
import moviefilter from "../assets/winc-projects/movie-filter.png";
import playlist from "../assets/winc-projects/playlist.png";
import portfoliogrid from "../assets/winc-projects/portfolio-grid.png";
import mediabuttons from "../assets/winc-projects/media-buttons.png";
import TDD from "../assets/winc-projects/TDD.png";
import testimonial from "../assets/winc-projects/testimonial.png";
import todolist from "../assets/winc-projects/todo-list.png";

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  margin-top: 32px;
  margin-bottom: 32px;
  @media (min-width: 500px) {
    text-align: center;
  }
`;

const H2 = styled.h2`
  margin-top: 52px;
  margin-bottom: 52px;
  color: darkgray;
  &.firstchild {
    margin-top: 0;
  }
  @media (min-width: 500px) {
    text-align: center;
  }
`;

const ImageRouteLink = styled(Link)`
  text-decoration: none;
  background: white;
  color: black;
  & + & {
    margin-top: 32px;
  }
  @media (min-width: 500px) {
    text-align: center;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 460px;
  display: block;
  margin: 0 auto;
`;

function Work() {
  return (
    <Wrapper>
      <Title>work</Title>

      <H2 className="firstchild">own projects</H2>

      <ImageRouteLink to="/work/portfolio">
        <Image src={portfolio} alt="screenshot of portfolio project" />
      </ImageRouteLink>

      <ImageRouteLink to="/work/toggle2">
        <Image src={toggle2} alt="screenshot of toggle2 project" />
      </ImageRouteLink>

      <H2>Winc Academy exam projects</H2>

      <ImageRouteLink to="/work/dashboard">
        <Image src={dashboard} alt="screenshot of dashboard project" />
      </ImageRouteLink>

      <ImageRouteLink to="/work/playlist">
        <Image src={playlist} alt="screenshot of playlist project" />
      </ImageRouteLink>

      <ImageRouteLink to="/work/TDD">
        <Image src={TDD} alt="screenshot of TDD project" />
      </ImageRouteLink>

      <ImageRouteLink to="/work/todo-list">
        <Image src={todolist} alt="screenshot of todolist project" />
      </ImageRouteLink>

      <ImageRouteLink to="/work/movie-filter">
        <Image src={moviefilter} alt="screenshot of moviefilter project" />
      </ImageRouteLink>

      <ImageRouteLink to="/work/toggle1">
        <Image src={toggle1} alt="screenshot of toggle1 project" />
      </ImageRouteLink>

      <ImageRouteLink to="/work/media-buttons">
        <Image src={mediabuttons} alt="screenshot of mediabuttons project" />
      </ImageRouteLink>

      <ImageRouteLink to="/work/portfolio-grid">
        <Image src={portfoliogrid} alt="screenshot of portfoliogrid project" />
      </ImageRouteLink>

      <ImageRouteLink to="/work/testimonial">
        <Image src={testimonial} alt="screenshot of testimonial project" />
      </ImageRouteLink>

      <ImageRouteLink to="/work/website">
        <Image src={website} alt="screenshot of website project" />
      </ImageRouteLink>
    </Wrapper>
  );
}

export default Work;
