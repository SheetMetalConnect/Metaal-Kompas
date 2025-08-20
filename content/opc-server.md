---
tags:
  - 'data-collectie-en-industrial-data-platforms'
  - '🧹draft'

title: OPC‑server
---
*OPC‑server* is een begrip binnen de industriële digitalisering en data‑collectie & industrial data platforms.

## Definitie

**OPC-server** is een softwareapplicatie die als intermediair fungeert tussen industriële apparaten (zoals PLC's, sensors en actuatoren) en client-applicaties. De OPC-server verzamelt data uit verschillende industriële systemen en maakt deze beschikbaar via gestandaardiseerde OPC-interfaces voor historische opslag, visualisatie en analyse.

## Kenmerken

- **Protocol conversie**: Vertaalt propriëtaire hardware-protocols naar standaard OPC-interfaces
- **Data aggregatie**: Verzamelt data van meerdere bronnen in één centraal punt
- **Real-time toegang**: Biedt directe toegang tot live procesdata
- **Historische data**: Ondersteunt tijdreeksopslag en trending functionaliteiten
- **Client-server model**: Meerdere clients kunnen gelijktijdig verbinding maken
- **Security features**: Authenticatie en autorisatie voor beveiligde datatoegang
- **Redundantie**: Failover-mogelijkheden voor continue beschikbaarheid
- **Scalabiliteit**: Ondersteuning voor duizenden datapunten

## Toepassing

**Data-acquisitie en monitoring:**
- **[[historian-database|Historian]] data verzameling**: Continue opslag van proceswaarden voor trend- en rapportage-doeleinden
- **[[supervisory-control-and-data-acquisition|SCADA]] connectivity**: Verbinding tussen veldapparatuur en centrale controlesystemen
- **[[human-machine-interface|HMI]] data feeds**: Real-time procesdata voor operator interfaces
- **[[manufacturing-execution-system|MES]] integratie**: Productiedata naar systemen voor planning en tracking

**Industriële toepassingen:**
- **Metaalbewerking**: Monitoring van CNC-machines, lasrobots en materialenhandling
- **Processindustrie**: Temperature, flow en drukmetingen in chemische processen
- **Energie sector**: Monitoring van turbines, transformatoren en distributiesystemen
- **Water treatment**: Pompen, kleppen en kwaliteitsmetingen

**Data-integratie:**
- **[[enterprise-resource-planning|ERP]] connectiviteit**: Productiedata naar business systemen
- **[[cloud-computing|Cloud]] integratie**: Doorsturen van OPC-data naar cloud-platforms via [[message-queuing-telemetry-transport|MQTT]] of [[representational-state-transfer-api|REST APIs]]
- **[[unified-namespace|Unified Namespace]]**: Deel van moderne data-architecturen in [[industrie-4.0|Industrie 4.0]] implementaties

## Gerelateerde begrippen

- [[open-platform-communications-unified-architecture|OPC UA]] - Moderne opvolger van traditionele OPC met verbeterde beveiliging
- [[modbus|Modbus]] - Veelgebruikt industrieel protocol dat via OPC-servers wordt ontsloten
- [[programmable-logic-controller|PLC]] - Primaire databronnen voor OPC-servers
- [[historian-database|Historian Database]] - Time-series databases die data van OPC-servers ontvangen
- [[supervisory-control-and-data-acquisition|SCADA]] - Controlesystemen die OPC-servers gebruiken voor data-acquisitie
- [[human-machine-interface|HMI]] - Operator interfaces die OPC-data visualiseren
- [[manufacturing-execution-system|MES]] - Productiesystemen die productiedata via OPC ontvangen
- [[unified-namespace|Unified Namespace]] - Moderne data-architectuur waar OPC-servers een rol spelen
- [[edge-computing|Edge Computing]] - Lokale verwerking van OPC-data voordat het naar centrale systemen gaat

## Bronnen

- OPC Foundation - OPC specifications and certification programs
- Matrikon OPC Expert - OPC server implementations and tools
- Kepware Technologies - Industrial connectivity and OPC server solutions
- Wonderware System Platform - SCADA systems with OPC connectivity
- Ignition by Inductive Automation - Modern OPC UA platform implementations
- Siemens WinCC - Industrial HMI/SCADA with OPC server capabilities
- Rockwell FactoryTalk - Manufacturing software suite with OPC integration

---
← Terug naar [[kaarten/data-collectie-en-industrial-data-platforms|Data‑collectie & Industrial Data Platforms kaart]]
