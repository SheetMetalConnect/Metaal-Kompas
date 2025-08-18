---
tags:
  - 'industriële-communicatieprotocollen'
  - '🧹draft'

title: Representational State Transfer (REST)‑API
---
*Representational State Transfer (REST)‑API* is een begrip binnen de industriële digitalisering en industriële communicatieprotocollen.

## Definitie

**REST API (Representational State Transfer)** is een architectural style voor het ontwerpen van web services die gebruik maakt van standaard HTTP-methoden en principes voor het uitwisselen van data tussen systemen. In industriële context biedt REST een lightweight, platform-onafhankelijke manier voor systeem-integratie en data-uitwisseling.

## Kenmerken

- **HTTP-based**: Gebruik van standard HTTP methods (GET, POST, PUT, DELETE)
- **Stateless**: Elke request bevat alle informatie nodig voor processing
- **Resource-oriented**: URLs representeren specific resources (machines, orders, parts)
- **JSON/XML format**: Structured data exchange formats
- **Cacheable**: Responses kunnen cached worden voor performance
- **Uniform interface**: Consistent API design across different resources
- **Client-server architecture**: Clear separation tussen client en server responsibilities
- **Layered system**: Support voor proxies, gateways, load balancers

## Toepassing

**[[manufacturing-execution-system|MES]] integratie:**
- **Production data access**: GET requests voor job status, cycle times, quality data
- **Work order management**: POST/PUT requests voor job creation en updates
- **Resource scheduling**: API calls voor machine availability, capacity planning
- **Quality reporting**: Structured quality data submission via REST endpoints

**[[industrial-internet-of-things|IIoT]] device management:**
- **Device configuration**: PUT requests voor parameter updates, setpoints
- **Sensor data collection**: POST requests met time-series sensor readings
- **Firmware updates**: Binary data distribution via REST services
- **Device status monitoring**: GET requests voor health, performance metrics

**Enterprise system connectivity:**
- **[[enterprise-resource-planning|ERP]] integration**: Business data synchronization tussen systems
- **Supply chain APIs**: Order status, inventory levels, delivery information
- **Customer integration**: Portal access voor order tracking, specifications
- **Maintenance systems**: Work order creation, asset information exchange

**Cloud en edge integration:**
- **Hybrid architectures**: On-premises to cloud data synchronization
- **[[edge-computing|Edge]] services**: Local REST APIs voor distributed processing
- **Analytics platforms**: Data feeding naar machine learning services
- **Mobile applications**: Smartphone/tablet access naar production systems

## Gerelateerde begrippen

**Verwante termen:**
- [[http-https-in-industriële-omgevingen|HTTP/HTTPS]] - Underlying transport protocol voor REST
- [[application-programming-interface|API]] - General interface concept implemented by REST
- [[websocket|WebSocket]] - Alternative protocol voor real-time bidirectional communication
- [[unified-namespace|Unified Namespace]] - Modern architecture often exposing REST APIs

**Verwante concepten:**
- [[microservices|Microservices]] - Architecture pattern heavily using REST communication
- [[cloud-computing|Cloud computing]] - Platform services exposed via REST APIs
- [[it-ot-convergentie|IT/OT convergentie]] - Integration enabled by REST technologies
- [[service-oriented-architecture|SOA]] - Architecture paradigm implemented via REST

## Bronnen

- REST API Design Best Practices - Industry standard guidelines
- OpenAPI Specification (Swagger) - API documentation standard
- Postman - API development en testing platform
- JSON Schema - Data validation voor REST payloads
- OAuth 2.0 - Authorization framework voor REST APIs
- Siemens MindSphere APIs - Industrial cloud platform REST services
- GE Digital Predix APIs - Industrial IoT platform REST interfaces
- Microsoft Azure Industrial IoT - REST-based industrial services
- Rockwell FactoryTalk - Manufacturing REST API implementations
- Phoenix Contact PLCnext - Industrial controller REST interfaces

---
← Terug naar [[kaarten/industriële-communicatieprotocollen|Industriële communicatieprotocollen kaart]]
