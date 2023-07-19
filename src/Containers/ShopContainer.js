import React, { useState } from "react";
import ItemList from "../Components/ItemList";

function ShopContainer() {
    const shopItems = [
        {
            name: "Gryffindor Robes",
            price: 600,
            description: "Changes size according to the wearer. Includes self-repairing seams."
        },
        {
            name: "Nimbus 2000",
            price: 2500,
            description: "Produced by the Nimbus Racing Broom Company."
        },
        {
            name: "Broomstick Servicing Kit",
            price: 75,
            description: "Includes a Handbook of Do-It-Yourself Broomcare."
        },
        {
            name: "Quidditch Gloves",
            price: 50,
            description: "One size fits all. Provides extra grip in adverse weather conditions."
        },
        {
            name: "Golden Snitch",
            price: 200,
            description: "Real goblin gold. Working Flesh Memory."
        },
        {
            name: "Colour-Change Ink",
            price: 25,
            description: "Once used, the charm lasts for one month."
        },
        {
            name: "Extendable Ears",
            price: 50,
            description: "Original invention by Fred and George Weasley."
        },
        {
            name: "Peruvian Instant Darkness Powder",
            price: 150,
            description: "Resistant to most muggle light sources."
        },
        {
            name: "Skiving Snackbox",
            price: 100,
            description: "Original invention by Fred and George Weasley."
        },
        {
            name: "Spell-Checking Quill",
            price: 25,
            description: "Spell-correcting charm reliable for three months."
        }
    ];

    const user1 = {
        name: "Petunia",
        basket: []
    };

    const [items] = useState(shopItems);
    const [user, setUser] = useState(user1);

    return (
        <>
            <h1>This is ShopContainer</h1>
            <ItemList />
        </>
    );
};

export default ShopContainer;