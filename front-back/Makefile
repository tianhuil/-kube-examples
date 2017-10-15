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

build:
	eval $$(minikube docker-env) && docker build -t backend:v1 backend/.
	eval $$(minikube docker-env) && docker build -t frontend:v1 frontend/.

create:
	kubectl create -f backend-deployment.yaml --validate=false
	kubectl create -f backend-service.yaml --validate=false
	kubectl create -f frontend-deployment.yaml --validate=false
	kubectl create -f frontend-service.yaml --validate=false

server-backend:
	minikube service backend-service

server-frontend:
	minikube service frontend-service

delete:
	kubectl delete -f backend-deployment.yaml
	kubectl delete -f backend-service.yaml
	kubectl delete -f frontend-deployment.yaml
	kubectl delete -f frontend-service.yaml
