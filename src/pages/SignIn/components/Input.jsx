import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
export default function Input({ type, placeholder, icon, onChange }) {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      icon={icon}
      onChange={onChange}
    />
  );
}

const StyledInput = styled.input`
  margin-top: 12px;
  border-radius: 200px;
  width: 300px;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  background-color: #f8f8f8;
  font-size: 1rem;
  font-weight: bold;
  background-image: url(${(props) => props.icon});
  background-position: 5px center;
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
