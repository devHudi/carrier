import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
export default function Button({ content }) {
  return <StyledButton>{content}</StyledButton>;
}

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  width: 300px;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 200px;
  cursor: pointer;
  font-size: 17px;
`;
