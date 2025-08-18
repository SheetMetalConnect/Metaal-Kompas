---
tags:
  - 'industriële-communicatieprotocollen'
  - '🧹draft'

title: WebSocket
---
*WebSocket* is een begrip binnen de industriële digitalisering en industriële communicatieprotocollen.

## Definitie

**WebSocket** is een communicatieprotocol dat een persistente, bidirectionele verbinding tussen client en server mogelijk maakt over een enkele TCP-verbinding. In tegenstelling tot traditionele HTTP requests enables WebSocket real-time communicatie waarbij zowel client als server op elk moment data kunnen versturen. Dit maakt het ideaal voor industriële applicaties die real-time updates, dashboards en monitoring vereisen.

## Kenmerken

- **Bidirectionele communicatie**: Server en client kunnen beide berichten initieren
- **Persistente verbinding**: Één verbinding blijft open voor multiple data uitwisselingen
- **Low latency**: Minimale overhead vergeleken met HTTP request/response cycles
- **Real-time updates**: Immediate data push van server naar clients
- **HTTP compatible**: Start als HTTP verbinding, upgrade naar WebSocket
- **Firewall friendly**: Gebruikt standaard HTTP poorten (80/443)
- **Binary en text support**: Flexibele data formaten voor verschillende use cases
- **Connection lifecycle**: Built-in ping/pong mechanismen voor connection health

## Toepassing

**Real-time industriële dashboards:**
- **[[kpi-dashboard|KPI Dashboards]]**: Live updates van [[overall-equipment-effectiveness|OEE]], productie tellingen en kwaliteitsmetrics
- **Process monitoring**: Real-time display van temperatuur, druk en flow parameters
- **Alarm systemen**: Immediate waarschuwingen bij proces afwijkingen of equipment failures
- **Production tracking**: Live status van werk orders en productievoortgang

**Web-based HMI applicaties:**
- **Remote monitoring**: Toegang tot machine status via web browsers
- **Mobile operator interfaces**: Smartphone/tablet apps voor shopfloor personeel
- **Management dashboards**: Executive level KPI monitoring en reporting
- **Maintenance portals**: Real-time asset conditie en maintenance schedules

**Integratie met industriële systemen:**
- **[[manufacturing-execution-system|MES]] interfaces**: Real-time web interfaces voor productiebesturing
- **[[historian-database|Historian]] visualization**: Live trending van proces en kwaliteitsdata
- **[[unified-namespace|UNS]] connectivity**: WebSocket subscriptions op UNS topics
- **Cloud platform integration**: Real-time data streaming naar cloud analytics

**Moderne architectuur patronen:**
- **Microservices communication**: Event-driven updates tussen web services
- **[[event-gedreven-architectuur|Event-driven]] web apps**: Real-time reactie op business events
- **Progressive web apps (PWAs)**: Offline-capable industriële applicaties
- **Digital twin interfaces**: Real-time synchronization tussen physical en digital assets

## Gerelateerde begrippen

- [[http-https-in-industriële-omgevingen|HTTP/HTTPS]] - Foundation protocol voor WebSocket upgrade
- [[representational-state-transfer-api|REST API]] - Complementair protocol voor stateless operations
- [[message-queuing-telemetry-transport|MQTT]] - IoT messaging protocol vaak samen gebruikt
- [[unified-namespace|Unified Namespace]] - Modern architecture met WebSocket subscriptions
- [[kpi-dashboard|KPI Dashboard]] - Primary use case voor WebSocket real-time updates
- [[real-time-monitoring|Real-time Monitoring]] - Core capability enabled door WebSocket
- [[manufacturing-execution-system|MES]] - Industrial systems met WebSocket interfaces
- [[single-page-application|SPA]] - Web architecture pattern using WebSockets

## Bronnen

- RFC 6455 - The WebSocket Protocol specification
- MDN WebSocket API documentation
- Socket.IO - Real-time bidirectional event-based communication
- SignalR - Microsoft real-time web functionality library
- WebSocket API - W3C specification
- IETF WebSocket extensions and standards
- Industrial IoT WebSocket implementation patterns

---
← Terug naar [[kaarten/industriële-communicatieprotocollen|Industriële communicatieprotocollen kaart]]
