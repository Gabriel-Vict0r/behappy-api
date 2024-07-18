<h1>BeHappy API</h1>
<p>BeHappy API é uma aplicação construída com Node.js que permite criar e gerenciar orfanatos. Esta API é projetada para ser utilizada como backend de um sistema que precisa armazenar e recuperar dados de instituições de acolhimento.</p>

<h3>Tecnologias usadas</h3>
<ul>
<li>Node.Js</li>
<li>Express.js</li>
<li>Typescript</li>
<li>PostgreSQL</li>
<li>Prisma</li>
<li>AWS S3</li>
<li>JsonWebToken</li>
</ul>
<br>
<h3>Índice</h3>
<ul>
<li><a href="#instalacao">Instalação</a></li>
<li><a href="#configuracao">Configuração</a></li>
<li><a href="#rotas">Rotas</a></li>
</ul>

<h4 id="instalacao">Instalação</h4>
<p>Para instalar a API, siga os passos abaixo:
</p>
<ol><li>
Clone o repositório: 
</li>
<pre>
  <code>
   git clone https://github.com/Gabriel-Vict0r/behappy-api.git
  </code>
</pre>
<li>Acesse a pasta do projeto e execute o seguinte comando: <br>
<pre>
  <code>cd src</code>
  <code>npm run build</code>
  <code>npm run dev</code>
</pre>
</li>
</ol>
<h4 id="configuracao">Configuração</h4>
<p>Para configurar a API, você precisará ajustar alguns parâmetros no arquivo .env, localizado na raíz do projeto. (caso não tiver, crie um nomeado como `.env`.</p>
<pre>
<code>
DATABASE_URL= Url da base de dados
PORT= porta que será usada
JWT_PASS= chave criptografada para gerar os tokens
</code>
</pre>
<h4 id="rotas">Rotas</h4>
<p>Abaixo estão listadas algumas das rotas principais da API:</p>
<h6>Administrador</h6>
<ul>

<li><b>POST - /v1/create-admin</b>: cria um novo administrador.
<ul>
<li>
Corpo da requisição:
<pre>
<code>
{
  "name": "string",
  "password": "string",
  "email": "string"
}
</code>
</pre>
</li>
</ul>
</li>

<li><b>POST - /v1/login-admin: </b> Obtém acesso a área restrita.
<ul>
<li>Corpo da requisição:
<pre>
<code>
{
  "email": "string",
  "password": "string",
}
</code>
</pre></li>
<li>Resposta da requisição:
<pre>
<code>
{
  "name": "string",
  "email": "string"
  "password": "string",
  "token": "string"
}
</code>
</pre></li>
</ul>
</li>
</ul>
<h6>Orfanatos</h6>
<ul>

<li><b>POST - /v1/create-orphanage</b>: cria um novo orfanato.
<ul>
<li>
Crie dois FormData, um contendo um objeto com as informações textuais e o outro contendo as imagens.
<pre>
<code>
{
	"name": "string",
	"about": "string",
	"instructions": "string",
	"acept_weekend": boolean,
	"phone": "string",
	"hours": {
			"final_hour": "string",
			"initial_hour": "string"
		},
	"location": {
		"latitude": number,
		"longitude": number
	}
}
</code>
</pre>
</li>
</ul>
</li>

<li><b>GET - /v1/get-orphanages: </b> Obtém uma lista dos orfanatos cadastrados.
<ul>
<li>Resposta da requisição:
<pre>
<code>
[
	{
		"id": number,
		"name": "string",
		"about": "string",
		"instructions": "string",
		"acept_weekend": boolean,
		"acepted": boolean,
		"id_location": number,
		"phone": "string",
		"deletedAt": "DateTime" | null,
		"location": {
			"id": number,
			"latitude": number,
			"longitude": number
		}
	}
]
</code>
</pre></li>
</ul>
</li>


<li><b>GET - /v1/get-orphanage/:id : </b> Obtém um cadastro específico da bases.
<ul>
<li>Resposta da requisição:
<pre>
<code>
{
	"id": number,
	"name": "string",
	"about": "string",
	"instructions": "string",
	"acept_weekend": boolean,
	"acepted": boolean,
	"id_location": number,
	"phone": "string",
	"deletedAt": "DateTime" | null,
	"hours": [
		{
			"id": number,
			"id_orphanage": number,
			"final_hour": "string",
			"initial_hour": "string"
		}
	],
	"location": {
		"id": number,
		"latitude": "string",
		"longitude": "string"
	},
	"pictures": [
		{
			"id": number,
			"url": "string",
			"id_orphanage": number
		}
	]
}
</code>
</pre></li>
</ul>
</li>
</ul>

<li><b>GET - /v1/get-pending : </b> Obtém os registros que estão pendentes (não foram aceitos/recusados).
<ul>
<li>Resposta da requisição:
<pre>
<code>
[
	{
		"id": number,
		"name": "string",
		"about": "string",
		"instructions": "string",
		"acept_weekend": boolean,
		"acepted": boolean,
		"id_location": number,
		"phone": "string",
		"deletedAt": "DateTime" | null,
		"location": {
			"id": number,
			"latitude": number,
			"longitude": number
		}
	}
]
</code>
</pre></li>
</ul>
</li>
</ul>


<li><b>PUT - /v1/update-orphanage/:id : </b> Obtém os registros que estão pendentes (não foram aceitos/recusados).
<ul>
<li>Corpo da requisição:
<pre>
<code>
{
	"name": "string",
	"about": "string",
	"instructions": "string",
	"acept_weekend": boolean,
	"phone": "string",
	"hours": {
			"final_hour": "string",
			"initial_hour": "string"
		},
	"location": {
		"latitude": number,
		"longitude": number
	}
}
</code>
</pre></li>
</ul>
</li>
</ul>


<li><b>PATCH - /v1/disable-orphanage/:id : </b> Desabilita o registro que foi passado como parâmetro na URL. (atualiza a coluna deletedAt com a data atual).
</li>
<li><b>PATCH - /v1/reject-orphanage/:id : </b> Desabilita o registro que foi passado como parâmetro na URL. (atualiza a coluna acepted para false).
</li>
</ul>

<h3>Licença</h3>
<p>Este projeto está licenciado sob a Licença MIT. Veja o arquivo <a href="LICENSE">LICENSE</a> para mais detalhes.
</p>