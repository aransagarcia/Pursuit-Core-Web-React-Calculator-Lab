
import React from 'react';
import './App.css';
import Buttons from './Component/Buttons'



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      display: 0,
      previous: null,
      operator: null
    }
  }

  // handleFormSubmit = (event) => {
  //   event.preventDefault();
  // }

  resetCalculator = (event) => {
    this.setState({
      display: 0,
      previous: null,
      operator: null
    })
  }

  ClickValue = (event) => {
    this.setState({
      display: event.target.value
    })
    console.log(event.target.value, 'ClickValue')
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
        />

      </div>




    )
  }
}

export default App;




// import React from 'react';
// import './App.css';
// import Buttons from './component/Buttons'

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       display: 0,
//       previous: null,
//       operator: null
//     }
//   }
//   handleFormSubmit = (event) => {
//     event.preventDefault();
//   }
//   resetCalculator = (event) => {
//     this.setState({
//       display: 0,
//       previous: null,
//       operator: null
//     })
//   }
//   buttonChange = (event) => {
//     // console.log('event.target.value', event.target.value)
//     this.setState({
//       display: event.target.value
//     })
//   }
//   operatorValue = (event) => {
//     this.setState({
//       operator: event.target.value,
//       previous: this.state.display
//     })
//     console.log('previous', this.state.previous)
//   }
//   solveEquation = () => {
//     console.log('WE ARE IN THE solveEquation FUNCTION')
//     const { previous, display, operator } = this.state
//     if (previous && operator && display) {
//       if (operator === '+') {
//         this.setState({
//           display: Number(previous) + Number(display)
//         })
//       } else if (operator === '-') {
//         this.setState({
//           display: Number(previous) - Number(display)
//         })
//       } else if (operator === 'x') {
//         this.setState({
//           display: Number(previous) * Number(display)
//         })
//       } else if (operator === '/') {
//         this.setState({
//           display: Number(previous) / Number(display)
//         })
//       }
//     }
//   }
//   handlePercent = () => {
//     const { display } = this.state
//     const result = Number(display) / 100
//     console.log('handlePercent is being called', result)
//     this.setState({
//       display: result
//     })
//   }






//   render() {
//     return (
//       <div className="App">
//         <Buttons
//           display={this.state.display}
//           handleFormSubmit={this.handleFormSubmit}
//           buttonChange={this.buttonChange}
//           operatorValue={this.operatorValue}
//           solveEquation={this.solveEquation}
//           resetCalculator={this.resetCalculator}
//           handlePercent={this.handlePercent}
//         />
//       </div>
//     );
//   }
// }
// export default App;




// import React from 'react';
// //import Sum from './Component/Sum'
// import Buttons from './Component/Buttons'
// import './App.css';


// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       displayValue: '0',
//       previousValue: null,
//       operator: null,

//     }
//   }





//   FirstValue = (event) => {
//     let storeInput = event.target.value.concat()
//     console.log(storeInput)
//     this.setState({
//       displayValue: storeInput
//     })
//   }


//   componentDidUpdate() {
//     console.log('state updated', this.state)
//   }


//   handleOperator = (event) => {
//     this.setState({
//       operator: event.target.value
//     })
//   }


//   // SolveEquation = () => {
//   //   const { previousValue, operator } = this.state
//   //   if (operator === 'sum') {
//   //     this.setState({
//   //       displayValue: Number(previousValue) + Number(displayValue)
//   //     })
//   //   } if (operator === 'division') {
//   //     this.setState({
//   //       displayValue: Number(previousValue) + Number(displayValue)
//   //     })

//   //   } if (operator === 'multiply') {
//   //     this.setState({
//   //       displayValue: Number(previousValue) + Number(displayValue)
//   //     })


//   //   } if (operator === 'sub') {
//   //     this.setState({
//   //       displayValue: Number(previousValue) + Number(displayValue)
//   //     })
//   //   }
//   // }





//   render() {
//     const { displayValue } = this.state
//     return (
//       <div>
//         <h1> Calculator Lab</h1>
//         <button className="DisplayNumber"> {displayValue} </button>

//         <Buttons
//           FirstValue={this.FirstValue}
//           handleOperator={this.handleOperator}
//         />
//         {/* <Sum /> */}



//       </div>
//     )
//   }

// }

// export default App;
