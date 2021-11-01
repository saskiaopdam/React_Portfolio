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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: black;
  // background: ${({ open }) => (open ? "hotpink" : "black")};
  color: white;
  font-size: 12px;
  // box-shadow: 0px 0 5px rgba(0, 0, 0, 0.8);
  // z-index: 1;
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
  font-size: 12px;
  // box-shadow: 0 -0px 5px rgba(0, 0, 0, 0.8);
`;

const Inner = styled.div`
  flex-grow: 1;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  &.headerInner {
    padding: 10px;
  }
  // position: relative;
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
            <Inner className="mainInner">
              <SlideMenu
                open={open}
                setOpen={setOpen}
                toggleMenu={toggleMenu}
              />
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/work" component={Work} />
            </Inner>
          </Main>
          <Footer>
            <Inner>© 2021 Saskia Opdam | build with React</Inner>
          </Footer>
        </ScrollToTop>
      </Router>
    </Wrapper>
  );
}

export default App;
