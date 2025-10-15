import React, { useState, useEffect } from 'react'
import { smoothScrollToCustom } from '../utils/formatMessage'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [cardAnimations, setCardAnimations] = useState([false, false, false])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    // Animar cards sequencialmente
    const cardTimers = cardAnimations.map((_, index) => 
      setTimeout(() => {
        setCardAnimations(prev => {
          const newState = [...prev]
          newState[index] = true
          return newState
        })
      }, 300 + (index * 200))
    )

    return () => {
      clearTimeout(timer)
      cardTimers.forEach(clearTimeout)
    }
  }, [])

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    smoothScrollToCustom(sectionId, 80, 1000)
  }

  return (
    <section id="sobre" style={{
      backgroundColor: '#f9fafb',
      padding: '4rem 0',
      margin: '0',
      minHeight: '400px'
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
          <h2 
            className={`${isVisible ? 'animate-slide-up' : ''}`}
            style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '1rem',
              opacity: isVisible ? 1 : 0
            }}
          >
            Como Funciona Nosso Buffet?
          </h2>
          <p 
            className={`${isVisible ? 'animate-slide-up delay-200' : ''}`}
            style={{
              fontSize: '1.25rem',
              color: '#4b5563',
              maxWidth: '600px',
              margin: '0 auto',
              opacity: isVisible ? 1 : 0
            }}
          >
            Levamos a experiência completa de um buffet até você! Seja em casa, no salão de festas, na empresa ou até em um sítio, nossa equipe cuida de tudo para que você aproveite sem preocupações.
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {/* Step 1 */}
          <div 
            className={`hover-lift ${cardAnimations[0] ? 'animate-scale-in' : ''}`}
            style={{
              textAlign: 'center',
              padding: '2rem',
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              opacity: cardAnimations[0] ? 1 : 0,
              transform: cardAnimations[0] ? 'scale(1)' : 'scale(0.8)',
              transition: 'all 0.6s ease-out'
            }}
          >
            <div 
              className="hover-scale animate-pulse"
              style={{
                backgroundColor: '#8B0000',
                color: 'white',
                width: '4rem',
                height: '4rem',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                margin: '0 auto 1.5rem',
                cursor: 'pointer'
              }}
            >
              1
            </div>
            
            {/* Imagem da Entrada */}
            <div 
              className="hover-scale"
              style={{
                width: '100%',
                height: '200px',
                borderRadius: '0.5rem',
                marginBottom: '1.5rem',
                backgroundImage: 'url("https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'scale(1.05)'
                e.target.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)'
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'scale(1)'
                e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.7))',
                color: 'white',
                padding: '1rem',
                fontSize: '0.875rem',
                fontWeight: '600'
              }}>
                🥗 Pratos Frios & Aperitivos
              </div>
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '1rem'
            }}>
              Entrada Especial
            </h3>
            <p style={{
              color: '#4b5563',
              lineHeight: '1.6'
            }}>
              A experiência começa com uma entrada especial de pratos frios e aperitivos selecionados.
            </p>
          </div>
          
          {/* Step 2 */}
          <div 
            className={`hover-lift ${cardAnimations[1] ? 'animate-scale-in' : ''}`}
            style={{
              textAlign: 'center',
              padding: '2rem',
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              opacity: cardAnimations[1] ? 1 : 0,
              transform: cardAnimations[1] ? 'scale(1)' : 'scale(0.8)',
              transition: 'all 0.6s ease-out'
            }}
          >
            <div 
              className="hover-scale animate-pulse"
              style={{
                backgroundColor: '#8B0000',
                color: 'white',
                width: '4rem',
                height: '4rem',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                margin: '0 auto 1.5rem',
                cursor: 'pointer'
              }}
            >
              2
            </div>
            
            {/* Imagem dos Pratos Principais */}
            <div 
              className="hover-scale"
              style={{
                width: '100%',
                height: '200px',
                borderRadius: '0.5rem',
                marginBottom: '1.5rem',
                backgroundImage: 'url("https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"), url("https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: '#f3f4f6'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'scale(1.05)'
                e.target.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)'
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'scale(1)'
                e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.7))',
                color: 'white',
                padding: '1rem',
                fontSize: '0.875rem',
                fontWeight: '600'
              }}>
                🍽️ Pratos Quentes & Variados
              </div>
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '1rem'
            }}>
              Pratos Principais
            </h3>
            <p style={{
              color: '#4b5563',
              lineHeight: '1.6'
            }}>
              Servimos uma grande variedade de pratos quentes e frios, preparados na hora, até que todos estejam satisfeitos.
            </p>
          </div>
          
          {/* Step 3 */}
          <div 
            className={`hover-lift ${cardAnimations[2] ? 'animate-scale-in' : ''}`}
            style={{
              textAlign: 'center',
              padding: '2rem',
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              opacity: cardAnimations[2] ? 1 : 0,
              transform: cardAnimations[2] ? 'scale(1)' : 'scale(0.8)',
              transition: 'all 0.6s ease-out'
            }}
          >
            <div 
              className="hover-scale animate-pulse"
              style={{
                backgroundColor: '#8B0000',
                color: 'white',
                width: '4rem',
                height: '4rem',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                margin: '0 auto 1.5rem',
                cursor: 'pointer'
              }}
            >
              3
            </div>
            
            {/* Imagem das Sobremesas */}
            <div 
              className="hover-scale"
              style={{
                width: '100%',
                height: '200px',
                borderRadius: '0.5rem',
                marginBottom: '1.5rem',
                backgroundImage: 'url("https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'scale(1.05)'
                e.target.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)'
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'scale(1)'
                e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.7))',
                color: 'white',
                padding: '1rem',
                fontSize: '0.875rem',
                fontWeight: '600'
              }}>
                🍰 Doces & Sobremesas
              </div>
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '1rem'
            }}>
              Sobremesas Irresistíveis
            </h3>
            <p style={{
              color: '#4b5563',
              lineHeight: '1.6'
            }}>
              Para finalizar, nossas irresistíveis sobremesas encerram a noite com chave de ouro!
            </p>
          </div>
        </div>
        
        <div style={{
          textAlign: 'center',
          marginTop: '3rem'
        }}>
          <a 
            href="#contato" 
            onClick={(e) => handleNavClick(e, 'contato')}
            className={`hover-scale animate-bounce ${isVisible ? 'animate-slide-up delay-500' : ''}`}
            style={{
              backgroundColor: '#8B0000',
              color: 'white',
              fontSize: '1.125rem',
              padding: '1rem 2rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              display: 'inline-block',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              boxShadow: '0 4px 12px rgba(139, 0, 0, 0.3)'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#7f1d1d'
              e.target.style.boxShadow = '0 6px 16px rgba(139, 0, 0, 0.4)'
              e.target.style.transform = 'translateY(-2px)'
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#8B0000'
              e.target.style.boxShadow = '0 4px 12px rgba(139, 0, 0, 0.3)'
              e.target.style.transform = 'translateY(0)'
            }}
          >
            SOLICITAR ORÇAMENTO
          </a>
        </div>
      </div>
    </section>
  )
}

export default About