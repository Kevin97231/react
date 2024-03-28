import { useState } from "react";
import { useToggle } from "../../hook/useToggle";
import { useIncrement } from "../../hook/useIncrement";

/* eslint-disable react/no-unescaped-entities */
export const CustomHook = () => {
  return (
    <>
      <h1>Les hooks personnalisés</h1>

      <h2>Exemple 1:</h2>
      <p>
        Dans une appli React, on peut souvent avoir besoin de faire varier une
        valeur entre true et false (par exemple avec une case à cocher pour
        afficher/masquer un élément). On peut factoriser la logique créant un
        hook personnalisé qu'on réutilisera sur plusieurs composants
      </p>
      <Exemple1 />
      <Exemple2 />
    </>
  );
};

const Exemple1 = () => {
  const [checked, setChecked] = useState(false);
  const [state, toggle] = useToggle(false);

  const handleCheck = () => {
    setChecked((prevValue) => !prevValue);
  };

  return (
    <>
      <div>
        <p>
          <strong>Sans le customHook</strong>
        </p>
        <input type="checkbox" checked={checked} onChange={handleCheck} />
        {checked ? <p>Case cochée</p> : <p>Case non cochée</p>}
      </div>
      <div>
        <p>
          <strong>Avec le customHook</strong>{" "}
        </p>
        <input type="checkbox" checked={state} onChange={toggle} />
        {state ? <p>Case cochée</p> : <p>Case non cochée</p>}
      </div>
    </>
  );
};

const Exemple2 = () => {
  const {count, increment, decrement} = useIncrement({});

  const {count: count2, increment: increment2, decrement: decrement2} = useIncrement({
    min: 0,
    max: 10
  });

  return (
    <>
      <div className="border">
        <p>
          Je veux utiliser un hook personnalisé pour incrémenter / décrémenter
          une valeur
        </p>
        {count}
        <br />
        <button className="btn" onClick={increment}>
          +
        </button>
        <button className="btn" onClick={decrement}>
          -
        </button>
      </div>

        {/* EXEMPLE 2 */}
      <div className="border">
        <p>
          Je veux utiliser un hook personnalisé pour incrémenter / décrémenter
          une valeur
        </p>
        {count2}
        <br />
        <button className="btn" onClick={increment2}>
          +
        </button>
        <button className="btn" onClick={decrement2}>
          -
        </button>
      </div>
    </>
  );
};
