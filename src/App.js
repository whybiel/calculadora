import React from "react";
import "./App.css"

export default class Calc extends React.Component{
 
 state = {
   n1: null,
   n2: null,
   res: null,
   sinal: null
 }

 add = () => {
  if (this.state.n1 && this.state.n2 !== "null" || "") {
    this.setState({
      res: this.state.n1 + this.state.n2,
      sinal: "+"
    })
  }else {
    this.setState({
      res: "Digite um valor nos espaços"
    })
  } 
  
 }
 
 sub = () => {
  if (this.state.n1 && this.state.n2 !== "null" || "") {
    this.setState({
      res: this.state.n1 - this.state.n2,
      sinal: "-"
    })
  }else {
    this.setState({
      res: "Digite um valor nos espaços"
    })
  } 
}

mult = () => {
  if (this.state.n1 && this.state.n2 !== "null" || "") {
    this.setState({
      res: this.state.n1 * this.state.n2,
      sinal: "*"
    })
  }else {
    this.setState({
      res: "Digite um valor nos espaços"
    })
  } 
}

div = () => {
  if (this.state.n1 && this.state.n2 !== "null" || "") {
    this.setState({
      res: this.state.n1 / this.state.n2,
      sinal: "÷"
    })
  }else {
    this.setState({
      res: "Digite um valor nos espaços"
    })
  } 
}
med = () => {
  if (this.state.n1 && this.state.n2 !== "null" || "") {
    this.setState({
      res: (this.state.n1 + this.state.n2)/2,
      sinal: "+/2"
    })
  }else {
    this.setState({
      res: "Digite um valor nos espaços"
    })
  } 
}
porcent = () => {
  if (this.state.n1 && this.state.n2 !== "null" || "") {
    this.setState({
      res: (this.state.n1 * this.state.n2)/100,
      sinal: "+/100"
    })
  }else {
    this.setState({
      res: "Digite um valor nos espaços"
    })
  } 
}

clear = () => {
  if (this.state.n1 && this.state.n2 !== "null" || "") {
    this.setState({
      n1:"",
      n2:"",
      res: 0,
      sinal:""
    })
  } else {
    this.setState({
      res: "Digite um valor nos espaços"
    })
  }
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
        <h3>{this.state.sinal}</h3>
        <input onChange={this.handleChange2} value={this.state.n2} placeholder="Segundo Número"/>
        <div className="cont-btn">
        <button onClick={this.add}>+</button>
        <button onClick={this.sub}>-</button>
        <button onClick={this.mult}>x</button>
        <button onClick={this.div}>÷</button>
        <button onClick={this.med}>Me</button>
        <button onClick={this.porcent}>%</button>
        <button onClick={this.clear}>C</button>
        </div>
      </div>
    )
  }
}
