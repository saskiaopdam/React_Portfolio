import { useState } from "react";
import { Link } from "react-router-dom";

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
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  margin-bottom: 16px;
`;

const Projects = styled.div`
  background: whitesmoke;
`;

const Heading = styled.h2`
  margin-bottom: 12px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: mediumvioletred;
  &:hover {
    text-decoration: underline;
  }
`;

const Image = styled.img`
  width: 50%;
  display: ${({
    portfolioMouseEnter,
    toggle2MouseEnter,
    dashboardMouseEnter,
    playlistMouseEnter,
    tddMouseEnter,
    todolistMouseEnter,
    moviefilterMouseEnter,
    toggle1MouseEnter,
    mediabuttonsMouseEnter,
    portfoliogridMouseEnter,
    testimonialMouseEnter,
    websiteMouseEnter,
    visible,
  }) =>
    portfolioMouseEnter && visible
      ? "block"
      : toggle2MouseEnter && visible
      ? "block"
      : dashboardMouseEnter && visible
      ? "block"
      : playlistMouseEnter && visible
      ? "block"
      : tddMouseEnter && visible
      ? "block"
      : todolistMouseEnter && visible
      ? "block"
      : moviefilterMouseEnter && visible
      ? "block"
      : toggle1MouseEnter && visible
      ? "block"
      : mediabuttonsMouseEnter && visible
      ? "block"
      : portfoliogridMouseEnter && visible
      ? "block"
      : testimonialMouseEnter && visible
      ? "block"
      : websiteMouseEnter && visible
      ? "block"
      : "none"};
  // @media (min-width: 768px) {
  //   width: 25%;
  // }
`;

function Work() {
  const [id, setId] = useState("");
  const [visible, setVisible] = useState(false);

  const handleMouseEnter = (event) => {
    setId(event.target.id);
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  const portfolioMouseEnter = id === "portfolio";
  const toggle2MouseEnter = id === "toggle2";

  const dashboardMouseEnter = id === "dashboard";
  const playlistMouseEnter = id === "playlist";
  const tddMouseEnter = id === "tdd";
  const todolistMouseEnter = id === "todolist";
  const moviefilterMouseEnter = id === "moviefilter";
  const toggle1MouseEnter = id === "toggle1";
  const mediabuttonsMouseEnter = id === "mediabuttons";
  const portfoliogridMouseEnter = id === "portfoliogrid";
  const testimonialMouseEnter = id === "testimonial";
  const websiteMouseEnter = id === "website";

  return (
    <Wrapper>
      <Title>Work</Title>
      <Projects>
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
      </Projects>
    </Wrapper>
  );
}

export default Work;
