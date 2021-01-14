import React from "react"

import "./taskBlock.styles.scss"

const TaskBlock = (props) => {
    return(
        <div className="task-block"> 
            <div className="task-block-name">{props.task.name}</div> 
        </div>
    )
}

export default TaskBlock 