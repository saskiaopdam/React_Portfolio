import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components/macro";

import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import SlideMenu from "./components/SlideMenu";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import ProjectDetails from "./components/ProjectDetails";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: whitesmoke;
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: black;
  color: white;
`;

const Main = styled.main`
  flex-grow: 1;
  display: flex;
  margin-top: 58px;
`;

const Footer = styled.footer`
  flex-shrink: 0;
  background: black;
  color: white;
`;

const Copyright = styled.small`
  font-size: 12px;
`;

const Inner = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  &.headerInner {
    padding: 0;
  }
  // background: orange;
`;

function App() {
  const [open, setOpen] = useState(false);
  console.log(`open: ${open}`);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <Wrapper>
      <Router>
        <ScrollToTop>
          <Header open={open}>
            <Inner className="headerInner">
              <Navbar open={open} setOpen={setOpen} toggleMenu={toggleMenu} />
            </Inner>
          </Header>
          <Main>
            <Inner>
              <SlideMenu
                open={open}
                setOpen={setOpen}
                toggleMenu={toggleMenu}
              />
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/work" exact component={Work} />
              <Route path="/work/:id" component={ProjectDetails} />
            </Inner>
          </Main>
          <Footer>
            <Inner>
              <Copyright>© 2021 Saskia Opdam</Copyright>
            </Inner>
          </Footer>
        </ScrollToTop>
      </Router>
    </Wrapper>
  );
}

export default App;
