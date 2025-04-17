import React, { useState } from "react";
import usePrevious from "../hooks/usePrevious";

const PreviousExample = () => {
  const [count, setCount] = useState(0);
  const previousCount = usePrevious(count);

  return (
    <div className="p-6 border rounded-lg shadow-md max-w-2xl mx-auto mt-10 space-y-6">
      <div className="space-y-2">
        <p className="text-xl font-semibold text-gray-800">Contador: {count}</p>
        <p className="text-gray-600">Valor anterior: {previousCount ?? "N/A"}</p>
        <button
          onClick={() => setCount((c) => c + 1)}
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
        >
          Incrementar
        </button>
      </div>

      {/* AULINHA */}
      <div className="bg-white rounded-lg p-6 border shadow space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">📚 Aula: usePrevious</h2>

        <p className="text-gray-700">
          O <code className="bg-gray-100 px-1 rounded">usePrevious</code> é um hook que nos permite guardar o <strong>valor anterior</strong> de uma variável entre renders.
        </p>

        <h3 className="text-xl font-semibold text-gray-800">🔍 O que acontece no hook?</h3>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>Criamos uma referência com <code>useRef</code>. Essa referência persiste entre os renders.</li>
          <li>Usamos <code>useEffect</code> para atualizar o valor da referência toda vez que a variável mudar.</li>
          <li>Retornamos o valor anterior armazenado em <code>ref.current</code>.</li>
        </ol>

        <h3 className="text-xl font-semibold text-gray-800">🧪 Código do hook</h3>
        <pre className="bg-gray-100 text-sm p-4 rounded overflow-auto">
{`import { useEffect, useRef } from "react";

const usePrevious = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

export default usePrevious;`}
        </pre>

        <p className="text-sm text-gray-500 mt-4">
          🧠 Esse hook é muito útil para fazer comparações entre estados e detectar mudanças!
        </p>
      </div>
    </div>
  );
};

export default PreviousExample;
