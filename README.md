# 🔎 GITFIND - GitHub Finder -

![Badge Status](https://img.shields.io/badge/status-finalizado-green)
![Badge React](https://img.shields.io/badge/react-18-blue)
![Badge API](https://img.shields.io/badge/API-GitHub-lightgrey)

Aplicação em **React** que consome a API pública do **GitHub** para buscar informações de um usuário e listar seus repositórios mais recentes.  

---

## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- ⚛️ [React](https://react.dev/)  
- 🎨 CSS (estilização personalizada)  
- 🌐 [GitHub REST API](https://docs.github.com/pt/rest)  

---

## 📦 Instalação e uso

```bash
# Clone este repositório
git clone https://github.com/alexsilvaribeiro/github-finder.git

# Acesse a pasta do projeto
cd github-finder

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm start
```

A aplicação estará disponível em: **http://localhost:3000**

---

## 📸 Funcionalidades

- 🔍 Buscar usuários do GitHub pelo username  
- 👤 Exibir informações do perfil:
  - Avatar
  - Nome e login
  - Bio
  - Número de repositórios públicos
- 📂 Listar até 10 repositórios públicos mais recentes
- ⚠️ Tratamento de erros (usuário inexistente, campo vazio, falha na API)
- ⌨️ Buscar ao pressionar **Enter**

---

## 📂 Estrutura de Pastas

```
📦 github-finder
 ┣ 📂 src
 ┃ ┣ 📂 assets         # Imagens (ex: background.png)
 ┃ ┣ 📂 components     # Componentes reutilizáveis (Header, ItemList)
 ┃ ┣ 📂 pages
 ┃ ┃ ┗ 📂 home         # Página principal (Home.jsx + styles.css)
 ┃ ┗ 📜 index.js       # Entrada da aplicação
 ┣ 📜 package.json
 ┗ 📜 README.md
```

---

## 📸 Exemplo de Uso

### Busca por usuário
![Screenshot busca](./assets/example-search.png)

### Resultado encontrado
![Screenshot perfil](./assets/example-profile.png)

---

## 🤝 Contribuindo

Contribuições são sempre bem-vindas!  
Para contribuir:  
1. Faça um fork do projeto  
2. Crie uma branch com sua feature (`git checkout -b minha-feature`)  
3. Commit suas alterações (`git commit -m 'feat: minha nova feature'`)  
4. Faça push para a branch (`git push origin minha-feature`)  
5. Abra um Pull Request  

---

## 📝 Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.  

---

## 👨‍💻 Autor

Feito com ❤️ por **[Alex Ribeiro](https://github.com/alexsilvaribeiro)** 🚀

