import React, { Component } from 'react';
import uuid from 'uuid/dist/v4';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './Components/TodoInput';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      id: uuid(),
      item: "",
      editItem: false
    }
  }

  handleChange = (e) => {
    const inputValue = e.target.value;
    this.setState({
      item: inputValue
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newItems = {
      id: this.state.id,
      text: this.state.item
    }

    this.setState({
      items: [...this.state.items, newItems],
      item: '',
      id: uuid(),
      editItem: false
    })
  }

  handleDelete = (id) => {
    const deleteItem = this.state.items.filter((elem) => (
      elem.id !== id
    ));

    this.setState({
      items: deleteItem
    })
  }

  editList = (id) => {
    const editItem = this.state.items.find((elem) => (
      elem.id === id
    ))
    const deleteItem = this.state.items.filter((elem) => (
      elem.id !== id
    ));
    this.setState({
      items: deleteItem,
      item: editItem.text,
      id: id,
      editItem: true
    })
  }

  clearList = () => {
    this.setState({
      items: []
    })
  }
  render() {
    return (
      <React.Fragment>
        <TodoInput
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleDelete={this.handleDelete}
            item={this.state.item}
            items={this.state.items}
            editItem={this.state.editItem}
            clearList={this.clearList}
            editList={this.editList}
          />
      </React.Fragment>
    )
  }
}