image:
	eval $$(minikube docker-env) && docker build -t hello-node:v1 .

create:
	kubectl create -f deployment.yaml --validate=false
	kubectl create -f service.yaml --validate=false

delete:
	kubectl delete -f deployment.yaml
	kubectl delete -f service.yaml

server:
	minikube service hello-node-service

log:
	kubectl logs -l run=hello-node

run-docker:
	docker run hello-node:v1
