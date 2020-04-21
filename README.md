# cyse7220-toyswap-frontend

## Team Information

| Name | NEU ID | Email Address |
| --- | --- | --- |
| Pratik Patil | 001499015 | patil.prat@husky.neu.edu|
| Lakshit Talreja|001475200 |talreja.l@husky.neu.edu |

## To run locally for development
First, install npm
sh
npm install.

and then, start npm
sh
npm run start

## To build docker container
Run the following docker command
html
sudo docker build -t <docker-username>/csye7220-toyswap-frontend:latest


## To run from docker container
Run the following docker command
html
docker run -p 1000:80 -e API_URL=<url-domain> -e API_PORT=<exposed-api-port> -d <docker-username>/csye7220-toyswap-frontend:latest
