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
  margin-bottom: 52px;
  color: indigo;
  @media (min-width: 500px) {
    text-align: center;
  }
`;

const H2 = styled.h2`
  margin-bottom: 44px;
  color: darkgray;
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

const Image = styled.img`
  width: 100%;
  margin: 0 auto 16px auto;
  @media (min-width: 500px) {
    width: 50%;
  }
`;

const ImageLink = styled.a`
  @media (min-width: 500px) {
    text-align: center;
  }
`;

const TextLink = styled.a`
  color: indigo;
  @media (min-width: 500px) {
    text-align: center;
  }
`;

function WorkPage() {
  return (
    <Wrapper>
      <Title>Work</Title>

      <H2>my own projects</H2>

      {/* <h3>portfolio</h3> */}
      <Figure>
        <CaptionTop>2. React - working on it</CaptionTop>
        <ImageLink
          href="https://gifted-chandrasekhar-632f93.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={portfolio} alt="screenshot of my own portfolio project" />
        </ImageLink>
        <TextLink
          href="https://gifted-chandrasekhar-632f93.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          see website on Netlify
        </TextLink>
        <TextLink
          href="https://github.com/saskiaopdam/React_Portfolio"
          target="_blank"
          rel="noreferrer"
        >
          view code on GitHub
        </TextLink>
      </Figure>

      {/* <h3>colourtoggle</h3> */}
      <Figure>
        <CaptionTop>1. HTML, CSS, JavaScript - june 2021</CaptionTop>
        <ImageLink
          href="https://suspicious-johnson-c894da.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={colourtoggle2}
            alt="screenshot of my own colourtoggle project"
          />
        </ImageLink>
        <TextLink
          href="https://suspicious-johnson-c894da.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          see website on Netlify
        </TextLink>
        <TextLink
          href="https://github.com/saskiaopdam/Colour_Toggle_Design"
          target="_blank"
          rel="noreferrer"
        >
          view code on GitHub
        </TextLink>
      </Figure>

      <H2>learning assignments</H2>

      {/* <h3>dashboard</h3> */}
      <Figure>
        <CaptionTop>
          8. React/Redux - just started - final front-end assignment
        </CaptionTop>
        <ImageLink
          href="https://unruffled-kowalevski-7b0717.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={dashboard} alt="screenshot of dashboard project" />
        </ImageLink>
        <TextLink
          href="https://unruffled-kowalevski-7b0717.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          see website on Netlify
        </TextLink>
        <TextLink
          href="https://github.com/saskiaopdam/Winc_Assignment_8_Student_Dashboard"
          target="_blank"
          rel="noreferrer"
        >
          view code on GitHub
        </TextLink>
      </Figure>

      {/* <h3>playlist</h3> */}
      <Figure>
        <CaptionTop>7. React/Redux - september 2021</CaptionTop>
        <ImageLink
          href="https://lucid-kowalevski-bfd17f.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={playlist} alt="screenshot of playlist project" />
        </ImageLink>
        <TextLink
          href="https://lucid-kowalevski-bfd17f.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          see website on Netlify
        </TextLink>
        <TextLink
          href="https://github.com/saskiaopdam/Winc_Assignment_7_Playlist"
          target="_blank"
          rel="noreferrer"
        >
          view code on GitHub
        </TextLink>
      </Figure>

      {/* <h3>TDD</h3> */}
      <Figure>
        <CaptionTop>6. TDD testing - august 2021</CaptionTop>
        <Image src={TDD} alt="screenshot of TDD project" />
        <TextLink
          href="https://github.com/saskiaopdam/Winc_Assignment_6_TDD_testing"
          target="_blank"
          rel="noreferrer"
        >
          view code on GitHub
        </TextLink>
      </Figure>

      {/* <h3>todolist</h3> */}
      <Figure>
        <CaptionTop>5. JavaScript - august 2021</CaptionTop>
        <ImageLink
          href="https://objective-banach-2a5a85.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={todolist} alt="screenshot of todolist project" />
        </ImageLink>
        <TextLink
          href="https://objective-banach-2a5a85.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          see website on Netlify
        </TextLink>
        <TextLink
          href="https://github.com/saskiaopdam/Winc_Academy_5_To_Do_List"
          target="_blank"
          rel="noreferrer"
        >
          view code on GitHub
        </TextLink>
      </Figure>

      {/* <h3>moviefilter</h3> */}
      <Figure>
        <CaptionTop>4. HTML, CSS, JavaScript - june 2021</CaptionTop>
        <ImageLink
          href="https://practical-sinoussi-a17cb3.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={moviefilter} alt="screenshot of moviefilter project" />
        </ImageLink>
        <TextLink
          href="https://practical-sinoussi-a17cb3.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          see website on Netlify
        </TextLink>
        <TextLink
          href="https://github.com/saskiaopdam/Winc_Assignment_4_Movie_Filter"
          target="_blank"
          rel="noreferrer"
        >
          view code on GitHub
        </TextLink>
      </Figure>

      {/* <h3>colourtoggle</h3> */}
      <Figure>
        <CaptionTop>3. HTML, CSS, JavaScript - april 2021</CaptionTop>
        <ImageLink
          href="https://affectionate-haibt-22ebd8.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={colourtoggle} alt="screenshot of colourtoggle project" />
        </ImageLink>
        <TextLink
          href="https://affectionate-haibt-22ebd8.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          see website on Netlify
        </TextLink>
        <TextLink
          href="https://github.com/saskiaopdam/Winc_Assignment_3_Colour_Toggle"
          target="_blank"
          rel="noreferrer"
        >
          view code on GitHub
        </TextLink>
      </Figure>

      {/* <h3>mediabuttons</h3> */}
      <Figure>
        <CaptionTop>2C. HTML, CSS, SCSS - april 2021 (level 3)</CaptionTop>
        <ImageLink
          href="https://pensive-ptolemy-d5c4c6.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={mediabuttons} alt="screenshot of mediabuttons project" />
        </ImageLink>
        <TextLink
          href="https://pensive-ptolemy-d5c4c6.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          see website on Netlify
        </TextLink>
        <TextLink
          href="https://github.com/saskiaopdam/Winc_Assignment_2C_Social_Media_Buttons"
          target="_blank"
          rel="noreferrer"
        >
          view code on GitHub
        </TextLink>
      </Figure>

      {/* <h3>portfoliogrid</h3> */}
      <Figure>
        <CaptionTop>2B. HTML, CSS, SCSS - april 2021 (level 2)</CaptionTop>
        <ImageLink
          href="https://upbeat-goodall-bb4ec2.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={portfoliogrid}
            alt="screenshot of portfoliogrid project"
          />
        </ImageLink>
        <TextLink
          href="https://upbeat-goodall-bb4ec2.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          see website on Netlify
        </TextLink>
        <TextLink
          href="https://github.com/saskiaopdam/Winc_Assignment_2B_Portfolio_Grid"
          target="_blank"
          rel="noreferrer"
        >
          view code on GitHub
        </TextLink>
      </Figure>

      {/* <h3>testimonial</h3> */}
      <Figure>
        <CaptionTop>2A. HTML, CSS, SCSS - april 2021 (level 1)</CaptionTop>
        <ImageLink
          href="https://amazing-cori-c6ed26.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={testimonial} alt="screenshot of testimonial project" />
        </ImageLink>
        <TextLink
          href="https://amazing-cori-c6ed26.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          see website on Netlify
        </TextLink>
        <TextLink
          href="https://github.com/saskiaopdam/Winc_Assignment_2A_Testimonial"
          target="_blank"
          rel="noreferrer"
        >
          view code on GitHub
        </TextLink>
      </Figure>

      {/* <h3>website</h3> */}
      <Figure>
        <CaptionTop>1. HTML, CSS - april 2021</CaptionTop>
        <ImageLink
          href="https://vibrant-bohr-d9a9ff.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={website} alt="screenshot of website project" />
        </ImageLink>
        <TextLink
          href="https://vibrant-bohr-d9a9ff.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          see website on Netlify
        </TextLink>
        <TextLink
          href="https://github.com/saskiaopdam/Winc_Assignment_1_Website"
          target="_blank"
          rel="noreferrer"
        >
          view code on GitHub
        </TextLink>
      </Figure>
    </Wrapper>
  );
}

export default WorkPage;
