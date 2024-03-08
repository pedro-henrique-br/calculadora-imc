import { useState } from "react";
import "./App.css";
import { ImcCalculator } from "./assets/components/ImcCalculator";
import { ImcTable } from "./assets/components/ImcTable";

function App() {
  const calcImc = (e, height, weight) => {
    e.preventDefault();

    if (!height || !weight) return;

    const weightFloat = +weight.replace(",", ".");
    const heightFloat = +height.replace(",", ".");

    const imcResult = weightFloat / (heightFloat * heightFloat).toFixed(2);

    console.log(imcResult);
    setImc(imcResult)
  };

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  return (
    <div className="App">
      {!imc ? (<ImcCalculator calcImc={calcImc} />) : (<ImcTable />)}
    </div>
  );
}

export default App;
