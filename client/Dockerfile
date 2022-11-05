FROM node:17
WORKDIR /app
COPY package.json /.



RUN  npm install
# Copying source files
COPY . ./
# Building app
RUN npm run build
EXPOSE 3000

# Running the app
CMD "npm" "run" "dev"