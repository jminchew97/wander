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
  useEffect(() => {
    // Focus the input element when the component mounts
    inputRef.current.focus();

    const handleBlur = () => {
      // Focus the input element when it loses focus
      inputRef.current.focus();
    };

    // Attach the blur event listener
    inputRef.current.addEventListener('blur', handleBlur);

    // Cleanup: Remove the event listener when the component is unmounted
    return () => {
      inputRef.current.removeEventListener('blur', handleBlur);
    };
  }, []);


  const handleOnKeyDown = (event) => {
     setKeyPressed(event.key)
     event.target.value = event.key
    console.log(keyPressed)
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
              
              <div className="cell"></div>
              
              </Col>
            ))}
          
          </Row>
          ))
        
      }
    </>
  );
}

export default App;
