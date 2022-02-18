import { Component } from "react";
import "./App.css";
// import { ToastContainer } from "react-toastify";
import PokemonForm from "./components/PokemonForm/PokemonForm";
import PokemonInfo from "./components/PokemonInfo/PokemonInfo";

class App extends Component {
  state = { pokemonName: "" };

  handleFormSubmit = (pokemonName) => {
    console.log(pokemonName);
    this.setState({ pokemonName });
  };

  render() {
    return (
      <div style={{ maxWidth: 1170, margin: "0 auto", padding: 20 }}>
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
        {/* <ToastContainer autoClose={3000} /> */}
      </div>
    );
  }
}

export default App;
