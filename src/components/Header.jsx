import React from 'react'

const Header = () => {
  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container-max">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/src/assets/images/logo/logo-principal.png" 
              alt="Buffet Pierroti Eventos" 
              className="h-12 w-auto"
            />
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-red-800 transition-colors">
              Início
            </a>
            <a href="#sobre" className="text-gray-700 hover:text-red-800 transition-colors">
              Sobre
            </a>
            <a href="#servicos" className="text-gray-700 hover:text-red-800 transition-colors">
              Serviços
            </a>
            <a href="#contato" className="text-gray-700 hover:text-red-800 transition-colors">
              Contato
            </a>
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="#contato" 
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
