import { Component } from "react";
import "./App.css";
import initialTodos from "./components/TodoList/todos.json";
import shortid from "shortid";
// import Container from "./components/Container/Container";
import TodoList from "./components/TodoList/Todolist";
import TodoEditor from "./components/TodoEditor/TodoEditor";
import Filter from "./components/TodoFilter/TodoFilter";
import Modal from "./components/Modal/Modal";
import Tabs from "./components/Tabs/Tabs";
// import Clock from "./components/Clock/Clock";
import items from "./tabs.json";
import IconButton from "./components/IconButton/IconButton";
import { ReactComponent as AddIcon } from "../src/icons/add.svg";

class App extends Component {
  state = { todos: initialTodos, filter: "", showModal: false };
  componentDidMount() {
    console.log("App componentDidMount");
    const todos = localStorage.getItem("todos");
    const parsedTodo = JSON.parse(todos);

    if (parsedTodo) {
      this.setState({ todos: parsedTodo });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("App componentDidUpdate");
    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;
    if (nextTodos !== prevTodos) {
      console.log("Обновилось поле todos, записываю todos в хранилище");
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
    //закрытие модалки при добавление туду
    // if (this.state.todos.length > prevState.todos.length) {
    //   this.toggleModal();
    // }
  }

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

    this.toggleModal(); //закрытие модалки при добавление туду
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
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { todos, filter, showModal } = this.state;

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
        <IconButton onClick={this.toggleModal}>
          {" "}
          <AddIcon
            width="40"
            heigth="40"
            fill="white"
            aria-label="добавить туду"
          />
        </IconButton>
        <Tabs items={items} />
        {/* <Clock /> */}
        <button type="button" onClick={this.toggleModal}>
          Открыть модалку
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSubmit={this.addTodo} />
            <button type="button" onClick={this.toggleModal}>
              Закрыть модалку
            </button>
          </Modal>
        )}

        {/* <Form onSubmit={this.formSubmitHandler} /> */}
        {/* <h1>Состояние компонента</h1>

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
