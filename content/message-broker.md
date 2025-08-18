---
tags:
  - 'event-streaming-messaging-en-integratie'
  - '🧹draft'

title: Message broker
---
*Message broker* is een begrip binnen de industriële digitalisering en event streaming, messaging & integratie.

## Definitie

**Message broker** is een middleware-component dat communicatie tussen gedistribueerde applicaties en services faciliteert door berichten te routeren, transformeren en persistent op te slaan. Het fungeert als intermediëre laag tussen bericht-producenten en -consumenten, waardoor systemen asynchroon kunnen communiceren zonder directe connecties.

## Kenmerken

- **Message routing**: Intelligent routing gebaseerd op content, headers of routing keys
- **Protocol translation**: Vertaling tussen verschillende messaging protocols
- **Persistent storage**: Durable message storage voor reliability
- **Load balancing**: Distribution van berichten over meerdere consumers
- **Transaction support**: ACID properties voor message processing
- **Dead letter handling**: Automatic handling van undeliverable messages
- **Clustering**: High availability through distributed broker deployments
- **Security integration**: Authentication, authorization, encryption voor secure messaging

## Toepassing

**Manufacturing system integration:**
- **[[manufacturing-execution-system|MES]] connectivity**: Production data exchange tussen floor systems
- **[[enterprise-resource-planning|ERP]] integration**: Business transactions naar production systems
- **Quality system coordination**: Inspection results, compliance data routing
- **Supply chain messaging**: Purchase orders, delivery notifications, inventory updates

**Real-time industrial communications:**
- **Alarm propagation**: Equipment alarms naar multiple monitoring systems
- **Production scheduling**: Work orders, priorities naar production lines
- **Maintenance coordination**: Work requests, parts availability tussen maintenance teams
- **Energy management**: Consumption data, optimization signals

**[[industrial-internet-of-things|IIoT]] architectures:**
- **Sensor data aggregation**: Collection van distributed sensor networks
- **Device management**: Configuration updates, firmware deployments
- **Edge-to-cloud communication**: Hierarchical data flow management
- **Mobile integration**: Operator notifications, management dashboards

**Event-driven workflows:**
- **Process orchestration**: Workflow coordination tussen automated systems
- **Business process automation**: Order-to-cash, procure-to-pay workflows
- **Exception handling**: Error recovery, escalation procedures
- **Compliance reporting**: Audit trail generation, regulatory submissions

## Gerelateerde begrippen

**Verwante termen:**
- [[publish-subscribe-messaging|Pub/Sub messaging]] - Messaging pattern implemented by brokers
- [[message-queuing|Message queuing]] - Point-to-point messaging via brokers
- [[event-gedreven-architectuur|Event-gedreven architectuur]] - Architectural pattern using message brokers
- [[apache-kafka|Apache Kafka]] - Specific message broker implementation

**Verwante concepten:**
- [[unified-namespace|Unified Namespace]] - Modern architecture often using message brokers
- [[service-oriented-architecture|SOA]] - Service integration via message brokers
- [[microservices|Microservices]] - Distributed services communicating via brokers
- [[enterprise-service-bus|ESB]] - Enterprise integration pattern using message brokers

## Bronnen

- Apache Kafka - Distributed streaming platform en message broker
- RabbitMQ - Feature-rich message broker voor enterprise applications
- Apache ActiveMQ - Java-based message broker met JMS support
- IBM MQ - Enterprise-grade message broker voor mission-critical applications
- Azure Service Bus - Cloud-based message broker service
- AWS Amazon MQ - Managed message broker service
- Google Cloud Pub/Sub - Serverless message broker voor real-time analytics
- Redis - In-memory data structure store vaak used as message broker
- Enterprise Integration Patterns - Design patterns voor message broker implementations
- JMS (Java Message Service) - API standard voor message broker integration

---
← Terug naar [[kaarten/event-streaming-messaging-en-integratie|Event streaming, messaging & integratie kaart]]
