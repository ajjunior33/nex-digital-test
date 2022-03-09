
```bash

npm install 
# or
yarn install

```

```bash
# Install postgres in Docker Container
docker run --name DB_Postgres -e POSTGRES_PASSWORD=123456 -d postgres
```

```bash
# Create database
yarn sequelize db:create && yarn sequelize db:migrate
```