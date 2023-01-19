import React from "react";
import { Link, Route,  Routes} from 'react-router-dom';

import './MyRoute.css'

import App from "../App";
import Arr from "./Arr";
import Login from "./Login";
import List from "./List";
import Item from "./Item"
export default function MyRoute(props) {
    const {setIsLogin} = props;
    return (
        <div>
            <div>
                <ul>
                    {/* <li>
                        <Link to="/">Home</Link>
                    </li> */}
                    <li>
                        <Link to="/arr">List (table)</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/List">list(arr)</Link>
                    </li>
                </ul>
            </div>
            <Routes >
                {/* <Route path="/" element={<App />} /> */}
                <Route path="/arr" element={<Arr/>} />
                
                <Route path="/login" element={ <Login setIsLogin={setIsLogin}/>} />
               
                <Route path="/List" element={ <List/>} />
               
                <Route path="/Item/:name"element={<Item/>}  />
                
            </Routes>
        </div>
    )
}