---
tags:
  - 'data-collectie-en-industrial-data-platforms'
  - '🧹draft'

title: Data‑normalisatie
---
*Data‑normalisatie* is een begrip binnen de industriële digitalisering en data‑collectie & industrial data platforms.

## Definitie

**Data-normalisatie** in industriële context is het proces van het standaardiseren en harmoniseren van data uit verschillende bronnen, systemen en formaten naar een uniforme structuur en representatie. Dit omvat het omzetten van verschillende meeteenheden, tijdformaten, data-encodings en semantische representaties naar een consistent datamodel dat geschikt is voor analyse, integratie en automatisering.

## Kenmerken

- **Unit conversion**: Standaardisatie naar SI-units (meters, Celsius, Pascal, etc.)
- **Time synchronization**: Uniforme timestamp formats (UTC, ISO 8601) voor multi-source data
- **Data type mapping**: Consistent data types (float64, int32) voor numerical processing
- **Encoding standardization**: UTF-8 character encoding voor international compatibility
- **Value range scaling**: Normalisatie naar 0-1 ranges of z-score standardization
- **Missing value handling**: Consistent treatment van NULL, NaN, en empty values
- **Semantic alignment**: Mapping van verschillende term definities naar common vocabulary
- **Quality scoring**: Metadata over data reliability, accuracy en completeness

## Toepassing

**Multi-system integratie:**
- **[[manufacturing-execution-system|MES]] integration**: Harmonization van data uit verschillende productie systems
- **[[historian-database|Historian]] consolidation**: Unified data model voor verschillende data sources
- **[[enterprise-resource-planning|ERP]] connectivity**: Consistent production data naar business systems
- **Sensor network integration**: Standardized IoT data van verschillende device manufacturers

**Kwaliteitsdata normalisatie:**
- **Measurement systems**: CMM, calipers, micrometers naar consistent dimensional format
- **Material properties**: Different testing standards (ASTM, DIN, JIS) naar unified format
- **Surface finish**: Ra, Rz, Rmax measurements naar standardized roughness units
- **Chemical composition**: Various spectrometer formats naar consistent alloy representation

**Process parameter alignment:**
- **Temperature scales**: Fahrenheit, Celsius, Kelvin naar standard process temperatures
- **Pressure units**: PSI, bar, kPa naar consistent pressure representations
- **Flow rates**: GPM, l/min, m³/h naar standardized flow measurements
- **Speed/feeds**: RPM, surface feet per minute naar consistent machining parameters

**[[machine-learning-dataset|ML dataset]] preparation:**
- **Feature scaling**: Min-max normalization voor neural network training
- **Categorical encoding**: One-hot encoding voor machine types, material grades
- **Time series alignment**: Resampling verschillende sample rates naar common frequency
- **Outlier treatment**: Statistical normalization voor robust model training

## Gerelateerde begrippen

**Verwante termen:**
- [[datacleaning|Data cleaning]] - Kwaliteitsverbetering van ruwe data
- [[master-data-management|Master data management]] - Centralized reference data management
- [[data-acquisitie|Data acquisitie (DAQ)]] - Raw data collection voor normalisatie processing
- [[unified-namespace|Unified Namespace]] - Modern data architecture met genormaliseerde data

**Verwante concepten:**
- [[extract-transform-load|ETL]] - Data pipeline processen inclusief normalization steps
- [[semantisch-datamodel|Semantisch datamodel]] - Meaningful data representations na normalisatie
- [[contextualisatie-van-data|Contextualisatie van data]] - Adding business context naar genormaliseerde data
- [[single-source-of-truth|Single source of truth]] - Unified data na normalization processes

## Bronnen

- ISO 8601 - International standard voor date en time representations
- SI Base Units - International System of Units voor measurement standardization
- IEEE 754 - Floating point arithmetic standards voor numerical consistency
- W3C RDF - Resource Description Framework voor semantic data normalization
- NIST Special Publications - Measurement standards en calibration procedures
- IEC 61131 - Industrial control system data representation standards
- OPC UA Information Models - Industrial data modeling standards
- Apache Arrow - Column-oriented data format voor efficient processing
- Pandas DataFrame - Python data manipulation voor normalization workflows
- Apache Spark - Distributed data processing voor large-scale normalization

---
← Terug naar [[kaarten/data-collectie-en-industrial-data-platforms|Data‑collectie & Industrial Data Platforms kaart]]
