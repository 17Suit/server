# Usa una imagen base de Node.js
FROM node:20

# Instala EdgeDB
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.edgedb.com | sh -s -- -y

# Agrega EdgeDB al PATH
ENV PATH="/root/.edgedb/bin:${PATH}"

# Verifica la instalación de EdgeDB
RUN edgedb --version

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de tu proyecto
COPY package*.json ./
COPY . .

# Instala las dependencias
RUN npm install

# Configura EdgeDB
RUN mkdir -p /root/.config/edgedb/cloud-credentials
RUN echo '{"secret_key": "'${EDGEDB_SECRET_KEY}'"}' > /root/.config/edgedb/cloud-credentials/default.json

# Inicializa el proyecto EdgeDB
RUN edgedb project init --link --server-instance ${EDGEDB_INSTANCE} --non-interactive

# Construye tu aplicación
RUN npm run build

# Expone el puerto en el que tu aplicación se ejecuta
EXPOSE 3000

# Comando para ejecutar tu aplicación
CMD ["npm", "start"]