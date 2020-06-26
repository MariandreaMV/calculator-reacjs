import React, {Component} from 'react';


class Cell extends Component{

    constructor(){
      super();
      this.state ={
        numero: null,
        operation: "",
      }
    }

    handleclick = () => {
      this.props.printScreen(this.props.num);
    }

    render(){
      return(
        <button className="square btn btn-outline-dark" onClick={this.handleclick}>
          {this.props.display}
        </button>
      );
    };
}


export default Cell;
