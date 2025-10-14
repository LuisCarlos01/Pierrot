import React, { useState } from 'react'

const FAQ = () => {
  const [openItem, setOpenItem] = useState(null)

  const faqItems = [
    {
      id: 1,
      question: "Qual é o valor mínimo para contratação?",
      answer: "Não temos valor mínimo fixo. O orçamento é personalizado de acordo com o número de convidados, tipo de evento e serviços solicitados. Entre em contato conosco para um orçamento personalizado."
    },
    {
      id: 2,
      question: "Vocês fornecem os equipamentos (mesas, cadeiras, etc.)?",
      answer: "Sim! Fornecemos todos os equipamentos necessários: mesas, cadeiras, toalhas, decoração básica e equipamentos de cozinha. Tudo está incluso no nosso serviço completo."
    },
    {
      id: 3,
      question: "Qual é o prazo mínimo para contratação?",
      answer: "Recomendamos um prazo mínimo de 7 dias para eventos pequenos e 15 dias para eventos maiores. Para eventos muito grandes ou em datas especiais, sugerimos contato com pelo menos 30 dias de antecedência."
    },
    {
      id: 4,
      question: "Vocês trabalham em qualquer região?",
      answer: "Atendemos toda a região metropolitana e cidades próximas. Para eventos em locais mais distantes, consulte-nos sobre disponibilidade e possíveis taxas de deslocamento."
    },
    {
      id: 5,
      question: "Como funciona o pagamento?",
      answer: "Aceitamos diversas formas de pagamento: dinheiro, PIX, cartão de débito e crédito. O pagamento pode ser parcelado conforme combinado. Geralmente solicitamos uma entrada para confirmação do evento."
    },
    {
      id: 6,
      question: "Vocês fazem eventos vegetarianos ou veganos?",
      answer: "Sim! Temos opções vegetarianas e veganas em nosso cardápio. Informe-nos sobre restrições alimentares ou preferências especiais no momento da contratação."
    }
  ]

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id)
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
            Perguntas Frequentes
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#4b5563',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Tire suas dúvidas sobre nossos serviços e processos
          </p>
        </div>
        
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {faqItems.map((item) => (
            <div 
              key={item.id}
              style={{
                backgroundColor: 'white',
                borderRadius: '0.5rem',
                marginBottom: '1rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e5e7eb',
                overflow: 'hidden'
              }}
            >
              {/* Question */}
              <button
                onClick={() => toggleItem(item.id)}
                style={{
                  width: '100%',
                  padding: '1.5rem',
                  backgroundColor: 'transparent',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  transition: 'background-color 0.3s'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#f9fafb'}
                onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                <span>{item.question}</span>
                <span style={{
                  fontSize: '1.5rem',
                  color: '#8B0000',
                  transition: 'transform 0.3s',
                  transform: openItem === item.id ? 'rotate(45deg)' : 'rotate(0deg)'
                }}>
                  +
                </span>
              </button>
              
              {/* Answer */}
              {openItem === item.id && (
                <div style={{
                  padding: '0 1.5rem 1.5rem 1.5rem',
                  borderTop: '1px solid #e5e7eb',
                  backgroundColor: '#fafafa'
                }}>
                  <p style={{
                    color: '#4b5563',
                    lineHeight: '1.6',
                    margin: '0',
                    paddingTop: '1rem'
                  }}>
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div style={{
          textAlign: 'center',
          marginTop: '3rem',
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
            Ainda tem dúvidas?
          </h3>
          <p style={{
            fontSize: '1.125rem',
            color: '#374151',
            marginBottom: '1.5rem'
          }}>
            Entre em contato conosco! Estamos aqui para esclarecer todas as suas dúvidas.
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
            ENTRE EM CONTATO
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQ