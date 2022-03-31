import react, {Component} from "react";
import data from "./data.json";
import { Preguntas } from "./Preguntas";
import { RespAnteriores } from "./RespAnteriores";


class Main extends Component{
    constructor(){
        super();
        this.state = {
            respAnteriores:[],
            ultimaResp:'',
            cont: 1,
            indiceArray:0
        }
        this.handleClick = this.handleClick.bind(this);

    }

    
    handleClick(e){
        const idBoton = e.target.id;
        console.log(`handleclick el boton presionado fue: ${idBoton}`);
        console.log(idBoton);
        if( this.state.cont >= 5){
            alert("FIN")
            return 
        }
        this.setState({
            cont: this.state.cont+1,
            ultimaResp: idBoton

        });
        console.log(`handleClick this.state.ultimaResp: ${this.state.ultimaResp}`);
        console.log(`handleClick this.state.cont: ${this.state.cont}`);
    }

    filtarData(){
        return data.findIndex(pregunta => pregunta.id === this.state.cont+this.state.ultimaResp.toLowerCase());
    }


    componentDidUpdate(prevProps, prevState){
        console.log(`componentDidUpdate: prevState.cont: ${prevState.cont}`);
        console.log(`componentDidUpdate: newState.ultimaResp: ${this.state.cont}`);
        if(prevState.cont !== this.state.cont){
            this.setState({
                respAnteriores: [...this.state.respAnteriores, this.state.ultimaResp], 
                indiceArray: this.filtarData()
            })
        }
    }



    render(){
            console.log( "render: el indice es: " +this.state.indiceArray);
        return(
            <div className="layout">
                <Preguntas key={data[this.state.indiceArray].id} pregunta={data[this.state.indiceArray].historia} handleClick={this.handleClick} respA={data[this.state.indiceArray].opciones.a } respB={data[this.state.indiceArray].opciones.b} />
                <RespAnteriores ultimaResp={this.state.ultimaResp} historial={this.state.respAnteriores.map(( e, i )=>(<li key={i}>{e}</li>))}/>
            </div>
        )
    }
}

export default Main;