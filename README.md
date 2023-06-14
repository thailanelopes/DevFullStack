# Projeto HouseHub

API REST básica para cadastro e aluguel de casas.
Projeto em React, NodeJs, Express, MongoDb exemplo de requisições HTTP com Fecth API baseado em microsservicos.

## BackEnd

### Stack BackEnd

API
MongoDB
Mongoose
Javascript
NodeJS
Express
Cors
DotEnv
Padrões REST
Verbos HTTPS
Status Code
Endpoints amigáveis
Params, Querys e afins
ESlint
Erettier
Editorconfig
Yup
Multer
Insominia

### Instalação / Configuração

- Será necessário uma string de conexão com o MongoDB.
- Você irá precisar ter o NodeJS e o NPM instalados no seu computador. O NPM já vem com o NodeJS.
- Baixe o repositório deste projeto no seu computador.
- O valor dessa variável deve ser correspondente a string de conexão do MongoDB que você criou na etapa anterior. Ficará assim no terminal digite: export MONGO_URL=stringdeconexaocomDB
- Abra o Prompt de Comando do seu computador
- Através do Prompt navegue até a pasta que você acabou de descompactar
- Digite o comando npm install e aperte enter
- Espere terminar de instalar todas as dependências
- Digite o comando npm start e aperte enter
- Pronto! a API estará rodando na porta 3333.

### Instalar dependencias

```sh
npm install
```

### Executar Aplicação

```sh
npm start
```

Então abra [http://localhost:3333/](http://localhost:3333/) para ver a Aplicação.

## FrontEnd

<!-- Endpoints
Sessions: POST /sessions
Método para logar/cadastrar usuário. Caso o e-mail já esteja cadastrdo ele loga.

\*Body

{
"email": "example@example.com"
}

Houses: POST /houses
Método para cadastrar nova casa. A imagem da casa é enviada através do file "filename" da requisição e o id do usuário é enviado através do header "user_id".

\*Body

{

    	description: Exemplo de descrição,
    	price: 1200,
    	location: Av. Exemplo, 123,
    	status: true,

}

Houses: GET /houses OR GET /houses?propriety=value
Método para buscar todas as casas e/ou buscar por filtro. Para buscar pelo filtro basta adicionar p Query Params desejado.

exemplo

GET /houses?status=true
 -->
