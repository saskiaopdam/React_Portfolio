import { Link } from "react-router-dom";

import styled from "styled-components/macro";

const Wrapper = styled.div`
  padding: 10px;
`;

const HomeLink = styled(Link)`
  text-decoration: none;
`;

const MyName = styled.h1`
  color: white;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 6px;
  @media (min-width: 500px) {
    color: hotpink;
  }
`;

const MyRole = styled.h2`
  color: white;
  font-size: 16px;
  font-weight: 400;
  font-style: italic;
  @media (min-width: 500px) {
    color: hotpink;
  }
`;

function Brand() {
  return (
    <Wrapper>
      <HomeLink to="/">
        <MyName>Saskia Opdam</MyName>
        <MyRole>junior front-end developer</MyRole>
      </HomeLink>
    </Wrapper>
  );
}

export default Brand;
