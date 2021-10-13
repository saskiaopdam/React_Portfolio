import styled from "styled-components/macro";

const Wrapper = styled.footer`
  background-color: darkgray;
  color: white;
  padding: 30px;
  display: flex;
  justify-content: center;
  flex-shrink: 0;
`;

const Copyright = styled.small`
  text-align: center;
`;

function Footer() {
  return (
    <Wrapper>
      <Copyright>© 2021 Saskia Opdam</Copyright>
    </Wrapper>
  );
}

export default Footer;
