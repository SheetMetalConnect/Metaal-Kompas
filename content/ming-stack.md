---
title: MING-stack
tags: [industrie, digitalisering, softwaredeployment-en-architectuur]
---

*MING* is een acroniem voor een technologie-stack die vaak wordt gebruikt voor IoT-toepassingen.

## Definitie

MING staat voor de combinatie van de volgende technologieën:

- **M**osquitto (MQTT-broker) - Alternatief: [[hivemq|HiveMQ]]
- **I**nfluxDB (Time-series database) - Alternatief: [[tijdreeksdatabase|TimescaleDB]]
- **N**ode-RED (Back-end) - Alternatief: [[n8n|N8N]]
- **G**rafana (Front-end) - Vaak ondersteund door [[appsmith|Appsmith]]

Deze stack wordt doorgaans geïmplementeerd via Docker Compose en is een populaire keuze voor het bouwen van IoT-oplossingen, zoals de [[united-manufacturing-hub|United Manufacturing Hub (UMH)]].

## Componenten

- **MQTT (Mosquitto/HiveMQ):** Een lichtgewicht berichtenprotocol voor communicatie tussen apparaten met beperkte middelen.
- **InfluxDB:** Een tijdreeksdatabase die is geoptimaliseerd voor het opslaan en ophalen van grote hoeveelheden data over tijd.
- **Node-RED:** Een visuele programmeertool voor het bouwen van dataflows zonder complexe code.
- **Grafana:** Een open-source platform voor het maken van aangepaste interactieve dashboards en visualisaties.

## Gerelateerde begrippen

- [[lamp-stack|LAMP-stack]]
- [[united-manufacturing-hub|United Manufacturing Hub (UMH)]]
- [[message-queuing-telemetry-transport|MQTT]]
- [[tijdreeksdatabase|Tijdreeksdatabase]]

---
← Terug naar [[kaarten/softwaredeployment-en-architectuur|Softwaredeployment & Architectuur kaart]]
