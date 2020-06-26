import React, {Component} from 'react';
import Cell from "./Cell.js";
import Screen from './Screen.js';
import { useState, useEffect } from 'react';

class Calculator extends Component{


  constructor(){
    super();
    this.state = {
      keyPressed : "",
      number: "",
      simbol:0,
      acumulator:0,
      previous:0,
      n1:0,
      n2:0
    }
  }


  generateCalculator = () => {
    let board = [];
    let cont = 19;
    for (var i = 0; i < 5; i++) {
      let row = [];

      for (var j = 0; j < 4; j++) {

        switch(cont) {
          case 19:  row.push(<Cell key = {cont} display ={"%"} num ={cont} printScreen = {this.printScreen} />); break;
          case 18:  row.push(<Cell key = {cont} display ={"CE"} num ={cont} printScreen = {this.printScreen} />);break;
          case 17:  row.push(<Cell key = {cont} display ={"C"} num ={cont} printScreen = {this.printScreen} />);break;
          case 16:  row.push(<Cell key = {cont} display ={"/"} num ={cont} printScreen = {this.printScreen} />);break;
          case 15:  row.push(<Cell key = {cont} display ={"+"} num ={cont} printScreen = {this.printScreen} />);break;
          case 14:  row.push(<Cell key = {cont} display ={"-"} num ={cont} printScreen = {this.printScreen} />);break;
          case 13:  row.push(<Cell key = {cont} display ={"X"} num ={cont} printScreen = {this.printScreen} />);break;
          case 12:  row.push(<Cell key = {cont} display ={"="} num ={cont} printScreen = {this.printScreen} />);break;
          case 11:  row.push(<Cell key = {cont} display ={"."} num ={cont} printScreen = {this.printScreen} />);break;
          case 10:  row.push(<Cell key = {cont} display ={"+/-"} num ={cont} printScreen = {this.printScreen} />);break;

          default:  row.push(<Cell key = {cont} display ={cont} num ={cont} printScreen = {this.printScreen} />);break;
        }
        cont --;
      }
      board.push(<div className="row" key = {i}>{row}</div>);
    }



    return board;
  }


  calculate = () => {

    let number1 = parseFloat(this.state.n1);
    let number2 = parseFloat(this.state.number);
    console.log("numer1:",number1);
    console.log("simbol: ",this.state.previous);
    console.log("numer2:",number2);
    switch(this.state.previous) {
      case  19: this.setState({ number: `${number1%number2 }`});break;
      case  16: this.setState({ number: `${number1/number2 }`});break;
      case  15: this.setState({ number: `${number1+number2 }`});break;
      case  14: this.setState({ number: `${number1-number2 }`});break;
      case  13: this.setState({ number: `${number1*number2 }`});break;

    }
    this.setState({
      n1: this.state.number,
      previous:0
    });
  }



  operating = (key) => {
    if(key!=12)
    this.setState({
      keyPressed:0,
    })
    else{
      this.setState({
        keyPressed:0,
      })
    }
  }


  printScreen = (pressed) => {

    if(pressed > 9){
      if(pressed !=12 && pressed!=18 && pressed!=19 && pressed!= 11 &&pressed !=10){
        this.setState({
          op: pressed
        })
      }

      let simb;
      switch(pressed) {
        case 19:  simb ="%"; break;
        case 17: this.setState({
                    op:0,
                    number: "",
                    simbol:0,
                    acumulator:0});break;
        case 18:  this.setState({
                    op:0,
                    number: "",
                    simbol:0,
                    acumulator:0});break;
        case 16:  simb = "/";break;
        case 15:  simb = "+";break;
        case 14:  simb = "-";break;
        case 13:  simb = "*";break;
        case 10:  let num = parseFloat(this.state.number);
                  if (num < 0 ){
                    num = num * (-1);
                    this.setState({
                      keyPressed: pressed,
                      number: `${num}`,
                    });break;
                  }
                  else
                  this.setState({
                    keyPressed: pressed,
                    number: `-${this.state.number}`,
                  });break;
        case 11:  this.setState({
                    keyPressed: pressed,
                    number: `${this.state.number}.`,
                  });break;
        case 12:  simb = "=";break;
      }
      this.setState({
        keyPressed: pressed,
        simbol :simb,
      })

      console.log("operation",pressed);
      if(this.state.previous!=0 && pressed!=11 &&pressed!=10)
      this.calculate();


    }else{

      if(this.state.op>9){
        console.log("aqui");
          if(this.state.previous==0 ){
          this.setState({
            n1: this.state.number,
            number: pressed,
            previous:this.state.op,

          })}


      }else

      this.setState({
        keyPressed: pressed,
        number: `${this.state.number}${pressed}`,

      })
    }
  }


    render(){
      return(
        <div className = "container">
          <Screen number ={this.state.number} keyPressed = {this.state.keyPressed} operating = {this.operating} simbol = {this.state.simbol} calculate = {this.calculate}/>
          {this.generateCalculator()}
        </div>
      );
    };
}









export default Calculator;
