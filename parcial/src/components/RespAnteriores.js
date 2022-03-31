import react from "react";

export const RespAnteriores = (props) => {
    return <div className="recordatorio">
        <h3>Selección Anterior: {props.ultimaResp}</h3>
        <h4>Historial de opciones elegidas: </h4>
        <ol>{ props.historial }</ol>
    </div>
}
