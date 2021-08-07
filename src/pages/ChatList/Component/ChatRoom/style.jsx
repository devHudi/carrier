import styled from 'styled-components';

export const Img = styled.img`
  opacity: 1;
  width: 53px;
  height: 53px;
  margin-right: 1em;
  border-radius: 70%;
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
  text-decoration-line: none;
  display: flex;
  width: calc(100% + 35 * 2);
  margin: 0px -35px 0px -35px;
  height: 81px;
  padding: 14px 49px 24px 49px;
  text-decoration-line: none;
  background-color: ${(props) => props.theme.colors.white};
  justify-content: space-between;
  align-items: center;
  & span {
    text-decoration: none;
  }
`;
