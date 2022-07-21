# Server Base - Proyecto ONG


## Envinroment setup

1) Create database
2) Copy .env.example to .env and fill with database credentials.

To install dependencies, run
``` bash
npm install
```

3) Migrations:
``` bash
npx sequelize-cli db:migrate
```

4) Seeders:
``` bash
npx sequelize-cli db:seed:all
```

## Start local server

``` bash
npm start
```

## Seed de usuarios

Al ejecutarse el seed de usuarios se crean en la tabla users 10 usuarios administradores (roleId = 1) y 10 usuarios regulares (roleId = 2).
Ejemplo de usuario administrador:

``` 
    {
        firstName: 'Usuario5',
        lastName: 'Demo',
        email: 'test5@test.com',
        // Important: Password not encrypted yet! 
        password: '1234',
        roleId: 1,
        image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
        createdAt: new Date,
        updatedAt: new Date
    }

```
