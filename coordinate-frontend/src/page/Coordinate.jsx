import {useState, useRef, useEffect} from "react";
import  styled  from 'styled-components'

const CanvasDiv = styled.div`
    border: 1px solid blue;
`;

const Title = styled.h1`
`;

export default function Coordinate(){
    const canvasRef = useRef(null);
    const [canvasTag, setCanvasTag] = useState([]);

    useEffect(()=>{
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth * 0.5;
        canvas.height = window.innerHeight;

        setCanvasTag(canvas);
    }, []);

    console.log("canvasTag:", canvasTag);

    const ctx = canvasTag.getContext("2d");


    return (        
    <div>
        <Title>My Canvas</Title>
        <CanvasDiv>
            <canvas ref={canvasRef}>
                canvas test
            </canvas>
        </CanvasDiv>
    </div>);

}