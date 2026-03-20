import { useState, useEffect } from "react";
import Formulario from "../../components/Formulario";
import ListaDeTarefas from "../../components/ListaDeTarefas";
import Botao from "../../components/Botao";
import Usuarios from "../../Components/Usuarios";
import api from "../../services/api"
import imagemLimparTarefas from "../../assets/tarefa-concluida.png"
function ListaTarefas() {
    
  const [users, setUsers] = useState([])

  const titulo ="Lista de tarefas";
  
  const [tarefas, setTarefas] = useState(()=>{
    const salva = localStorage.getItem("lista-de-tarefas")
    if(salva){
      return JSON.parse(salva)
    }
    return[]
  })
  
  useEffect(()=>{
      async function getUsers(){
    const usersFromApi = await api.get("/usuarios")
    setUsers(usersFromApi.data)
    console.log(usersFromApi.data)
  }
    getUsers()
},[])
  
  useEffect(()=>{
    localStorage.setItem(
      'lista-de-tarefas', 
      JSON.stringify(tarefas))
    },[tarefas])
    
    function adicionarTarefa(novaTarefa) {
    if (novaTarefa.nome.trim() === "") {
      alert("Digite uma tarefa valida!");
      return;
    }

    const tarefaExistente = tarefas.some(
      (tarefa) =>
        tarefa.nome.toLowerCase().trim() ===
        novaTarefa.nome.toLowerCase().trim(),
    );

    if (tarefaExistente) {
      alert("Essa tarefa ja foi criada");
      return;
    }

    setTarefas((tarefasAnteriores) => {
      const tarefaComId = {
        id: tarefasAnteriores.length + 1,
        completa: false,
        ...novaTarefa,
      };
      return [...tarefasAnteriores, tarefaComId];
    });
  }
  
  function tarefaCompleta(id) {
    setTarefas(
      tarefas.map((tarefa) => {
        if (tarefa.id === id) {
          return {
            ...tarefa,
            completa: !tarefa.completa,
          };
        }
        console.log("clicou", id);
        return tarefa;
      }),
    );
  }

    function limparTarefas() {
    setTarefas([]);
  }







  return (
    <div
      className="
        min-h-screen 
      bg-slate-700 
        flex 
        flex-col 
        items-center 
        pt-10
        "
    >
      <h1
        className="
        text-3xl 
        text-slate-100 
        font-bold 
        text-center
        "
      >
        {titulo}
      </h1>
      <div
        className="
      bg-white 
      w-full 
      max-w-md 
      rounded-lg 
      shadow-lg 
      p-6 
      space-y-4
      items-center
      "
      >
        <Formulario
          className="
          "
          adicionarTarefa={adicionarTarefa}
        />
      </div>
      <div
        className="
        w-full
        max-w-md
        mt-10
      bg-white
        rounded-xl
        shadow-lg
        p-4
        space-y-3
        "
      >
        <ListaDeTarefas tarefa={tarefas} tarefaCompleta={tarefaCompleta} />
      </div>

      <Botao
        type="button"
        onClick={limparTarefas}
        className="
          bg-gray-500
          hover:bg-gray-400
          rounded-3xl
          w-12
          "
      >
        {<img src={imagemLimparTarefas} alt="Limpar Tarefas" />}
      </Botao>
        <Usuarios className="bg-amber-300 w-96 h-24" usuarios={users}></Usuarios>
    </div>
  );
}


export default ListaTarefas;