import styled, {keyframes} from "styled-components";

function App() {
  return (
   <Wrapper>
      <Box>
        <Emoji as="span">😁</Emoji>
      </Box>
      <Emoji>😁</Emoji>
   </Wrapper>
  );
}
export default App;

// styled components ------------------------------
const Wrapper = styled.div`
  display: flex;
  height:100vh;
  width:100vw;
  justify-content: center;
  align-items: center;
`;

const rotateAnimation = keyframes`
  0% {
    transform:ratate(0deg);
    border-radius: 0px;
  }
  50% {
    border-radius: 100px;
  }
  100% {
    transform:rotate(360deg);
    border-radius: 0px;
  }
`;

const Box = styled.div`
  height: 100px;
  width:100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
  animation: ${rotateAnimation} 3s linear infinite;
  ${Emoji} {
    :hover {
    font-size: 98px;
    :active {
      opacity: 0;
    }
  }
    
  }
`;
// Box 컴포넌트 안에 Emoji 컴포넌트를 직접적으로 타겟팅 할 수 있다.
// Box 밖에 있는 Emoji 컴포넌트에는 적용되지 않는다.

const Emoji = styled.span`
  font-size:36px;
`