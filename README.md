# StageCheck

## About the project

This is a schoolproject that makes it easy for companies to offer internships and for students to find these internships.
The goal of the project was to learn how to make an API with a seperate front end.

## How to run it Locally

1. Clone this Git repository

2. Create a aspnet cert in the cert folder

```bash
cd src
cd certs
dotnet dev-certs https -ep aspnetapp.pfx -p password
```
3. Run the docker-compose file
```bash
cd ..
docker-compose build
docker-compose -f docker-compose.yml up -d
```

4. When the docker-compose is up

>Website URL: http://localhost:3000
>API URL: https://localhost:23459
>Second front end URL: https://localhost:23457
