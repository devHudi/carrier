import { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { RoundedButton } from 'carrier-ui';
import { likeGuide } from 'controller/like';
import HeartIcon from '../data/Icon ionic-ios-heart.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const Container = styled.div`
  background: #eeefff 0% 0% no-repeat padding-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  border-radius: 26px;
  opacity: 1;
  filter: blur(px);
  width: 100%;
  position: fixed;
  bottom: 0;
`;

const Image = styled.img`
  width: 24px;
  height: 23px;
`;

const StyledButton = styled(RoundedButton)`
  border-radius: 10px;
  font-size: 20px;
`;

const NavButton = () => {
  const history = useHistory();
  const [likeForm, setLikeForm] = useState({
    employerUid: '',
    employeeUid: '',
  });

  return (
    <div>
      <Wrapper>
        <Container>
          <StyledButton
            blue
            filled
            width={300}
            onClick={() => {
              history.push('/chat');
            }}
          >
            가이드에게 상담 받기
          </StyledButton>
          <StyledButton
            blue
            width={80}
            height={55}
            onClick={() => {
              setLikeForm('', '');
              likeGuide(likeForm);
            }}
          >
            <Image src={HeartIcon} />
          </StyledButton>
        </Container>
      </Wrapper>
    </div>
  );
};

export default NavButton;
