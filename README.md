# Sudoku API [![CircleCI](https://circleci.com/gh/MrSzymonello/sudoku-api.svg?style=shield)](https://circleci.com/gh/MrSzymonello/sudoku-api)

The Sudoku API provides an HTTP Get method that returns a sudoku board. The method is accessible at /sudoku/board. The method returns 81 numbers between 1 and 9 formatted as a JSON array. By providing optional index and value query parameters, number at a specified position is fixed. Both query parameters have to provided otherwise, unconstrained sudoku board is returned. The project is built with Node.js and Express.

### Dependencies
Before running tests and starting the server install dependencies by executing
```
npm install
```

### Tests
Run tests by executing
```
npm run test
```
Tests are executed by Circle CI after each commit to the master branch, unless [ci skip] is present in a commit message. Review Circle CI builds [here](https://circleci.com/gh/MrSzymonello/sudoku-api "Circle CI - sudoku-api").

### Run
Run the project by executing
```
npm start
```
By default, the server starts at port 8080. The sudoku board is then available at
```
http://localhost:8080/sudoku/board
```

### Docker
When build by the Circle CI is successful then docker image with the application is built and pushed to the [docker hub](https://hub.docker.com/r/mrszymonello/sudoku-api "Docker Hub - sudoku-api"). To run the docker image first pull it
```
docker pull mrszymonello/sudoku-api
```
then run it
```
docker run -p 8080:8080 -d mrszymonello/sudoku-api
```
The sudoku board is then available at
```
http://localhost:8080/sudoku/board
```
When the Sudoku API is used together with the web application it may be convenient to use docker-compose to run both docker images. Copy [docker-compose.yaml](https://github.com/MrSzymonello/sudoku-web/blob/master/docker-compose.yaml "docker-compose.yaml") from the [sudoku-web repository](https://github.com/MrSzymonello/sudoku-web/ "sudoku-web") and execute
```
docker-compose up -d
```
then the Sudoku API is available at port 8080 and the web application is available at http://localhost:4200.

### Nginx
To expose the API and the web application via port 80 use Nginx as a reverse proxy. Place the following configuration in /etc/nginx/sites-available
```
server {
	listen 80 default_server;
	listen [::]:80 default_server;

	root /var/www/html;

	index index.html index.htm index.nginx-debian.html;

	server_name _;

	location / {
		proxy_pass http://localhost:4200;
	}

	location /sudoku/ {
		proxy_pass http://localhost:8080;
	}
}
```
