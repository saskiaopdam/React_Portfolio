import styled from "styled-components/macro";

const Wrapper = styled.div`
  flex-grow: 1;
  color: white;
`;

function Something() {
  return (
    <Wrapper>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, hic
      blanditiis temporibus eligendi fugiat illo necessitatibus sit quos sunt?
      Dignissimos accusamus culpa nemo molestias asperiores alias officiis,
      ratione aliquid. Quibusdam.
    </Wrapper>
  );
}

export default Something;
