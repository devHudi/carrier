import styled from 'styled-components';
import HiForest from '../data/hiForest.png';
import Dragon from '../data/dragon.png';
import Tree from '../data/tree.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const Container = styled.img`
  width: 100%;
  height: ${(props) => props.height}px;
  border-radius: 22px;
  object-fit: contain;
  opacity: 1;
  filter: drop-shadow(0px 0px 4px #ababab);
  align: center;
`;

const Plus = () => (
  <div>
    <Wrapper>
      <Container src={HiForest} height={300} />
      <Container src={Dragon} height={300} />
      <Container src={Tree} height={300} />
    </Wrapper>
  </div>
);

export default Plus;
