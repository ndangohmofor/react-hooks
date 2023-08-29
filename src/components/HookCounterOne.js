import React, { useEffect, useState } from "react"

const HookCounterOne = () => {
    const [count, setCounter] = useState(0);

    useEffect(() => {
        document.title = `You Clicked ${count} times`
    }, [count])

  return (
    <div>
      <button onClick={() => setCounter(count + 1)}>
        Click {count} times
      </button>
    </div>
  )
};

export default HookCounterOne;
