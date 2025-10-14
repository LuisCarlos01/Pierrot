import React from 'react'

const Hero = () => {
  return (
    <section id="inicio" className="bg-gradient-to-br from-red-800 to-red-900 text-white min-h-screen flex items-center">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left" data-aos="fade-right">
            <h1 className="text-hero mb-6">
              LEVE O MELHOR BUFFET PARA SUA FESTA
            </h1>
            <p className="text-xl mb-8 text-red-100">
              Qualidade, sabor e um atendimento impecável para transformar seu evento em uma experiência inesquecível!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#contato" 
                className="btn-secondary text-lg px-8 py-4"
              >
                SOLICITAR ORÇAMENTO
              </a>
              <a 
                href="#sobre" 
                className="border-2 border-white text-white hover:bg-white hover:text-red-800 font-semibold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Conhecer Mais
              </a>
            </div>
          </div>
          
          {/* Image */}
          <div className="text-center" data-aos="fade-left">
            <img 
              src="/src/assets/images/hero/buffet-principal.jpg" 
              alt="Buffet Pierroti Eventos" 
              className="rounded-lg shadow-2xl max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
