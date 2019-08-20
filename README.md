# TODO Complete

The snippet of TODO tag that needs to be copied:

``` JSX
    <li class={this.props.todo.completed ? 'completed' : ''}>
      <div class="view">
        <input class="toggle" type="checkbox" onChange={this.props.handleCheckItem.bind(this, this.props.todo.id)} checked={this.props.todo.completed} />
        <label>{this.props.todo.title}</label>
        <button class="destroy"></button>
      </div>
    </li>
```

The snippet for random number generation to be copied:

``` JS
Math.floor((Math.random()*100) + 1),
```