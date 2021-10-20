import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { useState } from "react";

import styled from "styled-components/macro";

import About from "./About";
import Work from "./Work";
import Contact from "./Contact";

// const StyledSection = styled.section`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   border-bottom: 1px solid #eee;
// `;

// const SectionHeader = styled.h2`
//   text-align: center;
//   margin: 30px;
//   color: cadetblue;
// `;

// const Photo = styled.img`
//   width: 50%;
//   max-width: 350px;
// `;

// const Info = styled.h3`
//   text-align: center;
//   font-size: 18px;
//   line-height: 1.5;
//   margin: 30px;
//   opacity: 0.5;
// `;

// const List = styled.ul`
//   list-style-type: none;
//   margin-bottom: 20px;
// `;

// const ListItem = styled.MenuItem`
//   margin-bottom: 20px;
//   text-align: center;
// `;

// const A = styled.a`
//   color: black;
//   text-decoration: none;
// `;

const Wrapper = styled.main`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: stretch;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: stretch;
  position: relative;
`;

const Navigation = styled.nav`
  position: absolute;
  z-index: ${({ closed }) => (closed ? "-1" : "1")};
  width: 100%;
  height: 100%;
  display: flex;
  padding: 20px;
`;

const Menu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled.li`
  list-style: none;
  flex-grow: 1;
  display: flex;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 20px;
  flex-grow: 1;
  align-self: center;
  @media (min-width: 400px) {
    text-align: center;
  }
`;

function Main() {
  const [navClosed, setNavClosed] = useState(false);
  const [pageClosed, setPageClosed] = useState(true);
  console.log(`navClosed: ${navClosed}`);
  console.log(`pageClosed: ${pageClosed}`);

  const handleNavClick = (event) => {
    event.preventDefault();
    setNavClosed(true);
    setPageClosed(false);
  };

  const handlePageClick = (event) => {
    event.preventDefault();
    setNavClosed(false);
    setPageClosed(true);
  };

  return (
    <Wrapper>
      <Inner>
        <Router>
          <Navigation closed={navClosed}>
            <Menu>
              <MenuItem onClick={handleNavClick}>
                <StyledLink to="/about">About</StyledLink>
              </MenuItem>
              <MenuItem onClick={handleNavClick}>
                <StyledLink to="/work">Work</StyledLink>
              </MenuItem>
              <MenuItem onClick={handleNavClick}>
                <StyledLink to="/contact">Contact</StyledLink>
              </MenuItem>
            </Menu>
          </Navigation>
          <Switch>
            <Route
              exact
              path="/about"
              render={(props) => (
                <About
                  {...props}
                  navClosed={navClosed}
                  pageClosed={pageClosed}
                  onPageClick={handlePageClick}
                />
              )}
            />
            <Route
              exact
              path="/work"
              render={(props) => (
                <Work
                  {...props}
                  navClosed={navClosed}
                  pageClosed={pageClosed}
                  onPageClick={handlePageClick}
                />
              )}
            />
            <Route
              exact
              path="/contact"
              render={(props) => (
                <Contact
                  {...props}
                  navClosed={navClosed}
                  pageClosed={pageClosed}
                  onPageClick={handlePageClick}
                />
              )}
            />
          </Switch>
        </Router>
      </Inner>
      {/* <StyledSection>
        <SectionHeader>Intro</SectionHeader>
        <Photo src={photo} alt="portrait photo of Saskia Opdam" />
        <Info>Full-stack development student at Winc Academy</Info>
      </StyledSection>

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
