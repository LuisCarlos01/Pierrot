import React, { useState } from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      text: "O Buffet Pierrot superou todas as nossas expectativas! A comida estava deliciosa e a equipe muito profissional. Recomendo para qualquer evento!",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      event: "Casamento"
    },
    {
      id: 2,
      name: "João Santos",
      text: "Contratamos para a festa da empresa e foi um sucesso total. Todos os funcionários elogiaram a qualidade dos pratos e o atendimento impecável.",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      event: "Evento Corporativo"
    },
    {
      id: 3,
      name: "Ana Costa",
      text: "Fizemos o aniversário da minha filha e foi perfeito! A equipe cuidou de tudo, desde a montagem até a limpeza. Muito obrigada!",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      event: "Aniversário"
    },
    {
      id: 4,
      name: "Carlos Mendes",
      text: "Excelente serviço! A comida estava saborosa e a apresentação impecável. Todos os convidados ficaram impressionados com a qualidade.",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      event: "Formatura"
    },
    {
      id: 5,
      name: "Patricia Lima",
      text: "Contratamos para nossa festa de 15 anos e foi maravilhoso! A equipe foi muito atenciosa e tudo saiu perfeito como planejado.",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      event: "Festa de 15 anos"
    },
    {
      id: 6,
      name: "Roberto Alves",
      text: "Serviço excepcional! A organização foi perfeita e todos os convidados elogiaram a qualidade dos pratos e o atendimento.",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      event: "Confraternização"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        style={{ 
          color: index < rating ? '#fbbf24' : '#d1d5db', 
          fontSize: '1.2rem',
          textShadow: index < rating ? '0 0 6px rgba(251, 191, 36, 0.3)' : 'none',
          transition: 'all 0.3s ease'
        }}
      >
        ★
      </span>
    ))
  }

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 3
    )
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, testimonials.length - 3) : prevIndex - 3
    )
  }

  const goToTestimonial = (index) => {
    setCurrentIndex(index * 3)
  }

  return (
    <section style={{
      backgroundColor: '#8B0000',
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
            color: '#f5e0d3',
            marginBottom: '1rem',
            fontFamily: 'sans-serif'
          }}>
            O QUE NOSSOS CLIENTES DIZEM:
          </h2>
        </div>
        
        {/* Carrossel de 3 Depoimentos */}
        <div style={{
          position: 'relative',
          marginBottom: '3rem',
          maxWidth: '1200px',
          margin: '0 auto 3rem auto'
        }}>
          {/* Container dos Cards */}
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            alignItems: 'stretch'
          }}>
            {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
              <div key={testimonial.id} style={{ 
                position: 'relative', 
                flex: '1', 
                maxWidth: '350px',
                minHeight: '400px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                {/* Card de Depoimento */}
                <div style={{
                  backgroundColor: 'white',
                  padding: '2rem',
                  borderRadius: '0.75rem',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                  border: '1px solid #e5e7eb',
                  position: 'relative',
                  marginBottom: '1rem',
                  flex: '1',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  {/* Balão de Fala */}
                  <div style={{
                    position: 'absolute',
                    bottom: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '0',
                    height: '0',
                    borderLeft: '10px solid transparent',
                    borderRight: '10px solid transparent',
                    borderTop: '10px solid white'
                  }}></div>

                  {/* Rating */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '1rem'
                  }}>
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  {/* Testimonial Text */}
                  <div style={{ flex: '1', display: 'flex', alignItems: 'center' }}>
                    <p style={{
                      color: '#374151',
                      marginBottom: '0',
                      textAlign: 'center',
                      lineHeight: '1.5',
                      fontSize: '1rem'
                    }}>
                      {testimonial.text}
                    </p>
                  </div>
                </div>

                {/* Client Photo e Info */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginTop: 'auto'
                }}>
                  {/* Client Photo */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '0.5rem'
                  }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: '3px solid #fbbf24',
                      boxShadow: '0 4px 8px rgba(251, 191, 36, 0.3)'
                    }}>
                      <img 
                        src={testimonial.photo} 
                        alt={testimonial.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    </div>
                  </div>

                  {/* Client Info */}
                  <div style={{
                    textAlign: 'center'
                  }}>
                    <h4 style={{
                      fontWeight: '600',
                      color: '#fbbf24',
                      fontSize: '1rem',
                      margin: '0 0 0.25rem 0'
                    }}>
                      {testimonial.name}
                    </h4>
                    <p style={{
                      color: '#9ca3af',
                      fontSize: '0.875rem',
                      margin: '0',
                      fontWeight: '500'
                    }}>
                      {testimonial.event}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Previous Button */}
          <button
            onClick={prevTestimonial}
            style={{
              backgroundColor: '#fbbf24',
              color: '#261e1a',
              border: 'none',
              borderRadius: '50%',
              width: '45px',
              height: '45px',
              fontSize: '1.25rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 8px rgba(251, 191, 36, 0.3)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#f59e0b'
              e.target.style.transform = 'scale(1.1)'
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#fbbf24'
              e.target.style.transform = 'scale(1)'
            }}
          >
            ‹
          </button>

          {/* Dots Indicator */}
          <div style={{
            display: 'flex',
            gap: '0.5rem'
          }}>
            {Array.from({ length: Math.ceil(testimonials.length / 3) }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * 3)}
                style={{
                  width: index === Math.floor(currentIndex / 3) ? '30px' : '12px',
                  height: '12px',
                  borderRadius: '6px',
                  border: 'none',
                  backgroundColor: index === Math.floor(currentIndex / 3) ? '#fbbf24' : '#6b7280',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextTestimonial}
            style={{
              backgroundColor: '#fbbf24',
              color: '#261e1a',
              border: 'none',
              borderRadius: '50%',
              width: '45px',
              height: '45px',
              fontSize: '1.25rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 8px rgba(251, 191, 36, 0.3)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#f59e0b'
              e.target.style.transform = 'scale(1.1)'
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#fbbf24'
              e.target.style.transform = 'scale(1)'
            }}
          >
            ›
          </button>
        </div>
        
      </div>
    </section>
  )
}

export default Testimonials