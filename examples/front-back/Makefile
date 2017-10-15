MINIKUBE_DOCKER_ENV=$$(minikube docker-env)

simple-backend:
	PORT=9001 node backend/server.js

simple-frontend:
	PORT=9000 BACKEND="http://localhost:9001" node frontend/server.js

build-docker:
	docker build -t backend:v1 backend/.
	docker build -t frontend:v1 frontend/.

docker-network:
	docker network create --driver bridge front-back

docker-backend:
	docker run -p 9001:80 -it --net=front-back -e PORT=80 --name backend backend:v1

docker-frontend:  # doesn't work but kept here for clarity
	docker run -p 9000:80 -it --net=front-back -e PORT=80 -e BACKEND='http://backend' --name frontend frontend:v1

docker-end:
	docker rm frontend -f
	docker rm backend -f
	docker network rm front-back
