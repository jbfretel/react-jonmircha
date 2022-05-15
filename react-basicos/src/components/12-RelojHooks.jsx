import React, { useState, useEffect } from "react";

const Clock = ({ hour }) => {
  return <h2>{hour}</h2>;
};

export default function RelojHooks() {
  const [hour, setHour] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer;
    if (visible) {
      timer = setInterval(() => {
        setHour(new Date().toLocaleTimeString());
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [visible]);

  return (
    <>
      <h3>Reloj Hooks</h3>
      {visible && <Clock hour={hour} />}
      <button onClick={() => setVisible(true)}>Start</button>
      <button onClick={() => setVisible(false)}>Stop</button>
    </>
  );
}
