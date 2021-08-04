import React from 'react';
import "./App.scss";

const Menu = React.memo(({ items }) => {
    console.count('itemss')
    return (
        <article className="all-menu">
            {items.map((menu) => {
                const { id, title, price, img, desc } = menu;
                return (
                    <div className="menu" key={id}>
                        <img src={img} alt="menu" />
                        <div className="info">
                            <div className="title-price">
                                <h3>{title}</h3>
                                <h3 className="price">{`$${price}`}</h3>
                            </div>
                            <div className="border"></div>
                            <div className="desc">
                                <p>{desc}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </article>
    )
});

export default Menu;