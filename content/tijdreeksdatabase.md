---
tags:
  - 'data-analyse-en-business-intelligence'
  - '🧹draft'

title: Tijdreeksdatabase (time‑series database)
---
*Tijdreeksdatabase (time‑series database)* is een database die geoptimaliseerd is voor het opslaan, indexeren en bevragen van tijdgestempelde data, met focus op efficiënte data-inname en ophaling van hoogfrequente, tijd-geordende datapunten.

## Definitie

Een **Tijdreeksdatabase (Time-Series Database - TSDB)** is een databasesysteem dat specifiek is ontworpen voor het beheren van data die wordt geïndexeerd op tijd. Deze databases zijn geoptimaliseerd voor de unieke kenmerken van tijdreeksdata: hoge schrijfvolumes, tijd-gebaseerde queries, en efficiënte opslag van opeenvolgende datapunten.

> **Belangrijk:** TSDB's worden vaak verward met [[historian-database|Historian databases]]. Een TSDB is de **technologie**, terwijl een Historian de **oplossing/functie** is die vaak TSDB technologie gebruikt.

## Kernkenmerken

### Data Characteristics
- **Time-indexed**: Alle data heeft een tijdstempel als primaire index
- **Append-only**: Data wordt voornamelijk toegevoegd, zelden gewijzigd
- **High ingestion rate**: Ondersteunt duizenden tot miljoenen writes per seconde
- **Sequential access**: Data wordt meestal in chronologische volgorde gelezen

### Performance Optimizations
- **Columnar storage**: Data wordt per kolom opgeslagen voor betere compressie
- **Time-based partitioning**: Data wordt gepartitioneerd op tijd voor snellere queries
- **Compression algorithms**: Gespecialiseerde compressie voor tijdreeksdata
- **Downsampling**: Automatische aggregatie van oude data

### Query Capabilities
- **Time-range queries**: Efficiënte selectie op tijdsbereik
- **Aggregation functions**: Ingebouwde statistische functies (avg, sum, count)
- **Window operations**: Sliding/tumbling window calculations
- **Retention policies**: Automatische data lifecycle management

## Architectuur Principes

### Storage Engine
```
TSDB Storage Architecture
├── Hot Storage (Recent Data)
│   ├── Write-Ahead Log (WAL)
│   ├── Memory Tables
│   └── SSD Storage
├── Warm Storage (Medium-term)
│   ├── Compressed Blocks
│   ├── Indexed Segments
│   └── HDD Storage
└── Cold Storage (Long-term)
    ├── Highly Compressed
    ├── Archive Format
    └── Object Storage
```

### Data Model
```
Time-Series Data Point
{
  "timestamp": "2024-08-17T14:30:00Z",
  "metric": "temperature",
  "value": 23.5,
  "tags": {
    "location": "factory_1",
    "sensor_id": "temp_001",
    "unit": "celsius"
  }
}
```

### Ingestion Pipeline
```
Data Sources → Buffer → Validation → Compression → Storage
     │           │         │            │          │
   Sensors    Memory   Schema    Algorithm   Disk/Cloud
   APIs       Queue    Check     Selection   Storage
   Files      
```

## Populaire TSDB Implementaties

### Open Source

#### InfluxDB
- **Focus**: IoT en monitoring use cases
- **Query Language**: InfluxQL (SQL-like), Flux
- **Storage**: TSM (Time-Structured Merge tree)
- **Deployment**: Single-node en cluster configuraties

#### TimescaleDB
- **Focus**: PostgreSQL extensie voor tijdreeks
- **Query Language**: Standard SQL met time-series extensions
- **Storage**: Hypertables (automatische partitionering)
- **Advantage**: SQL compatibility, ACID compliance

#### Prometheus
- **Focus**: Monitoring en alerting
- **Query Language**: PromQL
- **Storage**: Local storage met externe opties
- **Architecture**: Pull-based metrics collection

#### Apache IoTDB
- **Focus**: Industriële IoT scenarios
- **Query Language**: SQL-like syntax
- **Storage**: Columnar met compressie
- **Features**: Schema evolution, real-time analytics

### Commercial Solutions

#### Amazon Timestream
- **Type**: Fully managed cloud service
- **Scaling**: Automatic scaling en partitioning
- **Integration**: AWS ecosystem integratie
- **Pricing**: Pay-per-use model

#### Microsoft Azure Data Explorer (Kusto)
- **Type**: Big data analytics platform
- **Query Language**: KQL (Kusto Query Language)
- **Performance**: Sub-second queries op TB data
- **Integration**: Azure services ecosystem

#### Google Cloud Bigtable
- **Type**: NoSQL database voor tijdreeks
- **Scaling**: Horizontal scaling tot PB
- **Performance**: Low-latency, high-throughput
- **Use Cases**: AdTech, IoT, financial services

## Use Cases in de Industrie

### IoT en Sensor Data
- **Environmental monitoring**: Temperatuur, vochtigheid, luchtkwaliteit
- **Machine monitoring**: Trillingen, temperatuur, druk
- **Energy management**: Stroomverbruik, spanning, vermogen
- **Asset tracking**: Locatie, status, utilization

### Manufacturing Analytics
- **Process optimization**: KPI tracking over tijd
- **Quality monitoring**: Afwijkingen en trends in kwaliteitsdata
- **Predictive maintenance**: Machine health trending
- **OEE calculation**: Overall Equipment Effectiveness

### Business Intelligence
- **Performance dashboards**: Real-time en historische metrics
- **Trend analysis**: Lange-termijn performance trends
- **Anomaly detection**: Automatische afwijking detectie
- **Capacity planning**: Resource utilization voorspelling

## Integration met UNS

TSDB's kunnen fungeren als storage backend voor **[[unified-namespace|Unified Namespace]]**:

### UNS Topic Storage
```
UNS Topic: Site1/Line1/Temperature
TSDB Storage:
{
  "measurement": "temperature",
  "tags": {
    "site": "Site1",
    "line": "Line1",
    "sensor": "TMP001"
  },
  "fields": {
    "value": 23.5,
    "quality": "Good"
  },
  "timestamp": "2024-08-17T14:30:00Z"
}
```

### Event Streaming Architecture
```
UNS (MQTT/Kafka) → Stream Processor → TSDB
      │                  │           │
  Real-time       Transformation  Historical
  Distribution    Aggregation     Storage
                  Filtering
```

## Performance Consideraties

### Write Performance
- **Batch writes**: Groeperen van datapunten voor betere throughput
- **Compression**: Delta encoding, dictionary compression
- **Partitioning**: Time-based data distribution
- **Indexing**: Sparse indexing voor tijdreeks access patterns

### Query Performance
- **Time-range optimization**: Efficiënte tijdsbereik selecties
- **Aggregation pushdown**: Server-side aggregatie berekeningen
- **Caching**: Query result caching voor herhaalde queries
- **Parallel processing**: Multi-threaded query execution

### Storage Efficiency
- **Compression ratios**: 10:1 tot 100:1 typische compressie
- **Data lifecycle**: Hot/warm/cold storage tiers
- **Retention policies**: Automatische oude data verwijdering
- **Downsampling**: Lagere resolutie voor oude data

## Best Practices

### Data Modeling
1. **Consistent timestamps**: Gebruik UTC voor alle tijdstempels
2. **Appropriate tags**: Gebruik tags voor dimensies, fields voor metingen
3. **Cardinality management**: Vermijd hoge cardinality tag combinations
4. **Schema design**: Plan voor toekomstige uitbreidingen

### Performance Optimization
1. **Batch inserts**: Schrijf data in batches voor betere performance
2. **Time alignment**: Align data points op vaste intervallen
3. **Query optimization**: Gebruik time-range filters in queries
4. **Resource monitoring**: Monitor CPU, memory, en disk usage

### Operational Excellence
1. **Backup strategies**: Reguliere backups van kritieke data
2. **Monitoring**: Monitor database performance en health
3. **Capacity planning**: Plan voor data groei en query load
4. **Disaster recovery**: Procedures voor data recovery

## Vergelijking met Traditionele Databases

| Aspect | TSDB | Relationele DB | NoSQL DB |
|--------|------|----------------|----------|
| **Data Model** | Time-series | Tabular | Document/Key-Value |
| **Write Pattern** | Append-only | CRUD | Mixed |
| **Query Focus** | Time-based | Relational | Flexible |
| **Compression** | Specialized | General | Variable |
| **Scalability** | Horizontal | Vertical/Horizontal | Horizontal |
| **ACID** | Limited | Full | Variable |

## Uitdagingen

### Technical Challenges
- **High cardinality**: Grote aantallen unieke tag combinations
- **Query complexity**: Balanceren van flexibiliteit en performance
- **Storage costs**: Lange-termijn data retention kosten
- **Data quality**: Omgaan met missing en duplicate data points

### Operational Challenges
- **Skill requirements**: Nieuwe expertise voor TSDB management
- **Tooling**: Beperkte tooling vergeleken met relationele databases
- **Vendor lock-in**: Proprietary query languages en features
- **Migration complexity**: Migratie van bestaande data en applicaties

## Gerelateerde begrippen

**Storage & Analytics:**
- [[historian-database|Historian Database]] - Industriële TSDB oplossingen
- [[big-data|Big Data]] - Large-scale data management
- [[data-mining|Data Mining]] - Pattern discovery in tijdreeks
- [[predictive-analytics|Predictive Analytics]] - Forecasting met tijdreeksdata

**Architecture & Integration:**
- [[unified-namespace|Unified Namespace (UNS)]] - TSDB als storage backend
- [[event-streaming|Event Streaming]] - Real-time data ingestion
- [[apache-kafka|Apache Kafka]] - Stream processing voor TSDB
- [[edge-computing|Edge Computing]] - Lokale TSDB processing

**Technologies:**
- [[structured-query-language|SQL]] - Query language voor sommige TSDB's
- [[nosql-databases|NoSQL Databases]] - Alternative database paradigms
- [[cloud-computing|Cloud Computing]] - Managed TSDB services
- [[containerisatie|Containerisatie]] - TSDB deployment strategies

## Bronnen

- Time-Series Database Benchmarking Studies
- InfluxDB Technical Documentation
- TimescaleDB Performance Best Practices
- TSDB Evaluation Criteria en Selection Guide

---
← Terug naar [[kaarten/data-analyse-en-business-intelligence|Data, Analyse & Business Intelligence kaart]]
