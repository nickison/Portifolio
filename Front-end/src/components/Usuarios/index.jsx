function Usuarios({usuarios}){
    return(
        <div>
            <ul>
                {usuarios.map((usuario)=>(
                    <li
                    key={usuario.id}
                    >
                        <h2
                        placeholder="nome do usuario"
                        >{usuario.name}</h2>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default Usuarios