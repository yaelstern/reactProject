import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import axios from 'axios';
import './Arr.css'
export const arrContext = createContext();


export default function ArrSaleContext(props) {
    // let arr = [
    //     { name: 'Chair', price: 100, color: 'brown', img: '../assets/1.jpg' },
    //     { name: 'Table', price: 50, color: 'black', img: '../assets/2.jpg' },
    //     { name: 'Shoes', price: 555, color: 'white', img: '../assets/3.jpg' },
    //     { name: 'computer', price: 454, color: 'gray', img: '../assets/4.jpg' },
    //     { name: 'apple', price: 50, color: 'green', img: '../assets/5.jpg' },
    // ]

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('./data.json')
            .then(data => {
                console.log(data);
                setProducts(data.data);
            })
            .catch(error => {
                console.log(error)
            })
    }, []);

    return (
        <arrContext.Provider value={{ products, setProducts }}>
            {props.children}
        </arrContext.Provider>
    );
}
