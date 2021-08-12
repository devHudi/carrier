import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';
import { useHistory } from 'react-router-dom';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { Flex, RoundedButton, Spinner } from 'carrier-ui';

import { likeGuide } from 'controller/like';
import { getUser } from 'controller/user';
import { createChatRoom } from 'controller/chat';

const ButtonWrapper = styled(Flex)`
  & > button:nth-child(1) {
    flex-grow: 1;
  }

  & > button:nth-child(2) {
    margin-left: 10px;
    flex-basis: 75px;
  }
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #eeefff 0% 0% no-repeat padding-box;
  padding: 20px 20px;
  width: 100%;
  position: fixed;
  bottom: 0;
`;

const StyledButton = styled(RoundedButton)`
  padding: 18px;
  border-radius: 10px;
  font-size: 20px;
  width: ${(props) => props.width}%;
`;

const NavButton = ({ user, guide }) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [like, setLike] = useState();
  const [userDoc, setUserDoc] = useState({});

  useEffect(() => {
    const doWork = async () => {
      setUserDoc(await getUser(user?.uid));
    };
    doWork();
  }, [user]);

  useEffect(() => {
    setLike(_.includes(userDoc?.like_employees || [], guide?.uid));
  }, [userDoc, guide]);

  const onChatClick = async () => {
    setLoading(true);
    const chatId = await createChatRoom(user.uid, guide.uid);
    setLoading(false);
    history.push(`/chat/${chatId}`);
  };

  return (
    <>
      {loading && <Spinner />}
      <ButtonWrapper justify="center">
        <ButtonContainer>
          {user ? (
            <>
              <StyledButton
                blue
                filled
                width={70}
                onClick={async () => {
                  await onChatClick();
                }}
              >
                가이드에게 상담 받기
              </StyledButton>
              <StyledButton
                blue
                width={25}
                onClick={() => {
                  likeGuide(user.uid, guide.uid);
                  setLike(!like);
                }}
              >
                {like ? <BsHeartFill /> : <BsHeart />}
              </StyledButton>
            </>
          ) : (
            <StyledButton
              blue
              filled
              onClick={() => {
                history.push('/sign-in');
              }}
            >
              상담받으려면 로그인하기
            </StyledButton>
          )}
        </ButtonContainer>
      </ButtonWrapper>
    </>
  );
};

NavButton.propTypes = {
  user: PropTypes.object.isRequired,
  guide: PropTypes.object.isRequired,
};

export default NavButton;
