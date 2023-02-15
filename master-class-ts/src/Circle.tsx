import styled from "styled-components";

// typescript가 봤을 때는 Containger가 div여서 component는 어떤 props도 받고 있지 않는다.
// typescript에게 bgColor를 styled-component(Container?)에게도 보내고 싶다고 말하자.
interface ContainerProps {
    bgColor:string;
}

// typescipt에게 Container가 bgColor를 받을거라고 얘기하려면 <ContainerProps>를 붙여주면 된다.
const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${props => props.bgColor};
    border-radius: 50%;
`;

interface CircleProps {
    bgColor: string;
}

function Circle({bgColor}:CircleProps) {
    return <Container bgColor={bgColor} />;
}
// App.js에서 props(bgColor)를 보내고 Circle component는 bgColor를 받아 Container에 보낸다. 두 번 props를 보낸다.
// Container는 div여서 어떤 props도 받고 있지 않는다.
// typescrip에게 bgColor를 styled-component에게도 보내고 싶다고 해야한다.

export default Circle;

interface PlayerShape {
    name:string;
    age:number;
}
const sayHello = (playerObj: PlayerShape) => 
    `Hello ${playerObj.name} you are ${playerObj.age}`;

sayHello({name:"hyein", age:20});
