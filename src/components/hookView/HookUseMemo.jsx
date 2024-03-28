import { useMemo, useState } from "react";

export const HookUseMemo = () => {
  return (
    <>
        <div className="pb-10">
            <WithOutMemoComponent/>
            
        </div>
        <WithUseMemo/>
    </>
  );
}

const WithOutMemoComponent = () => {
    const [numbers, setNumbers] = useState([1,2,3,4,5])
    const [input, setInput] = useState('')

    const total = () => {
        console.log('SOMME EFFECTUEE')
        return  numbers.reduce((acc, num) => acc + num, 0);
    }

    const sum = total()

    const addNumber = () => {
        setNumbers([...numbers, Math.random() * 10])
    }
    
    console.log("chargement du composant 'without useMemo")

    return(
        <>
            <h2>Composant useMemo</h2>
            <p>Sum: {sum}</p>
            <button className="btn m-5" onClick={addNumber}></button>
            <div>
                <input 
                className="mx-5 input input-bordered"
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                {input}
            </div>
        </>
    )
}

const WithUseMemo = () => {
    const [numbers, setNumbers] = useState([1,2,3,4,5])
    const [input, setInput] = useState('')

    // const sum = numbers.reduce((acc, num) => acc + num, 0);

    const addNumber = () => {
        setNumbers([...numbers, Math.random() * 10])
    }

    const sum = useMemo ( () => {
        console.log("calcul avec useMemo !")
        return numbers.reduce((acc, num) => acc + num, 0);
    }, [numbers])

    return(
        <>
            <h2>Composant useMemo</h2>
            <p>Sum: {sum}</p>
            <button className="btn m-5" onClick={addNumber}></button>
            <div>
                <input 
                className="mx-5 input input-bordered"
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                {input}
            </div>
        </>
    )
}