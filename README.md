# Basic sample voting network
This network is specified for an autonomous administration of a fictional housing estate where everybody who lives in there can participate

## How to setup
### Prerequisite
* docker, node.js or Ubuntu
* Visual Studio Code 
  * With Hyperledger Composer extension
  * With your favourite JavaScript extension
* git bash when not using Ubuntu


### Setting it up with docker
* Go into the folder docker for the DOCKERFILE image and install the docker image: ```docker image build```
* Then create and run a container of this image:
  * ```docker run --name composer-playground --publish 8080:8080 --detach hyperledger/composer-playground```
  * once created start the container with: ```docker run composer-playground```
* You're ready to go: call url localhost:8080 in your browser

#### Docker cheat sheet
* docker image list -> list all your images
* docker ps -a -> list all your containers
* docker ps -> list all running containers
* docker start your_container_name
* docker container kill -> stops running containers, you can specify a name
* docker remove your_container_name

### Setting it up over node.js
* Setting up the composer-cli, composer-rest-server, generator-hyperledger-composer and Yo
  * ```npm install -g composer-cli```
  * ```npm install -g composer-rest-server```
  * ```npm install -g generator-hyperledger-composer```
  * ```npm install -g yo```
* Installing graphical user interface playground
  * ```npm install -g composer-playground```
* Download and install hyperledger fabric hyperledger-fabric-runtime under Ubuntu
  * ```mkdir ~/fabric-dev-servers && cd ~/fabric-dev-servers```
  * ```curl-O https://raw.githubusercontent.com/hyperledger/composertools/master/packages/fabric-dev-servers/fabric-dev-servers.tar.gz```
  * ```tar -xvf fabric-dev-servers.tar.gz```
  * ```cd ~/fabric-dev-servers```
  * ```./downloadFabric.sh```

## development environment
* All control elements are located in ```~/fabric-dev-servers``` directory
* Start hyperledger fabric with command ```startFabric.sh```
* When first time starting up, you have to create a PeerAdminCard with command ```createPeerAdminCard.sh```
* Available commands in composer cli you get with command ```composer --help```
* Start up playground UI with command ```composer-playground```
  * All commands can then also be done via the playground UI instead of the cli
* Stop hyperledger fabric with command ```stopFabric.sh```
* Tear down hyperledger fabric with command ```teardownFabric.sh```

## General structure of blockchain network
* In folder lib the logic for transactions are provided
* In folder models the assets of a blockchain are provided
* In file permissions.acl the access and visibility of assets and transactions are provided





