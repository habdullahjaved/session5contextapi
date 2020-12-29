import React, { useState } from  'react';
import './App.css';
import Parent from './Parent.js';
import CounterContext from './CounterContext';
function App() {
     let countState =useState(1);
  // let [count, setcount] = useState(25);
  return (
    <CounterContext.Provider value={countState}>
    <div >
      <Parent name = "Abdullah" />
    </div>
    </CounterContext.Provider>
  );
}

export default App;


// session-5-contextapi.surge.sh