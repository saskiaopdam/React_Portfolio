import styled from "styled-components/macro";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  return (
    <Wrapper>
      <Header />
      <Main />
      <Footer />
    </Wrapper>
  );
}

export default App;
