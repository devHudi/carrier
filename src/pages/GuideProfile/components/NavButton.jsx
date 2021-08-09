import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';
import { useHistory } from 'react-router-dom';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { Flex, RoundedButton } from 'carrier-ui';

import { likeGuide } from 'controller/like';
import { getUser } from 'controller/user';

const ButtonWrapper = styled(Flex)`
  & > button:nth-child(1) {
    flex-grow: 1;
  }

  & > button:nth-child(2) {
    margin-left: 10px;
    flex-basis: 75px;
  }
`;

const StyledButton = styled(RoundedButton)`
  padding: 18px;
  border-radius: 10px;
  font-size: 20px;
`;

const NavButton = ({ user, guide }) => {
  const history = useHistory();
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

  return (
    <ButtonWrapper>
      {user ? (
        <>
          <StyledButton
            blue
            filled
            onClick={() => {
              history.push('/chat');
            }}
          >
            가이드에게 상담 받기
          </StyledButton>
          <StyledButton
            blue
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
    </ButtonWrapper>
  );
};

NavButton.propTypes = {
  user: PropTypes.object.isRequired,
  guide: PropTypes.object.isRequired,
};

export default NavButton;
