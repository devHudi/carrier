import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PageCenter, Margin, RoundedButton } from 'carrier-ui';

const Animation = styled.div`
  width: 100%;
`;

const Title = styled.div`
  width: 100%;
  font-size: 24px;
  text-align: center;
  line-height: 1.3;
  letter-spacing: -2px;
`;

const Subtitle = styled.div`
  width: 100%;
  font-size: 16px;
  color: #686868;
  text-align: center;
  font-weight: 300;
  line-height: 1.3;
`;

const Template = ({ animation, title, subtitle, last, onDone }) => (
  <PageCenter>
    <Animation>{animation}</Animation>
    <Margin size={60} />

    <Title>{title}</Title>
    <Margin size={18} />

    <Subtitle>{subtitle}</Subtitle>

    {last && (
      <>
        <Margin size={58} />
        <RoundedButton blue onClick={onDone}>
          CARRIER 시작하기
        </RoundedButton>
      </>
    )}
  </PageCenter>
);

Template.propTypes = {
  animation: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  last: PropTypes.bool.isRequired,
  onDone: PropTypes.func,
};

Template.defaultProps = {
  onDone: () => {},
};

export default Template;
