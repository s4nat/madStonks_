import React, { useEffect, useState } from "react"

import "./loginPage.styles.scss"

import FormInput from "../../components/formInput/formInput"
import GoArrowRight from "../../components/goArrowRight/goArrowRight"

const LoginPage = () => {
    const [username, setUsername] = useState('')
    const [teamName, setTeamName] = useState('')
    const [roomCode, setRoomCode] = useState('')
    
    const goToTaskPage = () => {
        window.location = "http://localhost:3000/tasks"
    }

    return(
        <div className="login-page page">
            <div className="container">
                <div className="login-page-container">
                    <div className="logo-name">
                        <span className="logo-text">Mad</span>
                        <span className="logo-text">Stonks</span>
                    </div>
                    <div>
                        <div className="input-container">
                            <div className="input-label">Create new workspace</div>
                            <FormInput type="text" placeholder="username" handleChange={e=>setUsername(e.target.value)}/>
                            <FormInput type="text" placeholder="teamname" handleChange={e=>setTeamName(e.target.value)}/>
                            <FormInput type="text" placeholder="roomcode" handleChange={e=>setRoomCode(e.target.value)}/>
                            <GoArrowRight handleClick={goToTaskPage}/>
                        </div> 
                        <div className="input-container">
                            <div className="input-label">Join existing workspace</div>
                            <FormInput type="text" placeholder="username" handleChange={e=>setUsername(e.target.value)}/>
                            <FormInput type="text" placeholder="teamname" handleChange={e=>setTeamName(e.target.value)}/>
                            <FormInput type="text" placeholder="roomcode" handleChange={e=>setRoomCode(e.target.value)}/>
                            <GoArrowRight handleClick={goToTaskPage}/>
                        </div> 
                    </div>
                </div>
            </div> 
        </div>
    ) 
}

export default LoginPage

