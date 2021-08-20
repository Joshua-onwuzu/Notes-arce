import React from 'react'

const renderNames = (props)=>{
    return (
        <div style={{textAlign: 'center'}}>
            <h1>{props.name}</h1>
        </div>
    )
};

export default renderNames;