---
tags:
  - 'event-streaming-messaging-en-integratie'
  - '🧹draft'

title: Publish‑/Subscribe‑messaging (pub/sub)
---
*Publish‑/Subscribe‑messaging (pub/sub)* is een begrip binnen de industriële digitalisering en event streaming, messaging & integratie.

## Definitie

**Publish/Subscribe-messaging (Pub/Sub)** is een asynchronous messaging patroon waarbij berichten-producenten (publishers) berichten versturen zonder directe kennis van wie de berichten zal ontvangen. Consumenten (subscribers) registreren interesse in bepaalde bericht-types of topics en ontvangen relevante berichten automatisch. Dit decoupling-mechanisme is essentieel voor moderne industriële event-driven architectures.

## Kenmerken

- **Loose coupling**: Publishers en subscribers zijn onafhankelijk van elkaar
- **Topic-based routing**: Berichten worden gecategoriseerd per onderwerp of event-type
- **Many-to-many communication**: Meerdere publishers kunnen naar meerdere subscribers
- **Asynchronous delivery**: Non-blocking message transmission
- **Dynamic subscription**: Runtime subscription changes zonder system restart
- **Message persistence**: Durable subscriptions voor offline subscribers
- **Quality of Service**: Delivery guarantees (at-most-once, at-least-once, exactly-once)
- **Content filtering**: Advanced message filtering op message properties

## Toepassing

**Manufacturing event distribution:**
- **Production events**: Machine status changes, job completions, quality alerts
- **Alarm propagation**: Equipment alarms naar multiple monitoring systems
- **KPI broadcasting**: Real-time performance metrics naar dashboards en reports
- **Inventory updates**: Stock level changes naar planning en procurement systems

**[[unified-namespace|Unified Namespace]] architectures:**
- **Plant-wide data sharing**: Sensor data distribution naar analytics en control systems
- **Cross-system integration**: [[manufacturing-execution-system|MES]], [[enterprise-resource-planning|ERP]], quality systems interconnection
- **Mobile notifications**: Production updates naar operator smartphones en tablets
- **Cloud integration**: Factory data streaming naar cloud analytics platforms

**Real-time coordination:**
- **Process synchronization**: Coordination tussen automated production cells
- **Resource allocation**: Dynamic resource assignment notifications
- **Safety systems**: Emergency notifications, zone lockouts, personnel alerts
- **Maintenance scheduling**: Predictive maintenance triggers, work order assignments

**[[industrial-internet-of-things|IIoT]] applications:**
- **Sensor networks**: Distributed sensor data broadcasting
- **Device management**: Configuration updates, firmware notifications
- **Analytics pipeline**: Data streaming naar machine learning platforms
- **Supply chain visibility**: Track & trace events, delivery notifications

## Gerelateerde begrippen

**Verwante termen:**
- [[message-broker|Message broker]] - Infrastructure supporting pub/sub messaging
- [[event-gedreven-architectuur|Event-gedreven architectuur]] - Architectural pattern using pub/sub
- [[apache-kafka|Apache Kafka]] - Distributed pub/sub platform voor enterprise applications
- [[mqtt-broker|MQTT broker]] - Pub/sub broker voor IoT en industrial applications

**Verwante concepten:**
- [[unified-namespace|Unified Namespace]] - Modern industrial architecture using pub/sub
- [[event-streaming|Event streaming]] - Real-time event processing paradigm
- [[message-queuing|Message queuing]] - Alternative messaging pattern voor point-to-point communication
- [[microservices|Microservices]] - Service architecture pattern often using pub/sub

## Bronnen

- Apache Kafka - Distributed streaming platform met pub/sub capabilities
- MQTT v5.0 - IoT messaging protocol met advanced pub/sub features
- Apache Pulsar - Cloud-native pub/sub messaging system
- Google Cloud Pub/Sub - Managed messaging service voor event-driven systems
- AWS Amazon SNS - Simple Notification Service voor pub/sub messaging
- Azure Service Bus - Enterprise messaging met pub/sub support
- RabbitMQ - Message broker met flexible pub/sub routing
- Redis Pub/Sub - In-memory pub/sub voor high-speed messaging
- Enterprise Integration Patterns - Design patterns voor pub/sub implementations
- Reactive Manifesto - Principles for responsive, resilient pub/sub systems

---
← Terug naar [[kaarten/event-streaming-messaging-en-integratie|Event streaming, messaging & integratie kaart]]
