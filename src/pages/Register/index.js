import React from 'react' 
import './style.css'
import logoImg from "../../assets/logo.svg"
import {Link} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'


export default function Register(props) {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the Hero"/>
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
        
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar
          </Link>
        </section>
        <form action="">
        <input  placeholder="Nome da ONG."/>
        <input type="email" placeholder="E-mail"/>
        <input  placeholder="WhatsApp"/>
        <div className="input-group">
          <input placeholder="Cidade"/>
          <input placeholder="UF" style={{width: 80}}/>
        </div>
        <button className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}