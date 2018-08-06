create:
	kubectl create -f ns-and-sa.yaml
	kubectl create -f default-server-secret.yaml
	kubectl create -f nginx-config.yaml
	kubectl create -f rbac.yaml
	kubectl create -f nginx-ingress.yaml
	kubectl create -f nodeport.yaml

delete:
	-kubectl delete -f nodeport.yaml
	-kubectl delete -f nginx-ingress.yaml
	-kubectl delete -f rbac.yaml
	-kubectl delete -f nginx-config.yaml
	-kubectl delete -f default-server-secret.yaml
	-kubectl delete -f ns-and-sa.yaml

view:
	minikube service nginx-ingress --namespace=nginx-ingress
