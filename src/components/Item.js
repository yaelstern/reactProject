import React from 'react'
import { useParams } from 'react-router';

export default function Item() {
    const params = useParams();
    console.log(params)
    return (
        <div style={{backgroundColor:params.name}} >
Hello!
        </div>
    );
}