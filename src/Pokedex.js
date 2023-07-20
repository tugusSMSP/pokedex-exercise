import Pokecard from "./Pokecard";
import './Pokedex.css'

const Pokedex = ({pokeData}) => {
    let sumXp = 0
    for (let i = 0; i < pokeData.length; i++) {
        const xp = pokeData[i].base_experience;
        sumXp += xp
    }
    
    return (  
        <div className="pokedex">
            <h1>Pokedex</h1>
            <span>{sumXp}</span>
            <div className="pokedex-pokecardBg">
                {
                    pokeData && pokeData.map((data, i) => <Pokecard key={i} data={data}/>)
                }
            </div>
        </div>
    );
}
 
export default Pokedex;