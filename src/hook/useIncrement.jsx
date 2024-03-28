import { useState } from "react"

export const useIncrement = (initialValue) => {

    const [state, setState] = useState(initialValue)

    const functionIncrement = () => setState( (prevValue) => prevValue + 1)

    return [state, functionIncrement]
}