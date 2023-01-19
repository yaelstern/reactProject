import React, { useState, useRef } from 'react';
import PageStart from './PageStart';
import './Login.css'
export default function Login(props) {
  const {setIsLogin} = props;
    const nameRef = useRef();
    const passwordRef = useRef();
    const getStart = ()=>{
        nameRef.current.value && passwordRef.current.value && setIsLogin(true);
    }

    return (
        <div>
            <div id="divAll">
                <div className="input-group input-group-sm mb-3  mineInp">
                    <span className="input-group-text" id="inputGroup-sizing-sm">name</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" ref={nameRef} />
                </div>
                <div className="input-group input-group-sm mb-3  mineInp">
                    <span className="input-group-text" id="inputGroup-sizing-sm">password</span>
                    <input type="password" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" ref={passwordRef} />
                </div>
                <button onClick={() => getStart()}>send</button>
            </div>
        </div>
    )
}