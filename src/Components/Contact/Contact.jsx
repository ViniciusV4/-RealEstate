import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'



const Contact = () => {
    return (
        <section className='c-wrapper'>
            <div className="paddings innerWidth flexCenter c-container">
                {/* lado esquerdo */}
                <div className="flexColStart c-left">
                    <span className='orangeText'>Nossos Contatos</span>
                    <span className='primaryText'>É fácil de entrar em contato conosco</span>
                    <span className='secondaryText'>Estamos sempre prontos para ajudar, oferecendo o melhor negócio para nossos clientes</span>

                    <div className="flexColStart contactModes">

                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Telefone</span>
                                        <span className='secondaryText'>021 123 145 14</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Chamar Agora</div>
                            </div>

                            
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Whatsapp</span>
                                        <span className='secondaryText'>021 123 145 14</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Chamar Agora</div>
                            </div>
                        </div>

                     
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Video Chamada</span>
                                        <span className='secondaryText'>021 123 145 14</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Chamar Agora</div>
                            </div>

                            
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Mensagem</span>
                                        <span className='secondaryText'>021 123 145 14</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Chamar Agora</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* lado direito */}
                <div className="c-right">
                    <div className="image-container">
                        <img src="./contact.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact