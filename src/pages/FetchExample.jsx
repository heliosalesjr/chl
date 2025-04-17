import React from "react";
import useFetch from "../hooks/useFetch";

const FetchExample = () => {
  const { data, loading, error } = useFetch("https://dog.ceo/api/breeds/image/random");

  return (
    <div className="p-6 border rounded-lg shadow-md max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">🐶 useFetch Example</h1>

      {loading && <p className="text-blue-500">Carregando...</p>}
      {error && <p className="text-red-500">Erro: {error}</p>}
      {data && (
        <div>
          <img src={data.message} alt="Um dog aleatório" className="rounded shadow-md w-full max-w-sm" />
        </div>
      )}

      {/* Aula explicativa */}
      <div className="bg-white rounded-lg p-6 border shadow space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">📚 Aula: useFetch</h2>

        <p className="text-gray-700">
          O <code className="bg-gray-100 px-1 rounded">useFetch</code> é um hook que facilita buscar dados de APIs no React, centralizando o estado de <strong>carregamento</strong>, <strong>erro</strong> e <strong>resposta</strong>.
        </p>

        <h3 className="text-xl font-semibold text-gray-800">🔍 O que acontece?</h3>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>Assim que o componente monta, o hook dispara uma requisição com `fetch()`.</li>
          <li>Enquanto espera, o estado <code>loading</code> é <code>true</code>.</li>
          <li>Se houver erro, o estado <code>error</code> é preenchido.</li>
          <li>Se der certo, salvamos os dados com <code>setData()</code>.</li>
          <li>Ao fim, <code>loading</code> vira <code>false</code> e os dados ficam disponíveis.</li>
        </ol>

        <p className="text-sm text-gray-500">
          🧠 É ótimo pra APIs públicas ou para abstrair a lógica de fetch em apps maiores.
        </p>
      </div>
    </div>
  );
};

export default FetchExample;
