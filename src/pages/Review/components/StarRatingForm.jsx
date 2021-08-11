import React from 'react';
import styled from 'styled-components';
import ReactStars from 'react-stars';

const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const StarRatingForm = () => (
  <Container>
    <ReactStars size={50} color2="gold" value={5} />
  </Container>
);
export default StarRatingForm;
