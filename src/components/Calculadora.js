
import React from "react";

class Calculadora extends React.Component {
    // ni el constructor ni las props son estrictamente necesarios
    constructor(props) {
        super(props)
        this.state = {
            num1: "",
            num2: "",
            resultado: ""
        }





    }

    handlerInput = (evento) => {


        console.log(evento);
        let name = evento.target.name;
        this.setState({
            [name]: Number(evento.target.value)
        })
    }

    sumar = () => {
        this.setState({
            resultado: (this.state.num1 + this.state.num2)
        })


    }

    restar = () => {
        this.setState({
            resultado: (this.state.num1 - this.state.num2)
        })


    }

    mult = () => {
        this.setState({
            resultado: (this.state.num1 * this.state.num2)
        })


    }

    div = () => {
        this.setState({
            resultado: (this.state.num1 / this.state.num2)
        })


    }

    bin = () => {
        this.setState({
            resultado: this.state.num1.toString(2)
        })


    }


    render() {


        // Esto es lo que mostrara el componente
        return (
            <div class="capaExterior">
                <h1>Calculadora</h1>
                <p>
                    <span>Primer Numero <input type="number" name="num1" onChange={this.handlerInput} /> </span>
                    <span>Segundo Numero <input type="text" name="num2" onChange={this.handlerInput} disabled={this.state.num1.length < 1} /> </span>
                    Resultado: {this.state.resultado}
                </p>

                <hr />

                <button onClick={this.sumar}> Sumar</button>
                <button onClick={this.restar}> Resta</button>
                <button onClick={this.mult}> Multiplicar</button>
                <button onClick={this.div}> Dividir</button>
                <button onClick={this.bin}> binario</button>

                <hr />
                <h2>Historial</h2>

            </div>







        )
    }

}

export default Calculadora;