import styled from "styled-components";

function App() {
  return (
   <Father>
    <Circle bgColor="green"></Circle>
    <Box bgColor="yellowgreen"></Box>
   </Father>
  );
}

export default App;

const Father = styled.div`
  display: flex;
`;
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width:100px;
  height:100px;
`
const Circle = styled(Box)`
  border-radius: 50px;
`
// Box의 모든 속을 가져오고 거기에 Circle을 추가