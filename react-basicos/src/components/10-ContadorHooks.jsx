import React, { useState } from "react";

export default function ContadorHooks() {
  const [contador, setContador] = useState(0);

  const handleClickSuma = (evt) => {
    setContador(contador + 1);
  };
  const handleClickResta = (evt) => {
    setContador(contador - 1);
  };
  const handleClickReset = (evt) => {
    setContador(0);
  };
  return (
    <>
      <h2>Contador Hooks</h2>
      <button onClick={handleClickSuma}>+</button>
      <button onClick={handleClickResta}>-</button>
      <button onClick={handleClickReset}>reset</button>
      <h2>{contador}</h2>
    </>
  );
}
