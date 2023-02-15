import Circle from "./Circle";

function App() {
  return (
   <div>
    <Circle bgColor="teal" borderColor="black"/>
    <Circle bgColor="green" text="green"/>
   </div>
  );
}
export default App;

// styled components ------------------------------
// const Wrapper = styled.div`
//   display: flex;
//   height:100vh;
//   width:100vw;
//   justify-content: center;
//   align-items: center;
//   background-color: ${(props)=>props.theme.backgroundColor};
// `;
// const Title = styled.h1`
//   color: ${(props) => props.theme.textColor};
// `