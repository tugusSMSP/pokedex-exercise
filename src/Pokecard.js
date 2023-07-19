const Pokecard = ({data}) => {
    console.log(data);
    let id = data.id;
    // console.log(toString(data.id));
    for (let i = 0; toString(id).length < 3; i++) {
        id = "0"+id
    }
    // console.log(id);
    return (  
        <div>
            <span>{data.name}</span>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`} alt={data.name}/>
            <div>
                <span>Type: {data.type}</span>
                <span>Exp: {data.base_experience}</span>
            </div>
        </div>
    );
}
 
export default Pokecard;