import React from "react";
import useToggle from "../hooks/useToggle";

const ToggleExample = () => {
  const [isVisible, toggleVisibility] = useToggle();

  return (
    <div className="p-6 border rounded-lg shadow-md max-w-2xl mx-auto mt-10 space-y-6">
      {/* Botão + Demonstração do Hook */}
      <div>
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

      {/* AULA TEÓRICA */}
      <div className="bg-white rounded-lg p-6 border shadow space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">📚 Aula: useToggle</h2>

        <p className="text-gray-700">
          O hook <code className="bg-gray-100 px-1 rounded">useToggle</code> é um custom hook que criamos para alternar valores booleanos com facilidade. Ele é útil em situações como mostrar/esconder elementos, alternar modos (escuro/claro), entre outros.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mt-4">🚀 Como ele funciona?</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Usa <code>useState</code> para armazenar um valor booleano.</li>
          <li>Define uma função <code>toggle</code> que inverte esse valor.</li>
          <li>Essa função pode ser chamada por um botão ou outro evento.</li>
          <li>É reutilizável! Podemos importar <code>useToggle</code> onde quisermos no projeto.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-4">📦 O que acontece dentro do <code>useToggle</code> passo a passo?</h3>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>
            <code>useToggle</code> recebe um valor inicial, que por padrão é <code>false</code>, mas pode ser alterado.
          </li>
          <li>
            Usa o <code>useState</code> para criar o estado <code>state</code> e a função <code>setState</code>, que controla esse valor.
          </li>
          <li>
            Define a função <code>toggle</code> com <code>useCallback</code>, para evitar recriações desnecessárias. Essa função inverte o valor atual de <code>state</code> usando <code>setState(prev ={">"} !prev)</code>.
          </li>
          <li>
            Retorna um array com o <code>state</code> atual e a função <code>toggle</code>, permitindo que o componente consumidor use isso como:
            <br />
            <code className="bg-gray-100 px-1 rounded">const [isVisible, toggleVisibility] = useToggle();</code>
          </li>
        </ol>

        <p className="text-sm text-gray-500 mt-4">
          📌 Dica: Hooks personalizados como esse ajudam a separar lógica de estado e tornar os componentes mais limpos e fáceis de testar.
        </p>
      </div>
    </div>
  );
};

export default ToggleExample;
