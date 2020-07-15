# Deno-api-rest-test

This projects is a test for use deno like a api rest.


## Project setup
This project use Deno, please install before use this repo.

https://deno.land/#installation

Copy and paste .env-example to .env, if you want change port:
In linux (in root folder):
```
 cp .env-example .env
```
Install velociraptor cli
```
deno install -qA -n vr https://deno.land/x/velociraptor@v1.0.0-beta.12/cli.ts
```
Install Drun (similar nodemon in node.js)
```
deno install --allow-read --allow-run --unstable https://deno.land/x/drun@v1.1.0/drun.ts
```

### Run project
```
 drun
```
or
```
 vr start
```
or
```
 vr
```
see scripts in project.
### Future features

1.- Use Velociraptor (https://deno.land/x/velociraptor) [OK].     
2.- Order directories.   
3.- Integrate database.   
4.- Integrate views.   
