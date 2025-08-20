---
tags:
  - 'programmatie-en-aansturing-productiemiddelen'
  - '🧹draft'

title: Structured Text (ST)
---
*Structured Text (ST)* is een begrip binnen de industriële digitalisering en programmatie & aansturing productiemiddelen.

## Definitie

**Structured Text (ST)** is een tekstuele programmeertaal voor PLC-systemen die is gedefinieerd in de IEC 61131-3 standaard. ST lijkt op hogere programmeertalen zoals Pascal en C, en wordt gebruikt voor het implementeren van complexe algoritmen, berekeningen en data-manipulaties in industriële automatiseringssystemen.

## Kenmerken

- **High-level syntax**: Vergelijkbaar met Pascal en C programmeertalen
- **Tekstuele programmeertaal**: Code-gebaseerd in plaats van grafische diagrammen
- **Complexe algoritmen**: Geschikt voor wiskundige berekeningen en data-processing
- **Variabele declaraties**: Strongly-typed variabelen met data type specificatie
- **Control structures**: IF-THEN-ELSE, WHILE, FOR loops, en CASE statements
- **Function en Function Block ondersteuning**: Herbruikbare code modules
- **Arrays en structures**: Complexe data types voor gestructureerde data
- **Bit en byte manipulatie**: Low-level operaties voor hardware-interfacing

## Toepassing

**Complexe algoritmen en berekeningen:**
- **PID control loops**: Geavanceerde regelalgoritmen voor temperatuur, druk en flow control
- **Statistische berekeningen**: [[statistical-process-control-software|SPC]] algoritmen voor kwaliteitscontrole
- **Kinematische berekeningen**: Robotica en CNC machine pad-berekeningen
- **Data filtering**: Signal processing en sensor data conditioning

**Data manipulatie en communicatie:**
- **[[modbus|Modbus]] protocol implementatie**: Custom communicatie-algoritmen voor data-uitwisseling
- **Database queries**: SQL-achtige operaties voor data retrievals
- **File handling**: CSV data import/export voor productie-rapportages
- **String manipulatie**: Barcode parsing en [[traceerbaarheidssysteem|traceability]] data processing

**Metaalindustrie specifiek:**
- **Lasparameter berekeningen**: Algoritmen voor optimale [[welding-procedure-specification|lasprocessen]]
- **Materiaal tracking**: [[heat-number|Heat number]] verwerking en batch tracking
- **Kwaliteitscontrole**: Automatische afkeuring op basis van meetwaarden
- **[[overall-equipment-effectiveness|OEE]] berekeningen**: Real-time efficiency monitoring algoritmen

**Integratie met andere systemen:**
- **[[human-machine-interface|HMI]] data formatting**: Data preprocessing voor visualisatie
- **[[manufacturing-execution-system|MES]] communicatie**: Productiedata naar hogere systemen
- **[[historian-database|Historian]] data preparation**: Time-stamped data formatting

## Gerelateerde begrippen

- [[plc-programmering|PLC Programmering]] - Overkoepelend begrip waar ST een onderdeel van is
- [[function-block-diagram|Function Block Diagram]] - Grafische alternatief voor ST programmering
- [[human-machine-interface|HMI]] - Interfaces die ST-berekende data tonen
- [[modbus|Modbus]] - Communicatieprotocol vaak geïmplementeerd in ST
- [[supervisory-control-and-data-acquisition|SCADA]] - Systemen die ST-gegenereerde data gebruiken
- [[statistical-process-control-software|SPC Software]] - Kwaliteitssystemen met ST-algoritmen
- [[manufacturing-execution-system|MES]] - Productiesystemen die ST-geprocesste data ontvangen
- [[overall-equipment-effectiveness|OEE]] - KPI's berekend met ST-algoritmen
- [[historian-database|Historian Database]] - Time-series opslag van ST-berekende waarden
- [[computer-aided-manufacturing|CAM]] - CNC-systemen met ST-gebaseerde post-processing

## Bronnen

- IEC 61131-3 - International standard defining Structured Text syntax and semantics
- PLCopen - Organization promoting IEC 61131-3 standards adoption
- Beckhoff TwinCAT - ST development environment with extensive library support
- Codesys - Multi-platform ST development with simulation capabilities
- Siemens TIA Portal - Integrated ST programming within Step 7 environment
- Rockwell Studio 5000 - Allen-Bradley ST implementation and debugging tools
- John & Lisa Petrides - "PLC Programming using IEC 61131-3" textbook
- ST programming best practices - Industrial automation programming guidelines

---
← Terug naar [[kaarten/programmatie-en-aansturing-productiemiddelen|Programmatie & Aansturing Productiemiddelen kaart]]
