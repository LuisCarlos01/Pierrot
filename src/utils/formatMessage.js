// Função para formatar mensagem do WhatsApp
export const formatWhatsAppMessage = (formData) => {
  const { nome, telefone, email, evento, convidados, data, mensagem } = formData;
  
  const message = `
🍽️ *SOLICITAÇÃO DE ORÇAMENTO - BUFFET PIERROTI EVENTOS*

👤 *Cliente:* ${nome}
📞 *Telefone:* ${telefone}
${email ? `📧 *E-mail:* ${email}` : ''}

🎉 *Evento:* ${evento}
👥 *Convidados:* ${convidados} pessoas
📅 *Data:* ${data}

💬 *Mensagem:* ${mensagem || 'Sem mensagem adicional'}

_Enviado via site oficial_
  `.trim();

  return message;
};

// Função para gerar link do WhatsApp
export const generateWhatsAppLink = (formData) => {
  const phoneNumber = "5511999999999"; // Substituir pelo número real
  const message = formatWhatsAppMessage(formData);
  const encodedMessage = encodeURIComponent(message);
  
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

// Função para validar formulário
export const validateForm = (formData) => {
  const errors = {};
  
  if (!formData.nome?.trim()) {
    errors.nome = 'Nome é obrigatório';
  }
  
  if (!formData.telefone?.trim()) {
    errors.telefone = 'Telefone é obrigatório';
  }
  
  if (!formData.evento?.trim()) {
    errors.evento = 'Tipo de evento é obrigatório';
  }
  
  if (!formData.convidados || formData.convidados < 1) {
    errors.convidados = 'Número de convidados é obrigatório';
  }
  
  if (!formData.data?.trim()) {
    errors.data = 'Data do evento é obrigatória';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
