import React from 'react'
import './GetStarted.css'

const GetStarted = () => {
    return (
        <section className="g-wrapper">
            <div className="paddings innerWidth g-container">
                <div className="flexColCenter inner-container">
                    <span className='primaryText'>Quero começar com a Homyz</span>
                    <span className='secondaryText'> Assine e encontre cotações de preços atraentes a partir de R$ 800<br /> Find your residence soon </span>
                    <button className="button">
                        <a href="#">Saiba Mais</a>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default GetStarted