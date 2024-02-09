# ntu-microservice-boilerplate
- Can use as Boilerplate for different microservices
- Configuration enabled for the creation and pushing the Dcoker images to the hub
- Configuration enabled for the Kubernetes Cluster creation of deployment and service files of all the services
- Configuration enabled for the ClusterIP service of all the microservices
- Configuration enabled for the Ingress Controller (routing mechanism) for all the services
- Integration enabled for Load Balancer with the Ingress Controller
- Configuration done for the React App Dev Server
- Integration done for the React App Dev Server with different microservices
- HURRAYYYY, App is running perfectly fine inside the K8S cluster
- Current Issue - Whenever do any change, need to build the new image of the microservice, push it to the docker hub and then run the kubectl rollout restart deployment <deployment_name> command, which is a headache, lets work on the solution for this issue
- Introducing Automation Tool for this process just for the development environment
- SKAFFOLD (skaffold.dev) - Automate many task in K8S DEV environment. Also, makes the job easy to update the code in running POD. Also able to create/delete all objects tied to project at once
- SKAFFOLD -> Runs outside the cluster
- Run the command - skaffold dev (N) | skaffold dev -v DEBUG (Y)
- When you STOP the skaffold by just hittting Ctrl + C | Cmd + C -> it will delete all the K8S pods| deployments | services associated with the application
- Done with this beautiful little microservice with react application! Cheers!
#react #docker #kubernetes #skaffold #microservice #eventbus #pods #containers #services #deployment #ingress-nginx #loadbalancer #clusterip #nodeport
