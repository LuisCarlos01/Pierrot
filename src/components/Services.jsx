import React from 'react'

const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-section-title text-gray-800 mb-4">
            Conheça Nossos Diferenciais
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos serviços de qualidade superior para tornar seu evento inesquecível
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Differential 1 */}
          <div className="text-center" data-aos="fade-up" data-aos-delay="100">
            <div className="bg-red-100 p-6 rounded-lg mb-6">
              <svg className="w-12 h-12 text-red-800 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-card-title text-gray-800 mb-4">
              Cozinha de Alta Performance
            </h3>
            <p className="text-gray-600">
              Produzimos pratos frescos e saborosos, garantindo rapidez sem perder a qualidade.
            </p>
          </div>
          
          {/* Differential 2 */}
          <div className="text-center" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-red-100 p-6 rounded-lg mb-6">
              <svg className="w-12 h-12 text-red-800 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-card-title text-gray-800 mb-4">
              Equipe Profissional
            </h3>
            <p className="text-gray-600">
              Supervisão especializada, cozinheiros e garçons experientes para seu evento.
            </p>
          </div>
          
          {/* Differential 3 */}
          <div className="text-center" data-aos="fade-up" data-aos-delay="300">
            <div className="bg-red-100 p-6 rounded-lg mb-6">
              <svg className="w-12 h-12 text-red-800 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-card-title text-gray-800 mb-4">
              Eventos de Todos os Portes
            </h3>
            <p className="text-gray-600">
              De pequenas festas a confraternizações corporativas para grandes empresas.
            </p>
          </div>
          
          {/* Differential 4 */}
          <div className="text-center" data-aos="fade-up" data-aos-delay="400">
            <div className="bg-red-100 p-6 rounded-lg mb-6">
              <svg className="w-12 h-12 text-red-800 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-card-title text-gray-800 mb-4">
              Ingredientes Premium
            </h3>
            <p className="text-gray-600">
              Receitas especiais e ingredientes de primeiríssima qualidade, preparados na hora.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="500">
          <div className="bg-yellow-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-red-800 mb-4">
              100% de Aprovação
            </h3>
            <p className="text-lg text-gray-700">
              Desde nossa fundação levando sabor e qualidade para momentos especiais!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
