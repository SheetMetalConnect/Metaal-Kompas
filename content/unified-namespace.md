---
title: Unified Namespace (UNS)
tags: [industrie, digitalisering, softwaredeployment-en-architectuur, architectuur]
---



*Unified Namespace (UNS)* is een architectuurpatroon dat dient als centrale verbindende laag tussen alle systemen, apparaten en processen binnen de industriële digitalisering.

## Definitie

Een Unified Namespace is een gedeelde, hiërarchische informatiestructuur die real-time toegang biedt tot alle operationele data in een organisatie. Het fungeert als een **single source of truth** waar alle systemen hun data publiceren en consumeren via een gemeenschappelijke namespacestructuur.

## Kenmerken

- **Gedeelde naamgevingsconventie** voor alle data-elementen
- **Hiërarchische structuur** gebaseerd op industriële standaarden (zoals ISA-95)
- **Real-time data-uitwisseling** tussen alle systemen
- **Event-gedreven architectuur** als onderliggende technologie
- **Ontkoppeling van producenten en consumenten** van data
- **Semantische interoperabiliteit** tussen verschillende systemen

## Architectuurprincipes

Het UNS volgt belangrijke architectuurprincipes:

1. **Single Source of Truth**: Alle data heeft één definitieve bron
2. **Event-First Design**: Data-wijzigingen worden als events gepubliceerd
3. **Semantic Consistency**: Eenduidige betekenis van data-elementen
4. **Contextual Information**: Data wordt verrijkt met metadata en context

## Technische Implementatie

UNS wordt typisch geïmplementeerd met:
- **[[message-queuing-telemetry-transport|MQTT]]** als publish/subscribe protocol
- **[[apache-kafka|Apache Kafka]]** voor high-throughput scenarios
- **[[opc-ua-pub-sub|OPC UA Pub/Sub]]** voor industriële semantiek
- **Event-gedreven microservices** architectuur

## Toepassing

UNS wordt toegepast in:
- **Smart Factory** implementaties
- **Industrie 4.0/5.0** transformaties
- **Digital Thread** en **[[digitale-tweeling|Digital Twin]]** scenario's
- **Real-time analytics** en **[[predictive-maintenance|Predictive Maintenance]]**
- **Supply chain visibility** en traceerbaarheid

## Voordelen

- **Eliminatie van point-to-point integraties**
- **Verhoogde datavis ibility** door de hele organisatie
- **Versnelde innovatie** door eenvoudige toegang tot data
- **Schaalbaarheid** door losse koppeling van systemen
- **Contextualisatie** van industriële data

## Gerelateerde begrippen

- [[single-source-of-truth|Single Source of Truth (SSOT)]]
- [[event-gedreven-architectuur|Event-gedreven architectuur]]
- [[topic-namespace|Topic namespace]]
- [[contextualisatie-van-data|Contextualisatie van data]]
- [[data-democratisering|Data democratisering]]
- [[semantisch-datamodel|Semantisch datamodel]]
- [[digital-thread|Digital Thread]]
- [[isa-95-model|ISA-95 model]]

## Bronnen

- ISA-95 Enterprise-Control System Integration
- IEC 62264 Enterprise-control system integration
- MQTT Sparkplug Specification
- Industry 4.0 Reference Architecture Model (RAMI 4.0)

---
← Terug naar [[kaarten/softwaredeployment-en-architectuur|Softwaredeployment & Architectuur kaart]]