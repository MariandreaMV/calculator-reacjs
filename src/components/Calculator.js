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
    let cont = 23;
    for (var i = 0; i < 6; i++) {
      let row = [];

      for (var j = 0; j < 4; j++) {

        switch(cont) {
          case 23:  row.push(<Cell key = {cont} display ={"%"} num ={cont} printScream = {this.printScream} />); break;
          case 22:  row.push(<Cell key = {cont} display ={"CE"} num ={cont} printScream = {this.printScream} />);break;
          case 21:  row.push(<Cell key = {cont} display ={"C"} num ={cont} printScream = {this.printScream} />);break;
          case 20:  row.push(<Cell key = {cont} display ={"<"} num ={cont} printScream = {this.printScream} />);break;
          case 19:  row.push(<Cell key = {cont} display ={"1/x"} num ={cont} printScream = {this.printScream} />);break;
          case 18:  row.push(<Cell key = {cont} display ={"x^2"} num ={cont} printScream = {this.printScream} />);break;
          case 17:  row.push(<Cell key = {cont} display ={"x^(1/2)"} num ={cont} printScream = {this.printScream} />);break;
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
    let number1 = parseInt(n1);
    let number2 = parseInt(this.state.number);
    console.log(number1);
    console.log(number2)
    switch(this.state.op) {
      case  23: this.setState({ number: `${number1%number2 }`});break;
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
      if(pressed !=12 && pressed!=22){
        this.setState({
          op: pressed
        })
      }

      let simb;
      console.log(pressed);
      switch(pressed) {
        case 23:  simb ="%"; break;
        case 21: this.setState({
                    number: "",
                    simbol:0,
                    acumulator:0});break;
        case 22:  this.setState({
                    number: "",
                    simbol:0,
                    acumulator:0});break;
        case 16:  simb = "/";break;
        case 15:  simb = "+";break;
        case 14:  simb = "-";break;
        case 13:  simb = "*";break;
        case 11:  simb = ".";break;
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
