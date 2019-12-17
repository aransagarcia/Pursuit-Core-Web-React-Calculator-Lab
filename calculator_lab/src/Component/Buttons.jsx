import React from 'react'


function Buttons(props) {

    const { ClickValue, HandleOperator, solveEquation, display, resetCalculator, addToDisplay } = props
    return (
        <div className='mainContainer'>
          


            <input className="DisplayNumber" input = {this.state.display}> {display} </input>

            <button className='button orange'
            onClick={resetCalculator} > AC </button>

            <button className='button orange' value='percentage'> % </button>

            <button className='button orange'>±</button>

            <button className='button orange' onClick={HandleOperator} value='divide'> / </button>

            <button className='button' onClick={addToDisplay} value='7'> 7</button>

            <button className='button' onClick={ClickValue}  value='8'> 8</button>

            <button className='button' onClick={ClickValue}  value='9'> 9</button>

            <button className='button orange' onClick={HandleOperator} value="multiply"> x </button>





            <button className='button' onClick={ClickValue} value='4'> 4</button>

            <button className='button' onClick={ClickValue}value='5'> 5 </button>

            <button onClick={ClickValue} className='button' value='6'> 6 </button>

            <button className='button orange' onClick={HandleOperator} value='sub'> - </button>

            <button className='button' onClick={ClickValue}  value='1'> 1</button>

            <button className='button' onClick={ClickValue}  value='2'> 2 </button>

            <button className='button' onClick={ClickValue}  value='3'>  3</button>

            <button className='button orange'  onClick={HandleOperator} value='add'> + </button>

            <button className='button zero' onClick={ClickValue}  value='9'> 0</button>

            <button className='button' value="decimal"> .</button>

            <button className='button orange' onClick={solveEquation} value='equal'> = </button>


    

        </div>

    )
}


export default Buttons;