import styled from "styled-components/macro";

const Wrapper = styled.div`
  flex-grow: 1;
  background: yellow;
`;

const Title = styled.h1`
  margin-top: 32px;
  margin-bottom: 52px;
  color: indigo;
  @media (min-width: 500px) {
    text-align: center;
  }
`;

function ContactPage() {
  return (
    <Wrapper>
      <Title>Contact</Title>
    </Wrapper>
  );
}

export default ContactPage;
