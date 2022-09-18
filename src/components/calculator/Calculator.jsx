import React, { useState, useEffect } from "react";
import BeautifullScreen from "../beautifullScreen/BeautifullScreen";
import AmazingNumberButton from "../amazingNumberButton/AmazingNumberButton";
import GreatOperatorButton from "../greatOperatorButton/GreatOperatorButton";
import MagnificientEqualButton from "../magnificientEqualButton/MagnificientEqualButton";
import ResetButton from "../resetButton/ResetButton";
import SaveButton from "../saveButton/SaveButton";
import BackSpace from "../backSpace/BackSpace";
import {IoCloseCircleOutline} from "react-icons/io5";

import axios from "axios";
import "./Calculator.css";

export default function Calculator() {
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState("");
  const [calculList, setCalculList] = useState([]);

  const handleClick = (e) => {
    number === 0
      ? setNumber(e.target.value)
      : setNumber(number + e.target.value);
  };

  const calculate = () => {
    try {
      const calculResult = eval(number);
      setResult(calculResult);
    } catch (error) {
      setNumber("Error");
    }
  };

  const backSpace = () => {
    try {
      number.length > 1 ? setNumber(number.slice(0, -1)) : setNumber(0);
    } catch (error) {
      setNumber(0);
    }
  };

  const save = async () => {
    console.log("result");
    console.log(number, result);

    const url = `http://localhost/backend/calculatorApi.php`;
    try {
      const response = await axios.post(url, {
        number: number,
        result: result,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    fetctchData();
  };

  const fetctchData = async () => {
    const response = await axios.get(
      "http://localhost/backend/calculatorGetApi.php"
    );
    console.log(response.data);
    setCalculList(response.data);
  };

  useEffect(() => {
    fetctchData();
  }, []);

 const handleDelete = async (id) => {
    console.log(id);
    const url = `http://localhost/backend/calculatorDeleteApi.php`;
    try {
      const response = await axios.post(url, {
        id: id,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    fetctchData();
  };

  return (
    <div className="calculator">
      <div className="allScreen">
        <div className="saveList">
          {calculList.map((item) => (
            <article key={item.id}>
             <span>{item.calcul}={item.result}</span> 
             <button onClick={()=>handleDelete(item.id)}>x</button>
            </article>
            
          ))}
        </div>
        <BeautifullScreen
          inputNumber={number}
          inputResult={result}
          numberChange={(e) => setNumber(e.target.value)}
          resultChange={(e) => setResult(e.target.value)}
        />
      </div>
      <div className="buttonContainer">
        <div className="clearBack">
          <ResetButton
            resetClick={() => {
              setNumber(0);
              setResult(0);
            }}
          />
          <BackSpace backClick={() => backSpace()} />
        </div>

        <div className="nbrCalc">
          <AmazingNumberButton buttonClick={(e) => handleClick(e)} />
          <GreatOperatorButton operatorClick={(e) => handleClick(e)} />
        </div>
        <div className="nbrCalc">
          <SaveButton saveClick={() => save()} />
          <MagnificientEqualButton equalClick={() => calculate()} />
        </div>
      </div>
    </div>
  );
}
