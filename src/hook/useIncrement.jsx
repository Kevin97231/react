import { useState } from "react"

export const useIncrement = ({initialValue = 0, min = -Infinity, max = Infinity}) => {

    if (initialValue > max) {
        initialValue = max;
    } 
    
    if (initialValue < min){
        initialValue = min;
    }

    const [state, setState] = useState(initialValue)

    const functionIncrement = () => setState( state < max ? (prevValue) => prevValue + 1 : state)

    const functionDecrement = () => setState( state > min ? (prevValue) => prevValue - 1 : state)
 
    return {
        count: state,
        increment: functionIncrement,
        decrement: functionDecrement
    }
}