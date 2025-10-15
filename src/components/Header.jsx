import React, { useState } from 'react'
import { smoothScrollToCustom } from '../utils/formatMessage'

const Header = () => {
  const [logoError, setLogoError] = useState(false)

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    smoothScrollToCustom(sectionId, 80, 1000)
  }
  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container-max">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            {!logoError ? (
              <img 
                src="/src/assets/images/PIERROTI_-Logos.jpg" 
                alt="Buffet Pierroti Eventos" 
                className="h-12 w-auto"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="h-12 px-3 bg-red-800 text-white flex items-center justify-center rounded-lg font-bold text-sm">
                PIERROTI EVENTOS
              </div>
            )}
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#inicio" 
              onClick={(e) => handleNavClick(e, 'inicio')}
              className="text-gray-700 hover:text-red-800 transition-colors duration-300 cursor-pointer"
            >
              Início
            </a>
            <a 
              href="#sobre" 
              onClick={(e) => handleNavClick(e, 'sobre')}
              className="text-gray-700 hover:text-red-800 transition-colors duration-300 cursor-pointer"
            >
              Sobre
            </a>
            <a 
              href="#servicos" 
              onClick={(e) => handleNavClick(e, 'servicos')}
              className="text-gray-700 hover:text-red-800 transition-colors duration-300 cursor-pointer"
            >
              Serviços
            </a>
            <a 
              href="#contato" 
              onClick={(e) => handleNavClick(e, 'contato')}
              className="text-gray-700 hover:text-red-800 transition-colors duration-300 cursor-pointer"
            >
              Contato
            </a>
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="#contato" 
              onClick={(e) => handleNavClick(e, 'contato')}
              className="btn-primary"
            >
              Solicitar Orçamento
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
