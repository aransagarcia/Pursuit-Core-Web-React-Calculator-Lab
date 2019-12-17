
import React from 'react';
import './App.css';
import Buttons from './Component/Buttons'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '',
      previous: null,
      operator: null
    }
  }

  
addToDisplay = val =>{
  this.setState ({ display: this.state.display + val});
}



  resetCalculator = (event) => {
    this.setState({
      display: 0,
      previous: null,
      operator: null
    })
  }

  

  HandleOperator = (event) => {
    console.log(this.state.display)
    this.setState({
      previous: this.state.display,
      operator: event.target.value
    })
  }

  solveEquation = () => {
    console.log('WE ARE IN THE solveEquation FUNCTION')
    const { previous, display, operator } = this.state
    if (previous && operator && display) {
      if (operator === 'add') {
        this.setState({
          display: Number(previous) + Number(display)
        })
      } else if (operator === 'sub') {
        this.setState({
          display: Number(previous) - Number(display)
        })
      } else if (operator === 'multiply') {
        this.setState({
          display: Number(previous) * Number(display)
        })
      } else if (operator === 'divide') {
        this.setState({
          display: Number(previous) / Number(display)
        })
      }
    }

  }





  componentDidUpdate() {
    console.log(this.state)
  }






  render() {
    return (
      <div className='App'>

        <Buttons
          ClickValue={this.ClickValue}
          HandleOperator={this.HandleOperator}
          handleFormSubmit={this.handleFormSubmit}
          solveEquation={this.solveEquation}
          display={this.state.display}
          resetCalculator = {this.resetCalculator}
          addToDisplay = {this.addToDisplay
          }
        />

      </div>




    )
  }
}

export default App;



