---
tags:
  - 'softwaredeployment-en-architectuur'
  - '🧹draft'

title: Helm‑charts
---
*Helm‑charts* is een begrip binnen de industriële digitalisering en softwaredeployment & architectuur.

## Definitie

**Helm-charts** zijn package management templates voor [[kubernetes|Kubernetes]] applications die de deployment, configuration en management van complex containerized applications vereenvoudigen. Een chart is een collection van files die een related set van Kubernetes resources beschrijft, enabling reproducible application deployments.

## Kenmerken

- **Template engine**: Go template syntax voor dynamic resource generation
- **Package management**: Versioned application packages met dependency management
- **Configuration management**: Values files voor environment-specific customization
- **Release management**: Application lifecycle management (install, upgrade, rollback)
- **Repository system**: Centralized chart distribution via chart repositories
- **Dependency resolution**: Automatic sub-chart dependency installation
- **Hooks**: Lifecycle hooks voor pre/post deployment actions
- **Testing framework**: Built-in testing capabilities voor chart validation
- **Security scanning**: Chart vulnerability assessment en security validation

## Toepassing

**Industrial application deployment:**
- **[[manufacturing-execution-system|MES]] deployment**: Production management system containerization
- **[[historian-database|Data collection]]**: Time-series database deployment automation
- **[[kwaliteitsdata-analyse-tools|Quality tools]]**: Statistical analysis application packaging
- **Monitoring stacks**: Observability tool deployment (Prometheus, Grafana)

**[[microservices|Microservices]] deployment:**
- **Application stacks**: Multi-service application deployment coordination
- **Service mesh**: Istio, Linkerd service mesh deployment
- **API gateways**: Ingress controller en API management deployment
- **Configuration management**: Environment-specific configuration deployment

**Development workflows:**
- **[[continuous-integration-continuous-deployment|CI/CD]] tooling**: Jenkins, GitLab CI pipeline deployment
- **Development environments**: Standardized development stack deployment
- **Testing environments**: Automated test environment provisioning
- **Staging deployments**: Pre-production environment management

**Third-party software:**
- **Database deployments**: PostgreSQL, MongoDB, Redis deployment automation
- **Message brokers**: RabbitMQ, Apache Kafka deployment packages
- **Caching solutions**: Redis, Memcached deployment automation
- **Security tools**: Vault, certificate management deployment

## Gerelateerde begrippen

**Verwante termen:**
- [[kubernetes|Kubernetes]] - Container orchestration platform using Helm charts
- [[docker-compose|Docker Compose]] - Alternative container orchestration for simpler deployments
- [[containertechnologie|Container technology]] - Underlying technology packaged by Helm charts
- [[infrastructure-as-code|Infrastructure as Code]] - Configuration management approach using Helm

**Verwante concepten:**
- [[continuous-integration-continuous-deployment|CI/CD]] - DevOps practices using Helm voor automated deployments
- [[microservices|Microservices]] - Architecture pattern supported by Helm chart deployments
- [[cloud-native-applicatie|Cloud native]] - Application architecture optimized voor Helm deployment
- [[configuration-management|Configuration management]] - System configuration using Helm templates

## Bronnen

- Helm.sh - Official Helm package manager documentation en community
- Artifact Hub - Public repository voor Helm charts en other cloud native artifacts
- Bitnami Charts - Curated Helm charts voor popular applications
- Helm Hub - Chart discovery en distribution platform
- CNCF (Cloud Native Computing Foundation) - Helm governance en ecosystem
- Red Hat OpenShift - Enterprise Kubernetes platform with Helm integration
- Google Cloud Platform - GKE Helm integration en chart deployment guides

---
← Terug naar [[kaarten/softwaredeployment-en-architectuur|Softwaredeployment & Architectuur kaart]]
