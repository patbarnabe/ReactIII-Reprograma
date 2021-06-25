import React from 'react'
import GithubImg from '../../assets/github2.png'
import LinkedinImg from '../../assets/linkedin.png'
import './styles.css'

const Footer = () => {
    return (
        <div>
            <footer className="site-footer">
                <div className="container">
                    <div className="about">
                        <h6>Sobre a autora </h6>
                        <p>Sou Patrícia Barnabé, estudante de Análise e Desenvolvimento de Sistemas, aluna do curso de Desenvolvimento Web Front-End da 10ª Turma da Reprograma e futura desenvolvedora fullstack.</p>
                    </div>

                    <div>
                        <h2 className="titulo"> Siga-me nas redes sociais </h2>

                        <ul className="social-media">
                            <a href='https://github.com/patbarnabe' target="_blank" rel="noreferrer">
                                <img src={GithubImg} alt="Logo Github"/>
                            </a>

                            <a href='https://www.linkedin.com/in/patriciabarnabe/' target="_blank" rel="noreferrer">
                                <img src={LinkedinImg} alt="Logo LinkedIn"/>
                            </a>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer