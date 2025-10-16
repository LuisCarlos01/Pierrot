import React, { useState, useEffect, useRef } from 'react'
import { smoothScrollToCustom } from '../utils/formatMessage'

const Services = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [cardAnimations, setCardAnimations] = useState([false, false, false, false, false, false])
  const [activeImages, setActiveImages] = useState([0, 0, 0, 0, 0, 0])
  const intervalRefs = useRef([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    const cardTimers = cardAnimations.map((_, index) => 
      setTimeout(() => {
        setCardAnimations(prev => {
          const newState = [...prev]
          newState[index] = true
          return newState
        })
      }, 200 + (index * 150))
    )

    startCarousels()

    return () => {
      clearTimeout(timer)
      cardTimers.forEach(clearTimeout)
      stopCarousels()
    }
  }, [])

  const startCarousels = () => {
    stopCarousels()
    
    for (let cardIndex = 0; cardIndex < 6; cardIndex++) {
      const interval = setInterval(() => {
        setActiveImages(prev => {
          const newState = [...prev]
          newState[cardIndex] = (newState[cardIndex] + 1) % 3
          return newState
        })
      }, 3000)
      
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

  const segments = [
    {
      id: 0,
      name: "Espetinho",
      emoji: "🍢",
      description: "Espetinhos tradicionais e gourmet com carnes selecionadas e temperos especiais.",
      images: [
        "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=1000&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1000&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1544025162-d76694265947?w=1000&h=600&fit=crop&crop=center"
      ]
    },
    {
      id: 1,
      name: "Comida de Boteco",
      emoji: "🍺",
      description: "Petiscos tradicionais brasileiros com aquele sabor autêntico de boteco.",
      images: [
        "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1000&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=1000&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=1000&h=600&fit=crop&crop=center"
      ]
    },
    {
      id: 2,
      name: "Drinks",
      emoji: "🍹",
      description: "Coquetéis clássicos e autorais preparados por bartenders especializados.",
      images: [
        "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1000&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=1000&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1000&h=600&fit=crop&crop=center"
      ]
    },
    {
      id: 3,
      name: "Fast Food",
      emoji: "🍔",
      description: "Hambúrgueres artesanais, batatas crocantes e lanches gourmet.",
      images: [
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1000&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=1000&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1550547660-d9450f859871?w=1000&h=600&fit=crop&crop=center"
      ]
    },
    {
      id: 4,
      name: "Italiana",
      emoji: "🍝",
      description: "Massas frescas, risotos cremosos e pratos autênticos da culinária italiana.",
      images: [
        "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=1000&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=1000&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=1000&h=600&fit=crop&crop=center"
      ]
    },
    {
      id: 5,
      name: "Japonesa",
      emoji: "🍣",
      description: "Sushi fresco, sashimi premium e pratos da culinária japonesa autêntica.",
      images: [
        "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=1000&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1553621042-f6e147245754?w=1000&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1563612116625-3012372fccce?w=1000&h=600&fit=crop&crop=center"
      ]
    }
  ]

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
        {/* Header Premium */}
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem',
          position: 'relative'
        }}>
          <div style={{
            display: 'inline-block',
            backgroundColor: '#fbbf24',
            color: '#1f2937',
            padding: '0.5rem 1.5rem',
            borderRadius: '2rem',
            fontSize: '0.875rem',
            fontWeight: '600',
            marginBottom: '1.5rem',
            boxShadow: '0 4px 6px rgba(251, 191, 36, 0.3)'
          }}>
            🍽️ ESPECIALIDADES CULINÁRIAS
          </div>
          
          <h2 
            className={`${isVisible ? 'animate-slide-bottom' : ''}`}
            style={{
              fontSize: '3rem',
              fontWeight: '800',
              color: '#1f2937',
              marginBottom: '1rem',
              position: 'relative',
              display: 'inline-block',
              opacity: isVisible ? 1 : 0
            }}
          >
            Nossos Segmentos
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
          
          <p 
            className={`${isVisible ? 'animate-slide-bottom delay-200' : ''}`}
            style={{
              fontSize: '1.25rem',
              color: '#4b5563',
              maxWidth: '700px',
              margin: '0 auto 2rem auto',
              lineHeight: '1.6',
              opacity: isVisible ? 1 : 0
            }}
          >
            Diversidade gastronômica para todos os paladares e ocasiões especiais
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
                6
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: '#6b7280',
                fontWeight: '600'
              }}>
                Segmentos Especializados
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
                100+
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: '#6b7280',
                fontWeight: '600'
              }}>
                Pratos Diferentes
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
                24h
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: '#6b7280',
                fontWeight: '600'
              }}>
                Preparação Fresca
              </div>
            </div>
          </div>
        </div>
        
        {/* Grid de Segmentos */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {segments.map((segment, index) => (
            <div 
              key={segment.id}
              className={`premium-card ${cardAnimations[index] ? 'animate-slide-left' : ''}`}
              style={{
                textAlign: 'center',
                padding: '0',
                backgroundColor: 'white',
                borderRadius: '1rem',
                border: '2px solid #f3f4f6',
                overflow: 'hidden',
                opacity: cardAnimations[index] ? 1 : 0,
                transform: cardAnimations[index] ? 'translateX(0)' : 'translateX(-100px)',
                transition: 'all 0.8s ease-out',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                position: 'relative'
              }}
            >
              {/* Decorative Element */}
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                height: '4px',
                background: 'linear-gradient(90deg, #8B0000, #fbbf24)'
              }}></div>
              
              {/* Carrossel de Imagens */}
              <div 
                className="carousel-container gourmet-hover"
                style={{
                  width: '100%',
                  height: '200px',
                  position: 'relative'
                }}
              >
                {segment.images.map((image, imgIndex) => (
                  <div 
                    key={imgIndex}
                    className={`carousel-image ${activeImages[segment.id] === imgIndex ? 'active' : ''}`}
                    style={{
                      backgroundImage: `url("${image}")`
                    }}
                  />
                ))}
                
                {/* Indicadores do Carrossel */}
                <div className="carousel-indicators">
                  {segment.images.map((_, imgIndex) => (
                    <div 
                      key={imgIndex}
                      className={`carousel-indicator ${activeImages[segment.id] === imgIndex ? 'active' : ''}`} 
                    />
                  ))}
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
                  <span style={{ fontSize: '3rem' }}>{segment.emoji}</span>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '1rem'
                }}>
                  {segment.name}
                </h3>
                <p style={{
                  color: '#4b5563',
                  lineHeight: '1.6'
                }}>
                  {segment.description}
                </p>
              </div>
            </div>
          ))}
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
            Diversidade Gastronômica
          </h3>
          <p style={{
            fontSize: '1.125rem',
            color: '#374151',
            margin: '0'
          }}>
            Seis segmentos especializados para atender todos os gostos e ocasiões especiais!
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