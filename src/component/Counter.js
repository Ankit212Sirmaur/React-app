import React, { useState } from 'react'

function Counter() {

  let [count, setCounter] = useState(0);

  function updateCount(){
    setCounter(count+1);
    console.log(count, "value of current counter");
  }
  return (
    <div>
      <p>the value of counter is: {count} </p>
      <button onClick={updateCount}>Increment</button>
    </div>
  )
}

export default Counter;