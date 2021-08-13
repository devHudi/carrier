import styled from 'styled-components';

export const Background = styled.div`
  height: 100vh;
  z-index: 500;
  width: 100vw;
  position: absolute;
  justify-content: center;
  alien-items: center;
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
