---
title: Event broker
tags: [industrie, digitalisering, event-streaming-messaging-en-integratie]
---

*Event broker* is een centrale infrastructuurcomponent die verantwoordelijk is voor het routeren, distribueren en beheren van events tussen verschillende systemen in een event-gedreven architectuur.

## Definitie

Een event broker fungeert als intermediair tussen event-producenten (publishers) en event-consumenten (subscribers). Het ontvangt events van producenten, slaat ze tijdelijk op indien nodig, en levert ze aan alle geïnteresseerde consumenten volgens gedefinieerde routing-regels en subscription-patronen.

## Kernfunctionaliteiten

### Message Routing
- **Topic-based routing** naar geabonneerde consumenten
- **Content-based filtering** op basis van event-eigenschappen
- **Load balancing** tussen meerdere consumenten
- **Dead letter queues** voor mislukte deliveries

### Reliability & Persistence
- **Durable messaging** voor kritische events
- **Event replay** mogelijkheden
- **At-least-once** of **exactly-once** delivery garanties
- **High availability** en fault tolerance

### Schema Management
- **Event schema validation** en evolutie
- **Backward/forward compatibility** beheer
- **Serialization/deserialization** ondersteuning

## Technische Implementaties

### Apache Kafka
- **High-throughput** event streaming platform
- **Partitioning** voor schaalbaarheid
- **Replication** voor fault tolerance
- **Compacted topics** voor state management

### MQTT Broker
- **Lightweight** voor IoT scenarios
- **Quality of Service** levels (QoS 0,1,2)
- **Retained messages** voor latest-value semantiek
- **Hierarchical topics** met wildcards

### Message Queues
- **[[rabbitmq|RabbitMQ]]** voor complex routing
- **[[activemq|ActiveMQ]]** voor enterprise integratie
- **[[zeromq|ZeroMQ]]** voor high-performance scenarios

## Rol in Unified Namespace

Binnen een [[unified-namespace|Unified Namespace]] fungeert de event broker als:

1. **Central Data Hub**: Alle data stroomt door de broker
2. **Decoupling Layer**: Producenten en consumenten zijn onafhankelijk
3. **Routing Engine**: Events worden gerouteerd naar juiste consumenten
4. **State Management**: Huidige toestand wordt bijgehouden
5. **Integration Point**: Legacy systemen kunnen worden aangesloten

## Deployment Patronen

### Centralized Broker
- Één centrale broker voor hele organisatie
- Eenvoudig beheer maar mogelijke bottleneck
- Geschikt voor kleinere implementaties

### Federated Brokers
- Meerdere brokers per site/area
- Broker-to-broker replicatie
- Betere prestaties en lokale autonomie

### Edge-Cloud Hybrid
- Edge brokers voor lokale processing
- Cloud brokers voor enterprise-wide visibility
- Hierarchical data synchronization

## Configuratie & Tuning

### Performance Optimization
- **Partition strategy** voor parallelle processing
- **Batch sizing** voor throughput optimalisatie
- **Compression algorithms** voor bandbreedte efficiency
- **Memory vs. disk** storage configuratie

### Security & Governance
- **Authentication & authorization** mechanismen
- **TLS encryption** voor data in transit
- **Access control lists** per topic/queue
- **Audit logging** van alle activiteiten

## Toepassing

Event brokers worden gebruikt voor:
- **Real-time data streaming** in smart factories
- **Microservices communication** in cloud architecturen
- **IoT device integration** en telemetrie
- **Enterprise application integration**
- **Event sourcing** en CQRS patronen

## Gerelateerde begrippen

- [[unified-namespace|Unified Namespace (UNS)]]
- [[event-gedreven-architectuur|Event-gedreven architectuur]]
- [[message-queuing-telemetry-transport|MQTT]]
- [[apache-kafka|Apache Kafka]]
- [[publish-subscribe-messaging|Publish/Subscribe messaging]]
- [[message-broker|Message broker]]

## Bronnen

- Apache Kafka Documentation
- MQTT Specification v5.0
- Enterprise Integration Patterns
- Event-Driven Architecture Patterns

---
← Terug naar [[kaarten/event-streaming-messaging-en-integratie|Event streaming, messaging & integratie kaart]]