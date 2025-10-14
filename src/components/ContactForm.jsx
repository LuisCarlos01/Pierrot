import React from 'react'

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui será implementada a integração com WhatsApp
    console.log('Formulário enviado!')
  }

  return (
    <section id="contato" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-section-title text-gray-800 mb-4">
            Solicite Seu Orçamento
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Preencha os dados abaixo e entre em contato diretamente conosco via WhatsApp
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="(11) 99999-9999"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="evento" className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Evento *
                </label>
                <select
                  id="evento"
                  name="evento"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                >
                  <option value="">Selecione o tipo</option>
                  <option value="aniversario">Aniversário</option>
                  <option value="casamento">Casamento</option>
                  <option value="corporativo">Evento Corporativo</option>
                  <option value="formatura">Formatura</option>
                  <option value="outros">Outros</option>
                </select>
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="convidados" className="block text-sm font-medium text-gray-700 mb-2">
                Número de Convidados *
              </label>
              <input
                type="number"
                id="convidados"
                name="convidados"
                required
                min="1"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                placeholder="Ex: 50"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="data" className="block text-sm font-medium text-gray-700 mb-2">
                Data do Evento *
              </label>
              <input
                type="date"
                id="data"
                name="data"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
            </div>
            
            <div className="mb-8">
              <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                Mensagem Adicional
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                placeholder="Conte-nos mais sobre seu evento..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full btn-primary text-lg py-4"
            >
              SOLICITAR ORÇAMENTO VIA WHATSAPP
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
