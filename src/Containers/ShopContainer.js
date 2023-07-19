import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
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
        name: "User1",
        basket: []
    };

    const [items] = useState(shopItems);
    const [user, setUser] = useState(null);

    useEffect(() => {
        setUser(user1);
    }, [])

    const handleBasket = function(item) {
        const updatedUser = {...user};

        updatedUser.basket.push(item);

        setUser(updatedUser);
    }

    const basketTotal = function() {
        const prices = user.basket.map((item) => {
            return item.price;
        });

        const total = prices.reduce((runningTotal, currentValue) => {
            return runningTotal + currentValue
        }, 0);

        return total;
    }

    return (
        <Router>
            <h1>Wizard Wares</h1>
            <nav>
                {user && <h3>Hello, {user.name}</h3>}
                <ul>
                    <li><Link to="/">Shop</Link></li>
                    <li><Link to="/basket">Basket</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={
                    <>
                        <h2>All products</h2>
                        <ItemList items={items} handleBasket={handleBasket} />
                    </>
                    } />
                {user && <Route path="/basket" element={
                    <>
                        <h2>Basket</h2>
                        <ItemList items={user.basket} handleBasket={handleBasket}/>
                        {user.basket.length > 0 ? <h3>Total: £{basketTotal()}</h3> : null}
                    </>
                } />}
            </Routes>
        </Router>
    );
};

export default ShopContainer;