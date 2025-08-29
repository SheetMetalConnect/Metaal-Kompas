---
tags:
  - 'data-analyse-en-business-intelligence'
  - '🧹draft'

title: Grafana dashboards
---

## Definitie

**Grafana** is een visualisatieplatform dat data uit verschillende bronnen omzet in real-time dashboards. Het motto is "Dashboards die mensen echt gebruiken" - eenvoudige, krachtige visualisaties die werkelijk bijdragen aan betere besluitvorming.

## Kenmerken

- **Multi-datasource support**: Verbinding met databases, IoT-sensoren, PLC's via diverse protocollen
- **Real-time visualisatie**: Live updates van productiedata en KPI's
- **Drag-and-drop interface**: Eenvoudig dashboard bouwen zonder programmeerkennis
- **Diverse visualisaties**: Van simpele meters tot complexe heatmaps en grafieken
- **Alert management**: Automatische waarschuwingen bij afwijkende waarden
- **Mobile responsive**: Dashboards die goed werken op tablets en smartphones
- **Open source basis**: Gratis versie met uitgebreide functionaliteit
- **Plugin ecosystem**: Uitbreidbaar met community-developed plugins
- **Template system**: Herbruikbare dashboards voor verschillende machines/lijnen

## Toepassing

**Production monitoring:**
- **OEE tracking**: Overall Equipment Effectiveness in real-time
- **Machine status**: Live status van productiemachines en lijnen
- **Quality metrics**: Defect rates, first-pass yield, quality trends
- **Productivity KPI's**: Output rates, cycle times, efficiency indicators

**Energy management:**
- **Power consumption**: Elektriciteitsverbruik per machine en afdeling
- **Compressed air**: Persluchtverbruik en lekkage detectie
- **Gas usage**: Verbruik van snijgassen en lasgas monitoring
- **Cost tracking**: Energiekosten per product en productielijn

**Maintenance insights:**
- **Equipment health**: Vibratie, temperatuur, en andere conditieparameters
- **Predictive indicators**: Trends die onderhoudsbehoefte voorspellen
- **Maintenance schedules**: Geplande en uitgevoerde onderhoudstaken
- **Spare parts**: Voorraadniveaus van kritische onderdelen

**Werkplaats displays:**
- **Production targets**: Dagelijkse productiedoelen en voortgang
- **Safety metrics**: Aantal dagen zonder ongevallen, near-misses
- **Team performance**: Prestaties per ploeg of afdeling
- **News and announcements**: Bedrijfsinformatie en mededelingen

**Protocol ondersteuning:**
- **OPC-UA**: Directe verbinding met moderne PLC's en SCADA-systemen
- **Modbus**: Koppeling met industriële sensoren en meters
- **MQTT**: IoT device data via lightweight messaging
- **SQL databases**: Historische data uit ERP en MES systemen

**Dashboard design principes:**
- **Keep it simple**: Grote cijfers, duidelijke kleuren, minimale clutter
- **Actionable information**: Data die tot actie leidt, niet alleen informeert
- **Role-based views**: Verschillende dashboards voor operators, managers, technici
- **Mobile first**: Ontwerp dat werkt op alle apparaten

## Gerelateerde begrippen

**Verwante termen:**
- [[business-intelligence|Business Intelligence]] - Bredere categorie waar Grafana dashboards toe behoren
- [[data-visualization|Data visualisatie]] - Core functionaliteit van Grafana
- [[real-time-monitoring|Real-time monitoring]] - Monitoring aanpak ondersteund door Grafana
- [[industrial-internet-of-things|IIoT]] - IoT data vaak gevisualiseerd via Grafana

**Verwante concepten:**
- [[key-performance-indicators|KPI's]] - Metrics die via Grafana dashboards getoond worden
- [[overall-equipment-effectiveness|OEE]] - Belangrijke metric voor Grafana manufacturing dashboards
- [[predictive-maintenance|Predictive maintenance]] - Maintenance strategie ondersteund door Grafana
- [[operational-technology|OT]] - Industrial systems die data leveren aan Grafana

## Bronnen

- Grafana Labs - https://grafana.com
- Grafana OSS (Open Source) - Gratis versie met basis functionaliteit
- Grafana Cloud - Hosted service voor cloud deployments
- Grafana Enterprise - Commercial versie met enterprise features
- Grafana Community - Forums en documentatie van gebruikers
- InfluxDB - Populaire time-series database voor Grafana
- Prometheus - Monitoring en alerting toolkit vaak gebruikt met Grafana
- Sheet Metal Connect - Real-world implementaties in metaalbewerking

---
← Terug naar [[kaarten/data-analyse-en-business-intelligence|Data, Analyse & Business Intelligence kaart]]