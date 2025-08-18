---
tags:
  - 'procesoptimalisatie-en-organisatie'
  - '🧹draft'

title: Overall Equipment Effectiveness (OEE)
---
*Overall Equipment Effectiveness (OEE)* is een begrip binnen de industriële digitalisering en procesoptimalisatie & organisatie.

## Definitie

**Overall Equipment Effectiveness (OEE)** is een kernmetriek die de productiviteit van productie-equipment meet door drie cruciale factoren te combineren: Availability (beschikbaarheid), Performance (prestatie) en Quality (kwaliteit). OEE geeft een percentage weer van hoe effectief een machine presteert ten opzichte van zijn theoretische maximum, waarbij 100% betekent dat de machine perfect draait zonder stilstanden, op volledige snelheid en zonder kwaliteitsfouten.

## Kenmerken

- **Availability (Beschikbaarheid)**: Percentage tijd dat equipment operationeel is
  - `Availability = Planned Production Time / Operating Time * 100%`
  - Houdt rekening met geplande en ongeplande stilstanden
- **Performance (Prestatie)**: Snelheid waarmee equipment draait versus ideale snelheid
  - `Performance = (Actual Output / (Operating Time × Ideal Run Rate)) * 100%`
  - Meet snelheidsverlies door kleine stops en trage cycli
- **Quality (Kwaliteit)**: Percentage goede producten van totale output
  - `Quality = Good Output / Total Output * 100%`
  - Meet impact van defecten en herwerk
- **OEE berekening**: `OEE = Availability × Performance × Quality`
- **World-class OEE**: >85% wordt beschouwd als excellent performance
- **Real-time monitoring**: Continue berekening voor directe feedback

## Toepassing

**Metaalindustrie implementatie:**
- **CNC machining**: Monitoring van bewerkingstijd, gereedschapswisselingen en dimensionale kwaliteit
- **Laslijnen**: Availability van lasrobots, lascyclus performance en naadkwaliteit tracking
- **Persen en stansen**: Slagfrequentie monitoring, matrijswissel downtime en defect tracking
- **Oppervlaktebehandeling**: Lijn efficiency, coating snelheid en kwaliteitsconformiteit

**Digitale OEE implementatie:**
- **[[manufacturing-execution-system|MES]] integratie**: Real-time OEE berekening en visualisatie
- **[[historian-database|Historian]]** opslag: Lange-termijn OEE trending en benchmark analyse
- **[[iot-gateway|IoT sensoren]]**: Automatische data verzameling voor nauwkeurige metingen
- **[[kpi-dashboard|Dashboards]]**: Live OEE visualisatie voor operators en management

**Pareto analyse van verliezen:**
- **Availability losses**: Equipment failures, setup/changeover tijd, material shortages
- **Performance losses**: Minor stops, reduced speed operations, startup/yield losses
- **Quality losses**: Defective products, rework requirements, startup rejects

**Continuous improvement:**
- **[[root-cause-analysis|Root cause]]** analyse van OEE bottlenecks
- **[[kaizen|Kaizen]]** projecten gericht op grootste verliesposten
- **[[total-productive-maintenance|TPM]]** implementatie voor availability verbetering

## Gerelateerde begrippen

- [[manufacturing-execution-system|Manufacturing Execution System (MES)]] - Platform voor OEE tracking
- [[total-productive-maintenance|Total Productive Maintenance (TPM)]] - Methodologie voor OEE verbetering
- [[lean-manufacturing|Lean Manufacturing]] - Waste eliminatie voor OEE optimalisatie
- [[six-sigma|Six Sigma]] - Kwaliteitsverbetering voor Quality component
- [[kaizen|Kaizen]] - Continue verbetering van OEE scores
- [[predictive-maintenance|Predictive Maintenance]] - Proactieve availability verbetering
- [[single-minute-exchange-of-die|SMED]] - Setup tijd reductie voor availability
- [[statistical-process-control-software|SPC Software]] - Kwaliteitsmonitoring voor Quality component

## Bronnen

- Seiichi Nakajima - Total Productive Maintenance: Introduction to TPM
- OEE Industry Standard (SEMI E10) - Equipment effectiveness metrics
- Manufacturing Operations Management (MOM) OEE guidelines
- Lean Enterprise Institute - OEE calculation methodology
- International Association of Machinists - OEE best practices
- MESA International - MES and OEE integration standards
- Vorne Industries - OEE calculation and implementation guide

---
← Terug naar [[kaarten/procesoptimalisatie-en-organisatie|Procesoptimalisatie & Organisatie kaart]]
