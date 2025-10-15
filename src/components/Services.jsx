import React, { useState, useEffect, useRef } from 'react'
import { smoothScrollToCustom } from '../utils/formatMessage'

const Services = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [cardAnimations, setCardAnimations] = useState([false, false, false, false])
  const [activeImages, setActiveImages] = useState([0, 0, 0, 0]) // Estado para controlar imagem ativa de cada card
  const intervalRefs = useRef([])

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
      }, 200 + (index * 150))
    )

    // Iniciar carrosséis
    startCarousels()

    return () => {
      clearTimeout(timer)
      cardTimers.forEach(clearTimeout)
      stopCarousels()
    }
  }, [])

  const startCarousels = () => {
    // Limpar intervalos existentes
    stopCarousels()
    
    // Iniciar carrossel para cada card
    for (let cardIndex = 0; cardIndex < 4; cardIndex++) {
      const interval = setInterval(() => {
        setActiveImages(prev => {
          const newState = [...prev]
          newState[cardIndex] = (newState[cardIndex] + 1) % 3
          return newState
        })
      }, 3000) // Troca a cada 3 segundos
      
      intervalRefs.current.push(interval)
    }
  }

  const stopCarousels = () => {
    intervalRefs.current.forEach(interval => clearInterval(interval))
    intervalRefs.current = []
  }

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    smoothScrollToCustom(sectionId, 80, 1000)
  }
  return (
    <section id="servicos" style={{
      backgroundColor: 'white',
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
          <h2 
            className={`${isVisible ? 'animate-slide-bottom' : ''}`}
            style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#1f2937',
              marginBottom: '1rem',
              opacity: isVisible ? 1 : 0
            }}
          >
            Conheça Nossos Diferenciais
          </h2>
          <p 
            className={`${isVisible ? 'animate-slide-bottom delay-200' : ''}`}
            style={{
            fontSize: '1.25rem',
            color: '#4b5563',
            maxWidth: '600px',
              margin: '0 auto',
              opacity: isVisible ? 1 : 0
            }}
          >
            Oferecemos serviços de qualidade superior para tornar seu evento inesquecível
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {/* Service 1 - Cozinha Premium */}
          <div 
            className={`premium-card ${cardAnimations[0] ? 'animate-slide-left' : ''}`}
            style={{
            textAlign: 'center',
              padding: '0',
              backgroundColor: 'white',
              borderRadius: '1rem',
              border: '2px solid #f3f4f6',
              overflow: 'hidden',
              opacity: cardAnimations[0] ? 1 : 0,
              transform: cardAnimations[0] ? 'translateX(0)' : 'translateX(-100px)',
              transition: 'all 0.8s ease-out',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          >
            {/* Carrossel de Imagens Gourmet */}
            <div 
              className="carousel-container gourmet-hover"
              style={{
                width: '100%',
                height: '200px',
                position: 'relative'
              }}
            >
              {/* Imagem 1 - Cozinha Profissional */}
              <div 
                className={`carousel-image ${activeImages[0] === 0 ? 'active' : ''}`}
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80")'
                }}
              />
              
              {/* Imagem 2 - Pratos Elegantes */}
              <div 
                className={`carousel-image ${activeImages[0] === 1 ? 'active' : ''}`}
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80")'
                }}
              />
              
              {/* Imagem 3 - Buffet Gourmet */}
              <div 
                className={`carousel-image ${activeImages[0] === 2 ? 'active' : ''}`}
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80")'
                }}
              />
              
              {/* Indicadores do Carrossel */}
              <div className="carousel-indicators">
                <div className={`carousel-indicator ${activeImages[0] === 0 ? 'active' : ''}`} />
                <div className={`carousel-indicator ${activeImages[0] === 1 ? 'active' : ''}`} />
                <div className={`carousel-indicator ${activeImages[0] === 2 ? 'active' : ''}`} />
              </div>
            </div>
            
            <div style={{ padding: '2rem' }}>
              <div 
                style={{
                  backgroundColor: '#fef2f2',
                  padding: '1.5rem',
                  borderRadius: '0.5rem',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
              <svg style={{width: '3rem', height: '3rem', color: '#8B0000'}} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '1rem'
            }}>
              Cozinha de Alta Performance
            </h3>
            <p style={{
              color: '#4b5563',
              lineHeight: '1.6'
            }}>
              Produzimos pratos frescos e saborosos, garantindo rapidez sem perder a qualidade.
            </p>
            </div>
          </div>
          
          {/* Service 2 - Equipe Profissional */}
          <div 
            className={`premium-card ${cardAnimations[1] ? 'animate-slide-right' : ''}`}
            style={{
            textAlign: 'center',
              padding: '0',
              backgroundColor: 'white',
              borderRadius: '1rem',
              border: '2px solid #f3f4f6',
              overflow: 'hidden',
              opacity: cardAnimations[1] ? 1 : 0,
              transform: cardAnimations[1] ? 'translateX(0)' : 'translateX(100px)',
              transition: 'all 0.8s ease-out',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          >
            {/* Carrossel de Equipe Profissional */}
            <div 
              className="carousel-container gourmet-hover"
              style={{
                width: '100%',
                height: '200px',
                position: 'relative'
              }}
            >
              {/* Imagem 1 - Equipe Trabalhando */}
              <div 
                className={`carousel-image ${activeImages[1] === 0 ? 'active' : ''}`}
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80")'
                }}
              />
              
              {/* Imagem 2 - Garçons Elegantes */}
              <div 
                className={`carousel-image ${activeImages[1] === 1 ? 'active' : ''}`}
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80")'
                }}
              />
              
              {/* Imagem 3 - Atendimento Premium */}
              <div 
                className={`carousel-image ${activeImages[1] === 2 ? 'active' : ''}`}
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80")'
                }}
              />
              
              {/* Indicadores do Carrossel */}
              <div className="carousel-indicators">
                <div className={`carousel-indicator ${activeImages[1] === 0 ? 'active' : ''}`} />
                <div className={`carousel-indicator ${activeImages[1] === 1 ? 'active' : ''}`} />
                <div className={`carousel-indicator ${activeImages[1] === 2 ? 'active' : ''}`} />
              </div>
            </div>
            
            <div style={{ padding: '2rem' }}>
              <div 
                style={{
                  backgroundColor: '#fef2f2',
                  padding: '1.5rem',
                  borderRadius: '0.5rem',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
              <svg style={{width: '3rem', height: '3rem', color: '#8B0000'}} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '1rem'
            }}>
              Equipe Profissional
            </h3>
            <p style={{
              color: '#4b5563',
              lineHeight: '1.6'
            }}>
              Supervisão especializada, cozinheiros e garçons experientes para seu evento.
            </p>
            </div>
          </div>
          
          {/* Service 3 - Eventos de Todos os Portes */}
          <div 
            className={`premium-card ${cardAnimations[2] ? 'animate-zoom-in' : ''}`}
            style={{
            textAlign: 'center',
              padding: '0',
              backgroundColor: 'white',
              borderRadius: '1rem',
              border: '2px solid #f3f4f6',
              overflow: 'hidden',
              opacity: cardAnimations[2] ? 1 : 0,
              transform: cardAnimations[2] ? 'scale(1)' : 'scale(0.5)',
              transition: 'all 0.8s ease-out',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          >
            {/* Carrossel de Eventos */}
            <div 
              className="carousel-container gourmet-hover"
              style={{
                width: '100%',
                height: '200px',
                position: 'relative'
              }}
            >
              {/* Imagem 1 - Evento Corporativo */}
              <div 
                className={`carousel-image ${activeImages[2] === 0 ? 'active' : ''}`}
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80")'
                }}
              />
              
              {/* Imagem 2 - Festa Privada */}
              <div 
                className={`carousel-image ${activeImages[2] === 1 ? 'active' : ''}`}
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80")'
                }}
              />
              
              {/* Imagem 3 - Casamento */}
              <div 
                className={`carousel-image ${activeImages[2] === 2 ? 'active' : ''}`}
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80")'
                }}
              />
              
              {/* Indicadores do Carrossel */}
              <div className="carousel-indicators">
                <div className={`carousel-indicator ${activeImages[2] === 0 ? 'active' : ''}`} />
                <div className={`carousel-indicator ${activeImages[2] === 1 ? 'active' : ''}`} />
                <div className={`carousel-indicator ${activeImages[2] === 2 ? 'active' : ''}`} />
              </div>
            </div>
            
            <div style={{ padding: '2rem' }}>
              <div 
                style={{
                  backgroundColor: '#fef2f2',
                  padding: '1.5rem',
                  borderRadius: '0.5rem',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
              <svg style={{width: '3rem', height: '3rem', color: '#8B0000'}} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '1rem'
            }}>
              Eventos de Todos os Portes
            </h3>
            <p style={{
              color: '#4b5563',
              lineHeight: '1.6'
            }}>
              De pequenas festas a confraternizações corporativas para grandes empresas.
            </p>
            </div>
          </div>
          
          {/* Service 4 - Ingredientes Premium */}
          <div 
            className={`premium-card ${cardAnimations[3] ? 'animate-slide-bottom' : ''}`}
            style={{
            textAlign: 'center',
              padding: '0',
              backgroundColor: 'white',
              borderRadius: '1rem',
              border: '2px solid #f3f4f6',
              overflow: 'hidden',
              opacity: cardAnimations[3] ? 1 : 0,
              transform: cardAnimations[3] ? 'translateY(0)' : 'translateY(100px)',
              transition: 'all 0.8s ease-out',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          >
            {/* Carrossel de Ingredientes Premium */}
            <div 
              className="carousel-container gourmet-hover"
              style={{
                width: '100%',
                height: '200px',
                position: 'relative'
              }}
            >
              {/* Imagem 1 - Ingredientes Frescos */}
              <div 
                className={`carousel-image ${activeImages[3] === 0 ? 'active' : ''}`}
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80")'
                }}
              />
              
              {/* Imagem 2 - Temperos Especiais */}
              <div 
                className={`carousel-image ${activeImages[3] === 1 ? 'active' : ''}`}
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80")'
                }}
              />
              
              {/* Imagem 3 - Carnes Premium */}
              <div 
                className={`carousel-image ${activeImages[3] === 2 ? 'active' : ''}`}
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80")'
                }}
              />
              
              {/* Indicadores do Carrossel */}
              <div className="carousel-indicators">
                <div className={`carousel-indicator ${activeImages[3] === 0 ? 'active' : ''}`} />
                <div className={`carousel-indicator ${activeImages[3] === 1 ? 'active' : ''}`} />
                <div className={`carousel-indicator ${activeImages[3] === 2 ? 'active' : ''}`} />
              </div>
            </div>
            
            <div style={{ padding: '2rem' }}>
              <div 
                style={{
                  backgroundColor: '#fef2f2',
                  padding: '1.5rem',
                  borderRadius: '0.5rem',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
              <svg style={{width: '3rem', height: '3rem', color: '#8B0000'}} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '1rem'
            }}>
              Ingredientes Premium
            </h3>
            <p style={{
              color: '#4b5563',
              lineHeight: '1.6'
            }}>
              Receitas especiais e ingredientes de primeiríssima qualidade, preparados na hora.
            </p>
            </div>
          </div>
        </div>
        
        {/* Highlight Box Premium */}
        <div 
          className={`premium-card animate-glow ${isVisible ? 'animate-slide-bottom delay-800' : ''}`}
          style={{
          textAlign: 'center',
          backgroundColor: '#fefce8',
          padding: '2rem',
            borderRadius: '1rem',
            border: '2px solid #fde047',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
            transition: 'all 0.8s ease-out',
            boxShadow: '0 8px 16px rgba(253, 224, 71, 0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div 
            className="animate-float"
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              fontSize: '2rem'
            }}
          >
            🎉
          </div>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#8B0000',
            marginBottom: '1rem'
          }}>
            100% de Aprovação
          </h3>
          <p style={{
            fontSize: '1.125rem',
            color: '#374151',
            margin: '0'
          }}>
            Desde nossa fundação levando sabor e qualidade para momentos especiais!
          </p>
          <div style={{
            marginTop: '1.5rem'
          }}>
            <a 
              href="#contato" 
              onClick={(e) => handleNavClick(e, 'contato')}
              className="hover-scale animate-bounce"
              style={{
                backgroundColor: '#8B0000',
                color: 'white',
                fontSize: '1rem',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                display: 'inline-block',
                fontWeight: '600',
                transition: 'all 0.3s ease',
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
      </div>
    </section>
  )
}

export default Services