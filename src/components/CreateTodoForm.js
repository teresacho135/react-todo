import React, { Component } from 'react';

class CreateTodoForm extends Component { 
    constructor(){
        super()
        //sets the initial state via the constructor! thats the constructor's job
        this.state = {
            todo: ''
        }
    }
    onInputChange = (event) => {
        this.setState({
            todo: event.target.value
        })
    }
    onFormSubmit = (event) => {
        event.preventDefault()
        let todo = this.state.todo
        this.props.createTodo(todo)
        this.setState({
            todo: ""
        })
    }
    render(){
        return (
            <div>
                <form onSubmit={ this.onSubmit } id="taskForm">
                    <input
                        onChange={ this.onInputChange }
                        type="text" id="newItemDescription"
                        placeholder="What do you need to do?"
                        value={this.state.todo}
                    />
                    <button type="submit" id="addTask" className="btn">Add Todo</button>
                </form>
            </div>
        )
    }
}

export default CreateTodoForm;