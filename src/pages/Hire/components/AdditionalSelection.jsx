import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.button`
  padding: 0;
  width: 65px;
  border: none;
  background-color: transparent;
  display: flex;
  flex-direction: column;
`;

const Illustration = styled.img`
  height: 35px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 65px;
  border: ${(props) =>
    props.activated
      ? `1px solid ${props.theme.colors.blue}`
      : '1px solid #e8e8e8'};
  border-radius: 32.5px;
  background-color: #f6f6f6;
  cursor: pointer;
  font-size: 35px;
  color: ${(props) => (props.activated ? props.theme.colors.blue : '#707070')};
  pointer-events: none;
  transition: border 0.3s, color 0.3s;
`;

const Label = styled.div`
  margin-top: 5px;
  font-size: 8pt;
  text-align: center;
  word-break: keep-all;
  line-height: 1.35;
  color: #707070;
  pointer-events: none;
`;

const AdditionalSelection = ({ name, activated, icon, label, onClick }) => (
  <Wrapper name={name} onClick={onClick}>
    <IconWrapper activated={activated}>
      <Illustration src={icon} />
    </IconWrapper>
    <Label> {label} </Label>
  </Wrapper>
);

AdditionalSelection.propTypes = {
  name: PropTypes.string,
  activated: PropTypes.bool,
  icon: PropTypes.node,
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

AdditionalSelection.defaultProps = {
  name: '',
  activated: false,
  icon: <></>,
  label: '',
};

export default AdditionalSelection;
