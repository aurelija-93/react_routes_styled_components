import React from "react";

function Item({item, handleBasket}) {

    const onBasketClick = function() {
        handleBasket(item);
    }

    return (
        <li>
            <h3>{item.name}</h3>
            <h4>£{item.price}</h4>
            <p>{item.description}</p>
            <button onClick={onBasketClick}>Add</button>
        </li>
    );
};

export default Item;