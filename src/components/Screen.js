import React, {Component} from 'react';


class Screen extends Component{

    constructor(){
      super();
      this.state = {
        n1: null,
        n2:null,
        op:0,
        actual: 0,
        previous:0,

      }
    }


    componentWillReceiveProps(nextProps){

        //then is pressing a simbol
        console.log(nextProps);
        if(nextProps.keyPressed > 9){
          if(nextProps.keyPressed==22 || nextProps.keyPressed ==21 ){
            this.setState({
              op:0,
              actual: 0
            })
            if(nextProps.keyPressed==21)
              this.setState({
                previous:0
              })
          }else{
          if(this.state.previous == 0){
            this.setState({
              previous : `${this.state.actual}${nextProps.simbol}`,

            })
          }else{
            //tiping numbers
            this.setState({
              previous : `${this.state.previous} ${this.state.actual} ${nextProps.simbol}`,
            })
          }

          if(!this.state.n1 ){
              this.setState({
                n1: this.state.actual,
              })
          }

          //asking for the total
          if(nextProps.keyPressed == 12){
            nextProps.calculate(this.state.n1);
            this.setState({
              n1: null,
            })
          }

          nextProps.operating(nextProps.keyPressed);
        }
        }else{
          this.setState({
            actual: nextProps.number
          })
        }
      }


    render(){
      return(
        <div className ="screen">
          <div className="previous">{this.state.previous}</div>
          {this.state.actual}
        </div>
      );
    };
}


export default Screen;
