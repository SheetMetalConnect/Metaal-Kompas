---
tags:
  - 'data-collectie-en-industrial-data-platforms'
  - '🧹draft'

title: IoT‑gateway
---
*IoT‑gateway* is een begrip binnen de industriële digitalisering en data‑collectie & industrial data platforms.

## Definitie

**IoT-gateway** is een edge-device dat als intermediaire verbinding fungeert tussen industriële machines, sensoren en netwerken enerzijds en hogere IT-systemen, cloud-platforms of datacollectie-infrastructuur anderzijds. De gateway verzorgt protocol-omzetting, data-aggregatie, lokale processing en beveiligde communicatie voor Industrial Internet of Things implementaties.

## Kenmerken

- **Protocol bridging**: Omzetting tussen industriële protocollen ([[modbus|Modbus]], [[open-platform-communications-unified-architecture|OPC UA]]) en IT-protocols (HTTP, MQTT)
- **Edge processing**: Lokale data filtering, aggregatie en analytics before cloud transmission
- **Security enforcement**: VPN connectivity, certificaat-beheer, encrypted communication
- **Data buffering**: Local storage voor data continuity bij netwerkuitval
- **Device management**: Centralized configuration en firmware updates van connected devices
- **Multiple connectivity**: Ethernet, WiFi, Cellular, LoRaWAN interface support
- **Real-time capability**: Low-latency data forwarding voor time-critical applications
- **Scalability**: Support voor honderden simultaneous device connections

## Toepassing

**Productielijn integratie:**
- **Machine connectivity**: CNC machines, robots, PLC's naar [[manufacturing-execution-system|MES]] systemen
- **Sensor aggregation**: Temperature, pressure, vibration sensors naar [[historian-database|historian]] databases
- **Quality data**: Inspection results, measurement data naar quality management systems
- **Energy monitoring**: Power meters, efficiency calculations naar energy management platforms

**Remote monitoring:**
- **Asset tracking**: Location, status, utilization data van mobile equipment
- **Environmental monitoring**: Factory floor conditions, cleanroom parameters
- **Security systems**: Access control, video surveillance integration
- **Utility monitoring**: Compressed air, cooling water, electrical distribution

**[[industrial-internet-of-things|IIoT]] implementaties:**
- **Cloud connectivity**: Data streaming naar AWS IoT, Azure IoT, Google Cloud IoT
- **Analytics pipeline**: Sensor data naar machine learning platforms voor [[predictive-maintenance|predictive maintenance]]
- **Mobile access**: Smartphone/tablet connectivity voor operator interfaces
- **Supply chain**: RFID, barcode scanner integration voor [[track-en-trace|track & trace]]

**Edge computing:**
- **Local analytics**: Real-time anomaly detection zonder cloud dependency
- **Bandwidth optimization**: Data compression en selective transmission
- **Autonomous operation**: Local decision making bij connectiviteit problemen
- **Latency reduction**: Sub-second response times voor control applications

## Gerelateerde begrippen

**Verwante termen:**
- [[edge-computing|Edge computing]] - Lokale processing capabilities van gateways
- [[industrial-internet-of-things|Industrial IoT]] - Bredere context van connected manufacturing
- [[unified-namespace|Unified Namespace]] - Modern data architecture gebruikt door gateways
- [[data-acquisitie|Data acquisitie (DAQ)]] - Data collection methoden via gateways

**Verwante concepten:**
- [[edge-analytics|Edge analytics]] - Local data processing en machine learning
- [[mqtt-broker|MQTT broker]] - Message routing door IoT gateways
- [[opc-ua-pub-sub|OPC UA Pub/Sub]] - Modern industrial communication protocols
- [[it-ot-convergentie|IT/OT convergentie]] - Bridging van operational en information technology

## Bronnen

- Siemens SIMATIC IoT2050 - Industrial edge gateway platform
- Advantech WISE-PaaS - IoT gateway en edge intelligence solutions
- Moxa UC-8100 - Industrial computing en IoT gateway series
- Dell Edge Gateway 3000 - Industrial IoT edge computing platform
- Cisco IOx - Application hosting voor industrial networking equipment
- HPE Edgeline - Converged edge systems voor IoT applications
- Red Hat Device Edge - Container-based edge computing platform
- Eclipse IoT Working Group - Open source IoT gateway frameworks
- Industrial Internet Consortium - IIoT connectivity standards
- OPC Foundation - OPC UA over TSN voor industrial communication

---
← Terug naar [[kaarten/data-collectie-en-industrial-data-platforms|Data‑collectie & Industrial Data Platforms kaart]]
