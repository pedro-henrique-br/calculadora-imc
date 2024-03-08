import { useState } from "react";
import "../components/ImcCalculator.modules.css";
import { Button } from "./Button";

export const ImcCalculator = ({ calcImc }) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const clearForm = (e) => {
    e.preventDefault();
    setHeight("");
    setWeight("");
  };

  const inputValueReplace = (text) => {
    return text.replace(/[^0-9,]/g, "");
  };

  const handleHeightChange = (e) => {
    const updatedValue = inputValueReplace(e.target.value);
    setHeight(updatedValue);
  };

  const handleWeightChange = (e) => {
    const updatedValue = inputValueReplace(e.target.value);
    setWeight(updatedValue);
  };

  return (
    <div id="calc-container">
      <h2>Calculadora de IMC</h2>
      <form id="imc-form">
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="Height">Altura:</label>
            <input
              type="text"
              name="height"
              id="height"
              placeholder="Exemplo: 1,65 cm"
              onChange={handleHeightChange}
              value={height}></input>
          </div>
          <div className="form-control">
            <label htmlFor="Weight">Peso:</label>
            <input
              type="text"
              name="Weight"
              id="weight"
              placeholder="Exemplo: 75kg"
              onChange={handleWeightChange}
              value={weight}></input>
          </div>
          <div className="action-control">
            <Button id="calc-btn" text="Calcular" action={(e) => calcImc(e, height , weight)} />
            <Button id="clear-btn" text="Limpar" action={clearForm} />
          </div>
        </div>
      </form>
    </div>
  );
};
