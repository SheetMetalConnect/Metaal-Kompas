---
tags:
  - 'programmatie-en-aansturing-productiemiddelen'
  - '🧹draft'

title: G‑code
---
*G‑code* is een begrip binnen de industriële digitalisering en programmatie & aansturing productiemiddelen.

## Definitie

**G-code** (ook wel RS-274D genoemd) is een gestandaardiseerde numerieke programmeertaal die wordt gebruikt voor het aansturen van CNC-machines (Computer Numerical Control). G-code bevat instructies voor bewegingen, snelheden, koelverbruik en andere parameters die nodig zijn voor geautomatiseerde metaalbewerking zoals frezen, draaien, en plasma-snijden.

## Kenmerken

- **Numerieke instructies**: Alfanumerieke codes (G00, M03, etc.) voor machine-commando's
- **Coordinate-based**: Absolute en incrementele coordinaat systemen (X, Y, Z-assen)
- **Feedrate control**: Snelheidscontrole voor verschillende bewerkingen
- **Spindle control**: Spil-bediening voor rotatie en snelheid
- **Coolant management**: Automatische koelvloeistof controle
- **Tool management**: Gereedschapsselectie en -wissel instructies
- **Modal commands**: Commando's blijven actief tot ze worden overschreven
- **Machine-independent**: Universele standaard over verschillende CNC-merken

## Toepassing

**CNC metaalbewerking:**
- **Freesmachines**: 3-assige tot 5-assige bewerking voor complexe geometrieën
- **Draaibanken**: Cilindrische onderdelen en schroefdraad bewerkingen
- **Plasma snijden**: 2D contour snijden van plaatwerk
- **Lasersnijden**: Hoge precisie snijden met automatische focus controle

**CAM integratie:**
- **[[computer-aided-manufacturing|CAM]] post-processing**: Automatische G-code generatie uit 3D-modellen
- **[[cam-postprocessor|Post-processors]]**: Machine-specifieke G-code aanpassingen
- **Simulatie software**: Virtuele verificatie van G-code programma's
- **Optimalisatie tools**: Snelheid en efficiency verbetering van bewerkingspaden

**Productieautomatisering:**
- **[[manufacturing-execution-system|MES]] integratie**: G-code programma's gekoppeld aan werkorders
- **[[digital-twin|Digital twin]]**: Real-time synchronisatie tussen virtuele en fysieke bewerking
- **Kwaliteitscontrole**: Automatische metingen geintegreerd in G-code programma's
- **[[traceerbaarheidssysteem|Batch tracking]]**: Serienummer markering tijdens bewerking

**Specifieke metaalindustrie toepassingen:**
- **Aerospace componenten**: Hoge precisie bewerkingen met toleranties in micrometers
- **Automotive onderdelen**: Volume productie van motor- en transmissie componenten
- **Medische implantaten**: Biocompatibele materiaal bewerking (titaan, RVS)
- **Constructiestaal**: Grote platen bewerken voor [[en-1090-uitvoering-van-staal-en-aluminiumconstructies|EN 1090]] compliance

## Gerelateerde begrippen

- [[computer-aided-manufacturing|CAM]] - Software die G-code genereert uit CAD-modellen
- [[cam-postprocessor|CAM Post-processor]] - Vertaalsoftware voor machine-specifieke G-code
- [[cnc-programmatie|CNC Programmatie]] - Bredere discipline waar G-code onderdeel van is
- [[m-code|M-code]] - Hulpfuncties die samen met G-code worden gebruikt
- [[manufacturing-execution-system|MES]] - Systemen die G-code programma's beheren
- [[computer-aided-design|CAD]] - 3D-modellen die de basis vormen voor G-code
- [[digital-twin|Digital Twin]] - Virtuele representatie die G-code simulatie mogelijk maakt
- [[overall-equipment-effectiveness|OEE]] - KPI's beïnvloed door G-code efficiency
- [[traceerbaarheidssysteem|Traceerbaarheid]] - Product tracking geintegreerd in G-code
- [[kwaliteitsmanagementsysteem|QMS]] - Kwaliteitssystemen met G-code verificatie

## Bronnen

- NIST RS274/NGC G-code Standard
- ISO 6983 - Numerical control of machines - Program format
- EIA-274-D - Gerber file format specifications
- LinuxCNC G-code Reference Manual
- Fanuc G-code Programming Manual
- Haas CNC Programming Workbook
- Mastercam G-code Reference Guide
- NIST Manufacturing Extensions for CAD/CAM Systems

---
← Terug naar [[kaarten/programmatie-en-aansturing-productiemiddelen|Programmatie & Aansturing Productiemiddelen kaart]]
