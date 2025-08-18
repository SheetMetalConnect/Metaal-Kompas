---
tags:
  - 'event-streaming-messaging-en-integratie'
  - '🧹draft'

title: Event‑gedreven architectuur (Event‑Driven Architecture, EDA)
---
*Event‑gedreven architectuur (Event‑Driven Architecture, EDA)* is een softwarearchitectuurpatroon waarbij systemen communiceren via het produceren en consumeren van events, in plaats van directe synchrone communicatie.

## Definitie

Event‑gedreven architectuur is gebaseerd op het principe dat systemen reageren op events (gebeurtenissen) die plaatsvinden binnen de organisatie. Deze events vertegenwoordigen significante veranderingen in toestand of belangrijke businessgebeurtenissen, en worden asynchroon gecommuniceerd naar alle geïnteresseerde systemen.

## Kernprincipes

### Event-First Design
- **Events als eerste-klas burgers** in de architectuur
- **Immutable event records** die historie bewaren
- **Event sourcing** voor volledige auditability
- **Schema evolution** voor backward compatibility

### Loose Coupling
- **[[ontkoppeling-van-applicaties|Ontkoppeling van applicaties]]** via events
- **Publisher-subscriber** patronen
- **Location transparency** van event consumers
- **Technology agnostic** communication

### Asynchrone Processing
- **Non-blocking** event publication
- **Eventual consistency** modellen
- **Buffering en retry** mechanisms
- **Backpressure handling** bij hoge volumes

## Rol in Unified Namespace

EDA vormt de technische foundation van een [[unified-namespace|Unified Namespace]]:

### Event-Based Data Flow
```
Production_Event → Event_Bus → Multiple_Consumers
Quality_Issue → UNS_Topic → [Analytics, Alerts, Reports]
Maintenance_Request → Event_Stream → [Planning, Inventory, Operators]
```

### Real-time Data Synchronization
- **State changes** gepubliceerd als events
- **Automatic subscribers** voor interested systems
- **Event replay** voor system recovery
- **Temporal consistency** across distributed systems

## Toepassing

### Smart Manufacturing
- **Production events** (start, stop, changeover)
- **Quality events** (measurements, deviations, approvals)
- **Maintenance events** (scheduled, breakdown, completion)
- **Inventory events** (consumption, replenishment, shortage)

### Digital Twin Integration
- **Physical events** → **Digital model updates**
- **Simulation results** → **Process optimization events**
- **Anomaly detection** → **Predictive maintenance events**
- **Performance metrics** → **Business intelligence events**

### Supply Chain Orchestration
- **Order events** triggering production workflows
- **Shipping events** updating inventory systems
- **Quality events** affecting supplier ratings
- **Demand events** optimizing production schedules

## Implementatietechnologieën

### Message Brokers
- **[[apache-kafka|Apache Kafka]]** voor high-throughput scenarios
- **[[message-queuing-telemetry-transport|MQTT]]** voor IoT event streams
- **[[rabbitmq|RabbitMQ]]** voor complex event routing
- **[[event-broker|Event brokers]]** voor reliable delivery

### Event Processing
- **[[complex-event-processing|Complex Event Processing (CEP)]]** voor pattern detection
- **[[stream-processing|Stream processing]]** voor real-time analytics
- **Event correlation** voor business intelligence
- **Temporal pattern** matching

## Gerelateerde begrippen

- [[unified-namespace|Unified Namespace (UNS)]]
- [[ontkoppeling-van-applicaties|Ontkoppeling van applicaties]]
- [[event-broker|Event broker]]
- [[apache-kafka|Apache Kafka]]
- [[message-queuing-telemetry-transport|MQTT]]
- [[complex-event-processing|Complex Event Processing (CEP)]]
- [[publish-subscribe-messaging|Publish/Subscribe messaging]]
- [[microservices-architectuur|Microservices architectuur]]

## Bronnen

- Martin Fowler - Event-Driven Architecture articles\n- AWS Well-Architected Framework - Event-driven architectures\n- Microsoft Azure Architecture Center - Event-driven architecture style\n- O'Reilly - Building Event-Driven Microservices\n- Apache Kafka documentation - Event streaming patterns\n- Enterprise Integration Patterns by Gregor Hohpe\n- Event Storming methodology by Alberto Brandolini

---
← Terug naar [[kaarten/event-streaming-messaging-en-integratie|Event streaming, messaging & integratie kaart]]
