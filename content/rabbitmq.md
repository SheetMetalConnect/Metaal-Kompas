---
tags:
  - 'event-streaming-messaging-en-integratie'
  - '🧹draft'

title: RabbitMQ
---
*RabbitMQ* is een begrip binnen de industriële digitalisering en event streaming, messaging & integratie.

## Definitie

**RabbitMQ** is een open-source message broker die AMQP implementeert voor betrouwbare asynchrone communicatie tussen applicaties. Het biedt geavanceerde routing, clustering en high availability voor enterprise messaging requirements.

## Kenmerken

- **AMQP protocol**: Advanced Message Queuing Protocol voor standards-based messaging
- **Flexible routing**: Exchange types supporting various message routing patterns
- **Message durability**: Persistent messages surviving broker restarts
- **High availability**: Clustering en mirrored queues voor fault tolerance
- **Management interface**: Web-based console voor monitoring en administration
- **Multiple protocols**: Support voor AMQP, MQTT, STOMP, HTTP protocols
- **Plugin architecture**: Extensible functionality through community plugins
- **Performance monitoring**: Detailed metrics en alerting capabilities
- **Security features**: Authentication, authorization, TLS encryption support

## Toepassing

**Manufacturing integration:**
- **MES communication**: Manufacturing Execution System integration with ERP systems
- **Production events**: Real-time notifications van production line status changes
- **Quality alerts**: Immediate messaging when quality thresholds exceeded
- **Maintenance requests**: Work order generation based on equipment condition

**IoT data processing:**
- **Sensor data routing**: Message routing from industrial sensors to analytics systems
- **Device commands**: Reliable delivery van control commands to field devices
- **Alarm management**: Critical alarm distribution to operations teams
- **Data transformation**: Message format conversion between different systems

**System integration:**
- **ERP integration**: Order processing messages between business systems
- **Supplier communication**: EDI message exchange with supply chain partners
- **Customer notifications**: Status updates voor order en delivery tracking
- **Financial reconciliation**: Automated accounting transaction processing

**Microservices architecture:**
- **Service communication**: Asynchronous messaging between microservices
- **Event-driven workflows**: Business process orchestration through events
- **Task queuing**: Background job processing voor time-intensive operations
- **Load distribution**: Work distribution across multiple service instances

**Reliability features:**
- **Message acknowledgments**: Guaranteed delivery through consumer confirmations
- **Dead letter queues**: Handling van unprocessable messages
- **Queue mirroring**: High availability through redundant message storage
- **Persistent storage**: Message durability across system failures

**Enterprise benefits:**
- **Decoupled systems**: Loose coupling between application components
- **Scalable architecture**: Horizontal scaling supporting growing message volumes
- **Operational visibility**: Comprehensive monitoring van message flows
- **Standards compliance**: AMQP compatibility ensuring vendor interoperability

## Gerelateerde begrippen

**Verwante termen:**
- [[advanced-message-queuing-protocol|AMQP]] - Messaging protocol implemented by RabbitMQ
- [[activemq|ActiveMQ]] - Alternative message broker with similar capabilities
- [[apache-kafka|Apache Kafka]] - Event streaming platform voor high-throughput scenarios
- [[message-queuing|Message queuing]] - Messaging pattern category including RabbitMQ

**Verwante concepten:**
- [[event-driven-architecture|EDA]] - Architecture pattern supported by RabbitMQ
- [[microservices-architecture|Microservices]] - Architecture style benefiting from RabbitMQ
- [[enterprise-integration|Enterprise integration]] - Integration approach using message brokers
- [[publish-subscribe|Pub/Sub]] - Messaging pattern supported by RabbitMQ exchanges

## Bronnen

- VMware Tanzu RabbitMQ - Commercial distribution with enterprise support
- CloudAMQP - Hosted RabbitMQ service voor cloud deployments
- RabbitMQ Documentation - Official guides en tutorials
- Spring AMQP - Java framework for RabbitMQ integration
- Celery - Python task queue using RabbitMQ as message broker
- Bunny - Ruby client library for RabbitMQ
- RabbitMQ Management - Web-based administration tool

---
← Terug naar [[kaarten/event-streaming-messaging-en-integratie|Event streaming, messaging & integratie kaart]]
