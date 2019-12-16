import React from 'react'


function Buttons  (props) {

    const {FirstValue, handleOperator } = props
    return (
        <div >
            
        <button  onClick = {FirstValue}className='button' value ='1'> 1</button>

        <button  onClick = {FirstValue}className='button' value ='2'> 2 </button>

        <button  onClick = {FirstValue}className='button' value ='3'>  3</button>

        <button  onClick = {FirstValue}className='button' value ='4'> 4</button>

        <button  onClick = {FirstValue}className='button' value ='5'> 5 </button>

        <button onClick = {FirstValue} className='button' value ='6'> 6 </button>

        <button  onClick = {FirstValue}className='button' value ='7'> 7</button>

        <button  onClick = {FirstValue}className='button' value ='8'> 8</button>

        <button onClick = {FirstValue} className='button' value ='9'> 9</button>

        <button onClick = {FirstValue} className='button' value ='9'> 0</button>
        
<br></br>

       <div className ="operatitons">
            <button onClick = {handleOperator} value = "multiply"> x </button>
            <button onClick = {handleOperator}  value = 'sum'> + </button>
            <button  onClick = {handleOperator} value = 'sub'> - </button>
            <button  onClick = {handleOperator} value= 'division'> / </button>
            <button  onClick = {handleOperator} value = '='> = </button>
</div>            

       
        </div>





    )
}


export default Buttons;