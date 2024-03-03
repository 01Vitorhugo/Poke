import StatesProvider from "./ApiPokemon";
import Home from "./componentes/Home";


function App() {
  return (
    <>
      <StatesProvider>
        <Home />
      </StatesProvider>

    </>
  );
}

export default App;
