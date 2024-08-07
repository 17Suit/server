# Usa una imagen base oficial de Node.js
FROM node:20.15

# Define argumentos que se pueden pasar durante la construcción
ARG EDGEDB_INSTANCE
ARG EDGEDB_SECRET_KEY

# Establece el directorio de trabajo
WORKDIR /app

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Configura EdgeDB
RUN mkdir -p /root/.config/edgedb/cloud-credentials
RUN echo '{"secret_key": "'${EDGEDB_SECRET_KEY}'"}' > /root/.config/edgedb/cloud-credentials/default.json

# Inicializa el proyecto EdgeDB
RUN npx @edgedb/generate edgeql-js -I ${EDGEDB_INSTANCE}

# Construye la aplicación NestJS
RUN npm run build

# Expone el puerto que usará la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "run", "start:prod"]