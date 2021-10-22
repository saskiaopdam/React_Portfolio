import styled from "styled-components/macro";

const Wrapper = styled.section`
  padding: 20px;
  width: 100%;
  background: white;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: yellow;
`;

const Heading = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
  @media (min-width: 400px) {
    text-align: center;
  }
`;

function Contact({ pageHidden, onPageClick }) {
  return (
    <Wrapper onClick={onPageClick} hidden={pageHidden}>
      <Inner>
        <Heading>Contact</Heading>
      </Inner>
    </Wrapper>
  );
}

export default Contact;
