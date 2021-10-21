import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { useState } from "react";

import styled from "styled-components/macro";

import About from "./About";
import Work from "./Work";
import Contact from "./Contact";

const Wrapper = styled.main`
  flex-grow: 1;
  background: pink;
  display: flex;
  position: relative;
`;

const Navigation = styled.nav`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`;
//  z-index: ${({ pageHidden }) => (!pageHidden ? "2" : "0")};
//   position: ${({ pageHidden }) => (!pageHidden ? "absolute" : "relative")};
//   bottom: ${({ pageHidden }) => (!pageHidden ? "0" : "null")};
//  height: ${({ pageHidden }) => (!pageHidden ? "auto" : "100%")};
// background: ${({ pageHidden }) => (!pageHidden ? "fuchsia" : "null")};
//   position: ${({ pageHidden }) => (!pageHidden ? "absolute" : "null")};
//   bottom: ${({ pageHidden }) => (!pageHidden ? "0" : "null")};
//   left: ${({ pageHidden }) => (!pageHidden ? "0" : "null")};
//   z-index: ${({ pageHidden }) => (!pageHidden ? "2" : "0")};
// @media (min-width: 400px) {
//     flex-direction: ${({ pageHidden }) => (!pageHidden ? "row" : "column")};
//   }
const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 20px;
  & + & {
    margin-top: 10px;
  }
  &:hover {
    background: fuchsia;
  }
  flex-grow: 1;
  display: flex;
  align-items: center;
  @media (min-width: 400px) {
    justify-content: center;
  }
`;

function Main() {
  const [pageHidden, setPageHidden] = useState(true);
  console.log(`pageHidden: ${pageHidden}`);

  const showPage = () => {
    setPageHidden(false);
  };

  const hidePage = () => {
    setPageHidden(true);
  };

  return (
    <Wrapper>
      <Router>
        <Navigation onClick={showPage}>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/work">Work</StyledLink>
          <StyledLink to="/contact">Contact</StyledLink>
        </Navigation>

        <Switch>
          <Route
            exact
            path="/about"
            render={(props) => (
              <About
                {...props}
                pageHidden={pageHidden}
                onPageClick={hidePage}
              />
            )}
          />
          <Route
            exact
            path="/work"
            render={(props) => (
              <Work {...props} pageHidden={pageHidden} onPageClick={hidePage} />
            )}
          />
          <Route
            exact
            path="/contact"
            render={(props) => (
              <Contact
                {...props}
                pageHidden={pageHidden}
                onPageClick={hidePage}
              />
            )}
          />
        </Switch>
      </Router>

      {/*        
       
   
      <StyledSection>
        <SectionHeader>Projects</SectionHeader>
        <Projects />
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
      </StyledSection> */}
    </Wrapper>
  );
}

export default Main;
