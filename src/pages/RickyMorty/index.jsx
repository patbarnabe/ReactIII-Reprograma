import React, {useState, useEffect} from 'react'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import './styles.css'


const RickyMorty = () =>{
    const [personagens, setPersonagem] = useState([]) 
    const [filtroPersonagem, setFiltroPersonagem] = useState([])
    const [busca, setBusca] = useState('')

    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character')
            .then(resposta => resposta.json())
            .then(dados => setPersonagem(dados.results))
    },[])

    useEffect(()=>{
        setFiltroPersonagem(
            personagens.filter(personagem => {
                return personagem.name.includes(busca)
            })
        )
    },[busca, personagens])

    return(
        <>
            <Menu/>
            <div className="main-ricky">
                <input className="input-ricky" placeholder="Digite o nome de personagem" onChange={e=>{setBusca(e.target.value)}}/>
                {filtroPersonagem.map(personagem=> (
                
                <div className="card-ricky" key={personagem.id}> 
                        <h2>{personagem.name}</h2>
                        <img src={personagem.image} alt={personagem.name}/>
                        
                        <div class="infos">
                            <p><span>Status:</span> {personagem.status}</p>
                            <p><span>Espécie:</span> {personagem.species}</p>
                            <p><span>Gênero:</span> {personagem.gender}</p>
                            <p><span>Origem:</span> {personagem.origin.name}</p>
                            <p><span>Localização:</span> {personagem.location.name}</p>
                        </div>   
                </div>      
                ))}
            </div>

            <Footer/>  
        </>
    )
}

export default RickyMorty