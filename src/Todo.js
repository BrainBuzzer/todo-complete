import React from 'react'

class Todo extends React.Component {
  render() {
    return (
      <li class={this.props.todo.completed ? 'completed' : ''}>
        <div class="view">
          <input class="toggle" type="checkbox" onChange={this.props.handleCheckItem.bind(this, this.props.todo.id)} checked={this.props.todo.completed} />
          <label>{this.props.todo.title}</label>
          <button class="destroy"></button>
        </div>
      </li>
    )
  }
}

export default Todo;