import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import styled from "styled-components/macro";

import Projects from "./Projects";

import photo from "./_DSC3220_500x750.jpg";
// import colourtoggle from "../assets/colourtoggle.png";
// import colourtoggle2 from "../assets/colourtoggle2.png";
// import firstWebsite from "../assets/first-website.png";
// import moviefilter from "../assets/moviefilter.png";
// import playlist from "../assets/playlist.png";
// import portfolio from "../assets/portfolio.png";
// import portfolioGrid from "../assets/portfolio-grid.png";
// import socialMediaButtons from "../assets/social-media-buttons.png";
import dashboard from "../assets/dashboard.png";
// import testimonial from "../assets/testimonial.png";
// import todolist from "../assets/todolist.png";

const Wrapper = styled.main`
  flex-grow: 1;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #eee;
`;

const SectionHeader = styled.h2`
  text-align: center;
  margin: 30px;
  color: cadetblue;
`;

// const Projects = styled.div`
//   padding: 20px;
//   margin-bottom: 20px;
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   gap: 20px;
// `;

const Project = styled.div`
  border-bottom: 1px solid green;
`;

const ProjectTitle = styled.h3`
  color: red;
`;

// const AboutMe = styled.article`
//   margin-bottom: 20px;
//   background: white;
//   /* media queries */
//   @media (min-width: 1000px) {
//     display: flex;
//     align-items: stretch;
//   }
// `;

// const MyPicture = styled.figure`
//   max-width: 500px;
//   @media (min-width: 1000px) {
//     width: 50%;
//   }
// `;

// const MyInfo = styled.div`
//   max-width: 500px;
//   @media (min-width: 1000px) {
//     width: 50%;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//   }
// `;

const Photo = styled.img`
  width: 100%;
  max-width: 350px;
`;

const Figure = styled.figure`
  background: white;
`;

const Screenshot = styled.img`
  width: 100%;
  max-width: 600px;
`;

// const Project = styled.div`
//   background: yellow;
// `;

// const Video = styled.video`
//   width: 100%;
//   max-width: 350px;
// `;

// const Column = styled.div`
//   padding: 20px;
//   @media (min-width: 500px) {
//     padding: 20px 0;
//   }
//   @media (min-width: 1000px) {
//     padding-left: 20px;
//   }
// `;

const Info = styled.h3`
  text-align: center;
  font-size: 18px;
  line-height: 1.5;
  margin: 30px;
  opacity: 0.5;
`;

const Caption = styled.figcaption`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const Details = styled.div`
  padding: 20px;
`;

// const Paragraph = styled.p`
//   line-height: 1.25;
//   margin-bottom: 20px;
//   &:last-child {
//     margin-bottom: 0;
//   }
// `;

const List = styled.ul`
  list-style-type: none;
  margin-bottom: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 20px;
  text-align: center;
`;

const A = styled.a`
  color: black;
  text-decoration: none;
`;

const LinkToSite = styled.a`
  color: black;
  display: block;
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

const Button = styled.button`
  background-color: rgb(233, 229, 229);
  border: none;
  text-align: center;
  text-decoration: none;
  padding: 20px;
  width: 50%;
`;

function useToggle(initialValue = false) {
  const [value, setValue] = React.useState(initialValue);
  const toggle = React.useCallback(() => {
    setValue((v) => !v);
  }, []);
  return [value, toggle];
}

function Main() {
  const [isOn, toggleIsOn] = useToggle();
  const [clickedProject, setClickedProject] = useState("");

  const handleClick = (event) => {
    setClickedProject(event.target.id);
    console.log(typeof clickedProject);
    toggleIsOn();
  };

  function DetailsVisible() {
    return (
      <div>
        <CloseButton onClick={toggleIsOn}>X</CloseButton>
        <p>info about {clickedProject}</p>
      </div>
    );
  }

  function DetailsHidden() {
    return (
      <div>
        <OpenButton onClick={toggleIsOn}>Show details</OpenButton>
      </div>
    );
  }

  return (
    <Wrapper>
      <StyledSection>
        <SectionHeader>Junior Front-end Developer</SectionHeader>
        <Photo src={photo} alt="portrait photo of Saskia Opdam" />
        <Info>Full-stack development student at Winc Academy</Info>
      </StyledSection>

      <StyledSection>
        <SectionHeader>Current project</SectionHeader>

        <Project>
          <Figure>
            <Screenshot
              id="dashboard"
              src={dashboard}
              alt="screenshot of dashboard project"
              onClick={handleClick}
            />
            <Caption>
              <span>Dashboard</span>
              <span>Current project</span>
            </Caption>
          </Figure>
          <Details>{isOn ? <DetailsVisible /> : <DetailsHidden />}</Details>

          <LinkToSite
            href="https://unruffled-kowalevski-7b0717.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Dashboard
          </LinkToSite>
        </Project>

        <Router>
          <Link to="/projects">
            <Button>View previous projects</Button>
          </Link>
          <Switch>
            <Route path="/projects" exact component={Projects}></Route>
            {/* <Route path="/projects/:name" component={StudentRatings}></Route> */}
          </Switch>
        </Router>
        {/* <SectionHeader>Projects</SectionHeader> */}

        {/* <Project>
            <Screenshot src={portfolio} alt="screenshot of portfolio project" />
            <LinkToSite
              href="https://gifted-chandrasekhar-632f93.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Portfolio
            </LinkToSite>
          </Project> */}

        {/* <Project>
            <Screenshot src={dashboard} alt="screenshot of dashboard project" />
            <LinkToSite
              href="https://unruffled-kowalevski-7b0717.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Dashboard
            </LinkToSite>
          </Project> */}

        {/* <Project>
            <Screenshot src={playlist} alt="screenshot of playlist project" />
            <LinkToSite
              href="https://lucid-kowalevski-bfd17f.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Playlist
            </LinkToSite>
          </Project>

          <Project>
            <Screenshot src={todolist} alt="screenshot of to-do list project" />
            <LinkToSite
              href="https://objective-banach-2a5a85.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              To-do list
            </LinkToSite>
          </Project>

          <Project>
            <Screenshot
              src={moviefilter}
              alt="screenshot of movie filter project"
            />
            <LinkToSite
              href="https://practical-sinoussi-a17cb3.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Movie filter
            </LinkToSite>
          </Project>

          <Project>
            <Screenshot
              src={colourtoggle2}
              alt="screenshot of colour toggle design project"
            />
            <LinkToSite
              href="https://suspicious-johnson-c894da.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Colour toggle 2
            </LinkToSite>
          </Project>

          <Project>
            <Screenshot
              src={colourtoggle}
              alt="screenshot of colour toggle project"
            />
            <LinkToSite
              href="https://affectionate-haibt-22ebd8.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Colour toggle
            </LinkToSite>
          </Project>

          <Project>
            <Screenshot
              src={socialMediaButtons}
              alt="screenshot of social media buttons project"
            />
            <LinkToSite
              href="https://pensive-ptolemy-d5c4c6.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Social media buttons
            </LinkToSite>
          </Project>

          <Project>
            <Screenshot
              src={portfolioGrid}
              alt="screenshot of portfolio grid project"
            />
            <LinkToSite
              href="https://upbeat-goodall-bb4ec2.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Portfolio grid
            </LinkToSite>
          </Project>

          <Project>
            <Screenshot
              src={testimonial}
              alt="screenshot of testimonial project"
            />
            <LinkToSite
              href="https://amazing-cori-c6ed26.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Testimonial
            </LinkToSite>
          </Project>
          <Project>
            <Screenshot
              src={firstWebsite}
              alt="screenshot of first website project"
            />
            <LinkToSite
              href="https://vibrant-bohr-d9a9ff.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              First website
            </LinkToSite>
          </Project>
        </Projects> */}
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
      </StyledSection>
    </Wrapper>
  );
}

export default Main;
