<p align="center">
  <a href="http://17suit.com/" target="blank"><img src="https://happy-wizard-8e8.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6d2d1032-2d0f-4236-af89-55db08f4be63%2Ficon-17suit3x.png?table=block&id=0ee88ee3-b023-45c4-9ef4-f6f2114a2697&spaceId=932f33f6-b4d4-4dd6-97b1-9c1feaa62f67&width=2000&userId=&cache=v2" width="200" alt="17s-logo" /></a>
</p>

# Seventeen Suit server

Descripción corta o resumen del proyecto.

## Tabla de Contenidos
- [Seventeen Suit server](#seventeen-suit-server)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Instalación](#instalación)
  - [Uso](#uso)
  - [Estructura del Proyecto](#estructura-del-proyecto)
  - [Documentación](#documentación)
  - [Contribución](#contribución)
  - [Licencia](#licencia)

## Instalación

1. Clona el repositorio:

```bash
git clone git@github.com:17Suit/server.git
```

2. Instala las dependencias:

```bash
npm install
```

## Uso

- build command
```bash
npm run build
```

- build command
```bash
npm run start:dev
```

## Estructura del Proyecto

```
└── 📁src
    └── app.controller.spec.ts
    └── app.controller.ts
    └── app.module.ts
    └── app.service.ts
    └── 📁auth
        └── auth.controller.ts
        └── auth.interface.ts
        └── auth.middleware.ts
        └── auth.module.ts
        └── auth.service.ts
        └── 📁guard
            └── 📁auth
                └── auth.guard.ts
    └── 📁database
        └── supabase.module.ts
    └── main.ts
    └── 📁middleware
        └── 📁logger
            └── logger.middleware.ts
    └── 📁opt
        └── 📁group
            └── 📁dto
                └── create-group.dto.ts
                └── update-group.dto.ts
            └── 📁entities
                └── group.entity.ts
            └── group.controller.ts
            └── group.module.ts
            └── group.service.ts
        └── opt.controller.ts
        └── opt.module.ts
        └── opt.service.ts
        └── 📁plan
            └── 📁dto
                └── create-plan.dto.ts
                └── update-plan.dto.ts
            └── 📁entities
                └── plan.entity.ts
            └── plan.controller.ts
            └── plan.module.ts
            └── plan.service.ts
    └── 📁suite
        └── suite.controller.ts
        └── suite.module.ts
        └── suite.service.ts
        └── 📁user
            └── 📁dto
                └── create-user.dto.ts
                └── update-user.dto.ts
            └── 📁pipes
                └── 📁validate-user
                    └── validate-user.pipe.ts
            └── user.controller.ts
            └── user.module.ts
            └── user.service.ts

## Documentación

- [Enlace a la documentación de la API](#) - Proporciona enlaces a la documentación de la API si está disponible.

## Contribución

Si deseas contribuir al proyecto, sigue estos pasos:

1. Realiza un fork del repositorio.
2. Crea una rama para tu función: `git checkout -b feature/NombreDeLaFuncion`.
3. Realiza tus cambios y haz commits: `git commit -am 'Añade una nueva función'`.
4. Sube tus cambios a tu repositorio fork: `git push origin feature/NombreDeLaFuncion`.
5. Envía un pull request a la rama `master` del repositorio original.

## Licencia

Indica la licencia bajo la cual se distribuye tu proyecto.
