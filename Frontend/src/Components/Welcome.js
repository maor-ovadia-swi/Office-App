import React from 'react'
import './Welcome.css'

const Welcome = () => {

    return(
        <div className="welcome">
            <div className='welcome-container'>
                <h1>
                    Welcome to SolarWinds
                </h1>
                <h1>
                    Office App
                </h1>
            </div>
            <div className='img-container'>
                <img className='welcome-img' src='office_img.jpg' alt='Office'></img>
            </div>
        </div>
    )
}
export default Welcome;