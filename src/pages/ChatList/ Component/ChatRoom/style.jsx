import styled from 'styled-components';

export const Img = styled.img`
  opacity: 1;
  width: 53px;
  height: 53px;
  margin-right: 1em;
`;
export const MessageBox = styled.div`
  opacity: 1;
  display: flex;
  height: 40px;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  & :first-child {
    color: ${(props) => props.theme.colors.black};
    font-weight: bold;
    font-size: 19px;
  }
  & > span {
    color: #5b5b5b;
    font-weight: normal;
    font-size: 12px;
    line-height: 25px;
  }
`;
export const RecentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  &:first-child {
    color: ${(props) => props.theme.colors.black};
    letter-spacing: 0px;
    font-weight: bold;
    font-size: 9px;
    line-height: 40px;
  }
  &:last-child {
    width: 20%;
    max-width: 50px;
    height: 23px;
    background: ${(props) => props.theme.colors.blue} 0% 0% no-repeat
      padding-box;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.colors.white};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: calc(100% + 35 * 2);
  margin: 0px -35px 0px -35px;
  height: 81px;
  padding: 14px 49px 24px 49px;
  background-color: ${(props) => props.theme.colors.white};
  justify-content: space-between;
  align-items: center;
  &:hover {
    animation: boxFade-in 1s ease 0s normal forwards;
    @keyframes boxFade-in {
      from {
        background: transparent
          linear-gradient(110deg, #ffffff 0%, #ffffff 0%) 0% 0% no-repeat;
        opacity: 1;
      }
      to {
        background: transparent
          linear-gradient(110deg, #688df0 0%, #3bd1e4 100%) 0% 0% no-repeat;
        opacity: 0.55;
      }
    }
    & ${MessageBox} {
      & span {
        animation: textChange 0.3s ease 0s 1 normal forwards;
        @keyframes textChange {
          from{
            color: ${(props) => props.theme.colors.black};
          }
          to {
            color: ${(props) => props.theme.colors.white};
          }
        }
      }
    }
    & ${RecentBox} {
      &:last-child {
        animation: backChange 1s ease 0s 1 normal forwards;
        @keyframes backChange {
          from{
            background-color: ${(props) => props.theme.colors.blue};
            color: ${(props) => props.theme.colors.white};
        }
          to {
            background-color: ${(props) => props.theme.colors.white};
            color: ${(props) => props.theme.colors.blue};
          }
      }
    }
  }
`;
