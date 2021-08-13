import PropTypes from 'prop-types';

import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Typography, Flex, Margin, RoundedButton } from 'carrier-ui';

import { useEffect, useState, useRef } from 'react';
import { auth, firestore } from 'misc/firebase';
import { GoPerson } from 'react-icons/go';
import { RiHeartFill, RiCameraFill } from 'react-icons/ri';

import { changeUserName, changeUserProfileImage } from 'controller/user';
import Picture from '../data/img1.svg';

const BackgroundCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  position: absolute;
  z-index: 2;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 50%;
  opacity: 1;
  box-shadow: 0px -20px 20px -20px #ababab;
`;

const ImageCircle = styled.div`
  width: 130px;
  height: 130px;
  z-index: 3;
  background-color: #e8e8e8;
  border-radius: 112px;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NameInput = styled.input`
  background: transparent url('img/사각형 320.png') 0% 0% no-repeat padding-box;
  border: 1px solid #b4b4b4;
  border-radius: 22px;
  opacity: 1;
  text-align: center;
  font: normal normal bold 36px/41px NanumSquare;
  letter-spacing: 0px;
  color: #000000;
  margin: 0px 10px;
`;

const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  position: relative;
  top: 75px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;
  padding-top: 75px;
  border-radius: 26px;
  opacity: 1;
  filter: blur(0px);
  width: 100%;
  text-align: center;
  box-shadow: 0px 0px 20px -5px #ababab;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eeefff 0% 0% no-repeat padding-box;
  width: 100%;
`;

const StyledButton = styled(RoundedButton)`
  padding: 18px;
  border-radius: 10px;
  font-size: 20px;
  width: ${(props) => props.width}%;
`;

const City = styled(Typography)`
  font: normal normal bold 13px/27px NanumSquare;
  letter-spacing: 0px;
  color: #c2c2c2;
  opacity: 1;
`;

const StatisticsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
`;
const Profile = ({ guides }) => {
  const history = useHistory();
  const file = useRef();
  const [uid, setUid] = useState();
  const [userName, setUserName] = useState();
  const [likeEmployees, setLikeEmployees] = useState();
  const [nameForm, setNameForm] = useState({
    uid: '',
    name: '',
  });

  auth.onAuthStateChanged((u) => {
    setUid(u?.uid);
  });

  useEffect(() => {
    firestore
      .collection('users')
      .doc(uid)
      .get()
      .then((doc) => {
        setUserName(doc.data()?.name);
        setLikeEmployees(doc.data()?.like_employees);
      });
  }, []);

  return (
    <>
      <Wrapper>
        <BackgroundCircle>
          <ImageCircle>
            <label htmlFor="picture">
              <RiCameraFill size={60} />
            </label>
            <input type="file" id="picture" ref={file} hidden />
          </ImageCircle>
        </BackgroundCircle>
        <Container>
          {' '}
          <NameInput
            type="text"
            onChange={(e) => {
              setNameForm({ ...nameForm, name: e.target.value });
            }}
            placeholder="User Name"
            value={userName}
          />
          <Margin size={40} />
          <StatisticsWrapper>
            <Flex direction="column" align="center">
              <GoPerson color="blue" />
              <Typography headline bold400>
                {guides?.length || 0}명
              </Typography>
              <City subhead>가이드 매칭</City>
            </Flex>
            <Flex direction="column" align="center">
              <RiHeartFill color="#FF77B2" />
              <Typography headline bold400>
                {likeEmployees?.length || 0}명
              </Typography>
              <City subhead>관심있는 가이드 수</City>
            </Flex>
          </StatisticsWrapper>
          <Margin size={20} />
        </Container>
      </Wrapper>
      <Margin size={100} />
      <Wrapper>
        <ButtonContainer>
          <StyledButton
            blue
            filled
            onClick={() => {
              changeUserName(uid, nameForm.name);
              if (file.current.files[0]) {
                changeUserProfileImage(
                  uid,
                  file.current.files[0] ? file.current.files[0] : Picture,
                );
              }
              history.goBack();
            }}
          >
            프로필 변경하기
          </StyledButton>
        </ButtonContainer>
      </Wrapper>
    </>
  );
};

Profile.propTypes = {
  guides: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Profile;
