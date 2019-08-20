import React from 'react';
import './App.css';

function App() {
  return (
    <section className="todoapp">
			<header className="header">
				<h1>todos</h1>
				<input className="new-todo" placeholder="What needs to be done?" autofocus />
			</header>
			<section className="main">
				<input id="toggle-all" className="toggle-all" type="checkbox" />
				<label htmlFor="toggle-all">Mark all as complete</label>
  

        {
          /**
           * This part needs to be edited.
           */
        }
				<ul className="todo-list"></ul>



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

export default App;
