import React, { useState, useEffect, useContext } from "react";
import "./List.css";
import "./Arr.js";
import { arrContext } from "./ArrSaleContext";
import { useNavigate } from 'react-router-dom'

export default function List() {

    const navigate = useNavigate();
    const arrSaleCtx = useContext(arrContext);
    
    return (
        arrSaleCtx.products.length ?
        <div className="mineAll ">
                    
            {arrSaleCtx.products.map((i, index) => <div key={index} className="card mineCard">
                <div className="card-body">
                    <p className="card-text">{i.name}</p>
                    <p className="card-text">{i.price}</p>
                    <p className="card-text">{i.color}</p>
                    <img src={i.img} className="card-img-top mineImg" />
                    <input className="myInput" type="button" value="sendColor" onClick={() => { navigate('/item/' + i.color) }} />
                </div>
            </div>
            )
            }
 
        </div>
:
<div className="spinner-border" role="status">
<span className="sr-only"></span>
</div>
    )
}