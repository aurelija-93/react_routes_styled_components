import React from "react";
import Item from "./Item";

function ItemList({items, handleBasket}) {

    if (items.length === 0) {
        return <h2>Your basket is empty.</h2>
    }

    const itemNodes = items.map((item) => {
        return <Item key={item.name} item={item} handleBasket={handleBasket} />
    })

    return (
        <>
            <ul>
                {itemNodes}
            </ul>
        </>
    );
};

export default ItemList;