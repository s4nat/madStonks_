import React from "react"

import "./formInput.styles.scss"

const FormInput = (props) => {
    return(
        <input 
            className="form-input" 
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.handleChange}
        />
    )
}

export default FormInput