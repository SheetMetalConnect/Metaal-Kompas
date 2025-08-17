---
tags:
  - event-streaming-messaging-en-integratie
  - unified-namespace
  - live
title: Apache Kafka
---
## Definitie
Apache Kafka is een **open-source, gedistribueerd event streaming platform**. Het combineert messaging, opslag en stream processing in één systeem. Kafka is ontworpen om real-time datastromen met **hoge throughput**, **lage latency** en **betrouwbare opslag** mogelijk te maken.
## Bronnen

![](https://www.youtube.com/watch?v=9CrlA0Wasvk)

- **Wikipedia**: [Apache Kafka – Wikipedia](https://en.wikipedia.org/wiki/Apache_Kafka)
- **Officiële site**: [kafka.apache.org](https://kafka.apache.org)
## Geschiedenis
Kafka is ontwikkeld bij **LinkedIn** in 2010 door **Jay Kreps, Neha Narkhede en Jun Rao**. Hun uitdaging was de enorme hoeveelheid log- en eventdata op LinkedIn betrouwbaar en schaalbaar te verwerken. In 2011 werd Kafka open-source gemaakt en ondergebracht bij de **Apache Software Foundation**. De naam verwijst naar schrijver **Franz Kafka**, volgens Jay Kreps omdat Kafka “geoptimaliseerd moest worden voor schrijven”.
## Kernidee
Het kernidee van Kafka is een **gedistribueerd commit log**. Je kunt het vergelijken met een **dagboek** of **logboek** waarin iedere gebeurtenis chronologisch wordt toegevoegd.
- **Producers** schrijven gebeurtenissen in het logboek (topics en partities).
- **Consumers** lezen gebeurtenissen in hun eigen tempo, live of achteraf.
- Data verdwijnt niet direct na consumptie, maar blijft beschikbaar volgens retentiebeleid.

Dit maakt **replay, event sourcing, auditing en historische analyse** mogelijk – naast real-time verwerking.
## Analogie
Kafka werkt als een **spoorwegsysteem voor data**:
- **Treinen** (producers) vervoeren goederen (events).
- Het **spoor** (topics & partities) verdeelt de stromen.
- **Stations** (consumers) pikken op wat ze nodig hebben, op hun eigen tempo.
- Het **netwerk** (cluster) bewaart alle ritten, zodat je de reisgeschiedenis altijd kunt terughalen.

## Rol in Unified Namespace
In een industriële [[unified-namespace|Unified Namespace]] fungeert Kafka als **backbone**:
- IoT-devices of PLC’s sturen via MQTT/OPC-UA events naar Kafka.
- Enterprise- en cloudsystemen gebruiken dezelfde eventstroom.
- Kafka levert zowel **real-time dashboards en anomaly detection** als **historische analyses en ML-training**.
## Waarom Kafka?
Kafka is meer dan een message queue. Het is:
- **Schaalbaar**: miljoenen berichten per seconde.
- **Duurzaam**: opslag en replay ingebouwd.
- **Flexibel**: één event kan door meerdere systemen parallel gebruikt worden.
- **Integreerbaar**: via [[kafka-connect|Kafka Connect]] met data lakes, cloud en legacy systemen.

## Gerelateerde begrippen
- [[unified-namespace|Unified Namespace (UNS)]]
- [[event-gedreven-architectuur|Event-gedreven architectuur]]
- [[kafka-streams|Kafka Streams]]
- [[kafka-connect|Kafka Connect]]
- [[schema-registry|Schema Registry]]
- [[event-broker|Event broker]]
- [[stream-processing|Stream processing]]
- [[message-queuing-telemetry-transport|MQTT]]

---

← Terug naar [[kaarten/event-streaming-messaging-en-integratie|Event streaming, messaging & integratie kaart]]

