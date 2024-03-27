/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";

export const FunctionComponent = () => {
  
    const [count, setCount] = useState(0)

    useEffect(() => {
         // Cette fonction sera appelée lorsque le composant sera monté
        console.log('Function Mounted OU changment de la valeur Count')
       
        return () => {
            console.log('Function Component unmounted')
        }
        // Cette fonction sera appelée lorsque le composant sera démonté

    } , [count])

    return (
    <div>
      <h1>Mon composant 'function'</h1>
      <div className="flex w-fit border p-2 m-5">
        <p className="pr-5">Count: {count}</p>
        <button className="btn btn-primary" onClick={() =>setCount( (prev) => prev + 1) }>+</button>
      </div>
    </div>
  );
}