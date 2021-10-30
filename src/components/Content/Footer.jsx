import styled from "styled-components/macro";

const Wrapper = styled.footer`
  flex-shrink: 0;
  padding: 20px;
`;

const Copyright = styled.small`
  display: block;
  font-size: 12px;
  color: indigo;
`;

function Footer() {
  return (
    <Wrapper>
      <Copyright>© design by me</Copyright>
    </Wrapper>
  );
}

export default Footer;
