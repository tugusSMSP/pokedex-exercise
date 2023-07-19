import './Pokecard.css'
const Pokecard = ({data}) => {
    return (  
        <div className='pokeCard'>
            <span className='pokeCard-title'>{data.name}</span>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`} alt={data.name}/>
            <div className='pokeCard-bottom'>
                <span>Type: {data.type}</span>
                <span>Exp: {data.base_experience}</span>
            </div>
        </div>
    );
}
 
export default Pokecard;