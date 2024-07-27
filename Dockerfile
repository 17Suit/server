# Usa una imagen base oficial de Node.js
FROM node:20-alpine

# Instala las dependencias necesarias
RUN apk add --no-cache curl bash \
    && curl --proto '=https' --tlsv1.2 -sSf https://sh.edgedb.com | sh -s -- -y \
    && edgedb server install

# Establece el directorio de trabajo
WORKDIR /app

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Inicializa EdgeDB
RUN source /root/.config/edgedb/env && edgedb project init --non-interactive

# Genera los archivos de EdgeDB
ARG EDGEDB_SECRET_KEY
RUN source /root/.config/edgedb/env \
    && mkdir -p /root/.config/edgedb/cloud-credentials \
    && echo "{\"secret_key\": \"${EDGEDB_SECRET_KEY}\"}" > /root/.config/edgedb/cloud-credentials/default.json \
    && npx @edgedb/generate edgeql-js -I 3FE3LE/seventeen-suit-db --target ts

# Construye la aplicación NestJS
RUN npm run build

# Expone el puerto que usará la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "run", "start:prod"]
