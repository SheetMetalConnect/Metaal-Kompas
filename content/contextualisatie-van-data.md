title: Contextualisatie van data
tags: [industrie, digitalisering, data-analyse-en-business-intelligence]
---

# Contextualisatie van data

*Contextualisatie van data* is het proces waarbij ruwe industriële data wordt verrijkt met betekenisvolle metadata, relaties en semantische informatie om de data begrijpelijk en bruikbaar te maken voor analyse en besluitvorming.

## Definitie

Contextualisatie transformeert ruwe sensor- en machinedata naar betekenisvolle informatie door het toevoegen van context zoals tijdsinformatie, locatiedata, procesparameters, kwaliteitsindicatoren en bedrijfslogica. Het maakt data interpreteerbaar binnen de specifieke industriële omgeving en bedrijfsprocessen.

## Contextlagen

### Technische Context
- **Asset identificatie**: Welke machine, lijn of proces
- **Sensor specificaties**: Type, bereik, nauwkeurigheid
- **Eenheden en schaling**: Conversie naar standaardeenheden
- **Kwaliteitsmetadata**: Databetrouwbaarheid en status

### Operationele Context
- **Productiecontext**: Welk product, recept, batch
- **Proces-state**: Operationeel, setup, onderhoud
- **Operator informatie**: Wie, wanneer, waarom
- **Shift en planning**: Productieshift, geplande activiteiten

### Bedrijfscontext
- **KPI-relaties**: Koppeling aan bedrijfsdoelstellingen
- **Financiële impact**: Kosten, opbrengsten, verliezen
- **Kwaliteitsstandaarden**: Specificaties en toleranties
- **Compliance vereisten**: Regulatoire en audit-trails

## Implementatie

### Semantic Data Models
```json
{
  "timestamp": "2024-08-17T14:30:00Z",
  "assetId": "Lijn_A_Oven_001",
  "parameter": "temperatuur_kern",
  "value": 485.2,
  "unit": "celsius",
  "quality": "good",
  "recipe": "Staal_Grade_A",
  "batch": "20240817-001",
  "operator": "J.Janssen",
  "shift": "Middag",
  "context": {
    "process_state": "productie",
    "target_temp": 480.0,
    "tolerance": "±10°C",
    "critical_parameter": true
  }
}
```

### Hierarchical Context
Binnen een [[unified-namespace|Unified Namespace]]:
```
ACME/Rotterdam/Lijn_A/Oven_001/
├── Properties/
│   ├── Asset_Type: "Industrial_Oven"
│   ├── Manufacturer: "ThermalSystems_BV"
│   └── Installation_Date: "2023-03-15"
├── Configuration/
│   ├── Max_Temperature: 550
│   └── Heating_Elements: 6
└── Telemetry/
    ├── Temperature/
    │   ├── Value: 485.2
    │   ├── Unit: "Celsius"
    │   ├── Quality: "Good"
    │   └── Alarm_Limits: {high: 500, low: 400}
    └── Status/
        ├── State: "Running"
        └── Last_Maintenance: "2024-07-15"
```

## Contextualisatie-methoden

### Automatische Verrijking
- **Time-series analysis** voor trend context
- **Statistical normalization** tegen historische data
- **Pattern recognition** voor operationele states
- **Anomaly detection** voor kwaliteitsindicatoren

### Rule-based Context
- **Business rules** voor procesgrenzen
- **Conditional logic** voor state-afhankelijke context
- **Hierarchical inheritance** van asset-eigenschappen
- **Template-based enrichment** voor standaardprocessen

### Machine Learning Context
- **Predictive models** voor toekomstige context
- **Classification algorithms** voor state-herkenning
- **Clustering techniques** voor proces-categorisatie
- **Feature engineering** voor relevante contextvariabelen

## Toepassing

### Digital Twin Enhancement
- **Real-time model synchronization**
- **Physics-based context validation**
- **Simulation result correlation**
- **Predictive scenario modeling**

### Operational Intelligence
- **Root cause analysis** met volledige context
- **Performance benchmarking** tussen vergelijkbare assets
- **Efficiency optimization** gebaseerd op contextuele patronen
- **Predictive maintenance** scheduling

### Compliance & Traceability
- **Batch record completion** met alle relevante context
- **Quality documentation** met procescontext
- **Audit trail generation** met tijdslijn-context
- **Regulatory reporting** met gecontextualiseerde data

## Uitdagingen

### Data Volume & Velocity
- **Real-time processing** van contextuele verrijking
- **Storage optimization** van verrijkte datasets
- **Query performance** op gecontextualiseerde data
- **Bandwidth management** voor edge contextualisatie

### Complexity Management
- **Context schema evolution** en versioning
- **Multi-dimensional context** correlaties
- **Conflicting context** resolution
- **Context validation** en consistency

## Gerelateerde begrippen

- [[unified-namespace|Unified Namespace (UNS)]]
- [[semantisch-datamodel|Semantisch datamodel]]
- [[digitale-tweeling|Digitale tweeling (digital twin)]]
- [[metadata-beheer|Metadata-beheer]]
- [[data-herkomst|Data-herkomst (data lineage)]]
- [[isa-95-model|ISA-95 model]]

## Bronnen

- ISA-95 Enterprise-Control System Integration
- IEC 62264 Enterprise-control system integration
- Semantic Web Technologies for Industry 4.0
- Industrial Data Space Reference Architecture

---
← Terug naar [[kaarten/data-analyse-en-business-intelligence|Data, Analyse & Business Intelligence kaart]]