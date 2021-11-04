import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components/macro";

//coding-projects
import colourtoggle2 from "../assets/coding-projects/colour-toggle-2.png";
import portfolio from "../assets/coding-projects/portfolio.png";

//winc-projects
import colourtoggle from "../assets/winc-projects/colour-toggle.png";
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
  margin-bottom: 52px;
  color: darkgray;
  @media (min-width: 500px) {
    text-align: center;
  }
`;

const H3 = styled.h3`
  margin-bottom: 18px;
  font-weight: 500;
  @media (min-width: 500px) {
    text-align: center;
  }
`;

const ImageAnchorLink = styled.a`
  text-decoration: none;
  background: white;
  color: black;
  padding-top: 16px;
  margin-bottom: 64px;
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

const ImageAction = styled.p`
  font-size: 18px;
  padding: 16px 0;
  @media (min-width: 500px) {
    text-align: center;
  }
`;

const Figure = styled.figure`
  // background: powderblue;
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
`;

const CaptionTop = styled.figcaption`
  font-weight: bold;
  margin-bottom: 16px;
  @media (min-width: 500px) {
    text-align: center;
  }
`;
const CaptionBottom = styled.figcaption`
  margin-bottom: 16px;
  @media (min-width: 500px) {
    text-align: center;
  }
`;

const Anchor = styled.a`
  &.textlink {
    color: indigo;
  }
  @media (min-width: 500px) {
    text-align: center;
  }
`;

function Work() {
  return (
    <Wrapper>
      <Title>Work</Title>
      <H2>my own projects</H2>

      <Link to="/work/dashboard">dashboard</Link>
      <Link to="/work/portfolio">portfolio</Link>
      <Link to="/work/toggle">toggle</Link>

      {/* <h3>portfolio</h3> */}
      <H3>react - recent</H3>

      <ImageAnchorLink
        href="https://github.com/saskiaopdam/React_Portfolio"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src={portfolio}
          alt="screenshot of my own colourtoggle project"
        />
        <ImageAction>see code on GitHub</ImageAction>
      </ImageAnchorLink>

      <H3>HTML, CSS, JavaScript - june 2021</H3>

      <ImageAnchorLink
        href="https://suspicious-johnson-c894da.netlify.app"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src={colourtoggle2}
          alt="screenshot of my own colourtoggle project"
        />
        <ImageAction>see website online</ImageAction>
      </ImageAnchorLink>

      <H2>Winc Academy exam projects</H2>

      {/* <h3>dashboard</h3> */}
      <H3>8. React/Redux - just started - final front-end assignment</H3>

      <ImageAnchorLink
        href="https://unruffled-kowalevski-7b0717.netlify.app"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={dashboard} alt="screenshot of dashboard project" />
        <ImageAction>see website online</ImageAction>
      </ImageAnchorLink>

      {/* <h3>playlist</h3> */}
      <H3>7. React/Redux - september 2021</H3>

      <ImageAnchorLink
        href="https://lucid-kowalevski-bfd17f.netlify.app"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={playlist} alt="screenshot of playlist project" />
        <ImageAction>see website online</ImageAction>
      </ImageAnchorLink>

      {/* <h3>TDD</h3> */}

      <H3>6. TDD testing - august 2021</H3>

      <ImageAnchorLink
        href="https://github.com/saskiaopdam/Winc_Assignment_6_TDD_testing"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={TDD} alt="screenshot of TDD project" />
        <ImageAction>view code on GitHub</ImageAction>
      </ImageAnchorLink>

      {/* <h3>todolist</h3> */}
      <H3>5. JavaScript - august 2021</H3>

      <ImageAnchorLink
        href="https://objective-banach-2a5a85.netlify.app"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={todolist} alt="screenshot of todolist project" />
        <ImageAction>see website online</ImageAction>
      </ImageAnchorLink>

      {/* <h3>moviefilter</h3> */}
      <H3>4. HTML, CSS, JavaScript - june 2021</H3>

      <ImageAnchorLink
        href="https://practical-sinoussi-a17cb3.netlify.app"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={moviefilter} alt="screenshot of moviefilter project" />
        <ImageAction>see website online</ImageAction>
      </ImageAnchorLink>

      {/* <h3>colourtoggle</h3> */}
      <H3>3. HTML, CSS, JavaScript - april 2021</H3>

      <ImageAnchorLink
        href="https://affectionate-haibt-22ebd8.netlify.app"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={colourtoggle} alt="screenshot of colourtoggle project" />
        <ImageAction>see website online</ImageAction>
      </ImageAnchorLink>

      {/* <h3>mediabuttons</h3> */}
      <H3>2C. HTML, CSS, SCSS - april 2021 (level 3)</H3>

      <ImageAnchorLink
        href="https://pensive-ptolemy-d5c4c6.netlify.app"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={mediabuttons} alt="screenshot of mediabuttons project" />
        <ImageAction>see website online</ImageAction>
      </ImageAnchorLink>

      {/* <h3>portfoliogrid</h3> */}
      <H3>2B. HTML, CSS, SCSS - april 2021 (level 2)</H3>

      <ImageAnchorLink
        href="https://upbeat-goodall-bb4ec2.netlify.app"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={portfoliogrid} alt="screenshot of portfoliogrid project" />
        <ImageAction>see website online</ImageAction>
      </ImageAnchorLink>

      {/* <h3>testimonial</h3> */}
      <H3>2A. HTML, CSS, SCSS - april 2021 (level 1)</H3>

      <ImageAnchorLink
        href="https://amazing-cori-c6ed26.netlify.app"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={testimonial} alt="screenshot of testimonial project" />
        <ImageAction>see website online</ImageAction>
      </ImageAnchorLink>

      {/* <h3>website</h3> */}
      <H3>1. HTML, CSS - april 2021</H3>

      <ImageAnchorLink
        href="https://vibrant-bohr-d9a9ff.netlify.app"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={website} alt="screenshot of website project" />
        <ImageAction>see website online</ImageAction>
      </ImageAnchorLink>
    </Wrapper>
  );
}

export default Work;
