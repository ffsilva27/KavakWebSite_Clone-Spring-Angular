# :man_technologist: Clone Parcial Site Kavak - FullStack :man_student:

O projeto consistiu em desenvolver o clone parcial do site de compra e venda de veículos Kavak.
O front-end foi desenvolvido em Angular e o back-end foi desenvolvido com Spring, ambos estão neste mesmo repositório.


Obs.: Para o correto funcionamento, o projeto deverá ser clonado na raiz da pasta C:, tendo em vista que a solução para salvar as imagens dos anúncios
foi em pasta local e não utilizando um servidor na núvem. Dito isto, na pasta C: crie uma pasta de nome qualquer e copie as pastas front e back que estão
neste repositório.

___________________________________________________________________________________________________________________________________________________________________

### :scroll: Atividade

Construção de uma API e um FRONT que possibilite:
 - Listagem paginada de todos os anuncios;
 - Criação de tela e funcionalidade do login com armazenamento do token JWT;
 - Criação de tela e funcionalidade do cadastro de usuário;
 - Criação de tela e funcionalidade do cadastro dos anuncios;
 - Acesso a tela de cadastro dos anuncios apenas com usuário válido logado e com token JWT sendo enviado para validação da API no header da requisição;
 - Criação de modal para exibição de maiores informações sobre o veículo anunciado;
 - Criação de barra de pesquisa por fabricantes cadastrados.

<br>

___________________________________________________________________________________________________________________________________________________________________

### :chains: Tecnologias
- Java
- Spring (Data JPA | Security | MVC)
- Banco de dados H2
- Lombok
- Maven
- Angular
- BootStrap 5

___________________________________________________________________________________________________________________________________________________________________

### :man_technologist: Implementações


#### :chart: Criação de anuncios
A rota de cadastro de anuncio é protegida, sendo assim para acessa-la o usuário deve possuir cadastro e efetuar o login para que possa usar o token JWT 
no header da requisição com topico "Authorization" e valor "Bearer {token_jwt}" .

<br>


##### Método HTTP para criação do anuncio/JSON
 - (POST) `localhost:8080/anuncio/salvar`
```json
{
  "fabricante": "Ford",
  "modelo": "Escalade",
  "anomodelo": "2022",
  "valor": 350000,
  "km": 0.0,
  "foto": "../../assets/img/nome.jpg"
}
```

Obs.: A aplicação esta desenhada para a API salvar as imagens direto na pasta img do front e salvar o caminho conforme acima.

##### Retorno da aplicação
`Status Code - 201 - Created`

<br>

#### :chart: Listar anuncios

##### Método HTTP para obter a listagem total dos anuncios (paginada)
 - (GET) `localhost:8080/anuncio`

##### Método HTTP para obter um anuncio específico
 - (GET) `localhost:8081/produto?fabricante={nomeDoFabricante}`

Obs.: Para obtenção das informações de um anuncio específico deve-se informar o nome do fabricante na query, conforme acima (sem as chaves). Pode-se utilizar
o fabricante, o modelo do veículo, ano do modelo, valor etc.

##### Retorno da aplicação/JSON
```json
{
	"content": [
		{
			"id": 4,
			"fabricante": "Ford",
			"modelo": "Bronco",
			"anomodelo": "2022",
			"valor": 215000.0,
			"km": "0",
			"foto": "../../assets/img/bronco.jpg"
		},
		{
			"id": 5,
			"fabricante": "Peugeot",
			"modelo": "3008",
			"anomodelo": "2022",
			"valor": 205000.0,
			"km": "0",
			"foto": "../../assets/img/3008.jpg"
		},
		{
			"id": 1,
			"fabricante": "Honda",
			"modelo": "Civic",
			"anomodelo": "2022",
			"valor": 115000.0,
			"km": "0",
			"foto": "../../assets/img/Civic.jpg"
		},
		{
			"id": 6,
			"fabricante": "Honda",
			"modelo": "City",
			"anomodelo": "2021",
			"valor": 95000.0,
			"km": "10000",
			"foto": "../../assets/img/city.jpg"
		}
	],
	"pageable": {
		"sort": {
			"empty": false,
			"sorted": true,
			"unsorted": false
		},
		"offset": 0,
		"pageNumber": 0,
		"pageSize": 4,
		"unpaged": false,
		"paged": true
	},
	"last": false,
	"totalPages": 2,
	"totalElements": 7,
	"size": 4,
	"number": 0,
	"sort": {
		"empty": false,
		"sorted": true,
		"unsorted": false
	},
	"numberOfElements": 4,
	"first": true,
	"empty": false
}
```
<br>

#### :chart: Criação de usuário
Para o cadastro de um anuncio, o usuário deve possuir cadastro na aplicação e deve estar logado.

<br>


##### Método HTTP para criação de um usuário/JSON
 - (POST) `localhost:8080/usuario`
```json
{
  "nome":"teste",
  "email": "teste@teste.com",
  "senha":"1234"
}
```

##### Retorno da aplicação
`Status Code - 201 - Created`

```json
{
  "email": "teste@teste.com",
  "msg": "Usuário cadastrado"
}
```

<br>

#### :chart: Login


##### Método HTTP para login/JSON
 - (POST) `localhost:8080/usuario/auth`
```json
{
  "email": "teste@teste.com",
  "senha":"1234"
}
```

##### Retorno da aplicação
`Status Code - 200 - OK`

```json
{
  "email": "teste@teste.com",
  "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0ZUB0ZXN0ZS5jb20iLCJleHAiOjE2NTU3MjY4Nzl9.SrAU6APPXJzA9AilZntugqTsb0ihSgfi8-p4U_-Y7659Jjrgocb-Vw6KFtqYZ8O_TFSf9wtkfmJ4ma-GCVWIDw"
}
```

Obs.: O front foi desenhado para salvar o token no localhost e a cada acesso a rota autenticada envia-lo no header para a API.

<br>

__________________________________________________________________________________________________________

### Angular CLI
O front deste projeto foi desenvolvido em Angular, portanto para execução realize os seguintes passos:

1. Utilizando o prompt de comando, navegue até a pasta do projeto;
* `cd caminho-da-pasta`
2. Ainda no prompt de comando e já dentro da pasta do projeto, você precisará instalar todas as dependências do package.json, sendo assim execute o seguinte comando:
* `npm install`
3. Após finalização da instalação, ainda no prompt de comando, execute:
* `ng serve`
4. O projeto será executado em `http://localhost:4200/`

________________________________________________________________________________________________________________

### Spring
O back desse projeto foi desenvolvido em Spring, portanto para execução realize os seguintes passos:

1. Abrir a pasta 'Back' no IntelliJ ou IDE de sua preferência;
3. Execute a API;
4. A API será executada em `http://localhost:8080`
