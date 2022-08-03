import React from 'react'
import S from '../Header/Header.module.css'

const Header = () => {
  return (
    <header className={S.Header}>
        
        <nav>
            <h2>Academy Resila</h2>
            <h2>Contato</h2>
            <h2>Área do aluno</h2>
            <h2>Planos</h2>
        </nav>
    </header>
  )
}

export default Header