simple-app:
	PORT=49160 node app/server.js

docker-build:
	docker build -t app:v1 app/.
	docker build -t mongo:v1 mongo/.

docker-network:
	docker network create --driver bridge mongo

docker-mongo:
	docker run --net=mongo --name mongo -it -p 27017:27017 mongo:v1

docker-app:
	docker run -p 49160:80 -e PORT=80 -e MONGO_URL="mongodb://mongo:27017" --net=mongo -it --name app app:v1

docker-delete:
	docker rm app -f
	docker rm mvertes/alpine-mongo -f
