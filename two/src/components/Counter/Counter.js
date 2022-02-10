import React, { Component } from "react";
import "./Counter.css";
import Controls from "./Controls";
import Value from "./Value";

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };
  static propType = {
    //
  };
  state = {
    //state= это всегда обьект
    value: this.props.initialValue,
  };

  handleIncrement = (event) => {
    this.setState((prevState) => {
      return { value: prevState.value + 1 };
    });
    // console.log(event.target); //event.target, event.type...это доступно только в синхронном коде.Когда эта функция выполнилась, event был очищен и ждет слюдействия
  }; //решение чтоб сохранить с event это создать переменную const target=event.target -для ассинхронного кода

  handleDecrement = () => {
    // this.setState({
    //   value: 10,
    // }); =это для того чтоб просто перезаписать новое значение
    this.setState((prevState) => {
      return { value: prevState.value - 1 }; //увеличивает на + 1
    });
  };

  render() {
    return (
      <div className="Counter">
        <Value value={this.state.value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDcrement={this.handleDecrement}
        />
      </div>
    );
  }
}
export default Counter;
