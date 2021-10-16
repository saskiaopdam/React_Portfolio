import styled from "styled-components/macro";

const Wrapper = styled.footer`
  background-color: cadetblue;
  color: white;
  padding: 30px;
  flex-shrink: 0;
`;

const Copyright = styled.small`
  display: block;
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
