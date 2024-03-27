/* eslint-disable react/prop-types */

import { useState } from "react";

/* eslint-disable no-unused-vars */
function Exercice() {
  return (
    <>
      <h1>Excercie</h1>
      <pre>
        {/* number correspond à la quantité */}
        {`
                    const products = [
                        { category: 'Fruits', price: '$1', number: 0, name: 'Banana' },
                        { category: 'Fruits', price: '$1', number: 2, name: 'Mango' },
                        { category: 'Fruits', price: '$2', number: 0, name: 'Pineapple' },
                        { category: 'Vegetables', price: '$2', number: 4, name: 'Broccoli' },
                        { category: 'Vegetables', price: '$4', number: 0, name: 'Carrot' },
                        { category: 'Vegetables', price: '$1', number: 6, name: 'Zucchini' }
                    ];
                `}
      </pre>
      <pre>
        {`
                    1)  Créer un composant parent et deux composants enfants (ou 1 composant parent et un composant enfant qu'on appelle 2 fois)

                        Les deux composants enfant afficheront un tableau contenant les colonnes 'nom', 'prix' et 'quantité'. Le premier enfant affichera UNIQUEMENT les fruits,
                        le second uniquement les légumes

                        (Utiliser la fonction filter() pour trier)

                    2)  Ajouter une case à cocher permettant de masquer / afficher les produits qui ne sont pas en stock (s'aider de l'attribut 'number' représentant la quantité)

                    3)  Ajouter une barre de recherche permettant de faire une recherche sur le 'name' sur l'ensemble du tableau
                `}
      </pre>
      <Parent/>

    </>
  );
}


const Parent = () => {

    const products = [
        { category: 'Fruits', price: '$1', number: 0, name: 'Banana' },
        { category: 'Fruits', price: '$1', number: 2, name: 'Mango' },
        { category: 'Fruits', price: '$2', number: 0, name: 'Pineapple' },
        { category: 'Vegetables', price: '$2', number: 4, name: 'Broccoli' },
        { category: 'Vegetables', price: '$4', number: 0, name: 'Carrot' },
        { category: 'Vegetables', price: '$1', number: 6, name: 'Zucchini' }
    ];

    const fruits = products.filter( product => product.category === 'Fruits')
    const legumes = products.filter( product => product.category === 'Vegetables')

    // Pour la case à cocher
    const [afficherHorsStock, setAfficherHorsStock] = useState(true)
    const handleCheckBox = () => setAfficherHorsStock(!afficherHorsStock)

    // Pour la barre de recherhce
    const [search, setSearch] = useState("")
    const handleSearch = (e) => setSearch(e.target.value)

    return (
        <div className="border-b mb-5">
            <label>Afficher hors stock</label>
            <div className="flex">
                <input
                    type='checkbox'
                    checked={afficherHorsStock}
                    onChange={handleCheckBox}
                />
                <input
                    type='text'
                    value={search}
                    onChange={handleSearch}
                />
            </div>
            <Enfant products={fruits} afficherHorsStock={afficherHorsStock} search={search}/>
            <Enfant products={legumes} afficherHorsStock={afficherHorsStock} search={search}/>
        </div>
    );
}

const Enfant = ({products=[], afficherHorsStock, search}) => {
    return(
        <>
            <table className="table table-zebra">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prix</th>
                        <th>Quantité</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.filter( (product) => 
                            (afficherHorsStock ? true : product.number > 0)
                            && 
                            (product.name.toLowerCase().includes(search.toLowerCase()))
                        )
                        .map((product) => 
                            <tr key={product.name}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.number}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    );
}

export default Exercice;