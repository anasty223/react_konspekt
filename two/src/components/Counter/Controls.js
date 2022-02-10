import React from "react";

const Controls = ({ onIncrement, onDcrement }) => {
  return (
    <div className="Counter__controls">
      <button type="button" onClick={onIncrement}>
        Увеличить на 1
      </button>
      <button type="button" onClick={onDcrement}>
        Уменьшить на 1
      </button>
    </div>
  );
};
export default Controls;
