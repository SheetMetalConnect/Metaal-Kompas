---
tags:
  - 'programmatie-en-aansturing-productiemiddelen'
  - '🧹draft'

title: Node‑RED automation
---

## Definitie

**Node-RED** is een visuele programmeertool van IBM voor het verbinden van hardware, API's en online services. Bekend als "de stille held van automatisering", maakt het workflow-automatisering mogelijk zonder traditionele programmeerkennis.

## Kenmerken

- **Visual programming**: Drag-and-drop interface met nodes (blokjes) en verbindingen
- **Flow-based development**: Logische workflows bouwen door nodes te verbinden
- **Hardware integration**: Directe verbinding met sensoren, PLC's, Arduino's
- **API connectivity**: Koppeling met web services, databases, cloud platforms
- **Real-time processing**: Live data processing en event-driven automation
- **Browser-based editor**: Ontwikkeling via web interface, geen lokale software
- **Lightweight deployment**: Draait op alles van Raspberry Pi tot enterprise servers
- **Extensive library**: Duizenden community-contributed nodes beschikbaar
- **Debug capabilities**: Visuele debugging en monitoring van data flows

## Toepassing

**Machine integration:**
- **Production triggers**: Laser klaar → trigger in ERP → email naar planning → dashboard update
- **Quality alerts**: Tolerantie overschreden → stop machine → notify supervisor → log incident
- **Maintenance workflows**: Equipment alarm → create work order → schedule technician
- **Data collection**: Sensor data → format conversion → database storage → analytics

**Business process automation:**
- **Order processing**: Order ontvangst → material check → production scheduling → customer notification
- **Inventory management**: Low stock alert → supplier notification → purchase order creation
- **Reporting automation**: Data collection → report generation → email distribution
- **Customer communication**: Production status → order tracking → delivery updates

**System integration:**
- **ERP connectivity**: Production data naar business systems
- **Legacy system bridges**: Oude machines koppelen aan moderne software
- **Protocol translation**: Modbus naar MQTT, OPC-UA naar REST API's
- **Data transformation**: Format conversion tussen verschillende systemen

**IoT orchestration:**
- **Sensor networks**: Draadloze sensoren → data aggregation → cloud storage
- **Edge computing**: Local processing voor real-time decisions
- **Device management**: Remote configuration en monitoring van IoT devices
- **Alert systems**: Threshold monitoring → escalation workflows

**Visual debugging:**
- **Flow visualization**: Zie exact waar data doorheen loopt
- **Real-time monitoring**: Live data bekijken tijdens flow execution
- **Error handling**: Visueel traceren van problemen en oplossingen
- **Performance monitoring**: Bottlenecks identificeren in workflows

**Deployment scenarios:**
- **Edge devices**: Raspberry Pi for local automation tasks
- **Local servers**: Dedicated hardware voor kritieke workflows
- **Cloud deployment**: Scalable processing voor enterprise workflows
- **Hybrid setups**: Combinatie van edge en cloud processing

## Gerelateerde begrippen

**Verwante termen:**
- [[workflow-automation|Workflow automation]] - Proces automatisering via Node-RED
- [[industrial-internet-of-things|IIoT]] - IoT systemen geïntegreerd via Node-RED
- [[api-integration|API integratie]] - Systeem koppelingen via Node-RED flows
- [[edge-computing|Edge computing]] - Local processing ondersteund door Node-RED

**Verwante concepten:**
- [[visual-programming|Visual programming]] - Programmeer paradigma van Node-RED
- [[event-driven-architecture|Event-driven architecture]] - Architectuur patroon in Node-RED
- [[low-code-development|Low-code development]] - Development aanpak zoals Node-RED
- [[system-integration|Systeem integratie]] - Integratie oplossingen via Node-RED

## Bronnen

- Node-RED Official Website - https://nodered.org
- IBM Node-RED - Enterprise support en cloud hosting
- Node-RED Library - Community contributed nodes en flows
- Raspberry Pi Foundation - Hardware platform vaak gebruikt met Node-RED
- Node-RED User Group - Community support en best practices
- GitHub Node-RED - Source code en issue tracking
- YouTube Node-RED Tutorials - Video tutorials voor verschillende toepassingen
- Sheet Metal Connect - Praktische implementaties in manufacturing

---
← Terug naar [[kaarten/programmatie-en-aansturing-productiemiddelen|Programmatie & Aansturing Productiemiddelen kaart]]