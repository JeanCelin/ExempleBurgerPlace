# The Burger - Website

Este repositório contém o código-fonte de um site para "The Burger", uma hamburgueria fictícia. O site foi desenvolvido utilizando React.js e inclui várias páginas, como a Home, Menu, Sobre, Contato e uma página para lidar com erros 404.

## Funcionalidades

- **Página Inicial (HomePage):** Apresenta uma introdução ao restaurante, incluindo uma breve descrição e um botão para mais detalhes. Possui animações implementadas com AOS (Animate On Scroll).
- **Página de Menu (MenuPage):** Exibe os itens do cardápio com preços e descrições. A página é organizada em seções para diferentes categorias de alimentos, como hambúrgueres e sucos.
- **Página Sobre (AboutPage):** Fornece informações sobre a missão, visão e equipe do restaurante. Contém imagens representativas e texto descritivo.
- **Página de Contato (ContactPage):** Inclui um formulário para os usuários entrarem em contato com o restaurante, além de informações gerais como endereço e telefone.
- **Página 404 (NotFoundPage):** Página exibida quando o usuário tenta acessar uma rota que não existe.

## Estrutura de Diretórios

- `src/`
  - `components/`: Contém componentes reutilizáveis como Navbar, Footer, Menu, etc.
  - `img/`: Contém todas as imagens utilizadas no site.
  - `pages/`: Contém as páginas principais do site, organizadas em subdiretórios conforme a página.
    - `home/`: Página inicial.
    - `prices/`: Página de Menu.
    - `about/`: Página Sobre.
    - `contact/`: Página de Contato.
  - `styles/`: Contém estilos globais aplicados ao site.

## Dependências

- **React Router DOM:** Utilizado para gerenciar a navegação entre as páginas.
- **AOS (Animate On Scroll):** Biblioteca de animações para elementos que aparecem conforme o usuário rola a página.
- **CSS Modules:** Usado para modularizar e escopar os estilos CSS a cada componente, evitando conflitos de estilo.

## Como Executar o Projeto

### Pré-requisitos

- Node.js instalado (versão recomendada: >= 14.x)
- Gerenciador de pacotes npm ou yarn

### Passos para Rodar o Projeto Localmente

1. **Clone o Repositório:**
   ```bash
   git clone https://github.com/seu-usuario/the-burger-website.git
   cd the-burger-website

2. **Instale as Dependências:**
   ```bash
   npm install
   # ou
   yarn install

   
3. **Inicie o projeto:**
   ```bash
   npm start
   # ou
   yarn start
   O site estará disponível em [http://localhost:3000](http://localhost:3000).

## Estrutura de Código

### `App.js`
Este arquivo é o ponto de entrada principal do aplicativo. Ele configura as rotas do React Router e renderiza as diferentes páginas do site.

### Páginas

- **HomePage:** Importa componentes como Navbar, Footer, Features, e utiliza o AOS para animações. Apresenta o título e uma breve introdução sobre o restaurante.
- **MenuPage:** Exibe o cardápio com preços e descrições. Inclui componentes como TablePricesCard, Menu, Navbar e Footer.
- **AboutPage:** Fornece uma visão geral sobre o restaurante, incluindo sua missão e equipe, com imagens e texto explicativo.
- **ContactPage:** Contém um formulário de contato e inclui os componentes Navbar, Footer, e Menu.
- **NotFoundPage:** Simplesmente exibe uma mensagem de "404 Página Não Encontrada".

### Componentes

- **Navbar:** Barra de navegação exibida no topo de cada página.
- **Footer:** Rodapé exibido no final de cada página.
- **Menu:** Componente exibido em diversas páginas, mostrando opções de navegação.

## Estilos

Os estilos são organizados utilizando CSS Modules, com cada componente e página tendo seu próprio arquivo CSS associado. Isso garante um escopo de estilos isolado, evitando conflitos entre diferentes componentes.

# Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **[React.js](https://reactjs.org/):** Biblioteca JavaScript para construir interfaces de usuário.
- **[React Router DOM](https://reactrouter.com/):** Biblioteca para gerenciar rotas no React, facilitando a navegação entre páginas.
- **[AOS (Animate On Scroll)](https://michalsnik.github.io/aos/):** Biblioteca para animações de scroll, adicionando efeitos visuais conforme o usuário rola a página.
- **[CSS Modules](https://github.com/css-modules/css-modules):** Metodologia para escopar estilos CSS ao nível do componente, evitando conflitos de estilos globais.
- **HTML5:** Estruturação semântica do conteúdo das páginas.
- **CSS3:** Estilização das páginas, utilizando tanto estilos globais quanto CSS Modules para componentes específicos.

## Hospedagem e Deploy

- **[Vercel](https://vercel.com/):** Plataforma utilizada para o deploy e hospedagem do site em ambiente de produção.

## Versionamento de Código

- **[Git](https://git-scm.com/):** Sistema de controle de versão distribuído.
- **[GitHub](https://github.com/):** Plataforma para hospedagem de código-fonte e colaboração em projetos.

---

## Licença

Este projeto está licenciado sob uma licença personalizada. Você tem permissão para copiar o código para uso pessoal, mas não tem permissão para modificá-lo, redistribuí-lo ou usá-lo para fins comerciais. Para mais detalhes, consulte o arquivo LICENSE.

