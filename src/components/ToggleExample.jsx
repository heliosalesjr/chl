import React from "react";
import useToggle from "../hooks/useToggle";

const ToggleExample = () => {
  const [isVisible, toggleVisibility] = useToggle();

  return (
    <div className="p-6 border rounded-lg shadow-md">
      <button
        onClick={toggleVisibility}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        {isVisible ? "Esconder" : "Mostrar"} Mensagem
      </button>

      {isVisible && (
        <p className="text-gray-800">🎉 Olha eu aqui aparecendo!</p>
      )}
    </div>
  );
};

export default ToggleExample;
