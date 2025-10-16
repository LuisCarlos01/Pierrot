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
      minHeight: '600px',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        {/* Header Premium */}
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem',
          position: 'relative'
        }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: '800',
            color: '#1f2937',
            marginBottom: '1rem',
            position: 'relative',
            display: 'inline-block'
          }}>
            Solicite Seu Orçamento
            <span style={{
              position: 'absolute',
              left: '50%',
              bottom: '-0.5rem',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              backgroundColor: '#8B0000',
              borderRadius: '2px'
            }}></span>
          </h2>
          
          <p style={{
            fontSize: '1.25rem',
            color: '#4b5563',
            maxWidth: '700px',
            margin: '0 auto 2rem auto',
            lineHeight: '1.6'
          }}>
            Preencha o formulário abaixo e entraremos em contato para criar o evento perfeito para você!
          </p>

          {/* Prova Social */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            marginTop: '2rem',
            flexWrap: 'wrap'
          }}>
            <div style={{
              textAlign: 'center',
              padding: '1rem'
            }}>
              <div style={{
                fontSize: '2rem',
                fontWeight: '800',
                color: '#8B0000',
                marginBottom: '0.25rem'
              }}>
                500+
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: '#6b7280',
                fontWeight: '600'
              }}>
                Eventos Realizados
              </div>
            </div>
            
            <div style={{
              textAlign: 'center',
              padding: '1rem'
            }}>
              <div style={{
                fontSize: '2rem',
                fontWeight: '800',
                color: '#8B0000',
                marginBottom: '0.25rem'
              }}>
                100%
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: '#6b7280',
                fontWeight: '600'
              }}>
                Clientes Satisfeitos
              </div>
            </div>
            
            <div style={{
              textAlign: 'center',
              padding: '1rem'
            }}>
              <div style={{
                fontSize: '2rem',
                fontWeight: '800',
                color: '#8B0000',
                marginBottom: '0.25rem'
              }}>
                5★
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: '#6b7280',
                fontWeight: '600'
              }}>
                Avaliação Média
              </div>
            </div>
          </div>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'start'
        }}>
          {/* Contact Info Premium */}
          <div style={{
            backgroundColor: 'white',
            padding: '2.5rem',
            borderRadius: '1rem',
            border: '1px solid #e5e7eb',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Decorative Element */}
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              height: '4px',
              background: 'linear-gradient(90deg, #8B0000, #fbbf24)'
            }}></div>
            <h3 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: '#1f2937',
              marginBottom: '2rem',
              marginTop: '1rem',
              position: 'relative'
            }}>
              <span style={{
                color: '#8B0000',
                marginRight: '0.5rem'
              }}>📞</span>
              Informações de Contato
            </h3>
            
            <div style={{
              marginBottom: '2rem',
              padding: '1.5rem',
              backgroundColor: '#fef2f2',
              borderRadius: '0.75rem',
              border: '1px solid #fecaca',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-8px',
                left: '1.5rem',
                backgroundColor: '#8B0000',
                color: 'white',
                padding: '0.25rem 0.75rem',
                borderRadius: '0.375rem',
                fontSize: '0.75rem',
                fontWeight: '600'
              }}>
                CONTATO DIRETO
              </div>
              <h4 style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                color: '#8B0000',
                marginBottom: '0.75rem',
                marginTop: '0.5rem'
              }}>
                📱 WhatsApp
              </h4>
              <p style={{
                color: '#1f2937',
                margin: '0',
                fontSize: '1.125rem',
                fontWeight: '600'
              }}>
                (35) 99140-4039
              </p>
              <p style={{
                color: '#6b7280',
                margin: '0.5rem 0 0 0',
                fontSize: '0.875rem'
              }}>
                Resposta rápida em até 2 horas
              </p>
            </div>
            
            {/* Benefícios */}
            <div style={{
              marginBottom: '2rem'
            }}>
              <h4 style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                color: '#1f2937',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center'
              }}>
                <span style={{
                  color: '#fbbf24',
                  marginRight: '0.5rem',
                  fontSize: '1.5rem'
                }}>✨</span>
                Por que escolher o Buffet Pierrot?
              </h4>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    backgroundColor: '#8B0000',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '0.75rem',
                    fontWeight: 'bold'
                  }}>
                    ✓
                  </div>
                  <span style={{
                    color: '#374151',
                    fontSize: '0.95rem',
                    fontWeight: '500'
                  }}>
                    Orçamento gratuito e sem compromisso
                  </span>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    backgroundColor: '#8B0000',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '0.75rem',
                    fontWeight: 'bold'
                  }}>
                    ✓
                  </div>
                  <span style={{
                    color: '#374151',
                    fontSize: '0.95rem',
                    fontWeight: '500'
                  }}>
                    Garantia de satisfação 100%
                  </span>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    backgroundColor: '#8B0000',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '0.75rem',
                    fontWeight: 'bold'
                  }}>
                    ✓
                  </div>
                  <span style={{
                    color: '#374151',
                    fontSize: '0.95rem',
                    fontWeight: '500'
                  }}>
                    Equipe especializada e experiente
                  </span>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    backgroundColor: '#8B0000',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '0.75rem',
                    fontWeight: 'bold'
                  }}>
                    ✓
                  </div>
                  <span style={{
                    color: '#374151',
                    fontSize: '0.95rem',
                    fontWeight: '500'
                  }}>
                    Atendimento personalizado
                  </span>
                </div>
              </div>
            </div>
            
          </div>
          
          {/* Contact Form Premium */}
          <div style={{
            backgroundColor: 'white',
            padding: '2.5rem',
            borderRadius: '1rem',
            border: '1px solid #e5e7eb',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Decorative Element */}
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              height: '4px',
              background: 'linear-gradient(90deg, #8B0000, #fbbf24)'
            }}></div>
            
            {/* Form Header */}
            <div style={{
              textAlign: 'center',
              marginBottom: '2rem',
              marginTop: '1rem'
            }}>
              <h3 style={{
                fontSize: '1.75rem',
                fontWeight: '700',
                color: '#1f2937',
                marginBottom: '0.5rem'
              }}>
                <span style={{
                  color: '#8B0000',
                  marginRight: '0.5rem'
                }}>📝</span>
                Formulário de Orçamento
              </h3>
              <p style={{
                color: '#6b7280',
                fontSize: '0.95rem',
                margin: '0'
              }}>
                Preencha os dados abaixo para receber seu orçamento personalizado
              </p>
            </div>
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
                  placeholder="(35) 99140-4039"
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
              
              {/* Submit Button Premium */}
              <div style={{
                marginTop: '2rem',
                position: 'relative'
              }}>
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#8B0000',
                    color: 'white',
                    fontSize: '1.25rem',
                    padding: '1.25rem 2rem',
                    borderRadius: '0.75rem',
                    border: 'none',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    width: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 10px 15px -3px rgba(139, 0, 0, 0.3), 0 4px 6px -2px rgba(139, 0, 0, 0.1)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#7f1d1d'
                    e.target.style.transform = 'translateY(-2px)'
                    e.target.style.boxShadow = '0 20px 25px -5px rgba(139, 0, 0, 0.4), 0 10px 10px -5px rgba(139, 0, 0, 0.2)'
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#8B0000'
                    e.target.style.transform = 'translateY(0)'
                    e.target.style.boxShadow = '0 10px 15px -3px rgba(139, 0, 0, 0.3), 0 4px 6px -2px rgba(139, 0, 0, 0.1)'
                  }}
                >
                  GARANTIR MEU ORÇAMENTO GRATUITO
                </button>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm