import styled from "styled-components";

function App() {
  return (
   <Wrapper>
        <Title>title</Title>
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
  background-color: ${(props)=>props.theme.backgroundColor};
`;
// ThemeProvider에 접근

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`