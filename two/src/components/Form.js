import { Component } from "react";

class Form extends Component {
  state = { name: "", tag: "", expirience: "junior", lisence: false };
  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  handleLisence = (e) => {
    console.log(e.currentTarget.checked);
    this.setState({ lisence: e.currentTarget.checked });
  };
  reset = () => {
    this.setState({ name: "", tag: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Имя
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Прозвище
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
          />
        </label>
        <p>Ваш уровень:</p>
        <label>
          <input
            type="radio"
            name="expirience"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.expirience === "junior"}
          />
          Junior
        </label>
        <label>
          <input
            type="radio"
            name="expirience"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.expirience === "middle"}
          />
          Middle
        </label>
        <label>
          <input
            type="radio"
            name="expirience"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.expirience === "senior"}
          />
          Senior
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            name="lisence"
            checked={this.state.lisence}
            onChange={this.handleLisence}
          />
          Согласен с условиями
        </label>
        <br />
        <button type="submit" disabled={!this.state.lisence}>
          Отправить
        </button>
      </form>
    );
  }
}
export default Form;
