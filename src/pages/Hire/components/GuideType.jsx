import PropTypes from 'prop-types';
import styled from 'styled-components';

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  font-size: 35px;
  color: ${(props) => (props.activated ? props.theme.colors.blue : '#707070')};
  pointer-events: none;
`;

const Title = styled.div`
  margin-top: 5px;
  font-size: 9pt;
  text-align: center;
  word-break: keep-all;
  line-height: 1.35;
  text-align: center;
  pointer-events: none;
`;

const Subtitle = styled.div`
  font-size: 4pt;
  color: #848484;
  text-align: center;
  pointer-events: none;
`;

const Wrapper = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 90px;
  height: 135px;
  border: ${(props) =>
    props.activated
      ? `1px solid ${props.theme.colors.blue}`
      : '1px solid #e8e8e8'};
  border-radius: 11px;
  background-color: transparent;
  cursor: pointer;
  transition: border 0.3s, color 0.3s;

  & > ${Title} {
    color: ${(props) =>
      props.activated ? props.theme.colors.blue : '#555555'};
  }
`;

const GuideType = ({ name, activated, icon, title, subtitle, onClick }) => (
  <Wrapper name={name} activated={activated} onClick={onClick}>
    <IconWrapper>{icon}</IconWrapper>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </Wrapper>
);

GuideType.propTypes = {
  name: PropTypes.string,
  activated: PropTypes.bool,
  icon: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

GuideType.defaultProps = {
  name: 'wqefqfwe',
  activated: false,
  icon: <></>,
  title: '',
  subtitle: '',
};

export default GuideType;
