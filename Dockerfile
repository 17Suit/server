# Usa una imagen base oficial de Node.js
FROM node:20-alpine

# Instala EdgeDB
RUN apk add --no-cache curl bash \
    && curl --proto '=https' --tlsv1.2 -sSf https://sh.edgedb.com | sh -s -- -y \
    && source /root/.config/edgedb/env \
    && edgedb server install

# Establece el directorio de trabajo
WORKDIR /app

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Construye la aplicación NestJS
RUN npm run build

# Expone el puerto que usará la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "run", "start:prod"]
