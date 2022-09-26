<h1>DSMeta</h1>

Projeto desenvolvido na semana Spring React do [DevSuperior ](https://devsuperior.com.br/), onde consiste na consulta no banco de dados retornando um relatório de vendas dos vendedores, que pode ser filtrada por datas é com opção de envio de SMS para notificar o vendedor. 

- Projeto hospedado no netlify, link. https://dsmeta-joosecj.netlify.app/

<h2>Veja o projeto</h2>

Experimente live demo

![](https://i.imgur.com/NAHjh73.gif)

[]()

<h2>Como criar e executar o DSMeta localmente</h2>

Criar e executar o projeto em seu ambiente de desenvolvimento local é muito fácil. Certifique-se de ter o Git, Node.js e JDK17 instalados e siga as instruções abaixo. Precisa de informações adicionais? entre em contato no e-mail josecarloscjj@gmail.com 
(Estas instruções pressupõem que você esteja instalando como um usuário não root.)

1. Clone o código fonte

   `git@github.com:joosecj/DSMeta.git`

2. Dentro da pasta **frontend**, abra um terminal e instale as dependências do package.json 

   `yarn install`

3. Execute um servidor de desenvolvimento local

   `yarn dev`

   O projeto está em execução e pode ser acessado apontando um navegador da Web em http://localhost:3000/

4. Em sua IDE de preferência, importe a pasta **backend** e faça o update das dependências do maven

5. Criar uma conta no site https://www.twilio.com/pt-br/ para obter as variaveis de ambiente e inserir em seu projeto para o envio do SMS

6. Ao executar o projeto, pode ser acessado apontando um navegador da Web em http://localhost:8080/

7. Collections do postman para fazer as requisições GET para envio do SMS e consulta dos vendedores e filtragem por data

   https://www.getpostman.com/collections/1d1ecdfa287021e3183b

   