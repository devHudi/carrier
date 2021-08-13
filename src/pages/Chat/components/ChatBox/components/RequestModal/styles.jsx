import styled from 'styled-components';

export const Background = styled.div`
  height: 100vh;
  z-index: 500;
  width: 100vw;
  position: absolute;
  display: ${(props) => {
    const test = props.isRequest;
    if (test === true) {
      return 'flex';
    }
    return 'none';
  }};
  background-color: black;
  opacity: 0.4;
  animation-fill-mode: forwards;
  animation-duration: 0.5s;
  animation-name: ${(props) => {
    const test = props.isRequest;
    if (test === true) {
      return 'slideUp';
    }
    return 'slideDown';
  }};

  @keyframes slideUp {
    from {
      opacity: 0;
    }

    to {
      opacity: 0.4;
    }
  }

  @keyframes slideDown {
    from {
      opacity: 0.4;
    }

    to {
      opacity: 0;
    }
  }
`;
export const BackWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: ${(props) => {
    const test = props.isRequest;
    if (test === true) {
      return 'flex';
    }
    return 'none';
  }};
  justify-content: center;
  alien-items: center;
`;

export const Wrapper = styled.div`
  z-index: 800;
  width: 87%;
  display: inherit;
  justify-content: space-around;
  align-items: center;
  background: ${(props) => props.theme.colors.white};
  box-shadow: 3px 3px 7px rgb(0 0 0 / 0.1);
  border-radius: 15px;
  flex-direction: column;
  margin-top: 100px;
  margin-bottom: 140px;
  margin: 100px 24px 140px 24px;
`;
export const WrapperOne = styled.div`
  z-index: 801;
  width: 100%;
  height: 100%;
  display: ${(props) => {
    const test = props.isRequest;
    if (test === true) {
      return 'flex';
    }
    return 'none';
  }};
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;
export const WrapperTwo = styled.div`
  width: 100%;
  height: 100%;
  display: ${(props) => {
    const test = props.isRequest;
    if (test === true) {
      return 'flex';
    }
    return 'none';
  }};
  justify-content: space-around;
  align-items: center;

  & > img {
    width: 82px;
  }
`;
export const WrapperThree = styled.div`
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  display: ${(props) => {
    const test = props.isRequest;
    if (test === true) {
      return 'flex';
    }
    return 'none';
  }};
  & > img {
    width: 60%;
    height: 50%;
  }
`;
export const OptionsDiv = styled.div`
  width: 80%;
  height: 98px;
  border: 1px solid #afafaf;
  display: inherit;
  justify-content: center;
  align-items: center;
  border-radius: 11px;
  flex-direction: row;
`;
export const PlanOptionDiv = styled(OptionsDiv)`
  border: ${(props) =>
    props.onClickButton
      ? `3px solid ${props.theme.colors.blue}`
      : '1px solid #afafaf'};
`;
export const TextDiv = styled.div`
  display: inherit;
  justify-content: center;
  align-items: left;
  flex-direction: column;
`;
export const BoldFont = styled.div`
  font-weight: bold;
  font-size: 16px;
  color: ${(props) => props.theme.colors.black};
  margin: 5px 0px 5px 0px;
`;
export const Img = styled.img`
  width: 60px;
  height: 60px;
  margin: 19px 12px 19px 12px;
`;
export const SmallFont = styled.div`
  font-weight: lighter;
  font-size: 12px;
  color: #bfbfbf;
`;
export const Title = styled.div`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.black};
  margin: 12% 0px 24px 0px;
  text-align: center;
`;

export const Submit = styled.div`
  width: 251px;
  height: 45px;
  border-radius: 20px;
  display: inherit;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  border: 2px solid #c2c8ff;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.blue};

  &:hover {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.blue};
    border: 2px solid ${(props) => props.theme.colors.blue};
  }
`;
