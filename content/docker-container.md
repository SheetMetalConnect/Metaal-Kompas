---
tags:
  - 'softwaredeployment-en-architectuur'
  - '🧹draft'

title: Docker‑container
---
*Docker‑container* is een begrip binnen de industriële digitalisering en softwaredeployment & architectuur.

## Definitie

**Docker-container** is een standaard software-eenheid die applicatiecode verpakt met alle dependencies, waardoor applicaties betrouwbaar kunnen draaien op elke computeromgeving. Docker containers zijn lichtgewicht en delen het OS kernel van de host.

## Kenmerken

- **Portabiliteit**: "Write once, run anywhere" - draait op elke Docker-compatibele omgeving
- **Isolatie**: Applicaties draaien geïsoleerd van de host en andere containers
- **Lichtgewicht**: Delen het OS kernel, waardoor ze veel minder resources gebruiken dan VM's
- **Consistentie**: Identiek gedrag in development, test en productie omgevingen
- **Snelheid**: Opstarten in seconden door het delen van het OS kernel
- **Versionering**: Image-gebaseerd systeem met tageerbaarheid en rollback mogelijkheden
- **Reproduceerbaar**: Deterministische builds door gebruik van Dockerfiles

## Toepassing

**Industriële automatisering:**
- **Edge computing**: Deployment van industriële applicaties op edge-devices
- [[mqtt-broker|MQTT brokers]]: Containerized messaging voor [[unified-namespace|UNS]] architecturen
- **Data collectors**: Geïsoleerde data-acquisitie services voor [[historian-database|historian databases]]
- **HMI applicaties**: Web-based operator interfaces in containers

**Manufacturing execution:**
- [[manufacturing-execution-system|MES]] microservices: Modulaire productiebesturing
- **OPC servers**: Containerized [[opc-server|OPC UA]] connectiviteit
- **Workflow engines**: Geautomatiseerde productieprocessen in containers
- **Quality systems**: [[statistical-process-control-software|SPC]] en kwaliteitsapplicaties

**Development en deployment:**
- **DevOps pipelines**: Gestandaardiseerde deployment via [[ci-cd-pijplijn|CI/CD]]
- **Microservices architectuur**: Service-gebaseerde industriële applicaties
- **Hybrid cloud**: Consistente deployment tussen [[on-premises-software|on-premises]] en cloud

## Gerelateerde begrippen

- [[containertechnologie|Containertechnologie]] - Overkoepelende containerization concepten
- [[docker-compose|Docker Compose]] - Multi-container applicatie orchestratie
- [[kubernetes|Kubernetes]] - Container orchestratie platform
- [[portainer|Portainer]] - Grafische container management interface
- [[helm-charts|Helm Charts]] - Kubernetes package management
- [[ci-cd-pijplijn|CI/CD Pipeline]] - Geautomatiseerde container deployment
- [[cloud-native-applicatie|Cloud-native applicatie]] - Voor cloud-geoptimaliseerde architectuur
- [[unified-namespace|Unified Namespace]] - Vaak geïmplementeerd met containerized services

## Bronnen

- Docker Official Documentation
- CNCF (Cloud Native Computing Foundation) guidelines
- Kubernetes container best practices
- Industrial IoT container deployment patterns
- Red Hat OpenShift container platform documentation
- NVIDIA container runtime for industrial AI workloads

---
← Terug naar [[kaarten/softwaredeployment-en-architectuur|Softwaredeployment & Architectuur kaart]]
