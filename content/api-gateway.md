---
tags:
  - 'softwaredeployment-en-architectuur'
  - '🧹draft'

title: API‑gateway
---
*API‑gateway* is een begrip binnen de industriële digitalisering en softwaredeployment & architectuur.

## Definitie

**API Gateway** is een servercomponent die als centrale toegangspoort fungeert voor alle API-verzoeken in een microservices-architectuur. Het beheert authenticatie, autorisatie, load balancing (belastingsverdeling), rate limiting (snelheidsbeperking) en monitoring van API-verkeer tussen clients en backend services. In de metaalindustrie faciliteert het de integratie tussen verschillende productiesystemen, ERP-systemen en IoT-apparaten.

## Kenmerken

### 1. Centrale Toegangscontrole
- **Single Entry Point**: Alle externe API-aanroepen gaan via één toegangspunt
- **Authenticatie & Autorisatie**: Controleert gebruikersrechten voordat requests doorgegeven worden
- **SSL Termination**: Beheert beveiligde verbindingen en certificaten

### 2. Verkeersmanagement
- **Load Balancing**: Verdeelt requests over meerdere backend services
- **Rate Limiting**: Voorkomt overbelasting door aanroepen te beperken
- **Request/Response Transformatie**: Past dataformaten aan tussen verschillende systemen

### 3. Monitoring & Logging
- **API Analytics**: Verzamelt statistieken over gebruik en prestaties
- **Foutafhandeling**: Uniform error handling en logging
- **Health Checks**: Controleert beschikbaarheid van backend services

### 4. Caching & Optimalisatie
- **Response Caching**: Slaat veelgevraagde data tijdelijk op
- **Request Batching**: Combineert meerdere requests voor efficiëntie

## Toepassing

### 1. ERP-Systeem Integratie
- **Uniforme API-laag**: Standaardiseert toegang tot verschillende ERP-modules
- **Dataharmonisatie**: Zorgt voor consistente data-uitwisseling tussen systemen
- **Legacy System Integration**: Verbindt oudere systemen met moderne applicaties

### 2. MES en Productiesystemen
- **Machine Connectivity**: Centraliseert communicatie met productiemachines
- **Real-time Data Access**: Biedt live productiedata aan verschillende applicaties
- **Workflow Orchestration**: Coördineert processen tussen verschillende systemen

### 3. IoT en Sensor Data
- **Device Management**: Beheert communicatie met IoT-sensoren en actuators
- **Data Aggregation**: Verzamelt en verwerkt sensordata van de shopfloor
- **Edge-to-Cloud Integration**: Verbindt lokale edge-systemen met cloud platforms

### 4. Supply Chain Integration
- **Partner API's**: Faciliteert data-uitwisseling met leveranciers en klanten
- **EDI Modernisatie**: Vervangt traditionele EDI door moderne API-integraties
- **Track & Trace**: Ondersteunt traceerbaarheidssystemen across de supply chain

## Gerelateerde begrippen

**Technische Integratie:**
- [[application-programming-interface|Application Programming Interface (API)]]
- [[representational-state-transfer-api|REST API]]
- [[microservices-architectuur|Microservices Architectuur]]
- [[message-broker|Message Broker]]

**Systemen & Platforms:**
- [[enterprise-resource-planning|Enterprise Resource Planning (ERP)]]
- [[manufacturing-execution-system|Manufacturing Execution System (MES)]]
- [[cloud-native-applicatie|Cloud Native Applicatie]]
- [[containertechnologie|Containertechnologie]]

**Conceptuele Verwanten:**
- [[unified-namespace|Unified Namespace]]
- [[event-gedreven-architectuur|Event-gedreven Architectuur]]
- [[ontkoppeling-van-applicaties|Ontkoppeling van Applicaties]]
- [[middleware-taps|Middleware Taps]]

## Bronnen

- **Kong**: Enterprise API Gateway platform voor microservices
- **Amazon API Gateway**: AWS-managed API Gateway service
- **NGINX Plus**: Load balancer met API Gateway functionaliteiten
- **Zuul (Netflix)**: Open source API Gateway voor Java applicaties
- **Pattern: API Gateway**: Microservices architectuur pattern documentatie

---
← Terug naar [[kaarten/softwaredeployment-en-architectuur|Softwaredeployment & Architectuur kaart]]