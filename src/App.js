import React from 'react';
import './App.css';
import Todo from './Todo';

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			newTodoValue: "",
			todos: [
				{
					id: 1,
					completed: false,
					title: "Swimming"
				}
			]
		}
	}

	handleNewTodo = (e) => {
		this.setState({
			newTodoValue: e.target.value
		})
	}

	handleSubmit = (e) => {
		if(e.key === 'Enter') {
			this.setState((prevState) => {
				prevState.todos.push({
					id: Math.floor((Math.random()*100) + 1),
					completed: false,
					title: prevState.newTodoValue
				})

				return {
					...prevState,
					newTodoValue: ""
				}
			})
		}
	}

	handleCheckItem = (id) => {
		this.setState(prevState => {
			prevState.todos.map(todo => {
				if(todo.id === id)
					todo.completed = !todo.completed;
			})
			return {
				...prevState
			}
		});
	}
	
	render() {
		return (
			<section className="todoapp">
				<header className="header">
					<h1>todos</h1>
					<input
						className="new-todo"
						placeholder="What needs to be done?"
						autofocus
						value={this.state.value}
						onChange={this.handleNewTodo}
						onKeyPress={this.handleSubmit} />
				</header>
				<section className="main">
					<input id="toggle-all" className="toggle-all" type="checkbox" />
					<label htmlFor="toggle-all">Mark all as complete</label>
					<ul className="todo-list">
						{this.state.todos.map(todo =>
							<Todo
								key={todo.id}
								todo={todo}
								handleCheckItem={this.handleCheckItem} />
						)}
					</ul>
				</section>
				<footer className="footer">
					<span className="todo-count"></span>
					<ul className="filters">
						<li>
							<a href="#/" className="selected">All</a>
						</li>
						<li>
							<a href="#/active">Active</a>
						</li>
						<li>
							<a href="#/completed">Completed</a>
						</li>
					</ul>
					<button className="clear-completed">Clear completed</button>
				</footer>
			</section>
		);
	}
}

export default App;
