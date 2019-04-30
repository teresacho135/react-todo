import React, { Components } from React;
import Todo from './Todo';

class Todos extends Component {
    render() {
        
        let todos = this.props.todos.map( (todo) => {
            return(
                <Todo
                    key={todo._id}
                    todo={todo}/>
            )
        })

        return(
            <ul>
                {todos}
            </ul>
        )
    }
}

export default Todos;