import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  top: 210px;
  left: 38px;
  width: 100%;
  height: 46px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 48px;
  box-shadow: 2px 3px 3px #53535329;
`;
// justify-content: space-between;
// position: absolute;

const Text = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 18px;
  line-height: 1.2;
  font-size: 14pt;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 800;
`;

const SearchBar = () => (
  <>
    <Wrapper>
      <Text>
        <div>어디로 떠나시나요?</div>
        <div>
          <FaSearch />
        </div>
      </Text>
    </Wrapper>
  </>
);

export default SearchBar;
