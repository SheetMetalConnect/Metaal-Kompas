---
tags:
  - 'data-analyse-en-business-intelligence'
  - '🧹draft'

title: Datalake
---
*Datalake* is een begrip binnen de industriële digitalisering en data, analyse & business intelligence.

## Definitie

**Datalake** is een gecentraliseerde opslaglocatie die grote hoeveelheden ruwe data in hun oorspronkelijke formaat kan bewaren totdat ze nodig zijn. Het ondersteunt gestructureerde, semi-gestructureerde en ongestructureerde data voor analytics en machine learning.

## Kenmerken

- **Schema-on-read**: Data structure wordt bepaald tijdens analyse, niet bij opslag
- **Raw data preservation**: Originele data blijft ongewijzigd bewaard
- **Multi-format support**: Tekstbestanden, JSON, XML, beelden, video, sensor data
- **Scalable storage**: Horizontaal schaalbare opslag voor petabyte-scale datasets
- **Cost effectiveness**: Goedkope storage voor grote volumes ongevormde data
- **Data cataloging**: Metadata management voor data discovery en governance
- **Access control**: Granular security permissions voor verschillende data sets
- **Processing flexibility**: Support voor batch, streaming en real-time analytics
- **Version control**: Data lineage tracking en historical data management

## Toepassing

**Manufacturing data storage:**
- **[[historian-database|Time-series data]]**: Sensor readings, machine telemetry, process parameters
- **Quality data**: Inspection results, test reports, certification documents
- **Production logs**: Manufacturing execution logs, operator notes, system events
- **Maintenance records**: Service reports, parts replacement history, failure analysis

**IoT data management:**
- **[[industrial-internet-of-things|IIoT]] streams**: Real-time sensor data from connected equipment
- **Edge data aggregation**: Collected data from distributed edge computing nodes
- **Multi-protocol data**: MQTT, OPC-UA, Modbus data streams in native formats
- **Device telemetry**: Equipment status, performance metrics, diagnostic information

**Analytics en machine learning:**
- **[[big-data|Big data]] analytics**: Large-scale data processing for insights generation
- **[[machine-learning|ML]] training data**: Historical datasets voor predictive model development
- **Data science exploration**: Sandbox environment voor data scientists
- **Advanced analytics**: Complex analytics workflows op diverse data types

**Compliance en archiving:**
- **Regulatory data**: Long-term storage voor compliance requirements
- **Audit trails**: Complete data history voor regulatory audits
- **Backup storage**: Cost-effective backup solution voor critical business data
- **Data retention**: Policy-driven data lifecycle management

**Business intelligence:**
- **[[data-warehousing|Data warehouse]] source**: Raw data feeding structured analytics systems
- **Report data sources**: Foundation data voor [[business-intelligence|BI]] dashboards
- **Self-service analytics**: Business users accessing raw data voor analysis
- **Cross-functional analytics**: Integrated view across multiple business functions

## Gerelateerde begrippen

**Verwante termen:**
- [[datawarehouse|Data warehouse]] - Structured data storage complementary to data lakes
- [[big-data|Big data]] - Large datasets typically stored in data lake architectures
- [[data-analyse|Data analysis]] - Analytics processes consuming data lake content
- [[cloud-computing|Cloud storage]] - Infrastructure platforms hosting data lake implementations

**Verwante concepten:**
- [[data-governance|Data governance]] - Management framework essential for data lake success
- [[metadata-management|Metadata management]] - Cataloging systems voor data lake discoverability
- [[etl-processes|ETL processes]] - Data processing workflows using data lake storage
- [[self-service-analytics|Self-service analytics]] - User empowerment enabled by data lake access

## Bronnen

- Amazon S3 - Cloud object storage commonly used for data lake implementations
- Microsoft Azure Data Lake Storage - Enterprise data lake platform
- Google Cloud Storage - Scalable object storage voor big data applications
- Hadoop HDFS - Distributed file system voor on-premises data lakes
- Databricks Lakehouse - Unified analytics platform combining data lakes en warehouses
- Snowflake - Cloud data platform with data lake capabilities
- AWS Lake Formation - Service voor setting up secure data lakes

---
← Terug naar [[kaarten/data-analyse-en-business-intelligence|Data, Analyse & Business Intelligence kaart]]
