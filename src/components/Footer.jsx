import styled from "styled-components/macro";

const Wrapper = styled.footer`
  flex-shrink: 0;
  padding: 20px;
  @media (min-width: 400px) {
    padding: 25px 20px;
  }
`;

const Copyright = styled.small`
  display: block;
  font-size: 14px;
  color: crimson;
  @media (min-width: 400px) {
    text-align: center;
  }
`;

function Footer() {
  return (
    <Wrapper>
      <Copyright>© design by me</Copyright>
    </Wrapper>
  );
}

export default Footer;
