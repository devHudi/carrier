import styled from 'styled-components';
import Profile from './Profile';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const ProfileForm = () => (
  <>
    <FormWrapper>
      <Profile />
    </FormWrapper>
  </>
);

export default ProfileForm;
