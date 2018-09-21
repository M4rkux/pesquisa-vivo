# Pesquisa VIVO Empresas: Serviços Digitais

### Prerequisites
Você vai precisar ter [node](https://nodejs.org) e [npm](https://www.npmjs.com/), e opcionalmente o [yarn](https://yarnpkg.com)
Depois de instalar o **node** e o **npm** você precisa rodar o seguinte comando para instalar o **yarn**
```shell
npm install yarn -g
```

## Instalando / Getting started

Para instalar todas as dependências do projeto você precisa rodar:
```shell
yarn
```
ou
```shell
npm install
```

Para ver o projeto em ação você precisa rodar:
```shell
yarn start
```
ou
```shell
npm start
```
E você pode conferir aqui: http://localhost:7700/

### Preparando ambiente de dev

Faça o clone do projeto
```shell
git clone [...]
```

ou se você usa ssh ([see how to configure ssh](https://help.github.com/articles/connecting-to-github-with-ssh/)):
```shell
git clone [...]
```

Vá para a pasta:
```shell
cd pesquisa-vivo/
```

E instale as dependências
```shell
yarn
```
ou
```shell
npm install
```

### Deploying / Publishing

Para buildar o projeto, compilar o Sass e minificar tudo, você precisa rodar o seguinte comando:
```shell
yarn build
```
ou com npm
```shell
npm build
```
E isso vai criar a pasta **/dist** com o projeto pronto para produção

### Built With
* [npm](https://www.npmjs.com/)
* [yarn](https://yarnpkg.com)
* [webpack](https://webpack.js.org/)
* [babel](https://babeljs.io/)
* [Sass](https://sass-lang.com/)


## Configuration

Se você quer/precisa mudar as configurações de build ou modo de desenvolvimento, você precisa editar esses arquivos na raiz::
 * **webpack.config.js**
 * **webpack.prod.js**

## Tests

Para rodar os testes unitários você precisa rodar o seguinte comando:
```shell
yarn test
```
ou
```shell
npm test
```

Você pode achá-los na pasta **/test**