import Tarefa from "../Tarefa"

function ListaDeTarefas({tarefa, tarefaCompleta}){
    return(
        <div className="space-y-3">
            <ul>
                {tarefa.map(item=>(
                    
                    <Tarefa 
                    item={item} 
                    key={item.id}
                    onClick={() => tarefaCompleta(item.id)}
                />
                ))}
            </ul>
        </div>
    )
}

export default ListaDeTarefas
