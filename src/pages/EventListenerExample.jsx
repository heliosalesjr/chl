// src/pages/EventListenerExample.jsx
import React, { useState } from "react";
import useEventListener from "../hooks/useEventListener";

const EventListenerExample = () => {
  const [key, setKey] = useState(null);

  useEventListener("keydown", (e) => {
    setKey(e.key);
  });

  return (
    <div className="p-6 border rounded-lg shadow-md max-w-2xl mx-auto mt-10 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">🎹 Pressione qualquer tecla!</h1>

      <div className="text-center text-4xl font-mono text-blue-600">
        {key ? `Você pressionou: ${key}` : "⌨️ Nenhuma tecla ainda"}
      </div>

      {/* AULINHA */}
      <div className="bg-white rounded-lg p-6 border shadow space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">📚 Aula: useEventListener</h2>

        <p className="text-gray-700">
          O <code className="bg-gray-100 px-1 rounded">useEventListener</code> é um custom hook que permite adicionar e remover ouvintes de eventos (<code>event listeners</code>) de forma declarativa e reativa.
        </p>

        <h3 className="text-xl font-semibold text-gray-800">🧩 Como funciona o hook?</h3>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>Recebemos o tipo de evento, a função a ser executada e o elemento alvo (por padrão, o <code>window</code>).</li>
          <li>Usamos um <code>useRef</code> para manter sempre a referência mais atual da função <code>handler</code>, evitando recriar o ouvinte desnecessariamente.</li>
          <li>Registramos o <code>addEventListener</code> no elemento quando o componente monta, e removemos com <code>removeEventListener</code> na desmontagem.</li>
        </ol>

        <p className="text-sm text-gray-500 mt-4">
          ⚙️ Isso é muito útil para lidar com eventos como teclas, clique fora de um elemento, scroll, resize da janela e muito mais.
        </p>

        <pre className="bg-gray-100 text-sm p-4 rounded overflow-x-auto">
{`useEventListener("keydown", (e) => {
  console.log("Tecla pressionada:", e.key);
});`}
        </pre>
      </div>
    </div>
  );
};

export default EventListenerExample;
