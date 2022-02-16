import React from "react";
import "./App.css"

export default class Calc extends React.Component{
 
 state = {
   n1:null,
   n2:null,
   res:null
 }

 add = () => {
   this.setState({
     res: this.state.n1 + this.state.n2
   })
 }
 
 sub = () => {
  this.setState({
    res: this.state.n1 - this.state.n2
  })
}

mult = () => {
  this.setState({
    res: this.state.n1 * this.state.n2
  })
}

div = () => {
  this.setState({
    res: this.state.n1 / this.state.n2
  })
}

clear = () => {
  this.setState({
    n1:"",
    n2:"",
    res: null
  })
}

handleChange1 = (e) => {
  this.setState({
    n1: Number(e.target.value)
  })
}

handleChange2 = (e) =>{
  this.setState({
    n2: Number(e.target.value)
  })
}

render(){
 
    return(
      <div className="calc-cont">
        <h1>Calculadora</h1>
        <div className="tela">
        <h2>{this.state.res}</h2>
        </div>
        <input onChange={this.handleChange1} value={this.state.n1} placeholder="Primeiro Número"/>
        <input onChange={this.handleChange2} value={this.state.n2} placeholder="Segundo Número"/>
        <div className="cont-btn">
        <button onClick={this.add}>+</button>
        <button onClick={this.sub}>-</button>
        <button onClick={this.mult}>*</button>
        <button onClick={this.div}>/</button>
        <button onClick={this.clear}>C</button>
        </div>
      </div>
    )
  }
}
