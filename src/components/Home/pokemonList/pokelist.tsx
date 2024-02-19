import axios, { AxiosResponse } from 'axios';
import { useState,useEffect } from 'react';

interface PokeCard {
    id?:number
    name:string,
    url:string
}

interface PokeObject {
    count:number,
    next:string,
    pervious:string,
    results:PokeCard[]
}



function Card(pkcard:PokeCard){
    var id = Number(pkcard.id) + 1
    return(
        <>
        <a href={`/pokemon/${id}`}>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
        <h1>{id}</h1>
        <h3>{pkcard.name}</h3>
        </a>
        </>
    )
}

function Pokelist() {

    const [PokeData,SetPokeData] = useState<PokeObject>()

    
    const fetchData = async () => {
        try {
            const response: AxiosResponse = await axios.get('https://pokeapi.co/api/v2/pokemon');
            const responseData: PokeObject = response.data;
            SetPokeData(responseData);
        } catch (error) {
            console.log(error);
        }

    };

    useEffect(() => {
        console.log("poke object retreived")
        fetchData();
      }, []);

    
    console.log(PokeData);

    const renderCards = () => {
        return PokeData?.results.map((card:PokeCard,idx:number) => {
          return <Card id={idx} name={card.name} url={card.url} />;
        });
      };
    
    return (
        <>
            {renderCards()}
        </>
    )

}


export default Pokelist;

