import styled from "styled-components/macro";

const Wrapper = styled.section`
  width: 100%;
  padding: 20px;
`;

function Contact({ onPageClick }) {
  return (
    <Wrapper onClick={onPageClick}>
      <h2>Contact</h2>
    </Wrapper>
  );
}

export default Contact;
