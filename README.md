# TiBox Medicron

Sistema web para gestion de inventario, prestamos, mantenimientos, alertas, usuarios, sedes, ubicaciones y comunicacion interna de equipos TI.

El repositorio contiene dos aplicaciones:

- `TiBox-backend`: API construida con AdonisJS, Lucid, PostgreSQL y Socket.IO.
- `TiBox-Frontend`: aplicacion web construida con React, Vite y TypeScript.

## Requisitos

- Node.js
- npm
- PostgreSQL

## Instalacion

Instalar dependencias del backend:

```bash
cd TiBox-backend
npm install
```

Instalar dependencias del frontend:

```bash
cd TiBox-Frontend
npm install
```

## Variables de entorno

Crear los archivos de entorno a partir de los ejemplos incluidos.

Backend:

```bash
cd TiBox-backend
cp .env.example .env
```

Configurar principalmente:

- `APP_KEY`
- `PORT`
- `HOST`
- `APP_URL`
- `PG_HOST`
- `PG_PORT`
- `PG_USER`
- `PG_PASSWORD`
- `PG_DB_NAME`
- `CORS_ORIGIN`
- `UPLOADS_PATH`

Frontend:

```bash
cd TiBox-Frontend
cp .env.example .env
```

Configurar:

- `VITE_API_URL`

Para desarrollo local, normalmente el backend corre en `http://localhost:3333` y el frontend en `http://localhost:5173`.

## Base de datos

Crear una base de datos PostgreSQL con el nombre configurado en `PG_DB_NAME`.

Ejecutar migraciones desde el backend:

```bash
cd TiBox-backend
node ace migration:run
```

Si se requieren datos iniciales:

```bash
node ace db:seed
```

Nota: los seeders incluyen usuarios y datos de demostracion. Antes de usarlos en produccion, revisar especialmente los seeders de usuarios y datos demo.

## Ejecucion en desarrollo

Backend:

```bash
cd TiBox-backend
npm run dev
```

Frontend:

```bash
cd TiBox-Frontend
npm run dev
```

## Scripts utiles

Backend:

```bash
npm run build
npm run typecheck
npm run test
npm run lint
```

Frontend:

```bash
npm run build
npm run test
npm run lint
```

## Estructura general

```text
TiBox-backend/
  app/
  config/
  database/
  start/
  storage/
  tests/

TiBox-Frontend/
  public/
  src/
```

## Archivos no incluidos en Git

Por seguridad y mantenimiento, no se deben subir:

- `.env`
- `node_modules/`
- `build/`
- `dist/`
- logs
- archivos cargados por usuarios en `storage/uploads/`

Los archivos `.env.example` si deben mantenerse en el repositorio para documentar la configuracion requerida.
