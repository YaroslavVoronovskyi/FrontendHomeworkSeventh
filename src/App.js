import './App.css';
import React from 'react'
import { Component } from 'react';
import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

// Task 1-3
class Button extends Component {
	constructor(props) {
		super(props)
		this.state = {
			counter: 0,
		};
	}

	onIncreaseEvent = () => {
		this.setState({
			counter: this.state.counter + 1
		})
	}

	render() {
		const value = this.props.title;
		return (
			<div className='Button'>{value}
				<br />
				<span>{this.state.counter} </span>
				<br />
				<button onClick={this.onIncreaseEvent}>click</button>
				<br />
				<span>{this.state.counter}</span>
				<br />
				<button onClick={this.onIncreaseEvent}>click</button>
				<br />
				<span>{this.state.counter}</span>
				<br />
				<button onClick={this.onIncreaseEvent}>click</button>
			</div>
		)
	}
}

class PropsSender extends Component {
	state = {
		title: 'Hello you from PropsSender component',
	};

	render() {
		return <Button title={this.state.title} />;
	}
}

// Task Todo list with class components
const App = () => {

	const [todo, setTodo] = useState("");

	const [todos, setTodos] = useState([]);

	const addTodo = () => {
		if (todo !== '') {
			setTodos([...todos, todo]);
			setTodo('');
		}
	}

	const deleteTodo = (text) => {
		const newTodos = todos.filter((todo) => {
			return todo !== text;
		});
		setTodos(newTodos);
	};

	return (
		<div className="App">
			<h1>React Todo App</h1>
			<TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
			<TodoList list={todos} remove={deleteTodo} />
		</div>
	);
};


// Task Toto list with functions
function TodoListFuntion() {
	const [todos, setTodos] = useState([])
	const [inputValue, setInputValue] = useState('')

	function handleChange(e) {
		setInputValue(e.target.value)
	}

	function handleSubmit(e) {
		e.preventDefault()
		setTodos([...todos, inputValue])
		setInputValue('')
	}

	function handleDelete(index) {
		const newTodos = [...todos]
		newTodos.splice(index, 1)
		setTodos(newTodos)
	}
	return (
		<div>
			<h1>Todo List</h1>
			<form>
				<input type='text' value={inputValue} onChange={handleChange} />
				<button onClick={handleSubmit}>Add Todo</button>
			</form>
			<ul>
				{todos.map((todo, index) => (
					<li key={index}>{todo}
						<button onClick={() => handleDelete(index)}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default PropsSender;
// export default App;
// export default TodoListFuntion;
