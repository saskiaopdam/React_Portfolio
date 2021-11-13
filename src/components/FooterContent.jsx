import styled from "styled-components/macro";

import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const AnchorLink = styled.a`
  color: black;
  & + & {
    margin-left: 18px;
  }
  &:hover {
    opacity: 0.5;
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  font-size: 18px;
`;

function FooterContent() {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}

export default FooterContent;
