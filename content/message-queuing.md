---
tags:
  - 'event-streaming-messaging-en-integratie'
  - '🧹draft'

title: Message‑queuing
---
*Message‑queuing* is een begrip binnen de industriële digitalisering en event streaming, messaging & integratie.

## Definitie

**Message queuing** is een asynchrone communicatie-methode waarbij berichten worden opgeslagen in een queue (wachtrij) tussen zender en ontvanger. Het stelt systemen in staat om betrouwbaar te communiceren zonder dat beide systemen tegelijkertijd actief hoeven te zijn, waardoor loose coupling en verbeterde systeemresilience mogelijk wordt.

## Kenmerken

- **FIFO message delivery**: First-in-first-out message processing order
- **Persistent storage**: Durable message storage voor reliability bij system failures
- **Transactional processing**: ACID properties voor guaranteed message delivery
- **Load leveling**: Smoothing van variable workloads via queue buffering
- **Priority queuing**: High-priority messages kunnen normal flow bypassen
- **Dead letter queues**: Automatic handling van undeliverable messages
- **Message expiration**: Time-based message lifecycle management
- **Acknowledgment mechanisms**: Delivery confirmation tussen sender en receiver

## Toepassing

**Production workflow management:**
- **Job scheduling**: Production orders queued voor processing by available resources
- **Work order distribution**: Maintenance tasks distributed naar appropriate technicians
- **Material requests**: Inventory requests processed in order of priority
- **Quality inspections**: Parts queued voor inspection na production completion

**System integration:**
- **[[manufacturing-execution-system|MES]]-[[enterprise-resource-planning|ERP]] integration**: Business transactions queued voor reliable processing
- **Batch processing**: Large data transfers broken down into manageable queue items
- **Report generation**: Report requests queued voor background processing
- **Data synchronization**: Database updates queued voor consistent processing

**Real-time process coordination:**
- **Recipe management**: Production recipes queued naar appropriate equipment
- **Resource allocation**: Equipment assignments processed through priority queues
- **Safety notifications**: Emergency procedures queued voor immediate execution
- **Alarm processing**: Equipment alarms queued voor systematic handling

**[[industrial-internet-of-things|IIoT]] data processing:**
- **Sensor data ingestion**: High-volume sensor readings queued voor processing
- **Device commands**: Control commands queued voor reliable delivery
- **Firmware updates**: Update packages queued voor systematic device deployment
- **Configuration changes**: Parameter changes queued voor controlled rollout

## Gerelateerde begrippen

**Verwante termen:**
- [[message-broker|Message broker]] - Infrastructure providing queuing capabilities
- [[publish-subscribe-messaging|Pub/Sub messaging]] - Alternative messaging pattern
- [[dead-letter-queue|Dead letter queue]] - Special queue type voor failed messages
- [[databuffering|Data buffering]] - Related concept voor data storage en flow control

**Verwante concepten:**
- [[event-gedreven-architectuur|Event-gedreven architectuur]] - Architecture pattern often using message queues
- [[workflow-automatisering|Workflow automatisering]] - Process automation using queued tasks
- [[load-balancing|Load balancing]] - Traffic distribution complemented by queuing
- [[reliable-messaging|Betrouwbare berichten]] - Quality of service provided by queuing

## Bronnen

- IBM MQ - Enterprise message queuing platform
- Microsoft MSMQ - Windows message queuing service
- RabbitMQ - Feature-rich open source message broker met queuing
- Apache ActiveMQ - Java-based message queuing solution
- AWS SQS (Simple Queue Service) - Cloud-based message queuing
- Azure Service Bus Queues - Microsoft cloud queuing service
- Google Cloud Tasks - Distributed task queue service
- Redis List - In-memory data structure used voor simple queuing
- JMS (Java Message Service) - Standard API voor message queuing
- AMQP (Advanced Message Queuing Protocol) - Open standard voor message queuing

---
← Terug naar [[kaarten/event-streaming-messaging-en-integratie|Event streaming, messaging & integratie kaart]]
