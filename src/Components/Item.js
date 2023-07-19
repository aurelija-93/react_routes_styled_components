import React from "react";
import styled from 'styled-components';

function Item({item, handleBasket}) {

    const ListItem = styled.li`
        display: flex;
        align-items: center;
        width: 80%;
        justify-content: space-between;
        text-align: left;
    `

    const Button = styled.button`
        padding: 1em;
    `

    const onBasketClick = function() {
        handleBasket(item);
    }

    return (
        <ListItem>
            <div>
                <h3>{item.name}</h3>
                <i>£{item.price}</i>
                <p>{item.description}</p>
            </div>
            <Button onClick={onBasketClick}>Add</Button>
        </ListItem>
    );
};

export default Item;