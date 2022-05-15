import React, { useState, useEffect } from "react";

export default function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    // console.log("Moviendo el scroll");
    const detectarScroll = () => setScrollY(window.pageYOffset);
    window.addEventListener("scroll", detectarScroll);
    //fase de desmontaje con el return
    return () => window.removeEventListener("scroll", detectarScroll);
    //fase de montaje solo con el array vacio y con escucha fase de actualizacion,
  }, [scrollY]);

  useEffect(() => {
    console.log("componentDidMount o fase de montaje");
  }, []);

  useEffect(() => {
    //OJO no recomendable dejar sin el array, colocar ene este el la variable de estado a escuchar en la actualización.
    console.log("componentDidUpdate o actualización");
  });

  useEffect(() => {
    console.log("componentWillUnmount o fase de desmontaje");
    return () => {};
  }, []);
  return (
    <>
      <h3>Hooks useEffect y el ciclo de vida</h3>
      <p>Scroll Y del navegador {scrollY} px</p>
    </>
  );
}
