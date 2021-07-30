import React, { Component } from 'react';
import TodoList from './TodoList';

export default class TodoInput extends Component {
    render() {
        const { item, handleChange, handleSubmit, editItem, items, clearList, editList, handleDelete } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-8 mt-5">
                        <h3 className="text-capitalize text-center">Todo Input</h3>
                    </div>
                </div>

                <div className="card card-body my-3">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text bg-primary text-white">
                                    <i className="fas fa-book m-1"></i>
                                </div>
                            </div>
                            <input type="text" className="form-control text-capitalize" placeholder="add todo item"
                                value={item}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className={
                            editItem ? 'btn btn-block btn-success mt-3 text-uppercase' : 'btn btn-block btn-primary mt-3 text-uppercase'} disabled={item ? false : true}>
                            {editItem ? 'edit item' : 'add item'}
                        </button>
                    </form>
                </div>
                <TodoList
                    items={items}
                    editItem={editItem}
                    clearList={clearList}
                    editList={editList}
                    handleDelete={handleDelete}
                />
            </div>
        )
    }
}
