import styled from 'styled-components';
import { Typography, Flex, Margin } from 'carrier-ui';

import { useEffect, useState } from 'react';
import { auth, firestore } from 'misc/firebase';
import { GoPerson } from 'react-icons/go';
import { RiHeartFill } from 'react-icons/ri';
import Picture from '../data/img1.png';

const BackgroundCircle = styled.div`
  width: 150px;
  height: 150px;
  position: absolute;
  z-index: 2;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 112px;
  opacity: 1;
  box-shadow: 0px -20px 20px -20px #ababab;
`;

const ImageCircle = styled.div`
  width: 130px;
  height: 130px;
  position: absolute;
  z-index: 3;
  top: 15px;
  background: transparent url(${Picture}) 0% 0% no-repeat padding-box;
  background-size: cover;
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
const Profile = () => {
  const [user, setUser] = useState();
  const [uid, setUid] = useState();
  const [userName, setUserName] = useState();
  const [likeEmployees, setLikeEmployees] = useState();
  auth.onAuthStateChanged((u) => {
    setUser(u);
    setUid(u.uid);
  });
  console.log(user);

  useEffect(() => {
    firestore
      .collection('users')
      .doc(uid)
      .get()
      .then((doc) => {
        setUserName(doc.data()?.name);
        setLikeEmployees(doc.data()?.like_employees);
      });
  }, [uid]);

  return (
    <div>
      <Wrapper>
        <BackgroundCircle />
        <ImageCircle />
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
                0명
              </Typography>
              <City subhead>가이드 매칭</City>
            </Flex>
            <Flex direction="column" align="center">
              <RiHeartFill color="#FF77B2" />
              <Typography headline bold400>
                {likeEmployees?.length}
              </Typography>
              <City subhead>관심있는 가이드 수</City>
            </Flex>
          </StatisticsWrapper>
          <Margin size={20} />
        </Container>
      </Wrapper>
    </div>
  );
};
export default Profile;
