---
tags:
  - 'softwaredeployment-en-architectuur'
  - '🧹draft'

title: CI/CD‑pijplijn
---
*CI/CD‑pijplijn* is een begrip binnen de industriële digitalisering en softwaredeployment & architectuur.

## Definitie

**CI/CD-pijplijn** automatiseert het proces van software development vanaf code commit tot productie-deployment. Continuous Integration voegt code samen en test automatisch, terwijl Continuous Deployment updates automatisch uitrolt naar productieomgevingen.

## Kenmerken

- **Continuous Integration (CI)**: Automatisch bouwen en testen bij elke code-wijziging
- **Continuous Deployment (CD)**: Geautomatiseerde uitrol naar productie na successful tests
- **Pipeline stages**: Opeenvolgende stappen zoals build, test, security scan, deploy
- **Automatisering**: Minimale menselijke interventie in deployment proces
- **Version control**: Gekoppeld aan [[versiebeheer-met-git|Git]] repositories voor trackability
- **Rollback capability**: Snelle terugkeer naar vorige werkende versie bij problemen
- **Environment consistency**: Identieke deployment tussen development, test en productie
- **Monitoring & feedback**: Geautomatiseerde rapportage van pipeline status en resultaten

## Toepassing

**Industriële software development:**
- **HMI applicaties**: Geautomatiseerde deployment van operator interfaces
- [[manufacturing-execution-system|MES]] updates: Veilige productie-software updates zonder downtime
- **Edge computing**: Deployment van applicaties naar industriële [[iot-gateway|edge gateways]]
- **PLC programmering**: Geautomatiseerde backup en deployment van besturingsprogramma's

**Container-gebaseerde deployments:**
- [[docker-container|Container]] builds: Geautomatiseerde image creation en registry push
- [[kubernetes|Kubernetes]] deployment: Orchestrated rollout naar production clusters
- [[helm-charts|Helm]] package management: Versioneerde applicatie releases
- **Multi-environment**: Development → Test → Acceptatie → Productie pipelines

**Compliance en kwaliteit:**
- **Automated testing**: Unit tests, integration tests en performance benchmarks
- **Security scanning**: Vulnerability assessment en compliance checks
- **Documentation**: Automatische generatie van deployment documentatie
- **Audit trails**: Volledige traceerbaarheid van wijzigingen en deployments

## Gerelateerde begrippen

- [[versiebeheer-met-git|Versiebeheer met Git]] - Source code management en branching strategies
- [[docker-container|Docker Container]] - Geautomatiseerde container builds in pipeline
- [[kubernetes|Kubernetes]] - Target deployment platform voor containers
- [[helm-charts|Helm Charts]] - Package management en versioned releases
- [[containertechnologie|Containertechnologie]] - Deployment targets en orchestratie
- [[cloud-native-applicatie|Cloud-native applicatie]] - Voor cloud-optimized deployment strategies
- [[software-levenscyclusbeheer|Software levenscyclusbeheer]] - Overkoepelend ontwikkelproces
- [[configuratiebeheer|Configuratiebeheer]] - Environment-specific settings management

## Bronnen

- GitLab CI/CD documentation
- Jenkins Pipeline best practices
- Azure DevOps Pipeline guides
- GitHub Actions workflow examples
- Docker build automation patterns
- Kubernetes deployment strategies
- Industrial DevOps security guidelines

---
← Terug naar [[kaarten/softwaredeployment-en-architectuur|Softwaredeployment & Architectuur kaart]]
