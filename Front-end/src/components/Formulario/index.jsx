import Input from "../Input"
import Botao from "../Botao"
import { useState } from "react"

function Formulario({adicionarTarefa}){

    const [titulo, setTitulo] = useState("")
    const [descricao, setDescricao] = useState("")

    function prevenirAdicionar(e){
        e.preventDefault()

        let novaTarefa = 
        {
            nome:titulo,
            descricao:descricao
        }
        setTitulo("")
        setDescricao("")
        console.log(novaTarefa)
        adicionarTarefa(novaTarefa)
    }
    
    return(
        <form  
            className="
            flex
            flex-col
            gap-3"
            onSubmit={prevenirAdicionar}
        >
                <Input 
                value={titulo}
                placeholder="
                Qual a nova Tarefa ?
                " 
                className="
                border 
                p-2
                text-center
                rounded"
                onChange={(e)=>setTitulo
                (e.target.value)}
                />
                <Input 
                    value={descricao}
                    placeholder="
                    Descreva a tarefa
                    "
                    className="
                    border 
                    p-2 
                    rounded
                    text-center
                    "
                    onChange={(e)=>setDescricao
                    (e.target.value)}
                />
                <Botao 
                    className="
                    bg-blue-500 
                    text-white 
                    py-2 
                    rounded 
                    hover:bg-blue-600 
                    transition
                    "
                    placeholder="Adicionar Tarefa" 
                    type="submit"
                >
                    Adicionar Tarefa
                </Botao>
        </form>
    )
}

export default Formulario