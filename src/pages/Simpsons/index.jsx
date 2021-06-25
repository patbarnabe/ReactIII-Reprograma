import React, {useState, useEffect} from 'react'
import Menu from '../../components/Menu'
import Axios from 'axios'
import Footer from '../../components/Footer'
import './styles.css'

const Simpsons = () => {

    const [personagem, setPersonagem] = useState([])
    const [clique, setClique] = useState(() => {})

    useEffect(() => {

        const pegaDados = async () => {
            const resposta = await Axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
            const dados = await resposta.data
            setPersonagem(dados)
        }
        pegaDados()
        
    }, [clique])

    function eventoClique() {
        setClique(personagem)
    }

    return (
        <>
            <Menu/>
            <div className="main-simpson">
                {personagem.map(personagem => {
                    return (
                        <div className="card">
                            <h2>{personagem.character}</h2>
                            <img src={personagem.image} alt={personagem.character}/>
                            <p>{personagem.quote}</p>
                        </div>
                    )
                })}
                <button onClick={eventoClique}>Clique para trocar o personagem</button>
            </div>
            <Footer />
        </>

    )
}

export default Simpsons