import react from "react";

export const Preguntas = (props) => {
    return <main>
        <div className="historia">
            <h1>
                {props.pregunta}
            </h1>
        </div>
        <div className="opciones">
            
            <div className="opcion">
                <button id="A" className="botones" onClick={props.handleClick}>A</button>
                <h2>{props.respA}</h2>
            </div>
            
            <div className="opcion">
                <button id="B" className="botones" onClick={props.handleClick}>B</button>
                <h2 >{props.respB}</h2>
            </div>

        </div>
    </main>
}
