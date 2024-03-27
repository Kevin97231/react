/* eslint-disable react/no-unescaped-entities */
import { Component } from "react";

export class ClassComponent extends Component {

    // Le constructeur est appelé lorsqu'une instance de classe est créé 
    // ( -> à chaque fois quon fera un 'new ClassComponent)
    constructor(props) {
        // Appel au constructeur parent avec les props
        super(props);
        // Initialiser notre état avant montage du composant
        this.state = {
            count: 0,            
        };
        // Lier la méthode incrementCount à l'instance actuelle de la classe
        this.incrementCount = this.incrementCount.bind(this)
    }

    // Est appelé après que le composant soit monté dans le DOM
    componentDidMount(){
        console.log("Class mounted")
    }

    // Est appelé juste avant que le composant soit rétiré du DOM
    componentWillUnmount(){
        console.log('Class unmounted')
    }

    // Méthode pour incrémenter le compteur
    incrementCount() {
        this.setState((prevState) => ({count: prevState.count + 1}));
    }

    // La méthode est obligatoirement et retourne le JSX à afficher
    render() {
        return (
            <div>
                <h1>Mon composant 'class'</h1>

                <div className="flex w-fit border p-2 m-5">
                    <p className="pr-5">Count: {this.state.count}</p>
                    <button className="btn btn-primary" onClick={this.incrementCount}>+</button>
                </div>
            </div>
        )
    }
}