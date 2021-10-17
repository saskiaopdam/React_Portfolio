import styled from "styled-components/macro";

import photo from "./_DSC3220_500x750.jpg";
import colourtoggle from "../assets/colourtoggle.png";
import colourtoggle2 from "../assets/colourtoggle2.png";
import firstWebsite from "../assets/first-website.png";
import moviefilter from "../assets/moviefilter.png";
import playlist from "../assets/playlist.png";
import portfolio from "../assets/portfolio.png";
import portfolioGrid from "../assets/portfolio-grid.png";
import socialMediaButtons from "../assets/social-media-buttons.png";
import dashboard from "../assets/dashboard.png";
import testimonial from "../assets/testimonial.png";
import todolist from "../assets/todolist.png";

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

const Projects = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  background: black;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const Project = styled.div`
  background: yellow;
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

const Screenshot = styled.img`
  width: 100%;
  max-width: 600px;
`;

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

function Main() {
  return (
    <Wrapper>
      <StyledSection>
        <SectionHeader>Junior Front-end Developer</SectionHeader>
        <Photo src={photo} alt="portrait photo of Saskia Opdam" />
        <Info>Full-stack development student at Winc Academy</Info>
      </StyledSection>

      <StyledSection>
        <SectionHeader>Projects</SectionHeader>
        <Projects>
          <Project>
            <Screenshot src={portfolio} alt="screenshot of portfolio project" />
            <LinkToSite
              href="https://gifted-chandrasekhar-632f93.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Portfolio
            </LinkToSite>
          </Project>

          <Project>
            <Screenshot src={dashboard} alt="screenshot of dashboard project" />
            <LinkToSite
              href="https://unruffled-kowalevski-7b0717.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Dashboard
            </LinkToSite>
          </Project>

          <Project>
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
        </Projects>
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
