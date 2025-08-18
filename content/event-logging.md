---
tags:
  - 'data-collectie-en-industrial-data-platforms'
  - '🧹draft'

title: Event‑logging
---
*Event‑logging* is een begrip binnen de industriële digitalisering en data‑collectie & industrial data platforms.

## Definitie

**Event-logging** is het systematisch vastleggen van discrete gebeurtenissen, state-changes, alarmen en operationele activiteiten binnen industriële systemen. Deze gebeurtenissen worden gestructureerd opgeslagen met timestamps, context-informatie en metadata voor troubleshooting, audit trails, performance analysis en compliance documentation.

## Kenmerken

- **Timestamped events**: Precise time recording (millisecond accuracy) voor event sequencing
- **Structured logging**: Consistent event formats met type, severity, source, description fields
- **Multi-level categorization**: Info, Warning, Error, Critical severity levels
- **Contextual metadata**: Machine ID, operator, product batch, process recipe information
- **Automated triggering**: System-driven logging bij threshold violations, state changes
- **Audit trail compliance**: Tamper-proof logging voor regulatory requirements
- **Real-time streaming**: Immediate event propagation naar monitoring systems
- **Retention policies**: Configurable data lifecycle management voor long-term storage

## Toepassing

**Machine operation logging:**
- **CNC machine events**: Program start/stop, tool changes, alarm conditions, cycle completions
- **Robot operation**: Task execution, error recoveries, safety stops, maintenance triggers
- **Process equipment**: Start/stop sequences, parameter changes, fault conditions
- **Material handling**: Product movements, jam detections, conveyor speed changes

**Quality events:**
- **Inspection results**: Pass/fail decisions, measurement out-of-tolerance events
- **Calibration activities**: Instrument calibrations, standard references, drift detections
- **Non-conformance**: Defect identifications, root cause assignments, corrective actions
- **[[first-article-inspection|First Article]] approvals**: New setup validations, specification verifications

**Production milestones:**
- **Batch processing**: Recipe starts, ingredient additions, process completions
- **Order fulfillment**: Job starts, milestone completions, delivery preparations
- **Shift activities**: Operator changes, production handovers, daily summaries
- **Maintenance windows**: Scheduled maintenance starts, completion verifications

**Safety en compliance:**
- **Personnel access**: Badge entries, zone permissions, safety training verifications
- **Environmental monitoring**: Temperature excursions, contamination detections
- **Equipment safety**: Emergency stops, guard openings, safety system activations
- **Regulatory compliance**: FDA 21 CFR Part 11, ISO audit trail requirements

## Gerelateerde begrippen

**Verwante termen:**
- [[historian-database|Historian database]] - Long-term event storage en retrieval systems
- [[realtime-monitoring|Realtime monitoring]] - Live event streaming en alerting
- [[audit-management|Audit management]] - Compliance-driven event documentation
- [[machine-datalogging|Machine datalogging]] - Equipment-specific event capture

**Verwante concepten:**
- [[event-gedreven-architectuur|Event-gedreven architectuur]] - System design paradigm using events
- [[publish-subscribe-messaging|Pub/Sub messaging]] - Event distribution mechanisms
- [[unified-namespace|Unified Namespace]] - Modern event streaming architectures
- [[observeerbaarheid|Observability]] - System monitoring via comprehensive event logging

## Bronnen

- Syslog RFC 3164/5424 - Standard protocols voor network event logging
- Windows Event Logging - Microsoft industrial PC event management
- Splunk Industrial - Machine data platform voor event analysis
- Elastic Stack (ELK) - Elasticsearch, Logstash, Kibana voor log aggregation
- Fluentd - Open source data collector voor unified logging layer
- Apache Kafka - Distributed event streaming platform
- InfluxDB - Time series database voor event en metrics storage
- IEC 61850 - Communication protocol voor power system event logging
- ISA-18.2 - Management of alarm systems in process industries
- 21 CFR Part 11 - FDA electronic records en electronic signatures compliance

---
← Terug naar [[kaarten/data-collectie-en-industrial-data-platforms|Data‑collectie & Industrial Data Platforms kaart]]
