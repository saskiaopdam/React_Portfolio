import styled from "styled-components/macro";

import Portfolio from "./Portfolio";
import Toggle2_Details from "./Toggle2";

import Dashboard from "./Dashboard";
import Playlist from "./Playlist";
import TDD from "./TDD";
import Todolist from "./Todolist";
import Moviefilter from "./Moviefilter";
import Toggle1 from "./Toggle1";
import Mediabuttons from "./Mediabuttons";
import PortfolioGrid from "./PortfolioGrid";
import Testimonial from "./Testimonial";
import Website from "./Website";

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  margin-bottom: 16px;
`;

function Project({ match }) {
  const id = match.params.id;
  console.log(id);
  return (
    <Wrapper>
      <Title>{match.params.id}</Title>
      {id === "portfolio" ? (
        <Portfolio />
      ) : id === "toggle2" ? (
        <Toggle2 />
      ) : id === "dashboard" ? (
        <Dashboard />
      ) : id === "playlist" ? (
        <Playlist />
      ) : id === "TDD" ? (
        <TDD />
      ) : id === "todo-list" ? (
        <Todolist />
      ) : id === "movie-filter" ? (
        <Moviefilter />
      ) : id === "toggle1" ? (
        <Toggle1 />
      ) : id === "media-buttons" ? (
        <Mediabuttons />
      ) : id === "portfolio-grid" ? (
        <PortfolioGrid />
      ) : id === "testimonial" ? (
        <Testimonial />
      ) : id === "website" ? (
        <Website />
      ) : (
        "null"
      )}
    </Wrapper>
  );
}

export default Project;
