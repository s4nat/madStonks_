import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import "./taskPage.styles.scss"

import FormInput from "../../components/formInput/formInput"
import TaskBlock from "../../components/task-page-components/taskBlock/taskBlock"
const TaskPage = () => {
    const [taskNum, SetTaskNum] = useState(6)
    const [tasksBlocks, SetTaskBlocks] = useState([
    {"name": "Task 1", "link": ""},
    {"name": "Task 2", "link": ""},
    {"name": "Task 3", "link": ""},
    {"name": "Task 4", "link": ""},
    {"name": "Task 5", "link": ""},
    {"name": "Task 6", "link": ""},
    ])

    const addTask = () => {
        let tasksBlocksCopy = tasksBlocks.slice()
        SetTaskBlocks([
            ...tasksBlocksCopy,
            {"name": `Task ${taskNum + 1}`, "link": ""}
        ])
        SetTaskNum(taskNum+1)
    }

    return(
        <div className="task-page page">
            <div className="task-page-container">
                <div className="task-page-title">stonksList_</div> 
                <div className="task-blocks-container">
                    {tasksBlocks.map((task,idx)=><TaskBlock key={idx} task={task}/>)} 
                </div>
                <div className="plus-sign" onClick={addTask}><FontAwesomeIcon icon={faPlusCircle}/></div>
            </div>
        </div>
    )
}

export default TaskPage