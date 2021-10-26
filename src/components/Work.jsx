import styled from "styled-components/macro";

const Wrapper = styled.section`
  width: 100%;
  padding: 10px;
`;

const SectionHeader = styled.h3`
  font-size: 20px;
  font-weight: 400;
  color: white;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  font-size: 15px;
  line-height: 1.5;
  & + & {
    margin-top: 20px;
  }
`;

function Work() {
  return (
    <Wrapper>
      <SectionHeader>Work</SectionHeader>{" "}
      <Paragraph>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
        harum, eveniet totam possimus sunt doloremque debitis, minus tenetur
        quia earum, excepturi inventore nulla omnis sed facere soluta animi.
        Exercitationem, ipsam?
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
        harum, eveniet totam possimus sunt doloremque debitis, minus tenetur
        quia earum, excepturi inventore nulla omnis sed facere soluta animi.
        Exercitationem, ipsam?
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
        harum, eveniet totam possimus sunt doloremque debitis, minus tenetur
        quia earum, excepturi inventore nulla omnis sed facere soluta animi.
        Exercitationem, ipsam?
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
        harum, eveniet totam possimus sunt doloremque debitis, minus tenetur
        quia earum, excepturi inventore nulla omnis sed facere soluta animi.
        Exercitationem, ipsam?
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
        harum, eveniet totam possimus sunt doloremque debitis, minus tenetur
        quia earum, excepturi inventore nulla omnis sed facere soluta animi.
        Exercitationem, ipsam?
      </Paragraph>
    </Wrapper>
  );
}

export default Work;
