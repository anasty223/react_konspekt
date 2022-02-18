import React, { Component } from "react";
// import { toast } from "react-toastify";
import { ImSearch } from "react-icons/im";

const styles = { form: { marginBottom: 20 } };

export default class PokemonForm extends Component {
  state = {
    pokemonName: "",
  };
  handleNameChange = (event) => {
    this.setState({ pokemonName: event.currentTarget.value.toLowerCase() });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.pokemonName.trim() === "") {
      alert("Введите имя покемона.");
      return;
    }
    this.props.onSubmit(this.state.pokemonName);
    this.setState({ pokemonName: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} style={styles.form}>
        <input
          type="text"
          name="pokemonname"
          value={this.state.pokemonName}
          onChange={this.handleNameChange}
        />
        <button type="submit">
          <ImSearch style={{ margnRight: 8 }} />
          Найти
        </button>
      </form>
    );
  }
}
