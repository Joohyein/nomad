import styled, {keyframes} from "styled-components";

function App() {
  return (
   <Wrapper>
      <Box>
        <span>😁</span>
      </Box>
   </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
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
  span {
    font-size: 36px;
    &:hover {
      font-size: 40px;
    }
    &:active {
      opacity: 0;
    }
  }
`;
