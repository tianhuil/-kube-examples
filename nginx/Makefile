.PHONY: secrets

create:
	kubectl create -f hello-world.yaml
	kubectl create -f default-backend.yaml
	kubectl create -f nginx-controller.yaml
	kubectl create secret tls tls-certificate --key secrets/nginx-selfsigned.key --cert secrets/nginx-selfsigned.crt
	kubectl create secret generic tls-dhparam --from-file=secrets/dhparam.pem

delete:
	kubectl delete -f hello-world.yaml
	kubectl delete -f default-backend.yaml
	kubectl delete -f nginx-controller.yaml
	kubectl delete secret tls-certificate
	kubectl delete secret tls-dhparam

gen-secrets:
	openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout secrets/nginx-selfsigned.key -out secrets/nginx-selfsigned.crt
	openssl dhparam -out secrets/dhparam.pem 2048
