import React from 'react';
import styled from 'styled-components';
import ReactStars from 'react-stars';
import PropTypes from 'prop-types';

const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const StarRatingForm = ({ value, onChangeScore }) => (
  <Container>
    <ReactStars
      size={50}
      color2="gold"
      value={value}
      onChange={onChangeScore}
    />
  </Container>
);

StarRatingForm.propTypes = {
  value: PropTypes.number.isRequired,
  onChangeScore: PropTypes.func.isRequired,
};
export default StarRatingForm;
