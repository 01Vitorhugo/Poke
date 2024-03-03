import { createContext, useState } from "react"

export  const StateContext = createContext({});

export default function StatesProvider({ children }) {

    const [ api ] = useState([
        { id: 1, name: "Mew", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png" },
        { id: 2, name: "Eevee", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png" },
        { id: 3, name: "Grookey", img: "https://swordshield.pokemon.com/assets/img/articles/pokemon_grookey_2x.png" },
        { id: 4, name: "Pikachu", img: "https://cdn.pixabay.com/photo/2020/07/21/16/10/pokemon-5426712_1280.png" },
        { id: 5, name: "Koraidon", img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/1007.png" },
      
    ]);



    return (
        <StateContext.Provider value={{ api }}> 
            {children}
        </StateContext.Provider>
    )


}









