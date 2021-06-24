import React from 'react'
import Img from '../../assets/banner.svg'
import './styles.css'

const Banner = () => {
    return (
        <div className="main">
            <div>
                <h1>App Divertido</h1>
                <p>Site feito em React para treinar react-router-dom e axios</p>
            </div>
            <img src={Img} alt="Ilustração com logo do react"/>
        </div>
    )
}
export default Banner