import React from 'react'
import Arr from './Arr'
import List from './List'
export default function PageStart(props) {
    const name = props.name
    return (
        <div>
            <h1>hello {name}</h1>
            <Arr/>
        </div>
    )
}