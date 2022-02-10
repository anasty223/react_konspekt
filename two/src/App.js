import { Component } from "react";
import "./App.css";
import ColorPicker from "./components/ColorPicker";
import Counter from "./components/Counter";
import Dropdown from "./components/Dropdown";
import TodoList from "./components/TodoList/Todolist";

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

class App extends Component {
  state = {
    todos: [
      { id: "id-1", text: "Выучить основы React", complited: false },
      { id: "id-2", text: "Разобраться с React Router", complited: false },
      { id: "id-3", text: "Пережить Redax", complited: false },
    ],
  };
  render() {
    const todos = this.state;
    return (
      <>
        <h1>Состояние компонента</h1>;{/* <Counter initialValue={10} /> */}
        {/* <Dropdown /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        <TodoList todos={todos} />
      </>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       {/* <Counter initialValue={10} /> */}
//       {/* <Dropdown /> */}
//       {/* <ColorPicker options={colorPickerOptions} /> */}

//       <TodoList />
//     </div>
//   );
// }

export default App;
