import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';
import "./App.scss";

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(localStorage.getItem('list'));
  } else {
    return [];
  }
}

export default function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage);
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, message: '', type: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, 'please enter value', 'danger');
    } else if (name && edit) {
      setList(list.map((item) => {
        if (item.id === editId) {
          return { ...item, title: name };
        }
        return item;
      }))
      setName('');
      setEdit(false);
      setEditId(null);
      showAlert(true, 'value changed', 'success');
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName('');
      showAlert(true, 'value successfuly changed', 'success');
    }
  }

  const handleDelete = (id) => {
    const newItem = list.filter((item) => item.id !== id);
    setList(newItem);
    showAlert(true, 'item is deleted', 'danger')
  }

  const clearList = () => {
    setList([]);
    showAlert(true, 'list is cleared', 'danger')
  }

  const editItem = (id) => {
    const newItem = list.find((item) => item.id === id);
    setName(newItem.title);
    setEdit(true);
    setEditId(id);
  }

  const showAlert = (show = false, message = '', type = '') => {
    setAlert({ show, type, message })
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list])

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert  {...alert} removeAlert={showAlert} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input type="text" className="grocery" placeholder="e.g. eggs" value={name} onChange={(e) => setName(e.target.value)} />
          <button type="submit" className="submit-btn">
            {edit ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && <div className="grocery-container">
        <List items={list} handleDelete={handleDelete} editItem={editItem} />
        <button className="clear-btn" onClick={clearList}>
          clear items
        </button>
      </div>}

    </section>
  )
}
