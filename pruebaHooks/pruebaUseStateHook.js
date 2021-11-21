import React, { useState } from 'react';

const Efecto = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>numero de Clic en el boton {count} </p>
      <button onClick={() => setCount(count + 1)}>
        Aumentar
      </button>
      <button onClick={() => setCount(count - 1)}>
        Disminuir
      </button>
    </div>
  );
};

export default Efecto;