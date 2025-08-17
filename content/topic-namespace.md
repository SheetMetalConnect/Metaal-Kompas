title: Topic namespace
tags: [industrie, digitalisering, industriële-communicatieprotocollen, architectuur]
---

# Topic namespace

*Topic namespace* is de hiërarchische naamgevingsstructuur die wordt gebruikt om data-onderwerpen te organiseren binnen messaging-systemen en Unified Namespace architecturen.

## Definitie

Een topic namespace definieert de systematische manier waarop topics (data-onderwerpen) worden benoemd en georganiseerd in een hiërarchische structuur. Het vormt de ruggengraat van een [[unified-namespace|Unified Namespace]] door een consistente, logische organisatie van alle data-elementen te bieden.

## Structuur

Een typische industriële topic namespace volgt deze hiërarchie:

```
Enterprise/
├── Site/
│   ├── Area/
│   │   ├── Line/
│   │   │   ├── Cell/
│   │   │   │   ├── Unit/
│   │   │   │   │   └── Parameter
```

### Voorbeelden

**Volgens ISA-95 model:**
- `ACME/Fabriek_Amsterdam/Productielijn_A/Oven_1/Temperatuur/Actueel`
- `ACME/Fabriek_Amsterdam/Productielijn_A/Oven_1/Status/Operationeel`

**Met functionele indeling:**
- `Company/Site/Production/Asset/Data_Type/Metric`
- `VanEnkhuizen/Rotterdam/Lijn1/Robot01/Position/X_Coordinate`

## Naamgevingsconventies

**Best practices:**
- **Consistente hiërarchie** gebaseerd op ISA-95 of bedrijfsspecifieke structuur
- **Duidelijke scheidingstekens** (meestal `/` of `.`)
- **Significante namen** die context bieden
- **Vermijd spaties** en speciale karakters
- **Case-sensitive** overwegingen

**Metadata-integratie:**
- Timestamp informatie
- Kwaliteitsindicatoren
- Data-type specificaties
- Eenheid van meting

## Implementatie

### MQTT Sparkplug
```
spBv1.0/group_id/DDATA/edge_node_id/device_id
spBv1.0/ACME/DDATA/ProductieLijn_A/Oven_1
```

### Apache Kafka
```
industrial.production.line1.oven1.temperature
industrial.quality.line1.measurements.oee
```

### OPC UA
```
ns=2;s=ACME.Fabriek_Amsterdam.Lijn_A.Oven_1.Temperatuur
```

## Toepassing

Topic namespaces worden gebruikt voor:
- **Data-organisatie** in [[message-queuing-telemetry-transport|MQTT]] brokers
- **Event-routing** in [[apache-kafka|Apache Kafka]] clusters
- **Subscription management** voor data-consumenten
- **Security-policies** en toegangsbeheer
- **Data discovery** en catalogisering

## Voordelen

- **Gestructureerde data-organisatie**
- **Intuïtieve navigatie** door data-landschap
- **Schaalbaarheid** bij groeiende systemen
- **Flexibele subscriptions** (wildcards)
- **Semantische consistentie**

## Uitdagingen

- **Vooraf planning** vereist
- **Governance** van naamgevingsstandaarden
- **Migratie** van bestaande systemen
- **Performance** bij zeer diepe hiërarchieën

## Gerelateerde begrippen

- [[unified-namespace|Unified Namespace (UNS)]]
- [[message-queuing-telemetry-transport|MQTT]]
- [[apache-kafka|Apache Kafka]]
- [[isa-95-model|ISA-95 model]]
- [[semantisch-datamodel|Semantisch datamodel]]
- [[contextualisatie-van-data|Contextualisatie van data]]

## Bronnen

- MQTT Sparkplug Specification B
- ISA-95 Enterprise-Control System Integration
- Apache Kafka Topic Naming Conventions
- OPC UA Information Modeling

---
← Terug naar [[kaarten/industriële-communicatieprotocollen|Industriële communicatieprotocollen kaart]]