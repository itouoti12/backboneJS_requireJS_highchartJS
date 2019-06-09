# Json Server install (docker version)

## for linux
- docker pull

```
 docker pull williamyeh/json-server
```
- docker run

```
docker run --rm \
 -p 3000:3000 \
 -v `pwd`:/data \
 --name jsonServer \
 williamyeh/json-server \
 --watch db.json
```
- another terminal, get curl

```
curl -X GET http://localhost:3000/profile
```

- change db.json

 Place db.json in the directory(pwd) where "docker run" was executed

## for windows
- docker pull

```
 docker pull williamyeh/json-server
```
- docker run

```
docker run --rm -p 3000:3000 --name jsonServer williamyeh/json-server --watch db.json
```
- another terminal, get curl

```
curl -X GET http://localhost:3000/profile
```
- change db.json

 - another terminal, connect json-server

 ```
  > docker ps
  > docker exec -it [Container name(confirmed by "docker ps")] sh
 ```
 - edit db.json
