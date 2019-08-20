import React from 'react'

class Todo extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <li data-id="{{id}}" class="{{completed}}">
				<div class="view">
					<input class="toggle" type="checkbox" checked={this.props.todo.completed} />
					<label>{this.props.todo.title}</label>
					<button class="destroy"></button>
				</div>
			</li>
    )
  }
}

export default Todo;