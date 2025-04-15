import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const LocalStorageExample = () => {
  const [name, setName] = useLocalStorage("user-name", "");

  return (
    <div className="p-6 border rounded-lg shadow-md max-w-3xl mx-auto mt-10 space-y-10">
      {/* DEMO */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🎯 Exemplo Prático</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite seu nome"
          className="border p-3 rounded w-full"
        />
        {name && <p className="mt-3 text-gray-700">Olá, {name}! 👋</p>}
      </section>

      {/* AULA */}
      <section className="bg-white rounded-lg p-6 border shadow space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">📚 Aula: useLocalStorage</h2>

        <p className="text-gray-700">
          O <code className="bg-gray-100 px-1 rounded">useLocalStorage</code> é um custom hook que salva dados de forma persistente usando o <strong>localStorage</strong> do navegador.
        </p>

        <h3 className="text-xl font-semibold text-gray-800">🔍 O que acontece?</h3>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>Busca no <code>localStorage</code> um valor salvo com a chave fornecida.</li>
          <li>Se existir, usamos esse valor como estado inicial.</li>
          <li>Se não existir, usamos o valor inicial passado por parâmetro.</li>
          <li>Quando o estado muda, salvamos a nova versão no <code>localStorage</code>.</li>
        </ol>

        <p className="text-sm text-gray-500">
          🧠 Muito útil para manter preferências do usuário, dados simples, temas etc.
        </p>
      </section>

      {/* DETALHAMENTO DO HOOK */}
      <section className="bg-blue-50 rounded-lg p-6 border border-blue-200 shadow space-y-4">
        <h3 className="text-xl font-bold text-blue-800">🛠️ Por dentro do hook</h3>
        <ol className="list-decimal list-inside text-blue-900 space-y-1">
          <li>Inicializamos o estado com uma função que lê o valor salvo no <code>localStorage</code>.</li>
          <li>Se houver valor, fazemos <code>JSON.parse()</code>. Senão, usamos o valor inicial.</li>
          <li>Usamos <code>useEffect</code> para atualizar o <code>localStorage</code> sempre que o valor mudar.</li>
          <li>Retornamos o valor e o setter, como um <code>useState</code> comum.</li>
        </ol>

        <p className="text-sm text-blue-700">
          ⚙️ Isso mantém o estado sincronizado com o armazenamento do navegador.
        </p>
      </section>

      {/* CÓDIGO DO HOOK */}
      <section className="bg-gray-900 text-white p-6 rounded-lg shadow-md text-sm font-mono overflow-auto">
        <h3 className="text-lg font-bold mb-4 text-green-400">📦 Código do Hook: <code>useLocalStorage.js</code></h3>
        <pre>
{`import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
`}
        </pre>
      </section>
    </div>
  );
};

export default LocalStorageExample;
