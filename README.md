
# 🍽️ Buffet Pierrot — MVP do Site 

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![Framework](https://img.shields.io/badge/framework-React%20%2B%20Vite-blue)
![Estilo](https://img.shields.io/badge/style-TailwindCSS-38bdf8)
![License](https://img.shields.io/badge/license-Open%20Source-green)

> **Responsável:** Luiz Carlos Vitoriano Neto — Front-End Developer
> **Versão:** 0.1.0

---

## 📘 Visão Geral

O **Buffet Pierrot** é um site institucional desenvolvido como **MVP (Produto Mínimo Viável)**, com foco em **simplicidade, performance e experiência do usuário**.
O objetivo é apresentar os serviços do buffet, permitir contato rápido via WhatsApp e criar base para evolução futura com painel administrativo e armazenamento de dados.

---

## 🧱 Arquitetura

**Modelo:** Web-Based em 3 camadas simplificadas

```
Frontend (Vite + Tailwind)
   ↕
Integração leve (WhatsApp / API opcional)
   ↕
Armazenamento local (LocalStorage) ou API externa (Firebase)
```

O projeto é **frontend-driven**, priorizando renderização no cliente e integração direta com APIs externas apenas quando necessário.

---

## 🧩 Stack Técnica

| Camada                   | Tecnologia                                                                                 | Descrição                                    |
| ------------------------ | ------------------------------------------------------------------------------------------ | -------------------------------------------- |
| **Frontend**             | [Vite](https://vitejs.dev/) + [React](https://react.dev/)                                  | Build rápido e modularização por componentes |
| **Estilização**          | [TailwindCSS](https://tailwindcss.com/)                                                    | Design responsivo e consistente              |
| **Animações**            | [AOS](https://michalsnik.github.io/aos/) / [Framer Motion](https://www.framer.com/motion/) | Suavidade e dinamismo nas seções             |
| **Backend (opcional)**   | [FastAPI](https://fastapi.tiangolo.com/) / [Firebase](https://firebase.google.com/)        | Armazenamento futuro de formulários          |
| **Deploy**               | [Vercel](https://vercel.com/)                                                              | Hospedagem gratuita com HTTPS automático     |
| **Banco de Dados (MVP)** | LocalStorage                                                                               | Simples, sem persistência em servidor        |

---

## 📂 Estrutura de Pastas

```
src/
├── assets/
│   └── images/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── ContactForm.jsx
│   └── Footer.jsx
├── pages/
│   └── Home.jsx
├── utils/
│   └── formatMessage.js
├── main.jsx
└── index.html
```

---

## 🧭 Boas Práticas Aplicadas

✅ **Clean Code** – código legível, modular e sem repetições
✅ **KISS (Keep It Simple, Stupid)** – simplicidade acima da complexidade
✅ **YAGNI (You Aren’t Gonna Need It)** – implementar apenas o essencial
✅ **SRP (Single Responsibility Principle)** – cada componente com uma função clara
✅ **Design Responsivo** – adaptado para mobile, tablet e desktop
✅ **SEO Básico** – meta tags, favicon e otimização leve
✅ **Acessibilidade** – textos alternativos, contraste e navegação simples

---

## 💬 Fluxo do MVP

1. O usuário acessa o site responsivo
2. Visualiza as seções principais (sobre, serviços, contato)
3. Preenche o formulário de orçamento
4. É redirecionado automaticamente para o **WhatsApp** do buffet com a mensagem formatada
5. (Opcional) Dados podem ser enviados para uma API leve no futuro

---

## 🔐 Segurança

* HTTPS via Vercel (SSL gratuito)
* Nenhum dado sensível trafegado no MVP
* Adequação futura à **LGPD** se houver coleta persistente

---

## 🧪 Testes e Qualidade

* ✅ Testes manuais de responsividade
* ✅ Teste do redirecionamento WhatsApp
* ✅ Validação do formulário
* ✅ SEO básico (meta tags e títulos)
* 🚧 Futuro: testes unitários e integração (para backend)

---

## 🚀 Deploy

**Ambiente:**

* Build automático via Vercel
* Deploy contínuo (CI/CD integrado ao repositório GitHub)

**Comandos principais:**

```bash
# Instalar dependências
npm install

# Rodar localmente
npm run dev

# Gerar build de produção
npm run build
```

---

## 🔮 Evolução Pós-MVP

* Painel administrativo (FastAPI ou Firebase)
* Armazenamento e listagem de orçamentos
* Envio automático de e-mails de confirmação
* Dashboard com métricas e exportação CSV
* Integração com Google Analytics

---

## 👨‍💻 Desenvolvedor Responsável

**Luiz Carlos Vitoriano Neto**
Front-End Developer

[🌐 GitHub](https://github.com/LuisCarlos01)
[💼 LinkedIn](https://www.linkedin.com/in/luis-carlos-vitoriano-neto-56a58321b/)

---
