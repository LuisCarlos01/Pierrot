import React, { useState } from 'react'
import { generateWhatsAppLink, validateForm } from '../utils/formatMessage'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    tipoEvento: '',
    dataEvento: '',
    numeroConvidados: '',
    observacoes: ''
  })
  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Limpar erro quando usuário começar a digitar
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validação básica
    const validation = validateForm(formData)
    if (!validation.isValid) {
      setErrors(validation.errors)
      return
    }

    // Gerar link do WhatsApp
    const whatsappLink = generateWhatsAppLink(formData)
    
    // Abrir WhatsApp
    window.open(whatsappLink, '_blank')
  }

  return (
    <section id="contato" style={{
      backgroundColor: 'white',
      padding: '4rem 0',
      margin: '0',
      minHeight: '600px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '1rem'
          }}>
            Solicite Seu Orçamento
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#4b5563',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Preencha o formulário abaixo e entraremos em contato para criar o evento perfeito para você!
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'start'
        }}>
          {/* Contact Info */}
          <div style={{
            backgroundColor: '#f9fafb',
            padding: '2rem',
            borderRadius: '0.5rem',
            border: '1px solid #e5e7eb'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '1.5rem'
            }}>
              Informações de Contato
            </h3>
            
            <div style={{
              marginBottom: '1.5rem'
            }}>
              <h4 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: '#8B0000',
                marginBottom: '0.5rem'
              }}>
                📞 Telefone/WhatsApp
              </h4>
              <p style={{
                color: '#4b5563',
                margin: '0'
              }}>
                (11) 99999-9999
              </p>
            </div>
            
            <div style={{
              marginBottom: '1.5rem'
            }}>
              <h4 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: '#8B0000',
                marginBottom: '0.5rem'
              }}>
                📧 E-mail
              </h4>
              <p style={{
                color: '#4b5563',
                margin: '0'
              }}>
                contato@buffetpierroti.com.br
              </p>
            </div>
            
            <div style={{
              marginBottom: '1.5rem'
            }}>
              <h4 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: '#8B0000',
                marginBottom: '0.5rem'
              }}>
                ⏰ Horário de Atendimento
              </h4>
              <p style={{
                color: '#4b5563',
                margin: '0'
              }}>
                Segunda a Sexta: 8h às 18h<br />
                Sábado: 8h às 14h
              </p>
            </div>
            
            <div style={{
              backgroundColor: '#fef2f2',
              padding: '1rem',
              borderRadius: '0.5rem',
              borderLeft: '4px solid #8B0000'
            }}>
              <p style={{
                color: '#8B0000',
                fontWeight: '600',
                margin: '0',
                fontSize: '0.875rem'
              }}>
                💡 <strong>Dica:</strong> Quanto mais detalhes você fornecer sobre seu evento, mais preciso será nosso orçamento!
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div style={{
            backgroundColor: '#f9fafb',
            padding: '2rem',
            borderRadius: '0.5rem',
            border: '1px solid #e5e7eb'
          }}>
            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              {/* Nome */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>
                  Nome Completo *
                </label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '0.375rem',
                    border: errors.nome ? '2px solid #ef4444' : '2px solid #d1d5db',
                    fontSize: '1rem',
                    color: '#1f2937',
                    backgroundColor: 'white'
                  }}
                  required
                />
                {errors.nome && (
                  <p style={{color: '#ef4444', fontSize: '0.75rem', margin: '0.25rem 0 0 0'}}>
                    {errors.nome}
                  </p>
                )}
              </div>
              
              {/* Email */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '0.375rem',
                    border: errors.email ? '2px solid #ef4444' : '2px solid #d1d5db',
                    fontSize: '1rem',
                    color: '#1f2937',
                    backgroundColor: 'white'
                  }}
                />
                {errors.email && (
                  <p style={{color: '#ef4444', fontSize: '0.75rem', margin: '0.25rem 0 0 0'}}>
                    {errors.email}
                  </p>
                )}
              </div>
              
              {/* Telefone */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  placeholder="(11) 99999-9999"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '0.375rem',
                    border: errors.telefone ? '2px solid #ef4444' : '2px solid #d1d5db',
                    fontSize: '1rem',
                    color: '#1f2937',
                    backgroundColor: 'white'
                  }}
                  required
                />
                {errors.telefone && (
                  <p style={{color: '#ef4444', fontSize: '0.75rem', margin: '0.25rem 0 0 0'}}>
                    {errors.telefone}
                  </p>
                )}
              </div>
              
              {/* Tipo de Evento */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>
                  Tipo de Evento
                </label>
                <select
                  name="tipoEvento"
                  value={formData.tipoEvento}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '0.375rem',
                    border: '2px solid #d1d5db',
                    fontSize: '1rem',
                    color: '#1f2937',
                    backgroundColor: 'white'
                  }}
                >
                  <option value="">Selecione o tipo de evento</option>
                  <option value="aniversario">Aniversário</option>
                  <option value="casamento">Casamento</option>
                  <option value="corporativo">Evento Corporativo</option>
                  <option value="festa-junina">Festa Junina</option>
                  <option value="formatura">Formatura</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              
              {/* Data do Evento */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>
                  Data do Evento
                </label>
                <input
                  type="date"
                  name="dataEvento"
                  value={formData.dataEvento}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '0.375rem',
                    border: '2px solid #d1d5db',
                    fontSize: '1rem',
                    color: '#1f2937',
                    backgroundColor: 'white'
                  }}
                />
              </div>
              
              {/* Número de Convidados */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>
                  Número de Convidados
                </label>
                <input
                  type="number"
                  name="numeroConvidados"
                  value={formData.numeroConvidados}
                  onChange={handleInputChange}
                  placeholder="Ex: 50"
                  min="1"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '0.375rem',
                    border: '2px solid #d1d5db',
                    fontSize: '1rem',
                    color: '#1f2937',
                    backgroundColor: 'white'
                  }}
                />
              </div>
              
              {/* Observações */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>
                  Observações
                </label>
                <textarea
                  name="observacoes"
                  value={formData.observacoes}
                  onChange={handleInputChange}
                  placeholder="Conte-nos mais sobre seu evento..."
                  rows="4"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '0.375rem',
                    border: '2px solid #d1d5db',
                    fontSize: '1rem',
                    color: '#1f2937',
                    backgroundColor: 'white',
                    resize: 'vertical'
                  }}
                />
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  backgroundColor: '#8B0000',
                  color: 'white',
                  fontSize: '1.125rem',
                  padding: '1rem 2rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                  marginTop: '1rem'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#7f1d1d'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#8B0000'}
              >
                SOLICITAR ORÇAMENTO VIA WHATSAPP
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm