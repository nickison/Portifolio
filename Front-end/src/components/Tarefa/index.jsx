import Botao from "../Botao"
import imagemConcluida from "../../assets/marca-de-verificacao.png"

function Tarefa({item, onClick }){
    return(
            <li className={`
            bg-slate-200 
            p-3 
            rounded 
            shadow-sm 
            border-2 
            border-slate-300
            flex 
            items-center 
            justify-between 
            gap-1
            hover:bg-slate-50
            ${item.completa ? "opacity-50 line-through" : ""}
            `}>

        <div>
            <h2 
            className="
            font-semibold
            "
            >
                {item.nome}
            </h2>
            <p 
            className="
            text-sm 
            text-gray-600
            "
            >
                {item.descricao}
            </p>    
        </div>
            <Botao className="
            bg-transparent
            rounded-4xl
            w-6
            " 
            type="button"
            onClick={onClick}
            >
                {<img src={imagemConcluida}/>}
            </Botao>
        </li>
    )
}

export default Tarefa