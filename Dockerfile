# Usa una imagen base oficial de Node.js
FROM node:20-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

RUN npx edgedb 

RUN source "/root/.config/edgedb/env"

RUN edgedb project init -I 3FE3LE/seventeen-suit-db

RUN edgedb instance credentiasl

RUN edgedb instance status

RUN edgedb instance link

# Construye la aplicación NestJS
RUN npm run build

# Expone el puerto que usará la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "run", "start:prod"]
