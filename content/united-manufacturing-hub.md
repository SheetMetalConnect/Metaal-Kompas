---
tags:
  - data-collectie-en-industrial-data-platforms
  - 🧹draft
title: United Manufacturing Hub (UMH)
---
**United Manufacturing Hub (UMH)** is een open-source toolkit voor het inlezen, contextualiseren en opslaan van fabrieksdata. Het helpt bij het snel bouwen van een [[unified-namespace|Unified Namespace]] voor productielijnen en legt de basis voor geavanceerde analytics, real-time monitoring en digitale transformaties.

Het platform werd ontwikkeld door het Duitse startup uit Keulen en combineert geavanceerde IT/OT-tools en -technologieën in een gestandaardiseerde implementatie.

## Productarchitectuur

UMH biedt twee hoofdvarianten van hun platform:

### UMH Classic

> [!tip] Open-Source Kubernetes Blauwdruk **UMH Classic** is een open-source Kubernetes Helm Chart die als blauwdruk dient voor Industrial IoT implementaties.

**Technische Architectuur:**

- **Kubernetes-native** - Gebaseerd op moderne container-orkestratie
- **Helm Chart Deployment** - Eenvoudige installatie en beheer met één commando
- **IT/OT Convergentie** - Brug tussen operationele en informatietechnologie
- **Modulaire architectuur** - Aanpasbaar aan beveiligingseisen van IT-afdelingen

**Kerncomponenten:**

- **[[apache-kafka|Apache Kafka]]** - Enterprise message broker (berichtenmakelaar) voor datastreaming en [[unified-namespace|UNS]] backbone
- **[[mqtt|MQTT]] broker (HiveMQ)** - Voor IoT-apparaat communicatie en real-time datapublicatie
- **TimescaleDB** - Tijdreeksdatabase voor historische data-opslag en historian functionaliteit
- **Node-RED** - Flow-gebaseerde data-inname en snelle apparaatverbindingen
- **Grafana** - Datavisualisatie en dashboards voor shopfloor monitoring
- **factoryinsight** - Aangepaste API voor dataserving en serving layer
- **Data Bridge** - Microservice voor datatransfer tussen [[mqtt|MQTT]] en [[apache-kafka|Kafka]]
- **Management Console** - Centrale beheerinterface voor monitoring en configuratie

**Manufacturing Focus:**

- **Plug-and-Play** - Snelle implementatie in bestaande fabrieken
- **Vendor Agnostic** - Werkt met verschillende machine en systeem leveranciers
- **Scalable Architecture** - Van proof-of-concept tot enterprise deployment
- **Community content** - Tutorials, Node-RED flows en Grafana dashboards

### UMH Core

> [!note] Single-Container Edge Gateway **UMH Core** is een enkele Docker-container die elke PC, VM of edge gateway omzet in een Industrial Data Hub.

**Kerncomponenten:**

- **Agent** - Go-service die `config.yaml` leest, pipelines start, gezondheid bewaakt en communiceert met Management Console
- **Benthos-UMH** - Stream-processor engine met 50+ industriële connectors voor hoge doorvoer
- **Redpanda** - Embedded, [[apache-kafka|Kafka]]-compatibele broker die elk bericht buffert
- **S6 Supervisor** - Houdt elk subprocess actief en start ze in de juiste volgorde
- **Tag Processor** - Voor datacontextualisatie en [[unified-namespace|UNS]] metadata

**Voordelen:**

- **Eenvoudig** - PLC's, sensoren, ERP/MES en cloud services communiceren via één [[unified-namespace|Unified Namespace]] in plaats van point-to-point verbindingen
- **Lichtgewicht** - Draait op bijna alle hardware
- **Geen vendor lock-in** - 100% open-source stack

## Unified Namespace Architectuur

Het platform is specifiek ontworpen voor het bouwen van een [[unified-namespace|Unified Namespace]] architectuur:

### Typische Architectuur

```
┌──────── PLC / Device ───────┐
│ OPC UA / Modbus / S7 / …    │
└────────────┬────────────────┘
             │ Bridge (Read Flow)
             ▼
┌───────────────────┐
│ Unified Namespace │
└───────────────────┘
             │ Bridge (Write Flow)
             ▼
MQTT broker ▸ Cloud ▸ Historian ▸ Dashboards
```

Elk bericht landt eerst in de [[unified-namespace|Unified Namespace]], wat replay, buffering en betrouwbare dataverwerking mogelijk maakt. [[mqtt|MQTT]] Brokers, databases, historians en dashboards consumeren vervolgens de data hieruit.

### Data Architectuur Principes

- **Event-gedreven architectuur** - Alle data wordt gepubliceerd ongeacht of er een directe consument is
- **Gestandaardiseerde topic namespace** structuur conform ISA-95 model
- **Real-time datapublicatie** met retained messages voor huidige statusrepresentatie
- **Data Contracts** - Overeenkomsten die definiëren hoe data gestructureerd, geformatteerd en beheerd wordt
- **JSON als primair format** voor data-organisatie

### Protocol Integratie

**Moderne Protocollen:**

- **[[mqtt|MQTT]]** - Voor moderne industriële apparatuur en IoT-apparaten
- **[[apache-kafka|Kafka]]** - Voor enterprise datastreaming en UNS backbone

**Legacy Ondersteuning:**

- **[[opc-ua|OPC-UA]]** - Voor industriële automatisering met OPC-UA plugin
- **Modbus** - Voor legacy apparatuur connectiviteit
- **Siemens S7** - Voor Siemens PLC's
- **IO-Link** - Voor sensornetwerken via sensorconnect

## Data Flow Components

### Bridges (Bruggen)

Verbinden externe systemen met de UNS met gezondheidsmonitoring:

- **Read Flow** - Beschikbaar voor data-inname
- **Write Flow** - In ontwikkeling voor data-uitvoer
- **Connection** - Continue netwerkcontrole of externe systemen beschikbaar zijn

### Stream Processors

Transformeren berichten die al binnen de UNS zijn.

### Stand-alone Flows

Point-to-point verbindingen wanneer UNS buffering niet gewenst is.

### Data Contracts & Schemas

**Historian Schema (`_historian`):**

- Automatische opslag in TimescaleDB wanneer berichten naar topics met `_historian` schema verzonden worden
- Data bridging tussen [[mqtt|MQTT]] en [[apache-kafka|Kafka]]
- Idempotente berichten via timestamps voor betrouwbare verwerking

**Raw Contract (`_raw`):**

- Eenvoudigste contract voor onverwerkte data
- Basis voor verdere dataverwerking en contextualisatie

## Connectivity Tools

### Benthos-UMH

Gespecialiseerde versie van Benthos met industriële focus:

- **OPC-UA ondersteuning** - Verbinding met elke OPC-UA server voor datastreaming naar UNS
- **Report by exception** - Configuratie van OPC-UA nodes in subscribe mode voor data alleen bij waardeveranderingen
- **Per-node configuratie** - Individuele configuratie van nodes
- **Management Console integratie** - Configuratie en deployment van protocol converters
- **Betrouwbaarheid** - Bewezen betrouwbaarder dan Node-RED bij grote hoeveelheden data

### Data Bridge Microservice

Specifiek ontworpen voor UNS datamodel:

- **Bidirectionele communicatie** tussen [[mqtt|MQTT]] en [[apache-kafka|Kafka]]
- **Topic merging** - Consolidatie van meerdere [[mqtt|MQTT]] topics naar enkele [[apache-kafka|Kafka]] topic
- **Message key preservation** - Behoud van bron topic informatie in [[apache-kafka|Kafka]] message keys
- **Wildcard subscription ondersteuning** voor flexibele topic routing

### Additional Connectivity

- **Node-RED** - Programmeertool voor het verbinden van hardware devices, API's en online services
- **Barcode Reader** - Verbinding met USB barcode reader devices
- **sensorconnect** - Integratie met IO-Link Masters en hun sensoren

## Management Console Features

Cloudgebaseerde interface beschikbaar via `management.umh.app`:

### Core Functionaliteit

- **Configuration as Code** - YAML-gebaseerde configuratie met Git-integratie
- **Multi-instance management** - Centraal beheer van meerdere UMH-implementaties
- **Protocol Converter configuratie** - Direct deployment van Benthos-UMH converters
- **Topic Browser** - Navigatie door Unified Namespace met data aggregatie

### Monitoring & Diagnostics

- **Real-time gezondheidsmonitoring** van alle componenten
- **Payload visualisatie** - Geformatteerde weergave van gevalideerde schemas
- **Tag Value History** - Laatste 100 waarden voor historian tags
- **Publisher & Subscriber Info** - Overzicht van data origins, destinations en flow metrics
- **Example SQL Query generation** - Voor gebruik in database queries en Grafana

### Data Governance

- **Data contract management** - Controle over dataflows en transformaties
- **Schema validation** - Structuurcontrole van berichten
- **Message routing** - Configuratie van data paths door het systeem

## Schaalbaarheid & Performance

### Kafka Optimalisatie

- **Topic merge points** - Reductie van Kafka topics voor geheugenoptimalisatie
- **Key-based data segregation** - Logische dataseparatie via event keys
- **Partition management** - Standaard 6 partitions per topic, ongeveer 100-150 topics per broker
- **High-throughput processing** - Gigabytes per seconde dataverwerking in plaats van berichten per seconde

### Network Resilience

- **Reliable message delivery** - Ook over onstabiele netwerkverbindingen
- **Data buffering** - Lokale opslag tijdens netwerkonderbrekingen
- **Automatic reconnection** - Herstel van verbindingen na onderbrekingen

## Licensing en Edities

### Community Editie

- **Open Source** - Apache 2.0 licentie, volledig transparant en aanpasbaar
- **Gratis beschikbaar** voor één site implementatie via GitHub repository
- **Volledige technische functionaliteit** van het platform
- **Community ondersteuning** via Discord en GitHub

### Premium/Enterprise Edities

- **Commerciële ondersteuning** voor professionele implementaties
- **Multi-site en multi-instance deployments** met centrale management
- **Uitgebreide ondersteuning** en ontwikkelingshulp
- **Enterprise-niveau SLA's** en onderhoud
- **Management Console** met geavanceerde features

## Technische Specificaties

### UMH Classic Stack

- **Message brokers**: HiveMQ ([[mqtt|MQTT]]), Apache [[apache-kafka|Kafka]]
- **Database**: TimescaleDB voor tijdreeksdata en historian functionaliteit
- **Visualisatie**: Grafana dashboards met factoryinsight API
- **Orkestratie**: Kubernetes met Helm charts voor container management
- **Dataverwerking**: Node-RED flows, Data Bridge microservices, auto-generated secrets

### UMH Core Componenten

- **Streaming**: Benthos-UMH engine met 50+ industriële connectors
- **Berichtenuitwisseling**: Redpanda ([[apache-kafka|Kafka]]-compatibel) embedded broker
- **Controle**: Go-gebaseerde agent met YAML-configuratie en health monitoring
- **Deployment**: Single Docker-container met S6 supervisor
- **Protocol ondersteuning**: OPC-UA, Modbus, Siemens S7, IO-Link via bridges

## Target Audience & Use Cases

### Manufacturing Engineers

- Directe implementatie zonder diepgaande IT-kennis vereist
- Uitgebreide documentatie en gidsen voor zelfstandige implementatie
- Plug-and-play oplossingen voor bestaande productieomgevingen

### System Integrators

- Standaard platform voor klantprojecten met bewezen architectuur
- Modulaire opzet voor verschillende industriële requirements
- Community content voor snellere projectstart

### IT/OT Teams

- Brug tussen traditionele systemen en moderne cloud-native architecturen
- Beveiligingsflexibiliteit van DMZ tot on-premise en private cloud
- Integratie met bestaande enterprise systemen

## Gerelateerde begrippen

**Platform & Architectuur:**

- [[unified-namespace|Unified Namespace (UNS)]] - Centrale data architectuur principe
- [[kubernetes|Kubernetes]] - Container-orkestratie platform (UMH Classic)
- [[apache-kafka|Apache Kafka]] - Enterprise message streaming en UNS backbone
- [[mqtt|MQTT]] - IoT-communicatieprotocol voor device connectivity
- [[docker|Docker]] - Container-technologie voor deployment

**Data & Integratie:**

- [[edge-computing|Edge computing]] - Lokale dataverwerking en analyse
- [[it-ot-convergentie|IT/OT-convergentie]] - Systeemintegratie tussen OT en IT
- [[tijdreeksdatabase|TimescaleDB]] - Tijdreeks data-opslag voor historian
- [[event-gedreven-architectuur|Event-gedreven architectuur]] - Basis van UNS concept

**Industriële Systemen:**

- [[industrial-internet-of-things|IIoT]] - Industrial IoT ecosysteem en connectivity
- [[opc-ua|OPC-UA]] - Industriële communicatiestandaard met native ondersteuning
- [[manufacturing-execution-system|MES]] - Productiesysteemintegratie via protocols
- [[data-contracts|Data Contracts]] - Gestandaardiseerde data-uitwisseling overeenkomsten

**Connectivity & Protocols:**

- [[benthos|Benthos]] - Stream processing tool voor data engineering
- [[node-red|Node-RED]] - Flow-based programming voor device connectivity
- [[grafana|Grafana]] - Data visualisatie en dashboard platform
- [[helm|Helm]] - Kubernetes package manager voor chart deployment

## Bronnen

- [UMH Official Website](https://www.umh.app/)
- [UMH GitHub Repository](https://github.com/united-manufacturing-hub/united-manufacturing-hub)
- [UMH Core Documentatie](https://docs.umh.app/)
- [UMH Classic Documentatie](https://umh.docs.umh.app/docs/)
- [UMH Leerplatform](https://learn.umh.app/)
- [Management Console](https://management.umh.app/)
- [Discord Community](https://discord.gg/F9mqkZnm8U)

---

← Terug naar [[kaarten/data-collectie-en-industrial-data-platforms|Data-collectie & Industrial Data Platforms kaart]]