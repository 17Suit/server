# Usa una imagen base oficial de Node.js
FROM node:20-alpine

# Instala las dependencias necesarias y EdgeDB
RUN apk add --no-cache curl bash \
    && curl --proto '=https' --tlsv1.2 -sSf https://sh.edgedb.com | sh -s -- -y

# Agrega EdgeDB al PATH y carga las variables de entorno
ENV PATH="/root/.edgedb/bin:${PATH}"
ENV EDGEDB_BIN_DIR="/root/.edgedb/bin"
RUN echo 'export PATH="/root/.edgedb/bin:$PATH"' >> /root/.profile

# Verifica la instalación de EdgeDB
RUN /root/.edgedb/bin/edgedb --version

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
RUN /root/.edgedb/bin/edgedb project init --link --server-instance ${EDGEDB_INSTANCE} --non-interactive

# Construye la aplicación NestJS
RUN npm run build

# Expone el puerto que usará la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "run", "start:prod"]