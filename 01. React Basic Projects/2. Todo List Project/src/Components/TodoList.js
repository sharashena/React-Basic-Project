import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
    render() {
        const { items, editList, clearList, handleDelete } = this.props;
        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">todo list</h3>
                {
                    items.map((item) => (
                        <TodoItem
                            key={item.id}
                            text={item.text}
                            handleDelete={() => handleDelete(item.id)}
                            editList={() => editList(item.id)}
                        />
                    ))
                }
                <button type="submit" className="btn btn-block btn-danger text-uppercase my-5" onClick={clearList}>clear list</button>
            </ul>
        )
    }
}
