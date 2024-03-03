import { useContext, useState } from "react";
import { StateContext } from "../../ApiPokemon";
import "../../css/home.css"


export default function Home() {

    const { api } = useContext(StateContext);
    const [numero, setNumero] = useState(1);

    const [acertos, setAcertos] = useState(0);
    const [erros, setErros] = useState(0);

    //    console.log(api.name)

    function troca(item) {

        if (api.name === item.name) {
            setAcertos(acertos + 1);

        } else {
            setErros(erros + 1)

        }
        var num = numero + 1;
        setNumero(num);

    }
    // console.log(numero);

    function troca1(item){
        var name = 'erro';
        if(name === item.name){
            setAcertos(acertos + 1);

        }else{
            setErros(erros + 1)

        }
        var num = numero + 1;
        setNumero(num);
    }


    return (

        <div className="homePoke">

            <h1>Qual é esse Pokémon?</h1>
            <h2>{acertos}/{erros}</h2>

            <div className="box-poke">
                {
                    api.map((item) => {
                        return (
                            item.id === numero &&
                            <div className="pokemon">
                                <img src={item.img} alt="imagem pokemon" />

                                <div className="button">
                                    <button onClick={() => troca(item.name)}>{item.name}</button>
                                    <button onClick={() => troca1(item)}>Bulbasaur</button>
                                    <button onClick={() => troca1(item)}>Squirtle</button>
                                    <button onClick={() => troca1(item)}>Charmander</button>
                                    <button onClick={() => troca1(item)}>Wartortle</button>

                                </div>

                            </div>

                        )
                    })
                }

                {
                    numero === 6 && 
                    <h1>Você acertou {acertos} de 5</h1>
                }
            </div>

        </div>



    )

}