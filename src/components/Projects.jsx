// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

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

const ProjectList = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const Project = styled.div`
  background: yellow;
`;

const Screenshot = styled.img`
  width: 100%;
  max-width: 600px;
`;

const LinkToSite = styled.a`
  color: black;
  display: block;
  padding: 20px;
`;

// const ListItem = styled.li`
//   list-style: none;
//   margin-bottom: 5px;
// `;

// const StyledLink = styled(Link)`
//   color: black;
//   text-decoration: none;
//   &:hover {
//     background-color: red;
//   }
// `;

function Projects() {
  //   const [name, setName] = useState("");
  //   const [students, setStudents] = useState([]);
  //   const [isLoading, setIsLoading] = useState(true);

  //   useEffect(() => {
  //     Papa.parse(file, {
  //       download: true,
  //       header: true,
  //       // transformHeader: function (h) {
  //       //   return h.trim();
  //       // },
  //       complete: (results) => {
  //         setStudents(results.data);
  //         setIsLoading(false);
  //       },
  //     });
  //   }, []);

  // const handleClick = (event) => {
  //   setName(event.target.innerText);
  // };

  // const getList = () => {
  //   if (!isLoading) {
  //     const list = students.map(({ name }, index) => (
  //       <ListItem key={index} value={name} onClick={handleClick}>
  //         <StyledLink to={`/students/${name}`}>{name}</StyledLink>
  //       </ListItem>
  //     ));
  //     return list;
  //   }
  // };

  // const list = getList();

  //   return <ul>{list}</ul>;
  return (
    <ProjectList>
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
        <Screenshot src={testimonial} alt="screenshot of testimonial project" />
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
    </ProjectList>
  );
}

export default Projects;
