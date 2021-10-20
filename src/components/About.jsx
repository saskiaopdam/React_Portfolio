import styled from "styled-components/macro";

const Wrapper = styled.section`
  width: 100%;
  padding: 20px;
`;

function About({ onPageClick }) {
  return <Wrapper onClick={onPageClick}>About</Wrapper>;
}

export default About;
