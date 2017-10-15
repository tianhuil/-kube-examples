create:
	kubectl create -f busybox.yaml --validate=false
	kubectl create -f busybox-1.yaml --validate=false
	kubectl create -f busybox-2.yaml --validate=false

check:
	kubectl exec -ti busybox1 -- nslookup kubernetes.default
	kubectl exec -ti busybox2 -- nslookup kubernetes.default

delete:
	kubectl delete -f busybox.yaml
	kubectl delete -f busybox-1.yaml
	kubectl delete -f busybox-2.yaml
