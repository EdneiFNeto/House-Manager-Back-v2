## Instalar dependencias
- yanr install

## Config  Sequelize
Criar arquivo .sequelize na raiz do projeto

```javascript
  const { resolve } = require('path');

  module.exports = {
    config: resolve(__dirname, 'src', 'config', 'database.js'),
    'models-path': resolve(__dirname, 'src', 'models'),
    'migrations-path': resolve(__dirname, 'src', 'database', 'migrations'),
    'seeders-path': resolve(__dirname, 'src', 'database', 'seeds'),
};
```
## Config  database JS

```javascript
require('dotenv').config();

module.exports = {
  dialect: 'mysql',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  dialectOptions: {},
};
```

## Config .env

DATABASE=escola
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USERNAME=root
DATABASE_PASSWORD=''

TOKEN_SECRET='swededewdwedewd'
TOKEN_EXPIRED=1d



## Create migratrinos
- npx sequelize migration:create --name=alunos

## Execute Migrations
- npx sequelize db:migrate

## Create seeders
- npx sequelize seed:generate --name create_users

## Execute seeders
- npx sequelize db:seed:all

## Run back
- start db docker
- yarn run dev

## MVC
- index   -> List models
- store   -> Create model
- delete  -> Delete model
- show    -> List one model
- update  -> Update model

## JWT

yarn jwt:generate


