import styled, { keyframes } from 'styled-components';
import Profile from './Profile';

const formFadeIn = keyframes`
  100% {
    opacity: 1
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  opacity: 0;
  animation-name: ${formFadeIn};
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  margin: 0;
  padding: 0;
`;
console.log('여기능...?');
const ProfileForm = () => (
  <>
    <FormWrapper>
      <Profile />
    </FormWrapper>
  </>
);

export default ProfileForm;
