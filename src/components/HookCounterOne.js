import React, { useEffect, useState } from "react"

const HookCounterOne = () => {
    const [count, setCounter] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log("useEffect - updating document title")
        document.title = `You Clicked ${count} times`
    }, [count])

  return (
    <div>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setCounter(count + 1)}>
        Click {count} times
      </button>
    </div>
  )
};

export default HookCounterOne;
