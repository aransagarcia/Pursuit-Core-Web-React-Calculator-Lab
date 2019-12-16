import React from 'react';
//import Sum from './Component/Sum'
import Buttons from './Component/Buttons'
import './App.css';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      displayValue: '0',
      previousValue: '',
      operator: ' ',
      waitingForNewValue: false,
      input: ' '
    }
  }

  FirstValue = (event) => {
    let storeInput = event.target.value
    this.setState({
      previousValue: storeInput
    })
  }

  componentDidUpdate() {
    console.log('state updated', this.state)
  }


  handleOperator = (event) => {
    this.setState({
      operator: event.target.value
    })
  }


SolveEquation = () =>{
  const {previousValue, operator} = this.state
  if(operator === 'sum'){

    } if (operator === 'division'){

  } if (operator === 'multiply'){

  } if (operator === 'sub'){

  }
}

  render() {
    const { previousValue } = this.state
    return (
      <div>
        <h1> Calculator Lab</h1>
        <button className="DisplayNumber"> {previousValue} </button>

        <Buttons
          FirstValue={this.FirstValue}
          handleOperator={this.handleOperator}
        />
        {/* <Sum /> */}



      </div>
    )
  }

}

export default App;
