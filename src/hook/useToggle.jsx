import { useState } from "react"

export const useToggle = (initial) => {
    const [state, setState] = useState(initial)
    const toggle = () => setState(!state)

    return [state, toggle]
}