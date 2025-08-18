---
tags:
  - 'industriële-communicatieprotocollen'
  - '🧹draft'

title: Open Platform Communications Unified Architecture (OPC UA)
---
*Open Platform Communications Unified Architecture (OPC UA)* is een begrip binnen de industriële digitalisering en industriële communicatieprotocollen.

## Definitie

**OPC UA (Open Platform Communications Unified Architecture)** is een platform-onafhankelijk industrieel communicatieprotocol dat veilige, betrouwbare data-uitwisseling tussen industriële apparaten en systemen mogelijk maakt. Het combineert messaging, security en semantische informatie-modellering.

## Kenmerken

- **Platform-onafhankelijk**: Werkt op Windows, Linux, embedded systemen en cloud platforms
- **Beveiligde communicatie**: End-to-end encryption en certificate-based authentication
- **Semantische modellering**: Rich information models met object-oriented structuur
- **Service-oriented architecture**: Client/Server en Publisher/Subscriber patterns
- **Scalabiliteit**: Van kleine embedded devices tot enterprise-level systemen
- **Interoperabiliteit**: Standaard data types en service definities
- **Transport flexibility**: TCP/IP, HTTPS, en [[opc-ua-pub-sub|publish/subscribe]] via MQTT
- **Type safety**: Strongly-typed data met automatische conversie en validatie

## Toepassing

**Industriële automatisering:**
- **PLC connectivity**: Verbinding tussen [[programmable-logic-controller|PLCs]] en [[manufacturing-execution-system|MES]] systemen
- **SCADA integratie**: Real-time data exchange met [[supervisory-control-and-data-acquisition|SCADA]] systemen
- **Machine-to-machine**: Directe communicatie tussen productie-equipment
- **Edge computing**: [[edge-computing|Edge gateways]] met OPC UA server functionaliteit

**Data integration architecturen:**
- **[[unified-namespace|UNS]] implementatie**: OPC UA als semantische laag voor namespace structuur
- **[[historian-database|Historian]] connectivity**: Tijdreeks data collectie met context
- **Cloud integration**: Secure connectivity tussen shopfloor en cloud analytics
- **Digital twin**: Real-time synchronisatie van fysieke en digitale assets

**Metaalindustrie specifiek:**
- **Lasparameter monitoring**: Real-time controle van [[welding-procedure-specification|lasprocessen]]
- **CNC machine integration**: Machinedata voor [[overall-equipment-effectiveness|OEE]] monitoring
- **Kwaliteitscontrole**: Automatische data transfer naar [[statistical-process-control-software|SPC systemen]]
- **Materiaal traceerbaarheid**: [[heat-number|Heat number]] tracking door productieproces

## Gerelateerde begrippen

**UNS & Semantic Integration:**
- [[unified-namespace|Unified Namespace (UNS)]] - OPC UA als semantic layer voor UNS
- [[semantisch-datamodel|Semantisch datamodel]] - OPC UA information models
- [[topic-namespace|Topic namespace]] - OPC UA namespace mapping to UNS topics

**Protocol Integration:**
- [[message-queuing-telemetry-transport|MQTT]] - OPC UA to MQTT bridging voor UNS
- [[opc-ua-pub-sub|OPC UA Pub/Sub]] - Event-driven OPC UA voor UNS
- [[industrial-internet-of-things|Industrial Internet of Things (IIoT)]] - OPC UA connectivity

## Bronnen

- OPC Foundation - Official OPC UA specifications
- IEC 62541 - OPC UA standards serie
- PROFIBUS & PROFINET International (PI) - OPC UA integration guides
- Eclipse Milo - Open source OPC UA SDK
- Unified Architecture book by Wolfgang Mahnke
- Industrial Internet Consortium (IIC) - OPC UA best practices
- OPC UA Security recommendations (TR-2020-01)

---
← Terug naar [[kaarten/industriële-communicatieprotocollen|Industriële communicatieprotocollen kaart]]
