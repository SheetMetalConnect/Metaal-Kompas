---
tags:
  - 'digitale-transformatie-en-industrie-40-50'
  - '🧹draft'

title: Edge computing
---
*Edge computing* is een begrip binnen de industriële digitalisering en digitale transformatie & industrie 4.0/5.0.

## Definitie

**Edge computing** verplaatst dataverwerking en -opslag dichter bij de bron waar data gegenereerd wordt, in plaats van alles naar centrale datacenters te sturen. Dit vermindert latency, bespaart bandbreedte en enables real-time besluitvorming in industriële omgevingen.

## Kenmerken

- **Lage latentie**: Sub-milliseconde responstijden voor real-time industrial control
- **Lokale processing**: Data verwerking op of nabij de productielocatie
- **Bandbreedte efficiency**: Alleen relevante data naar cloud, gefilterd en geaggregeerd
- **Offline capability**: Functioneert autonoom bij netwerkuitval of connectivity issues
- **Security**: Gevoelige data blijft binnen enterprise boundary
- **Scalabiliteit**: Distributed processing met centralized management
- **Container support**: [[docker-container|Containerized]] applicaties voor consistent deployment
- **Protocol translation**: Conversion tussen industrial protocols en cloud APIs

## Toepassing

**Industriële proces controle:**
- **Real-time control**: PLC-level response times voor safety-critical systemen
- **Quality inspection**: Machine vision processing voor real-time defect detection
- **Predictive maintenance**: Lokale analyse van [[condition-monitoring|sensor data]] zonder cloud dependency
- **Process optimization**: AI/ML models running locally voor immediate adjustments

**Manufacturing execution:**
- **[[manufacturing-execution-system|MES]] edge nodes**: Distributed MES functionality per production line
- **[[overall-equipment-effectiveness|OEE]] calculation**: Real-time efficiency metrics zonder cloud roundtrip
- **Production scheduling**: Lokale scheduling decisions based on real-time constraints
- **Inventory management**: RFID/barcode processing voor immediate stock updates

**Data management en analytics:**
- **[[unified-namespace|UNS]] edge implementation**: Local namespace met selective cloud synchronization
- **Time series processing**: Real-time aggregation van [[historian-database|sensor data]]
- **Event filtering**: Intelligent event processing om cloud traffic te minimaliseren
- **Digital twin sync**: Local twin updates met periodic cloud synchronization

**Connectivity en integratie:**
- **Protocol gateways**: [[open-platform-communications-unified-architecture|OPC UA]] naar [[message-queuing-telemetry-transport|MQTT]] conversion
- **Legacy integration**: Modernization van oude equipment met edge connectivity
- **5G/WiFi 6**: High-bandwidth wireless connectivity voor mobile assets
- **[[iot-gateway|IoT gateways]]**: Aggregation van sensor data voor cloud transmission

## Gerelateerde begrippen

- [[cloud-computing|Cloud Computing]] - Complementary centralized processing
- [[iot-gateway|IoT Gateway]] - Edge device voor sensor data aggregation
- [[industrial-internet-of-things|IIoT]] - Connected industrial devices generating edge data
- [[unified-namespace|Unified Namespace]] - Distributed namespace implementation
- [[docker-container|Docker Container]] - Edge application deployment method
- [[kubernetes|Kubernetes]] - Edge cluster management platform
- [[5g-voor-industriële-toepassingen|5G Industrial]] - High-speed edge connectivity
- [[cybersecurity|Cybersecurity]] - Edge security implementation

## Bronnen

- Linux Foundation Edge (LF Edge) - Open source edge computing
- Eclipse Foundation - Eclipse ioFog edge computing platform
- Microsoft Azure IoT Edge documentation
- AWS IoT Greengrass edge computing service
- Google Cloud IoT Edge solutions
- Industrial Internet Consortium (IIC) edge computing reference
- OpenFog Consortium (now part of IIC) - Edge computing architecture

---
← Terug naar [[digitale-transformatie-en-industrie-40|Digitale transformatie & Industrie 4.0/5.0 kaart]]
