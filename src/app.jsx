class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            done: props.done,
            text: props.text
        };

        this.handleClick  = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick(event) {
        this.setState(
            state => ({
                done: !state.done
            }),
            function(event) {
                this.handleSubmit(event);
            }
        );
    }

    handleChange(event) {
        this.setState(state => ({
            text: event.target.value
        }));
    }

    handleSubmit(event) {
        console.log("TODO: Implement submit handler!")
    }

    render() {
        return <div className="todo">
            <span>
                <input type="checkbox" checked={this.state.done}
                                       onClick={this.handleClick}/>

                <input type="text" value={this.state.text}
                                   onChange={this.handleChange}
                                   onBlur={this.handleSubmit}/>
            </span>
        </div>;
    }
}

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [
                {_id: 1, text: "Item #1", done: false},
                {_id: 2, text: "Item #2", done: true}
            ]
        }

        this.newTodo = this.newTodo.bind(this);
    }

    newTodo(event) {
        event.preventDefault();

        let todos = this.state.todos;
        todos.push({ _id: "" })

        this.setState(
            state => ({
                todos: todos
            })
        )
    }

    render() {
        const todoList = this.state.todos.map(
            (todo) => <Todo key={todo._id.toString()} text={todo.text} done={todo.done}/>
        );

        return <React.Fragment>
            <h1>React to-do list</h1>
            { todoList }
            <a href="#" onClick={this.newTodo}>Add Item</a>
        </React.Fragment>
    }
}

ReactDOM.render(
    <TodoList/>,
    document.getElementById("root")
);