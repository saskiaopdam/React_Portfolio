import styled from "styled-components/macro";

import image from "./_DSC3220_500x750.jpg";

// import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
// import {
//   Timeline,
//   Events,
//   UrlButton,
//   ImageEvent,
//   TextEvent,
//   YouTubeEvent,
// } from "@merc/react-timeline";
import {
  Timeline,
  Container,
  YearContent,
  BodyContent,
  Section,
  Description,
} from "vertical-timeline-component-react";

const customTheme = {
  yearColor: "#405b73",
  lineColor: "#d0cdc4",
  dotColor: "#262626",
  borderDotColor: "#d0cdc4",
  titleColor: "#405b73",
  subtitleColor: "#bf9765",
  textColor: "#262626",
};

const Wrapper = styled.main`
  padding: 40px;
  flex-grow: 1;
`;

const SectionA = styled.section`
  & + & {
    margin-top: 60px;
  }
`;

const SectionHeader = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;

const Figure = styled.figure`
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;
`;

const Paragraph = styled.p`
  text-align: center;
  font-size: 15px;
`;

const List = styled.ul`
  list-style-type: none;
`;

const ListItem = styled.li`
  margin-bottom: 15px;
  text-align: center;
`;

const A = styled.a`
  color: black;
  text-decoration: none;
`;

function Main() {
  return (
    <Wrapper>
      <SectionA>
        <Figure>
          <Image src={image} alt="image of Saskia Opdam" />
        </Figure>
      </SectionA>

      <SectionA>
        <SectionHeader>About</SectionHeader>
        <Paragraph>
          I'm A full-stack development student at Winc Academy.
          <br /> My current project is the student dashboard (react app).
          <br /> This is the final front-end development assignment.
        </Paragraph>
      </SectionA>

      <SectionA>
        <SectionHeader>Portfolio</SectionHeader>
        <Timeline theme={customTheme} dateFormat="ll">
          <Container>
            <YearContent startDate="2020/07/01" currentYear />
            <BodyContent>
              <Section title="Title">
                <Description variant="subtitle" text="Subtitle" />
                <Description text="Description" />
                <Description text="Another description" />
              </Section>

              <Section title="Another title">
                <Description text="Description" />
                <Description text="Another description" />
              </Section>
            </BodyContent>
          </Container>
        </Timeline>
        {/* @merc/react-timeline */}
        {/* <Timeline>
          <Events>
            <TextEvent date="1/1/19" text="**Markdown** is *supported*" />

            <TextEvent
              date="1/2/19"
              text="Events alternate by default (given enough space in the browser)"
            />

            <ImageEvent
              date="4/13/19"
              text="You can embed images..."
              src="https://res.cloudinary.com/dovoq8jou/image/upload/v1564772194/jellyfish.jpg"
              alt="jellyfish swimming"
              credit="Photo by [@tavi004](https://unsplash.com/@tavi004)"
            >
              <div>
                <UrlButton href="https://unsplash.com/search/photos/undersea">
                  View more undersea photos
                </UrlButton>
              </div>
            </ImageEvent>

            <YouTubeEvent
              date="6/18/19"
              id="6UnRHtwHGSE"
              name="General Tso's Chicken recipe"
              text="... and YouTube videos!"
            />
          </Events>
        </Timeline> */}
        {/* vertical-timeline-component-for-react */}
        {/* <Timeline lineColor={"#ddd"}>
          <TimelineItem
            key="001"
            dateText="11/2010 – Present"
            style={{ color: "#e86971" }}
          >
            <h3>Title, Company</h3>
            <h4>Subtitle</h4>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex
              nulla exercitation. Veniam velit adipisicing anim excepteur
              nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla
              officia irure reprehenderit laborum fugiat dolore in elit.
              Adipisicing do qui duis Lorem est.
            </p>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex
              nulla exercitation. Veniam velit adipisicing anim excepteur
              nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla
              officia irure reprehenderit laborum fugiat dolore in elit.
              Adipisicing do qui duis Lorem est.
            </p>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex
              nulla exercitation. Veniam velit adipisicing anim excepteur
              nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla
              officia irure reprehenderit laborum fugiat dolore in elit.
              Adipisicing do qui duis Lorem est.
            </p>
          </TimelineItem>
          <TimelineItem
            key="002"
            dateText="04/2009 – 11/2010"
            dateInnerStyle={{ background: "#61b8ff", color: "#000" }}
            bodyContainerStyle={{
              background: "#ddd",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
            }}
          >
            <h3 style={{ color: "#61b8ff" }}>Title, Company</h3>
            <h4 style={{ color: "#61b8ff" }}>Subtitle</h4>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex
              nulla exercitation. Veniam velit adipisicing anim excepteur
              nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla
              officia irure reprehenderit laborum fugiat dolore in elit.
              Adipisicing do qui duis Lorem est.
            </p>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex
              nulla exercitation. Veniam velit adipisicing anim excepteur
              nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla
              officia irure reprehenderit laborum fugiat dolore in elit.
              Adipisicing do qui duis Lorem est.
            </p>
          </TimelineItem>
          <TimelineItem
            key="003"
            dateComponent={
              <div
                style={{
                  display: "block",
                  float: "left",
                  padding: "10px",
                  background: "rgb(150, 150, 150)",
                  color: "#fff",
                }}
              >
                11/2008 – 04/2009
              </div>
            }
          >
            <h3>Title, Company</h3>
            <h4>Subtitle</h4>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex
              nulla exercitation. Veniam velit adipisicing anim excepteur
              nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla
              officia irure reprehenderit laborum fugiat dolore in elit.
              Adipisicing do qui duis Lorem est.
            </p>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex
              nulla exercitation. Veniam velit adipisicing anim excepteur
              nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla
              officia irure reprehenderit laborum fugiat dolore in elit.
              Adipisicing do qui duis Lorem est.
            </p>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex
              nulla exercitation. Veniam velit adipisicing anim excepteur
              nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla
              officia irure reprehenderit laborum fugiat dolore in elit.
              Adipisicing do qui duis Lorem est.
            </p>
          </TimelineItem>
          <TimelineItem
            key="004"
            dateText="08/2008 – 11/2008"
            dateInnerStyle={{ background: "#76bb7f" }}
          >
            <h3>Title, Company</h3>
            <h4>Subtitle</h4>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex
              nulla exercitation. Veniam velit adipisicing anim excepteur
              nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla
              officia irure reprehenderit laborum fugiat dolore in elit.
              Adipisicing do qui duis Lorem est.
            </p>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex
              nulla exercitation. Veniam velit adipisicing anim excepteur
              nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla
              officia irure reprehenderit laborum fugiat dolore in elit.
              Adipisicing do qui duis Lorem est.
            </p>
          </TimelineItem>
        </Timeline> */}

        <List>
          <ListItem>
            <A
              href="https://unruffled-kowalevski-7b0717.netlify.app"
              target="_blank"
            >
              Student dashboard (current)
            </A>
          </ListItem>
          <ListItem>
            <A
              href="https://lucid-kowalevski-bfd17f.netlify.app"
              target="_blank"
            >
              Playlist
            </A>
          </ListItem>
          <ListItem>
            <A href="https://loving-banach-713eaf.netlify.app" target="_blank">
              To do list
            </A>
          </ListItem>
          <ListItem>
            <A
              href="https://practical-sinoussi-a17cb3.netlify.app"
              target="_blank"
            >
              Movie search
            </A>
          </ListItem>
          <ListItem>
            <A
              href="https://suspicious-johnson-c894da.netlify.app"
              target="_blank"
            >
              Colour toggle *
            </A>
          </ListItem>
          <ListItem>
            <A
              href="https://affectionate-haibt-22ebd8.netlify.app"
              target="_blank"
            >
              Colour toggle
            </A>
          </ListItem>
          <ListItem>
            <A
              href="https://pensive-ptolemy-d5c4c6.netlify.app"
              target="_blank"
            >
              Social media buttons
            </A>
          </ListItem>
          <ListItem>
            <A href="https://upbeat-goodall-bb4ec2.netlify.app" target="_blank">
              Portfolio grid
            </A>
          </ListItem>
          <ListItem>
            <A href="https://amazing-cori-c6ed26.netlify.app" target="_blank">
              Testimonial
            </A>
          </ListItem>
          <ListItem>
            <A href="https://vibrant-bohr-d9a9ff.netlify.app" target="_blank">
              First website
            </A>
          </ListItem>
        </List>
        <Paragraph>* My own design</Paragraph>
      </SectionA>

      <SectionA>
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
      </SectionA>
    </Wrapper>
  );
}

export default Main;
