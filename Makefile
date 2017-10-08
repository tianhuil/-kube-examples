image:
	eval $$(minikube docker-env) && docker build -t hello-node:v2 .

create:
	kubectl create -f deployment.yaml --validate=false
	kubectl create -f service.yaml --validate=false

delete:
	kubectl delete -f deployment.yaml
	kubectl delete -f service.yaml

server:
	minikube service hello-node

log:
	kubectl logs -l run=hello-node
