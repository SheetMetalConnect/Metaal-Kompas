---
tags:
  - 'data-collectie-en-industrial-data-platforms'
  - '🧹draft'

title: Tag‑database
---
*Tag‑database* is een begrip binnen de industriële digitalisering en data‑collectie & industrial data platforms.

## Definitie

**Tag-database** is een georganiseerde verzameling van identificatielabels (tags) die aan industriële datapoints worden toegekend voor het structureren en categoriseren van procesdata. Deze database vormt de backbone voor datahistorians en SCADA-systemen door elke sensor, actuator en procesvariabele uniek te identificeren.

## Kenmerken

- **Hierarchische structuur**: Plant-area-unit-equipment naamgevingsconventies
- **Unique identifiers**: Elke tag heeft een unieke naam binnen de database scope
- **Metadata attributes**: Engineering units, scaling, alarmlimits, descriptions
- **Data typing**: Float, integer, boolean, string datatypes voor verschillende signalen
- **Historical configuration**: Retention policies, compression settings, archiving rules
- **Security permissions**: Read/write access control per tag of taggroep
- **Alias support**: Multiple names voor dezelfde datapoint (legacy compatibility)
- **Dynamic tagging**: Runtime creation van nieuwe tags voor flexible systems

## Toepassing

**SCADA en HMI systemen:**
- **Operator interfaces**: Tag-driven displays en control panels
- **Alarming**: Tag-based alarm configuration en notification
- **Trending**: Historical en real-time data visualization
- **Reporting**: Automated report generation van tagged data

**Manufacturing execution:**
- **Process monitoring**: Production line sensor data organization
- **Quality data**: Measurement tags voor [[statistical-process-control-software|SPC]] analysis
- **Batch tracking**: Recipe parameters en process variables per batch
- **Equipment status**: Machine state, cycle counts, error codes

**Asset management:**
- **[[condition-monitoring|Conditiebewaking]]**: Vibration, temperature, performance tags
- **Energy monitoring**: Power consumption, efficiency metrics per asset
- **Maintenance triggers**: Hours ran, cycle counts, predictive indicators
- **Spare parts correlation**: Tag-based inventory requirements

**Data integration:**
- **[[historian-database|Historian]] systems**: Structured data archiving
- **[[manufacturing-execution-system|MES]] integration**: Production data naar business systems
- **[[unified-namespace|UNS]] architectures**: Modern industrial data frameworks
- **Cloud connectivity**: Structured data upload naar industrial IoT platforms

## Gerelateerde begrippen

**Verwante termen:**
- [[historian-database|Historian database]] - Langetermijn opslag van tag-gebaseerde data
- [[data-acquisitie|Data‑acquisitie (DAQ)]] - Signaalverzameling naar tags
- [[realtime-monitoring|Realtime monitoring]] - Live data via tag subscriptions
- [[unified-namespace|Unified Namespace]] - Moderne tag structurering methodologie

**Verwante concepten:**
- [[industrial-internet-of-things|IIoT]] - Connected devices met tag-based data
- [[edge-computing|Edge computing]] - Distributed tagging architectures
- [[metadata-beheer|Metadata beheer]] - Tag attribute management
- [[contextualisatie-van-data|Contextualisatie van data]] - Semantic meaning van tags

## Bronnen

- OSIsoft PI System - Industrial tag database architecture
- Wonderware Historian - Tag-based historical data management
- GE Digital Proficy - Process data tagging solutions
- Siemens WinCC - Tag configuration en management
- Rockwell Automation FactoryTalk - Industrial tag databases
- Schneider Electric Citect - Tag-driven SCADA systems
- AVEVA System Platform - Unified tag namespace management
- IEC 61131 - Industrial control systems tag standards
- IEC 61970 - Common Information Model voor power systems
- ISA-95 - Manufacturing tagging conventions en hierarchies

---
← Terug naar [[kaarten/data-collectie-en-industrial-data-platforms|Data‑collectie & Industrial Data Platforms kaart]]
