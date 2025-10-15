// Função para formatar mensagem do WhatsApp
export const formatWhatsAppMessage = (formData) => {
  const { nome, telefone, email, evento, convidados, data, mensagem } = formData;
  
  const message = `
🍽️ *SOLICITAÇÃO DE ORÇAMENTO - BUFFET PIERROT EVENTOS*

👤 *Cliente:* ${nome}
📞 *Telefone:* ${telefone}
${email ? `📧 *E-mail:* ${email}` : ''}

🎉 *Evento:* ${evento || 'Não especificado'}
👥 *Convidados:* ${convidados || 'Não especificado'} pessoas
📅 *Data:* ${data || 'Não especificada'}

💬 *Mensagem:* ${mensagem || 'Solicitação de orçamento via site'}

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

// Função para validar email
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Função para formatar telefone brasileiro
export const formatPhoneNumber = (value) => {
  // Remove tudo que não é dígito
  const numbers = value.replace(/\D/g, '');
  
  // Aplica máscara baseada no tamanho
  if (numbers.length <= 2) {
    return numbers;
  } else if (numbers.length <= 6) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
  } else if (numbers.length <= 10) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
  } else {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  }
};

// Função para limpar número de telefone (apenas dígitos)
export const cleanPhoneNumber = (phone) => {
  return phone.replace(/\D/g, '');
};

// Função para validar telefone brasileiro
const isValidPhone = (phone) => {
  const cleanPhone = cleanPhoneNumber(phone);
  // Telefone brasileiro: DDD (2 dígitos) + número (8 ou 9 dígitos)
  return cleanPhone.length === 10 || cleanPhone.length === 11;
};

// Função para validar formulário
export const validateForm = (formData) => {
  const errors = {};
  
  // Validação do nome
  if (!formData.nome?.trim()) {
    errors.nome = 'Nome é obrigatório';
  } else if (formData.nome.trim().length < 2) {
    errors.nome = 'Nome deve ter pelo menos 2 caracteres';
  }
  
  // Validação do telefone
  if (!formData.telefone?.trim()) {
    errors.telefone = 'Telefone é obrigatório';
  } else if (!isValidPhone(formData.telefone)) {
    const cleanPhone = cleanPhoneNumber(formData.telefone);
    if (cleanPhone.length < 10) {
      errors.telefone = 'Telefone deve ter pelo menos 10 dígitos';
    } else if (cleanPhone.length > 11) {
      errors.telefone = 'Telefone deve ter no máximo 11 dígitos';
    } else {
      errors.telefone = 'Telefone inválido (formato: (DDD) + número)';
    }
  }
  
  // Validação do email (opcional mas se preenchido deve ser válido)
  if (formData.email?.trim() && !isValidEmail(formData.email.trim())) {
    errors.email = 'E-mail inválido';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
