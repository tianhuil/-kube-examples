DOCKER_ENV=$$(minikube docker-env)

simple-backend:
	PORT=9001 node backend/server.js

simple-frontend:
	PORT=9000 BACKEND="http://localhost:9001" node frontend/server.js

build-docker:
	eval ${DOCKER_ENV} && docker build -t backend:v1 backend/.
	eval ${DOCKER_ENV} && docker build -t frontend:v1 frontend/.

docker-backend:
	eval ${DOCKER_ENV} && docker run -p 9001:80 -it -e PORT=80 --name backend backend:v1

docker-frontend:
	eval ${DOCKER_ENV} && docker run 127.0.0.1:9000:80 127.0.0.1:9001:9001 -d -t -i -e PORT=80 -e BACKEND='http://localhost:9001' --name frontend frontend:v1

