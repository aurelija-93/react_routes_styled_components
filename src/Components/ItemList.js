import React from "react";
import Item from "./Item";

function ItemList({items, handleBasket}) {
    const itemNodes = items.map((item) => {
        return <Item key={item.name} item={item} handleBasket={handleBasket} />
    })

    return (
        <>
            <h2>All products</h2>
            <ul>
                {itemNodes}
            </ul>
        </>
    );
};

export default ItemList;