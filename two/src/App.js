import { Component } from "react";
import "./App.css";
import ColorPicker from "./components/ColorPicker";
import Counter from "./components/Counter";
import Dropdown from "./components/Dropdown";
import TodoList from "./components/TodoList/Todolist";
import initialTodos from "./components/TodoList/todos.json";
import Form from "./components/Form";
import TodoEditor from "./components/TodoEditor/TodoEditor";
import shortid from "shortid";
import Filter from "./components/Filter/Filter";

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
    todos: initialTodos,
    filter: "",
  };
  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };
  addTodo = (text) => {
    const todo = {
      id: shortid.generate(),
      text,
      complited: false,
    };
    this.setState((prevState) => ({ todos: [todo, ...prevState.todos] }));
  };
  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  formSubmitHandler = (data) => {
    console.log(data);
  };

  handleNameChange = (event) => {
    console.log(event.currentTarget.value);
    this.setState({ name: event.currentTarget.value });
  };
  handleTagChange = (event) => {
    this.setState({ tag: event.currentTarget.value });
  };
  toggleComplited = (todoId) => {
    console.log(todoId);
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === todoId) {
          console.log("нашли тот туду который нужно");
          return {
            ...todo,
            completed: !todo.complited,
          };
        }
        return todo;
      }),
    }));
  };

  render() {
    const { todos, filter } = this.state;

    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
    const normalazed = this.state.filter.toLocaleLowerCase;
    const visibleTodo = this.state.todos.filter((todo) =>
      todo.text.toLowerCase().includes(normalazed)
    );
    return (
      <>
        <TodoEditor onSubmit={this.addTodo} />
        {/* <Form onSubmit={this.formSubmitHandler} /> */}
        {/* <h1>Состояние компонента</h1> */}

        {/* <input
          type="text"
          value={this.state.value}
          onChange={this.handleNameChange}
        /> */}
        {/* <Counter initialValue={10} /> */}
        {/* <Dropdown /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}

        <div>
          <p>Общее кол-во: {totalTodoCount}</p>
          <p>Кол-во выполненных: {completedTodoCount}</p>
        </div>
        <Filter value={filter} onChange={this.changeFilter} />
        <TodoList
          todos={todos}
          onDeleteTodo={this.deleteTodo}
          onToggleComplited={this.onToggleComplited}
        />
      </>
    );
  }
}

export default App;

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
