import React from "react";
import './formInput.css'

export default function FormInput (props){
    const {label, error, onChange, ...inputProps} = props
    console.log('id', inputProps.id,'pattern: ', inputProps.pattern);
    return <div className="formInput">
                <label>{label}</label>
                <input 
                    {...inputProps}
                    onChange={onChange}
                />
                <span className="error-msg"> {error} </span>
            </div>
}