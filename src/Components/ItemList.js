import React from "react";
import Item from "./Item";
import { styled } from "styled-components";

function ItemList({items, handleBasket}) {

    if (items.length === 0) {
        return <h3>Your basket is empty.</h3>
    }

    const List = styled.ul`
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
    `

    const itemNodes = items.map((item) => {
        return <Item key={item.name} item={item} handleBasket={handleBasket} />
    })

    return (
        <>
            <List>
                {itemNodes}
            </List>
        </>
    );
};

export default ItemList;