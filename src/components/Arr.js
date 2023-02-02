import React, { useRef, useContext } from "react";
import './Arr.css'
import { arrContext } from './ArrSaleContext'
export default function Arr() {

    const arrSaleCtx = useContext(arrContext);
    const nameRef = useRef();
    const priceRef = useRef();
    const colorRef = useRef();
    const imgRef = useRef();

    function Add() {
        let product = arrSaleCtx.products;
        let arr = [...product];
        arr.push({ name: nameRef.current.value, price: priceRef.current.value, color: colorRef.current.value, img: `../assets/${imgRef.current.value}.jpg` });
        arrSaleCtx.setProducts(arr);
    }
    return (
        <div>
            {
                arrSaleCtx.products.length ?
                    <table>
                        <thead>
                            <tr>
                                <th>name</th>
                                <th>color</th>
                                <th>price </th>
                                <th>img</th>
                            </tr>
                        </thead>
                        <tbody>
                            {arrSaleCtx.products.map((i, index) =>
                                <tr key={index} >
                                    <td>{i.name}</td>
                                    <td>{i.color}</td>
                                    <td>{i.price}</td>
                                    <td><img src={i.img} /></td>
                                </tr>)}
                            <tr>
                                <td><input type="text" placeholder="name" ref={nameRef} className="inputSize"/></td>
                                <td><input type="text" placeholder="color" ref={colorRef}className="inputSize"/></td>
                                <td><input type="number" placeholder="price" ref={priceRef}className="inputSize"/></td>
                                <td><input type="number" placeholder="img 1-9" ref={imgRef} id="addImg" max="9" min="1"/></td>
                            </tr>
                            <tr>
                                <td colSpan="4"><input type="button" onClick={Add} value="add" id="add" ></input></td>
                            </tr>
                        </tbody>
                    </table>
                    :
                    <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                  </div>
            }
        </div>

    )
}