import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
export default function Input({ type, placeholder }) {
  return <StyledInput type={type} placeholder={placeholder} />;
}

const StyledInput = styled.input`
  border-radius: 200px;
  width: 280px;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  background-color: #f8f8f8;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem ${(props) => props.theme.colors.primary};
    border-radius: 2rem;
  }
  &::placeholder {
    color: #aaa;
    font-weight: 400;
    font-size: 14px;
  }
`;
