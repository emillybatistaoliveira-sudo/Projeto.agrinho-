# 🌿 AgroLegal — Portal de Sustentabilidade e Legislação Ambiental

![Agrinho](https://img.shields.io/badge/Programa-Agrinho%202026-brightgreen)
![Desenvolvimento](https://img.shields.io/badge/Categoria-Front--End-blue)
![Tecnologias](https://img.shields.io/badge/HTML5%20%7C%20CSS3%20%7C%20JS-Nativo-orange)

> **Projeto Educacional Desenvolvido para o Concurso Agrinho 2026**
> Um ecossistema web interativo, responsivo e bilíngue focado na conscientização ecológica, combate a infrações ambientais e promoção de práticas agrícolas sustentáveis no estado do Paraná.

---

## 📌 Índice
1. [Sobre o Projeto](#-sobre-o-projeto)
2. [Eixos Temáticos Abordados](#-eixos-temáticos-abordados)
3. [Funcionalidades do Portal](#-funcionalidades-do-portal)
4. [Estrutura de Arquivos](#-estrutura-de-arquivos)
5. [Como Executar o Projeto](#%EF%B8%8F-como-executar-o-projeto)
6. [Destaques da Arquitetura (JavaScript)](#-destaques-da-arquitetura-javascript)
7. [Metodologia e Compromisso Agrinho](#-metodologia-e-compromisso-agrinho)

---

## 🚀 Sobre o Projeto

O **AgroLegal** é um portal pedagógico digital planejado para aproximar estudantes, produtores rurais e a comunidade das diretrizes de conservação ambiental. O objetivo principal é transformar conceitos complexos da legislação e boas práticas ambientais em uma interface atraente, dinâmica e gamificada, estimulando o exercício da cidadania e a proteção dos ecossistemas locais.

---

## 🌱 Eixos Temáticos Abordados

O conteúdo do portal está distribuído em quatro pilares essenciais para o desenvolvimento do campo:
* **🚜 Combate ao Desmatamento:** Preservação de Áreas de Preservação Permanente (APP) e adequação à Reserva Legal conforme o Código Florestal.
* **🔥 Prevenção de Queimadas:** Conscientização sobre os riscos do fogo sem controle e alternativas sustentáveis de manejo.
* **☠️ Uso Seguro de Agrotóxicos:** Orientações sobre o uso correto de Equipamentos de Proteção Individual (EPIs) e a obrigatoriedade da Tríplice Lavagem de embalagens.
* **💧 Preservação de Rios e Microbacias:** Importância das Matas Ciliares e do monitoramento das bacias hidrográficas rurais no Paraná.

---

## 🌟 Funcionalidades do Portal

* **🧠 Quiz AgroLegal Completo (10 Questões):** Um jogo interativo de perguntas e respostas baseado em todo o conteúdo do portal para testar o nível de conhecimento dos usuários.
* **📜 Emissão de Certificado Digital:** Sistema inteligente que valida o desempenho no quiz. Ao atingir a pontuação máxima e preencher o nome, o aluno desbloqueia e gera na tela o título honorífico de **Guardião Ambiental**, pronto para impressão (`window.print()`).
* **🇺🇸/🇧🇷 Sistema Multilíngue (Internacionalização):** Mecanismo nativo em JavaScript que altera instantaneamente o idioma de todo o site (Português/Inglês) por meio de atributos dinâmicos `data-pt` e `data-en`, sem necessidade de recarregar a página.
* **🌙 Modo Escuro (Dark Mode):** Alternador de tema visual integrado para garantir acessibilidade e conforto visual durante a leitura.
* **🚨 Canal Direto de Denúncias:** Página estruturada com contatos e links dos órgãos oficiais do Paraná (como o Disque-Denúncia 181 da Polícia Ambiental e o Instituto Água e Terra - IAT).

---

## 📂 Estrutura de Arquivos

```text
├── index.html               # Homepage (Apresentação interativa dos temas ecológicos)
├── parana.html              # Painel Paraná Sustentável (Plantio Direto e destaques regionais)
├── quiz.html                # Página do Jogo (10 perguntas + módulo de certificação)
├── denuncia.html            # Hub de orientações e telefones úteis para fiscalização
└── assets/
    ├── css/
    │   └── style.css        # Identidade visual, variáveis de cores e regras de Dark Mode
    └── js/
        └── script.js        # Motor do Quiz, Internacionalização e controle do Tema
