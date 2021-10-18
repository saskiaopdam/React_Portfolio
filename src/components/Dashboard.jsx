import { useState, useCallback } from "react";
import styled from "styled-components/macro";

import colourtoggle from "../assets/colourtoggle.png";
import colourtoggle2 from "../assets/colourtoggle2.png";
import dashboard from "../assets/dashboard.png";
import firstWebsite from "../assets/first-website.png";
import moviefilter from "../assets/moviefilter.png";
import playlist from "../assets/playlist.png";
import portfolio from "../assets/portfolio.png";
import portfolioGrid from "../assets/portfolio-grid.png";
import socialMediaButtons from "../assets/social-media-buttons.png";
import testimonial from "../assets/testimonial.png";
import todolist from "../assets/todolist.png";

const Project = styled.li`
  background: yellow;
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

const Details = styled.div`
  padding: 20px;
`;

const CloseButton = styled.button`
  display: block;
  border: none;
  background-color: transparent;
  text-align: right;
  text-decoration: none;
  float: right;
`;

const OpenButton = styled.button`
  display: block;
  border: none;
  background-color: transparent;
  text-align: right;
  text-decoration: none;
  float: right;
`;

const LinkToSite = styled.a`
  color: black;
  display: block;
  padding: 20px;
`;

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => {
    setValue((v) => !v);
  }, []);
  return [value, toggle];
}

function Dashboard({ onClick }) {
  const [toggleOn, activeToggle] = useToggle();

  //   const handleClick = (event) => {
  //     setClickedScreenshot(event.target.id);
  //     console.log(typeof clickedScreenshot);
  //     activeToggle();
  //   };

  function DetailsVisible() {
    return (
      <div>
        <CloseButton onClick={activeToggle}>Hide details</CloseButton>
        <p>info about dashboard</p>
      </div>
    );
  }

  function DetailsHidden() {
    return (
      <div>
        <OpenButton onClick={activeToggle}>Show details</OpenButton>
      </div>
    );
  }

  return (
    <Project>
      <Figure>
        <Screenshot
          id="dashboard"
          src={dashboard}
          alt="screenshot of dashboard project"
          onClick={onClick}
        />
        <Caption>
          <span>Dashboard</span>
          <span>In progress</span>
        </Caption>
      </Figure>
      {/* {dashboardClicked & toggleOn ? (
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
      </LinkToSite> */}
    </Project>
  );
}

export default Dashboard;
