import styled from "styled-components/macro";

import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Role = styled.h2`
  font-size: 18px;
  font-weight: 500;
  block-size: fit-content;
`;

const Social = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const AnchorLink = styled.a`
  color: black;
  margin-left: 18px;
  &:hover {
    opacity: 0.5;
  }
`;

const Icon = styled.div`
  width: 21px;
  height: 21px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 18px;
`;

function FooterContent() {
  return (
    <Wrapper>
      <Role>Junior front-end developer</Role>
      <Social>
        <AnchorLink
          href="https://www.linkedin.com/in/saskiaopdam/"
          target="_blank"
          rel="noreferrer"
        >
          <Icon>
            <AiOutlineLinkedin />
          </Icon>
        </AnchorLink>

        <AnchorLink
          href="https://github.com/saskiaopdam"
          target="_blank"
          rel="noreferrer"
        >
          <Icon>
            <AiOutlineGithub />
          </Icon>
        </AnchorLink>
      </Social>
    </Wrapper>
  );
}

export default FooterContent;
