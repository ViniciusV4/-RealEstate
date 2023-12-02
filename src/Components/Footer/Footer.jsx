import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <section className="f-wrapper">
            <div className="paddings innerWidth flexCenter f-container">
                {/* lado esquerdo */}
                <div className="flexColStart f-left">
                    <img src="./logo2.png" alt="" width={120} />
                    <span className="secondaryText"> Nossa visão é fazer com que todas as pessoas <br /> encontrem o melhor lugar para viver para eles</span>
                </div>
                <div className="flexColStart f-right">
                    <span className='primaryText'>Endereço</span>
                    <span className='secondaryText'>Rua São Paulo, 145, Bairro Jardins, São Paulo - SP, CEP 01234-567, Brasil</span>

                    <div className="flexCenter f-menu">
                        <span>Residências</span>
                        <span>Nossos Valores</span>
                        <span>Fale Conosco</span>
                        <span>Começar</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer