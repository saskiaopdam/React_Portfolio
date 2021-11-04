import styled from "styled-components/macro";

import Portfolio_Details from "./Portfolio_Details";
import Toggle2_Details from "./Toggle2_Details";

import Dashboard_Details from "./Dashboard_Details";
import Playlist_Details from "./Playlist_Details";
import TDD_Details from "./TDD_Details";
import Todolist_Details from "./Todolist_Details";
import Moviefilter_Details from "./Moviefilter_Details";
import Toggle1_Details from "./Toggle1_Details";
import Mediabuttons_Details from "./Mediabuttons_Details";
import Portfolio_Grid_Details from "./Portfolio_Grid_Details";
import Testimonial_Details from "./Testimonial_Details";
import Website_Details from "./Website_Details";

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
        <Portfolio_Details />
      ) : id === "toggle2" ? (
        <Toggle2_Details />
      ) : id === "dashboard" ? (
        <Dashboard_Details />
      ) : id === "playlist" ? (
        <Playlist_Details />
      ) : id === "TDD" ? (
        <TDD_Details />
      ) : id === "todo-list" ? (
        <Todolist_Details />
      ) : id === "movie-filter" ? (
        <Moviefilter_Details />
      ) : id === "toggle1" ? (
        <Toggle1_Details />
      ) : id === "media-buttons" ? (
        <Mediabuttons_Details />
      ) : id === "portfolio-grid" ? (
        <Portfolio_Grid_Details />
      ) : id === "testimonial" ? (
        <Testimonial_Details />
      ) : id === "website" ? (
        <Website_Details />
      ) : (
        "null"
      )}
    </Wrapper>
  );
}

export default Project;
