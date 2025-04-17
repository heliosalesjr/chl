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
            <div className="bg-white rounded-lg p-6 border shadow space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">📚 Aula: useFetch</h2>

            <p className="text-gray-700">
                O hook <code className="bg-gray-100 px-1 rounded">useFetch</code> encapsula toda a lógica de busca de dados em APIs externas, e retorna um objeto com:
                <code className="bg-gray-100 px-1 rounded">data</code>, <code className="bg-gray-100 px-1 rounded">loading</code> e <code className="bg-gray-100 px-1 rounded">error</code>.
            </p>

            <h3 className="text-xl font-semibold text-gray-800">🧩 Código do Hook</h3>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
                <code>
            {`import { useEffect, useState } from "react";

            const useFetch = (url) => {
            const [data, setData] = useState(null);
            const [loading, setLoading] = useState(true);
            const [error, setError] = useState(null);

            useEffect(() => {
                if (!url) return;

                setLoading(true);
                setError(null);

                fetch(url)
                .then((res) => {
                    if (!res.ok) throw new Error("Erro na requisição");
                    return res.json();
                })
                .then((data) => setData(data))
                .catch((err) => setError(err.message))
                .finally(() => setLoading(false));
            }, [url]);

            return { data, loading, error };
            };

            export default useFetch;`}
                </code>
            </pre>

            <h3 className="text-xl font-semibold text-gray-800">🔍 Passo a passo</h3>
            <ol className="list-decimal list-inside text-gray-700 space-y-1">
                <li>Inicializamos os estados: <code>data</code> (nulo), <code>loading</code> (true) e <code>error</code> (nulo).</li>
                <li>Dentro do <code>useEffect</code>, verificamos se a <code>url</code> foi passada. Se não, saímos do efeito.</li>
                <li>Começamos a requisição com <code>fetch()</code>.</li>
                <li>Se a resposta não for OK, lançamos um erro que é capturado no <code>catch()</code>.</li>
                <li>Se der certo, transformamos a resposta com <code>res.json()</code> e salvamos os dados com <code>setData()</code>.</li>
                <li>Se houver erro, atualizamos o estado de <code>error</code> com a mensagem do erro.</li>
                <li>Por fim, seja qual for o resultado, <code>loading</code> vira <code>false</code>.</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-800">🧪 Como usamos no componente</h3>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
                <code>
            {`const { data, loading, error } = useFetch("https://dog.ceo/api/breeds/image/random");`}
                </code>
            </pre>
            <p className="text-gray-700">
                A URL que passamos é usada para buscar uma imagem aleatória de doguinho 🐕‍🦺  
                Depois, com base nos estados retornados, mostramos uma mensagem de carregando, erro ou o conteúdo carregado.
            </p>

            <p className="text-sm text-gray-500 mt-4">
                💡 Esse padrão ajuda a desacoplar lógica de rede dos componentes e facilita reuso.
            </p>
            </div>

    </div>
  );
};

export default FetchExample;
