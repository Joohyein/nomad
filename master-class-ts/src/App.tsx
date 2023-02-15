import { useState } from "react";
import styled from "styled-components";

const H1 = styled.div`
  color:${props=>props.theme.textColor};
  font-size:100px;
`;
const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
`;
// theme와 typescript연결

function App() {
  return (
   <Container>
      <H1>title</H1>
   </Container>
  );
}
export default App;