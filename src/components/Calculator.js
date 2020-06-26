import React, {Component} from 'react';
import Cell from "./Cell.js";
import Screen from './Screen.js'

class Calculator extends Component{


  constructor(){
    super();
    this.state = {
      keyPressed : "",
      number: "",
      simbol:0,
      acumulator:0,
    }
  }

  generateCalculator = () => {
    let board = [];
    let cont = 19;
    for (var i = 0; i < 5; i++) {
      let row = [];

      for (var j = 0; j < 4; j++) {

        switch(cont) {
          case 19:  row.push(<Cell key = {cont} display ={"%"} num ={cont} printScream = {this.printScream} />); break;
          case 18:  row.push(<Cell key = {cont} display ={"CE"} num ={cont} printScream = {this.printScream} />);break;
          case 17:  row.push(<Cell key = {cont} display ={"C"} num ={cont} printScream = {this.printScream} />);break;
          case 16:  row.push(<Cell key = {cont} display ={"/"} num ={cont} printScream = {this.printScream} />);break;
          case 15:  row.push(<Cell key = {cont} display ={"+"} num ={cont} printScream = {this.printScream} />);break;
          case 14:  row.push(<Cell key = {cont} display ={"-"} num ={cont} printScream = {this.printScream} />);break;
          case 13:  row.push(<Cell key = {cont} display ={"X"} num ={cont} printScream = {this.printScream} />);break;
          case 12:  row.push(<Cell key = {cont} display ={"="} num ={cont} printScream = {this.printScream} />);break;
          case 11:  row.push(<Cell key = {cont} display ={"."} num ={cont} printScream = {this.printScream} />);break;
          case 10:  row.push(<Cell key = {cont} display ={"+/-"} num ={cont} printScream = {this.printScream} />);break;

          default:  row.push(<Cell key = {cont} display ={cont} num ={cont} printScream = {this.printScream} />);break;
        }
        cont --;
      }
      board.push(<div className="row" key = {i}>{row}</div>);
    }



    return board;
  }


  calculate = (n1) => {
    let number1 = parseFloat(n1);
    let number2 = parseFloat(this.state.number);
    console.log("numer1:",number1);
    console.log("simbol: ",this.state.op);
    console.log("numer2:",number2);
    switch(this.state.op) {
      case  19: this.setState({ number: `${number1%number2 }`});break;
      case  16: this.setState({ number: `${number1/number2 }`});break;
      case  15: this.setState({ number: `${number1+number2 }`});break;
      case  14: this.setState({ number: `${number1-number2 }`});break;
      case  13: this.setState({ number: `${number1*number2 }`});break;

    }
  }



  operating = (key) => {
    if(key!=12)
    this.setState({
      keyPressed:0,
      number: ""
    })
    else{
      this.setState({
        keyPressed:0,
      })
    }
  }


  printScream = (pressed) => {

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
                    number: "",
                    simbol:0,
                    acumulator:0});break;
        case 18:  this.setState({
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
    }else{
      this.setState({
        keyPressed: pressed,
        number: `${this.state.number}${pressed}`,
      })
    }
  }


    render(){
      return(
        <div>
          <Screen number ={this.state.number} keyPressed = {this.state.keyPressed} operating = {this.operating} simbol = {this.state.simbol} calculate = {this.calculate}/>
          {this.generateCalculator()}
        </div>
      );
    };
}









export default Calculator;
