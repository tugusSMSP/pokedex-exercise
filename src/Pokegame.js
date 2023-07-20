import { Component } from "react";
import Pokedex from "./Pokedex";

class Pokegame extends Component {
    static defaultProps = {
        pokemon: [
            {id:4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id:7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id:11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id:12, name: 'ButterFree', type: 'flying', base_experience: 178},
            {id:25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id:39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id:94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id:113, name: 'Eevee', type: 'normal', base_experience: 65},
        ]
    }

    render(){
    let dexOne = []
    let dexTwo = [...this.props.pokemon]
    while(dexOne.length < dexTwo.length){
        let randomNum = Math.floor(Math.random() * dexTwo.length)
        let getPokemon = dexTwo.splice(randomNum, 1)[0]
        dexOne.push(getPokemon)
    }
        return(
            <div>
                <Pokedex pokeData={dexOne}/>
                <Pokedex pokeData={dexTwo}/>
            </div>
        )
    }
}

export default Pokegame;