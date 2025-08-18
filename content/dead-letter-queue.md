---
tags:
  - 'event-streaming-messaging-en-integratie'
  - '🧹draft'

title: Dead‑letter queue (DLQ)
---
*Dead‑letter queue (DLQ)* is een begrip binnen de industriële digitalisering en event streaming, messaging & integratie.

## Definitie

**Dead letter queue (DLQ)** is een speciale queue waarin berichten worden opgeslagen die niet succesvol verwerkt of afgeleverd konden worden na een bepaald aantal pogingen. Het fungeert als een 'vangnet' voor problematische berichten, waardoor deze niet verloren gaan en later onderzocht en eventueel opnieuw verwerkt kunnen worden.

## Kenmerken

- **Error preservation**: Opslag van berichten die processing failures veroorzaken
- **Retry exhaustion handling**: Automatic routing na max retry attempts
- **Message metadata**: Original error information, timestamp, retry count preservation
- **Manual intervention**: Human review en correction capabilities
- **Replay mechanisms**: Ability to reprocess corrected messages
- **Alert generation**: Notifications bij DLQ message accumulation
- **Monitoring dashboards**: Visibility into failure patterns en frequencies
- **Configurable policies**: Customizable rules voor DLQ routing en retention

## Toepassing

**Production system reliability:**
- **[[manufacturing-execution-system|MES]] integration failures**: Orders with invalid SKUs, missing materials
- **Quality data errors**: Inspection results met incomplete measurements
- **Inventory updates**: Stock transactions met invalid locations or quantities
- **Production scheduling**: Jobs met conflicting resource requirements

**[[industrial-internet-of-things|IIoT]] data handling:**
- **Sensor data validation**: Readings outside physically possible ranges
- **Device communication**: Messages van offline or malfunctioning devices
- **Protocol errors**: Malformed MQTT, OPC UA messages
- **Authentication failures**: Messages van unauthorized devices

**System integration issues:**
- **Format incompatibilities**: Data transformations that fail validation
- **Downstream system outages**: Messages destined voor unavailable systems
- **Business rule violations**: Transactions violating configured constraints
- **Database constraints**: Records violating referential integrity

**Error analysis en improvement:**
- **Pattern identification**: Common failure modes requiring system improvements
- **Root cause analysis**: Tracing systemic issues through accumulated failures
- **Process refinement**: Using DLQ data voor process optimization
- **System monitoring**: Health indicators gebaseerd op DLQ metrics

## Gerelateerde begrippen

**Verwante termen:**
- [[message-queuing|Message queuing]] - Parent concept waar DLQ een onderdeel van is
- [[message-broker|Message broker]] - Infrastructure providing DLQ functionality
- [[error-handling|Foutafhandeling]] - Broader error management strategy
- [[retry-mechanisms|Retry mechanismen]] - Processing attempts before DLQ routing

**Verwante concepten:**
- [[fault-tolerance|Fouttolerantie]] - System resilience enhanced by DLQ patterns
- [[observeerbaarheid|Observability]] - Monitoring en troubleshooting using DLQ data
- [[event-gedreven-architectuur|Event-gedreven architectuur]] - Architecture pattern often including DLQ
- [[system-reliability|Systeembetrouwbaarheid]] - Overall system quality supported by DLQ

## Bronnen

- AWS SQS Dead Letter Queues - Amazon cloud DLQ implementation
- Azure Service Bus Dead Letter Queues - Microsoft cloud messaging DLQ
- RabbitMQ DLX (Dead Letter Exchange) - Open source message broker DLQ
- Apache Kafka Dead Letter Topics - Distributed streaming platform error handling
- IBM MQ Dead Letter Queues - Enterprise message queuing DLQ features
- Google Cloud Pub/Sub Dead Letter Topics - Google cloud messaging DLQ
- Spring Boot Dead Letter Queue patterns - Java framework DLQ implementations
- Enterprise Integration Patterns - Design patterns including DLQ strategies
- Microservices error handling - DLQ patterns in distributed systems
- Site Reliability Engineering (SRE) - Error budget management using DLQ metrics

---
← Terug naar [[kaarten/event-streaming-messaging-en-integratie|Event streaming, messaging & integratie kaart]]
