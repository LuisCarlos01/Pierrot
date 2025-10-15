import React from 'react'

const Services = () => {
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
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '1rem'
          }}>
            Conheça Nossos Diferenciais
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#4b5563',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Oferecemos serviços de qualidade superior para tornar seu evento inesquecível
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {/* Differential 1 */}
          <div style={{
            textAlign: 'center',
            padding: '2rem',
            backgroundColor: '#f9fafb',
            borderRadius: '0.5rem',
            border: '2px solid #f3f4f6'
          }}>
            <div style={{
              backgroundColor: '#fef2f2',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              marginBottom: '1.5rem',
              display: 'flex',
              justifyContent: 'center'
            }}>
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
          
          {/* Differential 2 */}
          <div style={{
            textAlign: 'center',
            padding: '2rem',
            backgroundColor: '#f9fafb',
            borderRadius: '0.5rem',
            border: '2px solid #f3f4f6'
          }}>
            <div style={{
              backgroundColor: '#fef2f2',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              marginBottom: '1.5rem',
              display: 'flex',
              justifyContent: 'center'
            }}>
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
          
          {/* Differential 3 */}
          <div style={{
            textAlign: 'center',
            padding: '2rem',
            backgroundColor: '#f9fafb',
            borderRadius: '0.5rem',
            border: '2px solid #f3f4f6'
          }}>
            <div style={{
              backgroundColor: '#fef2f2',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              marginBottom: '1.5rem',
              display: 'flex',
              justifyContent: 'center'
            }}>
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
          
          {/* Differential 4 */}
          <div style={{
            textAlign: 'center',
            padding: '2rem',
            backgroundColor: '#f9fafb',
            borderRadius: '0.5rem',
            border: '2px solid #f3f4f6'
          }}>
            <div style={{
              backgroundColor: '#fef2f2',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              marginBottom: '1.5rem',
              display: 'flex',
              justifyContent: 'center'
            }}>
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
        
        {/* Highlight Box */}
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
            100% de Aprovação
          </h3>
          <p style={{
            fontSize: '1.125rem',
            color: '#374151',
            margin: '0'
          }}>
            Desde nossa fundação levando sabor e qualidade para momentos especiais!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services