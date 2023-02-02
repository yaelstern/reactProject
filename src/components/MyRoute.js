import React from "react";
import { Link, Route, Routes } from 'react-router-dom';
import './MyRoute.css'
import Arr from "./Arr";
import Login from "./Login";
import List from "./List";
import Item from "./Item"
import SingleProduct from "./SingleProduct";
import Nav from 'react-bootstrap/Nav';
import BuyProduct from "./BuyProduct";
export default function MyRoute(props) {
    const { setIsLogin } = props;
    return (
        <div>
            <div>
                <Nav defaultActiveKey="/home" as="ul">
                    <Nav.Item as="li">
                        <Link to="/arr">List (table)</Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Link to="/login">Login</Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Link to="/List">list(arr)</Link>
                    </Nav.Item>
                </Nav>
                {/* <ul>
                    
                    <li>

                    </li>
                    <li>

                    </li>
                    <li>
                        <Link to="/List">list(arr)</Link>
                    </li>
                </ul> */}
            </div>
            <Routes >
                {/* <Route path="/" element={<App />} /> */}
                <Route path="/arr" element={<Arr />} />

                <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />

                <Route path="/List" element={<List />} />

                <Route path="/Item/:name" element={<Item />} />
                <Route path="/product/:name" element={<SingleProduct />} />
                <Route path="/buy/:name" element={<BuyProduct />} />
            </Routes>
        </div>
    )
}