import React from "react";


const Input = (props)=>{

    const {label , ...attr} = props;

    return(
        <div>
            <label>{props.label}</label>
            <input {...attr} />
        </div>
    )

} 


export default Input;