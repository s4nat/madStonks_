import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import "./goArrowRight.styles.scss"

const GoArrowRight = (props) => {
    return (
        <button onClick={props.handleClick} className="arrowRight">
            <FontAwesomeIcon icon={faArrowRight} />
        </button>
    )
}

export default GoArrowRight