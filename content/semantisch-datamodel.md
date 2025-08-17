---
title: Semantisch datamodel
tags: [industrie, digitalisering, data-analyse-en-business-intelligence]
---

*Semantisch datamodel* is een gestructureerde representatie van industriële data die niet alleen de syntax en structuur definieert, maar ook de betekenis, relaties en context van data-elementen binnen het bedrijfsdomein.

## Definitie

Een semantisch datamodel gaat verder dan traditionele datamodellen door expliciet de betekenis (semantiek) van data-elementen te definiëren. Het beschrijft wat de data betekent, hoe verschillende data-elementen zich tot elkaar verhouden, en in welke context ze gebruikt worden binnen industriële processen.

## Kerncomponenten

### Ontologieën
- **Concept definities**: Expliciete definities van industriële begrippen
- **Taxonomieën**: Hiërarchische classificaties van concepten
- **Relatie-types**: Semantische verbindingen tussen concepten
- **Axioma's**: Logische regels en constraints

### Vocabulaires
- **Industriële begrippen**: Gestandaardiseerde terminologie
- **Eenheden van meting**: Semantische definitie van meeteenheden
- **Kwaliteitsindicatoren**: Betekenis van kwaliteitsmetrics
- **Statusenumeraties**: Semantiek van operationele states

### Referentiemodellen
- **ISA-95 semantiek**: Industriële hiërarchie semantiek
- **Asset-modellen**: Betekenis van equipment en systemen
- **Proces-semantiek**: Definitie van productieprocessen
- **Product-ontologieën**: Semantische productmodellen

## Implementatie-aanpakken

### RDF/OWL Ontologieën
```turtle
@prefix ind: <http://industrial-ontology.org/core/> .
@prefix units: <http://qudt.org/vocab/unit/> .

ind:TemperatureSensor a ind:Sensor ;
    ind:hasUnit units:DEG_C ;
    ind:hasRange "0-1000"^^xsd:double ;
    ind:hasAccuracy "±0.1"^^xsd:double ;
    ind:measuresProperty ind:Temperature .

ind:Oven_001 a ind:ProcessEquipment ;
    ind:hasSensor ind:TempSensor_001 ;
    ind:operatesInProcess ind:HeatTreatment ;
    ind:hasLocation ind:ProductionLine_A .
```

### JSON-LD Contextualisatie
```json
{
  "@context": {
    "ind": "http://industrial-ontology.org/core/",
    "time": "http://www.w3.org/2006/time#",
    "qudt": "http://qudt.org/schema/qudt/"
  },
  "@type": "ind:TemperatureMeasurement",
  "ind:measuredBy": "ind:TempSensor_001",
  "ind:hasValue": {
    "@type": "qudt:QuantityValue",
    "qudt:numericValue": 485.2,
    "qudt:unit": "DEG_C"
  },
  "time:hasTime": "2024-08-17T14:30:00Z",
  "ind:quality": "ind:Good",
  "ind:processContext": "ind:NormalOperation"
}
```

### Graph Database Models
- **Neo4j property graphs** voor complexe relaties
- **Knowledge graphs** voor enterprise-brede semantiek
- **Triple stores** voor RDF-gebaseerde semantiek
- **Labeled property graphs** voor performance

## Semantische Interoperabiliteit

### Cross-Domain Mapping
- **Manufacturing** ↔ **Quality** begrippen
- **Maintenance** ↔ **Production** contexten
- **Financial** ↔ **Operational** metrics
- **Regulatory** ↔ **Process** data

### Standard Vocabularies
- **OPC UA Information Models** voor industriële semantiek
- **QUDT** voor eenheden en dimensies
- **GS1 Standards** voor product- en locatie-identificatie
- **DCAT** voor data catalog metadata

## Toepassing in UNS

Binnen een [[unified-namespace|Unified Namespace]]:

### Topic Semantiek
```
Company/Site/Area/Line/Cell/Unit/
├── Semantics/
│   ├── AssetType: "ProcessOven"
│   ├── Capability: ["Heating", "Monitoring"]
│   └── Classification: "CriticalEquipment"
├── Measurements/
│   ├── Temperature/
│   │   ├── @type: "ProcessTemperature"
│   │   ├── hasUnit: "DegreeCelsius"
│   │   └── criticalityLevel: "High"
│   └── Status/
│       ├── @type: "OperationalStatus"
│       └── enumeration: ["Running", "Stopped", "Fault"]
```

### Semantic Validation
- **Type checking** van inkomende data
- **Unit conversion** gebaseerd op semantiek
- **Consistency validation** tussen gerelateerde concepten
- **Business rule enforcement** via semantische regels

## Voordelen

### Automatische Interoperabiliteit
- **Self-describing data** reduceert integratie-inspanning
- **Automatic data mapping** tussen systemen
- **Semantic data discovery** en catalogisering
- **Context-aware processing** van events

### Business Intelligence
- **Meaningful data aggregation** over domeinen heen
- **Intelligent query answering** met inferentie
- **Automated report generation** gebaseerd op semantiek
- **Decision support** met contextuele informatie

### Compliance & Governance
- **Traceable data lineage** met semantische annotaties
- **Regulatory mapping** van begrippen naar standaarden
- **Automated compliance checking** via semantische regels
- **Documentation generation** uit semantische modellen

## Uitdagingen

### Complexiteit
- **Ontologie-ontwikkeling** vereist domeinexpertise
- **Performance impact** van semantische processing
- **Version management** van evolving schemas
- **Tooling complexity** voor non-experts

### Governance
- **Consensus building** over begrippendefinities
- **Change management** bij model-evolutie
- **Quality assurance** van semantische consistency
- **Training requirements** voor stakeholders

## Gerelateerde begrippen

- [[unified-namespace|Unified Namespace (UNS)]]
- [[contextualisatie-van-data|Contextualisatie van data]]
- [[metadata-beheer|Metadata-beheer]]
- [[open-platform-communications-unified-architecture|OPC UA]]
- [[data-herkomst|Data-herkomst (data lineage)]]
- [[isa-95-model|ISA-95 model]]

## Bronnen

- W3C Semantic Web Standards (RDF, OWL, SPARQL)
- OPC UA Information Modeling
- ISO 15926 Industrial Data Model
- Industrial Ontologies Foundry (IOF)

---
← Terug naar [[kaarten/data-analyse-en-business-intelligence|Data, Analyse & Business Intelligence kaart]]