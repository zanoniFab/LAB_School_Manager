function ListAtendimentos({children}) {

    return (
        <div className="list-atendimento">
                {children}
        </div>
    )

}

export default ListAtendimentos;

// function ListAtendimentos({list}) {

//     return (
//         <div className="list-atendimento">
//             <ul>
//                 {list.map((item)=> (
//                     <li key={item.id}>
//                         <CardAcompanhamentoPedagogico
//                             id={item.id}
//                             data={item.date}
//                             nomeAluno={item.nomeAluno}
//                             titulo={item.title}
//                         />
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )

// }

// export default ListAtendimentos;