import React, { Component } from 'react';
import Buttons from './Buttons';
import FinalResult from './FinalResult';


export default class Calculator extends Component {


  state = {
    result:''
  }
  
  buttonPressed = (buttonName) => {
    if(buttonName === '='){
      this.calculate()
    }
    else if(buttonName === 'Clear'){
      this.reset()
    }
    else if (buttonName==='Back')
    {
      this.backspace()
    }
    else   
    {
      this.setState({result:this.state.result+buttonName});
    }
  }

  reset = () => {
      this.setState({result:''});
  }

  backspace = () => {
    this.setState({result:this.state.result.slice(0,-1)})
  }


  calculate = () => {
    try{
      this.setState({result:eval(this.state.result)});
    }
    catch(exception){
      this.setState({result:"error"});
    }

  }
    render() {
        return (
            <div className="App">
                <h1>Calculator</h1>
            <div className="main">
              <FinalResult result={this.state.result} /> 
              <Buttons buttonPressed={this.buttonPressed}/>
            </div>
          </div>
        );
    }
}