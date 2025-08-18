---
tags:
  - 'industriële-communicatieprotocollen'
  - '🧹draft'

title: Modbus
---
*Modbus* is een begrip binnen de industriële digitalisering en industriële communicatieprotocollen.

## Definitie

**Modbus** is een serieel communicatieprotocol dat in 1979 werd ontwikkeld voor industriële automatisering. Het is een simpel, robuust master-slave protocol dat wijdverspreid gebruikt wordt voor communicatie tussen PLC's, sensoren en andere industriële apparaten.

## Kenmerken

- **Master-slave architectuur**: Één master initieert alle communicatie met slave devices
- **Eenvoudige implementatie**: Beperkte functionaliteiten maken het makkelijk te implementeren
- **Robuust protocol**: Bewezen betrouwbaarheid in rauwe industriële omgevingen
- **Open standaard**: Geen licentiekosten, breed ondersteund door leveranciers
- **Multiple transport lagen**: Serial (RS-232, RS-485) en Ethernet (Modbus TCP/IP)
- **Beperkte adresruimte**: Maximaal 247 slave devices op serieel netwerk
- **Deterministisch**: Voorspelbare communicatietijden voor real-time applicaties
- **Legacy support**: Backward compatibiliteit met oudere systemen

## Toepassing

**Industriële automatisering:**
- **PLC communicatie**: Uitwisseling van I/O data tussen [[programmable-logic-controller|PLCs]] en remote modules
- **HMI connectivity**: Operator interfaces die proces data uit PLCs lezen
- **SCADA systemen**: Centrale monitoring van gedistribueerde industriële assets
- **Variable Frequency Drives (VFDs)**: Besturing en monitoring van motoraandrijvingen

**Sensor en actuator netwerken:**
- **Temperature monitoring**: Uitlezen van temperatuursensoren in oven- en koelsystemen
- **Flow measurement**: Debietmeters in proces industrie en water treatment
- **Pressure sensors**: Monitoring van hydraulische en pneumatische systemen
- **Energy meters**: Elektriciteitsmeting en energie monitoring

**Legacy system integration:**
- **Modbus gateways**: Protocol conversie naar moderne systemen zoals [[open-platform-communications-unified-architecture|OPC UA]]
- **[[historian-database|Historian]] connectivity**: Verzameling van proces data voor trending
- **[[manufacturing-execution-system|MES]] integration**: Real-time data uit Modbus devices naar productiesystemen
- **Cloud connectivity**: Modbus naar [[message-queuing-telemetry-transport|MQTT]] conversie voor [[unified-namespace|UNS]] implementaties

**Industriële sectoren:**
- **Metaalbewerking**: CNC machine monitoring en process control
- **Food & beverage**: Temperature en flow control in productieprocessen
- **Water treatment**: Pump control en water quality monitoring
- **Building automation**: HVAC systemen en energie management

## Gerelateerde begrippen

- [[programmable-logic-controller|Programmable Logic Controller (PLC)]] - Primaire Modbus master devices
- [[supervisory-control-and-data-acquisition|SCADA]] - Systemen die Modbus gebruiken voor data acquisitie
- [[human-machine-interface|HMI]] - Operator interfaces met Modbus connectivity
- [[protocol-gateway|Protocol Gateway]] - Conversie tussen Modbus en moderne protocols
- [[open-platform-communications-unified-architecture|OPC UA]] - Moderne vervanger voor Modbus communicatie
- [[message-queuing-telemetry-transport|MQTT]] - IoT protocol voor modernisering van Modbus networks
- [[industrial-ethernet|Industrial Ethernet]] - Network infrastructure voor Modbus TCP/IP
- [[historian-database|Historian Database]] - Time-series opslag voor Modbus data

## Bronnen

- Modbus Organization - Official Modbus specifications
- Modbus Application Protocol Specification V1.1b3
- Modbus over Serial Line Specification and Implementation Guide V1.02
- Modbus TCP/IP Specification and Implementation Guide V1.0b
- IEEE 802.3 Ethernet standards voor Modbus TCP
- Simply Modbus - Implementation guides and tools
- National Instruments - Modbus communication tutorials

---
← Terug naar [[kaarten/industriële-communicatieprotocollen|Industriële communicatieprotocollen kaart]]
