import { useEffect, useState } from "react";

export const HookUseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("effet secondaire décenché !");
    document.title = `Count: ${count}`;
  }, [count]);

//   const changeTitle = () => {
//     setCount(prevValue => prevValue + 1)
//     document.title = `Count: ${count}`
//   }

  return (
      <div className="flex">
        <p className="pt-3 pr-2"> Count: {count} </p>
        <button className="btn btn-primary" onClick={() => setCount(prev => prev + 1)}>+</button>
        <h4 className="pt-2 pl-2">Regardez le titre du document !</h4>
      </div>
  );
};