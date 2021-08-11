import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import _ from 'lodash';
import { Typography, Margin, Flex } from 'carrier-ui';
import { firestore } from 'misc/firebase';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image from '../data/interest.svg';
import heart from '../data/heart.svg';

const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
`;
const ImageCircle = styled.div`
  width: 220px;
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent url(${image}) 0% 0% no-repeat padding-box;
  opacity: 1;
  border-radius: 130px;
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 26px;
  opacity: 1;
  filter: blur(px);
  width: 100%;
  overflow: hidden;
  box-shadow: 0px 0px 20px -5px #ababab;
`;

const Wrapper = styled.div`
  margin-bottom: 17px;
  width: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  border-radius: 26px;
`;

const GuideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 22px;
  opacity: 1;
`;

const City = styled(Typography)`
  font: normal normal bold 18px/27px NanumSquare;
  letter-spacing: 0px;
  color: #c2c2c2;
  opacity: 1;
`;

const ImgContainer = styled.div`
  background-image: url('${(props) => props.image}');
  background-size: cover;
  width: 130px;
  height: 130px;
  border: 1px solid #dfdfdf;
  border-radius: 24px;
  opacity: 1;
  flex-grow: 0;
  flex-shrink: 0;
  position: relative;
`;

const HeartContainer = styled.img`
  position: absolute;
  top: 9px;
  right: 9px;
  visibility: visible;
  width: 20px;
  height: 20px;
`;

const InterestGuide = ({ likeEmployees }) => {
  const [likeEmployee, setLikeEmployee] = useState();
  useEffect(() => {
    const promises = _.map(likeEmployees, (data) =>
      firestore.collection('users').doc(data).get(),
    );

    Promise.all(promises).then((refs) => {
      const docs = _.map(refs, (ref) => ref.data());
      setLikeEmployee(docs);
    });
  }, []);

  return (
    <div>
      <DivWrapper>
        {likeEmployees?.length <= 0 && (
          <Container>
            <Typography headline>관심 가이드 목록</Typography>
            <Margin size={22} />
            <InnerWrapper>
              <ImageCircle />
              <Margin size={10} />
            </InnerWrapper>
          </Container>
        )}
        {likeEmployees?.length > 0 && (
          <Container>
            <Typography headline>관심 가이드 목록</Typography>
            <Margin size={22} />
            <Wrapper>
              {_.map(likeEmployee, (likeEmploye) => (
                <GuideWrapper>
                  <Flex direction="column" justify="center" align="center">
                    <ImgContainer image={likeEmploye.profile_image}>
                      <HeartContainer src={heart} />
                    </ImgContainer>
                    <Margin row size={18} />
                    <Flex>
                      <Flex direction="column" align="center" justify="center">
                        <Typography headline>{likeEmploye.name}</Typography>
                        <Margin size={4} />
                        <City subhead>{likeEmploye.place.sido}</City>
                      </Flex>
                      <Margin size={5} />
                    </Flex>
                  </Flex>
                </GuideWrapper>
              ))}
            </Wrapper>
          </Container>
        )}
      </DivWrapper>
    </div>
  );
};

InterestGuide.propTypes = {
  likeEmployees: PropTypes.object.isRequired,
};

export default InterestGuide;
