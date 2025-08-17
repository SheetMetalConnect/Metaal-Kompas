---
tags:
  - softwaredeployment-en-architectuur
  - architectuur
  - unified-namespace
  - live
title: Unified Namespace (UNS)
---
# Unified Namespace (UNS)


![](https://www.youtube.com/watch?v=5cMqL9oUk_Y)

## Definitie
Een **Unified Namespace (UNS)** is een architectuurpatroon dat fungeert als **centrale informatielaag** in industriële digitalisering. Het is een gedeelde, hiërarchisch georganiseerde informatiestructuur die alle systemen, apparaten en processen verbindt. Het UNS is de **single source of truth** voor alle realtime data en events in de organisatie.

Volgens Walker Reynolds:
> Het UNS is de structuur van je bedrijf en alle events. Het is de plaats waar de huidige staat van het bedrijf leeft en de hub waarlangs alle “smart things” communiceren. Het vormt de architecturale basis van je Industry 4.0 en Digital Transformation.

Een UNS is dus geen product, maar een **architectuurprincipe**. Het beschrijft *hoe* data georganiseerd en gedeeld wordt, niet *welk systeem* dit doet.

## Kernkenmerken
- **Edge-driven**: data wordt zo dicht mogelijk bij de bron (PLC’s, sensoren, edge gateways) gepubliceerd.
- **Report by exception**: systemen sturen enkel data wanneer er een wijziging plaatsvindt.
- **Open architecture**: gebaseerd op open standaarden zoals MQTT, Kafka en OPC UA.
- **Hiërarchische namespacestructuur**: meestal afgestemd op ISA-95 bedrijfsstructuren.
- **Omnipresent & omniscient fabric**: het UNS weerspiegelt continu de actuele staat van de onderneming.
- **Losse koppeling**: producenten en consumenten van data werken onafhankelijk, wat integratie eenvoudiger en schaalbaarder maakt.

## Architectuurprincipes
1. **Single Source of Truth** – alle data heeft één eenduidige bron.
2. **Event-first design** – elke wijziging in de fabriek wordt vastgelegd en gedeeld als event.
3. **Semantic consistency** – uniforme naamgeving en betekenis van datapunten.
4. **Contextual information** – events worden verrijkt met metadata en context.
5. **Full stack** – het UNS dekt de hele keten: van sensoren en machines tot ERP en cloud.

## Technische Implementatie
Een UNS kan met verschillende technologieën gerealiseerd worden:
- **[[message-queuing-telemetry-transport|MQTT]]**: lightweight pub/sub protocol, vaak met Sparkplug B.
- **[[apache-kafka|Apache Kafka]]**: backbone voor high-throughput en persistente opslag.
- **[[opc-ua-pub-sub|OPC UA Pub/Sub]]**: rijk semantisch model voor industriële data.
- **Event-gedreven microservices**: applicaties die reageren op UNS-events.

Belangrijk: de *techniek* (MQTT, Kafka) is slechts de transportlaag. Het UNS is de **semantische laag** erbovenop, die structuur en betekenis geeft.

## Praktische Voorbeelden
- **Labelprinters**: vaak stuurt ERP labels naar de shopfloor. In een UNS wordt het omgekeerd: de shopfloor publiceert events ("label nodig"), ERP consumeert en genereert labels. Iedereen kijkt naar hetzelfde event.
- **Digital Twin**: het UNS is de eventfeed waarop digitale tweelingen draaien en up-to-date blijven.
- **Realtime dashboards**: KPI’s en OEE direct zichtbaar door UNS-events.
- **Supply chain visibility**: orderstatus en traceerbaarheid in één namespace beschikbaar voor alle betrokken systemen.

## Voordelen
- Vermijdt complexe point-to-point koppelingen.
- Zorgt voor realtime zichtbaarheid in de hele organisatie.
- Versnelt innovatie doordat data eenvoudig beschikbaar is.
- Schaalbaar, omdat nieuwe systemen alleen hoeven te abonneren op bestaande events.
- Contextualiseert data: gebeurtenissen zijn niet enkel waarden, maar rijk aan betekenis.

## Synthese definitie (Walker Reynolds)
> De **Unified Namespace (UNS)** is een **edge-driven, open, event-gedreven architectuur** die fungeert als **full-stack single source of truth**. Het representeert de actuele staat van de onderneming en al haar events, georganiseerd volgens de bedrijfsstructuur. Het UNS is de **communicatiehub** waarlangs alle smart devices, applicaties en systemen verbonden zijn.---

## Gerelateerde begrippen
- [[single-source-of-truth|Single Source of Truth (SSOT)]]
- [[event-gedreven-architectuur|Event-gedreven architectuur]]
- [[topic-namespace|Topic namespace]]
- [[virtual-factory-digital-twin-digitale-tweeling|Digital Twin]]
- [[digital-thread|Digital Thread]]
- [[isa-95-model|ISA-95 model]]

---

← Terug naar [[kaarten/softwaredeployment-en-architectuur|Softwaredeployment & Architectuur kaart]]

