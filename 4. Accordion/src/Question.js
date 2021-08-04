import React, { useState } from 'react';
import Answer from './Answer';
import Questions from './data';
import "./App.scss";

export default function Question() {
    return (
        <article className="main">
            <h1 className="title">questions and answers about login</h1>
            {Questions.map((question) => {
                const { id, title, info } = question;
                return <div className="questions" key={id}>
                    <Answer info={info} title={title} />
                </div>
            })}
        </article>
    )
}
