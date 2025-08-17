---
tags:
  - 'data-analyse-en-business-intelligence'
  - '🧹draft'

title: Historian‑database (proceshistorian)
---
*Historian‑database (proceshistorian)* is een gespecialiseerd databasesysteem ontworpen voor het verzamelen, opslaan en ophalen van historische procesdata in industriële omgevingen, met hoge data-integriteit en betrouwbaarheid.

## Definitie

Een **Historian-database** (ook wel proceshistorian genoemd) is een gespecialiseerd databasesysteem dat is geoptimaliseerd voor het vastleggen van tijdreeksdata van industriële processen. Het verschilt van traditionele relationele databases door zijn focus op high-frequency data-opslag, compressie, en efficiënte retrieval van historische informatie.

> **Belangrijk onderscheid:** Een Historian is een **functie**, terwijl een [[tijdreeksdatabase|Tijdreeksdatabase (TSDB)]] de **technologie** erachter is. Historians worden verkocht als complete oplossingen.

## Functionaliteit vs. Technologie

### Historian als Functie
- **Process data archiving**: Langetermijn opslag van procesdata
- **Trend analysis**: Historische trend visualisatie
- **Data compression**: Intelligente compressie-algoritmen
- **Query optimization**: Geoptimaliseerd voor tijdreeks queries
- **Integration services**: Connectiviteit met SCADA en MES

### Onderliggende TSDB Technologie
- **Storage engines**: Column-store, time-partitioned storage
- **Compression algorithms**: Delta compression, dictionary encoding
- **Indexing strategies**: Time-based indexing, tag-based lookups
- **API interfaces**: REST, SQL, proprietary protocols

## Kernkenmerken

### High-Frequency Data Handling
- **Sampling rates**: Tot milliseconden resolutie
- **Data volume**: Miljoenen datapunten per dag
- **Real-time ingestion**: Continue data stroom processing
- **Buffering**: Lokale buffering bij connectiviteitsproblemen

### Data Compression
- **Lossless compression**: Behoud van originele waarden
- **Dead-band filtering**: Eliminatie van redundante waarden
- **Value-based compression**: Compressie op basis van waarde-veranderingen
- **Time-based aggregation**: Automatische aggregatie over tijd

### Query Performance
- **Time-range queries**: Geoptimaliseerd voor tijdsbereik selecties
- **Aggregation functions**: Ingebouwde statistische functies
- **Parallel processing**: Multi-threaded query execution
- **Caching strategies**: Intelligente cache mechanismen

## Architectuur

### Data Collection Layer
```
Data Sources
├── SCADA Systems
│   ├── HMI Data
│   ├── Alarm Events
│   └── Control Signals
├── PLC/DCS Systems
│   ├── Process Variables
│   ├── Setpoints
│   └── Status Signals
├── Laboratory Systems
│   ├── Quality Data
│   ├── Test Results
│   └── Certifications
└── IoT Sensors
    ├── Environmental Data
    ├── Vibration Analysis
    └── Energy Monitoring
```

### Storage Architecture
```
Historian Database
├── Real-time Data Store
│   ├── Current Values
│   ├── Recent Trends (1-7 days)
│   └── Active Alarms
├── Historical Archive
│   ├── Compressed Data
│   ├── Aggregated Values
│   └── Long-term Trends
└── Configuration Store
    ├── Tag Definitions
    ├── Units & Scaling
    └── Retention Policies
```

### Integration Layer
- **OPC connectivity**: [[opc-ua-evolutie-en-objectmodel|OPC UA]], OPC Classic
- **Database connectivity**: ODBC, OLEDB, native drivers
- **Web services**: REST APIs, SOAP interfaces
- **File interfaces**: CSV, XML, proprietary formats

## Comparison: Historian vs. ERP

### Data Characteristics

| Aspect | Historian | ERP |
|--------|-----------|-----|
| **Frequency** | High (seconds/minutes) | Low (hours/days) |
| **Volume** | Very High | Moderate |
| **Type** | Process measurements | Business transactions |
| **Retention** | Long-term (years) | Operational (months) |
| **Query Pattern** | Time-series analysis | Transactional queries |

### Use Cases

**Historian Database:**
- **Process optimization**: Identificatie van optimale bedrijfsparameters
- **Troubleshooting**: Root-cause analyse van problemen
- **Regulatory compliance**: Documentatie voor audits
- **Predictive maintenance**: Trend-based onderhoud planning

**ERP System:**
- **Order completion**: Registratie van voltooide orders
- **Inventory management**: Voorraad mutaties
- **Financial transactions**: Kosten en opbrengsten
- **Resource planning**: Capaciteitsplanning

### Data Duplication in UNS

Binnen een **[[unified-namespace|Unified Namespace]]** kunnen Historian en ERP data overlappen:

- **ERP blijft authoritative source** voor business data
- **Historian authoritative voor process data**
- **UNS faciliteert real-time access** tot beide data types
- **Data duplication is best practice** voor performance en availability

## Technische Implementatie

### Moderne Historian Architectuur
```
Cloud/Edge Historian
├── Edge Collection
│   ├── Local Buffering
│   ├── Pre-processing
│   └── Compression
├── Cloud Storage
│   ├── Scalable Archive
│   ├── Advanced Analytics
│   └── Machine Learning
└── Hybrid Queries
    ├── Recent Data (Edge)
    ├── Historical Data (Cloud)
    └── Unified Interface
```

### Integration met UNS
```json
{
  "timestamp": "2024-08-17T14:30:00Z",
  "source": "historian",
  "topic": "Site1/Line1/Temperature/PV",
  "value": 23.5,
  "quality": "Good",
  "metadata": {
    "units": "°C",
    "accuracy": "±0.1",
    "source_system": "PI_Historian",
    "retention": "7_years"
  }
}
```

## Populaire Historian Oplossingen

### Commercial Solutions
- **OSIsoft PI System**: Marktleider in proceshistorians
- **Wonderware InTouch**: Schneider Electric historian
- **GE Proficy**: Industrial historian suite
- **Honeywell PHD**: Process History Database

### Open Source Alternatives
- **[[apache-kafka|Apache Kafka]]**: Event streaming met retention
- **InfluxDB**: Time-series database
- **TimescaleDB**: PostgreSQL extension voor tijdreeksdata
- **OpenTSDB**: Distributed time-series database

### Cloud-Native Solutions
- **AWS Timestream**: Managed time-series service
- **Azure Time Series Insights**: Cloud historian service
- **Google Cloud Bigtable**: Scalable NoSQL voor tijdreeks
- **Databricks Delta Lake**: Lakehouse voor historische data

## Performance Optimalisatie

### Storage Optimization
- **Data tiering**: Hot, warm, cold storage strategies
- **Compression ratios**: 10:1 tot 100:1 typische compressie
- **Retention policies**: Automatische data lifecycle management
- **Backup strategies**: Point-in-time recovery capabilities

### Query Optimization
- **Indexed access**: Time-based en tag-based indexes
- **Materialized views**: Pre-computed aggregations
- **Parallel execution**: Multi-core query processing
- **Result caching**: Frequently accessed data caching

## Security en Compliance

### Data Protection
- **Encryption**: Data at rest en in transit
- **Access control**: Role-based permissions
- **Audit logging**: Comprehensive access tracking
- **Data integrity**: Checksums en validation

### Regulatory Compliance
- **21 CFR Part 11**: FDA validation requirements
- **ISO 27001**: Information security management
- **GDPR**: Data privacy en retention
- **SOX**: Financial data integrity

## Gerelateerde begrippen

**Database Technologieën:**
- [[tijdreeksdatabase|Tijdreeksdatabase (TSDB)]] - Onderliggende technologie
- [[historische-dataopslag|Historische dataopslag]] - Data retention strategies
- [[data-compressie|Data compressie]] - Storage optimization
- [[big-data|Big Data]] - Large-scale data management

**System Integration:**
- [[erp-vs-historian|ERP vs. Historian]] - Complementaire systemen
- [[unified-namespace|Unified Namespace (UNS)]] - Modern integratie architectuur
- [[scada-integratie|SCADA integratie]] - Process data connectivity
- [[mes-historian-integratie|MES-Historian integratie]] - Manufacturing data

**Analytics & Reporting:**
- [[process-analytics|Process analytics]] - Historical trend analysis
- [[predictive-maintenance|Predictive maintenance]] - Trend-based onderhoud
- [[kpi-dashboard|KPI Dashboard]] - Historical performance metrics
- [[data-visualisatie|Data visualisatie]] - Trend charts en reports

## Bronnen

- OSIsoft PI System Documentation
- ISA-95 Manufacturing Operations Standard
- Time-Series Database Benchmarking Studies
- Industrial Data Management Best Practices

---
← Terug naar [[kaarten/data-analyse-en-business-intelligence|Data, Analyse & Business Intelligence kaart]]
