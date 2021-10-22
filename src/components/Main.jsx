import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import styled from "styled-components/macro";

import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";

const Wrapper = styled.main`
  flex-grow: 1;
  background: pink;
  display: flex;
  flex-direction: column;
`;

const Navigation = styled.nav`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  @media (min-width: 400px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Inner = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: yellow;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 16px;
  & + & {
    margin-top: 10px;
  }
  &:hover {
    background: fuchsia;
  }
  flex-grow: 1;
  @media (min-width: 400px) {
    display: flex;
    justify-content: center;
    & + & {
      margin-top: 0;
    }
  }
`;

const Content = styled.div``;

function Main() {
  return (
    <Wrapper>
      <Router>
        {" "}
        <Inner>
          <Navigation>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/about">About</StyledLink>
            <StyledLink to="/work">Work</StyledLink>
            <StyledLink to="/contact">Contact</StyledLink>
          </Navigation>
        </Inner>
        <Content>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
        </Content>
      </Router>
    </Wrapper>
  );
}

export default Main;
