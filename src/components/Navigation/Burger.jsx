import styled from "styled-components/macro";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Wrapper = styled.button`
  flex-grow: 1;
  width: 100%;
  display: flex;
  align-items: center;
  background: transparent;
  color: white;
  border: none;
  font-size: 24px;
  padding: 24px 0 0 0;

  @media (min-width: 500px) {
    display: none;
  }
`;

const BurgerLabel = styled.span`
  font-size: 16px;
  margin-left: 8px;
`;

function Burger({ open, setOpen, toggleMenu }) {
  return (
    <Wrapper
      open={open}
      setOpen={setOpen}
      onClick={toggleMenu}
      aria-label={open ? "close the menu" : "open the menu"}
    >
      {open ? <AiOutlineClose /> : <AiOutlineMenu />}
      <BurgerLabel>{open ? "sluit" : "menu"}</BurgerLabel>
    </Wrapper>
  );
}

export default Burger;
