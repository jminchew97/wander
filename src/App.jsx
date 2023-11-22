import { useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Row, Col } from "react-bootstrap";
function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);
  const [keyPressed, setKeyPressed] = useState("")
  const [playerCoords, setPlayerCoords] = useState([0,0])
  useEffect(() => {
    // Focus the input element when the component mounts
    inputRef.current.focus();

    const handleBlur = () => {
      // Focus the input element when it loses focus
      inputRef.current.focus();
    };

    // Attach the blur event listener
    inputRef.current.addEventListener('blur', handleBlur);
    console.log("player coords: ",playerCoords)
    // Cleanup: Remove the event listener when the component is unmounted
    return () => {
      inputRef.current.removeEventListener('blur', handleBlur);
    };
  }, []);


  const handleOnKeyDown = (event) => {
     setKeyPressed(event.key)
     
     event.target.value = event.key
    if (keyPressed.toLowerCase() == "d"){
      const newCoords = [playerCoords[0] +1, playerCoords[1]]
      setPlayerCoords(newCoords)
    }
  }
  const grid = [
    ["0", "0", "0", "0","0", "0", "0", "0"],
    ["0", "0", "0", "0","0", "0", "0", "0"],
    ["0", "0", "0", "0","0", "0", "0", "0"],
    ["0", "0", "0", "0","0", "0", "0", "0"],
    ["0", "0", "0", "0","0", "0", "0", "0"],
    ["0", "0", "0", "0","0", "0", "0", "0"],
    ["0", "0", "0", "0","0", "0", "0", "0"],
    ["0", "0", "0", "0","0", "0", "0", "0"],
  ];


  return (
    <>
    <h1>playercoords {playerCoords}</h1>
    <input
        type="text"
        ref={inputRef}
        onKeyDown={(e) => handleOnKeyDown(e)}
      />
      {
        
          
          grid.map((row, yIndex)=> (
            <Row key={yIndex}>
          
            {row.map((value, xIndex) => (
              <Col key={xIndex} className="custom-col">
              {console.log([xIndex,yIndex])}
              {
                playerCoords[0] == xIndex && playerCoords[1] == yIndex ? (
                    <div className="cell player-cell">{yIndex}{xIndex}</div>
                    
                ) : (
                  <div className="cell">{xIndex}{yIndex}</div>
                )
              }
              
              
              </Col>
            ))}
          
          </Row>
          ))
        
      }
    </>
  );
}

export default App;
