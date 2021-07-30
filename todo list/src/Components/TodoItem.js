import React, { Component } from 'react';

export default class TodoItem extends Component {
    render() {
        const { text, handleDelete, editList } = this.props;
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h5>{text}</h5>
                <div className="todo-icon">
                    <span className="mx-2 text-success" onClick={editList}>
                        <i className="fas fa-pen"></i>
                    </span>
                    <span className="mx-2 text-danger" onClick={handleDelete}>
                        <i className="fas fa-trash"></i>
                    </span>
                </div>
            </li>
        )
    }
}
