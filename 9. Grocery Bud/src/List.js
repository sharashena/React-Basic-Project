import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

export default function List({ items, handleDelete, editItem }) {
    return (
        <div className="grocery-list">
            {items.map((item) => {
                const { id, title } = item;
                return (
                    <article className="grocery-item" key={id}>
                        <p className="title">{title}</p>
                        <div className="btn-container">
                            <button type="button" className="edit-btn">
                                <FaEdit onClick={() => editItem(id)} />
                            </button>
                            <button type="button" className="delete-btn">
                                <FaTrash onClick={() => handleDelete(id)}/>
                            </button>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}
