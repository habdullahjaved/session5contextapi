import React, { useContext } from 'react';
import counterContext from './CounterContext';

const Child = (props) =>{
    let counterValue = useContext(counterContext);
    console.log(counterValue);
    return(
       
        <div>
            <h1>This is First Child using Counter Context</h1>
            <h3>Counter Value is : {counterValue[0]}</h3>

            <button onClick={()=>{counterValue[1](++counterValue[0])}}>Increment Context</button>
        </div>
    )
}

export default Child;