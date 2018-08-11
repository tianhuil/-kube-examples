build:
	eval $$(minikube docker-env) \
		&& docker build -t echo:v1 ./echo/.

create:
	kubectl create -f echo/echo.yaml
	kubectl create -f ingress/ingress.yaml

delete:
	kubectl delete -f ingress/ingress.yaml
	kubectl delete -f echo/echo.yaml
