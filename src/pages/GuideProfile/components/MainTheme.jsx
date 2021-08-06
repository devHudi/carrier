import styled from 'styled-components';
import { Typography, Flex, Margin } from 'carrier-ui';
import { FiHeart } from 'react-icons/fi';
import {
  GiSpotedFlower,
  GiPineTree,
  GiAncientColumns,
  GiAsianLantern,
} from 'react-icons/gi';
import { FaUmbrellaBeach } from 'react-icons/fa';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 26px;
  opacity: 1;
  filter: blur(px);
  width: 100%;
`;

const ThemeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
  margin-bottom: 8px;
  padding: 10px 14px;
  border: 1px solid ${(props) => props.theme.colors.inputBorder};
  border-radius: 30px;
  background-color: transparent;
  font-size: 13px;
  transition: background-color 0.3s, border 0.3s, color 0.3s;
`;

const MainTheme = () => (
  <div>
    <Wrapper>
      <Container>
        <Typography headline>주력 테마</Typography>
        <Margin size={10} />
        <Flex>
          <ThemeContainer>
            # 데이트_코스 <FiHeart />
          </ThemeContainer>
          <ThemeContainer>
            # 꽃이_만개한 <GiSpotedFlower />
          </ThemeContainer>
        </Flex>
        <Flex>
          <ThemeContainer>
            # 자연에서_휴양하기 <GiPineTree />
          </ThemeContainer>
          <ThemeContainer>
            # 바다가_들린다 <FaUmbrellaBeach />
          </ThemeContainer>
        </Flex>
        <Flex>
          <ThemeContainer>
            # 문화재_탐방 <GiAncientColumns />
          </ThemeContainer>
          <ThemeContainer>
            # 역사가_살아있는 <GiAsianLantern />
          </ThemeContainer>
        </Flex>
        <Margin size={10} />
      </Container>
    </Wrapper>
  </div>
);

export default MainTheme;
