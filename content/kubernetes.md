---
tags:
  - 'softwaredeployment-en-architectuur'
  - '🧹draft'

title: Kubernetes (K8s)
---
*Kubernetes (K8s)* is een begrip binnen de industriële digitalisering en softwaredeployment & architectuur.

## Definitie

**Kubernetes (K8s)** is een open-source platform voor het automatiseren van deployment, scaling en beheer van gecontaineriseerde applicaties. Het orchestrates containers over clusters van machines en biedt load balancing, auto-scaling en self-healing capabilities.

## Kenmerken

- **Container orchestratie**: Beheert duizenden [[docker-container|containers]] als één geheel
- **Auto-scaling**: Automatisch op- en afschalen op basis van CPU, geheugen of custom metrics
- **Self-healing**: Automatisch herstarten van gefaalde containers en herplaatsing bij node-uitval
- **Load balancing**: Spreidt verkeer over meerdere container-instances
- **Rolling updates**: Zero-downtime deployments met geleidelijke vervangingen
- **Service discovery**: Automatische DNS-resolutie en load balancing tussen services
- **Storage orchestratie**: Dynamische toewijzing van persistent volumes
- **Secrets management**: Veilige distributie van credentials en configuratie

## Toepassing

**Industriële digitalisering:**
- **Smart manufacturing**: Orchestratie van [[manufacturing-execution-system|MES]] microservices
- **Edge computing clusters**: Gedistribueerde processing op fabrieksvloer
- [[unified-namespace|UNS]] implementatie: Schaalbare [[mqtt-broker|MQTT brokers]] en event processors
- **Industrial IoT**: Beheer van duizenden [[iot-gateway|IoT gateways]] en sensordataverwerking

**Mission-critical systemen:**
- **High-availability**: 99.99% uptime voor kritieke productieapplicaties
- **Disaster recovery**: Multi-site deployments met automatische failover
- [[historian-database|Historian databases]]: Schaalbare tijdreeks-dataopslag
- **Real-time monitoring**: [[realtime-monitoring|Dashboards]] en alerting systemen

**DevOps en deployment:**
- **GitOps workflows**: Geautomatiseerde deployment via [[ci-cd-pijplijn|CI/CD pipelines]]
- **Blue-green deployments**: Risicoloze productie-updates
- **A/B testing**: Gecontroleerde rollout van nieuwe applicatieversies
- **Multi-tenancy**: Geïsoleerde omgevingen voor verschillende afdelingen/klanten

## Gerelateerde begrippen

- [[docker-container|Docker Container]] - De basis container-eenheden die K8s orchestreert
- [[helm-charts|Helm Charts]] - Package manager voor Kubernetes applicaties
- [[portainer|Portainer]] - Grafische interface voor Kubernetes management
- [[ci-cd-pijplijn|CI/CD Pipeline]] - Geautomatiseerde deployment naar K8s clusters
- [[cloud-native-applicatie|Cloud-native applicatie]] - Voor K8s geoptimaliseerde architectuur
- [[containertechnologie|Containertechnologie]] - Overkoepelende container concepten
- [[unified-namespace|Unified Namespace]] - Vaak geïmplementeerd op K8s platform
- [[observeerbaarheid|Observeerbaarheid]] - Monitoring en troubleshooting van K8s workloads

## Bronnen

- Kubernetes Official Documentation (kubernetes.io)
- CNCF (Cloud Native Computing Foundation) landscape
- Red Hat OpenShift - Enterprise Kubernetes platform
- Rancher - Multi-cluster Kubernetes management
- Industrial IoT on Kubernetes best practices
- Edge computing with Kubernetes (KubeEdge, K3s)
- Helm package repository (artifacthub.io)

---
← Terug naar [[kaarten/softwaredeployment-en-architectuur|Softwaredeployment & Architectuur kaart]]
