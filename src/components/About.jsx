import React from 'react'

const About = () => {
  return (
    <section style={{
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
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '1rem'
          }}>
            Como Funciona Nosso Buffet?
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#4b5563',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Levamos a experiência completa de um buffet até você! Seja em casa, no salão de festas, na empresa ou até em um sítio, nossa equipe cuida de tudo para que você aproveite sem preocupações.
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {/* Step 1 */}
          <div style={{
            textAlign: 'center',
            padding: '2rem',
            backgroundColor: 'white',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
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
              margin: '0 auto 1.5rem'
            }}>
              1
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
          <div style={{
            textAlign: 'center',
            padding: '2rem',
            backgroundColor: 'white',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
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
              margin: '0 auto 1.5rem'
            }}>
              2
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
          <div style={{
            textAlign: 'center',
            padding: '2rem',
            backgroundColor: 'white',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
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
              margin: '0 auto 1.5rem'
            }}>
              3
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

export default About