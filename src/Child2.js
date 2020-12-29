import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer'

const Child2 = () => {
    let [state, dispatch] =useReducer(CounterReducer,1);


return(
    <div>
        <h1>This is Second Child using Counter Reducer</h1>
        <h3>Value of Reducer is : {state}</h3>
        <button onClick = {() => dispatch('INCREMENT')}>Increment Reducer</button>
    </div>
)
}

export default Child2;