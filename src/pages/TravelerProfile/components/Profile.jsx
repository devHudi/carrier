import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Typography, Flex, Margin } from 'carrier-ui';

import { useEffect, useState } from 'react';
import { auth, firestore } from 'misc/firebase';
import { GoPerson } from 'react-icons/go';
import { RiHeartFill } from 'react-icons/ri';

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
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  background-color: #cccccc;
  border-radius: 112px;
  opacity: 1;
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
  const [uid, setUid] = useState();
  const [userName, setUserName] = useState();
  const [likeEmployees, setLikeEmployees] = useState();
  const [profileImage, setProfileImage] = useState();
  auth.onAuthStateChanged((u) => {
    setUid(u.uid);
  });

  useEffect(() => {
    firestore
      .collection('users')
      .doc(uid)
      .get()
      .then((doc) => {
        setUserName(doc.data()?.name);
        console.log(userName);
        setLikeEmployees(doc.data()?.like_employees);
        setProfileImage(doc.data()?.profile_image);
      });
  }, []);

  return (
    <Wrapper>
      <BackgroundCircle>
        <ImageCircle src={profileImage} />
      </BackgroundCircle>
      <Container>
        <Typography headline>{userName}</Typography>
        <City subhead bold700>
          여행객
        </City>
        <Margin size={20} />
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
  );
};

Profile.propTypes = {
  guides: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Profile;
