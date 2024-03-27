/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";

/* eslint-disable react/no-unescaped-entities */
export const RequeteHttp = () => {
  return (
    <>
      <h1>Les requêtes HTTP</h1>
      <h2>Rappel</h2>
      <p>
        <a
          className="underline pb-5"
          href="https://developer.mozilla.org/fr/docs/Web/HTTP/Methods"
        >
          Lien pour la documentation
        </a>
      </p>
      <strong>En résumé: </strong>
      <ul className="pl-5 list-dics pb-5">
        <li>
          <strong>GET: </strong> Sert à récupérer des données
        </li>
        <li>
          <strong>POST: </strong> Utilisé avec 'body', très souvent en JSON (xml
          sur d'anciennes appli.). Exemple d'utilisation: Une reqête 'create'
          qui contiendra un objet dans son body
        </li>
        <li>
          <strong>PUT: </strong> Mm logique que le POST, à la différence qu'on
          l'utilise pour mettre à jour une ressource
        </li>
        <li>
          <strong>DELETE: </strong> Utilisé pour supprimmer une ressource. (En
          général, il existe des méthode 'deleteById' sur les API backend)
        </li>
      </ul>
      <h2>La bibliothèque axios: </h2>
      <a className="underline" href="https://axios-http.com/fr/docs/example">
        documentation axios
      </a>

      <p className="pt-5">Les adresses avec notre JSON server: </p>
      <ul>
        <li>
          <strong>GET: http://localhost:3001/products</strong>
        </li>
        <li>
          <strong>POST: http://localhost:3001/products</strong>
        </li>
        <li>
          <strong>PUT: http://localhost:3001/products/id</strong>
        </li>
        <li>
          <strong>DELETE: http://localhost:3001/products/id</strong>
        </li>
      </ul>
      <Exemple />
    </>
  );
};

const Exemple = () => {
  const url = "http://localhost:3001/products";

  // La requête est déclenchée à chaque rendu du composant. A la fin du get, la requête se relance, ce qui remodifie product, se qui redéclenche la requête etc .

  // Version 1
  // const [products, setProducts] = useState([])

  // Attention, ne pas reproduire ! (sinon on spam les requêtes en boucle)
  // axios.get(url)
  //   .then( (response) => {
  //     console.log(response)
  //     setProducts(response.data)
  //   })
  //   .catch( (err) => console.log(err.message))
  //   .finally ( () => console.log('Requête terminée'))

  // EQUIVALENT AU axios.get ci-dessus
  // const get = async () => {
  //   try{
  //     const response = await axios.get(url)
  //   }
  //   catch (err){
  //     console.log(err.message)
  //   }
  // }
  // ____________________________________________________________

  //  Bonne pratique: isoler avec un useEffect()

  // 1 -> Utiliser un useState pour qui gérerea les produits
  const [products, setProducts] = useState([]);

  // 2 -> J'utilise un useEffect() qui me permettra d'effectuer le get uniquement au montage un composant

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(url)
        .then((response) => {
          console.log(response);
          setProducts(response.data);
        })
        .catch((err) => console.log(err.message))
        .finally(() => console.log("Requête terminée"));
    };
    fetchData();
  }, []);

  const addProduct = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const newProduct = {
      category: formData.get('category'),
      name: formData.get('name'),
      number: formData.get('number'),
      price: formData.get('price')
    }

    console.log('formData', formData);
    console.log('nouveau produit', newProduct);

    axios.post(url, newProduct)
      .then( (response) => {
        console.log('reponse du post -> ', response)
        setProducts((prevProducts) => [...prevProducts, response.data])
      })
      .catch(err => console.log("une erreur s'est produite", err.message))
  }

  return (
    <>
      <div className="border m-5 p5">
        <Table products={products} />
      </div>
      <div className="py-10 border-t">
        <ProductForm addproduct={addProduct}/>
      </div>
    </>
  );
};

const Table = ({ products }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prix</th>
            <th>Quantité</th>
            <th>Catégorie</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.number}</td>
              <td>{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const ProductForm = ({addproduct}) => {
  return(
    <>
      <h2>Requêtes POST: </h2>
      <form onSubmit={addproduct}>
        <div className="grid grid-cols-4 gap-4 mb-5">
          <input
            name="name"
            className="flex input input-bordered"
            type='text'
            placeholder="Nom"
          />
           <input
            name="number"
            className="flex input input-bordered"
            type='number'
            placeholder="Quantité"
          />
           <input
            name="price"
            className="flex input input-bordered"
            type="number"
            placeholder="Prix"
          />
           <input
            name="category"
            placeholder="Catégorie"
            className="flex input input-bordered"
            type="text"
          />
        </div>
        <button type="submit" className="btn btn-outline btn-primary">Ajouter</button>
      </form>
    </>
  )
}