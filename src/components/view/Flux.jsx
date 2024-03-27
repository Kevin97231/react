import { useState } from "react";

/* eslint-disable react/prop-types */
function Flux () {

    const [checked, setChecked] = useState(true)

    const data = [
        { nom: 'Produit 1', prix: 20.99, quantite: 5},
        { nom: 'Produit 2', prix: 15.45, quantite: 10},
        { nom: 'Produit 3', prix: 75.32, quantite: 58},
        { nom: 'Produit 4', prix: 30.00, quantite: 25},
        { nom: 'Produit 5', prix: 26.00, quantite: 16},
    ];

    return(
        <>
        <h1>Les flux de données</h1>
        <ComposantEnfant/>
        <ComposantEnfant text="Je t'envoie un texte !"/>
        <ComposantEnfant text="Je t'envoie un texte !" products={data}/>
        <CheckBox checked={checked} onCheck={setChecked}/>

        <br />
        { checked ? 'case chochée' : 'case non cochée'}
        </>
    )
}

const ComposantEnfant = ({text = 'passe moi ton texte !', products = []}) => {

    return(
        <div className="border m-5">
            <p>Je suis le composant Enfant !</p>

            <p>{text}</p>

            { products.length > 0 ? 

                products.map((product) => 
                    <div key={product.nom}>
                        <p>Nom: {product.nom}</p>
                        <p>prix: {product.prix}</p>
                        <p>quantite: {product.quantite}</p>
                    </div>
                )
                :
                (<></>)
            }
        </div>
    )
}

function CheckBox ({checked, onCheck}) {
    return(
        <div className="border m-5">
            <label>
                <input 
                    type="checkbox" 
                    onChange= { (e) =>  onCheck(e.target.checked)}
                    checked= {checked}
                />
            </label>
        </div>
    )
}

export default Flux;