import React from 'react'
import "./Hero.css"
import { HiLocationMarker } from 'react-icons/hi'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="padding innerWidth flexCenter hero-container">
                {/* lado esquerdo */}
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-circle" />
                        <motion.h1 initial={{ y: '2rem', opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 2, type: 'spring' }}>Descubra <br />A Melhor Opção <br /> Propiedades</motion.h1>
                    </div>
                    <div className="flexColStart hero-des">
                        <span className='secondaryText'> Encontre uma variedade de propriedades que combinam com você com muita facilidade</span>
                        <span className='secondaryText'> Esqueça todas as dificuldades em encontrar uma residência para você</span>
                    </div>
                    <div className="flexCenter search-bar">
                        <HiLocationMarker color="var(--blue)" size={25} />
                        <input type="text" />
                        <button className='button'>Pesquisar</button>
                    </div>
                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={8800} end={9000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Produtos Premium</span>
                        </div>

                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={1959} end={2000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Clientes Satisfeitos</span>
                        </div>

                        <div className="flexColCenter stat">
                            <span>
                                <CountUp end={28} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Prêmios</span>
                        </div>

                    </div>
                </div>
                {/* lado direito */}
                <div className=" flexCenter hero-right">
                    <motion.div className="image-container" initial={{ x: '7rem', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 2, type: 'spring' }}>
                        <img src="./hero-image.png" alt="" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero