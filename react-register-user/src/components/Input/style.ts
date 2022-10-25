import styled from "styled-components"

export const StyledInput = styled.input`
  background-color: ${(props) =>
    props.disabled ? "lightcyan" : "var(--charcoal)"};
  outline: none;

  border-radius: 5px;

  border: ${(props) =>
    props.disabled ? "2px solid darkblue" : "2px solid transparent"};

  border-bottom: ${(props) =>
    props.disabled ? "" : "2px solid var(--dark-jungle-green)"};

  height: 2rem;
  padding-left: 10px;
  font-size: 20px;

  ::placeholder {
    color: var(--eerie-black);
  }
`
