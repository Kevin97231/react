import { useState } from "react";

function HookUseState(){

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount((prevState) => prevState + 1);
    }

    const decrement = () => {
        setCount( (prevState) => prevState - 1);
    }

    return(
        <div className="w-fit m-auto">
            <h1>Le hook useState</h1>
            <div>
                {count}
            </div>
            <button onClick={increment} className="border">+ 1</button>
            <button onClick={decrement} className="border">- 1</button>
        </div>
    )
}

export default HookUseState;