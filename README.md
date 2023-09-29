# ntu-microservice-boilerplate
- Can use as Boilerplate for different microservices
- Configuration enabled for the creation and pushing the Dcoker images to the hub
- Configuration enabled for the Kubernetes Cluster creation of deployment and service files of all the services
- Configuration enabled for the ClusterIP service of all the microservices
- Configuration enabled for the Ingress Controller (routing mechanism) for all the services
- Integration enabled for Load Balancer with the Ingress Controller
- Configuration done for the React App Dev Server
- Integration done for the React App Dev Server with different microservices
- Current Issue - Whenever do any change, need to build the new image of the microservice, push it to the docker hub and then run the kubectl rollout restart deployment <deployment_name> command, which is a headache, lets work on the solution for this issue