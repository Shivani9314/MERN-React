import React, { useState } from 'react';

function CounterComponemt() {
    const [count,setCount] = useState(0);
     
  function Counter(){
      setCount(count+1);
  }  

  return (
    <div>
        <p>lets increment : {count}</p>
        <button onClick={Counter}>Increment</button>
    </div>
  );
}

export default CounterComponemt;