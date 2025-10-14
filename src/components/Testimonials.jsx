import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      text: "O Buffet Pierrot superou todas as nossas expectativas! A comida estava deliciosa e a equipe muito profissional. Recomendo para qualquer evento!",
      rating: 5
    },
    {
      id: 2,
      name: "João Santos",
      text: "Contratamos para a festa da empresa e foi um sucesso total. Todos os funcionários elogiaram a qualidade dos pratos e o atendimento impecável.",
      rating: 5
    },
    {
      id: 3,
      name: "Ana Costa",
      text: "Fizemos o aniversário da minha filha e foi perfeito! A equipe cuidou de tudo, desde a montagem até a limpeza. Muito obrigada!",
      rating: 5
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} style={{ color: index < rating ? '#fbbf24' : '#d1d5db', fontSize: '1.5rem' }}>
        ★
      </span>
    ))
  }

  return (
    <section style={{
      backgroundColor: '#f9fafb',
      padding: '4rem 0',
      margin: '0',
      minHeight: '500px'
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
            O que nossos clientes dizem:
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#4b5563',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Depoimentos reais de clientes satisfeitos que escolheram o Buffet Pierrot Eventos
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '0.5rem',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e5e7eb'
              }}
            >
              {/* Rating */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                {renderStars(testimonial.rating)}
              </div>
              
              {/* Testimonial Text */}
              <p style={{
                color: '#374151',
                marginBottom: '1.5rem',
                fontStyle: 'italic',
                textAlign: 'center',
                lineHeight: '1.6',
                fontSize: '1.1rem'
              }}>
                "{testimonial.text}"
              </p>
              
              {/* Client Name */}
              <div style={{
                textAlign: 'center',
                borderTop: '1px solid #e5e7eb',
                paddingTop: '1rem'
              }}>
                <h4 style={{
                  fontWeight: '600',
                  color: '#1f2937',
                  fontSize: '1.125rem',
                  margin: '0 0 0.5rem 0'
                }}>
                  {testimonial.name}
                </h4>
                <p style={{
                  color: '#6b7280',
                  fontSize: '0.875rem',
                  margin: '0'
                }}>
                  Cliente Buffet Pierrot Eventos
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div style={{
          textAlign: 'center',
          backgroundColor: '#fef2f2',
          padding: '2rem',
          borderRadius: '0.5rem',
          borderLeft: '4px solid #8B0000'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#8B0000',
            marginBottom: '1rem'
          }}>
            Seja o próximo cliente satisfeito!
          </h3>
          <p style={{
            fontSize: '1.125rem',
            color: '#374151',
            marginBottom: '1.5rem'
          }}>
            Junte-se aos nossos clientes que já transformaram seus eventos em experiências inesquecíveis
          </p>
          <a 
            href="#contato" 
            style={{
              backgroundColor: '#8B0000',
              color: 'white',
              fontSize: '1.125rem',
              padding: '1rem 2rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              display: 'inline-block',
              fontWeight: '600',
              transition: 'background-color 0.3s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#7f1d1d'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#8B0000'}
          >
            SOLICITAR ORÇAMENTO
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials