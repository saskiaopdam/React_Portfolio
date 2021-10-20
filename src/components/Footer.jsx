import styled from "styled-components/macro";

const Wrapper = styled.footer`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Copyright = styled.small`
  padding: 20px;
  display: block;
  font-size: 14px;
  color: crimson;
  @media (min-width: 400px) {
    text-align: center;
    margin-bottom: 20px;
  }
`;

const Accent = styled.span`
  color: crimson;
`;

function Footer() {
  return (
    <Wrapper>
      <Inner>
        <Copyright>© design by me</Copyright>
      </Inner>
    </Wrapper>
  );
}

export default Footer;
