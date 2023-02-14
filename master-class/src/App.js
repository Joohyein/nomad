import styled from "styled-components";

function App() {
  return (
   <Father>
    <BoxOne>
      <Text>Hyein zzang</Text>
    </BoxOne>
    <BoxTwo></BoxTwo>
   </Father>
  );
}

export default App;

const Father = styled.div`
  display: flex;
`;
const BoxOne = styled.div`
  background-color: green;
  width:100px;
  height:100px;
`
const BoxTwo = styled.div`
  background-color: pink;
  width:100px;
  height:100px;
`
const Text = styled.span`
  color: white;
`