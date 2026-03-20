import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center gap-6">

      <img src="" alt="" />

      <h1 className="text-4xl font-bold">
        Michael Nickison Dev 🚀
      </h1>

      <p className="text-gray-300">
        Desenvolvedor Full Stack em evolução
      </p>

      <div className="flex gap-4 mt-6">
        <button
          onClick={() => navigate("/tarefas")}
          className="bg-blue-500 px-6 py-3 rounded-xl hover:bg-blue-400"
        >
          Lista de Tarefas
        </button>

        <button
          onClick={() => navigate("/financeiro")}
          className="bg-green-500 px-6 py-3 rounded-xl hover:bg-green-400"
        >
          Financeiro
        </button>
      </div>
    </div>
  );
}

export default Home;