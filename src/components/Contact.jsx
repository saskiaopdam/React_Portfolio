import styled from "styled-components/macro";

const Wrapper = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${({ hidden }) => (hidden ? "-1" : "1")};
  padding: 20px;
  width: 100%;
  height: 100%;
  background: white;
`;

function Contact({ pageHidden, onPageClick }) {
  return (
    <Wrapper onClick={onPageClick} hidden={pageHidden}>
      <h2>Contact</h2>
    </Wrapper>
  );
}

export default Contact;
