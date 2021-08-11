import styled from 'styled-components';
import PropTypes from 'prop-types';
import Route1Info from '../data/route1_info.svg';
import Route2Info from '../data/route2_info.svg';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const Container = styled.img`
  width: 100%;
  height: ${(props) => props.height}px;
  border-radius: 22px;
  object-fit: contain;
  opacity: 1;
  filter: drop-shadow(0px 0px 2px #ababab);
  align: center;
`;

const Course = ({ step }) => {
  let Picture;
  if (step === 1) {
    Picture = Route1Info;
  } else {
    Picture = Route2Info;
  }
  return (
    <div>
      <Wrapper>
        <Container src={Picture} height={600} />
      </Wrapper>
    </div>
  );
};

Course.propTypes = {
  step: PropTypes.number.isRequired,
};

export default Course;
