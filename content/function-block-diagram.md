---
tags:
  - 'programmatie-en-aansturing-productiemiddelen'
  - '🧹draft'

title: Function Block Diagram (FBD)
---
*Function Block Diagram (FBD)* is een begrip binnen de industriële digitalisering en programmatie & aansturing productiemiddelen.

## Definitie

**Function Block Diagram (FBD)** is een grafische programmeertaal voor PLC-systemen zoals gedefinieerd in de IEC 61131-3 standaard. FBD gebruikt visuele blokken die functies representeren, verbonden door lijnen die dataflows weergeven. Deze aanpak maakt complexe logische en rekenkundige operaties intuïtief en overzichtelijk voor industriële automatiseringssystemen.

## Kenmerken

- **Grafische representatie**: Visuele blokken en verbindingslijnen voor intuïtieve programmering
- **Dataflow orientatie**: Data stroomt van links naar rechts door functieblokken
- **Herbruikbare functieblokken**: Standaard en custom function blocks voor modulaire programmering
- **Input/output connecties**: Duidelijke visuele weergave van data-ingangen en -uitgangen
- **Parallelle executie**: Meerdere function blocks kunnen simultaan worden uitgevoerd
- **Hierarchische structuur**: Complex systemen opgebouwd uit eenvoudige building blocks
- **Real-time debugging**: Live monitoring van dataflows tijdens programma-executie
- **Platform onafhankelijk**: Ondersteund door alle belangrijke PLC-fabrikanten

## Toepassing

**Procesregeling en automatisering:**
- **PID controllers**: Visuele implementatie van feedback control loops voor temperatuur en drukregeling
- **Signal conditioning**: Sensor data filtering, scaling en linearisatie
- **Logic operations**: Boolean algebra voor machine safety en interlock systemen
- **Sequencing**: State machine implementatie voor geordende procesflows

**Metaalbewerking processen:**
- **Lasparameter controle**: [[welding-procedure-specification|Lasproces]] monitoring en aanpassing
- **CNC machine interfacing**: Data-uitwisseling tussen [[computer-aided-manufacturing|CAM]] systemen en machine controllers
- **Kwaliteitscontrole**: Automatische afkeuring op basis van meetwaar den uit sensoren
- **Materiaal handling**: [[kanban|Just-in-time]] transport systemen en buffer management

**Data verwerking en communicatie:**
- **[[modbus|Modbus]] implementatie**: Protocol communication blocks voor data-uitwisseling
- **[[human-machine-interface|HMI]] koppeling**: Data formatting en preprocessing voor operator interfaces
- **[[manufacturing-execution-system|MES]] integratie**: Productiedata aggregatie en doorsturen
- **[[overall-equipment-effectiveness|OEE]] berekeningen**: Real-time efficiency monitoring via function blocks

**Veiligheid en diagnostiek:**
- **Safety function blocks**: SIL-rated function blocks voor machine safety systemen
- **Alarm management**: [[andon-systeem|Andon]] implementatie voor production line alerts
- **Preventive maintenance**: [[condition-monitoring|Condition monitoring]] algoritmen voor equipment health

## Gerelateerde begrippen

- [[plc-programmering|PLC Programmering]] - Overkoepelend begrip waar FBD een onderdeel van is
- [[structured-text|Structured Text]] - Tekstuele alternatief voor FBD programmering
- [[human-machine-interface|HMI]] - Interfaces die FBD-geprocesste data visualiseren
- [[supervisory-control-and-data-acquisition|SCADA]] - Systemen die FBD-logica en data gebruiken
- [[modbus|Modbus]] - Communicatieprotocol vaak geïmplementeerd via FBD
- [[manufacturing-execution-system|MES]] - Productiesystemen die FBD-gegenereerde data ontvangen
- [[overall-equipment-effectiveness|OEE]] - KPI's berekend met FBD function blocks
- [[condition-monitoring|Condition Monitoring]] - Monitoring systemen gebaseerd op FBD logica
- [[andon-systeem|Andon System]] - Visuele management systemen gecontroleerd door FBD
- [[computer-aided-manufacturing|CAM]] - CNC-systemen met FBD-gebaseerde machine interfacing

## Bronnen

- IEC 61131-3 - International standard defining Function Block Diagram specifications
- PLCopen - Organization maintaining standard function block libraries
- Siemens TIA Portal - FBD development environment met extensive function block libraries
- Rockwell Studio 5000 - Allen-Bradley FBD implementation met Add-On Instructions
- Schneider Electric Unity Pro - FBD programming voor Modicon PLC platforms
- Codesys - Cross-platform FBD development met simulation capabilities
- Phoenix Contact PC Worx - FBD programming voor PLCnext Technology
- Beckhoff TwinCAT - Advanced FBD programming met real-time debugging

---
← Terug naar [[kaarten/programmatie-en-aansturing-productiemiddelen|Programmatie & Aansturing Productiemiddelen kaart]]
