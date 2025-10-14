import React from 'react'

const Gallery = () => {
  const galleryCategories = [
    {
      id: 1,
      title: "Festas de Aniversário",
      description: "Celebrações especiais com sabor e qualidade",
      imageCount: 8
    },
    {
      id: 2,
      title: "Eventos Corporativos",
      description: "Confraternizações e eventos empresariais",
      imageCount: 6
    },
    {
      id: 3,
      title: "Casamentos",
      description: "O dia mais especial da sua vida",
      imageCount: 10
    },
    {
      id: 4,
      title: "Festa Junina",
      description: "Tradição e sabor em um só lugar",
      imageCount: 5
    }
  ]

  return (
    <section style={{
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
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '1rem'
          }}>
            Nossos Eventos
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#4b5563',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Veja alguns dos eventos especiais que realizamos com sucesso
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {galleryCategories.map((category) => (
            <div 
              key={category.id} 
              style={{
                backgroundColor: '#f9fafb',
                borderRadius: '0.5rem',
                overflow: 'hidden',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e5e7eb',
                transition: 'transform 0.3s, box-shadow 0.3s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}
            >
              {/* Image Placeholder */}
              <div style={{
                height: '200px',
                backgroundColor: '#e5e7eb',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)'
              }}>
                <div style={{
                  textAlign: 'center',
                  color: '#6b7280'
                }}>
                  <svg style={{width: '3rem', height: '3rem', marginBottom: '0.5rem'}} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  <p style={{fontSize: '0.875rem', margin: '0'}}>
                    {category.imageCount} fotos
                  </p>
                </div>
              </div>
              
              {/* Content */}
              <div style={{
                padding: '1.5rem'
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '0.5rem'
                }}>
                  {category.title}
                </h3>
                <p style={{
                  color: '#4b5563',
                  fontSize: '0.875rem',
                  lineHeight: '1.5',
                  margin: '0'
                }}>
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div style={{
          textAlign: 'center',
          backgroundColor: '#fefce8',
          padding: '2rem',
          borderRadius: '0.5rem',
          border: '2px solid #fde047'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#8B0000',
            marginBottom: '1rem'
          }}>
            Quer ver mais fotos dos nossos eventos?
          </h3>
          <p style={{
            fontSize: '1.125rem',
            color: '#374151',
            marginBottom: '1.5rem'
          }}>
            Entre em contato conosco e solicite nosso portfólio completo!
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
            VER PORTFÓLIO COMPLETO
          </a>
        </div>
      </div>
    </section>
  )
}

export default Gallery