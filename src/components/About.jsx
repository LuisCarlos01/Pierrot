import React from 'react'

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-section-title text-gray-800 mb-4">
            Como Funciona Nosso Buffet?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Levamos a experiência completa de um buffet até você! Seja em casa, no salão de festas, na empresa ou até em um sítio, nossa equipe cuida de tudo para que você aproveite sem preocupações.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="text-center" data-aos="fade-up" data-aos-delay="100">
            <div className="bg-red-800 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              1
            </div>
            <h3 className="text-card-title text-gray-800 mb-4">
              Entrada Especial
            </h3>
            <p className="text-gray-600">
              A experiência começa com uma entrada especial de pratos frios e aperitivos selecionados.
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="text-center" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-red-800 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              2
            </div>
            <h3 className="text-card-title text-gray-800 mb-4">
              Pratos Principais
            </h3>
            <p className="text-gray-600">
              Servimos uma grande variedade de pratos quentes e frios, preparados na hora, até que todos estejam satisfeitos.
            </p>
          </div>
          
          {/* Step 3 */}
          <div className="text-center" data-aos="fade-up" data-aos-delay="300">
            <div className="bg-red-800 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              3
            </div>
            <h3 className="text-card-title text-gray-800 mb-4">
              Sobremesas Irresistíveis
            </h3>
            <p className="text-gray-600">
              Para finalizar, nossas irresistíveis sobremesas encerram a noite com chave de ouro!
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="400">
          <a 
            href="#contato" 
            className="btn-primary text-lg px-8 py-4"
          >
            SOLICITAR ORÇAMENTO
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
