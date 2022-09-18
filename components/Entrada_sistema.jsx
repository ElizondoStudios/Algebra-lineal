import React from "react"

function Entrada_sistema(props){
    const[ecuacion1, setEcuacion1]= React.useState("");
    const[ecuacion2, setEcuacion2]= React.useState("");
    const[ecuacion3, setEcuacion3]= React.useState("");
    let sistema=[];

    return(
        <div className="entrada-sistemas">
            <form 
             onSubmit={event => event.preventDefault()}
             className="entrada-sistemas--form"
            >
                <label htmlFor="sistema">Seleccione el tamaño del sistema</label>
                <select 
                 name="sistema"
                 id="sistema" 
                 onChange={e => props.cambiarSistema(e.target.value)}
                >
                    <option value="2x2">2x2</option>
                    <option value="3x3">3x3</option>
                </select>
                <h3>Introducir sistema: </h3>
                <input type="text" onChange={e => setEcuacion1(e.target.value)}/>
                <input type="text" onChange={e => setEcuacion2(e.target.value)}/>
                {props.sistema=="3x3" && <input type="text" onChange={e => setEcuacion3(e.target.value)}/>}
                <button 
                 onClick={()=>{
                    sistema.push(ecuacion1)
                    sistema.push(ecuacion2)
                    sistema.push(ecuacion3)
                    props.crearMA(sistema)}}
                >resolver sistema</button>
            </form>
        </div>
    )
}

export default Entrada_sistema