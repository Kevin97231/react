import { useState } from "react";

/* eslint-disable react/no-unescaped-entities */
const Formulaire = () => {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(new FormData(e.target));
  };

  return (
    <>
      <h1>Les formulaires</h1>

      <h2>Les champs contrôlés</h2>
      <p>
        En react, nous avons un concept que nous pouvons appeler les champs
        contrôlés. En utilisant le <strong>onChange()</strong> d'une input et le
        hook useState(). Ainsi, nous pouvons mettre à jour une variable lié à
        l'input à chaque changement.
      </p>

      <div className="p-5 mt-5 border mb-10 w-fit">
        <p>Bonjour, {name !== "" ? name : "entrez votre nom"}</p>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          className="mb-5 ml-5 input input-bordered"
        />
      </div>

      <h2>Les champs classiques</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="login"
          defaultValue="login"
          className="mb-5 ml-5 input input-bordered"
        />
        <input
          type="password"
          name="password"
          defaultValue="password"
          className="mb-5 ml-5 input input-bordered"
        />
        <button className="ml-2 btn">Envoyer</button>
      </form>
    </>
  );
};

export default Formulaire;
