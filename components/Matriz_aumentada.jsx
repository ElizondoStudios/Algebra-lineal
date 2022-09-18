function Matriz_aumentada(props){
    return(
        <div className="matriz-aumentada">
            <div className="matriz-aumentada--simbolos">
                <p>[</p>
            </div>
            <div className="matriz-aumentada--datos">
                <p>1 2 3</p>
                <p>1 2 3</p>
                <p>1 2 3</p>
            </div>
            <div className="matriz-aumentada--simbolos">
                <p>|</p>
            </div>
            <div className="matriz-aumentada--datos">
                <p>4</p>
                <p>4</p>
                <p>4</p>
            </div>
            <div className="matriz-aumentada--simbolos">
                <p>]</p>
            </div>
        </div>
    )
}

export default Matriz_aumentada