import React, { useState } from 'react'
import { generateWhatsAppLink, validateForm, formatPhoneNumber } from '../utils/formatMessage'

const Hero = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: ''
  })
  const [errors, setErrors] = useState({})
  const [logoError, setLogoError] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    
    // Formatação especial para telefone
    if (name === 'telefone') {
      const formattedValue = formatPhoneNumber(value)
      setFormData(prev => ({
        ...prev,
        [name]: formattedValue
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
    
    // Limpar erro quando usuário começar a digitar
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validação básica
    const validation = validateForm(formData)
    if (!validation.isValid) {
      setErrors(validation.errors)
      return
    }

    setIsSubmitting(true)
    
    try {
      // Simular delay para melhor UX
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // Gerar link do WhatsApp
      const whatsappLink = generateWhatsAppLink(formData)
      
      // Abrir WhatsApp
      window.open(whatsappLink, '_blank')
    } catch (error) {
      console.error('Erro ao processar formulário:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="inicio" className="relative py-20 flex items-center overflow-hidden" style={{minHeight: '60vh', padding: '5rem 0'}}>
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-800 to-red-900">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        {/* Placeholder para vídeo de fundo */}
        <div className="absolute inset-0 flex items-center justify-center" style={{zIndex: 1}}>
          <div className="text-white text-center opacity-20">
            <svg className="w-32 h-32 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            <p className="text-lg">Vídeo de fundo será inserido aqui</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{position: 'relative', zIndex: 20, maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
        <div style={{maxWidth: '56rem', margin: '0 auto', textAlign: 'center'}}>
          {/* Logo */}
          <div style={{marginBottom: '4rem'}}>
            {!logoError ? (
              <img 
                src="/images/logo-oficial.png" 
                alt="Buffet Pierroti Eventos" 
                style={{height: '3.5rem', width: 'auto', margin: '0 auto'}}
                onError={() => setLogoError(true)}
              />
            ) : (
              <div style={{
                height: '3.5rem',
                width: 'auto',
                margin: '0 auto',
                backgroundColor: '#8B0000',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '0.5rem',
                fontSize: '1.25rem',
                fontWeight: 'bold',
                padding: '0 1rem'
              }}>
                BUFFET PIERROTI EVENTOS
              </div>
            )}
          </div>

          {/* Main Heading */}
          <div style={{marginBottom: '4rem'}}>
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '1.5rem',
              lineHeight: '1.1',
              textAlign: 'center',
              letterSpacing: '0.5px',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
            }}>
              LEVE O MELHOR BUFFET<br />
              PARA SUA FESTA
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: '#fecaca',
              maxWidth: '42rem',
              margin: '0 auto',
              lineHeight: '1.4',
              textAlign: 'center',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
            }}>
              Qualidade, sabor e um atendimento impecável para transformar seu evento em uma experiência inesquecível!
            </p>
          </div>

          {/* Contact Form */}
          <div style={{
            maxWidth: '22rem',
            margin: '0 auto',
            position: 'relative',
            zIndex: 30
          }}>
            <div style={{
              padding: '0'
            }}>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '2rem',
                textAlign: 'center',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
              }}>
                PREENCHA SEUS DADOS
              </h3>
              
              <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '1.25rem'}}>
                <div>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    placeholder="Nome"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      borderRadius: '0.5rem',
                      border: errors.nome ? '2px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.2)',
                      fontSize: '1rem',
                      color: '#1f2937',
                      backgroundColor: 'white',
                      boxSizing: 'border-box',
                      height: '3.5rem',
                      outline: 'none'
                    }}
                    required
                  />
                  {errors.nome && (
                    <p style={{color: '#ef4444', fontSize: '0.875rem', margin: '0.25rem 0 0 0'}}>
                      {errors.nome}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="E-mail"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      borderRadius: '0.5rem',
                      border: errors.email ? '2px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.2)',
                      fontSize: '1rem',
                      color: '#1f2937',
                      backgroundColor: 'white',
                      boxSizing: 'border-box',
                      height: '3.5rem',
                      outline: 'none'
                    }}
                  />
                  {errors.email && (
                    <p style={{color: '#ef4444', fontSize: '0.875rem', margin: '0.25rem 0 0 0'}}>
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    placeholder="(35) 99140-4039"
                    maxLength="15"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      borderRadius: '0.5rem',
                      border: errors.telefone ? '2px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.2)',
                      fontSize: '1rem',
                      color: '#1f2937',
                      backgroundColor: 'white',
                      boxSizing: 'border-box',
                      height: '3.5rem',
                      outline: 'none'
                    }}
                    required
                  />
                  {errors.telefone && (
                    <p style={{color: '#ef4444', fontSize: '0.875rem', margin: '0.25rem 0 0 0'}}>
                      {errors.telefone}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    backgroundColor: isSubmitting ? '#6b7280' : '#8B0000',
                    color: 'white',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    padding: '1rem 1.5rem',
                    borderRadius: '0.5rem',
                    border: 'none',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'background-color 0.3s',
                    marginTop: '0.5rem',
                    height: '3.5rem',
                    outline: 'none',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                  onMouseOver={(e) => !isSubmitting && (e.target.style.backgroundColor = '#7f1d1d')}
                  onMouseOut={(e) => !isSubmitting && (e.target.style.backgroundColor = '#8B0000')}
                >
                  {isSubmitting ? (
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}}>
                      <div style={{
                        width: '1rem',
                        height: '1rem',
                        border: '2px solid transparent',
                        borderTop: '2px solid white',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                      }}></div>
                      PROCESSANDO...
                    </div>
                  ) : (
                    'SOLICITAR ORÇAMENTO'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
