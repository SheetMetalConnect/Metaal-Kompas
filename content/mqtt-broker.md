---
tags:
  - 'data-collectie-en-industrial-data-platforms'
  - '🧹draft'

title: MQTT‑broker
---
*MQTT‑broker* is een begrip binnen de industriële digitalisering en data‑collectie & industrial data platforms.

## Definitie

**MQTT-broker** is een centrale server die MQTT-berichten routeert tussen publishers en subscribers in IoT en industriële netwerken. Het beheert client-verbindingen, topic-subscriptions en message delivery voor efficiënte machine-to-machine communicatie.

## Kenmerken

- **Publish/Subscribe model**: Decoupled communication tussen producers en consumers
- **Topic-based routing**: Hierarchical topic structure voor selective message delivery
- **Quality of Service (QoS)**: Three levels (0,1,2) voor delivery guarantee requirements
- **Retained messages**: Last known value storage voor new subscribers
- **Last Will en Testament**: Automated notification bij client disconnections
- **Session persistence**: Client state maintenance voor reliable reconnections
- **Access control**: Authentication en authorization voor secure industrial networks
- **High availability**: Clustering en load balancing voor mission-critical applications

## Toepassing

**[[industrial-internet-of-things|IIoT]] data distribution:**
- **Sensor networks**: Temperature, pressure, vibration data van distributed sensors
- **Machine status**: Equipment availability, performance metrics, alarm notifications
- **Production metrics**: Cycle times, piece counts, quality measurements naar dashboards
- **Energy monitoring**: Power consumption data van production equipment

**Real-time control:**
- **Setpoint distribution**: Process parameters naar multiple control systems
- **Recipe management**: Production formulas naar manufacturing equipment
- **Coordination signals**: Synchronization tussen automated production cells
- **Safety notifications**: Emergency stop signals, zone lockout communications

**Mobile en remote access:**
- **Operator interfaces**: Smartphone/tablet connectivity voor floor operators
- **Remote monitoring**: Plant data access voor off-site engineering teams
- **Maintenance notifications**: Work order distributions, parts availability updates
- **Management dashboards**: KPI data streaming naar executive reporting systems

**Integration met IT systemen:**
- **[[manufacturing-execution-system|MES]] connectivity**: Production data naar planning systems
- **[[historian-database|Historian]] feeding**: Structured data archiving
- **Cloud platforms**: AWS IoT Core, Azure IoT Hub, Google Cloud IoT integration
- **[[unified-namespace|UNS]] architecture**: Modern industrial data distribution paradigm

## Gerelateerde begrippen

**Verwante termen:**
- [[message-queuing-telemetry-transport|MQTT protocol]] - Underlying communication standard
- [[publish-subscribe-messaging|Pub/Sub messaging]] - Architectural pattern implemented by MQTT
- [[iot-gateway|IoT gateway]] - Edge devices vaak integrating met MQTT brokers
- [[unified-namespace|Unified Namespace]] - Modern data architecture using MQTT

**Verwante concepten:**
- [[edge-computing|Edge computing]] - Local MQTT brokers voor distributed processing
- [[industrial-internet-of-things|Industrial IoT]] - Primary use case domain voor MQTT
- [[event-gedreven-architectuur|Event-gedreven architectuur]] - System design paradigm using MQTT
- [[realtime-monitoring|Realtime monitoring]] - Applications consuming MQTT data streams

## Bronnen

- Eclipse Mosquitto - Open source MQTT broker implementation
- HiveMQ - Enterprise MQTT platform voor industrial IoT
- AWS IoT Core - Managed MQTT service voor cloud applications
- Azure IoT Hub - Microsoft cloud MQTT en device management
- VerneMQ - Distributed MQTT broker voor high availability
- EMQ X - Massively scalable MQTT broker voor IoT applications
- Apache Kafka - Alternative event streaming platform
- MQTT v5.0 Specification - OASIS standard voor MQTT protocol
- IEC 61850 - Power systems communication using MQTT-like patterns
- OPC UA Pub/Sub - Industrial alternative voor MQTT-based communication

---
← Terug naar [[kaarten/data-collectie-en-industrial-data-platforms|Data‑collectie & Industrial Data Platforms kaart]]
