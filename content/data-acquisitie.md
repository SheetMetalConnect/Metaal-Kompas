---
tags:
  - 'data-collectie-en-industrial-data-platforms'
  - '🧹draft'

title: Data‑acquisitie (DAQ)
---
*Data‑acquisitie (DAQ)* is een begrip binnen de industriële digitalisering en data‑collectie & industrial data platforms.

## Definitie

**Data-acquisitie (DAQ)** is het proces van het verzamelen van analoge en digitale signalen van sensoren en instrumenten, deze omzetten naar digitale vorm en opslaan voor analyse. Het omvat sampling, filtering en conditioning van real-world signalen.

## Kenmerken

- **Multi-channel sampling**: Simultane acquisitie van meerdere sensorsignalen
- **Real-time processing**: Onmiddellijke verwerking voor time-critical applications
- **Signal conditioning**: Filtering, amplificatie en isolatie van ruwe sensorsignalen
- **High-speed sampling**: MHz-range sampling voor snelle procesmonitoring
- **Precisie en nauwkeurigheid**: 16-bit tot 24-bit ADC resolutie voor nauwkeurige metingen
- **Industrial protocols**: Ondersteuning voor [[modbus|Modbus]], [[open-platform-communications-unified-architecture|OPC UA]] en proprietary protocols
- **Data buffering**: Lokale opslag voor datazekerheid bij netwerkuitval
- **Automated calibration**: Self-calibrating systemen voor meetnauwkeurigheid

## Toepassing

**Metaalbewerking en machining:**
- **CNC machine monitoring**: Spindel RPM, feed rates, tool wear en cutting forces
- **Process parameter logging**: Temperatures, pressures en flow rates tijdens bewerking
- **Vibration analysis**: [[condition-monitoring|Conditiebewaking]] van lagers en rotating equipment
- **Surface quality**: Real-time ruwheidsmetingen en dimensional accuracy

**Lasprocessen:**
- **Weld parameter monitoring**: Current, voltage, wire feed speed en travel speed
- **Temperature profiling**: Pre-heat, inter-pass en post-weld heat treatment
- **Arc stability analysis**: Real-time welding quality assessment
- **Joint tracking**: Seam following systemen voor automated welding

**Metaalgieten en smelten:**
- **Furnace monitoring**: Temperature profiling in ovens en smelters
- **Chemical composition**: Real-time spectrographic analysis van molten metal
- **Cooling curve analysis**: Solidification monitoring voor metallurgical control
- **Pressure die casting**: Injection pressure, temperature en cycle time logging

**Industrial IoT integration:**
- **[[industrial-internet-of-things|IIoT]] connectivity**: Sensor data naar [[unified-namespace|UNS]] architectures
- **[[edge-computing|Edge]] processing**: Local analytics en filtering before cloud transmission
- **[[historian-database|Historian]] integration**: Long-term storage voor trend analysis
- **[[manufacturing-execution-system|MES]] feeding**: Real-time process data voor production control

## Gerelateerde begrippen

**Verwante termen:**
- [[sensor-databeheer|Sensor databeheer]] - Management van DAQ sensor networks
- [[machine-datalogging|Machine datalogging]] - Equipment-specific data collection
- [[condition-data-capture|Condition data capture]] - Specialized monitoring applications
- [[realtime-monitoring|Realtime monitoring]] - Live process surveillance systems

**Verwante concepten:**
- [[digitale-signaalverwerking|Digitale signaalverwerking (DSP)]] - Signal processing techniques
- [[edge-analytics|Edge analytics]] - Local data processing en filtering
- [[industrial-internet-of-things|IIoT]] - Connected sensor networks
- [[unified-namespace|Unified Namespace]] - Modern industrial data architecture

## Bronnen

- National Instruments - DAQ hardware en software solutions
- Analog Devices - Industrial data acquisition ICs
- Siemens - Industrial DAQ systems integration
- Rockwell Automation - Factory data collection platforms
- IEC 61131 - Industrial control systems standards
- IEEE 1451 - Smart transducer interface standards
- ISA-95 - Manufacturing data collection architectures

---
← Terug naar [[kaarten/data-collectie-en-industrial-data-platforms|Data‑collectie & Industrial Data Platforms kaart]]
